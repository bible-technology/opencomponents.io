import sendgrid from '@sendgrid/mail'

export default async function handle(req, res) {
  if (process.env.SG_API === '') {
    return res.status(200).json({ success: true })
  }
  switch (req.method) {
    case 'POST':
      try {
        sendgrid.setApiKey(process.env.SG_API)
        await sendgrid.send({
          to: req.body.mail, // Your email where you'll receive emails
          from: process.env.SG_FROM, // your website email address here
          subject: `${req.body.name}! You are registered for the hackathon`,
          html: `<h2>Hello ${req.body.name}!</h2>
<p>You have successfully registered for the Open Components Hackathon.</p>
<p>From <b>February 13 to 17</b>, the first part, Learnathon, will take place.<br/>
Don't forget to add a reminder to your calendar.</p>
<p>Also join our <a href="https://discord.gg/2zjFVgaw4E" target="_blank">discord</a>.</p>
<br/>
<p>We are glad to see you at the Hackathon!</p>`,
        })
      } catch (error) {
        return res.status(error.statusCode || 500).json({ error: error.message })
      }

      return res.status(200).json({ success: true })
    default:
      return res.status(404).end('Error')
  }
}
