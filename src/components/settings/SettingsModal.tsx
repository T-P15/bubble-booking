import useSettings from "~/utils/hooks/useSettings";
import { settingsActionKind } from "~/utils/reducers/SettingsReducer";

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

import SettingsModalContent from "./SettingsModalContent";

function SettingsModal() {
  const { state, dispatch } = useSettings();

  const handleCloseDialog = () => {
    dispatch({ type: settingsActionKind.SET_IS_OPEN, payload: false });
  };

  return (
    <Dialog open={state.isOpen} onClose={handleCloseDialog}>
      <DialogTitle>Settings</DialogTitle>
      <DialogContent>
        <SettingsModalContent />
      </DialogContent>
      <DialogActions>Close button</DialogActions>
    </Dialog>
  );
}

export default SettingsModal;
