import { atom, selector } from 'recoil';

/**
 * It is the atom to track active index of Tabs, and the default value is 0.
 */
export const activeIndexAtom = atom({
  key: 'activeIndex',
  default: 0,
});

/**
 * It is the atom to track all labels of Tabs, and the default value is [].
 */
export const labelArrayAtom = atom({
  key: 'labelArray',
  default: [],
});

/**
 * It is the derived selector to retrieve active label of Tabs.
 * The value is based on the active index and all labels.
 */
export const activeLabelSelector = selector({
  key: 'accessTypeArray',
  get: ({ get }) => {
    const activeIndex = get(activeIndexAtom);
    const labelArray = get(labelArrayAtom);
    return labelArray[activeIndex];
  },
});
