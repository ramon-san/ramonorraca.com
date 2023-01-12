import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello World!</p>
        <p>
          This is my personal website, in here you can find a couple of things I've written and some projects I've built.
          This site was built in a <a href="https://nextjs.org/learn">Next.js tutorial</a>.
        </p>
      </section>
    </Layout>
  );
}