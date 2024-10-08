import { Svg } from '.';

interface IProps {
  title?: string;
}

export const NavigationGlobe = ({ title }: IProps) => (
  <Svg title={title} width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path
      d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM14.2347 17.001H9.76525C9.91009 17.423 10.0734 17.8168 10.2533 18.1766C10.8812 19.4324 11.5522 20 12 20C12.4478 20 13.1188 19.4324 13.7467 18.1766C13.9266 17.8168 14.0899 17.423 14.2347 17.001ZM7.66926 17.0012L5.75512 17.0006C6.50163 17.9317 7.45204 18.6922 8.53864 19.2145C8.19918 18.5647 7.90605 17.8196 7.66926 17.0012ZM18.2449 17.0006L16.3307 17.0012C16.0939 17.8196 15.8008 18.5647 15.462 19.2152C16.548 18.6922 17.4984 17.9317 18.2449 17.0006ZM7.02471 13.0004L4.06201 13.001C4.14922 13.6996 4.32652 14.3703 4.58191 15.001L7.22898 15.0005C7.15344 14.5195 7.09557 14.0229 7.05691 13.5137L7.02471 13.0004ZM14.9724 13.0008H9.02756C9.06589 13.6931 9.1436 14.364 9.2567 15.0012H14.7433C14.8564 14.364 14.9341 13.6931 14.9724 13.0008ZM19.938 13.001L16.9753 13.0004C16.941 13.6901 16.8717 14.3592 16.771 15.0005L19.4181 15.001C19.6735 14.3703 19.8508 13.6996 19.938 13.001ZM7.22882 9.00052L4.58151 9.00003C4.32621 9.63073 4.149 10.3014 4.06189 11L7.02466 11.0006C7.05888 10.3109 7.12813 9.64179 7.22882 9.00052ZM14.7435 8.99979H9.25652C9.14346 9.63703 9.0658 10.3079 9.0275 11.0002H14.9725C14.9342 10.3079 14.8565 9.63703 14.7435 8.99979ZM19.4185 9.00003L16.7712 9.00052C16.8719 9.64179 16.9411 10.3109 16.9753 11.0006L19.9381 11C19.851 10.3014 19.6738 9.63073 19.4185 9.00003ZM8.53804 4.78476L8.51189 4.79845C7.43605 5.3205 6.49482 6.07653 5.75432 7.00039L7.66897 6.99981C7.90581 6.18098 8.19904 5.43555 8.53804 4.78476ZM12 4C11.5522 4 10.8812 4.56758 10.2533 5.82336C10.0732 6.18352 9.90983 6.57761 9.7649 6.99999H14.2351C14.0902 6.57761 13.9268 6.18352 13.7467 5.82336C13.1557 4.64145 12.5266 4.06916 12.0813 4.00592L12 4ZM15.4614 4.78553L15.484 4.82724C15.8137 5.46792 16.0993 6.19874 16.331 6.99981L18.2457 7.00039C17.499 6.06888 16.5483 5.30799 15.4614 4.78553Z"
      fill="#404040"
    />
  </Svg>
);

NavigationGlobe.defaultProps = {
  title: '',
};
