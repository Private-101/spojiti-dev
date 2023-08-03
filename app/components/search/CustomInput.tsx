import React, { useState, useEffect } from 'react';
import cn from '~/utils/classname';

interface IDropdownProps {
    children: React.ReactNode;
};
const DropDown: React.FC<IDropdownProps> = ({ children }) => (
  <div className="absolute w-full z-2 border border-gray-300">{children}</div>
);

interface IDropdownItemProps {
    highlighted: boolean;
    children: React.ReactNode;
};
const DropDownItem: React.FC<IDropdownItemProps> = ({ highlighted, children }) => (
  <div
  className={cn({
    'bg-f7f7f7 pl-8 border-l-gray-300': highlighted,
    'bg-white border-l-white': !highlighted
  }, 'flex items-center border-l-2 border-b border-gray-300 transition-all p-4')}
   >
    {children}
  </div>
);


const glowKeyframes = {
  from: {
    boxShadow: '0 0 0px yellow',
  },
  to: {
    boxShadow: '0 0 10px 1px yellow',
  },
};

interface ISearchInputProps {
    isLoading: boolean;
    onValue: (search: string) => void;
    // setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};
const SearchInput: React.FC<ISearchInputProps> = ({isLoading, onValue}) => {
  // const [loading, setLoading] = useState(isLoading);

  // useEffect(() => {})

  return (
    <div className="relative">
      <input
        type="text"
        disabled={isLoading}
        aria-disabled={isLoading}
        onChange={(e) => onValue(e.currentTarget.value)}
        className={cn({
            'animate-glow': isLoading,
        }, 'w-full p-4 border-0 text-2xl')}
      />
    </div>
  );
};

interface ICustomInputProps {
    items: React.ReactNode;
}
const CustomInput: React.FC<ICustomInputProps> = ({items}) => {
    const [query, setQuery] = useState<string>('');

    if (!items || React.Children.count(items) < 1) {
        return (
            <>
              <SearchInput isLoading={false} onValue={setQuery} />
            </>
          );
    }
    /*React.Children.map(items, (item, index) => {
        if (query && query.trim() !== '') {
            
        }
    })*/
  return (
    <>
      <DropDown>
        <DropDownItem highlighted={false}>
          {/* Content */}
        </DropDownItem>
      </DropDown>
      <SearchInput isLoading={false} onValue={setQuery} />
    </>
  );
};

export default CustomInput;
