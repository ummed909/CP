import { Outlet } from "react-router-dom";
import Main from "./Pages/Main/Main";
function RootLayout() {
  return (
    <div>
      <h1>header</h1>
      <Main/>
      <Outlet />
    </div>
  );
}

export default RootLayout;
