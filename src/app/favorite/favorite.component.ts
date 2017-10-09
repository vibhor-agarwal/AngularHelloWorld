import { Component } from '@angular/core';

@Component({
    selector: 'favorite',
    templateUrl: './favorite.component.html',
    styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent {
    private isSelected: boolean;
    get IsSelected() {
        return this.isSelected;
    }
    constructor() {
    }
    onClick($event){
        this.isSelected = !this.isSelected;
        console.log($event); 
    } 
}