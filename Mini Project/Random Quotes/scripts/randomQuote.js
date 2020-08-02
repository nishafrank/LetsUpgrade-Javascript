function newQuote() {
    fetch('https://type.fit/api/quotes').then(response => response.json()).then(data => {
        document.getElementById('text').innerHTML = data[Math.floor((Math.random() * 10) + 1)]['text']
    })

}