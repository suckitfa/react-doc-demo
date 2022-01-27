import React , {useContext}from 'react';
import StateHooksExample from './statehooks/SateHooks';
import EffectHookExample from './effecthook/EffectHookExample';
import RefHookExample from './RefHookExample/RefHookExample';
import Counter from './statehooks/Counter';
import StoreExample from './storeExample/StoreExample';
import { Provider } from 'react-redux';
import store from './store/store'
import TestJSX from './01JSX/JSX';
import TestJSX02 from './01JSX/TestJSX02';
import TestJSX03 from './01JSX/TestJSX03'
// import TestRender from './02render/TestRender';
import TestComponent from './03component/TestComponent'
import TestClassComponent from './03component/TestClassConponent'
import Clock from './04state/Clock';
function ContextHookExample() {
  const mycontext = useContext(ThemeContext)
  console.log(mycontext)
  return (
      <div>
          <h1>Context Hooks Example</h1>
          <div>Context value = {mycontext}</div>
      </div>
  )
}
const themes = {
  light: "light",
  dark:"dark"
}
const ThemeContext = React.createContext(themes.light)
function App() {
  return (
    <div >
        {/* <TestJSX />
        <TestJSX02 />
        <TestJSX03 /> */}
        {/* <TestRender /> */}
        {/* <TestComponent name="Bob"/>
        <TestClassComponent name="Evan" /> */}
        <Clock />
    </div>
  );
}

export default App;
