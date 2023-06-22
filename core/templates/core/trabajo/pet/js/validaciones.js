// objeto.metodo(json)
$(document).ready(function() {
    $('#formMantProduct').validate({
        rules: {
            category: {
                required: true,
            },
            name_pro: {
                required: true,
                minlength: 3,
            },
            descrip: {
                required: true,
                minlength: 5,
            },
            price: {
                required: true,
            },
            desc_sub: {
                required: true,
            },
            desc_ofer: {
                required: true,
            },
        },

        messages: {
            category: {
                required: "El campo es obligatorio",
            },
            name_pro: {
                required: "El campo es obligatorio",
                minlength: "Debe contener al menos 3 caracteres",
            },
            descrip: {
                required: "El campo es obligatorio",
                minlength: "Debe contener una descripción",
            },
            price: {
                required: "El campo es obligatorio",
            },
            desc_sub: {
                required: "El campo es obligatorio, ya sea cero",
            },
            desc_ofer: {
                required: "El campo es obligatorio, ya sea cero",
            },
        },
    });

    $('#formMantUser').validate({
        rules: {
            id: {
                required: true,
            },
            rut: {
                required: true,
                rut: true,
            },
            names: {
                required: true,
                minlength: 1,
            },
            last_names: {
                required: true,
                minlength: 1,
            },
            email: {
                required: true,
                email: true,
            },
            address: {
                required: true,
                minlength: 5,
            },
            password: {
                required: true,
                minlength: 8,
            },
        },

        messages: {
            id: {
                required: "Completara la bd",
            },
            rut: {
                required: "El rut es un campo obligatorio",
                rut: "El formato del rut no es válido",
            },
            names: {
                required: "Debe ingresar al menos uno de sus Nombres.",
            },
            last_names: {
                required: "Debe ingresar al menos uno de sus Apellidos.",
            },
            email: {
                required: "El Correo es obligatorio.",
                email: "Formato de correo incorrecto.",
            },
            address: {
                required: "Debe ingresar su Dirección, para futuros envios.",
            },
            password: {
                required: "La Contraseña es obligatoria.",
                minlength: "La Contraseña debe contener al menos 8 caracteres.",
            },
        },

        submitHandler: function(form) {
            rut();
        }
    });

    $('#formMantUser').validate({
        rules: {
            id: {
                required: true,
            },
            rut: {
                required: true,
                rut: true,
            },
            names: {
                required: true,
                minlength: 1,
            },
            last_names: {
                required: true,
                minlength: 1,
            },
            email: {
                required: true,
                email: true,
            },
            address: {
                required: true,
                minlength: 5,
            },
            password: {
                required: true,
                minlength: 8,
            },
        },

        messages: {
            id: {
                required: "Completa bd",
            },
            rut: {
                required: "El rut es un campo obligatorio",
                rut: "El formato del rut no es válido",
            },
            names: {
                required: "Debe ingresar al menos uno de sus Nombres.",
            },
            last_names: {
                required: "Debe ingresar al menos uno de sus Apellidos.",
            },
            email: {
                required: "El Correo es obligatorio.",
                email: "Formato de correo incorrecto.",
            },
            address: {
                required: "Debe ingresar su Dirección, para futuros envios.",
                minlength: "Debe contener una direccion",
            },
            password: {
                required: "La Contraseña es obligatoria.",
                minlength: "La Contraseña debe contener al menos 8 caracteres.",
            },
        },

        submitHandler: function(form) {
            rut();
        }
    });

    $('#formMantBodega').validate({
        rules: {
            category: {
                required: true,
            },

            name: {
                required: true,
            },

            stat: {
                required: true,
            },

            number: {
                required: true,
            }
        },

        messages: {
            category: {
                required: "El campo es obligatorio",
            },

            name: {
                required: "El campo es obligatorio",
            },

            stat: {
                required: "El campo es obligatorio",
            },

            number: {
                required: "El campo es obligatorio, ya sea cero o mayor",
            }
        }
    })

    // id del formulario recurperar-contraseña
    $('#formRecuperar').validate({
        // Sección de reglas en base a los name
        rules: {
            // name de email que es "email"
            email: {
                required: true,
                email: true,
            },
        },

        // Sección de mensajes en base los name
        messages: {
            email: {
                required: "El Correo es obligatorio",
                email: "Formato de Correo incorrecto",
            },
        }
    });

    // id del formulario de login
    $('#formLogin').validate({
        // Sección de reglas en base a los name
        rules: {
            // name de email que es "email"
            email: {
                required: true,
                email: true,
            },
            // name de la password que es "password"
            password: {
                required: true,
                minlength: 8,
            },
        },

        // Sección de mensajes en base los name
        messages: {
            email: {
                required: "El Correo es obligatorio",
                email: "Formato de Correo incorrecto",
            },
            // password es el name
            password: {
                required: "La Contraseña es obligatoria",
                minlength: "La Contraseña debe contener al menos 8 caracteres.",
            },
        }
    });

    // id de formulario registrarse
    $('#formReg').validate({
        // Sección de reglas en base a los name
        rules: {
            rut: {
                required: true,
                rut: true,
            },
            names: {
                required: true,
                minlength: 1,
            },
            last_names: {
                required: true,
                minlength: 1,
            },
            email: {
                required: true,
                email: true,
            },
            address: {
                required: true,
                minlength: 5,
            },
            password: {
                required: true,
                minlength: 8,
            },
            password2: {
                required: true,
                equalTo: "password",
            },
        },

        // Sección de mensajes en base los name
        messages: {
            // el rut hay que tocarlo con script
            rut: {
                required: "El rut es un campo obligatorio",
                rut: "El formato del rut no es válido"
            },
            names: {
                required: "Debe ingresar al menos uno de sus Nombres.",
            },
            last_names: {
                required: "Debe ingresar al menos uno de sus Apellidos.",
            },
            email: {
                required: "El Correo es obligatorio.",
                email: "Formato de correo incorrecto.",
            },
            address: {
                required: "Debe ingresar su Dirección, para futuros envios.",
                minlength: "Debe contener una direccion",
            },
            password: {
                required: "La Contraseña es obligatoria.",
                minlength: "La Contraseña debe contener al menos 8 caracteres.",
            },
            password2: {
                required: "Repetir la Contraseña es obligatorio.",
                equalTo: "Las Contraseñas deben coincidir.",
            }
        },

        submitHandler: function(form) {
            // Si formulario es válido, puedes llamar el metodo(funcion)
            rut();
        }
    });

    $('#formMisDatos').validate({
        rules: {
            rut: {
                required: true,
                rut: true,
            },
            names: {
                required: true,
                minlength: 1,
            },
            last_names: {
                required: true,
                minlength: 1,
            },
            email: {
                required: true,
                email: true,
            },
            address: {
                required: true,
                minlength: 5,
            },
            password: {
                required: true,
                minlength: 8,
            },
            password2: {
                required: true,
                equalTo: "password",
            },
        },

        messages: {
            rut: {
                required: "El rut es un campo obligatorio",
                rut: "El formato del rut no es válido"
            },
            names: {
                required: "Debe ingresar al menos uno de sus Nombres.",
            },
            last_names: {
                required: "Debe ingresar al menos uno de sus Apellidos.",
            },
            email: {
                required: "El Correo es obligatorio.",
                email: "Formato de correo incorrecto.",
            },
            address: {
                required: "Debe ingresar su Dirección, para futuros envios.",
            },
            password: {
                required: "La Contraseña es obligatoria.",
                minlength: "La Contraseña debe contener al menos 8 caracteres.",
            },
            password2: {
                required: "Repetir la Contraseña es obligatorio.",
                equalTo: "Las Contraseñas deben coincidir.",
            }
        },

        submitHandler: function(form) {
            rut();
        }
    });

    $('#formMisDatosAdmin').validate({
        rules: {
            rut: {
                required: true,
                rut: true,
            },
            names: {
                required: true,
                minlength: 1,
            },
            last_names: {
                required: true,
                minlength: 1,
            },
            email: {
                required: true,
                email: true,
            },
            address: {
                required: true,
                minlength: 5,
            },
            password: {
                required: true,
                minlength: 8,
            },
            password2: {
                required: true,
                equalTo: "password",
            },
        },

        messages: {
            rut: {
                required: "El rut es un campo obligatorio",
                rut: "El formato del rut no es válido"
            },
            names: {
                required: "Debe ingresar al menos uno de sus Nombres.",
            },
            last_names: {
                required: "Debe ingresar al menos uno de sus Apellidos.",
            },
            email: {
                required: "El Correo es obligatorio.",
                email: "Formato de correo incorrecto.",
            },
            address: {
                required: "Debe ingresar su Dirección, para futuros envios.",
            },
            password: {
                required: "La Contraseña es obligatoria.",
                minlength: "La Contraseña debe contener al menos 8 caracteres.",
            },
            password2: {
                required: "Repetir la Contraseña es obligatorio.",
                equalTo: "Las Contraseñas deben coincidir.",
            }
        },

        submitHandler: function(form) {
            rut();
        }
    });

    $(document).ready(function() {

        // Agregar método de validación para RUT chileno
        $.validator.addMethod("rut", function(value, element) {
          // Eliminar puntos y guión del RUT
          value = value.replace(/[.-]/g, "");
      
          // Validar que el RUT tenga 8 o 9 dígitos
          if (value.length < 8 || value.length > 9) {
            return false;
          }
      
          // Validar que el último dígito sea un número o una 'K'
          var validChars = "0123456789K";
          var lastChar = value.charAt(value.length - 1).toUpperCase();
          if (validChars.indexOf(lastChar) == -1) {
            return false;
          }
      
          // Calcular el dígito verificador
          var rut = parseInt(value.slice(0, -1), 10);
          var factor = 2;
          var sum = 0;
          var digit;
          while (rut > 0) {
            digit = rut % 10;
            sum += digit * factor;
            rut = Math.floor(rut / 10);
            factor = factor === 7 ? 2 : factor + 1;
          }
          var dv = 11 - (sum % 11);
          dv = dv === 11 ? "0" : dv === 10 ? "K" : dv.toString();
      
          // Validar que el dígito verificador sea correcto
          return dv === lastChar;
        }, "Por favor ingrese un RUT válido.");
      
    });
    // $("#formReg").validate({
    //   rules: {
        

    //     // *** Estos no son necesarios, ya que los valide antes ***
    //     // email: {
    //     //   required: true,
    //     //   email: true,
    //     // },
    //     // password: {
    //     //   required: true,
    //     //   minlength: 5,
    //     // },
    //     // password2: {
    //     //   required: true,
    //     //   equalTo: "#password",
    //     // },
    //   }, // --> Fin de reglas
    //   messages: {
        

    //     // *** Tambien estan validados ***
    //     // email: {
    //     //   required: "El email es un campo requerido",
    //     //   email: "El email no cumple el formato de un correo",
    //     // },
    //     // password: {
    //     //   required: "La contraseña es una campo obligatorio",
    //     //   minlength: "Mínimo 5 caracteres",
    //     // },
    //     // password2: {
    //     //   required: "Repita la contraseña anterior",
    //     //   equalTo: "Debe ser igual al campo contraseña",
    //     // },
    //   },
    // });

    // maqueta para formularios
    // // id del formulario
    // $('#form').validate({
    //     // Sección de reglas apuntando a los name
    //     rules: {
    //         email: {
    //             required: true,
    //             email: true,
    //         },

    //         password: {
    //             required: true,
    //             minlength: 8,
    //         },

    //         password2: {
    //             required: true,
    //             minlength: 8,
    //             equalTo: "#password",
    //         },
    //     },

    //     // Sección de mensajes apuntando a los name
    //     messages: {
    //         email: {
    //             required: "El e-mail es obligatorio",
    //             email: "Formato de correo incorrecto",
    //         },

    //         password: {
    //             required: "La password es obligatoria",
    //             minlength: "Escriba al menos 8 caracteres",
    //         },

    //         password2: {
    //             required: "La password es obligatoria",
    //             minlength: "Escriba al menos 8 caracteres",
    //             equalTo: "Las contraseña deben coincidir",
    //         }
    //     }

    // });
});