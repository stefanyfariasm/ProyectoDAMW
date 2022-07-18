let cargarImagen=() => {
    let plantillaimagen=''
    
    fetch("https://api-mobilespecs.azharimm.site/v2/brands/apple-phones-48")
    .then(response => response.json())
    .then(data => {
        let datos = data['data']['phones'];

        let imagen=document.querySelector(".imagenCelular");
        let select = document.querySelector('div.selector > select');
       
        let arrayImg=[]
        let contador=0


        for(var elem of datos){
           
        let imgcel=data["image"]
        arrayImg.push(imgcel)
        contador+=1 
            
        }            
        
        for (let img in arrayImg){

            
            link = arrayImg[img]
           if(elem['brand_name'] == select.value){

            
            plantillaimagen=`
            <div class="imagenCelular">
                                            
            <div class="card-body">

                <img class="cambios" src="${link}" width=400px>
            </div>
        </div>
        `


           imagen.innerHTML = plantillaimagen
        }


    }


       
        
})}


        window.addEventListener('change', (event) => {
    
            cargarImagen()
        });
        