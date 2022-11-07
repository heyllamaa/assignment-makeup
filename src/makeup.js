function buttonClicked(){
    //const cityForm  = document.querySelector("#foodForm")
    //const getWeatherConditions = async(city) => {
    let brands = document.getElementById("brands").value
    let category = document.getElementById("category").value
    fetch (`http://makeup-api.herokuapp.com/api/v1/products.json?brand=${brands}&product_type=${category}`)
        .then (response => response.json())
        .then (data =>{
            console.log(data)
            console.log("Brand:",data[0].brand)
            console.log("Category:",data[0].product_type)
            console.log("Product Name: ",data[0].name)
            console.log("Rating: ",data[0].rating)
            console.log("Price: ",data[0].price)
            console.log("Description: ",data[0].description)
            
            document.getElementById("display").append((data[0].brand))
            document.getElementById("display1").append((data[0].product_type))
            document.getElementById("display2").append((data[0].name))
            document.getElementById("display3").append((data[0].rating))
            document.getElementById("display4").append((data[0].price))
            document.getElementById("display5").append((data[0].description))
            
        })
}