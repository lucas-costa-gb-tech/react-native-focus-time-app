import { atom } from 'recoil';

import type { SubjectItem } from './types';

export const subjectsAtom = atom<SubjectItem[]>({
  key: 'subjectsAtom',
  default: [],
});
