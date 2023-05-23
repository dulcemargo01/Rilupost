$(document).ready(function()
{ var dropdown = document.getElementsByClassName("dropdown");

for (var i = 10; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    });
}



	
		$(".container").hide();
		$(".dropdown").on("click", function()
		{
			$(".container").show();
		});
		
	

	$(".dropdown").on("click", function()
	{
		$(".olo").hide();
		$(".bizz").show();
	});

	//function hide() oculta el elemento 
	// seleccionado
	$(".panel").hide();
	$(".Bizcochos").show();
$(".postbizcochos").on("click", function()
	{
		$(".panel").hide();
		$(".Bizcochos").show();

		var textomenu=$(this).text();
	//alert(textomenu);
		$("span").text(textomenu);
		});
	$(".postdonas").on("click", function()
	{
		$(".panel").hide();
		$(".Donas").show();

		var textomenu=$(this).text();
	//alert(textomenu);
		$("span").text(textomenu);


	});
	$(".posthotcake").on("click", function()
	{
		$(".panel").hide();
		$(".hot").show();

		var textomenu=$(this).text();
	//alert(textomenu);
		$("span").text(textomenu);


	});
	$(".postgelatinas").on("click", function()
	{
		$(".panel").hide();
		$(".Gelatinas").show();

		var textomenu=$(this).text();
	//alert(textomenu);
		$("span").text(textomenu);


	});
	$(".postpies").on("click", function()
	{
		$(".panel").hide();
		$(".pies").show();

		var textomenu=$(this).text();
	//alert(textomenu);
		$("span").text(textomenu);


	});

//INTERFAZ DE COMENTARIO//

$(".pu").on("click",function()
	{
		var nom=$(".brillit").val();
		var cor=$(".alan").val();
		var com=$(".dulce").val();
		var fec=$(".hoy").val();
		

		
		$(".muestra").html("De:"+nom+"<br>"+"Comentario:"+com+"<br>"+"Correo:"+cor+"<br>"+"Fecha:"+fec+"<br>");
		
		$(".muestra").prepend(newComent);
		$('.day')[0].reset();
	});

// Obtener los elementos HTML necesarios

const cartItemsEl = document.getElementById("cart-items");
const cartTotalEl = document.getElementById("cart-total");
const productItems = document.querySelectorAll("#product-items li");

// Variables para mantener el estado del carrito
let cartItems = [];
let cartTotal = 0;

// Función para agregar un elemento al carrito
function addToCart(name, price) {
  // Verificar si el producto ya está en el carrito
  for (let i = 0; i < cartItems.length; i++) {
    if (cartItems[i].name === name) {
      cartItems[i].quantity++;
      cartItems[i].total = cartItems[i].quantity * price;
      renderCart();
      return;
    }
  }

  // Si el producto no está en el carrito, agregarlo
  cartItems.push({
    name: name,
    price: price,
    quantity: 1,
    total: price,
  });

  renderCart();
}

// Función para eliminar un elemento del carrito
function removeFromCart(name) {
  // Buscar el índice del elemento en el carrito
  const index = cartItems.findIndex((item) => item.name === name);

  if (index !== -1) {
    // Si se encontró el elemento, eliminarlo del carrito
    cartItems.splice(index, 1);
    renderCart();
  }
}

// Función para renderizar el carrito
function renderCart() {
  // Limpiar el contenido actual del carrito
  cartItemsEl.innerHTML = "";
  cartTotal = 0;

  // Agregar cada elemento del carrito al HTML
  for (let i = 0; i < cartItems.length; i++) {
    const item = cartItems[i];

    const li = document.createElement("li");
    li.innerHTML = `${item.name} x ${item.quantity} = $${item.total.toFixed(
      2
    )} <button class="remove-from-cart">Eliminar</button>`;
    cartItemsEl.appendChild(li);

    cartTotal += item.total;
  }

  // Actualizar el total del carrito
  cartTotalEl.innerHTML = `$${cartTotal.toFixed(2)}`;

  // Agregar el evento "click" a los botones de "Eliminar"
  const removeButtons = document.querySelectorAll(".remove-from-cart");
  removeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const name = button.parentElement.textContent.split(" x ")[0];
      removeFromCart(name);
    });
  });
}


// Agregar el evento "click" a los botones de "Agregar"
productItems.forEach((item) => {
  const name = item.dataset.name;
  const price = parseFloat(item.dataset.price);

  item.querySelector(".add-to-cart").addEventListener("click", () => {
    addToCart(name, price);
  });
});

		const pagarButton = document.querySelector('.pagar .add-to-cart');
pagarButton.addEventListener('click', handlePagar);

function handlePagar() {
  const paymentOptions = document.getElementsByName('payment-option');
  let selectedOption;

  for (let i = 0; i < paymentOptions.length; i++) {
    if (paymentOptions[i].checked) {
      selectedOption = paymentOptions[i].value;
      break;
    }
  }

  if (selectedOption) {
    // Aquí puedes realizar acciones según la opción de pago seleccionada
    switch (selectedOption) {
      case 'tarjeta':
        // Lógica para procesar el pago con tarjeta
        break;
      case 'efectivo':
        // Lógica para procesar el pago en efectivo
        break;
      case 'transferencia':
        // Lógica para procesar el pago por transferencia
        break;
    }

    // Lógica adicional para completar la compra, enviar el correo electrónico, etc.
  } else {
    alert('Por favor, selecciona una opción de pago.');
  }
}

$(".pagar").on("click",function()
{$(".opc").show();

alert('usted compro')

});


	
		
	$(".pagar").on("click",function()
	{$(".opc").show();
	
	});

$(".deta1").hide();
$(".photo1").on("click", function()
	{
		$(".deta1").show();

	});
$(".deta1").on("click", function()
	{
		$(".deta1").hide();

	});


$(".deta2").hide();
$(".photo2").on("click", function()
	{
		$(".deta2").show();

	});
$(".deta2").on("click", function()
	{
		$(".deta2").hide();

	});

$(".deta3").hide();
$(".photo3").on("click", function()
	{
		$(".deta3").show();
	});
$(".deta3").on("click", function()
	{
		$(".deta3").hide();

	});

$(".deta4").hide();
$(".photo4").on("click", function()
	{
		$(".deta4").show();
	});
$(".deta4").on("click", function()
	{
		$(".deta4").hide();

	});

$(".deta5").hide();
$(".photo5").on("click", function()
	{
		$(".deta5").show();
	});
$(".deta5").on("click", function()
	{
		$(".deta5").hide();

	});

$(".deta6").hide();
$(".photo6").on("click", function()
	{
		$(".deta6").show();
	});
$(".deta6").on("click", function()
	{
		$(".deta6").hide();

	});

$(".deta7").hide();
$(".photo7").on("click", function()
	{
		$(".deta7").show();
	});
$(".deta7").on("click", function()
	{
		$(".deta7").hide();

	});

$(".deta8").hide();
$(".photo8").on("click", function()
	{
		$(".deta8").show();
	});
$(".deta8").on("click", function()
	{
		$(".deta8").hide();

	});

$(".deta9").hide();
$(".photo9").on("click", function()
	{
		$(".deta9").show();
	});
$(".deta9").on("click", function()
	{
		$(".deta9").hide();

	});

$(".deta10").hide();
$(".photo10").on("click", function()
	{
		$(".deta10").show();
	});
$(".deta10").on("click", function()
	{
		$(".deta10").hide();

	});

$(".deta11").hide();
$(".photo11").on("click", function()
	{
		$(".deta11").show();
	});
$(".deta11").on("click", function()
	{
		$(".deta11").hide();

	});

$(".deta12").hide();
$(".photo12").on("click", function()
	{
		$(".deta12").show();
	});
$(".deta12").on("click", function()
	{
		$(".deta12").hide();

	});

$(".deta13").hide();
$(".photo13").on("click", function()
	{
		$(".deta13").show();
	});
$(".deta13").on("click", function()
	{
		$(".deta13").hide();

	});

$(".deta14").hide();
$(".photo14").on("click", function()
	{
		$(".deta14").show();
	});
$(".deta14").on("click", function()
	{
		$(".deta14").hide();

	});

$(".deta15").hide();
$(".photo15").on("click", function()
	{
		$(".deta15").show();
	});
$(".deta15").on("click", function()
	{
		$(".deta15").hide();

	});

$(".deta16").hide();
$(".photo16").on("click", function()
	{
		$(".deta16").show();
	});
$(".deta16").on("click", function()
	{
		$(".deta16").hide();

	});

$(".deta17").hide();
$(".photo17").on("click", function()
	{
		$(".deta17").show();
	});
$(".deta17").on("click", function()
	{
		$(".deta17").hide();

	});

$(".deta18").hide();
$(".photo18").on("click", function()
	{
		$(".deta18").show();
	});
$(".deta18").on("click", function()
	{
		$(".deta18").hide();

	});

$(".deta19").hide();
$(".photo19").on("click", function()
	{
		$(".deta19").show();
	});
$(".deta19").on("click", function()
	{
		$(".deta19").hide();

	});

$(".deta20").hide();
$(".photo20").on("click", function()
	{
		$(".deta20").show();
	});
$(".deta20").on("click", function()
	{
		$(".deta20").hide();

	});



});

