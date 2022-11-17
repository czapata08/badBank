function Deposit() {
  const [deposit, setDeposit] = React.useState(false);
  const [amount, setAmount] = React.useState(null);
  const { userName } = React.useContext(UserContext);
  const { name, balance } = userName[0];
  const { status, setStatus } = React.useState("")


  function submitDeposit() {
    //increase user balance by deposit amount
    if (amount <= 0 || typeof amount != "number" || Math.sign(amount) != 1) {
      setDeposit(false);
      setStatus(`please insert a valid amount`);
    }
    if (amount > 0) {
      setDeposit(true);
      userName[0].balance += amount;
      alert(`${name}, Your Deposit Has Been Completed`);
    }
  }

  return (
    <Card
      bgcolor="secondary"
      header="Deposit Form"
      status={status}
      body={
        <>
          <Card bgcolor="warning" body={<h4>Balance ${balance}</h4>} />
          <Card
            bgcolor="dark"
            header="Deposit"
            body={
              <>
              <input
                type="number"
                id="deposit"
                className="form-control"
                placeholder="$"
                onChange={(e) => setAmount(Number(e.currentTarget.value))}/>
                <br />
              <button
            type="submit"
            className="btn btn-light"
            onClick={submitDeposit}
            size="lg"
            disabled={amount <= 0 ? true : false }
          >Submit</button>
              </>
            }
          />
        </>
      }
    />
  );
}
