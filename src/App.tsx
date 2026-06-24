import { AppProviders } from './app/providers'
import { SplashScreen } from './components/common/SplashScreen'

export default function App() {
  return (
    <>
      {/* Website renders in background while splash is on screen */}
      <AppProviders />

      {/* Splash overlay — unmounts itself after video ends or maxDuration */}
      <SplashScreen />
    </>
  )
}
