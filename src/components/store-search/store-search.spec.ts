import { TestWindow } from '@stencil/core/testing';
import { StoreSearch } from './store-search';

describe('store-search', () => {
  it('should build', () => {
    expect(new StoreSearch()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLStoreSearchElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [StoreSearch],
        html: '<store-search></store-search>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
