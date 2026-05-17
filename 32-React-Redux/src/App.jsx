import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { addToProduct } from './redux/action/ProductAction';
import Products from './Products';

function App() {

  const dispatch = useDispatch();
  const state = useSelector(state=>state);

  const hundleAddTOProduct = ()=>{
    dispatch(addToProduct({id:1,name:'sumsang'}))
  }
  return (
    <>
      <h1>Hello</h1>
      <button onClick={hundleAddTOProduct}>Click</button>
      <Products/>
    </>
  )
}

export default App
