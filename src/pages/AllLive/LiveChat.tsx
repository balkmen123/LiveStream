import LiveChatList from './LiveCharList'
import "./LiveChat.scss";
function LiveChat() {
  return (
    <div>
      <div className="w-[543px] h-[905px] bg-[#EDF0F5] rounded-[15px] mx-auto mt-[50px]">
        <div className="absolute z-[9999] box-border flex justify-center w-[543px] h-[68px] bg-gray-300 bg-opacity-50 border-b-[1px] border-solid border-[#CED2DB]  rounded-tl-[15px] rounded-tr-[15px]">
          <p>Group Chat</p>
        </div>
        <div className="chat overflow-y-scroll h-full p-5">
          <LiveChatList></LiveChatList>
        </div>
      </div>
    </div>
  )
}

export default LiveChat
