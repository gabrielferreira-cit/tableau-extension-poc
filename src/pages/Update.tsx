import { useEffect } from "react";

export const Init = () => {

  const closeDialog = () => {
    tableau.extensions.ui.closeDialog('Closed Successful!');
  }

  useEffect(() => {
    tableau.extensions.initializeDialogAsync();
  }, []);

  return (
    <>
      <h1>Hello from Update Window!</h1>
      <button type="button" onClick={closeDialog}>Close</button>
    </>
  )
};

export default Init;
