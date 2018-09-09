import { Component, OnInit } from '@angular/core';
//import {FormGroup, FormControl } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertService, MessageSeverity } from '../../../services/alert.service';
import { AccountService } from '../../../services/account.service';
import { QuestionService } from '../../../services/question.service';
import { Question } from '../../../models/question.model';

@Component({
  selector: 'addquestion',
  templateUrl: './addquestion.component.html',
  styleUrls: ['./addquestion.component.css']
})
export class AddquestionComponent implements OnInit {

  /*  questForm = new FormGroup({
      question:new FormControl(),
      expertieslevel:new FormControl(),
      questiontype:new FormControl(),
      technology:new FormControl(),
      answeroptionmcsa:new FormGroup({ //options for MCSA
        option1:new FormControl(),
        option2:new FormControl(),
        option3:new FormControl(),
        option4:new FormControl(),
        option5:new FormControl()
      }),    
      correctanswermcsa:new FormControl(), //Correct answer for MCSA
      correctanswermcma:new FormGroup({       //Options and answers
        option1:new FormControl(),
        option2:new FormControl(),
        option3:new FormControl(),
        option4:new FormControl(),
        option5:new FormControl(),      //
        correctansweroption1:new FormControl(),
        correctansweroption2:new FormControl(),
        correctansweroption3:new FormControl(),
        correctansweroption4:new FormControl(),
        correctansweroption5:new FormControl(),
      }),
      correctorderoption:new FormGroup({
        correctorderoption1:new FormControl(),
        correctorderoption2:new FormControl(),
        correctorderoption3:new FormControl(),
        correctorderoption4:new FormControl(),
        correctorderoption5:new FormControl()
      }),
      freetext:new FormControl(),
      isimportant:new FormControl()
    });*/
  private isSaving: boolean;
  private isNewQuestion = true;
  private question: Question = new Question();
  private showValidationErrors: boolean = true;

  public formResetToggle = true;
  public changesSavedCallback: () => void;
  public changesFailedCallback: () => void;
  public changesCancelledCallback: () => void;
  private editingRoleName: string;

  questForm: FormGroup;

  constructor(private _formBuilder: FormBuilder, private alertService: AlertService,
    private accountService: AccountService, private questionService: QuestionService) { }

  private showErrorAlert(caption: string, message: string) {
    this.alertService.showMessage(caption, message, MessageSeverity.error);
  }

  ngOnInit() {
    this.questForm = this._formBuilder.group({
      question: [null, [Validators.required]],
      expertieslevel: [],
      questiontype: [],
      technology: [],
      answeroptionmcsa: this._formBuilder.group({ //options for MCSA
        option1: [null, Validators.required],
        option2: [null, Validators.required],
        option3: [],
        option4: [],
        option5: []
      }),
      correctanswermcsa: [null, Validators.required], //Correct answer for MCSA
      correctanswermcma: this._formBuilder.group({       //Options and answers
        option1: [null, Validators.required],
        option2: [null, Validators.required],
        option3: [],
        option4: [],
        option5: [],
        correctansweroption1: [null, Validators.required],
        correctansweroption2: [null, Validators.required],
        correctansweroption3: [],
        correctansweroption4: [],
        correctansweroption5: [],
      }),
      correctorderoption: this._formBuilder.group({
        correctorderoption1: [null, Validators.required],
        correctorderoption2: [null, Validators.required],
        correctorderoption3: [],
        correctorderoption4: [],
        correctorderoption5: []
      }),
      freetext: [null, Validators.required],
      isimportant: []
    })
  }

  onSubmit() {
    debugger;
    this.isSaving = true;
    this.alertService.startLoadingMessage("Saving changes...");

    this.question=this.questForm.value;
    
    if (this.isNewQuestion) {
      this.questionService.newQuestion(this.question).subscribe(role => this.saveSuccessHelper(role), error => this.saveFailedHelper(error));
    }
    console.log(this.questForm.value);
  }

  private refreshLoggedInUser() {
    this.accountService.refreshLoggedInUser()
      .subscribe(user => { },
        error => {
          this.alertService.resetStickyMessage();
          this.alertService.showStickyMessage("Refresh failed", "An error occured whilst refreshing logged in user information from the server", MessageSeverity.error, error);
        });
  }

  resetForm(replace = false) {

    if (!replace) {
      this.questForm.reset();
    }
    else {
      this.formResetToggle = false;

      setTimeout(() => {
        this.formResetToggle = true;
      });
    }
  }

  private saveSuccessHelper(role?: Question) {
    if (role)
      Object.assign(this.question, role);

    this.isSaving = false;
    this.alertService.stopLoadingMessage();
    this.showValidationErrors = false;

    if (this.isNewQuestion)
      this.alertService.showMessage("Success", `Question created successfully`, MessageSeverity.success);
    else
      this.alertService.showMessage("Success", `Changes into question saved successfully`, MessageSeverity.success);


    this.question = new Question();
    this.resetForm();


    if (!this.isNewQuestion && this.accountService.currentUser.roles.some(r => r == this.editingRoleName))
      this.refreshLoggedInUser();

    if (this.changesSavedCallback)
      this.changesSavedCallback();
  }

  private saveFailedHelper(error: any) {
    this.isSaving = false;
    this.alertService.stopLoadingMessage();
    this.alertService.showStickyMessage("Save Error", "The below errors occured whilst saving your changes:", MessageSeverity.error, error);
    this.alertService.showStickyMessage(error, null, MessageSeverity.error);

    if (this.changesFailedCallback)
      this.changesFailedCallback();
  }

  private cancel() {
    this.question = new Question();

    this.showValidationErrors = false;
    this.resetForm();

    this.alertService.showMessage("Cancelled", "Operation cancelled by user", MessageSeverity.default);
    this.alertService.resetStickyMessage();

    if (this.changesCancelledCallback)
        this.changesCancelledCallback();
}
}

