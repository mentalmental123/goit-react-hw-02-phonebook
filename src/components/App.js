// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";

// import { fetchContact } from "../redux/operations";
// import { selectError, selectIsLoading } from "../redux/selectors";

// import css from "./app.module.css";
// import Search from "./Filter/Filter";
// import Contacts from "./ContactList/ContactList";
// import Form from "./ContactForm/ContactForm";

// function App() {
//   const { items } = useSelector((state) => state.contacts);
//   const dispatch = useDispatch();
//   const isLoading = useSelector(selectIsLoading) || null;
//   const error = useSelector(selectError);

//   useEffect(() => {
//     dispatch(fetchContact());
//   }, [dispatch]);

//   return (
//     <div className={css["container"]}>
//       <h1>Phonebook</h1>
//       <Form></Form>
//       <div>
//         {items?.length === 0 ? (
//           <p>There is nothing</p>
//         ) : (
//           <>
//             <h2>Contacts</h2>
//             <Search></Search>
//             <Contacts />
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;

import { useEffect, lazy } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import { PrivateRoute } from "./PrivateRoute";
import { RestrictedRoute } from "./RestrictedRoute";
import { refreshUser } from "../redux/auth/operation";
import { useAuth } from "../hooks/useAuth";

const HomePage = lazy(() => import("../pages/Home"));
const RegisterPage = lazy(() => import("../pages/Register"));
const LoginPage = lazy(() => import("../pages/Login"));
const ContactsPage = lazy(() => import("../pages/Contacts"));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
