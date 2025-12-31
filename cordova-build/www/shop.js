// Shop Products Data
const products = [
	{
		id: 1,
		name: "Nivea Body Lotion",
		brand: "Nivea",
		price: 45,
		category: "body-care",
		image: "images/cosmetics-on-pink-table.jpg",
		rating: 4.8,
		reviews: 124,
		stock: 15,
		description: "Rich and nourishing body lotion for soft, smooth skin. Contains natural moisturizers and Vitamin E.",
		details: [
			"Volume: 400ml",
			"Type: Body Lotion",
			"Suitable for: All skin types",
			"Key Ingredients: Glycerin, Vitamin E, Aloe Vera",
			"Usage: Apply daily on damp skin for best results"
		]
	},
	{
		id: 2,
		name: "Nivea Intensive Cream",
		brand: "Nivea",
		price: 30,
		category: "skincare",
		image: "images/Dove_facial_products_1200x900.jpg",
		rating: 4.7,
		reviews: 89,
		stock: 22,
		description: "Deeply nourishing face and body cream for intensive care. Absorbs quickly without greasy residue.",
		details: [
			"Volume: 200ml",
			"Type: Intensive Cream",
			"Suitable for: Dry to sensitive skin",
			"Key Ingredients: Shea Butter, Chamomile, Panthenol",
			"Usage: Apply morning and evening to clean skin"
		]
	},
	{
		id: 3,
		name: "Dove Body Spray",
		brand: "Dove",
		price: 28,
		category: "fragrance",
		image: "images/doveproducts-600_GqrxFYf.jpg",
		rating: 4.6,
		reviews: 56,
		stock: 30,
		description: "Gentle body spray with a fresh, floral scent. Moisturizing formula doesn't dry out skin.",
		details: [
			"Volume: 150ml",
			"Type: Body Spray",
			"Scent: Fresh Floral",
			"Key Ingredients: Dove's 1/4 moisturizing cream",
			"Usage: Spray evenly on body"
		]
	},
	{
		id: 4,
		name: "Dove Facial Soap",
		brand: "Dove",
		price: 18,
		category: "face-care",
		image: "images/dove-soap-wholesale-uk.jpeg",
		rating: 4.9,
		reviews: 203,
		stock: 50,
		description: "Gentle and mild facial soap. Cleanses without stripping natural moisture. Perfect for sensitive skin.",
		details: [
			"Quantity: 1 bar (100g)",
			"Type: Facial Soap",
			"Suitable for: Sensitive skin",
			"Formula: 1/4 moisturizing cream",
			"Usage: Wet face, lather, rinse thoroughly"
		]
	},
	{
		id: 5,
		name: "L'Oreal Paris Face Cream",
		brand: "L'Oreal",
		price: 55,
		category: "skincare",
		image: "images/dove_products_assorted.jpg",
		rating: 4.7,
		reviews: 142,
		stock: 18,
		description: "Anti-aging face cream with Vitamin C and Pro-Collagen. Reduces wrinkles and firms skin.",
		details: [
			"Volume: 50ml",
			"Type: Anti-Aging Cream",
			"Suitable for: Mature skin",
			"Key Ingredients: Vitamin C, Pro-Collagen, Hyaluronic Acid",
			"Usage: Apply morning and evening"
		]
	},
	{
		id: 6,
		name: "Garnier Body Lotion",
		brand: "Garnier",
		price: 35,
		category: "body-care",
		image: "images/Dove_facial_products_1200x900.jpg",
		rating: 4.5,
		reviews: 73,
		stock: 25,
		description: "Light and fast-absorbing body lotion. Enriched with natural ingredients for healthy-looking skin.",
		details: [
			"Volume: 400ml",
			"Type: Body Lotion",
			"Suitable for: All skin types",
			"Key Ingredients: Avocado, Aloe Vera, Glycerin",
			"Usage: Apply to clean skin daily"
		]
	},
	{
		id: 7,
		name: "Dove Deodorant",
		brand: "Dove",
		price: 22,
		category: "fragrance",
		image: "images/cosmetics-on-pink-table.jpg",
		rating: 4.8,
		reviews: 167,
		stock: 40,
		description: "Long-lasting deodorant with moisturizing technology. 24-hour protection with care.",
		details: [
			"Volume: 150ml",
			"Type: Deodorant",
			"Protection: 24 hours",
			"Key Ingredients: Dove's moisturizing formula",
			"Usage: Apply to underarms"
		]
	},
	{
		id: 8,
		name: "Nivea Face Wash",
		brand: "Nivea",
		price: 25,
		category: "face-care",
		image: "images/doveproducts-600_GqrxFYf.jpg",
		rating: 4.6,
		reviews: 95,
		stock: 33,
		description: "Gentle face wash that removes makeup and impurities. Leaves skin fresh and clean.",
		details: [
			"Volume: 200ml",
			"Type: Face Wash",
			"Suitable for: All skin types",
			"Key Ingredients: Glycerin, Aloe Vera",
			"Usage: Apply to wet face, massage gently, rinse"
		]
	},
	{
		id: 9,
		name: "L'Oreal Hair Conditioner",
		brand: "L'Oreal",
		price: 42,
		category: "body-care",
		image: "images/The-Regulation-of-Cosmetics-scaled.jpeg",
		rating: 4.7,
		reviews: 118,
		stock: 20,
		description: "Professional hair conditioner. Nourishes and restores shine to dry or damaged hair.",
		details: [
			"Volume: 250ml",
			"Type: Hair Conditioner",
			"Suitable for: Dry/damaged hair",
			"Key Ingredients: Keratin, Argan Oil, Silk Proteins",
			"Usage: Apply to damp hair, leave for 2-3 minutes, rinse"
		]
	},
	{
		id: 10,
		name: "Garnier Face Mask",
		brand: "Garnier",
		price: 32,
		category: "skincare",
		image: "images/360_F_268023584_xzvMBP9M6X1K45QKhfEbT33b2B7WjhMX.jpg",
		rating: 4.6,
		reviews: 67,
		stock: 28,
		description: "Purifying face mask with charcoal. Deep cleanses pores and removes impurities.",
		details: [
			"Volume: 100ml",
			"Type: Face Mask",
			"Suitable for: Oily/combination skin",
			"Key Ingredients: Charcoal, Clay, Tea Tree Oil",
			"Usage: Apply 1-2 times per week"
		]
	},
	{
		id: 11,
		name: "Dove Eye Serum",
		brand: "Dove",
		price: 38,
		category: "skincare",
		image: "images/cosmetics-on-pink-table.jpg",
		rating: 4.8,
		reviews: 102,
		stock: 17,
		description: "Specialized serum for delicate eye area. Reduces dark circles and puffiness.",
		details: [
			"Volume: 15ml",
			"Type: Eye Serum",
			"Suitable for: All skin types",
			"Key Ingredients: Caffeine, Retinol, Peptides",
			"Usage: Apply gently around eyes morning and night"
		]
	},
	{
		id: 12,
		name: "Nivea Lip Balm",
		brand: "Nivea",
		price: 12,
		category: "body-care",
		image: "images/Dove_facial_products_1200x900.jpg",
		rating: 4.9,
		reviews: 251,
		stock: 60,
		description: "Protective lip balm with SPF 15. Keeps lips soft and moisturized throughout the day.",
		details: [
			"Volume: 4.8g",
			"Type: Lip Balm",
			"SPF: 15",
			"Key Ingredients: Beeswax, Shea Butter, Vitamin E",
			"Usage: Apply as needed"
		]
	}
];

// Shopping Cart
let cart = JSON.parse(localStorage.getItem('hamzaCart')) || [];
let currentProductFilter = {
	categories: [],
	brands: [],
	maxPrice: 200
};

// Initialize shop page
document.addEventListener('DOMContentLoaded', function() {
	renderProducts(products);
	updateCartBadge();
	setupEventListeners();
});

function setupEventListeners() {
	// Category filters
	document.querySelectorAll('.category-filter').forEach(checkbox => {
		checkbox.addEventListener('change', applyFilters);
	});

	// Brand filters
	document.querySelectorAll('.brand-filter').forEach(checkbox => {
		checkbox.addEventListener('change', applyFilters);
	});

	// Price range
	const priceRange = document.getElementById('priceRange');
	priceRange.addEventListener('input', function() {
		document.getElementById('priceDisplay').textContent = this.value;
		currentProductFilter.maxPrice = parseInt(this.value);
		applyFilters();
	});

	// Sort select
	document.getElementById('sortSelect').addEventListener('change', function() {
		sortProducts(this.value);
	});

	// Reset filters
	document.getElementById('resetFilters').addEventListener('change', resetFilters);
	document.getElementById('resetFilters').addEventListener('click', resetFilters);

	// Cart buttons
	const cartModal = new bootstrap.Modal(document.getElementById('cartModal'));
	
	// Update cart display when modal opens
	document.getElementById('cartModal').addEventListener('show.bs.modal', function() {
		displayCart();
	});

	document.getElementById('checkoutBtn').addEventListener('click', function() {
		if (cart.length > 0) {
			alert('Thank you for your purchase! Total: GHS ' + calculateCartTotal().toFixed(2) + '\n\nPlease visit our shop at the location opposite Vodafone Office Road in Tamale to complete your order.');
			cart = [];
			localStorage.setItem('hamzaCart', JSON.stringify(cart));
			updateCartBadge();
			cartModal.hide();
			renderProducts(products);
		}
	});
}

function renderProducts(productsToRender) {
	const grid = document.getElementById('productsGrid');
	grid.innerHTML = '';

	if (productsToRender.length === 0) {
		grid.innerHTML = '<div class="col-12 text-center text-muted py-5">No products found matching your filters.</div>';
		document.getElementById('productCount').textContent = '0 products';
		return;
	}

	productsToRender.forEach(product => {
		const stockClass = product.stock > 20 ? 'stock-in' : product.stock > 5 ? 'stock-low' : 'stock-out';
		const stockText = product.stock > 0 ? (product.stock > 20 ? 'In Stock' : 'Low Stock') : 'Out of Stock';

		const card = document.createElement('div');
		card.className = 'col-md-6 col-lg-4';
		card.innerHTML = `
			<div class="product-card" role="button" data-product-id="${product.id}">
				<img src="${product.image}" alt="${product.name}" loading="lazy">
				<div class="card-body">
					<div class="product-brand">${product.brand}</div>
					<h5 class="card-title">${product.name}</h5>
					<div class="product-rating">
						${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))}
						<small class="text-muted">(${product.reviews} reviews)</small>
					</div>
					<p class="card-text">${product.description}</p>
					<div class="product-price">GHS ${product.price.toFixed(2)}</div>
					<span class="stock-badge ${stockClass}">${stockText}</span>
					<div class="product-actions mt-3">
						<button class="btn btn-view-details btn-sm" data-product-id="${product.id}">Details</button>
						<button class="btn btn-add-cart btn-sm ${product.stock === 0 ? 'disabled' : ''}" data-product-id="${product.id}" ${product.stock === 0 ? 'disabled' : ''}>Add Cart</button>
					</div>
				</div>
			</div>
		`;

		grid.appendChild(card);
	});

	// Attach event listeners
	document.querySelectorAll('.btn-view-details').forEach(btn => {
		btn.addEventListener('click', function(e) {
			e.stopPropagation();
			const productId = parseInt(this.dataset.productId);
			showProductModal(productId);
		});
	});

	document.querySelectorAll('.btn-add-cart').forEach(btn => {
		btn.addEventListener('click', function(e) {
			e.stopPropagation();
			const productId = parseInt(this.dataset.productId);
			addToCart(productId);
		});
	});

	document.querySelectorAll('.product-card').forEach(card => {
		card.addEventListener('click', function() {
			const productId = parseInt(this.dataset.productId);
			showProductModal(productId);
		});
	});

	document.getElementById('productCount').textContent = `${productsToRender.length} products`;
}

function showProductModal(productId) {
	const product = products.find(p => p.id === productId);
	if (!product) return;

	const modalContent = document.getElementById('modalContent');
	modalContent.innerHTML = `
		<div class="row">
			<div class="col-md-6">
				<img src="${product.image}" alt="${product.name}" class="product-modal-image">
			</div>
			<div class="col-md-6">
				<div class="product-brand mb-2">${product.brand}</div>
				<h4 class="mb-2">${product.name}</h4>
				<div class="product-rating mb-3">
					${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))}
					<small class="text-muted">(${product.reviews} reviews)</small>
				</div>
				<div class="product-price mb-3">GHS ${product.price.toFixed(2)}</div>
				<span class="stock-badge ${product.stock > 20 ? 'stock-in' : product.stock > 5 ? 'stock-low' : 'stock-out'} mb-3 d-inline-block">
					${product.stock > 0 ? (product.stock > 20 ? 'In Stock' : 'Low Stock (' + product.stock + ' left)') : 'Out of Stock'}
				</span>
				<p class="mb-4">${product.description}</p>
				<h6 class="mb-3">Product Details</h6>
				<ul class="product-details-list">
					${product.details.map(detail => `<li>${detail}</li>`).join('')}
				</ul>
			</div>
		</div>
	`;

	const addBtn = document.getElementById('addToCartBtn');
	addBtn.onclick = () => addToCart(productId);
	addBtn.disabled = product.stock === 0;

	const modal = new bootstrap.Modal(document.getElementById('productModal'));
	modal.show();
}

function addToCart(productId) {
	const product = products.find(p => p.id === productId);
	if (!product || product.stock === 0) return;

	const existingItem = cart.find(item => item.id === productId);
	if (existingItem) {
		existingItem.quantity += 1;
	} else {
		cart.push({
			id: productId,
			name: product.name,
			price: product.price,
			image: product.image,
			quantity: 1
		});
	}

	localStorage.setItem('hamzaCart', JSON.stringify(cart));
	updateCartBadge();

	// Show toast notification
	const toast = document.createElement('div');
	toast.className = 'alert alert-success alert-dismissible fade show position-fixed';
	toast.style.cssText = 'top: 100px; right: 20px; z-index: 9999; min-width: 300px;';
	toast.innerHTML = `
		${product.name} added to cart!
		<button type="button" class="btn-close" data-bs-dismiss="alert"></button>
	`;
	document.body.appendChild(toast);
	setTimeout(() => toast.remove(), 3000);
}

function updateCartBadge() {
	const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
	const cartTotal = calculateCartTotal();
	document.getElementById('cartCount').textContent = cartCount;
	document.getElementById('cartTotal').textContent = cartTotal.toFixed(2);
	document.getElementById('cartCountBtn').textContent = cartCount;
	document.getElementById('cartTotalBtn').textContent = cartTotal.toFixed(2);
}

function calculateCartTotal() {
	return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

function displayCart() {
	const cartContent = document.getElementById('cartContent');
	
	if (cart.length === 0) {
		cartContent.innerHTML = `
			<div class="empty-cart">
				<div>🛒</div>
				<p>Your cart is empty</p>
			</div>
		`;
		return;
	}

	let html = '<table class="cart-table"><thead><tr><th>Product</th><th>Price</th><th>Qty</th><th>Total</th><th>Action</th></tr></thead><tbody>';

	cart.forEach(item => {
		const total = item.price * item.quantity;
		html += `
			<tr>
				<td><strong>${item.name}</strong></td>
				<td>GHS ${item.price.toFixed(2)}</td>
				<td>
					<input type="number" min="1" value="${item.quantity}" class="form-control form-control-sm" style="width: 60px;" onchange="updateCartItemQuantity(${item.id}, this.value)">
				</td>
				<td>GHS ${total.toFixed(2)}</td>
				<td><button class="btn btn-sm btn-danger" onclick="removeFromCart(${item.id})">Remove</button></td>
			</tr>
		`;
	});

	const total = calculateCartTotal();
	html += '</tbody></table>';
	html += `<div class="cart-total">Total: GHS ${total.toFixed(2)}</div>`;

	cartContent.innerHTML = html;
}

function updateCartItemQuantity(productId, newQuantity) {
	const item = cart.find(i => i.id === productId);
	if (item) {
		item.quantity = Math.max(1, parseInt(newQuantity));
		localStorage.setItem('hamzaCart', JSON.stringify(cart));
		updateCartBadge();
		displayCart();
	}
}

function removeFromCart(productId) {
	cart = cart.filter(item => item.id !== productId);
	localStorage.setItem('hamzaCart', JSON.stringify(cart));
	updateCartBadge();
	displayCart();
}

function applyFilters() {
	currentProductFilter.categories = Array.from(document.querySelectorAll('.category-filter:checked')).map(cb => cb.value);
	currentProductFilter.brands = Array.from(document.querySelectorAll('.brand-filter:checked')).map(cb => cb.value);

	let filtered = products.filter(product => {
		const matchesCategory = currentProductFilter.categories.length === 0 || currentProductFilter.categories.includes(product.category);
		const matchesBrand = currentProductFilter.brands.length === 0 || currentProductFilter.brands.includes(product.brand);
		const matchesPrice = product.price <= currentProductFilter.maxPrice;

		return matchesCategory && matchesBrand && matchesPrice;
	});

	renderProducts(filtered);
}

function sortProducts(sortBy) {
	let currentFilter = {
		categories: Array.from(document.querySelectorAll('.category-filter:checked')).map(cb => cb.value),
		brands: Array.from(document.querySelectorAll('.brand-filter:checked')).map(cb => cb.value),
		maxPrice: parseInt(document.getElementById('priceRange').value)
	};

	let sorted = products.filter(product => {
		const matchesCategory = currentFilter.categories.length === 0 || currentFilter.categories.includes(product.category);
		const matchesBrand = currentFilter.brands.length === 0 || currentFilter.brands.includes(product.brand);
		const matchesPrice = product.price <= currentFilter.maxPrice;
		return matchesCategory && matchesBrand && matchesPrice;
	});

	switch(sortBy) {
		case 'name':
			sorted.sort((a, b) => a.name.localeCompare(b.name));
			break;
		case 'price-low':
			sorted.sort((a, b) => a.price - b.price);
			break;
		case 'price-high':
			sorted.sort((a, b) => b.price - a.price);
			break;
		case 'popular':
			sorted.sort((a, b) => b.reviews - a.reviews);
			break;
	}

	renderProducts(sorted);
}

function resetFilters() {
	document.querySelectorAll('.category-filter, .brand-filter').forEach(cb => cb.checked = false);
	document.getElementById('priceRange').value = 200;
	document.getElementById('priceDisplay').textContent = '200';
	currentProductFilter = { categories: [], brands: [], maxPrice: 200 };
	renderProducts(products);
}
