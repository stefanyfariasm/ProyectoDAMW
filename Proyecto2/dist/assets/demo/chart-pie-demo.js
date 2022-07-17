// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';


let marcaspie =[];
let cantidades = [];
let arraycantidades=[];
let arraylabel=[];
let arraydata=[];
const pos = {};

fetch("https://api-mobilespecs.azharimm.site/v2/brands")
        .then(response => response.json())
        .then(data => {
            let datos = data['data'];
            
            for(let elemento of datos){
                let nombre = elemento['brand_name'];
                marcaspie.push(nombre);
                let cantidad = elemento['device_count'];
                cantidades.push(cantidad);               
            }   

            for(let elemento of cantidades){
              if(elemento['cantidades'] >=400){
               arraycantidades.push(elemento['cantidades']);
              }}
              arraycantidades.forEach(function (x) { pos[x] = (pos[x] || 0) + 1; });
              arraylabel = Object.keys(pos);
              arraydata = Object.values(pos);


// Pie Chart Example
var ctx = document.getElementById("myPieChart");
var myPieChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: arraylabel,
    datasets: [{
      data: arraydata,
      backgroundColor: red,
    }],
  },
});

}).catch(console.error);
