import { RecoilRoot } from 'recoil';
import { MD3DarkTheme, Provider as PaperProvider } from 'react-native-paper';

import { Navigator } from './src/navigation';

export default function App() {
  return (
    <RecoilRoot>
      <PaperProvider theme={MD3DarkTheme}>
        <Navigator />
      </PaperProvider>
    </RecoilRoot>
  );
}
