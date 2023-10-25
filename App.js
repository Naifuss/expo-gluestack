import { GluestackUIProvider, Text, Box, Heading, Input, InputField, Button, ButtonText } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config'; // Optional if you want to use default theme

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <Box width="100%" h={"$full"} justifyContent="center" alignItems="center" gap={`$5`} p={'$5'}>
        <Heading>Maior ou Menor</Heading>
        <Input w={"$full"}>
          <InputField placeholder='18'/>
        </Input>
        <Button w={'$full'}>
          <ButtonText>Calcular</ButtonText>
        </Button>
        <Text>Resposta</Text>
      </Box>
    </GluestackUIProvider>
  );
}