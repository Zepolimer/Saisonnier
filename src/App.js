import { useEffect, useState } from 'react';

// ---------- SECTION D'ACCUEIL
import Header from './Components/Header_Footer/Header';
import SelectMonth from './Components/SelectMonth';

// ---------- SECTION LEGUMES
import LegumeScroll from './Components/Title_Scroll/LegumeScroll';
import Legumes from './Components/Arrays/Legumes';

// ---------- SECTION FRUITS
import FruitScroll from './Components/Title_Scroll/FruitScroll';
import Fruits from './Components/Arrays/Fruits';

// ---------- SECTION FRUITS A COQUE
import FruitCoqueScroll from './Components/Title_Scroll/FruitCoqueScroll';
import FruitsCoque from './Components/Arrays/FruitsCoque';

// ---------- SECTION AVANTAGES DE MANGER SAISON
import WhyEatSaison from './Components/WhyEatSaison';

// ---------- SECTION PIED DE PAGE
import Footer from './Components/Header_Footer/Footer';
import Herbes from './Components/Arrays/Herbes';
import HerbScroll from './Components/Title_Scroll/HerbScroll';


function App() {
  const thisDate = new Date();
  const thisMonth = thisDate.getMonth();

  const [inputVal, setInputVal] = useState("");
  const [monthSaison, setMonthSaison] = useState("");

  useEffect(() => {
    if(thisMonth === 0) setMonthSaison("janvier");
    else if (thisMonth === 1) setMonthSaison("février");
    else if (thisMonth === 2) setMonthSaison("mars");
    else if (thisMonth === 3) setMonthSaison("avril");
    else if (thisMonth === 4) setMonthSaison("mai");
    else if (thisMonth === 5) setMonthSaison("juin");
    else if (thisMonth === 6) setMonthSaison("juillet");
    else if (thisMonth === 7) setMonthSaison("aout");
    else if (thisMonth === 8) setMonthSaison("septembre");
    else if (thisMonth === 9) setMonthSaison("octobre");
    else if (thisMonth === 10) setMonthSaison("novembre");
    else if (thisMonth === 11) setMonthSaison("décembre");
  }, [])

  function changeDate(e) {
    setInputVal(e);
  }
  
  return (
    <div className="App">
      <Header thisMonth={inputVal !== "" ? inputVal : monthSaison} />

      <SelectMonth 
        monthSaison={monthSaison} 
        thisChange={(e) => {changeDate(e.target.value)}} 
      />

      <LegumeScroll thisTitle={"Légumes"} monthSaison={inputVal !== "" ? inputVal : monthSaison} />
      <Legumes monthSaison={inputVal !== "" ? inputVal : monthSaison}/>

      <FruitScroll thisTitle={"Fruits"} monthSaison={inputVal !== "" ? inputVal : monthSaison} />
      <Fruits monthSaison={inputVal !== "" ? inputVal : monthSaison}/>

      <FruitCoqueScroll thisTitle={"Fruits à coque"} monthSaison={inputVal !== "" ? inputVal : monthSaison} />
      <FruitsCoque monthSaison={inputVal !== "" ? inputVal : monthSaison}/>

      <HerbScroll thisTitle={"Aromates"} monthSaison={inputVal !== "" ? inputVal : monthSaison} />
      <Herbes monthSaison={inputVal !== "" ? inputVal : monthSaison} />

      <WhyEatSaison />
      <Footer />
    </div>
  );
}

export default App;
