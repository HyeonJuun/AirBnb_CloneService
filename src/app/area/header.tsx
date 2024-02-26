// header.tsx

import Lodging from '@/topNavigations/lodging';
import Destination from '@/topNavigations/lodging/destination';
import CheckIn from '@/topNavigations/lodging/checkin';
import CheckOut from '@/topNavigations/lodging/checkout';
import Guest from '@/topNavigations/lodging/guest';

export default function Header() {
  return (
    <header className='bg-lime-500 absolute inset-x-0 top-0 h-8'>
      <div className='flex justify-center items-center h-full'>
        <Lodging />
      </div>
    </header>
  );
}
