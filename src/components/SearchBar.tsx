import SearchIcon from '@mui/icons-material/Search';
import { grey } from '@mui/material/colors';
import MarginIcon from '@mui/icons-material/Margin';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

const SearchBar = () => {
  return (
    <div className="w-full h-[100px] flex justify-center items-center">
      <div className="w-[1280px] h-[90px] flex items-center justify-start px-7">
        <div className='flex items-center'>
          <input type="text" placeholder='ค้นหาด้วยชื่อคอร์ส' className="w-[700px] h-[60px] border-2 rounded-3xl  border-slate-400 bg-slate-800 font-sansThai pl-12 relative focus:ring focus:ring-fuchsia-400" />
          <div className='absolute pl-5' >
            <SearchIcon sx={{ color: grey[500], fontSize: 25 }} />
          </div>
        </div>
        <div className='' >
          <button className='text-slate-400 font-sansThai border-2 rounded-2xl border-slate-600 p-3 px-4 ml-4 hover:bg-slate-800 hover:border-slate-400'><MarginIcon /> คอร์สเรียนทั้งหมด</button>
          <button className='text-fuchsia-400 font-sansThai border-2 rounded-2xl border-fuchsia-700 p-3 px-4 ml-2 hover:border-fuchsia-600 hover:bg-fuchsia-900 hover:text-fuchsia-200'><EmojiEmotionsIcon/> คอร์สเรียนของฉัน</button>
        </div>
      </div>
    </div>
  )
}

export default SearchBar