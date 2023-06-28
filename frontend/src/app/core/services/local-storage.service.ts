import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID, TransferState, makeStateKey } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor(
    private transferState: TransferState,
    @Inject(PLATFORM_ID) private platformId: any
  ) {}

  setItem(item: string, value: string) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(item, value);
    } else if (isPlatformServer(this.platformId)) {
      let key = makeStateKey<string>(item);
      this.transferState.set(key, value);
    }
  }

  getItem(item: string) : string | null {
    if (isPlatformBrowser(this.platformId)) {
      return <string>localStorage.getItem(item);
    } else if (isPlatformServer(this.platformId)) {
      let key = makeStateKey<string>(item);
      return this.transferState.get(key, null);
    }
    return null
  }
}
