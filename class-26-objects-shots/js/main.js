//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

document.querySelector('button').addEventListener('click', getDrink)

function getDrink(){
    let drink = document.querySelector('intput').value
    fetch(` www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then(res=>res.json())
    .then(data=>{
        console.log(data.drinks[2]) // without the indexing, it returns an array of objects
        document.querySelector('h2').innerText = data.drinks[2].strDrink
        document.querySelector('img').src = data.drinks[2].strDrinkThumb
        document.querySelector('h3').innerText = data.drinks[2].strInstructions 
    })
    .catch(err=>{console.log(`error ${err}`)})
}

// an array of objects like the drinks api is what we'd need for a pizza maker app
// this is all making sense
// homework: find out how to make this work when the input has spaces
// push homework: have it cycle through the drinks
// do the nasa picture of the day api