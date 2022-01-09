import "./App.css";
import React, {useEffect, useState} from 'react'

function App() {

const [count, SetCount] = useState(1)

useEffect(() => {
  console.log('button is clicked')
}, [count])

const handleClick = () => {
   SetCount(count => count + 1)
}


  return (
    <div className="App">
      <section class="hero">
        <div class="hero-body">
          <p class="title">A React Task</p>
          <p class="subtitle">by Boom.dev</p>
        </div>
      </section>
      <div class="container is-fullhd">
        <div class="notification">
          Edit the <code>./src</code> folder to add components.
          <button onClick={() => {
            handleClick()
          }}>Count ({count})</button>
        </div>
      </div>
    </div>
  );
}

export default App;
