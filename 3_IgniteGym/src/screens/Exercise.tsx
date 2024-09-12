import {
  Heading,
  HStack,
  Icon,
  VStack,
  Text,
  Image,
  Box,
  useToast,
  Center,
} from '@gluestack-ui/themed';
import { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ArrowLeft } from 'lucide-react-native';
import { TouchableOpacity, ScrollView } from 'react-native';

import { AppNavigatorRoutesProps } from '@routes/app.routes';
import BodySvg from '@assets/body.svg';
import SeriesSvg from '@assets/series.svg';
import RepetitionsSvg from '@assets/repetitions.svg';
import { Button } from '@components/Button';
import { api } from '@services/api';
import { AppError } from '@utils/AppError';
import { Loading } from '@components/Loading';
import { ExerciseDTO } from '@dtos/ExerciseDTO';

type RouteParamsProps = {
  exerciseId: string;
};

export function Exercise() {
  const [exercise, setExercise] = useState<ExerciseDTO>({} as ExerciseDTO);
  const [isLoading, setIsLoading] = useState(true);

  const navigation = useNavigation<AppNavigatorRoutesProps>();
  const route = useRoute();
  const toast = useToast();

  const { exerciseId } = route.params as RouteParamsProps;

  function handleGoBack() {
    navigation.goBack();
  }

  async function fetchExerciseDetails() {
    try {
      setIsLoading(true);
      const response = await api.get(`/exercises/${exerciseId}`);
      setExercise(response.data);
    } catch (error) {
      const isAppError = error instanceof AppError;
      const title = isAppError
        ? error.message
        : 'Não foi possível carregar os detalhes do exercício';

      toast.show({
        placement: 'top',
        render: () => (
          <Center bgColor='$red500' p='$4' borderRadius={8}>
            <Text color='white' fontWeight='$bold'>
              {title}
            </Text>
          </Center>
        ),
      });
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchExerciseDetails();
  }, [exerciseId]);

  return (
    <VStack flex={1}>
      <VStack px='$8' bg='$gray600' pt='$12'>
        <TouchableOpacity onPress={handleGoBack}>
          <Icon as={ArrowLeft} color='$green500' size='xl' />
        </TouchableOpacity>

        <HStack
          justifyContent='space-between'
          alignItems='center'
          mt='$4'
          mb='$8'
        >
          <Heading
            color='$gray100'
            fontFamily='$heading'
            fontSize='$lg'
            flexShrink={1}
          >
            Puxada frontal
          </Heading>
          <HStack alignItems='center'>
            <BodySvg />

            <Text color='$gray200' ml='$1' textTransform='capitalize'>
              Costas
            </Text>
          </HStack>
        </HStack>
      </VStack>

      {isLoading ? (
        <Loading />
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 32 }}
        >
          <VStack p='$8'>
            <Image
              source={{
                uri: 'https://image.tuasaude.com/media/article/ll/ae/puxada-frontal_63648_l.jpg',
              }}
              alt='Exercício'
              mb='$3'
              resizeMode='cover'
              rounded='$lg'
              w='$full'
              h='$80'
            />

            <Box bg='$gray600' rounded='$md' pb='$4' px='$4'>
              <HStack
                alignItems='center'
                justifyContent='space-around'
                mb='$6'
                mt='$5'
              >
                <HStack alignItems='center'>
                  <SeriesSvg />
                  <Text color='$gray200' ml='$2'>
                    3 séries
                  </Text>
                </HStack>

                <HStack alignItems='center'>
                  <RepetitionsSvg />
                  <Text color='$gray200' ml='$2'>
                    12 repetições
                  </Text>
                </HStack>
              </HStack>

              <Button title='Marcar como realizado' />
            </Box>
          </VStack>
        </ScrollView>
      )}
    </VStack>
  );
}
