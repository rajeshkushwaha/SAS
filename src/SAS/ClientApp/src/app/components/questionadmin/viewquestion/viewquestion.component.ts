import { Component, OnInit, Input,TemplateRef, ViewChild, } from '@angular/core';

import { QuestionService } from '../../../services/question.service';
import { Question } from '../../../models/question.model';
import { AlertService, DialogType, MessageSeverity } from '../../../services/alert.service';
import { Utilities } from "../../../services/utilities";
import { AppTranslationService } from '../../../services/app-translation.service';

@Component({
  selector: 'viewquestion',
  templateUrl: './viewquestion.component.html',
  styleUrls: ['./viewquestion.component.css']
})
export class ViewquestionComponent implements OnInit {

  //@Input() public allQuestion;
  allQuestion: any;
  private loadingIndicator: boolean;
  columns: any[] = [];
  public questionsCache: Question[] = [];
  public questions: Question[] = [];

  @ViewChild('indexTemplate')
  indexTemplate: TemplateRef<any>;

  constructor(private _questionService: QuestionService, private translationService: AppTranslationService,private alertService: AlertService) { 
    
    let gT = (key: string) => this.translationService.getTranslation(key);
    this.columns = [
      { prop: "index", name: '#', width: 40,  canAutoResize: false },
      { prop: 'question', name: gT('addQuestion.viewquestion.question'), width: 50 },
      { prop: 'questiontype', name: gT('addQuestion.viewquestion.questiontype'), width: 90 },
      { prop: 'expertieslevel', name: gT('addQuestion.viewquestion.expertieslevel'), width: 120 },
      { prop: 'technology', name: gT('addQuestion.viewquestion.technology'), width: 140 },
      //{ prop: 'roles', name: gT('users.management.Roles'), width: 120, cellTemplate: this.rolesTemplate },
      //{ prop: 'phoneNumber', name: gT('users.management.PhoneNumber'), width: 100 }
  ];
  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.loadingIndicator = true;
    this.alertService.startLoadingMessage("Getting Questions...");
    this._questionService.getAllQuestions().subscribe(data => this.onDataLoadSuccessful(data), error => this.onDataLoadFailed(error));
  }

  onDataLoadSuccessful(quests: any) {
    debugger;
    this.alertService.stopLoadingMessage();
    this.loadingIndicator = false;
    debugger;
    if (quests != undefined) {
      debugger;
      quests.forEach((quest, index, quests) => {
        (<any>quest).index = index + 1;
      });

      this.questionsCache = [...quests];
      this.questions = quests;
    }
  }

  onDataLoadFailed(error: any) {
    this.alertService.stopLoadingMessage();
    this.loadingIndicator = false;

    this.alertService.showStickyMessage("Load Error", `Unable to retrieve users from the server.\r\nErrors: "${Utilities.getHttpResponseMessage(error)}"`,
      MessageSeverity.error, error);
  }

  onSearchChanged(value: string) {
    //this.rows = this.rowsCache.filter(r => Utilities.searchArray(value, false, r.userName, r.fullName, r.email, r.phoneNumber, r.jobTitle, r.roles));
  }
}
