import { initialUserState } from '../store/userSlice';

export interface RootState {
  modalState: {
    modal: boolean;
  };
  userState: initialUserState;
}

export interface category {
  _id: string;
  type: string;
  icon?: string;
}

export interface Profile {
  _id: string;
  userName: string;
  email: string;
  image: string;
}

export interface Post {
  _id: string;
  profile: Profile;
  number: number;
  showNumber: boolean;
  poster: string;
  image: string[];
  price: number;
  desc: string;
  category: string;
  city: string;
  created: Date;
}
