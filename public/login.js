function Login() {
  //TODO
  // validate form inputs
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [balance, setBalance] = React.useState(0);
  const [show, setShow] = React.useState(true);
  const { userName, setUserName } = React.useContext(UserContext);

  function checkCredentials() {
    const user = userName.filter(
      (item) => item.email == email && item.password == password
    );
    user.map((item) => {
      if (email == item.email && password == item.password) {
        setUserName(user);
        setShow(false);
        setBalance(item.balance);
        alert(`Welcome Back ${item.name}`);
      } else {
        alert(`credentials not found`);
      }
    });
  }

  return (
    //create login form
    <Card
      bgcolor='secondary'
      header='Login'
      body={
        show ? (
          <>
            <InputForm
              email={true}
              password={true}
              handle={true}
            />
          </>
        ) : (
          <>
            <h3>Acc Overview</h3>
            <Card
              bgcolor='success'
              body={
                <>
                  <h3>Balance ${balance}</h3>
                </>
              }
            />
            <div className='container'>
              <div className='row'>
                <div className='col'>
                  <Link
                    className='btn btn-light'
                    to='/deposit/'>
                    Deposit
                  </Link>
                </div>
                <div className='col'>
                  <Link
                    className='btn btn-light'
                    to='/withdraw/'>
                    Withdraw
                  </Link>
                </div>
              </div>
            </div>
          </>
        )
      }
    />
  );
}
