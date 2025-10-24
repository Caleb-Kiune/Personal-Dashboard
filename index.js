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