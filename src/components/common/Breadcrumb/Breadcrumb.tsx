import React from 'react';
import * as styles from './breadcrumb.css';

type BreadcrumbProps = {
  title: string;
  subTitle: string;
};

const Breadcrumb = ({ title, subTitle }: BreadcrumbProps) => {
  return (
    <section className="breadcrumb_area">
      <div className={styles.breadcrumb['box']}>
        <h3 className={styles.breadcrumb['title']}>{title}</h3>
        <h5 className={styles.breadcrumb['subtitle']}>{subTitle}</h5>
      </div>
    </section>
  );
};

export default Breadcrumb;
