import path from 'path'
import { promises as fs } from 'fs'

export default async function handler(req, res) {
  const jsonDirectory = path.join(process.cwd())
  const data = await require('react-google-forms-hooks').googleFormsToJson(
    'https://docs.google.com/forms/d/e/' + process.env.GOOGLE_FORM_ID + '/viewform'
  )
  await fs.writeFile(jsonDirectory + '/GoogleForm.json', JSON.stringify(data))
  //Return the content of the data file in json format
  res.status(200).json({ status: 'success' })
}
