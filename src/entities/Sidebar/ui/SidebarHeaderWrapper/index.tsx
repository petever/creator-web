import { SidebarHeader } from '@/shared/ui/sidebar'
import Link from "next/link";
import Image from "next/image";

export const SidebarHeaderWrapper = () => {
  return (
    <SidebarHeader className='mb-4'>
      <Link href="/home" className="flex font-black">
        <Image src={'/assets/logo/SHU_logo_05.png'} alt='' width={200} height={37} />
      </Link>
    </SidebarHeader>
  )
}
