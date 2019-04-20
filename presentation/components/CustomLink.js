import React from 'react';
import { Link } from 'spectacle';

export const CustomLink = (props) => (
  <Link textColor="linkColor" {...props}>{props.children}</Link>
);
