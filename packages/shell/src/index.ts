import { registerApplication, start } from 'single-spa';

// Load root framework for the header since it's always present
import 'react';
import 'react-dom';

// Some examples of pre-loading the package  
(() => {
  import(/* webpackPreload: true */ '@angular/core');
  import(/* webpackPreload: true */ '@angular/common');
});

// Load root css
import './styles.css';

const items = [
  {
    path: '/',
    label: 'Home'
  },
  {
    path: '/posts',
    label: 'Posts'
  },
];

registerApplication(
  'header',
  // @ts-ignore
  () => import('navigation'),
  () => true,
  { items }
);

registerApplication(
  'home',
  // @ts-ignore
  () => import('./home'),
  (location) => location.pathname === '/',
);

registerApplication(
  'posts',
  // @ts-ignore
  () => import('posts'),
  (location) => location.pathname === '/posts',
);


start();
