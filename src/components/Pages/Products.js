import { getProducts } from '../../fakeAPI';
import ProductList from 'components/ProductList/ProductsList';
export default function Products() {
  //return <div>Products</div>;
  return (
    // <ul>
    //   {getProducts().map(item => (
    //     <li key={item.id}>item</li>
    //   ))}
    // </ul>
    <ProductList />
  );
}
