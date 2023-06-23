import React from "react"
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import jokesData from "./components/jokesData"
import Joke from "./components/Joke"
import data from "./data"
import Hero from "./components/Hero"
export default function App() {
  const jokeElements = jokesData.map(joke => {
    return <Joke setup={joke.setup} punchline={joke.punchline} />
  })
  const cards = data.map(item => {
    return (
      <Card
      key={item.id} 
        item={item}
      /> 
    )
  })
  return (
    <div>
      <Navbar />
      {/* {jokeElements} */}
      <Hero />
      <section className="card--list">
        {cards}
      </section>
    </div>
  )
}


// img={item.coverImg} 
//         rating={item.stats.rating}
//         reviewCount={item.stats.reviewCount}
//         country={item.location}
//         title={item.title}
//         price={item.price}
//         openSpots={item.openSpots}