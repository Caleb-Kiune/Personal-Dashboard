async function getData() {
  try {
    const res = await fetch('https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature')
    const data = await res.json()
    document.body.style.backgroundImage = `url('${data.urls.full}')`
    document.getElementById("author").textContent = `By: ${data.user.name}`
    console.log(data.urls)
  } catch (err) {
    document.body.style.backgroundImage = `url('https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1758967905380-f62a8c8fd373')`
  }
	
 }
 getData()


fetch('https://api.coingecko.com/api/v3/coins/bitcoin')
 .then(res => {
    if (!res.ok) {
      throw Error ('Hold up! Something aint right')
    }
  return res.json()
})
 .then(data => {
  console.log(data.name)
        console.log(data.image)
        document.getElementById('crypto-name').textContent = data.name
        document.getElementById('crypto-image').src = data.image.small

        document.getElementById('crypto-current').textContent += data.market_data.current_price.usd
        document.getElementById('crypto-high').textContent += data.market_data.high_24h.usd
        document.getElementById('crypto-low').textContent += data.market_data.low_24h.usd

})
 .catch(err => console.log(err))
