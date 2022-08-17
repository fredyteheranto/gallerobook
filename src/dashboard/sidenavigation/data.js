import HomeIcon from './icons/home';
import StatusIcon from './icons/status';
import CreditsIcon from './icons/credits';
import ArchivesIcon from './icons/archives';
import SettingsIcon from './icons/settings';
import DocumentationIcon from './icons/documentation';

const data = [
  {
    title: 'Home',
    icon: <HomeIcon />,
    link: '/',
  },
  {
    title: 'Récords',
    icon: <StatusIcon />,
    link: '/admin/status',
  },
  {
    title: 'Padrotes',
    icon: <ArchivesIcon />,
    link: '/admin/archives',
  },
  {
    title: 'Madres',
    icon: <CreditsIcon />,
    link: '/admin/credits',
  },
  {
    title: 'Camadas',
    icon: <SettingsIcon />,
    link: '/admin/settings',
  },
  {
    title: 'Configuración',
    icon: <SettingsIcon />,
    link: '/admin/settings',
  },
  {
    title: 'Documentation',
    icon: <DocumentationIcon />,
    link: '/admin/documentation',
  },
];

export default data;
