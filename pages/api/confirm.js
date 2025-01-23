import sendgrid from '@sendgrid/mail'

export default async function handle(req, res) {
  if (process.env.SG_API === '') {
    return res.status(200).json({ success: true })
  }
  // <p>
  //   To add the Learnathon to your google calendar,{' '}
  //   <a href="https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NmNoNTNoa2RnNWNnbHFvdHQ3c2NucjVydjlfMjAyMzAyMTNUMTQwMDAwWiBjX2VhY2RmYzkxY2E1ZjFmOWZmODAzZWNkZTliNzMzZDBjODU0ZjU4YjQ3MWNhOThkM2FkOGMxMDlkNjExMzgyY2JAZw&tmsrc=c_eacdfc91ca5f1f9ff803ecde9b733d0c854f58b471ca98d3ad8c109d611382cb%40group.calendar.google.com&scp=ALL">
  //     click here
  //   </a>
  //   .
  // </p>

  switch (req.method) {
    case 'POST':
      try {
        sendgrid.setApiKey(process.env.SG_API)
        await sendgrid.send({
          to: req.body.email, // Your email where you'll receive emails
          from: process.env.SG_FROM, // your website email address here
          subject: `Confirmation: You have successfully registered for the 2025 Open Components Hackathon!`,
          html: `<div style="padding:8px;max-width:800px;font-size:1.2rem;">
<img src="https://opencomponents.io/oce_banner.png" style="width:100%;margin-bottom:20px;"/>
<p>Dear ${req.body.name},<br/>
<br/>
Thank you for signing up for the 2025 Open Components Hackathon.<br/>
<br/>
<b>Hackathon Theme</b>: Exploring Theia to make Bible translation software development globally accessible<br/>
<b>Learnathon</b> (Online): <b>February&nbsp;24&nbsp;-&nbsp;28,&nbsp;2025</b><br/>
<b>Hackathon</b> (Online): <b>March&nbsp;3&nbsp;-&nbsp;7,&nbsp;2025</b></p>
<p>If you have registered as an active participant, please ensure you are part of a team. If you'd like to create a new team, please fill out a <a href="https://forms.gle/VbeTG472AKbhpLnw9">form</a>. If you'd like to join an existing team, please reach out to other participants on <a href="https://discord.gg/9mZVrnn83z">Discord</a>.</p>
<p>You can visit our <a href="https://opencomponents.io/hackathon/schedule">hackathon site</a> to learn more about the event. We look forward to seeing you soon!
</p>
<p>Thanks,<br/>
The OCE team</p>
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
