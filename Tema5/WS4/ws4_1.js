/**
Crea una página en la que representarás 2 gráficas diferentes haciendo uso de Google Charts sobre los siguientes conjuntos de datos:
    Representación en el Congreso de los Diputados por partidos en las últimas elecciones generales. 
    Estos datos los deberás representar mediante un gráfico de barras y mediante uno de sectores (PieChart).
    Ránking mundial de países más turísticos (por número de visitantes). 
    Deberás representar estos datos mediante un gráfico Geográfico.
Realiza una animación sobre uno de los gráficos del punto 1.1. 
Para ello suponemos que pasados 10 segundos cambian los datos y debe animarse automáticamente.
 */
 
 // Load the Visualization API and the corechart package.
 google.charts.load('current', {'packages':['corechart']});
 google.charts.load('current', {
    'packages':['geochart'],
    // Note: you will need to get a mapsApiKey for your project.
    // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
    'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
  });

      // Set a callback to run when the Google Visualization API is loaded.

  google.charts.setOnLoadCallback(drawChart);
  google.charts.setOnLoadCallback(drawChart2);
  google.charts.setOnLoadCallback(drawChart3);


 // Callback that creates and populates a data table,
 // instantiates the pie chart, passes in the data and
 // draws it.
 var uno=68.94,dos=30.49,tres=19.30,cuatro=10.45
 var chart, data,options,chart2, data2,options2;
 function drawChart() 
 {

    // Create the data table.
     data = google.visualization.arrayToDataTable([
        ['Element', 'Density', { role: 'style' }],
        ['PSOE', uno, 'red'],           
        ['PP', dos, 'blue'],            
        ['VOX', tres, 'green'],
        ['CIUDADANOS', cuatro, 'gold' ], 
     ]);

    // Set chart options
     options = {'title':'Partidos Porculiticos',
                   'width':800,
                   'height':500,
                   animation:{
                    duration: 1000,
                    easing: 'out'
                  }
                  
                };

    // Instantiate and draw our chart, passing in some options.
    chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
    /*button.onclick = function() {
        var newValue = 1000 - data.getValue(0, 1);
        data.setValue(0, 1, newValue);
        drawChart();
      }*/
  
    chart.draw(data, options);

  }

  function drawChart2() 
  {

    data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Topping');
    data2.addColumn('number', 'Slices');
    data2.addRows([
      ['PSOE', uno],
      ['PP', dos],
      ['VOX', tres],
      ['CIUDADANOS', cuatro]
    ]);

    // Set chart options
    options2 = {'title':'Partidos Porculiticos',
                   'width':800,
                   'height':500,
                   slices: {
                    0: { color: 'red' },
                    1: { color: 'blue' },
                    2: { color: 'green' },
                    3: { color: 'gold' }
                    },
                    animation:{
                        duration: 1000,
                        easing: 'out'
                      }
                    
                  };

          
    chart2 = new google.visualization.PieChart(document.getElementById('chart_div2'));
    chart2.draw(data2, options2);
  }

  function drawChart3() 
  {
    var data = google.visualization.arrayToDataTable([
        ['Country', 'Popularity'],
        ['France', 86900000],
        ['Spain', 81800000],
        ['United States', 75900000],
        ['China', 60700000],
        ['Italy', 58300000],
        ['Mexico', 37700000],
        ['United Kingdom', 37600000]
        

      ]);

      var options = {'backgroundColor':'#b78d4c',
                    'colorAxis':{minValue: 0}
                  
                    
                };

      var chart = new google.visualization.GeoChart(document.getElementById('chart_div3'));

      chart.draw(data, options);

  }

  function numRanmdon( max, min)
  {
     return Math.random()*(max-min)+min;
  }



  window.onload = () => {
      
      setInterval(() => {
        uno = numRanmdon( 100, 0);
        dos = numRanmdon( 100, 0);
        tres = numRanmdon( 100, 0);
        cuatro = numRanmdon( 100, 0);


        data.setValue(0, 1, uno);
        data.setValue(1, 1, dos);
        data.setValue(2, 1, tres);
        data.setValue(3, 1, cuatro);

        chart.draw(data, options);

        data2.setValue(0, 1, uno);
        data2.setValue(1, 1, dos);
        data2.setValue(2, 1, tres);
        data2.setValue(3, 1, cuatro);

        chart2.draw(data2, options2);

      }, 1000);

      

  }