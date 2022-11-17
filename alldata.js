function AllData() {
  const { userName } = React.useContext(UserContext);

const headings = Object.keys(userName[0]);

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

  console.log(headings);

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

        <tbody>
        {userName.map((row, index) => {
          return <tr key={index}>
            {headings.map((key, index) => {
              return <td key={row[key]}>{(row[key])}</td>
            })}
          </tr>
        })}
        </tbody>
      </table>
    );
  }

  return (
    <div className="table table-striped table-bordered table-hover table-dark" 
    style={{ width: "fit-content"}}>
      <Table/>
    </div>
    
  )
}
