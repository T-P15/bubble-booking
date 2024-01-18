import { useContext } from 'react';

import { SettingsContext } from '../providers/SettingsProvider';

function useSettings()  {
  const context = useContext(SettingsContext);

  if (context === undefined) {
    throw new Error("useSettings must be used inside SettingsProvider");
  }

  return context;
}

export default useSettings;