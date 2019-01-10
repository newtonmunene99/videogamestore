import { Component } from "@stencil/core";

@Component({
  tag: "store-categories",
  styleUrl: "store-categories.scss"
})
export class StoreCategories {
  render() {
    return (
      <ion-content>
        <div class="game-cards">
          <game-card
            game={{
              title: "PS4",
              price: "60$",
              images: ["../../assets/images/fifa.jpg"]
            }}
          />
          <game-card
            game={{
              title: "PS4",
              price: "60$",
              images: ["../../assets/images/cod.jpg"]
            }}
          />
          <game-card
            game={{
              title: "PS4",
              price: "60$",
              images: ["../../assets/images/nfsp.jpg"]
            }}
          />
          <game-card
            game={{
              title: "PS4",
              price: "60$",
              images: ["../../assets/images/rdr2.jpeg"]
            }}
          />
        </div>
      </ion-content>
    );
  }
}
