import React from 'react'
import './App.css'

export default function App() {


  let favFoods=["Biriyani","Meals","Dosa","Idly"]


  return (
    <div className='box'>

      <h1 className='title'>Fav Foods</h1>

      {
        favFoods.map((food,index)=>{
          return (<p className='element' key={index}>{food}</p>)
        })
      }
      

    </div>
  )
}
