import { ReactNode } from 'react';
import * as styles from './Slider.css';
import Image from 'next/image';
import Link from 'next/link';

interface SeminarItemProps {
  youtubeVideoId: string;
}

export const SeminarItem = ({ youtubeVideoId }: SeminarItemProps) => {
  const thumbnailUrl = `https://img.youtube.com/vi/${youtubeVideoId}/0.jpg`;
  const youtubeUrl = `https://www.youtube.com/watch?v=${youtubeVideoId}`;

  return (
    <Link href={youtubeUrl} target="_blank" rel="noreferrer noopener">
      <div className={styles.seminarContainer}>
        <Image
          src={thumbnailUrl}
          alt="seminar youtube thumbnail"
          fill
          className={styles.seminarImage}
        />
      </div>
    </Link>
  );
};

interface StudyItemProps {
  title: string;
  description: string;
  thumbnail: string;
  tags?: string[];
  url?: string;
}

export const StudyItem = ({
  title,
  description,
  thumbnail,
  tags,
  url,
}: StudyItemProps) => {
  const innerJSX = (
    <div className={styles.studyContainer}>
      <div className={styles.studyTopArea}>
        <Image
          src={thumbnail}
          alt="study or project thumbnail"
          fill
          className={styles.studyImage}
        />
        <div className={styles.studyImageFilter} />
        {tags && tags.length > 0 && (
          <div className={styles.studyTagsContainer}>
            {tags.map((tag, index) => (
              <div key={index} className={styles.studyTag}>
                <span className={styles.studyTagText}>{tag}</span>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className={styles.studyBottomArea}>
        <span className={styles.studyTitleText}>{title}</span>
        <span className={styles.studyDescriptionText}>{description}</span>
      </div>
    </div>
  );

  return url ? (
    <Link href={url} target="_blank" rel="noreferrer noopener">
      {innerJSX}
    </Link>
  ) : (
    innerJSX
  );
};

interface EventItemProps {
  image: string;
  url: string;
  imageAlign?: 'center' | 'bottom' | 'top';
}

export const EventItem = ({ image, url, imageAlign }: EventItemProps) => (
  <Link href={url} target="_blank" rel="noreferrer noopener">
    <div className={styles.eventContainer}>
      <Image
        src={image}
        alt="event thumbnail"
        className={styles.eventImage}
        style={{ objectPosition: imageAlign ?? 'center' }}
        fill
      />
    </div>
  </Link>
);
