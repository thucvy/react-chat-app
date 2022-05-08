import { ChatEngine } from 'react-chat-engine'
import './App.css';

import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

function App() {
  if (!localStorage.getItem('username')) return <LoginForm />

  return (
    <div className="App">
      <ChatEngine
			height='100vh'
			userName='vy'
			userSecret='thucvy'
			projectID='be9244c7-bf9a-4257-8d63-7a58fe5196aa'
      renderChatFeed = { (chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage = { () => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
		/>
    </div>
  );
}

export default App;
