import React from 'react';
import { CgSearch } from 'react-icons/cg';
import styles from './search.styles.css';

interface Props {
  search: string
  setSearch: React.Dispatch<React.SetStateAction<string>>
}

export const Search = ({ search, setSearch }: Props) => {
  return (
    <div className={/*styles.search*/ ''}>
      <input
        type="text"
        value={search}
        placeholder="Search"
        onChange={e => setSearch(e.target.value)}
      />
      <CgSearch size={20} color="#4c4d5e" />
    </div>
  )
}