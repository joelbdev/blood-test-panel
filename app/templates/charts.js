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

  var AST_Data = {
    labels : [
    {% for item in data %}
    {% if item.test == "AST" %}
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
    {% if item.test == "AST" %}
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
      {% if item.test == "Albumin" %}
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
  
  var CRP_Data = {
  labels : [
  {% for item in data %}
  {% if item.test == "CRP" %}
  "{{ item.date.strftime("%d-%b-%y") }}",
  {% endif %}
  {% endfor %} ],
  
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
  {% if item.test == "CRP" %}
  {{ item.result }},
  {% endif %}
  {% endfor %},
  ]
  }
  ]
  }
  
  var VitD_Data = {
  labels : [
  {% for item in data %}
  {% if item.test == "VitD" %}
  "{{ item.date.strftime("%d-%b-%y") }}",
  {% endif %}
  {% endfor %} ],
  
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
  {% if item.test == "VitD" %}
  {{ item.result }},
  {% endif %}
  {% endfor %},
  ]
  }
  ]
  }
  
  var TotC_Data = {
  labels : [
  {% for item in data %}
  {% if item.test == "TotC" %}
  "{{ item.date.strftime("%d-%b-%y") }}",
  {% endif %}
  {% endfor %} ],
  
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
  {% if item.test == "TotC" %}
  {{ item.result }},
  {% endif %}
  {% endfor %},
  ]
  }
  ]
  }
  
  var Trigs_Data = {
  labels : [
  {% for item in data %}
  {% if item.test == "Trigs" %}
  "{{ item.date.strftime("%d-%b-%y") }}",
  {% endif %}
  {% endfor %} ],
  
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
  {% if item.test == "Trigs" %}
  {{ item.result }},
  {% endif %}
  {% endfor %},
  ]
  }
  ]
  }
  
  var NonH_Data = {
  labels : [
  {% for item in data %}
  {% if item.test == "NonH" %}
  "{{ item.date.strftime("%d-%b-%y") }}",
  {% endif %}
  {% endfor %} ],
  
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
  {% if item.test == "NonH" %}
  {{ item.result }},
  {% endif %}
  {% endfor %},
  ]
  }
  ]
  }
  
  var Ratio_Data = {
  labels : [
  {% for item in data %}
  {% if item.test == "Ratio" %}
  "{{ item.date.strftime("%d-%b-%y") }}",
  {% endif %}
  {% endfor %} ],
  
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
  {% if item.test == "Ratio" %}
  {{ item.result }},
  {% endif %}
  {% endfor %},
  ]
  }
  ]
  }


  
    var ALT_Data = {
      labels : [
      {% for item in data %}
      {% if item.test == "ALT" %}
      "{{ item.date.strftime("%d-%b-%y") }}",
      {% endif %}
      {% endfor %} ],
      
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
      {% if item.test == "ALT" %}
      {{ item.result }},
      {% endif %}
      {% endfor %},
      ]
      }
      ]
      }

      var Cre_Data = {
        labels : [
        {% for item in data %}
        {% if item.test == "Cre" %}
        "{{ item.date.strftime("%d-%b-%y") }}",
        {% endif %}
        {% endfor %} ],
        
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
        {% if item.test == "Cre" %}
        {{ item.result }},
        {% endif %}
        {% endfor %},
        ]
        }
        ]
        }

        var Bul_Data = {
          labels : [
          {% for item in data %}
          {% if item.test == "Bul" %}
          "{{ item.date.strftime("%d-%b-%y") }}",
          {% endif %}
          {% endfor %} ],
          
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
          {% if item.test == "Bul" %}
          {{ item.result }},
          {% endif %}
          {% endfor %},
          ]
          }
          ]
          }

          var GFR_Data = {
            labels : [
            {% for item in data %}
            {% if item.test == "GFR" %}
            "{{ item.date.strftime("%d-%b-%y") }}",
            {% endif %}
            {% endfor %} ],
            
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
            {% if item.test == "GFR" %}
            {{ item.result }},
            {% endif %}
            {% endfor %},
            ]
            }
            ]
            }

            var SHBG_Data = {
              labels : [
              {% for item in data %}
              {% if item.test == "SHBG" %}
              "{{ item.date.strftime("%d-%b-%y") }}",
              {% endif %}
              {% endfor %} ],
              
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
              {% if item.test == "SHBG" %}
              {{ item.result }},
              {% endif %}
              {% endfor %},
              ]
              }
              ]
              }

              var FreeT_Data = {
                labels : [
                {% for item in data %}
                {% if item.test == "FreeT" %}
                "{{ item.date.strftime("%d-%b-%y") }}",
                {% endif %}
                {% endfor %} ],
                
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
                {% if item.test == "FreeT" %}
                {{ item.result }},
                {% endif %}
                {% endfor %},
                ]
                }
                ]
                }

                var Estro_Data = {
                  labels : [
                  {% for item in data %}
                  {% if item.test == "Estro" %}
                  "{{ item.date.strftime("%d-%b-%y") }}",
                  {% endif %}
                  {% endfor %} ],
                  
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
                  {% if item.test == "Estro" %}
                  {{ item.result }},
                  {% endif %}
                  {% endfor %},
                  ]
                  }
                  ]
                  }

                  var TotT_Data = {
                    labels : [
                    {% for item in data %}
                    {% if item.test == "TotT" %}
                    "{{ item.date.strftime("%d-%b-%y") }}",
                    {% endif %}
                    {% endfor %} ],
                    
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
                    {% if item.test == "TotT" %}
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
  var steps = 10
  var max = {{ max }}
  
  var ctx = document.getElementById("HDL_Chart").getContext("2d");

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
  
  var ctx = document.getElementById("LDL_Chart").getContext("2d");
  const LDL_Chart = new Chart(ctx).Line(LDL_Data, {
  scaleOverride: true,
  scaleSteps: 5,
  scaleStepWidth: Math.ceil(max / steps),
  scaleStartValue: 0,
  scaleShowVerticalLines: true,
  scaleShowGridLines : true,
  barShowStroke : true,
  scaleShowLabels: true,
  bezierCurve: false,
  });
  
  var ctx = document.getElementById("Albumin_Chart").getContext("2d");
  const Albumin_Chart = new Chart(ctx).Line(Albumin_Data, {
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
  
  var ctx = document.getElementById("CRP_Chart").getContext("2d");
  const CRP_Chart = new Chart(ctx).Line(CRP_Data, {
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
  
  var ctx = document.getElementById("VitD_Chart").getContext("2d");
  const VitD_Chart = new Chart(ctx).Line(VitD_Data, {
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
  
  var ctx = document.getElementById("TotC_Chart").getContext("2d");
  const TotC_Chart = new Chart(ctx).Line(TotC_Data, {
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
  
  var ctx = document.getElementById("Trigs_Chart").getContext("2d");
  const Trigs_Chart = new Chart(ctx).Line(Trigs_Data, {
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
  
  var ctx = document.getElementById("NonH_Chart").getContext("2d");
  const NonH_Chart = new Chart(ctx).Line(NonH_Data, {
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
  
  var ctx = document.getElementById("Ratio_Chart").getContext("2d");
  const Ratio_Chart = new Chart(ctx).Line(Ratio_Data, {
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


  var ctx = document.getElementById("AST_Chart").getContext("2d");
  const AST_Chart = new Chart(ctx).Line(AST_Data, {
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

  var ctx = document.getElementById("ALT_Chart").getContext("2d");
  const ALT_Chart = new Chart(ctx).Line(ALT_Data, {
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

  var ctx = document.getElementById("Cre_Chart").getContext("2d");
  const Cre_Chart = new Chart(ctx).Line(Cre_Data, {
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

  var ctx = document.getElementById("Bul_Chart").getContext("2d");
  const Bul_Chart = new Chart(ctx).Line(Bul_Data, {
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

  var ctx = document.getElementById("GFR_Chart").getContext("2d");
  const GFR_Chart = new Chart(ctx).Line(GFR_Data, {
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

  var ctx = document.getElementById("TotT_Chart").getContext("2d");
  const TotT_Chart = new Chart(ctx).Line(TotT_Data, {
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

  var ctx = document.getElementById("SHBG_Chart").getContext("2d");
  const SHBG_Chart = new Chart(ctx).Line(SHBG_Data, {
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

  var ctx = document.getElementById("FreeT_Chart").getContext("2d");
  const FreeT_Chart = new Chart(ctx).Line(FreeT_Data, {
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

  var ctx = document.getElementById("Estro_Chart").getContext("2d");
  const Estro_Chart = new Chart(ctx).Line(Estro_Data, {
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