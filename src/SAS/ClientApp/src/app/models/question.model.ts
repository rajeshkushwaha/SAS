// ====================================================
// More Templates: rajesh.kushwaha@softvision.com
// Email: rajesh.kushwaha@softvision.com
// ====================================================

import { Answeroptionmcsa } from "./nsweroptionmcsa.model";
import { Correctanswermcma } from "./correctanswermcma.model";
import { Correctorderoption } from "./correctorderoption.model";

export class Question {
  public question: string;
  public expertieslevel: string;
  public questiontype: string;
  public technology: string;
  public answeroptionmcsa: Answeroptionmcsa;
  public correctanswermcma: Correctanswermcma;
  public correctorderoption: Correctorderoption;
  public freetext: string;
  public isimportant: boolean;
}
