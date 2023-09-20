import SplitScreen from "./SplitScreen";

const LeftHandComp = ({name}) =>{
  return <h1 style={{backgroundColor:'green'}}>{name}</h1>
}

const RightHandComp = ({name}) =>{
  return <p style={{backgroundColor:'red'}}>{name}</p>
}

function App() {
  return (
    <SplitScreen leftWeight = {3} rightWeight = {3}>
        <LeftHandComp name='leftComp'/>
        <RightHandComp name='rightComp'/>
      </SplitScreen>
  );
}

export default App;
