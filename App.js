import logo from './logo.svg';
import './App.css';
import Cricnew from './Cricnew';
import Pratice from './Pratice'


function App() {
  return (
    <div><h2>Cricbuzz News</h2>

    <div style ={{
      display: "flex",
      gap: "10px"
    }}>
       
       
      <Cricnew imgLink="https://static.cricbuzz.com/a/img/v1/205x152/i1/c468369/a-big-part-of-fraser-mcgurks.jpg" title="IPL 2024" headline="'Swing at 80% instead of 100%' - Ponting's advice to Fraser-McGurk" c="https://www.cricbuzz.com/cricket-news/130369/swing-at-80-instead-of-100-pontings-advice-to-fraser-mcgurk" d="This simple advice seems to have simplified the dynamic opener's methods at the crease"/>

      <Cricnew imgLink="https://static.cricbuzz.com/a/img/v1/205x152/i1/c468368/samsons-catch-was-adjudged-ou.jpg" title="IPL 2024" headline="The Sanju Samson catch: Out or Not Out?" c="https://www.cricbuzz.com/cricket-news/130368/the-sanju-samson-catch-out-or-not-out" d="Umpiring controversies aren't new to IPL and there was one that took centerstage on a Tuesday night at the Arun Jaitley Stadium
"/>
      <Cricnew  imgLink="https://static.cricbuzz.com/a/img/v1/205x152/i1/c468364/kkr-next-play-mumbai-indians-o.jpg" title="IPL 2024" headline="Kolkata squall diverted KKR's flight, prompting overnight detour in Varanasi" c="https://www.cricbuzz.com/cricket-news/130366/kolkata-squall-diverted-kkrs-flight-prompting-overnight-detour-in-varanasi" d="A 100-minute journey turned into 24 hours for the Kolkata Knight Riders but luckily there's enough time to rest and recuperate before the next game"/>

      <Cricnew imgLink="https://static.cricbuzz.com/a/img/v1/205x152/i1/c467703/little-is-currently-with-the-g.jpg"  title="IPL 2024" headline="Josh Little allowed to join Ireland's World Cup squad after IPL" c="https://www.cricbuzz.com/cricket-news/130364/josh-little-allowed-to-join-irelands-world-cup-squad-after-ipl" d="The squad led by Paul Stirling have seven T20Is to play before the mega event in the USA and West Indies"/>

      <Cricnew imgLink="https://static.cricbuzz.com/a/img/v1/205x152/i1/c467099/what-difference-could-rob-walt.jpg" title="T20 WORLD CUP" headline="Hridoy backs out-of-form Litton to regain form" c="https://www.cricbuzz.com/cricket-news/130363/hridoy-backs-out-of-form-litton-to-regain-form" d="After a prolific 2023 in T20s, Litton Das has managed only 79 runs in six T20Is this year"/>

      <Cricnew imgLink="https://static.cricbuzz.com/a/img/v1/205x152/i1/c468372/shakib-had-eye-problems-during.jpg" title="Zimbabwe" headline="Shakib, Mustafizur return for last two T20Is against Zimbabwe" c="https://www.cricbuzz.com/cricket-news/130370/shakib-mustafizur-return-for-last-two-t20is-against-zimbabwe" d="Soumya Sarkar has recovered from his knee injury and also features in the 15-man squad"/>
    </div>

    <Pratice />

  </div>
  );
}

export default App;
