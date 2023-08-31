import * as styles from './HeroSection.css';
import Logo from '@/assets/icons/Logo.svg';

const HeroSection = () => (
  <section className={styles.container}>
    <Logo className={styles.logo} />
    <p className={styles.titleText}>
      <span className={styles.titleGrayText}>
        Google
        <br />
        Developer
        <br />
        Student
        <br />
        Clubs
        <br />
      </span>
      Soongsil
      <br />
      University
    </p>
  </section>
);

export default HeroSection;
