import { Component, State, Prop } from "@stencil/core";

@Component({
  tag: "store-home",
  styleUrl: "store-home.scss"
})
export class StoreHome {
  @State() isSearching: boolean = false;
  @State() searchQuery: string;

  @Prop({ connect: "ion-router" })
  router: HTMLIonRouterElement;

  componentDidLoad() {}
  render() {
    return (
      <ion-content class="store-home">
        <ion-toolbar>
          <ion-searchbar
            animated
            mode="ios"
            onIonChange={(ev: any) => (this.searchQuery = ev.target.value)}
            onIonCancel={() => {
              this.searchQuery = null;
            }}
            onIonClear={() => {
              this.searchQuery = null;
            }}
          />
        </ion-toolbar>
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
        <div
          hidden={this.searchQuery ? false : true}
          class="search-results-wrapper"
        >
          <div class="header">
            <h3>Search Results</h3>
          </div>
          {this.searchQuery ? (
            <p>searching for {this.searchQuery}</p>
          ) : (
            <p>Please enter a search query</p>
          )}
        </div>
        <div class="store-home-nav">
          <ion-nav />
        </div>
      </ion-content>
    );
  }
}
