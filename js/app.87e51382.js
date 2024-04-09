(function(){"use strict";var t={67:function(t,e,l){var o=l(5130),a=l(6768);function s(t,e,l,o,s,r){const c=(0,a.g2)("Header"),i=(0,a.g2)("router-view"),n=(0,a.g2)("Footer");return(0,a.uX)(),(0,a.CE)(a.FK,null,[(0,a.bF)(c),(0,a.bF)(i),(0,a.bF)(n)],64)}function r(t,e,l,o,s,r){const c=(0,a.g2)("router-link"),i=(0,a.g2)("b-navbar-toggle"),n=(0,a.g2)("b-navbar-nav"),d=(0,a.g2)("b-collapse"),u=(0,a.g2)("b-navbar");return(0,a.uX)(),(0,a.CE)("div",null,[(0,a.bF)(u,{toggleable:"lg",variant:"dark",class:"m-0"},{default:(0,a.k6)((()=>[(0,a.bF)(c,{class:"colorWtB",to:"https://jellyzoo.github.io/vueshopping/"},{default:(0,a.k6)((()=>[(0,a.eW)("Logo")])),_:1}),(0,a.bF)(i,{target:"nav-collapse"}),(0,a.bF)(d,{id:"nav-collapse","is-nav":"",class:"text-light"},{default:(0,a.k6)((()=>[(0,a.bF)(n,null,{default:(0,a.k6)((()=>[(0,a.bF)(c,{to:"https://jellyzoo.github.io/vueshopping/",class:"colorWt"},{default:(0,a.k6)((()=>[(0,a.eW)("상품리스트")])),_:1}),(0,a.bF)(c,{to:"https://jellyzoo.github.io/vueshopping/detail",class:"colorWt"},{default:(0,a.k6)((()=>[(0,a.eW)("상세페이지")])),_:1}),(0,a.bF)(c,{to:"https://jellyzoo.github.io/vueshopping/create",class:"colorWt"},{default:(0,a.k6)((()=>[(0,a.eW)("제품등록페이지")])),_:1})])),_:1}),(0,a.bF)(n,{class:"ml-auto"},{default:(0,a.k6)((()=>[void 0==r.user.profile?((0,a.uX)(),(0,a.CE)("button",{key:0,class:"btn btn-danger m-1",type:"button",onClick:e[0]||(e[0]=(...t)=>r.kakaoLoin&&r.kakaoLoin(...t))}," 로그인 ")):((0,a.uX)(),(0,a.CE)("button",{key:1,class:"btn bg-primary text-white m-1",type:"button",onClick:e[1]||(e[1]=(...t)=>r.kakaoLogout&&r.kakaoLogout(...t))}," 로그아웃 "))])),_:1})])),_:1})])),_:1})])}l(4114);var c={name:"header",computed:{user(){return this.$store.state.user}},methods:{kakaoLoin(){window.Kakao.Auth.login({scope:"profile_image, profile_nickname",success:this.getProfile})},getProfile(t){console.log(t),window.Kakao.API.request({url:"/v2/user/me",success:t=>{const e=t.kakao_account,l=e.profile_image,o=e.profile.nickname;console.log("profile",l),console.log("nickname",o),console.log(e),this.login(e),alert("로그인 성공!")}})},async login(t){this.$store.commit("user",t)},kakaoLogout(){window.Kakao.Auth.logout((t=>{console.log(t),this.$store.commit("user",{}),alert("로그아웃"),this.$router.push({path:"/"})}))}}},i=l(1241);const n=(0,i.A)(c,[["render",r]]);var d=n;const u={class:"mt-5 py-5 bg-dark"},p=(0,a.Fv)('<div class="row"><div class="col-12 col-md"><small class="d-block mb-3 text-light">© 2017-2020</small></div><div class="col-6 col-md"><h5 class="link-light">Features</h5><ul class="list-unstyled text-small"><li><a class="link-light" href="#">Cool stuff</a></li><li><a class="link-light" href="#">Random feature</a></li><li><a class="link-light" href="#">Team feature</a></li><li><a class="link-light" href="#">Stuff for developers</a></li><li><a class="link-light" href="#">Another one</a></li><li><a class="link-light" href="#">Last time</a></li></ul></div><div class="col-6 col-md"><h5 class="link-light">Resources</h5><ul class="list-unstyled text-small"><li><a class="link-secondary" href="#">Resource name</a></li><li><a class="link-secondary" href="#">Resource</a></li><li><a class="link-secondary" href="#">Another resource</a></li><li><a class="link-secondary" href="#">Final resource</a></li></ul></div><div class="col-6 col-md"><h5 class="link-light">Resources</h5><ul class="list-unstyled text-small"><li><a class="link-secondary" href="#">Business</a></li><li><a class="link-secondary" href="#">Education</a></li><li><a class="link-secondary" href="#">Government</a></li><li><a class="link-secondary" href="#">Gaming</a></li></ul></div><div class="col-6 col-md"><h5 class="link-light">About</h5><ul class="list-unstyled text-small"><li><a class="link-secondary" href="#">Team</a></li><li><a class="link-secondary" href="#">Locations</a></li><li><a class="link-secondary" href="#">Privacy</a></li><li><a class="link-secondary" href="#">Terms</a></li></ul></div></div>',1),m=[p];function k(t,e,l,o,s,r){return(0,a.uX)(),(0,a.CE)("footer",u,m)}var h={};const g=(0,i.A)(h,[["render",k]]);var b=g,L={components:{Header:d,Footer:b}};const v=(0,i.A)(L,[["render",s]]);var f=v,y=l(1387),w=l(4232);const _={class:"mt-5"},C={class:"container"},$=(0,a.Fv)('<div class="row mb-2"><div class="col-12"><select class="form-select"><option selected></option><option value="1">BEST 10%</option><option value="2">TOP 10</option><option value="3">EVENT 10% ~ 80%</option></select></div></div>',1),x={key:0,class:"row"},I=(0,a.Lk)("h5",{class:"m-4"},"등록된 상품이 없습니다.",-1),D=[I],E={class:"row"},F={class:"card",style:{width:"18rem"}},P=["onClick"],T=["src"],X={class:"card-body"},U={class:"card-title"},O={class:"card-text"},A={class:"badge bg-dark text-white me-1"},j={class:"badge bg-dark text-white me-1"},V={class:"badge bg-dark text-white"},J={class:"d-flex justify-content-between align-items-center"},B=(0,a.Lk)("div",{class:"btn-group",role:"group"},[(0,a.Lk)("button",{type:"button",class:"btn btn-sm btn-outline-secondary"}," 장바구니 담기 "),(0,a.Lk)("button",{type:"button",class:"btn btn-sm btn-outline-secondary"},"주문하기")],-1),K={class:"text-dark"};function S(t,e,l,o,s,r){return(0,a.uX)(),(0,a.CE)("main",_,[(0,a.Lk)("div",C,[$,0==s.productList?((0,a.uX)(),(0,a.CE)("div",x,D)):(0,a.Q3)("",!0),(0,a.Lk)("div",E,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(s.productList,((t,e)=>((0,a.uX)(),(0,a.CE)("div",{class:"col-xl-3 col-lg-4 col-md-6",key:e},[(0,a.Lk)("div",F,[(0,a.Lk)("a",{onClick:e=>r.goToDetail(t.id),style:{cursor:"pointer"}},[(0,a.Lk)("img",{src:`/download/${t.id}/${t.path}`,class:"card-img-top",alt:"..."},null,8,T)],8,P),(0,a.Lk)("div",X,[(0,a.Lk)("h5",U,(0,w.v_)(t.product_name),1),(0,a.Lk)("p",O,[(0,a.Lk)("span",A,(0,w.v_)(t.category1),1),(0,a.Lk)("span",j,(0,w.v_)(t.category2),1),(0,a.Lk)("span",V,(0,w.v_)(t.category3),1)]),(0,a.Lk)("div",J,[B,(0,a.Lk)("small",K,(0,w.v_)(t.product_price)+"원",1)])])])])))),128))])])])}var M={data(){return{productList:[]}},created(){this.getProductList()},methods:{async getProductList(){this.productList=await this.$api("/api/productList",{}),console.log(this.productList)},goToDetail(t){this.$router.push({path:"/detail",query:{product_id:t}})}}};const z=(0,i.A)(M,[["render",S]]);var q=z;const R={class:"mt-3"},W={class:"container"},N={class:"row"},G={class:"col-md-5"},H={id:"carouselExampleIndicators",class:"carousel carousel-dark slide","data-bs-ride":"carousel"},Q=(0,a.Lk)("ol",{class:"carousel-indicators"},[(0,a.Lk)("li",{"data-bs-target":"#carouselExampleIndicators","data-bs-slide-to":"0",class:"active"}),(0,a.Lk)("li",{"data-bs-target":"#carouselExampleIndicators","data-bs-slide-to":"1"}),(0,a.Lk)("li",{"data-bs-target":"#carouselExampleIndicators","data-bs-slide-to":"2"})],-1),Y={class:"carousel-inner"},Z=["src"],tt=(0,a.Lk)("a",{class:"carousel-control-prev",href:"#carouselExampleIndicators",role:"button","data-bs-slide":"prev"},[(0,a.Lk)("span",{class:"carousel-control-prev-icon","aria-hidden":"true"}),(0,a.Lk)("span",{class:"visually-hidden"},"Previous")],-1),et=(0,a.Lk)("a",{class:"carousel-control-next",href:"#carouselExampleIndicators",role:"button","data-bs-slide":"next"},[(0,a.Lk)("span",{class:"carousel-control-next-icon","aria-hidden":"true"}),(0,a.Lk)("span",{class:"visually-hidden"},"Next")],-1),lt={class:"col-md-7"},ot={class:"card shadow-sm"},at={class:"card-body"},st={class:"card-title"},rt={class:"card-title pt-3 pb-3 border-top"},ct={class:"card-text border-top pt-3"},it={class:"badge bg-dark me-1"},nt={class:"badge bg-dark me-1"},dt={class:"badge bg-dark"},ut={class:"card-text pb-3"},pt={class:"card-text border-top pb-3"},mt={class:"row"},kt=(0,a.Lk)("div",{class:"col-auto"},[(0,a.Lk)("label",{class:"col-form-label"},"구매수량")],-1),ht={class:"col-auto"},gt={class:"input-group"},bt={class:"row pt-3 pb-3 border-top"},Lt=(0,a.Lk)("div",{class:"col-6"},[(0,a.Lk)("h3",null,"총 상품 금액")],-1),vt={class:"col-6",style:{"text-align":"right"}},ft=(0,a.Fv)('<div class="d-flex justify-content-between align-items-center"><div class="col-6 d-grid p-1"><button type="button" class="btn btn-lg btn-dark">장바구니 담기</button></div><div class="col-6 d-grid p-1"><button type="button" class="btn btn-lg btn-danger">주문하기</button></div></div>',1),yt={class:"row"},wt={class:"col-12"},_t=["src"];function Ct(t,e,l,s,r,c){return(0,a.uX)(),(0,a.CE)("main",R,[(0,a.Lk)("div",W,[(0,a.Lk)("div",N,[(0,a.Lk)("div",G,[(0,a.Lk)("div",H,[Q,(0,a.Lk)("div",Y,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(r.productImage,((t,e)=>((0,a.uX)(),(0,a.CE)("div",{class:(0,w.C4)("carousel-item "+(0==e?"active":"")),key:e},[(0,a.Lk)("img",{src:`/download/${r.productId}/${t.path}`,class:"d-block w-100",alt:"..."},null,8,Z)],2)))),128))]),tt,et])]),(0,a.Lk)("div",lt,[(0,a.Lk)("div",ot,[(0,a.Lk)("div",at,[(0,a.Lk)("h5",st,(0,w.v_)(r.productDetail.product_name),1),(0,a.Lk)("h5",rt,(0,w.v_)(c.getCurrencyFormat(r.productDetail.product_price))+"원 ",1),(0,a.Lk)("p",ct,[(0,a.Lk)("span",it,(0,w.v_)(r.productDetail.category1),1),(0,a.Lk)("span",nt,(0,w.v_)(r.productDetail.category2),1),(0,a.Lk)("span",dt,(0,w.v_)(r.productDetail.category3),1)]),(0,a.Lk)("p",ut," 배송비 "+(0,w.v_)(c.getCurrencyFormat(r.productDetail.delivery_price))+"원 | 도서산간(제주도) 배송비 추가 "+(0,w.v_)(c.getCurrencyFormat(r.productDetail.add_delivery_price))+"원 | 택배배송 | "+(0,w.v_)(r.productDetail.outbound_days)+"일 이내 출고 (주말,공휴일 제외) ",1),(0,a.Lk)("div",pt,[(0,a.Lk)("div",mt,[kt,(0,a.Lk)("div",ht,[(0,a.Lk)("div",gt,[(0,a.Lk)("span",{class:"input-group-text",style:{cursor:"pointer"},onClick:e[0]||(e[0]=t=>c.calculatePrice(-1))},"-"),(0,a.bo)((0,a.Lk)("input",{type:"text",class:"form-control",style:{width:"40px"},"onUpdate:modelValue":e[1]||(e[1]=t=>r.total=t)},null,512),[[o.Jo,r.total]]),(0,a.Lk)("span",{class:"input-group-text",style:{cursor:"pointer"},onClick:e[2]||(e[2]=t=>c.calculatePrice(1))},"+")])])])]),(0,a.Lk)("div",bt,[Lt,(0,a.Lk)("div",vt,[(0,a.Lk)("h3",null,(0,w.v_)(c.getCurrencyFormat(r.totalPrice))+"원",1)])]),ft])])])]),(0,a.Lk)("div",yt,[(0,a.Lk)("div",wt,[(0,a.Lk)("img",{src:`/download/${r.productId}/${r.productDetail.path}`,class:"img-fluid"},null,8,_t)])])])])}var $t={data(){return{productId:0,productDetail:{},productImage:[],total:1,totalPrice:0}},created(){this.productId=this.$route.query.product_id,this.getProductDetail(),this.getProductImage()},methods:{calculatePrice(t){let e=this.total+t;e<1&&(e=1),this.total=e,this.totalPrice=this.productDetail.product_price*this.total},getCurrencyFormat(t){return this.$currencyFormat(t)},async getProductDetail(){let t=await this.$api("/api/productDetail",{param:[this.productId]});t.length>0&&(this.productDetail=t[0],this.totalPrice=this.totalPrice=this.productDetail.product_price*this.total),console.log(this.productDetail)},async getProductImage(){this.productImage=await this.$api("/api/productMainImages",{param:[this.productId]}),console.log("this.productImage",this.productImage)}}};const xt=(0,i.A)($t,[["render",Ct]]);var It=xt;const Dt={class:"mt-3"},Et={class:"container"},Ft=(0,a.Lk)("h2",{class:"text-center"},"제품 등록",-1),Pt={class:"mb-3 row"},Tt=(0,a.Lk)("label",{class:"col-md-3 col-form-label"},"제품명",-1),Xt={class:"col-md-9"},Ut={class:"mb-3 row"},Ot=(0,a.Lk)("label",{class:"col-md-3 col-form-label"},"제품가격",-1),At={class:"col-md-9"},jt={class:"input-group mb-3"},Vt=(0,a.Lk)("span",{class:"input-group-text"},"원",-1),Jt={class:"mb-3 row"},Bt=(0,a.Lk)("label",{class:"col-md-3 col-form-label"},"배송비",-1),Kt={class:"col-md-9"},St={class:"input-group mb-3"},Mt=(0,a.Lk)("span",{class:"input-group-text"},"원",-1),zt={class:"mb-3 row"},qt=(0,a.Lk)("label",{class:"col-md-3 col-form-label"},"추가배송비(도서산간)",-1),Rt={class:"col-md-9"},Wt={class:"input-group mb-3"},Nt=(0,a.Lk)("span",{class:"input-group-text"},"원",-1),Gt={class:"mb-3 row"},Ht=(0,a.Lk)("label",{class:"col-md-3 col-form-label"},"제품카테고리",-1),Qt={class:"col-md-9"},Yt={class:"row"},Zt={class:"col-auto"},te=["value"],ee={class:"col-auto"},le=["value"],oe={class:"col-auto"},ae=["value"],se={class:"mb-3 row"},re=(0,a.Lk)("label",{class:"col-md-3 col-form-label"},"태그",-1),ce={class:"col-md-9"},ie={class:"mb-3 row"},ne=(0,a.Lk)("label",{class:"col-md-3 col-form-label"},"출고일",-1),de={class:"col-md-9"},ue={class:"input-group mb-3"},pe=(0,a.Lk)("span",{class:"input-group-text"},"일 이내 출고",-1),me={class:"mb-3 row"},ke={class:"col-6 d-grid p-1"},he={class:"col-6 d-grid p-1"};function ge(t,e,l,s,r,c){return(0,a.uX)(),(0,a.CE)("main",Dt,[(0,a.Lk)("div",Et,[Ft,(0,a.Lk)("div",Pt,[Tt,(0,a.Lk)("div",Xt,[(0,a.bo)((0,a.Lk)("input",{type:"text",class:"form-control","onUpdate:modelValue":e[0]||(e[0]=t=>r.product.product_name=t)},null,512),[[o.Jo,r.product.product_name]])])]),(0,a.Lk)("div",Ut,[Ot,(0,a.Lk)("div",At,[(0,a.Lk)("div",jt,[(0,a.bo)((0,a.Lk)("input",{type:"number",class:"form-control","onUpdate:modelValue":e[1]||(e[1]=t=>r.product.product_price=t)},null,512),[[o.Jo,r.product.product_price]]),Vt])])]),(0,a.Lk)("div",Jt,[Bt,(0,a.Lk)("div",Kt,[(0,a.Lk)("div",St,[(0,a.bo)((0,a.Lk)("input",{type:"number",class:"form-control","onUpdate:modelValue":e[2]||(e[2]=t=>r.product.delivery_price=t)},null,512),[[o.Jo,r.product.delivery_price]]),Mt])])]),(0,a.Lk)("div",zt,[qt,(0,a.Lk)("div",Rt,[(0,a.Lk)("div",Wt,[(0,a.bo)((0,a.Lk)("input",{type:"number",class:"form-control","onUpdate:modelValue":e[3]||(e[3]=t=>r.product.add_delivery_price=t)},null,512),[[o.Jo,r.product.add_delivery_price]]),Nt])])]),(0,a.Lk)("div",Gt,[Ht,(0,a.Lk)("div",Qt,[(0,a.Lk)("div",Yt,[(0,a.Lk)("div",Zt,[(0,a.bo)((0,a.Lk)("select",{class:"form-select","onUpdate:modelValue":e[4]||(e[4]=t=>r.cate1=t),onChange:e[5]||(e[5]=(...t)=>c.changeCategory1&&c.changeCategory1(...t))},[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(r.category1,((t,e)=>((0,a.uX)(),(0,a.CE)("option",{value:t,key:e},(0,w.v_)(t),9,te)))),128))],544),[[o.u1,r.cate1]])]),(0,a.Lk)("div",ee,[(0,a.bo)((0,a.Lk)("select",{class:"form-select","onUpdate:modelValue":e[6]||(e[6]=t=>r.cate2=t),onChange:e[7]||(e[7]=(...t)=>c.changeCategory2&&c.changeCategory2(...t))},[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(r.category2,((t,e)=>((0,a.uX)(),(0,a.CE)("option",{value:t,key:e},(0,w.v_)(t),9,le)))),128))],544),[[o.u1,r.cate2]])]),(0,a.Lk)("div",oe,[(0,a.bo)((0,a.Lk)("select",{class:"form-select","onUpdate:modelValue":e[8]||(e[8]=t=>r.cate3=t)},[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(r.category3,((t,e)=>((0,a.uX)(),(0,a.CE)("option",{value:t,key:e},(0,w.v_)(t),9,ae)))),128))],512),[[o.u1,r.cate3]])])])])]),(0,a.Lk)("div",se,[re,(0,a.Lk)("div",ce,[(0,a.bo)((0,a.Lk)("input",{type:"text",class:"form-control","onUpdate:modelValue":e[9]||(e[9]=t=>r.product.tags=t)},null,512),[[o.Jo,r.product.tags]])])]),(0,a.Lk)("div",ie,[ne,(0,a.Lk)("div",de,[(0,a.Lk)("div",ue,[(0,a.bo)((0,a.Lk)("input",{type:"number",class:"form-control","onUpdate:modelValue":e[10]||(e[10]=t=>r.product.outbound_days=t)},null,512),[[o.Jo,r.product.outbound_days]]),pe])])]),(0,a.Lk)("div",me,[(0,a.Lk)("div",ke,[(0,a.Lk)("button",{type:"button",class:"btn btn-lg btn-dark",onClick:e[11]||(e[11]=(...t)=>c.goToList&&c.goToList(...t))},"취소하기")]),(0,a.Lk)("div",he,[(0,a.Lk)("button",{type:"button",class:"btn btn-lg btn-danger",onClick:e[12]||(e[12]=(...t)=>c.productInsert&&c.productInsert(...t))},"저장하기")])])])])}var be={data(){return{product:{product_name:"",product_price:0,delivery_price:0,add_delivery_price:0,tags:"",outbound_days:0,category_id:1,seller_id:1},categoryList:[],category1:[],category2:[],category3:[],cate1:"",cate2:"",cate3:""}},computed:{user(){return this.$store.state.user}},created(){this.getCategoryList()},mounted(){void 0==this.user.profile&&(alert("로그인을 해야 이용할 수 있습니다."),this.$router.push({path:"/"}))},methods:{goToList(){this.$router.push({path:"/sales"})},async getCategoryList(){let t=await this.$api("/api/categoryList",{});this.categoryList=t;let e={};t.forEach((t=>{e[t.category1]=t.id}));let l=[];for(let s in e)l.push(s);this.category1=l;let o=[];o=t.filter((t=>t.category1==l[0]));let a={};o.forEach((t=>{a[t.category2]=t.id})),o=[];for(let s in a)o.push(s);this.category2=o},changeCategory1(){this.category3=[];let t=this.categoryList.filter((t=>t.category1==this.cate1)),e={};t.forEach((t=>{e[t.category2]=t.id}));let l=[];for(let o in e)l.push(o);this.category2=l},changeCategory2(){let t=this.categoryList.filter((t=>t.category1==this.cate1&&t.category2==this.cate2)),e={};t.forEach((t=>{e[t.category3]=t.id}));let l=[];for(let o in e)l.push(o);this.category3=l},productInsert(){return""==this.product.product_name?this.$swal("제품명은 필수 입력값입니다."):""==this.product.product_price||0==this.product.product_price?this.$swal("제품 가격을 입력하세요."):""==this.product.delivery_price||0==this.product.delivery_price?this.$swal("배송료를 입력하세요."):""==this.product.outbound_days||0==this.product.outbound_days?this.$swal("출고일을 입력하세요."):(this.product.category_id=this.categoryList.filter((t=>t.category1==this.cate1&&t.category2==this.cate2&&t.category3==this.cate3))[0].id,console.log(this.product.category_id),void this.$swal.fire({title:"정말 등록 하시겠습니까?",showCancelButton:!0,confirmButtonText:"생성",cancelButtonText:"취소"}).then((async t=>{t.isConfirmed&&(await this.$api("/api/productInsert",{param:[this.product]}),this.$swal.fire("저장되었습니다!","","success"),this.$router.push({path:"/sales"}))})))}}};const Le=(0,i.A)(be,[["render",ge]]);var ve=Le;const fe={class:"mt-5"},ye={class:"container"},we=(0,a.Lk)("h4",{class:"text-center mb-5"},"Product Management",-1),_e={class:"float-end mb-2"},Ce={class:"table table-bordered"},$e=(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("th",null,"이미지"),(0,a.Lk)("th",null,"제품명"),(0,a.Lk)("th",null,"제품가격"),(0,a.Lk)("th")])],-1),xe=["src"],Ie={class:"align-middle"},De={class:"align-middle"},Ee={class:"align-middle"},Fe=["onClick"],Pe=["onClick"],Te=["onClick"];function Xe(t,e,l,o,s,r){return(0,a.uX)(),(0,a.CE)("main",fe,[(0,a.Lk)("div",ye,[we,(0,a.Lk)("div",_e,[(0,a.Lk)("button",{type:"button",class:"btn btn-outline-dark",onClick:e[0]||(e[0]=(...t)=>r.goToInsert&&r.goToInsert(...t))},"제품등록")]),(0,a.Lk)("table",Ce,[$e,(0,a.Lk)("tbody",null,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(s.productList,((t,e)=>((0,a.uX)(),(0,a.CE)("tr",{key:e},[(0,a.Lk)("td",null,[(0,a.Lk)("img",{src:`/download/${t.id}/${t.path}`,style:{height:"auto",width:"80px"}},null,8,xe)]),(0,a.Lk)("td",Ie,(0,w.v_)(t.product_name),1),(0,a.Lk)("td",De,(0,w.v_)(r.getCurrencyFormat(t.product_price)),1),(0,a.Lk)("td",Ee,[(0,a.Lk)("button",{type:"button",class:"btn btn-outline-secondary me-1",onClick:e=>r.goToImageInsert(t.id)}," 사진등록 ",8,Fe),(0,a.Lk)("button",{type:"button",class:"btn btn-outline-success me-1",onClick:e=>r.goToUpdate(t.id)}," 수정 ",8,Pe),(0,a.Lk)("button",{type:"button",class:"btn btn-outline-danger",onClick:e=>r.deleteProduct(t.id)}," 삭제 ",8,Te)])])))),128))])])])])}var Ue={data(){return{productList:[]}},created(){this.getProductList()},methods:{getCurrencyFormat(t){return this.$currencyFormat(t)},async getProductList(){this.productList=await this.$api("/api/productList2",{}),console.log(this.productList)},goToInsert(){this.$router.push({path:"/create"})},goToDetail(t){this.$router.push({path:"/detail",query:{product_id:t}})},goToUpdate(t){this.$router.push({path:"/update",query:{product_id:t}})},goToImageInsert(t){this.$router.push({path:"/image_insert",query:{product_id:t}})},deleteProduct(t){this.$swal.fire({title:"정말 삭제하시겠습니까?",showCancelButton:!0,confirmButtonText:"DELETE",cancelButtonText:"CANCEL"}).then((async e=>{e.isConfirmed&&(await this.$api("/api/productDelete",{param:[t]}),this.getProductList(),this.$swal.fire("Deleted.","","success"))}))}}};const Oe=(0,i.A)(Ue,[["render",Xe]]);var Ae=Oe;const je={class:"mt-3"},Ve={class:"container"},Je=(0,a.Lk)("h2",{class:"text-center"},"제품 사진 등록",-1),Be={class:"mb-3 row"},Ke=(0,a.Lk)("label",{class:"col-md-3 col-form-label"},"제품ID",-1),Se={class:"col-md-9"},Me={class:"mb-3 row"},ze=(0,a.Lk)("label",{class:"col-md-3 col-form-label"},"제품명",-1),qe={class:"col-md-9"},Re={class:"mb-3 row"},We=(0,a.Lk)("label",{class:"col-md-3 col-form-label"},"썸네일이미지",-1),Ne={class:"col-md-9"},Ge={class:"row"},He={class:"position-relative"},Qe=["src"],Ye=["onClick"],Ze=(0,a.Lk)("div",{class:"alert alert-secondary",role:"alert"},[(0,a.Lk)("ul",null,[(0,a.Lk)("li",null,"이미지 사이즈 : 350*350"),(0,a.Lk)("li",null,"파일 사이즈 : 1M 이하"),(0,a.Lk)("li",null,"파일 확장자 : png, jpg만 가능")])],-1),tl={class:"mb-3 row"},el=(0,a.Lk)("label",{class:"col-md-3 col-form-label"},"제품이미지",-1),ll={class:"col-md-9"},ol={class:"row"},al={class:"position-relative"},sl=["src"],rl=["onClick"],cl=(0,a.Lk)("div",{class:"alert alert-secondary",role:"alert"},[(0,a.Lk)("ul",null,[(0,a.Lk)("li",null,"최대 5개 가능"),(0,a.Lk)("li",null,"이미지 사이즈 : 700*700"),(0,a.Lk)("li",null,"파일 사이즈 : 1M 이하"),(0,a.Lk)("li",null,"파일 확장자 : png, jpg만 가능")])],-1),il={class:"mb-3 row"},nl=(0,a.Lk)("label",{class:"col-md-3 col-form-label"},"제품설명이미지",-1),dl={class:"col-md-9"},ul={class:"row"},pl={class:"col-lg-6 col-md-8"},ml=(0,a.Lk)("div",{class:"alert alert-secondary",role:"alert"},[(0,a.Lk)("ul",null,[(0,a.Lk)("li",null,"파일 사이즈 : 5M 이하"),(0,a.Lk)("li",null,"파일 확장자 : png, jpg만 가능")])],-1),kl={class:"position-relative"},hl=["src"],gl=["onClick"],bl={class:"mb-3 row m-auto"};function Ll(t,e,l,o,s,r){return(0,a.uX)(),(0,a.CE)("main",je,[(0,a.Lk)("div",Ve,[Je,(0,a.Lk)("div",Be,[Ke,(0,a.Lk)("div",Se,(0,w.v_)(s.productId),1)]),(0,a.Lk)("div",Me,[ze,(0,a.Lk)("div",qe,(0,w.v_)(s.productDetail.product_name),1)]),(0,a.Lk)("div",Re,[We,(0,a.Lk)("div",Ne,[(0,a.Lk)("div",Ge,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(s.productImage.filter((t=>1==t.type)),((t,e)=>((0,a.uX)(),(0,a.CE)("div",{class:"col-lg-3 col-md-4 col-sm-2",key:e},[(0,a.Lk)("div",He,[(0,a.Lk)("img",{src:`/download/${s.productId}/${t.path}`,class:"img-fluid"},null,8,Qe),(0,a.Lk)("div",{class:"position-absolute top-0 end-0",style:{cursor:"pointer"},onClick:e=>r.deleteImage(t.id)}," X ",8,Ye)])])))),128))]),(0,a.Lk)("input",{type:"file",class:"form-control",accept:"image/png,image/jpeg",onChange:e[0]||(e[0]=t=>r.uploadFile(t.target.files,1))},null,32),Ze])]),(0,a.Lk)("div",tl,[el,(0,a.Lk)("div",ll,[(0,a.Lk)("div",ol,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(s.productImage.filter((t=>2==t.type)),((t,e)=>((0,a.uX)(),(0,a.CE)("div",{class:"col-lg-3 col-md-4 col-sm-2",key:e},[(0,a.Lk)("div",al,[(0,a.Lk)("img",{src:`/download/${s.productId}/${t.path}`,class:"img-fluid"},null,8,sl),(0,a.Lk)("div",{class:"position-absolute top-0 end-0",style:{cursor:"pointer"},onClick:e=>r.deleteImage(t.id)}," X ",8,rl)])])))),128))]),(0,a.Lk)("input",{type:"file",class:"form-control",accept:"image/png,image/jpeg",onChange:e[1]||(e[1]=t=>r.uploadFile(t.target.files,2))},null,32),cl])]),(0,a.Lk)("div",il,[nl,(0,a.Lk)("div",dl,[(0,a.Lk)("div",ul,[(0,a.Lk)("div",pl,[(0,a.Lk)("input",{type:"file",class:"form-control",accept:"image/png,image/jpeg",onChange:e[2]||(e[2]=t=>r.uploadFile(t.target.files,3))},null,32),ml]),((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(s.productImage.filter((t=>3==t.type)),((t,e)=>((0,a.uX)(),(0,a.CE)("div",{class:"col-lg-6 col-md-4",key:e},[(0,a.Lk)("div",kl,[(0,a.Lk)("img",{src:`/download/${s.productId}/${t.path}`,class:"img-fluid"},null,8,hl),(0,a.Lk)("div",{class:"position-absolute top-0 end-0",style:{cursor:"pointer"},onClick:e=>r.deleteImage(t.id)}," X ",8,gl)])])))),128))])])]),(0,a.Lk)("div",bl,[(0,a.Lk)("button",{type:"button",class:"btn btn-lg btn-outline-dark",onClick:e[3]||(e[3]=(...t)=>r.goToList&&r.goToList(...t))},"CONFIRM")])])])}var vl={data(){return{productId:0,productName:"",productDetail:{},productImage:[]}},computed:{user(){return this.$store.state.user}},created(){this.productId=this.$route.query.product_id,this.getProductDetail(),this.getProductImage()},mounted(){void 0==this.user.profile&&(alert("로그인을 해야 이용할 수 있습니다."),this.$router.push({path:"/"}))},methods:{goToList(){this.$router.push({path:"/sales"})},async getProductDetail(){let t=await this.$api("/api/productDetail",{param:[this.productId]});t.length>0&&(this.productDetail=t[0])},async getProductImage(){this.productImage=await this.$api("/api/imageList",{param:[this.productId]}),console.log(this.productImage)},deleteImage(t){this.$swal.fire({title:"정말 삭제 하시겠습니까?",showCancelButton:!0,confirmButtonText:"삭제",cancelButtonText:"취소"}).then((async e=>{e.isConfirmed&&(await this.$api("/api/imageDelete",{param:[t]}),this.getProductImage(),this.$swal.fire("삭제되었습니다!","","success"))}))},async uploadFile(t,e){let l="",o=null;t&&(l=t[0].name,o=await this.$base64(t[0]));const{error:a}=await this.$api(`/upload/${this.productId}/${e}/${l}`,{data:o});if(a)return this.$swal("이미지 업로드 실패했습니다. 다시 시도하세요.");this.$swal("이미지가 업로드 되었습니다."),setTimeout((()=>{this.getProductImage()}),1e3)}}};const fl=(0,i.A)(vl,[["render",Ll]]);var yl=fl;const wl={class:"mt-3"},_l={class:"container"},Cl={class:"row justify-content-center"},$l={class:"col-md-8"},xl=(0,a.Lk)("h2",{class:"text-center mb-5"},"제품 수정",-1),Il={class:"mb-3 row"},Dl=(0,a.Lk)("label",{class:"col-md-3 col-form-label"},"제품명",-1),El={class:"col-md-9"},Fl={class:"mb-3 row"},Pl=(0,a.Lk)("label",{class:"col-md-3 col-form-label"},"제품 가격",-1),Tl={class:"col-md-9"},Xl={class:"input-group"},Ul=(0,a.Lk)("span",{class:"input-group-text"},"원",-1),Ol={class:"mb-3 row"},Al=(0,a.Lk)("label",{class:"col-md-3 col-form-label"},"제품 설명",-1),jl={class:"col-md-9"},Vl={class:"mb-3 row"},Jl=(0,a.Lk)("label",{class:"col-md-3 col-form-label"},"색상",-1),Bl={class:"col-md-9"},Kl={class:"mb-3 row"},Sl=(0,a.Lk)("label",{class:"col-md-3 col-form-label"},"소재",-1),Ml={class:"col-md-9"},zl={class:"mb-3 row"},ql=(0,a.Lk)("label",{class:"col-md-3 col-form-label"},"모델 착용",-1),Rl={class:"col-md-9"},Wl={class:"mb-3 row"},Nl=(0,a.Lk)("label",{class:"col-md-3 col-form-label"},"사이즈",-1),Gl={class:"col-md-9"},Hl={class:"mb-3 row"},Ql=(0,a.Lk)("label",{class:"col-md-3 col-form-label"},"사이즈 가이드",-1),Yl={class:"col-md-9"},Zl={class:"mb-3 row"},to=(0,a.Lk)("label",{class:"col-md-3 col-form-label"},"태그",-1),eo={class:"col-md-9"},lo={class:"mb-3 row"},oo={class:"d-flex justify-content-between align-items-center"},ao={class:"col-6 d-grid p-1"},so={class:"col-6 d-grid p-1"};function ro(t,e,l,s,r,c){return(0,a.uX)(),(0,a.CE)("main",wl,[(0,a.Lk)("div",_l,[(0,a.Lk)("div",Cl,[(0,a.Lk)("div",$l,[xl,(0,a.Lk)("div",Il,[Dl,(0,a.Lk)("div",El,[(0,a.bo)((0,a.Lk)("input",{type:"text",class:"form-control","onUpdate:modelValue":e[0]||(e[0]=t=>r.productDetail.product_name=t)},null,512),[[o.Jo,r.productDetail.product_name]])])]),(0,a.Lk)("div",Fl,[Pl,(0,a.Lk)("div",Tl,[(0,a.Lk)("div",Xl,[(0,a.bo)((0,a.Lk)("input",{type:"number",class:"form-control","onUpdate:modelValue":e[1]||(e[1]=t=>r.productDetail.product_price=t)},null,512),[[o.Jo,r.productDetail.product_price]]),Ul])])]),(0,a.Lk)("div",Ol,[Al,(0,a.Lk)("div",jl,[(0,a.bo)((0,a.Lk)("textarea",{class:"form-control",rows:"7","onUpdate:modelValue":e[2]||(e[2]=t=>r.productDetail.product_description=t)},null,512),[[o.Jo,r.productDetail.product_description]])])]),(0,a.Lk)("div",Vl,[Jl,(0,a.Lk)("div",Bl,[(0,a.bo)((0,a.Lk)("input",{type:"text",class:"form-control","onUpdate:modelValue":e[3]||(e[3]=t=>r.productDetail.product_color=t)},null,512),[[o.Jo,r.productDetail.product_color]])])]),(0,a.Lk)("div",Kl,[Sl,(0,a.Lk)("div",Ml,[(0,a.bo)((0,a.Lk)("input",{type:"text",class:"form-control","onUpdate:modelValue":e[4]||(e[4]=t=>r.productDetail.product_fabric=t)},null,512),[[o.Jo,r.productDetail.product_fabric]])])]),(0,a.Lk)("div",zl,[ql,(0,a.Lk)("div",Rl,[(0,a.bo)((0,a.Lk)("input",{type:"text",class:"form-control","onUpdate:modelValue":e[5]||(e[5]=t=>r.productDetail.product_model=t)},null,512),[[o.Jo,r.productDetail.product_model]])])]),(0,a.Lk)("div",Wl,[Nl,(0,a.Lk)("div",Gl,[(0,a.bo)((0,a.Lk)("input",{type:"text",class:"form-control","onUpdate:modelValue":e[6]||(e[6]=t=>r.productDetail.product_size=t)},null,512),[[o.Jo,r.productDetail.product_size]])])]),(0,a.Lk)("div",Hl,[Ql,(0,a.Lk)("div",Yl,[(0,a.bo)((0,a.Lk)("textarea",{class:"form-control",rows:"3","onUpdate:modelValue":e[7]||(e[7]=t=>r.productDetail.product_sizeGuide=t)},null,512),[[o.Jo,r.productDetail.product_sizeGuide]])])]),(0,a.Lk)("div",Zl,[to,(0,a.Lk)("div",eo,[(0,a.bo)((0,a.Lk)("input",{type:"text",class:"form-control","onUpdate:modelValue":e[8]||(e[8]=t=>r.productDetail.tags=t)},null,512),[[o.Jo,r.productDetail.tags]])])]),(0,a.Lk)("div",lo,[(0,a.Lk)("div",oo,[(0,a.Lk)("div",ao,[(0,a.Lk)("button",{type:"button",class:"btn btn-lg btn-outline-dark",onClick:e[9]||(e[9]=(...t)=>c.goToList&&c.goToList(...t))}," CANCEL ")]),(0,a.Lk)("div",so,[(0,a.Lk)("button",{type:"button",class:"btn btn-lg btn-outline-dark",onClick:e[10]||(e[10]=(...t)=>c.productUpdate&&c.productUpdate(...t))}," SAVE ")])])])])])])])}var co={data(){return{productId:0,productDetail:{}}},computed:{user(){return this.$store.state.user}},mounted(){void 0==this.user.profile&&(alert("로그인을 해야 이용할 수 있습니다."),this.$router.push({path:"/"}))},created(){this.productId=this.$route.query.product_id,this.getProductDetail()},methods:{goToList(){this.$router.push({path:"/sales"})},async getProductDetail(){let t=await this.$api("/api/productDetail",{param:[this.productId]});t.length>0&&(this.productDetail=t[0])},productUpdate(){return""==this.productDetail.product_name?this.$swal("제품명은 필수 입력값입니다."):""==this.productDetail.product_price||0==this.productDetail.product_price?this.$swal("제품가격을 입력하세요."):""==this.productDetail.product_description?this.$swal("제품설명은 필수 입력값입니다."):""==this.productDetail.product_color?this.$swal("색상은 필수 입력값입니다."):""==this.productDetail.product_fabric?this.$swal("소재는 필수 입력값입니다."):""==this.productDetail.product_model?this.$swal("모델 착용 정보는 필수 입력값입니다."):""==this.productDetail.product_size?this.$swal("사이즈는 필수 입력값입니다."):""==this.productDetail.product_sizeGuide?this.$swal("사이즈 가이드는 필수 입력값입니다."):void this.$swal.fire({title:"정말 수정하시겠습니까?",showCancelButton:!0,confirmButtonText:"MODIFY",cancelButtonText:"CANCEL"}).then((async t=>{t.isConfirmed&&(await this.$api("/api/productUpdate",{param:[this.productDetail,this.productId]}),this.$swal.fire("Saved.","","success"),this.$router.push({path:"/sales"}))}))}}};const io=(0,i.A)(co,[["render",ro]]);var no=io;const uo=[{path:"/",name:"home",component:q},{path:"/detail",name:"ProductDetail",component:It},{path:"/create",name:"ProductCreate",component:ve},{path:"/sale",name:"SalesList",component:Ae},{path:"/image_insert",name:"ImageInsert",component:yl},{path:"/update",name:"ProductUpdate",component:no}],po=(0,y.aE)({history:(0,y.LA)("/"),routes:uo});var mo=po,ko=l(782),ho=l(5131);const go=(0,ko.y$)({state(){return{user:{}}},mutations:{user(t,e){t.user=e}},plugins:[(0,ho.A)({paths:["user"]})]});var bo=go,Lo=l(8355),vo={methods:{async $api(t,e){return(await(0,Lo.A)({method:"post",url:t,data:e}).catch((t=>{console.log(t)}))).data},$base64(t){return new Promise((e=>{var l=new FileReader;l.onload=t=>e(t.target.result),l.readAsDataURL(t)}))},$currencyFormat(t,e="#,###"){if(0==t||null==t)return 0;var l=e.substring(0,1);"$"===l||"₩"===l?e=e.substring(1,e.length):l="";var o=",",a=0,s=".";-1==e.indexOf(".")?o=",":e.indexOf(",")<e.indexOf(".")?(o=",",s=".",a=e.length-e.indexOf(".")-1):(o=".",s=",",a=e.length-e.indexOf(",")-1);for(var r="",c="",i=1,n=0;n<a;n++)i*=10;var d=String(Math.round(parseFloat(t)*i)/i);d.indexOf("-")>-1&&(r="-",d=d.substring(1)),a>0&&"0"==e.substring(e.length-1,e.length)&&(d=String(parseFloat(d).toFixed(a))),a>0&&d.indexOf(".")>-1&&(c=d.substring(d.indexOf(".")),c=c.replace(".",s),d=d.substring(0,d.indexOf(".")));var u=/\D/g;d=d.replace(u,"");var p=/(\d+)(\d{3})/;while(p.test(d))d=d.replace(p,"$1"+o+"$2");return r+l+String(d)+String(c)}}},fo=l(8047);l(8077);(0,o.Ef)(f).use(bo).use(mo).mixin(vo).use(fo.Ay).mount("#app"),window.Kakao.init("12ecc1a13dbe01f4abcde8e95d9657af")}},e={};function l(o){var a=e[o];if(void 0!==a)return a.exports;var s=e[o]={exports:{}};return t[o].call(s.exports,s,s.exports,l),s.exports}l.m=t,function(){var t=[];l.O=function(e,o,a,s){if(!o){var r=1/0;for(d=0;d<t.length;d++){o=t[d][0],a=t[d][1],s=t[d][2];for(var c=!0,i=0;i<o.length;i++)(!1&s||r>=s)&&Object.keys(l.O).every((function(t){return l.O[t](o[i])}))?o.splice(i--,1):(c=!1,s<r&&(r=s));if(c){t.splice(d--,1);var n=a();void 0!==n&&(e=n)}}return e}s=s||0;for(var d=t.length;d>0&&t[d-1][2]>s;d--)t[d]=t[d-1];t[d]=[o,a,s]}}(),function(){l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,{a:e}),e}}(),function(){l.d=function(t,e){for(var o in e)l.o(e,o)&&!l.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){l.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={524:0};l.O.j=function(e){return 0===t[e]};var e=function(e,o){var a,s,r=o[0],c=o[1],i=o[2],n=0;if(r.some((function(e){return 0!==t[e]}))){for(a in c)l.o(c,a)&&(l.m[a]=c[a]);if(i)var d=i(l)}for(e&&e(o);n<r.length;n++)s=r[n],l.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return l.O(d)},o=self["webpackChunkvueportable"]=self["webpackChunkvueportable"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=l.O(void 0,[504],(function(){return l(67)}));o=l.O(o)})();
//# sourceMappingURL=app.87e51382.js.map