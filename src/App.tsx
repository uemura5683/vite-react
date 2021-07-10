import React, { useState } from 'react'
import logo_n from './logo_nu.png'
import logo_s from './logo_stk.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <div className="title">Uemu Site</div>
        <div className="App-header-inner">
          <img src={logo_n} className="nu-blog-logo" alt="logo" />
          <img src={logo_s} className="nu-stack-logo" alt="logo" />
        </div>
      </header>
      <main className="App-main">
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <div>
          Site
        </div>
        <p>
          <a
            className="App-link"
            href="https://nu-blogsite.net/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nu-blog
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://uemu-engineer.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nu Stack
          </a>
        </p>
        <div>
          Frame work
        </div>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            React.js
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite.js
          </a>
        </p>
      </main>
    </div>
  )
}

export default App
