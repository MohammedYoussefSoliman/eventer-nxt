import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persister } from "@/state";
import AppProvider from "./AppProvider";

type LayoutType = { children: React.ReactNode };

export default function withAppProviders<T extends {}>(
  WrappedComponent: React.ComponentType<T>,
  Layout?: React.ComponentType<LayoutType>
) {
  function Wrapper(props: T) {
    return (
      <ReduxProvider store={store}>
        <PersistGate
          loading={<span>loading persisted Data</span>}
          persistor={persister}
        >
          <Router>
            <AppProvider>
              {Layout ? (
                <Layout>
                  <WrappedComponent {...props} />
                </Layout>
              ) : (
                <WrappedComponent {...props} />
              )}
            </AppProvider>
          </Router>
        </PersistGate>
      </ReduxProvider>
    );
  }

  return Wrapper;
}
