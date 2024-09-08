import { HStack, VStack } from '@gluestack-ui/themed';
import { useState } from 'react';
import { FlatList } from 'react-native';

import { Group } from '@components/Group';
import { HomeHeader } from '@components/HomeHeader';

export function Home() {
  const [groups, setGroups] = useState<string[]>([
    'Costas',
    'Bíceps',
    'Tríceps',
    'Ombro',
  ]);
  const [groupSelected, setGroupSelected] = useState<string>('Costas');

  return (
    <VStack flex={1}>
      <HomeHeader />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Group
            name={item}
            isActive={groupSelected === item}
            onPress={() => setGroupSelected(item)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginVertical: 40, maxHeight: 44, minHeight: 44 }}
      />
    </VStack>
  );
}
