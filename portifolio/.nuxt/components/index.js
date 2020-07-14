export { default as HelloWorld } from '../..\\components\\HelloWorld.vue'
export { default as Logo } from '../..\\components\\Logo.vue'
export { default as Bio } from '../..\\components\\profile\\Bio.vue'

export const LazyHelloWorld = import('../..\\components\\HelloWorld.vue' /* webpackChunkName: "components_HelloWorld'}" */).then(c => c.default || c)
export const LazyLogo = import('../..\\components\\Logo.vue' /* webpackChunkName: "components_Logo'}" */).then(c => c.default || c)
export const LazyBio = import('../..\\components\\profile\\Bio.vue' /* webpackChunkName: "components_profile/Bio'}" */).then(c => c.default || c)
