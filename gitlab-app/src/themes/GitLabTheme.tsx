/* Added to support Typescript, see https://mui.com/material-ui/customization/palette/#adding-new-colors */
import { createTheme } from '@mui/material/styles';
declare module '@mui/material/styles' {
    interface Theme {
      status: {
        danger: React.CSSProperties['color'];
      };
    }
  
    interface Palette {
      neutral: Palette['primary'];
    }
    interface PaletteOptions {
      neutral: PaletteOptions['primary'];
    }
  
    interface PaletteColor {
      darker?: string;
    }
    interface SimplePaletteColorOptions {
      darker?: string;
    }
    interface ThemeOptions {
      status: {
        danger: React.CSSProperties['color'];
      };
    }
  }



const GitLabTheme = createTheme({
  status: {
    danger: '#ff6b27',
  },
  palette: {
    primary: {
      main: '#544389',
      darker: '#e24328',
    },
    secondary: {
      main: '#fff',
      darker: '#d4d4d4',
    },
    neutral: {
      main: '#fff',
      contrastText: '#fff',
    },
  },
});


export default GitLabTheme