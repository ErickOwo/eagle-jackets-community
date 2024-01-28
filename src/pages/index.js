import {useState, useEffect} from 'react';
import Select from 'react-select';
import Item from '@components/Item';
import axios from 'axios';

export default function Home() {
  const [sources, setSources] = useState(null);
  const [dateFilt, setDateFilt] = useState(null);
  const [studentFilt, setStudentFilt] = useState(null)

  useEffect(()=>{
    const getData = async ()=>{
      const res = await axios.get('/api/source')
      const data = res.data.source;

      data.reverse()

      setSources(data)
    }
    getData()
  }, [])

  const returnDate = (date) => {
    const dateObject = new Date(date);

    const valueDay = (d) => {
      if (d == 0) return 'Sunday';
      if (d == 1) return 'Monday';
      if (d == 2) return 'Tuesday';
      if (d == 3) return 'Wednesday';
      if (d == 4) return 'Thursday';
      if (d == 5) return 'Friday';
      if (d == 6) return 'Saturday';
    };

    const valueMonth = (m) => {
      if (m == 0) return 'January';
      if (m == 1) return 'February';
      if (m == 2) return 'March';
      if (m == 3) return 'April';
      if (m == 4) return 'May';
      if (m == 5) return 'June';
      if (m == 6) return 'July';
      if (m == 7) return 'August';
      if (m == 8) return 'September';
      if (m == 9) return 'October';
      if (m == 10) return 'November';
      if (m == 11) return 'December';
    };

    let dayDate = dateObject.getDate();
    const day = valueDay(dateObject.getDay());
    const month = valueMonth(dateObject.getMonth());
    const year = dateObject.getFullYear();
    return `${day}, ${month} ${dayDate}, ${year}`;
  };

  const changingDateFilter = e => {
    if(`${e.target.value}` == "" ) setDateFilt(null)
    else setDateFilt(e.target.value)
  }

  const handleSelection = e  => {
    const student = `${e.value}`
    if(student == "Everyone") setStudentFilt(null)
    else setStudentFilt(student)
  }

  return (
    <div className="w-full min-h-[800px] lg:min-h-screen flex pt-4 bg-[url('../../public/bg-2.png')] bg-no-repeat bg-cover bg-center bg-fixed  flex-col items-center p-2 gap-2">
      <div className='lg:w-[600px] w-full bg-[#fffaf7] p-2 border-2 border-black'>
        <h2 className='text-xl font-semibold'>Filter.</h2>
        <div className='flex flex-col'>
          <label className='font-semibold'>By date:</label>
          <input
            type="Date"
            onChange={changingDateFilter} />
        </div>
        <div className='flex flex-col'>
          <label className='font-semibold'>By Student:</label>
          <Select
            onChange={handleSelection}
            options={[
              {value: "Everyone", label: "Everyone"},
              {value: "Joel", label: "Joel"},
              {value: "Brandon", label: "Brandon"},
              {value: "Diego", label: "Diego"},
              {value: "Dylan", label: "Dylan"},
              {value: "Esmeralda", label: "Esmeralda"},
              {value: "Estefany", label: "Estefany"},
              {value: "Isabel", label: "Isabel"},
              {value: "Reggie", label: "Reggie"},
              {value: "Pedro", label: "Pedro"},
            ]}
             />
        </div>
        
      </div>
      <div className="flex flex-col lg:w-[600px] gap-2 w-full">
        {
          sources == null ? <div className='flex justify-center w-full text-white text-2xl bg-black py-2'>
            <p>Loading...</p>
          </div> : 
          sources?.map((item, index)=>{
            const itemToReturn = <Item
              title={item.title}
              student={item.student}
              description={item.description}
              links={item.links}
              date={returnDate(item.date)}
              key={index}
            />

            if(dateFilt == null && studentFilt == null) return itemToReturn
            else {
              let newDate1 = new Date(dateFilt);
              let newDate2 = new Date(item.date)

              newDate1 = `${newDate1}`
              newDate2 = `${newDate2}`

              if(dateFilt == null){
                if(studentFilt == item.student ) return itemToReturn
              } else if(studentFilt == null) {
                if(newDate1.substring(0,15) == newDate2.substring(0,15)) return itemToReturn
              } else {
                if(newDate1.substring(0,15) == newDate2.substring(0,15) && studentFilt == item.student ) return itemToReturn
              }

              
            }
          }) 
        }
      </div>
    </div>
  )
}
