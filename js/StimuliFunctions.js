const questionText = document.getElementById("question-Text");
const questionImage = document.getElementById("question-Image");
const responsesText = document.getElementById("responses-Text");
const responsesSurvey = document.getElementById("TLX-Survey");

let questionCounter = 0;
let currentQuestion;
let availableQuestions = [];
let OrderedCounter = 0;

var VisParameters = {
  Number: [],
  QuestionText: [],
  Type: [],
  Density: [],
  Level: [],
  CorrectAnswer: [],
  Response: [],
  Correct: [],
  ResponseTime: [],
  StartTime: [],
  EndTime: [],
  QNum: []
};

//let seen = [];

//where to put StartTime variable?
var StartTime = Date.now();

//#Jquery function that randomizes the responses
$.fn.randomize = function(selector) {
  (selector ? this.find(selector) : this).parent().each(function() {
    $(this).children(selector).sort(function() {
      return Math.random() - 0.5;
    }).detach().appendTo(this);
  });

  return this;
};

//#function to remove duplicates from an array
// Array.prototype.removeDuplicates = function () {
//     return this.filter(function (item, index, self) {
//         return self.indexOf(item) == index;
//     });
// };

//#push the questions into availableQuestions array
function setAvailableQuestions() {
  const totalQuestion = AllStimuli.length;
  for (let i = 0; i < totalQuestion; i++) {
    availableQuestions.push(AllStimuli[i])
  }
};

function getNewQuestion() {

  StartTime = Date.now();
  document.getElementById("NxtButton").disabled = false;
  responsesText.style.display = "inline-block";
  responsesSurvey.style.display = "inline-block";

  //#get random question
  const questionIndex = availableQuestions[Math.floor(Math.random() * availableQuestions.length)]
  currentQuestion = questionIndex;
  questionText.innerHTML = currentQuestion.q;
  responsesText.innerHTML = currentQuestion.options;
  responsesSurvey.innerHTML = '문제가 얼마나 어려웠습니까?'+TLXAnswerMD+
                              '문제를 푸는데 신체적으로 얼마나 어려웠습니까?'+TLXAnswerPD+
                              '문제를 푸는데 시간적 압박을 느꼈습니까?'+TLXAnswerTD+
                              '문제를 푸는데 얼마나 집중하고 신경을 썼습니까?'+TLXAnswerEF+
                              '문제를 얼마나 정확하게 푼 것 같습니까? (정답에 대한 확신)'+TLXAnswerPF+
                              '문제를 직면하고 해결하는데 있어서 당황스럽거나 부담스러웠던 정도가 어떻게 됩니까?'+TLXAnswerFR;
  questionImage.src = currentQuestion.image;
  questionImage.style.maxWidth = "100%";
  questionImage.style.maxHeight = "100%";
  //#call randomization of radio buttons
  $('.question').randomize('.radio');

  //#get position of 'questionIndex' from the availableQuestion Array
  const index1 = availableQuestions.indexOf(questionIndex);
  //#remove the questionIndex from the array so there are no repeats
  availableQuestions.splice(index1, 1);

  questionCounter = questionCounter + 1;

};

//#set questions and options ordered
function OrderedQuestions(){
    //#get questions in order of dictionary
    const questionIndex = availableQuestions[OrderedCounter]
    currentQuestion = questionIndex;
    questionText.innerHTML = currentQuestion.q;
    responsesText.innerHTML = currentQuestion.options;
    //responsesSurvey.innerHTML = ;
    questionImage.src = currentQuestion.image;
    $('.question').randomize('.radio-inline');
    OrderedCounter++;
    questionCounter++;

};


//#what to do when you hit the next button - is there where I should put the calls to send to the database?
function next() {
  var EndTime = Date.now()
  if ($("#stimuli")[0].checkValidity()) {
    var ans = document.querySelector('input[name="diff1"]:checked').value;
    if (questionCounter < 15) {
      getNewQuestion();
    } else if (questionCounter > 14 && questionCounter < 29) {
      getNewQuestion();
    } else if (questionCounter > 28 && questionCounter < (AllStimuli.length + 1)) {
      getNewQuestion();
    } else if (questionCounter == (AllStimuli.length + 1) && availableQuestions.length == 0) {
      console.log("quiz over");
      //localStorage.vis = JSON.stringify(VISParameters);
      //window.location.href = "/quest"
    } else if (availableQuestions.length == 0) {
      console.log("quiz over");
      //window.location.href = "/quest"
    } else {
      getNewQuestion();
    }


    //seen.push(questionCounter)
    //document.getElementById("NxtButton").disabled = true;
    //responsesText.style.display = "none";

    VisParameters.Number.push(questionCounter);
    VisParameters.QuestionText.push(currentQuestion.q);
    VisParameters.Type.push(currentQuestion.type);
    VisParameters.Density.push(currentQuestion.density);
    VisParameters.Level.push(currentQuestion.level);
    VisParameters.CorrectAnswer.push(currentQuestion.answer);
    VisParameters.Response.push(ans);
    VisParameters.Correct.push((currentQuestion.answer === ans));
    VisParameters.ResponseTime.push((EndTime - StartTime));
    VisParameters.StartTime.push(StartTime);
    VisParameters.EndTime.push(EndTime);
    VisParameters.QNum.push(currentQuestion.qnum);
    console.log(VisParameters);

    //update database
    /*
    $.ajax({
        type: 'POST',
        contentType: 'application/json',
        url: '/VISParameters',
        dataType: 'json',
        data: JSON.stringify(VisParameters),
        success: function (result) {
            console.log(result);
        },
        error: function (result) {
            console.log(result);
        }
    });
    */

  } else {
    //Validate Form
    $("#stimuli")[0].reportValidity()
  }

};


window.onload = function() {

  setAvailableQuestions();
  //#If you want randomized questions
  getNewQuestion();

  //#if you want ordered questions
  //OrderedQuestions();


};
