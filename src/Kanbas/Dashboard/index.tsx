import { Routes, Route, Navigate } from "react-router";
import Dashboard from "./Dashboard";

export default function What() {
  return (
    <div id="wd-account-screen">
      <table>
        <tr>
          <td valign="top">
            <Dashboard />
          </td>
          <td valign="top">
            <Routes>
              <Route path="/"
                     element={<Navigate to="/Kanbas/Dashboard" />} />
              <Route path="/Signin" element={<Dashboard />} />

            </Routes>
          </td>
        </tr>
      </table>
    </div>
);}
