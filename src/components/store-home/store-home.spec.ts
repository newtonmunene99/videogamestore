import { TestWindow } from '@stencil/core/testing';
import { StoreHome } from './store-home';

describe('store-home', () => {
  it('should build', () => {
    expect(new StoreHome()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLStoreHomeElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [StoreHome],
        html: '<store-home></store-home>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
