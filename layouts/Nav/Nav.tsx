import styles from './Nav.module.scss'
import wrapperStyles from '@styles/wrappers/wrappers.module.scss'
import Image from '@image'
import { home } from '@routes'
import { youtube, blog } from '@links'
import Link from 'next/link'
import { RightArrow, YouTube, Blog } from '@icon'

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
  return (
    <nav className={styles.nav}>
      <div className={styles.nav_top}></div>
      <div className={`${styles.nav_content} ${wrapperStyles.wrapper}`}>
        <Link href={home}>
          <div className={styles.nav_content_logo}>
            <Image
              src={'/images/logo.png'}
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
        <div className={styles.nav_content_links}>
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
