import React from "react";

import type { UserMFE } from "mfe-shared";

const MyUserMFE: UserMFE = ({ user }) => {
  return <div>User: {user}</div>;
};

export default MyUserMFE;
