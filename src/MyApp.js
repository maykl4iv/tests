import React from 'react';

const MyApp = ComposedComponent => class extends React.Component{
  static displayName = 'ComponentEnhancedWithLog';

  log(message){
    console.log(message);
  }

  componentWillMount(){
    this.log('ComponentWillMount from ReactMixin1');
  }

  render() {
        return <ComposedComponent {...this.props}/>;
  }
};

export default MyApp;
