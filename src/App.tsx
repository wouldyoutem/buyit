import { useState, useEffect } from 'react';
import ProductList from './components/ProfileList';
import { ProductData } from './types/profile';

function App() {
  const [productData, setProductData] = useState<ProductData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/wouldyoutem/profiles/profiles.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('제품 데이터를 불러올 수 없습니다.');
        }
        return response.json();
      })
      .then(data => {
        setProductData(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 text-lg font-semibold">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* SEO 헤더 */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img 
                src="https://github.com/user-attachments/assets/20f2b4e1-07a3-4f83-9b1a-6b48d5f2298f" 
                alt="우주꿀템 로고"
                className="h-8 w-8"
              />
              <h1 className="text-lg font-bold">우주꿀템</h1>
            </div>
            <div className="text-xs text-red-600 font-bold animate-pulse">
              🔥 오늘만 특가
            </div>
          </div>
        </div>
      </header>

      {/* 메인 타이틀 - SEO 키워드 포함 */}
      <main className="max-w-6xl mx-auto px-4 py-6">
        <section className="mb-6 text-center">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
            2025 가성비 최강 꿀템 추천
          </h2>
          <p className="text-sm text-gray-600 mb-1">
            ⭐ 평점 4.5+ | 실구매자 리뷰 1,000개 이상 검증 완료
          </p>
          <p className="text-xs text-blue-600 font-semibold">
            최대 44% 할인 · 로켓배송 무료배송 · 쿠팡 최저가 보장
          </p>
        </section>
        
        {/* 상품 리스트 */}
        {productData && <ProductList products={productData.products} />}
        
        {/* SEO 텍스트 콘텐츠 */}
        <section className="mt-12 bg-gray-50 rounded-lg p-6 text-sm text-gray-700">
          <h3 className="font-bold text-base mb-3">🎯 우주꿀템이란?</h3>
          <p className="mb-4 leading-relaxed">
            우주꿀템은 실제 구매자들의 리뷰와 평점을 기반으로 <strong>진짜 가성비 좋은 제품</strong>만 엄선하여 추천합니다. 
            다이슨 무선청소기, 필립스 에어프라이어, 삼성 갤럭시버즈, 나이키 운동화 등 생활가전부터 패션잡화까지 
            <strong>쿠팡 최저가</strong>로 만나보세요.
          </p>
          <h3 className="font-bold text-base mb-3">✨ 왜 우주꿀템일까요?</h3>
          <ul className="space-y-2 mb-4">
            <li>✓ <strong>평점 4.5 이상</strong> 실구매자 검증 완료</li>
            <li>✓ <strong>리뷰 1,000개 이상</strong> 신뢰도 높은 제품만</li>
            <li>✓ <strong>최대 44% 할인</strong> 타임세일 최저가 제공</li>
            <li>✓ <strong>로켓배송 무료배송</strong> 빠르고 안전하게</li>
          </ul>
          <div className="text-xs text-gray-500 pt-4 border-t">
            <strong>추천 제품:</strong> 다이슨청소기, 에어프라이어, 무선이어폰, 워킹패드, 캠핑텐트, 
            생활가전할인, 주방가전추천, 운동화세일, 가성비템
          </div>
        </section>
      </main>

      {/* SEO 푸터 */}
      <footer className="bg-gray-900 text-white mt-12">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="text-center mb-4">
            <h2 className="text-lg font-bold mb-2">우주꿀템</h2>
            <p className="text-sm text-gray-400">
              실구매자 검증 완료 가성비 최강 꿀템 추천
            </p>
          </div>
          <div className="text-center text-xs text-gray-500 space-y-2">
            <p>쿠팡 파트너스 활동으로 일정 수수료를 받습니다</p>
            <p>© 2025 우주꿀템. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
