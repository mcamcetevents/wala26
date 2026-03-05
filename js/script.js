// Data Definitions
const events = [
    {
        title: 'HackArena [Hacking]',
        category: 'TECHNICAL',
        subCategory: 'HACKING',
        tagline: 'Bad artists copy. Good artists steal',
        iconType: 'shield',
        img: 'images/event1.png',
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
        coordinator: 'Dr. N. Divya',
        registrationLink: 'https://forms.gle/YkDGbviF7ajNMX9n9'
    },
    {
        title: 'Code Breaker [Debugging]',
        category: 'TECHNICAL',
        subCategory: 'DEBUGGING',
        tagline: 'Bugs always want to land on the mirror during a lens swap',
        iconType: 'code',
        img: 'images/event2.png',
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
        coordinator: 'Dr. S. Raja Rajeswari',
        registrationLink: 'https://forms.gle/wsbceaWxVdCmtdae9'
    },
    {
        title: 'Web Wizrdry [Web Design]',
        category: 'TECHNICAL',
        subCategory: 'WEB DESIGN',
        tagline: "I'm a hardcore gamer and would never let you down",
        iconType: 'globe',
        img: 'images/event3.png',
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
        coordinator: 'Mrs. S. Sathyapriya',
        registrationLink: 'https://forms.gle/7zANVMUZgG4PJAPV6'
    },
    {
        title: 'Tech Brain Battle [Technical Quiz]',
        category: 'TECHNICAL',
        subCategory: 'TECHNICAL QUIZ',
        tagline: 'Knowledge is power, but enthusiasm pulls the switch',
        iconType: 'brain',
        img: 'images/event4.png',
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
        coordinator: 'Ms. S. Divya Vahini',
        registrationLink: 'https://forms.gle/dL4N47GWmYy3iBS68'
    },
    {
        title: 'Tech Reel Challenge [AI Movie Making]',
        category: 'TECHNICAL',
        subCategory: 'AI MOVIE MAKING',
        tagline: 'Movie directing is a perfect refuge for the mediocre',
        iconType: 'clapperboard',
        img: 'images/event5.png',
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
        coordinator: 'Dr. S. Raja Rajeswari',
        registrationLink: 'https://forms.gle/wdSSDEHmWo6LA5AG6'
    },
    {
        title: 'Brand Battle [Marketing]',
        category: 'NON-TECHNICAL',
        subCategory: 'MARKETING',
        tagline: 'Marketing takes a day to learn, a lifetime to master',
        iconType: 'megaphone',
        img: 'images/event6.png',
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
        coordinator: 'Mrs. M. Rubha',
        registrationLink: 'https://forms.gle/8TKQqDMpfFyTVN1C8'
    },
    {
        title: 'ELITE CRICK AUCTION',
        category: 'NON-TECHNICAL',
        subCategory: 'IPL AUCTION',
        tagline: 'Strategy wins matches, smart bidding builds champions',
        iconType: 'trophy',
        img: 'images/event7.png',
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
        coordinator: 'Ms. S. Divya Vahini',
        registrationLink: 'https://forms.gle/4Jiz9zmhFmGzRr7YA'
    }
];

const schedule = [
    { time: '09:30 AM - 11:00 AM', event: 'Forenoon Session 1', icon: 'zap', desc: 'Hacking, Web Design & AI Movie Making' },
    { time: '11:00 AM - 11:15 AM', event: 'Short Break', icon: 'coffee', desc: 'Morning refreshment break.' },
    { time: '11:15 AM - 12:45 PM', event: 'Forenoon Session 2', icon: 'zap', desc: 'Debugging & Technical Quiz' },
    { time: '12:45 PM - 01:30 PM', event: 'Lunch Break', icon: 'coffee', desc: 'Networking lunch for all participants.' },
    { time: '01:30 PM - 03:00 PM', event: 'Afternoon Session', icon: 'zap', desc: 'Crick Auction & Marketing' },
    { time: '03:00 PM - 03:15 PM', event: 'Short Break', icon: 'coffee', desc: 'Evening refreshment break.' },
    { time: '03:30 PM - 04:30 PM', event: 'Valedictory Function', icon: 'award', desc: 'Closing ceremony and prize distribution.' },
];

const facultyCoordinators = [
    {
        event: 'HackArena [Hacking]',
        staff: 'Dr. N. Divya',
        students: [
            { name: 'KALI LAKSHMAN N', phone: '9894044316' },
            { name: 'GNANA SEKAR A', phone: '9942611278' }
        ]
    },
    {
        event: 'Code Breaker [Debugging]',
        staff: 'Dr. S. Raja Rajeswari',
        students: [
            { name: 'THARUN P B', phone: '7339286428' },
            { name: 'HARI HARAN V', phone: '7418901658' }
        ]
    },
    {
        event: 'Web Wizrdry [Web Design]',
        staff: 'Mrs. S. Sathyapriya',
        students: [
            { name: 'SURYA PRAKASH M', phone: '8344663489' },
            { name: 'SRI HARI PRIYA G R', phone: '8618416554' }
        ]
    },
    {
        event: 'Tech Brain Battle [Technical Quiz]',
        staff: 'Ms. S. Divya Vahini',
        students: [
            { name: 'SANDHIYA A', phone: '7603871615' },
            { name: 'PAVITHRA R', phone: '8675223372' }
        ]
    },
    {
        event: 'Tech Reel Challenge [AI Movie Making]',
        staff: 'Dr. S. Raja Rajeswari',
        students: [
            { name: 'ABINESH D', phone: '9677222180' },
            { name: 'KOWSALYA DEVI G', phone: '8778062020' }
        ]
    },
    {
        event: 'Brand Battle [Marketing]',
        staff: 'Mrs. M. Rubha',
        students: [
            { name: 'SARAN R', phone: '9087335455' },
            { name: 'ASWANTH P', phone: '8056616066' }
        ]
    },
    {
        event: 'Elite Crick Auction [IPL Auction]',
        staff: 'Ms. S. Divya Vahini',
        students: [
            { name: 'PARAMESH M', phone: '9360686153' },
            { name: 'KUMARAGURU P', phone: '8925639863' }
        ]
    }
];

const gmailLink = "https://mail.google.com/mail/?view=cm&fs=1&to=mcamcet.events@gmail.com";

// DOMContentLoaded Initialization
document.addEventListener('DOMContentLoaded', () => {
    initCountdown();
    renderEvents();
    renderTimeline();
    renderCoordinators();
    renderAssistanceLinks();
    initNavbar();
    initModals();
    initScrollAnimations();
    initCardTracker();
    lucide.createIcons();
});

// Hero Section Countdown Logic
function initCountdown() {
    // Target Date: March 13, 2026 09:00:00 (Start of event registration)
    const targetDate = new Date('March 13, 2026 09:00:00').getTime();

    // DOM Elements
    const elDays = document.getElementById('cd-days');
    const elHours = document.getElementById('cd-hours');
    const elMins = document.getElementById('cd-mins');
    const elSecs = document.getElementById('cd-secs');

    function updateTimer() {
        const now = new Date().getTime();
        const difference = targetDate - now;

        if (difference < 0) {
            // Event has started
            if (elDays) {
                elDays.innerText = '00';
                elHours.innerText = '00';
                elMins.innerText = '00';
                elSecs.innerText = '00';
            }
            return;
        }

        // Time calculations
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const mins = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((difference % (1000 * 60)) / 1000);

        // Update DOM with leading zeros
        if (elDays) elDays.innerText = String(days).padStart(2, '0');
        if (elHours) elHours.innerText = String(hours).padStart(2, '0');
        if (elMins) elMins.innerText = String(mins).padStart(2, '0');
        if (elSecs) elSecs.innerText = String(secs).padStart(2, '0');
    }

    // Run immediately to prevent flash of 00
    updateTimer();
    // Update every second
    setInterval(updateTimer, 1000);
}

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

    const animatedElements = document.querySelectorAll('.section-header, .event-card, .roadmap-item, .coord-card, .assistance-box');
    animatedElements.forEach((el, i) => {
        el.classList.add('reveal-on-scroll');
        el.style.transitionDelay = `${(i % 4) * 0.1}s`;
        observer.observe(el);
    });
}

// Mouse Glow Tracking for Cards
function initCardTracker() {
    document.addEventListener('mousemove', (e) => {
        const cards = document.querySelectorAll('.event-card, .coord-card');
        cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });
}

// Render Events
function renderEvents() {
    const marquee = document.getElementById('events-marquee');
    if (marquee) {
        const marqueeItems = [...events, ...events].map((event, index) => {
            const trueIndex = index % events.length;
            return `
                <span class="marquee-item" onclick="openEventModal(${trueIndex})">
                    <i data-lucide="zap"></i> ${event.title}
                </span>
            `;
        }).join('');
        marquee.innerHTML = marqueeItems;
        lucide.createIcons();
    }

    const grid = document.getElementById('events-grid');
    grid.innerHTML = events.map((event, index) => `
        <div class="event-card" onclick="openEventModal(${index})">
            <div class="event-icon-wrapper">
                <i data-lucide="${event.iconType}"></i>
            </div>
            <div class="event-card-body">
                <div class="event-meta-tags">${event.subCategory}</div>
                <h3 class="event-title">${event.title}</h3>
                <div class="event-registration-date">
                    Coordinator
                    <span>${event.coordinator}</span>
                </div>
                <button class="btn btn-event-detail refactored">Explore Details</button>
            </div>
        </div>
    `).join('');

    lucide.createIcons();

    const nextBtn = document.getElementById('next-event-btn');
    const prevBtn = document.getElementById('prev-event-btn');

    if (nextBtn && prevBtn && grid) {
        nextBtn.addEventListener('click', () => {
            grid.scrollBy({ left: 328, behavior: 'smooth' });
        });
        prevBtn.addEventListener('click', () => {
            grid.scrollBy({ left: -328, behavior: 'smooth' });
        });
    }
}

// Render Timeline
function renderTimeline() {
    const timeline = document.getElementById('timeline');
    // Colors based on the user's roadmap image (Green, Pink, Orange, Cyan, Yellow, etc.)
    const colors = ['#2ecc71', '#e84393', '#e67e22', '#00cec9', '#fdcb6e', '#0984e3', '#d63031'];

    const itemsHtml = schedule.map((item, index) => {
        const isOdd = index % 2 === 0; // First item goes right
        const alignmentClass = isOdd ? 'odd' : 'even';
        const color = colors[index % colors.length];

        return `
            <div class="roadmap-item ${alignmentClass} reveal-on-scroll" style="transition-delay:${index * 0.08}s">
                <div class="roadmap-curve">
                    <div class="roadmap-pin" style="--marker-color: ${color};">
                        <div class="pin-inner">
                            <i data-lucide="${item.icon}"></i>
                        </div>
                    </div>
                </div>
                <div class="roadmap-content glass" style="--marker-color: ${color}; border-color: ${color}40;">
                    <span class="roadmap-time">${item.time}</span>
                    <h3 class="roadmap-title" style="color: ${color}">${item.event}</h3>
                    <p class="roadmap-desc">${item.desc}</p>
                </div>
            </div>
        `;
    }).join('');

    timeline.innerHTML = '<div class="roadmap-container">' + itemsHtml + '</div>';
    lucide.createIcons();
}

// Render Coordinators
function renderCoordinators() {
    const grid = document.getElementById('coordinators-grid');
    grid.innerHTML = facultyCoordinators.map((coord, i) => {
        const initials = coord.event.split(' ').map(n => n[0].replace(/[^a-zA-Z]/g, '')).filter(Boolean).slice(0, 2).join('').toUpperCase();
        return `
        <div class="coord-card">
            <div style="display: flex; align-items: center; gap: 16px; border-bottom: 1px dashed rgba(255,255,255,0.1); padding-bottom: 16px; margin-bottom: 6px; width: 100%;">
                <div class="coord-avatar">${initials}</div>
                <h4 style="font-size: 1.1rem; color: var(--color-primary); margin: 0; line-height: 1.3;">${coord.event}</h4>
            </div>
            
            <div class="coord-info" style="width: 100%;">
                <div style="margin-bottom: 16px;">
                    <span style="font-size: 10px; font-weight: 700; background: var(--color-primary-dim); color: var(--color-primary); padding: 3px 8px; border-radius: 4px; letter-spacing: 0.5px;">STAFF COORDINATOR</span>
                    <div style="margin-top: 8px; display: flex; align-items: center; gap: 8px; background: rgba(255,255,255,0.02); padding: 8px 12px; border-radius: 8px; border: 1px solid var(--glass-border);">
                         <div style="background: rgba(0, 212, 255, 0.1); padding: 6px; border-radius: 50%;">
                            <i data-lucide="user" style="width: 14px; height: 14px; color: var(--color-primary);"></i>
                        </div>
                        <span style="font-size: 14px; font-weight: 500; color: var(--text-main);">${coord.staff}</span>
                    </div>
                </div>

                <div>
                    <span style="font-size: 10px; font-weight: 700; background: rgba(176, 38, 255, 0.15); color: var(--color-accent); padding: 2px 6px; border-radius: 4px; letter-spacing: 0.5px;">STUDENT COORDINATORS</span>
                    <div style="margin-top: 8px; display: flex; flex-direction: column; gap: 8px;">
                        ${coord.students.map(s => `
                            <div style="display: flex; align-items: center; justify-content: space-between; background: rgba(255,255,255,0.03); padding: 8px 12px; border-radius: 8px; border: 1px solid var(--glass-border);">
                                <div style="display: flex; align-items: center; gap: 8px;">
                                    <div style="background: rgba(176, 38, 255, 0.1); padding: 6px; border-radius: 50%;">
                                        <i data-lucide="user" style="width: 14px; height: 14px; color: var(--color-accent);"></i>
                                    </div>
                                    <span style="font-size: 14px; color: var(--text-main); font-weight: 500;">${s.name}</span>
                                </div>
                                <a href="tel:${s.phone}" style="background: rgba(0, 212, 255, 0.1); padding: 8px; border-radius: 50%; cursor: pointer; transition: all 0.3s ease; display: flex; align-items: center; justify-content: center;" onmouseover="this.style.background='rgba(0, 212, 255, 0.2)'; this.style.transform='scale(1.05)';" onmouseout="this.style.background='rgba(0, 212, 255, 0.1)'; this.style.transform='scale(1)';">
                                    <i data-lucide="phone" style="width: 14px; height: 14px; color: var(--color-primary);"></i>
                                </a>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        </div>
        `;
    }).join('');
    lucide.createIcons();
}

// Render Assistance Links
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
    lucide.createIcons();
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

// Modal Logic
function initModals() {
    const modal = document.getElementById('event-modal');
    const overlay = modal.querySelector('.modal-overlay');

    const closeBtn = document.getElementById('modal-close-btn');

    const closeModal = () => {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    };

    overlay.addEventListener('click', closeModal);
    if (closeBtn) closeBtn.addEventListener('click', closeModal);

    window.openEventModal = (index) => {
        const event = events[index];
        const body = document.getElementById('modal-body');

        body.innerHTML = `
            <div class="modal-header" style="text-align: center; margin-bottom: 20px;">
                <div class="modal-header-meta" style="justify-content: center; margin-bottom: 12px;">
                    <span class="category-tag">${event.category}</span>
                    <span class="category-tag" style="background: rgba(176,38,255,0.15); color: #b026ff; margin-left:8px;">• ${event.subCategory}</span>
                </div>
                <h2 class="modal-event-title" style="margin-bottom: 10px;">${event.title}</h2>
                <div class="modal-tagline" style="border-left:none; border-bottom:1px solid var(--glass-border); border-radius:0; padding: 0 0 16px 0; margin-bottom:20px; text-align:center;">"${event.tagline}"</div>
            </div>

            <div style="display: flex; flex-direction: column; gap: 16px; max-width: 500px; margin: 0 auto;">
                <div style="background: var(--bg-card); border:1px solid var(--glass-border); padding: 16px; border-radius: 16px;">
                    <h4 class="round-title" style="margin-bottom: 12px;"><i data-lucide="clock"></i> PRELIMINARY ROUND</h4>
                    <ul class="round-list">
                        ${event.prelims.map(step => `<li><i data-lucide="check-circle-2"></i><span>${step}</span></li>`).join('')}
                    </ul>
                </div>

                <div style="background: var(--bg-card); border:1px solid var(--glass-border); padding: 16px; border-radius: 16px;">
                    <h4 class="round-title" style="color: var(--color-accent); margin-bottom: 12px;"><i data-lucide="zap"></i> GRAND FINALE</h4>
                    <ul class="round-list">
                        ${event.finals.map(step => `<li><i data-lucide="check-circle-2" style="color: var(--color-accent)"></i><span>${step}</span></li>`).join('')}
                    </ul>
                </div>

                <div style="display: flex; flex-direction: column; gap: 10px;">
                    <div style="display: flex; justify-content: space-between; align-items: center; padding: 12px 16px; background: var(--bg-card); border-radius: 12px; border: 1px solid var(--glass-border);">
                        <span class="info-label"><i data-lucide="users"></i> TEAM SIZE</span>
                        <span class="info-val">${event.participation}</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; align-items: center; padding: 12px 16px; background: var(--bg-card); border-radius: 12px; border: 1px solid var(--glass-border);">
                        <span class="info-label"><i data-lucide="award"></i> PRIZE POOL</span>
                        <span class="info-val" style="color: var(--color-primary);">${event.prizes.map(p => p.value).join(' / ')}</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; align-items: center; padding: 12px 16px; background: var(--bg-card); border-radius: 12px; border: 1px solid var(--glass-border);">
                        <span class="info-label"><i data-lucide="user"></i> COORDINATOR</span>
                        <span class="info-val">${event.coordinator}</span>
                    </div>
                </div>

                <div style="margin-top: 8px;">
                    <a href="${event.registrationLink}" target="_blank" class="btn btn-primary" style="width: 100%; justify-content: center; padding: 16px; border-radius: 14px; font-size: 14px; border-radius: 50px;">REGISTER NOW <i data-lucide="arrow-right"></i></a>
                </div>
            </div>
        `;

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        lucide.createIcons();
    };
}
