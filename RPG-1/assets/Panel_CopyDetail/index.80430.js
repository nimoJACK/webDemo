window.__require=function t(o,e,n){function i(l,a){if(!e[l]){if(!o[l]){var c=l.split("/");if(c=c[c.length-1],!o[c]){var s="function"==typeof __require&&__require;if(!a&&s)return s(c,!0);if(r)return r(c,!0);throw new Error("Cannot find module '"+l+"'")}l=c}var h=e[l]={exports:{}};o[l][0].call(h.exports,function(t){return i(o[l][1][t]||t)},h,h.exports,t,o,e,n)}return e[l].exports}for(var r="function"==typeof __require&&__require,l=0;l<n.length;l++)i(n[l]);return i}({Panel_CopyDetail:[function(t,o,e){"use strict";cc._RF.push(o,"12c5b7uHTBO+5YNg3gKNmoG","Panel_CopyDetail");var n,i=this&&this.__extends||(n=function(t,o){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var e in o)Object.prototype.hasOwnProperty.call(o,e)&&(t[e]=o[e])})(t,o)},function(t,o){function e(){this.constructor=t}n(t,o),t.prototype=null===o?Object.create(o):(e.prototype=o.prototype,new e)}),r=this&&this.__decorate||function(t,o,e,n){var i,r=arguments.length,l=r<3?o:null===n?n=Object.getOwnPropertyDescriptor(o,e):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,o,e,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(l=(r<3?i(l):r>3?i(o,e,l):i(o,e))||l);return r>3&&l&&Object.defineProperty(o,e,l),l};Object.defineProperty(e,"__esModule",{value:!0});var l=t("../../../Bundle1_Loading/Scripts/Config/EnumTypes"),a=t("../../../Bundle1_Loading/Scripts/Mgr/CfgMgr"),c=t("../../../Bundle1_Loading/Scripts/Mgr/EventMgr"),s=t("../../../Bundle1_Loading/Scripts/Tool/Tool"),h=t("../../../Bundle2_Main/Scripts/Mgr/IconMgr"),u=t("../../../Bundle2_Main/Scripts/Panel/Panel"),p=cc._decorator,d=p.ccclass,f=p.property,g=function(t){function o(){var o=null!==t&&t.apply(this,arguments)||this;return o.levelLabel=null,o.leftBtn=null,o.rightBtn=null,o.goBtn=null,o.awardLayout=null,o.nowChoose=0,o}return i(o,t),o.prototype.init=function(){this.levelData=a.CfgMgr.instance.getCfg("CopyTower"),s.Tool.addClickEvent(this.leftBtn,this.onLeftBtnClick,this),s.Tool.addClickEvent(this.rightBtn,this.onRightBtnClick,this),s.Tool.addClickEvent(this.goBtn,this.onGoBtnClick,this)},o.prototype.openCb=function(){this.updateChoose()},o.prototype.closeCb=function(){},o.prototype.updateChoose=function(){var t=this.levelData[this.nowChoose].level;this.levelLabel.string=t,this.leftBtn.active=this.nowChoose>0,this.rightBtn.active=this.nowChoose<this.levelData.length-1;var o=this.levelData[this.nowChoose].reward,e=o.length-this.awardLayout.childrenCount;if(e>0)for(var n=0;n<e;n++){var i=cc.instantiate(this.awardLayout.children[0]);this.awardLayout.addChild(i)}else if(e<0)for(n=this.awardLayout.childrenCount-1;n>=this.awardLayout.childrenCount+e;n--)this.awardLayout.children[n].destroy();for(n=0;n<o.length;n++){var r=this.awardLayout.children[n].getComponent(cc.Sprite);h.default.loadIcon(o[n],r)}},o.prototype.onLeftBtnClick=function(){this.nowChoose--,this.nowChoose<0&&(this.nowChoose=0),this.updateChoose()},o.prototype.onRightBtnClick=function(){this.nowChoose++,this.nowChoose>this.levelData.length-1&&(this.nowChoose=this.levelData.length-1),this.updateChoose()},o.prototype.onGoBtnClick=function(){c.EventMgr.event(l.EventType.Battle_Go_Copy,this.levelData[this.nowChoose]),this.close()},r([f(cc.Label)],o.prototype,"levelLabel",void 0),r([f(cc.Node)],o.prototype,"leftBtn",void 0),r([f(cc.Node)],o.prototype,"rightBtn",void 0),r([f(cc.Node)],o.prototype,"goBtn",void 0),r([f(cc.Node)],o.prototype,"awardLayout",void 0),r([d],o)}(u.default);e.default=g,cc._RF.pop()},{"../../../Bundle1_Loading/Scripts/Config/EnumTypes":void 0,"../../../Bundle1_Loading/Scripts/Mgr/CfgMgr":void 0,"../../../Bundle1_Loading/Scripts/Mgr/EventMgr":void 0,"../../../Bundle1_Loading/Scripts/Tool/Tool":void 0,"../../../Bundle2_Main/Scripts/Mgr/IconMgr":void 0,"../../../Bundle2_Main/Scripts/Panel/Panel":void 0}]},{},["Panel_CopyDetail"]);