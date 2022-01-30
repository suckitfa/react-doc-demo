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
import Greeting from './05condition/Greetings';
import LoginControl from './05condition/LoginControl'
import MailBox from './05condition/Mailbox';
import Page from './05condition/WarningBanner'
import TestList from './06ListandKey/TestList';
import TestListWithPropKey from './06ListandKey/TestListWithPropKey';
import Blog from './06ListandKey/Blog';
import NameForm from './07form/NameForm'
import EassyForm from './07form/EassyFrom'
import FlavorForm from './07form/FlavorForm';
import FileForm from './07form/FileForm';
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
  const messages =  ['react', 'Re:react','Re:re react']
  const posts = [
    {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
    {id: 2, title: 'Installation', content: 'You can install React from npm.'}
  ];
  return (
    <div >
        {/* <TestJSX />
        <TestJSX02 />
        <TestJSX03 /> */}
        {/* <TestRender /> */}
        {/* <TestComponent name="Bob"/>
        <TestClassComponent name="Evan" /> */}
        {/* <Clock /> */}
        {/* <Greeting isLoggedIn={true}/> */}
        {/* <LoginControl /> */}
        {/* < MailBox unreadMessages={messages}/>
         */}
         {/* <Page warn={true}/>
          */}
          {/* <TestList numbers={[1,2,3,4,5,6]}/> */}
          {/* < TestListWithPropKey /> */}
          {/* <Blog posts={posts} /> */}
          {/* <NameForm /> */}
          {/* <EassyForm /> */}
          {/* <FlavorForm></FlavorForm> */}
          <FileForm />
    </div>
  );
}

export default App;
