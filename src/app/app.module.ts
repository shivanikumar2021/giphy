import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Imported Modules
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";


// Components
import { AppComponent } from './app.component';
import { ResultsComponent } from './components/results/results.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    ResultsComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
