import styles from '@/styles/sectionsStyles/LandingSection.module.css'

export default function LandingSection() {
    return (
        <section id="home" className={styles.home}>
            <h1 className={styles.smallheading}>Hi! My name is</h1>
            <h1 className={styles.bigheading}>Karnail Singh Choudhary.</h1>
            <h1 className={styles.bigheadingh2}>I make art out of code.</h1>
            <p className={styles.description}>
            I'm a student and a web development enthusiast. Currently, I'm focused on building accessible, interactive, responsive digital experiences. I'm from India.
            </p>
            <div className={styles.btn}>
                <a href="#project" className={styles.btn}><span>Check out my projects!</span></a>
            </div>
        </section>
    )
}