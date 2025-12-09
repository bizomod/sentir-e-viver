document.addEventListener('DOMContentLoaded', (event) => {
    const preloader = document.getElementById('preloader');
    const mainContent = document.getElementById('main-content');
    
    const hasSeenPreloader = sessionStorage.getItem('hasSeenPreloader');

    if (hasSeenPreloader) {
        preloader.style.display = 'none';
        mainContent.style.opacity = '1';

    } else {
        sessionStorage.setItem('hasSeenPreloader', 'true');

        const delayDuration = 3000; 
        const preloaderFadeDuration = 500; 

        setTimeout(() => {
            preloader.style.opacity = '0'; 

            setTimeout(() => {
                preloader.style.display = 'none';
                mainContent.style.opacity = '1';
            }, preloaderFadeDuration); 
            
        }, delayDuration); 
    }
});