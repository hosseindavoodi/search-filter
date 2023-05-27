import { useEffect, useState } from "react"
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import Header from "@/components/header"
import DataRender from "@/components/dataRender"

export default function Home({response}: any) {
const [data, setData] = useState([])
const [search, setSearch] = useState('')
const [isDoctor, setIsDoctor] = useState(false)
const [isUnder21, setIsUnder21] = useState(false)


    useEffect(()=>{
    setData(response)
  },[response])

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

export const getServerSideProps: GetServerSideProps = async () => {

  const request = await fetch('http://localhost:3000/userData.json');
  const response = await request.json();
   
  return { 
    props: { response } 
  };
};
