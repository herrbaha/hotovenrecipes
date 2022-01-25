import { useEffect, useState } from "react";
import "./App.css";
import Tarifler from './Tarifler';
import png from './images/cookbook.png'
function App() {
  const appID = "29dba890";
  const appKey = "a5cf72ed0dabf9f3f0651254233f61ae";
  //const url = `https://api.edamam.com/search?q=chicken&app_id=${appID}&app_key=${appKey}`;
  const [tarif, setTarif] = useState([]);
  const [ara, setAra] = useState("");
  const [istek, setIstek] = useState("top banana");


  useEffect(() => {
    tarifial();
  },[istek]);

  const tarifial = async () => {
    const cvp = await fetch(`https://api.edamam.com/search?q=${istek}&app_id=${appID}&app_key=${appKey}`);// niye url olarak kabul etmiyor?
    const veri = await cvp.json();
    setTarif(veri.hits)
  }

  const aramayiGüncelle = (e) => {
    setAra(e.target.value)
    // console.log(e.target.value);
  }

  const istenenKelime = (e) => {
    e.preventDefault();
    setIstek(ara);
    setAra("");
  
  }


  return (
    <div className="App">
       <div > <img  className="mylogo" src={png} alt="" /> </div>   
      <form onSubmit={istenenKelime} className="search-form">
        <input className="search-input" placeholder="Search..." type="text" value={ara} onChange={aramayiGüncelle}/>
        <button className="search-button">Search</button>
      </form>
      <div  className="recipes">
        {tarif.map((tarifler, index) => ( //burasi jsx bölgesi oldugu icin süsülü parantez yerine normel parantez kullaniliyor burada. süslü parantez koyarsak return gerekiyor, farki nedir?
         <Tarifler key={index} baslik={tarifler.recipe.label} kalori={tarifler.recipe.calories} images={tarifler.recipe.image} icindekiler={tarifler.recipe.ingredients}/>//key index'i kullanmasak da oldu niye?
        ))}
      </div>
    
    </div>
  );
} 

export default App;
