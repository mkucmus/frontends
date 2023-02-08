import { defineComponent, ref, mergeProps, unref, useSSRContext } from 'vue';
import { L as onClickOutside } from '../server.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderClass, ssrRenderAttr, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'destr';
import 'ufo';
import 'h3';
import '@unhead/vue';
import '@unhead/dom';
import '@unhead/ssr';
import 'vue-router';
import 'cookie-es';
import 'ohash';
import 'scule';
import 'axios';
import 'query-string';
import 'defu';
import '../../nitro/config.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ListingFiltersShippingFree",
  __ssrInlineRender: true,
  props: {
    filter: null
  },
  emits: ["select-value"],
  setup(__props, { emit: emits }) {
    const state = ref(false);
    const isOpen = ref(false);
    const dropdownElement = ref(null);
    onClickOutside(dropdownElement, () => isOpen.value = false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "dropdownElement",
        ref: dropdownElement,
        class: "relative"
      }, _attrs))}><button type="button" class="border-2 border-gray-300 px-2 py-3 bg-white w-full flex items-center justify-between text-gray-400 hover:text-gray-500 rounded"><span class="font-medium text-gray-900">${ssrInterpolate(__props.filter.label)}</span><span class="ml-6 flex items-center"><div class="${ssrRenderClass([[!unref(isOpen) ? "i-carbon-chevron-down" : "i-carbon-chevron-up"], "h-5 w-5"])}"></div></span></button><div class="${ssrRenderClass([
        `absolute mt-1 bg-white border-2 border-gray-300 max-h-70 overflow-auto p-3 rounded z-1000`,
        { hidden: !unref(isOpen) }
      ])}"><div class="flex items-center"><input${ssrRenderAttr("id", `filter-mobile-${__props.filter.id || __props.filter.code}`)}${ssrIncludeBooleanAttr(unref(state)) ? " checked" : ""}${ssrRenderAttr("name", __props.filter.name)}${ssrRenderAttr("value", __props.filter.name)} type="checkbox" class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"><label${ssrRenderAttr("for", `filter-mobile-${__props.filter.id || __props.filter.code}`)} class="ml-3 min-w-0 flex-1 text-gray-500">${ssrInterpolate(__props.filter.label)}</label></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/listing-filters/ListingFiltersShippingFree.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=ListingFiltersShippingFree-1db15f3d.mjs.map
