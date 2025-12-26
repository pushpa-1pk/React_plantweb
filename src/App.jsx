import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Review from './components/Review'
import SectionTitle from './components/SectionTitle'
import TrendyPlants from './sections/TrendyPlants'
import PlantainLilies from "./assets/images/PlantainLilies.png";
import Alovera from "./assets/images/Aloveraq.png";
import Reviews from './sections/Reviews'
import TopSelling from './sections/TopSelling'
import Best02 from './sections/Best02'
import Footer from './sections/Footer'

function App() {
  return (
    <>
      {/* Background image wrapper */}
      <div className="min-w-screen min-h-screen bg-cover bg-top bg-no-repeat bg-[url('/src/assets/images/background.jpg')]">
        <div className="max-w-[1200px] mx-auto">
          <Navbar />
          <Hero />
          <Review />
          <SectionTitle title="Our Trendy plants" />

          <div className="flex flex-col gap-40 p-10 mt-14">
            <TrendyPlants
              title="For Your Desks Decorations"
              description="I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference!"
              price="599"
              image={PlantainLilies}
              imagePosition="left"
            />

            <TrendyPlants
              title="For Your Desks Decorations"
              description="The greenery adds a touch of nature and serenity to my desk, making it feel more inviting and calming"
              price="399"
              image={Alovera}
              imagePosition="right"
            />
          </div>
        </div>
      </div>

      <div className="w-screen bg-[#1B2316] -mt-20">
        <div className="max-w-[1200px] mx-auto">
        <SectionTitle title="Our Top Selling Plants"/>
        <TopSelling />
        <SectionTitle title="Customer Review"/>
        <Reviews />
        <SectionTitle title="Our Best o2"/>
        <Best02 />
        <Footer />
        </div>
      </div>
    </>
  );
}


export default App
