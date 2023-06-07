import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  routerNoNeedLogin,
  privateRouters,
  publicRouter,
} from "./router/index.jsx";
import DefaultLayout from "./layout/DefaultLayout";
import { useSelector } from "react-redux";


function App() {
  const user = useSelector(state=>state.auth.login.currentUser)
  return (
    <Router>
      <Routes>
          <Route>
            {user&&privateRouters?.map((item, index) => {
              let Page = item.component;
              let Layout = item.layout || DefaultLayout;
              return (
                <Route
                  key={index}
                  path={item.part}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                />
              );
            })}
          </Route>

          <Route>
            {publicRouter.map((item, index) => {
              let Page = item.component;
              let Layout = item.layout || DefaultLayout;
              return (
                <Route
                  key={index}
                  path={item.part}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                />
              );
            })}
          </Route>

        {routerNoNeedLogin.map((item, index) => {
          let Page = item.component;
          let Layout = item.layout || DefaultLayout;
          return (
            <Route
              key={index}
              path={item.part}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </Router>
  );
}

export default App;
