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

import { ExerciseDTO } from '@dtos/ExerciseDTO';

type Props = TouchableOpacityProps & {
  data: ExerciseDTO;
};

export function ExerciseCard({ data, ...rest }: Props) {
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
            {data.name}
          </Heading>
          <Text fontSize='$sm' color='$gray200' mt='$1' numberOfLines={2}>
            {data.series} séries x {data.repetitions} repetições
          </Text>
        </VStack>

        <Icon as={ChevronRight} color='$gray300' />
      </HStack>
    </TouchableOpacity>
  );
}
