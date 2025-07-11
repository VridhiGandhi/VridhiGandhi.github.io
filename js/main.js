(function(html) {

    'use strict';

    const cfg = {

        // MailChimp URL
        mailChimpURL : 'https://facebook.us1.list-manage.com/subscribe/post?u=1abf75f6981256963a47d197a&amp;id=37c6d8f4d6' 

    };


   /* preloader
    * -------------------------------------------------- */
    const ssPreloader = function() {

        const siteBody = document.querySelector('body');
        const preloader = document.querySelector('#preloader');
        if (!preloader) return;

        html.classList.add('ss-preload');
        
        window.addEventListener('load', function() {
            html.classList.remove('ss-preload');
            html.classList.add('ss-loaded');
            
            preloader.addEventListener('transitionend', function afterTransition(e) {
                if (e.target.matches('#preloader'))  {
                    siteBody.classList.add('ss-show');
                    e.target.style.display = 'none';
                    preloader.removeEventListener(e.type, afterTransition);
                }
            });
        });

    }; // end ssPreloader


   /* mobile menu
    * ---------------------------------------------------- */ 
    const ssMobileMenu = function() {

        const toggleButton = document.querySelector('.s-header__menu-toggle');
        const mainNavWrap = document.querySelector('.s-header__nav');
        const siteBody = document.querySelector('body');

        if (!(toggleButton && mainNavWrap)) return;

        toggleButton.addEventListener('click', function(e) {
            e.preventDefault();
            toggleButton.classList.toggle('is-clicked');
            siteBody.classList.toggle('menu-is-open');
        });

        mainNavWrap.querySelectorAll('.s-header__nav a').forEach(function(link) {

            link.addEventListener("click", function(event) {

                // at 900px and below
                if (window.matchMedia('(max-width: 900px)').matches) {
                    toggleButton.classList.toggle('is-clicked');
                    siteBody.classList.toggle('menu-is-open');
                }
            });
        });

        window.addEventListener('resize', function() {

            // above 900px
            if (window.matchMedia('(min-width: 901px)').matches) {
                if (siteBody.classList.contains('menu-is-open')) siteBody.classList.remove('menu-is-open');
                if (toggleButton.classList.contains('is-clicked')) toggleButton.classList.remove('is-clicked');
            }
        });

    }; // end ssMobileMenu
   /* glightbox
    * ------------------------------------------------------ */ 
    const ssGLightbox = function() {

        const lightbox = GLightbox({
            selector: '.glightbox',
            zoomable: false,
            touchNavigation: true,
            loop: false,
            autoplayVideos: true,
            svg: {
                close: '<svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z"/></svg>',
                prev: '<svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m9.474 5.209s-4.501 4.505-6.254 6.259c-.147.146-.22.338-.22.53s.073.384.22.53c1.752 1.754 6.252 6.257 6.252 6.257.145.145.336.217.527.217.191-.001.383-.074.53-.221.293-.293.294-.766.004-1.057l-4.976-4.976h14.692c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-14.692l4.978-4.979c.289-.289.287-.761-.006-1.054-.147-.147-.339-.221-.53-.221-.191-.001-.38.071-.525.215z" fill-rule="nonzero"/></svg>',
                next: '<svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m14.523 18.787s4.501-4.505 6.255-6.26c.146-.146.219-.338.219-.53s-.073-.383-.219-.53c-1.753-1.754-6.255-6.258-6.255-6.258-.144-.145-.334-.217-.524-.217-.193 0-.385.074-.532.221-.293.292-.295.766-.004 1.056l4.978 4.978h-14.692c-.414 0-.75.336-.75.75s.336.75.75.75h14.692l-4.979 4.979c-.289.289-.286.762.006 1.054.148.148.341.222.533.222.19 0 .378-.072.522-.215z" fill-rule="nonzero"/></svg>'
            }
        });        

    } // end ssGLightbox



   /* swiper
    * ------------------------------------------------------ */ 
    const ssSwiper = function() {

        const homeSliderSwiper = new Swiper('.home-slider', {

            slidesPerView: 1,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                // when window width is > 400px
                401: {
                    slidesPerView: 1,
                    spaceBetween: 20
                },
                // when window width is > 800px
                801: {
                    slidesPerView: 2,
                    spaceBetween: 40
                },
                // when window width is > 1330px
                1331: {
                    slidesPerView: 3,
                    spaceBetween: 48
                },
                // when window width is > 1773px
                1774: {
                    slidesPerView: 4,
                    spaceBetween: 48
                }
            }
        });

        const pageSliderSwiper = new Swiper('.page-slider', {

            slidesPerView: 1,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                // when window width is > 400px
                401: {
                    slidesPerView: 1,
                    spaceBetween: 20
                },
                // when window width is > 800px
                801: {
                    slidesPerView: 2,
                    spaceBetween: 40
                },
                // when window width is > 1240px
                1241: {
                    slidesPerView: 3,
                    spaceBetween: 48
                }
            }
        });

    }; // end ssSwiper


   /* mailchimp form
    * ---------------------------------------------------- */ 
    const ssMailChimpForm = function() {

        const mcForm = document.querySelector('#mc-form');

        if (!mcForm) return;

        // Add novalidate attribute
        mcForm.setAttribute('novalidate', true);

        // Field validation
        function hasError(field) {

            // Don't validate submits, buttons, file and reset inputs, and disabled fields
            if (field.disabled || field.type === 'file' || field.type === 'reset' || field.type === 'submit' || field.type === 'button') return;

            // Get validity
            let validity = field.validity;

            // If valid, return null
            if (validity.valid) return;

            // If field is required and empty
            if (validity.valueMissing) return 'Please enter an email address.';

            // If not the right type
            if (validity.typeMismatch) {
                if (field.type === 'email') return 'Please enter a valid email address.';
            }

            // If pattern doesn't match
            if (validity.patternMismatch) {

                // If pattern info is included, return custom error
                if (field.hasAttribute('title')) return field.getAttribute('title');

                // Otherwise, generic error
                return 'Please match the requested format.';
            }

            // If all else fails, return a generic catchall error
            return 'The value you entered for this field is invalid.';

        };

        // Show error message
        function showError(field, error) {

            // Get field id or name
            let id = field.id || field.name;
            if (!id) return;

            let errorMessage = field.form.querySelector('.mc-status');

            // Update error message
            errorMessage.classList.remove('success-message');
            errorMessage.classList.add('error-message');
            errorMessage.innerHTML = error;

        };

        // Display form status (callback function for JSONP)
        window.displayMailChimpStatus = function (data) {

            // Make sure the data is in the right format and that there's a status container
            if (!data.result || !data.msg || !mcStatus ) return;

            // Update our status message
            mcStatus.innerHTML = data.msg;

            // If error, add error class
            if (data.result === 'error') {
                mcStatus.classList.remove('success-message');
                mcStatus.classList.add('error-message');
                return;
            }

            // Otherwise, add success class
            mcStatus.classList.remove('error-message');
            mcStatus.classList.add('success-message');
        };

        // Submit the form 
        function submitMailChimpForm(form) {

            let url = cfg.mailChimpURL;
            let emailField = form.querySelector('#mce-EMAIL');
            let serialize = '&' + encodeURIComponent(emailField.name) + '=' + encodeURIComponent(emailField.value);

            if (url == '') return;

            url = url.replace('/post?u=', '/post-json?u=');
            url += serialize + '&c=displayMailChimpStatus';

            // Create script with url and callback (if specified)
            var ref = window.document.getElementsByTagName( 'script' )[ 0 ];
            var script = window.document.createElement( 'script' );
            script.src = url;

            // Create global variable for the status container
            window.mcStatus = form.querySelector('.mc-status');
            window.mcStatus.classList.remove('error-message', 'success-message')
            window.mcStatus.innerText = 'Submitting...';

            // Insert script tag into the DOM
            ref.parentNode.insertBefore( script, ref );

            // After the script is loaded (and executed), remove it
            script.onload = function () {
                this.remove();
            };

        };

        // Check email field on submit
        mcForm.addEventListener('submit', function (event) {

            event.preventDefault();

            let emailField = event.target.querySelector('#mce-EMAIL');
            let error = hasError(emailField);

            if (error) {
                showError(emailField, error);
                emailField.focus();
                return;
            }

            submitMailChimpForm(this);

        }, false);

    }; // end ssMailChimpForm


   /* alert boxes
    * ------------------------------------------------------ */
    const ssAlertBoxes = function() {

        const boxes = document.querySelectorAll('.alert-box');
  
        boxes.forEach(function(box){

            box.addEventListener('click', function(e) {
                if (e.target.matches('.alert-box__close')) {
                    e.stopPropagation();
                    e.target.parentElement.classList.add('hideit');

                    setTimeout(function() {
                        box.style.display = 'none';
                    }, 500)
                }
            });
        })

    }; // end ssAlertBoxes


    /* Back to Top
    * ------------------------------------------------------ */
    const ssBackToTop = function() {

        const pxShow = 900;
        const goTopButton = document.querySelector(".ss-go-top");

        if (!goTopButton) return;

        // Show or hide the button
        if (window.scrollY >= pxShow) goTopButton.classList.add("link-is-visible");

        window.addEventListener('scroll', function() {
            if (window.scrollY >= pxShow) {
                if(!goTopButton.classList.contains('link-is-visible')) goTopButton.classList.add("link-is-visible")
            } else {
                goTopButton.classList.remove("link-is-visible")
            }
        });

    }; // end ssBackToTop


   /* smoothscroll
    * ------------------------------------------------------ */
    const ssMoveTo = function() {

        const easeFunctions = {
            easeInQuad: function (t, b, c, d) {
                t /= d;
                return c * t * t + b;
            },
            easeOutQuad: function (t, b, c, d) {
                t /= d;
                return -c * t* (t - 2) + b;
            },
            easeInOutQuad: function (t, b, c, d) {
                t /= d/2;
                if (t < 1) return c/2*t*t + b;
                t--;
                return -c/2 * (t*(t-2) - 1) + b;
            },
            easeInOutCubic: function (t, b, c, d) {
                t /= d/2;
                if (t < 1) return c/2*t*t*t + b;
                t -= 2;
                return c/2*(t*t*t + 2) + b;
            }
        }

        const triggers = document.querySelectorAll('.smoothscroll');
        
        const moveTo = new MoveTo({
            tolerance: 0,
            duration: 1200,
            easing: 'easeInOutCubic',
            container: window
        }, easeFunctions);

        triggers.forEach(function(trigger) {
            moveTo.registerTrigger(trigger);
        });

    }; // end ssMoveTo
       /* GA4 Logo Click Tracker
    * ------------------------------------------------------ */
const ssGA4LogoClicks = function () {
    const logos = [
        { id: 'home-logo-click', label: 'Home Header Logo Click' },
        { id: 'about-logo-click', label: 'About Header Logo Click' },
        { id: 'services-logo-click', label: 'Services Header Logo Click' },
        { id: 'certificates-logo-click', label: 'Certificates Header Logo Click' },
        { id: 'contact-logo-click', label: 'Contact Header Logo Click' }
    ];

    logos.forEach(item => {
        const el = document.getElementById(item.id);
        if (el) {
            el.addEventListener('click', function () {
                if (typeof gtag === 'function') {
                    gtag('event', 'logo_click', {
                        event_category: 'navigation',
                        event_label: item.label
                    });
                }
            });
        }
    });
};

       /* GA4 Menu Link Click Tracker
    * ------------------------------------------------------ */
    const ssGA4MenuClicks = function () {
        const links = [
            { id: 'home-nav-about', label: 'Home About' },
            { id: 'home-nav-services', label: 'Home Services' },
            { id: 'home-nav-certificates', label: 'Home Certificates' },
            { id: 'home-nav-contact', label: 'Home Contact' },
            { id: 'about-nav-about', label: 'About About' },
            { id: 'about-nav-services', label: 'About Services' },
            { id: 'about-nav-certificates', label: 'About Certificates' },
            { id: 'about-nav-contact', label: 'About Contact' },
            { id: 'services-nav-about', label: 'Services About' },
            { id: 'services-nav-services', label: 'Services Services' },
            { id: 'services-nav-certificates', label: 'Services Certificates' },
            { id: 'services-nav-contact', label: 'Services Contact' },
            { id: 'contact-nav-about', label: 'Contact About' },
            { id: 'contact-nav-services', label: 'Contact Services' },
            { id: 'contact-nav-certificates', label: 'Contact Certificates' },
            { id: 'contact-nav-contact', label: 'Contact Contact' },
            { id: 'certificates-nav-about', label: 'Certificates About' },
            { id: 'certificates-nav-services', label: 'Certificates Services' },
            { id: 'certificates-nav-certificates', label: 'Certificates Certificates' },
            { id: 'certificates-nav-contact', label: 'Certificates Contact' }
        ];

        links.forEach(link => {
            const el = document.getElementById(link.id);
            if (el) {
                el.addEventListener('click', function () {
                    if (typeof gtag === 'function') {
                        gtag('event', 'menu_click', {
                            event_category: 'navigation',
                            event_label: link.label
                        });
                    }
                });
            }
        });
    };
const ssGA4ResumeClicks = function () {
    const resumeButtons = [
        { id: 'home-resume-download', label: 'Home Resume Google Drive Link' },
        { id: 'about-resume-download', label: 'About Resume Google Drive Link' },
        { id: 'services-resume-download', label: 'Services Resume Google Drive Link' },
        { id: 'contact-resume-download', label: 'Contact Resume Google Drive Link' },
        { id: 'certificates-resume-download', label: 'Certificates Resume Google Drive Link' }
    ];

    resumeButtons.forEach(btn => {
        const el = document.getElementById(btn.id);
        if (el) {
            el.addEventListener('click', function () {
                if (typeof gtag === 'function') {
                    gtag('event', 'resume_click', {
                        event_category: 'download',
                        event_label: btn.label
                    });
                }
            });
        }
    });
};

    const ssGA4ScrollClick = function () {
    const scrollBtn = document.getElementById('home-scroll-click');
    if (scrollBtn) {
        scrollBtn.addEventListener('click', function () {
            if (typeof gtag === 'function') {
                gtag('event', 'scroll_prompt_click', {
                    event_category: 'navigation',
                    event_label: 'Home Scroll for More Click'
                });
            }
        });
    }
};
    const ssGA4SocialClicks = function () {
    const socialLinks = [
        { id: 'home-about-email-click', label: 'Home About Email' },
        { id: 'home-about-linkedin-click', label: 'Home About LinkedIn' },
        { id: 'home-about-whatsapp-click', label: 'Home About WhatsApp' },
        { id: 'home-about-call-click', label: 'Home About Phone' },
        { id: 'home-about-instagram-click', label: 'Home About Instagram' },
        { id: 'contact-sendemail-click', label: 'Contact Send Me An Email' },
        { id: 'contact-social-email-click', label: 'Contatc Social Email' },
        { id: 'contact-social-linkedin-click', label: 'Contatc Social LinkedIn' },
        { id: 'contact-social-whatsapp-click', label: 'Contatc Social WhatsApp' },
        { id: 'contact-social-call-click', label: 'Contatc Social Phone' },
        { id: 'contact-social-instagram-click', label: 'Contatc Social Instagram' },
        { id: 'contact-socialblock-email-click', label: 'Contatc Social Block Email' },
        { id: 'contact-socialblock-call-click', label: 'Contatc Social Block Phone' }
    ];

    socialLinks.forEach(link => {
        const el = document.getElementById(link.id);
        if (el) {
            el.addEventListener('click', function () {
                if (typeof gtag === 'function') {
                    gtag('event', 'social_click', {
                        event_category: 'social',
                        event_label: link.label
                    });
                }
            });
        }
    });
};
    const ssGA4AboutMoreClick = function () {
    const btn = document.getElementById('home-about-more-click');
    if (btn) {
        btn.addEventListener('click', function () {
            if (typeof gtag === 'function') {
                gtag('event', 'about_more_click', {
                    event_category: 'navigation',
                    event_label: 'Home More About Me Button'
                });
            }
        });
    }
};
    const ssGA4ServicesClick = function () {
    const btn = document.getElementById('home-services-view-click');
    if (btn) {
        btn.addEventListener('click', function () {
            if (typeof gtag === 'function') {
                gtag('event', 'services_view_click', {
                    event_category: 'navigation',
                    event_label: 'Home View All Services Button'
                });
            }
        });
    }
};
    /* GA4 Client Logo Click Tracker
* ------------------------------------------------------ */
const ssGA4ClientLogoClicks = function () {
    const logoClickMap = [
        { id: 'home-client-streambox', label: 'Home StreamBox Logo' },
        { id: 'home-client-aari', label: 'Home AARI Logo' },
        { id: 'home-client-finqy', label: 'Home FinQy Logo' },
        { id: 'home-client-enpointe', label: 'Home Enpointe Logo' },
        { id: 'home-client-merkle', label: 'Home Merkle Logo' },
    ];

    logoClickMap.forEach(item => {
        const el = document.getElementById(item.id);
        if (el) {
            el.addEventListener('click', function () {
                if (typeof gtag === 'function') {
                    gtag('event', 'client_logo_click', {
                        event_category: 'clients',
                        event_label: item.label
                    });
                }
            });
        }
    });
};
    /* GA4 Let's Work Together Button Click Tracker
* ------------------------------------------------------ */
const ssGA4LetsWorkClick = function () {
    const buttons = [
        { id: 'home-lets-work-click', label: "Home Let's Work Together Button" },
        { id: 'about-lets-work-click', label: "About Let's Work Together Button" },
        { id: 'services-lets-work-click', label: "Services Let's Work Together Button" },
        { id: 'certificates-lets-work-click', label: "Certificates Let's Work Together Button" }
    ];

    buttons.forEach(btn => {
        const el = document.getElementById(btn.id);
        if (el) {
            el.addEventListener('click', function () {
                if (typeof gtag === 'function') {
                    gtag('event', 'lets_work_click', {
                        event_category: 'navigation',
                        event_label: btn.label
                    });
                }
            });
        }
    });
};

    const ssGA4FooterMenuClicks = function () {
    const links = [
        { id: 'home-footer-home', label: 'Home Home - Footer' },
        { id: 'home-footer-about', label: 'Home About - Footer' },
        { id: 'home-footer-services', label: 'Home Services - Footer' },
        { id: 'home-footer-certificates', label: 'Home Certificates - Footer' },
        { id: 'home-footer-contact', label: 'Home Contact - Footer' },
        { id: 'about-footer-home', label: 'About Home - Footer' },
        { id: 'about-footer-about', label: 'About About - Footer' },
        { id: 'about-footer-services', label: 'About Services - Footer' },
        { id: 'about-footer-certificates', label: 'About Certificates - Footer' },
        { id: 'about-footer-contact', label: 'About Contact - Footer' },
        { id: 'services-footer-home', label: 'Services Home - Footer' },
        { id: 'services-footer-about', label: 'Services About - Footer' },
        { id: 'services-footer-services', label: 'Services Services - Footer' },
        { id: 'services-footer-certificates', label: 'Services Certificates - Footer' },
        { id: 'services-footer-contact', label: 'Services Contact - Footer' },
        { id: 'contact-footer-home', label: 'Contact Home - Footer' },
        { id: 'contact-footer-about', label: 'Contact About - Footer' },
        { id: 'contact-footer-services', label: 'Contact Services - Footer' },
        { id: 'contact-footer-certificates', label: 'Contact Certificates - Footer' },
        { id: 'contact-footer-contact', label: 'Contact Contact - Footer' },
         { id: 'certificates-footer-home', label: 'Certificates Home - Footer' },
        { id: 'certificates-footer-about', label: 'Certificates About - Footer' },
        { id: 'certificates-footer-services', label: 'Certificates Services - Footer' },
        { id: 'certificates-footer-certificates', label: 'Certificates Certificates - Footer' },
        { id: 'certificates-footer-contact', label: 'Certificates Contact - Footer' }
    ];

    links.forEach(link => {
        const el = document.getElementById(link.id);
        if (el) {
            el.addEventListener('click', function () {
                if (typeof gtag === 'function') {
                    gtag('event', 'menu_click', {
                        event_category: 'navigation',
                        event_label: link.label
                    });
                }
            });
        }
    });
};
    const ssGA4FooterSocialClicks = function () {
    const socialLinks = [
        { id: 'home-footer-email-click', label: 'Home Footer - Email' },
        { id: 'home-footer-linkedin-click', label: 'Home Footer - LinkedIn' },
        { id: 'home-footer-whatsapp-click', label: 'Home Footer - WhatsApp' },
        { id: 'home-footer-call-click', label: 'Home Footer - Call' },
        { id: 'home-footer-instagram-click', label: 'Home Footer - Instagram' },
        { id: 'about-footer-email-click', label: 'About Footer - Email' },
        { id: 'about-footer-linkedin-click', label: 'About Footer - LinkedIn' },
        { id: 'about-footer-whatsapp-click', label: 'About Footer - WhatsApp' },
        { id: 'about-footer-call-click', label: 'About Footer - Call' },
        { id: 'about-footer-instagram-click', label: 'About Footer - Instagram' },
        { id: 'services-footer-email-click', label: 'Services Footer - Email' },
        { id: 'services-footer-linkedin-click', label: 'Services Footer - LinkedIn' },
        { id: 'services-footer-whatsapp-click', label: 'Services Footer - WhatsApp' },
        { id: 'services-footer-call-click', label: 'Services Footer - Call' },
        { id: 'services-footer-instagram-click', label: 'Services Footer - Instagram' },
        { id: 'contact-footer-email-click', label: 'Contact Footer - Email' },
        { id: 'contact-footer-linkedin-click', label: 'Contact Footer - LinkedIn' },
        { id: 'contact-footer-whatsapp-click', label: 'Contact Footer - WhatsApp' },
        { id: 'contact-footer-call-click', label: 'Contact Footer - Call' },
        { id: 'contact-footer-instagram-click', label: 'Contact Footer - Instagram' },
        { id: 'certificates-footer-email-click', label: 'Certificates Footer - Email' },
        { id: 'certificates-footer-linkedin-click', label: 'Certificates Footer - LinkedIn' },
        { id: 'certificates-footer-whatsapp-click', label: 'Certificates Footer - WhatsApp' },
        { id: 'certificates-footer-call-click', label: 'Certificates Footer - Call' },
        { id: 'certificates-footer-instagram-click', label: 'Certificates Footer - Instagram' }
    ];

    socialLinks.forEach(link => {
        const el = document.getElementById(link.id);
        if (el) {
            el.addEventListener('click', function () {
                if (typeof gtag === 'function') {
                    gtag('event', 'social_click', {
                        event_category: 'social_footer',
                        event_label: link.label
                    });
                }
            });
        }
    });
};
const ssGA4BackToTopClick = function () {
    const buttons = [
        { id: 'back-to-top-click', label: 'Home Back to Top Button' },
        { id: 'about-to-top-click', label: 'About Back to Top Button' },
        { id: 'services-to-top-click', label: 'Services Back to Top Button' },
        { id: 'contact-to-top-click', label: 'Contact Back to Top Button' },
        { id: 'certificates-to-top-click', label: 'Certificates Back to Top Button' }
    ];

    buttons.forEach(btn => {
        const el = document.getElementById(btn.id);
        if (el) {
            el.addEventListener('click', function () {
                if (typeof gtag === 'function') {
                    gtag('event', 'back_to_top_click', {
                        event_category: 'navigation',
                        event_label: btn.label
                    });
                }
            });
        }
    });
};
    const ssGA4CertificateClicks = function () {
    const certs = [
        { id: 'cert-applied-data-science', label: 'Applied Data Science Capstone' },
        { id: 'cert-code-yourself', label: 'Code Yourself! An Introduction to Programming' },
        { id: 'cert-data-analysis-python', label: 'Data Analysis with Python' },
        { id: 'cert-data-visualization-python', label: 'Data Visualization with Python' },
        { id: 'cert-sql-python', label: 'Databases and SQL for Data Science with Python' },
        { id: 'cert-improving-dnn', label: 'Improving Deep Neural Networks' },
        { id: 'cert-learning-how-to-learn', label: 'Learning How to Learn' },
        { id: 'cert-ml-classification', label: 'ML - Classification' },
        { id: 'cert-ml-clustering', label: 'ML - Clustering & Retrieval' },
        { id: 'cert-ml-regression', label: 'ML - Regression' },
        { id: 'cert-ml-foundations', label: 'ML Foundations - Case Study' },
        { id: 'cert-nn-deep-learning', label: 'Neural Networks and Deep Learning' },
        { id: 'cert-python-ai', label: 'Python for Data Science, AI & Dev' },
        { id: 'cert-python-intro', label: 'Python Programming - Intro' },
        { id: 'cert-time-series', label: 'Sequences, Time Series & Prediction' },
        { id: 'cert-statistics-python', label: 'Statistics for DS with Python' },
        { id: 'cert-ml-structure', label: 'Structuring ML Projects' },
        { id: 'cert-ml-power', label: 'The Power of ML' },
        { id: 'cert-tools-ds', label: 'Tools for Data Science' }
    ];

    certs.forEach(cert => {
        const el = document.getElementById(cert.id);
        if (el) {
            el.addEventListener('click', function () {
                if (typeof gtag === 'function') {
                    gtag('event', 'certificate_click', {
                        event_category: 'certificates',
                        event_label: cert.label
                    });
                }
            });
        }
    });
};











    





   /* Initialize
    * ------------------------------------------------------ */
    (function ssInit() {

        ssPreloader();
        ssMobileMenu();
        ssGLightbox();
        ssSwiper();
        ssMailChimpForm();
        ssAlertBoxes();
        ssMoveTo();
        ssGA4LogoClicks();
        ssGA4MenuClicks();
        ssGA4ResumeClicks();
        ssGA4ScrollClick(); 
        ssGA4SocialClicks();
        ssGA4AboutMoreClick();
        ssGA4ServicesClick();
        ssGA4ClientLogoClicks();
        ssGA4LetsWorkClick();
        ssGA4FooterMenuClicks();
        ssGA4FooterSocialClicks();
        ssGA4BackToTopClick();
        ssGA4CertificateClicks();







    })();

})(document.documentElement);
