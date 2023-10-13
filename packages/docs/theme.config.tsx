import { useRouter } from 'next/router';
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
  logo: (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
      <img src='/favicon.svg' width={36} height={36} />
      <strong>Micode UI</strong>
    </div>
  ),
  project: {
    link: 'https://github.com/micheldslive/micode-ui'
  },
  docsRepositoryBase:
    'https://github.com/micheldslive/micode-ui/tree/main/docs',
  footer: {
    text: (
      <span>
        MIT {new Date().getFullYear()} ©{' '}
        <a href='https://mi-code.dev' target='_blank'>
          Michel Domingos
        </a>
        .
      </span>
    )
  },
  darkMode: false,
  nextThemes: {
    forcedTheme: 'dark'
  },
  useNextSeoProps: () => {
    return {
      titleTemplate: '%s - Micode UI'
    };
  },
  head: () => {
    const { asPath } = useRouter();
    const { frontMatter } = useConfig();
    return (
      <>
        <meta property='og:url' content={`https://ui.mi-code.dev${asPath}`} />
        <meta property='og:title' content={frontMatter.title || 'Micode UI'} />
        <meta
          property='og:description'
          content={
            frontMatter.description ||
            'React Powered Component UI, accessible by default and built on top of Radix.'
          }
        />
      </>
    );
  }
};

export default config;
