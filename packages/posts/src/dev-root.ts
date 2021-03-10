import { registerApplication, start } from 'single-spa';

registerApplication(
  'posts',
  // @ts-ignore
  () => import('./index'),
  (location) => true,
);

start();