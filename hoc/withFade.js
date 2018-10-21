//not working

/* import React, { Component } from 'react';
import { Animated } from 'react-native';

export function withFade(WrappedComponent) {
  return class extends React.Component {
    state = { fadeAnim: new Animated.Value(0) };

    constructor(props) {
      super(props);
    }

    componentDidMount() {
      Animated.timing(
        // Animate over time
        this.state.fadeAnim, // The animated value to drive
        {
          toValue: 1, // Animate to opacity: 1 (opaque)
          duration: 10000 // Make it take a while
        }
      ).start();
    }

    componentWillUnmount() {
      Animated.timing(
        // Animate over time
        this.state.fadeAnim, // The animated value to drive
        {
          toValue: 0, // Animate to opacity: 1 (opaque)
          duration: 10000 // Make it take a while
        }
      ).start();
    }

    render() {
      return (
        <Animated.View>
          <WrappedComponent {...this.props} />;
        </Animated.View>
      );
    }
  };
} */
