let selectedQty = 1;
let cartCount = 0;

// wybór koloru
document.querySelectorAll('.choice').forEach(c => {
  c.onclick = () => {
    document.querySelectorAll('.choice').forEach(x => x.classList.remove('active'));
    c.classList.add('active');
  };
});

// wybór ilości
document.querySelectorAll('.buy-option').forEach(b => {
  b.onclick = () => {
    document.querySelectorAll('.buy-option').forEach(x => x.classList.remove('active'));
    b.classList.add('active');
    selectedQty = b.dataset.qty;
  };
});

function addToCart() {
  const color = document.querySelector('.choice.active').dataset.color;

 const variants = {
    "Biały": {
      1: "52925699391825",
      2: "52925699424593"
    },
    "Szary": {
      1: "52925699457361",
      2: "52925699490129"
    }
  };

  const variantId = variants[color][selectedQty];

  fetch("https://freshbrush-8941.myshopify.com/cart/add.js", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      id: variantId,
      quantity: 1
    })
  })
  .then(res => res.json())
  .then(() => {
    cartCount++;
    document.getElementById("cartCount").innerText = cartCount;
    document.getElementById("cartPanel").style.display = "block";
  })
  .catch(err => console.error(err));
}

// PRZEJŚCIE DO KASY
function goToCheckout() {
  window.location.href = "https://freshbrush-8941.myshopify.com/checkout";
}
