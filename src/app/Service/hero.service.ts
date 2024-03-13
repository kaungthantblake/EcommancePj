import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  ionIcons: any[] = [
    {
      tag: 'ion-icon',
      attributes: {
        icon: 'accessibility-outline',
        name: 'game',
      },
    },
    {
      tag: 'ion-icon',
      attributes: {
        icon: 'fitness-outline',
        name: 'health care',
      },
    },
    {
      tag: 'ion-icon',
      attributes: {
        icon: 'library-outline',
        name: 'Books',
      },
    },
    {
      tag: 'ion-icon',
      attributes: {
        icon: 'restaurant-outline',
        name: 'food',
      },
    },
    {
      tag: 'ion-icon',
      attributes: {
        icon: 'shirt-outline',
        name: 'cloth',
      },
    },
    {
      tag: 'ion-icon',
      attributes: {
        icon: 'desktop-outline',
        name: 'electric components',
      },
    },
    {
      tag: 'ion-icon',
      attributes: {
        icon: 'bag-remove-outline',
        name: 'bags',
      },
    },
    {
      tag: 'ion-icon',
      attributes: {
        icon: 'hammer-outline',
        name: 'tools',
      },
    },
    {
      tag: 'ion-icon',
      attributes: {
        icon: 'headset-outline',
        name: 'accessory',
      },
    },
    {
      tag: 'ion-icon',
      attributes: {
        icon: 'home-outline',
        name: 'home appliances ',
      },
    },
    {
      tag: 'ion-icon',
      attributes: {
        icon: 'bicycle-outline',
        name: 'Sport',
      },
    }

  ];
  constructor() {}
}
