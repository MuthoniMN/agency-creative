let navLinks = document.querySelectorAll(".nav-link")

setInterval(() => {
    const currentLink = window.location.href

    navLinks.forEach(link => {
        link.classList.remove("current")
        if (link.href === currentLink) {
            link.classList.add("current")
        }
    })
}, 1000)

document.querySelector("#menu-icon").addEventListener('click', () => {
    document.querySelector("#nav-menu").classList.toggle("mobile-nav")
})