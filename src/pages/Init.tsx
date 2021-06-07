import { TableauEvent, TableauWorksheetEvent } from '@tableau/extensions-api-types';
import { useEffect } from 'react';

const SHEET_NAME = 'All Team Memeber Engagement';

export const Init = () => {

  useEffect(() => {
    tableau.extensions.initializeAsync().then(() => {
      console.info('PoC Extension Initialized!');

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
        async (event: TableauEvent) => {

          const url = `.${window.location.pathname}update`;

          let closePayload = await tableau.extensions.ui.displayDialogAsync(url, '', {width: 600, height: 450});

          if (closePayload) {
            const dataSources = await (event as TableauWorksheetEvent).worksheet.getDataSourcesAsync();
            dataSources[0].refreshAsync();
          } else {
            throw new Error('Error while loading data source.');
          }
        }
      );      
    });
  }, []);


  return <h1>Initialized</h1>;
};

export default Init;
