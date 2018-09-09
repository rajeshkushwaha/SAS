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

@Injectable()
export class QuestionEndpoint extends EndpointFactory{

    private readonly _questionUrl: string = "/api/question/addquestion";
    get questionUrl() { return this.configurations.baseUrl + this._questionUrl; }

    constructor(http: HttpClient, configurations: ConfigurationService, injector: Injector) {

        super(http, configurations, injector);
      }
    

    getNewQuestionEndpoint<T>(questionObject: any): Observable<T> {
        return this.http.post<T>(this.questionUrl, JSON.stringify(questionObject), this.getRequestHeaders()).pipe<T>(
          catchError(error => {
            return this.handleError(error, () => this.getNewQuestionEndpoint(questionObject));
          }));
      }
}