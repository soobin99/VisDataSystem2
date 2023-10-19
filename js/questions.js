var EasyAnswer = "<label class='radio' style=':hover {border:none}'>" + "<input name='diff1' type='radio' value='Higher' required />" +
  "더 높습니다" + "</label>" + "<label class='radio' style=':hover {border:none}'>" +
  "<input name='diff1' type='radio' value='Lower' required/>" + "더 낮습니다" + " </label>" +
  "<label class='radio' style=':hover {border:none}'>" + "<input name='diff1' type='radio' value='Same' required/>" +
  "같습니다" + " </label>";

var MediumQuestionHigh = "사망자 수(deaths)가 가장 높은 3개국 중 입원률(hospitalizations)이 가장 많은 국가는 어디입니까?";
var MediumQuestionLow = "사망자 수(deaths)가 가장 적은 3개국 중 입원률(hospitalizations)이 가장 낮은 국가는 어디입니까?"

var DifficultAnswer =
  "<label class='radio'>" + "<input name='diff1' type='radio' value='Less33' required/>" +
  "<sup>1</sup>&frasl;<sub>3</sub> 이하" + "</label>" +
  "<label class='radio'>" + "<input name='diff1' type='radio' value='33-66' required/>" +
  "<sup>1</sup>&frasl;<sub>3</sub> -- <sup>2</sup>&frasl;<sub>3</sub> </label>" +
  "<label class='radio'>" + "<input name='diff1' type='radio' value='More66' required/>" +
  "<sup>2</sup>&frasl;<sub>3</sub> 이상 </label>";

var TLXAnswerMD = "<label class='radio' style=':hover {border:none}'>" + "<input name='mentalDemand' type='radio' value='0' required />" + "0" + "</label>" +
  "<label class='radio' style=':hover {border:none}'>" + "<input name='mentalDemand' type='radio' value='5' required/>" + "5" + " </label>" +
  "<label class='radio' style=':hover {border:none}'>" + "<input name='mentalDemand' type='radio' value='10' required/>" + "10" + " </label>" +
  "<label class='radio' style=':hover {border:none}'>" + "<input name='mentalDemand' type='radio' value='15' required/>" + "15" + " </label>" +
  "<label class='radio' style=':hover {border:none}'>" + "<input name='mentalDemand' type='radio' value='20' required/>" + "20" + " </label>" +
  "<label class='radio' style=':hover {border:none}'>" + "<input name='mentalDemand' type='radio' value='25' required/>" + "25" + " </label>" +
  "<label class='radio' style=':hover {border:none}'>" + "<input name='mentalDemand' type='radio' value='30' required/>" + "30" + " </label>" +
  "<label class='radio' style=':hover {border:none}'>" + "<input name='mentalDemand' type='radio' value='35' required/>" + "35" + " </label>" +
  "<label class='radio' style=':hover {border:none}'>" + "<input name='mentalDemand' type='radio' value='40' required/>" + "40" + " </label>" +
  "<label class='radio' style=':hover {border:none}'>" + "<input name='mentalDemand' type='radio' value='45' required/>" + "45" + " </label>" +
  "<label class='radio' style=':hover {border:none}'>" + "<input name='mentalDemand' type='radio' value='50' required/>" + "50" + " </label>" +
  "<label class='radio' style=':hover {border:none}'>" + "<input name='mentalDemand' type='radio' value='55' required/>" + "55" + " </label>" +
  "<label class='radio' style=':hover {border:none}'>" + "<input name='mentalDemand' type='radio' value='60' required/>" + "60" + " </label>" +
  "<label class='radio' style=':hover {border:none}'>" + "<input name='mentalDemand' type='radio' value='65' required/>" + "65" + " </label>" +
  "<label class='radio' style=':hover {border:none}'>" + "<input name='mentalDemand' type='radio' value='70' required/>" + "70" + " </label>" +
  "<label class='radio' style=':hover {border:none}'>" + "<input name='mentalDemand' type='radio' value='75' required/>" + "75" + " </label>" +
  "<label class='radio' style=':hover {border:none}'>" + "<input name='mentalDemand' type='radio' value='80' required/>" + "80" + " </label>" +
  "<label class='radio' style=':hover {border:none}'>" + "<input name='mentalDemand' type='radio' value='85' required/>" + "85" + " </label>" +
  "<label class='radio' style=':hover {border:none}'>" + "<input name='mentalDemand' type='radio' value='90' required/>" + "90" + " </label>" +
  "<label class='radio' style=':hover {border:none}'>" + "<input name='mentalDemand' type='radio' value='95' required/>" + "95" + " </label>" +
  "<label class='radio' style=':hover {border:none}'>" + "<input name='mentalDemand' type='radio' value='100' required/>" + "100" + " </label>";

  var TLXAnswerPD = "<label class='radio' style=':hover {border:none}'>" + "<input name='PhysicalDemand' type='radio' value='0' required />" + "0" + "</label>" +
    "<label class='radio' style=':hover {border:none}'>" + "<input name='PhysicalDemand' type='radio' value='5' required/>" + "5" + " </label>" +
    "<label class='radio' style=':hover {border:none}'>" + "<input name='PhysicalDemand' type='radio' value='10' required/>" + "10" + " </label>" +
    "<label class='radio' style=':hover {border:none}'>" + "<input name='PhysicalDemand' type='radio' value='15' required/>" + "15" + " </label>" +
    "<label class='radio' style=':hover {border:none}'>" + "<input name='PhysicalDemand' type='radio' value='20' required/>" + "20" + " </label>" +
    "<label class='radio' style=':hover {border:none}'>" + "<input name='PhysicalDemand' type='radio' value='25' required/>" + "25" + " </label>" +
    "<label class='radio' style=':hover {border:none}'>" + "<input name='PhysicalDemand' type='radio' value='30' required/>" + "30" + " </label>" +
    "<label class='radio' style=':hover {border:none}'>" + "<input name='PhysicalDemand' type='radio' value='35' required/>" + "35" + " </label>" +
    "<label class='radio' style=':hover {border:none}'>" + "<input name='PhysicalDemand' type='radio' value='40' required/>" + "40" + " </label>" +
    "<label class='radio' style=':hover {border:none}'>" + "<input name='PhysicalDemand' type='radio' value='45' required/>" + "45" + " </label>" +
    "<label class='radio' style=':hover {border:none}'>" + "<input name='PhysicalDemand' type='radio' value='50' required/>" + "50" + " </label>" +
    "<label class='radio' style=':hover {border:none}'>" + "<input name='PhysicalDemand' type='radio' value='55' required/>" + "55" + " </label>" +
    "<label class='radio' style=':hover {border:none}'>" + "<input name='PhysicalDemand' type='radio' value='60' required/>" + "60" + " </label>" +
    "<label class='radio' style=':hover {border:none}'>" + "<input name='PhysicalDemand' type='radio' value='65' required/>" + "65" + " </label>" +
    "<label class='radio' style=':hover {border:none}'>" + "<input name='PhysicalDemand' type='radio' value='70' required/>" + "70" + " </label>" +
    "<label class='radio' style=':hover {border:none}'>" + "<input name='PhysicalDemand' type='radio' value='75' required/>" + "75" + " </label>" +
    "<label class='radio' style=':hover {border:none}'>" + "<input name='PhysicalDemand' type='radio' value='80' required/>" + "80" + " </label>" +
    "<label class='radio' style=':hover {border:none}'>" + "<input name='PhysicalDemand' type='radio' value='85' required/>" + "85" + " </label>" +
    "<label class='radio' style=':hover {border:none}'>" + "<input name='PhysicalDemand' type='radio' value='90' required/>" + "90" + " </label>" +
    "<label class='radio' style=':hover {border:none}'>" + "<input name='PhysicalDemand' type='radio' value='95' required/>" + "95" + " </label>" +
    "<label class='radio' style=':hover {border:none}'>" + "<input name='PhysicalDemand' type='radio' value='100' required/>" + "100" + " </label>";

    var TLXAnswerTD = "<label class='radio' style=':hover {border:none}'>" + "<input name='TemporalDemand' type='radio' value='0' required />" + "0" + "</label>" +
      "<label class='radio' style=':hover {border:none}'>" + "<input name='TemporalDemand' type='radio' value='5' required/>" + "5" + " </label>" +
      "<label class='radio' style=':hover {border:none}'>" + "<input name='TemporalDemand' type='radio' value='10' required/>" + "10" + " </label>" +
      "<label class='radio' style=':hover {border:none}'>" + "<input name='TemporalDemand' type='radio' value='15' required/>" + "15" + " </label>" +
      "<label class='radio' style=':hover {border:none}'>" + "<input name='TemporalDemand' type='radio' value='20' required/>" + "20" + " </label>" +
      "<label class='radio' style=':hover {border:none}'>" + "<input name='TemporalDemand' type='radio' value='25' required/>" + "25" + " </label>" +
      "<label class='radio' style=':hover {border:none}'>" + "<input name='TemporalDemand' type='radio' value='30' required/>" + "30" + " </label>" +
      "<label class='radio' style=':hover {border:none}'>" + "<input name='TemporalDemand' type='radio' value='35' required/>" + "35" + " </label>" +
      "<label class='radio' style=':hover {border:none}'>" + "<input name='TemporalDemand' type='radio' value='40' required/>" + "40" + " </label>" +
      "<label class='radio' style=':hover {border:none}'>" + "<input name='TemporalDemand' type='radio' value='45' required/>" + "45" + " </label>" +
      "<label class='radio' style=':hover {border:none}'>" + "<input name='TemporalDemand' type='radio' value='50' required/>" + "50" + " </label>" +
      "<label class='radio' style=':hover {border:none}'>" + "<input name='TemporalDemand' type='radio' value='55' required/>" + "55" + " </label>" +
      "<label class='radio' style=':hover {border:none}'>" + "<input name='TemporalDemand' type='radio' value='60' required/>" + "60" + " </label>" +
      "<label class='radio' style=':hover {border:none}'>" + "<input name='TemporalDemand' type='radio' value='65' required/>" + "65" + " </label>" +
      "<label class='radio' style=':hover {border:none}'>" + "<input name='TemporalDemand' type='radio' value='70' required/>" + "70" + " </label>" +
      "<label class='radio' style=':hover {border:none}'>" + "<input name='TemporalDemand' type='radio' value='75' required/>" + "75" + " </label>" +
      "<label class='radio' style=':hover {border:none}'>" + "<input name='TemporalDemand' type='radio' value='80' required/>" + "80" + " </label>" +
      "<label class='radio' style=':hover {border:none}'>" + "<input name='TemporalDemand' type='radio' value='85' required/>" + "85" + " </label>" +
      "<label class='radio' style=':hover {border:none}'>" + "<input name='TemporalDemand' type='radio' value='90' required/>" + "90" + " </label>" +
      "<label class='radio' style=':hover {border:none}'>" + "<input name='TemporalDemand' type='radio' value='95' required/>" + "95" + " </label>" +
      "<label class='radio' style=':hover {border:none}'>" + "<input name='TemporalDemand' type='radio' value='100' required/>" + "100" + " </label>";

      var TLXAnswerEF = "<label class='radio' style=':hover {border:none}'>" + "<input name='Effort' type='radio' value='0' required />" + "0" + "</label>" +
        "<label class='radio' style=':hover {border:none}'>" + "<input name='Effort' type='radio' value='5' required/>" + "5" + " </label>" +
        "<label class='radio' style=':hover {border:none}'>" + "<input name='Effort' type='radio' value='10' required/>" + "10" + " </label>" +
        "<label class='radio' style=':hover {border:none}'>" + "<input name='Effort' type='radio' value='15' required/>" + "15" + " </label>" +
        "<label class='radio' style=':hover {border:none}'>" + "<input name='Effort' type='radio' value='20' required/>" + "20" + " </label>" +
        "<label class='radio' style=':hover {border:none}'>" + "<input name='Effort' type='radio' value='25' required/>" + "25" + " </label>" +
        "<label class='radio' style=':hover {border:none}'>" + "<input name='Effort' type='radio' value='30' required/>" + "30" + " </label>" +
        "<label class='radio' style=':hover {border:none}'>" + "<input name='Effort' type='radio' value='35' required/>" + "35" + " </label>" +
        "<label class='radio' style=':hover {border:none}'>" + "<input name='Effort' type='radio' value='40' required/>" + "40" + " </label>" +
        "<label class='radio' style=':hover {border:none}'>" + "<input name='Effort' type='radio' value='45' required/>" + "45" + " </label>" +
        "<label class='radio' style=':hover {border:none}'>" + "<input name='Effort' type='radio' value='50' required/>" + "50" + " </label>" +
        "<label class='radio' style=':hover {border:none}'>" + "<input name='Effort' type='radio' value='55' required/>" + "55" + " </label>" +
        "<label class='radio' style=':hover {border:none}'>" + "<input name='Effort' type='radio' value='60' required/>" + "60" + " </label>" +
        "<label class='radio' style=':hover {border:none}'>" + "<input name='Effort' type='radio' value='65' required/>" + "65" + " </label>" +
        "<label class='radio' style=':hover {border:none}'>" + "<input name='Effort' type='radio' value='70' required/>" + "70" + " </label>" +
        "<label class='radio' style=':hover {border:none}'>" + "<input name='Effort' type='radio' value='75' required/>" + "75" + " </label>" +
        "<label class='radio' style=':hover {border:none}'>" + "<input name='Effort' type='radio' value='80' required/>" + "80" + " </label>" +
        "<label class='radio' style=':hover {border:none}'>" + "<input name='Effort' type='radio' value='85' required/>" + "85" + " </label>" +
        "<label class='radio' style=':hover {border:none}'>" + "<input name='Effort' type='radio' value='90' required/>" + "90" + " </label>" +
        "<label class='radio' style=':hover {border:none}'>" + "<input name='Effort' type='radio' value='95' required/>" + "95" + " </label>" +
        "<label class='radio' style=':hover {border:none}'>" + "<input name='Effort' type='radio' value='100' required/>" + "100" + " </label>";

        var TLXAnswerPF = "<label class='radio' style=':hover {border:none}'>" + "<input name='Performance' type='radio' value='0' required />" + "0" + "</label>" +
          "<label class='radio' style=':hover {border:none}'>" + "<input name='Performance' type='radio' value='5' required/>" + "5" + " </label>" +
          "<label class='radio' style=':hover {border:none}'>" + "<input name='Performance' type='radio' value='10' required/>" + "10" + " </label>" +
          "<label class='radio' style=':hover {border:none}'>" + "<input name='Performance' type='radio' value='15' required/>" + "15" + " </label>" +
          "<label class='radio' style=':hover {border:none}'>" + "<input name='Performance' type='radio' value='20' required/>" + "20" + " </label>" +
          "<label class='radio' style=':hover {border:none}'>" + "<input name='Performance' type='radio' value='25' required/>" + "25" + " </label>" +
          "<label class='radio' style=':hover {border:none}'>" + "<input name='Performance' type='radio' value='30' required/>" + "30" + " </label>" +
          "<label class='radio' style=':hover {border:none}'>" + "<input name='Performance' type='radio' value='35' required/>" + "35" + " </label>" +
          "<label class='radio' style=':hover {border:none}'>" + "<input name='Performance' type='radio' value='40' required/>" + "40" + " </label>" +
          "<label class='radio' style=':hover {border:none}'>" + "<input name='Performance' type='radio' value='45' required/>" + "45" + " </label>" +
          "<label class='radio' style=':hover {border:none}'>" + "<input name='Performance' type='radio' value='50' required/>" + "50" + " </label>" +
          "<label class='radio' style=':hover {border:none}'>" + "<input name='Performance' type='radio' value='55' required/>" + "55" + " </label>" +
          "<label class='radio' style=':hover {border:none}'>" + "<input name='Performance' type='radio' value='60' required/>" + "60" + " </label>" +
          "<label class='radio' style=':hover {border:none}'>" + "<input name='Performance' type='radio' value='65' required/>" + "65" + " </label>" +
          "<label class='radio' style=':hover {border:none}'>" + "<input name='Performance' type='radio' value='70' required/>" + "70" + " </label>" +
          "<label class='radio' style=':hover {border:none}'>" + "<input name='Performance' type='radio' value='75' required/>" + "75" + " </label>" +
          "<label class='radio' style=':hover {border:none}'>" + "<input name='Performance' type='radio' value='80' required/>" + "80" + " </label>" +
          "<label class='radio' style=':hover {border:none}'>" + "<input name='Performance' type='radio' value='85' required/>" + "85" + " </label>" +
          "<label class='radio' style=':hover {border:none}'>" + "<input name='Performance' type='radio' value='90' required/>" + "90" + " </label>" +
          "<label class='radio' style=':hover {border:none}'>" + "<input name='Performance' type='radio' value='95' required/>" + "95" + " </label>" +
          "<label class='radio' style=':hover {border:none}'>" + "<input name='Performance' type='radio' value='100' required/>" + "100" + " </label>";

          var TLXAnswerFR = "<label class='radio' style=':hover {border:none}'>" + "<input name='Frustration' type='radio' value='0' required />" + "0" + "</label>" +
            "<label class='radio' style=':hover {border:none}'>" + "<input name='Frustration' type='radio' value='5' required/>" + "5" + " </label>" +
            "<label class='radio' style=':hover {border:none}'>" + "<input name='Frustration' type='radio' value='10' required/>" + "10" + " </label>" +
            "<label class='radio' style=':hover {border:none}'>" + "<input name='Frustration' type='radio' value='15' required/>" + "15" + " </label>" +
            "<label class='radio' style=':hover {border:none}'>" + "<input name='Frustration' type='radio' value='20' required/>" + "20" + " </label>" +
            "<label class='radio' style=':hover {border:none}'>" + "<input name='Frustration' type='radio' value='25' required/>" + "25" + " </label>" +
            "<label class='radio' style=':hover {border:none}'>" + "<input name='Frustration' type='radio' value='30' required/>" + "30" + " </label>" +
            "<label class='radio' style=':hover {border:none}'>" + "<input name='Frustration' type='radio' value='35' required/>" + "35" + " </label>" +
            "<label class='radio' style=':hover {border:none}'>" + "<input name='Frustration' type='radio' value='40' required/>" + "40" + " </label>" +
            "<label class='radio' style=':hover {border:none}'>" + "<input name='Frustration' type='radio' value='45' required/>" + "45" + " </label>" +
            "<label class='radio' style=':hover {border:none}'>" + "<input name='Frustration' type='radio' value='50' required/>" + "50" + " </label>" +
            "<label class='radio' style=':hover {border:none}'>" + "<input name='Frustration' type='radio' value='55' required/>" + "55" + " </label>" +
            "<label class='radio' style=':hover {border:none}'>" + "<input name='Frustration' type='radio' value='60' required/>" + "60" + " </label>" +
            "<label class='radio' style=':hover {border:none}'>" + "<input name='Frustration' type='radio' value='65' required/>" + "65" + " </label>" +
            "<label class='radio' style=':hover {border:none}'>" + "<input name='Frustration' type='radio' value='70' required/>" + "70" + " </label>" +
            "<label class='radio' style=':hover {border:none}'>" + "<input name='Frustration' type='radio' value='75' required/>" + "75" + " </label>" +
            "<label class='radio' style=':hover {border:none}'>" + "<input name='Frustration' type='radio' value='80' required/>" + "80" + " </label>" +
            "<label class='radio' style=':hover {border:none}'>" + "<input name='Frustration' type='radio' value='85' required/>" + "85" + " </label>" +
            "<label class='radio' style=':hover {border:none}'>" + "<input name='Frustration' type='radio' value='90' required/>" + "90" + " </label>" +
            "<label class='radio' style=':hover {border:none}'>" + "<input name='Frustration' type='radio' value='95' required/>" + "95" + " </label>" +
            "<label class='radio' style=':hover {border:none}'>" + "<input name='Frustration' type='radio' value='100' required/>" + "100" + " </label>";


const Trainingsurvey = [{
    q: "프랑스에서 지난 달에 비해 12월의 case가 더 높습니까, 낮습니까, 아니면 같습니까?",
    image: "img/stimuli/training/Vert-Vert-7.png",
    col1: "2020년 11월 20일 벨기에(Belgium)의 평균 case 수는 352건, 캐나다의 평균 case는 125건, 프랑스의 평균 case는 395건, 독일의 평균 case는 220건, 포르투갈의 평균 case는 630건, 영국의 평균 case는 327건, 영국의 평균 case는 327건이었습니다. 미국의 평균 case는 515건이었습니다.",
    col2: "2020년 12월 20일 기준 벨기에(Belgium)의 평균 case 수는 219건, 캐나다의 평균 case는 182건, 프랑스의 평균 case는 206건, 독일의 평균 case는 280건, 포르투갈의 평균 case는 357건, 영국의 평균 case는 401건, 영국의 평균 case는 401건이었습니다. 미국의 주에는 평균 660건의 case가 있었습니다.",
    options: EasyAnswer,
    answer: "Lower",
    type: "Vert-Vert",
    density: "7",
    level: "Easy",
    qnum: 1
  },
  {
    q: "덴마크(Denmark)에서 지난 달에 비해 3월의 case가 더 높습니까, 낮습니까, 아니면 같습니까?",
    image: "img/stimuli/training/Vert-Rad-7.png",
    options: EasyAnswer,
    answer: "Lower",
    type: "Vert-Rad",
    density: "7",
    level: "Easy",
    qnum: 2
  },
  {
    q: "에스토니아(Estonia)에서 12월의 case가 전월에 비해 더 높습니까, 낮습니까, 아니면 같습니까?",
    image: "img/stimuli/training/Vert-Star-7.png",
    options: EasyAnswer,
    answer: "Higher",
    type: "Vert-Star",
    density: "7",
    level: "Easy",
    qnum: 3
  },
  {
    q: "볼리비아(Bolivia)에서 지난 달에 비해 6월의 case가 높습니까, 낮습니까, 같습니까?",
    image: "img/stimuli/training/Horiz-Vert-7.png",
    options: EasyAnswer,
    answer: "Higher",
    type: "Horiz-Vert",
    density: "7",
    level: "Easy",
    qnum: 4
  }

]

const AllStimuli = [{
    q: "덴마크(Denmark)에서 지난 달에 비해 11월의 case가 더 높습니까, 낮습니까, 아니면 같습니까?",
    image: "img/stimuli/Easy/Vert-Vert-7.png",
    options: EasyAnswer,
    answer: "Higher",
    type: "Vert-Vert",
    density: "7",
    level: "Easy",
    qnum: 1
  },
  {
    q: "몰타(Malta)에서 지난 달에 비해 11월의 case가 더 높습니까, 낮습니까, 아니면 같습니까?",
    image: "img/stimuli/Easy/Vert-Vert-14.png",
    options: EasyAnswer,
    answer: "Lower",
    type: "Vert-Vert",
    density: "14",
    level: "Easy",
    qnum: 2
  },
  {
    q: "몰도바(Moldova)의 경우, 지난 달에 비해 4월의 case가 더 높습니까, 낮습니까, 아니면 같습니까?",
    image: "img/stimuli/Easy/Vert-Horiz-7.png",
    options: EasyAnswer,
    answer: "Lower",
    type: "Vert-Horiz",
    density: "7",
    level: "Easy",
    qnum: 3
  },
  {
    q: "모로코(Morocco)에서 지난 달에 비해 6월의 case가 더 높습니까, 낮습니까, 아니면 같습니까?",
    image: "img/stimuli/Easy/Vert-Horiz-14.png",
    options: EasyAnswer,
    answer: "Higher",
    type: "Vert-Horiz",
    density: "14",
    level: "Easy",
    qnum: 4
  },
  {
    q: "핀란드(Finland)의 경우 전월 대비 9월의 case가 더 높습니까, 낮습니까, 아니면 같습니까?",
    image: "img/stimuli/Easy/Horiz-Vert-7.png",
    options: EasyAnswer,
    answer: "Higher",
    type: "Horiz-Vert",
    density: "7",
    level: "Easy",
    qnum: 5
  },
  {
    q: "불가리아(Bulgaria)의 9월 case는 전월 대비 증가, 감소 또는 동일합니까?",
    image: "img/stimuli/Easy/Horiz-Vert-14.png",
    options: EasyAnswer,
    answer: "Higher",
    type: "Horiz-Vert",
    density: "14",
    level: "Easy",
    qnum: 6
  },
  {
    q: "세이셸(Seychelles)에서 지난 달에 비해 11월의 case가 더 높습니까, 낮습니까, 아니면 같습니까?",
    image: "img/stimuli/Easy/Vert-Rad-7.png",
    options: EasyAnswer,
    answer: "Higher",
    type: "Vert-Rad",
    density: "7",
    level: "Easy",
    qnum: 7
  },
  {
    q: "레바논(Lebanon)에서 지난 달에 비해 3월의 case가 더 높습니까, 낮습니까, 아니면 같습니까?",
    image: "img/stimuli/Easy/Vert-Rad-14.png",
    options: EasyAnswer,
    answer: "Higher",
    type: "Vert-Rad",
    density: "14",
    level: "Easy",
    qnum: 8
  },
  {
    q: "슬로바키아(Slovakia)에서 지난 달과 비교하여 6월의 case가 더 높습니까, 낮습니까, 아니면 같습니까?",
    image: "img/stimuli/Easy/Rad-Vert-7.png",
    options: EasyAnswer,
    answer: "Lower",
    type: "Rad-Vert",
    density: "7",
    level: "Easy",
    qnum: 9
  },
  {
    q: "지브롤터(Gibraltar)에서 지난 달에 비해 10월의 case가 더 높습니까, 낮습니까, 아니면 같습니까?",
    image: "img/stimuli/Easy/Rad-Vert-14.png",
    options: EasyAnswer,
    answer: "Higher",
    type: "Rad-Vert",
    density: "14",
    level: "Easy",
    qnum: 10
  },
  {
    q: "기니(Guinea)에서 지난 달에 비해 8월의 case가 더 높습니까, 낮습니까, 아니면 같습니까?",
    image: "img/stimuli/Easy/Vert-Star-7.png",
    options: EasyAnswer,
    answer: "Higher",
    type: "Vert-Star",
    density: "7",
    level: "Easy",
    qnum: 11
  },
  {
    q: "말리(Mali)에서 지난 달에 비해 12월의 case가 더 높습니까, 낮습니까, 아니면 같습니까?",
    image: "img/stimuli/Easy/Vert-Star-14.png",
    options: EasyAnswer,
    answer: "Higher",
    type: "Vert-Star",
    density: "14",
    level: "Easy",
    qnum: 12
  },
  {
    q: "벨기에(Belgium)의 경우 지난 달에 비해 5월의 case가 더 높습니까, 낮습니까, 아니면 같습니까?",
    image: "img/stimuli/Easy/Star-Vert-7.png",
    options: EasyAnswer,
    answer: "Lower",
    type: "Star-Vert",
    density: "7",
    level: "Easy",
    qnum: 13
  },
  {
    q: "조지아(Georgia)에서 지난 달에 비해 2월의 case가 더 높습니까, 낮습니까, 아니면 같습니까?",
    image: "img/stimuli/Easy/Star-Vert-14.png",
    options: EasyAnswer,
    answer: "Lower",
    type: "Star-Vert",
    density: "14",
    level: "Easy",
    qnum: 14
  },
  {
    q: MediumQuestionLow,
    image: "img/stimuli/Medium/Vert-Vert-7.png",
    options: "<label class='radio'>" + "<input name='diff1' type='radio' value='Canada' required />" +
      "Canada" + "</label>" + "<label class='radio'>" +
      "<input name='diff1' type='radio' value='Netherlands' required/>" + "Netherlands" + " </label>" +
      "<label class='radio'>" + "<input name='diff1' type='radio' value='Malaysia' required/>" +
      "Malaysia" + " </label>",
    answer: "Canada",
    type: "Vert-Vert",
    density: "7",
    level: "Medium",
    qnum: 15
  },
  {
    q: MediumQuestionLow,
    image: "img/stimuli/Medium/Vert-Vert-14.png",
    options: "<label class='radio'>" + "<input name='diff1' type='radio' value='Malaysia' required />" +
      "Malaysia" + "</label>" + "<label class='radio'>" +
      "<input name='diff1' type='radio' value='Ireland' required/>" + "Ireland" + " </label>" +
      "<label class='radio'>" + "<input name='diff1' type='radio' value='Finland' required/>" +
      "Finland" + " </label>",
    answer: "Ireland",
    type: "Vert-Vert",
    density: "14",
    level: "Medium",
    qnum: 16
  },
  {
    q: MediumQuestionLow,
    image: "img/stimuli/Medium/Vert-Horiz-7.png",
    options: "<label class='radio'>" + "<input name='diff1' type='radio' value='Hungary' required />" +
      "Hungary" + "</label>" + "<label class='radio'>" +
      "<input name='diff1' type='radio' value='Norway' required/>" + "Norway" + " </label>" +
      "<label class='radio'>" + "<input name='diff1' type='radio' value='Czechia' required/>" +
      "Czechia" + " </label>",
    answer: "Norway",
    type: "Vert-Horiz",
    density: "7",
    level: "Medium",
    qnum: 17
  },
  {
    q: MediumQuestionHigh,
    image: "img/stimuli/Medium/Vert-Horiz-14.png",
    options: "<label class='radio'>" + "<input name='diff1' type='radio' value='Hungary' required />" +
      "Hungary" + "</label>" + "<label class='radio'>" +
      "<input name='diff1' type='radio' value='France' required/>" + "France" + " </label>" +
      "<label class='radio'>" + "<input name='diff1' type='radio' value='Slovenia' required/>" +
      "Slovenia" + " </label>",
    answer: "Hungary",
    type: "Vert-Horiz",
    density: "14",
    level: "Medium",
    qnum: 18
  },
  {
    q: MediumQuestionLow,
    image: "img/stimuli/Medium/Horiz-Vert-7.png",
    options: "<label class='radio'>" + "<input name='diff1' type='radio' value='Hungary' required />" +
      "Hungary" + "</label>" + "<label class='radio'>" +
      "<input name='diff1' type='radio' value='Austria' required/>" + "Austria" + " </label>" +
      "<label class='radio'>" + "<input name='diff1' type='radio' value='Canada' required/>" +
      "Canada" + " </label>",
    answer: "Canada",
    type: "Horiz-Vert",
    density: "7",
    level: "Medium",
    qnum: 19
  },
  {
    q: MediumQuestionHigh,
    image: "img/stimuli/Medium/Horiz-Vert-14.png",
    options: "<label class='radio'>" + "<input name='diff1' type='radio' value='Czechia' required />" +
      "Czechia" + "</label>" + "<label class='radio'>" +
      "<input name='diff1' type='radio' value='Slovakia' required/>" + "Slovakia" + " </label>" +
      "<label class='radio'>" + "<input name='diff1' type='radio' value='Croatia' required/>" +
      "Croatia" + " </label>",
    answer: "Czechia",
    type: "Horiz-Vert",
    density: "14",
    level: "Medium",
    qnum: 20
  },
  {
    q: MediumQuestionHigh,
    image: "img/stimuli/Medium/Vert-Rad-7.png",
    options: "<label class='radio'>" + "<input name='diff1' type='radio' value='Italy' required />" +
      "Italy" + "</label>" + "<label class='radio'>" +
      "<input name='diff1' type='radio' value='Slovenia' required/>" + "Slovenia" + " </label>" +
      "<label class='radio'>" + "<input name='diff1' type='radio' value='Canada' required/>" +
      "Canada" + " </label>",
    answer: "Slovenia",
    type: "Vert-Rad",
    density: "7",
    level: "Medium",
    qnum: 21
  },
  {
    q: MediumQuestionHigh,
    image: "img/stimuli/Medium/Vert-Rad-14.png",
    options: "<label class='radio'>" + "<input name='diff1' type='radio' value='Serbia' required />" +
      "Serbia" + "</label>" + "<label class='radio'>" +
      "<input name='diff1' type='radio' value='Poland' required/>" + "Poland" + " </label>" +
      "<label class='radio'>" + "<input name='diff1' type='radio' value='France' required/>" +
      "France" + " </label>",
    answer: "Serbia",
    type: "Vert-Rad",
    density: "14",
    level: "Medium",
    qnum: 22
  },
  {
    q: MediumQuestionLow,
    image: "img/stimuli/Medium/Rad-Vert-7.png",
    options: "<label class='radio'>" + "<input name='diff1' type='radio' value='Italy' required />" +
      "Italy" + "</label>" + "<label class='radio'>" +
      "<input name='diff1' type='radio' value='Luxembourg' required/>" + "Luxembourg" + " </label>" +
      "<label class='radio'>" + "<input name='diff1' type='radio' value='Malta' required/>" +
      "Malta" + " </label>",
    answer: "Malta",
    type: "Rad-Vert",
    density: "7",
    level: "Medium",
    qnum: 23
  },
  {
    q: MediumQuestionHigh,
    image: "img/stimuli/Medium/Rad-Vert-14.png",
    options: "<label class='radio'>" + "<input name='diff1' type='radio' value='Poland' required />" +
      "Poland" + "</label>" + "<label class='radio'>" +
      "<input name='diff1' type='radio' value='Czechia' required/>" + "Czechia" + " </label>" +
      "<label class='radio'>" + "<input name='diff1' type='radio' value='Italy' required/>" +
      "Italy" + " </label>",
    answer: "Poland",
    type: "Rad-Vert",
    density: "14",
    level: "Medium",
    qnum: 24
  },
  {
    q: MediumQuestionLow,
    image: "img/stimuli/Medium/Vert-Star-7.png",
    options: "<label class='radio'>" + "<input name='diff1' type='radio' value='U.K.' required />" +
      "U.K." + "</label>" + "<label class='radio'>" +
      "<input name='diff1' type='radio' value='Belgium' required/>" + "Belgium" + " </label>" +
      "<label class='radio'>" + "<input name='diff1' type='radio' value='Czechia' required/>" +
      "Czechia" + " </label>",
    answer: "U.K.",
    type: "Vert-Star",
    density: "7",
    level: "Medium",
    qnum: 25
  },
  {
    q: MediumQuestionHigh,
    image: "img/stimuli/Medium/Vert-Star-14.png",
    options: "<label class='radio'>" + "<input name='diff1' type='radio' value='Italy' required />" +
      "Italy" + "</label>" + "<label class='radio'>" +
      "<input name='diff1' type='radio' value='Spain' required/>" + "Spain" + " </label>" +
      "<label class='radio'>" + "<input name='diff1' type='radio' value='Belgium' required/>" +
      "Belgium" + " </label>",
    answer: "Italy",
    type: "Vert-Star",
    density: "14",
    level: "Medium",
    qnum: 26
  },
  {
    q: MediumQuestionHigh,
    image: "img/stimuli/Medium/Star-Vert-7.png",
    options: "<label class='radio'>" + "<input name='diff1' type='radio' value='U.K.' required />" +
      "U.K." + "</label>" + "<label class='radio'>" +
      "<input name='diff1' type='radio' value='Portugal' required/>" + "Portugal" + " </label>" +
      "<label class='radio'>" + "<input name='diff1' type='radio' value='Israel' required/>" +
      "Israel" + " </label>",
    answer: "U.K.",
    type: "Star-Vert",
    density: "7",
    level: "Medium",
    qnum: 27
  },
  {
    q: MediumQuestionLow,
    image: "img/stimuli/Medium/Star-Vert-14.png",
    options: "<label class='radio'>" + "<input name='diff1' type='radio' value='Malaysia' required />" +
      "Malaysia" + "</label>" + "<label class='radio'>" +
      "<input name='diff1' type='radio' value='Slovakia' required/>" + "Slovakia" + " </label>" +
      "<label class='radio'>" + "<input name='diff1' type='radio' value='Czechia' required/>" +
      "Czechia" + " </label>",
    answer: "Malaysia",
    type: "Star-Vert",
    density: "14",
    level: "Medium",
    qnum: 28
  },
  {
    q: "피지(Fiji)에서 대략 몇 퍼센트의 사람들이 예방 접종(vaccinated)을 받습니까?",
    image: "img/stimuli/Difficult/Vert-Vert-7.png",
    options: DifficultAnswer,
    answer: "Less33",
    type: "Vert-Vert",
    density: "7",
    level: "Difficult",
    qnum: 29
  },
  {
    q: "체코(Czechia)에서 대략 몇 퍼센트의 사람들이 예방 접종(vaccinated)을 받습니까?",
    image: "img/stimuli/Difficult/Vert-Vert-14.png",
    options: DifficultAnswer,
    answer: "33-66",
    type: "Vert-Vert",
    density: "14",
    level: "Difficult",
    qnum: 30
  },
  {
    q: "카자흐스탄(Kazakhstan)에서 대략 몇 퍼센트의 사람들이 예방 접종(vaccinated)을 받습니까?",
    image: "img/stimuli/Difficult/Vert-Horiz-7.png",
    options: DifficultAnswer,
    answer: "33-66",
    type: "Vert-Horiz",
    density: "7",
    level: "Difficult",
    qnum: 31
  },
  {
    q: "콜롬비아(Colombia)에서 대략 몇 퍼센트의 사람들이 예방 접종(vaccinated)을 받습니까?",
    image: "img/stimuli/Difficult/Vert-Horiz-14.png",
    options: DifficultAnswer,
    answer: "Less33",
    type: "Vert-Horiz",
    density: "14",
    level: "Difficult",
    qnum: 32
  },
  {
    q: "라오스(Laos)에서 대략 몇 퍼센트의 사람들이 예방 접종(vaccinated)을 받습니까?",
    image: "img/stimuli/Difficult/Horiz-Vert-7.png",
    options: DifficultAnswer,
    answer: "33-66",
    type: "Horiz-Vert",
    density: "7",
    level: "Difficult",
    qnum: 33
  },
  {
    q: "우루과이(Uruguay)에서 대략 몇 퍼센트의 사람들이 예방 접종(vaccinated)을 받습니까?",
    image: "img/stimuli/Difficult/Horiz-Vert-14.png",
    options: DifficultAnswer,
    answer: "More66",
    type: "Horiz-Vert",
    density: "14",
    level: "Difficult",
    qnum: 34
  },
  {
    q: "르완다(Rwanda)에서 대략 몇 퍼센트의 사람들이 예방 접종(vaccinated)을 받습니까?",
    image: "img/stimuli/Difficult/Vert-Rad-7.png",
    options: DifficultAnswer,
    answer: "Less33",
    type: "Vert-Rad",
    density: "7",
    level: "Difficult",
    qnum: 35
  },
  {
    q: "브라질(Brazil)에서 대략 몇 퍼센트의 사람들이 예방 접종(vaccinated)을 받습니까?",
    image: "img/stimuli/Difficult/Vert-Rad-14.png",
    options: DifficultAnswer,
    answer: "More66",
    type: "Vert-Rad",
    density: "14",
    level: "Difficult",
    qnum: 36
  },
  {
    q: "루마니아(Romania)에서 대략 몇 퍼센트의 사람들이 예방 접종(vaccinated)을 받습니까?",
    image: "img/stimuli/Difficult/Rad-Vert-7.png",
    options: DifficultAnswer,
    answer: "Less33",
    type: "Rad-Vert",
    density: "7",
    level: "Difficult",
    qnum: 37
  },
  {
    q: "핀란드(Finland)에서 대략 몇 퍼센트의 사람들이 예방 접종(vaccinated)을 받습니까?",
    image: "img/stimuli/Difficult/Rad-Vert-14.png",
    options: DifficultAnswer,
    answer: "More66",
    type: "Rad-Vert",
    density: "14",
    level: "Difficult",
    qnum: 38
  },
  {
    q: "부탄(Bhutan)에서 대략 몇 퍼센트의 사람들이 예방 접종(vaccinated)을 받습니까?",
    image: "img/stimuli/Difficult/Vert-Star-7.png",
    options: DifficultAnswer,
    answer: "More66",
    type: "Vert-Star",
    density: "7",
    level: "Difficult",
    qnum: 39
  },
  {
    q: "칠레(Chile)에서 대략 몇 퍼센트의 사람들이 예방 접종(vaccinated)을 받습니까?",
    image: "img/stimuli/Difficult/Vert-Star-14.png",
    options: DifficultAnswer,
    answer: "More66",
    type: "Vert-Star",
    density: "14",
    level: "Difficult",
    qnum: 40
  },
  {
    q: "사모아(Samoa)에서 대략 몇 퍼센트의 사람들이 예방 접종(vaccinated)을 받습니까?",
    image: "img/stimuli/Difficult/Star-Vert-7.png",
    options: DifficultAnswer,
    answer: "33-66",
    type: "Star-Vert",
    density: "7",
    level: "Difficult",
    qnum: 41
  },
  {
    q: "모잠비크(Mozambique)에서 대략 몇 퍼센트의 사람들이 예방 접종(vaccinated)을 받습니까?",
    image: "img/stimuli/Difficult/Star-Vert-14.png",
    options: DifficultAnswer,
    answer: "Less33",
    type: "Star-Vert",
    density: "14",
    level: "Difficult",
    qnum: 42
  }


]
