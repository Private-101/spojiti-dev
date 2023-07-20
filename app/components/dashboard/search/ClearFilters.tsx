import React from 'react'

interface ClearFiltersProps { clearFilters: React.MouseEventHandler<HTMLDivElement> | undefined };

function ClearFilters(props: ClearFiltersProps) {
  return (
    <div
      onClick={props.clearFilters}
      className="grid grid-cols-4 font-bold m-3 text-center cursor-pointer "
    >
      <div className="text-darkCyan text-md hover:underline col-span-3 pt-2 rounded-l-sm px-2">
        Clear
      </div>
    </div>
  )
}

export default ClearFilters