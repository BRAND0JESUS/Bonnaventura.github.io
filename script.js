/* Product Data */
const products = [
    // Zapatos
    {
        id: 1,
        name: "Zapatillas Deportivas Nike",
        category: "zapatos",
        price: 89.99,
        soldOut: false,
        description: "Comodidad y estilo para tu día a día",
        fullDescription: "Diseñadas para el máximo confort y rendimiento, estas zapatillas combinan tecnología de amortiguación avanzada con un estilo moderno perfecto para el uso diario o actividades deportivas ligeras.",
        images: [
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "products/zapatos/Zapatillas_Deportivas_Nike-89.99-DISPONIBLE/4380323-hd_1080_1920_30fps.mp4",
            "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        ]
    },
    {
        id: 2,
        name: "Zapatos Formales de Cuero",
        category: "zapatos",
        price: 75.50,
        soldOut: false,
        description: "Elegancia profesional para toda ocasión",
        fullDescription: "Zapatos de cuero genuino con acabado premium. La elección perfecta para reuniones de negocios, eventos formales o para elevar tu estilo profesional diario. Suela antideslizante y plantilla ergonómica.",
        images: [
            "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1560343076-ec34074063db?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        ]
    },
    {
        id: 3,
        name: "Sandalias de Verano",
        category: "zapatos",
        price: 35.00,
        soldOut: true,
        description: "Frescura y confort para el clima cálido",
        fullDescription: "Sandalias ligeras y resistentes con diseño ergonómico. Ideales para la playa, piscina o días calurosos. Materiales duraderos que aseguran confort durante todo el día.",
        images: [
            "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1562273138-f46be4ebdf33?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        ]
    },
    {
        id: 4,
        name: "Botas de Montaña",
        category: "zapatos",
        price: 120.00,
        soldOut: false,
        description: "Resistencia y seguridad para aventuras",
        fullDescription: "Construidas para resistir los terrenos más difíciles. Impermeables, con soporte de tobillo reforzado y suela de alta tracción para garantizar tu seguridad en cada paso de tu aventura.",
        images: [
            "https://images.unsplash.com/photo-1582845512747-e420032a7538?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1542838686-37da4b727f74?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        ]
    },
    // Electrónicos
    {
        id: 5,
        name: "Auriculares Inalámbricos",
        category: "electronicos",
        price: 45.99,
        soldOut: false,
        description: "Sonido premium sin cables",
        fullDescription: "Experimenta la libertad con sonido de alta fidelidad. Conexión Bluetooth 5.0 estable, batería de larga duración y estuche de carga compacto. Micrófono integrado para llamadas claras.",
        images: [
            "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1572569028738-411a097746fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        ]
    },
    {
        id: 6,
        name: "Smartwatch Deportivo",
        category: "electronicos",
        price: 150.00,
        soldOut: false,
        description: "Monitorea tu salud y actividad",
        fullDescription: "Tu compañero ideal de entrenamiento. Monitoreo de ritmo cardíaco, seguimiento de sueño, GPS integrado y resistencia al agua. Notificaciones inteligentes directamente en tu muñeca.",
        images: [
            "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        ]
    },
    {
        id: 7,
        name: "Powerbank 20000mAh",
        category: "electronicos",
        price: 28.50,
        soldOut: true,
        description: "Carga tu dispositivo en cualquier lugar",
        fullDescription: "Banco de energía de alta capacidad. Carga tu teléfono múltiples veces con una sola carga. Diseño delgado y portátil con protección contra sobrecarga. Doble puerto USB.",
        images: [
            "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        ]
    },
    {
        id: 8,
        name: "Tablet Android 10\"",
        category: "electronicos",
        price: 199.99,
        soldOut: false,
        description: "Entretenimiento y productividad portátil",
        fullDescription: "Pantalla HD nítida perfecta para películas y trabajo. Procesador rápido, amplio almacenamiento y batería para todo el día. Sistema operativo Android actualizado con acceso a millones de apps.",
        images: [
            "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1589739900912-697ccc4e2e28?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        ]
    },
    // Ropa
    {
        id: 9,
        name: "Camiseta Básica de Algodón",
        category: "ropa",
        price: 15.99,
        soldOut: false,
        description: "Suave, cómoda y versátil",
        fullDescription: "100% algodón premium. Un básico esencial para cualquier guardarropa. Tejido transpirable que mantiene su forma y color lavado tras lavado. Disponible en varios colores.",
        images: [
            "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        ]
    },
    {
        id: 10,
        name: "Jeans Clásicos",
        category: "ropa",
        price: 45.00,
        soldOut: false,
        description: "Estilo atemporal y duradero",
        fullDescription: "Denim de alta calidad con el ajuste perfecto. Diseño clásico de 5 bolsillos, costuras reforzadas y un lavado moderno. Combina durabilidad con comodidad para el uso diario.",
        images: [
            "https://images.unsplash.com/photo-1542272454374-d140708f30d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        ]
    },
    {
        id: 11,
        name: "Chaqueta Deportiva",
        category: "ropa",
        price: 65.00,
        soldOut: false,
        description: "Perfecta para clima fresco",
        fullDescription: "Chaqueta ligera pero cálida, ideal para entrenar al aire libre o para un look casual deportivo. Material resistente al viento y repelente al agua. Bolsillos con cierre seguro.",
        images: [
            "https://images.unsplash.com/photo-1551488852-080175cff856?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        ]
    },
    {
        id: 12,
        name: "Vestido Casual",
        category: "ropa",
        price: 55.50,
        soldOut: true,
        description: "Elegancia relajada para cualquier ocasión",
        fullDescription: "Diseño fluido y femenino que favorece a todas las figuras. Tela suave al tacto con caída elegante. Perfecto para una salida casual, un brunch o una tarde de paseo.",
        images: [
            "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        ]
    }
];

/* DOM Loading */
document.addEventListener('DOMContentLoaded', () => {
    renderProducts('all');
    setupMobileMenu();
});

/* Render Products Function */
function renderProducts(category) {
    const grid = document.getElementById('products-grid');
    grid.innerHTML = '';

    let filteredProducts = category === 'all'
        ? products
        : products.filter(product => product.category === category);

    // Sort: Sold Out items at the end
    filteredProducts.sort((a, b) => {
        if (a.soldOut === b.soldOut) return 0;
        return a.soldOut ? 1 : -1;
    });

    filteredProducts.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('product-card');
        if (product.soldOut) card.classList.add('sold-out');

        // WhatsApp Link Generation
        const message = `Hola! Estoy interesado en el ${product.name} por $${product.price}. ¿Está disponible? Me gustaría más información.`;
        const whatsappUrl = `https://wa.me/593978997619?text=${encodeURIComponent(message)}`;

        const soldOutBadge = product.soldOut ? '<span class="sold-out-badge">Agotado</span>' : '';
        const actionButtons = product.soldOut
            ? `<button class="btn-outline" onclick="openModal(${product.id})">Ver Detalles</button>
               <button class="btn-whatsapp disabled" disabled>Agotado</button>`
            : `<button class="btn-outline" onclick="openModal(${product.id})">Ver Detalles</button>
               <a href="${whatsappUrl}" target="_blank" class="btn-whatsapp">
                   <i class="fa-brands fa-whatsapp"></i> Consultar WhatsApp
               </a>`;

        card.innerHTML = `
            <div class="product-image-container" onclick="openModal(${product.id})">
                <span class="category-badge">${product.category}</span>
                ${soldOutBadge}
                <img src="${product.images[0]}" alt="${product.name}" class="product-img">
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-desc">${product.description}</p>
                <div class="product-price">$${product.price.toFixed(2)} USD</div>
                <div class="product-actions">
                    ${actionButtons}
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}


/* Filter Functions */
function filterProducts(category) {
    // Update active button state
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    // Find the button that was clicked (approximate matching since onclick is inline)
    event.target.classList.add('active');

    renderProducts(category);
}

function filterAndScroll(category) {
    // Scroll to products section
    document.getElementById('productos').scrollIntoView({ behavior: 'smooth' });

    // Update active button visually
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.innerText.toLowerCase() === category || (category === 'electronicos' && btn.innerText.includes('Electrónicos'))) {
            btn.classList.add('active');
        }
    });

    // Filter
    renderProducts(category);
}

/* Modal Functions */
const modal = document.getElementById('product-modal');

// Helper to check if url is video
function isVideo(url) {
    return url.match(/\.(mp4|webm|ogg)$/i);
}

function openModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    // Reset Modal Image Area
    const modalImageContainer = document.querySelector('.modal-image');
    modalImageContainer.innerHTML = '';

    // 1. Create Main Media Wrapper
    const mainMediaWrapper = document.createElement('div');
    mainMediaWrapper.className = 'modal-main-media-container';
    mainMediaWrapper.style.width = '100%';
    mainMediaWrapper.style.height = '100%';
    mainMediaWrapper.style.display = 'flex';
    mainMediaWrapper.style.alignItems = 'center';
    mainMediaWrapper.style.justifyContent = 'center';
    mainMediaWrapper.style.overflow = 'hidden';
    modalImageContainer.appendChild(mainMediaWrapper);

    // 2. Create Thumbnails Wrapper
    const thumbnailsWrapper = document.createElement('div');
    thumbnailsWrapper.className = 'modal-thumbnails';
    modalImageContainer.appendChild(thumbnailsWrapper);

    // Function to Render Main Media
    const renderMainMedia = (src) => {
        mainMediaWrapper.innerHTML = '';
        if (isVideo(src)) {
            const video = document.createElement('video');
            video.src = src;
            video.controls = true;
            video.autoplay = true;
            video.style.width = '100%';
            video.style.height = '100%';
            video.style.objectFit = 'cover';
            mainMediaWrapper.appendChild(video);
        } else {
            const img = document.createElement('img');
            img.src = src;
            img.style.width = '100%';
            img.style.height = '100%';
            img.style.objectFit = 'cover';
            mainMediaWrapper.appendChild(img);
        }
    }

    // Initial Render
    renderMainMedia(product.images[0]);

    // Render Thumbnails
    if (product.images.length > 1) {
        product.images.forEach((imgSrc, index) => {
            const thumb = document.createElement('div');
            thumb.className = index === 0 ? 'modal-thumbnail active' : 'modal-thumbnail';

            if (isVideo(imgSrc)) {
                thumb.classList.add('video-thumb');
                thumb.innerHTML = '<i class="fa-solid fa-play"></i>';
                thumb.style.display = 'flex';
                thumb.style.alignItems = 'center';
                thumb.style.justifyContent = 'center';
                thumb.style.backgroundColor = '#000';
                thumb.style.color = 'var(--gold)';
            } else {
                const img = document.createElement('img');
                img.src = imgSrc;
                img.style.width = '100%';
                img.style.height = '100%';
                img.style.objectFit = 'cover';
                thumb.appendChild(img);
            }

            thumb.onclick = () => {
                // Update Active State
                document.querySelectorAll('.modal-thumbnail').forEach(t => t.classList.remove('active'));
                thumb.classList.add('active');

                // Update Main Media
                renderMainMedia(imgSrc);
            };
            thumbnailsWrapper.appendChild(thumb);
        });
    }

    document.getElementById('modal-category').innerText = product.category;
    document.getElementById('modal-title').innerText = product.name;
    document.getElementById('modal-price').innerText = `$${product.price.toFixed(2)} USD`;
    document.getElementById('modal-desc').innerText = product.fullDescription;

    const whatsappBtn = document.getElementById('modal-whatsapp');
    if (product.soldOut) {
        whatsappBtn.innerHTML = '<i class="fa-solid fa-ban"></i> Producto Agotado';
        whatsappBtn.classList.add('disabled');
        whatsappBtn.href = 'javascript:void(0)';
        whatsappBtn.removeAttribute('target');
        whatsappBtn.style.backgroundColor = '#ccc';
        whatsappBtn.style.pointerEvents = 'none';
        whatsappBtn.style.cursor = 'not-allowed';
    } else {
        const message = `Hola! Estoy interesado en el ${product.name} por $${product.price}. ¿Está disponible? Me gustaría más información.`;
        const whatsappUrl = `https://wa.me/593978997619?text=${encodeURIComponent(message)}`;
        whatsappBtn.innerHTML = '<i class="fa-brands fa-whatsapp"></i> Consultar Disponibilidad';
        whatsappBtn.classList.remove('disabled');
        whatsappBtn.href = whatsappUrl;
        whatsappBtn.target = '_blank';
        whatsappBtn.style.backgroundColor = '';
        whatsappBtn.style.pointerEvents = '';
        whatsappBtn.style.cursor = 'pointer';
    }

    // Show Modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto'; // Re-enable scrolling
}

// Close modal when clicking outside
window.onclick = function (event) {
    if (event.target == modal) {
        closeModal();
    }
}

/* Mobile Menu */
function setupMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    hamburger.addEventListener('click', () => {
        // Toggle active class directly on nav_links container for simple mobile menu
        // Assuming CSS structure allows this, or toggling a class on nav_menu that shows links
        navMenu.classList.toggle('active'); // CSS must handle .nav_menu.active display
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}
