function start(){
    var content = document.getElementById('content')
    
    fetch('https://www.omdbapi.com/?i=tt3896198&apikey=39751968&s=batman')
    .then(response => response.json())
    .then(data  => {
        const {Search} = data
        Search.map((item) => {
            var div = document.createElement('div')
            for(title in data ){

                var output = `
                <div class="card">
                <div class="card_content" id="card">
                <img src="`+item.Poster+`">
                <br>
                <span>`+item.Title+`</span>
                <span>`+item.Year+`</span>

    
                </div>
                </div>`
                
                div.innerHTML=output
                content.appendChild(div)
                var card = document.getElementById('card')
                card.style.background=item.Poster

            }
        })
    })
    
}
function search(){
    var content = document.getElementById('search_content')
    var moviesname = document.getElementById('search').value
    
    fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=39751968&s=${moviesname}`)
    .then(response => response.json())
    .then(data  => {
        const {Search} = data
        Search.map((item) => {
            var div = document.createElement('div')
            for(title in data ){

                var output = `
                <div class="card">
                <div class="card_content" id="card">
                <img src="`+item.Poster+`">
                <br>
                <span>`+item.Title+`</span>
                <span>`+item.Year+`</span>

    
                </div>
                </div>`
                
                div.innerHTML=output
                content.appendChild(div)
                var card = document.getElementById('card')
                

            }
        })
    })
}