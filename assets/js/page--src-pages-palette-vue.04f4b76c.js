(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{TeQF:function(t,r,o){"use strict";var e=o("I+eb"),n=o("tycR").filter,s=o("Hd5f"),i=o("rkAj"),c=s("filter"),u=i("filter");e({target:"Array",proto:!0,forced:!c||!u},{filter:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},vsvo:function(t,r,o){"use strict";o.r(r);o("TeQF"),o("yXV3"),o("oVuX"),o("rB9j"),o("EnZy");var e=o("+pc7"),n={components:{ColorBanner:e.a},computed:{colors:function(){try{return this.$route.query.colors.split("-").filter((function(t,r,o){return/^[0-9A-F]{6}$/i.test(t.toUpperCase())&&o.indexOf(t)===r}))}catch(t){return[]}}},methods:{foo:function(t){t.join("-")!==this.$route.query.colors&&this.$router.push({path:"/palette",query:{colors:t.join("-")}})}}},s=o("KHd+"),i=Object(s.a)(n,(function(){var t=this.$createElement,r=this._self._c||t;return r("Layout",[r("div",{staticClass:"h-screen -mt-20 pt-16"},[r("color-banner",{attrs:{colors:this.colors},on:{update:this.foo}})],1)])}),[],!1,null,null,null);r.default=i.exports}}]);