import NotificationIcon from '@/components/icons/NotificationIcon';
import { Button } from '@/components/ui/button';


const NotificationButton = () => {
  return (
    <Button variant={"outline"} size={"icon"} className='border-none w-12 h-12 bg-transparent hover:bg-transparent'>
        <NotificationIcon className='text-primary w-7 h-7 hover:fill-primary hover:text-gray-50 hover:scale-110' />
    </Button>
  )
}

export default NotificationButton