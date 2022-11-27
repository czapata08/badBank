function CreateAccount() {
  return (
    <Card
      bgcolor='primary'
      header='Create Account'
      body={
        <InputForm
          email={true}
          password={true}
          address={true}
          zip={true}
          firstname={true}
          lastname={true}
          balance={true}
          handle={true}
        />
      }
    />
  );
}
