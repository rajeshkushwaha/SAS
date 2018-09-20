// ====================================================
// More Templates: rajesh.kushwaha@softvision.com
// Email: rajesh.kushwaha@softvision.com
// ====================================================

import { EndpointFactory } from "./endpoint-factory.service";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";
import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from "@angular/core";
import { ConfigurationService } from "./configuration.service";
import { Question } from "../models/question.model";

@Injectable()
export class QuestionEndpoint extends EndpointFactory{

    private readonly _questionUrl: string = "/api/question/addquestion";
    private readonly _getAllQuestionUrl:string = "/api/question/allquestions";
    private readonly _setUploadQuestionUrl:string = "/api/question/uploadquestions";

    get questionUrl() { return this.configurations.baseUrl + this._questionUrl; }
    get getAllQuestionUrl() { return this.configurations.baseUrl + this._getAllQuestionUrl; }
    get setUploadQuestionUrl() { return this.configurations.baseUrl + this._setUploadQuestionUrl; }

    constructor(http: HttpClient, configurations: ConfigurationService, injector: Injector) {

        super(http, configurations, injector);
      }
    

      //Single question add
    getNewQuestionEndpoint<T>(questionObject: any): Observable<T> {
        return this.http.post<T>(this.questionUrl, JSON.stringify(questionObject), this.getRequestHeaders()).pipe<T>(
          catchError(error => {
            return this.handleError(error, () => this.getNewQuestionEndpoint(questionObject));
          }));
      }

      //Bulk question upload
      setUploadQuestion<T>(questionObject: any): Observable<T> {
        return this.http.post<T>(this.setUploadQuestionUrl, JSON.stringify(questionObject),this.getRequestHeaders()).pipe<T>(
          catchError(error => {
            return this.handleError(error, () => this.setUploadQuestion(questionObject));
          }));
      }
      
      getAllQuestionEndPoint<T>():Observable<T>{        
        debugger;
        //return this.http.get<Question[]>(this.getAllQuestionUrl);        
        return this.http.get<T>(this.getAllQuestionUrl).pipe<T>(
          catchError(error => {
            return this.handleError(error, () => this.getAllQuestionEndPoint());
          }));
      }
}