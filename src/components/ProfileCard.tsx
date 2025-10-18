import { Product } from '../types/profile';

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
      {/* 할인율 뱃지 */}
      {product.discount && (
        <div className="absolute top-4 left-4 z-10">
          <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
            🔥 {product.discount} 할인
          </span>
        </div>
      )}

      {/* 제품 이미지 */}
      <div className="relative overflow-hidden bg-gray-100 aspect-square">
        <img
          src={product.image}
          alt={product.productName}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      <div className="p-5">
        {/* 카테고리 */}
        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full mb-2">
          {product.category}
        </span>

        {/* 제품명 */}
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 min-h-[3.5rem]">
          {product.productName}
        </h3>

        {/* 가격 */}
        <div className="mb-3">
          {product.originalPrice && (
            <span className="text-sm text-gray-400 line-through mr-2">
              {product.originalPrice}
            </span>
          )}
          <span className="text-2xl font-bold text-red-600">{product.price}</span>
        </div>

        {/* 제품 설명 */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2 min-h-[2.5rem]">
          {product.description}
        </p>

        {/* 주요 특징 */}
        {product.features && product.features.length > 0 && (
          <div className="mb-4">
            {product.features.slice(0, 3).map((feature, index) => (
              <div key={index} className="flex items-center text-xs text-gray-700 mb-1">
                <span className="text-green-500 mr-1">✓</span>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        )}

        {/* 평점 */}
        {product.rating && (
          <div className="flex items-center mb-4 text-sm">
            <span className="text-yellow-400">★</span>
            <span className="font-semibold ml-1">{product.rating}</span>
            {product.reviewCount && (
              <span className="text-gray-500 ml-1">({product.reviewCount}개 리뷰)</span>
            )}
          </div>
        )}

        {/* CTA 버튼 */}
        <div className="space-y-2">
          <a
            href={product.coupangLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all font-bold shadow-md hover:shadow-xl transform hover:-translate-y-0.5"
          >
            🛒 최저가로 구매하기
          </a>
          
          {product.youtubeLink && (
            <a
              href={product.youtubeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-semibold"
            >
              ▶️ 리얼 사용 후기 보기
            </a>
          )}
        </div>

        {/* 파트너스 고지 */}
        <p className="mt-3 text-xs text-gray-400 text-center">
          쿠팡 파트너스 활동으로 소정의 수수료를 받습니다
        </p>
      </div>
    </div>
  );
}

export default ProductCard;
