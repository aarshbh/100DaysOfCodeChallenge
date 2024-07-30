import React from 'react';
import formatCurrency from "../utilities/formatCurrency";
interface StoreItemProps {
  id: number;
  name: string;
  price: number;
  imgUrl: string; // Assuming you have an image URL
}

const StoreItems: React.FC<StoreItemProps> = ({ id, name, price, imgUrl }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <img src={imgUrl} alt={name} className="w-full h-32 object-cover mb-4" />
      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="text-gray-600">{formatCurrency (price)}</p>
      <div>{id}</div> {/* Just for id */}
    </div>
  );
}

export default StoreItems;
