// configuração do slider----------------------------------
var swiper = new Swiper(".swiper", {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    keyboard: true,
  });
// configuração do efeito maquina de escrever--------------------
document.addEventListener('DOMContentLoaded', function() {
  // O texto que será "digitado"
  var texto = "Adriano Cardoso";
  var span = document.getElementById('textoMaquina');

  // Definindo o texto no span
  span.textContent = '';

  // Adicionando cada letra do texto com um pequeno atraso para simular a "digitação"
  for (var i = 0; i < texto.length; i++) {
      setTimeout(function() {
          span.textContent += texto.charAt(0);
          texto = texto.substring(1);
      }, i * 100); // Atraso de 100ms entre cada letra
  }
});

