import { Product } from '../types/profile';

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:border-gray-300 transition-all">
      {/* 이미지 */}
      <div className="relative bg-gray-50 aspect-square">
        <img
          src={product.image}
          alt={product.productName}
          className="w-full h-full object-cover"
        />
        {/* 할인율 뱃지 - 눈에 확 띄게 */}
        {product.discount && (
          <div className="absolute top-3 left-3">
            <span className="bg-red-600 text-white px-3 py-1.5 rounded text-sm font-bold">
              {product.discount} 할인
            </span>
          </div>
        )}
      </div>

      <div className="p-5">
        {/* 제품명 */}
        <h3 className="text-base font-bold text-gray-900 mb-3 line-clamp-2">
          {product.productName}
        </h3>

        {/* 가격 - 크고 명확하게 */}
        <div className="mb-4">
          {product.originalPrice && (
            <div className="text-sm text-gray-400 line-through mb-1">
              {product.originalPrice}
            </div>
          )}
          <div className="text-2xl font-bold text-gray-900">
            {product.price}
          </div>
        </div>

        {/* 평점 - 신뢰도 */}
        {product.rating && (
          <div className="flex items-center gap-2 mb-4 text-sm">
            <span className="text-yellow-500">★</span>
            <span className="font-semibold">{product.rating}</span>
            {product.reviewCount && (
              <span className="text-gray-500">({product.reviewCount.toLocaleString()})</span>
            )}
          </div>
        )}

        {/* CTA 버튼 - 가장 중요! 크고 명확하게 */}
        <a
          href={product.coupangLink}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center px-6 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-bold text-base"
        >
          최저가 구매하기
        </a>
      </div>
    </div>
  );
}

export default ProductCard;
