import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import {
  Container,
  ButtonText
} from './styles';

interface Props extends TouchableOpacityProps {
  title: string;
}

export function Button({
  title,
  onPress,
  ...rest
}: Props) {
  return (
    <Container {...rest} onPress={onPress}>
      <ButtonText>
        {title}
      </ButtonText>
    </Container>
  );
}