import React from 'react';
import { Loading } from '@kite-design/icons-react';

export interface LoadingIconProps {
  loading?: boolean
}

const LoadingIcon: React.FC<LoadingIconProps> = (props) => {
  const { loading } = props;
  const visible = !!loading;
  return (
    visible ? <span>
    <Loading />
  </span> : null
  );
};
export default LoadingIcon;

