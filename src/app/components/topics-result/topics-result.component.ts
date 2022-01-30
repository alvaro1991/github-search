import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Repository } from 'src/types/Repository';


@Component({
  selector: 'topics-result',
  templateUrl: './topics-result.component.html',
})
  export class TopicsResultComponent implements OnInit {

  	@Input() passData: Repository[]

 constructor() {
 }

  ngOnInit() {
  }


}
