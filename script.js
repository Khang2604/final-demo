document.addEventListener('DOMContentLoaded', () => {
    fetchProducts();
    setupModals();
});

function fetchProducts() {
    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => {
            displayProducts(data);
        })
        .catch(error => {
            console.error('Error fetching products:', error);
        });
}

function displayProducts(products) {
    const productList = document.getElementById('product-list');
    if (productList) {
        products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('col-md-4', 'mb-4');
            productDiv.innerHTML = `
                <div class="card h-100">
                    <img src="${product.image}" class="card-img-top" alt="${product.title}">
                    <div class="card-body">
                        <h5 class="card-title">${product.title}</h5>
                        <p class="card-text">${product.description}</p>
                        <p class="card-text"><strong>Price:</strong> $${product.price}</p>
                    </div>
                </div>
            `;
            productList.appendChild(productDiv);
        });
    } else {
        console.error('Product list element not found.');
    }
}

function setupModals() {
    const loginBtn = document.getElementById('login-btn');
    const registerBtn = document.getElementById('register-btn');
    const loginModal = document.getElementById('login-modal');
    const registerModal = document.getElementById('register-modal');
    const closeLoginBtn = document.getElementById('close-login');
    const closeRegisterBtn = document.getElementById('close-register');

    if (loginBtn && loginModal && closeLoginBtn) {
        loginBtn.addEventListener('click', () => {
            loginModal.style.display = 'block';
        });

        closeLoginBtn.addEventListener('click', () => {
            loginModal.style.display = 'none';
        });

        window.addEventListener('click', (event) => {
            if (event.target === loginModal) {
                loginModal.style.display = 'none';
            }
        });
    }

    if (registerBtn && registerModal && closeRegisterBtn) {
        registerBtn.addEventListener('click', () => {
            registerModal.style.display = 'block';
        });

        closeRegisterBtn.addEventListener('click', () => {
            registerModal.style.display = 'none';
        });

        window.addEventListener('click', (event) => {
            if (event.target === registerModal) {
                registerModal.style.display = 'none';
            }
        });
    }
}
