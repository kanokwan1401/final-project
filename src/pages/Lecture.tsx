import { Acordion, Text } from "../components"
import axios from "axios"
import { useState, useEffect, useRef } from "react"
import { CourseDataType } from "../type"
import { useSearchParams } from 'react-router-dom';

const Lecture = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [searchParams] = useSearchParams()
  const courseID = searchParams.get('course_id')
  const [courseData, setCourseData] = useState<CourseDataType | null>(null)
  const [videoEnd, setVideoEnd] = useState<boolean>(localStorage.getItem(`watchEnd${courseID}`) === 'true')
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


  useEffect(() => {
    const video = videoRef.current;
    if (!localStorage.getItem(`watchEnd${courseID}`)) {
      localStorage.setItem(`watchEnd${courseID}`, 'false')
    }

    // Check if the current time is stored in localStorage
    if (localStorage.getItem(`videoTime${courseID}`)) {
      if (video) {
        video.currentTime = parseFloat(localStorage.getItem(`videoTime${courseID}`) || '0');
      }
    }

    // Save the current time to localStorage when the video is paused
    const handlePause = () => {
      if (video) {
        localStorage.setItem(`videoTime${courseID}`, video.currentTime.toString());
        // loaclStorage.setItem(key,value)
      }
    };

    if (video) {
      video.addEventListener('pause', handlePause);
    }

    // Clear the stored time when the video ends
    const handleEnded = () => {
      localStorage.removeItem(`videoTime${courseID}`);
      localStorage.setItem(`watchEnd${courseID}`, 'true')
      setVideoEnd(true)
    };

    if (video) {
      video.addEventListener('ended', handleEnded);
    }

    // Clear the stored time when the component is unmounted
    return () => {
      if (video) {
        video.removeEventListener('pause', handlePause);
        // video.removeEventListener('ended', handleEnded);
      }
      // localStorage.removeItem(`videoTime${courseID}`);
    };
  }, []);



  return (
    <div className="h-full w-full bg-slate-900 flex justify-center ">
      <div className="w-[1280px] px-7 pt-7 flex justify-between mobile:flex-col mobile:justify-start ">
        <div className="bg-slate-800 w-[900px] h-[750px] rounded-xl drop-shadow-xl flex flex-col items-center mobile:h-auto mobile:w-[350px] mobile:mb-5">
          <div>
            <div className="w-[850px] h-[450px] bg-black mt-7 mobile:w-[330px] mobile:h-auto">
              <video ref={videoRef} controls>
                <source src="mock_clip.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="mt-5 mobile:flex mobile:flex-col mobile:items-center ">
              <p className="w-[700px] text-[36px] mobile:text-[24px] text-slate-100 font-mono font-semibold mobile:text-center mobile:w-[300px] pt-4">
                {courseData?.name}
              </p>
              <Text size={20} weight={700} color="rgb(240 171 252)">
                {courseData?.category}
              </Text>
              <Text size={18} weight={700} color="rgb(148 163 184)" className="pt-7 mb-5 w-[850px] mobile:w-[300px] mobiletext-center">
                {courseData?.description}
              </Text>
            </div>
          </div>
        </div>
        <div className=" border-2 border-slate-800 w-[300px] h-fit rounded-xl drop-shadow-xl flex justify-center mobile:w-full ">
          <Acordion videoEnd={videoEnd} />
        </div>
      </div>
    </div>
  )
}

export default Lecture