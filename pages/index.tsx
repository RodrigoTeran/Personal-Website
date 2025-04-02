import Header from '@layouts/Header/Header'
import AboutMe from '@layouts/AboutMe/AboutMe'
import MyCareer from '@layouts/MyCareer/MyCareer'
import Entrepreneurship from '@layouts/Entrepreneurship/Entrepreneurship'
import ContentCreation from '@layouts/ContentCreation/ContentCreation'
import ContactMe from '@layouts/ContactMe/ContactMe'

export default function Home() {
  return (
    <>
      <Header />
      <AboutMe />
      <MyCareer />
      <Entrepreneurship />
      <ContentCreation />
      <ContactMe />
    </>
  )
}
