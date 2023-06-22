$(document).ready( () => {
        
        $.get('https://fakestoreapi.com/products', (data) => {
            
            $.each(data, (i, item) => {
                console.log("hola mundo");
                let filas = `<div class="card col-lg-3 col-md-4 col-sm-12" style="width: 26rem;">
                <div class="card-body">
                    <img src="${item.image}" class="card-img-top w-25" alt="saco de alimento">
                    <h5 class="card-title">${item.title}</h5>
                    <p class="card-text text-success">DISPONIBLE EN BODEGA</p>
                    <del class="card-title">${item.price+50+i}</del> <h4 class="card-title">${item.price}</h4> 
                    <p class="card-text">Descripción: </p>
                    <p class="card-text">${item.description} <br> En Stock: ${item.rating.count} unidades</p>
                    <a href="./ficha-producto.html"></a>
                    <a href="#"></a>
                </div>
            </div>
                `
                $('#productos').append(filas);
            })
        })
});