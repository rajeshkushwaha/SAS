// ====================================================
// More Templates: rajesh.kushwaha@softvision.com
// Email: rajesh.kushwaha@softvision.com
// ====================================================

import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BootstrapTabDirective } from "../../../directives/bootstrap-tab.directive";
import { fadeInOut } from '../../../services/animations';

import { AccountService } from "../../../services/account.service";
import { Permission } from '../../../models/permission.model';
import { ViewquestionComponent } from '../viewquestion/viewquestion.component';

import { QuestionService } from '../../../services/question.service';
import { Question } from '../../../models/question.model';
import { AlertService } from '../../../services/alert.service';

@Component({
  selector: 'questiontab',
  templateUrl: './questiontab.component.html',
  styleUrls: ['./questiontab.component.css'],
  animations: [fadeInOut]
})
export class QuestiontabComponent implements OnInit {

  isAddQuestionActivated = true;
  isViewQuestionActivated = false;
  isUploadQuestionActivated = false;  

  fragmentSubscription: any;

  allQuestion:any;

  readonly addQuestionTab = "new";
  readonly viewQuestionTab = "view";
  readonly uploadTab = "upload";
  private isGetting: boolean;

  @ViewChild("tab")
  tab: BootstrapTabDirective;

  constructor(private route: ActivatedRoute, private accountService: AccountService,
    private _questionService:QuestionService, private _alertService: AlertService) {
  }

  ngOnInit() {
    this.fragmentSubscription = this.route.fragment.subscribe(anchor => this.showContent(anchor));
  }

  ngOnDestroy() {
    this.fragmentSubscription.unsubscribe();
  }

  showContent(anchor: string) {    
    if ((this.isFragmentEquals(anchor, this.addQuestionTab) && !this.canViewUsers) ||
      (this.isFragmentEquals(anchor, this.viewQuestionTab) && !this.canViewRoles)||
      (this.isFragmentEquals(anchor, this.uploadTab) && !this.canViewRoles))
      return;

    this.tab.show(`#${anchor || this.addQuestionTab}Tab`);
  }

  isFragmentEquals(fragment1: string, fragment2: string) {
    if (fragment1 == null)
      fragment1 = "";

    if (fragment2 == null)
      fragment2 = "";

      if(fragment1==this.viewQuestionTab && fragment2==this.viewQuestionTab){
        console.log("We are going for view");
        this.isGetting = true;
        this._alertService.startLoadingMessage("Getting Questions...");
        debugger;
        this._questionService.getAllQuestions()
        .subscribe(data=>this.allQuestion=data);
        console.log(this.allQuestion);
      }
    return fragment1.toLowerCase() == fragment2.toLowerCase();
  }

  onShowTab(event) {
    let activeTab = event.target.hash.split("#", 2).pop();

    this.isAddQuestionActivated = activeTab == this.addQuestionTab;
    this.isViewQuestionActivated = activeTab == this.viewQuestionTab;
    this.isUploadQuestionActivated = activeTab == this.uploadTab;    
  }

  get canViewUsers() {
    return this.accountService.userHasPermission(Permission.viewUsersPermission);
  }

  get canViewRoles() {
    return this.accountService.userHasPermission(Permission.viewRolesPermission);
  }

  onSelectChange($event){

  }
}
