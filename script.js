 // Image gallery functionality
        const galleryImages = document.querySelectorAll('.gallery-image');
        const navDots = document.querySelectorAll('.nav-dot');
        let currentImageIndex = 0;

        // Auto-advance images
        function showNextImage() {
            galleryImages[currentImageIndex].classList.remove('active');
            navDots[currentImageIndex].classList.remove('active');
            
            currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
            
            galleryImages[currentImageIndex].classList.add('active');
            navDots[currentImageIndex].classList.add('active');
        }

        // Manual navigation
        navDots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                galleryImages[currentImageIndex].classList.remove('active');
                navDots[currentImageIndex].classList.remove('active');
                
                currentImageIndex = index;
                
                galleryImages[currentImageIndex].classList.add('active');
                navDots[currentImageIndex].classList.add('active');
            });
        });

        // Auto-advance every 4 seconds
        setInterval(showNextImage, 4000);

        // Copy phone number functionality
        function copyPhone(phoneNumber) {
            navigator.clipboard.writeText(phoneNumber).then(() => {
                showToast();
            }).catch(() => {
                // Fallback for older browsers
                const textArea = document.createElement('textarea');
                textArea.value = phoneNumber;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
                showToast();
            });
        }

        function showToast() {
            const toast = document.getElementById('toast');
            toast.classList.add('show');
            
            setTimeout(() => {
                toast.classList.remove('show');
            }, 3000);
        }

        // Animate elements on scroll
        function animateOnScroll() {
            const elements = document.querySelectorAll('.info-item, .amenity-item, .features-list li');
            
            elements.forEach((element, index) => {
                setTimeout(() => {
                    element.style.opacity = '0';
                    element.style.transform = 'translateY(20px)';
                    element.style.transition = 'all 0.6s ease-out';
                    
                    setTimeout(() => {
                        element.style.opacity = '1';
                        element.style.transform = 'translateY(0)';
                    }, 100);
                }, index * 100);
            });
        }

        // Run animation when page loads
        window.addEventListener('load', animateOnScroll);