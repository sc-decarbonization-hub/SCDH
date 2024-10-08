import { Svg } from '.';

interface IProps {
  title?: string;
}

export const OpenTab = ({ title }: IProps) => (
  <Svg title={title} width="19" height="18" viewBox="0 0 19 18" fill="none">
    <path
      d="M15.795 3V18H0V3H15.795ZM13.9368 5H1.85823V16H13.9368V5ZM18.5823 0V16H16.7241V1.999L1.85823 2V0H18.5823Z"
      fill="#404040"
    />
  </Svg>
);

OpenTab.defaultProps = {
  title: '',
};
