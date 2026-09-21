/**
 * What Makes Autism Great - Interactive Experience
 * Pure Vanilla JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
  initThemeAndSensoryMode();
  initStrengthsExplorer();
  initQuoteCarousel();
  initInsightGenerator();
  initFlipCards();
  initAppreciationWall();
  initShareButton();
  initFooterYear();
});

/* ==========================================================================
   Icon Helpers
   ========================================================================== */
const SVG_ICONS = {
  moon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`,
  sun: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`,
  bolt: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  pattern: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>`,
  diamond: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 3h12l4 6-10 13L2 9Z"/><path d="M11 3 8 9l4 13 4-13-3-6"/><path d="M2 9h20"/></svg>`,
  bulb: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>`,
  scales: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/></svg>`,
  palette: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.563-2.512 5.563-5.563C22 6.5 17.5 2 12 2Z"/></svg>`,
  blueprint: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>`,
  heart: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`
};

/* ==========================================================================
   1. Theme & Sensory Mode (Calm Mode)
   ========================================================================== */
function initThemeAndSensoryMode() {
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const sensoryToggle = document.getElementById('sensory-toggle');
  const toggleText = sensoryToggle ? sensoryToggle.querySelector('.toggle-text') : null;

  function updateThemeIcon(isDark) {
    if (themeIcon) {
      themeIcon.innerHTML = isDark ? SVG_ICONS.sun : SVG_ICONS.moon;
    }
  }

  // Restore saved theme
  const savedTheme = localStorage.getItem('autism-celebration-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.body.classList.add('dark-theme');
    updateThemeIcon(true);
  } else {
    updateThemeIcon(false);
  }

  // Restore saved sensory mode
  const savedSensory = localStorage.getItem('autism-celebration-calm');
  if (savedSensory === 'enabled') {
    document.body.classList.add('calm-mode');
    if (sensoryToggle) sensoryToggle.setAttribute('aria-pressed', 'true');
    if (toggleText) toggleText.textContent = 'Calm: ON';
  }

  // Theme Toggle Event
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-theme');
      const isDark = document.body.classList.contains('dark-theme');
      updateThemeIcon(isDark);
      localStorage.setItem('autism-celebration-theme', isDark ? 'dark' : 'light');
    });
  }

  // Sensory Mode Toggle Event
  if (sensoryToggle) {
    sensoryToggle.addEventListener('click', () => {
      document.body.classList.toggle('calm-mode');
      const isCalm = document.body.classList.contains('calm-mode');
      sensoryToggle.setAttribute('aria-pressed', isCalm ? 'true' : 'false');
      if (toggleText) {
        toggleText.textContent = isCalm ? 'Calm: ON' : 'Calm Mode';
      }
      localStorage.setItem('autism-celebration-calm', isCalm ? 'enabled' : 'disabled');
    });
  }
}

/* ==========================================================================
   2. Interactive Strengths Explorer
   ========================================================================== */
const STRENGTHS_DATA = [
  {
    id: 'deep-focus',
    title: 'Flow & Unrivaled Hyperfocus',
    category: 'work',
    iconKey: 'bolt',
    summary: 'The ability to enter immersive focus states for hours, turning complex problems into breakthroughs.',
    details: 'Autistic hyperfocus allows individuals to channel full cognitive bandwidth into solving intricate dilemmas. In software engineering, scientific research, and complex problem-solving, this deep immersion often accomplishes in days what takes standard workflows months.',
    realWorld: 'Satoshi Tajiri spent countless hours observing bugs and arcade mechanisms, which directly gave birth to the global phenomenon of Pokémon.',
    takeaway: 'In welcoming work environments, providing uninterrupted focus blocks unleashes extraordinary productivity.'
  },
  {
    id: 'pattern-recognition',
    title: 'Advanced Pattern Recognition',
    category: 'thinking',
    iconKey: 'pattern',
    summary: 'Instinctively identifying underlying structures, mathematical logic, and subtle irregularities.',
    details: 'While typical cognition categorizes at high levels, autistic brains process raw sensory and systemic inputs with incredible granularity. This leads to exceptional capabilities in code auditing, financial modeling, medical imaging, and music composition.',
    realWorld: 'Tech firms like SAP, Microsoft, and Google actively recruit autistic specialists specifically for their superior quality assurance and pattern detection rates.',
    takeaway: 'Seeing the patterns between seemingly disconnected systems drives revolutionary innovation.'
  },
  {
    id: 'uncompromising-honesty',
    title: 'Radical Honesty & Authenticity',
    category: 'relationships',
    iconKey: 'diamond',
    summary: 'Communication rooted in transparency, directness, and complete absence of hidden agendas.',
    details: 'Autistic individuals communicate with refreshingly clear intent. You never have to guess what they mean, decipher passive-aggressive hints, or navigate office politics. When an autistic colleague or friend gives you praise or advice, it is 100% genuine.',
    realWorld: 'In ethical leadership and safety-critical roles, autistic professionals are vital because they report real data without sugarcoating.',
    takeaway: 'True psychological safety in teams and relationships thrives on honest, dependable communication.'
  },
  {
    id: 'lateral-thinking',
    title: 'Non-Conformist Problem Solving',
    category: 'creativity',
    iconKey: 'bulb',
    summary: 'Tackling questions from zero assumptions rather than following crowd consensus.',
    details: 'Because autistic brains naturally resist social peer pressure and conventional expectations, they analyze situations from first principles. They ask: "Does this actually make sense?" rather than "Is this what everyone else is doing?"',
    realWorld: 'Greta Thunberg noted that her autism enabled her to see the climate crisis clearly: "If emissions have to stop, then we must stop emissions. To me that is black or white."',
    takeaway: 'Disruptive solutions require minds that refuse to accept arbitrary status quo.'
  },
  {
    id: 'deep-empathy-justice',
    title: 'Intense Justice Sensitivity & Empathy',
    category: 'relationships',
    iconKey: 'scales',
    summary: 'A fierce moral compass and deep, compassionate connection to fairness and the vulnerable.',
    details: 'A common misconception was that autistic people lack empathy. Modern research proves the opposite: autistic people frequently experience intense affective empathy, feeling deeply for animals, children, and victims of injustice, often compelling them into moral action.',
    realWorld: 'Autistic advocates have led major social justice, animal welfare, and conservation movements worldwide.',
    takeaway: 'Moral clarity and steadfast loyalty are foundational pillars of autistic character.'
  },
  {
    id: 'sensory-intensity',
    title: 'Sensory Depth & Artistic Vision',
    category: 'creativity',
    iconKey: 'palette',
    summary: 'A heightened sensory palette creating vivid aesthetic expression and musical resonance.',
    details: 'The vividness of autistic perception translates into stunning artistic, musical, and culinary expression. Subtle variations in pitch, color gradients, and tactile textures are felt with transcendent intensity.',
    realWorld: 'Legendary visionaries from Sir Anthony Hopkins to visual artists like Stephen Wiltshire channel autistic perception into mesmerizing creative works.',
    takeaway: 'Rich sensory processing opens doors to aesthetic wonder that inspires everyone.'
  },
  {
    id: 'structured-reliability',
    title: 'Architectural Thinking & Method',
    category: 'work',
    iconKey: 'blueprint',
    summary: 'Creating scalable structures, comprehensive documentation, and bulletproof workflows.',
    details: 'Autistic individuals possess an inherent affinity for taxonomy, clear classifications, and logical sequences. They build reliable systems, write meticulous documentation, and maintain high standards where others cut corners.',
    realWorld: 'Open-source maintainers and system architects frequently credit neurodivergent thinking for building clean, resilient codebases.',
    takeaway: 'Reliable systems are built by thinkers who honor structure, precision, and consistency.'
  },
  {
    id: 'passionate-loyalty',
    title: 'Unyielding Loyalty & True Friendship',
    category: 'relationships',
    iconKey: 'heart',
    summary: 'Unconditional, lifelong bonds built on shared values rather than superficial trends.',
    details: 'Autistic friendships are not contingent on social status or shallow small talk. They are formed on deep mutual interests, heartfelt trust, and enduring loyalty that withstands years of distance.',
    realWorld: 'Ask anyone with an autistic best friend: they will tell you they have never known a more steadfast or trustworthy confidant.',
    takeaway: 'Authentic relationships grounded in shared integrity bring deep joy and security.'
  }
];

function initStrengthsExplorer() {
  const explorerGrid = document.getElementById('explorer-grid');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const modal = document.getElementById('explorer-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalCategory = document.getElementById('modal-category');
  const modalBody = document.getElementById('modal-body');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalActionClose = document.getElementById('modal-action-close');
  const modalBackdrop = modal ? modal.querySelector('.modal-backdrop') : null;

  if (!explorerGrid) return;

  function renderCards(filter = 'all') {
    explorerGrid.innerHTML = '';
    const filtered = filter === 'all' 
      ? STRENGTHS_DATA 
      : STRENGTHS_DATA.filter(item => item.category === filter);

    filtered.forEach(item => {
      const card = document.createElement('div');
      card.className = 'explorer-card';
      card.setAttribute('tabindex', '0');
      card.setAttribute('role', 'button');
      card.setAttribute('aria-label', `View details for ${item.title}`);
      
      const iconSvg = SVG_ICONS[item.iconKey] || SVG_ICONS.bolt;

      card.innerHTML = `
        <div class="explorer-card-header">
          <span class="explorer-card-icon" aria-hidden="true">${iconSvg}</span>
          <h3 class="explorer-card-title">${item.title}</h3>
        </div>
        <p class="explorer-card-preview">${item.summary}</p>
        <div class="explorer-card-footer">
          <span class="card-tag">${formatCategory(item.category)}</span>
          <span class="view-detail-hint">Explore &rarr;</span>
        </div>
      `;

      card.addEventListener('click', () => openModal(item));
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openModal(item);
        }
      });

      explorerGrid.appendChild(card);
    });
  }

  function formatCategory(cat) {
    switch (cat) {
      case 'work': return 'Work & Systems';
      case 'thinking': return 'Cognition & Logic';
      case 'relationships': return 'Values & Trust';
      case 'creativity': return 'Creativity & Arts';
      default: return 'Strength';
    }
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      const filter = btn.getAttribute('data-filter');
      renderCards(filter);
    });
  });

  function openModal(item) {
    if (!modal) return;
    modalTitle.textContent = item.title;
    modalCategory.textContent = formatCategory(item.category);
    modalBody.innerHTML = `
      <p><strong>The Core Gift:</strong> ${item.details}</p>
      <p><strong>Real-World Impact:</strong> ${item.realWorld}</p>
      <p><strong>Key Insight:</strong> ${item.takeaway}</p>
    `;
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    if (modalCloseBtn) modalCloseBtn.focus();
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (modalActionClose) modalActionClose.addEventListener('click', closeModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });

  renderCards('all');
}

/* ==========================================================================
   3. Historic & Modern Voices Carousel
   ========================================================================== */
const VOICES_DATA = [
  {
    quote: "The world needs all kinds of minds.",
    author: "Dr. Temple Grandin",
    role: "World-Renowned Animal Scientist, Author & Autism Pioneer",
    initials: "TG"
  },
  {
    quote: "Sometimes it is the people no one can imagine anything of who do the things no one can imagine.",
    author: "Alan Turing",
    role: "Father of Modern Computer Science & WWII Codebreaker",
    initials: "AT"
  },
  {
    quote: "I see the world a bit different. I have a certain superpower.",
    author: "Greta Thunberg",
    role: "International Climate Leader & Time Person of the Year",
    initials: "GT"
  },
  {
    quote: "I don't fit into the conventional actor mould. My mind works differently, and that has been my greatest creative asset.",
    author: "Sir Anthony Hopkins",
    role: "Academy Award-Winning Actor & Composer",
    initials: "AH"
  },
  {
    quote: "Autism is an integral part of who I am. You cannot separate the autism from the person without erasing the individual.",
    author: "Dr. Nick Walker",
    role: "Neurodiversity Scholar, Educator & Author",
    initials: "NW"
  }
];

function initQuoteCarousel() {
  const quoteText = document.getElementById('carousel-quote');
  const quoteAuthor = document.getElementById('carousel-author');
  const quoteRole = document.getElementById('carousel-role');
  const quoteAvatar = document.getElementById('carousel-avatar');
  const prevBtn = document.getElementById('prev-quote');
  const nextBtn = document.getElementById('next-quote');
  const indicatorsContainer = document.getElementById('carousel-indicators');
  const carouselCard = document.getElementById('carousel-card');

  if (!quoteText || !indicatorsContainer) return;

  let currentIndex = 0;
  let autoplayTimer = null;

  indicatorsContainer.innerHTML = '';
  VOICES_DATA.forEach((_, idx) => {
    const dot = document.createElement('button');
    dot.className = `carousel-indicator ${idx === 0 ? 'active' : ''}`;
    dot.setAttribute('aria-label', `Go to quote ${idx + 1}`);
    dot.addEventListener('click', () => {
      showQuote(idx);
      resetAutoplay();
    });
    indicatorsContainer.appendChild(dot);
  });

  function showQuote(index) {
    if (index < 0) index = VOICES_DATA.length - 1;
    if (index >= VOICES_DATA.length) index = 0;
    currentIndex = index;

    if (carouselCard) {
      carouselCard.style.opacity = '0';
      setTimeout(() => {
        const item = VOICES_DATA[currentIndex];
        quoteText.textContent = `“${item.quote}”`;
        quoteAuthor.textContent = item.author;
        quoteRole.textContent = item.role;
        quoteAvatar.textContent = item.initials;
        carouselCard.style.opacity = '1';

        const dots = indicatorsContainer.querySelectorAll('.carousel-indicator');
        dots.forEach((d, i) => {
          d.classList.toggle('active', i === currentIndex);
        });
      }, 150);
    }
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      showQuote(currentIndex - 1);
      resetAutoplay();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      showQuote(currentIndex + 1);
      resetAutoplay();
    });
  }

  function startAutoplay() {
    if (document.body.classList.contains('calm-mode')) return;
    autoplayTimer = setInterval(() => {
      showQuote(currentIndex + 1);
    }, 7000);
  }

  function resetAutoplay() {
    if (autoplayTimer) clearInterval(autoplayTimer);
    startAutoplay();
  }

  if (carouselCard) {
    carouselCard.addEventListener('mouseenter', () => clearInterval(autoplayTimer));
    carouselCard.addEventListener('mouseleave', resetAutoplay);
  }

  startAutoplay();
}

/* ==========================================================================
   4. Instant Inspiration Generator
   ========================================================================== */
const INSIGHTS = [
  "“Autistic people don't think outside the box—they don't see the box to begin with.”",
  "“Special interests are not hobbies; they are engines of deep understanding and human ingenuity.”",
  "“Neurodiversity is as essential for the human mind as biodiversity is for the planet.”",
  "“Autistic honesty isn't tactlessness; it's a profound commitment to truth and respect.”",
  "“Great innovations rarely come from consensus. They come from minds that see past consensus.”",
  "“An autistic mind is not broken hardware running broken software; it is simply a different operating system.”"
];

function initInsightGenerator() {
  const btn = document.getElementById('random-insight-btn');
  const banner = document.getElementById('insight-banner');
  const textEl = document.getElementById('insight-text');
  const closeBtn = document.getElementById('close-insight-btn');

  if (!btn || !banner || !textEl) return;

  btn.addEventListener('click', () => {
    const randomInsight = INSIGHTS[Math.floor(Math.random() * INSIGHTS.length)];
    textEl.textContent = randomInsight;
    banner.classList.remove('hidden');
    banner.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      banner.classList.add('hidden');
    });
  }
}

/* ==========================================================================
   5. Myth vs Reality Flip Cards (Keyboard & Touch Accessible)
   ========================================================================== */
function initFlipCards() {
  const flipCards = document.querySelectorAll('.flip-card');
  flipCards.forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('flipped');
    });
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        card.classList.toggle('flipped');
      }
    });
  });
}

/* ==========================================================================
   6. Appreciation & Reflection Wall
   ========================================================================== */
const DEFAULT_REFLECTIONS = [
  {
    name: 'Maya',
    tag: 'Focus',
    text: 'My autistic teammate found a critical security vulnerability that five senior engineers missed for months. His systematic attention to detail is legendary.',
    date: 'Recently'
  },
  {
    name: 'Eli (Autistic & Proud)',
    tag: 'Ingenuity',
    text: 'My special interest in botany allowed me to cultivate rare drought-resistant orchids. Embracing how my brain naturally works changed my entire life.',
    date: 'Recently'
  },
  {
    name: 'David',
    tag: 'Honesty',
    text: 'I always go to my autistic sister whenever I need real, unvarnished advice. She will never lie to flatter me, and that makes her trust priceless.',
    date: 'Recently'
  },
  {
    name: 'Chloe',
    tag: 'Creativity',
    text: 'The way my partner experiences music in colors and intricate geometric shapes brings so much wonder and beauty into our home.',
    date: 'Recently'
  }
];

function initAppreciationWall() {
  const form = document.getElementById('reflection-form');
  const authorInput = document.getElementById('author-name');
  const tagSelect = document.getElementById('note-tag');
  const textInput = document.getElementById('reflection-text');
  const charCounter = document.getElementById('char-counter');
  const notesGrid = document.getElementById('notes-grid');

  if (!form || !notesGrid) return;

  if (textInput && charCounter) {
    textInput.addEventListener('input', () => {
      charCounter.textContent = textInput.value.length;
    });
  }

  let notes = [];
  try {
    const saved = localStorage.getItem('autism-appreciation-notes');
    if (saved) {
      notes = JSON.parse(saved);
    } else {
      notes = [...DEFAULT_REFLECTIONS];
    }
  } catch (e) {
    notes = [...DEFAULT_REFLECTIONS];
  }

  function renderNotes() {
    notesGrid.innerHTML = '';
    notes.forEach(note => {
      const noteEl = document.createElement('div');
      noteEl.className = 'appreciation-note';
      noteEl.innerHTML = `
        <div class="note-tag">&#x2022; ${escapeHTML(note.tag)}</div>
        <p class="note-text">“${escapeHTML(note.text)}”</p>
        <div class="note-footer">
          <span class="note-author">${escapeHTML(note.name)}</span>
          <span>${escapeHTML(note.date || 'Just now')}</span>
        </div>
      `;
      notesGrid.appendChild(noteEl);
    });
  }

  function escapeHTML(str) {
    if (!str) return '';
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameVal = authorInput.value.trim();
    const tagVal = tagSelect.value;
    const textVal = textInput.value.trim();

    if (!nameVal || !textVal) return;

    const newNote = {
      name: nameVal,
      tag: tagVal,
      text: textVal,
      date: 'Just now'
    };

    notes.unshift(newNote);
    try {
      localStorage.setItem('autism-appreciation-notes', JSON.stringify(notes));
    } catch (e) {
      console.warn('Could not save note to localStorage', e);
    }

    renderNotes();
    form.reset();
    if (charCounter) charCounter.textContent = '0';
  });

  renderNotes();
}

/* ==========================================================================
   7. Copy Share Link
   ========================================================================== */
function initShareButton() {
  const shareBtn = document.getElementById('copy-share-btn');
  const toast = document.getElementById('share-toast');

  if (!shareBtn || !toast) return;

  shareBtn.addEventListener('click', async () => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(window.location.href);
      }
      toast.classList.remove('hidden');
      setTimeout(() => {
        toast.classList.add('hidden');
      }, 4000);
    } catch (err) {
      toast.textContent = 'Share this page URL with friends & colleagues!';
      toast.classList.remove('hidden');
      setTimeout(() => {
        toast.classList.add('hidden');
      }, 4000);
    }
  });
}

/* ==========================================================================
   8. Footer Year
   ========================================================================== */
function initFooterYear() {
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}
