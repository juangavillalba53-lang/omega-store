// ============================================================
//  OMEGA STORE TCG — PRODUCTOS
//  Editá este archivo para agregar, quitar o modificar productos.
//
//  Campos:
//    id       → número único
//    name     → nombre del producto
//    category → "pokemon" | "onepiece" | "lorcana" | "magic" | "figuras" | "juegos"
//    tag      → etiqueta visible en la card (ej: "Nuevo", "Hot", "Disponible")
//    image    → ruta de la imagen dentro de /images/ (ej: "images/poke-scarlet.jpg")
//             → Si no tenés imagen, dejalo como "" y se mostrará un placeholder
//    desc     → descripción corta del producto
//    detail   → descripción larga (se muestra en el modal al hacer clic)
// ============================================================

const PRODUCTS = [

  // ─── POKÉMON ───────────────────────────────────────────────
  {
    id: 1,
    name: "Booster Box Scarlet & Violet",
    category: "pokemon",
    tag: "Hot",
    image: "images/poke-scarlet.jpg",
    desc: "36 sobres del set Escarlata y Violeta. Buscá tus cartas ex favoritas.",
    detail: "La Booster Box de Escarlata y Violeta trae 36 sobres del set base con cartas ex, holográficas y ultra raras. Ideal para armar colección o para draft con amigos. Incluye posibilidad de encontrar cartas full art e ilustraciones especiales."
  },
  {
    id: 2,
    name: "Elite Trainer Box Pokémon",
    category: "pokemon",
    tag: "Disponible",
    image: "images/poke-etb.jpg",
    desc: "9 sobres, dados, separadores y accesorios en una sola caja.",
    detail: "El Elite Trainer Box es el pack definitivo para jugadores y coleccionistas. Incluye 9 sobres de expansión, dados de vida, marcadores de condición, separadores de cartas y funda protectora. Perfecto como regalo o para comenzar a coleccionar."
  },
  {
    id: 3,
    name: "Carta Charizard ex (Full Art)",
    category: "pokemon",
    tag: "Especial",
    image: "images/poke-charizard.jpg",
    desc: "Charizard ex ilustración completa. Una de las cartas más buscadas.",
    detail: "El icónico Charizard en su versión ex con ilustración full art. Una de las cartas más deseadas por coleccionistas de todo el mundo. Viene en perfecto estado, guardada con sleeve de alta calidad."
  },

  // ─── ONE PIECE ──────────────────────────────────────────────
  {
    id: 4,
    name: "Booster Box One Piece OP-09",
    category: "onepiece",
    tag: "Nuevo",
    image: "images/op-boosterbox.jpg",
    desc: "24 sobres del último set de One Piece TCG. Personajes del arco Egghead.",
    detail: "El set OP-09 trae cartas de los arcos más recientes del manga/anime, con personajes como Vegapunk, las Satellites y más. 24 sobres por caja, cada uno con 12 cartas. Buscá las cartas Secret Rare y los líderes alternate art."
  },
  {
    id: 5,
    name: "Starter Deck Luffy",
    category: "onepiece",
    tag: "Disponible",
    image: "images/op-luffy-deck.jpg",
    desc: "Mazo prearmado listo para jugar con el Capitán del Sombrero de Paja.",
    detail: "El Starter Deck de Luffy incluye un mazo de 51 cartas completamente funcional para empezar a jugar de inmediato. Incluye guía de reglas, ficha de daño y token. Ideal para principiantes o para los fans de la tripulación Mugiwara."
  },

  // ─── LORCANA ───────────────────────────────────────────────
  {
    id: 6,
    name: "Lorcana Booster Box Ursula's Return",
    category: "lorcana",
    tag: "Hot",
    image: "images/lorcana-ursula.jpg",
    desc: "24 sobres del set El Regreso de Úrsula con personajes Disney.",
    detail: "El cuarto set de Disney Lorcana presenta el regreso de Úrsula y decenas de personajes del universo Disney con ilustraciones únicas estilo tinta y acuarela. 24 sobres, cada uno con 12 cartas. Buscá las Enchanted Rares."
  },
  {
    id: 7,
    name: "Lorcana Starter Deck",
    category: "lorcana",
    tag: "Disponible",
    image: "images/lorcana-starter.jpg",
    desc: "Mazo de inicio oficial para aprender a jugar Lorcana.",
    detail: "El Starter Deck de Lorcana incluye 60 cartas preseleccionadas, guía de reglas en español y token de willpower. Perfecto para que toda la familia empiece a jugar al TCG de Disney. Hay distintos personajes disponibles."
  },

  // ─── MAGIC ─────────────────────────────────────────────────
  {
    id: 8,
    name: "Draft Booster Box Magic",
    category: "magic",
    tag: "Disponible",
    image: "images/magic-draft.jpg",
    desc: "36 sobres draft del último set. Armá tu mazo y competí.",
    detail: "La Draft Booster Box trae 36 sobres pensados para el formato draft de Magic: The Gathering. Cada sobre tiene 15 cartas con al menos 1 rara o mítica. Ideal para noches de draft o para ampliar tu colección con el set más reciente."
  },
  {
    id: 9,
    name: "Commander Precon",
    category: "magic",
    tag: "Nuevo",
    image: "images/magic-commander.jpg",
    desc: "Mazo Commander listo para jugar. 100 cartas, comandante incluido.",
    detail: "Los mazos Commander preconstruidos son la forma más fácil de entrar al formato más popular de Magic. Incluyen 100 cartas únicas, un comandante legendario y tokens. Listo para la mesa desde la primera partida."
  },

  // ─── FIGURAS ───────────────────────────────────────────────
  {
    id: 10,
    name: "Figura Pikachu Nendoroid",
    category: "figuras",
    tag: "Colección",
    image: "images/fig-pikachu.jpg",
    desc: "Figura articulada de Pikachu con accesorios intercambiables.",
    detail: "Figura oficial de Pikachu en formato Nendoroid con partes intercambiables y varios accesorios. Articulación completa para múltiples poses. Viene en caja de coleccionista con ventana exhibidora. Producto 100% original."
  },
  {
    id: 11,
    name: "Figura Monkey D. Luffy",
    category: "figuras",
    tag: "Colección",
    image: "images/fig-luffy.jpg",
    desc: "Figura de acción de Luffy con detalle premium. Gear 5 disponible.",
    detail: "Figura de Monkey D. Luffy con nivel de detalle premium. Incluye múltiples brazos intercambiables y efectos de goma. Escala 1:10, aproximadamente 20cm de alto. Base decorativa incluida. Ideal para fans de One Piece."
  },

  // ─── JUEGOS DE MESA ────────────────────────────────────────
  {
    id: 12,
    name: "Catan (Edición Estándar)",
    category: "juegos",
    tag: "Clásico",
    image: "images/mesa-catan.jpg",
    desc: "El juego de estrategia más popular del mundo. De 3 a 4 jugadores.",
    detail: "Colonizadores de Catán es el juego de mesa de estrategia más vendido del mundo. Comerciá recursos, construí caminos y ciudades, y lograste ser el primer jugador en llegar a 10 puntos de victoria. Para 3-4 jugadores, partidas de 60-90 minutos."
  },
  {
    id: 13,
    name: "Dixit",
    category: "juegos",
    tag: "Familiar",
    image: "images/mesa-dixit.jpg",
    desc: "Juego creativo de narrativa con ilustraciones surrealistas. Toda la familia.",
    detail: "Dixit es un juego de narración y asociación libre con cartas de ilustraciones surrealistas y poéticas. Uno de los jugadores da una pista, los demás eligen su carta más afín, y hay que adivinar cuál es la original. Para 3-6 jugadores de todas las edades."
  }

];
