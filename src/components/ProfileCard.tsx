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
      {/* 이미지 - 모바일 2열에 최적화된 정사각형 */}
      <div className="relative bg-gray-50 aspect-square">
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
            <span className="bg-green-500 text-white px-2 py-0.5 rounded-full text-xs font-bold shadow-lg">
              NEW
            </span>
          </div>
        )}
        
        {/* 유튜브 쇼츠 버튼 - 모바일에서 항상 보이게 */}
        {product.youtubeShorts && (
          <button
            onClick={(e) => handleButtonClick(e, product.youtubeShorts!)}
            className="absolute bottom-2 right-2 bg-red-600 text-white p-2 rounded-full shadow-lg hover:bg-red-700 transition-colors active:scale-95"
            aria-label={`${product.productName} 유튜브 쇼츠 보기`}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </button>
        )}
      </div>

      <div className="p-3 flex flex-col flex-1">
        {/* 카테고리 + 제품명 */}
        <div className="mb-2">
          <div className="text-xs text-gray-500 mb-1 font-medium">
            {product.category}
          </div>
          <h3 className="text-sm font-bold text-gray-900 line-clamp-2 leading-tight">
            {product.productName}
          </h3>
        </div>

        {/* 하이라이트 - 가장 눈에 띄게 */}
        {product.highlight && (
          <div className="mb-2 bg-yellow-50 border-l-2 border-yellow-400 p-2 rounded">
            <p className="text-xs font-bold text-gray-800 leading-tight">
              💡 {product.highlight}
            </p>
          </div>
        )}

        {/* 설명 - 짧게 */}
        <p className="text-xs text-gray-600 mb-2 line-clamp-2 leading-relaxed">
          {product.description}
        </p>

        {/* 주요 특징 - 간결하게 */}
        <div className="mb-3 space-y-1 flex-1">
          {product.features.slice(0, 2).map((feature, index) => (
            <div key={index} className="flex items-start text-xs text-gray-700">
              <span className="text-blue-500 mr-1 mt-0.5 flex-shrink-0">✓</span>
              <span className="flex-1 leading-tight line-clamp-1">{feature}</span>
            </div>
          ))}
        </div>

        {/* CTA 버튼 - 모바일 2열 최적화 */}
        <div className="space-y-2 mt-auto">
          {/* 메인 CTA - 쿠팡 (가장 중요!) */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleCardClick();
            }}
            className="block w-full text-center px-3 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-bold shadow-md active:scale-98 text-sm"
            aria-label={`${product.productName} 쿠팡에서 가격 확인하고 구매`}
          >
            💰 쿠팡 최저가
          </button>

          {/* 네이버 쇼핑 버튼 */}
          {product.naverLink && (
            <button
              onClick={(e) => handleButtonClick(e, product.naverLink!)}
              className="block w-full text-center px-3 py-2 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-colors font-semibold border border-green-200 active:scale-98 text-xs"
            >
              🛍️ 네이버쇼핑
            </button>
          )}

          {/* 서브 CTA - 유튜브 */}
          {product.youtubeShorts && (
            <button
              onClick={(e) => handleButtonClick(e, product.youtubeShorts!)}
              className="block w-full text-center px-3 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors font-semibold border border-red-200 active:scale-98 text-xs"
            >
              ▶ 영상보기
            </button>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
