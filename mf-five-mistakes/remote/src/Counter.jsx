import React, { useState } from "react";

export default function Counter({ app }) {
  const [count, setCount] = useState(0);

  return (
    <div className="border-2 border-blue-500 p-5 rounded-xl">
      <div>{app.name}</div>
      <div>Count: {count}</div>
      <div>
        <button onClick={() => setCount(count + 1)}>Add To Count</button>
      </div>
    </div>
  );
}
