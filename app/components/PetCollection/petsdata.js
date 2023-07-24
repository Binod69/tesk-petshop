const petsData = [
  {
    id: '1',
    image:
      'https://s3-alpha-sig.figma.com/img/2577/0f00/0dce7989b5b61e6740943017386eace3?Expires=1691366400&Signature=OUueEPGmi8mIstm7LjMCVKE7QF~A4JV4V9w6n-NnGvSMMbaEiFKJdaf5YAIeOC2~lEtyMRwp65mDY~TZnFmfgiiGQiB7KDty0XaCC3iVptnRJrQiPif8XWqh3oHWoh20dOdlPkD~xTiCpkCko6eCG-EDi7tXui~s7SPiKt5JWsfdDC1keQ3VyudaPcYcawTIsvTFcpodwtR-ozm1NhHNwEPWNZ1-jwtuLDjKVd0RIIn5ziEVmPfxN7J~ijCvN9GM09n2HwVeizYDfB4~F65Fs3Z52TBJ698cwmDsnBX6gbwFa19OCCVbPtPLSYPGEocyworUUJoze9OpQEZ~~EGi3A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    title: 'Golden Retriever',
    gender: 'Male',
    age: '2 months',
  },
  {
    id: '2',
    image:
      'https://s3-alpha-sig.figma.com/img/8805/2306/33f98855dea15939af2600d55c18ec42?Expires=1691366400&Signature=S0iolt-ALQPUoFDiKsyRLgdERmQpMVjrKhcHj~z0pMe7RGsxvkDLyUHwXSgPf9DCDzP9EfQF28JcMVk4pGgrw9SmWgMzxju-eDQ~crVQJoxD7852N870NhezbrWaSDorKVaBhHVibG7uRPCZAZ6GRnXp0q64l8oeJujL3d35HUldSXg~Y~5hv42qxBXw1GNz39ved9Voh5hyNTZZ1yVuAbPSyMJpD-kaDR0TxlvXjjUEJ0ZwjExzt8P8vrO~5NiwKNuiMQIOm~QVRbQ98-2VW~G8cKePmGa-vVLCh5iyDSVRA1w4OR7XEVWTxgcDPZ~A2f0-w7I~SQkNwCoQ-udjbQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    title: 'Doberman',
    gender: 'Male',
    age: '2 months',
  },
  {
    id: '3',
    image:
      'https://s3-alpha-sig.figma.com/img/1948/4914/2adc71715fce2aed01ed35d673983d38?Expires=1691366400&Signature=GnM7rsIId6vihWcktbiHExGfoKAJJzSieM9ZBANIA39ABpwk7d8Zmgkrtm9vXaiInm1aWGuAt9bjduaucLuODI5D~vpDkpLT8v7Cv4wpkfty6JShdpr6PsDoqzLTlBA-DiXK-4w3HFsAYKF1cTmW4rKPWXAP6BydpowFd1gsDAGIvq8x4J7cZz0OB2HR8XeJN1liEg6GOeiCfWfLeybAnpe9NfNfSLkwSQGDomzifnOrim2DIh~1H1MJLzH7lmtu~jYxkYhi0kBS5kNu09-jB4r2qLQNlU5vWNFCtYYNkB-fKDzwbUN933z8UPxmH-HyCEuxT~Cb8FpnsW33CrAzzw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    title: 'Apso',
    gender: 'Female',
    age: '1 year',
  },
  {
    id: '4',
    image:
      'https://s3-alpha-sig.figma.com/img/8fc5/6a61/25329202c06ea1967bb3286ebc0cb4ae?Expires=1691366400&Signature=nyjekhnINhUd1uFCtlw1BfeieqNODVyMdshH7Q844LMFia50YoTcuB1ehVJRLERgVZUitIyG0vFY1JVmDJuatOPBl-dFkb9CkIgWGmH5mKBGMWYulkPfOT88mD9dIvehvwHiTA2wTYWKqRX4WIXb250Uar9br4~LWiPHG3kUE0PxMpb27HhLP~7WrxMgodMaot0-UDAlJv31EMU2tkC9y~B7NzhVYor1-cBN3Gw7Ve~LtXAeVheDXKJ8C3mkIDcNuF6tLr7gFwOjuXAIspt20Znn8Ifh8hsEzOWq1~RM2RKgWQohLfw40PHSCBrhkROUsf2o70NyBT64EZH-xqYJsQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    title: 'Chihuahua',
    gender: 'Female',
    age: '1 year',
  },
  {
    id: '5',
    image:
      'https://s3-alpha-sig.figma.com/img/acfd/b71b/d3064dd4cdc3f42eb0b06a78bf14156b?Expires=1691366400&Signature=W9mtfkArJvYo3SWwVLHCqdq33rW-h~l0JSEuxe1H2Imr0H7qqSpFKFUhF9SxnvlJTn1CMI4H~7jaJXvxCP~IVF2zN2oo9s0ot3~PJz~ghhVuCqkWCPoBPHUQpBwwz0aDnYW3XLEMI71qC0YHwhWTAgl6DdAsi2RsNbzroMcTlZ~YLZ9nIOQdmYakPfKyk8ZhQZaWz0NRKrGdxfTTSDiCgCzb7lEno0e8kRNylQRk3~V~AXlCEwff8PKQjjAzdAswL5Y8GJYM6DsprKiN100QmKatD44kdrvOjxDi9bvwM9zAj40V-o1R9aAlTwraWk1FJWTe-snM1A7EZli2xvUeug__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    title: 'Japanese Spitz',
    gender: 'Male',
    age: '2 months',
  },
  {
    id: '6',
    image:
      'https://s3-alpha-sig.figma.com/img/964b/8da1/f7790d744f23ff29544013ff951c6b92?Expires=1691366400&Signature=AI5YWzl0G8nWMWVzR0NaSFLTx0mMWkRudqcBf1p9eqFQXTKbGicEO09SEDz~hkUwHgVn9OmgHq2V5kcgQJ0d6zyswcTEHsZqQxPyEvGgwKO9Xvc~aF6AXmIi5om7lj8M6Ue5ZPNhnrax4H-yQQzkbA0G~~ukPwRkRL7xCk7Z0I38dgOPFyGpi1-pqHrpc89Xinz~UjpCskb7X5yrG42HhRQ4YwHRLfQO83g0N9UV6Aac2PrnWV4AxVchRWAKwBSSodMYI7Sk3ftiPNL6EW~MMlGpLD4yMstovEPS8qLFKY8oCSghnt6FFC8LSo72kryj~se93BT6EbRYUmJaTioqQg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    title: 'German Shepard',
    gender: 'Male',
    age: '2 months',
  },
  {
    id: '7',
    image:
      'https://s3-alpha-sig.figma.com/img/07ef/b9fe/bac78cf2c52fe3898d2567779baec072?Expires=1691366400&Signature=Zjh7taMsrmbLYX281ikYxu0-0qG9n-w-DFwxvvy50b-odRLU6VczBNwakonf8udCydptxSgSIyTHt3HV9W8GvgP4mN~L9bUw9XwMOVjESmEvqyiZ1lGkmI9wm0yLovLb862YiLvVRRmr6WggzEwB-9DZ1LUi74pknCYFZqvsBAeNDMcfdLjo~pFPLtJYbiQsLTmFfcN2VUcM1OpZMZRbTU24IVtAGv3DJBfv7h9Z5u-nGGujpnpNU-owWlWszQfGGC2sEbw6qlm9h4d~C0X1pUb0vOM-DehpAzjqbxmaJffqolCXS5tnPOhECRpQAREWpiaq1550A69cJk7a6PQuYg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    title: 'Husky',
    gender: 'Male',
    age: '3 months',
  },
  {
    id: '8',
    image:
      'https://s3-alpha-sig.figma.com/img/7579/05b6/5516eef56842cd67b9c0a6ddecc4a814?Expires=1691366400&Signature=QkYtOVxN7BwJb~xEg15D4XdvAtACAD9sy3ykC7rMejUuHzEsesnwOgWMUKJ~qjRYkzv5ZlG1FG~2Kv5Ym39tuBUpas9SRVoke5pTQXstTvrikxEknKsrxR6uf-dhe0XNyaPddYeuyPaEbuoAJjA7FCuGGAe~MIlJIvtXwZ5n1eKj81~w6ByMWeAj3n-HhTguUAiat1YzG18NJOqUsXK00nXb64QLuWBy3GScoAmYw7GEvY~JJsWOrRULSA7CbKN-AjTsX5o~x0F49nuNgiPiu1zg9w7mNiQSrO69TGjleDvHS9O6ncU5eHOXGLWkvfwrQO66s29thVT~O-7h-1-nDQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    title: 'Pug',
    gender: 'Male',
    age: '4 months',
  },
];

export default petsData;
