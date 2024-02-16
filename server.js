console.log("https://products-api-2ttf.onrender.com/api/products")
const productList = document.getElementById('product-list');
let c=-1;
fetch('https://products-api-2ttf.onrender.com/api/products')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Work with the JSON data here
        data.forEach(product => {
            c=c+1;
            const productContainer = document.createElement('div');
            productContainer.classList.add('product');
            const image = document.createElement('img');
            image.src = product.image;
            image.alt = product.title;
            const heading = document.createElement('h2');
            heading.textContent = product.title;
            if(c===0){
                 productContainer.appendChild(image);
                 productContainer.appendChild(heading);
            }
            else{
                productContainer.appendChild(heading);
                productContainer.appendChild(image);
            }
            if(c===0){
                const addButton=document.getElementById("addButton")
                addButton.classList.remove("nun")
                productContainer.appendChild(addButton)
            }
            productList.appendChild(productContainer);
        });
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });