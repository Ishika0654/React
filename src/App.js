import "./styles.css";
import{Box} from "./box";
export default function App(){
  return(
    <div className="App">
      <p>My Order</p>
    <div className="flex-box">
      <Box name="Biryani" place="Gopals" price="250"/>
      <Box name="Pizza" place="Dominos" price="500"/>
      <Box name="Sandwich" place="Subway" price="300"/>
    </div>
    </div>
  );
}