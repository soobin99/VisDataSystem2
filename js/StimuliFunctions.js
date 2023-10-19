const questionText = document.getElementById("question-Text");
const questionImage = document.getElementById("question-Image");
const responsesText = document.getElementById("responses-Text");

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
$.fn.randomize = function (selector) {
    (selector ? this.find(selector) : this).parent().each(function () {
        $(this).children(selector).sort(function () {
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

    if (questionCounter == 16) {
        currentQuestion = {
            q: "<b>잠시 쉬는 시간입니다</b>" + "<br>" +
             "충분한 휴식을 가져주세요. 단, 1시간 이상의 휴식은 금지됩니다."
             + "<br>" + "<br>" +
             "다음 문제를 풀 준비가 되었다면 'C'를 눌러주세요",
            image: "/static/img/Logo.PNG",
            options: "<label class='radio' style=':hover {border:none}'>" + "<input name='diff1' type='radio' value='A' required />" +
                "A" + "</label>" + "<label class='radio' style=':hover {border:none}'>" +
                "<input name='diff1' type='radio' value='B' required/>" + "B" + " </label>" +
                "<label class='radio' style=':hover {border:none}'>" + "<input name='diff1' type='radio' value='C' required/>" +
                "C" + " </label>",
            answer: "C",
            type: "break",
            density: "7",
            level: "break",
            qnum: 43
        }

        questionText.innerHTML = currentQuestion.q;
        responsesText.innerHTML = currentQuestion.options;
        questionImage.src = currentQuestion.image;
        questionImage.style.maxWidth = "330px";
        questionImage.style.maxHeight = "321px";

        $('.question').randomize('.radio');

        //width:100%; max-width:330px; height: 100%; max-height: 321px;

    } else {
        //#get random question
        const questionIndex = availableQuestions[Math.floor(Math.random() * availableQuestions.length)]
        currentQuestion = questionIndex;

        //console.log(currentQuestion.image)
        //console.log(questionCounter)
        questionText.innerHTML = currentQuestion.q;
        responsesText.innerHTML = currentQuestion.options;
        questionImage.src = currentQuestion.image;
        questionImage.style.maxWidth = "100%";
        questionImage.style.maxHeight = "100%";
        //#call randomization of radio buttons
        $('.question').randomize('.radio');

        //#get position of 'questionIndex' from the availableQuestion Array
        const index1 = availableQuestions.indexOf(questionIndex);
        //#remove the questionIndex from the array so there are no repeats
        availableQuestions.splice(index1, 1);
    }

    questionCounter = questionCounter + 1;

};

//#set questions and options ordered
/*function OrderedQuestions(){
    //TO DO: maybe set progress bar here?

    //#get questions in order of dictionary
    const questionIndex = availableQuestions[OrderedCounter]
    currentQuestion = questionIndex;
    questionText.innerHTML = currentQuestion.q;
    responsesText.innerHTML = currentQuestion.options;
    questionImage.src = currentQuestion.image;
    $('.question').randomize('.radio-inline');
    OrderedCounter++;
    questionCounter++;

};*/


//#what to do when you hit the next button - is there where I should put the calls to send to the database?
function next() {
    if ($("#stimuli")[0].checkValidity()) {
        var ans = document.querySelector('input[name="diff1"]:checked').value;
            if (questionCounter < 15) {
                getNewQuestion();
            } else if (questionCounter > 14 && questionCounter < 29) {
                getNewQuestion();
                document.getElementById("phase1").classList.remove("is-active");
                document.getElementById("phase1").classList.add("is-complete");
                document.getElementById("phase2").classList.add("is-active");
            } else if (questionCounter > 28 && questionCounter < (AllStimuli.length + 1)) {
                getNewQuestion();
                document.getElementById("phase2").classList.remove("is-active");
                document.getElementById("phase2").classList.add("is-complete");
                document.getElementById("phase3").classList.add("is-active");
            } else if (questionCounter == (AllStimuli.length + 1) && availableQuestions.length == 0) {
                //console.log("quiz over");
                window.location.href = "/quest"
            } else if (availableQuestions.length == 0) {
                //console.log("quiz over");
                window.location.href = "/quest"
            } else {
                getNewQuestion();
                document.getElementById("phase2").classList.remove("is-active");
                document.getElementById("phase2").classList.add("is-complete");
                document.getElementById("phase3").classList.add("is-active");
            }


        //seen.push(questionCounter)
        var EndTime = Date.now()
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

        //update database
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

    } else {
        //Validate Form
        $("#stimuli")[0].reportValidity()
    }

};


window.onload = function () {

    setAvailableQuestions();
    //#If you want randomized questions
    getNewQuestion();

    //#if you want ordered questions
    //OrderedQuestions();


};
