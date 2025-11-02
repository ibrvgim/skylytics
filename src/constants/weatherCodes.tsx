const weatherCodes = [
  {
    codes: [1000],
    icon: 'icon-sunny.webp',
  },

  {
    codes: [1003],
    icon: 'icon-partly-cloudy.webp',
  },

  {
    codes: [1006, 1009],
    icon: 'icon-overcast.webp',
  },

  {
    codes: [1135, 1147],
    icon: 'icon-fog.webp',
  },

  {
    codes: [
      1030, 1063, 1072, 1150, 1153, 1168, 1171, 1180, 1183, 1186, 1189, 1192,
      1195, 1198, 1201, 1240, 1243, 1246,
    ],
    icon: 'icon-rain.webp',
  },

  {
    codes: [
      1066, 1069, 1114, 1117, 1204, 1207, 1210, 1213, 1216, 1219, 1222, 1225,
      1237, 1249, 1252, 1255, 1258, 1261, 1264,
    ],
    icon: 'icon-snow.webp',
  },

  {
    codes: [1087, 1273, 1276, 1279, 1282],
    icon: 'icon-storm.webp',
  },
];

export default weatherCodes;
