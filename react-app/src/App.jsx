import React from 'react'
import Header from './components/Header'
import Products from './components/Products'

export default function App(){
  return (
    <div className="app-root">
      <Header />
      <main className="container">
        <section className="hero">
          <h1>HAMZA Beauty</h1>
          <p className="sub">Handpicked cosmetics — quality you can trust</p>
        </section>

        <Products />
      </main>

      <footer className="site-footer">
        <div className="container">© HAMZA Beauty — Tamale</div>
      </footer>
    </div>
  )
}
