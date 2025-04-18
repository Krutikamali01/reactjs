
import './App.css'

function App(props) {


  return (
    <>
      <div className='card'>
        <img src={props.url} />
        <h2>Name:{props.name}</h2>
        <h2>Age:{props.Age}</h2>
        <h2>Course:{props.Course}</h2>

      </div>
    </>
  )
}

export default App
