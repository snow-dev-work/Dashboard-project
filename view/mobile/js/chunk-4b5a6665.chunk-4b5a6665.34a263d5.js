(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4b5a6665"],{"6b55":function(t,e,r){"use strict";r("7903")},7903:function(t,e,r){},"857a":function(t,e,r){var s=r("e330"),n=r("1d80"),i=r("577e"),o=/"/g,a=s("".replace);t.exports=function(t,e,r,s){var l=i(n(t)),c="<"+e;return""!==r&&(c+=" "+r+'="'+a(i(s),o,"&quot;")+'"'),c+">"+l+"</"+e+">"}},9911:function(t,e,r){"use strict";var s=r("23e7"),n=r("857a"),i=r("af03");s({target:"String",proto:!0,forced:i("link")},{link:function(t){return n(this,"a","href",t)}})},a15b:function(t,e,r){"use strict";var s=r("23e7"),n=r("e330"),i=r("44ad"),o=r("fc6a"),a=r("a640"),l=n([].join),c=i!=Object,u=a("join",",");s({target:"Array",proto:!0,forced:c||!u},{join:function(t){return l(o(this),void 0===t?",":t)}})},ade33:function(t,e,r){t.exports=r.p+"img/priority.946fdddc.svg"},af03:function(t,e,r){var s=r("d039");t.exports=function(t){return s((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},d3c5:function(t,e,r){t.exports=r.p+"img/clickup.1570dc28.png"},e915:function(t,e,r){"use strict";r.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("article",{staticClass:"project",attrs:{id:"project-"+t.id}},[t.admin?s("Actions",{attrs:{id:t.id,"closed-menu":t.closedMenu},on:{"opened-menu":function(e){return t.$emit("opened-menu")}}}):t._e(),t.fields.length>0?s("div",{staticClass:"project-fields"},t._l(t._fields,(function(e,r){return s("span",{key:r,staticClass:"project-field"},[t._v(" "+t._s(e)+" ")])})),0):t._e(),t.priority?s("div",{staticClass:"project-priority"},[s("img",{staticClass:"project-priority__img",attrs:{src:r("ade33")}}),s("span",{staticClass:"project-priority__txt"},[t._v("Prioritaire")])]):t._e(),s("header",{staticClass:"project-header"},[s("div",{staticClass:"project-header__title"},[s("h2",[t._v(" "+t._s(t.title)+" "),this.link?s("a",{staticStyle:{display:"inline-flex","align-items":"flex-end"},attrs:{href:this.link,title:this.link,target:"_blank"}},[s("Icon",{attrs:{icon:"link"}})],1):t._e()]),null!==t.date_start||null!==t.date_end?s("span",[null!==t.date_start?[t._v(t._s(t.date_start._i)+" ~ ")]:[t._v(" Date de livraison "+t._s(t.status!==t.STATUS.PRODUCTION?"estimée":"")+" : ")],null!==t.date_end?[t._v(t._s(t.date_end._i)+" ")]:t._e()],2):t._e()]),s("div",{staticClass:"project-header__badges"},[s("span",{staticClass:"project-header__badge service",attrs:{"data-text":t.service}}),s("span",{staticClass:"project-header__badge status",class:[t.statusClass+"-bg"],attrs:{"data-text":t.status}})])]),t.status!==t.STATUS.CANCELLED?s("section",{staticClass:"project-progression"},[s("div",{staticClass:"project-progression__progress-bar__bg"},[s("span",{staticClass:"project-progression__progress-bar",class:[t.statusClass+"-bg"],style:{width:t.progression+"%"}})]),s("span",{staticClass:"project-progression__txt",class:[t.statusClass+"-txt"],attrs:{"data-progression":t.progression+"%"}},[t._v(" Progression : ")])]):t._e(),s("footer",{staticClass:"project-footer",style:[t.footerStyle]},[t.details?s("input",{directives:[{name:"model",rawName:"v-model",value:t.show_details,expression:"show_details"}],attrs:{type:"checkbox",id:"details__input__"+t.id,hidden:""},domProps:{checked:Array.isArray(t.show_details)?t._i(t.show_details,null)>-1:t.show_details},on:{change:function(e){var r=t.show_details,s=e.target,n=!!s.checked;if(Array.isArray(r)){var i=null,o=t._i(r,i);s.checked?o<0&&(t.show_details=r.concat([i])):o>-1&&(t.show_details=r.slice(0,o).concat(r.slice(o+1)))}else t.show_details=n}}}):t._e(),t.admin||t.history.length>0?s("input",{directives:[{name:"model",rawName:"v-model",value:t.show_history,expression:"show_history"}],attrs:{type:"checkbox",id:"history__input__"+t.id,hidden:""},domProps:{checked:Array.isArray(t.show_history)?t._i(t.show_history,null)>-1:t.show_history},on:{change:function(e){var r=t.show_history,s=e.target,n=!!s.checked;if(Array.isArray(r)){var i=null,o=t._i(r,i);s.checked?o<0&&(t.show_history=r.concat([i])):o>-1&&(t.show_history=r.slice(0,o).concat(r.slice(o+1)))}else t.show_history=n}}}):t._e(),t.admin||t.reports.length>0?s("input",{directives:[{name:"model",rawName:"v-model",value:t.show_reports,expression:"show_reports"}],attrs:{type:"checkbox",id:"reports__input__"+t.id,hidden:""},domProps:{checked:Array.isArray(t.show_reports)?t._i(t.show_reports,null)>-1:t.show_reports},on:{change:function(e){var r=t.show_reports,s=e.target,n=!!s.checked;if(Array.isArray(r)){var i=null,o=t._i(r,i);s.checked?o<0&&(t.show_reports=r.concat([i])):o>-1&&(t.show_reports=r.slice(0,o).concat(r.slice(o+1)))}else t.show_reports=n}}}):t._e(),s("section",{staticClass:"project-footer__btns"},[t.details?s("label",{staticClass:"btn",class:[{active:t.show_details}],attrs:{for:"details__input__"+t.id}},[t._v(" Détails ")]):t._e(),t.admin||t.history.length>0?s("label",{staticClass:"btn",class:[{active:t.show_history}],attrs:{for:"history__input__"+t.id}},[t._v(" Historique ")]):t._e(),t.admin||t.reports.length>0?s("label",{staticClass:"btn",class:[{active:t.show_reports}],attrs:{for:"reports__input__"+t.id}},[t._v(" Documents ("+t._s(t.reports.length)+") ")]):t._e(),s("span",[t._v("Temps consommé : "+t._s(t.timeSpent)+" "+t._s(t.estimation?"/ "+t.estimation:"")+" JH")])]),t.show_details?s("section",{staticClass:"project-footer__details"},[t.description?s("div",{staticClass:"project-footer__details__description"},[s("h3",[t._v("Description")]),s("p",{domProps:{innerHTML:t._s(t._description)}})]):t._e(),s("div",[s("h3",[t._v("Demandeur")]),s("p",[t._v(" "+t._s(t.service)+" "),t.applicant?[t._v("("+t._s(t.applicant)+")")]:t._e()],2)]),t.referent_info?s("div",[s("h3",[t._v("Scrum Master")]),s("p",[t._v(t._s(t.referent_info))])]):t._e(),t.referent_business?s("div",[s("h3",[t._v("Product Owner")]),s("p",[t._v(t._s(t.referent_business))])]):t._e(),t.developers.length>0?s("div",[s("h3",[t._v("Développeurs")]),1===t.developers.length?[s("p",[t._v(t._s(t._developers))])]:[s("ul",{staticStyle:{"margin-left":"1.5rem"}},t._l(t.developers,(function(e,r){return s("li",{key:r},[t._v(" "+t._s(e)+" ")])})),0)]],2):t._e(),t.clickup?s("div",[s("h3",[t._v("Lien Clickup")]),s("a",{staticClass:"project-link",attrs:{href:t.clickup,target:"_blank"}},[s("img",{attrs:{src:r("d3c5"),height:"100%"}})])]):t._e()]):t._e(),t.admin&&t.show_history||t.history.length>0&&t.show_history?s("History",{attrs:{id:t.id,history:t.history},on:{"content-edition":t.handlerContentEdition}}):t._e(),t.show_reports?s("Reports",{attrs:{reports:t.reports,"project-id":t.id}}):t._e()],1)],1)},n=[],i=r("2909"),o=r("5530"),a=(r("d3b7"),r("3ca3"),r("ddb0"),r("a9e3"),r("caad"),r("2532"),r("07ac"),r("9911"),r("a4d3"),r("e01a"),r("ac1f"),r("5319"),r("a15b"),r("d81d"),r("4e82"),r("430a")),l=r("1248"),c=r("94ea"),u=Object(l["b"])(),d=u.Moment,_=function(){return r.e("chunk-20dca949").then(r.bind(null,"ae9e"))},p=function(){return r.e("chunk-1026f278").then(r.bind(null,"9d03"))},h=function(){return r.e("chunk-609fcb4c").then(r.bind(null,"8f0b"))},f={name:"Project",components:{Actions:_,History:p,Reports:h},props:{closedMenu:{type:Boolean,default:function(){return!1}},id:{type:Number,default:function(){return null}},title:{type:String,default:function(){return null}},users:{type:Array,default:function(){return[]}},date_start:{type:d,default:function(){return null}},date_end:{type:d,default:function(){return null}},priority:{type:Boolean,default:function(){return!1}},progression:{type:Number,default:function(){return 0}},service:{type:String,default:function(){return null}},fields:{type:Array,default:function(){return[]}},applicant:{type:String,default:function(){return null}},referent_info:{type:String,default:function(){return null}},referent_business:{type:String,default:function(){return null}},status:{type:String,default:"EN COURS",validator:function(t){return Object.values(a["o"]).includes(t)}},description:{type:String,default:function(){return null}},clickup:{type:String,default:function(){return null}},link:{type:String,default:function(){return null}},developers:{type:Array,default:function(){return[]}},history:{type:Array,default:function(){return[]}},timeSpent:{type:Number,default:function(){return 0}},estimation:{type:Number,default:function(){return 0}}},data:function(){var t=!1,e=!1,r=!1;return{show_details:t,show_history:e,show_reports:r}},computed:Object(o["a"])(Object(o["a"])({},Object(c["e"])({admin:function(t){var e=t.admin;return e}})),{},{externalLink:function(){return this.link?" ".concat(this.link):""},reports:function(){return this.$store.getters[a["p"].GETTERS.FILES_GET_BY_PROJECT](this.id)},_description:function(){var t,e;return null!==(t=null===(e=this.description)||void 0===e?void 0:e.replace(/\n/g,"<br>"))&&void 0!==t?t:null},_developers:function(){return this.developers.join(", ")},_fields:function(){return Object(i["a"])(this.fields).sort((function(t,e){return t.localeCompare(e)})).map((function(t){return t.replace(/_/g," ")}))},statusClass:function(){return this.status.replace(" ","").toLowerCase()},footerStyle:function(){return[a["o"].WAITING,a["o"].CANCELLED].includes(this.status)?{marginTop:"2em"}:{}},STATUS:function(){return a["o"]},details:function(){var t,e,r,s,n;return null!==(t=this.applicant)&&void 0!==t&&t||null!==(e=this.referent_info)&&void 0!==e&&e||null!==(r=this.referent_business)&&void 0!==r&&r||null!==(s=this.description)&&void 0!==s&&s||this.developers.length>0||null!==(n=this.link)&&void 0!==n&&n},footer:function(){return this.details||this.history.length>0}}),methods:{handlerContentEdition:function(){}}},v=f,y=(r("6b55"),r("2877")),g=Object(y["a"])(v,s,n,!1,null,null,null);e["default"]=g.exports}}]);
//# sourceMappingURL=chunk-4b5a6665.chunk-4b5a6665.34a263d5.js.map