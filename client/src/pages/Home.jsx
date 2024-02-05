import React from 'react'
import Banner from '../Components/Banner'
import { useState } from 'react'
const Home = () => {
  const [query,SetQuery] = useState("")
  const handleInputChange = (event) =>{
      SetQuery(event.target.value)
      console.log(query)
  
  }
  return (
    <div>
      <Banner query={query} handleInputChange={handleInputChange} />
      
      </div>
  )
}

export default Home