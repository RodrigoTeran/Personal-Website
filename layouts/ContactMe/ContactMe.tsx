import useTranslation from 'next-translate/useTranslation'
import styles from './ContactMe.module.scss'
import { useContext, useEffect, useRef, useState } from 'react'
import emailJs from 'emailjs-com'
import InputText from '@components/Input/Input'
import Button from '@components/Button/Button'
import Title from '@components/SectionTitle/SectionTitle'
import Loader from './Loader/Loader';
import { AppContext } from '@app'
import { useAnimationsScroll } from '@hooks/useAnimationsScroll'

interface IMsgInfo {
  status: 'danger' | 'success';
  text: string;
}

const Card = () => {
  const { refsDispatch } = useContext(AppContext)
  const contactMeRef = useRef<HTMLDivElement | null>(null)

  const { t } = useTranslation('contact')

  const [nameClient, setNameClient] = useState<string>('')
  const [emailClient, setEmailClient] = useState<string>('')
  const [subjectClient, setSubjectClient] = useState<string>('')
  const [msgClient, setMsgClient] = useState<string>('')
  
  const [msgInfo, setMsgInfo] = useState<IMsgInfo | null>(null)

  const [isLoading, setIsLoading] = useState<boolean>(false)

  const isDataValidated = (): boolean => {
    return (
      nameClient.trim() != '' &&
      emailClient.trim() != '' &&
      subjectClient.trim() != '' &&
      msgClient.trim() != ''
    )
  }

  useEffect(() => {
    refsDispatch({
      type: 'action-add-ref',
      payload: {
        key: 'contact-me',
        ref: contactMeRef,
      },
    })
  }, [])

  const submit = (event: any) => {
    event.preventDefault()
    setIsLoading(true)
    if (isDataValidated()) {
      // EmailJs
      /**
       * name
       * email
       * subject
       * msg
       */
      emailJs
        .sendForm(
          process.env.SERVICE_ID,
          process.env.TEMPLATE_ID,
          event.target,
          process.env.USER_ID
        )
        .then(
          (_result: any) => {
            // Cool
            setIsLoading(false)

            setMsgInfo({
              text: t('send-sucess'),
              status: 'success'
            });

            setNameClient('')
            setEmailClient('')
            setSubjectClient('')
            setMsgClient('')
          },
          (error: any) => {
            // Error
            setIsLoading(false)
            console.error(error)

            setMsgInfo({
              text: t('send-bad'),
              status: 'danger'
            });
          }
        )
    } else {
      setIsLoading(false)
    }
  }

  const { animate } = useAnimationsScroll()

  const contactLeftRef = useRef<HTMLDivElement | null>(null)
  const contactRightRef = useRef<HTMLDivElement | null>(null)
  const contactTitleRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    animate({
      componentsList: [
        {
          element: contactLeftRef.current,
          screenPercentage: 0.3,
          notAppearClass: styles.notVisibleLeft,
        },
        {
          element: contactRightRef.current,
          screenPercentage: 0.3,
          notAppearClass: styles.notVisibleRight,
        },
        {
          element: contactTitleRef.current,
          screenPercentage: 0.5,
          notAppearClass: styles.notVisibleUp,
        },
      ],
    })
  }, [])

  return (
    <div ref={contactMeRef}>
      <div className={`${styles.notVisibleUp} ${styles.title_section}`} ref={contactTitleRef}>
        <Title orientation='right'>{t('header-title')}</Title>
      </div>
      <div className={styles.primary_wrapper}>
        <div className={`${styles.left_title} ${styles.notVisibleLeft}`} ref={contactLeftRef}>
          {t('title')}
        </div>
        <div className={`${styles.card} ${styles.notVisibleRight}`} ref={contactRightRef}>
          {isLoading && (
            <div className={styles.card_loader}>
              <Loader />
            </div>
          )}
          <div className={styles.card_title}>{t('card-1')}&nbsp;🚀</div>
          <form onSubmit={submit}>
            <InputText
              text={t('card-2')}
              value={nameClient}
              setValue={setNameClient}
              id='name-client'
              name='name'
              type='text'
            />
            <InputText
              text={t('card-3')}
              value={emailClient}
              setValue={setEmailClient}
              id='email-client'
              name='email'
              type='email'
            />
            <InputText
              text={t('card-4')}
              value={subjectClient}
              setValue={setSubjectClient}
              id='subject-client'
              name='subject'
              type='text'
            />
            <InputText
              text={t('card-5')}
              value={msgClient}
              setValue={setMsgClient}
              id='msg-client'
              name='msg'
              type='text'
              isTextarea
            />
            <Button className={styles.btn_card} text={t('card-6')} />
            {msgInfo !== null && (
              <div className={`${styles.info_text} ${styles[`info_text_${msgInfo.status}`]}`}>
                {msgInfo.text}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Card
