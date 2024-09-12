import {StoreSlice} from '@zustand';
import {IUser} from '@services/models';

export interface UserState {
  userData: IUser | null;
  setUserData: (user: IUser) => void;
  resetUserData: () => void;
}

const createUserSlice: StoreSlice<UserState> = (set: any) => ({
  userData: null,
  setUserData: (user: IUser) => set({userData: user}),
  resetUserData: () => set({userData: null}),
});

export default createUserSlice;
