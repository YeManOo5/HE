import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import ScreenB from './src/ScreenB'
import Welcome from './src/Welcome'
import Content from './src/Content'
import Youth from './youth/Youth'
import Yone from './youth/Yone'
import Ytwo from './youth/Ytwo'
import Ythree from './youth/Ythree'
import Yfour from './youth/Yfour'
import Yfive from './youth/Yfive'
import Ysix from './youth/Ysix'
import Anc from './anc/Anc'
import Ancone from './anc/Ancone'
import AncTwo from './anc/Anctwo'
import AncFour from './anc/Ancfour'
import AncFive from './anc/Ancfive'
import AncThree from './anc/Ancthree'
import Deli from './Deli/Deli'
import Pnc from './pnc/Pnc'
import Pncone from './pnc/Pncone'
import Pnctwo from './pnc/Pnctwo'
import Pncthree from './pnc/Pncthree'
import Neo from './neonatal/Neo'
import Neoone from './neonatal/Neoone'
import Neotwo from './neonatal/Neotwo'
import Neothree from './neonatal/Neothree'
import Neofour from './neonatal/Neofour'
import Neofive from './neonatal/Neofive'
import Neosix from './neonatal/Neosix'
import Neoseven from './neonatal/Neoseven'
import NeoEight from './neonatal/NeoEight'
import Per from './Personal/Per'
import Perone from './Personal/Perone'
import Pertwo from './Personal/Pertwo'
import Inf from './Infect/Inf'
import infa from './Infect/infa'
import infb from './Infect/infb'
import infc from './Infect/infc'
import infd from './Infect/infd'
import infe from './Infect/infe'
import inff from './Infect/inff'
import infg from './Infect/infg'
import infh from './Infect/infh'
import infi from './Infect/infi'
import infj from './Infect/infj'
import infk from './Infect/infk'
import infl from './Infect/infl'
import infm from './Infect/infm'
import infn from './Infect/infn'
import info from './Infect/info'
import infp from './Infect/infp'
import infq from './Infect/infq'
import infr from './Infect/infr'
import infs from './Infect/infs'
import inft from './Infect/inft'
import infu from './Infect/infu'
import infv from './Infect/infv'
import Non from './NonComm/Non'
import nona from './NonComm/nona'
import nonb from './NonComm/nonb'
import nonc from './NonComm/nonc'
import nond from './NonComm/nond'
import none from './NonComm/none'
import nonf from './NonComm/nonf'
import nong from './NonComm/nong'
import Env from './Environmental/Env'
import enva from './Environmental/enva'
import envb from './Environmental/envb'
import men from './mental/men'
import mena from './mental/mena'
import menb from './mental/menb'
import menc from './mental/menc'
import mend from './mental/mend'
import mene from './mental/mene'
import Ref from './Reference/Ref'
import noon from './NonComm/noon'
import man from './mental/man'
const Stack = createStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          header: () => null
        }} >
        <Stack.Screen name='Hefirstpg'
          component={Welcome} />
        <Stack.Screen name='Contpg'
          component={Content} />
        <Stack.Screen name='Youth'
          component={Youth} />
        <Stack.Screen name='Yone'
          component={Yone} />
        <Stack.Screen name='Ytwo'
          component={Ytwo} />
        <Stack.Screen name='Ythree'
          component={Ythree} />
        <Stack.Screen name='Yfour'
          component={Yfour} />
        <Stack.Screen name='Yfive'
          component={Yfive} />
        <Stack.Screen name='Ysix'
          component={Ysix} />
        <Stack.Screen name='Anc'
          component={Anc} />
        <Stack.Screen name='Ancone'
          component={Ancone} />
        <Stack.Screen name='Anctwo'
          component={AncTwo} />
        <Stack.Screen name='Ancthree'
          component={AncThree} />
        <Stack.Screen name='Ancfour'
          component={AncFour} />
        <Stack.Screen name='Ancfive'
          component={AncFive} />
        <Stack.Screen name='Deli'
          component={Deli} />
        <Stack.Screen name='Pnc'
          component={Pnc} />
        <Stack.Screen name='Pncone'
          component={Pncone} />
        <Stack.Screen name='Pnctwo'
          component={Pnctwo} />
        <Stack.Screen name='Pncthree'
          component={Pncthree} />
        <Stack.Screen name='Neo'
          component={Neo} />
        <Stack.Screen name='Neoone'
          component={Neoone} />
        <Stack.Screen name='Neotwo'
          component={Neotwo} />
        <Stack.Screen name='Neothree'
          component={Neothree} />
        <Stack.Screen name='Neofour'
          component={Neofour} />
        <Stack.Screen name='Neofive'
          component={Neofive} />
        <Stack.Screen name='Neosix'
          component={Neosix} />
        <Stack.Screen name='Neoseven'
          component={Neoseven} />
        <Stack.Screen name='Neoeight'
          component={NeoEight} />
        <Stack.Screen name='Per'
          component={Per} />
        <Stack.Screen name='Perone'
          component={Perone} />
        <Stack.Screen name='Pertwo'
          component={Pertwo} />
        <Stack.Screen name='Inf'
          component={Inf} />
        <Stack.Screen name='infa'
          component={infa} />
        <Stack.Screen name='infb'
          component={infb} />
        <Stack.Screen name='infc'
          component={infc} />
        <Stack.Screen name='infd'
          component={infd} />
        <Stack.Screen name='infe'
          component={infe} />
        <Stack.Screen name='inff'
          component={inff} />
        <Stack.Screen name='infg'
          component={infg} />
        <Stack.Screen name='infh'
          component={infh} />
        <Stack.Screen name='infi'
          component={infi} />
        <Stack.Screen name='infj'
          component={infj} />
        <Stack.Screen name='infk'
          component={infk} />
        <Stack.Screen name='infl'
          component={infl} />
        <Stack.Screen name='infm'
          component={infm} />
        <Stack.Screen name='infn'
          component={infn} />
        <Stack.Screen name='info'
          component={info} />
        <Stack.Screen name='infp'
          component={infp} />
        <Stack.Screen name='infq'
          component={infq} />
        <Stack.Screen name='infr'
          component={infr} />
        <Stack.Screen name='infs'
          component={infs} />
        <Stack.Screen name='inft'
          component={inft} />
        <Stack.Screen name='infu'
          component={infu} />
        <Stack.Screen name='infv'
          component={infv} />
        <Stack.Screen name='Non'
          component={Non} />
          <Stack.Screen name='noon'
          component={noon} />
        <Stack.Screen name='nona'
          component={nona} />
        <Stack.Screen name='nonb'
          component={nonb} />

        <Stack.Screen name='nonc'
          component={nonc} />
        <Stack.Screen name='nond'
          component={nond} />
        <Stack.Screen name='none'
          component={none} />

        <Stack.Screen name='nonf'
          component={nonf} />
        <Stack.Screen name='nong'
          component={nong} />
        <Stack.Screen name='Env'
          component={Env} />
        <Stack.Screen name='enva'
          component={enva} />
         <Stack.Screen name='envb'
          component={envb} />
          <Stack.Screen name='men'
          component={men} />
          <Stack.Screen name='man'
          component={man} />
          <Stack.Screen name='mena'
          component={mena} />
          <Stack.Screen name='menb'
          component={menb} />
          <Stack.Screen name='menc'
          component={menc} />
          <Stack.Screen name='mend'
          component={mend} />
          <Stack.Screen name='mene'
          component={mene} />

        <Stack.Screen name='Ref'
          component={Ref} />


      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;