let medida= document.querySelector('#medida')
medida.addEventListener("input", () => {
   let togglePay= document.querySelector('#togglePay')
   
   if (togglePay.checked) {
      document.querySelector('#pageviews').innerText= ((medida.value * 6.25) * 12).toFixed(0) + "M pageviews"
      document.querySelector('#toggleTime').innerHTML= `<strong id="price">$ ${medida.value * 12},00</strong> / yearly`
   } else {
      document.querySelector('#pageviews').innerText= (medida.value * 6.25).toFixed(0) + "k pageviews"
      document.querySelector('#toggleTime').innerHTML= `<strong id="price">$ ${medida.value},00</strong> / month`
   }
})