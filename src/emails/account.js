const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)



const welcomeEmail = (email,name) =>{
    sgMail.send({
        to:email,
        from:'prathmeshkhandelwal83@gmail.com',
        subject:'Welcome!',
        text:`Welcome to the app!, ${name}. Let me know how you get along.`
    })
}

const leavingEmail =(email,name) => {
    sgMail.send({
        to:email,
        from:'prathmeshkhandelwal83@gmail.com',
        subject:'Goodbye!',
        text:`Hey ${name}!, Hope you have a good day, can you please provide your valuable feedback to make our service better`
    })
}

module.exports = {
    welcomeEmail:welcomeEmail,
    leavingEmail:leavingEmail
}