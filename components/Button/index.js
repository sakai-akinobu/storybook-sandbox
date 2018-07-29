import React from 'react';

export default function Button({onClick, children}) {
  return <div onClick={onClick}>{children}</div>;
}
