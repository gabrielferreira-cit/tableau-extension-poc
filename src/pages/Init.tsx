import { useEffect } from 'react';

const SHEET_NAME = 'All Team Memeber Engagement';

export const Init = () => {

  useEffect(() => {
    tableau.extensions.initializeAsync().then(() => {
      const dashboardContent = tableau.extensions.dashboardContent;

      if (!dashboardContent) {
        throw new Error('Couldn\'t load the dashboard content.');
      }

      const worksheets = dashboardContent.dashboard.worksheets;

      if (!worksheets) {
        throw new Error('Couldn\'t load any worksheet.');
      }
      
      const worksheet = worksheets.find(ws => ws.name === SHEET_NAME);

      if (!worksheet) {
        throw new Error(`Can't find the worksheet named "${SHEET_NAME}"`);
      }

      const unregisterHandler = worksheet.addEventListener(
        tableau.TableauEventType.MarkSelectionChanged,
        () => {
          console.log(`It's working :)`);
          alert('Working');
        }
      );      
    });
  }, []);


  return <h1>Initialized</h1>;
};

export default Init;
