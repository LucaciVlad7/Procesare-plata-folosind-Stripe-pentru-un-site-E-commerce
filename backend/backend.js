// Frontend JavaScript - This file runs in the browser
const batteryProducts = [
    {id: 1, name: "Baterie auto 50Ah Sorgeti Forte 207x175x175 420A 12V", brand: "sorgeti", capacity: 50, price: 234, originalPrice: 280, amperage: "32-54", description: "Baterie auto premium cu tehnologie avansată, 50Ah, 420A. Garanție 24 luni.",
        image: "images/carBatteries/baterie-auto-50ah-sorgeti-forte.jpg", available: false},
    {id: 2, name: "Baterie auto 40Ah Zap Plus Japan Car 187x127x227 300A 12V", brand: "zap", capacity: 40, price: 240, originalPrice: 290, amperage: "32-54", description: "Baterie auto 40Ah cu polaritate normală, 300A. Garanție 24 luni.",
        image: "images/carBatteries/baterie-auto-zap-plus-japan-45ah.jpg", available: false},
    {id: 3, name: "Baterie auto 55Ah Sorgeti Argento 207x175x190 500A 12V", brand: "sorgeti", capacity: 55, price: 240, originalPrice: 288, amperage: "55-66", description: "Baterie auto Argento 55Ah, 500A. Garanție 24 luni.",
        image: "images/carBatteries/baterie-auto-sorgeti-argento-55ah.jpg", available: false},
    {id: 4, name: "Baterie auto 45Ah Zap Plus Japan Car 237x128x220 340A 12V", brand: "zap", capacity: 45, price: 240, originalPrice: 290, amperage: "32-54", description: "Baterie auto 45Ah cu polaritate normală, 340A. Garanție 24 luni.",
        image: "images/carBatteries/zapJapan.jpg", available: false},
    {id: 5, name: "Baterie auto 45Ah Zap Plus 207x175x190 360A 12V", brand: "zap", capacity: 45, price: 241, originalPrice: 290, amperage: "32-54", description: "Baterie auto 45Ah, 360A. Garanție 24 luni.",
        image: "images/carBatteries/zap.jpg", available: false},
    {id: 6, name: "Baterie auto 50Ah Zap Plus 207x175x190 420A 12V", brand: "zap", capacity: 50, price: 246, originalPrice: 295, amperage: "32-54", description: "Baterie auto 50Ah cu polaritate inversă, 420A. Garanție 24 luni.",
        image: "images/carBatteries/zp50.jpg", available: false},
    {id: 7, name: "Baterie auto 55Ah Sorgeti Forte 207x175x190 480A 12V", brand: "sorgeti", capacity: 55, price: 251, originalPrice: 300, amperage: "55-66", description: "Baterie auto Forte 55Ah, 480A. Garanție 24 luni.",
        image: "images/carBatteries/forte55.jpg", available: false},
    {id: 8, name: "Baterie auto 52Ah Sorgeti Forte 207x175x175 450A 12V", brand: "sorgeti", capacity: 52, price: 254, originalPrice: 274, amperage: "32-54", description: "Baterie auto Forte 52Ah, 450A. Garanție 24 luni.",
        image: "images/carBatteries/forte52.jpg", available: false},
    {id: 9, name: "Baterie tractoras Sorgeti Green Power 32Ah", brand: "sorgeti", capacity: 32, price: 256, originalPrice: 256, amperage: "32-54", description: "Baterie tractoras 32Ah. Garanție 24 luni.",
        image: "images/carBatteries/greenPower32.jpg", available: false},
    {id: 10, name: "Baterie auto 55Ah Zap Plus 242x175x190 460A 12V", brand: "zap", capacity: 55, price: 263, originalPrice: 315, amperage: "55-66", description: "Baterie auto 55Ah, 460A. Garanție 24 luni.",
        image: "images/carBatteries/ZapPlus55.jpg", available: false},
    {id: 11, name: "Baterie auto 55Ah Zap Carbon EFB Start-Stop 207x175x190 450A 12V", brand: "zap", capacity: 55, price: 285, originalPrice: 340, amperage: "55-66", description: "Baterie auto EFB Start-Stop 55Ah, 450A. Garanție 24 luni.",
        image: "images/carBatteries/zapCarbon.jpg", available: false},
    {id: 12, name: "Baterie auto 60Ah Sorgeti Forte 242x175x175 540A 12V", brand: "sorgeti", capacity: 60, price: 287, originalPrice: 345, amperage: "55-66", description: "Baterie auto Forte 60Ah, 540A. Garanție 24 luni.",
        image: "images/carBatteries/forte60.jpg", available: false},
    {id: 13, name: "Baterie auto 62Ah Sorgeti Forte 242x175x175 550A 12V", brand: "sorgeti", capacity: 62, price: 293, originalPrice: 351, amperage: "55-66", description: "Baterie auto Forte 62Ah, 550A. Garanție 24 luni.",
        image: "images/carBatteries/forte62.jpg", available: false},
    {id: 14, name: "Baterie auto 62Ah Zap Plus 242x175x190 520A 12V", brand: "zap", capacity: 62, price: 296, originalPrice: 355, amperage: "55-66", description: "Baterie auto 62Ah, 520A. Garanție 24 luni.",
        image: "images/carBatteries/zap62.jpg", available: false},
    {id: 15, name: "Baterie auto 54Ah Sorgeti Estremo 207x175x175 530A 12V", brand: "sorgeti", capacity: 54, price: 297, originalPrice: 355, amperage: "32-54", description: "Baterie auto Estremo 54Ah, 530A. Garanție 24 luni.",
        image: "images/carBatteries/estremo54.jpg", available: false},
    {id: 16, name: "Baterie auto 62Ah Sorgeti Argento 242x175x175 590A 12V", brand: "sorgeti", capacity: 62, price: 312, originalPrice: 372, amperage: "55-66", description: "Baterie auto Argento 62Ah, 590A. Garanție 24 luni.",
        image: "images/carBatteries/Argento62.jpg", available: false},
    {id: 17, name: "Baterie auto 56Ah Sorgeti Estremo 207x175x190 560A 12V", brand: "sorgeti", capacity: 56, price: 318, originalPrice: 382, amperage: "55-66", description: "Baterie auto Estremo 56Ah, 560A. Garanție 24 luni.",
        image: "images/carBatteries/estremo56.jpg", available: false},
    {id: 18, name: "Baterie auto 70Ah Sorgeti Forte 278x175x190 640A 12V", brand: "sorgeti", capacity: 70, price: 320, originalPrice: 383, amperage: "67-80", description: "Baterie auto Forte 70Ah, 640A. Garanție 24 luni.",
        image: "images/carBatteries/forte70.jpg", available: false},
    {id: 19, name: "Baterie auto 55Ah Midac Itineris EFB Start-Stop 207x175x190 500A 12V", brand: "midac", capacity: 55, price: 320, originalPrice: 385, amperage: "55-66", description: "Baterie auto Midac EFB Start-Stop 55Ah, 500A. Garanție 24 luni.",
        image: "images/carBatteries/itineris55.jpg", available: false},
    {id: 20, name: "Baterie auto 55Ah Sorgeti Argento EFB Start-Stop 207x175x190 500A 12V", brand: "sorgeti", capacity: 55, price: 320, originalPrice: 385, amperage: "55-66", description: "Baterie auto Argento EFB Start-Stop 55Ah, 500A. Garanție 24 luni.",
        image: "images/carBatteries/argento55.jpg", available: false},
    {id: 21, name: "Baterie auto 65Ah Sorgeti Forte 242x175x190 580A 12V", brand: "sorgeti", capacity: 65, price: 320, originalPrice: 383, amperage: "55-66", description: "Baterie auto Forte 65Ah, 580A. Garanție 24 luni.",
        image: "images/carBatteries/forte65.jpg", available: false},
    {id: 22, name: "Baterie auto 64Ah Sorgeti Argento 242x175x190 640A 12V", brand: "sorgeti", capacity: 64, price: 322, originalPrice: 385, amperage: "55-66", description: "Baterie auto Argento 64Ah, 640A. Garanție 24 luni.",
        image: "images/carBatteries/argento64.jpg", available: false},
    {id: 23, name: "Baterie auto 75Ah Sorgeti Forte 278x175x175 680A 12V", brand: "sorgeti", capacity: 75, price: 340, originalPrice: 407, amperage: "67-80", description: "Baterie auto Forte 75Ah, 680A. Garanție 24 luni.",
        image: "images/carBatteries/forte75.jpg", available: false},
    {id: 24, name: "Baterie auto 36Ah Bosch Power Plus 187x127x220 360A 12V", brand: "bosch", capacity: 36, price: 348, originalPrice: 348, amperage: "32-54", description: "Baterie auto Bosch 36Ah, 360A. Garanție 36 luni.",
        image: "images/carBatteries/bosch36.jpg", available: false}
];

// Real detailing products from original La Garaj document with local images
const detailingProducts = [
    {id: 101, name: "NL272 Ceramic Coating Premium", category: "ceramic", price: 1300, originalPrice: 1300, description: "Produs premium de protecție ceramică pentru vopsea cu durabilitate extinsă. Oferă hidrofobie superioară și protecție UV avansată.",
         image: "images/detailing/nl272.png",available: true},
    {id: 102, name: "PPFGUARd", category: "exterior", price: 511.40, originalPrice: 511.40, description: "Folie de protecție transparentă PPF cu auto-vindecare pentru zonele expuse ale caroseriei. Grosime 200 microni.", 
        image: "images/detailing/PPFGuard.png",available: true},
    {id: 103, name: "Leather Boost", category: "interior", price: 272.57, originalPrice: 272.57, description: "Tratament intensiv pentru piele naturală și artificială. Hidratează, protejează și restaurează suprafețele din piele.", 
        image: "images/detailing/LeatherBoost.png",available: true},
    {id: 104, name: "Trim Coat", category: "exterior", price: 272.57, originalPrice: 272.57, description: "Ceramic coating special pentru plastic și cauciuc. Restaurează culoarea și oferă protecție pe termen lung.", 
        image: "images/detailing/TrimCoat.png",available: true},
    {id: 105, name: "Headlight Restorer Kit", category: "exterior", price: 150, originalPrice: 150, description: "Kit complet pentru restaurarea farurilor deteriorate și oxidate. Include polish, pad-uri și instrucțiuni.", 
        image: "images/detailing/HeadlightRestorerKit.png",available: true},
    {id: 106, name: "Parfum New Car Smell", category: "interior", price: 50.87, originalPrice: 50.87, description: "Parfum auto cu aromă de mașină nouă. Elimină mirosurile neplăcute și oferă prospețime îndelungată.",
         image: "images/detailing/ParfumNewCarSmell.png",available: true},
    {id: 107, name: "Glass Shield Spray", category: "exterior", price: 104.42, originalPrice: 104.42, description: "Tratament hidrofob pentru parbriz și geamuri. Îmbunătățește vizibilitatea și siguranța la condus.",
         image: "images/detailing/GlassShieldSpray.png",available: true},
    {id: 108, name: "Metal Coat F2", category: "exterior", price: 218.48, originalPrice: 218.48, description: "Tratament ceramic pentru suprafețe metalice. Protejează împotriva oxidării și menține luciul.", 
        image: "images/detailing/MetalCoatF2.png",available: true},
    {id: 109, name: "Cabin Care", category: "interior", price: 163.33, originalPrice: 163.33, description: "Sistem complet de curățare și întreținere pentru habitaclu. Include produse pentru toate suprafețele.",
        image: "images/detailing/CabinCare.png",available: true},
    {id: 110, name: "Nano Seat Protect", category: "interior", price: 175.11, originalPrice: 175.11, description: "Tratament nano-ceramic pentru scaune din textile. Protejează împotriva petelor și lichidelor.", 
        image: "images/detailing/NanoSeatProtect.png",available: true},
    {id: 111, name: "Rapid Shine", category: "exterior", price: 136.02, originalPrice: 136.02, description: "Spray rapid pentru strălucire instantă. Quick detailer perfect pentru touch-up-uri rapide între spălări.", 
        image: "images/detailing/RapidShine.png",available: true},
    {id: 112, name: "NeoCoat X", category: "ceramic", price: 284.89, originalPrice: 284.89, description: "Ceramic coating profesional cu tehnologie avansată. Protecție 3-5 ani și finisaj oglindă superior.", 
        image: "images/detailing/NeoCoatX.png",available: true}
];

let cart = [];
let allProducts = [...batteryProducts, ...detailingProducts];

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    new Typed('#typed-text', {
        strings: ['Baterii Auto Premium', 'Produse Detailing Profesionale', 'Performanță Maximă'],
        typeSpeed: 80,
        backSpeed: 50,
        backDelay: 2000,
        loop: true,
        showCursor: true,
        cursorChar: '|'
    });
    
    loadBatteries();
    loadDetailingProducts();
});

function loadBatteries() {
    const grid = document.getElementById('batteryGrid');
    grid.innerHTML = '';
    
    batteryProducts.slice(0, 12).forEach(product => {
        const card = createProductCard(product, 'battery');
        grid.innerHTML += card;
    });
}

function loadDetailingProducts() {
    const grid = document.getElementById('detailingGrid');
    grid.innerHTML = '';
    
    detailingProducts.slice(0, 12).forEach(product => {
        const card = createProductCard(product, 'detailing');
        grid.innerHTML += card;
    });
}

function createProductCard(product, type) {
    const discount = product.originalPrice > product.price ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;
    const imageUrl = product.image || `https://images.unsplash.com/photo-${type === 'battery' ? '1592833167005-97b9d26a8836' : '1583394293214-4b5a2a88b49f'}?w=400&h=300&fit=crop`;
    
    const firstDiv="product-card rounded-xl p-6 flex flex-col "+ (product.available === false ? "sold-out" : "");

    return `
            <div class="${firstDiv}">
                ${product.available === false ? `<div class="out-of-stock-badge absolute top-2 left-2 px-3 py-1 rounded-full text-xs font-bold" style="background: linear-gradient(135deg, #dc2626, #b91c1c); color: white; box-shadow: 0 2px 8px rgba(220, 38, 38, 0.4); text-transform: uppercase; letter-spacing: 0.5px; z-index: 10;">Indisponibil</div>` : ''}
                ${discount > 0 && product.available !== false ? `<div class="sale-badge absolute top-2 right-2 px-2 py-1 rounded-full text-xs">-${discount}%</div>` : ''}
                <div class="mb-4 h-40 bg-white border-2 border-black rounded-lg overflow-hidden flex items-center justify-center">
                    <img src="${imageUrl}" alt="${product.name}" class="max-w-full max-h-full object-contain" onerror="this.style.display='none'; this.parentElement.innerHTML='<div class=\\'flex items-center justify-center h-full\\'><i class=\\'fas fa-${type === 'battery' ? 'battery-full' : 'shield-alt'} text-6xl text-gray-400\\'></i></div>'">
                </div>
                <h3 class="text-lg font-bold text-black mb-2">${product.name}</h3>
                <p class="text-gray-600 text-sm mb-4 flex-grow">${product.description}</p>
                <div class="flex items-center justify-between mb-4">
                    <div class="flex items-center space-x-2">
                        <span class="price-tag px-3 py-1 rounded-lg text-sm">${product.price} RON</span>
                        ${product.originalPrice > product.price && product.available !== false ? `<span class="old-price text-sm">${product.originalPrice} RON</span>` : ''}
                    </div>
                </div>
                ${product.available !== false ? `
                <div class="flex space-x-2">
                    <button onclick="addToCart(${product.id})" class="btn-primary flex-1 text-sm py-2">
                        <i class="fas fa-cart-plus mr-1"></i>Adaugă
                    </button>
                </div>
                ` : ''}
            </div>
    `;
}

function filterBatteries() {
    const vehicleFilter = document.getElementById('vehicleFilter').value;
    const amperageFilter = document.getElementById('amperageFilter').value;
    const brandFilter = document.getElementById('brandFilter').value;
    
    let filtered = batteryProducts;
    
    if (brandFilter) {
        filtered = filtered.filter(b => b.brand.toLowerCase() === brandFilter.toLowerCase());
    }
    
    if (amperageFilter) {
        const [min, max] = amperageFilter.split('-').map(Number);
        filtered = filtered.filter(b => b.capacity >= min && b.capacity <= max);
    }
    
    const grid = document.getElementById('batteryGrid');
    grid.innerHTML = '';
    
    filtered.forEach(product => {
        const card = createProductCard(product, 'battery');
        grid.innerHTML += card;
    });
    
    if (filtered.length === 0) {
        grid.innerHTML = '<div class="col-span-3 text-center py-12 text-gray-500">Nu au fost găsite baterii cu criteriile selectate.</div>';
    }
}

function addToCart(productId) {
    const product = allProducts.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({...product, quantity: 1});
    }
    
    updateCartCount();
    showNotification(`${product.name} a fost adăugat în coș!`);
}

function toggleCart() {
    const modal = document.getElementById('cartModal');
    modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
    updateCartDisplay();
}

function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    document.getElementById('cartCount').textContent = count;
}

function updateCartDisplay() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="text-gray-500 text-center py-8">Coșul este gol</p>';
        cartTotal.textContent = '0 RON';
        return;
    }
    
    let total = 0;
    cartItems.innerHTML = '';
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        // Format numbers with two decimals
        const itemPriceFormatted = item.price.toFixed(2);
        const itemTotalFormatted = itemTotal.toFixed(2);

        cartItems.innerHTML += `
            <div class="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div>
                    <h4 class="font-semibold">${item.name}</h4>
                    <p class="text-gray-500 text-sm">${itemPriceFormatted} RON x ${item.quantity}</p>
                </div>
                <div class="flex items-center space-x-4">
                    <span class="font-bold">${itemTotalFormatted} RON</span>
                    <button onclick="removeFromCart(${item.id})" class="text-red-600 hover:text-red-800">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `;
    });
    
    cartTotal.textContent = `${total.toFixed(2)} RON`;
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartCount();
    updateCartDisplay();
}

function clearCart() {
    cart = [];
    updateCartCount();
    updateCartDisplay();
}

function checkout_ramburs() {
    if (cart.length === 0) {
        alert('Coșul este gol!');
        return;
    }
    
    document.getElementById('cartModal').style.display = 'none';
    document.getElementById('orderFormModal').style.display = 'block';
    updateOrderSummary();
}

function checkout() {
  if (cart.length === 0) {
    alert('Coșul este gol!');
    return;
  }
  
  // Format cart items for Stripe
  const items = cart.map(item => ({
    name: item.name,
    price: item.price,
    quantity: item.quantity
  }));
  
  // The correct path to call the Netlify Serverless Function is:
  // /.netlify/functions/function-name
  fetch('/.netlify/functions/create-checkout-session', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ items }),
  })
  .then(response => {
    // Check for a non-200 status code from the function
    if (!response.ok) {
        return response.json().then(errorData => {
            throw new Error(errorData.error || `Netlify Function Error: ${response.status}`);
        });
    }
    return response.json();
  })
  .then(data => {
    if (data.url) {
        // Redirect to Stripe Checkout URL provided by the function
        window.location.href = data.url;
    } else {
        throw new Error('Răspunsul nu conține URL de checkout.');
    }
  })
  .catch(error => {
    console.error('Eroare la procesarea plății:', error);
    alert(`❌ A apărut o eroare la procesarea plății. Detalii: ${error.message}`);
  });
}

function updateOrderSummary() {
    const orderSummary = document.getElementById('orderSummary');
    const orderTotal = document.getElementById('orderTotal');
    
    let subtotal = 0;
    let summaryHTML = '';
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;
        const itemTotalFormatted = itemTotal.toFixed(2);
        const itemPriceFormatted = item.price.toFixed(2);
        summaryHTML += `<div class="flex justify-between mb-2">
            <span>${item.name} x${item.quantity}</span>
            <span>${itemTotalFormatted} RON</span>
        </div>`;
    });
    
    const paymentMethodValue = document.getElementById('paymentMethod').value;
    const shippingCost = paymentMethodValue === 'pickup' ? 0 : 20;
    const total = subtotal + shippingCost;
    
    const shippingText = paymentMethodValue === 'pickup' ? 
        '<strong>Transport:</strong> 0 RON (ridicare personală din Cluj)' : 
        `<strong>Transport:</strong> ${shippingCost} RON`;
    summaryHTML += `<div class="border-t pt-2 mt-2">${shippingText}</div>`;
    orderSummary.innerHTML = summaryHTML;
    orderTotal.textContent = `Total: ${total.toFixed(2)} RON`;
}

document.getElementById('orderForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('customerName').value;
    const email = document.getElementById('customerEmail').value;
    const phone = document.getElementById('customerPhone').value;
    const address = document.getElementById('customerAddress').value;
    const paymentMethod = document.getElementById('paymentMethod').value;
    
    let productList = '';
    let subtotal = 0;
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;
        productList += `${item.name} x${item.quantity} - ${item.price} RON = ${itemTotal} RON\n`;
    });
    
    // Calculate shipping based on payment method
    const shippingCost = paymentMethod === 'pickup' ? 0 : 20;
    const total = subtotal + shippingCost;
    
    const paymentMethodText = paymentMethod === 'cash' ? 'Cash la livrare' : 
                              paymentMethod === 'transfer' ? 'Transfer bancar' : 
                              'Ridicare de la sediul La Garaj Cluj';
    
    const shippingText = paymentMethod === 'pickup' ? '0 RON (ridicare personală)' : '20 RON';
    
    const templateParams = {
        from_name: name,
        customer_email: email,
        customer_phone: phone,
        customer_address: address,
        payment_method: paymentMethodText,
        product_list: productList,
        subtotal: subtotal + " RON",
        shipping_cost: shippingText,
        total_amount: total + " RON",
        order_date: new Date().toLocaleString('ro-RO')
    };
    
    console.log('Sending order...', templateParams);
    
    // Validate all fields
    if (!name || !email || !phone || !address) {
        alert('❌ Te rugăm să completezi toate câmpurile obligatorii!');
        return;
    }
    
    // Email 1 - către tine (notificare comandă)
    emailjs.send("lagaraj_cjjgybi", "furniz_yifbk8e", templateParams)
    .then((response) => {
        console.log('Email 1 (furnizor) trimis!', response.status, response.text);
        // Email 2 - către client (confirmare)
        return emailjs.send("lagaraj_cjjgybi", "client_5g2sp14", templateParams);
    })
    .then((response) => {
        console.log('Email 2 (către client) trimis!', response.status, response.text);
        alert(`✅ Comanda a fost trimisă cu succes!\n\nÎți mulțumim, ${name}!\nVei fi contactat în maxim 24h la numărul ${phone}.\n\nTotal: ${total} RON\n\nAi primit și un email de confirmare la ${email}.`);
        document.getElementById('orderFormModal').style.display = 'none';
        document.getElementById('orderForm').reset();
        clearCart();
    })
    .catch((err) => {
        console.error('FAILED...', err);
        alert(`❌ Eroare la trimiterea comenzii: ${err.text || 'Necunoscut'}\n\nVă rugăm să ne contactați direct:\n📞 +40 727 833 343\n📧 lagarajdetails@gmail.com\n\nSau încercați din nou.`);
    });
});

function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({behavior: 'smooth', block: 'start'});
    }
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'fixed top-20 right-4 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg z-50 transform translate-x-full transition-transform duration-300';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => notification.classList.remove('translate-x-full'), 100);
    setTimeout(() => {
        notification.classList.add('translate-x-full');
        setTimeout(() => document.body.removeChild(notification), 300);
    }, 3000);
}

// AI Chatbot
function toggleChat() {
    const chatWindow = document.getElementById('chatWindow');
    chatWindow.style.display = chatWindow.style.display === 'flex' ? 'none' : 'flex';
}

function sendMessage() {
    const input = document.getElementById('chatInput');
    const message = input.value.trim();
    if (!message) return;
    
    const messagesDiv = document.getElementById('chatMessages');
    messagesDiv.innerHTML += `<div class="chat-message user">${message}</div>`;
    input.value = '';
    
    setTimeout(() => {
        const response = getAIResponse(message.toLowerCase());
        messagesDiv.innerHTML += `<div class="chat-message bot">${response}</div>`;
        messagesDiv.scrollTop = messagesDiv.scrollHeight;
    }, 500);
}

function getAIResponse(message) {
    if (message.includes('baterie') || message.includes('acumulator')) {
        return 'Pentru alegerea bateriei potrivite, trebuie să știu câțiva parametri: care este marca mașinii tale și ce capacitate (Ah) îți trebuie? Pot să te ajut să găsești bateria perfectă! 🔋';
    } else if (message.includes('detailing') || message.includes('protectie') || message.includes('ceramic')) {
        return 'Avem o gamă completă de produse Nasiol pentru detailing profesional! De la protecție ceramică NL272 cu durabilitate 5+ ani, până la produse de întreținere zilnică. Ce tip de protecție te interesează? 🛡️';
    } else if (message.includes('pret') || message.includes('cost')) {
        return 'Prețurile noastre sunt foarte competitive! Bateriile încep de la 234 RON, iar produsele Nasiol de la 50 RON. Plus, oferim livrare și montaj gratuit! 💰';
    } else if (message.includes('livrare') || message.includes('montaj')) {
        return 'Oferim livrare gratuită în 24-48 ore în toată România și montaj gratuit la domiciliu sau service. Sună-ne la +40 727 833 343 pentru detalii! 🚚';
    } else if (message.includes('garantie') || message.includes('garanție')) {
        return 'Toate bateriile noastre au garanție între 24-36 luni, în funcție de model, fără condiții ascunse. Produsele Nasiol au durabilitate garantată conform specificațiilor! ✅';
    } else if (message.includes('comanda') || message.includes('cumpar') || message.includes('cumpăr')) {
        return 'Super! Poți adăuga produsele în coș și finaliza comanda direct pe site. Sau sună-ne la +40 727 833 343 pentru asistență personalizată! 📱';
    } else {
        return 'Sunt aici să te ajut! Pot să te sfătuiesc în alegerea bateriei potrivite, să îți explic beneficiile produselor Nasiol, sau să răspund la orice întrebare despre comenzi și livrare. Cu ce te pot ajuta? 😊';
    }
}

window.onclick = function(event) {
    const cartModal = document.getElementById('cartModal');
    const orderModal = document.getElementById('orderFormModal');
    if (event.target === cartModal) cartModal.style.display = 'none';
    if (event.target === orderModal) orderModal.style.display = 'none';
}