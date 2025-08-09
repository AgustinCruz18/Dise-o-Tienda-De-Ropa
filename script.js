// Datos de productos (ejemplo)
const productos = [
    { nombre: 'Gorro de lana', categoria: 'cabeza', imagen: './img/Gorros-de-hilo-corto-para-hombre-y-mujer-gorro-de-lana-el-stica-estilo-Hip-Hop.png_.jpg' },
    { nombre: 'Remera', categoria: 'cuerpo', imagen: './img/logo.png' },
    { nombre: 'Pantalón vaquero', categoria: 'piernas', imagen: 'https://cdn.pixabay.com/photo/2017/08/06/17/30/jeans-2591605_1280.jpg' },
    { nombre: 'Medias de colores', categoria: 'pies', imagen: './img/71BPCpl-TqS._AC_UY879_.jpg' },
    { nombre: 'Remera básica', categoria: 'cuerpo', imagen: 'https://cdn.pixabay.com/photo/2016/11/29/03/50/t-shirt-1867148_1280.jpg' },
    { nombre: 'Falda plisada', categoria: 'piernas', imagen: 'https://cdn.pixabay.com/photo/2017/08/06/17/30/skirt-2591603_1280.jpg' },
    { nombre: 'Zapatillas deportivas', categoria: 'pies', imagen: 'https://cdn.pixabay.com/photo/2016/11/29/03/50/sneakers-1867156_1280.jpg' },
    { nombre: 'Sombrero de paja', categoria: 'cabeza', imagen: 'https://cdn.pixabay.com/photo/2017/08/07/19/22/hat-2606556_1280.jpg' },
    { nombre: 'Gorro de lana', categoria: 'cabeza', imagen: './img/Gorros-de-hilo-corto-para-hombre-y-mujer-gorro-de-lana-el-stica-estilo-Hip-Hop.png_.jpg' },
    { nombre: 'Buzo con capucha', categoria: 'cuerpo', imagen: 'https://cdn.pixabay.com/photo/2016/11/29/03/50/sweatshirt-1867147_1280.jpg' },
    { nombre: 'Pantalón vaquero', categoria: 'piernas', imagen: 'https://cdn.pixabay.com/photo/2017/08/06/17/30/jeans-2591605_1280.jpg' },
    { nombre: 'Medias de colores', categoria: 'pies', imagen: './img/71BPCpl-TqS._AC_UY879_.jpg' },
    { nombre: 'Remera básica', categoria: 'cuerpo', imagen: 'https://cdn.pixabay.com/photo/2016/11/29/03/50/t-shirt-1867148_1280.jpg' },
    { nombre: 'Falda plisada', categoria: 'piernas', imagen: 'https://cdn.pixabay.com/photo/2017/08/06/17/30/skirt-2591603_1280.jpg' },
    { nombre: 'Zapatillas deportivas', categoria: 'pies', imagen: 'https://cdn.pixabay.com/photo/2016/11/29/03/50/sneakers-1867156_1280.jpg' },
    { nombre: 'Sombrero de paja', categoria: 'cabeza', imagen: 'https://cdn.pixabay.com/photo/2017/08/07/19/22/hat-2606556_1280.jpg' }
];

// Función para cargar los productos en la página
function cargarProductos(categoria = '', busqueda = '') {
    const listaProductos = document.getElementById('productos-lista');
    listaProductos.innerHTML = '';

    let productosFiltrados = productos;
    if (categoria) {
        productosFiltrados = productosFiltrados.filter(p => p.categoria === categoria);
    }
    if (busqueda) {
        productosFiltrados = productosFiltrados.filter(p => p.nombre.toLowerCase().includes(busqueda.toLowerCase()));
    }

    if (productosFiltrados.length === 0) {
        listaProductos.innerHTML = '<p class="no-products">No se encontraron productos.</p>';
    } else {
        productosFiltrados.forEach(producto => {
            const divProducto = document.createElement('div');
            divProducto.classList.add('producto');
            divProducto.innerHTML = `
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <h3>${producto.nombre}</h3>
            `;
            listaProductos.appendChild(divProducto);
        });
    }
}

// Filtar productos por categoría
document.getElementById('categoria').addEventListener('change', (event) => {
    const busqueda = document.getElementById('buscador-input').value;
    cargarProductos(event.target.value, busqueda);
});

// Búsqueda de productos
document.getElementById('buscador-input').addEventListener('input', (event) => {
    const categoria = document.getElementById('categoria').value;
    cargarProductos(categoria, event.target.value);
});

// Cambiar el tema (modo claro/oscuro)
document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    const icon = document.querySelector('.theme-toggle-btn i');
    if (isDarkMode) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
});

// Manejar el formulario de contacto con un modal
document.getElementById('contact-form').addEventListener('submit', (event) => {
    event.preventDefault();

    const successModal = document.getElementById('success-modal');
    successModal.style.display = 'block';

    document.getElementById('contact-form').reset();
});

// Cerrar el modal al hacer clic en el botón de cerrar (X)
document.querySelector('.close-btn').addEventListener('click', () => {
    document.getElementById('success-modal').style.display = 'none';
});

// Cerrar el modal si el usuario hace clic fuera de la ventana
window.addEventListener('click', (event) => {
    const successModal = document.getElementById('success-modal');
    if (event.target === successModal) {
        successModal.style.display = 'none';
    }
});

// Manejar el menú de hamburguesa
document.getElementById('menu-toggle').addEventListener('click', () => {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('show');
});

// Ocultar el menú al hacer clic en un enlace (para móviles)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        const navMenu = document.getElementById('nav-menu');
        if (navMenu.classList.contains('show')) {
            navMenu.classList.remove('show');
        }
    });
});

// Inicializar los productos al cargar la página
cargarProductos();