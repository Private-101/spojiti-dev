import React from 'react';
import { Item } from './Item/Item';
import plates from './plates.json';
import styles from './items.styles.css';

interface Props {
  search: string
  filter: number | null
  menuOption: string
}

export const Items = ({ search, filter, menuOption }: Props) => {
  const [list, setList] = React.useState(plates)

  function handleSearch(title: string) {
    const regex = new RegExp(search, 'i')
    return regex.test(title)
  }
  function handleFilter(id: number) {
    if (filter !== null) return filter === id
    return true
  }

  function order(newList: typeof plates) {
    switch (menuOption) {
    case 'portion':
      return newList.sort((a, b) => (a.size > b.size ? 1 : -1))
    case 'amount_people':
      return newList.sort((a, b) => (a.serving > b.serving ? 1 : -1))
    case 'price':
      return newList.sort((a, b) => (a.price > b.price ? 1 : -1))
    default:
      return newList
    }
  }

  React.useEffect(() => {
    const newList = plates.filter(
      item => handleSearch(item.title) && handleFilter(item.category.id)
    )
    setList(order(newList))
  }, [search, filter, menuOption])

  return (
    <div className={'styles.items'}>
      {list.map(dish => (
        <Item key={dish.id} {...dish} />
      ))}
    </div>
  )
}