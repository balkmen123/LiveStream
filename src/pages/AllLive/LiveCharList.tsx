import {LivechatModel} from "./interfaces/LiveChat.model";
import {Fragment, memo} from "react";
import LiveChatItem from "./LiveChatItem";

const data: LivechatModel[] = [
    {
        "comment_id": 16856763429303200,
        "live_episode_id": 11547193,
        "live_program_id": 3828058,
        "comment_status": "11547193-0-0-0",
        "comment_role": "MEMBER",
        "content": "菓子ロスをアップサイ",
        "user_info": {
            "user_id": "oVNCdm3mvnKpDdWoSKxJog9qBkd3hzt9",
            "user_name": "も家庭庁",
            "__typename": "User"
        },
        "create_at": "1685676342930",
        "__typename": "Comment"
    },
    {
        "comment_id": 16856763349138034,
        "live_episode_id": 11547193,
        "live_program_id": 3828058,
        "comment_status": "11547193-0-0-0",
        "comment_role": "MEMBER",
        "content": "4 月スタート こども家庭庁とは【60秒で学べるNews】",
        "user_info": {
            "user_id": "oVNCdm3manKpDAWoSKxJog9qBkd3hzt9",
            "user_name": "田中",
            "__typename": "User"
        },
        "create_at": "1685676334913",
        "__typename": "Comment"
    },
    {
        "comment_id": 16856763299285700,
        "live_episode_id": 11547193,
        "live_program_id": 3828058,
        "comment_status": "11547193-0-0-0",
        "comment_role": "MEMBER",
        "content": "世界初！恐竜の喉の化石を発見【60秒で学べるNews】",
        "user_info": {
            "user_id": "oVNCdm3mvnKpDAWofKxJog9qBkd3hzt9",
            "user_name": "Andrea",
            "__typename": "User"
        },
        "create_at": "1685676329928",
        "__typename": "Comment"
    },
    {
        "comment_id": 16856762998288350,
        "live_episode_id": 11547193,
        "live_program_id": 3828058,
        "comment_status": "11547193-0-0-0",
        "comment_role": "MEMBER",
        "content": "「4月スタート　“デジタル給与払い”って！？」＆「世",
        "user_info": {
            "user_id": "ADMIN_ID",
            "user_name": "ADMIN",
            "__typename": "User"
        },
        "create_at": "1685676299828",
        "__typename": "Comment"
    },
    {
        "comment_id": 16856762936595022,
        "live_episode_id": 11547193,
        "live_program_id": 3828058,
        "comment_status": "11547193-0-0-0",
        "comment_role": "MEMBER",
        "content": "ゴミを資",
        "user_info": {
            "user_id": "9c813439-60a4-4f8a-a3a3-730457c7dbf8",
            "user_name": "LongLD",
            "__typename": "User"
        },
        "create_at": "1685676293659",
        "__typename": "Comment"
    },
    {
        "comment_id": 16856762872106266,
        "live_episode_id": 11547193,
        "live_program_id": 3828058,
        "comment_status": "11547193-0-0-0",
        "comment_role": "MEMBER",
        "content": "「どこよりもわかる地政学！80万部コミック“八田”が解説」＆「戸籍法改正へ　あなたの読み仮名が変わる!?」",
        "user_info": {
            "user_id": "9c81b339-60a4-4f8a-a3a3-730457c7dbf8",
            "user_name": "ユナ",
            "__typename": "User"
        },
        "create_at": "1685676287210",
        "__typename": "Comment"
    },
    {
        "comment_id": 16856762753756520,
        "live_episode_id": 11547193,
        "live_program_id": 3828058,
        "comment_status": "11547193-0-0-0",
        "comment_role": "MEMBER",
        "content": "日ハム新本拠地に招待？西武ファンのウエンツどうする？【未公開・ウエンツのおかわり180秒】",
        "user_info": {
            "user_id": "oVNCdm3mvnI2IvLfumYZiQCvcfzKRGH6",
            "user_name": "ミナー",
            "__typename": "User"
        },
        "create_at": "1685676275375",
        "__typename": "Comment"
    },
    {
        "comment_id": 16856762696065874,
        "live_episode_id": 11547193,
        "live_program_id": 3828058,
        "comment_status": "11547193-0-0-0",
        "comment_role": "MEMBER",
        "content": "「斎藤佑樹が“世界一の球",
        "user_info": {
            "user_id": "oVNCdm3mvnI2IvLfumYZiQCvcfzKRGH6",
            "user_name": "Khanh",
            "__typename": "User"
        },
        "create_at": "1685676269606",
        "__typename": "Comment"
    },
    {
        "comment_id": 16856762604031172,
        "live_episode_id": 11547193,
        "live_program_id": 3828058,
        "comment_status": "11547193-0-0-0",
        "comment_role": "MEMBER",
        "content": "経済や政治、国際問題など一見難しいニュースから、気になる人物の意外な一面など…\n今さら聞けないニュースも、明日誰かに話したくなるようなニュースも60秒で学べます。",
        "user_info": {
            "user_id": "oVNCdm3mvnI2IvLfumYZiQCvcfzKRGH6",
            "user_name": "ミナー",
            "__typename": "User"
        },
        "create_at": "1685676260403",
        "__typename": "Comment"
    },
    {
        "comment_id": 16856762553882570,
        "live_episode_id": 11547193,
        "live_program_id": 3828058,
        "comment_status": "11547193-0-0-0",
        "comment_role": "MEMBER",
        "content": "TikTokやYouTubeなどのSNSで60秒以内のショートムービーが大人気のいま、普段何気なく見ているニュースの背景や意味を、専門家やジャーナリスト、テレビ東京の記者が60秒でさくっと解説！",
        "user_info": {
            "user_id": "oVNCdm3mvnKpDAWofKxJog9qBkd3hzt9",
            "user_name": "Andrea",
            "__typename": "User"
        },
        "create_at": "1685676255388",
        "__typename": "Comment"
    },
    {
        "comment_id": 16856762311885912,
        "live_episode_id": 11547193,
        "live_program_id": 3828058,
        "comment_status": "11547193-0-0-0",
        "comment_role": "MEMBER",
        "content": "「同時ログイン数の上限に達したためログアウトされました。\n動画を視聴するには再度ログインしてください。（コード：408）」",
        "user_info": {
            "user_id": "oVNCdm3mvnJjNtrnEaEGgQF4DAUA5N4v",
            "user_name": "ユナ_tes",
            "__typename": "User"
        },
        "create_at": "1685676231188",
        "__typename": "Comment"
    },
    {
        "comment_id": 16856762260418844,
        "live_episode_id": 11547193,
        "live_program_id": 3828058,
        "comment_status": "11547193-0-0-0",
        "comment_role": "MEMBER",
        "content": "ログアウトされ、以下のエラーメッセージが表示されること",
        "user_info": {
            "user_id": "oVNCdm3mvnJjNtrnEaEGgQF4DAUA5N4v",
            "user_name": "ユナ_tes",
            "__typename": "User"
        },
        "create_at": "1685676226041",
        "__typename": "Comment"
    },
    {
        "comment_id": 16856762071513170,
        "live_episode_id": 11547193,
        "live_program_id": 3828058,
        "comment_status": "11547193-0-0-0",
        "comment_role": "MEMBER",
        "content": "「同時ログイン数の上限に達したためログアウトされました。\n動画を視聴するには再度ログインしてください。（コード：408）」",
        "user_info": {
            "user_id": "9c81b339-60a4-4f8a-a3a3-730457c7dbf8",
            "user_name": "ユナ",
            "__typename": "User"
        },
        "create_at": "1685676207151",
        "__typename": "Comment"
    },
    {
        "comment_id": 16856761999228962,
        "live_episode_id": 11547193,
        "live_program_id": 3828058,
        "comment_status": "11547193-0-0-0",
        "comment_role": "MEMBER",
        "content": "ログアウトされ、以下のエラーメッセージが表示されること",
        "user_info": {
            "user_id": "9c81b339-60a4-4f8a-a3a3-730457c7dbf8",
            "user_name": "ユナ",
            "__typename": "User"
        },
        "create_at": "1685676199922",
        "__typename": "Comment"
    },
    {
        "comment_id": 16856761720689308,
        "live_episode_id": 11547193,
        "live_program_id": 3828058,
        "comment_status": "11547193-0-0-0",
        "comment_role": "ADMIN",
        "content": "test",
        "user_info": {
            "user_id": "ADMIN_ID",
            "user_name": "ADMIN",
            "__typename": "User"
        },
        "create_at": "1685676172068",
        "__typename": "Comment"
    },
    {
        "comment_id": 16856761703278592,
        "live_episode_id": 11547193,
        "live_program_id": 3828058,
        "comment_status": "11547193-0-0-0",
        "comment_role": "ADMIN",
        "content": "check",
        "user_info": {
            "user_id": "ADMIN_ID",
            "user_name": "ADMIN",
            "__typename": "User"
        },
        "create_at": "1685676170327",
        "__typename": "Comment"
    }
];
const colors = ["#147a42", "#cf1246", "#db7131", "#2032a2", "#810fd6", "#c11bc0", "#08becd", "#e8c611", "#696b6c"];

const LiveChatList = memo(() => {
    const map = new Map();
    return <Fragment>
        {
            data.map(d => {
                let isOwner = d.user_info?.user_id === "oVNCdm3mvnKpDAWofKxJog9qBkd3hzt9";
                const userID = d.user_info?.user_id;
                let color = map.get(userID);
                if(!color) {
                    color = colors[Math.floor(Math.random() * colors.length)];
                    map.set(userID, color);
                }
                return <LiveChatItem item={d} color={color} isOwner={isOwner}/>
            })
        }
    </Fragment>
})
export default LiveChatList;