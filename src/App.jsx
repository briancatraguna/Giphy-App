import './App.css';
import { useState } from 'react';
import axios from 'axios';
import GifItem from './components/gif_item';

function App() {

  const [text,setText] = useState("");
  const [data,setData] = useState(null);
  const [limit,setLimit] = useState(100);

  console.log(typeof(data))

  const API_KEY = "LDmrVPqB9OQXV3T5D532nBh60N2aajOm";
  const BASE_URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}`;

  async function handleSearch(){
    const response = await axios.get(`${BASE_URL}&q=${text}&limit=${limit}`);
    setData(response.data.data)
  }

  function handleChange(e){
    setText(e.target.value);
  }

  function handleLimit(e){
    setLimit(e.target.value)
  }

  let gifList;
  if (data!=null){
    gifList = data.map(item=>{
      console.log(item.title)
      console.log(item.images.original.url)
      return (
        <GifItem title={item.title} url={item.images.downsized_still.url}/>
      )
    })
  }
  

  return (
    <div className="App">
      <input type="text" onChange={handleChange} value={text}></input>
      <button onClick={handleSearch}>Search</button>
      <br></br>
      <p>Limit</p>
      <input type="text" onChange={handleLimit} value={limit}></input>
      {gifList}
    </div>
  );
}

export default App;
