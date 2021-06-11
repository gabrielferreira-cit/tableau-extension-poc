import styles from "./Update.module.css";

import { useEffect, useState } from "react";

export const Init = () => {

  const [dataTable, setDataTable] = useState<any>();

  const closeDialog = () => {
    tableau.extensions.ui.closeDialog("Closed Successful!");
  };

  useEffect(() => {
    (async () => {
      const payload = await tableau.extensions.initializeDialogAsync();
      setDataTable(JSON.parse(payload));
    })();
  }, []);

  const buildForm = (dataTable: any) => {
    const columns = dataTable.columns.slice(0, dataTable.columns.length - 2);
    const values = dataTable.data[0].slice(0, dataTable.columns.length - 2);

    const [name, value] = dataTable.data[0].slice(dataTable.columns.length - 2);

    return (
      <form onSubmit={closeDialog}>
        <ul className={styles.FlexOuter}>
          {columns.map((col: any, i: number) => (
            <li key={i}>
              <label htmlFor={`customer-input-${i}`}>{col._fieldName}</label>
              <input
                type="text"
                id={`customer-input-${i}`}
                defaultValue={values[i]._value}
                disabled={col._fieldName === 'Order ID'}
              />
            </li>
          ))}
          <li>
            <label htmlFor="selected-input">{name._formattedValue}</label>
            <input
              type="text"
              id="selected-input"
              defaultValue={value._value.toFixed(2)}
            />
          </li>
          <li>
            <button type="submit">Submit</button>
          </li>
        </ul>
      </form>
    )
  }

  return (
    <section className={styles.UpdateSection}>
      { dataTable ? buildForm(dataTable) : null }
    </section>
  );
};

export default Init;
