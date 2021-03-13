import { registerApplication, start } from 'single-spa';

const testMenuItems = [
  {
    path: '/',
    label: 'Home'
  },
  {
    path: '/mf-1',
    label: 'Microfronend #1',
  },
  {
    path: '/mf-2',
    label: 'Microfronend #2',
  },
];

registerApplication(
  'root',
  // @ts-ignore
  () => import('./src/index'),
  (location) => true,
  { items: testMenuItems }
);

start();