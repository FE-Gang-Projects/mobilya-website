import React from 'react';

interface SimpleLayoutProps {
  title: string;
  text: string;
  children: React.ReactNode;
}

const SimpleLayout = ({ title, text, children }: SimpleLayoutProps) => {
  return (
    <div className="simple-layout-container">
      <div className="simple-layout">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
      <div className="simple-layout-asset-container">{children}</div>
    </div>
  );
};

export default SimpleLayout;
