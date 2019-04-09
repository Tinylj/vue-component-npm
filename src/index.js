import './component/lh-css.css'
import './component/test.css'//引用多个css
import '../static/img/1.png'
import LhAside from './packages/aside/index';

const components = [
    LhAside,
    // ...如果还有的话继续添加
]

const install = function (Vue, opts = {}) {
    components.map(component => {
        Vue.component(component.name, component);
    })
}

/* 支持使用标签的方式引入 */
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    install,
    LhAside,
}
