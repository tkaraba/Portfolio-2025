document.addEventListener('DOMContentLoaded', function() {
    // Logo Shrink on Scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // GSAP Animations
    if (typeof gsap !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);

        // Project Card Animations
        gsap.utils.toArray('.project-card').forEach((card) => {
            gsap.from(card, {
                opacity: 0,
                y: 50,
                duration: 1,
                scrollTrigger: {
                    trigger: card,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                }
            });
        });

        // Sidebar Content Animation
        gsap.from('.sidebar h1, .sidebar .subtitle, .sidebar .about-content p, .sidebar hr', {
            opacity: 0,
            y: 20,
            stagger: 0.2,
            duration: 0.5,
            delay: 0.3,
            ease: 'power2.out',
        });
    }

    // Lazy Load Videos
    const lazyVideos = [].slice.call(document.querySelectorAll('video[data-src]'));
    if ('IntersectionObserver' in window) {
        let lazyVideoObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(video) {
                if (video.isIntersecting) {
                    for (var source in video.target.children) {
                        var videoSource = video.target.children[source];
                        if (typeof videoSource.tagName === 'string' && videoSource.tagName === 'SOURCE') {
                            videoSource.src = videoSource.dataset.src;
                        }
                    }
                    video.target.load();
                    lazyVideoObserver.unobserve(video.target);
                }
            });
        });
        lazyVideos.forEach(function(lazyVideo) {
            lazyVideoObserver.observe(lazyVideo);
        });
    }
          
    // Video Hover Auto Play & Pause
    const projectCards = document.querySelectorAll('.project-card video');
    projectCards.forEach(video => {
        const card = video.closest('.project-card');
        if (card) {
            card.addEventListener('mouseenter', () => video.play());
            card.addEventListener('mouseleave', () => video.pause());
        }
    });

    // HERO VIDEO CONTROLS (FIXED VERSION)
    const heroVideo = document.getElementById('heroVideo');
    const unmuteBtn = document.getElementById('unmuteBtn');

    if (heroVideo && unmuteBtn) {
        // Always show the button
        unmuteBtn.style.display = 'block';
        
        // Try to play video (with error handling)
        const playVideo = () => {
            heroVideo.play()
                .then(() => {
                    // Video is playing
                    unmuteBtn.textContent = heroVideo.muted ? 'Unmute' : 'Mute';
                })
                .catch(error => {
                    // Autoplay was blocked
                    unmuteBtn.textContent = 'Play Video';
                    console.log('Autoplay blocked:', error);
                });
        };

        // Initial attempt to play
        playVideo();

        // Unmute button functionality
        unmuteBtn.addEventListener('click', function() {
            if (heroVideo.paused) {
                // If video isn't playing, start playback first
                playVideo();
            } else {
                // Toggle mute state
                heroVideo.muted = !heroVideo.muted;
                unmuteBtn.textContent = heroVideo.muted ? 'Unmute' : 'Mute';
            }
        });


        // Fallback for touch devices
        heroVideo.addEventListener('click', function() {
            if (heroVideo.paused) {
                playVideo();
            }
        });
    }

    // About Popup
    const aboutLink = document.getElementById('about-link');
    const sidebar = document.getElementById('sidebar');
    const closeBtn = document.getElementById('close-btn');
    
    // Contact Popup
    const contactLink = document.getElementById('contact-link');
    const socialPopup = document.getElementById('social-popup');
    const closeSocialBtn = document.getElementById('close-social-btn');
    
    // Overlay (shared)
    const overlay = document.getElementById('overlay') || document.createElement('div');
    if (!document.getElementById('overlay')) {
        overlay.id = 'overlay';
        overlay.classList.add('overlay');
        document.body.appendChild(overlay);
    }

    // About sidebar toggle
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

    // Contact popup toggle
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

    // Overlay click handler
    if (overlay) {
        overlay.addEventListener('click', () => {
            sidebar.classList.remove('open');
            socialPopup.classList.remove('open');
            overlay.classList.remove('active');
        });
    }

    // Hamburger menu toggle
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
});