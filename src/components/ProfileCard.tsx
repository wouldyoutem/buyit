import { Product } from '../types/profile';

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all border border-gray-200">
      {/* 이미지 + 쇼츠 오버레이 */}
      <div className="relative bg-gray-50 aspect-square group">
        <img
          src={product.image}
          alt={`${product.productName} 최저가`}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        
        {/* 할인 뱃지 */}
        {product.discount && (
          <div className="absolute top-3 left-3">
            <span className="bg-red-600 text-white px-3 py-1.5 rounded-lg font-bold text-sm shadow-lg">
              🔥 {product.discount}
            </span>
          </div>
        )}
        
        {/* 유튜브 쇼츠 버튼 오버레이 */}
        {product.youtubeShorts && (
          <a
            href={product.youtubeShorts}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all flex items-center justify-center"
            aria-label={`${product.productName} 유튜브 쇼츠 보기`}
          >
            <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-red-600 text-white p-4 rounded-full">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </a>
        )}
        
        {/* NEW 뱃지 */}
        {product.dateAdded && 
         new Date(product.dateAdded).getTime() > Date.now() - 3 * 24 * 60 * 60 * 1000 && (
          <div className="absolute top-3 right-3">
            <span className="bg-green-500 text-white px-2 py-1 rounded text-xs font-bold">
              NEW
            </span>
          </div>
        )}
      </div>

      <div className="p-5">
        {/* 카테고리 */}
        <div className="text-xs text-gray-500 mb-2">
          {product.category}
        </div>

        {/* 제품명 */}
        <h3 className="text-base font-bold text-gray-900 mb-3 line-clamp-2 leading-snug min-h-[2.8rem]">
          {product.productName}
        </h3>

        {/* 평점 + 리뷰 */}
        {product.rating && (
          <div className="flex items-center gap-2 mb-3">
            <div className="flex items-center gap-1 text-sm">
              <span className="text-yellow-500">★</span>
              <span className="font-bold">{product.rating}</span>
            </div>
            {product.reviewCount && (
              <span className="text-xs text-gray-500">
                ({product.reviewCount.toLocaleString()})
              </span>
            )}
          </div>
        )}

        {/* 설명 */}
        <p className="text-sm text-gray-600 mb-4 line-clamp-2 leading-relaxed min-h-[2.8rem]">
          {product.description}
        </p>

        {/* 가격 */}
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
          </div>
        </div>

        {/* 버튼 그룹 */}
        <div className="space-y-2">
          {/* 메인 CTA - 쿠팡 구매 */}
          <a
            href={product.coupangLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center px-6 py-3.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-bold shadow-md hover:shadow-lg"
            aria-label={`${product.productName} 쿠팡 최저가 구매`}
          >
            🛒 쿠팡 최저가 구매
          </a>

          {/* 서브 CTA - 유튜브 쇼츠 */}
          {product.youtubeShorts && (
            <a
              href={product.youtubeShorts}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center px-6 py-2.5 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors font-semibold border border-red-200"
            >
              ▶ 쇼츠 리뷰 보기
            </a>
          )}
        </div>

        {/* 추가 정보 */}
        <div className="mt-3 flex items-center justify-center gap-3 text-xs text-gray-500">
          <span>🚚 무료배송</span>
          <span>⚡ 로켓배송</span>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
