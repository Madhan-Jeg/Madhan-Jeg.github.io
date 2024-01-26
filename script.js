const tabs = document.querySelectorAll('[data-tab-title]')
const tabContents = document.querySelectorAll('[data-tab-content]')
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTitle)
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active')
        })
        target.classList.add('active')
        tabs.forEach(tab => {
            tab.classList.remove('active')
        })
        tab.classList.add('active')
    })
})