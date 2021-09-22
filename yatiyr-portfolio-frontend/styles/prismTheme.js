import { css } from '@emotion/react';
import { theme } from '@chakra-ui/react';
import { Global } from '@emotion/react';

const prismBaseTheme = css`
  .article > h2 {
    font-family: 'Noto Serif', serif;
    padding: ${theme.space[8]} 0 ${theme.space[2]};
    font-size: ${theme.fontSizes['2xl']};
    font-weight: ${theme.fontWeights.bold};
  }

  .article p,
  .article ul,
  .article ol {
    font-family: 'Inter', sans-serif;
    margin: ${theme.space[4]} 0 ${theme.space[8]};
    line-height: ${theme.lineHeights.tall};
  }

  .article p {
    display: inline;
  }

  .article a:hover {
    text-decoration: underline;
  }

  .article a.chakra-link {
    text-decoration: none;
  }

  .article img {
    border-radius: ${theme.radii.md};
  }

  .article #table-of-contents + ul,
  .article ol {
    list-style-type: decimal;
    list-style-position: inside;
  }

  .article #table-of-contents + ul > li,
  .article ol > li {
    margin-bottom: ${theme.space[2]};
  }

  .article .icon.icon-link::before {
    content: '#';
    margin-right: ${theme.space[2]};
    display: inline-flex;
  }

  .article blockquote > p {
    padding: ${theme.space[4]};
    margin: 0;
    border: 1px solid;
    border-radius: ${theme.radii.md};
  }

  code[class*="language-"],
  pre[class*="language-"] {
    color: #f8f8f2;
    background: none;
    font-family: "Fira Code", Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;
    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;
    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }
  
  /* Code blocks */
  pre[class*="language-"] {
    padding: 1em;
    margin: .5em 0;
    overflow: auto;
    border-radius: 0;
  }
  
  :not(pre) > code[class*="language-"],
  pre[class*="language-"] {
    background: #2E3440;
  }
  
  /* Inline code */
  :not(pre) > code[class*="language-"] {
    padding: .1em;
    border-radius: .3em;
    white-space: normal;
  }
  
  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: #636f88;
  }
  
  .token.punctuation {
    color: #81A1C1;
  }
  
  .namespace {
    opacity: .7;
  }
  
  .token.property,
  .token.tag,
  .token.constant,
  .token.symbol,
  .token.deleted {
    color: #81A1C1;
  }
  
  .token.number {
    color: #B48EAD;
  }
  
  .token.boolean {
    color: #81A1C1;
  }
  
  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.builtin,
  .token.inserted {
    color: #A3BE8C;
  }
  
  .token.operator,
  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string,
  .token.variable {
    color: #81A1C1;
  }
  
  .token.atrule,
  .token.attr-value,
  .token.function,
  .token.class-name {
    color: #88C0D0;
  }
  
  .token.keyword {
    color: #81A1C1;
  }
  
  .token.regex,
  .token.important {
    color: #EBCB8B;
  }
  
  .token.important,
  .token.bold {
    font-weight: bold;
  }
  
  .token.italic {
    font-style: italic;
  }
  
  .token.entity {
    cursor: help;
  }

  .mdx-marker {
    display: block;
    margin-left: -${theme.space[4]};
    margin-right: -${theme.space[4]};
    padding-left: ${theme.space[4]};
    padding-right: ${theme.space[4]};
    background-color: ${theme.colors.gray[200]};
    box-shadow: inset 3px 0px 0 0px ${theme.colors.blue[600]};
    min-width: fit-content;
  }

  .remark-code-title {
    padding: ${theme.space[2]} ${theme.space[4]};
    font-family: ${theme.fonts.mono};
    background: ${theme.colors.gray[50]};
    color: ${theme.colors.gray[800]} !important;
    border: 1px solid ${theme.colors.gray[300]};
    font-size: 0.8rem;
    font-weight: 600;
    margin-bottom: 0;
    width: 100%;
    + pre {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      margin-top: 0;
    }
  }
`;

const prismDarkTheme = css`
  ${prismBaseTheme};

`;

const PrismTheme = () => (
    <>
      <Global styles={prismDarkTheme}/>
    </>
  )
  export default PrismTheme;