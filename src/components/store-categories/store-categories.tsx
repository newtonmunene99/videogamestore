import { Component, Prop } from "@stencil/core";

@Component({
  tag: "store-categories",
  styleUrl: "store-categories.scss"
})
export class StoreCategories {
  @Prop({ connect: "ion-router" })
  router: HTMLIonRouterElement;
  render() {
    return (
      <ion-content>
        <ion-toolbar>
          <ion-segment
            scrollable
            onIonChange={ev => {
              this.router.componentOnReady().then(rt => {
                rt.push("/store/" + ev.detail.value);
              });
            }}
          >
            <ion-segment-button value="featured" checked>
              <ion-label>FEATURED</ion-label>
            </ion-segment-button>
            <ion-segment-button value="ps4">
              <ion-label>PS4</ion-label>
            </ion-segment-button>
            <ion-segment-button value="ps3">
              <ion-label>PS3</ion-label>
            </ion-segment-button>
            <ion-segment-button value="pc">
              <ion-label>PC</ion-label>
            </ion-segment-button>
            <ion-segment-button value="psvita">
              <ion-label>PSVITA</ion-label>
            </ion-segment-button>
            <ion-segment-button value="mac">
              <ion-label>MAC</ion-label>
            </ion-segment-button>
          </ion-segment>
        </ion-toolbar>
        <div class="game-cards">
          <game-card
            game={{
              title: "Fifa 2019",
              price: "60$",
              platform: "PS4",
              images: ["../../assets/images/fifa.jpg"]
            }}
          />
          <game-card
            game={{
              title: "Call Of Duty: Modern Warfare",
              price: "60$",
              platform: "PS4",
              images: ["../../assets/images/cod.jpg"]
            }}
          />
          <game-card
            game={{
              title: "Need For Speed Payback",
              price: "60$",
              platform: "PS4",
              images: ["../../assets/images/nfsp.jpg"]
            }}
          />
          <game-card
            game={{
              title: "Red Dead Redemption 2",
              price: "60$",
              platform: "PS4",
              images: ["../../assets/images/rdr2.jpeg"]
            }}
          />
        </div>
      </ion-content>
    );
  }
}
