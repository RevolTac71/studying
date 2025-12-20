document.addEventListener('DOMContentLoaded', () => {
    
    const navLinks = document.querySelectorAll('.nav-link');
    const contentTabs = document.querySelectorAll('.content-tab');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            const targetTab = link.getAttribute('data-tab');

            contentTabs.forEach(tab => {
                tab.classList.add('hidden');
            });

            document.getElementById(targetTab).classList.remove('hidden');

            navLinks.forEach(nav => {
                nav.classList.remove('text-blue-600', 'bg-blue-50'); 
                nav.classList.add('text-gray-500'); 
            });

            link.classList.remove('text-gray-500');
            link.classList.add('text-blue-600', 'bg-blue-50');
        });
    });


    const textToType = "안녕하세요! 👋 빅데이터융합전공 양승규입니다.";
    const typeSpeed = 100; 
    const typeTarget = document.getElementById("typewriter");
    let charIndex = 0;

    function typeWriter() {
        if (charIndex < textToType.length) {
            typeTarget.textContent += textToType.charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, typeSpeed);
        }
    }

    typeWriter();

});
