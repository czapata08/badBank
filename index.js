//render component
const UserContext = React.createContext({
  userName: "",
  setUserName: () => {},
});

function Spa() {
  const users = [
    {
      name: "abel",
      email: "abel@mit.edu",
      password: "secret",
      balance: 100,
    },
    {
      name: "abel2",
      email: "abel2@mit.edu",
      password: "secret",
      balance: 100,
    },
    {
      name: "carlos",
      email: "cazb1992@gmail.com",
      password: "secret",
      balance: 1000,
    },
  ];
  const [userName, setUserName] = React.useState(users);
  console.log(`username is ${JSON.stringify(userName)}`);
  //prevents unecessary render //Only renders when data changes
  const value = React.useMemo(() => ({ userName, setUserName }), [userName]);

  return (
    <HashRouter>
      <NavBar />
      <UserContext.Provider value={value}>
        <div style={{ padding: "20px" }}>
          <Route
            path='/'
            exact
            component={Home}
          />
          <Route
            path='/CreateAccount/'
            component={CreateAccount}
          />
          <Route
            path='/login/'
            component={Login}
          />
          <Route
            path='/deposit/'
            component={Deposit}
          />
          <Route
            path='/withdraw/'
            component={Withdraw}
          />
          <Route
            path='/balance/'
            component={Balance}
          />
          <Route
            path='/alldata/'
            // component={AllData}
            component={() => {
              <div style={{ padding: "20px" }}>
                <AllData />
                <Login />
                <Deposit />
              </div>;
            }}
          />
        </div>
      </UserContext.Provider>
    </HashRouter>
  );
}

ReactDOM.render(<Spa />, document.getElementById("root"));
