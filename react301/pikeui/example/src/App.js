import React from 'react'

import { ExampleComponent, Button } from 'pikeui'
import 'pikeui/dist/index.css'

const App = () => {
  return (
    <>
      <ExampleComponent text="Merhaba 😄" />
      <Button text='Click' onClick={() => alert('Buradasınız')}></Button>
    </>
  ) 
}

export default App
