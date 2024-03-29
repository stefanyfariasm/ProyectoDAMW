/// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';


//grafico de barras
let marcas = [];
let cantidades = [];

fetch("https://api-mobilespecs.azharimm.site/v2/brands")
        .then(response => response.json())
        .then(data => {
            let datos = data['data'];
            
            for(let elemento of datos){

                let nombre = elemento['brand_name'];
                marcas.push(nombre);
                let cantidad = elemento['device_count'];
                cantidades.push(cantidad);               
            }            
       
          var grafica = document.getElementById("myAreaChart");
          new Chart(grafica, {
          type: 'bar',
          data: {
            labels: marcas,
            datasets: [{
              label: "Id",
              lineTension: 0.3,
              backgroundColor: "rgba(182, 114, 247)",
              borderColor: "rgba(2,117,216,1)",
        
              /*pointBackgroundColor: "rgba(2,117,216,1)",
              pointBorderColor: "rgba(255,255,255,0.8)",
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "rgba(1, 8, 40)",
              pointHitRadius: 50,
              pointBorderWidth: 2,*/
              data: cantidades,
            }],
          },
          options: {

         animation: {
            onComplete: () => {
              delayed = true;
            },
            delay: (context) => {
              let delay = 0;
              if (context.type === 'data' && context.mode === 'default' && !delayed) {
                delay = context.dataIndex * 300 + context.datasetIndex * 100;
              }
              return delay;
             },
    },
            scales: {
              xAxes: [{
                time: {
                  unit: 'date'
                },
                gridLines: {
                  display: false
                },
                ticks: {
                  maxTicksLimit: 20
                }
              }],
              yAxes: [{
                ticks: {
                  min: 0,
                  max: 500,
                  maxTicksLimit: 5
                },
                gridLines: {
                  color: "rgba(0, 0, 0, .125)",
                }
              }],
            },
            legend: {
              display: false
            }
          }
        });

        }).catch(console.error);



//cargar imágenes del celular seleccionado



//Pequeña tabla con información del celular