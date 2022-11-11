var HDL_Data = {
  labels : [
    {% for item in data %}
    {% if item.test == "HDL" %}
      "{{ item.date.strftime("%d-%b-%y") }}",
      {% endif %}
    {% endfor %}
  ],

  datasets : [{
    fillColor: "rgba(151,187,205,0.2)",
    strokeColor: "rgba(151,187,205,1)",
    pointColor: "rgba(151,187,205,1)",
    pointStrokeColor: "#fff",
    pointHighlightFill: "#fff",
    pointHighlightStroke: "rgba(151,187,205,1)",
    bezierCurve : false,
    data : [
  {% for item in data %}
  {% if item.test == "HDL" %}
        {{ item.result }},
        {% endif %}
        {% endfor %}]
    }
]
}


var LDL_Data = {
  labels : [
    {% for item in data %}
    {% if item.test == "LDL" %}
      "{{ item.date.strftime("%d-%b-%y") }}",
      {% endif %}
      {% endfor %}
  ],

  datasets : [{
    fillColor: "rgba(151,187,205,0.2)",
    strokeColor: "rgba(151,187,205,1)",
    pointColor: "rgba(151,187,205,1)",
    pointStrokeColor: "#fff",
    pointHighlightFill: "#fff",
    pointHighlightStroke: "rgba(151,187,205,1)",
    bezierCurve : false,
    data : [
  {% for item in data %}
  {% if item.test == "LDL" %}

        {{ item.result }},
        {% endif %}
        {% endfor %}]
    }
]
}

var Albumin_Data = {
  labels : [
    {% for item in data %}
    {% if item.test == "Albumin" %}
      "{{ item.date.strftime("%d-%b-%y") }}",
      {% endif %}
      {% endfor %}  ],

  datasets : [{
    fillColor: "rgba(151,187,205,0.2)",
    strokeColor: "rgba(151,187,205,1)",
    pointColor: "rgba(151,187,205,1)",
    pointStrokeColor: "#fff",
    pointHighlightFill: "#fff",
    pointHighlightStroke: "rgba(151,187,205,1)",
    bezierCurve : false,
    data : [


      {% for item in data %}
      {% if item.test == "Albumin" %}
    
            {{ item.result }},
            {% endif %}
            {% endfor %},
 ]
    }
]
}


Chart.defaults.global.animationSteps = 50;
Chart.defaults.global.tooltipYPadding = 16;
Chart.defaults.global.tooltipCornerRadius = 0;
Chart.defaults.global.tooltipTitleFontStyle = "normal";
Chart.defaults.global.tooltipFillColor = "rgba(0,0,0,0.8)";
Chart.defaults.global.animationEasing = "easeOutBounce";
Chart.defaults.global.responsive = false;
Chart.defaults.global.scaleLineColor = "black";
Chart.defaults.global.scaleFontSize = 16;

// get bar chart canvas
var ctx = document.getElementById("HDL_Chart").getContext("2d");

steps = 10
max = {{ max }}
// draw line chart 1
const HDL_Chart= new Chart(ctx).Line(HDL_Data, {
  scaleOverride: true,
  scaleSteps: steps,
  scaleStepWidth: Math.ceil(max / steps),
  scaleStartValue: 0,
  scaleShowVerticalLines: true,
  scaleShowGridLines : true,
  barShowStroke : true,
  scaleShowLabels: true,
  bezierCurve: false,
});

// draw line chart 2
  var ctx = document.getElementById("LDL_Chart").getContext("2d");
const LDL_Chart = new Chart(ctx).Line(LDL_Data, {
  scaleOverride: true,
  scaleSteps: steps,
  scaleStepWidth: Math.ceil(max / steps),
  scaleStartValue: 0,
  scaleShowVerticalLines: true,
  scaleShowGridLines : true,
  barShowStroke : true,
  scaleShowLabels: true,
  bezierCurve: false,
  });

  var ctx = document.getElementById("Albumin_Chart").getContext("2d");
  const Alubmin_Chart = new Chart(ctx).Line(Albumin_Data, {
    scaleOverride: true,
    scaleSteps: steps,
    scaleStepWidth: Math.ceil(max / steps),
    scaleStartValue: 0,
    scaleShowVerticalLines: true,
    scaleShowGridLines : true,
    barShowStroke : true,
    scaleShowLabels: true,
    bezierCurve: false,
    });
