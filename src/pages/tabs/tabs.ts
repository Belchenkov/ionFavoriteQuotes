import { Component } from '@angular/core';

import { FavoritesPage } from '../favorites/favorites';
import { LibraryPage } from '../library/library';

@Component({
    selector: 'page-tabs',
    template: `
        <ion-tabs>
            <ion-tab tabTitle="Favorites" tabIcon="star" [root]="favoritesPage"></ion-tab>
            <ion-tab tabTitle="Library" tabIcon="book" [root]="libraryPage"></ion-tab>
        </ion-tabs>
    `
})
export class TabsPage {
    favoritesPage = FavoritesPage;
    libraryPage = LibraryPage;
}