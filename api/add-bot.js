import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
)

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  if (req.method!== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { id, bot_name, image_url, secret_key, render_link } = req.body

  if (!id ||!bot_name ||!secret_key) {
    return res.status(400).json({ error: 'id, bot_name, na secret_key ni lazima' })
  }

  const { data, error } = await supabase
   .from('bots')
   .insert([
      {
        id,
        bot_name,
        image_url,
        secret_key,
        render_link,
        status: 'available'
      }
    ])
   .select()

  if (error) {
    return res.status(500).json({ error: error.message })
  }

  res.status(200).json({ success: true, bot: data[0] })
}