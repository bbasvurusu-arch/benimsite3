function addToCart(name, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(name + " sepete eklendi!");
}

function displayCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let cartItems = document.getElementById("cart-items");
  let total = 0;
  cartItems.innerHTML = "";

  cart.forEach((item, index) => {
    total += item.price;
    cartItems.innerHTML += `
      <div class="cart-item">
        <p>${item.name} - ₺${item.price.toFixed(2)}</p>
        <button onclick="removeFromCart(${index})">Sil</button>
      </div>
    `;
  });

  document.getElementById("total-price").innerText = "Toplam: ₺" + total.toFixed(2);
}

function removeFromCart(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}

function checkout() {
  window.location.href = "checkout.html";
}

if (document.getElementById("cart-items")) {
  displayCart();
}
