import { useRouteError } from "react-router-dom";

import { getVal } from "./../utils/helper";

function Error() {
  const error: unknown = useRouteError();
  console.log(error);

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{getVal(error, ["data", "message"])}</p>
    </div>
  );
}

export default Error;
