import * as styles from './MainSection.css';

interface MainSectionProps {
  children: React.ReactNode;
  reverse?: boolean;
}

const MainSection = ({ children, reverse }: MainSectionProps) => {
  const direction = reverse ? 'reverse' : 'default';
  return <div className={styles.wrapper[direction]}>{children}</div>;
};

export default MainSection;
