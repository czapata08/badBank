function Balance() {
  const { userName, setUserName } = React.useContext(UserContext);
  const { name, balance } = userName[0];
  return (
    <Card
      bgcolor="secondary"
      header="Balance Form"
      body={
        <>
          <Card bgcolor="dark" header="Balance" body={<h1>${balance}</h1>} />
          <br />
          <div className="container">
            <div className="row">
              <div className="col">
                <Link className="btn btn-light" to="/deposit/">
                  Deposit
                </Link>
              </div>
              <div className="col">
                <Link className="btn btn-light" to="/withdraw/">
                  Withdraw
                </Link>
              </div>
            </div>
          </div>
        </>
      }
    />
  );
}
