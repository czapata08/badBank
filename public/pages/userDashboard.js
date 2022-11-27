function UserDashboard() {
  const UserNav = () => {
    //bank operations
    //pay and trasnfer
    //deposit
    //help and live chat
    return <div className='container-fluid'></div>;
  };

  const BankAccounts = () => {
    //account.number
    //acccount.balance
    //acount.type
    //OnClick(accessAccount)
    return (
      <>
        <div
          className='card py-2'
          style={{ width: "100" }}>
          <div className='card-body'>
            <h5 className='card-title'>Special title treatment</h5>
            <p className='card-text'>
              With supsdsdsdscc al lead-in to additional content.
            </p>
            <a
              href='#'
              className='btn btn-primary'>
              Go somewhere
            </a>
          </div>
        </div>
      </>
    );
  };

  const CreditCards = () => {
    //creditCard.number
    //creditCard.balance
    //creditCard.transactions
    //Onclick(accessCard)
    //deposit into card from main account
    return (
      <>
        <div
          className='card py-2'
          style={{ width: "100" }}>
          <div className='list-group list-group-flush'>
            <li className='list-group-item'>Cras justo odio</li>
            <li className='list-group-item'>Dapibus ac facilisis in</li>
            <li className='list-group-item'>Vestibulum at eros</li>
          </div>
        </div>
      </>
    );
  };

  const Rewards = () => {
    //let transactions = creditCard.transactions
    //return totalcreditCard transactions / 0.05% cashback rewards
    return (
      <>
        <div
          className='card'
          style={{ width: "10rem" }}>
          <h5 className='card-header'>Featured</h5>
          <div className='card-body'>
            <h5 className='card-title'>Special title treatment</h5>
            <p className='card-text'>
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a
              href='#'
              className='btn btn-primary'>
              Go somewhere
            </a>
          </div>
        </div>
      </>
    );
  };

  const Support = () => {
    //contact form
    //livechat
    return (
      <>
        <div
          className='card'
          style={{ width: "10rem" }}>
          <div className='card-header'>Featured</div>
          <div className='list-group list-group-flush'>
            <li className='list-group-item'>Cras justo odio</li>
            <li className='list-group-item'>Dapibus ac facilisis in</li>
            <li className='list-group-item'>Vestibulum at eros</li>
          </div>
        </div>
      </>
    );
  };

  const SideColumn = () => {
    return (
      <>
        <div className='col-4 side-col'>
          <div className='row justify-content-center'>
            <Rewards classname='col' />
            <Support classname='col' />
          </div>
        </div>
      </>
    );
  };

  const MainColumn = () => {
    return (
      <>
        <div className='col-8 main-col'>
          <BankAccounts />
          <CreditCards />
        </div>
      </>
    );
  };

  return (
    <div className='container'>
      <div className='row justify-content-center'>
        <UserNav />
        <MainColumn />
        <SideColumn />
      </div>
    </div>
  );
}
