import { Button } from '@/components/ui/button';
import { IoChatbubbleSharp } from "react-icons/io5";


const MessegaesButton = () => {
  return (
    <Button variant={"outline"} size={"icon"} className='border-none w-12 h-12'>
        <IoChatbubbleSharp className='text-primary w-7 h-7' />
    </Button>
  )
}

export default MessegaesButton