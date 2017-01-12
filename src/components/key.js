// @flow
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import { Button } from 'react-mdl';
import React from 'react';

function Key (props: Object) {
    return(
      <Button raised colored ripple
        value={props.value}
        onClick={props.handleClick}>
        {props.value}
      </Button>
    );
}

export default Key;
