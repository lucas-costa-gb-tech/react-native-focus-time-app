import { atom } from 'recoil';

import type { SubjectItem } from './types';

export const subjectsAtom = atom({
  key: 'subjectsAtom',
  default: [] as SubjectItem[],
});
