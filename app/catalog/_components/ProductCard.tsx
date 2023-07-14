import Image from "next/image";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md">
      <Image
        src={product.image}
        alt={product.title}
        height={600}
        width={600}
        className="w-full h-48 object-cover object-center"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{product.title}</h2>

        <p className="text-gray-900 font-light mb-2">
          Category: {product.category}
        </p>
        <p className="text-gray-900 font-light mb-2">Color: {product.color}</p>
        <p className="text-gray-900 font-light mb-4">Size: {product.size}</p>
        <div className="flex items-center justify-between">
          <p className="text-gray-900 font-semibold">${product.price}</p>
          <button className="bg-cyan-500 hover:bg-cyan-600 text-white py-2 px-4 rounded">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
