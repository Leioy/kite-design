import React from 'react';
import { Loading } from '@kite-design/icons-react';

export interface LoadingIconProps {
  loading?: boolean;
  prefix: string;
}

const LoadingIcon: React.FC<LoadingIconProps> = props => {
  const { loading, prefix } = props;
  const visible = !!loading;
  return visible ? (
    <span className={`${prefix}-loading-icon`}>
      <Loading />
    </span>
  ) : null;
};
export default LoadingIcon;
