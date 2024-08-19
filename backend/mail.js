exports.sendmail1 = (email, username,otp1) => {
	return `<!DOCTYPE html>
    <html>
    
    <head>
        <meta charset="UTF-8">
        <title>Password Update Confirmation</title>
        <style>
            body {
                background-color: #ffffff;
                font-family: Arial, sans-serif;
                font-size: 16px;
                line-height: 1.4;
                color: #333333;
                margin: 0;
                padding: 0;
            }
    
    
            .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                text-align: center;
            }
    
            .logo {
                max-width: 200px;
                margin-bottom: 20px;
            }
    
            .message {
                font-size: 18px;
                font-weight: bold;
                margin-bottom: 20px;
            }
    
            .body {
                font-size: 16px;
                margin-bottom: 20px;
            }
    
            .support {
                font-size: 14px;
                color: #999999;
                margin-top: 20px;
            }
    
            .highlight {
                font-weight: bold;
            }
        </style>
    
    </head>
    
    <body>
        <div class="container">
            <a href="https://1stackfinal.netlify.app/"><img class="logo"
                    src="" alt="1stackfinal"></a>
            <div class="message">OTP</div>
            <div class="body">
                <p>Hey ${username},</p>
                <p>otp is sent to  <span class="highlight">${email}</span>.
                </p>
                <p>If you did not request this password change, please contact us immediately to secure your account.</p>
            </div>

<p>otp is ${otp1}</p>

            <div class="support">If you have any questions or need further assistance, please feel free to reach out to us
                at
                <a href="rohanketkar09@gmail.com">rohanketkar09@gmail.com</a>. We are here to help!
            </div>
        </div>
    </body>
    
    </html>`;
};