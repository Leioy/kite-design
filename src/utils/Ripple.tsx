import React, { useState, useRef, useCallback } from 'react';
import { useTransition, animated, config } from 'react-spring';
import { ButtonColor, ButtonVariant } from '@/Button/button';

interface Coordinate {
  x: number;
  y: number;
}

const getCoordinateDistance = (a: Coordinate, b: Coordinate) =>
  Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2));

const getRippleRadius = (origin: Coordinate, rect: ClientRect) => {
  const topLeft = {
    x: rect.left,
    y: rect.top,
  };
  const topRight = {
    x: rect.left + rect.width,
    y: rect.top,
  };
  const bottomRight = {
    x: rect.left + rect.width,
    y: rect.top + rect.height,
  };
  const bottomLeft = {
    x: rect.left,
    y: rect.top + rect.height,
  };

  return Math.max(
    getCoordinateDistance(origin, topLeft),
    getCoordinateDistance(origin, topRight),
    getCoordinateDistance(origin, bottomRight),
    getCoordinateDistance(origin, bottomLeft),
  );
};

interface Props {
  color: ButtonColor;
  variant: ButtonVariant;
}

const Ripple: React.FC<Props> = props => {
  const { color, variant } = props;
  const getRippleBackground = () => {
    enum BackGround {
      default = '#525050',
      primary = '#1976d2',
      secondary = '#dc004e',
      success = '#18821c',
      warning = '#d27e15',
      danger = '#cc2b2b',
    }

    enum ContainedBackGround {
      default = '#525050',
      primary = '#fff',
      secondary = '#fff',
      success = '#fff',
      warning = '#fff',
      danger = '#fff',
    }

    return variant === 'contained'
      ? ContainedBackGround[color]
      : BackGround[color];
  };
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [{ x, y }, setPosition] = useState({ x: 0, y: 0 });
  const [size, setSize] = useState(0);
  const ignoreMouseEvents = useRef(false);

  const start = useCallback(
    e => {
      if (
        !ref.current ||
        (e.type === 'mousedown' && ignoreMouseEvents.current)
      ) {
        return;
      }

      if (e.type === 'touchstart') {
        ignoreMouseEvents.current = true;
      }

      const rect = ref.current.getBoundingClientRect();
      const clientX = e.clientX || e.touches[0].clientX;
      const clientY = e.clientY || e.touches[0].clientY;
      const originX = clientX - rect.left;
      const originY = clientY - rect.top;

      setPosition({ x: originX, y: originY });
      setSize(getRippleRadius({ x: clientX, y: clientY }, rect) * 2);
      setVisible(true);
    },
    [setPosition, setSize, setVisible],
  );

  const stop = () => setVisible(false);

  const commonProps = {
    top: `calc(${y}px - ${size / 2}px)`,
    left: `calc(${x}px - ${size / 2}px)`,
    width: size,
    height: size,
  };

  const transitions = useTransition(visible, null, {
    from: {
      opacity: 0.1,
      transform: 'scale(0)',
      ...commonProps,
    },
    enter: {
      opacity: 0.3,
      transform: 'scale(1)',
      ...commonProps,
    },
    leave: {
      opacity: 0,
      transform: 'scale(1)',
      ...commonProps,
    },
    config: config.default,
  });

  return (
    <div
      ref={ref}
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        overflow: 'hidden',
      }}
      onMouseDown={start}
      onMouseOut={stop}
      onMouseUp={stop}
      onTouchStart={start}
      onTouchEnd={stop}
    >
      {transitions.map(
        ({ item, props, key }) =>
          item && (
            <animated.div
              key={key}
              style={{
                transformOrigin: '50% 50%',
                position: 'absolute',
                backgroundColor: getRippleBackground(),
                borderRadius: '50%',
                pointerEvents: 'none',
                userSelect: 'none',
                ...props,
              }}
            />
          ),
      )}
    </div>
  );
};

export default Ripple;
