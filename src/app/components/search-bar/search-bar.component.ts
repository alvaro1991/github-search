import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GithubServiceService } from 'src/services/github-service.service';
import { Repository } from 'src/types/Repository';


@Component({
  selector: 'search-component',
  templateUrl: './search-bar.component.html',
})
export class SearchTopicsComponent implements OnInit {

  title = 'Github Search';
  isLoading:boolean;
  
  
  searchForm: FormGroup
  topics: Repository[] = []

  constructor(private _githubServiceService: GithubServiceService, private fb: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm(){
   this.searchForm = this.fb.group({
      topic:[null, Validators.required],
      stars:[null, Validators.required]
    })
  }

  search(): void {
    let topic = this.searchForm.controls.topic.value
    let stars: number = this.searchForm.controls.stars.value;
    this.isLoading = true;
    this._githubServiceService.getTopics(topic, stars).subscribe( data => {
      this.topics = data;
      this.isLoading = false;
    })
  }}




  




