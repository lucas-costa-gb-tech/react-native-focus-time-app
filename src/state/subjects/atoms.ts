import { atom } from 'recoil';

export const subjectsAtom = atom({
  key: 'subjectsAtom',
  default: [] as string[],
});
