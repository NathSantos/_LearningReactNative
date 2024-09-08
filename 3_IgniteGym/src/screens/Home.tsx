import { HStack, VStack } from '@gluestack-ui/themed';
import { useState } from 'react';

import { Group } from '@components/Group';
import { HomeHeader } from '@components/HomeHeader';

export function Home() {
  const [groupSelected, setGroupSelected] = useState<string>('Costas');

  return (
    <VStack flex={1}>
      <HomeHeader />
      <HStack>
        <Group
          name='Costas'
          isActive={groupSelected === 'Costas'}
          onPress={() => setGroupSelected('Costas')}
        />

        <Group
          name='Ombro'
          isActive={groupSelected === 'Ombro'}
          onPress={() => setGroupSelected('Ombro')}
        />
      </HStack>
    </VStack>
  );
}
