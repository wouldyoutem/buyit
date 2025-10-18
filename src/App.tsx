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
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600"></div>
          <p className="mt-4 text-gray-600 text-lg">로딩 중...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
        <div className="text-center bg-white p-8 rounded-xl shadow-lg">
          <p className="text-red-600 text-lg font-semibold">{error}</p>
          <p className="mt-2 text-gray-600">데이터를 확인해주세요.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* 메인 배너 */}
      <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-white space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                우주꿀템
              </h1>
              <p className="text-2xl md:text-3xl font-semibold text-yellow-300">
                Would you buy it?
              </p>
              <p className="text-xl text-blue-100">
                검증된 리얼 꿀템만 모았습니다
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span>✓</span>
                  <span>최저가 보장</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span>✓</span>
                  <span>실사용 후기</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span>✓</span>
                  <span>빠른 배송</span>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://github.com/user-attachments/assets/9abd03a9-e311-4c44-a1b4-e36867eaacca" 
                alt="우주꿀템 배너"
                className="w-full h-auto rounded-2xl shadow-2xl"
                onError={(e) => {
                  // 이미지 로드 실패 시 이모지로 대체
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* 메인 컨텐츠 */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            🔥 지금 가장 핫한 꿀템
          </h2>
          <p className="text-gray-600">
            실제 사용자들이 강력 추천하는 제품들을 만나보세요
          </p>
        </div>
        
        {productData && <ProductList products={productData.products} />}
      </main>

      {/* 푸터 */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center space-y-3">
            <p className="text-gray-600 font-semibold">
              📢 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.
            </p>
            <p className="text-gray-500 text-sm">
              본 포스팅은 제휴 마케팅이 포함된 광고로 일정 커미션을 지급받을 수 있습니다.
            </p>
            <p className="text-gray-400 text-sm">
              © 2024 우주꿀템 (WouldYouTem). All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
