"use strict";(self["webpackChunkbradley_consuegra_portfolio"]=self["webpackChunkbradley_consuegra_portfolio"]||[]).push([[6031],{6031:function(t,o,i){i.d(o,{Slower:function(){return r}});var s=i(5811);class n{constructor(){this.factor=3,this.radius=200}load(t){t&&(void 0!==t.factor&&(this.factor=t.factor),void 0!==t.radius&&(this.radius=t.radius))}}const e="slow",a=0;class r extends s.sJ{constructor(t){super(t)}clear(t,o,i){t.slow.inRange&&!i||(t.slow.factor=1)}init(){const t=this.container,o=t.actualOptions.interactivity.modes.slow;o&&(t.retina.slowModeRadius=o.radius*t.retina.pixelRatio)}interact(){}isEnabled(t){const o=this.container,i=o.interactivity.mouse,n=(t?.interactivity??o.actualOptions.interactivity).events;return n.onHover.enable&&!!i.position&&(0,s.hn)(e,n.onHover.mode)}loadModeOptions(t,...o){t.slow||(t.slow=new n);for(const i of o)t.slow.load(i?.slow)}reset(t){t.slow.inRange=!1;const o=this.container,i=o.actualOptions,n=o.interactivity.mouse.position,e=o.retina.slowModeRadius,r=i.interactivity.modes.slow;if(!r||!e||e<a||!n)return;const c=t.getPosition(),l=(0,s.Yf)(n,c),u=l/e,d=r.factor,{slow:f}=t;l>e||(f.inRange=!0,f.factor=u/d)}}}}]);
//# sourceMappingURL=6031.bad29870.js.map