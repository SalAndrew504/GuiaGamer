document.addEventListener('DOMContentLoaded', function () {
    const accordions = document.querySelectorAll('.accordion');

    accordions.forEach(acc => {
        acc.addEventListener('click', function () {
            const content = this.nextElementSibling;
             
            this.classList.toggle('active');

            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    });
});
