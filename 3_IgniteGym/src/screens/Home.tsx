import {
  Heading,
  HStack,
  VStack,
  Text,
  useToast,
  Center,
} from '@gluestack-ui/themed';
import { useState, useEffect, useCallback } from 'react';
import { FlatList } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import { api } from '@services/api';
import { AppError } from '@utils/AppError';
import { AppNavigatorRoutesProps } from '@routes/app.routes';
import { Group } from '@components/Group';
import { HomeHeader } from '@components/HomeHeader';
import { ExerciseCard } from '@components/ExerciseCard';

export function Home() {
  const [exercises, setExercises] = useState([]);
  const [groups, setGroups] = useState<string[]>([]);
  const [groupSelected, setGroupSelected] = useState<string>('Costas');

  const toast = useToast();
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  function handleOpenExerciseDetails() {
    navigation.navigate('Exercise');
  }

  async function fetchGroups() {
    try {
      const response = await api.get('/groups');
      setGroups(response.data);
    } catch (error) {
      const isAppError = error instanceof AppError;
      const title = isAppError
        ? error.message
        : 'Não foi possível carregar os grupos musculares';

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
    }
  }

  async function fecthExercisesByGroup() {
    try {
      const response = await api.get(`/exercises/bygroup/${groupSelected}`);
      console.log(response.data);
    } catch (error) {
      const isAppError = error instanceof AppError;
      const title = isAppError
        ? error.message
        : 'Não foi possível carregar os exercícios';

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
    }
  }

  useEffect(() => {
    fetchGroups();
  }, []);

  // toda vez que o grupo selecionado mudar, chama a função de buscar os exercícios
  useFocusEffect(
    useCallback(() => {
      fecthExercisesByGroup();
    }, [groupSelected])
  );

  return (
    <VStack flex={1}>
      <HomeHeader />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Group
            name={item}
            isActive={groupSelected.toLowerCase() === item.toLowerCase()}
            onPress={() => setGroupSelected(item)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginVertical: 40, maxHeight: 44, minHeight: 44 }}
      />

      <VStack px='$8' flex={1}>
        <HStack justifyContent='space-between' mb='$5' alignItems='center'>
          <Heading color='$gray200' fontSize='$md' fontFamily='$heading'>
            Exercícios
          </Heading>
          <Text color='$gray200' fontSize='$sm' fontFamily='$body'>
            {exercises.length}
          </Text>
        </HStack>

        <FlatList
          data={exercises}
          keyExtractor={(item) => item}
          renderItem={() => (
            <ExerciseCard onPress={handleOpenExerciseDetails} />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      </VStack>
    </VStack>
  );
}
