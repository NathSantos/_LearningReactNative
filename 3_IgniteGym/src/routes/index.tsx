import { useContext } from 'react';
import { Box } from '@gluestack-ui/themed';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import { AuthRoutes } from './auth.routes';
import { gluestackUIConfig } from '../../config/gluestack-ui.config';
import { AuthContext } from '@contexts/AuthContext';

export function Routes() {
  const theme = DefaultTheme;
  theme.colors.background = gluestackUIConfig.tokens.colors.gray700;

  const contextData = useContext(AuthContext);

  console.log('USUÁRIO LOGADO =>', contextData);

  return (
    <Box flex={1} bg='$gray700'>
      <NavigationContainer theme={theme}>
        <AuthRoutes />
      </NavigationContainer>
    </Box>
  );
}
