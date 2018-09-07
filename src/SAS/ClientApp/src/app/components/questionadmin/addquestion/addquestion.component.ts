import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'addquestion',
  templateUrl: './addquestion.component.html',
  styleUrls: ['./addquestion.component.css']
})
export class AddquestionComponent implements OnInit {

  name = new FormControl('');
  constructor() { }

  ngOnInit() {
  }

}
