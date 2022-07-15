window.addEventListener('DOMContentLoaded', event => {
    
    function cargarDatos(elem){
        let id = elem['brand_id'];
        let marca = elem['brand_name'];
        let marcagene = elem['brand_slug'];
        let numero = elem['device_count'];
             
        let plantilla = `<tr>
            <td>${id}</td>
            <td>${marca}</td>
            <td>${marcagene}</td>
            <td>${numero}</td>        
            </tr>`;
            tablaMarcas.innerHTML += plantilla;
    }
    
    fetch("https://api-mobilespecs.azharimm.site/v2/brands")
        .then(response => response.json())
        .then(data => {
            let datos = data['data'];
            let  tablaMarcas = document.getElementById('tablaMarcas');
            let seleccion= document.querySelector('div.seleccion > select');
            for(var elem of datos){
                let id = elem['brand_id'];
                let marca = elem['brand_name'];
                let marcagene = elem['brand_slug'];
                let numero = elem['device_count'];
             
                let plantilla = `<tr>
                    <td>${id}</td>
                    <td>${marca}</td>
                    <td>${marcagene}</td>
                    <td>${numero}</td>
                      
                    </tr>`;
                tablaMarcas.innerHTML += plantilla;

                let plantillaMarcas = `<option value= "${marca}">${marca}</option>`;
            
                seleccion.innerHTML += plantillaMarcas;
                
            }            
            seleccion.addEventListener("change",function(){
                tablaMarcas.innerHTML = '';

                for(var elem of datos){
                    if(seleccion.value == "Seleccionar marca"){
                        cargarDatos(elem);
                    }
                    else if(elem['brand_name'] == select.value){
                        let id = elem['brand_id'];
                        let marca = elem['brand_name'];
                        let marcagene = elem['brand_slug'];
                        let numero = elem['device_count'];
                
                        let plantilla = `<tr>
                            <td>${id}</td>
                            <td>${marca}</td>
                            <td>${marcagene}</td>
                            <td>${numero}</td>                       
                            </tr>`;
                        tablaMarcas.innerHTML += plantilla;
                    }
                }
            })
            
        }).catch(console.error);
      
});