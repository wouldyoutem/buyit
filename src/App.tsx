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
        // 최신순 정렬 (dateAdded 기준)
        const sortedProducts = data.products.sort((a: any, b: any) => {
          return new Date(b.dateAdded || 0).getTime() - new Date(a.dateAdded || 0).getTime();
        });
        setProductData({ products: sortedProducts });
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
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
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
    <div className="min-h-screen bg-gray-50">
      {/* 유튜브 연동 헤더 */}
      <header className="bg-white border-b sticky top-0 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src="https://github.com/user-attachments/assets/20f2b4e1-07a3-4f83-9b1a-6b48d5f2298f" 
                alt="우주꿀템"
                className="h-10 w-10 rounded-full"
              />
              <div>
                <h1 className="text-lg font-bold text-gray-900">우주꿀템</h1>
                <p className="text-xs text-gray-500">YouTube에서 확인하세요</p>
              </div>
            </div>
            <a
              href="https://www.youtube.com/@wouldyoutem"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold hover:bg-red-700 transition-colors"
            >
              <span>▶</span>
              <span className="hidden sm:inline">구독하기</span>
            </a>
          </div>
        </div>
      </header>

      {/* 유튜브 CTA 배너 */}
      <section className="bg-gradient-to-r from-red-500 to-pink-500 text-white">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="text-center">
            <h2 className="text-xl font-bold mb-2">
              📹 실사용 리뷰 영상이 궁금하다면?
            </h2>
            <p className="text-sm mb-3 text-white/90">
              유튜브 쇼츠로 1분 안에 확인하세요!
            </p>
            <a
              href="https://www.youtube.com/@wouldyoutem"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-red-600 px-6 py-2 rounded-full font-bold hover:bg-gray-100 transition-colors"
            >
              유튜브 채널 보러가기 →
            </a>
          </div>
        </div>
      </section>

      {/* 메인 */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-1">
                🔥 최신 꿀템
              </h2>
              <p className="text-sm text-gray-600">
                실구매자 평점 4.5+ 검증 완료
              </p>
            </div>
            <div className="text-xs text-gray-500">
              총 {productData?.products.length || 0}개
            </div>
          </div>
        </div>
        
        {productData && <ProductList products={productData.products} />}
        
        {/* 유튜브 구독 유도 섹션 */}
        <section className="mt-12 bg-white rounded-xl p-8 text-center border-2 border-red-100">
          <div className="mb-4">
            <span className="text-6xl">📺</span>
          </div>
          <h3 className="text-2xl font-bold mb-3 text-gray-900">
            더 많은 꿀템이 궁금하다면?
          </h3>
          <p className="text-gray-600 mb-6">
            매일 새로운 가성비 제품을 유튜브 쇼츠로 소개합니다.<br />
            구독하고 알림 설정하면 최신 꿀템을 가장 먼저 만나보세요!
          </p>
          <a
            href="https://www.youtube.com/@wouldyoutem"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-red-700 transition-colors shadow-lg"
          >
            <span>▶</span>
            <span>우주꿀템 구독하기</span>
          </a>
        </section>

        {/* SEO 콘텐츠 */}
        <section className="mt-12 bg-white rounded-lg p-6 text-sm text-gray-700 border">
          <h3 className="font-bold text-base mb-3">🎯 우주꿀템 - 유튜브 쇼츠로 보는 진짜 꿀템</h3>
          <p className="mb-4 leading-relaxed">
            우주꿀템은 실구매자 평점 4.5 이상, 리뷰 1,000개 이상 검증된 제품만 엄선합니다. 
            <strong>유튜브 쇼츠</strong>로 1분 안에 제품의 핵심 포인트를 확인하고, 
            <strong>쿠팡 최저가</strong>로 바로 구매하세요.
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-xs">
            <div className="bg-gray-50 p-3 rounded">
              <div className="font-bold mb-1">📹 유튜브 쇼츠</div>
              <div className="text-gray-600">1분 실사용 리뷰</div>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <div className="font-bold mb-1">⭐ 검증된 제품</div>
              <div className="text-gray-600">평점 4.5+ 보장</div>
            </div>
            <div className="bg-gray-50 p-3 rounded">
              <div className="font-bold mb-1">💰 최저가</div>
              <div className="text-gray-600">쿠팡 할인가</div>
            </div>
          </div>
        </section>
      </main>

      {/* 푸터 */}
      <footer className="bg-gray-900 text-white mt-16">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <img 
                src="https://github.com/user-attachments/assets/20f2b4e1-07a3-4f83-9b1a-6b48d5f2298f" 
                alt="우주꿀템"
                className="h-8 w-8 rounded-full"
              />
              <div>
                <div className="font-bold">우주꿀템</div>
                <div className="text-xs text-gray-400">실구매자 검증 꿀템 추천</div>
              </div>
            </div>
            <a
              href="https://www.youtube.com/@wouldyoutem"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-red-600 px-4 py-2 rounded-full hover:bg-red-700 transition-colors"
            >
              <span>▶</span>
              <span>YouTube 채널</span>
            </a>
          </div>
          <div className="text-center text-xs text-gray-500 space-y-2 pt-6 border-t border-gray-800">
            <p>쿠팡 파트너스 활동으로 일정 수수료를 받습니다</p>
            <p>© 2025 우주꿀템. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
