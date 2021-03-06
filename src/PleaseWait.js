import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';

const styles = () => ({
  wait: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
class PleaseWait extends Component {
  static defaultProps = {
    size: 16,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes, size } = this.props;
    return (
      <div className={classes.wait}>
        <div style={{ marginRight: 5 }}>
          <CircularProgress className={classes.progress} size={size} />
        </div>
        <Typography variant="subtitle1" style={{ fontSize: size }}>
          Please wait
        </Typography>
      </div>
    );
  }
}
export default withStyles(styles)(PleaseWait);
