import { useState } from 'react';
import ProfileCard from './ProfileCard';
import { Profile } from '../types/profile';

interface ProfileListProps {
  profiles: Profile[];
}

function ProfileList({ profiles }: ProfileListProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProfiles = profiles.filter(profile =>
    profile.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    profile.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
    profile.bio.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (profile.productName && profile.productName.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (profile.skills && profile.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase())))
  );

  return (
    <div>
      <div className="mb-8">
        <div className="relative">
          <input
            type="text"
            placeholder="꿀템 검색... (제품명, 카테고리, 큐레이터)"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 pl-12 rounded-lg border-2 border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent bg-white/90 backdrop-blur-sm"
          />
          <svg
            className="absolute left-4 top-3.5 h-5 w-5 text-yellow-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      {filteredProfiles.length === 0 ? (
        <div className="text-center py-12 bg-white/10 backdrop-blur-sm rounded-lg">
          <p className="text-yellow-200 text-lg">🔍 검색 결과가 없습니다.</p>
          <p className="text-gray-400 mt-2">다른 키워드로 검색해보세요!</p>
        </div>
      ) : (
        <>
          <div className="mb-4 text-yellow-300 font-semibold">
            ✨ 총 {filteredProfiles.length}개의 꿀템 발견!
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProfiles.map(profile => (
              <ProfileCard key={profile.id} profile={profile} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default ProfileList;
