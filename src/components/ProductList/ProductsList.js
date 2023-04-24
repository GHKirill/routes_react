import { Link } from 'react-router-dom';

import { getProducts } from 'fakeAPI';

export default function ProductList() {
  return (
    <ul>
      {getProducts().map(item => {
        return (
          <li key={item.id}>
            <p>This is a product</p>
            <Link to={`${item.id}`}>
              <img src="https://via.placeholder.com/200x100" alt="" />
            </Link>
            <p>item.name</p>
          </li>
        );
      })}
    </ul>
  );
}
