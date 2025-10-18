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
          alt={product.productName}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        
        {/* 유튜브 쇼츠 버튼 오버레이 */}
        {product.youtubeShorts && (
          <a
            href={product.youtubeShorts}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all flex items-center justify-center"
            aria-label={`${product.productName} 유튜브 쇼츠 보기`}
          >
            <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-red-600 text-white p-5 rounded-full shadow-2xl">
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </a>
        )}
        
        {/* NEW 뱃지 */}
        {product.dateAdded && 
         new Date(product.dateAdded).getTime() > Date.now() - 7 * 24 * 60 * 60 * 1000 && (
          <div className="absolute top-3 right-3">
            <span className="bg-green-500 text-white px-3 py-1.5 rounded-full text-sm font-bold shadow-lg">
              🆕 NEW
            </span>
          </div>
        )}
      </div>

      <div className="p-5">
        {/* 카테고리 */}
        <div className="text-xs text-gray-500 mb-2 font-medium">
          {product.category}
        </div>

        {/* 제품명 */}
        <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 leading-snug min-h-[3.2rem]">
          {product.productName}
        </h3>

        {/* 설명 */}
        <p className="text-sm text-gray-600 mb-3 line-clamp-2 leading-relaxed min-h-[2.8rem]">
          {product.description}
        </p>

        {/* 하이라이트 */}
        {product.highlight && (
          <div className="mb-4 bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded">
            <p className="text-sm font-semibold text-gray-800">
              💡 {product.highlight}
            </p>
          </div>
        )}

        {/* 주요 특징 */}
        <div className="mb-4 space-y-1.5">
          {product.features.slice(0, 3).map((feature, index) => (
            <div key={index} className="flex items-start text-sm text-gray-700">
              <span className="text-blue-500 mr-2 mt-0.5">✓</span>
              <span className="flex-1">{feature}</span>
            </div>
          ))}
        </div>

        {/* 버튼 그룹 */}
        <div className="space-y-2 pt-4 border-t">
          {/* 메인 CTA - 쿠팡 구매 (가격은 쿠팡에서 확인) */}
          <a
            href={product.coupangLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center px-6 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-bold shadow-md hover:shadow-lg text-base"
            aria-label={`${product.productName} 쿠팡에서 가격 확인하고 구매`}
          >
            💰 쿠팡 최저가 확인하기
          </a>

          {/* 서브 CTA - 유튜브 쇼츠 */}
          {product.youtubeShorts && (
            <a
              href={product.youtubeShorts}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center px-6 py-3 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors font-semibold border border-red-200"
            >
              ▶ 실사용 영상 보기
            </a>
          )}
        </div>

        {/* 추가 정보 */}
        <div className="mt-3 text-center text-xs text-gray-500">
          쿠팡에서 실시간 가격과 리뷰를 확인하세요
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
