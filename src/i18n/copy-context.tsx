"use client";

import { createContext, useContext, type ReactNode } from "react";
import type { Dictionary } from "@/i18n/dictionaries/en";

const CopyContext = createContext<Dictionary | null>(null);

export function CopyProvider({
  dict,
  children,
}: {
  dict: Dictionary;
  children: ReactNode;
}) {
  return <CopyContext.Provider value={dict}>{children}</CopyContext.Provider>;
}

export function useCopy(): Dictionary {
  const dict = useContext(CopyContext);
  if (!dict) throw new Error("useCopy must be used inside CopyProvider");
  return dict;
}
