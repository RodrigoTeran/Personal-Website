import styles from './Nav.module.scss'
import wrapperStyles from '@styles/wrappers/wrappers.module.scss'
import Image from '@image'
import { home } from '@routes'
import { youtube, blog } from '@links'
import Link from 'next/link'
import { RightArrow, YouTube, Blog } from '@icon'
import { logo } from '@image-links'
import { useAnimationsScroll } from '@hooks/useAnimationsScroll'
import { useEffect, useRef } from 'react'

interface NavLinkProps {
  href: string
  children: string
  icon: 'youtube' | 'blog'
}

function NavLink({ href, children, icon }: NavLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={styles.nav_content_links_link}
    >
      <div className={styles.nav_content_links_link_text}>
        <RightArrow width={15} />
        <span>{children}</span>
      </div>
      {icon === 'youtube' && (
        <YouTube height={24} className={styles.nav_content_links_link_icon} />
      )}
      {icon === 'blog' && (
        <Blog height={24} className={styles.nav_content_links_link_icon} />
      )}
    </a>
  )
}

export default function Nav() {
  const { animate } = useAnimationsScroll()
  const leftNavRef = useRef<HTMLDivElement | null>(null)
  const rightNavRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    animate({
      componentsList: [
        {
          element: leftNavRef.current,
          screenPercentage: 0.2,
          notAppearClass: styles.notLeftNav,
        },
        {
          element: rightNavRef.current,
          screenPercentage: 0.2,
          notAppearClass: styles.notRightNav,
        },
      ],
    })
  }, [])

  return (
    <nav className={styles.nav}>
      <div className={styles.nav_top}></div>
      <div className={`${styles.nav_content} ${wrapperStyles.wrapper}`}>
        <Link href={home}>
          <div
            ref={leftNavRef}
            className={`${styles.nav_content_logo} ${styles.notLeftNav}`}
          >
            <Image
              src={logo}
              alt="Rodrigo Terán"
              width={60}
              height={60}
              priority
            />
            <div className={styles.nav_content_logo_text}>
              <div>Rodrigo</div>
              <div>Terán</div>
            </div>
          </div>
        </Link>
        <div
          ref={rightNavRef}
          className={`${styles.nav_content_links} ${styles.notRightNav}`}
        >
          <NavLink icon="youtube" href={youtube}>
            YouTube
          </NavLink>
          <NavLink icon="blog" href={blog}>
            Blog
          </NavLink>
        </div>
      </div>
    </nav>
  )
}
