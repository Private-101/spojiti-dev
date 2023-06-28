import {classNames} from '~/utils';
import React from 'react'
import styles from './menu.styles.css';
import options from './options.json'
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';

interface Props {
  menuOption: string
  setMenuOption: React.Dispatch<React.SetStateAction<string>>
}

export const DropdownMenu = ({ menuOption, setMenuOption }: Props) => {
  const [open, setOpen] = React.useState(false)
  const nameMenuOption =
    menuOption && options.find(option => option.value === menuOption)?.nome

  return (
    <button
      className={classNames('styles.menuOption', menuOption !== '' ? 'styles.menuOption--active' : '')}
      onClick={() => setOpen(!open)}
      onBlur={() => setOpen(false)}
    >
      <span>{nameMenuOption || 'Options'}</span>
      {open ? (
        <MdKeyboardArrowUp size={20} />
      ) : (
        <MdKeyboardArrowDown size={20} />
      )}
      <div
        className={classNames('styles.menuOption__options', open ? 'styles.menuOption__options--active' : '')}
      >
        {options.map(option => (
          <div
            className={'styles.menuOption__option'}
            key={option.value}
            onClick={() => setMenuOption(option.value)}
          >
            {option.nome}
          </div>
        ))}
      </div>
    </button>
  )
}