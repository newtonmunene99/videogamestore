import { TestWindow } from '@stencil/core/testing';
import { StoreCategories } from './store-categories';

describe('store-categories', () => {
  it('should build', () => {
    expect(new StoreCategories()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLStoreCategoriesElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [StoreCategories],
        html: '<store-categories></store-categories>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
