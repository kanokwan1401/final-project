import axios from "axios"
import { useState, useEffect } from "react"
import { CourseDataType } from "../type"
import { Text } from "../components"
import { useSearchParams } from 'react-router-dom';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Link } from 'react-router-dom';

const Course = () => {
  const [searchParams] = useSearchParams()
  const courseID = searchParams.get('course_id')
  const [courseData, setCourseData] = useState<CourseDataType | null>(null)
  const getCourseData = async () => {
    await axios.get(`https://81a580b1-633e-426f-8e80-90f6eabba9e8-00-ugdrq2fsa097.pike.replit.dev/courses/${courseID}`)
      .then((res) => {
        // console.log(res.data);
        setCourseData(res.data)
      })
      .catch((err) => {
        console.log(err);
      })
  }

  useEffect(() => {
    getCourseData()
  }, [])
  console.log(courseData)
  console.log(courseID);


  return (
    <div className=" h-full w-full bg-slate-900 flex justify-center">
      <div className="w-[1280px] px-7 pt-7">
        <div className="bg-slate-800 w-[1280px] h-[400px] rounded-3xl drop-shadow-xl flex justify-center gap-24 mobile:w-[340px] mobile:h-auto mobile:flex-col mobile:p-5 mobile:gap-16">
          <div className=" flex flex-col justify-center mobile:items-center">
            <p className="w-[400px] text-[36px] font-mono text-slate-200 font-bold mobile:w-[300px] mobile:text-3xl pb-2 pt-2 mobile:text-center">
              {courseData?.name}
            </p>
            <Text size={20} weight={700} color="rgb(240 171 252)">
              {courseData?.category}
            </Text>
            <Text size={18} weight={700} color="rgb(148 163 184)" className="w-[350px] pt-7 mobile:w-[300px]">
              {courseData?.description}
            </Text>
            <Text size={18} weight={400} color="rgb(148 163 184)" className=" mt-7 font-sansThai"><AccessTimeIcon />&nbsp; -- &nbsp; ชั่วโมง</Text>
          </div>

          <div className=" flex flex-col justify-center mobile:items-center">
            <Link to={`/lecture?course_id=${courseID}`}>
              <button className='bg-fuchsia-300 text-slate-900 font-mono font-semibold text-[24px] rounded-2xl p-3 px-4 w-[400px] hover:bg-fuchsia-500 mobile:w-[300px] mobile:text-[22px] mobile:mb-5'>Lecture</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Course