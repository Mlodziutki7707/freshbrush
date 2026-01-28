let cart = [];
let selectedQty = 1;

document.querySelectorAll('.choice').forEach(c => {
  c.onclick = () => {
    document.querySelectorAll('.choice').forEach(x => x.classList.remove('active'));
    c.classList.add('active');
  };
});

document.querySelectorAll('.buy-option').forEach(b => {
  b.onclick = () => {
    document.querySelectorAll('.buy-option').forEach(x => x.classList.remove('active'));
    b.classList.add('active');
    selectedQty = b.dataset.qty;
    document.getElementById("price").innerText =
      selectedQty == 2 ? "179,98 zł" : "99,99 zł";
  };
});

function changeImage(img) {
  document.getElementById("mainImage").src = img.src;
}

function addToCart() {
  const color = document.querySelector('.choice.active').dataset.color;
  const qty = selectedQty;

  const productUrl = "https://freshbrush-8941.myshopify.com/cart/add?id=";

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

  const variantId = variants[color][qty];
  window.location.href = productUrl + variantId + "&quantity=1";
}

function updateCart() {
  document.getElementById("cartCount").innerText = cart.length;
  const list = document.getElementById("cartItems");
  list.innerHTML = "";
  cart.forEach(i => {
    const li = document.createElement("li");
    li.innerText = i;
    list.appendChild(li);
  });
}

function toggleCart() {
  const panel = document.getElementById("cartPanel");
  panel.style.display = panel.style.display === "block" ? "none" : "block";
}
