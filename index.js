const menuLinks = document.querySelectorAll('.headerLinks[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(link => {
        link.addEventListener('click', onMenuClick);
    });

    function onMenuClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageXOffset - document.querySelector('header').offsetHeight;
if(iconMenu.classList.contains('_active')){
    document.body.classList.remove("_lock");
    iconMenu.classList.remove('_active');
    menuBody.classList.remove('_active');
}
            window.scroll({
                top: gotoBlockValue,
                behavior: 'smooth'
            })
            e.preventDefault();
        }
    }

}

let iconMenu = document.querySelector(".icon-menu");
let menuBody = document.querySelector(".menu__body");
	iconMenu.addEventListener("click", function (e) {
		
			iconMenu.classList.toggle("active");
			menuBody.classList.toggle("active");
		
	})
console.log(`
RS School - Stage 1 2021
Self-Test: 
1. Valid code- 10 points 
2. Semantic layout - 20 points:
    [✅] article
    [✅] footer
    [✅] header
    [✅] main
    [✅] nav
    [✅] section
    [✅] h1
    [✅] h2
    [✅] h3
    [✅] h4
3. Css styles - 10 points
4. The content is centered, main background stretches - 10 points
5. Adaptive layout - 5 points
6. Burger menu - 10 points
7. Image, proportions are not distorted - 10 points
8. Contacts and skills are created by list <ul> - 10 points
9. CV contains contacts, information about education, level of English - 10 points
10. Example of my code with highlighting - 10 points
11. List of projects (image, description, link) - 10 points
12. CV in English - 10 points
13. Pull request is correct - 10 points
14. Video summary - 10 points
15. Design - 10 points
Total score: 155 points
`);