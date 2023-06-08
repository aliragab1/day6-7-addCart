import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  // alert(`The guard prevents you from entering.`);
  // return false;
  const isLoggedIN: boolean = localStorage.getItem('access_token')
    ? true
    : false;
  isLoggedIN
    ? alert(`Welcome`)
    : alert(`The guard prevents you from entering, access_token is not exist.`);
  return isLoggedIN;
};
