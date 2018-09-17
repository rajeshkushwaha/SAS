import { Component, OnInit } from '@angular/core';
import { AlertService } from '../../services/alert.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent implements OnInit {

  instructionForm: FormGroup;
  expertiesLevel = [
    {
      "name": "expertieslevelBeginner",
      "value": "Beginner"
    },
    {
      "name": "expertieslevelIntermediate",
      "value": "Intermediate"
    }
    ,
    {
      "name": "expertieslevelExpertise",
      "value": "Expertise"
    }
  ];

  technologies: string[] = [
    'Java',
    'Angular',
    'AngualrJS',
    'HTML',
    'NodeJS',
    'DotNet',
    'DotNet Core',
    'ASP.NET MVC',
    'C',
    'C++',
    'C#',
    'Python',
    'Manual Testing',
    'Automation Testing',
    'Selenium',
    'Selenium Web Driver',
    'ReactJS',
    'Machine Learning',
    'SQL',
    'Oracle',
    'DBA',
    'JavaScript',
    'JQuery',
  ];

  constructor(private alertServices: AlertService, private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.instructionForm = this._formBuilder.group({
      technology: [null, [Validators.required]],
      experties: [null, [Validators.required]]
    })
  }

  onSubmit(){
    console.log("Hello Rajesh");
  }

}
