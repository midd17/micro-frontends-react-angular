import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import rootComponent from './components/Navigation/Navigation';

const lifecycles = singleSpaReact({ React, ReactDOM, rootComponent });

export const { bootstrap, mount, unmount } = lifecycles;