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
    <div className="min-h-screen bg-white">
      {/* 상단 헤더 - 로고 이미지 적용 */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src="https://github.com/user-attachments/assets/c62a8663-cb36-4878-a4f3-b2a8d13fedf3" 
                alt="우주꿀템 로고"
                className="h-10 w-10 object-contain"
              />
              <div>
                <h1 className="text-xl font-bold text-gray-900">우주꿀템</h1>
                <p className="text-xs text-gray-500">검증된 리얼 꿀템</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="hidden sm:inline text-red-600 font-semibold animate-pulse">🔥 오늘의 특가</span>
            </div>
          </div>
        </div>
      </header>

      {/* 메인 히어로 배너 - 메인 배너 이미지 적용 */}
      <section className="relative bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-white space-y-6 z-10">
              <div className="inline-block">
                <span className="bg-yellow-400 text-gray-900 text-sm font-bold px-4 py-2 rounded-full">
                  🎉 최대 44% 할인 진행중
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
                Would you<br />buy it?
              </h2>
              <p className="text-xl md:text-2xl text-blue-50 font-medium">
                실사용 후기로 검증된<br />
                <span className="text-yellow-300 font-bold">진짜 꿀템</span>만 추천합니다
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2.5 rounded-lg border border-white/30">
                  <span className="text-xl">⚡</span>
                  <span className="font-semibold">최저가 보장</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2.5 rounded-lg border border-white/30">
                  <span className="text-xl">⭐</span>
                  <span className="font-semibold">평점 4.5+</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2.5 rounded-lg border border-white/30">
                  <span className="text-xl">🚀</span>
                  <span className="font-semibold">빠른 배송</span>
                </div>
              </div>
              <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-8 py-4 rounded-full text-lg shadow-xl transform hover:scale-105 transition-all">
                지금 바로 둘러보기 →
              </button>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
                <img 
                  src="https://github.com/user-attachments/assets/9abd03a9-e311-4c44-a1b4-e36867eaacca" 
                  alt="우주꿀템 메인"
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* 떠다니는 뱃지 효과 */}
              <div className="absolute -top-4 -right-4 bg-red-500 text-white font-bold px-6 py-3 rounded-full shadow-lg animate-bounce">
                HOT 🔥
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 신뢰 지표 섹션 */}
      <section className="bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-indigo-600">1000+</div>
              <div className="text-sm text-gray-600 mt-1">검증된 제품</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-indigo-600">4.8★</div>
              <div className="text-sm text-gray-600 mt-1">평균 평점</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-indigo-600">10만+</div>
              <div className="text-sm text-gray-600 mt-1">만족한 고객</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-indigo-600">44%</div>
              <div className="text-sm text-gray-600 mt-1">최대 할인율</div>
            </div>
          </div>
        </div>
      </section>

      {/* 특별 프로모션 배너 - 프로필/로고 이미지 적용 */}
      <section className="bg-gradient-to-r from-purple-100 to-pink-100 border-y border-purple-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0 items-center">
              <div className="p-8 space-y-4">
                <div className="inline-block bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  ⏰ 오늘만 특가
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                  지금 구매하면<br />
                  <span className="text-red-600">추가 할인 혜택!</span>
                </h3>
                <p className="text-gray-600">
                  매일 새로운 꿀템이 업데이트됩니다.<br />
                  놓치지 마세요!
                </p>
                <div className="flex gap-3">
                  <div className="bg-gray-100 px-4 py-2 rounded-lg">
                    <div className="text-xs text-gray-500">무료배송</div>
                    <div className="font-bold text-gray-900">로켓배송</div>
                  </div>
                  <div className="bg-gray-100 px-4 py-2 rounded-lg">
                    <div className="text-xs text-gray-500">구매안전</div>
                    <div className="font-bold text-gray-900">100% 보장</div>
                  </div>
                </div>
              </div>
              <div className="relative h-64 md:h-full bg-gradient-to-br from-purple-200 to-pink-200">
                <img 
                  src="https://github.com/user-attachments/assets/20f2b4e1-07a3-4f83-9b1a-6b48d5f2298f" 
                  alt="특별 혜택"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 메인 제품 목록 */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                🔥 지금 가장 핫한 꿀템
              </h2>
              <p className="text-gray-600 text-lg">
                실제 사용자들이 강력 추천하는 제품들
              </p>
            </div>
          </div>
          
          {/* 카테고리 필터 */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-full font-semibold whitespace-nowrap hover:bg-indigo-700 transition-colors">
              전체
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full font-semibold whitespace-nowrap hover:bg-gray-200 transition-colors">
              생활가전
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full font-semibold whitespace-nowrap hover:bg-gray-200 transition-colors">
              주방가전
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full font-semibold whitespace-nowrap hover:bg-gray-200 transition-colors">
              패션잡화
            </button>
          </div>
        </div>
        
        {productData && <ProductList products={productData.products} />}
      </main>

      {/* 푸터 */}
      <footer className="bg-gray-900 text-white mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img 
                  src="https://github.com/user-attachments/assets/c62a8663-cb36-4878-a4f3-b2a8d13fedf3" 
                  alt="우주꿀템"
                  className="h-8 w-8"
                />
                <span className="text-xl font-bold">우주꿀템</span>
              </div>
              <p className="text-gray-400 text-sm">
                검증된 리얼 꿀템만 추천하는<br />
                믿을 수 있는 쇼핑 가이드
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">고객 지원</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>자주 묻는 질문</li>
                <li>배송 안내</li>
                <li>반품/교환</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">소셜 미디어</h4>
              <div className="flex gap-3">
                <a href="https://www.youtube.com/@wouldyoutem" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors">
                  ▶
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 space-y-3">
            <p className="text-yellow-400 font-semibold text-center">
              📢 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.
            </p>
            <p className="text-gray-500 text-sm text-center">
              본 포스팅은 제휴 마케팅이 포함된 광고로 일정 커미션을 지급받을 수 있습니다.
            </p>
            <p className="text-gray-600 text-sm text-center">
              © 2024 우주꿀템 (WouldYouTem). All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
