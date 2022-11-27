function UpdateUser() {
  const [show, setShow] = React.useState(true);
  //get all data from authenticated user
  //display all key:value from data object
  //create Form and return
  const { userName } = React.useContext(UserContext);
  const [data, setData] = React.useState();
  let [headings, setHeadings] = React.useState([]);

  React.useEffect(() => {
    //fetch all accouts from api
    fetch("/account/all")
      .then((response) => response.json())
      .then((data) => {
        console.log(` all data from db ${JSON.stringify(data)}`);
        console.log(`${Object.keys(data[0])} keys`);
        setHeadings(Object.keys(data[0]));
        setData(data);
      });
  }, []);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  console.log(headings);

  function DisplayUserData() {
    //get table to render users from data
    if (typeof data == "object") {
      //map variable to get key:value pairs
      return (
        <>
          <tbody>
            {data.map((row, id) => {
              return (
                <tr key={id}>
                  {headings.map((key, id) => {
                    return <td key={row[key]}>{row[key]}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </>
      );
    }
  }

  function Table() {
    return (
      <table>
        <thead>
          <tr>
            {headings.map((heading) => {
              return <th key={heading}>{capitalizeFirstLetter(heading)}</th>;
            })}
          </tr>
        </thead>
        {headings.length > 0 && <DisplayUserData />}
      </table>
    );
  }

  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <Card
              bgcolor='warning'
              header='Update Account'
              body={
                <>
                  <InputForm
                    email={true}
                    password={true}
                    firstname={true}
                    lastname={true}
                    address={true}
                    zip={true}
                    handle={true}
                  />
                </>
              }
            />
          </div>
          <div className='col'>
            <div
              className='table table-striped table-bordered table-hover table-dark'
              style={{ width: "fit-content" }}>
              <Table />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
