import React from "react";

type DataType = {
  name: string
  middleName: string
  job: string
  age: number
};

interface DataRenderProps {
  data: Array<DataType>
  search: string
  isDoctor: boolean
  isUnder21: boolean
}

export default function DataRender({
  data,
  search,
  isDoctor,
  isUnder21,
}: DataRenderProps) {

  const dataTable = (items: any, key: number) => {
    return (
      <div key={key} className="flex">
        <div className="w-1/12 mb-2">{key + 1} - </div>
        <div className="w-1/5 mb-2">{items.name}</div>
        <div className="w-1/5 mb-2">{items.middleName}</div>
        <div className="w-1/5 mb-2">{items.job}</div>
        <div className="w-1/5">{items.age}</div>
      </div>
    );
  };

  const filterData = (items: any, key: number) => {
    
    const searchedItems = items.name.toLowerCase().includes(search)
    const checkJob = items.job.toLowerCase().includes("doctor")
    const checkAge = items.age < 21

    if (searchedItems) {
        if (isDoctor && isUnder21) {
            if (
                checkAge && checkJob
            ) {
                return dataTable(items, key)
            }
        } else {
            if (isDoctor) {
                if (checkJob) {
                return dataTable(items, key)
                }
            } else if (isUnder21) {
                if (checkAge) {
                return dataTable(items, key)
                }
            } else {
                return dataTable(items, key)
            }
        }
    }
  }

  return <>{data.map((items, i) => filterData(items, i))}</>
}
