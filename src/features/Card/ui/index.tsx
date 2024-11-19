import Image from 'next/image'
import {Button} from "@/shared/ui/button";

export const Card = () => {
  return (
    <Button className='relative h-0 pt-full overflow-hidden'>
      <Image
        alt=''
        fill
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-9.png"
      />
    </Button>
  )
}
