window.__require=function t(e,n,i){function o(l,s){if(!n[l]){if(!e[l]){var r=l.split("/");if(r=r[r.length-1],!e[r]){var h="function"==typeof __require&&__require;if(!s&&h)return h(r,!0);if(a)return a(r,!0);throw new Error("Cannot find module '"+l+"'")}l=r}var d=n[l]={exports:{}};e[l][0].call(d.exports,function(t){return o(e[l][1][t]||t)},d,d.exports,t,e,n,i)}return n[l].exports}for(var a="function"==typeof __require&&__require,l=0;l<i.length;l++)o(i[l]);return o}({Panel_ArmorDetail:[function(t,e,n){"use strict";cc._RF.push(e,"120aa3C4g5I0oKCkfrIIRO3","Panel_ArmorDetail");var i,o=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),a=this&&this.__decorate||function(t,e,n,i){var o,a=arguments.length,l=a<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,i);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(l=(a<3?o(l):a>3?o(e,n,l):o(e,n))||l);return a>3&&l&&Object.defineProperty(e,n,l),l};Object.defineProperty(n,"__esModule",{value:!0});var l=t("../../../Bundle1_Loading/Scripts/Config/EnumTypes"),s=t("../../../Bundle1_Loading/Scripts/Mgr/EventMgr"),r=t("../../../Bundle1_Loading/Scripts/Tool/Tool"),h=t("../../../Bundle2_Main/Scripts/Config/Main_GameData"),d=t("../../../Bundle2_Main/Scripts/Mgr/EquipMgr"),c=t("../../../Bundle2_Main/Scripts/Mgr/IconMgr"),p=t("../../../Bundle2_Main/Scripts/Mgr/RoleMgr"),u=t("../../../Bundle2_Main/Scripts/Panel/Panel"),g=t("../../../Bundle2_Main/SeverTest/SeverMgr"),f=cc._decorator,y=f.ccclass,v=f.property,w=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.qualitySpriteFrames=[],e.nowSlotIndex=0,e.nowSelectIndex="",e.nowOwnEquip=[],e}return o(e,t),e.prototype.init=function(){},e.prototype.openCb=function(){s.EventMgr.on(l.EventType.Equip_Update_Event,this.updateData,this),s.EventMgr.on(l.EventType.Role_Update_Event,this.updateData,this)},e.prototype.closeCb=function(){s.EventMgr.off(l.EventType.Equip_Update_Event,this.updateData,this),s.EventMgr.off(l.EventType.Role_Update_Event,this.updateData,this)},e.prototype.updateData=function(){this.updateList(),this.updateShow()},e.prototype.initData=function(t,e){this.nowSlotIndex=t,this.nowRoleData=e,this.btnInit(),this.initList(),this.initShow()},e.prototype.initList=function(){this.listContent=this.panel.getChildByName("list").getChildByName("view").getChildByName("content"),this.updateList()},e.prototype.updateList=function(){var t=d.default.getSlotNames()[this.nowSlotIndex],e=g.default.instance.localData.hasEquips,n=[];for(var i in e){var o=e[i];d.default.getJsonData(o.id).slot==t&&n.push(o)}this.nowOwnEquip=r.Tool.cloneArray_Obj(n),this.showContentCountDeal(n.length,this.listContent);for(var a=0;a<n.length;a++)r.Tool.addClickEvent(this.listContent.children[a],this.onListClick,this,[n[a].index]);if(n.length>0){var l=!1;for(a=0;a<n.length;a++)if(n[a].index==this.nowSelectIndex){l=!0;break}l||(this.nowSelectIndex=n[0].index)}var s=this.nowOwnEquip;if(0!=s.length){for(a=0;a<s.length;a++){var h=0!=d.default.checkEquipIsWear(s[a].index),c=this.nowSelectIndex==s[a].index;this.itemDeal(this.listContent.children[a],s[a],h,c)}this.btnUpdate()}else this.itemDealEmpty(this.listContent.children[0])},e.prototype.onListClick=function(t){var e=t[0];this.nowSelectIndex=e,this.updateList(),this.updateShow()},e.prototype.itemDeal=function(t,e,n,i){for(var o=0;o<t.children.length;o++)t.children[o].opacity=255;var a=t.getChildByName("icon"),l=t.getChildByName("isChoose"),s=t.getChildByName("select");s&&(s.opacity=i?255:0),l&&(l.opacity=n?255:0),c.default.loadIcon(e.id,a.getComponent(cc.Sprite))},e.prototype.itemDealEmpty=function(t){for(var e=0;e<t.children.length;e++)t.children[e].opacity=0},e.prototype.initShow=function(){var t=this.panel.getChildByName("show"),e=t.getChildByName("top");this.showTop=e.getComponent(cc.Sprite),this.showIcon=e.getChildByName("slot").getChildByName("icon").getComponent(cc.Sprite),this.showName=e.getChildByName("name").getComponent(cc.Label),this.showQuality=e.getChildByName("qualityLabel").getComponent(cc.Label),this.showType=e.getChildByName("typeLabel").getComponent(cc.Label),this.showLevel=e.getChildByName("levelLabel").getComponent(cc.Label);var n=t.getChildByName("detailView").getChildByName("view").getChildByName("content");this.showContent=n,this.showBase=n.getChildByName("layout_base"),this.showEnchantment=n.getChildByName("layout_enchantment"),this.showAdd=n.getChildByName("layout_add"),this.updateShow()},e.prototype.updateShow=function(){for(var t,e=0;e<this.nowOwnEquip.length;e++)if(this.nowOwnEquip[e].index==this.nowSelectIndex){t=this.nowOwnEquip[e];break}this.showDeal(t)},e.prototype.showDeal=function(t){if(t){this.showContent.active=!0,c.default.loadIcon(t.id,this.showIcon);var e=d.default.getJsonData(t.id);this.showName.string=e.name;for(var n=-1,i=[15,30,45,60,75,90],o=0;o<i.length;o++)t.quality>=i[o]&&(n=o);this.showTop.spriteFrame=n>=0?this.qualitySpriteFrames[n]:null,this.showQuality.string="\u54c1\u8d28\uff1a"+h.default.qualityNames[n+1],this.showType.string="\u7c7b\u578b\uff1a"+d.default.translateTypeName(e.type),this.showLevel.string="\u7b49\u7ea7\uff1a"+t.level.toString();var a=[];for(var l in t.property)a.push({name:l,value:t.property[l]});for(this.showContentCountDeal(a.length,this.showBase),o=0;o<a.length;o++){var s=this.showBase.children[o],r=d.default.translatePropertyName(a[o].name),p=a[o].value;s.getChildByName("label").getComponent(cc.Label).string="+"+p+r}var u=d.default.getEnchantAddValue(t);for(this.showContentCountDeal(u.length,this.showEnchantment),o=0;o<u.length;o++){s=this.showEnchantment.children[o];var g=d.default.translateEnchantName(t.enchantment);r=d.default.translatePropertyName(u[o].key),p=u[o].value,s.getChildByName("label").getComponent(cc.Label).string="+"+p+r,s.getChildByName("title").getComponent(cc.Label).string="\u3010"+g+"\u3011"}var f=t.addProperty;for(this.showContentCountDeal(f.length,this.showAdd),o=0;o<f.length;o++)s=this.showAdd.children[o],r=d.default.translateAddPropertyName(f[o].key),p=f[o].value,s.getChildByName("label").getComponent(cc.Label).string="+"+p+r}else this.showContent.active=!1,this.showIcon.spriteFrame=null,this.showName.string="\u7a7a",this.showQuality.string="",this.showType.string="",this.showLevel.string="",this.showTop.spriteFrame=null},e.prototype.showContentCountDeal=function(t,e){if(0!=t){e.active=!0;var n=t-e.children.length;if(n>0)for(var i=e.children[0],o=0;o<n;o++){var a=cc.instantiate(i);e.addChild(a)}else for(o=e.children.length-1;o>=t;o--)e.children[o].destroy()}else e.active=!1},e.prototype.btnInit=function(){var t=this.panel.getChildByName("btns");this.btn_switch=t.getChildByName("btn_switch"),this.btn_sold=t.getChildByName("btn_sold"),r.Tool.addClickEvent(this.btn_switch,this.onSwitchBtnClick,this),r.Tool.addClickEvent(this.btn_sold,this.onSoldBtnClick,this)},e.prototype.btnUpdate=function(){var t="\u7a7f\u4e0a";d.default.checkEquipIsWear(this.nowSelectIndex)?t="\u5378\u4e0b":d.default.checkSlotIsWear(this.nowRoleData.index,this.nowSlotIndex)&&(t="\u66ff\u6362"),this.btn_switch.getChildByName("label").getComponent(cc.Label).string=t},e.prototype.onSwitchBtnClick=function(){var t=d.default.checkEquipIsWear(this.nowSelectIndex);if(t){if(t.index==this.nowRoleData.index)return void g.default.instance.roleReduceEquip(this.nowRoleData.index,this.nowSelectIndex);var e=p.default.getJsonData(t).name+t.index;s.EventMgr.event(l.EventType.Tips_Toast_Event,"\u3010"+e+"\u3011\u7a7f\u4e86\u8fd9\u4e2a\u88c5\u5907\uff0c\u53bb\u5230\u3010"+e+"\u3011\u8eab\u4e0a\u5378\u4e0b\u5427")}else{var n=g.default.instance.localData.hasRoles[this.nowRoleData.index],i=g.default.instance.localData.hasEquips[this.nowSelectIndex];if(n.level<i.level)return void s.EventMgr.event(l.EventType.Tips_Toast_Event,"\u89d2\u8272\u7b49\u7ea7\u4e0d\u591f");g.default.instance.roleAddEquip(this.nowRoleData.index,this.nowSelectIndex)}},e.prototype.onSoldBtnClick=function(){d.default.checkEquipIsWear(this.nowSelectIndex)?s.EventMgr.event(l.EventType.Tips_Toast_Event,"\u8bf7\u5378\u4e0b\u88c5\u5907\u540e\u518d\u51fa\u552e"):g.default.instance.soldEquip(this.nowSelectIndex)},a([v([cc.SpriteFrame])],e.prototype,"qualitySpriteFrames",void 0),a([y],e)}(u.default);n.default=w,cc._RF.pop()},{"../../../Bundle1_Loading/Scripts/Config/EnumTypes":void 0,"../../../Bundle1_Loading/Scripts/Mgr/EventMgr":void 0,"../../../Bundle1_Loading/Scripts/Tool/Tool":void 0,"../../../Bundle2_Main/Scripts/Config/Main_GameData":void 0,"../../../Bundle2_Main/Scripts/Mgr/EquipMgr":void 0,"../../../Bundle2_Main/Scripts/Mgr/IconMgr":void 0,"../../../Bundle2_Main/Scripts/Mgr/RoleMgr":void 0,"../../../Bundle2_Main/Scripts/Panel/Panel":void 0,"../../../Bundle2_Main/SeverTest/SeverMgr":void 0}]},{},["Panel_ArmorDetail"]);