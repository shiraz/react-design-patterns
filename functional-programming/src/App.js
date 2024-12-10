import { DangerButton, SuccessButton } from './composition';
import { PartialDangerButton, PartialSuccessButton } from './partiallyApply';	
import { Recursive } from './Recursive';

const nestedObject = {
  a: 1,
  b: {
    b1: 4,
    b2: {
      b23: 'Hello',
    },
    b3: {
      b31: {
        message: 'Hi',
      },
      b32: {
        message: 'Hi',
      },
    },
  },
  c: {
    c1: 2,
    c2: 3,
  },
};

function App() {
  return (
    <>
      <h1>Recursive Component</h1>
      <Recursive data={nestedObject} />
	  <h1>Composition</h1>
	  <DangerButton size="large" text="Danger" />
	  <SuccessButton text="Success" />
	  <h2>Partially Apply</h2>
	  <PartialDangerButton text="Partial Danger" />
	  <PartialSuccessButton text="Partial Success" />
    </>
  );
}

export default App;
