import gsap from 'gsap';

const reseaux = document.querySelector('.reseaux');

zone.addEventListener('mousemove', (event) => {
    const rect = reseaux.getBoundingClientRect();
    const x = gsap.utils.mapRange(rect.left, rect.right, -rect.width / 2, rect.width / 2, event.clientX);
    const y = gsap.utils.mapRange(rect.top, rect.bottom, -rect.height / 2, rect.height / 2, event.clientY);
    
    gsap.to(".reseaux", {
        x: x * strength,
        y: y * strength,
        duration: 0.4,
        ease: 'power2.out',
        overwrite: true
    });
});

zone.addEventListener('mouseleave', () => {
    gsap.to(".reseaux", {
        x: 0,
        y: 0,
        duration: 0.7,
        ease: 'elastic.out(1, 0.4)',
        overwrite: true
    });
});
