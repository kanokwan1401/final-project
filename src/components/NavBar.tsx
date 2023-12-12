import { Text } from "."
// import { Link } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { grey } from '@mui/material/colors';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import MarginIcon from '@mui/icons-material/Margin';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

const NavBar = () => {
  return (
    <div className=" w-full h-[70px] bg-slate-800 flex justify-center ">
      <div className="w-[1280px] h-[70px] px-7 flex items-center justify-between">
        <div className=" flex items-center">
          <div className=" flex">
            <Text weight={500} size={44} color="#333" className=" font-oswald ">
              <p style={{ WebkitTextStrokeColor: 'rgb(240 171 252)', WebkitTextStrokeWidth: '2px' }}>SCHOOL</p>
            </Text>
            <Text weight={200} size={14} color="#fff" className="mt-2">TH</Text>
          </div>
        </div>
        <div className=" flex justify-center">
          <ul className="font-sansThai font-bold text-slate-50 flex text-[18px] ">
            <li className="hover:text-fuchsia-400 cursor-pointer"><MarginIcon /> คอร์สเรียนทั้งหมด</li>
            <li className=" pl-10 hover:text-fuchsia-400 cursor-pointer"><LibraryBooksIcon /> บทความ</li>
            <li className=" pl-10 text-slate-400">|</li>
            <li className=" pl-10 hover:text-fuchsia-400 cursor-pointer"><EmojiEmotionsIcon/> คอร์สเรียนของฉัน</li>
          </ul>
        </div>
        <div className=" flex items-center">
          <div className=" pr-5"><NotificationsIcon sx={{ color: grey[300], fontSize: 25 }} /></div>
          <Text weight={700} size={16} color="rgb(148 163 184)" className=" pr-5">|</Text>
          <div className=" rounded-full bg-fuchsia-400 w-7 h-7 flex items-center justify-center"><PersonIcon sx={{ color: grey[800] }} /></div>
          <Text weight={700} size={18} color="rgb(148 163 184)" className=" pl-3">Username</Text>
        </div>

      </div>

    </div>
  )
}

export default NavBar