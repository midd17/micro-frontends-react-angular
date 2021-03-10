import React, { useCallback } from 'react';
import './Navigation.scss';

export default (props) => {
  const navigateTo = useCallback((event) => {
    event.preventDefault();
    history.pushState(null, null, event.target.href);
  }, []);

  return (
    <header className="nav-bar">
      <div className="container">
        {props.items.map(item => 
          <a href={item.path} className="nav-bar__item" key={item.path} onClick={navigateTo}>
            {item.label}
          </a>
        )}
      </div>
    </header>
  );
};