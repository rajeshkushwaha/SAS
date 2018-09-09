import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { AuthService } from "./auth.service";
import { AccountEndpoint } from "./account-endpoint.service";
import { User } from "../models/user.model";
import { forkJoin } from "rxjs";
import { Role } from "../models/role.model";
import { Question } from "../models/question.model";
import { QuestionEndpoint } from "./question-endpoint.service";
import { Injectable } from "@angular/core";

// ====================================================
// More Templates: rajesh.kushwaha@softvision.com
// Email: rajesh.kushwaha@softvision.com
// ====================================================

export type QuestionChangedOperation = "add" | "delete" | "modify";

@Injectable()
export class QuestionService{
    public static readonly questionAddedOperation:QuestionChangedOperation="add";
    public static readonly questionDeletedOperation:QuestionChangedOperation="delete";
    public static readonly questionModifiedOperation:QuestionChangedOperation="modify";

    constructor(private router: Router, private http: HttpClient, private authService: AuthService,
        private accountEndpoint: AccountEndpoint, private questionEndpoint:QuestionEndpoint) {
    
      }

      getUser(userId?: string) {
        return this.accountEndpoint.getUserEndpoint<User>(userId);
      }
    
      getUserAndRoles(userId?: string) {
    
        return forkJoin(
          this.accountEndpoint.getUserEndpoint<User>(userId),
          this.accountEndpoint.getRolesEndpoint<Role[]>());
      }

      newQuestion(question:Question){
          return this.questionEndpoint.getNewQuestionEndpoint<Question>(question);
      }
}