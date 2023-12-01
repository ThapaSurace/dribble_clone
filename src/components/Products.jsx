import React from "react";
import { products } from "../data";
import { Heart, Bookmark } from "lucide-react";

const Products = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="cursor-pointer shadow-md relative group overflow-hidden"
        >
          <img
            src={product.img}
            alt="/"
            className="w-full h-80 md:h-72 object-center object-cover rounded-lg"
          />
          <div className="absolute bottom-0 py-4 px-6 flex justify-between w-full text-white bg-gray-600/50 rounded-t-lg transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
            <span>Name</span>
            <div className="flex gap-3 ">
              <Heart className="hover:text-red-600" />
              <Bookmark className="hover:text-sky-600" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
