$(document).ready(function() {

    $.validator.setDefaults({
        messages: {
          required: 'Este campo es obligatorio',
        },
    });

    $.validator.addMethod('sumaDescuentos', function(value, element) {
        
        var descuentoSubscriptor = parseFloat($('#id_descuento_subscriptor').val());
        var descuentoOferta = parseFloat($('#id_descuento_oferta').val());
        var sumaDescuentos = descuentoSubscriptor + descuentoOferta;
        
        if (isNaN(descuentoSubscriptor) || isNaN(descuentoOferta)) return true;

        return sumaDescuentos <= 100;

    }, 'La suma de los descuentos no puede superar el 100%');

    $('#form').validate({ 
        rules: {
            'categoria': {
                required: true,
            },
            'nombre': {
                required: true,
                minlength: 3,
            },
            'descripcion': {
                required: true,
                minlength: 5,
            },
            'precio': {
                required: true,
                digits: true,
                number: true,
            },
            'descuento_subscriptor': {
                required: true,
                digits: true,
                number: true,
                range: [0, 100],
                sumaDescuentos: true,
            },
            'descuento_oferta': {
                required: true,
                digits: true,
                number: true,
                range: [0, 100],
                sumaDescuentos: true,
            },
        },
        messages: {
            'categoria': {
                required: 'El campo categoria es obligatorio',
            },
            'nombre': {
                required: "El campo nombre es obligatorio",
                minlength: "Debe contener al menos 3 caracteres",
            },
            'descripcion': {
                required: "El campo descripcion es obligatorio",
                minlength: "Debe contener una descripción",
            },
            'precio': {
                required: 'El campo precio es obligatorio',
                number: 'Este campo solo acepta números',
                digits: 'El numero ingresado debe ser número entero',
            },
            'descuento_subscriptor': {
                required: 'El campo es obligatorio debe ingresar el porcentaje de descuento para subscriptores',
                number: 'Debe ingresar un número',
                digits: 'Debe ingresar un número entero',
                range: 'El descuento debe al menos 0 y como maximo 100',
            },
            'descuento_oferta': {
                required: 'El campo es obligatorio debe ingresar el porcentaje de descuento para oferta',
                number: 'Debe ingresar un número',
                digits: 'Debe ingresar un número entero',
                range: 'El descuento debe al menos 0 y como maximo 100',
            },
        },
        errorPlacement: function(error, element) {
            error.insertAfter(element); // Inserta el mensaje de error después del elemento
            error.addClass('error-message'); // Aplica una clase al mensaje de error
            //element.after('<br>'); 
        },
    });

    $('#id_imagen').change(function() {
        var input = this;
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function(e) {
                $('#admin-producto-imagen').attr('src', e.target.result).show();
            };
            reader.readAsDataURL(input.files[0]);
        }
    });

});