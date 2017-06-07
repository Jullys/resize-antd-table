import React from 'react';
import ResizeTable from '../../';
import { render } from 'react-dom';

var element = document.createElement('div');
document.body.appendChild(element);
render(<ResizeTable name="myComponent" />, element);
