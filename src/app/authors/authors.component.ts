import { Component } from '@angular/core';
import { AuthorsService } from './authors.service';

@Component({
    selector: 'authors',
    templateUrl: './authors.component.html'
})
export class AuthorsComponent {
    private data;
    constructor(service: AuthorsService) {
        this.data = service.getAuthors();
    }
    get Data() { return this.data; }
}