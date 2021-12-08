
import React from 'react';
import Typography from '@mui/material/Typography';

interface Props {
    name: string,
}

const Title = (props: Props) => {
  return (
        <Typography variant="h2">
            {props.name}
        </Typography>
  );
}

export default Title;
