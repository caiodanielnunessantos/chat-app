import * as React from 'react';

interface FixedTypes {
  style: React.CSSProperties,
}

interface Types {
  style: React.CSSProperties,
  divide: number,
}

export function TopDownPanel({ children, style }: React.PropsWithChildren<FixedTypes>) {
  return (
    <div style={{...style, width: '100%', height: '100%', display: 'flex', flexDirection: 'column'}}>
      {children}
    </div>
  );
}

export function LeftRightPanel({ children, style }: React.PropsWithChildren<FixedTypes>) {
  return (
    <div style={{...style, width: '100%', height: '100%', display: 'flex', flexDirection: 'row'}}>
      {children}
    </div>
  );
}

export function FixedH({ children, style, divide }: React.PropsWithChildren<Types>) {
  return (
    <div style={{...style, width: '100%', height: `${divide * 100}%`}}>
      {children}
    </div>
  );
}

export function FixedV({ children, style, divide }: React.PropsWithChildren<Types>) {
  return (
    <div style={{...style, height: '100%', width: `${divide * 100}%`}}>
      {children}
    </div>
  );
}
