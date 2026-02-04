"use client";
import FlowingMenu from './FlowingMenu';

const demoItems = [
  {
    link: '#',
    text: 'Vehicle Simulation', // From "Bus Simulation 1"
    image: '/game images/bus simulation 1.webp'
  },
  {
    link: '#',
    text: 'Extreme Racing', // From "Car Racing Extreme"
    image: '/game images/car racing.webp'
  },
  {
    link: '#',
    text: 'Hypercasual Tycoon', // From "Car Garage Tycoon"
    image: '/game images/car hypercasual garage.webp'
  },

]

export default function FlowingMenuCard() {
  return (
    <>
      <div style={{ height: '200px',width:"100%", position: 'relative' }}>
        <FlowingMenu items={demoItems}
          speed={15}
          textColor="#ffffff"
          bgColor="#060010"
          marqueeBgColor="#ffffff"
          marqueeTextColor="#060010"
          borderColor="#ffffff"
        />
      </div>
    </>
  )
}
