import { atom } from "jotai";

export const clockAtom = atom({
  light: false,
  lastUpdate: 0
});
