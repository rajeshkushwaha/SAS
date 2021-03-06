import { Component, OnInit } from '@angular/core';
import { AlertService } from '../../services/alert.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent implements OnInit {

  instructionForm: FormGroup;
  appLogo = require("../../assets/images/Softvision-Online-Instruction.jpg");
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

  constructor(private alertServices: AlertService, private _formBuilder: FormBuilder,private _router:Router) { }

  ngOnInit() {
    this.instructionForm = this._formBuilder.group({
      technology: [null, [Validators.required]],
      experties: [null, [Validators.required]]
    })
  }

  onSubmit(){  
    debugger;
    this._router.navigate(['/starttest']);
    console.log(this.instructionForm.value);
  }

}
