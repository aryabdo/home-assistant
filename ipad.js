/*
 Configuração do TileBoard otimizada para iPad 2.
 Mantém animações simples e tiles compactos para evitar travamentos.
*/

var CONFIG = {
   customTheme: CUSTOM_THEMES.MOBILE,
   transition: TRANSITIONS.SIMPLE,
   entitySize: ENTITY_SIZES.SMALL,
   tileSize: 120,
   tileMargin: 4,
   serverUrl: 'http://' + location.hostname + ':8123',
   wsUrl: 'ws://' + location.hostname + ':8123/api/websocket',
   pingConnection: true,
   debug: false,
   pages: [
      {
         title: 'Principal',
         icon: 'mdi-home',
         bg: 'images/bg1.jpg',
         groups: [
            {
               title: 'Controles',
               width: 2,
               height: 2,
               items: [
                  {
                     position: [0, 0],
                     width: 1,
                     height: 1,
                     id: 'light.sala',
                     type: TYPES.LIGHT,
                     title: 'Sala',
                     icons: { on: 'mdi-lightbulb-on', off: 'mdi-lightbulb' }
                  },
                  {
                     position: [1, 0],
                     width: 1,
                     height: 1,
                     id: 'switch.ar_condicionado',
                     type: TYPES.SWITCH,
                     title: 'Ar-Cond.',
                     icons: { on: 'mdi-air-conditioner', off: 'mdi-air-conditioner' }
                  },
                  {
                     position: [0, 1],
                     width: 1,
                     height: 1,
                     id: 'sensor.temperatura_sala',
                     type: TYPES.SENSOR,
                     unit: '\u00b0C',
                     title: 'Temp.'
                  },
                  {
                     position: [1, 1],
                     width: 1,
                     height: 1,
                     id: 'sensor.umidade_sala',
                     type: TYPES.SENSOR,
                     unit: '%',
                     title: 'Umid.'
                  }
               ]
            }
         ]
      }
   ]
}

