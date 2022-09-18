import { RecoilRoot } from 'recoil';

import { HomeScreen } from './src/ui/screens';

export default function App() {
  return (
    <RecoilRoot>
      <HomeScreen />
    </RecoilRoot>
  );
}
