import AvtImg from '../../img/avt.png'
import { LivechatModel } from './interfaces/LiveChat.model'

interface IProps {
  item: LivechatModel

  color: string

  isOwner?: boolean
}

function LiveChatItem(IProps: IProps) {
  const { item, color, isOwner } = IProps
  console.log(item, 'item')

  return (
    <>
      {isOwner ? (
        <div className='flex  flex-row-reverse'><div className='max-w-[354px] p-[15px] bg-[#A6DFEA] rounded-lg'><p>{item.content}</p></div></div>
      ) : (
        <div className=" flex py-5">
          <div>
            <img
              src={AvtImg}
              alt=""
              className="mt-[40px] mr-[20px] h-[48px] w-[48px] border-[3px] border-solid border-[#FFFFFF] rounded-[24px] "
            />
          </div>
          <div>
            <h3 className="pb-[5px]">{item.user_info?.user_name}</h3>
            <div className="p-[15px] max-w-[354px] bg-white rounded-[8px]">
              <p className="">{item.content}</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default LiveChatItem
