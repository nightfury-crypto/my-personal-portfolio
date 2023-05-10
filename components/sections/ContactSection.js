import styles from "@/styles/sectionsStyles/ContactSection.module.css"

export default function ContactMe() {
    return (
        <section id="contact" className={styles.contact}>
            <div className={styles.contacttop}>
                <h1 className={styles.contactheading}>Get In Touch.</h1>
                <p className={styles.contactsubheading}>I'm currently looking for new opportunities. My inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
                <div className={styles.contactbtn}>
                    <a href="mailto:pradhankarnail@gmail.com" ><span>Let's Talk!</span></a>
                </div>
                </div>

                <footer className={styles.footer}>
                    <div className={styles.top}>
                        <h1>Built by <span>Karnail Singh Choudhary</span>.</h1>
                    </div>
                </footer>

        </section>
    )
}