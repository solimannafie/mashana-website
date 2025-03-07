
// Product data (simulating database)
const products = [
  {
    id: "1",
    name: "Country Sourdough Loaf",
    description: "Classic sourdough with a crisp crust and soft, tangy interior. Made with organic flour and our 10-year-old starter.",
    price: 8.99,
    image: "https://images.unsplash.com/photo-1585478259715-1c85eb5cd036?q=80&w=2574",
    category: "bread",
    new: true,
    popular: true
  },
  {
    id: "2",
    name: "Whole Wheat Sourdough",
    description: "Hearty whole wheat sourdough made with locally milled flour. Nutty flavor with a touch of honey.",
    price: 9.99,
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2574",
    category: "bread",
    new: false,
    popular: true
  },
  {
    id: "3",
    name: "Olive & Rosemary Focaccia",
    description: "Light and airy focaccia topped with Kalamata olives, fresh rosemary, and flaky sea salt.",
    price: 10.99,
    image: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?q=80&w=2574",
    category: "focaccia",
    new: false,
    popular: true
  },
  {
    id: "4",
    name: "Brioche Loaf",
    description: "Rich and buttery brioche, perfect for breakfast toast or making the best French toast.",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1620921568790-c1cf8984624c?q=80&w=2574",
    category: "brioche",
    new: false,
    popular: false
  },
  {
    id: "5",
    name: "Chocolate Chip Cookies",
    description: "Crisp edges, chewy centers, loaded with premium chocolate. The perfect classic cookie.",
    price: 2.99,
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=2574",
    category: "desserts",
    new: false,
    popular: false
  },
  {
    id: "6",
    name: "Garlic & Herb Focaccia",
    description: "Our signature focaccia topped with roasted garlic, fresh herbs, and extra virgin olive oil.",
    price: 10.99,
    image: "https://images.unsplash.com/photo-1612382127879-62820b351010?q=80&w=2574",
    category: "focaccia",
    new: true,
    popular: true
  },
  {
    id: "7",
    name: "Classic Brioche Buns",
    description: "Soft, buttery brioche buns, perfect for burgers or sandwiches. Pack of 4.",
    price: 8.99,
    image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc7b?q=80&w=2574",
    category: "brioche",
    new: false,
    popular: true
  },
  {
    id: "8",
    name: "Chocolate Babka",
    description: "Twisted bread filled with dark chocolate, cinnamon, and a crunchy streusel topping.",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1602018374376-ad444281e362?q=80&w=2574",
    category: "desserts",
    new: true,
    popular: true
  }
];

// Initialize Feather Icons
document.addEventListener('DOMContentLoaded', () => {
  feather.replace();
  
  // Set current year in footer
  document.getElementById('current-year').textContent = new Date().getFullYear();
  
  // Initialize page routing
  initRouting();
  
  // Initialize mobile menu
  initMobileMenu();
  
  // Load product data
  loadProducts();
  
  // Initialize cart
  initCart();
  
  // Initialize accordions
  initAccordions();
  
  // Initialize forms
  initForms();
});

// Page Routing
function initRouting() {
  // Get current page from URL or default to home
  const currentPath = window.location.pathname;
  let currentPage = 'home-page';
  
  if (currentPath.includes('products.html')) {
    if (window.location.search.includes('?id=')) {
      currentPage = 'product-detail-page';
      const productId = new URLSearchParams(window.location.search).get('id');
      loadProductDetail(productId);
    } else {
      currentPage = 'products-page';
    }
  } else if (currentPath.includes('cart.html')) {
    currentPage = 'cart-page';
    updateCartDisplay();
  } else if (currentPath.includes('about.html')) {
    currentPage = 'about-page';
  } else if (currentPath.includes('contact.html')) {
    currentPage = 'contact-page';
  } else if (currentPath.includes('faqs.html')) {
    currentPage = 'faqs-page';
  } else if (!currentPath.includes('index.html') && currentPath !== '/') {
    currentPage = 'not-found-page';
  }
  
  // Show current page
  const pageElement = document.getElementById(currentPage);
  if (pageElement) {
    pageElement.classList.add('active-page');
  }
  
  // Update header based on page
  if (currentPath === '/' || currentPath.includes('index.html')) {
    document.querySelector('.header').classList.add('transparent');
  }

  // Handle scroll event for transparent header
  window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (currentPath === '/' || currentPath.includes('index.html')) {
      if (window.scrollY > 20) {
        header.classList.remove('transparent');
      } else {
        header.classList.add('transparent');
      }
    }
  });
}

// Mobile Menu
function initMobileMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const closeMenu = document.querySelector('.close-menu');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-nav .nav-link');
  
  menuToggle.addEventListener('click', () => {
    mobileMenu.classList.add('active');
    document.body.style.overflow = 'hidden';
  });
  
  closeMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    document.body.style.overflow = '';
  });
  
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
}

// Load Products
function loadProducts() {
  // Load popular products on home page
  const popularProductsContainer = document.getElementById('popular-products');
  if (popularProductsContainer) {
    const popularProducts = products.filter(product => product.popular);
    renderProducts(popularProductsContainer, popularProducts);
  }
  
  // Load all products on products page
  const allProductsContainer = document.getElementById('all-products');
  if (allProductsContainer) {
    renderProducts(allProductsContainer, products);
    
    // Initialize category filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');
        
        // Filter products
        const category = button.dataset.category;
        let filteredProducts;
        
        if (category === 'all') {
          filteredProducts = products;
        } else {
          filteredProducts = products.filter(product => product.category === category);
        }
        
        // Re-render products
        renderProducts(allProductsContainer, filteredProducts);
      });
    });
  }
}

// Render Products
function renderProducts(container, productsToRender) {
  container.innerHTML = '';
  
  productsToRender.forEach(product => {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    productCard.innerHTML = `
      <a href="products.html?id=${product.id}" class="product-link">
        <div class="product-image">
          <img src="${product.image}" alt="${product.name}" loading="lazy">
        </div>
        
        ${product.new ? `<div class="product-badge badge">New</div>` : ''}
        
        <div class="product-info">
          <h3 class="product-name">${product.name}</h3>
          <p class="product-description">${product.description}</p>
          
          <div class="product-footer">
            <div class="product-price">$${product.price.toFixed(2)}</div>
            <button class="btn btn-primary add-to-cart" data-id="${product.id}">
              <i data-feather="shopping-cart"></i>
              Add
            </button>
          </div>
        </div>
      </a>
    `;
    container.appendChild(productCard);
    
    // Initialize add to cart button
    const addToCartBtn = productCard.querySelector('.add-to-cart');
    addToCartBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      addToCart(product.id);
    });
  });
  
  // Re-initialize Feather icons
  feather.replace();
}

// Load Product Detail
function loadProductDetail(productId) {
  const product = products.find(p => p.id === productId);
  const productDetailContainer = document.getElementById('product-detail');
  
  if (!product || !productDetailContainer) {
    window.location.href = '404.html';
    return;
  }
  
  productDetailContainer.innerHTML = `
    <div class="product-detail-grid">
      <div class="product-detail-image">
        <img src="${product.image}" alt="${product.name}">
      </div>
      
      <div class="product-detail-info">
        <h1>${product.name}</h1>
        <div class="product-detail-price">$${product.price.toFixed(2)}</div>
        
        <div class="product-detail-description">
          <p>${product.description}</p>
        </div>
        
        <div class="quantity-selector">
          <label>Quantity</label>
          <div class="quantity-control">
            <button class="quantity-btn" id="decrease-quantity">
              <i data-feather="minus"></i>
            </button>
            <div class="quantity-display" id="quantity-value">1</div>
            <button class="quantity-btn" id="increase-quantity">
              <i data-feather="plus"></i>
            </button>
          </div>
        </div>
        
        <div class="product-actions">
          <button id="add-to-cart-detail" class="btn btn-primary">Add to Cart</button>
          <a href="products.html" class="btn btn-outline">Back to Products</a>
        </div>
      </div>
    </div>
  `;
  
  // Re-initialize Feather icons
  feather.replace();
  
  // Initialize quantity controls
  let quantity = 1;
  const quantityValue = document.getElementById('quantity-value');
  const decreaseBtn = document.getElementById('decrease-quantity');
  const increaseBtn = document.getElementById('increase-quantity');
  
  decreaseBtn.addEventListener('click', () => {
    if (quantity > 1) {
      quantity--;
      quantityValue.textContent = quantity;
    }
  });
  
  increaseBtn.addEventListener('click', () => {
    if (quantity < 10) {
      quantity++;
      quantityValue.textContent = quantity;
    }
  });
  
  // Initialize add to cart button
  const addToCartBtn = document.getElementById('add-to-cart-detail');
  addToCartBtn.addEventListener('click', () => {
    addToCart(product.id, quantity);
  });
}

// Cart Functionality
function initCart() {
  // Load cart from local storage
  loadCart();
  
  // Initialize clear cart button
  const clearCartBtn = document.getElementById('clear-cart');
  if (clearCartBtn) {
    clearCartBtn.addEventListener('click', () => {
      clearCart();
      showToast('Cart has been cleared', 'info');
    });
  }
  
  // Initialize place order button
  const placeOrderBtn = document.getElementById('place-order');
  if (placeOrderBtn) {
    placeOrderBtn.addEventListener('click', placeOrder);
  }
  
  // Initialize delivery option radio buttons
  const deliveryOptions = document.querySelectorAll('input[name="delivery"]');
  if (deliveryOptions.length) {
    deliveryOptions.forEach(option => {
      option.addEventListener('change', () => {
        updateDeliveryOption();
        updateCartSummary();
      });
    });
  }
}

// Cart storage and manipulation
let cart = [];

function loadCart() {
  const savedCart = localStorage.getItem('cart');
  if (savedCart) {
    cart = JSON.parse(savedCart);
    updateCartCount();
  }
}

function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  const cartCount = document.getElementById('cartCount');
  if (cartCount) {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    cartCount.style.display = totalItems > 0 ? 'flex' : 'none';
  }
}

function addToCart(productId, quantity = 1) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  
  const existingItem = cart.find(item => item.id === productId);
  
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: quantity
    });
  }
  
  saveCart();
  showToast(`${product.name} added to cart`, 'success');
}

function updateCartItem(productId, quantity) {
  const itemIndex = cart.findIndex(item => item.id === productId);
  if (itemIndex !== -1) {
    if (quantity > 0) {
      cart[itemIndex].quantity = quantity;
    } else {
      cart.splice(itemIndex, 1);
    }
    saveCart();
    updateCartDisplay();
  }
}

function removeCartItem(productId) {
  const itemIndex = cart.findIndex(item => item.id === productId);
  if (itemIndex !== -1) {
    const itemName = cart[itemIndex].name;
    cart.splice(itemIndex, 1);
    saveCart();
    updateCartDisplay();
    showToast(`${itemName} removed from cart`, 'info');
  }
}

function clearCart() {
  cart = [];
  saveCart();
  updateCartDisplay();
}

function updateCartDisplay() {
  const emptyCart = document.getElementById('empty-cart');
  const cartContent = document.getElementById('cart-content');
  const cartItemsList = document.getElementById('cart-items-list');
  
  if (!emptyCart || !cartContent || !cartItemsList) return;
  
  if (cart.length === 0) {
    emptyCart.style.display = 'block';
    cartContent.classList.remove('active');
  } else {
    emptyCart.style.display = 'none';
    cartContent.classList.add('active');
    
    // Render cart items
    cartItemsList.innerHTML = '';
    cart.forEach(item => {
      const cartItem = document.createElement('div');
      cartItem.className = 'cart-item';
      cartItem.innerHTML = `
        <div class="cart-item-image">
          <a href="products.html?id=${item.id}">
            <img src="${item.image}" alt="${item.name}">
          </a>
        </div>
        
        <div class="cart-item-info">
          <a href="products.html?id=${item.id}">
            <h3>${item.name}</h3>
          </a>
          <div class="cart-item-price">$${item.price.toFixed(2)}</div>
        </div>
        
        <div class="cart-item-quantity">
          <button class="quantity-btn decrease-cart-quantity" data-id="${item.id}">
            <i data-feather="minus"></i>
          </button>
          <div class="quantity-display">${item.quantity}</div>
          <button class="quantity-btn increase-cart-quantity" data-id="${item.id}">
            <i data-feather="plus"></i>
          </button>
        </div>
        
        <div class="cart-item-total">
          <div>$${(item.price * item.quantity).toFixed(2)}</div>
          <button class="cart-item-remove" data-id="${item.id}">
            <i data-feather="trash-2"></i>
            Remove
          </button>
        </div>
      `;
      cartItemsList.appendChild(cartItem);
      
      // Add event listeners
      const decreaseBtn = cartItem.querySelector('.decrease-cart-quantity');
      const increaseBtn = cartItem.querySelector('.increase-cart-quantity');
      const removeBtn = cartItem.querySelector('.cart-item-remove');
      
      decreaseBtn.addEventListener('click', () => {
        if (item.quantity > 1) {
          updateCartItem(item.id, item.quantity - 1);
        }
      });
      
      increaseBtn.addEventListener('click', () => {
        if (item.quantity < 10) {
          updateCartItem(item.id, item.quantity + 1);
        }
      });
      
      removeBtn.addEventListener('click', () => {
        removeCartItem(item.id);
      });
    });
    
    // Re-initialize Feather icons
    feather.replace();
    
    // Update cart summary
    updateCartSummary();
  }
}

function updateCartSummary() {
  const subtotalElement = document.getElementById('subtotal');
  const shippingElement = document.getElementById('shipping');
  const totalElement = document.getElementById('total');
  
  if (!subtotalElement || !shippingElement || !totalElement) return;
  
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const isDelivery = document.getElementById('delivery')?.checked;
  const shipping = isDelivery && cart.length > 0 ? 5.99 : 0;
  const total = subtotal + shipping;
  
  subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
  shippingElement.textContent = `$${shipping.toFixed(2)}`;
  totalElement.textContent = `$${total.toFixed(2)}`;
}

function updateDeliveryOption() {
  const isDelivery = document.getElementById('delivery')?.checked;
  const pickupInfo = document.getElementById('pickup-info');
  const deliveryInfo = document.getElementById('delivery-info');
  
  if (pickupInfo && deliveryInfo) {
    if (isDelivery) {
      pickupInfo.classList.add('hide');
      deliveryInfo.classList.remove('hide');
    } else {
      pickupInfo.classList.remove('hide');
      deliveryInfo.classList.add('hide');
    }
  }
}

function placeOrder() {
  // Validate the form
  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const isDelivery = document.getElementById('delivery')?.checked;
  const address = document.getElementById('address')?.value.trim();
  
  // Reset error states
  document.getElementById('name-error').style.display = 'none';
  document.getElementById('phone-error').style.display = 'none';
  
  if (isDelivery) {
    document.getElementById('address-error').style.display = 'none';
  }
  
  let isValid = true;
  
  // Validate name
  if (!name) {
    document.getElementById('name-error').style.display = 'block';
    isValid = false;
  }
  
  // Validate phone
  if (!phone) {
    document.getElementById('phone-error').style.display = 'block';
    isValid = false;
  }
  
  // Validate address if delivery is selected
  if (isDelivery && !address) {
    document.getElementById('address-error').style.display = 'block';
    isValid = false;
  }
  
  if (!isValid) {
    showToast('Please fill all required fields', 'error');
    return;
  }
  
  // Process the order
  showToast('Thank you for your order! We\'ll contact you shortly.', 'success');
  clearCart();
  
  // Redirect to home page after a short delay
  setTimeout(() => {
    window.location.href = 'index.html';
  }, 2000);
}

// Accordion Functionality
function initAccordions() {
  const accordionItems = document.querySelectorAll('.accordion-item');
  
  accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    header.addEventListener('click', () => {
      // Toggle active class
      item.classList.toggle('active');
    });
  });
}

// Form Initialization
function initForms() {
  // Initialize contact form
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('Message sent! We\'ll get back to you soon.', 'success');
      contactForm.reset();
    });
  }
}

// Toast Notifications
function showToast(message, type = 'success') {
  const toastContainer = document.getElementById('toast-container');
  
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <i data-feather="${type === 'success' ? 'check-circle' : type === 'error' ? 'alert-circle' : 'info'}"></i>
    <div>${message}</div>
  `;
  
  toastContainer.appendChild(toast);
  feather.replace();
  
  // Auto remove after 3 seconds
  setTimeout(() => {
    toast.style.animation = 'slideOut 0.3s ease forwards';
    setTimeout(() => {
      toastContainer.removeChild(toast);
    }, 300);
  }, 3000);
}
