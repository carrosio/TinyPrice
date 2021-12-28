const dataAPI_URL = ("https://algocharts.net/apiv2/?asset_in=378382099&asset_out=0")

async function loadPrice() {
    let result = {}
    const response = await fetch(dataAPI_URL);
    result = await response.json();
    let value = 0
    console.log(value = value + 1)
    return result
}




document.addEventListener("DOMContentLoaded", async function (e) {
    const price = document.getElementById("price") 
    const priceUSD = document.getElementById("priceUSD")
  
    const tinyPriceAlgo = (await loadPrice()).data
    
    const tinyAmount = 5020 + 20000
    const USDAmount = 520 + (9 * tinyPriceAlgo[3]) + 318 + 324

   
    let priceAlgo = Number(tinyPriceAlgo[0].toFixed(4)) + ' ALGO ' 
    let priceTiny = tinyPriceAlgo[0] * tinyPriceAlgo[3]
    
    price.innerHTML = priceTiny.toFixed(4)
    priceUSD.innerHTML = ((tinyAmount * priceTiny) + USDAmount).toFixed() 
    
    
    console.log("Gracias Pablo por la API <3")

   
})


/* thenano2412@gmail.com
Clave
61c9f10048decd000138bc7a
Secreto
El secreto de la API no se puede recuperar y se mostrará SOLO una vez. Manténgalo seguro.
6806aedc-749d-4089-9ca6-9e4b965930ef
Restricciones de API
General
Acceso IP
Sin límite
 */




