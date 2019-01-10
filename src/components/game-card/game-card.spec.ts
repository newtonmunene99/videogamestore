import { TestWindow } from '@stencil/core/testing';
import { GameCard } from './game-card';

describe('game-card', () => {
  it('should build', () => {
    expect(new GameCard()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLGameCardElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [GameCard],
        html: '<game-card></game-card>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
