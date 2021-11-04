import React from "react";
import ReactDOM from "react-dom";

import Counter from "remote/Counter";

import "./index.scss";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>HOST</div>
    <ErrorBoundary>
      <Counter />
    </ErrorBoundary>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
