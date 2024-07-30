import storeItems from "../data/items.json";
import StoreItems from '../components/StoreItems';

const Store = () => {
  return (
    <div className="container mx-auto px-4 py-8">
     
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {storeItems.map(item => (
          <StoreItems 
          key={item.id} 
          {...item} />
        ))}
      </div>
    </div>
  );
}

export default Store;
