window.__require=function t(e,n,o){function i(s,c){if(!n[s]){if(!e[s]){var r=s.split("/");if(r=r[r.length-1],!e[r]){var l="function"==typeof __require&&__require;if(!c&&l)return l(r,!0);if(a)return a(r,!0);throw new Error("Cannot find module '"+s+"'")}s=r}var d=n[s]={exports:{}};e[s][0].call(d.exports,function(t){return i(e[s][1][t]||t)},d,d.exports,t,e,n,o)}return n[s].exports}for(var a="function"==typeof __require&&__require,s=0;s<o.length;s++)i(o[s]);return i}({Game_FindFalut_StageToJson:[function(t,e,n){"use strict";cc._RF.push(e,"09a40Yovh5HYohtrE8fSqAn","Game_FindFalut_StageToJson");var o,i=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),a=this&&this.__decorate||function(t,e,n,o){var i,a=arguments.length,s=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(s=(a<3?i(s):a>3?i(e,n,s):i(e,n))||s);return a>3&&s&&Object.defineProperty(e,n,s),s};Object.defineProperty(n,"__esModule",{value:!0});var s=t("../../Bundle1_Loading/Scripts/Tool/Tool"),c=cc._decorator,r=c.ccclass,l=c.property,d=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._click_Born=!1,e}return i(e,t),Object.defineProperty(e.prototype,"click_Born",{get:function(){return this._click_Born},set:function(){this.stageToJson()},enumerable:!1,configurable:!0}),e.prototype.stageToJson=function(){for(var t=this.node.getChildByName("bg"),e=this.node.getChildByName("points"),n={bgUrl:t.getComponent(cc.Sprite).spriteFrame.name,points:[]},o=0;o<e.children.length;o++){var i=e.children[o],a={url:i.getComponent(cc.Sprite).spriteFrame.name,x:i.x,y:i.y,scaleX:i.scaleX,scaleY:i.scaleY};n.points.push(a)}var c=JSON.stringify(n);console.log("\u5173\u5361json\u6570\u636e",c),s.Tool.local_SaveData("Bundle4_Game_FindFault/StageData/"+this.node.name+"/info.json",c)},a([l(cc.Boolean)],e.prototype,"click_Born",null),a([r],e)}(cc.Component);n.default=d,cc._RF.pop()},{"../../Bundle1_Loading/Scripts/Tool/Tool":void 0}],Game_FindFault_Fail:[function(t,e,n){"use strict";cc._RF.push(e,"3fe2cZ5KdVIcIHA5HbhfjB3","Game_FindFault_Fail");var o,i=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),a=this&&this.__decorate||function(t,e,n,o){var i,a=arguments.length,s=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(s=(a<3?i(s):a>3?i(e,n,s):i(e,n))||s);return a>3&&s&&Object.defineProperty(e,n,s),s};Object.defineProperty(n,"__esModule",{value:!0});var s=t("../../Bundle1_Loading/Scripts/Config/EnumTypes"),c=t("../../Bundle1_Loading/Scripts/Mgr/EventMgr"),r=t("../../Bundle1_Loading/Scripts/Platform/Platform"),l=t("../../Bundle1_Loading/Scripts/Tool/Tool"),d=t("../../Bundle2_Res/Scripts/ResPanelOpen"),h=cc._decorator,u=h.ccclass,g=h.property,p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.retryBtn=null,e.addTimeBtn=null,e}return i(e,t),e.prototype.onLoad=function(){this.panel=this.node.getChildByName("panel"),l.Tool.d2_AddClickEvent(this.retryBtn,this.retry,this),l.Tool.d2_AddClickEvent(this.addTimeBtn,this.addTime,this)},e.prototype.onEnable=function(){d.default.panelOpen(this.panel)},e.prototype.close=function(){var t=this;d.default.panelClose(this.panel,function(){t.node.active=!1})},e.prototype.retry=function(){c.EventMgr.event(s.EventType.Game_Retry_Event),this.close()},e.prototype.addTime=function(){var t=this;r.default.instance.showVideo(function(){c.EventMgr.event(s.EventType.Game_FindFault_FindPoint_AddTime),t.close()},function(){})},a([g(cc.Node)],e.prototype,"retryBtn",void 0),a([g(cc.Node)],e.prototype,"addTimeBtn",void 0),a([u],e)}(cc.Component);n.default=p,cc._RF.pop()},{"../../Bundle1_Loading/Scripts/Config/EnumTypes":void 0,"../../Bundle1_Loading/Scripts/Mgr/EventMgr":void 0,"../../Bundle1_Loading/Scripts/Platform/Platform":void 0,"../../Bundle1_Loading/Scripts/Tool/Tool":void 0,"../../Bundle2_Res/Scripts/ResPanelOpen":void 0}],Game_FindFault_FindPoint:[function(t,e,n){"use strict";cc._RF.push(e,"3e5b6VptGtEwZaAu78Db9I6","Game_FindFault_FindPoint");var o,i=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),a=this&&this.__decorate||function(t,e,n,o){var i,a=arguments.length,s=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(s=(a<3?i(s):a>3?i(e,n,s):i(e,n))||s);return a>3&&s&&Object.defineProperty(e,n,s),s};Object.defineProperty(n,"__esModule",{value:!0});var s=t("../../Bundle1_Loading/Scripts/Config/EnumTypes"),c=t("../../Bundle1_Loading/Scripts/Mgr/EventMgr"),r=cc._decorator,l=r.ccclass,d=(r.property,function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i(e,t),e.prototype.onEnable=function(){c.EventMgr.on(s.EventType.Game_FindFault_FindPoint_BornPoint,this.bornPoint,this),c.EventMgr.on(s.EventType.Game_FindFault_FindPoint_FindOne,this.findOne,this),c.EventMgr.on(s.EventType.Game_FindFault_FindPoint_Success,this.success,this)},e.prototype.onDisable=function(){c.EventMgr.clearTarget(this)},e.prototype.bornPoint=function(t){for(var e=this.node.children.length-1;e>=1;e--)this.node.children[e].destroy();var n=this.node.children[0];for(n.getChildByName("unfind").active=!0,n.getChildByName("find").active=!1,e=1;e<t;e++){var o=cc.instantiate(n);this.node.addChild(o),o.getChildByName("unfind").active=!0,o.getChildByName("find").active=!1}},e.prototype.findOne=function(){for(var t=0;t<this.node.children.length;t++)if(this.node.children[t].getChildByName("unfind").active){var e=this.node.children[t],n=e.scale;e.scale=0;var o=e.getChildByName("white");o.opacity=0,cc.tween(e).to(1,{scale:n},{easing:"elasticOut"}).start(),this.node.children[t].getChildByName("unfind").active=!1,this.node.children[t].getChildByName("find").active=!0,cc.tween(o).to(.3,{opacity:255},{easing:"sineOut"}).to(.3,{opacity:0},{easing:"sineOut"}).start();break}},e.prototype.success=function(){for(var t=this,e=function(e){n.scheduleOnce(function(){var n=t.node.children[e],o=n.scale;n.scale=.5;var i=n.getChildByName("white");i.opacity=0,cc.tween(n).to(.75,{scale:o},{easing:"elasticOut"}).start(),cc.tween(i).to(.2,{opacity:255},{easing:"sineOut"}).to(.2,{opacity:0},{easing:"sineOut"}).start()},.15*e)},n=this,o=0;o<this.node.children.length;o++)e(o)},a([l],e)}(cc.Component));n.default=d,cc._RF.pop()},{"../../Bundle1_Loading/Scripts/Config/EnumTypes":void 0,"../../Bundle1_Loading/Scripts/Mgr/EventMgr":void 0}],Game_FindFault_Mgr:[function(t,e,n){"use strict";cc._RF.push(e,"a2ca1BxdFFKm7SevRzvPo9s","Game_FindFault_Mgr");var o,i=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),a=this&&this.__decorate||function(t,e,n,o){var i,a=arguments.length,s=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(s=(a<3?i(s):a>3?i(e,n,s):i(e,n))||s);return a>3&&s&&Object.defineProperty(e,n,s),s};Object.defineProperty(n,"__esModule",{value:!0});var s=t("../../Bundle1_Loading/Scripts/Comp/GameLoading"),c=t("../../Bundle1_Loading/Scripts/Config/EnumTypes"),r=t("../../Bundle1_Loading/Scripts/Config/GameData"),l=t("../../Bundle1_Loading/Scripts/JJSDK/JJMgr"),d=t("../../Bundle1_Loading/Scripts/Mgr/AssetMgr"),h=t("../../Bundle1_Loading/Scripts/Mgr/EventMgr"),u=t("../../Bundle1_Loading/Scripts/Mgr/SoundMgr"),g=t("../../Bundle1_Loading/Scripts/Mgr/StorageMgr"),p=t("../../Bundle1_Loading/Scripts/Platform/Platform"),m=t("../../Bundle1_Loading/Scripts/Tool/Tool"),f=t("../../Bundle2_Res/Scripts/btn/Game_ShowTipsBtn"),y=t("../../Bundle2_Res/Scripts/mod/ScaleOnce"),_=t("../../Bundle2_Res/Scripts/ResPanelOpen"),v=t("../../Bundle2_Res/Scripts/ResPrefabBorn"),C=cc._decorator,T=C.ccclass,S=C.property,P=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.topUI=null,e.bottomUI=null,e.failPanel=null,e.zoomBtn=null,e.pauseBtn=null,e.designStageId=0,e.maxLevel=270,e.stagePointShow=[],e.stagePointShow_1=[[5,6,7],[0,2,5,7],[2,6,8,9],[0,1,3,8,7],[0,3,4,9,7],[3,4,0,8,5],[3,1,2,9,6,5],[3,0,1,9,8,7],[1,9,7,6,4,2],[0,1,2,8,7,6,5],[3,0,2,4,8,7,6],[4,0,1,9,7,8,5],[3,1,2,4,9,8,7,6],[4,1,2,3,9,7,5,6],[0,4,1,8,5,9,7,6],[4,1,2,0,3,9,5,7,8],[4,1,2,0,3,9,5,7,8],[4,1,2,0,3,9,5,7,8]],e.stagePointShow_2=[],e.unControlTime=0,e.unControlTimeLimited=10,e.game=null,e.heigthDelta=0,e.stageLabel=null,e.timeLabel=null,e.topTips=null,e.bottomTips=null,e.gameType=1,e.isEnd=!1,e.nowTipsIndex=-1,e.timeCounting=120,e.timeCountingReduce=20,e.timeCountingAdd=60,e.isZoom=!1,e.zoomTaregtPos=new cc.Vec2,e.zoomTargetScale=1,e.touchMoveOffset=new cc.Vec2,e.stagePoints=[],e.hasClickPointIndex=[],e}return i(e,t),e.prototype.onLoad=function(){var t=this.node.getChildByName("game_1"),e=this.node.getChildByName("game_2");switch(t.active=!1,e.active=!1,this.gameType){default:console.warn("\u627e\u832c\u5173\u5361\u7c7b\u4f3c\u6709\u8bef\uff0c\u9ed8\u8ba4\u75281",this.gameType),this.gameType=1;case 1:this.game=t,this.stagePointShow=this.stagePointShow_1;break;case 2:this.game=e,this.stagePointShow=this.stagePointShow_2}this.game.active=!0;var n=this.node.height-1334;n>275&&p.default.instance.showBanner(),this.heigthDelta=n,this.game_top=this.game.getChildByName("Top"),this.game_bottom=this.game.getChildByName("Bottom"),this.stageLabel=this.game.getChildByName("levelLabel").getComponent(cc.Label),this.timeLabel=this.game.getChildByName("timeLabel").getComponent(cc.Label),this.topTips=this.game.getChildByName("Top").getChildByName("TopTips"),this.bottomTips=this.game.getChildByName("Bottom").getChildByName("BottomTips"),this.game.on(cc.Node.EventType.TOUCH_MOVE,this.onTouchMove,this),this.game.on(cc.Node.EventType.TOUCH_END,this.onTouchEnd,this),this.game.on(cc.Node.EventType.TOUCH_CANCEL,this.onTouchCanel,this),this.eventInit()},e.prototype.start=function(){g.default.instance.usePower(),this.maxLevel=l.default.instance.dataConfig.front_findFault_maxLevel,r.default.isStageDesgin?this.loadStage(this.designStageId):this.loadStage(g.default.instance.storageData.findFaultData.maxLevel),g.default.instance.storageData.findFaultData.maxLevel<this.maxLevel&&d.default.loadGame_FindFault_Stage(g.default.instance.storageData.findFaultData.maxLevel+1)},e.prototype.update=function(t){this.zoomUpdate(t)},e.prototype.onDestroy=function(){this.isZoom=!1},e.prototype.eventInit=function(){h.EventMgr.on(c.EventType.Game_NextLevel_Event,this.nextLevel,this),h.EventMgr.on(c.EventType.Game_FindFault_FindPoint_AddTime,this.addTimeCounting,this),h.EventMgr.on(c.EventType.Game_Retry_Event,this.restart,this),h.EventMgr.on(c.EventType.Game_ShowTips_Event,this.showTips,this),h.EventMgr.on(c.EventType.Game_PassLevel_Event,this.passLevel,this),h.EventMgr.on(c.EventType.Game_Pause_Event,this.pause,this),h.EventMgr.on(c.EventType.Game_Resume_Event,this.resume,this),h.EventMgr.on(c.EventType.Game_PowerLess_Event,this.showPowerLess,this),m.Tool.d2_AddClickEvent(this.zoomBtn,this.zoomClick,this),m.Tool.d2_AddClickEvent(this.pauseBtn,this.pauseClick,this)},e.prototype.success=function(t){var e,n=this;this.isEnd||(r.default.findFault_endSecond=this.timeCounting,this.stopTimeCounting(),this.isEnd=!0,console.log("success"),g.default.instance.addLevel(c.GameNames.findFault),this.isZoom&&this.zoomClick(),e=g.default.instance.storageData.findFaultData.maxLevel<=this.stagePointShow.length?this.stagePointShow[g.default.instance.storageData.findFaultData.maxLevel-1].length:this.stagePoints.length,this.scheduleOnce(function(){h.EventMgr.event(c.EventType.Game_FindFault_FindPoint_Success),u.default.instance.PlaySound(c.SoundType.Finish),n.scheduleOnce(function(){u.default.instance.PlaySound(c.SoundType.Win),_.default.show_Result_Success_Panel(n.node,function(){})},.15*e+.5)},t+.5))},e.prototype.fail=function(){this.isEnd||(this.isEnd=!0,this.timeCounting=0,this.failPanel.active=!0,u.default.instance.PlaySound(c.SoundType.Lose))},e.prototype.passLevel=function(){this.control(),g.default.instance.addLevel(c.GameNames.findFault),d.default.goGame_FindFault()},e.prototype.nextLevel=function(){d.default.goGame_FindFault()},e.prototype.restart=function(){this.control(),d.default.goGame_FindFault()},e.prototype.showTips=function(){this.isEnd||(this.tipsDo(),this.control())},e.prototype.pause=function(){this.stopTimeCounting()},e.prototype.resume=function(){this.startTimeCounting()},e.prototype.zoomClick=function(){this.zoomSwitch(),this.zoomBtn.children[0].active=this.isZoom},e.prototype.pauseClick=function(){_.default.show_Game_Pause_Panel(this.node)},e.prototype.showPowerLess=function(){_.default.show_Game_PowerLess_Panel(this.node)},e.prototype.tipsDo=function(){f.default.isTipsing=!0;for(var t=-1,e=0;e<this.stagePoints.length;e++){var n=!0;if(this.nowStageIndex<this.stagePointShow.length&&(n=-1!=this.stagePointShow[this.nowStageIndex-1].indexOf(e)),-1==this.hasClickPointIndex.indexOf(e)&&n){t=e;break}}console.log("\u9700\u8981\u63d0\u793a\u7684\u70b9\u4e3a\uff1a"+t),this.nowTipsIndex=t;var o=this.game_bottom.getChildByName("stage").getChildByName(t.toString()).getPosition(),i=this.topTips.getChildByName("glass"),a=this.bottomTips.getChildByName("glass");cc.Vec2.distance(o,i.getPosition()),cc.Vec2.distance(o,a.getPosition()),i.setPosition(o),a.setPosition(o),o.x>0?(i.scaleX=-1,a.scaleX=-1):(i.scaleX=1,a.scaleX=1),o.y>0?(i.scaleY=1,a.scaleY=1):(i.scaleY=-1,a.scaleY=-1)},e.prototype.endTips=function(){var t=this.topTips.getChildByName("glass"),e=this.bottomTips.getChildByName("glass");t.x=-1e3,e.x=-1e3,this.nowTipsIndex=-1,f.default.isTipsing=!1},e.prototype.startTimeCounting=function(){this.updateTimeCounting(),this.control(),this.schedule(this.timeCountingUpdate,1)},e.prototype.timeCountingUpdate=function(){if(this.timeCounting--,this.unControlTime--,0==this.unControlTime&&!f.default.isTipsing){var t=this.bottomUI.getChildByName("tipBtn");v.default.guideHandCreate(t,cc.Vec2.ZERO)}1==g.default.instance.storageData.findFaultData.maxLevel&&-5==this.unControlTime&&this.showTips(),this.timeCounting<=10&&u.default.instance.PlaySound(c.SoundType.Time,!0),this.timeCounting<0&&(this.stopTimeCounting(),this.fail()),this.updateTimeCounting()},e.prototype.stopTimeCounting=function(){this.unschedule(this.timeCountingUpdate),u.default.instance.StopSound(c.SoundType.Time)},e.prototype.updateTimeCounting=function(){var t=this.timeCounting,e=Math.floor(t/60),n=Math.floor(t%60),o="";o+=e.toString();var i="";n<10&&(i="0"),i+=n.toString(),this.timeLabel.string="\u5269\u4f59\u65f6\u95f4  "+o+":"+i},e.prototype.reduceTimeCounting=function(){this.timeCounting-=this.timeCountingReduce,this.timeCounting<0&&(this.stopTimeCounting(),this.fail()),this.updateTimeCounting()},e.prototype.addTimeCounting=function(){this.timeCounting=this.timeCountingAdd,this.startTimeCounting(),this.isEnd=!1},e.prototype.control=function(){this.unControlTime=this.unControlTimeLimited,h.EventMgr.event(c.EventType.Common_GuideHand_Destroy)},e.prototype.zoomSwitch=function(){this.control(),this.isZoom=!this.isZoom,this.isZoom?this.zoomTargetScale=1.5:(this.zoomTaregtPos.x=0,this.zoomTaregtPos.y=0,this.zoomTargetScale=1)},e.prototype.zoomUpdate=function(t){var e=this.game_top.getChildByName("stage").scale,n=this.game_top.getChildByName("stage").getPosition(),o=15*t;o>1&&(o=1),cc.Vec2.lerp(n,n.clone(),this.zoomTaregtPos,o),e=cc.misc.lerp(e,this.zoomTargetScale,o),this.game_top.getChildByName("stage").setPosition(n),this.game_bottom.getChildByName("stage").setPosition(n),this.game_top.getChildByName("stage").scale=e,this.game_bottom.getChildByName("stage").scale=e,this.topTips.scale=e,this.bottomTips.scale=e,this.topTips.setPosition(n),this.bottomTips.setPosition(n)},e.prototype.clickPoint=function(t,e){var n=this;if(!this.isEnd){if(this.nowTipsIndex==t&&this.endTips(),this.nowStageIndex<this.stagePointShow.length&&-1==this.stagePointShow[this.nowStageIndex-1].indexOf(t))return void this.clickError(e);this.hasClickPointIndex.push(t),this.game_top.getChildByName("stage").getChildByName(t.toString());var o=this.game_bottom.getChildByName("stage").getChildByName(t.toString()).getPosition();switch(this.gameType){default:break;case 1:d.default.Game_FindFaultBundle.load("Prefabs/FindEffect",cc.Prefab,function(t,e){if(t)console.error(t);else if(n.game||n.game.isValid){var i=cc.instantiate(e),a=cc.instantiate(e);n.game_top.getChildByName("stage").addChild(i),n.game_bottom.getChildByName("stage").addChild(a),i.setPosition(o),a.setPosition(o)}});break;case 2:var i=this.game_top.getChildByName("stage").getChildByName("tip_"+t.toString()),a=this.game_bottom.getChildByName("stage").getChildByName("tip_"+t.toString());i.active=!0,a.active=!0,i.addComponent(y.default),a.addComponent(y.default)}var s=this.game.getChildByName("findPoint").children[this.hasClickPointIndex.length-1].convertToWorldSpaceAR(cc.v2(0,0));s=this.game.convertToNodeSpaceAR(s);var r,l=this.game.convertToNodeSpaceAR(e),p=cc.Vec2.distance(l,s)/1e3;d.default.Game_FindFaultBundle.load("Prefabs/Successfx",cc.Prefab,function(t,e){if(t)console.error(t);else if(n.game||n.game.isValid){var o=cc.instantiate(e);o.getComponent(cc.ParticleSystem).emissionRate=30,n.game.addChild(o),o.setPosition(l),cc.tween(o).to(p,{x:s.x,y:s.y}).call(function(){h.EventMgr.event(c.EventType.Game_FindFault_FindPoint_FindOne),o.getComponent(cc.ParticleSystem).emissionRate=0,n.scheduleOnce(function(){o.destroy()},2)}).start()}}),u.default.instance.PlaySound(c.SoundType.True),r=g.default.instance.storageData.findFaultData.maxLevel<=this.stagePointShow.length?this.stagePointShow[g.default.instance.storageData.findFaultData.maxLevel-1].length:this.stagePoints.length,this.hasClickPointIndex.length>=r&&this.success(p)}},e.prototype.clickError=function(t){var e=this;if(!this.isEnd){var n=this.game.convertToNodeSpaceAR(t);this.reduceTimeCounting(),d.default.Game_FindFaultBundle.load("Prefabs/WrongEffect",cc.Prefab,function(t,o){if(t)console.error(t);else if(e.game||e.game.isValid){var i=cc.instantiate(o);e.game.addChild(i),i.setPosition(n),n.x>0?i.getChildByName("Time").x=-100:i.getChildByName("Time").x=100,i.getComponent(cc.Animation).play(),i.getChildByName("Time").getChildByName("label").getComponent(cc.Label).string="-"+e.timeCountingReduce+"S",m.Tool.objectShake(i.getChildByName("wrong")),e.scheduleOnce(function(){i.destroy()},3)}}),u.default.instance.PlaySound(c.SoundType.False),p.default.instance.vibrateShort()}},e.prototype.onTouchEnd=function(t){if(this.control(),this.touchEndCheck(),this.touchMoveOffset.lengthSqr()>2500)return this.touchMoveOffset.x=0,void(this.touchMoveOffset.y=0);this.touchMoveOffset.x=0,this.touchMoveOffset.y=0;for(var e=t.getLocation(),n=this.game_top.getChildByName("stage").convertToNodeSpaceAR(cc.v2(e.x,e.y)),o=this.game_bottom.getChildByName("stage").convertToNodeSpaceAR(cc.v2(e.x,e.y)),i=0,a=Number.MAX_SAFE_INTEGER,s=-1,c=0;c<this.stagePoints.length;c++)if(-1==this.hasClickPointIndex.indexOf(c)){var r=this.game_bottom.getChildByName("stage").getChildByName(c.toString()),l=r.height*r.scaleX,d=r.width*r.scaleY,h=m.Tool.BoxCheck_2D_Normal(n.x,n.y,1,1,this.stagePoints[c].x,this.stagePoints[c].y,d,l);(i=cc.Vec2.squaredDistance(n,this.stagePoints[c]))<a&&h.isHit&&(a=i,s=c),h=m.Tool.BoxCheck_2D_Normal(o.x,o.y,1,1,this.stagePoints[c].x,this.stagePoints[c].y,d,l),(i=cc.Vec2.squaredDistance(o,this.stagePoints[c]))<a&&h.isHit&&(a=i,s=c)}-1!=s?this.clickPoint(s,e):this.clickError(e)},e.prototype.onTouchCanel=function(){this.control(),this.touchEndCheck(),this.touchMoveOffset.x=0,this.touchMoveOffset.y=0},e.prototype.onTouchMove=function(t){this.control();var e=t.getDelta(),n=this.zoomTaregtPos;this.touchMoveOffset.x+=e.x,this.touchMoveOffset.y+=e.y,this.isZoom&&(n.x+=e.x,n.y+=e.y,this.zoomTaregtPos=n)},e.prototype.touchEndCheck=function(){var t=this.zoomTaregtPos;t.x>275?t.x=275:t.x<-275&&(t.x=-275),t.y>175?t.y=175:t.y<-175&&(t.y=-175),this.zoomTaregtPos=t},e.prototype.loadStage=function(t){var e=this;s.default.instance.bar.value=0,this.stageLabel.string="\u7b2c"+t.toString()+"\u5173";var n=t;this.nowStageIndex=t,t>this.maxLevel&&(t=m.Tool.randomInt(1,200)),this.game_top.active=!1,this.game_bottom.active=!1;var o=function(){if(s.default.instance.bar.value=1,s.default.instance.bar.value>=1){s.default.instance.scheduleOnce(function(){s.default.instance.root.active=!1}),n<=e.stagePointShow.length?h.EventMgr.event(c.EventType.Game_FindFault_FindPoint_BornPoint,e.stagePointShow[n-1].length):h.EventMgr.event(c.EventType.Game_FindFault_FindPoint_BornPoint,e.stagePoints.length),e.timeCounting=120;var t=l.default.instance.dataConfig.front_gate_djs;t&&t.length&&(n<=t.length?e.timeCounting=parseInt(t[n-1]):e.timeCounting=parseInt(t[t.length-1])),e.timeCountingReduce=20;var o=l.default.instance.dataConfig.front_kc_djs;o&&o.length&&(n<=o.length?e.timeCountingReduce=parseInt(o[n-1]):o.length>0&&(e.timeCountingReduce=parseInt(o[o.length-1]))),e.unControlTimeLimited=1==n?15:10,e.game_top.active=!0,e.game_bottom.active=!0,e.startTimeCounting()}};switch(this.gameType){case 1:d.default.loadGame_FindFault_Stage(t,function(i){var a=e.game_top.getChildByName("stage").getChildByName("bg"),c=e.game_bottom.getChildByName("stage").getChildByName("bg");e.stagePoints.length=0,e.hasClickPointIndex.length=0,s.default.instance.bar.value=.3,console.log("\u5f00\u59cb\u52a0\u8f7d\u5173\u5361",t),s.default.instance.bar.value=.6;var r=new cc.SpriteFrame(i.bgTexture);a.getComponent(cc.Sprite).spriteFrame=r,c.getComponent(cc.Sprite).spriteFrame=r;for(var l=0;l<i.pointTexture.length;l++){var d=i.pointPos[l].x,h=i.pointPos[l].y,u=i.pointScale[l].x,g=i.pointScale[l].y,p=!0;n<e.stagePointShow.length&&(p=-1!=e.stagePointShow[n-1].indexOf(l));var m=new cc.Node;m.addComponent(cc.Sprite).spriteFrame=new cc.SpriteFrame(i.pointTexture[l]),m.name=l.toString(),c.parent.addChild(m),m.x=d,m.y=h,m.scaleX=u,m.scaleY=g,m.active=p,e.stagePoints.push(cc.v2(d,h))}o()});break;case 2:d.default.loadGame_FindFault_Stage2Bundle(t,function(i){var a=e.game_top.getChildByName("stage").getChildByName("bg"),c=e.game_bottom.getChildByName("stage").getChildByName("bg");e.stagePoints.length=0,e.hasClickPointIndex.length=0,s.default.instance.bar.value=.3,console.log("\u5f00\u59cb\u52a0\u8f7d\u5173\u5361",t),i.load("Data",cc.JsonAsset,function(r,l){if(r)console.error("\u5173\u5361"+t.toString()+"\u6570\u636e\u52a0\u8f7d\u5931\u8d25",r);else{s.default.instance.bar.value=.6;var d=l.json;d.DiffCount,i.load("base",cc.SpriteFrame,function(t,e){if(t)console.error("\u80cc\u666f\u56fe",t);else{var n=e;a.getComponent(cc.Sprite).spriteFrame=n,c.getComponent(cc.Sprite).spriteFrame=n,o()}});for(var h=d.DesignSize,u=function(t){var s="mix_"+(t+1).toString(),r=e.type2PosChange(d.DiffPos[t],h),l=r.x,u=r.y,g=!0;n<e.stagePointShow.length&&(g=-1!=e.stagePointShow[n-1].indexOf(t)),e.loadPointTexture(o,i,s,l,u,.48,.48,c.parent,t.toString(),g),e.stagePoints.push(cc.v2(l,u)),s+="_frame",r=e.type2PosChange(d.DiffFramePos[t],h),l=r.x,u=r.y,e.scheduleOnce(function(){e.loadPointTexture(o,i,s,l,u,.48,.48,c.parent,"tip_"+t.toString(),!1),e.loadPointTexture(o,i,s,l,u,.48,.48,a.parent,"tip_"+t.toString(),!1)})},g=0;g<d.DiffCount;g++)u(g)}})})}},e.prototype.loadPointTexture=function(t,e,n,o,i,a,s,c,r,l){void 0===l&&(l=!0);var d=new cc.Node,h=d.addComponent(cc.Sprite);e.load(n,cc.SpriteFrame,function(e,n){h.spriteFrame=n,d.name=r,c.addChild(d),d.x=o,d.y=i,d.scaleX=a,d.scaleY=s,d.active=l,t&&t()})},e.prototype.type2PosChange=function(t,e){return{x:t.x/e.x*750-375,y:-(t.y/e.y*480-240)}},a([S(cc.Node)],e.prototype,"topUI",void 0),a([S(cc.Node)],e.prototype,"bottomUI",void 0),a([S(cc.Node)],e.prototype,"failPanel",void 0),a([S(cc.Node)],e.prototype,"zoomBtn",void 0),a([S(cc.Node)],e.prototype,"pauseBtn",void 0),a([S(cc.Integer)],e.prototype,"designStageId",void 0),a([T],e)}(cc.Component);n.default=P,cc._RF.pop()},{"../../Bundle1_Loading/Scripts/Comp/GameLoading":void 0,"../../Bundle1_Loading/Scripts/Config/EnumTypes":void 0,"../../Bundle1_Loading/Scripts/Config/GameData":void 0,"../../Bundle1_Loading/Scripts/JJSDK/JJMgr":void 0,"../../Bundle1_Loading/Scripts/Mgr/AssetMgr":void 0,"../../Bundle1_Loading/Scripts/Mgr/EventMgr":void 0,"../../Bundle1_Loading/Scripts/Mgr/SoundMgr":void 0,"../../Bundle1_Loading/Scripts/Mgr/StorageMgr":void 0,"../../Bundle1_Loading/Scripts/Platform/Platform":void 0,"../../Bundle1_Loading/Scripts/Tool/Tool":void 0,"../../Bundle2_Res/Scripts/ResPanelOpen":void 0,"../../Bundle2_Res/Scripts/ResPrefabBorn":void 0,"../../Bundle2_Res/Scripts/btn/Game_ShowTipsBtn":void 0,"../../Bundle2_Res/Scripts/mod/ScaleOnce":void 0}]},{},["Game_FindFalut_StageToJson","Game_FindFault_Fail","Game_FindFault_FindPoint","Game_FindFault_Mgr"]);