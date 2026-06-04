let banderas = document.querySelector("#banderas")


async function  traerBanderas() {
    try{
       let response = await fetch("./data.json")
       let data = await response.json()
       return data
    } catch(error){
      console.log("ups",error)
    }
    
}
let dataBanderas = await traerBanderas()


console.log(dataBanderas[0])



// para que salga los paises la imagen y su informacion de data.json el 0 debe cambiarse por i y esto debe estar dentro d eun blucke 


// banderas.innerHTML += 
// `<div class="max-w-75 md:-max-w-72 bg-white dark:bg-[#2b3743] rounded-md overflow-hidden shadow h-100">
//           <img class="object-3/2" src=${dataBanderas[0].flag} alt="Germany" />

//           <div class="px-6 py-10">
//             <p class="text-3xl font-bold mb-4">${dataBanderas[0].capital}</p>
//             <p><span class=" text-xl "> Population:</span> ${dataBanderas[0].population}</p>
//             <p><span class=" text-xl "> Region: </span>${dataBanderas[0].region}</p>
//             <p><samp class=" text-xl "> Capital:</samp> ${dataBanderas[0].capital}</p>
//           </div>
//         </div>`

       function mostrarPaises(grupoDePaises){

        for (let i = 0; i <grupoDePaises.length; i++) {
            banderas.innerHTML+= `<div class="max-w-75 md:-max-w-72 bg-white dark:bg-[#2b3743] rounded-md overflow-hidden shadow h-100">
          <img class="object-3/2" src=${grupoDePaises[i].flag} alt="Germany" />

          <div class="px-6 py-10">
            <p class="text-3xl font-bold mb-4">${grupoDePaises[i].name}</p>
            <p><span class=" text-xl "> Population:</span> ${grupoDePaises[i].population}</p>
            <p><span class=" text-xl "> Region: </span>${grupoDePaises[i].region}</p>
            <p><samp class=" text-xl "> Capital:</samp> ${grupoDePaises[i].capital}</p>
          </div>
        </div>`
            
        }

   }     


   let paisesDeAfrica = dataBanderas.filter(pais=>pais.region ==="Africa")
   let paisesDeAsia = dataBanderas.filter(pais=>pais.region ==="asia")


       let filtroRegion =document.querySelector("#filtroRegion")
        let filtroInput =document.querySelector("#filtroInput")

      filtroRegion.addEventListener("change", filtrarPaises)
      filtroInput.addEventListener("input", filtrarPaises)


      function filtrarPaises(){
        
          let region = filtroRegion.value
          let contenidoInput = filtroInput.value.toLowerCase()

          let paisesFiltrados = dataBanderas
         
          if(region !== "Todas"){
            paisesFiltrados =paisesFiltrados.filter(pais =>pais.region === region)
           }
           paisesFiltrados = paisesFiltrados.filter(pais =>pais.name.toLowerCase().includes(contenidoInput))

           
           banderas.innerHTML =" "
          mostrarPaises(paisesFiltrados)
      }
      filtrarPaises()

      
      
  
