import { Component, Prop, Listen } from "@stencil/core";

@Component({
  tag: "app-root",
  styleUrl: "app-root.css"
})
export class AppRoot {
  @Prop({ connect: "ion-toast-controller" })
  toastCtrl: HTMLIonToastControllerElement;

  /**
   * Handle service worker updates correctly.
   * This code will show a toast letting the
   * user of the PWA know that there is a
   * new version available. When they click the
   * reload button it then reloads the page
   * so that the new service worker can take over
   * and serve the fresh content
   */
  @Listen("window:swUpdate")
  async onSWUpdate() {
    const toast = await this.toastCtrl.create({
      message: "New version available",
      showCloseButton: true,
      closeButtonText: "Reload"
    });
    await toast.present();
    await toast.onWillDismiss();
    window.location.reload();
  }

  render() {
    return (
      <ion-app>
        <ion-router useHash={false}>
          <ion-route url="/" component="app-home">
            <ion-route component="store-home">
              <ion-route component="store-categories" />
              <ion-route url="/store/:category" component="store-categories" />
            </ion-route>
            <ion-route-redirect from="/search" to="/" />
            <ion-route url="/search" component="store-search" />

            <ion-route url="/profile/:name" component="app-profile" />
          </ion-route>
        </ion-router>
        <ion-nav animated />
      </ion-app>
    );
  }
}
