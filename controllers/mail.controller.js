const nodemailer = require('nodemailer');

exports.mail = async (req, res) => {
    try{
        //creating obj to store user information
        const mailObj = {
          name : req.body.name,
          phoneNumber : req.body.phoneNumber,
          email : req.body.email,
          subject :  req.body.subject,
          message : req.body.message
        }
        console.log(mailObj);
        var transpoter = nodemailer.createTransport({
            service : 'gmail',
            auth : {
                user : 'abhinavchandurkar55@gmail.com',
                pass : 'essrbzuxgwenpuly'
            }
        })
        var mailOptions = {
            form : 'abhinavchandurkar55@gmail.com',
            to : req.body.email,
            subject : "Thansk for contacting ",
            text : req.body.message
        };
        transpoter.sendMail(mailOptions,(error,info)=>{
            console.log("Sending mail");
            if(error){
                console.log(error);
            }else{
                console.log(info);
                res.send('sent the mail succesfully')
            }
        });

      }catch(error){
        console.error("Error while sending mail", error.message);
        res.status(500).send({
            message : "some internal error while sending mail"
        })
      };

}