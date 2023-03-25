import Image from 'next/image'
import FootballField from './components/Home'
import './page.scss'

export default function Home() {
  return (
    <div className="App" data-testid="app">
      <FootballField />
    </div>
  )
}
