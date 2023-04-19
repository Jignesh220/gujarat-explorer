import React from 'react'
import {useSearchParams} from 'next/navigation'
import City from '@/components/City/City';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function city() {
    const useSearch = useSearchParams();
    const cityName = useSearch.get('c');
    const router = useRouter();
    React.useEffect(() => {
      setTimeout(() => {
        cityName? cityName?.length <= 3 ? router.push('/') : null : router.push('/')
      }, 500);
    }, [cityName])
    
  return (
    <div>
      <Head>
        <title>Tourism App | {cityName ? cityName: ""}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="../images/Logo/logo.png" />
      </Head>
        <City/>
    </div>
  )
}
