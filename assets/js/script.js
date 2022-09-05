const popular = document.querySelector('#popular .disp')
const neww = document.querySelector('#new .disp')
const local = document.querySelector('#local .disp')

function fetchData(){
      return fetch('http://localhost:3000/cocktails')
      .then(response => response.json())
      .then(json => json)
}

function createHtml(data){
      const div = document.createElement('div')
      div.className='card'
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

fetchData().then(data=>{
      data.forEach(cocktail => {
            switch (cocktail.category) {
                  case 'popular':
                        popular.appendChild(createHtml(cocktail))
                        break;
                  case 'new':
                        neww.appendChild(createHtml(cocktail))
                        break;
                  case 'local':
                        local.appendChild(createHtml(cocktail))
                        break;
                  default:
                        break;
            }
      });
})
