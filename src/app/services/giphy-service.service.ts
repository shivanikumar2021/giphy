import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { UserInput } from "../classes/user-input";
import { Subject } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class GiphyServiceService {

  ui: UserInput = new UserInput();

  private apiUrl = '';
  public results;
  // A Rxjs Subject is a special type of Observable that allows values to be multicasted to many observers.
  public resultsSub: Subject<any> = new Subject();

  constructor(private http: HttpClient) {}

  getGifs(ui) {
    this.apiUrl = `http://api.giphy.com/v1/gifs/search?q=${ui.userInput}&api_key=`; //Enter GIPHY API key after equals sign

    return this.http.get(`${this.apiUrl}`); 
  }

  public resultsObs() {
    // Forces data to come back as an observable
    return this.resultsSub.asObservable();
  }

  public setResults(results) {
    this.results = results;
    // .next returns an object with two properties of done and value
    this.resultsSub.next({
      data: results
    });
  }
}
