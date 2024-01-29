
async function getProducts(){
    const response = await fetch("https://dummyjson.com/products");
    const productsJson = await response.json();
    
    
    const products = productsJson.products.map(function(product){
        return `<div class = "product">
                 <div class = "container">
                <h2>${product.title}</h2>
                <img src="${product.thumbnail}" alt="${product.title}"/>
                <span>${product.price} $</span>
                </div>
                </div>`
    }).join('');


    document.querySelector('.products').innerHTML = products;
    
}

getProducts();
