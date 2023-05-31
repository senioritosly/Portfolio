import Slider from "./Slider"
import thinking from '../../assets/images/thinking_glob.svg'
import disney from './../../assets/images/disneyplus_preview.png'

export default {
    title: 'Components/Slider',
    component: Slider,
    tags: ['autodocs'],
}

export const Thinking = {
    args: {
        glob: thinking,
        title: 'Proyecto 1',
        content: 'Este proyecto es de tal tal cosa',
        img: disney,
    }
}