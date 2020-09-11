
import React, {useState} from 'react';
import './App.css';



function App() {
  const [value, setValue] = useState("")
  const [results, setResults] = useState([])

  const fetchImages = () => {
    fetch (`https://api.unsplash.com/search/photos?client_id=DACaK47CRXpRQmr7SJSPp4bxKf5vjcOxpJhZOr1ZwG0&query=${value}&orientation=squarish`)
    .then(res => res.json())
    .then(data => {
      setResults(data.results)
    })
  }
  return (
    <div className="App">
      <h1 className="font">Unsplash-Clone</h1>
      <div className = "mydiv">
        <span className="searchname">Search </span>
        <input 
        style= {{width:"60%"}}
        type="text" 
        value={ value} onChange={(e) => setValue(e.target.value)}/>
        <button className="send" onClick={() => fetchImages()} > Send</button> 
      </div>
     

     <div className="gallery">
       {
         results.map((item)=>{
          return <img className="item" key={item.id} src= {item.urls.regular} />
         })
       }
     </div>
    </div>
  );
}

export default App;
