import { Product } from '../types/profile';

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-100">
      {/* 할인율 뱃지 - 더 눈에 띄게 */}
      {product.discount && (
        <div className="absolute top-3 left-3 z-10">
          <div className="bg-gradient-to-r from-red-600 to-red-500 text-white px-4 py-2 rounded-xl text-sm font-bold shadow-lg flex items-center gap-1 animate-pulse">
            <span className="text-base">🔥</span>
            <span>{product.discount}</span>
          </div>
        </div>
      )}

      {/* 베스트 셀러 뱃지 */}
      {product.reviewCount && product.reviewCount > 3000 && (
        <div className="absolute top-3 right-3 z-10">
          <div className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs font-bold shadow-md">
            ⭐ BEST
          </div>
        </div>
      )}

      {/* 제품 이미지 */}
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 aspect-square">
        <img
          src={product.image}
          alt={product.productName}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {/* 호버 시 오버레이 */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
      </div>

      <div className="p-6">
        {/* 카테고리 + 평점 */}
        <div className="flex items-center justify-between mb-3">
          <span className="inline-block px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-bold rounded-full border border-indigo-100">
            {product.category}
          </span>
          {product.rating && (
            <div className="flex items-center gap-1 text-sm">
              <span className="text-yellow-400 text-base">★</span>
              <span className="font-bold text-gray-900">{product.rating}</span>
            </div>
          )}
        </div>

        {/* 제품명 */}
        <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 min-h-[3.5rem] group-hover:text-indigo-600 transition-colors">
          {product.productName}
        </h3>

        {/* 가격 정보 - 더 강조 */}
        <div className="mb-4 bg-gray-50 rounded-xl p-4 border border-gray-100">
          <div className="flex items-baseline justify-between">
            <div>
              {product.originalPrice && (
                <div className="text-sm text-gray-400 line-through mb-1">
                  {product.originalPrice}
                </div>
              )}
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-extrabold text-red-600">{product.price}</span>
              </div>
            </div>
            {product.discount && (
              <div className="text-right">
                <div className="text-xs text-gray-500 mb-1">절약 금액</div>
                <div className="text-lg font-bold text-green-600">
                  {parseInt(product.originalPrice?.replace(/[^\d]/g, '') || '0') - 
                   parseInt(product.price?.replace(/[^\d]/g, '') || '0') > 0
                    ? `↓ ${(parseInt(product.originalPrice?.replace(/[^\d]/g, '') || '0') - 
                         parseInt(product.price?.replace(/[^\d]/g, '') || '0')).toLocaleString()}원`
                    : ''}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 제품 설명 */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2 min-h-[2.5rem] leading-relaxed">
          {product.description}
        </p>

        {/* 주요 특징 - 아이콘 강화 */}
        {product.features && product.features.length > 0 && (
          <div className="mb-4 space-y-2 bg-indigo-50/50 rounded-lg p-3 border border-indigo-100">
            {product.features.slice(0, 3).map((feature, index) => (
              <div key={index} className="flex items-start text-xs text-gray-700">
                <span className="text-green-500 mr-2 mt-0.5 font-bold">✓</span>
                <span className="flex-1">{feature}</span>
              </div>
            ))}
          </div>
        )}

        {/* 리뷰 정보 */}
        {product.reviewCount && (
          <div className="mb-4 flex items-center justify-center gap-2 text-sm bg-yellow-50 rounded-lg py-2 border border-yellow-100">
            <span className="text-yellow-600 font-semibold">👥 {product.reviewCount.toLocaleString()}명</span>
            <span className="text-gray-500">이 선택했어요!</span>
          </div>
        )}

        {/* CTA 버튼 - 더 강력하게 */}
        <div className="space-y-2">
          <a
            href={product.coupangLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center px-6 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-base"
          >
            <div className="flex items-center justify-center gap-2">
              <span>🛒</span>
              <span>지금 최저가로 구매하기</span>
            </div>
          </a>
          
          {product.youtubeLink && (
            <a
              href={product.youtubeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center px-4 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl hover:from-red-600 hover:to-red-700 transition-all font-semibold shadow-md hover:shadow-lg"
            >
              <div className="flex items-center justify-center gap-2">
                <span>▶️</span>
                <span>실사용 후기 영상 보기</span>
              </div>
            </a>
          )}
        </div>

        {/* 추가 혜택 표시 */}
        <div className="mt-4 flex items-center justify-center gap-3 text-xs text-gray-500">
          <div className="flex items-center gap-1">
            <span>🚚</span>
            <span>무료배송</span>
          </div>
          <div className="w-px h-3 bg-gray-300"></div>
          <div className="flex items-center gap-1">
            <span>⚡</span>
            <span>로켓배송</span>
          </div>
          <div className="w-px h-3 bg-gray-300"></div>
          <div className="flex items-center gap-1">
            <span>💯</span>
            <span>구매보장</span>
          </div>
        </div>

        {/* 파트너스 고지 */}
        <p className="mt-3 text-xs text-gray-400 text-center leading-relaxed">
          쿠팡 파트너스 활동으로 소정의 수수료를 받습니다
        </p>
      </div>
    </div>
  );
}

export default ProductCard;
