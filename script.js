// // LOGO Shrink on Scroll
// window.addEventListener('scroll', function () {
//     const navbar = document.querySelector('.navbar');
//     if (window.scrollY > 100) {
//         navbar.classList.add('scrolled');
//     } else {
//         navbar.classList.remove('scrolled');
//     }
// });

// // Smooth Scroll Animations with GSAP
// gsap.registerPlugin(ScrollTrigger);

// gsap.utils.toArray('.project-card').forEach((card) => {
//     gsap.from(card, {
//         opacity: 0,
//         y: 50,
//         duration: 1,
//         scrollTrigger: {
//             trigger: card,
//             start: 'top 80%',
//             toggleActions: 'play none none reverse'
//         }
//     });
// });

// // Video Hover Auto Play & Pause
// const projectCards = document.querySelectorAll('.project-card video');

// projectCards.forEach(video => {
//     video.parentElement.addEventListener('mouseenter', () => video.play());
//     video.parentElement.addEventListener('mouseleave', () => video.pause());
// });

// // Sidebar Functionality
// const aboutLink = document.getElementById('about-link');
// const sidebar = document.getElementById('sidebar');
// const closeBtn = document.getElementById('close-btn');
// const overlay = document.createElement('div'); // Create overlay dynamically
// overlay.classList.add('overlay');
// document.body.appendChild(overlay);

// aboutLink.addEventListener('click', (e) => {
//     e.preventDefault();
//     sidebar.classList.add('open');
//     overlay.classList.add('active');
// });

// closeBtn.addEventListener('click', () => {
//     sidebar.classList.remove('open');
//     overlay.classList.remove('active');
// });

// overlay.addEventListener('click', () => {
//     sidebar.classList.remove('open');
//     overlay.classList.remove('active');
// });

// // Social Pop-up Functionality
// const contactLink = document.getElementById('contact-link');
// const socialPopup = document.getElementById('social-popup');
// const closeSocialBtn = document.getElementById('close-social-btn');

// contactLink.addEventListener('click', (e) => {
//     e.preventDefault();
//     socialPopup.classList.add('open');
//     overlay.classList.add('active');
// });

// closeSocialBtn.addEventListener('click', () => {
//     socialPopup.classList.remove('open');
//     overlay.classList.remove('active');
// });

// overlay.addEventListener('click', () => {
//     socialPopup.classList.remove('open');
//     overlay.classList.remove('active');
// });

// // Hamburger Menu Functionality
// const hamburger = document.getElementById('hamburger');
// const navLinks = document.querySelector('.nav-links');

// hamburger.addEventListener('click', () => {
//     navLinks.classList.toggle('active');
// });

// // Animate Sidebar Content with GSAP
// gsap.from('.sidebar h1, .sidebar .subtitle, .sidebar .about-content p, .sidebar hr', {
//     opacity: 0,
//     y: 20,
//     stagger: 0.2,
//     duration: 0.5,
//     delay: 0.3,
//     ease: 'power2.out',
// });

// window.addEventListener('scroll', function () {
//     const navbar = document.querySelector('.navbar');
//     const logoImage = document.getElementById('logo-image');

//     if (window.scrollY > 100) {
//         navbar.classList.add('scrolled');
//     } else {
//         navbar.classList.remove('scrolled');
//     }
// });




//  LOGO Shrink on Scroll
// window.addEventListener('scroll', function () {
//     const navbar = document.querySelector('.navbar');
//     if (window.scrollY > 100) {
//         navbar.classList.add('scrolled');
//     } else {
//         navbar.classList.remove('scrolled');
//     }
// });

// // Smooth Scroll Animations with GSAP
// gsap.registerPlugin(ScrollTrigger);

// gsap.utils.toArray('.project-card').forEach((card) => {
//     gsap.from(card, {
//         opacity: 0,
//         y: 50,
//         duration: 1,
//         scrollTrigger: {
//             trigger: card,
//             start: 'top 80%',
//             toggleActions: 'play none none reverse'
//         }
//     });
// });

// // Video Hover Auto Play & Pause
// const projectCards = document.querySelectorAll('.project-card video');

// projectCards.forEach(video => {
//     video.parentElement.addEventListener('mouseenter', () => video.play());
//     video.parentElement.addEventListener('mouseleave', () => video.pause());
// });

// Shared functionality for all pages
document.addEventListener('DOMContentLoaded', function() {
    // About Popup
    const aboutLink = document.getElementById('about-link');
    const sidebar = document.getElementById('sidebar');
    const closeBtn = document.getElementById('close-btn');
    
    // Contact Popup
    const contactLink = document.getElementById('contact-link');
    const socialPopup = document.getElementById('social-popup');
    const closeSocialBtn = document.getElementById('close-social-btn');
    
    // Overlay (shared)
    const overlay = document.getElementById('overlay');

    if (aboutLink && sidebar) {
        aboutLink.addEventListener('click', (e) => {
            e.preventDefault();
            sidebar.classList.add('open');
            overlay.classList.add('active');
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            sidebar.classList.remove('open');
            overlay.classList.remove('active');
        });
    }

    if (contactLink && socialPopup) {
        contactLink.addEventListener('click', (e) => {
            e.preventDefault();
            socialPopup.classList.add('open');
            overlay.classList.add('active');
        });
    }

    if (closeSocialBtn) {
        closeSocialBtn.addEventListener('click', () => {
            socialPopup.classList.remove('open');
            overlay.classList.remove('active');
        });
    }

    if (overlay) {
        overlay.addEventListener('click', () => {
            sidebar.classList.remove('open');
            socialPopup.classList.remove('open');
            overlay.classList.remove('active');
        });
    }

    // Hamburger menu (if exists on page)
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
});