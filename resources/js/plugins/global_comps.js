import IconifyIcon from '@iconify/vue'
import Breadcrumb from './../components/Breadcrumbs'
import BSeperator from './../components/BreadcrumbSeperator'
import TitleBoard from './../components/TitleBoard'
import TextInput from './../components/TextInput'
import SelectInput from './../components/SelectInput'
import PrimaryBtn from './../components/PrimaryBtn'
import SecondaryBtn from './../components/SecondaryBtn'
import SwitchInput from './../components/SwitchInput'
import Tabs from './../components/Tabs'
import Checkbox from './../components/Checkbox'
import FileInput from './../components/FileInput'
import RadioInput from './../components/RadioInput'
import Dropdown from './../components/Dropdown'
import CardBg from './../components/CardBackground'
import TextareaInput from './../components/TextareaInput'

 const GlobalComps = {
     install(Vue, option){
        Vue.component('IconifyIcon', IconifyIcon)
        Vue.component('Breadcrumb',Breadcrumb)
        Vue.component('BSeperator',BSeperator)
        Vue.component('TitleBoard',TitleBoard)
        Vue.component('TextInput',TextInput)
        Vue.component('SelectInput',SelectInput)
        Vue.component('PrimaryBtn',PrimaryBtn)
        Vue.component('SwitchInput',SwitchInput)
        Vue.component('Checkbox',Checkbox)
        Vue.component('Tabs',Tabs)
        Vue.component('FileInput',FileInput)
        Vue.component('SecondaryBtn',SecondaryBtn)
        Vue.component('RadioInput',RadioInput)
        Vue.component('Dropdown',Dropdown)
        Vue.component('CardBg',CardBg)
        Vue.component('TextareaInput',TextareaInput)
     }
 }

 export default GlobalComps