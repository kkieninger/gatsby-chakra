import React, { FC, PropsWithChildren } from 'react';

const TechIconWrap: FC<PropsWithChildren<{ title: string }>> = ({ children, title }) => {

  return (
    <span>
      {children}
      <span>
        {title}
      </span>
    </span>
  );
};

export default TechIconWrap;
