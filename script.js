// Datos de productos (ejemplo)
const productos = [
    { nombre: 'Gorro de lana', categoria: 'cabeza', imagen: './img/Gorros-de-hilo-corto-para-hombre-y-mujer-gorro-de-lana-el-stica-estilo-Hip-Hop.png_.jpg' },
    { nombre: 'Sombrero', categoria: 'cabeza', imagen: 'https://http2.mlstatic.com/D_NQ_NP_959778-MLM45223042175_032021-O.jpg' },
    { nombre: 'Viseras', categoria: 'cabeza', imagen: 'https://th.bing.com/th/id/R.55179df7369fcfe0cbb31c8906ef5881?rik=atigO1MCvN0oFQ&riu=http%3a%2f%2ffr.monnierparis.com%2fcdn%2fshop%2fproducts%2f3700943155498_000_aabedc6036.jpg%3fv%3d1671447291&ehk=pZH8inSY18kg%2bF3jrcLtNSVtOEYgpceLRtf1QGXqfK4%3d&risl=&pid=ImgRaw&r=0' },

    // Cuerpo
    { nombre: 'Remera', categoria: 'cuerpo', imagen: 'https://tse3.mm.bing.net/th/id/OIP.xcnYU9JOyeourfLmOwLxugHaHa?r=0&cb=thfvnext&w=680&h=680&rs=1&pid=ImgDetMain&o=7&rm=3' },
    { nombre: 'Termicas', categoria: 'cuerpo', imagen: './img/termica.jpeg' },
    { nombre: 'Buzo', categoria: 'cuerpo', imagen: 'https://i.pinimg.com/originals/24/d1/93/24d19355f83e41dc52255432b91dfbb9.jpg' },

    // Piernas
    { nombre: 'Pantalón Spandex', categoria: 'piernas', imagen: 'https://atlasoft.cl/wp-content/uploads/2024/05/jnli373500009_01_5.jpg' },
    { nombre: 'Falda plisada', categoria: 'piernas', imagen: 'https://media.glamour.es/photos/664ef6ab360fb8e6fd409193/1:1/w_1280%2Cc_limit/falda%2520de%2520lino%2520massimo%2520dutti.jpeg' },
    { nombre: 'Pantalón vaquero', categoria: 'piernas', imagen: 'https://tse3.mm.bing.net/th/id/OIP.GMGbujDGWTyApKs93TxmJAHaHa?r=0&cb=thfvnext&w=1200&h=1200&rs=1&pid=ImgDetMain&o=7&rm=3' },

    // Pies
    { nombre: 'Medias de Termicas', categoria: 'pies', imagen: './img/71BPCpl-TqS._AC_UY879_.jpg' },
    { nombre: 'Zapatillas deportivas', categoria: 'pies', imagen: 'https://tse2.mm.bing.net/th/id/OIP.ctQoPnt1kCYENifzuN2IlwHaFj?r=0&cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3' },
    { nombre: 'Zoquetes', categoria: 'pies', imagen: 'https://th.bing.com/th/id/R.10a1966cbeccc0d6b6d7750e597c2c38?rik=AwHDzGWe%2b3QmzA&riu=http%3a%2f%2fdcdn.mitiendanube.com%2fstores%2f001%2f017%2f905%2fproducts%2fdiseno-sin-titulo-2024-01-04t143812-125-e770bd00b968524be617043935726396-640-0.png&ehk=OqvpUq4YeiFdQCXKwiN3gMxbd6zLh0Ia08EkcR63fEI%3d&risl=&pid=ImgRaw&r=0' },

    // Accesorios (agregado)
    { nombre: 'Mochila', categoria: 'accesorios', imagen: './img/mochila.jpeg' },
    { nombre: 'Cartera', categoria: 'accesorios', imagen: './img/cartera.jpeg' },
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