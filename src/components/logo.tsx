import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/logo.png';
import { createSvgIcon } from '@mui/material';

export default function Logo() {
  console.log('home');

  return (
    <Link href='/' className='w-30'>
      <Image src={logo} alt='logo image' width={100} />
    </Link>
  );
}
