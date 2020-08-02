import { Component } from '@angular/core';
import { Poem } from '../models/poem';
import { PoemService } from '../services/poem.service'

@Component({
    selector: 'random-poem',
    templateUrl: '../views/random-poem.html'
})

export class RandomPoemComponent {
    public title:string;
    public poem:Poem;

    constructor(
        private _poemService: PoemService
    ) {
        this.title = 'This is your lucky poem';
        this.poem = new Poem('', '', [], 0);
    }

    ngOnInit() {
        this.getAPoem()
    }

    getAPoem() {
        this._poemService.getRandomPoem()
        .subscribe((data:Poem) => { 
            this.poem = data;
            return this.poem;
        },
            (error) => {
                console.error(error);
            }
        );
    }

}