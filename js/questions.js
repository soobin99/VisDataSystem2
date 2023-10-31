$(document).ready(function() {

  var $button = $("#btn1").hide(),
    $cbs = $('input[name="paper1"]').click(function() {
      $button.toggle($cbs.is(":checked"));
    });

});

var QSparameters = {
  Number: [],
  Answer: [],
  Time: [],
  StartTime: [],
  EndTime: [],
  CorrectAns: [],
  IsCorrect: []
};
var StartTime = Date.now();

setTimeout(function() {
  window.location.href = "/transition";
}, 3 * 60 * 1000);

function submitanswer(qNumber, shouldredirect, StartTimestamp) {

  const correctanswers = ["A", "D", "B", "D", "B", "E", "A", "C", "E", "E"]
  var Answer = $("input[type=radio][name=paper" + qNumber + "]:checked").val();
  var EndTime = Date.now();
  var time = EndTime - StartTimestamp;

  //add parameters
  QSparameters.Number.push(qNumber);
  QSparameters.Answer.push(Answer);
  QSparameters.Time.push(time);
  QSparameters.StartTime.push(StartTimestamp);
  QSparameters.EndTime.push(EndTime);
  QSparameters.CorrectAns.push(correctanswers[(qNumber - 1)]);
  QSparameters.IsCorrect.push((correctanswers[(qNumber - 1)] === Answer));

  if (shouldredirect) { //실험 완료
    console.log("quiz over");
    alert('실험이 완료되었습니다. 저장된 파일을 QSparameters_(이름).csv로 변경해서 보내주세요.\n(ex : QSparameters_임수빈.csv)');
    downloadCSV(QSparameters);
  }
}

$(function() {
  $('#btn1').click(function() {
    submitanswer(1, false, StartTime);
    StartTime = Date.now();
    $('#Q1').hide();
    $('#Q2').show();
  });
  $('#btn2').click(function() {
    submitanswer(2, false, StartTime);
    StartTime = Date.now();
    $('#Q2').hide();
    $('#Q3').show();
  });
  $('#btn3').click(function() {
    submitanswer(3, false, StartTime);
    StartTime = Date.now();
    $('#Q3').hide();
    $('#Q4').show();
  });
  $('#btn4').click(function() {
    submitanswer(4, false, StartTime);
    StartTime = Date.now();
    $('#Q4').hide();
    $('#Q5').show();
  });
  $('#btn5').click(function() {
    submitanswer(5, false, StartTime);
    StartTime = Date.now();
    $('#Q5').hide();
    $('#Q6').show();
  });
  $('#btn6').click(function() {
    submitanswer(6, false, StartTime);
    StartTime = Date.now();
    $('#Q6').hide();
    $('#Q7').show();
  });
  $('#btn7').click(function() {
    submitanswer(7, false, StartTime);
    StartTime = Date.now();
    $('#Q7').hide();
    $('#Q8').show();
  });
  $('#btn8').click(function() {
    submitanswer(8, false, StartTime);
    StartTime = Date.now();
    $('#Q8').hide();
    $('#Q9').show();
  });
  $('#btn9').click(function() {
    submitanswer(9, false, StartTime);
    StartTime = Date.now();
    $('#Q9').hide();
    $('#Q10').show();
  });
});



function downloadCSV(QSparameters) {
  // Create a CSV array with titles as the first row
  const csvRows = [
    Object.keys(QSparameters).join(','), // Header row
  ];

  // Determine the number of rows based on the length of the arrays
  const numberOfRows = QSparameters.Number.length || 0;

  // Loop over the number of rows to build each line
  for (let i = 0; i < numberOfRows; i++) {
    // Map the keys of the QSparameters to their respective values for the current index
    const row = Object.keys(QSparameters).map(key => {
      // Ensure undefined or null values are replaced by an empty string
      const value = QSparameters[key][i] == null ? '' : QSparameters[key][i];
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
  a.download = 'QSparameters_.csv'; // Name the file here
  document.body.appendChild(a);
  a.click();

  // Clean up the DOM by removing the anchor element if necessary
  document.body.removeChild(a);
}
