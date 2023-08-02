import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from '@remix-run/react';
import { } from '@remix-run/node';
import type {  } from '@remix-run/node';
import { generateUserCard } from '~/experimental/pages/page.data';
import type { IUserCardProps } from '~/temp/dev/types';
import SocialShareButtons from '~/components/common/SocialShareButtons';
import { TabList, Panel, Tab, Content } from '~/experimental/Tabs/index';

export default function TabsDemoPage() {
    const [activePanel, setActivePanel] = useState(0);
// onActivePanelChange={setActivePanel}
  // useEffect(() => setActivePanel(firstPanelRef), [firstPanelRef])

  return (
    <div className="flex flex-row justify-center items-center w-full">
      <TabList activePanel={activePanel}>
        {Array.from({ length: 5}).map((_, i) => (
            <React.Fragment key={`tab-${i}`}>
            <Panel index={i}>
          <Tab>Panel {i}</Tab>
          <Content>Panel {i} content</Content>
        </Panel>
            </React.Fragment>
        ))}
        
      </TabList>
    </div>
  )
}