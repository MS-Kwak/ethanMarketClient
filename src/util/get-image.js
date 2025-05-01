import banner1 from './../assets/banner1.png';
import banner2 from './../assets/banner2.png';

import basketball1 from './../assets/basketball1.jpg';
import basketball2 from './../assets/basketball2.jpg';
import basketball3 from './../assets/basketball3.jpg';

import dumbell1 from './../assets/dumbell1.jpg';
import dumbell2 from './../assets/dumbell2.jpg';

import keyboard1 from './../assets/keyboard1.jpg';
import keyboard2 from './../assets/keyboard2.jpg';

import notebook1 from './../assets/notebook1.jpg';
import notebook2 from './../assets/notebook2.jpg';

export function getImage(nameId) {
  switch (nameId) {
    case 'banner1':
      return banner1;
    case 'banner2':
      return banner2;
    case 'basketball1':
      return basketball1;
    case 'basketball2':
      return basketball2;
    case 'basketball3':
      return basketball3;
    case 'dumbell1':
      return dumbell1;
    case 'dumbell2':
      return dumbell2;
    case 'keyboard1':
      return keyboard1;
    case 'keyboard2':
      return keyboard2;
    case 'notebook1':
      return notebook1;
    case 'notebook2':
      return notebook2;
    default:
      return null;
  }
}
