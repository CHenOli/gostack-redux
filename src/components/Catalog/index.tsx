import React, { useEffect, useState } from 'react';

import api from '../../services/api';
import CatalogItem from '../CatalogItem';
import { IProduct } from '../../models/IProduct';

const Catalog: React.FC = () => {
  const [catalog, setCatalog] = useState<IProduct[]>([]);

  useEffect(() => {
    api.get('products').then(response => setCatalog(response.data));
  }, []);

  return (
    <main>
      {catalog.map(product => (
        <CatalogItem key={product.id} catalogItem={product} />
      ))}
    </main>
  );
};

export default Catalog;
