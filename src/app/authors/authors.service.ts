import { Injectable } from '@angular/core';

@Injectable()
export class AuthorsService {
    getAuthors() {
        return [
            {
                name: 'vibhor',
                age: 27
            },
            {
                name: 'john wick',
                age: 34
            }
        ];
    }
}