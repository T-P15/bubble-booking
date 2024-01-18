export interface SettingsType {
  isOpen: boolean;
}

export const initialSettingsState: SettingsType = {
  isOpen: false,
};

export enum settingsActionKind {
    SET_IS_OPEN = 'SET_IS_OPEN'
}

export type SettingsActions = {
    type: settingsActionKind.SET_IS_OPEN, payload: boolean
}


export const settingsReducer = (state: SettingsType, action: SettingsActions) => {
  switch (action.type) {
    case settingsActionKind.SET_IS_OPEN: 
        return {...state, isOpen: action.payload}
    default:
      return state;
  }
};
