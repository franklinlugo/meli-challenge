import * as React from 'react';
import styled from 'styled-components';

type BoxProps = {
  readonly ratioWidth: string;
  readonly ratioHeight: string;
};

export const Box = styled.div<BoxProps>`
  position: relative;
  height: 0;
  overflow: hidden;
  padding-top: ${({ ratioWidth, ratioHeight }) => `calc((${ratioHeight} / ${ratioWidth}) * 100%)`};
  .innerBox {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

type AspectRatioBoxProps = {
  ratio?: string;
  className?: string;
};

const AspectRatioBox: React.FC<AspectRatioBoxProps> = ({ ratio = '16:9', className, children }) => {
  const [ratioWidth, ratioHeight] = ratio.split(':');

  return (
    <Box ratioWidth={ratioWidth} ratioHeight={ratioHeight} className={className}>
      <div className="innerBox">{children}</div>
    </Box>
  );
};

// function ratioPropType(props, propName, componentName) {
//   const { ratio } = props;
//   if (!/\d{1,2}:\d{1,2}/.test(ratio)) {
//     return new Error(`Invalid prop ${propName} supplied to ${componentName}. Validation failed.`);
//   }
//   return null;
// }

export default AspectRatioBox;
