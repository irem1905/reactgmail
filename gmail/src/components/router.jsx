import React from 'react';
import { RouteObject } from 'react-router-dom';
import Inbox from '../pages/inbox/inbox.jsx';
import Starred from '../pages/starred/starred.jsx';
import Sent from '../pages/sent/sent.jsx';
import Bin from '../pages/bin/bin.jsx';
import GmailLayout from '../layout/index.jsx';

const GmailRouters = {
  //: RouteObject type scriptte kullanılıyormuş jsx de fazlalık diyor
  path: '/gmail',
  element: <GmailLayout />,
  children: [
    { path: 'inbox', element: <Inbox /> },
    { path: 'starred', element: <Starred /> },
    { path: 'sent', element: <Sent /> },
    { path: 'bin', element: <Bin /> }
      ],
    };
    
    export default GmailRouters;

// import React from 'react';
// import { createBrowserRouter } from 'react-router-dom'; // createBrowserRouter import edilmeli
// import Inbox from '../pages/inbox/inbox.jsx';
// import Starred from '../pages/starred/starred.jsx';
// import Sent from '../pages/sent/sent.jsx';
// import Bin from '../pages/bin/bin.jsx';
// import GmailLayout from '../layout/index.jsx';

// const GmailRouters = createBrowserRouter([
//   {
//     path: '/gmail',
//     element: <GmailLayout />,
//     children: [
//       { path: 'inbox', element: <Inbox /> },
//       { path: 'starred', element: <Starred /> },
//       { path: 'sent', element: <Sent /> },
//       { path: 'bin', element: <Bin /> },
//     ],
//   },
// ]);

// export default GmailRouters;

