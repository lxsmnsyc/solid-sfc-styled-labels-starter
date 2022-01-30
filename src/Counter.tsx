'use solid-sfc';

import { css } from 'solid-styled';
import Message from './Message';

let count = $signal(0);
const message = $memo(`Count: ${count}`);

function increment() {
  count += 1;
}

function decrement() {
  count -= 1;
}

css`
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    padding: 0.5rem;
    border-radius: 0.5rem;
    background-color: #11182720;
  }

  button {
    padding: 0.5rem;
    border-radius: 0.5rem;
    background-color: #11182720;
  }

  div > :global(* + *) {
    margin-left: 0.5rem;
  }
`;

export default $view((
  <div>
    <button type="button" onClick={increment}>
      Increment
    </button>
    <Message message={message} />
    <button type="button" onClick={decrement}>
      Decrement
    </button>
  </div>
));