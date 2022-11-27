function Landing() {
  return (
    <>
      <div
        className='jumbotron-fluid hero'
        style={{ padding: "2em" }}>
        <div className='container-fluid'>
          <div className='row justify-content-between'>
            <div className='col-sm-6'>
              <h1 className='display-4'>Welcome To Your Future</h1>
              <button type='button'>Button</button>
            </div>
            <div className='col-sm-4'>
              <Login />
            </div>
          </div>
        </div>
      </div>
      <div>
        <Services />
      </div>
      <div>
        <Promos />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
