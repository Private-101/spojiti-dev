import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from '@remix-run/react';
import { } from '@remix-run/node';
import type {  } from '@remix-run/node';
import { generateUserCard, type IUserCardProps } from '~/experimental/pages/page.data';
import SocialShareButtons from '~/components/common/SocialShareButtons';
import { TabList, Panel, Tab, Content } from '~/experimental/Tabs/index';

export default function TabsDemoPage() {
    const [activePanel, setActivePanel] = useState(0);

  // useEffect(() => setActivePanel(firstPanelRef), [firstPanelRef])

  return (
    <div className="flex flex-row justify-center items-center w-full">
      <TabList activePanel={activePanel} onActivePanelChange={setActivePanel}>
        {Array.from({ length: 5}).map((_, i) => (
            <>
            <Panel index={i}>
          <Tab>Panel {i}</Tab>
          <Content>Panel {i} content</Content>
        </Panel>
            </>
        ))}
        
      </TabList>
    </div>
  )
}