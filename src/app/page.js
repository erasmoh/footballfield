import HomePage from './components/HomePage/Home'
import './page.scss'

const Page = () => {
  return (
    <div className="App" data-testid="app">
      <HomePage />
    </div>
  )
}

export default Page;