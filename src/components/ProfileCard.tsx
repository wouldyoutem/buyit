import { Profile } from '../types/profile';

interface ProfileCardProps {
  profile: Profile;
}

function ProfileCard({ profile }: ProfileCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <div className="p-6">
        <div className="flex items-center space-x-4 mb-4">
          <img
            src={profile.avatar}
            alt={profile.name}
            className="w-20 h-20 rounded-full object-cover border-4 border-indigo-100"
          />
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900">{profile.name}</h3>
            <p className="text-indigo-600 font-medium">{profile.role}</p>
          </div>
        </div>

        {profile.productName && (
          <div className="mb-3 p-3 bg-yellow-50 rounded-lg border-2 border-yellow-200">
            <p className="text-sm font-semibold text-yellow-800">🌟 추천 꿀템</p>
            <p className="text-lg font-bold text-gray-900">{profile.productName}</p>
            {profile.price && (
              <p className="text-2xl font-bold text-red-600 mt-1">{profile.price}</p>
            )}
          </div>
        )}

        <p className="mt-3 text-gray-600 line-clamp-3">{profile.bio}</p>

        {profile.skills && profile.skills.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {profile.skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-indigo-50 text-indigo-700 text-sm rounded-full"
              >
                #{skill}
              </span>
            ))}
          </div>
        )}

        <div className="mt-6 flex space-x-3">
          {profile.coupangLink && (
            <a
              href={profile.coupangLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all font-bold shadow-md"
            >
              🛒 쿠팡에서 보기
            </a>
          )}
          {profile.youtubeLink && (
            <a
              href={profile.youtubeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-bold shadow-md"
            >
              ▶️ 유튜브 리뷰
            </a>
          )}
        </div>

        <p className="mt-4 text-xs text-gray-500 text-center">
          * 쿠팡 파트너스 활동으로 일정액의 수수료를 제공받습니다
        </p>
      </div>
    </div>
  );
}

export default ProfileCard;
