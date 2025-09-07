import { Injectable } from '@angular/core';
import { loadGapiInsideDOM } from 'gapi-script';

@Injectable({
  providedIn: 'root'
})

export class GoogleAuthService {
  private gapiInited = false;
  private authInstance: gapi.auth2.GoogleAuth | undefined;

  async initClient() {
    if (this.gapiInited) return;

    await loadGapiInsideDOM();
    await new Promise((resolve) => gapi.load('client:auth2', resolve));

    await gapi.client.init({
      clientId: '909156664567-rncugs677vg9fdbal7b10mm0kcg4eg3r.apps.googleusercontent.com',
      scope: 'https://www.googleapis.com/auth/calendar.readonly https://www.googleapis.com/auth/gmail.readonly'
    });

    this.authInstance = gapi.auth2.getAuthInstance();
    this.gapiInited = true;
  }

  async signIn(): Promise<string> {
    await this.initClient();
    const user = await this.authInstance!.signIn();
    const token = user.getAuthResponse().access_token;
    return token;
  }

  async signOut() {
    await this.authInstance?.signOut();
  }
}
