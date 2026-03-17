export default function Home({ setPage }) {
  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>🥗 Classificador de Alimentos AI</h1>
      <p>Descubra se um alimento é saudável ou ultraprocessado</p>
      <button onClick={() => setPage('upload')}>Começar</button>
    </div>
  )
}