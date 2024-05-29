import { EvaIconsPack } from '@eva-design/eva-icons';
import { createTheme } from '@eva-design/eva';

const light = createTheme({
  light: true,
  color: {
    common: 'white',
    primary: '#007bff',
    secondary: '#ffc107',
    // Add other colors as needed
  },
  font: {
    size: 14,
    family: 'Roboto', // Replace with your preferred font family
  },
  // Other theme options (refer to Eva Design System documentation)
});

const dark = createTheme({
  // Specify dark theme configuration
});

export { light, dark, EvaIconsPack };
