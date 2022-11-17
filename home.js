function Home() {
  return (
    <Card
      txtcolor="black"
      header="BadBank Landing Module"
      title="Welcome to the bank"
      text="You can move around using the navigation bar."
      body={
        <>
          <img src="bank.png" className="img-fluid" alt="Responsive image" />
          <div className="container py-2">
            <div className="row">
              <div className="col">
                <Link className="btn btn-dark btn-md" to="/createaccount/">
                  Create Account
                </Link>
              </div>
              <div className="col">
                <Link className="btn btn-dark btn-md" to="/login/">
                  User Login
                </Link>
              </div>
            </div>
          </div>
        </>
      }
    />
  );
}
