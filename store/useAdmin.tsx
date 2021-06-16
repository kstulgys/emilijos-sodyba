import create from "zustand";
import { combine } from "zustand/middleware";

export const useAdmin = create(
  combine({ isAdmin: false }, (set, get) => ({
    setIsAdmin: (bool: boolean) => set((state) => ({ isAdmin: bool })),
  })),
);
