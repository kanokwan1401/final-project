import { Text } from "."
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { grey } from '@mui/material/colors';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import MarginIcon from '@mui/icons-material/Margin';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';


const NavBar = () => {

  const [isActive, setIsActive] = useState(false);
  const isLogin = localStorage.getItem('email')

  return (
    <div>
      <div className=" w-full h-[70px] mobile:h-auto bg-slate-800 flex justify-center mobile:hidden">
        <div className="w-[1280px] h-[70px] px-7 flex items-center justify-between">
          <div className=" flex items-center">
            <Link to={`/`}>
              <div className=" flex">
                <Text weight={500} size={44} color="#333" className=" font-oswald ">
                  <p style={{ WebkitTextStrokeColor: 'rgb(240 171 252)', WebkitTextStrokeWidth: '2px' }}>SCHOOL</p>
                </Text>
                <Text weight={200} size={14} color="#fff" className="mt-2">TH</Text>
              </div>
            </Link>
          </div>
          <div className=" flex justify-center">
            <ul className="font-sansThai font-bold text-slate-50 flex text-[16px] ">
              <Link to={`/`}>
                <li className="hover:text-fuchsia-400 cursor-pointer"><MarginIcon /> คอร์สเรียนทั้งหมด</li>
              </Link>
              <li className=" pl-10 hover:text-fuchsia-400 cursor-pointer"><LibraryBooksIcon /> บทความ</li>
              <li className=" pl-10 text-slate-400">|</li>
              <li className=" pl-10 hover:text-fuchsia-400 cursor-pointer"><EmojiEmotionsIcon /> คอร์สเรียนของฉัน</li>
            </ul>
          </div>
          <div className=" flex items-center">
            <div className=" pr-5"><NotificationsIcon sx={{ color: grey[300], fontSize: 25 }} /></div>
            <Text weight={700} size={16} color="rgb(148 163 184)" className=" pr-5">|</Text>
            {
              isLogin
                ? (<div className="flex ">
                  <Text weight={400} size={14} color="rgb(248 250 252)">{isLogin.slice(0, 9) + '...'}</Text>
                  <div className="cursor-pointer" onClick={() => (localStorage.removeItem('email'))}>
                    <Text weight={400} size={14} color="rgb(148 163 184)" className=" pl-3 font-sansThai ">SIGN OUT</Text>
                  </div>
                </div>)
                : (
                  <div className="flex items-center">
                    <Link to={`/login`}>
                      <div className=" rounded-full bg-fuchsia-400 w-7 h-7 flex items-center justify-center cursor-pointer"><PersonIcon sx={{ color: grey[800] }} /></div>
                    </Link>
                    <Link to={`/login`} className="cursor-pointer">
                      <Text weight={400} size={14} color="rgb(148 163 184)" className=" pl-3 font-sansThai ">SIGN IN</Text>
                    </Link>
                  </div>
                )
            }
          </div>

        </div>

      </div>
      <div className="mobile:flex justify-evenly items-center h-[70px] text-white bg-slate-800 hidden">
        <div className=" cursor-pointer">
          <div onClick={() => setIsActive(!isActive)}>
            {isActive ? <MenuIcon sx={{ fontSize: 40 }} /> : <MenuIcon sx={{ fontSize: 40, color: grey[400] }} />}
          </div>
        </div>

        <Link to={`/`}>
          <div className=" flex px-7">
            <Text weight={500} size={42} color="#333" className=" font-oswald">
              <p style={{ WebkitTextStrokeColor: 'rgb(240 171 252)', WebkitTextStrokeWidth: '2px' }}>SCHOOL</p>
            </Text>
            <Text weight={200} size={14} color="#fff" className="">TH</Text>
          </div>
        </Link>
        <div>
          <Link to={`/login`}>
            <div className=" rounded-full bg-fuchsia-400 w-9 h-9 flex items-center justify-center cursor-pointer"><PersonIcon sx={{ color: grey[800] }} /></div>
          </Link>
        </div>

      </div>
      {isActive &&
        <div className=" mobile:flex hidden">
          <ul className="font-sansThai font-bold text-slate-50 flex flex-col text-[16px] bg-slate-700 w-full px-10">
            <Link to={`/`}>
              <li className="hover:text-fuchsia-400 cursor-pointer h-16 flex items-center border-b-[1px] border-slate-500 "><MarginIcon />&nbsp; คอร์สเรียนทั้งหมด</li>
            </Link>
            <li className=" hover:text-fuchsia-400 cursor-pointer h-16 flex items-center border-b-[1px] border-slate-500"><LibraryBooksIcon />&nbsp; บทความ</li>
            <li className=" hover:text-fuchsia-400 cursor-pointer h-16 flex items-center"><EmojiEmotionsIcon />&nbsp; คอร์สเรียนของฉัน</li>
          </ul>
        </div>
      }
    </div>
  )
}

export default NavBar