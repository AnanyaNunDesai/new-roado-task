import { useMediaQuery } from 'react-responsive';

import DesktopView from './view/desktop/DesktopView';
import MobileView from './view/mobile/MobileView';

const App = () => {
  const isMobile = useMediaQuery({maxWidth: 768});

  return (
    isMobile ? <MobileView /> : <DesktopView />
  );
}

export default App;
