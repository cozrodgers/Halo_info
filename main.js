var params = 'weapons'
var url = `https://www.haloapi.com/metadata/h5/metadata/${params}`;
var api_key = '0566752618cc4144bb5ffc4f49cc3bd9';

fetch(url, {
  method: 'GET', // or 'PUT'
  headers:{
    'Ocp-Apim-Subscription-Key': api_key
  }
  
}).then(res => res.json())
.then(response => {
    
    console.log('Success:', console.log(response))

    response.forEach(weapon => {
        
  let html = document.getElementById('items');
  html.innerHTML += `<li>${weapon.name}</li>
                        <img src="${weapon.smallIconImageUrl}"></img>`;
  

        
    });

})
.catch(error => console.error('Error:', error));

