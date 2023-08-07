import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  components: {
    Text:{
      baseStyle:{
        lineHeight:1
      }
    },
    Button: {
      baseStyle: {
        borderRadius: '10px',
        fontWeight: '400',
        fontSize: '18px',
        whiteSpace: 'normal',
        w:'full'
      },
      variants: {
        success: {
          _hover: {
            bg: 'elems.s_hover',
          },
          _active: {
            bg: 'elems.s_active',
          },
          bg: 'elems.success',
          h: 'full',
          w: 'full',
          fontSize: '18px',
        },
        error: {
          _hover: {
            bg: 'elems.er_hover',
          },
          _active: {
            bg: 'elems.er_active',
          },
          bg: 'elems.error',
          h: 'full',
        },
      },
    },
  },
  colors: {
    bg: {
      main: '#ffe7bb',
    },
    elems: {
      success: '#77ce61',
      s_hover: '#96e183',
      s_active: '#79b76a',
      error: '#f15553',
      er_hover: '#fc6f6d',
      er_active: '#d95250',
      primary:'#fefcfc'
    },
  },
});
