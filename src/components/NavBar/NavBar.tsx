import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// material core
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FastfoodIcon from '@material-ui/icons/Fastfood';

// material icon
import MailIcon from '@material-ui/icons/Mail';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import FunctionsIcon from '@material-ui/icons/Functions';
import InfoIcon from '@material-ui/icons/Info';
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';
import NewReleasesIcon from '@material-ui/icons/NewReleases';
import FiberNewIcon from '@material-ui/icons/FiberNew';
import HelpIcon from '@material-ui/icons/Help';

// styles
import useStyles from './style';

function NavBar() {
  const classes = useStyles();
  const history = useHistory();
  const { t: translate } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const _handleNavigate = (path: string) => () => {
    history.push(path)
  }

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <ListItem button onClick={_handleNavigate('/home')}>
          <ListItemIcon><InboxIcon /></ListItemIcon>
          <ListItemText primary={translate('Home')} />
        </ListItem>
        <ListItem button onClick={_handleNavigate('/aboutus')}>
          <ListItemIcon><InfoIcon /></ListItemIcon>
          <ListItemText primary={translate("About Us")} />
        </ListItem>
        <ListItem button onClick={_handleNavigate('/products')}>
          <ListItemIcon><MoveToInboxIcon /></ListItemIcon>
          <ListItemText primary="Products" />
        </ListItem>
        <ListItem button onClick={_handleNavigate('/services')}>
          <ListItemIcon><SettingsApplicationsIcon /></ListItemIcon>
          <ListItemText primary="Services" />
        </ListItem>
        <ListItem button onClick={_handleNavigate('/whatsupnew')}>
          <ListItemIcon><NewReleasesIcon /></ListItemIcon>
          <ListItemText primary="What's Up New" />
        </ListItem>
        <ListItem button onClick={_handleNavigate('/upcomming')}>
          <ListItemIcon><FiberNewIcon /></ListItemIcon>
          <ListItemText primary="Upcomming" />
        </ListItem>
        <ListItem button onClick={_handleNavigate('/support')}>
          <ListItemIcon><HelpIcon /></ListItemIcon>
          <ListItemText primary="Support" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <nav className={classes.drawer} aria-label="mailbox folders">
      <Hidden smUp implementation="css">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          {drawer}
        </Drawer>
      </Hidden>

    </nav>
  )
}

export default NavBar
