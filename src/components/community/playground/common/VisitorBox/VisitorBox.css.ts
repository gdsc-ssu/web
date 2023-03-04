import { styleVariants } from '@vanilla-extract/css';

export const visitor = styleVariants({
  box: [
    {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '5px',
      color: 'white',
    },
  ],
  title: [
    {
      padding: '5px 10px',
      backgroundColor: 'black',
      fontSize: '10px',
      fontWeight: '400',
      borderRadius: '5px',
      cursor: 'default',
    },
  ],
  subtitle: [
    {
      fontSize: '12px',
      fontWeight: '5600',
    },
  ],
});
