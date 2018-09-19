import { Component, OnInit } from '@angular/core';
import { AlertService } from '../../services/alert.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StarttestserviceService } from '../../services/starttestservice.service';
import { Router }                 from '@angular/router';

@Component({
  selector: 'app-starttest',
  templateUrl: './starttest.component.html',
  styleUrls: ['./starttest.component.css']
})
export class StarttestComponent implements OnInit {

  startTestForm: FormGroup;
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

  constructor(private alertServices: AlertService, private _formBuilder: FormBuilder, private _startTestService:StarttestserviceService,
    private _router:Router) { }

  ngOnInit() {
    this.startTestForm = this._formBuilder.group({
      technology: [null, [Validators.required]],
      experties: [null, [Validators.required]]
    })
  }

  onSubmit(){  
    debugger;
    this._startTestService.saveData(this.startTestForm.value.experties,this.startTestForm.value.technology)
    this._router.navigate(["/login"]);
    console.log(this.startTestForm.value);
  }

}
