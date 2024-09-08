import {
  Heading,
  HStack,
  Image,
  Text,
  VStack,
  Icon,
} from '@gluestack-ui/themed';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { ChevronRight } from 'lucide-react-native';

type Props = TouchableOpacityProps;

export function ExerciseCard({ ...rest }: Props) {
  return (
    <TouchableOpacity {...rest}>
      <HStack
        bg='$gray500'
        alignItems='center'
        p='$2'
        pr='$4'
        mb='$3'
        rounded='$md'
      >
        <Image
          source={{
            uri: 'https://image.tuasaude.com/media/article/ll/ae/puxada-frontal_63648_l.jpg',
          }}
          alt='Imagem do Exercício'
          w='$16'
          h='$16'
          rounded='$md'
          mr='$4'
          resizeMode='cover'
        />
        <VStack flex={1}>
          <Heading fontSize='$lg' color='$white' fontFamily='$heading'>
            Puxada Frontal
          </Heading>
          <Text fontSize='$sm' color='$gray200' mt='$1' numberOfLines={2}>
            3 séries x 12 repetições
          </Text>
        </VStack>

        <Icon as={ChevronRight} color='$gray300' />
      </HStack>
    </TouchableOpacity>
  );
}
