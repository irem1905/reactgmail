import { FiSearch , FiPlus , FiStar} from "react-icons/fi";
import { MdTune , MdMailOutline ,MdLabel , MdOutlineLockClock ,  MdOutlineCheckBoxOutlineBlank , MdRefresh , MdChevronRight , MdChevronLeft , MdOutlineGroup} from "react-icons/md";
import { IoMdHelpCircleOutline , IoMdSettings , IoMdLink , IoMdArrowDropdown} from "react-icons/io";
import { CgMenuGridO } from "react-icons/cg";
import { ImPencil } from "react-icons/im";
import { RiInboxFill , RiSpam2Line ,  RiDeleteBinLine , RiDriveLine  } from "react-icons/ri";
import { TfiMenu } from "react-icons/tfi";
import { FaRegClock , FaRegSmile} from "react-icons/fa";
import { FaRegFile } from "react-icons/fa6";
import { PiPaperPlaneRightBold } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";
import { BsTags } from "react-icons/bs";
import { AiOutlineDown , AiOutlineUp} from 'react-icons/ai';
import { BsPaperclip } from "react-icons/bs";
import { CiImageOn } from "react-icons/ci";
import { HiOutlinePencil } from "react-icons/hi2";
import { LuEllipsisVertical } from "react-icons/lu";
import { BiPurchaseTag } from "react-icons/bi";





const icons={ 
menu:<TfiMenu />,
search:<FiSearch />,
tune:<MdTune />,
help:<IoMdHelpCircleOutline />,
grid:<CgMenuGridO />,
settings:<IoMdSettings />,
pencil:<ImPencil />,

inbox:<RiInboxFill />,
star:<FiStar />,
clock:<FaRegClock />,
paper:<PiPaperPlaneRightBold />,
file:<FaRegFile />,
more:<AiOutlineDown/>,
less:<AiOutlineUp />,
spam:<RiSpam2Line />,
mail:<MdMailOutline />,
setting:<IoSettingsOutline />,
bin:<RiDeleteBinLine />,
label:<BsTags />,
labels:<MdLabel />,


plus:<FiPlus />,

// compose icon
paperclip:<BsPaperclip />,
link:<IoMdLink />,
smile:<FaRegSmile />,
drive:<RiDriveLine />,
image:<CiImageOn />,
lock:<MdOutlineLockClock />,
linePencil:<HiOutlinePencil />,
ellipsis:<LuEllipsisVertical />,

// mailContent
checkbox:<MdOutlineCheckBoxOutlineBlank />,
refresh:<MdRefresh />,
tag:<BiPurchaseTag />,
left:<MdChevronLeft />,
rigt:<MdChevronRight />,
user:<MdOutlineGroup />,
ArrowDropdown:<IoMdArrowDropdown />,




};


export default icons;