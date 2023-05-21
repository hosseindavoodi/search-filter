import { useState } from "react"
import Header from "@/components/header"
import DataRender from "@/components/dataRender"

const data = [
  {
    "name": "Anny Johnson",
    "middleName": "Emma",
    "job": "doctor",
    "age": 21
  },
  {
    "name": "David Johnson",
    "middleName": "Isabella",
    "job": "teacher",
    "age": 32
  },
  {
    "name": "Michael Johnson",
    "middleName": "Harper",
    "job": "doctor",
    "age": 37
  },
  {
    "name": "Paul Johnson",
    "middleName": "Emily",
    "job": "doctor",
    "age": 15
  },
  {
    "name": "Steve Sandson",
    "middleName": "Superman",
    "job": "driver",
    "age": 12
  },
  {
    "name": "Fred K.O.",
    "middleName": "Spiderman",
    "job": "developer",
    "age": 20
  }
]


export default function Home() {
const [search, setSearch] = useState('')

  return (
    <div className="p-4">
      <Header setSearch={setSearch} />
      <DataRender data={data} search={search} />
    </div>
  )
}
