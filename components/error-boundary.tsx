"use client"

import React from "react"

interface ErrorBoundaryProps {
  children: React.ReactNode
  fallback?: React.ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
  error?: Error
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.error("Error caught by ErrorBoundary:", error, errorInfo)
  }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="p-4 bg-red-50 text-red-800 rounded-md">
            <h2 className="text-lg font-semibold mb-2">Something went wrong</h2>
            <p className="mb-4">There was an error rendering this component.</p>
            <pre className="bg-red-100 p-2 rounded text-sm overflow-auto">
              {this.state.error?.toString() || "Unknown error"}
            </pre>
            <button
              className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
              onClick={() => this.setState({ hasError: false })}
            >
              Try Again
            </button>
          </div>
        )
      )
    }

    return this.props.children
  }
}
