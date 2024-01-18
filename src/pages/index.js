import {useState, useEffect} from 'react'
import Item from '@components/Item'
import axios from 'axios'

export default function Home() {
  const [sources, setSources] = useState([]);

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

    const dayDate = dateObject.getDate();
    let day = valueDay(dateObject.getDay());
    const month = valueMonth(dateObject.getMonth());
    const year = dateObject.getFullYear();
    dayDate++;
    return `${day}, ${month} ${dayDate}, ${year}`;
  };

  return (
    <div className="w-full min-h-screen flex items-start justify-center pt-4 bg-[url('../../public/wallpaper.jpg')] bg-no-repeat bg-cover bg-center bg-fixed">
      <div className="flex flex-col m-2 lg:w-[600px] gap-2">
        {
          sources?.map((item, id)=><Item
            title={item.title}
            student={item.student}
            description={item.description}
            links={item.links}
            date={returnDate(item.date)}
            id={id}
          />)
        }
      </div>
    </div>
  )
}
