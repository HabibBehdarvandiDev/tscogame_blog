import { Button } from '@/components/ui/button'
import { IoNotifications } from "react-icons/io5";


const NotificationButton = () => {
  return (
    <Button variant={"outline"} size={"icon"} className='border-none w-12 h-12'>
        <IoNotifications className='text-primary w-7 h-7' />
    </Button>
  )
}

export default NotificationButton