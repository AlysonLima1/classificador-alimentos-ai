import { useState } from 'react'

export default function Upload({ setPage, setResult }) {
  const [file, setFile] = useState(null)

  const send = async () => {
    const formData = new FormData()
    formData.append('file', file)

    const res = await fetch('https://classificador-alimentos-ai.onrender.com/predict', {
      method: 'POST',
      body: formData
    })

    const data = await res.json()
    setResult(data)
    setPage('result')
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h2>Enviar imagem</h2>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <br /><br />
      <button onClick={send}>Analisar</button>
    </div>
  )
}