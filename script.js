// Mobile Navigation Toggle
const mobileToggle = document.querySelector('.mobile-toggle');
const navMenu = document.querySelector('.nav-menu');

mobileToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            navMenu.classList.remove('active');
        }
    });
});

// Active Navigation Link
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-menu a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Date and Time Widget
function updateDateTime() {
    const now = new Date();
    
    // Update Date
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = now.toLocaleDateString('en-US', dateOptions);
    document.getElementById('current-date').textContent = dateString;
    
    // Update Time
    const timeString = now.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        second: '2-digit'
    });
    document.getElementById('current-time').textContent = timeString;
}

// Update every second
setInterval(updateDateTime, 1000);
updateDateTime();

// Weather Widget (Simulated - In production, use a real weather API)
function updateWeather() {
    // Simulated weather data for Kampala
    const weatherConditions = [
        { temp: '26°C', condition: 'Sunny', icon: '☀️' },
        { temp: '24°C', condition: 'Partly Cloudy', icon: '⛅' },
        { temp: '23°C', condition: 'Cloudy', icon: '☁️' },
        { temp: '22°C', condition: 'Rainy', icon: '🌧️' }
    ];
    
    // Randomly select weather (in production, fetch from API)
    const weather = weatherConditions[Math.floor(Math.random() * weatherConditions.length)];
    document.getElementById('weather').textContent = `${weather.temp} ${weather.icon}`;
}

updateWeather();

// Events Data
const eventsData = [
    {
        title: 'Sunday Worship Service',
        date: 'Oct 6, 2025',
        time: '9:00 AM - 12:00 PM',
        location: 'Main Sanctuary',
        description: 'Join us for a powerful time of worship, teaching, and fellowship as we gather together.',
        image: 'https://images.unsplash.com/photo-1507692049790-de58290a4334?w=800'
    },
    {
        title: 'Youth Conference 2025',
        date: 'Oct 15-17, 2025',
        time: 'All Day Event',
        location: 'Church Campus',
        description: 'Three days of transformative experiences for our young people with powerful speakers and worship.',
        image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800'
    },
    {
        title: 'Community Outreach',
        date: 'Oct 20, 2025',
        time: '10:00 AM - 4:00 PM',
        location: 'Downtown Kampala',
        description: 'Join us as we serve our community with food distribution, prayer, and sharing God\'s love.',
        image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800'
    },
    {
        title: 'Marriage Enrichment Seminar',
        date: 'Oct 25, 2025',
        time: '6:00 PM - 9:00 PM',
        location: 'Fellowship Hall',
        description: 'Strengthen your marriage with practical wisdom and biblical principles. Dinner included.',
        image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800'
    },
    {
        title: 'Prayer & Fasting Week',
        date: 'Nov 1-7, 2025',
        time: 'Daily Sessions',
        location: 'Church Campus',
        description: 'A dedicated week of prayer and fasting as we seek God\'s face together as a community.',
        image: 'https://images.unsplash.com/photo-1484069560501-87d72b0c3669?w=800'
    },
    {
        title: 'Christmas Concert',
        date: 'Dec 15, 2025',
        time: '7:00 PM',
        location: 'Main Sanctuary',
        description: 'Celebrate the season with beautiful music, carols, and a special message of hope.',
        image: 'https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=800'
    }
];

// Populate Events
function displayEvents() {
    const eventsContainer = document.getElementById('events-container');
    eventsContainer.innerHTML = '';
    
    eventsData.forEach(event => {
        const eventCard = document.createElement('div');
        eventCard.className = 'event-card';
        eventCard.innerHTML = `
            <div class="event-image">
                <img src="${event.image}" alt="${event.title}" onerror="this.style.display='none'">
                <div class="event-date">${event.date}</div>
            </div>
            <div class="event-content">
                <h3>${event.title}</h3>
                <div class="event-info">
                    <span><i class="fas fa-clock"></i> ${event.time}</span>
                    <span><i class="fas fa-map-marker-alt"></i> ${event.location}</span>
                </div>
                <p>${event.description}</p>
                <button class="btn btn-primary">Learn More</button>
            </div>
        `;
        eventsContainer.appendChild(eventCard);
    });
}

displayEvents();

// Membership Spotlight Data
const spotlightMembers = [
    {
        name: 'Patience Akena',
        role: 'Worship Leader',
        avatar: 'SN',
        testimony: 'Serving in worship has transformed my life. God has used this ministry to deepen my faith and help others encounter His presence.'
    },
    {
        name: 'Mbabazi Jane',
        role: 'Youth Leader',
        avatar: 'DO',
        testimony: 'Watching young people discover their purpose in Christ is the greatest joy. Every week brings new testimonies of transformation.'
    },
    {
        name: 'Nalukenge Raheal & Nanteza Kevin',
        role: 'Children\'s Ministry Director',
        avatar: 'GN',
        testimony: 'There\'s nothing more rewarding than seeing children fall in love with Jesus. Their faith inspires me every single day.'
    },
    {
        name: 'Mrs.Akena Janifer',
        role: 'Outreach Coordinator',
        avatar: 'EK',
        testimony: 'Serving the community has opened my eyes to God\'s heart for the lost. Every outreach is an adventure in faith.'
    }
];

// Display Membership Spotlight
function displaySpotlight() {
    const spotlightContainer = document.getElementById('spotlight-container');
    spotlightContainer.innerHTML = '';
    
    spotlightMembers.forEach(member => {
        const spotlightCard = document.createElement('div');
        spotlightCard.className = 'spotlight-card';
        spotlightCard.innerHTML = `
            <div class="spotlight-avatar">${member.avatar}</div>
            <h3>${member.name}</h3>
            <p class="spotlight-role">${member.role}</p>
            <p>${member.testimony}</p>
        `;
        spotlightContainer.appendChild(spotlightCard);
    });
}

displaySpotlight();

// Sermons Data
const sermonsData = [
    {
        title: 'Walking in Faith',
        speaker: 'Pastor John Mugisha',
        date: 'Sep 29, 2025',
        duration: '45 min',
        series: 'Faith Series'
    },
    {
        title: 'The Power of Prayer',
        speaker: 'Pastor Sarah Namukasa',
        date: 'Sep 22, 2025',
        duration: '38 min',
        series: 'Prayer Life'
    },
    {
        title: 'Living with Purpose',
        speaker: 'Pastor John Mugisha',
        date: 'Sep 15, 2025',
        duration: '42 min',
        series: 'Purpose Driven'
    },
    {
        title: 'Grace Unmerited',
        speaker: 'Guest Speaker - Rev. David Kityo',
        date: 'Sep 8, 2025',
        duration: '50 min',
        series: 'Grace Series'
    },
    {
        title: 'Building Strong Families',
        speaker: 'Pastor Sarah Namukasa',
        date: 'Sep 1, 2025',
        duration: '44 min',
        series: 'Family Foundations'
    },
    {
        title: 'The Heart of Worship',
        speaker: 'Pastor John Mugisha',
        date: 'Aug 25, 2025',
        duration: '40 min',
        series: 'Worship Series'
    }
];

// Display Sermons
function displaySermons() {
    const sermonsContainer = document.getElementById('sermons-container');
    sermonsContainer.innerHTML = '';
    
    sermonsData.forEach(sermon => {
        const sermonCard = document.createElement('div');
        sermonCard.className = 'sermon-card';
        sermonCard.innerHTML = `
            <div class="sermon-thumbnail">
                <div class="play-button">
                    <i class="fas fa-play"></i>
                </div>
            </div>
            <div class="sermon-content">
                <h3>${sermon.title}</h3>
                <div class="sermon-meta">
                    <span><i class="fas fa-user"></i> ${sermon.speaker}</span>
                    <span><i class="fas fa-calendar"></i> ${sermon.date}</span>
                    <span><i class="fas fa-clock"></i> ${sermon.duration}</span>
                </div>
                <p><strong>Series:</strong> ${sermon.series}</p>
                <button class="btn btn-primary">Watch Now</button>
            </div>
        `;
        sermonsContainer.appendChild(sermonCard);
    });
}

displaySermons();

// Contact Form Submission
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    contactForm.reset();
});

// Get Directions Button
const getDirectionsBtn = document.getElementById('getDirections');
if (getDirectionsBtn) {
    getDirectionsBtn.addEventListener('click', () => {
        // Church address (update with actual coordinates)
        const churchAddress = '123 Faith Street, Kampala, Uganda';
        const encodedAddress = encodeURIComponent(churchAddress);
        
        // Open Google Maps with directions
        const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`;
        window.open(mapsUrl, '_blank');
    });
}

// Newsletter Form Submission
const newsletterForms = document.querySelectorAll('.newsletter-form');
newsletterForms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for subscribing to our newsletter!');
        form.reset();
    });
});

// Scroll Animation for Elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections
document.querySelectorAll('.service-card, .event-card, .spotlight-card, .sermon-card, .ministry-card, .give-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 5px 30px rgba(0, 0, 0, 0.15)';
    }
    
    lastScroll = currentScroll;
});

// Add click animations to buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        // Create ripple effect
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Initialize everything on page load
document.addEventListener('DOMContentLoaded', () => {
    console.log('Grace Cathedral Website Loaded Successfully!');
    
    // Add entrance animation to hero
    const heroContent = document.querySelector('.hero-content');
    setTimeout(() => {
        heroContent.style.opacity = '1';
    }, 100);
});