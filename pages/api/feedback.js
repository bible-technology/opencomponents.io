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
          to: 'foxprogs@gmail.com',
          from: process.env.SG_FROM,
          subject: `Open Components - Contact Us!`,
          html: `<div style="padding:8px;max-width:800px;font-size:1.2rem;">
  <p>Name: ${req.body.name}</p>
  <p>Email: ${req.body.email}</p>
  <p>Message: ${req.body.message}</p>
</div>
`,
        })
      } catch (error) {
        return res.status(error.statusCode || 500).json({ error: error.message })
      }

      return res.status(200).json({ success: true })
    default:
      return res.status(404).end('Error')
  }
}
