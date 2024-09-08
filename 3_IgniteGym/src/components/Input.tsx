import { Input as GlueStackInput, InputField } from '@gluestack-ui/themed';
import { ComponentProps } from 'react';

type Props = ComponentProps<typeof InputField> & {
  isReadOnly?: boolean;
};

export function Input({ isReadOnly = false, ...rest }: Props) {
  return (
    <GlueStackInput
      bg='$gray700'
      h='$14'
      borderWidth='$0'
      borderRadius='$md'
      $focus={{
        borderWidth: 1,
        borderColor: '$green500',
      }}
      isReadOnly={isReadOnly}
      opacity={isReadOnly ? 0.5 : 1}
    >
      <InputField
        px='$4'
        bg='$gray700'
        color='$white'
        fontFamily='$body'
        placeholderTextColor='$gray300'
        {...rest}
      />
    </GlueStackInput>
  );
}
