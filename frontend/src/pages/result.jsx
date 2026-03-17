export default function Result({ result, setPage }) {
  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h2>Resultado</h2>
      <p>{result.prediction}</p>
      <p>Confiança: {result.confidence}%</p>
      <button onClick={() => setPage('home')}>Voltar</button>
    </div>
  )
}