!function(){var t,e,s={};function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var s=0,r=Array(e);s<e;s++)r[s]=t[s];return r}function a(t){return function(t){if(Array.isArray(t))return r(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return r(t,void 0);var s=Object.prototype.toString.call(t).slice(8,-1);if("Object"===s&&t.constructor&&(s=t.constructor.name),"Map"===s||"Set"===s)return Array.from(s);if("Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return r(t,void 0)}}(t)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var n=function(){var t;function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];!function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}(this,e),this.score=0,this.status=e.STATUS.idle,this.initialState=t,this.state=t.map(function(t){return a(t)})}return t=[{key:"moveLeft",value:function(){var t=this;if(this.getStatus()===e.STATUS.playing){var s=!1,r=this.state.map(function(e){for(var r=e.filter(function(t){return 0!==t}),a=[],n=0;n<r.length;n++)if(r[n]===r[n+1]){var i=2*r[n];a.push(i),t.score+=i,n++,s=!0}else a.push(r[n]);for(;a.length<e.length;)a.push(0);return s||(s=!e.every(function(t,e){return t===a[e]})),a});return s&&(this.state=r,this.addNumbers(),this.setState(),this.checkStatus()),s}}},{key:"moveRight",value:function(){var t=this;if(this.getStatus()===e.STATUS.playing){var s=!1,r=this.state.map(function(e){for(var r=e.filter(function(t){return 0!==t}),a=[],n=r.length-1;n>=0;n--)if(r[n]===r[n-1]){var i=2*r[n];a.unshift(i),t.score+=i,n--,s=!0}else a.unshift(r[n]);for(;a.length<e.length;)a.unshift(0);return s||e.every(function(t,e){return t===a[e]})||(s=!0),a});return s&&(this.state=r,this.addNumbers(),this.setState(),this.checkStatus()),s}}},{key:"moveUp",value:function(){if(this.getStatus()===e.STATUS.playing){for(var t=!1,s=this.state.map(function(t){return a(t)}),r=0;r<this.state[0].length;r++){for(var n=[],i=0;i<this.state.length;i++)0!==this.state[i][r]&&n.push(this.state[i][r]);for(var o=[],u=0;u<n.length;u++)if(n[u]===n[u+1]){var h=2*n[u];o.push(h),this.score+=h,u++,t=!0}else o.push(n[u]);for(;o.length<this.state.length;)o.push(0);for(var l=0;l<this.state.length;l++)s[l][r]!==o[l]&&(s[l][r]=o[l],t=!0)}return t&&(this.state=s,this.addNumbers(),this.setState(),this.checkStatus()),t}}},{key:"moveDown",value:function(){if(this.getStatus()===e.STATUS.playing){for(var t=!1,s=this.state.map(function(t){return a(t)}),r=0;r<this.state[0].length;r++){for(var n=[],i=this.state.length-1;i>=0;i--)0!==this.state[i][r]&&n.push(this.state[i][r]);for(var o=[],u=0;u<n.length;u++)if(n[u]===n[u+1]){var h=2*n[u];o.unshift(h),this.score+=h,u++,t=!0}else o.unshift(n[u]);for(;o.length<this.state.length;)o.unshift(0);for(var l=0;l<this.state.length;l++)s[l][r]!==o[l]&&(s[l][r]=o[l],t=!0)}return t&&(this.state=s,this.addNumbers(),this.setState(),this.checkStatus()),t}}},{key:"getScore",value:function(){return this.score}},{key:"getState",value:function(){return this.state}},{key:"getStatus",value:function(){return this.status}},{key:"start",value:function(){this.status=e.STATUS.playing,this.state=this.initialState.map(function(t){return a(t)}),this.addNumbers(),this.addNumbers(),this.setState()}},{key:"restart",value:function(){this.score=0,this.status=e.STATUS.idle,this.state=this.initialState.map(function(t){return a(t)}),this.setState()}},{key:"getRandomNumber",value:function(){return .9>Math.random()?2:4}},{key:"addNumbers",value:function(){for(var t=[],e=0;e<this.state.length;e++)for(var s=0;s<this.state[e].length;s++)0===this.state[e][s]&&t.push({r:e,c:s});var r=Math.floor(Math.random()*t.length),n=t[r],i=n.r,o=n.c,u=this.state.map(function(t){return a(t)});u[i][o]=this.getRandomNumber(),this.state=u}},{key:"setState",value:function(){var t=document.querySelectorAll(".field-cell"),e=this.state.flat();if(0!==t.length)for(var s=0;s<e.length;s++){var r=t[s],a=e[s];r&&(r.className="field-cell",a>0?(r.textContent=a,r.classList.add("field-cell--".concat(a))):r.textContent="")}}},{key:"checkStatus",value:function(){for(var t=!1,s=!1,r=0;r<this.state.length;r++)for(var a=0;a<this.state[r].length;a++)if(2048===this.state[r][a]){this.status=e.STATUS.win;return}for(var n=0;n<this.state.length;n++){for(var i=0;i<this.state[n].length-1;i++)if(this.state[n][i]===this.state[n][i+1]){s=!0;break}if(s)break}if(!s)for(var o=0;o<this.state.length-1;o++){for(var u=0;u<this.state[o].length;u++)if(this.state[o][u]===this.state[o+1][u]){s=!0;break}if(s)break}for(var h=0;h<this.state.length;h++){for(var l=0;l<this.state[h].length;l++)if(0===this.state[h][l]){t=!0;break}if(t)break}t||s||(this.status=e.STATUS.lose)}}],function(t,e){for(var s=0;s<e.length;s++){var r=e[s];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}(e.prototype,t),e}();e={idle:"idle",playing:"playing",win:"win",lose:"lose"},(t="STATUS")in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e;var i=new(s=n),o=document.querySelector(".button"),u=document.querySelector(".message-start"),h=document.querySelector(".message-lose"),l=document.querySelector(".message-win"),c=document.querySelector(".game-score");o.addEventListener("click",function(){o.classList.toggle("restart"),o.classList.toggle("start"),u.classList.toggle("hidden"),h.classList.add("hidden"),l.classList.add("hidden"),c.textContent=0,o.className.includes("start")&&(o.textContent="Start",i.restart()),o.className.includes("restart")&&(o.textContent="Restart",i.start()),document.addEventListener("keydown",v)});var f=function(){return document.removeEventListener("keydown",v)};function v(t){if(i.getStatus()===s.STATUS.playing){var e=!1;switch(t.key){case"ArrowLeft":e=i.moveLeft();break;case"ArrowRight":e=i.moveRight();break;case"ArrowUp":e=i.moveUp();break;case"ArrowDown":e=i.moveDown()}e&&(c.textContent=i.score)}i.getStatus()===s.STATUS.lose&&(h.classList.remove("hidden"),f()),i.getStatus()===s.STATUS.win&&(l.classList.remove("hidden"),f()),t.preventDefault()}document.addEventListener("keydown",v)}();
//# sourceMappingURL=index.cecf4c0b.js.map