import React, { Suspense } from 'react'
import { hot } from 'react-hot-loader/root'
import { MyJSComponent } from './components/MyJSComponent'
import { Counter } from './components/Counter'
import Scene3D from './components/three/3dTest'
import P5Test from './components/p5js/p5test'
import Container from 'react-bootstrap/Container'

export const App = hot(_App)
export function _App(): JSX.Element | null {
    return (
      <>
        <Container id="main-content" className="mt-5">
          <h1>Starter Template</h1>

          <MyJSComponent />
          <Counter />
        </Container>
        <Scene3D />
        <P5Test />
      </>
    )
}
