import { Component, Prop } from "@stencil/core";

@Component({
  tag: "game-card",
  styleUrl: "game-card.scss"
})
export class GameCard {
  @Prop() game: any;
  render() {
    return this.game ? (
      <div class="game-card">
        <div class="body">
          <img src={this.game.images[0]} alt={this.game.title} />
        </div>
        <div class="footer">
          <p class="game-title">{this.game.title}</p>
          <div class="game-details">
            <span class="game-platform">{this.game.platform}</span>
            <span class="game-price">{this.game.price}</span>
          </div>
        </div>
      </div>
    ) : null;
  }
}
