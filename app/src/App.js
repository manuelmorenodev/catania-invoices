import UserList from "./users/UserList";

function App() {
  return (
    <div className="App">
      <div className="container" style={{paddingTop: 40}}>
        <div className="row">
          <div className="col-md-4">
            <UserList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
