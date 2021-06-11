import styles from './Init.module.css';

import { MarksSelectedEvent, TableauEventHandlerFn, TableauWorksheetEvent } from '@tableau/extensions-api-types';
import { useEffect } from 'react';

const SHEET_NAME = 'Product Detail Sheet';


export const Init = () => {

  const toJSON = (obj: any) => {
    const jsonObj = Object.assign({}, obj);
    const proto = Object.getPrototypeOf(obj);
    for (const key of Object.getOwnPropertyNames(proto)) {
        const desc = Object.getOwnPropertyDescriptor(proto, key);
        const hasGetter = desc && typeof desc.get === 'function';
        if (hasGetter) {
            jsonObj[key] = obj[key];
        }
    }
    return jsonObj;
}



  const handleSelection: TableauEventHandlerFn = async (event: any) => {

    const url = `.${window.location.pathname}/update`;
    
    const marks = await (event as MarksSelectedEvent).getMarksAsync();

    const dataTable = marks.data[0];
    
    if (dataTable.totalRowCount === 1) {
      try {
        let closePayload = await tableau.extensions.ui
          .displayDialogAsync(url, JSON.stringify(toJSON(dataTable)), {width: 400, height: 670});
    
        if (closePayload) {
          const worksheet = (event as TableauWorksheetEvent).worksheet;
          await worksheet.clearSelectedMarksAsync();
          const dataSources = await (event as TableauWorksheetEvent).worksheet.getDataSourcesAsync();
          dataSources[0].refreshAsync();
        } else {
          throw new Error('Error while loading data source.');
        }
      } catch(e) {
        console.warn(e);
      }
    }

  };

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

      const unregisterHandler = worksheet.addEventListener(tableau.TableauEventType.MarkSelectionChanged, handleSelection);
      
      return () => unregisterHandler();
    });
  }, []);


  return <p className={styles.InitFeedback}>Initialized</p>;
};

export default Init;
