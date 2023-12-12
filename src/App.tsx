import { NavBar, CardCourse, SearchBar } from "./components"
import axios from "axios"
import { useState, useEffect } from "react"
import { CourseDataType } from "./type"

function App() {

  const [courseData, setCourseData] = useState<CourseDataType[]>([])
  const getCourseData = async () => {
    await axios.get(`https://borntodev-final-project-api.borntodev.repl.co/courses`)
    .then((res) => {
      // console.log(res.data);
      setCourseData(res.data)
    })
    .catch((err) =>{
      console.log(err);
    })
  }

  useEffect(()=>{
    getCourseData()
  },[])
  console.log(courseData);
  
  return (
    <div className=" h-screen w-full bg-slate-900 ">
      <div>
        <div>
          <NavBar />
        </div>
        <div>
          <SearchBar />
        </div>
        <div className=" flex justify-center">
          <div className="w-[1280px] px-7 pt-[20px] flex justify-between cursor-pointer">
            {courseData?.map((data,index)=>(
            <CardCourse {...data} key={index} />

            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
