import ThemeSwitcher from './components/ThemeSwitcher';
import { ThemeProvider } from './components/ThemeContext';
import './App.css'
function App() {
  return (
    <ThemeProvider>
      <ThemeSwitcher />
    </ThemeProvider>
  );
}
export default App
