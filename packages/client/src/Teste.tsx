import * as React from 'react';
import { LeftRightPanel, TopDownPanel, FixedH, FixedV } from './components/Layout';
import './App.css';

export default function () {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <LeftRightPanel style={{ backgroundColor: 'blue' }}>
        <FixedV divide={0.4} style={{ backgroundColor: 'red' }}>
          <TopDownPanel style={{}}>
            <FixedH divide={0.1} style={{ backgroundColor: 'magenta' }} />
            <FixedH divide={0.9} style={{ backgroundColor: 'white', fontFamily: 'monospace' }}>Texto</FixedH>
          </TopDownPanel>
        </FixedV>
        <FixedV divide={1 / 3} style={{ backgroundColor: 'yellow' }} />
        <FixedV divide={1 - 0.4 - 1 / 3} style={{ backgroundColor: 'cyan' }} />
      </LeftRightPanel>
    </div>
  );
}
