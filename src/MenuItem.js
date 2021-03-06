import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/styles';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Block from './Block';
import ThemeContext from './theme/ThemeContext';

const getStyles = ({ selected, colors, sizes }) => {
  const useStyles = makeStyles({
    listItem: {
      backgroundColor: selected ? colors.jungleGreen : 'transparent',
      color: selected ? colors.milkyWhite : colors.dark,
      fontSize: sizes.button,
      '& :hover': {
        backgroundColor: colors.jungleGreen,
        color: colors.milkyWhite,
      },
    },
  });

  return {
    useStyles,
  };
};

const MenuItem = ({
  icon,
  avatar,
  primary,
  secondary,
  action,
  children,
  selected,
  ...rest
}) => {
  const { colors, sizes } = React.useContext(ThemeContext);
  const classes = getStyles({ selected, colors, sizes }).useStyles();

  return (
    <Block flex={false} row className={classes.listItem}>
      <ListItem {...rest}>
        {children || (
          <Fragment>
            {icon && <ListItemIcon>{icon}</ListItemIcon>}
            {avatar && <ListItemAvatar>{avatar}</ListItemAvatar>}
            <ListItemText primary={primary} secondary={secondary} />
            {action && (
              <ListItemSecondaryAction>{action}</ListItemSecondaryAction>
            )}
          </Fragment>
        )}
      </ListItem>
    </Block>
  );
};

MenuItem.defaultProps = {
  icon: null,
  button: true,
};

export default MenuItem;
