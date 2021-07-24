import UserList from './components/UserList';
import UserProfile from './components/UserProfile';
import UserState from './context/User/UserState';

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <UserState>
          <div className="row">
            <div className="col-8">
              <UserList />
            </div>
            <div className="col-4">
              <UserProfile />
            </div>
          </div>
        </UserState>
      </div>
    </div>
  );
}

export default App;
