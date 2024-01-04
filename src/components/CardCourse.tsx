import { Text, ButtonPrimary } from "."
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { CourseDataType } from "../type";
import { Link } from 'react-router-dom';

const CardCourse = (prop: CourseDataType) => {
  return (
    <Link to={`/course?course_id=${prop.id}`} className="w-[280px]">
      <div className=" w-[280px] h-[480px] bg-slate-800 rounded-3xl drop-shadow-xl hover:scale-105 cursor-pointer mobile:hover:scale-100">
        <img src={'/public/image/mock.ico'} alt="Course" className=" bg-slate-400 w-full h-[240px] rounded-t-3xl" />

        <div className=" m-4">
          <Text size={18} weight={700} color="rgb(240 171 252)" className="pb-4 h-[60px]">{prop.name}</Text>

          <Text size={14} weight={400} color="rgb(148 163 184)" className=" font-sansThai h-[70px]">{prop.description}</Text>

          <div className=" flex justify-end mt-2">
            <ButtonPrimary />
          </div>

          <Text size={14} weight={400} color="rgb(148 163 184)" className=" mt-2 font-sansThai pl-1"><AccessTimeIcon />&nbsp; -- &nbsp; ชั่วโมง</Text>
        </div>
      </div>
    </Link>
  )
}

export default CardCourse