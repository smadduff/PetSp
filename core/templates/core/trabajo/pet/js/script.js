

//carrito
console.log('hola mundo');
document.addEventListener('DOMContentLoaded', function () {
  const carritoNav = document.getElementById('carritoNav');
  const carritoContenedor = document.getElementById('carritoContenedor');

  carritoNav.addEventListener('click', function () {
    if (carritoContenedor.style.display === 'none') {
      carritoContenedor.style.display = 'block';
    } else {
      carritoContenedor.style.display = 'none';
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const contenidoWeb = document.querySelector('#contenidoweb');
  const carritoContenedor = document.getElementById('carritoContenedor');

  contenidoWeb.addEventListener('click', () => {
  carritoContenedor.style.display = 'none';
  });
});