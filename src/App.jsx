import UserList from './components/UserList';
import UserProfile from './components/UserProfile';
import FetchState from './context/Fetch/FetchState';
import UserState from './context/User/UserState';

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <FetchState>
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
        </FetchState>
      </div>
    </div>
  );
}

export default App;
