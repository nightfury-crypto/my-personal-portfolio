import Header from '@/components/HeaderComponent'
import LandingSection from '@/components/sections/LandingSection'
import AboutSection from '@/components/sections/AboutSection'
import styles from '@/styles/Home.module.css'
import ProjectSection from '@/components/sections/ProjectSection'
import ContactMe from '@/components/sections/ContactSection'

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <LandingSection />
        <AboutSection />
        <ProjectSection />
        <ContactMe />
      </main>
    </div>
  )
}
