//Parent component
//Create Libraries that will serve the entire application
//Create and export table, Buttons, Alerts
const Route = ReactRouterDOM.Route;
const Link = ReactRouterDOM.Link;
const HashRouter = ReactRouterDOM.HashRouter;

function Card(props) {
  function classes() {
    const bg = props.bgcolor ? " bg-" + props.bgcolor : " ";
    const txt = props.txtcolor ? " text-" + props.txtcolor : " text-white";
    return "card mb-3 " + bg + txt;
  }

  return (
    <div
      className={classes()}
      style={{ maxWidth: "18rem" }}>
      {props.header && <div className='card-header'>{props.header}</div>}
      <div className='card-body'>
        {props.title && <h5 className='card-title'>{props.title}</h5>}
        {props.text && <p className='card-text'>{props.text}</p>}
        {props.body}
        {props.status && <div id='createStatus'>{props.status}</div>}
      </div>
    </div>
  );
}

function Alert(props) {
  return (
    <div variant='success'>
      <div className='alert-heading'>{props.header}</div>
      <hr />
      <div className='mb-0'>{props.text}</div>
    </div>
  );
}

function clearForm() {
  setName("");
  setEmail("");
  setPassword("");
  setShow(true);
  setStatus("");
}

function validate(field, test, label) {
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
  //if password is < 8 carac
  if (field.match(test) || (label == "password" && field.length >= 8)) {
    setStatus(`Congrats ${firstname}, your account has been created`);
    return true;
  }
  setStatus(`Error, please enter valid ${label}`);
  setTimeout(() => setStatus(""), 3000);
  return false;
}

function InputForm(props) {
  const [firstname, setName] = React.useState("");
  const [lastname, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [balance, setBalance] = React.useState("");
  const [amount, setAmount] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [zip, setZip] = React.useState("");
  // const ctx = React.useContext(UserContext);
  // const data = { firstname, lastname, email, password, balance, zip, address };

  function handleCreate() {
    console.log(firstname, lastname, email, balance, password, zip, address);
    // if (!validate(firstname, /^[A-Za-z]+$/, "firstname")) return;
    // if (
    //   !validate(email, /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "email")
    // )
    //   return;
    // if (!validate(password, 8, "password")) return;

    //url to create user
    const url = `/account/create/${firstname}/${lastname}/${email}/${password}/${address}/${zip}/${balance}`;
    (async () => {
      var res = await fetch(url);
      var data = await res.json();
      console.log(` HANDLE CREATE DATA ${data}`);
    })();
  }

  function handleLogin() {
    console.log(email, password);
    const url = `/account/querydb/${email}/${password}`;
    (async () => {
      var res = await fetch(url);
      var data = await res.json();
      console.log(` handle login ${JSON.stringify(data)}`);
    })();
  }

  return (
    <>
      {props.firstname && (
        <>
          First Name
          <br />
          <input
            type='input'
            className='form-control'
            placeholder='Enter first name'
            value={firstname}
            onChange={(e) => setName(e.currentTarget.value)}
          />
          <br />
        </>
      )}
      {props.lastname && (
        <>
          Last Name
          <br />
          <input
            type='input'
            className='form-control'
            placeholder='Enter last name'
            value={lastname}
            onChange={(e) => setLastName(e.currentTarget.value)}
          />
          <br />
        </>
      )}
      {props.address && (
        <>
          Address
          <br />
          <input
            type='input'
            className='form-control'
            placeholder='Enter address'
            value={address}
            onChange={(e) => setAddress(e.currentTarget.value)}
          />
          <br />
        </>
      )}
      {props.zip && (
        <>
          Zip Code
          <br />
          <input
            type='input'
            className='form-control'
            placeholder='Enter Zip Code'
            value={zip}
            onChange={(e) => setZip(e.currentTarget.value)}
          />
        </>
      )}
      {props.balance && (
        <>
          Balance
          <br />
          <input
            type='input'
            className='form-control'
            placeholder='Enter balance'
            value={balance}
            onChange={(e) => setBalance(e.currentTarget.value)}
          />
          <br />
        </>
      )}
      {props.email && (
        <>
          Email address
          <br />
          <input
            type='input'
            className='form-control'
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
          <br />
        </>
      )}
      {props.password && (
        <>
          Password
          <br />
          <input
            type='input'
            className='form-control'
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
          />
          <br />
        </>
      )}
      {/* {props.balance && (
        <span
          hidden={props.balance}
          type='balance'
          className='form-control'
          value={data.password}
          onChange={(e) => setPassword(e.currentTarget.value)}
        />
      )} */}
      <br />
      {props.handle && (
        <button
          type='submit'
          className='btn btn-light'
          onClick={(e) => handleLogin()}>
          Create Account
        </button>
      )}
    </>
  );
}
