import { Component, Output, EventEmitter  } from '@angular/core';
import { PoemService } from '../services/poem.service';
import { Poem } from '../models/poem';

@Component({
    selector: 'authors',
    templateUrl: '../views/authors.html'
})

export class AuthorsComponent {
    public title:string;
    public poem: Poem;
    public poems: Array<string>;
    public author: Array<string>;
    public authors;
    public selectedAuthor:string;

    constructor(
        protected poemService: PoemService
    ) {
        this.title = 'Authors';
        this.author = []
        this.selectedAuthor = "Pick an author"
    }

    ngOnInit() {}

    selectAuthor() {
        this.poemService.getAuthors()
        // .pipe(map((res) => res))
        // .pipe(map(response => response))
        .subscribe(
            (result: Array<string>) => {
                this.authors = Object.values(result);
                if (!this.authors) {
                    console.log('No hay datos desde servidor');
                } else {
                    for (let i in this.authors[0]) {
                        this.author.push(this.authors[0][i]);
                    }
                }
            },
            error => {
                var errMsg = <any>error;
                console.log(errMsg);
            })
    }

    @Output() authorEvent = new EventEmitter<string>();

    saveAuthor(author) {
        this.selectedAuthor = author.split(' ').join('%20');
        // console.log(this.selectedAuthor);
        this.authorEvent.emit(this.selectedAuthor);
    }
}