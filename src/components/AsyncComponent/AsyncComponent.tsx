import * as React from "react";

interface AsyncComponentProps {
  readonly defaults: React.Component;
}

interface AsyncComponentState {
  readonly component: any;
}

export default function asyncComponent(importComponent: () => any) {
  class AsyncComponent extends React.Component<AsyncComponentProps, AsyncComponentState> {
    constructor(props: AsyncComponentProps) {
      super(props);

      this.state = {
        component: null
      };
    }

    async componentDidMount() {
      const {default: component} = await importComponent();
      this.setState({
        component
      });
    }

    render() {
      const C = this.state.component;
      return C ? <C {...this.props} /> : null;
    }
  }

  return AsyncComponent;
}