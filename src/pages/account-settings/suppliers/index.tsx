import { createPage } from 'components/CreatePage';
import { AccountSettingsPage } from 'containers/AccountSettings/AccountSettingsPage';
import { AccountSettingsRoutes } from 'containers/AccountSettings/constants';

const AccountSettingsSuppliersPage = () => (
  <AccountSettingsPage selectedTab={AccountSettingsRoutes.Suppliers} />
);

export default createPage(AccountSettingsSuppliersPage, { publicPage: false });
