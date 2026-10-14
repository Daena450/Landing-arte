/* ---------- Photo Data ---------- */ 
const photos = [
  { src: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80', title: 'Lago Alpino',        category: 'naturaleza' },
  { src:'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=800&q=80 ', title: 'Retrato Íntimo',     category: 'retrato'    },
  { src: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80', title: 'Ciudad al Atardecer',category: 'ciudad'     },
  { src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80', title: 'Bosque en Niebla',   category: 'naturaleza' },
  { src: 'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?w=800&q=80', title: 'Viajero Solitario',  category: 'viaje'      },
  { src: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=80', title: 'Calle de Tokio',     category: 'ciudad'     },
  { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80', title: 'Desierto Rojo',       category: 'viaje'      },
  { src: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=800&q=80', title: 'Luz de Ventana',    category: 'retrato'    },
  { src: 'https://images.unsplash.com/photo-1497449493050-aad1e7cad165?w=800&q=80', title: 'Montaña Nevada',    category: 'naturaleza' },
  { src: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80', title: 'Calles Antiguas',   category: 'ciudad'     },
  { src: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80', title: 'Camino al Horizonte',category: 'viaje'     },
  { src: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80', title: 'Mirada Serena',     category: 'retrato'    },
  {src: 'https://images.unsplash.com/photo-1773496396371-13181d0ae7e9?q=80&w=1750', title: 'Mirada Calida', category: 'retrato' },
  {src: 'https://images.unsplash.com/photo-1774333406492-2806c117fe59?q=80&w=774', title:'Tranquilidad en la playa', category:'retrato' },
  {src: 'https://images.unsplash.com/photo-1762907559039-1373f553c987?q=80&w=928', title: 'Calidad de la ciudad', category:'retrato'},
  {src: 'https://images.unsplash.com/photo-1756244834590-b1a32e94df40?q=80&w=774', title: 'Hermoso amanecer', category: 'retrato'},
  {src: 'https://images.unsplash.com/photo-1776221241820-6cbbb6e7cb43?q=80&w=774', title: 'Montañas calido', category: 'naturaleza'},
  {src: 'https://images.unsplash.com/photo-1776445602573-0cc8680b4d0a?q=80&w=174', title: 'Girasoles', category: 'naturaleza'},
  {src: 'https://images.unsplash.com/photo-1667230149533-00c1428e682e?q=80&w=774', title: 'Flores Amarillas', category: 'naturaleza'},
  {src: 'https://images.unsplash.com/photo-1775628038477-8093ca346d00?q=80&w=774', title: 'Anochecer calido', category: 'naturaleza'},
  {src: 'https://images.unsplash.com/photo-1773820681050-0a836221436a?q=80&w=774', title: 'Hermoso atardecer con olas', category: 'naturaleza'},
  {src: 'https://images.unsplash.com/photo-1773802545353-a37a300323f1?q=80&w=774', title: 'Loro en el bosque', category: 'naturaleza'},
  {src:'https://images.unsplash.com/photo-1772290226221-2cd48ca1f816?q=80&w=774', title: 'Focas', category: 'naturaleza'},
  {src: 'https://images.unsplash.com/photo-1769737551334-5c811f9d1836?q=80&w=1180', title: 'Mariposa', category: 'naturaleza'},
  {src:'https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=928', title:'Noche en la ciudad', category:'ciudad'},
  {src:'https://images.unsplash.com/photo-1573455494057-12684d151bf4?q=80&w=724,', title:'Noche en japon', category:'ciudad'},
  {src:'https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?q=80&w=1072', title: 'Atardecer en japon', category:'ciudad'},
  {src:'https://images.unsplash.com/photo-1597462532742-81f57fc4182c?q=80&w=772', title:'El metro', category:'ciudad'},
  {src:'https://images.unsplash.com/photo-1723142481972-da7b9a628f26?q=80&w=1738', title:'paris calido', category:'ciudad'},
  {src:'https://images.unsplash.com/photo-1573097637683-58e6462d2902?q=80&w=774', title: 'Carretera', category:'viaje'},
  {src:'https://images.unsplash.com/photo-1439066290691-510066268af5?q=80&w=1546', title:'Lago Calido', category:'viaje'},
  {src:'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=774', title:'Desierto', category:'viaje'},
  {src:'https://images.unsplash.com/photo-1566999573217-25c859ec1450?q=80&w=1740', title:'Tranquilidad', category:'viaje'},
  {src:'https://images.unsplash.com/photo-1601701748979-be3215445510?q=80&w=776', title:'Mirada en el bosque', category:'viaje'},
  {src:'https://images.unsplash.com/photo-1661364119336-0b0cc8ab665a?q=80&w=870', title:'Playa', category:'viaje'},
  {src:'https://images.unsplash.com/photo-1518079521743-d5f88b127929?q=80&w=998', title:'Suiza', category:'ciudad'},
];

 /*----galeria---*/
const grid        = document.getElementById('galleryGrid');
let   msnry       = null;
let   currentIndex = 0;

function buildGallery(filter = 'all') {
  grid.innerHTML = '';

  const filtered = filter === 'all' ? photos : photos.filter(p => p.category === filter);

  filtered.forEach((photo, i) => {
    const globalIdx = photos.indexOf(photo);

    const col = document.createElement('div');
    col.className = 'col-12 col-sm-6 col-md-4 col-lg-3 reveal';

    col.innerHTML = `
      <div class="photo-card" data-index="${globalIdx}">
        <img src="${photo.src}" alt="${photo.title}" loading="lazy" />
        <div class="card-overlay">
          <div>
            <p>${photo.title}</p>
            <span>${photo.category}</span>
          </div>
        </div>
      </div>
    `;

    col.querySelector('.photo-card').addEventListener('click', () => {
      openLightbox(globalIdx);
    });

    grid.appendChild(col);
  });

  /*inicializar despues que se carguen las imagenes*/
  imagesLoaded(grid, () => {
    if (msnry) msnry.destroy();
    msnry = new Masonry(grid, {
      itemSelector: '.col-12',
      columnWidth:  '.col-12',
      percentPosition: true,
      gutter: 0,
    });

    initReveal();
  });
}
/*--Filtros--*/ 
document.getElementById('filterBar').addEventListener('click', e => {
  const btn = e.target.closest('.btn-filter');
  if (!btn) return;

  document.querySelectorAll('.btn-filter').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  buildGallery(btn.dataset.filter);
});


const lbModal = new bootstrap.Modal(document.getElementById('lightboxModal'));
const lbImg   = document.getElementById('lbImg');
const lbTitle = document.getElementById('lbTitle');
const lbCat   = document.getElementById('lbCat');

function openLightbox(index) {
  currentIndex = index;
  updateLightbox();
  lbModal.show();
}

function updateLightbox() {
  const p = photos[currentIndex];
  lbImg.src       = p.src;
  lbImg.alt       = p.title;
  lbTitle.textContent = p.title;
  lbCat.textContent   = p.category;
}

document.getElementById('lbPrev').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + photos.length) % photos.length;
  updateLightbox();
});

document.getElementById('lbNext').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % photos.length;
  updateLightbox();
});

/*--Navegacion por teclado---*/
 document.addEventListener('keydown', (e) => {
  const modal = document.getElementById('lightboxModal');

  if (!modal || !modal.classList.contains('show')) return;

  if (e.key === 'ArrowLeft') {
    currentIndex = (currentIndex - 1 + photos.length) % photos.length;
    updateLightbox();
  }

  if (e.key === 'ArrowRight') {
    currentIndex = (currentIndex + 1) % photos.length;
    updateLightbox();
  }
});

 /*-- efecto de desplazamiento de la barra navegacion--*/
const nav = document.getElementById('mainNav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

 /*--desplazamiento para revelar--*/ 
function initReveal() {
  const els = document.querySelectorAll('.reveal:not(.visible)');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, i * 60);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  els.forEach(el => obs.observe(el));
}

 /*--mostrar elementos que no son de la galeria--*/
document.querySelectorAll('.about-section, .contact-section, .stat-item').forEach(el => {
  el.classList.add('reveal');
});
initReveal();

 /*-- formulario de contacto--*/ 
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();

  const name  = document.getElementById('fname').value.trim();
  const email = document.getElementById('femail').value.trim();
  const msg   = document.getElementById('fmsg').value.trim();

  if (!name || !email || !msg) {
    alert('Por favor completa los campos requeridos.');
    return;
  }

  const btn = e.target.querySelector('.btn-gold');
  btn.textContent = 'Enviando...';
  btn.disabled = true;

  setTimeout(() => {
    const success = document.getElementById('formSuccess');
    success.classList.remove('d-none');
    e.target.reset();
    btn.textContent = 'Enviar mensaje';
    btn.disabled = false;

    setTimeout(() => success.classList.add('d-none'), 5000);
  }, 900);
});

/* ---------- Inicio ---------- */
buildGallery('all');