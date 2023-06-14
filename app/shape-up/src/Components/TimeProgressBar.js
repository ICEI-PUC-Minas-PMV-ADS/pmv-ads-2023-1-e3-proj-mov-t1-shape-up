import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'native-base';
import { Svg, Circle } from 'react-native-svg';

export default function TimeProgressBar ({ style, totalTime, onFinish}) {
  const strokeWidth = 6;
  const radius = 50;
  const circumference = 2 * Math.PI * (radius - strokeWidth);
  const [progress, setProgress] = React.useState(100);
  const progressStrokeDashoffset = -circumference * (progress / 100);
  const [counter, setCounter] = React.useState(totalTime);

  React.useEffect(function() {
    setInterval(() => {
      setProgress((prevProgress) => prevProgress - 100 / totalTime);
      setCounter((prevCounter) => prevCounter -1);
    }, 1000);
  }, []);

  if (counter == 0) {
    onFinish();
  }

  return (
    <View style={{ ...style, ...styles.container}}>
      <Svg width={radius * 2} height={radius * 2}>
        <Circle
          cx={radius}
          cy={radius}
          r={radius - strokeWidth / 2}
          fill="none"
          stroke="#151515"
          strokeWidth={strokeWidth}
        />
        <Circle
          cx={radius}
          cy={radius}
          r={radius - strokeWidth / 2}
          fill="none"
          stroke="#ff4444"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={progressStrokeDashoffset}
          transform={`rotate(-90 ${radius} ${radius})`}
        />
      </Svg>
      <Text position='absolute' fontSize='2xl' color='white'>{`${counter}s`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff'
  }
});