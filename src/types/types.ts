import { initialUserState } from '../store/userSlice';

export interface RootState {
  modalState: {
    modal: boolean;
  };
  userState: initialUserState;
}
