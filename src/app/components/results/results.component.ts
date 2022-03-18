import { Component, OnInit } from '@angular/core';
import { GiphyServiceService } from "../../services/giphy-service.service";
import { UserInput } from '../../classes/user-input';

@Component({
  selector: "app-results",
  templateUrl: "./results.component.html",
  styleUrls: ["./results.component.scss"]
})
export class ResultsComponent implements OnInit {
  constructor(private giphy: GiphyServiceService) {}

  ui: UserInput = new UserInput();
  results: any;

  private giphyData: any;

  ngOnInit() {
    this.giphyData = this.giphy.resultsObs().subscribe(results => {
      this.results = results.data;
    });
  }
}
