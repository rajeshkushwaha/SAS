import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'viewquestion',
  templateUrl: './viewquestion.component.html',
  styleUrls: ['./viewquestion.component.css']
})
export class ViewquestionComponent implements OnInit {

  @Input() public allQuestion;
  constructor() { }

  ngOnInit() {}

}
