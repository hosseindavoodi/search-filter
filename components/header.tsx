import React from "react"

export default function Header({setSearch}: any) {

    return (
        <div className="flex w-full bg-slate-300 p-3 h-16 mb-8">
            <input 
            placeholder="search"
            onChange={(e)=>setSearch(e.target.value)}
            className="h-10 w-1/4 p-1" 
            />
            <div className="ml-4" >
                <input type="checkbox" />
                <label>under 21 age</label>
            </div>
            <div className="ml-4" >
                <input type="checkbox" />
                <label>doctor</label>
            </div>
        </div>

    )
}