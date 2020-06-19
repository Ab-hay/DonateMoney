import * as React from 'react';
import * as ReactDOM from 'react-dom';
import NavbarPage from './AppNav';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import 'react-notifications/lib/notifications.css';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<NavbarPage />, document.getElementById('root') as HTMLElement);
registerServiceWorker();