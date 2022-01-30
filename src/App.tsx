'use solid-sfc';

import { css } from 'solid-styled';
import Counter from './Counter';

css`
  @global {
    body,
    blockquote,
    dl,
    dd,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    hr,
    figure,
    p,
    pre {
      margin: 0;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-size: inherit;
      font-weight: inherit;
    }

    ol,
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }
    img,
    svg,
    video,
    canvas,
    audio,
    iframe,
    embed,
    object {
      display: block;
      vertical-align: middle;
    }

    *,
    ::before,
    ::after {
      border-width: 0;
      border-style: solid;
      border-color: white;
    }

    * {
      font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    }

    button:focus {
      outline: 1px dotted;
      outline: 5px auto -webkit-focus-ring-color;
    }
  }
  .outer {
    width: 100vw;
    height: 100vh;
    display: flex;
    overflow: hidden;
    background-image: linear-gradient(to bottom right, #d946ef, #9333ea);
  }

  .inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  :global(*) {
    color: white;
  }
`;

export default $view((
  <div class="outer">
    <div class="inner">
      <Counter />
    </div>
  </div>
));