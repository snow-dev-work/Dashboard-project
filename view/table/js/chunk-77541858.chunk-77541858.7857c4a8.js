(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-77541858"],{"0a63":function(e,t,i){},"0cc5":function(e,t,i){},1892:function(e,t,i){},"259e":function(e,t,i){"use strict";i("0a63")},"9d03":function(e,t,i){"use strict";i.r(t);var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("section",{staticClass:"project-history"},[i("h3",[e._v("Historique")]),i("transition-group",{ref:"histories",staticClass:"project-history__list",attrs:{tag:"div",name:"project-history__list"}},e._l(e._history,(function(t){return i("HistoryItem",e._b({key:t.id,attrs:{project_id:e.id}},"HistoryItem",t,!1))})),1),e.admin?i("div",{staticClass:"project-history__new"},[e.show_form?i("HistoryForm",{attrs:{id:e.id,container:e.histories},on:{hide:function(t){e.show_form=!1}}}):[i("input",{directives:[{name:"model",rawName:"v-model",value:e.show_form,expression:"show_form"}],attrs:{type:"checkbox",id:"history-form__input__"+e.id,hidden:""},domProps:{checked:Array.isArray(e.show_form)?e._i(e.show_form,null)>-1:e.show_form},on:{change:function(t){var i=e.show_form,r=t.target,n=!!r.checked;if(Array.isArray(i)){var a=null,s=e._i(i,a);r.checked?s<0&&(e.show_form=i.concat([a])):s>-1&&(e.show_form=i.slice(0,s).concat(i.slice(s+1)))}else e.show_form=n}}}),i("label",{staticClass:"btn",style:{margin:"auto"},attrs:{for:"history-form__input__"+e.id}},[i("Icon",{attrs:{icon:"comment"}}),e._v(" Ajouter un événement ")],1)]],2):e._e()],1)},n=[],a=i("5530"),s=(i("a9e3"),i("4e82"),i("94ea")),o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("form",{staticClass:"project-history__form",on:{submit:function(t){return t.preventDefault(),e.submit.apply(null,arguments)},reset:function(t){return t.preventDefault(),e.$emit("hide")}}},[i("label",[e._v(" Date: "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.date,expression:"date"}],attrs:{type:"date"},domProps:{value:e.date},on:{input:function(t){t.target.composing||(e.date=t.target.value)}}})]),i("label",[e._v(" Heure: "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.time,expression:"time"}],attrs:{type:"time"},domProps:{value:e.time},on:{input:function(t){t.target.composing||(e.time=t.target.value)}}})]),i("label",{attrs:{for:"project-history__form__textarea__"+e.id}},[e._v("Message:")]),i("textarea",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"message"}],attrs:{id:"project-history__form__textarea__"+e.id,rows:"5"},domProps:{value:e.message},on:{input:function(t){t.target.composing||(e.message=t.target.value)}}}),i("div",{staticClass:"project-history__form__btns"},[i("button",{attrs:{type:"submit",disabled:e.pending}},[e._v("Envoyer")]),i("button",{attrs:{type:"reset"}},[e._v("Annuler")])])])},c=[],m=i("1da1"),d=(i("96cf"),i("430a")),_={name:"HistoryForm",props:{id:Number,container:null},data:function(){var e=this.$moment().format("YYYY-MM-DD"),t=this.$moment().format("HH:mm"),i="",r=!1;return{date:e,time:t,message:i,pending:r}},methods:Object(a["a"])(Object(a["a"])({},Object(s["c"])({add:d["p"].ACTIONS.HISTORY_POST})),{},{submit:function(){var e=this;return Object(m["a"])(regeneratorRuntime.mark((function t(){var i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.pending){t.next=2;break}return t.abrupt("return");case 2:if(i=e.$moment(),i.isValid()){t.next=5;break}return t.abrupt("return");case 5:if(0!==e.message.length){t.next=7;break}return t.abrupt("return");case 7:return e.pending=!0,t.next=10,e.add({project_id:e.id,data:{message:e.message,date:i.format("DD/MM/YYYY HH:mm")}});case 10:e.pending=!1,e.$emit("hide"),e.container.scrollTo({top:0,left:0,behavior:"smooth"});case 13:case"end":return t.stop()}}),t)})))()}})},u=_,l=(i("259e"),i("2877")),p=Object(l["a"])(u,o,c,!1,null,"d8135f24",null),f=p.exports,h=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"project-history__item",attrs:{tabindex:"0"}},[i("p",{ref:"message",staticClass:"project-history__item__message",class:[{edition:e.content_editable&&e.admin}],attrs:{contenteditable:e.content_editable},domProps:{innerHTML:e._s(e._message)},on:{input:e.handlerInput}}),i("span",{staticClass:"project-history__item__infos"},[i("span",{staticClass:"project-history__item__date"},[e.content_editable?[i("input",{directives:[{name:"model",rawName:"v-model",value:e.date_edited,expression:"date_edited"}],attrs:{type:"date"},domProps:{value:e.date_edited},on:{input:function(t){t.target.composing||(e.date_edited=t.target.value)}}}),e._v(" ~ "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.time_edited,expression:"time_edited"}],attrs:{type:"time"},domProps:{value:e.time_edited},on:{input:function(t){t.target.composing||(e.time_edited=t.target.value)}}})]:[e._v(" "+e._s(e.date.format("L [~] HH:mm"))+" ")]],2),e.admin?i("span",{staticClass:"project-history__item__actions"},[e.content_editable?[i("span",{staticClass:"project-history__item__actions__validate",on:{click:e.validate}},[e._v("✓")]),i("span",{staticClass:"project-history__item__actions__cancel",on:{click:function(t){e.content_editable=!1}}},[e._v("✗")])]:[i("span",{staticClass:"project-history__item__actions__edit",on:{click:function(t){e.content_editable=!0}}},[e._v(" Modifier ")]),i("span",{staticClass:"project-history__item__actions__remove",on:{click:e.remove}},[e._v("Supprimer")])]],2):e._e()])])},v=[],b=(i("ac1f"),i("5319"),i("498a"),i("99af"),i("1248")),g=Object(b["b"])(),y=g.Moment,j={name:"HistoryItem",props:{id:Number,project_id:Number,date:y,message:String,stopEdition:Boolean},data:function(){var e=!1,t=this._message_w_br,i=this.date.format("YYYY-MM-DD"),r=this.date.format("HH:mm");return{content_editable:e,message_edited:t,date_edited:i,time_edited:r}},computed:Object(a["a"])(Object(a["a"])({},Object(s["e"])({admin:function(e){var t=e.admin;return t}})),{},{_message_w_br:function(){return this.message.replace(/\n/g,"<br>")},_message:{get:function(){return this._message_w_br},set:function(e){this.message_edited=e.replace(/<br>/g,"\n").trim()}},message_html:function(){return this.$refs.message}}),watch:{content_editable:function(e){e?this.$emit("content-edition"):(this.message_html.innerHTML=this._message,this.date_edited=this.date.format("YYYY-MM-DD"),this.time_edited=this.date.format("HH:mm"))}},methods:Object(a["a"])(Object(a["a"])(Object(a["a"])({},Object(s["d"])({pop:d["p"].MUTATIONS.POPUPS_ADD})),Object(s["c"])({confirm:d["p"].ACTIONS.CONFIRM_SHOW,update:d["p"].ACTIONS.HISTORY_PUT})),{},{handlerInput:function(e){this.message_edited=e.target.innerHTML},validate:function(){var e=this;return Object(m["a"])(regeneratorRuntime.mark((function t(){var i,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(i=e.$moment("".concat(e.date_edited," ").concat(e.time_edited),"YYYY-MM-DD HH:mm"),i.isValid()){t.next=3;break}return t.abrupt("return",e.pop({message:"Date ou heure renseignée invalide",variant:d["n"].WARNING}));case 3:return r={date:i.format("DD/MM/YYYY HH:mm"),message:e.message_edited},t.next=6,e.update({project_id:e.project_id,id:e.id,data:r});case 6:e.content_editable=!1;case 7:case"end":return t.stop()}}),t)})))()},remove:function(){this.confirm({header:"Suppression d'un événement",text:"Êtes-vous sûr de vouloir supprimer cet événement ?",action:d["l"].ACTIONS.REMOVE_HISTORY_ITEM,details:{project_id:this.project_id,event_id:this.id}})}})},w=j,O=(i("b359"),Object(l["a"])(w,h,v,!1,null,"fe399cbc",null)),H=O.exports,Y={name:"History",components:{HistoryItem:H,HistoryForm:f},props:{id:Number,history:{type:Array,default:function(){return[]}}},data:function(){var e=!1;return{show_form:e}},computed:Object(a["a"])(Object(a["a"])({},Object(s["e"])({admin:function(e){var t=e.admin;return t}})),{},{_history:function(){return this.history.sort((function(e,t){var i=e.date,r=t.date;return i.isBefore(r)?1:i.isSame(r)?0:-1}))},histories:function(){return this.$refs.histories.$el}}),mounted:function(){console.log(this.histories)}},x=Y,M=(i("e89b"),Object(l["a"])(x,r,n,!1,null,"61803647",null));t["default"]=M.exports},b359:function(e,t,i){"use strict";i("1892")},e89b:function(e,t,i){"use strict";i("0cc5")}}]);
//# sourceMappingURL=chunk-77541858.chunk-77541858.7857c4a8.js.map