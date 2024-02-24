// Створіть годинник, який відображає поточний реальний час
// і оновлюється кожну секунду.Виведіть час у форматі
// "години:хвилини:секунди" на веб - сторінці.  Поряд з годинником
// потріно відобразити поточну дату.

const container = document.querySelector('#clock');

function clock() {
    // const time = Date.now()
    const now = new Date()
    const hours = String(now.getHours()).padStart(2, "0")
    const minutes = String(now.getMinutes()).padStart(2, "0")
    const sec = String(now.getSeconds()).padStart(2, "0")
    const year = now.getFullYear()
    const month = String(now.getMonth() + 1).padStart(2, "0")
    const day = String(now.getDay()).padStart(2, "0")
    
    const ourTime = `${day}/${month}/${year}  ${hours}:${minutes}:${sec}`

    container.textContent = ourTime
    
}

setInterval(clock, 1000)
