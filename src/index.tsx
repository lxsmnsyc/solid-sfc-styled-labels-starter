// @refresh reload
import { render } from 'solid-js/web';
import { StyleRegistry } from 'solid-styled';
import App from './App';

function Root() {
  return (
    <StyleRegistry>
      <App />
    </StyleRegistry>
  );
}

render(() => <Root />, document.body);