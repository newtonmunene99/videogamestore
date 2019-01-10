import { Component, State, Prop } from "@stencil/core";

@Component({
  tag: "app-home",
  styleUrl: "app-home.scss"
})
export class AppHome {
  @State() isPaneVisible: boolean = false;

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
          </ion-header>
          <ion-content>
            <ion-nav />
          </ion-content>
        </div>
      </ion-split-pane>
    );
  }
}
