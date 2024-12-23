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
    light: '#92F887', // Randisko Primary Light
    main: '#127807',  // Randisko Primary Main
    dark: '#106308',  // Randisko Primary Dark
  },
  {
    name: 'primary-2',
    light: '#A2E49A', // Randisko Secondary Light
    main: '#22651B',  // Randisko Secondary Main
    dark: '#165A14',  // Randisko Secondary Dark
  },
  {
    name: 'primary-3',
    light: '#A4F79C', // Randisko Accent Light
    main: '#106308',  // Randisko Accent Main
    dark: '#0E5207',  // Randisko Accent Dark
  },
];
export default primaryColorConfig;

