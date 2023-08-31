import * as styles from './SectionWrapper.css';

interface SectionWrapperProps {
  children: React.ReactNode;
  reverse?: boolean;
  className?: string;
}

const SectionWrapper = ({
  children,
  reverse,
  className,
}: SectionWrapperProps) => {
  const direction = reverse ? 'reverse' : 'default';
  return (
    <div
      className={`${styles.wrapper[direction]}${
        className ? ` ${className}` : ''
      }`}
    >
      {children}
    </div>
  );
};

export default SectionWrapper;
