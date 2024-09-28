import React from 'react'
import { useRef } from 'react'
import { Children } from 'react'
import { useEffect } from 'react'

const BorderRainbow = ({children}) => {
  const rain = useRef()
  const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]
  const rC = () => {
    return setInterval(() => {
      const randomNumber = Math.floor(Math.random()* colors.length + 0)
      const randomNumber2 = Math.floor(Math.random()* colors.length + 0)
      const randomNumber3 = Math.floor(Math.random()* colors.length + 0)
      const randomNumber4 = Math.floor(Math.random()* colors.length + 0)
      const randomNumber5 = Math.floor(Math.random()* colors.length + 0)
      const randomNumber6 = Math.floor(Math.random()* colors.length + 0)
      const randomNumber7 = Math.floor(Math.random()* colors.length + 0)
      const color = colors[randomNumber]
      const color2 = colors[randomNumber2]
      const color3 = colors[randomNumber3]
      const color4 = colors[randomNumber4]
      const color5 = colors[randomNumber5]
      const color6 = colors[randomNumber6]
      const color7 = colors[randomNumber7]
      // console.log(color, color2, color3, color4, color5, color6, color7)
    //   rain?.current.style.transition = "1s ease"
      return rain.current.style.backgroundImage= `linear-gradient(to right, ${color}, ${color2}, ${color3}, ${color4}, ${color5}, ${color6}, ${color7}`;
    } , 100)
  }
  const result = () => {
    rC()
  }
  useEffect(() => {
    result()
  }, [rain])
  return (
    <div className='rounded-full flex justify-center items-center transition-all p-1' ref={rain}>
      {children}
    </div>
  )
}

export default BorderRainbow
