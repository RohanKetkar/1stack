const nodemailer = require("nodemailer")

const transporter = nodemailer.createTransport({
    host:"smtp.gmail.com",
    auth:{
        user:"rohanketkar09@gmail.com",
        pass:"vzlquuhczrjpxukx"
    }

})
   exports.sendmail=async (to,html)=>{

    const info = await transporter.sendMail({














from : "1stackfinal",

to:to,
subject:"subject",






text:"ok",

html:html


    })
}