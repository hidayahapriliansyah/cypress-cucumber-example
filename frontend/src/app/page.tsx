import { Metadata } from 'next';
import Image from "next/image";
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Home Page'
}

export default function Home() {
  return (
    <Link href='/signup'>
      Go to Signup Page
    </Link>
  );
}
