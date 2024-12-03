import axios from "axios";
import React from "react";

import CurrentUserLoader from "./CurrentUserLoader";
import DataSource from "./DataSource";
import { ProductInfo } from "./ProductInfo";
import { UserInfo } from "./UserInfo";
import ResourceLoader from "./ResourceLoader";
import UserLoader from "./UserLoader";

const getServerData = (url) => async () => {
  const response = await axios.get(url);
  return response.data;
};

const getLocalStorageData = key => () => {
	const data = localStorage.getItem(key);
	return data;
}

const Text = ({ message }) => <h1>{message}</h1>
function App() {
  return (
    <>
      <DataSource getDataFunc={getServerData("/users/123")} resourceName="user">
        <UserInfo />
      </DataSource>
      {/* <DataSource
        getDataFunc={getServerData("/products/123")}
        resourceName="product"
      >
        <ProductInfo />
      </DataSource> */}
	  <DataSource getDataFunc={getLocalStorageData("message")} resourceName="message">
		<Text />
	  </DataSource>
    </>
  );
}

export default App;
