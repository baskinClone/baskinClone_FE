import React, {useState} from 'react'

const useMove = () => {
  const [state, setState] = useState({x: 0, y: 0})

  const handleMouseMove = e => {
    e.persist()
    setState(state => ({...state, x: e.clientX, y: e.clientY}))
  }
  return {
    x: state.x,
    y: state.y,
    handleMouseMove,
  }
}
const MoveHook = () => {
  const {x, y, handleMouseMove} = useMove()
  console.log(x, y)
  return (
    <div className="mouseArea" onMouseMove={handleMouseMove}>
      Hook
      <div className="mouseInfo">
        The current mouse position is ({x}, {y})
      </div>
    </div>
  )
}

export default MoveHook;
