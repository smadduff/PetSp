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

function eliminar_producto_en_carrito(carrito_id) {
console.log('Eliminar producto en carrito');
// Enviar una solicitud AJAX para eliminar el producto del carrito
$.ajax({
  url: '/eliminar_producto_en_carrito/' + carrito_id,
  type: 'POST',
  data: {
    csrfmiddlewaretoken: '{{ csrf_token }}'
  },
  success: function() {
    // Actualizar la página después de eliminar el producto del carrito
    location.reload();
  }
});
}

document.addEventListener("DOMContentLoaded", loadHTMLComponents);
