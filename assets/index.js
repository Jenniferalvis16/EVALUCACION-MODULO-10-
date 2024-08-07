$(document).ready(function() {
  $(".text-body-secondary").click(function() {
      var targetId = $(this).data("target");
      $(".detalles").hide(); // Ocultar todos los detalles
      $("#detalles" + targetId).toggle(); // Mostrar el detalle correspondiente
  });

  $(".btn-close").click(function() {
      $(this).closest(".detalles").hide(); // Ocultar el detalle correspondiente
  });
});
