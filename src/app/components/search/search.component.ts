import { Component, OnInit } from '@angular/core';
import { GiphyServiceService } from "../../services/giphy-service.service";
import { UserInput } from "../../classes/user-input";
import { take } from "rxjs/operators";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private giphy: GiphyServiceService) { }

  ui: UserInput = new UserInput();

  ngOnInit() {
  }

  search(){
    return this.giphy.getGifs(this.ui).pipe( take(1) ).subscribe((res: any) => {

      this.giphy.setResults(res.data);
        
      this.ui.userInput = '';
    });
  }
}
