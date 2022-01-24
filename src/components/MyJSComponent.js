import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'

export const MyJSComponent = () => {
  return(
    <>
    <h2>Technologies</h2>
    <p>In this template you will find allready implemented technology listed below :</p>
    <ListGroup >
      <ListGroup.Item><a style={{pointerEvents: 'auto'}} href="https://docs.pmnd.rs/react-three-fiber/getting-started/introduction" target="_blank">React-three/fiber</a></ListGroup.Item>
      <ListGroup.Item><a style={{pointerEvents: 'auto'}} href="https://react-bootstrap.netlify.app/getting-started/introduction/" target="_blank">react-bootstrap component</a></ListGroup.Item>
      <ListGroup.Item><a style={{pointerEvents: 'auto'}} href="https://keajs.org/docs/installation/instructions/" target="_blank">kea - used insted of redux</a></ListGroup.Item>

      <ListGroup.Item><a style={{pointerEvents: 'auto'}} href="https://p5js.org/reference/" target="_blank">p5js</a></ListGroup.Item>
    </ListGroup>
    <p>For more, and there is more, look at package.json</p>
    <h2>Try out the counter below!</h2>
    </>
  )
}
