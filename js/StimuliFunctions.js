const questionText = document.getElementById("question-Text");
const questionImage = document.getElementById("question-Image");
const responsesText = document.getElementById("responses-Text");
let questionCounter = 0;
let currentQuestion;
let availableQuestions = [];
let OrderedCounter = 0;
var VisParameters = {
  Number: [],
  //QuestionText: [],
  Type: [],
  Density: [],
  Level: [],
  CorrectAnswer: [],
  Response: [],
  Correct: [],
  ResponseTime: [],
  StartTime: [],
  EndTime: [],
  QNum: [],
  MentalDemand: [],
  PhysicalDemand: [],
  TemporalDemand: [],
  Effort: [],
  Performance: [],
  Frustration: []
};
var StartTime;


window.onload = function() {
    StartTime = Date.now();
    console.log(StartTime);
    setAvailableQuestions();
    //#If you want randomized questions
    getNewQuestion();
  };

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

  //#get random question
  const questionIndex = availableQuestions[Math.floor(Math.random() * availableQuestions.length)]
  currentQuestion = questionIndex;
  questionText.innerHTML = currentQuestion.q;
  responsesText.innerHTML = currentQuestion.options;
  questionImage.src = currentQuestion.image;
  questionImage.style.maxWidth = "100%";
  questionImage.style.maxHeight = "100%";
  //#call randomization of radio buttons
  $('.question').randomize('.radio');
  $("input:radio[name='mentalDemand']").prop('checked', false);
  $("input:radio[name='PhysicalDemand']").prop('checked', false);
  $("input:radio[name='TemporalDemand']").prop('checked', false);
  $("input:radio[name='Effort']").prop('checked', false);
  $("input:radio[name='Performance']").prop('checked', false);
  $("input:radio[name='Frustration']").prop('checked', false);

  //#get position of 'questionIndex' from the availableQuestion Array
  const index1 = availableQuestions.indexOf(questionIndex);
  //#remove the questionIndex from the array so there are no repeats
  availableQuestions.splice(index1, 1);

  questionCounter = questionCounter + 1;

};

//#set questions and options ordered
function OrderedQuestions() {
  //#get questions in order of dictionary
  const questionIndex = availableQuestions[OrderedCounter]
  currentQuestion = questionIndex;
  questionText.innerHTML = currentQuestion.q;
  responsesText.innerHTML = currentQuestion.options;
  questionImage.src = currentQuestion.image;
  $('.question').randomize('.radio-inline');
  OrderedCounter++;
  questionCounter++;

};


//#what to do when you hit the next button - is there where I should put the calls to send to the database?
function next() {
  var EndTime = Date.now();
  console.log(EndTime);
  if ($("#stimuli")[0].checkValidity() && $("#MentalDemand")[0].checkValidity() &&
      $("#PhysicalDemand")[0].checkValidity() && $("#TemporalDemand")[0].checkValidity() &&
      $("#Effort")[0].checkValidity() && $("#Performance")[0].checkValidity() && $("#Frustration")[0].checkValidity()) {
    var ans = document.querySelector('input[name="diff1"]:checked').value;
    var MentalDemand = document.querySelector('input[name="mentalDemand"]:checked').value;
    var PhysicalDemand = document.querySelector('input[name="PhysicalDemand"]:checked').value;
    var TemporalDemand = document.querySelector('input[name="TemporalDemand"]:checked').value;
    var Effort = document.querySelector('input[name="Effort"]:checked').value;
    var Performance = document.querySelector('input[name="Performance"]:checked').value;
    var Frustration = document.querySelector('input[name="Frustration"]:checked').value;
    if(currentQuestion==undefined){
      console.log("quiz over");
      alert('실험이 완료되었습니다. 저장된 파일을 (본인의 이름).csv로 변경해서 보내주세요. (ex : 임수빈.csv)');
      downloadCSV(VisParameters);
    }
    VisParameters.Number.push(questionCounter);
    //VisParameters.QuestionText.push(currentQuestion.q);
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
    VisParameters.MentalDemand.push(MentalDemand);
    VisParameters.PhysicalDemand.push(PhysicalDemand);
    VisParameters.TemporalDemand.push(TemporalDemand);
    VisParameters.Effort.push(Effort);
    VisParameters.Performance.push(Performance);
    VisParameters.Frustration.push(Frustration);
    console.log(VisParameters);

    //test
    if (questionCounter < 15) {
      getNewQuestion();
    } else if (questionCounter > 14 && questionCounter < 29) {
      getNewQuestion();
    } else if (questionCounter > 28 && questionCounter < (AllStimuli.length)) {
      getNewQuestion();
    } else if (questionCounter == (AllStimuli.length) && availableQuestions.length == 0) {
      console.log("quiz over");
      alert('실험이 완료되었습니다. 저장된 파일을 (본인의 이름).csv로 변경해서 보내주세요. (ex : 임수빈.csv)');
      downloadCSV(VisParameters);
      //localStorage.vis = JSON.stringify(VISParameters);
      //window.location.href = "/quest"
    } else if (availableQuestions.length == 0) {
      console.log("quiz over");
      alert('실험이 완료되었습니다. 저장된 파일을 (본인의 이름).csv로 변경해서 보내주세요. (ex : 임수빈.csv)');
      downloadCSV(VisParameters);
      //window.location.href = "/quest"
    } else {
      getNewQuestion();
    }
  } else {
    //Validate Form
    if (!$("#stimuli")[0].checkValidity()) $("#stimuli")[0].reportValidity();
    if (!$("#MentalDemand")[0].checkValidity()) $("#MentalDemand")[0].reportValidity();
    if (!$("#PhysicalDemand")[0].checkValidity()) $("#PhysicalDemand")[0].reportValidity();
    if (!$("#TemporalDemand")[0].checkValidity()) $("#TemporalDemand")[0].reportValidity();
    if (!$("#Effort")[0].checkValidity()) $("#Effort")[0].reportValidity();
    if (!$("#Performance")[0].checkValidity()) $("#Performance")[0].reportValidity();
    if (!$("#Frustration")[0].checkValidity()) $("#Frustration")[0].reportValidity();
  }
};

/*
function downloadDictionaryAsCSV(dictionary, filename) {
  // Convert the dictionary to a CSV string
  const csvLines = [];
  const keys = Object.keys(dictionary);
  const values = keys.map(key => dictionary[key]);

  // Add header row with dictionary keys
  csvLines.push(keys.join(','));
  // Add a row with the dictionary values
  csvLines.push(values.join(','));

  // Create a CSV string
  const csvContent = csvLines.join('\n');

  // Create a Blob with the CSV content
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });

  // Create a link element
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = filename;

  // Append link to the body
  document.body.appendChild(link);

  // Force a download
  link.click();

  // Clean up and remove the link
  link.parentNode.removeChild(link);
}
*/

function downloadCSV(VisParameters) {
  // Create a CSV array with titles as the first row
  const csvRows = [
    Object.keys(VisParameters).join(','), // Header row
  ];

  // Determine the number of rows based on the length of the arrays
  const numberOfRows = VisParameters.Number.length || 0;

  // Loop over the number of rows to build each line
  for (let i = 0; i < numberOfRows; i++) {
    // Map the keys of the VisParameters to their respective values for the current index
    const row = Object.keys(VisParameters).map(key => {
      // Ensure undefined or null values are replaced by an empty string
      const value = VisParameters[key][i] == null ? '' : VisParameters[key][i];
      // If the value contains a comma or a new line, wrap it in double quotes
      const escaped = value.toString().includes(',') ? `"${value}"` : value;
      return escaped;
    });

    // Join all the row values by commas and push into csvRows
    csvRows.push(row.join(','));
  }

  // Join all rows by new line characters to form the CSV string
  const csvString = csvRows.join('\n');

  // Create a Blob with the CSV data
  const blob = new Blob([csvString], { type: 'text/csv' });

  // Create an anchor element and dispatch a click event to trigger the download
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'vis-parameters.csv'; // Name the file here
  document.body.appendChild(a);
  a.click();

  // Clean up the DOM by removing the anchor element if necessary
  document.body.removeChild(a);
}
