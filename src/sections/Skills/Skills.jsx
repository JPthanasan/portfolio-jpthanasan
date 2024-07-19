import styles from './SkillsStyles.module.css'
import checkMarkIcon from '../../assets/checkmark-dark.svg'
import SkillList from '../../common/SkillList'

function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <h1>Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="HTML"/>
        <SkillList src={checkMarkIcon} skill="CSS"/>
        <SkillList src={checkMarkIcon} skill="Javascript"/>
        <SkillList src={checkMarkIcon} skill="Node.js"/>
        <SkillList src={checkMarkIcon} skill="Express.js"/>
        <SkillList src={checkMarkIcon} skill="C#"/>
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="React"/>
        <SkillList src={checkMarkIcon} skill="Tailwind CSS"/>
        <SkillList src={checkMarkIcon} skill="Flutter"/>
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Git"/>
        <SkillList src={checkMarkIcon} skill="SQL"/>
        <SkillList src={checkMarkIcon} skill="Firebase"/>
        <SkillList src={checkMarkIcon} skill="MongoDB"/>
      </div>
      <hr />
    </section>
  )
}

export default Skills
