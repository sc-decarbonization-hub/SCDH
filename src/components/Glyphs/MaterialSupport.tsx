import { Svg } from '.';

interface IProps {
  title?: string;
}

export const MaterialSupport = ({ title }: IProps) => (
  <Svg title={title} width="24" height="24" viewBox="0 0 24 24" fill="none">
    <>
      <path
        d="M21 12.22C21 6.73 16.74 3 12 3C7.31 3 3 6.65 3 12.28C2.4 12.62 2 13.26 2 14V16C2 17.1 2.9 18 4 18H5V11.9C5 8.03 8.13 4.9 12 4.9C15.87 4.9 19 8.03 19 11.9V19H11V21H19C20.1 21 21 20.1 21 19V17.78C21.59 17.47 22 16.86 22 16.14V13.84C22 13.14 21.59 12.53 21 12.22Z"
        fill="#404040"
      />
      <path
        d="M9 14C9.55228 14 10 13.5523 10 13C10 12.4477 9.55228 12 9 12C8.44772 12 8 12.4477 8 13C8 13.5523 8.44772 14 9 14Z"
        fill="#404040"
      />
      <path
        d="M15 14C15.5523 14 16 13.5523 16 13C16 12.4477 15.5523 12 15 12C14.4477 12 14 12.4477 14 13C14 13.5523 14.4477 14 15 14Z"
        fill="#404040"
      />
      <path
        d="M17.9985 11.03C17.5185 8.18 15.0385 6 12.0485 6C9.0185 6 5.7585 8.51 6.0185 12.45C8.4885 11.44 10.3485 9.24 10.8785 6.56C12.1885 9.19 14.8785 11 17.9985 11.03Z"
        fill="#404040"
      />
    </>
  </Svg>
);

MaterialSupport.defaultProps = {
  title: '',
};
