// ─── NAV scroll ────────────────────────────────────────────
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('nav-scrolled', window.scrollY > 40);
});

// ─── Mobile nav toggle ─────────────────────────────────────
const navToggle = document.getElementById('navToggle');
const navMobile = document.getElementById('navMobile');
navToggle.addEventListener('click', () => {
  navMobile.classList.toggle('open');
  navToggle.classList.toggle('active');
});
navMobile.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    navMobile.classList.remove('open');
    navToggle.classList.remove('active');
  });
});

// ─── Smooth scroll ─────────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ─── Category placeholders ─────────────────────────────────
const CAT_COLORS = {
  pokemon: { bg: '#1a2a3a', accent: '#FFD700', icon: '⚡' },
  onepiece: { bg: '#2a1a1a', accent: '#E8443A', icon: '⚓' },
  lorcana: { bg: '#1a1a2e', accent: '#A78BFA', icon: '✨' },
  magic: { bg: '#0f1f1a', accent: '#3FCF8E', icon: '🔮' },
  figuras: { bg: '#1e1e2e', accent: '#F472B6', icon: '🎭' },
  juegos: { bg: '#1a1f2e', accent: '#60A5FA', icon: '🎲' },
};

// ─── Render products ───────────────────────────────────────
const grid = document.getElementById('productsGrid');
let currentFilter = 'all';

function renderProducts(filter) {
  const list = filter === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.category === filter);
  grid.innerHTML = '';

  list.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.style.animationDelay = `${i * 0.06}s`;
    card.innerHTML = `
      <div class="pc-img-wrap" data-cat="${p.category}">
        ${p.image
        ? `<img src="${p.image}" alt="${p.name}" loading="lazy"
               onerror="this.closest('.pc-img-wrap').classList.add('pc-placeholder'); this.remove();" />`
        : ''}
      </div>
      <div class="pc-info">
        <span class="pc-cat">${catLabel(p.category)}</span>
        <h3 class="pc-name">${p.name}</h3>
        <p class="pc-desc">${p.desc}</p>
        <button class="pc-btn" data-id="${p.id}">Ver detalle →</button>
      </div>
    `;
    grid.appendChild(card);
  });

  // Placeholders visual
  grid.querySelectorAll('.pc-img-wrap').forEach(wrap => {
    if (!wrap.querySelector('img') || wrap.classList.contains('pc-placeholder')) {
      wrap.classList.add('pc-placeholder');
    }
  });

  // Card buttons
  grid.querySelectorAll('.pc-btn').forEach(btn => {
    btn.addEventListener('click', () => openModal(parseInt(btn.dataset.id)));
  });

  // Card click
  grid.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', (e) => {
      if (!e.target.classList.contains('pc-btn')) {
        const btn = card.querySelector('.pc-btn');
        if (btn) btn.click();
      }
    });
  });
}

function catLabel(cat) {
  const map = {
    pokemon: 'Pokémon', onepiece: 'One Piece', lorcana: 'Lorcana',
    magic: 'Magic', figuras: 'Figuras', yugioh: 'Yu-Gi-Oh!',
  };
  return map[cat] || cat;
}

// ─── Filters ───────────────────────────────────────────────
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilter = btn.dataset.filter;
    renderProducts(currentFilter);
  });
});

// ─── Modal ─────────────────────────────────────────────────
const overlay = document.getElementById('modalOverlay');
const modal = document.getElementById('modal');

function openModal(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;

  document.getElementById('modalName').textContent = p.name;
  document.getElementById('modalDesc').textContent = p.detail;
  document.getElementById('modalCat').textContent = catLabel(p.category);

  const img = document.getElementById('modalImg');
  if (p.image) {
    img.src = p.image;
    img.alt = p.name;
    img.style.display = 'block';
    img.onerror = () => {
      img.style.display = 'none';
      img.closest('.modal-img-wrap').classList.add('modal-img-placeholder');
    };
  } else {
    img.style.display = 'none';
    img.closest('.modal-img-wrap').classList.add('modal-img-placeholder');
  }

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  overlay.classList.remove('open');
  document.body.style.overflow = '';
  document.getElementById('modal').querySelector('.modal-img-wrap').classList.remove('modal-img-placeholder');
}

document.getElementById('modalClose').addEventListener('click', closeModal);
overlay.addEventListener('click', (e) => { if (e.target === overlay) closeModal(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

// ─── Init ──────────────────────────────────────────────────
renderProducts('all');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.cat-card, .contact-card, .about-text, .about-visual').forEach(el => {
  observer.observe(el);
});

// ─── Category cards → filter + scroll ─────────────────────
document.querySelectorAll('.cat-card[data-filter]').forEach(card => {
  card.addEventListener('click', () => {
    const filter = card.dataset.filter;

    // Activate the matching filter button
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    const matchingBtn = document.querySelector(`.filter-btn[data-filter="${filter}"]`);
    if (matchingBtn) matchingBtn.classList.add('active');

    // Re-render products with that filter
    currentFilter = filter;
    renderProducts(filter);

    // Scroll to products section
    document.getElementById('productos').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});


