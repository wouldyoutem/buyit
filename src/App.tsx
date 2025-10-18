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
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
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
      {/* 심플 헤더 */}
      <header className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img 
                src="https://github.com/user-attachments/assets/20f2b4e1-07a3-4f83-9b1a-6b48d5f2298f" 
                alt="우주꿀템"
                className="h-8 w-8"
              />
              <span className="text-lg font-bold">우주꿀템</span>
            </div>
          </div>
        </div>
      </header>

      {/* 메인 - 제품만 집중 */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            지금 가장 핫한 꿀템
          </h1>
          <p className="text-gray-600">
            실사용자 검증 완료 · 최저가 보장
          </p>
        </div>
        
        {productData && <ProductList products={productData.products} />}
      </main>

      {/* 심플 푸터 */}
      <footer className="bg-gray-50 border-t mt-12">
        <div className="max-w-6xl mx-auto px-4 py-6 text-center">
          <p className="text-sm text-gray-500">
            쿠팡 파트너스 활동으로 일정 수수료를 받습니다
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
