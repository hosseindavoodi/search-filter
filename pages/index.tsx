import { useEffect, useState } from "react"
import Header from "@/components/header"
import DataRender from "@/components/dataRender"

export default function Home() {
const [data, setData] = useState([])
const [search, setSearch] = useState('')
const [isDoctor, setIsDoctor] = useState(false)
const [isUnder21, setIsUnder21] = useState(false)


  const fetchData = async() => {
    try {
      const request = await fetch('/userData.json')
      const response = await request.json()
      setData(response)
    }
    catch {
      console.log('Something is wrong')
    }
  }

  useEffect(()=>{
    fetchData()
  },[])

  return (
    <div className="p-4">
      <Header 
      setSearch={setSearch} 
      setIsDoctor={setIsDoctor} 
      isDoctor={isDoctor}
      isUnder21={isUnder21}
      setIsUnder21={setIsUnder21}
      />
      <DataRender 
      data={data} 
      search={search} 
      isDoctor={isDoctor}
      isUnder21={isUnder21}
      />
    </div>
  )
}
