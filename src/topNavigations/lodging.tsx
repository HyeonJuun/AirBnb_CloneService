import Destination from '@/topNavigations/lodging/destination';
import CheckIn from '@/topNavigations/lodging/checkin';
import CheckOut from '@/topNavigations/lodging/checkout';
import Guest from '@/topNavigations/lodging/guest';

export default function Lodging() {
  return (
    <>
      <div className='flex justify-center items-center h-screen space-x-4'>
        <Destination />
        <CheckIn />
        <CheckOut />
        <Guest />
      </div>
    </>
  );
}
