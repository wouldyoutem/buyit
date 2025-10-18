export interface Profile {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  github?: string;
  website?: string;
  email?: string;
  skills?: string[];
}

export interface ProfileData {
  profiles: Profile[];
}
