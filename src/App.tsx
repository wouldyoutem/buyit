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
        // 유튜브 쇼츠 링크가 있는 것 우선 → 최신순 정렬
        const sortedProducts = data.products.sort((a: any, b: any) => {
          const aHasShorts = a.youtubeShorts && a.youtubeShorts.trim() !== '';
          const bHasShorts = b.youtubeShorts && b.youtubeShorts.trim() !== '';
          
          // 유튜브 쇼츠 유무로 우선 정렬
          if (aHasShorts && !bHasShorts) return -1;
          if (!aHasShorts && bHasShorts) return 1;
          
          // 둘 다 있거나 둘 다 없으면 최신순 정렬
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
          <div className="flex items-center justify-center">
            <a
              href="https://www.youtube.com/@wouldyoutem"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <img 
                src="https://github.com/user-attachments/assets/20f2b4e1-07a3-4f83-9b1a-6b48d5f2298f" 
                alt="우주꿀템"
                className="h-8 w-8 rounded-full"
              />
              <div>
                <h1 className="text-base font-bold text-gray-900">우주꿀템</h1>
              </div>
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

      {/* 메인 - 모바일 패딩 최소화 */}
      <main className="max-w-6xl mx-auto px-3 py-4">
        <div className="mb-4">
          <h2 className="text-xl font-bold text-gray-900 mb-1">
            🔥 2025 대박템 모음
          </h2>
          <p className="text-sm text-gray-600">
            우주에서 찾은 꿀템
          </p>
        </div>
        
        {productData && <ProductList products={productData.products} />}
      </main>

      {/* 푸터 - 모바일 컴팩트 */}
      <footer className="bg-gray-900 text-white mt-12">
        <div className="max-w-6xl mx-auto px-3 py-6">
          <div className="flex flex-col items-center gap-3 mb-4">
            <a
              href="https://www.youtube.com/@wouldyoutem"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <img 
                src="https://github.com/user-attachments/assets/20f2b4e1-07a3-4f83-9b1a-6b48d5f2298f" 
                alt="우주꿀템"
                className="h-6 w-6 rounded-full"
              />
              <div className="font-bold text-sm">우주꿀템</div>
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
