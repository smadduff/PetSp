function eliminar_producto_en_carrito(carrito_id) {
    console.log('Eliminar producto en carrito');
    // Obtener el token CSRF de la cookie
    const csrftoken = getCookie('csrftoken');
  
    // Enviar una solicitud AJAX para eliminar el producto del carrito
    $.ajax({
      url: '/eliminar_producto_en_carrito/' + carrito_id,
      type: 'POST',
      headers: {
        'X-CSRFToken': csrftoken
      },
      success: function() {
        // Actualizar la página después de eliminar el producto del carrito
        location.reload();
      }
    });
  }
  
  // Función para obtener el valor de una cookie por su nombre
  function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        // Si la cookie tiene el nombre buscado, obtener su valor
        if (cookie.substring(0, name.length + 1) === (name + '=')) {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  }