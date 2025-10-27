// Fetch background image
async function getData() {
  try {
    const res = await fetch(
      "https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature"
    );
    const data = await res.json();
    document.body.style.backgroundImage = `url('${data.urls.full}')`;
    document.getElementById("author").textContent = `By: ${data.user.name}`;
  } catch (err) {
    document.body.style.backgroundImage = `url('https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1758967905380-f62a8c8fd373')`;
  }
}
getData();

// Fetch crypto data
async function getCrypto() {
  try {
    const res = await fetch("https://api.coingecko.com/api/v3/coins/bitcoin");
    if (!res.ok) {
      throw Error("Something went wrong");
    }
    const data = await res.json();

    document.getElementById("crypto-name").textContent = data.name;
    document.getElementById("crypto-image").src = data.image.small;
    document.getElementById("crypto-current").textContent += `$${data.market_data.current_price.usd}`;
    document.getElementById("crypto-high").textContent += `$${data.market_data.high_24h.usd}`;
    document.getElementById("crypto-low").textContent += `$${data.market_data.low_24h.usd}`;
  } catch (err) {
    console.log(err);
  }
}
getCrypto();

// Update current time every second
setInterval(() => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const amPm = hours >= 12 ? "PM" : "AM";
  const hour12 = hours === 0 ? 12 : hours > 12 ? hours - 12 : hours;
  const timeStr = `${hour12}:${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")} ${amPm}`;
  document.getElementById("time").textContent = timeStr;
}, 1000);

// Weather: based on geolocation
navigator.geolocation.getCurrentPosition(async (position) => {
  try {
    const { latitude, longitude } = position.coords;
    const res = await fetch(
      `https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric`
    );
    const data = await res.json();
    const icon = data.weather[0].icon;

    document.getElementById("temp").textContent = Math.round(data.main.temp);
    document.getElementById("city").textContent = data.name;
    document.getElementById(
      "weather-image"
    ).src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
  } catch (err) {
    console.error(err);
  }
});
