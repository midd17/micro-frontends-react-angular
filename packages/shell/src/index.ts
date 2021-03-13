import { registerApplication, start } from 'single-spa';

// Load root framework for the header since it's always present
import 'react';
import 'react-dom';

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
  () => {
    import('./preload');
    return import('./home');
  },
  (location) => location.pathname === '/',
);

registerApplication(
  'posts',
  // @ts-ignore
  () => import('posts'),
  (location) => location.pathname === '/posts',
);


start();
