import type { ReactNode, Dispatch, SetStateAction } from 'react';

export type ITabListContext = HTMLUListElement | null;

export interface ITabListProps {
    children: ReactNode;
    activePanel: number, 
    // onActivePanelChange: Dispatch<SetStateAction<number>>;
  };

  export interface ITabPanelProps {
    index: number;
    children: React.ReactNode;
  };

  export interface ITabProps {
    children: React.ReactNode;
  };

  export interface ITabContentProps {
    children: React.ReactNode;
  };