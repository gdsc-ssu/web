import React from 'react';

type NavMenuProps = {
  temp: string;
};

const Nav = ({ temp }: NavMenuProps) => {
  return (
    <>
      <h3>{temp}</h3>
    </>
  );
};

export default Nav;
