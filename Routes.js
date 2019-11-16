import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Menja from './component/Menja'
import Staja from './component/Staja'
import Upja from './component/Upja'

const navigator = createStackNavigator(
    {
        Menja: {
            screen: Menja, 
            navigationOptions:{
                title: 'Scheluder'
            }
        },
        Staja: {
            screen: Staja,
            navigationOptions: {
                title: 'Jadwal'
            }
        },
        Upja: {
            screen: Upja,
            navigationOptions: {
                title: 'Update'
            }
        }
    },{
        initialRouteName: 'Menja'
    })

const Routes = createAppContainer(navigator)
export default Routes