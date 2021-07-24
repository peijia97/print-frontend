import React, { Suspense } from "react";
import Fade from "@material-ui/core/Fade";
import { Redirect, Route, Switch } from "react-router-dom";
import { Background } from "components/common/Background/Background";
import CircularProgress from "@material-ui/core/CircularProgress";

// routes config
import routes from "routes";

const loading = (
  <Background style={{ textAlign: "center", height: "100vh" }} color="grey100">
    <CircularProgress color="primary" className="suspense-spinner" />
  </Background>
);

const TheContent = () => {
  return (
    <div>
      <Suspense fallback={loading}>
        <Switch>
          {routes.map((route, idx) => {
            return (
              route.component && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={props => (
                    <Fade>
                      <route.component {...props} />
                    </Fade>
                  )}
                />
              )
            );
          })}
          <Redirect from="/" to="/" />
        </Switch>
      </Suspense>
    </div>
  );
};

export default React.memo(TheContent);
