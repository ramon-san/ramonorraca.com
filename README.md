# Getting started with NextJS

## Running this project

If you just want to run this project run the following commands:

``` shell
npm install
npm run dev
```

## Creating this project

What follows is a list of steps to create a NextJS website, this personal guide follows on the [basic Next.js tutorial](https://nextjs.org/learn/basics/create-nextjs-app).

1. The first thing to do is to import the starter repo to [learn Next.js](https://nextjs.org/learn).

``` shell
npx create-next-app@latest nextjs-blog --use-npm --example "https://github.com/vercel/next-learn/tree/master/basics/learn-starter"
```

>  It uses this template through the `--example` flag.

If the previous command doesn't download the required packages—it should—execute:

``` shell
npm install
```

> Remember that to run npm commands you have to download [NodeJS](https://nodejs.org/en/).

2. Routing is simplified with Next.js, URLs take the name of the JS file in which they are located and remove the ending `.js`. To link between pages of our site we use the `<Link href="...">` element. This element enables client-side navigation and automatically prefetches the code for the linked page in the background.

> When linking to an external website we use the normal `<a href='...'>` tag.

4. We add images and static files into the `public` directory located in the project's root. When we call this in our code we use the `<Image>` tag which comes with a couple of useful optimizations, this comes from the `'next/image'` library.

5. To manage our site's metadata we use the `<Head>` tag and inside of this tag we write metadata as we normally would in HTML. This tag comes from the `'next/head'` library.

6. To run third-party JS we use the [`<Script>`](https://nextjs.org/docs/basic-features/script) tag which comes from the `'next/script'` library. This allows us to control how scripts run in a simplified way.

7. Styling is simple, but you need to make some considerations. CSS Modules are files that end in `.module.css`, this allows you to import CSS files in a React component and helps avoid class name collisions. To load global CSS you need to create a file called `pages/_app.js`, this page's default export is a top-level React component that wraps all the pages in your application. Once you have the global component create a global CSS file in `styles/global.css`, this file need to be imported into `pages/_app.js`.

> The export function in `pages/_app.js` should look like this:

    ``` js
    import '../styles/global.css';

    export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />;
    }
    ```

Another option is using utility classes, these come from a file called `styles/utils.module.css`. These style can be re-used accross multiple components and the global stylesheet. This file needs to be imported into the files where you want to apply it.

> Out of the box, with no configuration, Next.js compiles CSS using PostCSS. To customize PostCSS config, you can create a top-level file called postcss.config.js. This is useful if you're using libraries like Tailwind CSS.

8. You can pre-render data for Static Generation or Server-side Rendering. To do use this functionality export an `async` function called `getStaticProps` or `getServerSideProps(context)`.

9. Now create a folder in the root of our project called `posts`. This folder will hold markdown files to which a YAML metadata section is added. The `grey-matter` library is used to read metadata from our markdown files:

``` shell
npm install gray-matter
```

> The metadata is what appears as a YAML format inside each blog post.

3. To render markdown content we use the `remark` library:

``` shell
npm install remark remark-html
```