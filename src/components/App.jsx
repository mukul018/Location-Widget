import { useState } from 'react';
import React from 'react';
import Main from './Main';
import Mini from './Mini';
import Home from './Home';
import Collapse from './Collapse';
import Minimize from './Minimize';

function App() {
  const [widgetMinimize , setWidgetMinimize] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  const onMinimizeHandler = () => {
    setWidgetMinimize(!widgetMinimize);
}

  const onClickCollapsedHandler = () => {
    setCollapsed(!collapsed);
    setWidgetMinimize(false);
  };

  return (
    <div className='App'>
      {
        // Check the conditions to see what should happen when a particular icon is clicked
        collapsed ? (
          <Minimize collapseHandler = {onClickCollapsedHandler} />
        ): widgetMinimize?(
          <Collapse minimizeHandler = {onMinimizeHandler} collapseHandler= {onClickCollapsedHandler} />
        ): widgetMinimize && collapsed ? (
          <Home minimizeHandler = {onMinimizeHandler} collapseHandler = {onClickCollapsedHandler} />
        ) : (
          <Home minimizeHandler = {onMinimizeHandler} collapseHandler = {onClickCollapsedHandler} />
        )
      }
      {
        (!widgetMinimize && !collapsed) ? (
          <Main /> 
        ):
          <Mini />
      }
    </div>
  )
}

export default App;