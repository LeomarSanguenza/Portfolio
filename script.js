document.addEventListener('DOMContentLoaded', () => {
    const typingEffect = document.getElementById('typing-effect');
    const words = ["Developer", "Designer", "Freelancer"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentWord = words[wordIndex];
        typingEffect.textContent = isDeleting ? currentWord.substring(0, charIndex--) : currentWord.substring(0, charIndex++);

        if (!isDeleting && charIndex === currentWord.length) {
            setTimeout(() => isDeleting = true, 2000);
        } else if (isDeleting && charIndex === 0) {
            wordIndex = (wordIndex + 1) % words.length;
            isDeleting = false;
        }
        setTimeout(type, isDeleting ? 100 : 200);
    }

    type();
    // Dark and light mode toggle
    const modeToggleBtn = document.getElementById('mode-toggle');
    modeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
    });
    
});
const toggle = document.getElementById('toggle');
const body = document.body;

toggle.addEventListener('change', () => {
    if (toggle.checked) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
    }
});

// Set initial mode based on user preference or default to light mode
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    toggle.checked = true;
    body.classList.add('dark-mode');
} else {
    body.classList.add('light-mode');
}

