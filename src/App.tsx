import { useState, useEffect } from 'react';
import ProductList from './components/ProfileList';
import { ProductData } from './types/profile';

function App() {
  const [productData, setProductData] = useState<ProductData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/buyit/profiles/profiles.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('제품 데이터를 불러올 수 없습니다.');
        }
        return response.json();
      })
      .then(data => {
        // 최신순 정렬
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
      {/* 모바일 최적화 헤더 - 컴팩트 */}
      <header className="bg-white border-b sticky top-0 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-3 py-2.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img 
                src="https://github.com/user-attachments/assets/20f2b4e1-07a3-4f83-9b1a-6b48d5f2298f" 
                alt="우주꿀템"
                className="h-8 w-8 rounded-full"
              />
              <div>
                <h1 className="text-base font-bold text-gray-900">우주꿀템</h1>
              </div>
            </div>
            <a
              href="https://www.youtube.com/@wouldyoutem"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-red-600 text-white px-3 py-1.5 rounded-full text-sm font-bold hover:bg-red-700 transition-colors active:scale-95"
            >
              <span className="text-base">▶</span>
              <span>구독</span>
            </a>
          </div>
        </div>
      </header>

      {/* 쿠팡 파트너스 대가성 문구 - 페이지 최상단 명확 표시 */}
      <div className="bg-orange-50 border-b border-orange-200">
        <div className="max-w-6xl mx-auto px-3 py-3">
          <div className="flex items-start gap-2">
            <span className="text-orange-600 mt-0.5 flex-shrink-0">ⓘ</span>
            <p className="text-xs sm:text-sm text-orange-800 font-medium leading-relaxed">
              이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.
            </p>
          </div>
        </div>
      </div>

      {/* 모바일 최적화 배너 - 콤팩트 */}
      <section className="bg-gradient-to-r from-red-500 to-pink-500 text-white">
        <div className="max-w-6xl mx-auto px-3 py-4">
          <div className="text-center">
            <p className="text-sm font-bold mb-2">
              📹 실사용 리뷰 영상으로 먼저 확인하세요!
            </p>
            <a
              href="https://www.youtube.com/@wouldyoutem"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-red-600 px-5 py-2 rounded-full font-bold text-sm hover:bg-gray-100 transition-colors active:scale-95"
            >
              유튜브 보러가기 →
            </a>
          </div>
        </div>
      </section>

      {/* 메인 - 모바일 패딩 최소화 */}
      <main className="max-w-6xl mx-auto px-3 py-4">
        <div className="mb-4">
          <h2 className="text-xl font-bold text-gray-900 mb-1">
            🔥 최신 꿀템
          </h2>
          <p className="text-sm text-gray-600">
            직접 써보고 추천하는 진짜 가성비 제품
          </p>
        </div>
        
        {productData && <ProductList products={productData.products} />}
        
        {/* 하단 구독 유도 - 모바일 최적화 */}
        <section className="mt-8 bg-white rounded-xl p-6 text-center border border-red-200">
          <div className="mb-3">
            <span className="text-5xl">📺</span>
          </div>
          <h3 className="text-lg font-bold mb-2 text-gray-900">
            더 많은 꿀템이 궁금하다면?
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            매일 새로운 가성비 제품을<br className="sm:hidden" /> 유튜브 쇼츠로 소개합니다
          </p>
          <a
            href="https://www.youtube.com/@wouldyoutem"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-full text-base font-bold hover:bg-red-700 transition-colors shadow-lg active:scale-95 w-full sm:w-auto justify-center"
          >
            <span>▶</span>
            <span>우주꿀템 구독하기</span>
          </a>
        </section>
      </main>

      {/* 푸터 - 모바일 컴팩트 */}
      <footer className="bg-gray-900 text-white mt-12">
        <div className="max-w-6xl mx-auto px-3 py-6">
          <div className="flex flex-col items-center gap-3 mb-4">
            <div className="flex items-center gap-2">
              <img 
                src="https://github.com/user-attachments/assets/20f2b4e1-07a3-4f83-9b1a-6b48d5f2298f" 
                alt="우주꿀템"
                className="h-6 w-6 rounded-full"
              />
              <div className="font-bold text-sm">우주꿀템</div>
            </div>
            <a
              href="https://www.youtube.com/@wouldyoutem"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-red-600 px-4 py-2 rounded-full hover:bg-red-700 transition-colors text-sm active:scale-95"
            >
              <span>▶</span>
              <span>YouTube</span>
            </a>
          </div>
          <div className="text-center text-xs text-gray-400 space-y-1.5 pt-4 border-t border-gray-800">
            <p>이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.</p>
            <p>© 2025 우주꿀템</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
