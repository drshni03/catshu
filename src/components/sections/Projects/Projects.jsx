import SectionTitle from "../../ui/SectionTitle/SectionTitle";
import styles from "./Projects.module.css";

import gestureImg from "../../../assets/images/gesturespeechpic.png";
import vrImg from "../../../assets/images/VRinteraction.png";
import aetherImg from "../../../assets/images/aether-x1.png";
import babelImg from "../../../assets/images/babelcity.png";

const projects = [
  {
    number: "01",
    title: "Gesture & Speech Interaction",
    description:
      "An interactive Unity application integrating gesture recognition and speech interaction to create a more natural user experience.",
    tech: ["Unity", "C#", "Leap Motion"],
    image: gestureImg,
    link: "https://youtu.be/CUp424wM50c",
  },

  {
    number: "02",
    title: "VR Interaction Development",
    description:
      "A virtual reality application featuring immersive object interaction using Unity XR Interaction Toolkit.",
    tech: ["Unity", "XR Toolkit", "C#"],
    image: vrImg,
    link: "https://youtu.be/MXenhozHGOE",
  },

  {
    number: "03",
    title: "AETHER-X1",
    description:
      "A responsive 3D landing page for the AETHER X1 smartphone, built with React, Vite, React Three Fiber, and Three.js.",
    tech: ["React", "React.js", "React Three Fiber", "JavaScript", "HTML", "CSS"],
    image: aetherImg,
    link: "https://aether-x1-five.vercel.app/",
  },

  {
  number: "04",
  title: "BabelCity",
  description:
    "A multiplayer metaverse for language learning built in Unity, featuring AI-powered NPCs, interactive cultural districts, and performance optimization for a smooth learning experience.",
  tech: [
    "Unity",
    "C#",
    "Convai AI",
    "Photon",
    "Blender"
  ],
  image: babelImg,
},
];

export default function Projects() {
  return (
    <section className={styles.projects} id="projects">
      <SectionTitle
        tag="Projects"
        title="Things I've Built."
        subtitle="A selection of projects I've enjoyed building over the past few years."
      />

      <div className={styles.grid}>
        {projects.map((project) => (
          <div className={styles.card} key={project.number}>
            <div className={styles.image}>
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className={styles.projectImage}
                />
              ) : (
                <span>Coming Soon</span>
              )}
            </div>

            <span className={styles.number}>{project.number}</span>

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className={styles.tech}>
              {project.tech.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>

            <a
  href={project.link}
  target="_blank"
  rel="noopener noreferrer"
  className={styles.projectButton}
>
  View Project →
</a>
          </div>
        ))}
      </div>
    </section>
  );
}