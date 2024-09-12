import { Heading, HStack, Text, VStack, Icon } from '@gluestack-ui/themed';
import { LogOut } from 'lucide-react-native';

import defaulUserPhotoImg from '@assets/userPhotoDefault.png';
import { useAuth } from '@hooks/useAuth';
import { UserPhoto } from './UserPhoto';

export function HomeHeader() {
  const { user } = useAuth();

  return (
    <HStack bg='$gray600' pt='$16' pb='$5' px='$8' alignItems='center' gap='$4'>
      <UserPhoto
        source={user.avatar ? { uri: user.avatar } : defaulUserPhotoImg}
        w='$16'
        h='$16'
        alt='Imagem do Usuário'
      />
      <VStack flex={1}>
        <Text color='$gray100' fontSize='$sm'>
          Olá,
        </Text>
        <Heading color='$gray100' fontSize='$md'>
          {user.name}
        </Heading>
      </VStack>

      <Icon as={LogOut} color='$gray200' size='xl' />
    </HStack>
  );
}
