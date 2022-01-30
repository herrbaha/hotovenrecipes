import { useEffect, useState } from "react";
import "./App.css";
import Recipes from './Recipes';
import png from './images/cookbook.png'
function App() {
  const appID = "29dba890";
  const appKey = "a5cf72ed0dabf9f3f0651254233f61ae";
  //const url = `https://api.edamam.com/search?q=chicken&app_id=${appID}&app_key=${appKey}`;
  const [recip, setRecip] = useState([]);
  const [search, setSearch] = useState("");
  const [request, setRequest] = useState("top banana");


  useEffect(() => {
    getRecipe();
  },[request]);

  const getRecipe = async () => {
    const answer = await fetch(`https://api.edamam.com/search?q=${request}&app_id=${appID}&app_key=${appKey}`);
    const data = await answer.json();
    setRecip(data.hits)
  }

  const updateSearch = (e) => {
    setSearch(e.target.value)
  }

  const desiredWord = (e) => {
    e.preventDefault();
    setRequest(search);
    setSearch("");
  
  }


  return (
    <div className="App">
       <div > <img  className="mylogo" src={png} alt="" /> </div>   
      <form onSubmit={desiredWord} className="search-form">
        <input className="search-input" placeholder="Search..." type="text" value={search} onChange={updateSearch}/>
        <button className="search-button">Search</button>
      </form>
      <div  className="recipes">
        {recip.map((items, index) => ( 
         <Recipes key={index} title={items.recipe.label} calorie={items.recipe.calories} images={items.recipe.image} ingredients={items.recipe.ingredients}/>
        ))}
      </div>
    
    </div>
  );
} 

export default App;
