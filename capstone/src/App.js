import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/Home";
import Navbar from "./routes/navigation/Navbar";
import Authentication from "./routes/authentication/Authentication";
import Shop from "./routes/shop/Shop";
import CheckoutPage from "./components/checkout-page/CheckoutPage";
import { useEffect } from "react";
import { createUserDocFromAuth, onAuthStateChangedListener} from "./utils/firebase/Firebase.utils";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer/userReducer/userActions";



const App= () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
    //   console.log("Actualuserfrom onauth state changedlistener", user);
      if (user) {
        createUserDocFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });
  
    return unsubscribe;
  }, [dispatch]);
  

  return (
    <Routes>
      <Route path='/' element={<Navbar/>}>
        <Route index element={<Home/>}/>
        <Route path='shop/*' element={<Shop/>}/>
        <Route path='authentication' element={<Authentication/>}/>
        <Route path='check-out' element={<CheckoutPage/>}/>
      </Route>
    </Routes>
  );
}

export default App;
