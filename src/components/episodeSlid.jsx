import React, {useRef} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  margin: {
    height: theme.spacing(3),
  },
}));

const marks = [
  {
    value: 0,
    label: '0',
  },
  {
    value: 100,
    label: '10',
  },
];

function valuetext(value) {
  return (value/10);
}

export default function DiscreteSlider() {
    const r = useRef(null);
  const classes = useStyles();

//   console.log(r.current)

  return (
    <div className={classes.root}>
      {/* <Typography id="discrete-slider-always" gutterBottom>
        Always visible
      </Typography> */}
      <Slider ref={r} 
        defaultValue={2}
        getAriaValueText={valuetext/10}
        aria-labelledby="discrete-slider-always"
        step={10}
        marks={marks}
        valueLabelDisplay="on"
      />
    </div>
  );
}
