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
    name: "Scarlet & Violet: Stellar Crown",
    category: "pokemon",
    image: "images/poke-scarlet.png",
    desc: "36 sobres de Stellar Crown con cartas ex y pulls increíbles.",
    detail: "La Booster Box de Pokémon TCG Scarlet & Violet: Stellar Crown incluye 36 sobres oficiales del set. Encontrá cartas ex, holográficas, ilustraciones especiales y nuevas mecánicas. Ideal para coleccionistas, jugadores competitivos y aperturas."
  },
  {
    id: 2,
    name: "Sword & Shield: Silver Tempest",
    category: "pokemon",
    image: "images/poke-etb.png",
    desc: "9 sobres, dados, separadores y accesorios en una sola caja.",
    detail: "El Elite Trainer Box de Silver Tempest incluye 9 sobres de expansión, fundas premium, dados, marcadores de condición, separadores y accesorios oficiales de Pokémon TCG. Ideal para jugadores, coleccionistas y aperturas."
  },
  {
    id: 3,
    name: "Charizard Ex Super Premium Collection",
    category: "pokemon",
    image: "images/charizard.png",
    desc: "Colección premium de Charizard ex con figura, promos y sobres.",
    detail: "La Charizard ex Super Premium Collection incluye cartas promocionales exclusivas, figura coleccionable de Charizard, múltiples sobres de Pokémon TCG y contenido premium para jugadores y coleccionistas."
  },

  // ─── ONE PIECE ──────────────────────────────────────────────
  {
    id: 4,
    name: "Booster Box One Piece OP-09",
    category: "onepiece",
    image: "images/op-boosterbox.png",
    desc: "24 sobres del set OP-09: Emperors in the New World.",
    detail: "Booster Box oficial de One Piece Card Game OP-09 con 24 sobres y 12 cartas por pack. Incluye personajes del arco Egghead, nuevas estrategias y cartas muy buscadas por coleccionistas y jugadores."
  },
  {
    id: 5,
    name: "Starter Deck Red Shanks St23",
    category: "onepiece",
    image: "images/op-st23.png",
    desc: "Mazo prearmado listo para jugar con Shanks como líder.",
    detail: "El Starter Deck ST-23 incluye un mazo completo listo para jugar, cartas exclusivas, guía de reglas y accesorios básicos para comenzar en One Piece Card Game. Ideal para nuevos jugadores y fans de Shanks."
  },

  // ─── LORCANA ───────────────────────────────────────────────
  {
    id: 6,
    name: "Lorcana Starter Deck Tomago & Gadget Hackwrench",
    category: "lorcana",
    image: "images/lorcana-azurita.png",
    desc: "24 sobres del set El Regreso de Úrsula con personajes Disney.",
    detail: "El cuarto set de Disney Lorcana presenta el regreso de Úrsula y decenas de personajes del universo Disney con ilustraciones únicas estilo tinta y acuarela. 24 sobres, cada uno con 12 cartas. Buscá las Enchanted Rares."
  },
  {
    id: 7,
    name: "Lorcana Ursula's Return Starter Deck",
    category: "lorcana",
    image: "images/lorcana-ursula.png",
    desc: "Starter Deck oficial para comenzar en Disney Lorcana.",
    detail: "Incluye un mazo listo para jugar de 60 cartas, booster pack, fichas y guía de reglas. Ideal para nuevos jugadores y fans de Disney Lorcana."
  },

  // ─── MAGIC ─────────────────────────────────────────────────
  {
    id: 8,
    name: "Final Fantasy Play Booster Box",
    category: "magic",
    image: "images/final.png",
    desc: "36 sobres de Magic x Final Fantasy con cartas exclusivas.",
    detail: "Play Booster Box oficial de Magic: The Gathering x Final Fantasy. Incluye sobres con cartas inspiradas en personajes, invocaciones y momentos icónicos de la saga Final Fantasy. Ideal para jugar, coleccionar y abrir sobres."
  },
  {
    id: 9,
    name: "Commander Deck Lorwyn Eclipsed Blight Curse",
    category: "magic",
    image: "images/commander.png",
    desc: "Commander Deck listo para jugar con estrategia de drenaje y control.",
    detail: "Deck oficial de Magic: The Gathering Commander con 100 cartas, comandante foil y mecánicas centradas en -1/-1 y drain. Ideal para jugadores de Commander que buscan partidas estratégicas y combos potentes."
  },

  // ─── FIGURAS ───────────────────────────────────────────────
  {
    id: 10,
    name: "Nail Dragon Ball",
    category: "figuras",
    image: "images/nail.png",
    desc: "Figura coleccionable de Nail inspirada en Dragon Ball Z.",
    detail: "Figura detallada de Nail con acabados premium, múltiples puntos de articulación y diseño fiel al anime. Ideal para coleccionistas y fans de Dragon Ball."
  },
  {
    id: 11,
    name: "Figura Monkey D. Luffy",
    category: "figuras",
    image: "images/monkey.png",
    desc: "Figura articulada de Luffy con acabado premium.",
    detail: "Coleccionable inspirado en One Piece con múltiples puntos de articulación, gran nivel de detalle y diseño fiel al anime. Ideal para exhibición y fans de Monkey D. Luffy."
  },

  // ─── JUEGOS DE MESA ────────────────────────────────────────
  {
    id: 12,
    name: "¡Basta!",
    category: "juegos",
    image: "images/basta.png",
    desc: "El clásico juego de palabras rápido y divertido.",
    detail: "¡Basta! es un juego de mesa ideal para reuniones y partidas en familia o con amigos. Poné a prueba tu rapidez mental completando categorías antes que los demás."
  },
  {
    id: 13,
    name: "Dixit",
    category: "juegos",
    image: "images/dixit.png",
    desc: "Juego creativo de imaginación y narrativa para toda la familia.",
    detail: "Dixit es un juego de mesa basado en la imaginación, la interpretación y las historias. Sus cartas con ilustraciones surrealistas crean partidas únicas ideales para jugar con amigos y familia."
  }

];
