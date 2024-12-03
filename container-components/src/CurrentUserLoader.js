import React, { useEffect, useState } from "react";
import axios from "axios";

export default function CurrentUserLoader({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get("/current-user");
      const currentUser = response.data;
      setUser(currentUser);
    })();
  }, []);
  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { user });
        }

        return child;
      })}
    </>
  );
}
