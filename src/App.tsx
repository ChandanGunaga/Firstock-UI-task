import './App.scss';
import Sideviewbar from "../src/containers/Sideviewbar/sideviewbar"
import Home from './containers/Home/Home';
import { useState } from 'react'
import data from '../src/assets/data/data.json'
function App() {
  const [tabData, setTabData] = useState(data.watchlists[0])
  const getData = (ele: any) => {
    setTabData(ele)
  }
  return (
    <div className="app">
      <Sideviewbar getData={getData} />
      <Home tabData={tabData} />
    </div>
  );
}

export default App;
