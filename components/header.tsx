import React from "react"

interface HeaderProps {
  setSearch: any
  setIsDoctor: any
  isDoctor: boolean
  isUnder21: boolean
  setIsUnder21: any
}

export default function Header({
  setSearch,
  setIsDoctor,
  isDoctor,
  isUnder21,
  setIsUnder21,}: HeaderProps) {

  return (
    <div className="flex w-full bg-slate-300 p-3 h-16 mb-8">
      <input
        placeholder="search"
        onChange={(e) => setSearch(e.target.value)}
        className="h-10 w-1/4 p-1"
      />
      <div className="ml-4">
        <input type="checkbox" onChange={() => setIsUnder21(!isUnder21)} />
        <label>under 21 age</label>
      </div>
      <div className="ml-4">
        <input type="checkbox" onChange={() => setIsDoctor(!isDoctor)} />
        <label>doctors</label>
      </div>
    </div>
  )
}
