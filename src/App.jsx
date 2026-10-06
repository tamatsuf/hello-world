import { useEffect, useState } from 'react'
import './hello-world.css'

function App() {
  const [now, setNow] = useState(new Date())
  const [visitCount, setVisitCount] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setNow(new Date())
    }, 1000)

    return () => window.clearInterval(timer)
  }, [])

  useEffect(() => {
    const storedCount = Number(window.localStorage.getItem('hello-world-visit-count')) || 0
    const nextCount = storedCount + 1

    setVisitCount(nextCount)
    window.localStorage.setItem('hello-world-visit-count', String(nextCount))
  }, [])

  return (
    <main className="hello-page">
      <h1>Hello World!</h1>
      <p className="subtitle">My first React app</p>

      <section className="info-card" aria-live="polite">
        <h2>リアルタイム時計</h2>
        <p className="clock">{now.toLocaleTimeString('ja-JP')}</p>
      </section>

      <section className="info-card">
        <h2>アクセスカウンター</h2>
        <p className="counter">{visitCount.toLocaleString()} 回</p>
      </section>
    </main>
  )
}

export default App
