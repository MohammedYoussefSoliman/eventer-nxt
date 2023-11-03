import withAppProviders from "@/AppProvider/withAppProvider";
import Routes from "@/routes";

const Application = withAppProviders(Routes);

function App() {
  return <Application />;
}

export default App;
