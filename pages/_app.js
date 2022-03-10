
import { library, config } from '@fortawesome/fontawesome-svg-core';
import {
  faBorderAll,
  faList,
    faSun, faMoon,
  faSortNumericDown,
  faSortNumericUp } from '@fortawesome/free-solid-svg-icons';

config.autoAddCss = false;
library.add(
    faSun,
    faMoon,
    faList,
    faBorderAll,
    faSortNumericDown,
    faSortNumericUp);

import '@fortawesome/fontawesome-svg-core/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'highlight.js/styles/pojoaque.css'
import '../styles/index.scss'
import ThemeProvider from "../providers/ThemeProvider";
import "react-toggle/style.css"


// export default ({Component, pageProps}) =>
//     <ThemeProvider>
//       <Component {...pageProps} />
//     </ThemeProvider>


export default function ({Component, pageProps}) {
    <ThemeProvider>
        <Component {...pageProps} />
    </ThemeProvider>
}