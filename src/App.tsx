import { useState, useEffect } from 'react';
import ProfileList from './components/ProfileList';
import { ProfileData } from './types/profile';

function App() {
  const [profileData, setProfileData] = useState<ProfileData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/wouldyoutem/profiles/profiles.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('프로필 데이터를 불러올 수 없습니다.');
        }
        return response.json();
      })
      .then(data => {
        setProfileData(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-400"></div>
          <p className="mt-4 text-yellow-200">우주 탐험 중...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center">
        <div className="text-center bg-white p-8 rounded-lg shadow-lg">
          <p className="text-red-600 text-lg">{error}</p>
          <p className="mt-2 text-gray-600">profiles.json 파일을 확인해주세요.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <header className="bg-gray-900/80 backdrop-blur-sm shadow-lg border-b-2 border-yellow-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center space-x-4">
            <div className="text-5xl">🪐</div>
            <div>
              <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500">
                우주꿀템
              </h1>
              <p className="mt-1 text-yellow-200">Would you buy it? 우주 끝까지 찾아온 진짜 꿀템들!</p>
            </div>
          </div>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 text-center">
          <p className="text-yellow-300 text-lg">
            ✨ 우주 탐험가들이 직접 사용하고 추천하는 가성비 꿀템! ✨
          </p>
        </div>
        {profileData && <ProfileList profiles={profileData.profiles} />}
      </main>

      <footer className="bg-gray-900/80 backdrop-blur-sm mt-12 border-t-2 border-yellow-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center">
          <p className="text-yellow-200 mb-2">
            🌟 이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.
          </p>
          <p className="text-gray-400 text-sm">© 2024 우주꿀템. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
