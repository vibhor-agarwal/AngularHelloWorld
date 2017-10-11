import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'favorite',
    templateUrl: './favorite.component.html',
    styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent {

    @Input('like-count') public likeCount: number;
    @Input('is-selected') public isSelected: boolean;
    @Output('change') change = new EventEmitter();

    constructor() {
    }

    onClick($event) {
        this.likeCount += this.isSelected ? -1 : +1;
        this.isSelected = !this.isSelected;
        console.log($event);
        this.change.emit(new FavoriteChangedEventArgs(!this.isSelected, this.isSelected, this));
    }
}

export class FavoriteChangedEventArgs {
    constructor(private oldValue: any, private newValue: any, private component?: FavoriteComponent) {
    }

    get OldValue() {
        return this.oldValue;
    }
    get NewValue() {
        return this.newValue;
    }
}