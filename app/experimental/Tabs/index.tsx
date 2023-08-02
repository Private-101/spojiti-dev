// // import {} from '@remix-run/react';
// // import {} from '@remix-run/node';
// // import type {} from '@remix-run/node';
import React, { 
    createContext, useCallback, useContext, useDebugValue, 
    useDeferredValue, useEffect, useId, useImperativeHandle, 
    useInsertionEffect, useLayoutEffect, useMemo, useReducer, 
    useRef, useState, useSyncExternalStore, useTransition
} from 'react';
import { createPortal } from 'react-dom';
import { classNames, NOOP } from '~/utils';
import type { ITabListContext, ITabListProps, ITabPanelProps, ITabProps, ITabContentProps } from './types';


  const tabListElementContext = createContext<HTMLUListElement | null>(null);
  const selectedPanelContext = createContext<number | null>(null);
  const setSelectedPanelContext = createContext<React.Dispatch<React.SetStateAction<number>> | null>(null);
  const panelContext = createContext<number | null>(null);
  

  export const TabList: React.FC<ITabListProps> = ({ children, activePanel = 0 }) => {
    const [tabListElement, setTabListElement] = useState<HTMLUListElement | null>(null);
    const [selectedPanel, setSelectedPanel] = useState<number>(activePanel);
    return (
      <div id="tabs" className="min-w-fit max-w-screen-lg">
        <ul id="tab-list" className="flex flex-row justify-around items-center" ref={setTabListElement} />
        <tabListElementContext.Provider value={tabListElement}>
        <setSelectedPanelContext.Provider value={setSelectedPanel}>
            <selectedPanelContext.Provider value={selectedPanel}>
              {tabListElement ? children : null}
            </selectedPanelContext.Provider>
          </setSelectedPanelContext.Provider>
        </tabListElementContext.Provider>
      </div>
    )
  };


export const Panel: React.FC<ITabPanelProps> = ({ children, index }) => {
  const panelRef = useRef<number>(index);
  // const currentPanelContext = useContext(selectedPanelContext);
  return (
    <panelContext.Provider value={panelRef.current}>
      {children}
    </panelContext.Provider>
  )
}


export const Tab: React.FC<ITabProps> = ({ children }) => {
  const tabListElement = useContext(tabListElementContext);
  const setSelectedPanel = useContext(setSelectedPanelContext);
  const selectedPanel = useContext(selectedPanelContext);
  const panel = useContext(panelContext);
  const handleClick = useCallback(() => {
      if (setSelectedPanel) setSelectedPanel(panel ?? 0);
    },
    [setSelectedPanel, panel]
  );
  // const classNames = ['']
  // if (selectedPanel === panel) {
    // classNames.push('')
  // };

return createPortal(
  <li id="tab" className={classNames(selectedPanel === panel ? "font-bold border-b border-b-black" : "", "text-lg mx-2")}>
    <button onClick={handleClick}>{children}</button>
  </li>,
  tabListElement as Element
)
}

export const Content: React.FC<ITabContentProps> = ({ children }) => {
  const selectedPanel = useContext(selectedPanelContext);
  const panel = useContext(panelContext);
  return selectedPanel === panel
    ? <div id="content" className="flex flex-row justify-center items-center">{children}</div>
    : null
  };

  /*
  Working Demo! - https://mmiller42.medium.com/advanced-compositional-react-with-usecontext-useref-and-usestate-51702dfedc71
  import React, {
  createContext,
  forwardRef,
  useCallback,
  useContext,
  useState,
  useEffect, useRef
} from 'react'
import { createPortal } from 'react-dom'
import useForwardedRef from '@bedrock-layout/use-forwarded-ref'
import './styles.css'

const tabListElementContext = createContext()
const selectedPanelContext = createContext()
const setSelectedPanelContext = createContext()

const NOOP = () => {}
const Tabs = ({ children, activePanel = 0, onActivePanelChange = NOOP }) => {
  const [tabListElement, setTabListElement] = useState(null);
  const [selectedPanel, setSelectedPanel] = useState(activePanel);

  return (
    <div className="tabs">
      <ul className="tab-list" ref={setTabListElement} />
      <tabListElementContext.Provider value={tabListElement}>
        <setSelectedPanelContext.Provider value={setSelectedPanel}>
          <selectedPanelContext.Provider value={selectedPanel}>
            {tabListElement ? children : null}
          </selectedPanelContext.Provider>
        </setSelectedPanelContext.Provider>
      </tabListElementContext.Provider>
    </div>
  )
}

const panelContext = createContext()

const Panel = forwardRef(({ children, index }, ref) => {
  const panelRef = useRef(index)

  if (!panelRef.current) {
    panelRef.current = index;
  }

  return (
    <panelContext.Provider value={panelRef.current}>
      {children}
    </panelContext.Provider>
  )
})

const Tab = ({ children, index }) => {
  const tabListElement = useContext(tabListElementContext)
  const setSelectedPanel = useContext(setSelectedPanelContext)
  const selectedPanel = useContext(selectedPanelContext)
  const panel = useContext(panelContext)

  const handleClick = useCallback(() => setSelectedPanel(index), [
    setSelectedPanel,
    panel,
  ])

  const classNames = ['tab']

  if (selectedPanel === panel) {
    classNames.push('active')
  }

  return createPortal(
    <li className={classNames.join(' ')}>
      <button onClick={handleClick}>{children}</button>
    </li>,
    tabListElement,
  )
}

const Content = ({ children }) => {
  const selectedPanel = useContext(selectedPanelContext)
  const panel = useContext(panelContext)

  return selectedPanel === panel ? (
    <div className="content">{children}</div>
  ) : null
}

const App = () => {
  const [activePanel, setActivePanel] = useState()
  const [firstPanelRef, setFirstPanelRef] = useState()

  useEffect(() => setActivePanel(firstPanelRef), [firstPanelRef])

  return (
    <div className="app">
      <Tabs activePanel={0} onActivePanelChange={setActivePanel}>
        <Panel index={0} ref={setFirstPanelRef}>
          <Tab index={0}>Panel 1</Tab>
          <Content>Panel 1 content</Content>
        </Panel>
        <Panel index={1}>
          <Tab index={1}>Panel 2</Tab>
          <Content>Panel 2 content</Content>
        </Panel>
      </Tabs>
    </div>
  )
}

export default App
  */




