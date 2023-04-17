$(document).ready(function() {
  $('#btnEnviarForm').click(function() {
    event.preventDefault()
  });

  $('#formContactenos').validate({
    rules:{
        name:{
            required:true,
            minlength:3
        },
        telefono:{
            required:true,
            minlength:8
        },
        email:{
            required:true,
            email:true
        },
        consulta:{
            required:true,
            minlength:20
        }
    },
    messages:{
        name:{
            required:'Por favor, ingrese su nombre y apellido',
            minlength:"Por favor, ingrese una palabra con más de 2 caracteres"
        },
        telefono:{
            required:"Por favor, ingrese su numero de telofono",
            minlength:"La cantidad de digitos minima es de 8"
        },
        email:{
            required:"Por favor, ingrese su email",
            email:"Por favor ingrese un email valido"
        },
        consulta:{
            required:"Por favor, ingrese su consulta o reclamo",
            minlength:"La cantidad minima de caracteres es de 20"
        }
        
    },
    submitHandler:function(form){
        form.submit()
    }
  })

  $('#formContactenos').on('keyup change', function() {
    if ($('#formContactenos').valid()) {
      $('#btnEnviarForm').prop('disabled', false);
    } else {
      $('#btnEnviarForm').prop('disabled', true);
    }
  });

  $('#btnCerrar').click(()=>{
    window.location.href="../index.html"
  })

  $('#btnGenerarPdf').click(()=>{

  $('#formContactenos').printThis()

})

});
