import { Profile } from '../types/profile';

interface ProfileCardProps {
  profile: Profile;
}

function ProfileCard({ profile }: ProfileCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <div className="p-6">
        <div className="flex items-center space-x-4">
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

        <p className="mt-4 text-gray-600 line-clamp-3">{profile.bio}</p>

        {profile.skills && profile.skills.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {profile.skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-indigo-50 text-indigo-700 text-sm rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        )}

        <div className="mt-6 flex space-x-3">
          {profile.github && (
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              GitHub
            </a>
          )}
          {profile.website && (
            <a
              href={profile.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Website
            </a>
          )}
          {profile.email && (
            <a
              href={`mailto:${profile.email}`}
              className="flex-1 text-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              Email
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
