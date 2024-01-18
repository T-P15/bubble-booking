"use client";
import { createContext, Dispatch, ReactNode, useReducer } from "react";
import SettingsModal from "~/components/settings/SettingsModal";

import {
  initialSettingsState,
  SettingsActions,
  settingsReducer,
  SettingsType,
} from "../reducers/SettingsReducer";

interface SettingsContextProps {
  state: SettingsType;
  dispatch: Dispatch<SettingsActions>;
}

interface SettingsProviderProps {
  children: ReactNode;
}

export const SettingsContext = createContext<SettingsContextProps | undefined>(
  undefined,
);

export function SettingsProvider({ children }: SettingsProviderProps) {
  const [state, dispatch] = useReducer(settingsReducer, initialSettingsState);

  return (
    <SettingsContext.Provider value={{ state, dispatch }}>
      {children}
      <SettingsModal />
    </SettingsContext.Provider>
  );
}
