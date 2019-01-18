import { Component, State, Prop } from "@stencil/core";

@Component({
  tag: "app-home",
  styleUrl: "app-home.scss"
})
export class AppHome {
  @State() isPaneVisible: boolean = false;
  @State() isSearching: boolean = false;
  @State() searchQuery: string;
  @Prop({ connect: "ion-menu-controller" })
  menuCtrl: HTMLIonMenuControllerElement;

  render() {
    return (
      <ion-split-pane
        content-id="menu-content"
        when="md"
        onIonChange={ev => {
          typeof ev.detail.visible == "boolean"
            ? (this.isPaneVisible = ev.detail.visible)
            : null;
        }}
      >
        <ion-menu content-id="menu-content" side="start" menu-id="side-menu">
          <div class="links">
            <ion-item detail>
              <ion-anchor href="/" routerDirection="back">
                home
              </ion-anchor>
            </ion-item>
            <ion-item detail>
              <ion-anchor href="/profile/newton" routerDirection="forward">
                profile
              </ion-anchor>
            </ion-item>
          </div>
        </ion-menu>
        <div id="menu-content">
          <ion-header mode="ios">
            <ion-toolbar mode="ios">
              <ion-buttons slot="start">
                <ion-button
                  hidden={this.isPaneVisible}
                  onClick={() => {
                    this.menuCtrl.componentOnReady().then(ctrl => {
                      ctrl.open("side-menu");
                    });
                  }}
                >
                  <ion-icon slot="icon-only" name="menu" />
                </ion-button>
              </ion-buttons>
              <ion-title>VIDEOGAMESTORE</ion-title>
            </ion-toolbar>
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
          </ion-header>
          <ion-content>
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
            <ion-slides
              class="banner-slides"
              ref={(slide: HTMLIonSlidesElement) => {
                slide.options = { autoplay: true, loop: true };
              }}
            >
              <ion-slide>
                <img src="../../assets/images/banner.png" alt="" />
              </ion-slide>
              <ion-slide>
                <img src="../../assets/images/banner1.png" alt="" />
              </ion-slide>
            </ion-slides>
            <div class="latest-games-slides">
              <h2>Recently Added</h2>
              <ion-slides
                ref={(slide: HTMLIonSlidesElement) => {
                  slide.options = {
                    autoplay: true,

                    loop: true,

                    breakpoints: {
                      // when window width is >= 320px
                      320: {
                        slidesPerView: 2,
                        spaceBetween: 20
                      },
                      // when window width is >= 480px
                      480: {
                        slidesPerView: 3,
                        spaceBetween: 30
                      },
                      // when window width is >= 640px
                      640: {
                        slidesPerView: 4,
                        spaceBetween: 40
                      },
                      700: {
                        slidesPerView: 5,
                        spaceBetween: 10
                      }
                    }
                  };
                }}
              >
                <ion-slide>
                  <game-card
                    game={{
                      title: "Fifa 2019",
                      price: "60$",
                      platform: "PS4",
                      images: ["../../assets/images/fifa.jpg"]
                    }}
                  />
                </ion-slide>
                <ion-slide>
                  <game-card
                    game={{
                      title: "Fifa 2019",
                      price: "60$",
                      platform: "PS4",
                      images: ["../../assets/images/fifa.jpg"]
                    }}
                  />
                </ion-slide>
                <ion-slide>
                  <game-card
                    game={{
                      title: "Fifa 2019",
                      price: "60$",
                      platform: "PS4",
                      images: ["../../assets/images/fifa.jpg"]
                    }}
                  />
                </ion-slide>
                <ion-slide>
                  <game-card
                    game={{
                      title: "Fifa 2019",
                      price: "60$",
                      platform: "PS4",
                      images: ["../../assets/images/fifa.jpg"]
                    }}
                  />
                </ion-slide>
              </ion-slides>
            </div>
          </ion-content>
        </div>
      </ion-split-pane>
    );
  }
}
//{ <div class="store-home-nav">gg</div> }
