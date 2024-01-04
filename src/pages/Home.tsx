import { Text, CardCourse, SearchBar } from "../components"
import axios from "axios"
import { useState, useEffect } from "react"
import { CourseDataType } from "../type"
import MarginIcon from '@mui/icons-material/Margin';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { grey } from '@mui/material/colors';

function Home() {

  const [courseData, setCourseData] = useState<CourseDataType[]>([])
  const [courseName, setCourseName] = useState<string>('')
  const swiper = useSwiper()

  const getCourseData = async () => {
    await axios.get(`https://borntodev-final-project-api.borntodev.repl.co/courses`)
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


  return (
    <div className=" h-full w-full bg-slate-900 mobile:h-auto">
      <div className="">
        <SearchBar courseName={courseName} setCourseName={setCourseName} />
      </div>
      <div className="w-full">
        <div className="flex justify-center">
          <Text size={32} weight={500} color="rgb(203 213 225)" className=" font-sansThai w-[1280px] px-7 my-4"><MarginIcon /> คอร์สเรียนทั้งหมด</Text>
        </div>
        <div className=" flex justify-center relative">
          <div className=" w-full max-w-[1280px] pt-[20px] grid grid-cols-4 justify-items-center mobile:hidden ">
            {courseData?.filter((x: CourseDataType) => x.name?.toLocaleLowerCase()?.includes(courseName?.toLocaleLowerCase()))?.map((data, index) => (
              <CardCourse {...data} key={index} />
            ))}
          </div>

          <Swiper
            spaceBetween={2}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            navigation={{ nextEl: ".arrow-right", prevEl: ".arrow-left" }}
            modules={[Pagination, Navigation]}
            className="mobile:!flex !hidden "
            loop={true}
          >

            {courseData?.filter((x: CourseDataType) => x.name?.toLocaleLowerCase()?.includes(courseName?.toLocaleLowerCase()))?.map((data, index) => (
              <SwiperSlide className="!flex justify-center">
                <CardCourse {...data} key={index} />
              </SwiperSlide>
            ))}
          </Swiper>
          <button className="hidden mobile:flex arrow-left arrow absolute top-[50%] left-2 z-10" onClick={() => swiper.slidePrev()} ><ArrowBackIosIcon sx={{ color: grey[300], fontSize: 25 }} /></button>
          <button className="hidden mobile:flex arrow-right arrow absolute top-[50%] right-2 z-10" onClick={() => swiper.slideNext()} ><ArrowForwardIosIcon sx={{ color: grey[300], fontSize: 25 }} /></button>
        </div>

      </div>
    </div>
  )
}

export default Home
