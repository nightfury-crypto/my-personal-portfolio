import styles from "@/styles/sectionsStyles/AboutSection.module.css";
import Image from "next/image";

export default function BoutSection() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.about__top}>
        <h1>About Me...</h1>
      </div>
      <div className={styles.about__bottom}>
        <div className={styles.about__bottom__left}>
          <p>
            Hello! My name is <a>Karnail Singh Choudhary</a> and I am a self
            taught web developer with a passion for creating unique,
            visually-striking websites and digital experiences. I enjoy creating
            things that live on the internet. I'm a <a>biotechnology</a> student
            but because of my interest in web development, I have been learning
            web development for the past 1 year.
          </p>
          <p>
            I'm pursuing my bachelors degree in Biotechnology from
            <a> Chandigarh University </a>.
          </p>

          <p className={styles.lastpara}>
            Here are a few technologies I've been working with recently or I'm
            familiar with :-
          </p>
          <ul className={styles.skillslist}>
            <li>HTML</li>
            <li>CSS</li>
            <li>ReactJs</li>
            <li>Git & Github</li>
            <li>NextJs</li>
            <li>JavaScript (ES6+)</li>
            <li>Python</li>
            <li>Firebase</li>
          </ul>
        </div>
        <div className={styles.about__bottom__right}>
          <Image src="/images/k6.png" alt="hero" width={350} height={350} />
        </div>
      </div>
    </section>
  );
}
