import { Product } from '../types/profile';

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
      {/* 이미지 */}
      <div className="relative bg-gray-50 aspect-square">
        <img
          src={product.image}
          alt={`${product.productName} 최저가 구매`}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {/* 할인율 뱃지 - 긴급성 강조 */}
        {product.discount && (
          <div className="absolute top-2 left-2">
            <span className="bg-red-600 text-white px-3 py-1.5 rounded font-bold text-sm shadow-lg">
              🔥 {product.discount} 할인
            </span>
          </div>
        )}
        {/* 베스트 뱃지 */}
        {product.reviewCount && product.reviewCount > 3000 && (
          <div className="absolute top-2 right-2">
            <span className="bg-yellow-400 text-gray-900 px-2 py-1 rounded text-xs font-bold">
              BEST
            </span>
          </div>
        )}
      </div>

      <div className="p-4">
        {/* 카테고리 */}
        <div className="text-xs text-gray-500 mb-2">
          {product.category}
        </div>

        {/* 제품명 - SEO h3 태그 */}
        <h3 className="text-base font-bold text-gray-900 mb-2 line-clamp-2 leading-snug">
          {product.productName}
        </h3>

        {/* 평점 + 리뷰수 - 신뢰도 강조 */}
        {product.rating && (
          <div className="flex items-center gap-2 mb-3 text-sm">
            <div className="flex items-center gap-1">
              <span className="text-yellow-500">★</span>
              <span className="font-bold">{product.rating}</span>
            </div>
            {product.reviewCount && (
              <span className="text-gray-500">
                리뷰 {product.reviewCount.toLocaleString()}개
              </span>
            )}
          </div>
        )}

        {/* 설명 - SEO 텍스트 */}
        <p className="text-sm text-gray-600 mb-4 line-clamp-2 leading-relaxed">
          {product.description}
        </p>

        {/* 가격 - 크고 명확하게 */}
        <div className="mb-4 pb-4 border-b">
          {product.originalPrice && (
            <div className="text-sm text-gray-400 line-through mb-1">
              {product.originalPrice}
            </div>
          )}
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-gray-900">
              {product.price}
            </span>
            {product.discount && (
              <span className="text-sm font-bold text-red-600">
                {product.discount} ↓
              </span>
            )}
          </div>
        </div>

        {/* CTA 버튼 - 가장 중요! */}
        <a
          href={product.coupangLink}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center px-6 py-3.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-bold text-base shadow-md hover:shadow-lg"
          aria-label={`${product.productName} 쿠팡 최저가 구매하기`}
        >
          🛒 최저가 구매하기
        </a>

        {/* 추가 혜택 정보 */}
        <div className="mt-3 flex items-center justify-center gap-3 text-xs text-gray-500">
          <span>🚚 무료배송</span>
          <span>⚡ 로켓배송</span>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
