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
    name: "Scarlet & Violet: Surging Sparks Booster Bundle",
    category: "pokemon",
    image: "images/sparks.png",
    desc: "6 sobres de Surging Sparks para ampliar tu colección.",
    detail: "Booster Bundle oficial de Pokémon TCG Scarlet & Violet: Surging Sparks. Incluye 6 sobres de expansión con la posibilidad de encontrar cartas ex, ilustraciones especiales y las cartas más buscadas del set."
  },
  {
    id: 3,
    name: "Silver Tempest 3-Pack Blister Togetic",
    category: "pokemon",
    image: "images/silver.png",
    desc: "3 sobres de Silver Tempest con carta promo de Togetic.",
    detail: "Blister oficial de Pokémon TCG Sword & Shield: Silver Tempest. Incluye 3 sobres de expansión, una carta promocional de Togetic y una moneda coleccionable exclusiva."
  },
  {
    id: 4,
    name: "Mega Evolution: Pitch Black Booster Bundle",
    category: "pokemon",
    image: "images/pitch.png",
    desc: "Booster Bundle con 6 sobres de Mega Evolution: Pitch Black.",
    detail: "Booster Bundle oficial de Pokémon TCG Mega Evolution: Pitch Black. Incluye 6 sobres de expansión con la posibilidad de conseguir cartas ex, ilustraciones especiales y las cartas más buscadas de la colección. Ideal para coleccionistas y jugadores."
  },
  {
    id: 5,
    name: "Scarlet & Violet: Journey Together Elite Trainer Box",
    category: "pokemon",
    image: "images/journey.png",
    desc: "Elite Trainer Box con 9 sobres y accesorios premium.",
    detail: "La Elite Trainer Box de Pokémon TCG: Scarlet & Violet – Journey Together incluye 9 sobres de expansión, una carta promo exclusiva, fundas para cartas, dados, contadores de daño, separadores, cartas de Energía y una guía del jugador. Ideal para jugadores y coleccionistas."
  },
  {
    id: 6,
    name: "Scarlet & Violet: Destined Rivals Elite Trainer Box",
    category: "pokemon",
    image: "images/destined.png",
    desc: "Elite Trainer Box con 9 sobres y accesorios exclusivos.",
    detail: "La Elite Trainer Box de Pokémon TCG: Scarlet & Violet – Destined Rivals incluye 9 sobres de expansión, una carta promocional exclusiva, fundas premium, dados, contadores de daño, separadores, cartas de Energía y una guía del jugador. Ideal para jugadores y coleccionistas."
  },
  {
    id: 7,
    name: "Scarlet & Violet: Black Bolt Elite Trainer Box",
    category: "pokemon",
    image: "images/black.png",
    desc: "Elite Trainer Box con 9 sobres y accesorios exclusivos.",
    detail: "La Elite Trainer Box de Pokémon TCG: Scarlet & Violet – Black Bolt incluye 9 sobres de expansión, una carta promocional exclusiva, fundas para cartas, dados, contadores de daño, separadores, cartas de Energía y una guía del jugador. Ideal para jugadores y coleccionistas."
  },
  {
    id: 8,
    name: "Scarlet & Violet: Prismatic Evolutions Booster Bundle",
    category: "pokemon",
    image: "images/prismatic.png",
    desc: "Booster Bundle con 6 sobres de Prismatic Evolutions.",
    detail: "Booster Bundle oficial de Pokémon TCG: Scarlet & Violet – Prismatic Evolutions. Incluye 6 sobres de expansión con la posibilidad de conseguir cartas Pokémon ex, ilustraciones especiales y las codiciadas evoluciones de Eevee. Ideal para ampliar tu colección o mejorar tus mazos."
  },
  {
    id: 9,
    name: "Mega Evolution: Chaos Rising Booster Bundle",
    category: "pokemon",
    image: "images/chaos.png",
    desc: "Booster Bundle con 6 sobres de Mega Evolution: Chaos Rising.",
    detail: "Booster Bundle oficial de Pokémon TCG Mega Evolution: Chaos Rising. Incluye 6 sobres de expansión con la posibilidad de conseguir cartas ex, ilustraciones especiales y las cartas más buscadas del set. Ideal para coleccionistas y jugadores."
  },
  {
    id: 10,
    name: "First Partner Illustration Collection Series 2",
    category: "pokemon",
    image: "images/first2.png",
    desc: "Colección especial con carta ilustrada y sobres de expansión.",
    detail: "First Partner Illustration Collection Series 2 de Pokémon TCG. Incluye una carta promocional de gran tamaño, varios sobres de expansión y contenido exclusivo para coleccionistas y fans de Pokémon."
  },
  {
    id: 11,
    name: "Victini Illustration Collection",
    category: "pokemon",
    image: "images/victini.png",
    desc: "Colección especial con Victini y sobres de Black Bolt & White Flare.",
    detail: "Victini Illustration Collection de Pokémon TCG Scarlet & Violet: Black Bolt & White Flare. Incluye cartas promocionales de Victini, una ilustración exclusiva, sobres de expansión y contenido ideal para coleccionistas y jugadores."
  },
  {
    id: 12,
    name: "Hop's Zacian ex Box",
    category: "pokemon",
    image: "images/hop.png",
    desc: "Caja especial con Zacian ex, promos exclusivas y sobres.",
    detail: "La Hop's Zacian ex Box incluye la carta promocional de Zacian ex, cartas adicionales inspiradas en Hop y varios sobres de Pokémon TCG. Una excelente opción para coleccionistas y jugadores que buscan contenido exclusivo."
  },
  {
    id: 13,
    name: "Sword & Shield: Silver Tempest",
    category: "pokemon",
    image: "images/poke-etb.png",
    desc: "9 sobres, dados, separadores y accesorios en una sola caja.",
    detail: "El Elite Trainer Box de Silver Tempest incluye 9 sobres de expansión, fundas premium, dados, marcadores de condición, separadores y accesorios oficiales de Pokémon TCG. Ideal para jugadores, coleccionistas y aperturas."
  },
  {
    id: 14,
    name: "Charizard Ex Super Premium Collection",
    category: "pokemon",
    image: "images/charizard.png",
    desc: "Colección premium de Charizard ex con figura, promos y sobres.",
    detail: "La Charizard ex Super Premium Collection incluye cartas promocionales exclusivas, figura coleccionable de Charizard, múltiples sobres de Pokémon TCG y contenido premium para jugadores y coleccionistas."
  },

  // ─── ONE PIECE ──────────────────────────────────────────────
  {
    id: 15,
    name: "Booster Box One Piece OP-09",
    category: "onepiece",
    image: "images/op-boosterbox.png",
    desc: "24 sobres del set OP-09: Emperors in the New World.",
    detail: "Booster Box oficial de One Piece Card Game OP-09 con 24 sobres y 12 cartas por pack. Incluye personajes del arco Egghead, nuevas estrategias y cartas muy buscadas por coleccionistas y jugadores."
  },
  {
    id: 16,
    name: "The Best Vol. 2 Booster Box PRB-02",
    category: "onepiece",
    image: "images/best.png",
    desc: "Booster Box premium con reimpresiones y cartas especiales.",
    detail: "The Best Vol. 2 (PRB-02) reúne algunas de las cartas más populares de One Piece Card Game, incluyendo reimpresiones muy buscadas, ilustraciones especiales y cartas premium para coleccionistas y jugadores."
  },
  {
    id: 17,
    name: "Two Legends Booster Box OP-08",
    category: "onepiece",
    image: "images/two.png",
    desc: "24 sobres del set Two Legends con nuevos líderes y personajes.",
    detail: "Booster Box oficial de One Piece Card Game OP-08: Two Legends. Incluye 24 sobres con 12 cartas por pack, nuevas estrategias, líderes y personajes icónicos de la serie. Ideal para coleccionistas y jugadores competitivos."
  },
  {
    id: 18,
    name: "Royal Blood Booster Box OP-10",
    category: "onepiece",
    image: "images/royal.png",
    desc: "24 sobres del set Royal Blood con nuevas cartas y estrategias.",
    detail: "Booster Box oficial de One Piece Card Game OP-10: Royal Blood. Incluye 24 sobres con 12 cartas por pack, nuevos líderes, personajes icónicos y cartas exclusivas para coleccionistas y jugadores competitivos."
  },
  {
    id: 19,
    name: "Starter Deck Red Shanks St23",
    category: "onepiece",
    image: "images/st14.png",
    desc: "Mazo prearmado listo para jugar con Shanks como líder.",
    detail: "El Starter Deck ST-23 incluye un mazo completo listo para jugar, cartas exclusivas, guía de reglas y accesorios básicos para comenzar en One Piece Card Game. Ideal para nuevos jugadores y fans de Shanks."
  },
  {
    id: 20,
    name: "Starter Deck Red Shanks St23",
    category: "onepiece",
    image: "images/op-st23.png",
    desc: "Mazo prearmado listo para jugar con Shanks como líder.",
    detail: "El Starter Deck ST-23 incluye un mazo completo listo para jugar, cartas exclusivas, guía de reglas y accesorios básicos para comenzar en One Piece Card Game. Ideal para nuevos jugadores y fans de Shanks."
  },
  {
    id: 21,
    name: "Starter Deck Ace & Newgate ST-22",
    category: "onepiece",
    image: "images/ace.png",
    desc: "Mazo prearmado listo para jugar con Ace y Newgate.",
    detail: "Starter Deck oficial ST-22 de One Piece Card Game protagonizado por Portgas D. Ace y Edward Newgate (Barbablanca). Incluye un mazo preconstruido de 51 cartas, 10 cartas DON!!, guía de reglas y todos los elementos necesarios para comenzar a jugar de inmediato."
  },
  {
    id: 22,
    name: "Starter Deck Monkey D. Luffy ST-26",
    category: "onepiece",
    image: "images/st26.png",
    desc: "Mazo prearmado listo para jugar con Monkey D. Luffy.",
    detail: "Starter Deck oficial ST-26 de One Piece Card Game protagonizado por Monkey D. Luffy. Incluye un mazo preconstruido de 51 cartas, 10 cartas DON!!, guía de reglas y todos los elementos necesarios para comenzar a jugar de inmediato. Ideal para nuevos jugadores y fans de One Piece."
  },

  // ─── LORCANA ───────────────────────────────────────────────
  {
    id: 23,
    name: "Lorcana Starter Deck Tomago & Gadget Hackwrench",
    category: "lorcana",
    image: "images/lorcana-azurita.png",
    desc: "24 sobres del set El Regreso de Úrsula con personajes Disney.",
    detail: "El cuarto set de Disney Lorcana presenta el regreso de Úrsula y decenas de personajes del universo Disney con ilustraciones únicas estilo tinta y acuarela. 24 sobres, cada uno con 12 cartas. Buscá las Enchanted Rares."
  },
  {
    id: 24,
    name: "Lorcana Ursula's Return Starter Deck",
    category: "lorcana",
    image: "images/lorcana-ursula.png",
    desc: "Starter Deck oficial para comenzar en Disney Lorcana.",
    detail: "Incluye un mazo listo para jugar de 60 cartas, booster pack, fichas y guía de reglas. Ideal para nuevos jugadores y fans de Disney Lorcana."
  },
  {
    id: 25,
    name: "Lorcana Rise of the Floodborn Starter Deck",
    category: "lorcana",
    image: "images/rise.png",
    desc: "Starter Deck oficial de Rise of the Floodborn.",
    detail: "Mazo preconstruido de Disney Lorcana: Rise of the Floodborn. Incluye un deck listo para jugar de 60 cartas, booster pack, fichas y guía de reglas. Ideal para comenzar a jugar o ampliar tu colección."
  },
  {
    id: 26,
    name: "Lorcana Into the Inklands Starter Deck",
    category: "lorcana",
    image: "images/peter.png",
    desc: "Starter Deck oficial de Into the Inklands.",
    detail: "Mazo preconstruido de Disney Lorcana: Into the Inklands. Incluye 60 cartas listas para jugar, 1 booster pack, fichas y guía de reglas. Una excelente opción para comenzar a jugar o ampliar tu colección."
  },
  {
    id: 27,
    name: "Lorcana Into the Inklands Starter Deck",
    category: "lorcana",
    image: "images/pato.png",
    desc: "Starter Deck oficial de Into the Inklands.",
    detail: "Mazo preconstruido de Disney Lorcana: Into the Inklands. Incluye 60 cartas listas para jugar, 1 booster pack, fichas y guía de reglas. Ideal para comenzar a explorar el mundo de Lorcana o expandir tu colección."
  },

  // ─── MAGIC ─────────────────────────────────────────────────
  {
    id: 28,
    name: "Final Fantasy Play Booster Box",
    category: "magic",
    image: "images/final.png",
    desc: "36 sobres de Magic x Final Fantasy con cartas exclusivas.",
    detail: "Play Booster Box oficial de Magic: The Gathering x Final Fantasy. Incluye sobres con cartas inspiradas en personajes, invocaciones y momentos icónicos de la saga Final Fantasy. Ideal para jugar, coleccionar y abrir sobres."
  },
  {
    id: 29,
    name: "Commander Deck Lorwyn Eclipsed Blight Curse",
    category: "magic",
    image: "images/commander.png",
    desc: "Commander Deck listo para jugar con estrategia de drenaje y control.",
    detail: "Deck oficial de Magic: The Gathering Commander con 100 cartas, comandante foil y mecánicas centradas en -1/-1 y drain. Ideal para jugadores de Commander que buscan partidas estratégicas y combos potentes."
  },
  {
    id: 30,
    name: "The Lord of the Rings: Tales of Middle-earth Jumpstart Booster Box",
    category: "magic",
    image: "images/lord.png",
    desc: "18 Jumpstart Boosters de El Señor de los Anillos para mezclar y jugar.",
    detail: "Jumpstart Booster Box oficial de Magic: The Gathering – The Lord of the Rings: Tales of Middle-earth. Incluye 18 sobres Jumpstart con temas prediseñados. Mezclá dos sobres para crear un mazo de 40 cartas y empezá a jugar de inmediato. Ideal para jugadores nuevos y fanáticos de El Señor de los Anillos."
  },
  {
    id: 31,
    name: "Tarkir: Dragonstorm Commander Deck – Abzan Armor",
    category: "magic",
    image: "images/abzan.png",
    desc: "Mazo Commander listo para jugar de Tarkir: Dragonstorm.",
    detail: "Commander Deck oficial de Magic: The Gathering – Tarkir: Dragonstorm. El mazo Abzan Armor incluye 100 cartas listas para jugar, un comandante foil, fichas, caja guardamazo y nuevas cartas exclusivas. Ideal para comenzar o ampliar tu colección de Commander."
  },
  {
    id: 32,
    name: "Commander Deck Quandrix Unlimited",
    category: "magic",
    image: "images/quandrix.png",
    desc: "Mazo Commander listo para jugar de Strixhaven.",
    detail: "Commander Deck oficial de Magic: The Gathering - Strixhaven. Quandrix Unlimited incluye un mazo de 100 cartas listo para jugar, nuevas cartas exclusivas y una estrategia basada en crecimiento, contadores y grandes criaturas."
  },
  {
    id: 33,
    name: "Lorwyn Eclipsed Bundle",
    category: "magic",
    image: "images/lorwyn.png",
    desc: "Bundle con 9 Play Boosters y accesorios exclusivos.",
    detail: "Bundle oficial de Magic: The Gathering – Lorwyn Eclipsed. Incluye 9 Play Boosters, cartas de tierra básicas y foil, dado Spindown exclusivo, caja de almacenamiento y otros accesorios. Ideal para coleccionistas y jugadores que quieren comenzar su colección del set."
  },
  {
    id: 34,
    name: "Avatar: The Last Airbender Commander's Bundle",
    category: "magic",
    image: "images/avatar.png",
    desc: "Bundle Commander con mazos y contenido exclusivo de Avatar.",
    detail: "Commander's Bundle oficial de Magic: The Gathering – Avatar: The Last Airbender. Incluye contenido exclusivo de la colección inspirada en Avatar, con productos Commander, accesorios premium y artículos para coleccionistas. Ideal para fans de la saga y jugadores de Commander."
  },
  {
    id: 35,
    name: "Strixhaven: School of Mages Collector Booster Box",
    category: "magic",
    image: "images/marron.png",
    desc: "12 Collector Boosters con cartas premium y tratamientos exclusivos.",
    detail: "Collector Booster Box oficial de Magic: The Gathering – Strixhaven: School of Mages. Incluye 12 sobres Collector repletos de cartas foil, arte extendido, bordes alternativos y versiones especiales. Ideal para coleccionistas y jugadores que buscan las cartas más exclusivas del set."
  },
  {
    id: 36,
    name: "Tarkir: Dragonstorm Collector Booster",
    category: "magic",
    image: "images/tarkir.png",
    desc: "Sobres Collector con cartas premium de Tarkir: Dragonstorm.",
    detail: "Collector Boosters de Magic: The Gathering - Tarkir: Dragonstorm. Cada sobre incluye cartas foil, tratamientos especiales, arte extendido y algunas de las versiones más exclusivas del set. Ideal para coleccionistas y jugadores que buscan cartas premium."
  },
  {
    id: 37,
    name: "Marvel's Spider-Man Play Booster Box",
    category: "magic",
    image: "images/spider.png",
    desc: "Play Booster Box de Magic x Marvel's Spider-Man.",
    detail: "Caja oficial de Play Boosters de Magic: The Gathering - Marvel's Spider-Man. Descubrí cartas inspiradas en Spider-Man, sus aliados y villanos más icónicos. Ideal para jugar Draft, ampliar tu colección y encontrar cartas exclusivas del universo Marvel."
  },

  // ─── Yugioh ─────────────────────────────────────────────────
  {
    id: 38,
    name: "Yu-Gi-Oh! Duelist's Advance Booster Box",
    category: "yugioh",
    image: "images/duelist.png",
    desc: "24 sobres del set Duelist's Advance con nuevas cartas y estrategias.",
    detail: "Booster Box oficial de Yu-Gi-Oh! TCG Duelist's Advance. Incluye 24 sobres con 9 cartas por paquete, incorporando nuevas cartas, poderosos soportes para distintos arquetipos y cartas raras para coleccionistas y duelistas."
  },
  {
    id: 39,
    name: "Yu-Gi-Oh! Maze of the Master Booster Box",
    category: "yugioh",
    image: "images/maze.png",
    desc: "24 sobres del set Maze of the Master con cartas exclusivas.",
    detail: "Booster Box oficial de Yu-Gi-Oh! TCG Maze of the Master. Incluye 24 sobres con 7 cartas por paquete, nuevas cartas, reimpresiones muy buscadas y poderosos soportes para distintos arquetipos. Ideal para coleccionistas y duelistas."
  },
  {
    id: 40,
    name: "Yu-Gi-Oh! Quarter Century Stampede Booster Box",
    category: "yugioh",
    image: "images/oro.png",
    desc: "24 sobres de Quarter Century Stampede con cartas exclusivas.",
    detail: "Booster Box oficial de Yu-Gi-Oh! TCG Quarter Century Stampede. Incluye 24 sobres con 5 cartas por paquete, reimpresiones icónicas, cartas exclusivas y las codiciadas Quarter Century Secret Rare. Ideal para coleccionistas y duelistas."
  },
  {
    id: 41,
    name: "Yu-Gi-Oh! Legacy of Destruction Booster Box",
    category: "yugioh",
    image: "images/legacy.png",
    desc: "24 sobres del set Legacy of Destruction con nuevas cartas.",
    detail: "Booster Box oficial de Yu-Gi-Oh! TCG Legacy of Destruction. Incluye 24 sobres con 9 cartas por paquete, nuevas estrategias, poderosas cartas para el metajuego y múltiples rarezas para coleccionistas y duelistas competitivos."
  },
  {
    id: 42,
    name: "Yu-Gi-Oh! Battles of Legend: Monster Mayhem Booster Box",
    category: "yugioh",
    image: "images/monster.png",
    desc: "24 sobres de Battles of Legend: Monster Mayhem con cartas exclusivas.",
    detail: "Booster Box oficial de Yu-Gi-Oh! TCG Battles of Legend: Monster Mayhem. Incluye 24 sobres con 5 cartas por paquete, reimpresiones muy buscadas, nuevas versiones foil y cartas exclusivas para coleccionistas y duelistas competitivos."
  },

  // ─── FIGURAS ───────────────────────────────────────────────
  {
    id: 43,
    name: "Nail Dragon Ball",
    category: "figuras",
    image: "images/nail.png",
    desc: "Figura coleccionable de Nail inspirada en Dragon Ball Z.",
    detail: "Figura detallada de Nail con acabados premium, múltiples puntos de articulación y diseño fiel al anime. Ideal para coleccionistas y fans de Dragon Ball."
  },
  {
    id: 44,
    name: "Figura Monkey D. Luffy",
    category: "figuras",
    image: "images/monkey.png",
    desc: "Figura articulada de Luffy con acabado premium.",
    detail: "Coleccionable inspirado en One Piece con múltiples puntos de articulación, gran nivel de detalle y diseño fiel al anime. Ideal para exhibición y fans de Monkey D. Luffy."
  },
  {
    id: 45,
    name: "Figura Son Goku",
    category: "figuras",
    image: "images/goku.png",
    desc: "Figura articulada de Goku con acabado premium.",
    detail: "Coleccionable inspirado en Dragon Ball con múltiples puntos de articulación, gran nivel de detalle y diseño fiel al anime. Ideal para exhibición y para fans de Son Goku."
  },
  {
    id: 46,
    name: "Figura Portgas D. Ace",
    category: "figuras",
    image: "images/fuego.png",
    desc: "Figura articulada de Ace con efecto de fuego incluido.",
    detail: "Coleccionable inspirado en One Piece con gran nivel de detalle, múltiples puntos de articulación y espectacular efecto de fuego. Ideal para exhibición y para fans de Portgas D. Ace."
  },
  {
    id: 47,
    name: "Figura Roronoa Zoro",
    category: "figuras",
    image: "images/espada.png",
    desc: "Figura coleccionable de Roronoa Zoro con acabado premium.",
    detail: "Figura oficial de Roronoa Zoro de One Piece con gran nivel de detalle y pintura de alta calidad. Diseño fiel al anime, ideal para exhibición y coleccionistas. Perfecta para fans del espadachín de los Sombrero de Paja."
  },
  {
    id: 48,
    name: "Dragon Ball Ichibansho Goku",
    category: "figuras",
    image: "images/gokuazul.png",
    desc: "Figura Ichibansho de Son Goku con acabado premium.",
    detail: "Figura oficial Bandai Spirits Ichibansho de Son Goku. Mide aproximadamente 24 cm de alto y presenta una escultura de gran calidad con detalles y pintura premium. Ideal para exhibición y para coleccionistas de Dragon Ball."
  },

];
