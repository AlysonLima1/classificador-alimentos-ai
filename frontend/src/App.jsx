import { useState } from 'react'
import Home from './pages/Home'
import Upload from './pages/Upload'
import Result from './pages/Result'

export default function App() {
  const [page, setPage] = useState('home')
  const [result, setResult] = useState(null)

  if (page === 'home') return <Home setPage={setPage} />
  if (page === 'upload') return <Upload setPage={setPage} setResult={setResult} />
  if (page === 'result') return <Result setPage={setPage} result={result} />
  return <h1>FUNCIONANDO 🔥</h1>
}