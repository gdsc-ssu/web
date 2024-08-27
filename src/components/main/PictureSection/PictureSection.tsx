import { COLORS } from '@/constants/styles';
import * as styles from './PictureSection.css';
import UnderScore from '@/assets/icons/UnderScore.svg';
import Image from 'next/image';
import Character from '@/assets/icons/Character.svg';

interface PictureItemProps {
  image: string;
  text: string;
  degree: string;
  index: number;
}

const PictureItem = ({ image, text, degree, index }: PictureItemProps) => (
  <div
    className={index > 0 ? styles.pictureItem : styles.firstPictureItem}
    style={{ transform: `rotate(${degree})` }}
  >
    <div className={styles.pictureItemTop}>
      <Image
        className={styles.picture}
        src={image}
        alt="activity picture"
        fill
      />
    </div>
    <div className={styles.pictureItemBottom}>
      <span className={`${styles.hipiText} hipi`}>{text}</span>
    </div>
    <div className={styles.pictureItemTape} />
  </div>
);

const PICTURES = [
  {
    image: '/mt.png',
    text: '☆ 2기 MT',
    degree: '-15deg',
  },
  {
    image: '/ideathon.jpeg',
    text: '☆ 2기 아이디어톤',
    degree: '0deg',
  },
  {
    image: '/festival.jpg',
    text: '☆ 1기 Festival',
    degree: '16deg',
  },
  {
    image: '/3rd-mt.jpeg',
    text: '☆ 3기 MT',
    degree: '-2deg',
  },
];

const PictureSection = () => (
  <section className={styles.container}>
    <span className={styles.titleText}>
      <span className={styles.textWithUnderscore}>
        소중한 인연
        <UnderScore
          className={styles.underscoreIcon}
          color={COLORS.primary.yellow}
        />
        <Character
          className={styles.characterIcon}
          color={COLORS.primary.yellow}
        />
      </span>
      과
      <br />
      건강한 커뮤니티를
      <br />
      만듭니다.
    </span>
    <div className={styles.picturesContainer}>
      {PICTURES.map((picture, index) => (
        <PictureItem key={index} {...picture} index={index} />
      ))}
    </div>
  </section>
);

export default PictureSection;
