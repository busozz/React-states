import {useState} from "react"   // state bileşeni react alt dalından aldık

import Counter from "./Components/counter";

import InputExample from "./Components/InputExample";

function App() {

const [name,setName] = useState("name");     // State [] ile kullanılır.ilk değer(name) default değerdir.
const [age,setAge] = useState(25)             // ikinci değer (setName) değiştirilecek değerdir.Güncel haldir.
const [friends,setFriends] = useState(["name1","name2"])
const [location,setLocation] = useState({
  address : "adress",
  zip: 47000
})

  return (
    <div className="App">
      <h1>Merhaba {name}</h1>
      <h1>{age}</h1>
        
      <button onClick={()=>{setName("name")}}>Change Name</button>
      <button onClick={()=>{setAge(26)}}>Change Age</button>

      <hr />
      <br />
      

      {friends.map((items,key) => (
        <div key={key}>{items}</div>
      ))}

      <button onClick={()=>{setFriends([...friends,"name"])}}>Add Friends</button>  {/* Önceki değerleri koru ve sonda eklediğini öncekinin üzerine ekle */}


      <hr />
      <br />

      <h2>Location</h2>
      
      <div>{location.address}{location.zip}</div>

      <button   onClick={()=>{setLocation({...location,address:"adress   ",zip:474747})}}>Change Location</button>

      <hr />
      <br />

      <Counter/>
      

      <hr />
      <br />


      <InputExample/>


    </div>
  );
}

export default App;









/* State, herhangi bir durumda 
  (bir butona basıldığında,backendten bir şey geldiğinde veya herhangi farklı durumda) 

  değerini değiştirebileceğimiz tanımlardır.

*/
