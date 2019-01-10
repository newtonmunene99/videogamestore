import { Component, Prop } from "@stencil/core";

@Component({
  tag: "game-card",
  styleUrl: "game-card.scss"
})
export class GameCard {
  @Prop() game: any;
  render() {
    return (
      <div class="game-card">
        <ion-grid>
          <ion-row>
            <ion-col>
              <div class="header">
                <ion-icon name="heart" />
              </div>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col>
              <div class="body">
                <img src={this.game.images[0]} alt={this.game.title} />
              </div>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col>
              <div class="footer">
                <p>{this.game.title}</p>
                <p>{this.game.price}</p>
              </div>
            </ion-col>
          </ion-row>
        </ion-grid>
      </div>
    );
  }
}
