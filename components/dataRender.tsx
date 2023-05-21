import React from "react"

type DataType = {
name: string
middleName: string
job: string
age: number
}

interface DataRenderProps {
  data: Array<DataType>
  search: string
}

export default function DataRender(
    {data, search}: DataRenderProps
    ) {


    const filterData = (items: any, key: number) => {
        if (items.name.toLowerCase().includes(search)) {
            return (
                <div key={key} className='flex'>
                    <div className='w-1/12 mb-2'>{key + 1} - </div>   
                    <div className='w-1/5 mb-2'>{items.name}</div>
                    <div className='w-1/5 mb-2'>{items.middleName}</div>
                    <div className='w-1/5 mb-2'>{items.job}</div>
                    <div className='w-1/5'>{items.age}</div>
                </div>  
            )
        }

    }

    return (
       <>
       {
        data.map((items, i) =>(
            filterData(items, i)
        ))
       }
       </>
    )
}