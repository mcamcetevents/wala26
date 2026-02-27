// Data Definitions
const events = [
    {
        title: 'HackArena [Hacking]',
        category: 'TECHNICAL',
        subCategory: 'HACKING',
        tagline: 'Bad artists copy. Good artists steal',
        iconType: 'shield',
        color: 'from-indigo-500 to-blue-600',
        textColor: 'text-indigo-400',
        prelims: [
            'Written test: 30 Questions',
            'Time limit: 30 minutes',
            'Top 8 teams qualify'
        ],
        finals: [
            'Real-time tools provided',
            'Solve 5 problems',
            'Duration: 1 hour'
        ],
        participation: 'Max 3 members per team',
        prizes: [
            { label: '1st Prize', value: '₹1500' },
            { label: '2nd Prize', value: '₹1000' }
        ],
        coordinator: 'Dr. N. Divya'
    },
    {
        title: 'Code Breaker [Debugging]',
        category: 'TECHNICAL',
        subCategory: 'DEBUGGING',
        tagline: 'Bugs always want to land on the mirror during a lens swap',
        iconType: 'code',
        color: 'from-purple-500 to-pink-600',
        textColor: 'text-purple-400',
        prelims: [
            '30 questions from C, C++, Java',
            'Time limit: 30 minutes',
            'Top 10 teams qualify'
        ],
        finals: [
            '2 coding concepts',
            '20 minutes each'
        ],
        participation: 'Max 2 members per team',
        prizes: [
            { label: '1st Prize', value: '₹1500' },
            { label: '2nd Prize', value: '₹1000' }
        ],
        coordinator: 'Dr. S. Raja Rajeswari'
    },
    {
        title: 'Web Wizrdry [Web Design]',
        category: 'TECHNICAL',
        subCategory: 'WEB DESIGN',
        tagline: "I'm a hardcore gamer and would never let you down",
        iconType: 'globe',
        color: 'from-emerald-500 to-teal-600',
        textColor: 'text-emerald-400',
        prelims: [
            'Written test on web design concepts',
            '30 minutes',
            'Top 6 teams qualify'
        ],
        finals: [
            'Design website based on spot theme',
            'Software: PS, Flash, Dreamweaver',
            'Duration: 1 hour'
        ],
        participation: 'Max 3 members per team',
        prizes: [
            { label: '1st Prize', value: '₹1500' },
            { label: '2nd Prize', value: '₹1000' }
        ],
        coordinator: 'Mrs. S. Sathyapriya'
    },
    {
        title: 'Tech Brain Battle [Technical Quiz]',
        category: 'TECHNICAL',
        subCategory: 'TECHNICAL QUIZ',
        tagline: 'Knowledge is power, but enthusiasm pulls the switch',
        iconType: 'brain',
        color: 'from-orange-500 to-red-600',
        textColor: 'text-orange-400',
        prelims: [
            'Written test on CS basics',
            '30 minutes',
            'Top 5 teams qualify'
        ],
        finals: [
            'Rapid-fire buzzer quiz (10 questions)',
            '30 minutes'
        ],
        participation: 'Max 3 members per team',
        prizes: [
            { label: '1st Prize', value: '₹1500' },
            { label: '2nd Prize', value: '₹1000' }
        ],
        coordinator: 'Ms. S. Divya Vahini'
    },
    {
        title: 'Tech reel challenge [AI Movie Making]',
        category: 'TECHNICAL',
        subCategory: 'AI MOVIE MAKING',
        tagline: 'Movie directing is a perfect refuge for the mediocre',
        iconType: 'clapperboard',
        color: 'from-rose-500 to-red-600',
        textColor: 'text-rose-400',
        prelims: [
            'Title given on the day',
            'Submit entries'
        ],
        finals: [
            'Bring AI tools and laptop',
            '90 minutes'
        ],
        participation: 'Max 4 members per team',
        prizes: [
            { label: '1st Prize', value: '₹1500' },
            { label: '2nd Prize', value: '₹1000' }
        ],
        coordinator: 'Dr. S. Raja Rajeswari'
    },
    {
        title: 'Brand Battle [Marketing]',
        category: 'NON-TECHNICAL',
        subCategory: 'MARKETING',
        tagline: 'Marketing takes a day to learn, a lifetime to master',
        iconType: 'megaphone',
        color: 'from-yellow-500 to-orange-600',
        textColor: 'text-yellow-400',
        prelims: [
            '25 questions on ads, logos, slogans',
            '15 minutes'
        ],
        finals: [
            '5 min prep + 8 min performance',
            '2 min Q&A session'
        ],
        participation: 'Max 4 members per team',
        prizes: [
            { label: '1st Prize', value: '₹1000' },
            { label: '2nd Prize', value: '₹500' }
        ],
        coordinator: 'Mrs. M. Rubha'
    },
    {
        title: 'ELITE CRICK AUCTION',
        category: 'NON-TECHNICAL',
        subCategory: 'IPL AUCTION',
        tagline: 'Strategy wins matches, smart bidding builds champions',
        iconType: 'trophy',
        color: 'from-blue-600 to-indigo-700',
        textColor: 'text-blue-400',
        prelims: [
            'Online Quiz (20 questions)',
            'No negative marks',
            '10 minutes',
            '10 teams qualify'
        ],
        finals: [
            'Live Bidding Arena',
            '80 Crore Virtual Budget',
            'Category-wise auction'
        ],
        participation: 'Max 3 members per team',
        prizes: [
            { label: '1st Prize', value: '₹1000' },
            { label: '2nd Prize', value: '₹500' }
        ],
        coordinator: 'Ms. S. Divya Vahini'
    }
];

const schedule = [
    { time: '09:00 AM', event: 'Registration & Kit Distribution', icon: 'play', desc: 'Welcome desk at the MCA foyer.' },
    { time: '10:00 AM', event: 'Inauguration Ceremony', icon: 'play', desc: 'Grand opening with faculty and guests.' },
    { time: '10:45 AM', event: 'Tea Break', icon: 'coffee', desc: 'Refreshments provided at the cafeteria.' },
    { time: '11:00 AM', event: 'Preliminary Rounds', icon: 'zap', desc: 'Technical & Non-Technical eliminations.' },
    { time: '01:00 PM', event: 'Networking Lunch', icon: 'coffee', desc: 'Complimentary lunch for all participants.' },
    { time: '02:00 PM', event: 'Final Rounds', icon: 'zap', desc: 'The top teams battle for the title.' },
    { time: '04:00 PM', event: 'Valedictory & Prize Distribution', icon: 'award', desc: 'Closing ceremony and winners.' },
];

const facultyCoordinators = [
    { name: 'Dr. N. Divya', event: 'HackArena [Hacking]' },
    { name: 'Dr. S. Raja Rajeswari', event: 'Code Breaker / Tech Reel' },
    { name: 'Mrs. S. Sathyapriya', event: 'Web Wizrdry' },
    { name: 'Ms. S. Divya Vahini', event: 'Tech Quiz / Crick Auction' },
    { name: 'Mrs. M. Rubha', event: 'Brand Battle' },
];

const registrationLink = "https://forms.gle/Jd66wSNrj88ipiwJ7";
const gmailLink = "https://mail.google.com/mail/?view=cm&fs=1&to=mcamcet.events@gmail.com";

// DOMContentLoaded Initialization
document.addEventListener('DOMContentLoaded', () => {
    renderEvents();
    renderTimeline();
    renderCoordinators();
    renderAssistanceLinks();
    initNavbar();
    initTheme();
    initModals();
    initScrollAnimations();
    initCardTracker();
    lucide.createIcons();
});

// Scroll Animations Logic
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    // Track sections and timeline items
    const animatedElements = document.querySelectorAll('.section-header, .event-card, .timeline-item, .coord-card, .assistance-box');
    animatedElements.forEach(el => {
        el.classList.add('reveal-on-scroll');
        observer.observe(el);
    });
}

// Interactive Card Tracking (Glow only, no tilt)
function initCardTracker() {
    document.addEventListener('mousemove', (e) => {
        const cards = document.querySelectorAll('.event-card');
        cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Mouse Glow Position (Keep for subtle glow effect if used in CSS)
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });

    document.addEventListener('mouseleave', () => {
        const cards = document.querySelectorAll('.event-card');
        cards.forEach(card => {
            // Reset any remaining transforms
            card.style.transform = '';
        });
    }, true);
}

// Render Functions
function renderEvents() {
    const grid = document.getElementById('events-grid');
    grid.innerHTML = events.map((event, index) => `
        <div class="event-card glass" onclick="openEventModal(${index})">
            <div class="event-card-header">
                <div class="header-overlay bg-gradient-to-br ${event.color}"></div>
                <div class="header-icon">
                    <i data-lucide="${event.iconType}" class="${event.textColor}"></i>
                </div>
                <div class="event-badge glass">${event.subCategory}</div>
            </div>
            <div class="event-card-body">
                <div class="prize-hint">
                    <i data-lucide="award"></i>
                    <span>Top Prize: ${event.prizes[0].value}</span>
                </div>
                <h3 class="event-title">${event.title}</h3>
                <div class="event-details-summary">
                    <div class="detail-item">
                        <i data-lucide="users"></i>
                        <span>${event.participation}</span>
                    </div>
                    <div class="detail-item">
                        <i data-lucide="user"></i>
                        <span><span class="coord-label">Coord: </span><span class="coord-name">${event.coordinator}</span></span>
                    </div>
                </div>
                <button class="btn btn-outline" style="width: 100%">Explore Details</button>
            </div>
        </div>
    `).join('');
}

function renderTimeline() {
    const timeline = document.getElementById('timeline');
    const itemsHtml = schedule.map((item, index) => `
        <div class="timeline-item">
            <div class="timeline-dot glass">
                <i data-lucide="${item.icon}"></i>
            </div>
            <div class="timeline-card glass">
                <span class="time-label">${item.time}</span>
                <h3 class="timeline-title">${item.event}</h3>
                <p class="timeline-desc">${item.desc}</p>
            </div>
        </div>
    `).join('');
    timeline.innerHTML = '<div class="timeline-line"></div>' + itemsHtml;
}

function renderCoordinators() {
    const grid = document.getElementById('coordinators-grid');
    grid.innerHTML = facultyCoordinators.map(coord => `
        <div class="coord-card glass">
            <div class="coord-avatar">${coord.name.charAt(4)}</div>
            <div class="coord-info">
                <h4 class="coord-event">${coord.event}</h4>
                <h4>${coord.name}</h4>
                <div class="coord-socials">
                    <a href="${gmailLink}" target="_blank"><i data-lucide="mail"></i></a>
                </div>
            </div>
        </div>
    `).join('');
}

function renderAssistanceLinks() {
    const linksHtml = `
        <a href="${gmailLink}" target="_blank" class="assistance-link">
            <i data-lucide="mail"></i>
            <span>mcamcet.events@gmail.com</span>
        </a>
    `;
    document.getElementById('assistance-links').innerHTML = linksHtml;
    document.getElementById('footer-mail-container').innerHTML = `
        <a href="${gmailLink}" target="_blank" class="contact-item">
            <i data-lucide="mail" class="primary-text"></i>
            <span>mcamcet.events@gmail.com</span>
        </a>
    `;
}

// Navbar Logic
function initNavbar() {
    const navbar = document.getElementById('navbar');
    const mobileToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    mobileToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        const icon = mobileToggle.querySelector('i');
        if (mobileMenu.classList.contains('active')) {
            icon.setAttribute('data-lucide', 'x');
        } else {
            icon.setAttribute('data-lucide', 'menu');
        }
        lucide.createIcons();
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            mobileToggle.querySelector('i').setAttribute('data-lucide', 'menu');
            lucide.createIcons();
        });
    });
}

// Theme Logic
function initTheme() {
    const toggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Check local storage
    const savedTheme = localStorage.getItem('theme') || 'dark';
    body.setAttribute('data-theme', savedTheme);

    toggle.addEventListener('click', () => {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
}

// Modal Logic
function initModals() {
    const modal = document.getElementById('event-modal');
    const closeBtn = modal.querySelector('.modal-close');
    const overlay = modal.querySelector('.modal-overlay');

    const closeModal = () => {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    };

    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);

    window.openEventModal = (index) => {
        const event = events[index];
        const body = document.getElementById('modal-body');

        body.innerHTML = `
            <div class="modal-header" style="text-align: center; margin-bottom: 20px;">
                <div class="modal-header-meta" style="justify-content: center;">
                    <span class="category-tag">${event.category}</span>
                    <span class="category-tag" style="color: var(--color-secondary); margin-left:10px;">• ${event.subCategory}</span>
                </div>
                <h2 class="modal-event-title" style="margin-bottom: 10px;">${event.title}</h2>
                <div class="modal-tagline" style="border-left:none; border-bottom:1px solid var(--color-primary); border-radius:0; padding: 0 0 10px 0; margin-bottom:20px; text-align:center;">"${event.tagline}"</div>
            </div>

            <div class="vertical-content-stack" style="display: flex; flex-direction: column; gap: 20px; max-width: 500px; margin: 0 auto;">
                <!-- Round 1 -->
                <div class="modal-rounds" style="background: var(--input-bg); padding: 15px; border-radius: 16px;">
                    <h4 class="round-title" style="margin-bottom: 12px;"><i data-lucide="clock"></i> PRELIMINARY ROUND</h4>
                    <ul class="round-list" style="margin: 0; padding: 0;">
                        ${event.prelims.map(step => `<li><i data-lucide="check-circle-2"></i><span>${step}</span></li>`).join('')}
                    </ul>
                </div>

                <!-- Round 2 -->
                <div class="modal-rounds" style="background: var(--input-bg); padding: 15px; border-radius: 16px;">
                    <h4 class="round-title" style="color: var(--color-secondary); margin-bottom: 12px;"><i data-lucide="zap"></i> GRAND FINALE</h4>
                    <ul class="round-list" style="margin: 0; padding: 0;">
                        ${event.finals.map(step => `<li><i data-lucide="check-circle-2" style="color: var(--color-secondary)"></i><span>${step}</span></li>`).join('')}
                    </ul>
                </div>

                <!-- Quick Meta Cards -->
                <div class="quick-info-stack" style="display: flex; flex-direction: column; gap: 10px;">
                    <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px 15px; background: rgba(99, 102, 241, 0.05); border-radius: 12px; border: 1px solid var(--glass-border);">
                        <span class="info-label" style="margin:0;"><i data-lucide="users"></i> TEAM SIZE</span>
                        <span class="info-val" style="font-size: 0.9rem;">${event.participation}</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px 15px; background: rgba(99, 102, 241, 0.05); border-radius: 12px; border: 1px solid var(--glass-border);">
                        <span class="info-label" style="margin:0;"><i data-lucide="award"></i> PRIZE POOL</span>
                        <span class="info-val" style="font-size: 0.9rem;">${event.prizes[0].value}</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px 15px; background: rgba(99, 102, 241, 0.05); border-radius: 12px; border: 1px solid var(--glass-border);">
                        <span class="info-label" style="margin:0;"><i data-lucide="user"></i> COORDINATOR</span>
                        <span class="info-val" style="font-size: 0.9rem;">${event.coordinator}</span>
                    </div>
                </div>

                <div class="modal-register-wrap" style="margin-top: 10px;">
                    <a href="${registrationLink}" target="_blank" class="btn btn-primary" style="width: 100%; justify-content: center; padding: 18px; border-radius: 16px; font-size: 14px;">REGISTER NOW</a>
                </div>
            </div>
        `;

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        lucide.createIcons();
    };
}
