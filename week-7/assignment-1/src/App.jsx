import Card from './components/card'
import './App.css'

function App() {


  const obj1 = {
    img: "https://source.unsplash.com/a-man-with-a-turban-standing-in-front-of-a-wall-_ePI9OQuKEw", name: "Raj gupta", Age: 32, city: "london", followers: "80K", likes: "105k", photos: "1.4k"

  }
  return (
    <>
      <Card props={obj1} />
    </>
  )
}

export default App
