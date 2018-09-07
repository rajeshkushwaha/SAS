

export class Question {
    constructor(id?:string,question?:string,questiontype?:string,expertieslevel?:string,
    technology?:string, answerOption1?:string,answerOption2?:string,answerOption3?:string,
    answerOption4?:string,answerOption5?:string,correctAnswer1?:string,correctAnswer2?:string,
    correctAnswer3?:string,correctAnswer4?:string,correctAnswer5?:string,freetextanswer?:string,
    answerSelector?:string,isimportant?:boolean){

        this.id=id;
        this.question=question;
        this.questionType=questiontype;
        this.expertiesLevel=expertieslevel;
        this.technology=technology;
        this.answerOption1=answerOption1;
        this.answerOption2=answerOption2;
        this.answerOption3=answerOption3;
        this.answerOption4=answerOption4;
        this.answerOption5=answerOption5;
        this.correctAnswer1=correctAnswer1;
        this.correctAnswer2=correctAnswer2;
        this.correctAnswer3=correctAnswer3;
        this.correctAnswer4=correctAnswer4;
        this.correctAnswer5=correctAnswer5;
        this.freeTextAnswer=freetextanswer;
        this.isImportant=isimportant;

    }

    public id:string;
    public question:string;         //Represent question in form
    public questionType:string;     //Represent question type
    public expertiesLevel:string;   //Represent experties level in form
    public technology:string;       //Represent technology in form
    public answerOption1:string;    //Represent answer option for all MCSA, MCMA, ORDER in form 
    public answerOption2:string;    //Represent answer option for all MCSA, MCMA, ORDER in form 
    public answerOption3:string;    //Represent answer option for all MCSA, MCMA, ORDER in form 
    public answerOption4:string;    //Represent answer option for all MCSA, MCMA, ORDER in form 
    public answerOption5:string;    //Represent answer option for all MCSA, MCMA, ORDER in form 
    public correctAnswer1:string;   //Represent possible correct option in form
    public correctAnswer2:string;   //Represent possible correct option  in form
    public correctAnswer3:string;   //Represent possible correct option  in form
    public correctAnswer4:string;   //Represent possible correct option  in form
    public correctAnswer5:string;   //Represent possible correct option  in form
    public freeTextAnswer:string;   //Represent answer key for free text option in form   
    public isImportant:boolean;     //Represent wether the question is important in form
    public answerSelector:string;   //Represent correct answer for MQSA in form
}