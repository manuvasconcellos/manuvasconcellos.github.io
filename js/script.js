
document.addEventListener('DOMContentLoaded', () => {
    console.log("Portfólio de Engenharia carregado com sucesso.");

   
    const footer = document.querySelector('footer p');
    const currentYear = new Date().getFullYear();
    footer.innerHTML += ` - ${currentYear}`;

    
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const section = document.querySelector(this.getAttribute('href'));
            section.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});