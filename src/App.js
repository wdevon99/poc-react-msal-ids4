import { useIsAuthenticated, useMsal } from "@azure/msal-react"

const App = () => {
  const { instance, accounts, inProgress } = useMsal();
  const isAuthenticated = useIsAuthenticated();

  const handleLogin = () => {
    console.log('instance ', instance)
    console.log('isAuthenticated ', isAuthenticated)
    console.log('accounts ', accounts)

    instance.loginRedirect({
      scopes: ["profile", "openid"],
    })
  }

  return (
    <div className="App">
      <h1>MSAL React IDS Demo</h1>
      <button onClick={handleLogin}>Login</button>

      <p>Anyone can see this paragraph.</p>
      {isAuthenticated && (
        <p>At least one account is signed in!</p>
      )}
      {!isAuthenticated && (
        <p>No users are signed in!</p>
      )}
    </div>
  );
}

export default App;
