import React, { Component } from 'react';

class ErrorBoundary extends Component {
    state = {
        error: null,
        errorInfo: null
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error : error,
            errorInfo: errorInfo
        })
        // You can also log the error to an error reporting service
        //logErrorToMyService(error, errorInfo);
    }

    render() {
        if (this.state.errorInfo) {
            return (
                <div>Something went wrong...ErrorBoundary</div>
            );
        } else {
            return this.props.children;
        }
    }
}

export default ErrorBoundary;