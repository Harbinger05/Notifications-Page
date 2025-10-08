const unreadCircle = document.querySelectorAll('.red-circle')
const readBtn = document.querySelector('.read')
const totalNotifications = document.querySelector('.total')
const background = document.querySelectorAll('.unread')

readBtn.addEventListener('click', () => {
    unreadCircle.forEach((unread) => {
        unread.style.display = 'none'
        totalNotifications.innerText = '0'

        background.forEach((bg) => {
            bg.style.backgroundColor = 'transparent'
        })
    })
})