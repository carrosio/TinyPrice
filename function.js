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
    const USDAmount = (37 * tinyPriceAlgo[3]) + 318 + 280

   
    let priceAlgo = Number(tinyPriceAlgo[0].toFixed(4)) + ' ALGO ' 
    let priceTiny = tinyPriceAlgo[0] * tinyPriceAlgo[3]
    
    price.innerHTML = priceTiny.toFixed(4)
    priceUSD.innerHTML = ((tinyAmount * priceTiny) + USDAmount).toFixed() 
    
    
    console.log("Gracias Pablo por la API <3")

   
})





