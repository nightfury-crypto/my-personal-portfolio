import styles from "@/styles/sectionsStyles/ProjectSection.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  FiLinkedin,
  FiGithub,
  FiTwitter,
  FiInstagram,
  FiExternalLink,
} from "react-icons/fi";

export default function ProjectSection() {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 940) {
        setIsMobile(true)
      } else {
        setIsMobile(false)
      }
    }
  }, [])

  if (typeof window !== "undefined") {
    window.addEventListener('resize', () => {
      if (window.innerWidth < 940) {
        setIsMobile(true)
      } else {
        setIsMobile(false)
      }
    })
  }
  const projects = [
    {
      id: 1,
      name: "Spotify Clone",
      category: "Featured Project",
      description:
        "This is my portfolio website. I built this website using NextJs and TailwindCSS. I used NextJs for server side rendering and TailwindCSS for styling.",
      tags: ["NextJS", "NextAuth", "Spotify Api", "Material UI", "Netlify"],
      image: "/images/spotify.jpg",
      codesrc: "",
    },

    {
      id: 2,
      name: "Resume Builder",
      category: "Featured Project",
      description:
        "This is my portfolio website. I built this website using NextJs and TailwindCSS. I used NextJs for server side rendering and TailwindCSS for styling.",
      tags: ["NextJS", "NextAuth", "Spotify Api", "Material UI", "Netlify"],
      image: "/images/resumebuilder.png",
      codesrc: "",
    },

    {
      id: 3,
      name: "Here Bio",
      category: "Featured Project",
      description:
        "This is my portfolio website. I built this website using NextJs and TailwindCSS. I used NextJs for server side rendering and TailwindCSS for styling.",
      tags: ["NextJS", "NextAuth", "Material UI", "Netlify"],
      image: "/images/herebio.png",
      codesrc: "",
    },
  ];

  const handlehover = ({key}) => {
    projects.map((project) => {
      if (key === project.id && isMobile) {
        console.log(key)
      }
    })
  }

  return (
    <section id="project" className={styles.project} >
      <div className={styles.projecttop}>
        <h1 className={styles.projectheading}>Some Things I've Built.</h1>
      </div>

      <ul className={styles.projectlist}>
        {projects?.map((projectdata) => (
          <li className={styles.projectlistitem} key={projectdata.id} onClick={() => handlehover({key: projectdata?.id})}>
            <div className={styles.projectlistitem_left}>
              <img
                src={projectdata?.image}
                alt={projectdata?.name}
              />
              <div className={styles.justoverlay}></div>
            </div>

            <div className={styles.projectlistitem_right}>
              <h3 className={styles.projectcategory}>Featured Project</h3>
              <h1 className={styles.projectname}>{projectdata?.name}</h1>
              <div className={styles.projectdescription}>
                <p>{projectdata?.description}</p>
              </div>
              <ul className={styles.tags}>
                {projectdata?.tags?.map((tag) => (
                  <li>{tag}</li>
                ))}
              </ul>
              <div className={styles.links}>
                <a href={projectdata?.codesrc} target="_blank">
                  <FiGithub />
                </a>
                <a href={projectdata?.codesrc} target="_blank">
                  <FiExternalLink />
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
