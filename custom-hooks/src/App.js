import { ProductInfo } from './ProductInfo';
import { UserInfo } from './UserInfo';

function App() {
  return (
    <div className="App">
      <UserInfo userId="123" />
      <UserInfo userId="234" />
      <UserInfo userId="345" />
      <ProductInfo productId="1234" />
    </div>
  );
}

export default App;
