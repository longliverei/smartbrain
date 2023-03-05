import { ImageLinkForm } from './components/ImageLinkForm'
import { Logo } from './components/Logo'
import { Navigation } from './components/Navigation'
import ParticlesBg from 'particles-bg'
import { Rank } from './components/Rank'

function App() {

  return (
    <div className="App">
      <ParticlesBg color="#000000" type="cobweb" num={150} bg={true} />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
    </div>
  )
}

export default App
