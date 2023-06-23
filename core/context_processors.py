from .models import Carrito

def registrar_carrito(request):

    mostrar_carrito = False
    cantidad_productos = 0
    
    if request.user.is_authenticated:
        if request.user.perfil.tipo_usuario == 'Cliente':
            cantidad_productos = Carrito.objects.filter(cliente=request.user.perfil).count()
            mostrar_carrito = cantidad_productos > 0
   
    return {
        'mostrar_carrito': mostrar_carrito,
        'cantidad_productos': cantidad_productos,
    }

def carrito_variables(request):
    if request.user.is_authenticated and hasattr(request.user, 'perfil') and request.user.perfil.tipo_usuario == 'Cliente':
        detalle_carrito = Carrito.objects.filter(cliente=request.user.perfil)
        total_a_pagar = 0
        for item in detalle_carrito:
            total_a_pagar += item.precio_a_pagar
        monto_sin_iva = int(round(total_a_pagar / 1.19))
        iva = total_a_pagar - monto_sin_iva

        return {
            'detalle_carrito': detalle_carrito,
            'monto_sin_iva': monto_sin_iva,
            'iva': iva,
            'total_a_pagar': total_a_pagar,
        }
    
    # En caso de que las condiciones anteriores no se cumplan, puedes devolver un diccionario vacío o None.
    return {}