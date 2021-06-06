import { extendTheme } from '@chakra-ui/react';

const theme = {
  styles: {
    global: {
      body: {
        fontFamily: 'Poppins, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
        fontWeight: 500,
        bg: 'secondary',
        color: 'text',
      },
      a: {
        color: 'primary',
        _hover: {
          textDecoration: 'underline',
        },
      }
    },
  },
  colors: {
    primary: '#CC5500',
    secondary: '#FDF9F5',
    text: '#313332',
  },
  fonts: {
    body: 'Poppins, system-ui, sans-serif',
    heading: 'Poppins, system-ui, sans-serif',
  },
  components: {
    Link: {
      baseStyle: {
        color: 'primary',
      },
    },
  },
};

export default extendTheme(theme);
