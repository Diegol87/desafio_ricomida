//al pasar el cursor sobre lo botones enviar por correo y añadir a favoritos, aparecerá un pop up con 
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

//al apretar el botón enviar correo, aparecerá un mensaje que indique que el correo due enviado correctamente
  document.getElementById("mensaje").onclick = function() {
    alert("El correo fue enviado correctamente...")
  }
  
//al hacer doble click en el ingrediente y/o preparación, se colocará el texto en rojo
$("#rojo").dblclick(function() {
  $("#rojo").addClass("text-danger")
});

$("#rojo1").dblclick(function() {
  $("#rojo1").addClass("text-danger");
});

//asignamos un toggle para poder aparecer y desaparecer los textos de las recetas relacionadas al hace click en su titulo.
$("#card1").click(function() {
  $("#p1").toggle();
});

$("#card2").click(function() {
  $("#p2").toggle();
});

$("#card3").click(function() {
  $("#p3").toggle();
});