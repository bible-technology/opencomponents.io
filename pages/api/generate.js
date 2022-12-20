import path from 'path'
import { promises as fs } from 'fs'

export default async function handler(req, res) {
  try {
    const jsonDirectory = path.join(process.cwd())
    const data = await require('react-google-forms-hooks').googleFormsToJson(
      'https://docs.google.com/forms/d/e/' +
        (process.env.GOOGLE_FORM_ID ??
          '1FAIpQLSdma-rdJELwPGL-Iw7x28h3nZbvCaiFAABpz9B_17kuemSbWg') +
        '/viewform'
    )
    await fs.writeFile('./GoogleForm.json', JSON.stringify(data))
  } catch (error) {
    return res.status(500).json({ error })
  }
  //Return the content of the data file in json format
  return res.status(200).json({ status: 'success' })
}
