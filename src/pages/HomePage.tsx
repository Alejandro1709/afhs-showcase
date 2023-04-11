import ControlBar from "../components/ControlBar"
import DemoDisplay from "../components/DemoDisplay"
import Logo from '../assets/AFHSLOGO.png'

function HomePage() {
  return (
    <>
      <img className='mx-auto w-[200px] mt-4' src={Logo} alt="AFHS Logo" draggable={false} />
      <ControlBar />
      <DemoDisplay />
    </>
  )
}

export default HomePage