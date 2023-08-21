import * as styles from './SectionWrapper.css';

interface SectionWrapperProps {
  children: React.ReactNode;
  reverse?: boolean;
}

const SectionWrapper = ({ children, reverse }: SectionWrapperProps) => {
  const direction = reverse ? 'reverse' : 'default';
  return <div className={styles.wrapper[direction]}>{children}</div>;
};

export default SectionWrapper;
