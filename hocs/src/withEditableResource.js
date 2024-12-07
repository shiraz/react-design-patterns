import React, { useState, useEffect } from 'react';
import axios from 'axios';

const capitalize = (str) => {
  if (typeof str !== 'string') return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const withEditableResource = (Component, resourceName, resourcePath) => {
  return (props) => {
    const [originalData, setOriginalData] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {
      (async () => {
        const response = await axios.get(resourcePath);
        setOriginalData(response.data);
        setData(response.data);
      })();
    }, []);

    const onChange = (changes) => {
      setData({ ...data, ...changes });
    };

    const onSave = async () => {
      const response = await axios.post(resourcePath, { [resourceName]: data });
      setOriginalData(response.data);
      setData(response.data);
    };

    const onReset = () => {
      setData(originalData);
    };

    const resourceProps = {
      [resourceName]: data,
      [`onChange${capitalize(resourceName)}`]: onChange,
      [`onReset${capitalize(resourceName)}`]: onReset,
      [`onSave${capitalize(resourceName)}`]: onSave,
    };

    return <Component {...props} {...resourceProps} />;
  };
};
