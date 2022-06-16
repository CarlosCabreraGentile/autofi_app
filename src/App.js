import './App.css';
import { PostState } from './context/Posts/PostsState';
import { PostsList } from './posts/PostsList';

function App() {
  return (
    <PostState>
      <div className='App'>
        <header className='App-header'>
          <p>Posts List</p>
        </header>
        <PostsList />
      </div>
    </PostState>
  );
}

export default App;
