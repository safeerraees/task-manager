const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)


const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'syed.safeer@spsnet.com',
        subject: 'Welcome to the app!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendFarewellEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'syed.safeer@spsnet.com',
        subject: 'Farewell',
        text: `We are sorry ${name} that you are leaving. Please provide feedback as to what led you to this decision`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendFarewellEmail
}