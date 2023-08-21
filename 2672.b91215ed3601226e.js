"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2672],{2672:(z,v,E)=>{E.r(v),E.d(v,{HomePageModule:()=>Y});var b=E(6814),p=E(95),x=E(504),y=E(5861);class S{constructor(a,t,n,i,r,s,c,d,g){this.setLogEntryDetail({date:new Date,distanceStart:0,distanceEnd:0,description:" start",fuel:!0,timestamp:(new Date).toISOString()}),this.setFuelEntryDetail({amount:0,amountUnit:"liter",priceUnit:0,distance:0,timestamp:(new Date).toISOString()}),a&&(this.logEntryDetail.date=a),t&&(this.logEntryDetail.distanceStart=t),n&&(this.logEntryDetail.distanceEnd=n),i&&(this.logEntryDetail.description=i),r&&(this.logEntryDetail.fuel=r),s&&(this.fuelEntryDetail.amount=s),c&&(this.fuelEntryDetail.amountUnit=c),d&&(this.fuelEntryDetail.priceUnit=d),g&&(this.fuelEntryDetail.distance=g)}get LogEntryDetail(){return this.logEntryDetail}get FuelEntryDetail(){return this.fuelEntryDetail}setLogEntryDetail(a){this.logEntryDetail=a}setFuelEntryDetail(a){this.fuelEntryDetail=a}}var w=E(7394);const N=o=>{let a,t;return o.parent&&(a=o.parent.value.distanceStart,t=o.value),t<a?{validDistance:{value:o.value}}:null};var e=E(9468),O=E(5619);const I="DriverLogsBase";let A=(()=>{class o{constructor(){this.init()}init(){const t=indexedDB.open(I,1);t.onupgradeneeded=()=>{if(this.db=t.result,!this.db.objectStoreNames.contains("LogEntries")){const n=this.db.createObjectStore("LogEntries",{keyPath:"id",autoIncrement:!0});n.createIndex("by_description","description"),n.createIndex("by_date","date"),n.createIndex("by_fuel","fuel"),n.createIndex("by_timestamp","timestamp")}if(!this.db.objectStoreNames.contains("FuelEntries")){const n=this.db.createObjectStore("FuelEntries",{keyPath:"id",autoIncrement:!0});n.createIndex("by_logEntryID","logEntryID"),n.createIndex("by_timestamp","timestamp")}},t.onsuccess=()=>(this.db=t.result,console.log("the databese is create and initilize",this.db),this.db),t.onerror=()=>(console.error("open db have failed",t.error),t.error)}getDatabase(t=I,n=1){return console.log("getDatabase parameter",t,n),indexedDB.open(t,n)}getAll(){console.log("indexedDB ",indexedDB);const t=indexedDB.open("DriverLogsBase",1);t.onsuccess=()=>{this.db=t.result};const n=this.db.transaction(["LogEntries","FuelEntries"],"readwrite");console.log("transaction created",n);const i=n.objectStore("LogEntries").getAll();let r;console.log("logEntryStore is creates",i),i.onsuccess=(0,y.Z)(function*(){r=i.result,console.log("getted data",r),r.forEach((s,c)=>{if(s.fuel){const d=n.objectStore("FuelEntries");console.log("fuelEntryStore",d);const g=d.index("by_logEntryID");console.log("fuelEntryStore",g),console.log("index",c);const u=g.get(c+1);console.log("fuelEntryReq",u),u.onsuccess=(0,y.Z)(function*(){const m=u.result;console.log("fuelEntryReq-> detail",m),r[c]={logEntryDetail:s,fuelEntryDetail:m},console.log("data with fuelEntryDetail ",r[c])})}else r[c]={logEntryDetail:s}},s=>console.error("noget gik galt ",s)),console.log("data for return succes ",r)}),n.oncomplete=()=>(console.log("getAll done"),console.log("data for return complete",r),r)}getAllData(){var t=this;return(0,y.Z)(function*(){const n=t.db.transaction(["LogEntries","FuelEntries"],"readwrite");console.log("transaction created",n);const i=n.objectStore("LogEntries").getAll();let r;console.log("logEntryStore is creates",i),i.onsuccess=(0,y.Z)(function*(){r=i.result,console.log("getted data",r),r.forEach((s,c)=>{if(s.fuel){const d=n.objectStore("FuelEntries");console.log("fuelEntryStore",d);const g=d.index("by_logEntryID");console.log("fuelEntryStore",g),console.log("index",c);const u=g.get(c+1);console.log("fuelEntryReq",u),u.onsuccess=(0,y.Z)(function*(){const m=u.result;console.log("fuelEntryReq-> detail",m),r[c]={logEntryDetail:s,fuelEntryDetail:m},console.log("data with fuelEntryDetail ",r[c])})}else r[c]={logEntryDetail:s}},s=>console.error("noget gik galt ",s)),console.log("data for return succes ",r)}),n.oncomplete=()=>(console.log("getAll done"),console.log("data for return complete",r),r)})()}put(t,n,i){const r=t.put(n,i);return console.log("objectStore.put returnPut",r),r}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();const C="DriverLogsBase",_="LogEntries",h="FuelEntries";let T=(()=>{class o{constructor(t){this.dbService=t,this.logEntries=new O.X(new S),t.init(),this.init()}init(){const t=this.dbService.getDatabase(C,1);console.log("databaseRequest init:",t),console.log("timestamp",(new Date).toISOString()),t.onupgradeneeded=()=>{console.log("databaRequest init logEntries.service",t),this.database=t.result,this.database.objectStoreNames.contains(_)||(this.logEntriesStore=this.database.createObjectStore(_,{keyPath:"id",autoIncrement:!0}),this.logEntriesStore.indexNames.contains("by_date")||this.logEntriesStore.createIndex("by_date","date"),this.logEntriesStore.indexNames.contains("by_fuel")||this.logEntriesStore.createIndex("by_fuel","fuel"),this.logEntriesStore.indexNames.contains("by_description")||this.logEntriesStore.createIndex("by_description","description"),this.logEntriesStore.indexNames.contains("by_timestamp")||this.logEntriesStore.createIndex("by_timestamp","timestamp")),this.database.objectStoreNames.contains(h)||(this.fuelEntriesStore=this.database.createObjectStore(h,{autoIncrement:!0}),this.fuelEntriesStore.indexNames.contains("by_logEntryID")||this.fuelEntriesStore.createIndex("by_logEntryID","logEntryID"),this.fuelEntriesStore.indexNames.contains("by_timestamp")||this.fuelEntriesStore.createIndex("by_timestamp","timestamp"))},t.onsuccess=()=>{console.log("databaRequest init logEntries.service",t),this.database=t.result,this.database.objectStoreNames.contains(h)||(this.fuelEntriesStore=this.database.createObjectStore(h,{keyPath:"id",autoIncrement:!0}),this.fuelEntriesStore.indexNames.contains("by_logEntryID")||this.fuelEntriesStore.createIndex("by_logEntryID","logEntryID"),this.fuelEntriesStore.indexNames.contains("by_timestamp")||this.fuelEntriesStore.createIndex("by_timestamp","timeStamp"))},t.onerror=()=>{console.error("getDatabase failed in init logentriesService",t.error)}}get distanceEnd(){return this.lastDistanceEnd}getEntries(){return this.logEntries.asObservable()}updateEntries(t){this.logEntries.next(t)}put(t){var n=this;return(0,y.Z)(function*(){return new Promise((i,r)=>{console.log("logEntries.put this.database",n.database);const s=n.database.transaction([_,h],"readwrite");s.onerror=()=>{console.error("tx fejler",s.error),console.error("tx: ",s),s.abort()};const c={...t.LogEntryDetail,timestamp:t.LogEntryDetail.timestamp?t.LogEntryDetail.timestamp:(new Date).toISOString()},d=n.dbService.put(s.objectStore(_),c);d.onsuccess=(0,y.Z)(function*(){const g=d.result;if(t.setLogEntryDetail({...c,id:g}),t.LogEntryDetail.fuel){const u=yield n.getDistanceFuel(s,c),m={...t.FuelEntryDetail,logEntryID:g,distance:Number(u).valueOf(),timestamp:t.fuelEntryDetail.timestamp?t.fuelEntryDetail.timestamp:(new Date).toISOString()},f=n.dbService.put(s.objectStore(h),m);f.onsuccess=()=>{const D=f.result;console.log("fuelEntry data is saved",D),t.setFuelEntryDetail({...m,id:D}),s.commit()},f.onerror=()=>{s.abort()}}}),d.onerror=()=>{console.error(" save logEntry fejler",d.error),s.abort()},s.oncomplete=()=>{console.log("put is completes"),n.updateEntries(t),i(t)},s.onabort=()=>{console.error("save the logEntry data has fault",s.error),r(s.error)}})})()}delete(t){var n=this;return(0,y.Z)(function*(){const i=n.database.transaction([_,h],"readwrite");i.oncomplete=()=>{console.log("logEntry with key "+t+" is deleted")},i.onerror=()=>{console.error("delete of logEntry with key "+t+"is failed",i.error)};const r=i.objectStore(_),s=r.get(t);s.onerror=()=>{console.error("can't get the logentry record",s.error),i.abort()},s.onsuccess=()=>{const c=s.result;if(c.fuel){const g=i.objectStore(h),u=g.index("by_logEntryID").getKey(c.id);u.onsuccess=()=>{console.log("fuelkey is "+u.result),void 0!==u.result&&u.result&&g.delete(u.result)},u.onerror=()=>{console.error("Can't find the key"+t,u.error)}}const d=r.delete(t);d.onsuccess=()=>{console.log("logEntry with key "+t+" is deleted",d.result)}}})()}getAllData(){console.log("getAllData this.db",this.dbService);const t=this.dbService.getDatabase(C,1);t.onsuccess=()=>{const i=t.result.transaction([_,h],"readwrite"),r=i.objectStore(_).openCursor();r.onerror=()=>{console.error("Failed to open cursor",r.error),i.abort()},r.onsuccess=()=>{const s=r.result;if(s){if(s.value.fuel){const c=s.key,d=i.objectStore(h).index("by_logEntryID").get(c);d.onsuccess=()=>{const g=d.result,u=s.value,m=new S;m.setLogEntryDetail(u),m.setFuelEntryDetail(g),d.onerror=()=>{console.log("get fuel failed",d.error)},this.updateEntries(m)}}else{const c=new S;c.setLogEntryDetail(s.value),this.updateEntries(c)}s.continue()}else i.commit()},i.oncomplete=()=>{console.log("getAll data complete")}}}getDistanceFuel(t,n){return(0,y.Z)(function*(){const i=IDBKeyRange.upperBound(n.timestamp,!0);return yield new Promise((r,s)=>{const c=t.objectStore(h).index("by_timestamp").openCursor(i,"prev");let u,m,d=null,g=null;u=n.distanceEnd,c.onsuccess=()=>{if(m=c.result,m){const f=m.value.logEntryID;if(f===n.id)m.continue();else{const D=t.objectStore(_).get(f);D.onsuccess=()=>{g=D.result.distanceEnd,d=u-g,console.log("return distance",d),r(d)},D.onerror=()=>{console.error("get last distanceEd failed",D.error),t.abort()}}}else console.log("no more fuel entries",m),r(u-0)},c.onerror=()=>{const f=c.error;console.error("get Distance open fuelCursor failed",f),s(f)}})})()}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(A))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var l=E(3536);function P(o,a){if(1&o&&(e.ynx(0),e.TgZ(1,"ion-row")(2,"ion-col")(3,"ion-item",16),e._UZ(4,"ion-input",17),e.TgZ(5,"ion-select",18)(6,"ion-select-option",19),e._uU(7,"Liter"),e.qZA(),e.TgZ(8,"ion-select-option",20),e._uU(9," kwh"),e.qZA()()()()(),e.TgZ(10,"ion-row")(11,"ion-col")(12,"ion-item",21)(13,"ion-label",5),e._uU(14),e.qZA(),e._UZ(15,"ion-input",22),e.TgZ(16,"label",23),e._uU(17," kr"),e.qZA()()()(),e.BQk()),2&o){const t=e.oxw();e.xp6(4),e.Q6J("clearInput",!0),e.xp6(10),e.hij(" pris/",t.form.value.amountUnit,""),e.xp6(1),e.MGl("placeholder","Indtast pris pr.",t.form.value.amountUnit,""),e.Q6J("clearInput",!0)}}let U=(()=>{class o{constructor(t,n,i){this.entriesService=t,this.fb=n,this.modalCtrl=i,this.distanceEnd$=new w.w0,this.distanceEnd=100,console.log("input",this.selectedEntry),t.init(),this.ngOnInit(),this.now=new Date}cancel(){return this.modalCtrl.dismiss(null,"cancel")}confirm(){return this.modalCtrl.dismiss(this.onSubmit(this.form),"confirm")}onSubmit(t){if(console.log("input til onSubmit",t),t.value.date&&t.valid){let n;n=this.selectedEntry?this.selectedEntry:new S,n.setLogEntryDetail({...n.logEntryDetail,date:t.value.date,distanceStart:t.value.distanceStart,distanceEnd:t.value.distanceEnd,description:t.value.description,fuel:t.value.fuel}),t.value.fuel&&n.setFuelEntryDetail({...n.fuelEntryDetail,amount:t.value.amount,amountUnit:t.value.amountUnit,priceUnit:t.value.priceUnit}),this.entriesService.put(n).then(r=>{t.reset(),this.now=new Date},r=>console.error("logEntry saved failen",r))}}onClick(){}ngOnInit(){console.log("onInit input",this.selectedEntry),this.distanceEnd$=this.entriesService.getEntries().subscribe(t=>{t&&(this.distanceEnd=Array.isArray(t)?t[0].logEntryDetail.distanceEnd:t.logEntryDetail.distanceEnd)}),this.form=this.fb.group({date:new p.NI(this.selectedEntry?this.selectedEntry.logEntryDetail.date:(new Date).toISOString().substring(0,19),{nonNullable:!0}),description:new p.NI(this.selectedEntry?this.selectedEntry.logEntryDetail.description:"",{nonNullable:!0}),distanceStart:new p.NI(this.selectedEntry?this.selectedEntry.logEntryDetail.distanceStart:this.distanceEnd,{nonNullable:!0}),distanceEnd:new p.NI(this.selectedEntry?this.selectedEntry.logEntryDetail.distanceEnd:this.distanceEnd,N),fuel:new p.NI(!!this.selectedEntry&&this.selectedEntry.logEntryDetail.fuel,{nonNullable:!0}),amount:new p.NI(this.selectedEntry?this.selectedEntry.fuelEntryDetail.amount:0,{nonNullable:!0}),amountUnit:new p.NI(this.selectedEntry?this.selectedEntry.fuelEntryDetail.amountUnit:"Liter",{nonNullable:!0}),priceUnit:new p.NI(this.selectedEntry?this.selectedEntry.fuelEntryDetail.priceUnit:0,{nonNullable:!0})})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(T),e.Y36(p.qu),e.Y36(l.IN))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-edit-log-entry-form"]],inputs:{selectedEntry:"selectedEntry"},decls:51,vars:2,consts:[["slot","start"],[3,"click"],["slot","end"],[3,"formGroup","ngSubmit"],["lines","inline",1,"d-inline"],["position","floating"],["size","16","type","datetime-local","name","date","date","","formControlName","date"],["size","50","inputmode","text","maxlength","50","clearInput","true","type","text","placeholder","indtast sted eller Form\xe5l","name","description","description","","formControlName","description"],["slot","helper"],["slot","error"],["size","10","inputmode","decimal","maxlength","10","clearInput","true","type","number","placeholder","Indtast start kilometer","name","distanceStart","distanceStart","","formControlName","distanceStart"],["size","10","inputmode","decimal","maxlength","10","clearInput","true","type","number","placeholder","Indtast Slut kilometer","name","distanceEnd","distanceEnd","","formControlName","distanceEnd","appDistanceValidator",""],["lines","inline","id","fuel",1,""],[1,"fuel-station"],["slot","start","name","fuel","fuel","","formControlName","fuel"],[4,"ngIf"],["lines","inline","id","amount",1,"d-inline"],["slot","start","size","6","inputmode","decimal","type","number","placeholder","Indtast antal","name","amount","amounts","","formControlName","amount",3,"clearInput"],["name","amountUnit","id","amountUnit","okText","v\xe6lg","size","2","amountUnit","","formControlName","amountUnit"],["value","Liter"],["value","kwh"],["lines","inline","id","priceUnit",1,"d-inline"],["inputmode","decimal","type","number","size","6","name","priceUnit","priceUnit","","formControlName","priceUnit",3,"clearInput","placeholder"],["position","floating","slot","end",1,"d-inline","ion-float-end","ion-text-end","ion-align-self-center"]],template:function(t,n){1&t&&(e.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0)(3,"ion-button",1),e.NdJ("click",function(){return n.cancel()}),e._uU(4,"cancel"),e.qZA()(),e.TgZ(5,"ion-title"),e._uU(6,"Indtast driver log oplysninger "),e.qZA(),e.TgZ(7,"ion-buttons",2)(8,"ion-button",1),e.NdJ("click",function(){return n.confirm()}),e._uU(9,"confirm"),e.qZA()()()(),e.TgZ(10,"ion-content")(11,"form",3),e.NdJ("ngSubmit",function(){return n.onSubmit(n.form)}),e.TgZ(12,"ion-grid")(13,"ion-row")(14,"ion-col")(15,"ion-item",4)(16,"ion-label",5),e._uU(17,"Dato"),e.qZA(),e._UZ(18,"ion-input",6),e.qZA()()(),e.TgZ(19,"ion-row")(20,"ion-col")(21,"ion-item",4)(22,"ion-label",5),e._uU(23," Beskrivelse"),e.qZA(),e._UZ(24,"ion-input",7),e.TgZ(25,"ion-note",8),e._uU(26,"must be at text"),e.qZA(),e.TgZ(27,"ion-note",9),e._uU(28,"fejl i ndtastningen"),e.qZA()()()(),e.TgZ(29,"ion-row")(30,"ion-col")(31,"ion-item",4)(32,"ion-label",5),e._uU(33," Start kilometer"),e.qZA(),e._UZ(34,"ion-input",10),e.qZA()()(),e.TgZ(35,"ion-row")(36,"ion-col")(37,"ion-item",4)(38,"ion-label",5),e._uU(39," Slut kilometer"),e.qZA(),e._UZ(40,"ion-input",11),e.TgZ(41,"ion-note",8),e._uU(42,"the distance end must be greater than distance start"),e.qZA(),e.TgZ(43,"ion-note",9),e._uU(44,"distance end is not greater than distance start"),e.qZA()()()(),e.TgZ(45,"ion-row")(46,"ion-col")(47,"ion-item",12),e._UZ(48,"span",13)(49,"ion-checkbox",14),e.qZA()()(),e.YNc(50,P,18,4,"ng-container",15),e.qZA()()()),2&t&&(e.xp6(11),e.Q6J("formGroup",n.form),e.xp6(39),e.Q6J("ngIf",n.form.value.fuel))},dependencies:[b.O5,p._Y,p.JJ,p.JL,p.nD,l.YG,l.Sm,l.nz,l.wI,l.W2,l.jY,l.Gu,l.pK,l.Ie,l.Q$,l.uN,l.Nd,l.t9,l.n0,l.wd,l.sr,l.w,l.as,l.QI,l.j9,p.sg,p.u],styles:['@charset "UTF-8";*[_ngcontent-%COMP%]{padding:0;margin:0;border:0;--inner-padding-end: 0 --inner-padding-end: 0 }ion-input[_ngcontent-%COMP%]{margin:0}.fuel-station[_ngcontent-%COMP%]:after{content:"\\26fd"}']}),o})();function q(o,a){if(1&o&&(e.ynx(0,15),e.TgZ(1,"ion-col",5),e._uU(2),e.ALo(3,"number"),e.qZA(),e.TgZ(4,"ion-col",6),e._uU(5),e.qZA(),e.TgZ(6,"ion-col",7),e._uU(7),e.ALo(8,"number"),e.qZA(),e.TgZ(9,"ion-col",16),e._uU(10),e.ALo(11,"number"),e.qZA(),e.BQk()),2&o){const t=e.oxw(2).$implicit;e.xp6(2),e.hij(" ",e.xi3(3,4,t.fuelEntryDetail.amount,".2-2"),""),e.xp6(3),e.hij(" ",t.fuelEntryDetail.amountUnit,""),e.xp6(2),e.hij(" ",e.xi3(8,7,t.fuelEntryDetail.priceUnit,".2-2"),""),e.xp6(3),e.hij(" ",e.xi3(11,10,t.fuelEntryDetail.distance/t.fuelEntryDetail.amount,"1.2-2")," km/l")}}function k(o,a){if(1&o){const t=e.EpF();e.ynx(0,13),e.NdJ("click",function(){e.CHM(t);const i=e.oxw().$implicit,r=e.oxw(2);return e.KtG(r.showDetail(i))}),e.TgZ(1,"ion-col",1),e._uU(2),e.ALo(3,"date"),e.qZA(),e.TgZ(4,"ion-col",2),e._uU(5),e.qZA(),e.TgZ(6,"ion-col",3),e._uU(7),e.qZA(),e.TgZ(8,"ion-col",4),e._uU(9),e.qZA(),e.YNc(10,q,12,13,"ng-container",14),e.BQk()}if(2&o){const t=e.oxw().$implicit;e.xp6(2),e.hij(" ",e.xi3(3,5,t.logEntryDetail.date,"dd.MM.yy"),""),e.xp6(3),e.hij(" ",t.logEntryDetail.distanceStart," "),e.xp6(2),e.hij(" ",t.logEntryDetail.distanceEnd,""),e.xp6(2),e.hij(" ",t.logEntryDetail.description,""),e.xp6(1),e.Q6J("ngIf",t.logEntryDetail.fuel)}}function F(o,a){if(1&o){const t=e.EpF();e.TgZ(0,"ion-row"),e.YNc(1,k,11,8,"ng-container",11),e.TgZ(2,"ion-col",12),e.NdJ("click",function(){const r=e.CHM(t).index,s=e.oxw(2);return e.KtG(s.delete(r))}),e._uU(3,"delete"),e.qZA()()}if(2&o){const t=a.index;e.xp6(1),e.Q6J("ngIf",t<=10)}}function M(o,a){if(1&o&&(e.TgZ(0,"div"),e.YNc(1,F,4,1,"ion-row",10),e.qZA()),2&o){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",t.logEntries)}}let j=(()=>{class o{constructor(t,n,i){this.db=t,this.logEntriesService=n,this.modalCtrl=i,this.logEntries=new Array,this.logEntriesSub=new w.w0,console.log("constructor ListLigEntriesComponent",t.getDatabase()),n.getAllData()}showDetail(t){console.log("showDetail input",t),this.modalCtrl.create({component:U,componentProps:{selectedEntry:t}}).then(n=>(n.present(),n.onDidDismiss()))}delete(t){console.log("delete logentryId "+t),this.logEntriesService.delete(this.logEntries[t].LogEntryDetail.id).then(n=>{console.log("logEntryId "+t+" is deleted",n),this.logEntries.splice(t,1)},n=>console.error("delete failed",n)).catch(n=>console.error("deleted of logEntryKey "+t+" is failed")).finally(()=>console.log("finaly "))}getAllData(){this.logEntriesService.getAllData()}ngOnInit(){this.logEntriesSub=this.logEntriesService.getEntries().subscribe(t=>{if(t){if(Array.isArray(t))this.logEntries=this.logEntries.concat(t);else{const n=this.logEntries.findIndex(i=>i.logEntryDetail.id===t.LogEntryDetail.id);n<0?this.logEntries.unshift(t):this.logEntries.fill(t,n,n+1)}this.logEntries.sort((n,i)=>i.logEntryDetail.timestamp-n.logEntryDetail.timestamp)}})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(A),e.Y36(T),e.Y36(l.IN))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-list-log-entries"]],decls:19,vars:1,consts:[[1,"ion-no-padding"],[1,"field-date"],[1,"field-start-km","ion-text-end"],[1,"field-end-km","ion-text-end"],[1,"field-description"],[1,"field-amount","ion-text-end","ion-hide-md-down"],[1,"field-unit","ion-hide-md-down"],[1,"field-price-unit","ion-text-end","ion-hide-md-down"],[1,"field-distance-unit","ion-hide-md-","ion-hide-md-down","ion-text-end"],[4,"ngIf"],[4,"ngFor","ngForOf"],[3,"click",4,"ngIf"],[1,"log-entry-delete",3,"click"],[3,"click"],["class","",4,"ngIf"],[1,""],[1,"field-distance-unit","ion-text-end","ion-hide-md-down"]],template:function(t,n){1&t&&(e.TgZ(0,"ion-grid",0)(1,"ion-row")(2,"ion-col",1),e._uU(3," dato"),e.qZA(),e.TgZ(4,"ion-col",2),e._uU(5," start km "),e.qZA(),e.TgZ(6,"ion-col",3),e._uU(7," slut km"),e.qZA(),e.TgZ(8,"ion-col",4),e._uU(9," Beskrivelse"),e.qZA(),e.TgZ(10,"ion-col",5),e._uU(11," antal"),e.qZA(),e.TgZ(12,"ion-col",6),e._uU(13," enhed"),e.qZA(),e.TgZ(14,"ion-col",7),e._uU(15," pris pr. enhed"),e.qZA(),e.TgZ(16,"ion-col",8),e._uU(17," distance pr enhed "),e.qZA()(),e.YNc(18,M,2,1,"div",9),e.qZA()),2&t&&(e.xp6(18),e.Q6J("ngIf",n.logEntries))},dependencies:[b.sg,b.O5,l.wI,l.jY,l.Nd,b.JJ,b.uU],styles:['ion-col[_ngcontent-%COMP%]{flex:0 0 auto;margin:.5ch;padding:0}.field-date[_ngcontent-%COMP%]{width:7ch;border-width:.5ch}.field-start-km[_ngcontent-%COMP%], .field-end-km[_ngcontent-%COMP%]{width:6ch;border-width:.5ch}.field-description[_ngcontent-%COMP%]{width:13ch;border-width:.5ch}.field-amount[_ngcontent-%COMP%]{width:6ch;border-width:.5ch}.field-unit[_ngcontent-%COMP%], .field-price-unit[_ngcontent-%COMP%]{width:7ch;border-width:.5ch}.field-distance-unit[_ngcontent-%COMP%]{width:14ch;border-width:.5ch}@media screen and (min-width: 576px){.field-description[_ngcontent-%COMP%]{width:50vw}}@media screen and (min-width: 680px){.field-description[_ngcontent-%COMP%]{width:50vw}}@media screen and (min-width: 768px){.field-description[_ngcontent-%COMP%]{width:30vw}}@media screen and (min-width: 992px){.field-description[_ngcontent-%COMP%]{width:35vw}}@media screen and (min-width: 1200px){.field-description[_ngcontent-%COMP%]{width:50vw}}.fuel-station[_ngcontent-%COMP%]:after{content:"&#26FD;"}.log-entry-delete[_ngcontent-%COMP%]{content:"delete"}']}),o})();const R=[{path:"",component:(()=>{class o{constructor(t){this.modalCtrl=t}openModal(){var t=this;return(0,y.Z)(function*(){const n=yield t.modalCtrl.create({component:U});n.present();const{data:i,role:r}=yield n.onWillDismiss();"confirm"===r&&console.log("data saved",i)})()}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(l.IN))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-home"]],decls:9,vars:2,consts:[[3,"translucent"],["slot","end"],["expand","block",3,"click"],["name","add-outline"],[3,"fullscreen"]],template:function(t,n){1&t&&(e.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),e._uU(3," DriverLog - v0.3a test "),e.qZA(),e.TgZ(4,"ion-buttons",1)(5,"ion-button",2),e.NdJ("click",function(){return n.openModal()}),e._UZ(6,"ion-icon",3),e.qZA()()()(),e.TgZ(7,"ion-content",4),e._UZ(8,"app-list-log-entries"),e.qZA()),2&t&&(e.Q6J("translucent",!0),e.xp6(7),e.Q6J("fullscreen",!0))},dependencies:[l.YG,l.Sm,l.W2,l.Gu,l.gu,l.wd,l.sr,j],styles:["#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}"]}),o})()}];let B=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[x.Bz.forChild(R),x.Bz]}),o})();var J=E(5946);let Y=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[b.ez,p.u5,l.Pc,B,p.UX,J.Wr]}),o})()}}]);