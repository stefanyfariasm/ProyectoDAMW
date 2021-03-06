window.addEventListener('DOMContentLoaded', event => {
    

    //Cargar datos para la tabla
    
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
            let select = document.querySelector('div.selector > select');
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
            
                select.innerHTML += plantillaMarcas;
                
            }            
            select.addEventListener("change",function(){
                tablaMarcas.innerHTML = '';

                for(var elem of datos){
                    if(select.value == "Seleccionar marca"){
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