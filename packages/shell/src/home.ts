import singleSpaHtml from 'single-spa-html';

const lifecycles = singleSpaHtml({
  template: '<h1>Welcome to Micro Frontends!</h1>',
});

export const { bootstrap, mount, unmount } = lifecycles;