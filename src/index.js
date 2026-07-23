function Animation() {
    const strength = 0.4;

    document.querySelectorAll('.reseaux').forEach((link) => {
        link.addEventListener('mousemove', (event) => {
            const rect = link.getBoundingClientRect();
            const x = gsap.utils.mapRange(rect.left, rect.right, -rect.width / 2, rect.width / 2, event.clientX);
            const y = gsap.utils.mapRange(rect.top, rect.bottom, -rect.height / 2, rect.height / 2, event.clientY);

            gsap.to(link, {
                x: x * strength,
                y: y * strength,
                duration: 0.4,
                ease: 'power2.out',
                overwrite: true
            });
        });

        link.addEventListener('mouseleave', () => {
            gsap.to(link, {
                x: 0,
                y: 0,
                duration: 0.7,
                ease: 'elastic.out(1, 0.4)',
                overwrite: true
            });
        });
    });
}
