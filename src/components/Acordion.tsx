import { useState, FC } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { blueGrey, green } from '@mui/material/colors';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { Text } from '.';


type PropsType = {
  videoEnd: boolean 
}

const Acordion: FC<PropsType> = ({ videoEnd }) => {


  const accordionData = {
    title: 'Section #1',
    content: `Lorem ipsum dolor, sit amet.`
  };

  const { title, content } = accordionData;

  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      <div className="w-[290px] mobile:w-[330px] ">
        <div onClick={() => setIsActive(!isActive)}
          className='flex'>
          <div className=" bg-slate-800 w-[290px] h-[60px] rounded-xl mt-1 mb-1 text-slate-300 flex justify-between items-center text-lg font-bold px-5 mobile:w-[330px]">{title}
            <div className='text-slate-400 flex justify-center items-center font-semibold'>
              {isActive ? <ExpandMoreIcon sx={{ fontSize: 26 }} /> : <ArrowForwardIosIcon sx={{ fontSize: 16 }} />}
            </div>
          </div>

        </div>
        {isActive &&
          <div className='text-slate-300 px-5 pt-3 flex flex-col'>
            <div className='flex'>
              {videoEnd ? <TaskAltIcon sx={{ color: green[400], fontSize: 27 }} /> : <PlayCircleOutlineIcon sx={{ color: blueGrey[500], fontSize: 30 }} />}
              <div className='pl-3 cursor-pointer'>{content}</div>
            </div>
            <div className=' bg-fuchsia-300 rounded-xl w-[90px] mt-3 mb-3'>
              <Text size={14} weight={700} color="rgb(15 23 42)"
                className=" font-sansThai px-1">
                <AccessTimeIcon sx={{ fontSize: 14 }} />&nbsp; -- &nbsp; ชั่วโมง
              </Text>
            </div>
          </div>
        }
      </div>
    </div>
  )
}

export default Acordion