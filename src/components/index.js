import Vue from 'vue'


const components = [

]

// 将所有组件保存到vue上后面在页面上可以直接用组件name调用
for (let i = 0; i < components.length; i++) {
    Vue.component(components[i].name, components[i])
}