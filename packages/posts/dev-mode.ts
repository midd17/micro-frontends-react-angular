import { registerApplication, start } from 'single-spa';

registerApplication(
  'root',
  // @ts-ignore
  () => import('./src/index'),
  (location) => true,
);

start();