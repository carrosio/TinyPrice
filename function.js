const dataAPI_URL = ("https://algocharts.net/apiv2/?asset_in=378382099&asset_out=0")

async function loadPrice() {
    let result = {}
    const response = await fetch(dataAPI_URL);
    result = await response.json();
    return result
}

function porfolio(coins, price){
    return coins * price
}

document.addEventListener("DOMContentLoaded", async function (e) {
    const price = document.getElementById("price") 
    const priceUSD = document.getElementById("priceUSD")
   /*  const enterBtm = document.getElementById("enter")
    const enterQty = document.getElementById("usdqty") */
    const tinyPriceAlgo = (await loadPrice()).data
    
    const tinyAmount = 5658 + 19714
    const USDAmount = 576

   /*  enterBtm.onclick = function(){
        USDAmount = parseInt(enterQty.value)
    }
 */
    
   
    let priceAlgo = Number(tinyPriceAlgo[0].toFixed(4)) + ' ALGO ' 
    let priceTiny = tinyPriceAlgo[0] * tinyPriceAlgo[3]
    
    price.innerHTML = priceTiny.toFixed(4)
    priceUSD.innerHTML = ((tinyAmount * priceTiny) + USDAmount).toFixed() 
    
    
    console.log("Gracias Pablo por la API <3")

    window.addEventListener('load', function () {
        // Your document is loaded.
        var fetchInterval = 5000; // 5 seconds.
      
        // Invoke the request every 5 seconds.
        setInterval(loadPrice, fetchInterval);
      });
})








