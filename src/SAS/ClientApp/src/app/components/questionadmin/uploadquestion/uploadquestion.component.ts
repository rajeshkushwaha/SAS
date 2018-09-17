import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertService,MessageSeverity } from '../../../services/alert.service';


@Component({
  selector: 'uploadquestion',
  templateUrl: './uploadquestion.component.html',
  styleUrls: ['./uploadquestion.component.css']
})
export class UploadquestionComponent implements OnInit {

  uploadQuestionForm: FormGroup;
  constructor(private _formBuilder: FormBuilder, private alertService: AlertService) { }

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
        //if(this.uploadQuestionForm.value.question.)
        this.alertService.startLoadingMessage("Uploading Questions...");
      }
      else {
        this.alertService.startLoadingMessage("Please select a file...");
        this.alertService.resetStickyMessage();
      }
    }
  }

  upload(event: any) {
    debugger;
    let files = event.target.files;
    //check file is valid
    if(files[0]==undefined){
      console.log("No file selected Rajesh");
      return false;
    }
    
    if (!this.validateFile(files[0].name)) {
      this.showErrorAlert("Invalid File",'Selected file format is not supported');      
      return false;
    }

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
  createGuid()  
  {  
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {  
        var r = Math.random()*16|0, v = c === 'x' ? r : (r&0x3|0x8);  
        return v.toString(16);  
    });  
  }  
  
//var guid = createGuid();

  validateFile(name: String) {
    var ext = name.substring(name.lastIndexOf('.') + 1);
    if (ext.toLowerCase() == 'png'||ext.toLowerCase() == 'xlsb'||ext.toLowerCase() == 'xlsx'||ext.toLowerCase() == 'xlsm') {
        return true;
    }
    else {
        return false;
    }
}
}
