const TOKEN = '5948715198:AAGa0nBrQfhX-g0J9B0TTQXplgrNXxl0yko'
const method = 'sendMessage'
const request = `https://api.telegram.org/bot${TOKEN}/${method}`

let form = document.forms[0]

let sendBtn = form.querySelector("#send")

function sendOk(name) {
    Swal.fire({
        title: `Thank You ${name}, Your message has been sent!`,
        icon: "success",
    })
}

function sendFail() {
    Swal.fire({
        title: "Send error. Try again later",
        icon: "error"
    })
}

form.onsubmit = async function (e) {
    e.preventDefault();
    let name = form.name.value
    let email = form.email.value
    let message = form.message.value
    let text = `Сообщение с сайта FormBlock:\nИмя: ${name}\nEmail: ${email}\n${message}`
    try {
        const response = await fetch(request, {
            method: "POST",
            headers: {
                'Content-Type' : "application/json",
            },
            body: JSON.stringify({
                chat_id: '307971589',
                text
            })
        })
        sendOk(form.name.value)
    } catch (e) {
        sendFail()
        console.error(e)
    } finally {
        form.reset()
    }
    
}