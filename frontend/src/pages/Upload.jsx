function Upload({ setPage, setResult }) {
  return (
    <div>
      <h2>Upload</h2>
      <button onClick={() => {
        setResult({ label: "Pizza", score: 0.95 })
        setPage('result')
      }}>
        Simular Resultado
      </button>
    </div>
  )
}

export default Upload