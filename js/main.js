const products = [
    { id: 1, name: "T-Shirt", price: 19.99, image: "assets/images/black-tshirt.jpg" },
    { id: 2, name: "Sneakers", price: 49.99, image: "assets/images/sneakers.jpg" },
    { id: 3, name: "Hat", price: 14.99, image: "assets/images/hat.jpg" },
    { id: 4, name: "Backpack", price: 39.99, image: "assets/images/yellow-backpack.jpg" }
  ];

  const productList = document.getElementById('productList');
  const cartItems = document.getElementById('cartItems');
  const cartTotal = document.getElementById('cartTotal');

  let cart = [];

  function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    renderCart();
  }
  function renderCart() {
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
      const li = document.createElement('li');
      li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
      cartItems.appendChild(li);
      total += item.price;
    });
    cartTotal.textContent = total.toFixed(2);
  }

  function renderProducts() {
    products.forEach(product => {
      const div = document.createElement('div');
      div.className = 'product';
      div.innerHTML = `
        <img src="${product.image}" alt="${product.name}" />
        <h3>${product.name}</h3>
        <p>$${product.price.toFixed(2)}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      `;
      productList.appendChild(div);
    });
  }
  renderProducts();