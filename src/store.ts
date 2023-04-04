import { create } from "zustand";
import type ICharacter from "./types/character";

export interface ICharacterStore {
  initialCharacters: ICharacter[];
  characters: ICharacter[];
  character: ICharacter | null;
  setInitialCharacters: (characters: ICharacter[]) => void;
  setCharacters: (characters: ICharacter[]) => void;
  setCharacter: (character: ICharacter) => void;
}

export const useCharacterStore = create<ICharacterStore>((set) => ({
  initialCharacters: [],
  characters: [],
  character: null,
  setInitialCharacters: (characters: ICharacter[]) => set({ initialCharacters: characters }),
  setCharacters: (characters: ICharacter[]) => set({ characters }),
  setCharacter: (character: ICharacter) => set({ character }),
}));