import useSettings from "~/utils/hooks/useSettings";
import { settingsActionKind } from "~/utils/reducers/SettingsReducer";

import {
  Button,
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
    <Dialog
      open={state.isOpen}
      onClose={handleCloseDialog}
      fullWidth
      maxWidth="md"
    >
      <DialogTitle>Settings</DialogTitle>
      <DialogContent>
        <SettingsModalContent />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseDialog}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}

export default SettingsModal;
