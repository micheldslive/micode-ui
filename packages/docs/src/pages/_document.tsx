import Document, { Head, Html, Main, NextScript } from 'next/document';
import { getCssText } from '../styles/stitches';

export default class MyDocument extends Document {
  render() {
    const lang = this.props.__NEXT_DATA__.props.pageProps?.post?.lang;

    return (
      <Html lang={lang ? lang : 'en-US'}>
        <Head>
          <meta charSet='utf-8' />
          <meta content='Michel Domingos' name='author' />
          <meta property='og:type' content='website' />
          <style
            id='stitches'
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />

          <link
            rel='icon'
            href='/favicon.svg'
            sizes='any'
            type='image/svg+xml'
          />
        </Head>
        <Main />
        <NextScript />
      </Html>
    );
  }
}
