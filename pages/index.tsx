
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
  return (
    <div className="p-4">
      <div className="flex w-full bg-slate-300 p-3 h-16 mb-8">
         <input placeholder="search" className="h-10 w-1/4 p-1" />
         <div className="ml-4" >
           <input type="checkbox" />
           <label>under 21 age</label>
         </div>
         <div className="ml-4" >
           <input type="checkbox" />
           <label>doctor</label>
         </div>
      </div>
        {
          data.map((items, i) =>(
            <div key={i} className='flex'>
              <div className='w-1/12 mb-2'>{i + 1} - </div>   
              <div className='w-1/5 mb-2'>{items.name}</div>
              <div className='w-1/5 mb-2'>{items.middleName}</div>
              <div className='w-1/5 mb-2'>{items.job}</div>
              <div className='w-1/5'>{items.age}</div>
            </div>
          ))
        }
    </div>
  )
}
