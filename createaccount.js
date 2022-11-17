function CreateAccount() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { userName, setUserName } = React.useContext(UserContext);

  function validate(field, test, label) {
    //field is
    if (field.match(test) || label == "password" && field.length >= 8) {
      setStatus(`Congrats ${name}, your account has been created`);
      return true;
    }
    setStatus(`Error, please enter valid ${label}`);
    setTimeout(() => setStatus(""), 3000);
    return false;
  }

  // function validate(field) {
  //   switch (field) {
  //     case name: {
  //       const allLeters = /^[A-Za-z]+$/;
  //       if (name.match(allLeters))
  //       return true;
  //     }
  //     break;
  //     case password: {
  //       const length = 8;
  //       if(password.length > length)
  //       return true;
  //     }
  //     break;
  //     case email: {
  //       const
  //     }
  //   }
  // }

  function handleCreate() {
    console.log(name, email, password);
    if (!validate(name, /^[A-Za-z]+$/, "name")) return;
    if (
      !validate(email, /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "email")
    )
      return;
    if (!validate(password, 8, "password")) return;
    const newUser = { name, email, password, balance: 80 };
    userName.push(newUser);
    setShow(false);
  }

  function clearForm() {
    setName("");
    setEmail("");
    setPassword("");
    setShow(true);
    setStatus("");
  }

  return (
    <Card
      bgcolor="secondary"
      header="Create Account"
      status={status}
      id="createAccForm"
      body={
        show ? (
          <>
            Name
            <br />
            <input
              type="input"
              className="form-control"
              id="name"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
            />
            <br />
            Email address
            <br />
            <input
              type="input"
              className="form-control"
              id="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
            <br />
            Password
            <br />
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
            />
            <spam className="form-text" style={{fontSize:"0.6em"}}>
            *password should be at least 8 characters
            </spam>
            <br />
            <button
              type="submit"
              className="btn btn-light"
              disabled={name && email && password !== "" ? false : true}
              onClick={handleCreate}
            >
              Create Account
            </button>
          </>
        ) : (
          <>
            <button type="submit" className="btn btn-light" onClick={clearForm}>
              Add Another Account
            </button>
          </>
        )
      }
    />
  );
}
