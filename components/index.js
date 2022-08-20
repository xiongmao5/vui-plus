import VButton from './Button/index.vue'
import VPagination from './Pagination/index.vue'
import VLink from './Link/index.vue'
import VRadio from './Radio/index.vue'
import VRadioGroup from './RadioGroup'
import VCheckbox from './Checkbox'
import VCheckboxGroup from './CheckboxGroup'
import VCard from './Card/index.vue'
import VCarousel from './Carousel/index.vue'
import VCarouselItem from './CarouselItem/index.vue'
import VDropdown from './Dropdown/index.vue'
import VNavMenu from './NavMenu/index.vue'
import VSwiper from './Swiper'
import VSwiperItem from './SwiperItem'
import VRate from './Rate'
import VSwitch from './Switch'
import VDialog from './Dialog'
import VInput from './input'
import './index.scss'

export default {
  install (app) {
    app.component(VButton.name, VButton)
    app.component(VPagination.name, VPagination)
    app.component(VLink.name, VLink)
    app.component(VRadio.name, VRadio)
    app.component(VRadioGroup.name, VRadioGroup)
    app.component(VCheckbox.name, VCheckbox)
    app.component(VCheckboxGroup.name, VCheckboxGroup)
    app.component(VCard.name, VCard)
    app.component(VCarousel.name, VCarousel)
    app.component(VCarouselItem.name, VCarouselItem)
    app.component(VDropdown.name, VDropdown)
    app.component(VNavMenu.name, VNavMenu)
    app.component(VSwiper.name, VSwiper)
    app.component(VSwiperItem.name, VSwiperItem)
    app.component(VRate.name, VRate)
    app.component(VSwitch.name, VSwitch)
    app.component(VDialog.name, VDialog)
    app.component(VInput.name, VInput)
  }
}
