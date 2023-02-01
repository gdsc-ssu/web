import React from 'react';

type BreadcrumbProps = {
  title: string;
  subTitle: string;
};

const Breadcrumb = ({ title, subTitle }: BreadcrumbProps) => {
  return (
    <section className="breadcrumb_area">
      <div className="container">
        <h3 className="breadcrumb_title">{title}</h3>
        <h5 className="breadcrumb_subTitle">{subTitle}</h5>
      </div>
    </section>
  );
};

export default Breadcrumb;
