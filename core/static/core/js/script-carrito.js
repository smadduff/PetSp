function loadHTMLComponents(){
    const carritoNav = document.getElementById('carritoNav');
    const carritoContenedor = document.getElementById('carritoContenedor');
    console.log('hola mundo');
    carritoNav.addEventListener('click', function () {
      if (carritoContenedor.style.display === 'none') {
        carritoContenedor.style.display = 'block';
      } else {
        carritoContenedor.style.display = 'none';
      }
    });
    // const contenidoWeb = document.querySelector('body');
    // contenidoWeb.addEventListener('click', () => {
    // carritoContenedor.style.display = 'none';
    // });
}

document.addEventListener("DOMContentLoaded", loadHTMLComponents);