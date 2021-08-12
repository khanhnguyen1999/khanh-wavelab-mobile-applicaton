import React from 'react';
import { Route } from 'react-router-dom';

// material core
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Header from 'components/Header';
import NavBar from 'components/NavBar';

// containers
import Auth from 'containers/Auth';
import ErrorBundary from 'containers/ErrorBoundary';

// routes
import routes from 'routes';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  }),
);


function Dashboard() {
  const classes = useStyles();

  return (
    <Auth>
      <CssBaseline />

      <Header />
      <NavBar />

      <main className={classes.content}>
        <div className={classes.toolbar} />
        <ErrorBundary>
          {routes.map((route, idx) => (
            <Route key={idx} path={route.path} exact={route.exact} component={route.component} />
          ))}
        </ErrorBundary>
      </main>
    </Auth>
  )
}

export default Dashboard
