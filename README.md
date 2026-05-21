# Omega Store TCG — Sitio Web

Sitio informativo estático, listo para subir a Vercel.

---

## 🚀 Cómo subir a Vercel con tu dominio

1. Creá una cuenta en [vercel.com](https://vercel.com) (gratis)
2. Instalá Vercel CLI: `npm install -g vercel`
3. En la carpeta del proyecto: `vercel`
4. Seguí los pasos del wizard
5. En el dashboard de Vercel → Settings → Domains → agregá tu dominio

---

## 📝 Cómo editar contenido

### Agregar o modificar productos
Abrí `products.js` y editá el array `PRODUCTS`.

Cada producto tiene estos campos:
```js
{
  id: 1,                    // número único (no repetir)
  name: "Nombre del producto",
  category: "pokemon",      // pokemon | onepiece | lorcana | magic | figuras | juegos
  tag: "Nuevo",             // texto del badge: "Nuevo", "Hot", "Disponible", "Colección", etc.
  image: "images/foto.jpg", // ruta de la imagen (dejá "" si no tenés)
  desc: "Descripción corta (aparece en la card)",
  detail: "Descripción larga (aparece en el modal al hacer clic)"
}
```

### Agregar imágenes
Copiá tus fotos a la carpeta `/images/` y referencialas en `products.js`.
Formato recomendado: JPG o WebP, tamaño ~600x800px para cartas, ~800x600px para cajas.

### Actualizar dirección y horarios
En `index.html`, buscá la sección `id="contacto"` y editá:
- `id="contactDireccion"` → tu dirección real
- `id="contactHorarios"` → tus horarios reales

---

## 🗂 Estructura de archivos

```
omega-store/
├── index.html      ← estructura de la página
├── style.css       ← todos los estilos
├── products.js     ← datos de los productos (editá acá)
├── main.js         ← lógica (filtros, modal, animaciones)
├── vercel.json     ← config de Vercel
└── images/         ← acá van tus fotos de productos
```

---

## 🎨 Paleta de colores

| Variable | Color | Uso |
|---|---|---|
| `--bg` | #080808 | Fondo principal |
| `--gold` | #C9A84C | Acento dorado |
| `--text` | #f0f0f0 | Texto principal |
| `--text-2` | #888 | Texto secundario |
