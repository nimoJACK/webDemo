window.__require=function e(t,o,i){function n(l,r){if(!o[l]){if(!t[l]){var s=l.split("/");if(s=s[s.length-1],!t[s]){var h="function"==typeof __require&&__require;if(!r&&h)return h(s,!0);if(a)return a(s,!0);throw new Error("Cannot find module '"+l+"'")}l=s}var c=o[l]={exports:{}};t[l][0].call(c.exports,function(e){return n(t[l][1][e]||e)},c,c.exports,e,t,o,i)}return o[l].exports}for(var a="function"==typeof __require&&__require,l=0;l<i.length;l++)n(i[l]);return n}({Armor_RoleStat:[function(e,t,o){"use strict";cc._RF.push(t,"bc65c6VRpNOzq7QE2lubzsd","Armor_RoleStat");var i,n=this&&this.__extends||(i=function(e,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])})(e,t)},function(e,t){function o(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}),a=this&&this.__decorate||function(e,t,o,i){var n,a=arguments.length,l=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,o,i);else for(var r=e.length-1;r>=0;r--)(n=e[r])&&(l=(a<3?n(l):a>3?n(t,o,l):n(t,o))||l);return a>3&&l&&Object.defineProperty(t,o,l),l};Object.defineProperty(o,"__esModule",{value:!0});var l=e("../../../Bundle2_Main/Scripts/Mgr/RoleMgr"),r=cc._decorator,s=r.ccclass,h=r.property,c=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.hpItem=null,t.mpItem=null,t.atkItem=null,t.defItem=null,t.topAgileItem=null,t.spritItem=null,t.recoveryItem=null,t.atkSpeedItem=null,t.attackRangeItem=null,t.moveSpeedItem=null,t.massItem=null,t.strItem=null,t.downAgileItem=null,t.speedItem=null,t.mentalItem=null,t}return n(t,e),t.prototype.updateData=function(e){this.itemLabelDeal(this.hpItem,l.default.calHP(e)),this.itemLabelDeal(this.mpItem,l.default.calMP(e)),this.itemLabelDeal(this.atkItem,l.default.calAtk(e)),this.itemLabelDeal(this.defItem,l.default.calDef(e)),this.itemLabelDeal(this.topAgileItem,l.default.calNimble(e)),this.itemLabelDeal(this.spritItem,l.default.calSpirt(e)),this.itemLabelDeal(this.recoveryItem,l.default.calRecovery(e)),this.itemLabelDeal(this.atkSpeedItem,100/l.default.calAtkInvertal(e)),this.itemLabelDeal(this.attackRangeItem,l.default.calRange(e)),this.itemLabelDeal(this.moveSpeedItem,l.default.calMoveSpeed(e)),this.itemLabelDeal(this.massItem,l.default.calMass(e)),this.itemLabelDeal(this.strItem,l.default.calStr(e)),this.itemLabelDeal(this.downAgileItem,l.default.calAgile(e)),this.itemLabelDeal(this.speedItem,l.default.calSpeed(e)),this.itemLabelDeal(this.mentalItem,l.default.calMental(e))},t.prototype.itemLabelDeal=function(e,t){e.getChildByName("label").getComponent(cc.Label).string=Math.floor(t).toString()},a([h(cc.Node)],t.prototype,"hpItem",void 0),a([h(cc.Node)],t.prototype,"mpItem",void 0),a([h(cc.Node)],t.prototype,"atkItem",void 0),a([h(cc.Node)],t.prototype,"defItem",void 0),a([h(cc.Node)],t.prototype,"topAgileItem",void 0),a([h(cc.Node)],t.prototype,"spritItem",void 0),a([h(cc.Node)],t.prototype,"recoveryItem",void 0),a([h(cc.Node)],t.prototype,"atkSpeedItem",void 0),a([h(cc.Node)],t.prototype,"attackRangeItem",void 0),a([h(cc.Node)],t.prototype,"moveSpeedItem",void 0),a([h(cc.Node)],t.prototype,"massItem",void 0),a([h(cc.Node)],t.prototype,"strItem",void 0),a([h(cc.Node)],t.prototype,"downAgileItem",void 0),a([h(cc.Node)],t.prototype,"speedItem",void 0),a([h(cc.Node)],t.prototype,"mentalItem",void 0),a([s],t)}(cc.Component);o.default=c,cc._RF.pop()},{"../../../Bundle2_Main/Scripts/Mgr/RoleMgr":void 0}],Panel_Armor:[function(e,t,o){"use strict";cc._RF.push(t,"b4d37SZ5FdHfr7fu+5dWoDR","Panel_Armor");var i,n=this&&this.__extends||(i=function(e,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])})(e,t)},function(e,t){function o(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}),a=this&&this.__decorate||function(e,t,o,i){var n,a=arguments.length,l=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,o,i);else for(var r=e.length-1;r>=0;r--)(n=e[r])&&(l=(a<3?n(l):a>3?n(t,o,l):n(t,o))||l);return a>3&&l&&Object.defineProperty(t,o,l),l};Object.defineProperty(o,"__esModule",{value:!0});var l=e("../../../Bundle1_Loading/Scripts/Comp/Bar"),r=e("../../../Bundle1_Loading/Scripts/Config/EnumTypes"),s=e("../../../Bundle1_Loading/Scripts/Mgr/EventMgr"),h=e("../../../Bundle1_Loading/Scripts/Mgr/PrefabMgr"),c=e("../../../Bundle1_Loading/Scripts/Tool/Tool"),d=e("../../../Bundle2_Main/Scripts/Mgr/EquipMgr"),p=e("../../../Bundle2_Main/Scripts/Mgr/IconMgr"),u=e("../../../Bundle2_Main/Scripts/Mgr/RoleMgr"),f=e("../../../Bundle2_Main/Scripts/Panel/Panel"),m=e("../../../Bundle2_Main/Scripts/Panel/PanelMgr"),g=e("../../../Bundle2_Main/SeverTest/SeverMgr"),v=e("./Armor_RoleStat"),y=cc._decorator,_=y.ccclass,L=y.property,I=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.roleStat=null,t.nowSelectHeroIndex="",t.hasRoleData=[],t.nowHeroListIndex=0,t.nowHeroListMaxIndex=0,t.heroList_Layout=null,t.heroList_btn_left=null,t.heroList_btn_right=null,t}return n(t,e),t.prototype.init=function(){this.initHeroList(),this.initShow(),this.initSlot(),this.initRoleData()},t.prototype.openCb=function(){s.EventMgr.on(r.EventType.Equip_Update_Event,this.updateData,this),s.EventMgr.on(r.EventType.Role_Update_Event,this.updateData,this)},t.prototype.closeCb=function(){s.EventMgr.off(r.EventType.Equip_Update_Event,this.updateData,this),s.EventMgr.off(r.EventType.Role_Update_Event,this.updateData,this)},t.prototype.updateData=function(){this.hasRoleData.length=0;var e=g.default.instance.localData.hasRoles;for(var t in e)this.hasRoleData.push(e[t]);var o=[],i=5*this.nowHeroListIndex,n=5*this.nowHeroListIndex+5;this.heroList_btn_left.active=0!=this.nowHeroListIndex,this.heroList_btn_right.active=this.nowHeroListIndex<this.nowHeroListMaxIndex;for(var a=i;a<n;a++)this.hasRoleData[a]?o.push(this.hasRoleData[a]):o.push(null);var l,r=g.default.instance.localData.nowFormation;for(a=0;a<o.length;a++){var s=this.heroList_Layout.children[a];if(o[a]){var h=o[a].index==this.nowSelectHeroIndex,c=-1!=r.indexOf(o[a].index);this.itemDeal(s,o[a],c,h),h&&(this.showDeal(o[a],c),l=o[a])}else this.itemDealEmpty(s)}for(a=0;a<this.gearNode.children.length;a++){var u=d.default.checkSlotIsWear(l.index,a),f=this.gearNode.children[a],m=f.getChildByName("typeIcon"),v=f.getChildByName("icon");u?(m.active=!1,v.active=!0,p.default.loadIcon(u.id,v.getComponent(cc.Sprite))):(m.active=!0,v.active=!1)}this.roleStat.updateData(l)},t.prototype.initRoleData=function(){this.hasRoleData.length=0;var e=g.default.instance.localData.hasRoles;for(var t in e)this.hasRoleData.push(e[t]);this.nowHeroListIndex=0,this.nowHeroListMaxIndex=Math.ceil(this.hasRoleData.length/5)-1,this.nowSelectHeroIndex=this.hasRoleData[0].index,this.updateData()},t.prototype.initHeroList=function(){var e=this.panel.getChildByName("heroList");this.heroList_Layout=e.getChildByName("layout"),this.heroList_btn_left=e.getChildByName("btn_left"),this.heroList_btn_right=e.getChildByName("btn_right");for(var t=this.heroList_Layout.children[0],o=0;o<4;o++){var i=cc.instantiate(t);this.heroList_Layout.addChild(i)}for(o=0;o<this.heroList_Layout.children.length;o++){var n=this.heroList_Layout.children[o];c.Tool.addClickEvent(n,this.onHeroListItemClick,this,[o])}c.Tool.addClickEvent(this.heroList_btn_left,this.onHeroListLeftClick,this),c.Tool.addClickEvent(this.heroList_btn_right,this.onHeroListRightClick,this)},t.prototype.initShow=function(){var e=this.panel.getChildByName("show");this.showRolePoint=e.getChildByName("rolePoint");var t=e.getChildByName("stat");this.showNameLabel=t.getChildByName("name").getComponent(cc.Label),this.showLevelLabel=t.getChildByName("level").getComponent(cc.Label),this.showLevelBar=t.getChildByName("levelBar").getComponent(l.default),this.showLevelBarLabel=t.getChildByName("barValue").getComponent(cc.Label),this.showPowerValueLabel=t.getChildByName("power").getChildByName("label").getComponent(cc.Label),this.showUsingNode=e.getChildByName("using")},t.prototype.initSlot=function(){var e=this.panel.getChildByName("gearNode");this.gearNode=e;for(var t=0;t<e.children.length;t++){var o=e.children[t];c.Tool.addClickEvent(o,this.onSlotClick,this,[t])}},t.prototype.itemDeal=function(e,t,o,i){for(var n=0;n<e.children.length;n++)e.children[n].opacity="empty"!=e.children[n].name?255:0;var a=e.getChildByName("icon"),l=e.getChildByName("level"),r=e.getChildByName("star"),s=e.getChildByName("isChoose"),h=e.getChildByName("empty"),c=e.getChildByName("select");for(c&&(c.opacity=i?255:0),h.opacity=0,s&&(s.opacity=o?255:0),p.default.loadIcon(t.id,a.getComponent(cc.Sprite)),l.getComponent(cc.Label).string=t.level.toString(),n=0;n<r.children.length;n++)r.children[n].children[0].opacity=n<t.quality?255:0;e.y=i?-10:0},t.prototype.itemDealEmpty=function(e){for(var t=0;t<e.children.length;t++)e.children[t].opacity="empty"==e.children[t].name?255:0},t.prototype.showDeal=function(e,t){var o=u.default.getJsonData(e);this.showRolePoint.destroyAllChildren(),h.default.bornPrefab("Role_"+e.id,this.showRolePoint),this.showNameLabel.string=o.name+e.index,this.showLevelLabel.string="LV."+e.level.toString(),this.showLevelBar.value=e.level/o.levelMax,this.showLevelBarLabel.string=e.level.toString()+"/"+o.levelMax.toString(),this.showPowerValueLabel.string=u.default.calPower(e).toString(),this.showUsingNode.children[0].active=t,this.showUsingNode.children[1].active=!t},t.prototype.onHeroListItemClick=function(e){var t=5*this.nowHeroListIndex+e[0];if(!(t>=this.hasRoleData.length)){var o=this.hasRoleData[t];this.nowSelectHeroIndex=o.index,this.updateData()}},t.prototype.onHeroListLeftClick=function(){this.nowHeroListIndex--,this.nowHeroListIndex<0&&(this.nowHeroListIndex=0),this.nowSelectHeroIndex=this.hasRoleData[5*this.nowHeroListIndex].index,this.updateData()},t.prototype.onHeroListRightClick=function(){this.nowHeroListIndex++,this.nowHeroListIndex>this.nowHeroListMaxIndex&&(this.nowHeroListIndex=this.nowHeroListMaxIndex),this.nowSelectHeroIndex=this.hasRoleData[5*this.nowHeroListIndex].index,this.updateData()},t.prototype.onSlotClick=function(e){var t=this,o=e[0];m.default.showPanel("Panel_ArmorDetail",function(e){var i=e.getComponent("Panel_ArmorDetail"),n=g.default.instance.localData.hasRoles[t.nowSelectHeroIndex];i.initData(o,n)})},a([L(v.default)],t.prototype,"roleStat",void 0),a([_],t)}(f.default);o.default=I,cc._RF.pop()},{"../../../Bundle1_Loading/Scripts/Comp/Bar":void 0,"../../../Bundle1_Loading/Scripts/Config/EnumTypes":void 0,"../../../Bundle1_Loading/Scripts/Mgr/EventMgr":void 0,"../../../Bundle1_Loading/Scripts/Mgr/PrefabMgr":void 0,"../../../Bundle1_Loading/Scripts/Tool/Tool":void 0,"../../../Bundle2_Main/Scripts/Mgr/EquipMgr":void 0,"../../../Bundle2_Main/Scripts/Mgr/IconMgr":void 0,"../../../Bundle2_Main/Scripts/Mgr/RoleMgr":void 0,"../../../Bundle2_Main/Scripts/Panel/Panel":void 0,"../../../Bundle2_Main/Scripts/Panel/PanelMgr":void 0,"../../../Bundle2_Main/SeverTest/SeverMgr":void 0,"./Armor_RoleStat":"Armor_RoleStat"}]},{},["Armor_RoleStat","Panel_Armor"]);