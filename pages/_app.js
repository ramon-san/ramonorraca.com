// Global style files can only be imported in this file.
import '../styles/global.css';

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />;
}