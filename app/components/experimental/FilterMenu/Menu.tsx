import React from 'react'
import styles from './menu.styles.css'
import Logo from '~/components/common/assets/img/logo.svg';

import { Search } from './Searchbar/Searchbar';
import { Filters } from './Filters/Filters';
import { DropdownMenu } from './DropdownMenu/DropdownMenu';
import { Items } from './Items/Items';

interface FilterMenuProps {
    filterOptions?: null;
};

export const FilterMenu: React.FC<FilterMenuProps> = ({filterOptions}) => {
  const [search, setSearch] = React.useState('')
  const [filter, setFilter] = React.useState<number | null>(null)
  const [menuOption, setMenuOption] = React.useState('')

  return (
    <main>
      <nav className={'styles.navMenu'}>
        <Logo />
      </nav>
      <header className={'styles.header'}>
        <div className={'styles.header__text'}>Best sushi is just here!</div>
      </header>
      <section className={'styles.menu'}>
        <h3 className={'styles.menu__title'}>Menu</h3>
        <Search search={search} setSearch={setSearch} />
        <div className={'styles.menu__filters'}>
          <Filters filter={filter} setFilter={setFilter} />
          <DropdownMenu menuOption={menuOption} setMenuOption={setMenuOption} />
        </div>
        <Items search={search} filter={filter} menuOption={menuOption} />
      </section>
    </main>
  )
}