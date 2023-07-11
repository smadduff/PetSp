function eliminar_producto_en_carrito(carrito_id, event) {
  event.preventDefault(); // Detiene la propagación del evento a otros manejadores.
  
  $.ajax({
      url: '/eliminar_producto_en_carrito/' + carrito_id,
      type: 'DELETE',
      success: function(response) {
          if (response.success) {
              // Aquí puedes actualizar el contenido del modal.
              // Por ejemplo, puedes eliminar la fila del producto en la tabla:
              $('#producto-' + carrito_id).remove();
          }
      }
  });
}