import { Component } from 'react';
import 'office-ui-fabric-core/dist/css/fabric.min.css';
import './App.css';
import { initializeIcons } from '@fluentui/react/lib/Icons';
import DocumentAssitant from './components/DocumentAssistant';

initializeIcons();

interface IAppState {
  file: any;
  searchQuery: string;
}

class App extends Component<any, IAppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      file: null,
      searchQuery: '',
    };
  }

  render() {
    return (
      <div className="app-container">
        <header className="app-header">
          <h1>Personal Document Assistant</h1>
        </header>

        <main className="app-main">
          <DocumentAssitant />
        </main>

        <footer className="app-footer">
        </footer>
      </div>
    );
  }
}

export default App;