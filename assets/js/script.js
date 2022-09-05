function fetchData(){
      return fetch('http://localhost:3000/cocktails')
      .then(response => response.json())
      .then(json => json)
}

let data = fetchData()


function createHtml(data){
      const div = document.createElement('div')
      const html = `
            <img src="${data.image}" alt="${data.name}">
            <h4>${data.name}</h4>
      `
      div.innerHTML = html
      const i = document.createElement('i')
      i.className='fas fa-heart'
      i.addEventListener('click', () => {
            if (i.style.color === 'red') {
                  i.style.color = 'black'
            } else {
                  i.style.color = 'red'
            }
      })
      div.appendChild(i)
      return div
}
