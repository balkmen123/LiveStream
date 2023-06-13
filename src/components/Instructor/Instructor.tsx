import AvtImg from '../../img/avt.png'

function Instructor() {
  return (
    <div className="flex items-center">
      <div className='mr-[15px]'>
        <img className="w-[50px] h-[50px] rounded-[10px]" src={AvtImg} alt="" />
      </div>
      <div>
        <p className="text-[#1D242A] text-[14px] font-[400] leading-[18px]">
          Instructor
        </p>
        <p className="text-[#1D242A] text-[22px] font-[600] leading-[28px]">
          Schmedtmann
        </p>
      </div>
    </div>
  )
}

export default Instructor
