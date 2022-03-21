import {BiCoinStack} from 'react-icons/bi';

const routesConfig = [
  {
    id: 'app',
    title: 'ICO',
    messageId: 'sidebar.ico',
    type: 'group',
    children: [
      {
        id: 'main',
        title: 'Main',
        messageId: 'sidebar.ico.main',
        type: 'item',
        icon: <BiCoinStack />,
        url: '/ico/main',
      },
    ],
  },
];
export default routesConfig;
