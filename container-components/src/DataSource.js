import React, { useEffect, useState } from "react";
import axios from "axios";

export default function DataSource({ getDataFunc = () => {}, resourceName,  children }) {
  const [state, setState] = useState(null);

  useEffect(() => {
    (async () => {
      const data = await getDataFunc();
      setState(data);
    })();
  }, [getDataFunc]);
  
  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { [resourceName]: state });
        }

        return child;
      })}
    </>
  );
}
