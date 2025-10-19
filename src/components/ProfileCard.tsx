import React from 'react';
import { Product } from '../types/profile';

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  // 카드 클릭 시 쿠팡 링크로 이동
  const handleCardClick = () => {
    window.open(product.coupangLink, '_blank', 'noopener,noreferrer');
  };

  // 버튼 클릭 시 이벤트 전파 방지 (카드 클릭 이벤트가 실행되지 않도록)
  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>, url: string) => {
    e.stopPropagation();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <article 
      onClick={handleCardClick}
      className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 h-full flex flex-col cursor-pointer transition-all hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
    >
      {/* 이미지 - 모바일에서 더 작게, 태블릿에서 정사각형 */}
      <div className="relative bg-gray-50 aspect-video sm:aspect-square">
        <img
          src={product.image}
          alt={product.productName}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        
        {/* NEW 뱃지 */}
        {product.dateAdded && 
         new Date(product.dateAdded).getTime() > Date.now() - 7 * 24 * 60 * 60 * 1000 && (
          <div className="absolute top-2 right-2">
            <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold shadow-lg">
              🆕 NEW
            </span>
          </div>
        )}
        
        {/* 유튜브 쇼츠 버튼 - 모바일에서 항상 보이게 */}
        {product.youtubeShorts && (
          <button
            onClick={(e) => handleButtonClick(e, product.youtubeShorts)}
            className="absolute bottom-2 right-2 bg-red-600 text-white p-2.5 rounded-full shadow-lg hover:bg-red-700 transition-colors active:scale-95"
            aria-label={`${product.productName} 유튜브 쇼츠 보기`}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </button>
        )}
      </div>

      <div className="p-4 flex flex-col flex-1">
        {/* 카테고리 + 제품명 */}
        <div className="mb-3">
          <div className="text-xs text-gray-500 mb-1 font-medium">
            {product.category}
          </div>
          <h3 className="text-base font-bold text-gray-900 line-clamp-2 leading-tight">
            {product.productName}
          </h3>
        </div>

        {/* 하이라이트 - 가장 눈에 띄게 */}
        {product.highlight && (
          <div className="mb-3 bg-yellow-50 border-l-3 border-yellow-400 p-2.5 rounded">
            <p className="text-sm font-bold text-gray-800">
              💡 {product.highlight}
            </p>
          </div>
        )}

        {/* 설명 - 짧게 */}
        <p className="text-sm text-gray-600 mb-3 line-clamp-2 leading-relaxed">
          {product.description}
        </p>

        {/* 주요 특징 - 간결하게 */}
        <div className="mb-4 space-y-1 flex-1">
          {product.features.slice(0, 3).map((feature, index) => (
            <div key={index} className="flex items-start text-xs text-gray-700">
              <span className="text-blue-500 mr-1.5 mt-0.5">✓</span>
              <span className="flex-1 leading-tight">{feature}</span>
            </div>
          ))}
        </div>

        {/* CTA 버튼 - 모바일 최적화 (크고 눈에 띄게!) */}
        <div className="space-y-2 mt-auto">
          {/* 메인 CTA - 쿠팡 (가장 중요!) */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleCardClick();
            }}
            className="block w-full text-center px-4 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-bold shadow-md active:scale-98 text-base"
            aria-label={`${product.productName} 쿠팡에서 가격 확인하고 구매`}
          >
            💰 쿠팡에서 확인하기
          </button>

          {/* 서브 CTA - 유튜브 */}
          {product.youtubeShorts && (
            <button
              onClick={(e) => handleButtonClick(e, product.youtubeShorts)}
              className="block w-full text-center px-4 py-3 bg-red-50 text-red-600 rounded-xl hover:bg-red-100 transition-colors font-semibold border-2 border-red-200 active:scale-98 text-sm"
            >
              ▶ 소개 영상 1분 보기
            </button>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
