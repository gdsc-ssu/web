import React from 'react';

type LoadmapMenuProps = {
  temp: string;
};

const LoadmapMenu = ({ temp }: LoadmapMenuProps) => {
  return (
    <section className="roadmap_Menu">
      <div className="container">
        <h3 className="roadmap_Menu_title">{temp}</h3>
      </div>
    </section>
  );
};

export default LoadmapMenu;
