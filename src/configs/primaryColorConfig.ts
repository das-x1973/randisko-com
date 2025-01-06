// src/configs/primaryColorConfig.ts


export type PrimaryColorConfig = {
  name?: string
  light?: string
  main: string
  dark?: string
}

// Primary color config object
const primaryColorConfig = [
  {
    name: 'primary-1',
    light: '#92F887',
    main: '#127807',
    dark: '#106308',
  },
  {
    name: 'primary-2',
    light: '#FFD700',
    main: '#DAA520',
    dark: '#B8860B',
  },
  {
    name: 'primary-3',
    light: '#5CACEE', // Slightly darker SkyBlue light
    main: '#1C86EE',  // Slightly darker DeepSkyBlue main
    dark: '#104E8B',  // Slightly darker DodgerBlue dark
  },
];

export default primaryColorConfig;

