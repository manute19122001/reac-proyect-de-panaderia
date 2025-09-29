import Navbar from "./componentes/navbar/navbar"
import ItemListConteiner from "./componentes/ItemListConteiner/ItemListConteiner"
import { BrowserRouter, Route, Routes } from 'react-router-dom';



const App = () => {
  return (
    
<>


<BrowserRouter>
<Navbar/>
<Routes>
<Route path="/" element={<ItemListConteiner/>}/>

     <Route path="/categoria/:idcategoria" element={<ItemListConteiner/>} />
      




 </Routes>    
</BrowserRouter>




</>


  )
}

export default App