function submitData() {
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const number = document.getElementById('number').value
    const skill = document.querySelector('[name="skill"]:checked').value
    const subject = document.getElementById('subject').value
    const message = document.getElementById('message').value

    const redirectMessage = document.querySelector('.submit-redirect-button')

    const alertMessage = document.getElementById('form-alert')
    const alertBtn = document.getElementById('close-alert-button')

    if(name == '' || number == '' || skill == '' || subject == '' || message == '') {
        alertMessage.style.zIndex = '2'
        alertBtn.addEventListener('click', function() {
            alertMessage.style.zIndex = '-1'
        })
        
    } else {
        const emailReceiver = 'karunialeo@mail.com'
        const nameReceiver = 'Karunia Leo Gultom'
        const a = document.createElement('a')
        a.href = `mailto:${emailReceiver}?subject=${subject}&body=Hi, ${nameReceiver}!%0AMy name is ${name}%0A%0A${message}%0A%0APlease call me on ${number}.%0AYou can also contact me through ${email}.%0AThank you.`

        a.click()
        
        let dataObject = {
            name,
            email,
            number,
            skill,
            subject,
            message,
        }

        console.log(dataObject)

        function disNone() {
            redirectMessage.classList.toggle("dis-none")
        }
        disNone()
        setTimeout(disNone, 5000)
    }
    
}

function onlyOne(checkbox) {
    const checkboxes = document.getElementsByName('skill')
    const defaultCB = document.querySelector('.cb-hidden')
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false
        if (checkbox.checked == false) defaultCB.checked = true
    })
}