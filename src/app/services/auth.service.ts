import { Injectable } from '@angular/core';
import { GoogleAuthProvider, User, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { auth } from '../firebase';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private authState$ = new Observable<User | null>((subscriber) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (user) => subscriber.next(user),
      (error) => subscriber.error(error),
    );

    return () => unsubscribe();
  });

  loginWithGoogle(): Promise<any> {
    return signInWithPopup(auth, new GoogleAuthProvider());
  }

  logout(): Promise<void> {
    return signOut(auth);
  }

  isLoggedIn(): Observable<boolean> {
    return this.authState$.pipe(map((user) => !!user));
  }

  getCurrentUserId(): Observable<string | null> {
    return this.authState$.pipe(map((user) => (user ? user.uid : null)));
  }
}
