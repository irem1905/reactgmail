import { FiSearch , FiPlus , FiStar} from "react-icons/fi";
import { MdTune , MdMailOutline ,MdLabel} from "react-icons/md";
import { IoMdHelpCircleOutline , IoMdSettings } from "react-icons/io";
import { CgMenuGridO } from "react-icons/cg";
import { ImPencil } from "react-icons/im";
import { RiInboxFill , RiSpam2Line ,  RiDeleteBinLine } from "react-icons/ri";
import { TfiMenu } from "react-icons/tfi";
import { FaRegClock ,} from "react-icons/fa";
import { FaRegFile } from "react-icons/fa6";
import { PiPaperPlaneRightBold } from "react-icons/pi";
// import { MdExpandMore } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { BsTags } from "react-icons/bs";
import { AiOutlineDown , AiOutlineUp} from 'react-icons/ai';









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


};


export default icons;