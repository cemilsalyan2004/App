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
  icon: string;
}
