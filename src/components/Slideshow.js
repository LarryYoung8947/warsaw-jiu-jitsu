import React, { Component, useState, useEffect } from 'react';
import { render } from 'react-dom'
import { useTransition, animated, config } from "react-spring";
import image1 from '../img1.jpg';
import image2 from '../img2.jpg';
import image3 from '../img3.jpg';
import image4 from '../img4.jpg';
import '../App.css';

const imgArr = [
  {id: 0, url: image1},
  {id: 1, url: image2},
  {id: 2, url: image3},
  {id: 3, url: image4}
]

const Slideshow = (props) => {
  const classString = props.visible;
  const bg = !props.animate ? 'stop' : 'bg';
  const [index, set] = useState(0)
  const transitions = useTransition(imgArr[index], item => item.id, {
    from: { opacity: 0 },
    enter: {opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses,
  })
  useEffect(() => void setInterval(() => set(state => (state + 1) % 4), 2000), [])
  return transitions.map(({ item, props, key }) => (
    <animated.div
      key={key}
      id={bg}
      style={{ ...props }}
    >
      <img className="img" src={item.url} alt=""/>
    </animated.div>
  ))
}


export default Slideshow;
