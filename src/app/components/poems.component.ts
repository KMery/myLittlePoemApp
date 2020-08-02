import { Component } from '@angular/core';
import { AuthorsComponent } from './authors.component';
import { PoemService } from '../services/poem.service';
import { Poem } from '../models/poem';


@Component({
    selector: 'poems',
    templateUrl: '../views/poems.html'
})

export class PoemsComponent {
    public title:string;
    public poems: Array<string>;
    public poem: Poem;
    public author:string;
    public showPoem:boolean;

    constructor(
        protected poemService: PoemService
    ) {
        this.title = 'List of poems'
    }

    ngOnInit() {}

    receiveAuthor($event) {
        this.author = $event.split('%20').join(' ')
        this.getPoemsByAuthor($event)
      }

    showSelectPoem(show:boolean, poemPick) {
        this.showPoem = !show;
        this.poem = poemPick;
    }  

    getPoemsByAuthor(author:string) {
        this.poemService.getPoems(author)
            .subscribe((data:Array<string>) => { 
                this.poems = data;
                return this.poems;
            },
                (error) => {
                    console.error(error);
                }
            );
    }
}