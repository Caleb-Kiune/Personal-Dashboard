//getting and displaying the background image
async function getData() {
  try {
    const res = await fetch('https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature')
    const data = await res.json()
    document.body.style.backgroundImage = `url('${data.urls.full}')`
    document.getElementById("author").textContent = `By: ${data.user.name}`
    // console.log(data.urls)
  } catch (err) {
    document.body.style.backgroundImage = `url('https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1758967905380-f62a8c8fd373')`
  }
	
 }
 getData()

//Getting and displaying crypto data
fetch('https://api.coingecko.com/api/v3/coins/bitcoin')
 .then(res => {
    if (!res.ok) {
      throw Error ('Hold up! Something aint right')
    }
  return res.json()
})
 .then(data => {
  // console.log(data.name)
        // console.log(data.image)
        document.getElementById('crypto-name').textContent = data.name
        document.getElementById('crypto-image').src = data.image.small

        document.getElementById('crypto-current').textContent += `$${data.market_data.current_price.usd}`
        document.getElementById('crypto-high').textContent += `$${data.market_data.high_24h.usd}`
        document.getElementById('crypto-low').textContent += `$${data.market_data.low_24h.usd}`

})
 .catch(err => console.log(err))

//getting and update current time
  setInterval(() => {
    const hours = new Date().getHours()
    const minutes = new Date().getMinutes()
    const seconds = new Date().getSeconds()
    const amPm = hours >= 12 ? 'PM' : 'AM'
    const minutesUpdate = minutes < 10 ? `${0}${minutes}` : minutes
    const secondsUpdate = seconds < 10 ? `${0}${seconds}` : seconds
    const hour12 = hours === 0 ? 12 : hours > 12 ? hours - 12 : hours
    const currentTime = `${hour12}:${minutesUpdate}:${secondsUpdate} ${amPm}`
    document.getElementById('time').textContent = currentTime
    // console.log(currentTime)
  }, 1000);


  //grab current weather data based on location 
  navigator.geolocation.getCurrentPosition(position => {
    const lat = position.coords.latitude
    const lon = position.coords.longitude
    
    fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric`)
    .then(res => res.json())
    .then(data => {
            const weatherIcon = data.weather[0].icon
            const temperature = Math.round(data.main.temp)
            const city = data.name
            // console.log(city)
            document.getElementById('temp').textContent = temperature
            document.getElementById('city').textContent = city
          
            document.getElementById('weather-image').src = 
            `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`
            
        })
        .catch(err => console.error(err))
});

