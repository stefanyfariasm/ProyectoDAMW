window.addEventListener('DOMContentLoaded', event => {


function cargarDatos(elem){
  
    let marca = elem['brand'];
    let mombreCelular = elem['phone_name'];
    let sobrenombre = elem['slug'];
         
    let plantilla = `<tr>
     
        <td>${marca}</td>
        <td>${mombreCelular}</td>
        <td>${sobrenombre}</td>        
        </tr>`;
        tablaCelulares.innerHTML += plantilla;
}


fetch("https://api-mobilespecs.azharimm.site/v2/brands/apple-phones-48")
.then(response => response.json())
.then(data => {
    let datos = data['data']['phones'];
    let  tablaCelulares = document.getElementById('tablaCelulares');
    let select = document.querySelector('div.selector > select');
    
    for(var elem of datos){
        let marca = elem['brand'];
    let mombreCelular = elem['phone_name'];
    let sobrenombre = elem['slug'];
         
    let plantilla = `<tr>
     
        <td>${marca}</td>
        <td>${mombreCelular}</td>
        <td>${sobrenombre}</td>        
        </tr>`;
        tablaCelulares.innerHTML += plantilla;
    

        let plantillaCelulares = `<option value= "${mombreCelular}">${mombreCelular}</option>`;
    
        select.innerHTML += plantillaCelulares;
        
    }            
    select.addEventListener("change",function(){
        tablaCelulares.innerHTML = '';

        for(var elem of datos){
            if(select.value == "Seleccionar celular"){
                cargarDatos(elem);
            }
            else if(elem['phone_name'] == select.value){
                let marca = elem['brand'];
    let mombreCelular = elem['phone_name'];
    let sobrenombre = elem['slug'];
         
    let plantilla = `<tr>
     
        <td>${marca}</td>
        <td>${mombreCelular}</td>
        <td>${sobrenombre}</td>        
        </tr>`;
        tablaCelulares.innerHTML += plantilla;
                        }
        }
    })
    
    }).catch(console.error);

});