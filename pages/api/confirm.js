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
          to: req.body.email, // Your email where you'll receive emails
          from: process.env.SG_FROM, // your website email address here
          subject: `Open Components Hackathon Confirmation: You have successfully registered!`,
          html: `<div style="padding:8px;max-width:800px;font-size:1.2rem;">
<img src="https://opencomponents.io/oce_banner.png" style="width:100%;margin-bottom:20px;"/>
<p>Dear ${req.body.name},<br/>
<br/>
Thank you for signing up for the Open Components Hackathon 2023.<br/>
<b>Learnathon</b>: February&nbsp;13&nbsp;-&nbsp;February&nbsp;17,&nbsp;2023<br/>
<b>Hackathon</b>: February&nbsp;20&nbsp;-&nbsp;February&nbsp;24,&nbsp;2023</p>
<p>Please <a href="https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NmNoNTNoa2RnNWNnbHFvdHQ3c2NucjVydjlfMjAyMzAyMTNUMTQwMDAwWiBiaW5jeS5qb2JieUB1bmZvbGRpbmd3b3JkLm9yZw&tmsrc=bincy.jobby%40unfoldingword.org&scp=ALL">click here</a> to add this event to your calendar. To learn more about the event schedule, please <a href="https://opencomponents.io/hackathon/schedule">click here</a>. We look forward to seeing you soon!</p>
<p>Thanks,<br/>
Chris Klapp, aka Klappy<br/>
ETEN Innovation Lab</p>
</div>`,
        })
      } catch (error) {
        return res.status(error.statusCode || 500).json({ error: error.message })
      }

      return res.status(200).json({ success: true })
    default:
      return res.status(404).end('Error')
  }
}
