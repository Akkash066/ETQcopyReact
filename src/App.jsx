import './App.css'

function App() {
  return (
    <>
      <nav className="nav">
        
        <div className="left">
          <h3><span>E</span><span>T</span><span>Q</span></h3>
          <ul>
            <li>Footwear</li>
            <li>Menswear</li>
            <li>Final Sale</li>
          </ul>
        </div>

        <div className="right">
          <ul>
            <li>Search</li>
            <li>Service</li>
            <li>My account</li>
          </ul>
        </div>
      </nav>
      <main>
        <div className="main">
        <img src="/images/main.jpg" alt="" />
        </div>
        <div className="content">
          <h3>Up to 60% OFF</h3>
          <h1>Live: Final Sale.</h1>
          <br />
          <p>Wardrobe Essentials <br /> with endless comfort.</p>
          <br /><br />
          <button>Show Now</button>
        </div>
      </main>
    </>
  )
}

export default App
