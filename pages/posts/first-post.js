import Link from 'next/link';

export default function FirstPost() {
    return (
        // The empty tag is shorthand for <React.Fragment>, allowing you to have multiple top-most elements without wrapping further HTML.
        <>
            <h1>First Post</h1>
            <h2>
                <Link href="/">Back to home</Link>
            </h2>
        </>
    );
}