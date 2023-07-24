// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";


window.addEventListener('load', pageLoad)

function pageLoad() {

    const htmlTag = document.documentElement


    ////////////////////////////////////////////////

    const menu = document.querySelector('.menu')
    if (menu) {
        menu.addEventListener('mouseover', menuHover)
    }

    function menuHover(event) {
        if (event.target.closest('.menu__item') && event.target.closest('.menu__item').querySelector('.menu__spoller-body')) {
            const menuItem = event.target.closest('.menu__item')
            const cordsMenuItem = menuItem.getBoundingClientRect()

            if ((htmlTag.clientWidth - cordsMenuItem.right) > 300) {
                menuItem.querySelector('.menu__spoller-body').style.cssText = 'left: 0; right: auto;'
            } else {
                menuItem.querySelector('.menu__spoller-body').style.cssText = 'right: 0; left: auto;'
            }
        }
    }


    document.addEventListener('click', event => {
        const targetElement = event.target

        if (targetElement.closest('.menu__spoller-arrow') && htmlTag.closest('.touch')) {

            if (document.querySelector('.menu__item.open-sublist') || targetElement.closest('.menu__item.open-sublist')) {
                document.querySelector('.menu__item.open-sublist').classList.remove('open-sublist')
            } else {
                targetElement.closest('.menu__item').classList.toggle('open-sublist')
            }

        } else if (!targetElement.closest('.menu__item') && document.querySelector('.menu__item.open-sublist')) {
            document.querySelector('.menu__item.open-sublist').classList.remove('open-sublist')
        }
    })

}
