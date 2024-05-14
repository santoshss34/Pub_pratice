import logo from './logo.svg';
import './App.css';
import CopyApp from './CopyApp';
import YoutubeApp from './YoutubeApp';
import Header from './Header';
import YoutubeSlider from './YoutubeSlider';


function App() {
  return (
  <div>
    <YoutubeSlider />
    <Header />
    <div style={{
      display: "flex",
      flexWrap: "wrap"

    }}>
      <YoutubeApp imgLink ="https://i.ytimg.com/an_webp/pDuKDrurPoc/mqdefault_6s.webp?du=3000&sqp=CITq4LEG&rs=AOn4CLBSByNPbt_Z6pgTkaRGM9oeu9RRDA"  p="Checkup" b="666K views"/>

      <YoutubeApp  imgLink ="https://i.ytimg.com/an_webp/Cavv-m6NgjI/mqdefault_6s.webp?du=3000&sqp=CJDy4LEG&rs=AOn4CLALsNpwYzz3bkH3-fd3-LQBjAx9bQ" p="Checkup video" b="666K views"/>

      <YoutubeApp imgLink="https://i.ytimg.com/an_webp/8AKulpMN8W8/mqdefault_6s.webp?du=3000&sqp=CNn24LEG&rs=AOn4CLC96x3c78xkTUX5wregfM2HQX_OcQ" p="Farmhouse video" b="333K views"/>

      <YoutubeApp imgLink="https://i.ytimg.com/an_webp/6Lw5pxM5h30/mqdefault_6s.webp?du=3000&sqp=CMus4LEG&rs=AOn4CLDg7HfqJ0jSe-SKeKlrSK06uo62xQ" p="Superbikes video" b="113K views"/>

      <YoutubeApp imgLink="https://i.ytimg.com/an_webp/wIJZMRDM0Ns/mqdefault_6s.webp?du=3000&sqp=CKzF4LEG&rs=AOn4CLAD6F41GR6GnxD6WwNR3VobvXMF5A" b="563K views"/>

      <YoutubeApp imgLink="https://i.ytimg.com/an_webp/tWC_Vkj5J9s/mqdefault_6s.webp?du=3000&sqp=CLL24LEG&rs=AOn4CLDFYAxiKRq4h5Za7zjIqWrdfpSIEA" p="Daily video" b="123K views"/>

    {/*<div className="App">
      <h1>HTML</h1>
        <p>Hi html here from w3school</p>
        <button>Learn HTML</button>
        <br></br>
        <br></br>
        <button style= {{
          backgroundColor: "orange",
          color: "white",
          cursor: "pointer",
          border: "none",
          display: "inline-block",
          padding: "10px 20px",

        }}>Learn</button>
        <br></br>
        <br></br>
        <button style= {{
          backgroundColor: "green",
          color: "white",
          cursor: "pointer",
          border: "none",
          display: "inline-block",
          padding: "10px 20px",
        }}>Learn HTML</button>
        <br></br>
        <br></br>
        <button>Start your journey</button>
        <br></br>
        <br></br>
        <CopyApp />
      </div> */}
    </div>
  </div>
  );
}

export default App;
