fetch('http://localhost:3000/cocktails')
.then(response => response.json())
.then((data) => {
      console.log(data);
});

