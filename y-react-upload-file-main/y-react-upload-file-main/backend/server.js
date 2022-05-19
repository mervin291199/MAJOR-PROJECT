const express = require('express');
const app = express();
const cors = require('cors');


app.use(cors());
app.get("/sendmail", (req, res) => {
    // use modules such as express-fileupload, Multer, Busboy
    var nodemailer = require('nodemailer');
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'sailu.reddy2000@gmail.com',
          pass: 'sailu999*'
        }
      });
    //   const Email = require('email-templates');

    //const email = new Email({
    //     transport: transporter,
    //     send: true,
    //     preview: false,
    //   });
    
      
      var mailOptions = {
        from: 'sailu.reddy2000@gmail.com',
        to: 'R18CS273@cit.reva.edu.in',
        subject: 'over speed',
        //html:'<html><body><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31085.58362038231!2d77.58155443855361!3d13.118311308611263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1856f737d2d5%3A0xbef78d20185d942f!2sYelahanka%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1652014332871!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></body></html>' ,
        text: "speed violation at yelahanka"
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
    setTimeout(() => {
        console.log('file uploaded')
        return res.status(200).json({ result: true, msg: 'file uploaded' });
    }, 3000);
});
app.post("/upload", (req, res) => {
    // use modules such as express-fileupload, Multer, Busboy
    
    setTimeout(() => {
        console.log('file uploaded')
        return res.status(200).json({ result: true, msg: 'file uploaded' });
    }, 3000);
});

app.delete("/upload", (req, res) => {
    console.log(`File deleted`)
    return res.status(200).json({ result: true, msg: 'file deleted' });
});

app.listen(8081, () => {
    console.log(`Server running on port 8081`)
});

