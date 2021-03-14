import React from 'react';
import './MainLayout.scss';

interface MainLayoutProps {
  children: any;
}

export const MainLayout = (props: MainLayoutProps) => {
  return (
    <main className="container">
      <div className="row">
        {props.children}
      </div>
    </main>
  )
}