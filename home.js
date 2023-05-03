const carouselItems = document.querySelectorAll(".carousel-item");
let currentItemIndex = 0;

function showNextItem() {
  // oculta o item atual
  carouselItems[currentItemIndex].classList.remove("active");
  // incrementa o índice do item atual
  currentItemIndex++;
  // verifica se atingiu o final da lista
  if (currentItemIndex >= carouselItems.length) {
    currentItemIndex = 0;
  }
  // exibe a prox imagem
  carouselItems[currentItemIndex].classList.add("active");
}
// exibe a primeira imagem
carouselItems[currentItemIndex].classList.add("active");
//intervalo de tempo para trocar de imagem
setInterval(showNextItem, 4000);


/* Clicar na imagem e ir para a descrição do mapa
$('.nav a[href^="#"]').on('click', function(e) {
	e.preventDefault();
	var id = $(this).attr('href'),
			targetOffset = $(id).offset().top;
			
	$('html, body').animate({ 
		scrollTop: targetOffset - 100
	}, 500);
});
*/
