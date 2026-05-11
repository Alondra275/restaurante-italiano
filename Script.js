// DATOS DEL MENÚ
//Reemplacé completamente la función displayMenuItems//

//Añadí la función setupFilterButtons para manejar los clics en los botones//

//Mejoré los datos del menú con imágenes de ejemplo y descripciones//


const menuItems = [
    { 
        id: 1, 
        name: "Arancini", 
        category: "entradas", 
        price: "$95", 
        image: "/Arancini.jpg",
        description: "Bolitas de arroz rellenas de ragú, empanizadas y fritas."
    },
    { 
        id: 2, 
        name: "Asparagus Involtini", 
        category: "entradas", 
        price: "$55", 
        image: "/Asparagus Involtini.jpg",
        description: "Espárragos envueltos en prosciutto o queso."
    },
    { 
        id: 3, 
        name: "Bruschetta", 
        category: "entradas", 
        price: "$45", 
        image: "/Bruschetta.jpeg",
        description: "Pan tostado con tomate, ajo y aceite de oliva."
    },
    { 
        id: 4, 
        name: "Caponata", 
        category: "entradas", 
        price: "$75", 
        image: "/Caponata.jpg",
        description: "Guiso siciliano de berenjena con alcaparras y aceitunas."
    },
    { 
        id: 5, 
        name: "Ensalada Caprese", 
        category: "entradas", 
        price: "$95", 
        image: "/Caprese Salad.jpg",
        description: "Ensalada de tomate, mozzarella y albahaca fresca."
    },
    { 
        id: 6, 
        name: "Carpaccio", 
        category: "entradas", 
        price: "$195", 
        image: "/Carpaccio.jpg",
        description: "Finas láminas de carne o pescado crudo con aderezo."
    },
    { 
        id: 7, 
        name: "Coccoli con Stracchino y Prosciutto", 
        category: "entradas", 
        price: "$90", 
        image: "/Coccoli con Stracchino y Prosciutto.jpg",
        description: "Panecillos fritos con queso cremoso y jamón."
    },
    { 
        id: 8, 
        name: "Carnes curadas", 
        category: "entradas", 
        price: "$255", 
        image: "/Cured meats.jpg",
        description: "Tabla de embutidos y fiambres italianos."
    },
    { 
        id: 9, 
        name: "Fave e cicoria", 
        category: "entradas", 
        price: "$55", 
        image: "/Fave e cicoria.png",
        description: "Puré de habas con achicoria."
    },
    { 
        id: 10, 
        name: "Farinata", 
        category: "entradas", 
        price: "$55", 
        image: "/Farinata.jpg",
        description: "Tarta salada hecha de harina de garbanzo."
    },
    { 
        id: 11, 
        name: "Fettunta", 
        category: "entradas", 
        price: "$25", 
        image: "/Fettunta.jpg",
        description: "Pan toscano tostado con aceite de oliva."
    },
    { 
        id: 12, 
        name: "Focaccia", 
        category: "entradas", 
        price: "$25", 
        image: "/Focaccia.jpg",
        description: "Pan suave al horno con hierbas y aceite de oliva."
    },
    { 
        id: 13, 
        name: "Grissini", 
        category: "entradas", 
        price: "$45", 
        image: "/Grissini.WEBP",
        description: "Palitos de pan crujientes acompañados de un aderezo."
    },
    { 
        id: 14, 
        name: "Pane ca'meusa", 
        category: "entradas", 
        price: "$65", 
        image: "/Pane ca´meusa.WEBP",
        description: "Bocadillo siciliano de pan con bazo de res."
    },
    { 
        id: 15, 
        name: "Panzanella", 
        category: "entradas", 
        price: "$75", 
        image: "/Panzanella.jpg",
        description: "Ensalada de pan duro, tomate, pepino, cebolla morada, y aguacate."
    },
    { 
        id: 16, 
        name: "Pappa al pomodoro", 
        category: "entradas", 
        price: "$55", 
        image: "/Pappa al pomodoro.jpg",
        description: "Sopa espesa de pan con tomate y ajo."
    },
    { 
        id: 17, 
        name: "Tabla de Quesos", 
        category: "entradas", 
        price: "$95", 
        image: "/Quesos.jpg",
        description: "Selección de quesos italianos tradicionales."
    },
    { 
        id: 18, 
        name: "Rosa Di Gorizia", 
        category: "entradas", 
        price: "$85", 
        image: "/Rosa Di Gorizia.jpg",
        description: "Variedad de radicchio con sabor amargo y delicado acompañada de huevos hervidos y aderezo de chipotle."
    },
    { 
        id: 19, 
        name: "Bistecca alla Fiorentina", 
        category: "plato-fuerte", 
        price: "$235", 
        image: "/Bistecca alla Fiorentina.jpg",
        description: "Chuletón toscano a la parrilla."
    },
    { 
        id: 20, 
        name: "Spaghetti frutti di mare", 
        category: "plato-fuerte", 
        price: "$155", 
        image: "/camarones.jpg",
        description: "spaghetti con camarones estilo carbonara con ajo y aceite.."
    },
    { 
        id: 21, 
        name: "Cacio e pepe", 
        category: "plato-fuerte", 
        price: "$130", 
        image: "/Cacio e pepe.jpg",
        description: "Pasta con queso pecorino y pimienta negra."
    },
    { 
        id: 22, 
        name: "Lasaña tradicional", 
        category: "plato-fuerte", 
        price: "$255", 
        image: "/Lasaña.jpg",
        description: "Capas de pasta, carne, bechamel y salsa de tomate."
    },
    { 
        id: 23, 
        name: "Orecchiette", 
        category: "plato-fuerte", 
        price: "$230", 
        image: "/Orecchiette.jpg",
        description: "Pasta en forma de “orejitas”, típica de Puglia."
    },
    { 
        id: 24, 
        name: "Osso buco", 
        category: "plato-fuerte", 
        price: "$325", 
        image: "/Osso buco.jpeg",
        description: "Jarrete de ternera estofado con verduras y vino."
    },
    { 
        id: 25, 
        name: "Polenta", 
        category: "plato-fuerte", 
        price: "$55", 
        image: "/Polenta.jpg",
        description: "Guiso cremoso de harina de maíz."
    },
    { 
        id: 26, 
        name: "Ragu", 
        category: "plato-fuerte", 
        price: "$95", 
        image: "/Ragu.jpg",
        description: "Salsa espesa de carne cocinada a fuego lento."
    },
    { 
        id: 27, 
        name: "Risotto", 
        category: "plato-fuerte", 
        price: "$68", 
        image: "/Rissotto.webp",
        description: "Arroz cremoso cocinado con caldo y queso."
    },
    { 
        id: 28, 
        name: "Roman Porchetta", 
        category: "plato-fuerte", 
        price: "$345", 
        image: "/Roman Porchetta.jpg",
        description: "Cerdo asado con hierbas, jugoso y crujiente."
    },
    { 
        id: 29, 
        name: "Spaghetti alla Carbonara", 
        category: "plato-fuerte", 
        price: "$130", 
        image: "/Spaghetti alla Carbonara.jpg",
        description: "Pasta con huevo, pecorino y guanciale."
    },
    { 
        id: 30, 
        name: "Spaghetti Polpette", 
        category: "plato-fuerte", 
        price: "$185", 
        image: "/Spaghetti polpette.jpg",
        description: "Spaghetti con albóndigas en salsa de tomate."
    },
    { 
        id: 31, 
        name: "Trofie", 
        category: "plato-fuerte", 
        price: "$135", 
        image: "/Trofie.webp",
        description: "Pasta corta en espiral, ideal con pesto genovés."
    },
    { 
        id: 32, 
        name: "Pizza Margarita", 
        category: "plato-fuerte", 
        price: "$175", 
        image: "/Margarita.jpg",
        description: "La pizza tradicional de Italia."
    },
    { 
        id: 33, 
        name: "Bonet", 
        category: "postres", 
        price: "$155", 
        image: "/Bonet.jpg",
        description: "Flan piamontés de cacao y amaretti."
    },
    { 
        id: 34, 
        name: "Cannoli", 
        category: "postres", 
        price: "$75", 
        image: "/Cannoli.webp",
        description: "Tubitos de masa frita rellenos de ricotta dulce."
    },
    { 
        id: 35, 
        name: "Cornetto", 
        category: "postres", 
        price: "$45", 
        image: "/Cornetto.webp",
        description: "Croissant italiano"
    },
    { 
        id: 36, 
        name: "Gelato", 
        category: "postres", 
        price: "$45", 
        image: "/Gelato.jpg",
        description: "Helado artesanal cremoso y denso (Vainilla, Bacio, Limón, Frambuesa, Cioccolato, Caffe, Ferrero, Tiramisu, Galleta)."
    },
    { 
        id: 37, 
        name: "Lemon Frittelle", 
        category: "postres", 
        price: "$95", 
        image: "/Lemon Frittelle.jpg",
        description: "Buñuelos de limón espolvoreados con azúcar."
    },
    { 
        id: 38, 
        name: "Pandoro", 
        category: "postres", 
        price: "$175", 
        image: "/Pandoro.webp",
        description: "Bizcocho alto y esponjoso típico de Navidad (Solo en temporada)."
    },
    { 
        id: 39, 
        name: "Panettone", 
        category: "postres", 
        price: "$85", 
        image: "/Panettone.jpg",
        description: "Pan dulce con pasas y frutas confitadas (Solo en temporada)."
    },
    { 
        id: 40, 
        name: "Panna Cotta", 
        category: "postres", 
        price: "$65", 
        image: "/Panna Cotta.jpg",
        description: "Postre cremoso de nata con gelatina."
    },
    { 
        id: 41, 
        name: "Sfogliatelle", 
        category: "postres", 
        price: "$55", 
        image: "/Sfogliatelle.jpg",
        description: "Hojaldre en capas relleno de ricotta o crema."
    },
    { 
        id: 42, 
        name: "Tiramisu", 
        category: "postres", 
        price: "$95", 
        image: "/Tiramisu.webp",
        description: "Capas de bizcocho con café, mascarpone y cacao."
    },
    { 
        id: 43, 
        name: "Torta della Nonna", 
        category: "postres", 
        price: "$95", 
        image: "/Torta della Nonna.jpg",
        description: "Tarta de crema pastelera con piñones."
    },
    { 
        id: 44, 
        name: "Tortino al cioccolato", 
        category: "postres", 
        price: "$115", 
        image: "/Tortino al ciocccolato.jpg",
        description: "Pastelito de chocolate con centro líquido."
    },
    { 
        id: 45, 
        name: "Zuppa inglese", 
        category: "postres", 
        price: "$100", 
        image: "/Zuppa inglese.jpg",
        description: "Postre de capas con bizcocho, crema y licor."
    },
    { 
        id: 46, 
        name: "Affogato", 
        category: "bebidas", 
        price: "$145", 
        image: "/Affogato.jpg",
        description: "Helado de vainilla con un espresso caliente encima."
    },
    { 
        id: 47, 
        name: "Aperol", 
        category: "bebidas", 
        price: "$215", 
        image: "/Aperol.webp",
        description: "Licor de naranja amarga y hierbas, base del Aperol Spritz."
    },
    { 
        id: 48, 
        name: "Bombardino", 
        category: "bebidas", 
        price: "$150", 
        image: "/Bombardino.webp",
        description: "Licor caliente con huevo y brandy."
    },
    { 
        id: 49, 
        name: "Campari", 
        category: "bebidas", 
        price: "$175", 
        image: "/Campari.jpg",
        description: "Amargo rojo a base de hierbas y frutas."
    },
    { 
        id: 50, 
        name: "Espresso", 
        category: "bebidas", 
        price: "$65", 
        image: "/Espresso.webp",
        description: "Café fuerte en pequeña taza."
    },
    { 
        id: 51, 
        name: "Hugo Spritz", 
        category: "bebidas", 
        price: "$195", 
        image: "/Hugo Spritz.jpeg",
        description: "Coctel con prosecco, flor de saúco y menta."
    },
    { 
        id: 52, 
        name: "Italicus Spritz", 
        category: "bebidas", 
        price: "$235", 
        image: "/Italicus Spritz.jpg",
        description: "Aperitivo cítrico y floral con prosecco."
    },
    { 
        id: 53, 
        name: "Macchiato", 
        category: "bebidas", 
        price: "$65", 
        image: "/Macchiato.webp",
        description: "Espresso con un toque de espuma de leche."
    },
    { 
        id: 54, 
        name: "Milano Torino", 
        category: "bebidas", 
        price: "$180", 
        image: "/Milano Torino.jpg",
        description: "Aperitivo con Campari y vermut."
    },
    { 
        id: 55, 
        name: "Mirto Spritz", 
        category: "bebidas", 
        price: "$215", 
        image: "/Mirto Spritz.jpeg",
        description: "Variante con licor de mirto y prosecco."
    },
    { 
        id: 56, 
        name: "Peach Bellini", 
        category: "bebidas", 
        price: "$165", 
        image: "/Peach Bellini.webp",
        description: "Prosecco con puré de durazno."
    },
    { 
        id: 57, 
        name: "Sgroppino", 
        category: "bebidas", 
        price: "$200", 
        image: "/Sgroppino.webp",
        description: "Cóctel cremoso con vodka, prosecco y sorbete."
    },
];

// FILTRADO DEL MENÚ
function displayMenuItems(category = 'all') {
    const menuContainer = document.querySelector('.menu-items'); // Selecciona el contenedor donde se mostrarán los platillos
    
    // Limpiar el contenedor antes de volver a cargar los platillos
    menuContainer.innerHTML = '';
    
    // Filtrar elementos según la categoría
    // Si category = 'all', muestra todos. Si no, filtra por categoría
    const filteredItems = category === 'all' 
        ? menuItems 
        : menuItems.filter(item => item.category === category);
    
    // Mostrar mensaje si no hay elementos // Si no hay elementos en esa categoría, muestra un mensaje
    if (filteredItems.length === 0) {
        menuContainer.innerHTML = `
            <div class="no-items-message">
                <p>No hay elementos en esta categoría.</p>
            </div>
        `;
        return;
    }
    
    // Generar HTML para cada elemento del menú
    filteredItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item'); // Crea un div para cada platillo // Le pone la clase .menu-item
        menuItem.dataset.category = item.category;
        

        // Inserta la estructura del platillo
        menuItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="menu-item-content">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <span>${item.price}</span>
            </div>
        `;
        
        menuContainer.appendChild(menuItem);
        // Finalmente agrega el platillo al contenedor
    });
}

// Función para manejar los botones de filtrado
function setupFilterButtons() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remover clase active de todos los botones
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Agregar clase active al botón clickeado
            button.classList.add('active');
            
            // Obtener la categoría del botón
            const category = button.dataset.category;
            
            // Mostrar los elementos de la categoría seleccionada
            displayMenuItems(category);
        });
    });
}

// INICIALIZACIÓN
document.addEventListener('DOMContentLoaded', () => {
    displayMenuItems(); // Carga todos los elementos al inicio
    setupFilterButtons(); // Configura los eventos de los botones de filtrado
});
