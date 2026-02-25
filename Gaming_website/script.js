const gameData = [
    { id: 1, title: "Elden Ring", price: 59.99, img: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=400" },
    { id: 2, title: "Cyberpunk 2077", price: 49.99, img: "https://images.unsplash.com/photo-1605898960710-91953934394c?w=400" },
    { id: 3, title: "God of War Ragnarök", price: 69.99, img: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=400" }
];

// Add placeholders to reach 100
for(let i=4; i<=100; i++) {
    gameData.push({
        id: i,
        title: `Epic Title #${i}`,
        price: (Math.random() * 60 + 10).toFixed(2),
        img: `https://picsum.photos/seed/${i}/400/250`
    });
}

let cart = [];
let library = [];

function showPage(pageId) {
    document.querySelectorAll('.page-section').forEach(p => p.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
}

function renderStore() {
    const grid = document.getElementById('game-grid');
    grid.innerHTML = gameData.map(game => `
        <div class="game-card">
            <img src="${game.img}" alt="${game.title}">
            <div class="card-body">
                <h3>${game.title}</h3>
                <p class="highlight">$${game.price}</p>
                <button onclick="addToCart(${game.id})" class="btn-primary" style="width:100%; margin-top:10px;">Add to Cart</button>
            </div>
        </div>
    `).join('');
}

function addToCart(id) {
    const game = gameData.find(g => g.id === id);
    if(!cart.find(i => i.id === id)) {
        cart.push(game);
        updateUI();
    }
}

function updateUI() {
    document.getElementById('cart-count').innerText = cart.length;
    const total = cart.reduce((sum, item) => sum + parseFloat(item.price), 0).toFixed(2);
    document.getElementById('total-price').innerText = `$${total}`;
    
    document.getElementById('cart-items').innerHTML = cart.map(item => `
        <div class="summary-card" style="margin-bottom:10px; padding:15px; display:flex; justify-content:space-between">
            <span>${item.title}</span>
            <span>$${item.price}</span>
        </div>
    `).join('');
}

function handlePayment(e) {
    e.preventDefault();
    if(cart.length === 0) return alert("Cart is empty!");
    library.push(...cart);
    cart = [];
    updateUI();
    renderLibrary();
    alert("Purchase successful!");
    showPage('library');
}

function renderLibrary() {
    const grid = document.getElementById('library-grid');
    document.getElementById('empty-library').style.display = 'none';
    grid.innerHTML = library.map(game => `
        <div class="game-card" style="opacity:0.8">
            <img src="${game.img}">
            <div class="card-body"><h3>${game.title}</h3><p>Installed</p></div>
        </div>
    `).join('');
}

renderStore();