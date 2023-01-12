import Head from 'next/head';
import Link from 'next/link';
// import Script from 'next/script';

export default function FirstPost() {
    return (
        // The empty tag is shorthand for <React.Fragment>, allowing you to have multiple top-most elements without wrapping further HTML.
        <>
            <Head>
                <title>First Post</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            // Example on how to add third-party scripts.
            {/* <Script
                src="https://connect.facebook.net/en_US/sdk.js"
                strategy="lazyOnload" // When the third-party script should load.
                onLoad={() => // Run any JavaScript code immediately after the script has finished loading.
                    console.log(`script loaded correctly, window.FB has been populated`)
                }
            /> */}
            <h1>First Post</h1>
            <h2>
                <Link href="/">Back to home</Link>
            </h2>
        </>
    );
}