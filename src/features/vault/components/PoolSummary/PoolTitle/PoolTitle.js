import React, { memo } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { primaryColor } from 'assets/jss/material-kit-pro-react.js';

import styles from './styles';

const useStyles = makeStyles(styles);

const PoolTitle = ({ name, logo, description, url }) => {
  const classes = useStyles();

  return (
    <Grid item xs={3} className={classes.container}>
      <Avatar alt={name} variant="square" src={require(`../../../../../images/${logo}`)} />
      <div className={classes.texts}>
        <Typography className={classes.title} variant="body2" gutterBottom>
          {name}
          <Hidden smUp>
            <i
              style={{
                color: primaryColor[0],
                marginLeft: '4px',
                visibility: Boolean(url) ? 'visible' : 'hidden',
              }}
              className={'far fa-question-circle'}
              onClick={e => {
                e.stopPropagation();
                window.open(url);
              }}
            />
          </Hidden>
        </Typography>
        <Typography className={classes.subtitle} variant="body2">
          {description}
        </Typography>
      </div>
    </Grid>
  );
};

export default memo(PoolTitle);
