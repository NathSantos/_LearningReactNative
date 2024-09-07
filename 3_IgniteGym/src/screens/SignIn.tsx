import { VStack, Image, Center, Text, Heading } from '@gluestack-ui/themed';
import BackgroundImg from '@assets/background.png';
import Logo from '@assets/logo.svg';
import { Input } from '@components/Input';

export function SignIn() {
  return (
    <VStack flex={1} bg='$gray700'>
      <Image
        source={BackgroundImg}
        w='$full'
        h={624}
        defaultSource={BackgroundImg}
        alt='Pessoas treinando'
        position='absolute'
      />
      <VStack flex={1} px='$10' pb='$16'>
        <Center my='$24'>
          <Logo />
          <Text fontSize='$sm' color='$gray100'>
            Treine sua mente e seu corpo
          </Text>
        </Center>

        <Center gap='$2'>
          <Heading color='$gray100'>Acesse a conta</Heading>

          <Input placeholder='Email' />
          <Input placeholder='Senha' />
        </Center>
      </VStack>
    </VStack>
  );
}
