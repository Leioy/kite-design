import React from 'react';
import * as kiteIcons from '@kite-design/icons-react';

const allIcons: {
  [key: string]: any
} = kiteIcons;
const iconList = Object.keys(allIcons).filter(name => name !== 'createFromIconfontCN' && name !== 'default');
export default () => {
  return (
    <>
      <ul className="icon-demo-icon-wrapper">
        {iconList.map(name => {
          return (
            <li key={name} className="icon-demo-icon-item">
              {React.createElement(allIcons[name])}
              <span className="icon-demo-icon-text">{name}</span>
            </li>
          );
        })}
      </ul>

    </>
  );
}
