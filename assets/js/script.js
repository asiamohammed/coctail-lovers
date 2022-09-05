function fetchData(){
      fetch('http://localhost:3000/cocktails')
      .then(response => response.json())
      .then(json => json)
}
fetchData()

function createHtml(data){
      const html = `
      <div class="card">
            <h2>${data.name}</h2>
            <img src="${data.image}" alt="${data.name}">
      </div>
      `
      const i = document.createElement('i')
      i.className='fas fa-heart'
      i.addEventListener('click', () => {
            if (i.style.color === 'red') {
                  i.style.color = 'black'
            } else {
                  i.style.color = 'red'
            }
      })
      return html
}
