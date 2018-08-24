import React from 'react';

export default (fn) => {

  return class asyncComponent extends React.Component {

    state = {
      component: null
    };

    async componentDidMount() {
      try {
        const component = await fn();
        this.setState({ component: component.default });
      } catch (error) {
        console.error(error);
      }
    }

    render() {
      const Comp = this.state.component;

      return Comp !== null ? <Comp /> : null;
    }

  }

}