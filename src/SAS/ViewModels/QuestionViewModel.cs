﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SAS.ViewModels
{
    public class QuestionViewModel
    {
        [Required(ErrorMessage ="Question is required")]
        public string question { get; set; }

        [Required(ErrorMessage ="Experties level is required")]
        public string expertieslevel { get; set; }

        [Required(ErrorMessage ="Question type is required")]
        public string questiontype { get; set; }

        [Required(ErrorMessage ="Technology is required")]
        public string technology { get; set; }

        public Answeroptionmcsa answeroptionmcsa { get; set; }
        public string correctanswermcsa { get; set; }
        public Correctanswermcma correctanswermcma { get; set; }
        public Correctorderoption correctorderoption { get; set; }
        public string freetext { get; set; }
        public bool isimportant { get; set; }
    }

    public class Answeroptionmcsa
    {
        public string option1 { get; set; }
        public string option2 { get; set; }
        public object option3 { get; set; }
        public object option4 { get; set; }
        public object option5 { get; set; }
    }

    public class Correctanswermcma
    {
        public string option1 { get; set; }
        public string option2 { get; set; }
        public string option3 { get; set; }
        public string option4 { get; set; }
        public string option5 { get; set; }
        public string correctansweroption1 { get; set; }
        public string correctansweroption2 { get; set; }
        public string correctansweroption3 { get; set; }
        public string correctansweroption4 { get; set; }
        public string correctansweroption5 { get; set; }
    }

    public class Correctorderoption
    {
        public string correctorderoption1 { get; set; }
        public string correctorderoption2 { get; set; }
        public string correctorderoption3 { get; set; }
        public string correctorderoption4 { get; set; }
        public string correctorderoption5 { get; set; }
    }

}
