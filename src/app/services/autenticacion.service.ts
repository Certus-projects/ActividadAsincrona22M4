import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AutenticacionService {
  constructor() {}
  readonly ISLOGGEDKEY = 'islogged';
  public urlUsuarioIntentaAcceder = '';

  public changeLoginStatusSubject = new Subject<boolean>();
  public changeLoginStatus$ = this.changeLoginStatusSubject.asObservable();

  login() {
    localStorage.setItem(this.ISLOGGEDKEY, 'true');
    localStorage.setItem(
      'usuario',
      JSON.stringify({
        nombre: 'Test',
        apellido: 'User',
        email: 'testuser@contoso.com',
      })
    );
  }

  logout() {
    localStorage.removeItem(this.ISLOGGEDKEY);
    localStorage.removeItem('usuario');
    this.changeLoginStatusSubject.next(false);
  }

  isLoggedIn(url: string) {
    const isLogged = localStorage.getItem(this.ISLOGGEDKEY);
    if (!isLogged) {
      this.urlUsuarioIntentaAcceder = url;
      return false;
    }
    return true;
  }
}
