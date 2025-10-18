export interface Profile {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  coupangLink?: string;
  youtubeLink?: string;
  productName?: string;
  price?: string;
  skills?: string[];
}

export interface ProfileData {
  profiles: Profile[];
}
