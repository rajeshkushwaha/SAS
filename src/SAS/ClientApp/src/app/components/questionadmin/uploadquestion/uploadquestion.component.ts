import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Question } from '../../../models/question.model';
import * as XLSX from 'xlsx';
//import { AnswerOptionMCSA } from '../../../models/nsweroptionmcsa.model';
import { AlertService, MessageSeverity } from '../../../services/alert.service';
import { Answeroptionmcsa } from '../../../models/nsweroptionmcsa.model';
import { QuestionService } from '../../../services/question.service';
type AOA = any[][];


@Component({
  selector: 'uploadquestion',
  templateUrl: './uploadquestion.component.html',
  styleUrls: ['./uploadquestion.component.css']
})
export class UploadquestionComponent implements OnInit {

  uploadQuestionForm: FormGroup;
  constructor(private _formBuilder: FormBuilder, private alertService: AlertService, private questionService:QuestionService) { }

  data: AOA = [];
  display = 'none';
  files:any;
  public isSaving:boolean=false;
  public changesSavedCallback: () => void;
  public changesFailedCallback: () => void;
  public changesCancelledCallback: () => void;
  private showValidationErrors: boolean = true;
  public formResetToggle = true;
  //private question: Question = new List<Question>();

  ngOnInit() {
    this.uploadQuestionForm = this._formBuilder.group({
      question: [null, [Validators.required]]
    })
  }

  private showErrorAlert(caption: string, message: string) {
    this.alertService.showMessage(caption, message, MessageSeverity.error);
  }


  onSubmit() {
    debugger;
    console.log("Hello Rajesh");
    if (this.uploadQuestionForm != null || this.uploadQuestionForm != undefined) {
      console.log(this.uploadQuestionForm.value);
      if ((this.uploadQuestionForm != null || this.uploadQuestionForm != undefined) && (this.uploadQuestionForm.value.question != null || this.uploadQuestionForm.value.question != undefined)) {
        
        this.alertService.startLoadingMessage("Uploading Questions...");


        let questions: Array<Question> = new Array<Question>();       

        for (let i = 1; i < this.data.length; i++) {
          let question: Question = new Question();
          
          //We need to check question type and send correct value, right now this is hard coded
          question = <Question>({
            question: this.data[i][0].toString().trim(),            
            expertieslevel:"Beginners",
            questiontype:"MCSA",
            technology:"DotNet",
            answeroptionmcsa:<Answeroptionmcsa>({
              option1:this.data[i][1].toString().trim(),
              option2: this.data[i][2].toString().trim(),
              option3: this.data[i][3].toString().trim(),
              option4: this.data[i][4].toString().trim(),
              correctanswermcsa: this.data[i][4].toString().trim()
            })
          });
          
          questions.push(question);
        }
        console.log(questions);
        debugger;
        this.questionService.setUploadQuestion(questions).subscribe(quest => this.saveSuccessHelper(quest), error => this.saveFailedHelper(error));
      }
      else {
        this.alertService.startLoadingMessage("Please select a file...");
        this.alertService.resetStickyMessage();
      }
    }
  }

  

  private saveSuccessHelper(ques?: Question[]) {        
    this.isSaving = false;
    this.alertService.stopLoadingMessage();
    this.showValidationErrors = false;

    this.alertService.showMessage("Success", `Question created successfully`, MessageSeverity.success);      

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

  previewFile() {
    debugger;
    //let files = (<HTMLInputElement>document.getElementById("question")).files;

    //let files = document.getElementById("question");
    let files = this.files;
	  const reader: FileReader = new FileReader();
  
    if(files!=null){
      reader.onload = (e: any) => {
        const bstr: string = e.target.result;
        const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });
        const wsname: string = wb.SheetNames[0];
        const ws: XLSX.WorkSheet = wb.Sheets[wsname];
  
        this.data = <AOA>(XLSX.utils.sheet_to_json(ws, { header: 1 }));
      };
      reader.readAsBinaryString(files[0]);
      this.openModal();
    }
    // if (files.length !== 1) {
    //   throw new Error('Cannot use multiple files');
    // }    
  }

  openModal(){
    this.display = 'block';
  }

  closeModal() {
    this.display = 'none';
  }

  upload(event: any) {
    debugger;
    let files = event.target.files;

    //check file is valid
    if (files[0] == undefined) {
      console.log("No file selected Rajesh");
      return false;
    }

    if (!this.validateFile(files[0].name)) {
      this.showErrorAlert("Invalid File", 'Selected file format is not supported');
      return false;
    }

    //Assing the files to Global variable
    this.files = files;
    let fData: FormData = new FormData;

    for (var i = 0; i < files.length; i++) {
      fData.append("file", files[i]);
    }

    var _data = {
      filename: files[0].name,
      id: this.createGuid()
    }

    fData.append("data", JSON.stringify(_data));
    // this._service.uploadFile(fData).subscribe(
    //     response => console.log(response),
    //     error => console.log(error)
    // )
  }

  //use for generating a guid
  createGuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  //var guid = createGuid();

  validateFile(name: String) {
    var ext = name.substring(name.lastIndexOf('.') + 1);
    if (ext.toLowerCase() == 'xls' || ext.toLowerCase() == 'xlsb' || ext.toLowerCase() == 'xlsx' || ext.toLowerCase() == 'xlsm') {
      return true;
    }
    else {
      return false;
    }
  }
}
