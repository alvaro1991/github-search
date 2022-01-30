import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { GithubServiceService } from '../services/github-service.service';

import { AppComponent } from './components/app.component';
import { TopicsResultComponent } from './components/topics-result/topics-result.component';
import { SearchTopicsComponent } from './components/search-bar/search-bar.component';



@NgModule({
  declarations: [
    AppComponent,
    SearchTopicsComponent,
    TopicsResultComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [GithubServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
