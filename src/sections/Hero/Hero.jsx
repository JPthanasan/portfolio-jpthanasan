import styles from './HeroStyles.module.css'
import profilePic from "../../assets/Me.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/CV_Thanasan-Sengjaroen.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={profilePic} alt="Profile Picture" />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Thanasan
          <br />
          Sengjaroen
        </h1>
        <h2>Frontend Developer</h2>
        <span>
          <a href="https://github.com/JPthanasan" target="_blank">
            <img src={githubIcon} alt="Link to GitHub Profile" />
          </a>
          <a href="https://linkedin.com/" target="_blank">
            <img src={linkedinIcon} alt="Link to Linkedin Profile" />
          </a>
        </span>
        <p>
          Developer with experience in web and mobile application development,
          backend and frontend programming, database management, and API
          integration.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
