import React from 'react';
import { Text } from 'spectacle';

export const CustomText = (props) => (
  <Text textColor="textColorLight" textAlign="left" textSize="xx-large" margin="10px 0 0" {...props}>{props.children}</Text>
);
