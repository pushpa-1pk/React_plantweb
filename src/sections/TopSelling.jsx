import React from 'react'
import {plants} from '../data/plants'  
import PlantCard from '../components/PlantCard'

const TopSelling = () => {
  return (
    <div className=" mt-4">
      <div className="flex flex-wrap justify-center gap-4">
        {plants.map((item) => (
          <PlantCard
            key={item.id}
            img={item.img}
            name={item.name}
            description={item.description}
            price={item.price}
          />
        ))}
      </div>
    </div>
  )
}

export default TopSelling
