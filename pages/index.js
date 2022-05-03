import { useEffect } from 'react';
import Head from 'next/head';
import HomeModule from '../components/HomeModule/HomeModule';


export default function Home() {

    useEffect(() => {
        console.log('hello viewport', window.innerHeight, 'x', window.innerWidth);
    }, []);

    return (
        <div>
            <Head>
                <title>next.boilerplate</title>
                <meta name="next.boilerplate" content="by hcsvnt" />
                {/* <link rel="icon" href="/favicon.ico" /> */}
            </Head>
            <HomeModule />
        </div>
    );
}
