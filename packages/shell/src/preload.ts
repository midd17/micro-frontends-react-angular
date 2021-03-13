// Pre-load heavy Angular stuff
// Relative paths are being used to bypass the Webpack limitations regarding shared libs
(() => {
  import(/* webpackPrefetch: true */ '../../../node_modules/@angular/core');
  import(/* webpackPrefetch: true */ '../../../node_modules/@angular/common');
  import(/* webpackPrefetch: true */ '../../../node_modules/@angular/platform-browser-dynamic');
  import(/* webpackPrefetch: true */ '../../../node_modules/@angular/platform-browser');
});

export default {};