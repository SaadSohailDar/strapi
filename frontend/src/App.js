import SiteHeader from "./components/SiteHeader";
import { BrowserRouter,Routes,Route} from "react-router-dom";
import Homepage from "./pages/Homepage";
import ReviewDetails from "./pages/ReviewDetails";
import Categories from "./pages/Categories";

function App() {
  return (
    <BrowserRouter>  
      <div className="App">
          <SiteHeader /> 
          <Routes>  
            <Route exact path="/" element={<Homepage />} />
            <Route path="/details/:id" element={<ReviewDetails />} />
            <Route path="/category/:id" element={<Categories />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
