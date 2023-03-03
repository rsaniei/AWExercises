import React, { useEffect } from "react";
import Quiz from "./pages/Quiz";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Header from "./components/Header";
import AuthenticationProvider from "./context/AuthenticationProvider";
import RequiredAuth from "./RequiredAuth";
import Alert from "@mui/material/Alert";
import { useLoader } from "./context/LoadContext";
import AutoComplete from "./components/AutoComplete";
import Search from "./pages/Search";

export default function App() {
  const generalContext = useLoader();
  const isLoading = generalContext?.isLoading;

  useEffect(() => {
    const errorTimeOut = setTimeout(() => {
      generalContext?.setError(null);
    }, 3000);
    return () => {
      clearTimeout(errorTimeOut);
    };
  }, [generalContext]);
  return (
    <div className="container">
      <AuthenticationProvider>
        {!generalContext?.error && isLoading ? (
          <div>Loading Data...</div>
        ) : (
          <Router>
            <Header />
            <Routes>
              <Route
                path="/quiz"
                element={
                  <RequiredAuth>
                    <Quiz />
                  </RequiredAuth>
                }
              />
              <Route
                path="search"
                element={<Search />}
                //   <AutoComplete
                //     suggestions={[
                //       "Alabama",
                //       "Alaska",
                //       "American Samoa",
                //       "Arizona",
                //       "Arkansas",
                //       "California",
                //       "Colorado",
                //       "Connecticut",
                //       "Delaware",
                //       "District Of Columbia",
                //       "Federated States Of Micronesia",
                //       "Florida",
                //       "Georgia",
                //       "Guam",
                //       "Hawaii",
                //       "Idaho",
                //       "Illinois",
                //       "Indiana",
                //       "Iowa",
                //       "Kansas",
                //       "Kentucky",
                //       "Louisiana",
                //       "Maine",
                //       "Marshall Islands",
                //       "Maryland",
                //       "Massachusetts",
                //       "Michigan",
                //       "Minnesota",
                //       "Mississippi",
                //       "Missouri",
                //       "Montana",
                //       "Nebraska",
                //       "Nevada",
                //       "New Hampshire",
                //       "New Jersey",
                //       "New Mexico",
                //       "New York",
                //       "North Carolina",
                //       "North Dakota",
                //       "Northern Mariana Islands",
                //       "Ohio",
                //       "Oklahoma",
                //       "Oregon",
                //       "Palau",
                //       "Pennsylvania",
                //       "Puerto Rico",
                //       "Rhode Island",
                //       "South Carolina",
                //       "South Dakota",
                //       "Tennessee",
                //       "Texas",
                //       "Utah",
                //       "Vermont",
                //       "Virgin Islands",
                //       "Virginia",
                //       "Washington",
                //       "West Virginia",
                //       "Wisconsin",
                //       "Wyoming",
                //     ]}
                //   />
                // }
              ></Route>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </Router>
        )}
      </AuthenticationProvider>
      {generalContext?.error && (
        <Alert severity="error">{generalContext?.error}</Alert>
      )}
    </div>
  );
}
