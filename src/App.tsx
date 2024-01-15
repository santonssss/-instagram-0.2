import AuthLayout from "./_auth/AuthLayout";
import Signinform from "./_auth/forms/SigninForm";
import Signupform from "./_auth/forms/SignupForm";
import { Home } from "./_root/Pages";
import Rootlayout from "./_root/RootLayout";
import "./global.css";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* Public Routes */}
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<Signinform />} />
          <Route path="/sign-up" element={<Signupform />} />
        </Route>
        {/* Private Routes */}
        <Route element={<Rootlayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </main>
  );
};

export default App;
