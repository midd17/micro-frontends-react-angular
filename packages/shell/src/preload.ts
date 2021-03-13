// Pre-load heavy Angular stuff
(() => {
  import(/* webpackPrefetch: true */ '../../../node_modules/@angular/core');
  import(/* webpackPrefetch: true */ '../../../node_modules/@angular/platform-browser-dynamic');
  import(/* webpackPrefetch: true */ '../../../node_modules/@angular/platform-browser');
});

export default {};