import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators'; 
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PoemService {
  public authors;
  public poemList;
  private poemSource = new BehaviorSubject(['default poem test']);
  currentPoem = this.poemSource.asObservable();

  constructor(
      protected http: HttpClient
      ) {
        this.authors = 'https://poetrydb.org/author'
      }

  getAuthors() {
    return this.http.get(this.authors)
            // .pipe(map((res: Response) => res.json()))
            .pipe(map((res: Array<string>) => res))
  }  

  getPoems(author:string) {
    // console.log(this.authors+ '/' + author);
    return this.http.get(this.authors + '/' + author.replace(" ", "%20"))
        .pipe(map((res: Array<string>) => res))
  }

  getRandomPoem() {
    return this.http.get('https://poetrydb.org/random')
  }
}
