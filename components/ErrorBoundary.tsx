'use client';

import React from 'react';

interface State {
  hasError: boolean;
}

/**
 * Reusable React error boundary to prevent full-page crashes.
 * Displays a friendly fallback UI and logs the error to console (or Sentry later).
 */
export default class ErrorBoundary extends React.Component<React.PropsWithChildren, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: unknown, info: unknown) {
    // TODO: integrate with Sentry or other logging service
    console.error('💥 Uncaught error:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center p-8 text-center">
          <h1 className="text-3xl font-display font-bold mb-4">Something went wrong.</h1>
          <p className="text-gray-600 mb-6 max-w-md">
            Our team has been notified. Please try refreshing the page or come back later.
          </p>
          <button
            className="btn-primary"
            onClick={() => {
              // attempt recover
              this.setState({ hasError: false });
              location.reload();
            }}
          >
            Refresh
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
