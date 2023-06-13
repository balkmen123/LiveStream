import { IconArrowDown, IconLogo, IconSearch } from '../../Icon/FigmaIcons'
import AvtImg from '../../../img/avt.png'
function Header() {
  return (
    <div className="flex justify-between  border-b border-solid border-[#CED2DB] pb-5">
      <div className="flex items-center">
        <IconLogo></IconLogo>
        <span className=" h-[31px] border border-solid border-[#CED2DB] mx-[40px]"></span>
        <div>
          <input
            placeholder="Tìm kiếm"
            className="w-[738px] h-[54px] px-10 py-[15px] bg-[#EDF0F5] rounded-[15px] text-[#A6A8AD] text-[16px] leading-[22px] font-[400] focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
          ></input>
          <div className='absolute top-[38px] pl-3'>
            <IconSearch></IconSearch>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <img className="w-[38px] h-[38px] border border-solid border-[#118FA6] rounded-[99999px] mr-5" src={AvtImg} alt="" />
        <p>Nam CH</p>
        <IconArrowDown></IconArrowDown>
      </div>
    </div>
  )
}

export default Header
