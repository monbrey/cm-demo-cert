// Import caccl
import initCACCL from 'caccl/client/cached';

// Import React
import React, { Component } from 'react';

// Import resources
import './App.css';
import Canvas from './Canvas';

// Initialize caccl
const { api, getStatus } = initCACCL();

class App extends Component {
  /**
   * Initialize App component
   */
  constructor(props) {
    super(props);

    // Set up state
    this.state = {
      message: 'Loading! Just a moment...',
    };
  }

  /**
   * Called when the component mounted, pulls state and user profile from server
   */
  async componentDidMount() {
    // Load status
    try {
      // Get status from server
      const status = await getStatus();

      // > App wasn't launched via Canvas
      if (!status.launched) {
        return this.setState({
          message: 'Please launch this app from Canvas.',
        });
      }

      // > App is not authorized
      if (!status.authorized) {
        return this.setState({
          message: 'We don\'t have access to Canvas. Please re-launch the app.',
        });
      }
    } catch (err) {
      return this.setState({
        message: `Error while requesting state from server: ${err.message}`,
      });
    }

    // Load profile information
    try {
      const profile = await api.user.self.getProfile();

			console.log(profile);
      // Update state
      return this.setState({ profile });
    } catch (err) {
      return this.setState({
        message: `Error while requesting user profile: ${err.message}`,
      });
    }
  }

  /**
   * Render the App
   */
  render() {
    // Deconstruct the state
		console.log(this.state);
    const { profile } = this.state;

    // Render the component
    return (
      <div className="App">
        <header className="App-header">
          <p>
            { profile && <Canvas width={700} height={990} profile={profile} /> }
          </p>
        </header>
      </div>
    );
  }
}

export default App;
