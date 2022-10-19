import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
  // Update state so the next render will show the fallback UI.
  	return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
  
  	this.setState({
  		error: error,
  		errorInfo: errorInfo
  	})
  	
	console.log("ErrorBoundary Error:");
  	console.log(error);
	console.log("ErrorBoundary Error Info:");
  	console.log(errorInfo);
  	
      // You can also log the error to an error reporting service
      //logErrorToMyService(error, errorInfo);
  }
  
  render() {
    if (this.state.errorInfo) {
    // You can render any custom fallback UI
    return (
    <div>
    	<h1>Something went wrong.</h1>
    	
    	<details style={{ whiteSpce: "pre-wrap" }}>
    		{this.state.error && this.state.error.toString()}
    		<br />
    		{this.state.errorInfo.componentStack}
    	</details>
    	
    </div>
    	);
    }
    
    return this.props.children; 
  }
}

export default ErrorBoundary;
