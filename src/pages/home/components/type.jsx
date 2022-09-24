import React from 'react';
import Typewriter from 'typewriter-effect';

const whatDoIKnow = [
  'Mobile application developer',
  'React Native Developer',
  'Open Source Contributor',
];

export default function Type() {
  return (
    <Typewriter
      options={{
        strings: whatDoIKnow,
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}
