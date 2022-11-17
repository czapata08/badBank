function Withdraw() {
  const [withdraw, setWithdraw] = React.useState(false);
  const [amount, setAmount] = React.useState(null);
  const { userName } = React.useContext(UserContext);
  const { name, balance } = userName[0];
  const [status, setStatus] = React.useState("");

  function submitWithdraw() {
    //increase user balance by Withdraw amount
    if (amount <= 0) return;
    if (amount > balance) {
      return (
          setStatus(`Error: ${name.toUpperCase()}, withdraw amount cannot be greater than balance`)
      );
    }
    if (amount > 0) {
      setWithdraw(true);
      userName[0].balance -= amount;
      alert(`${name}, Your Withdraw Has Been Completed`);
    }
  }

  return (
    <Card
      bgcolor="secondary"
      header="Withdraw Form"
      status={status}
      body={
        <>
          <Card bgcolor="warning" body={<h4>Balance ${balance}</h4>} />
          <Card
            bgcolor="dark"
            header="Withdraw"
            body={
              <>
              <div className="stack stack-horizontal"></div>
                <input
                  type="number"
                  id="withdraw"
                  className="form-control"
                  placeholder="$"
                  onChange={(e) => setAmount(Number(e.currentTarget.value))}
                />
                <br />
                <button
                  type="submit"
                  className="btn btn-light"
                  onClick={submitWithdraw}
                  size="lg"
                  disabled={amount <= 0 && amount < balance && typeof(amount) !== "number" ? true : false}
                >
                  Submit
                </button>
              </>
            }
          />
        </>
      }
    />
  );
}

