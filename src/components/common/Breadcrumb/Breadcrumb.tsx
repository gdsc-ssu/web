import React from 'react';
import * as styles from './breadcrumb.css';

type BreadcrumbProps = {
  title: string;
  subTitle: string;
};

const Breadcrumb = ({ title, subTitle }: BreadcrumbProps) => {
  return (
    <section className="breadcrumb_area">
      <div className={styles.container}>
        <h3 className={styles.breadcrumb_title}>{title}</h3>
        <h5 className={styles.breadcrumb_subTitle}>{subTitle}</h5>
      </div>
    </section>
  );
};

export default Breadcrumb;
