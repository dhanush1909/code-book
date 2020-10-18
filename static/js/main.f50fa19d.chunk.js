(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[0],{12:function(e,t,n){e.exports={Sidebar:"sideBarMobile_Sidebar__1iVyM",NavLink:"sideBarMobile_NavLink__1OAdA",Backdrop:"sideBarMobile_Backdrop__3ocfn"}},13:function(e,t,n){e.exports={Sidebar:"sidebar_Sidebar__1Qz_V",NavLink:"sidebar_NavLink__2vEOk"}},17:function(e,t,n){e.exports={Header:"header_Header__2o08c",Hamburger:"header_Hamburger__16rUP",Active:"header_Active__3SgKT"}},2:function(e,t,n){e.exports={Content:"solutions_Content__nkAw_",Question:"solutions_Question__11_8v",Answer:"solutions_Answer__1E7KC",Solution:"solutions_Solution__72aF9",SolutionBlock:"solutions_SolutionBlock__ZbiMO",ProblemImage:"solutions_ProblemImage__M62Tk"}},21:function(e,t,n){e.exports={Logo:"logo_Logo__1mXpo",LogoImg:"logo_LogoImg__1-gSb"}},37:function(e,t,n){e.exports=n.p+"static/media/logo.0424a39d.png"},40:function(e,t,n){e.exports={Home:"home_Home__ruLji",Card:"home_Card__1r4pG"}},42:function(e,t,n){e.exports={Backdrop:"backdrop_Backdrop__9Ia71"}},43:function(e,t,n){e.exports=n.p+"static/media/running_sum_1d_array.eef876c5.png"},44:function(e,t,n){e.exports={CodeBlock:"codeBlock_CodeBlock__2zb1J"}},51:function(e,t,n){e.exports=n.p+"static/media/no-of-good-pairs.aeec7340.png"},518:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),i=n(36),s=n.n(i),o=(n(61),n(53)),c=(n(62),n(17)),l=n.n(c),p=n(21),_=n.n(p),m=n(37),j=n.n(m);function u(){return r.a.createElement("div",{className:_.a.Logo},r.a.createElement("img",{alt:"Code Book",src:j.a,className:_.a.LogoImg}),"Code Book")}function S(e){var t=e.showSideBar?l.a.Active:"",n=[l.a.Hamburger,t];return r.a.createElement("div",{className:l.a.Header},r.a.createElement("img",{className:n.join(" "),src:"https://img.icons8.com/ios-glyphs/120/000000/menu.png",alt:"menu",onClick:e.toggleMenu}),r.a.createElement(u,null))}var E=n(8),d=n(38),h=n(39),y=n(55),x=n(54),g=n(40),b=n.n(g),f=n(13),C=n.n(f);function P(){return r.a.createElement("div",{className:C.a.Sidebar},r.a.createElement("ul",null,r.a.createElement(E.b,{className:C.a.NavLink+" navlink",to:"/problems/Running-sum-of-1d-array"},r.a.createElement("li",null,"Running Sum of 1d Array")),r.a.createElement(E.b,{className:C.a.NavLink+" navlink",to:"/problems/Number-of-Good-Pairs"},r.a.createElement("li",null,"Number of Good Pairs")),r.a.createElement(E.b,{className:C.a.NavLink+" navlink",to:"/problems/Maximum-subarray"},r.a.createElement("li",null,"Maximum subarray")),r.a.createElement("li",null,"Problem 4"),r.a.createElement("li",null,"Problem 5"),r.a.createElement("li",null,"Problem 6"),r.a.createElement("li",null,"Problem 7"),r.a.createElement("li",null,"Problem 8"),r.a.createElement("li",null,"Problem 9"),r.a.createElement("li",null,"Problem 10")))}var B=n(12),v=n.n(B),k=n(42),N=n.n(k);function A(e){return r.a.createElement("div",{className:N.a.Backdrop,onClick:e.hideSideBar})}var w=function(e){var t={transform:"translate("+(e.showMobileSideBar?"0%":"-100%")+")"};return r.a.createElement(r.a.Fragment,null,e.showMobileSideBar?r.a.createElement("div",{className:v.a.Backdrop},r.a.createElement(A,{hideSideBar:e.hideSideBar})):null,r.a.createElement("div",{className:v.a.Sidebar,style:t},r.a.createElement("ul",null,r.a.createElement(E.b,{className:v.a.NavLink+" navlink",to:"/problems/Running-sum-of-1d-array"},r.a.createElement("li",null,"Running Sum of 1d Array")),r.a.createElement(E.b,{className:v.a.NavLink+" navlink",to:"/problems/Number-of-Good-Pairs"},r.a.createElement("li",null,"Number of Good Pairs")),r.a.createElement(E.b,{className:v.a.NavLink+" navlink",to:"/problems/Maximum-subarray"},r.a.createElement("li",null,"Maximum subarray")),r.a.createElement("li",null,"Maximum-subarray"),r.a.createElement("li",null,"Problem 4"),r.a.createElement("li",null,"Problem 5"),r.a.createElement("li",null,"Problem 6"),r.a.createElement("li",null,"Problem 7"),r.a.createElement("li",null,"Problem 8"),r.a.createElement("li",null,"Problem 9"),r.a.createElement("li",null,"Problem 10"))))},M=n(2),G=n.n(M),O=n(43),L=n.n(O),T=n(44),I=n.n(T),H=n(24);function D(e){return r.a.createElement(H.b,{disabled:!0,language:"java",code:e.children},r.a.createElement(H.a,{className:I.a.CodeBlock}))}var K="\npublic int[] countSum(int[] Arr) {\n  int n = Arr.length;\n  for(int i=1;i<n;i++){\n    Arr[i]=Arr[i]+Arr[i-1];\n  }\n  return Arr;\n}\n".trim();function W(){return r.a.createElement("div",{className:G.a.Content},r.a.createElement("div",{className:G.a.Question},"Caluculate running sum of the array"),r.a.createElement("img",{alt:"Running sum of 1d array",className:G.a.ProblemImage,src:L.a}),r.a.createElement("div",{className:G.a.Solution},"Solution 1:"),r.a.createElement("div",{className:G.a.Answer},"We will use the input array and modify it, and return it as the solution. That way, we don\u2019t have to create a new array. For every index of the array we need to add it with the previous index. Arr[i] = Arr[i] + Arr[i-1]."),r.a.createElement("div",null,r.a.createElement(D,null,K)),r.a.createElement("div",{className:G.a.Answer},r.a.createElement("b",null,"Time Complexity: O(n) "),"Since we iterate over each element of array once the time complexity will be O(n)."))}var R=n(51),U=n.n(R),F="\npublic int numIdenticalPairs(int[] Arr) {\n  int n = Arr.length;\n  int count = 0;\n\n  for(int i=1;i<n-1;i++){\n    for(int j=i+1;j<n;j++){\n      if(Arr[i] == Arr[j]) count++; //increase count if both the elements are same.// \n    }\n  }\n  return count;\n}\n".trim(),V="\npublic int numIdenticalPairs(int[] Arr) {\n  int n = Arr.length;\n  int finalCount = 0;\n  int tempCount = 1;\n  Arrays.sort(Arr);\n\n  for(int i=0;i<n-1;i++){\n    if(Arr[i] == Arr[i+1]){\n        tempCount++;\n    } else {\n        finalCount += (tempCount * (tempCount - 1)) / 2;\n        tempCount = 1;\n    }\n  }\n\n  /* if tempCount is > 1 then we need to \n  add the no of pairs to the finalCount */\n  finalCount += (tempCount * (tempCount - 1)) / 2;\n  return finalCount;\n}\n".trim(),q="\npublic int countSum(int[] Arr) {\n  int finalCount = 0;\n  int[] frequency = new int[101];\n\n  for(int i=0;i<Arr.length;i++){\n\n      // add the count of the number at index i to the final count //\n      finalCount += frequency[Arr[i]];\n\n      // increment the number in the frequency array //\n      frequency[Arr[i]]++;\n  }\n\n  return finalCount;\n}\n".trim();function z(){return r.a.createElement("div",{className:G.a.Content},r.a.createElement("div",{className:G.a.Question},"Number of Good Pairs"),r.a.createElement("img",{alt:"Number of Good Pairs",className:G.a.ProblemImage,src:U.a}),r.a.createElement("div",{className:G.a.SolutionBlock},r.a.createElement("div",{className:G.a.Solution},"Solution 1:"),r.a.createElement("div",{className:G.a.Answer},"Brute force approach. For every index loop through the array to find a match. Increment the count if 2 index have same value."),r.a.createElement("div",null,r.a.createElement(D,null,F)),r.a.createElement("div",{className:G.a.Answer},r.a.createElement("b",null,"Time Complexity: O(n",r.a.createElement("sup",null,"2"),")"," "),"Since we use 2 for loops time complexity will be O(n",r.a.createElement("sup",null,"2"),").")),r.a.createElement("div",{className:G.a.SolutionBlock},r.a.createElement("div",{className:G.a.Solution},"Solution 2:"),r.a.createElement("div",{className:G.a.Answer},"In this approach we will first sort the array. Then we will compare each index with the next index. Arr[i] == Arr[i+1]. If both are same then we will increae the tempCount by 1. If both are different then we will the number of pairs that can be formed using the temp count and add it to the finalCount."," ",r.a.createElement("code",null,"(tempCount * (tempCount - 1)) / 2"),". Then we will set tempCount to 1."),r.a.createElement("div",null,r.a.createElement(D,null,V)),r.a.createElement("div",{className:G.a.Answer},r.a.createElement("b",null,"Time Complexity: O(nlogn) "),"Best sorting algorith has time complexity of O(nlogn). After sorting we iterate over the array once so O(n). Hence the final complexity will be O(nlogn).")),r.a.createElement("div",{className:G.a.SolutionBlock},r.a.createElement("div",{className:G.a.Solution},"Solution 3:"),r.a.createElement("div",{className:G.a.Answer},"For this solution we need to create an frequency array that counts the number of occurence of a number. At every iteration we add the count of the number in that index to the final count.",r.a.createElement("code",null," finalCount += frequency[Arr[i]];")),r.a.createElement("div",null,r.a.createElement(D,null,q)),r.a.createElement("div",{className:G.a.Answer},r.a.createElement("b",null,"Time Complexity: O(n) "),"Since we iterate over each element of array once the time complexity will be O(n).")))}var Q=n(52),J=n.n(Q),Y="\npublic int maximumSubarray(int[] Arr) {'{'}\n  int n = Arr.length;\n  int max = Integer.MIN_VALUE;\n\n  for(int i=1;i<n-1;i++){\n    int sum = 0;\n    for(int j=i;j<n;j++){ //start the loop from ith index\n      sum += Arr[j]; \n    }    \n    max = Math.max(max,sum);\n  }\n  return max;\n}\n".trim(),X="\npublic int numIdenticalPairs(int[] Arr) {\n  int n = Arr.length;\n  int max = Integer.MIN_VALUE;\n  int sum = 0;\n\n  for(int i=0;i<n;i++){\n    sum = sum + a[i]; //add the current element to the sum.\n\n    if (max < sum) //Update max to store curreent maximum sum\n      max = sum; \n\n    if (sum < 0) //if sum is negative set it to zero\n      sum = 0; \n  } \n  return max;\n}\n".trim();function Z(){return r.a.createElement("div",{className:G.a.Content},r.a.createElement("div",{className:G.a.Question},"Maximum Subarray"),r.a.createElement("img",{alt:"Maximum Subarray",className:G.a.ProblemImage,src:J.a}),r.a.createElement("div",{className:G.a.SolutionBlock},r.a.createElement("div",{className:G.a.Solution},"Solution 1:"),r.a.createElement("div",{className:G.a.Answer},"Brute force approach. Find the sum of all the sub arrays and update maxSum. For every index loop through the array and calculate the maxSum. Check for max after calculating sum of each subarray."),r.a.createElement("div",null,r.a.createElement(D,null,Y)),r.a.createElement("div",{className:G.a.Answer},r.a.createElement("b",null,"Time Complexity: O(n",r.a.createElement("sup",null,"2"),")"," "),"Since we use 2 for loops time complexity will be O(n",r.a.createElement("sup",null,"2"),").")),r.a.createElement("div",{className:G.a.SolutionBlock},r.a.createElement("div",{className:G.a.Solution},"Solution 2:"),r.a.createElement("div",{className:G.a.Answer},r.a.createElement("b",null,"Kadane's algorithm: "),"In this algorithm we use 2 variables to store maximum_sum and sum_so_far. We iterate over the array once, at each iteration we add the number to sum_so_far and update max if"," ",r.a.createElement("code",null,"max < sum_so_far"),". Then we check if"," ",r.a.createElement("code",null,"sum_so_far < 0")," then we set sum_so_far to 0."),r.a.createElement("div",null,r.a.createElement(D,null,X)),r.a.createElement("div",{className:G.a.Answer},r.a.createElement("b",null,"Time Complexity: O(n) "),"we iterate over the array once so O(n). Hence the final complexity will be O(nlogn).")))}var $=n(3),ee=function(e){Object(y.a)(n,e);var t=Object(x.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:b.a.Home},r.a.createElement(P,null),r.a.createElement(w,{hideSideBar:this.props.hideSideBar,showMobileSideBar:this.props.showMobileSideBar}),r.a.createElement($.d,null,r.a.createElement($.b,{path:"/",exact:!0}),r.a.createElement($.b,{path:"/home",exact:!0}),r.a.createElement($.b,{path:"/problems/Running-sum-of-1d-array",exact:!0},r.a.createElement(W,null)),r.a.createElement($.b,{path:"/problems/Number-of-Good-Pairs",exact:!0},r.a.createElement(z,null)),r.a.createElement($.b,{path:"/problems/Maximum-subarray",exact:!0},r.a.createElement(Z,null))),r.a.createElement($.a,{to:"/problems/Running-sum-of-1d-array"}))}}]),n}(a.Component);var te=function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),n=t[0],i=t[1],s=function(){console.log("clicked"),i(!n)};return r.a.createElement(E.a,{basename:"/code-book"},r.a.createElement("div",{className:"App"},r.a.createElement(S,{toggleMenu:s,sideBarShown:n,showSideBar:n}),r.a.createElement(ee,{hideSideBar:s,showMobileSideBar:n})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(te,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},52:function(e,t,n){e.exports=n.p+"static/media/maximum-subarray.9c1e348d.png"},56:function(e,t,n){e.exports=n(518)},61:function(e,t,n){},62:function(e,t,n){},83:function(e,t,n){var a={"./Binary_Property/ASCII.js":84,"./Binary_Property/ASCII_Hex_Digit.js":85,"./Binary_Property/Alphabetic.js":86,"./Binary_Property/Any.js":87,"./Binary_Property/Assigned.js":88,"./Binary_Property/Bidi_Control.js":89,"./Binary_Property/Bidi_Mirrored.js":90,"./Binary_Property/Case_Ignorable.js":91,"./Binary_Property/Cased.js":92,"./Binary_Property/Changes_When_Casefolded.js":93,"./Binary_Property/Changes_When_Casemapped.js":94,"./Binary_Property/Changes_When_Lowercased.js":95,"./Binary_Property/Changes_When_NFKC_Casefolded.js":96,"./Binary_Property/Changes_When_Titlecased.js":97,"./Binary_Property/Changes_When_Uppercased.js":98,"./Binary_Property/Dash.js":99,"./Binary_Property/Default_Ignorable_Code_Point.js":100,"./Binary_Property/Deprecated.js":101,"./Binary_Property/Diacritic.js":102,"./Binary_Property/Emoji.js":103,"./Binary_Property/Emoji_Component.js":104,"./Binary_Property/Emoji_Modifier.js":105,"./Binary_Property/Emoji_Modifier_Base.js":106,"./Binary_Property/Emoji_Presentation.js":107,"./Binary_Property/Extended_Pictographic.js":108,"./Binary_Property/Extender.js":109,"./Binary_Property/Grapheme_Base.js":110,"./Binary_Property/Grapheme_Extend.js":111,"./Binary_Property/Hex_Digit.js":112,"./Binary_Property/IDS_Binary_Operator.js":113,"./Binary_Property/IDS_Trinary_Operator.js":114,"./Binary_Property/ID_Continue.js":115,"./Binary_Property/ID_Start.js":116,"./Binary_Property/Ideographic.js":117,"./Binary_Property/Join_Control.js":118,"./Binary_Property/Logical_Order_Exception.js":119,"./Binary_Property/Lowercase.js":120,"./Binary_Property/Math.js":121,"./Binary_Property/Noncharacter_Code_Point.js":122,"./Binary_Property/Pattern_Syntax.js":123,"./Binary_Property/Pattern_White_Space.js":124,"./Binary_Property/Quotation_Mark.js":125,"./Binary_Property/Radical.js":126,"./Binary_Property/Regional_Indicator.js":127,"./Binary_Property/Sentence_Terminal.js":128,"./Binary_Property/Soft_Dotted.js":129,"./Binary_Property/Terminal_Punctuation.js":130,"./Binary_Property/Unified_Ideograph.js":131,"./Binary_Property/Uppercase.js":132,"./Binary_Property/Variation_Selector.js":133,"./Binary_Property/White_Space.js":134,"./Binary_Property/XID_Continue.js":135,"./Binary_Property/XID_Start.js":136,"./General_Category/Cased_Letter.js":137,"./General_Category/Close_Punctuation.js":138,"./General_Category/Connector_Punctuation.js":139,"./General_Category/Control.js":140,"./General_Category/Currency_Symbol.js":141,"./General_Category/Dash_Punctuation.js":142,"./General_Category/Decimal_Number.js":143,"./General_Category/Enclosing_Mark.js":144,"./General_Category/Final_Punctuation.js":145,"./General_Category/Format.js":146,"./General_Category/Initial_Punctuation.js":147,"./General_Category/Letter.js":148,"./General_Category/Letter_Number.js":149,"./General_Category/Line_Separator.js":150,"./General_Category/Lowercase_Letter.js":151,"./General_Category/Mark.js":152,"./General_Category/Math_Symbol.js":153,"./General_Category/Modifier_Letter.js":154,"./General_Category/Modifier_Symbol.js":155,"./General_Category/Nonspacing_Mark.js":156,"./General_Category/Number.js":157,"./General_Category/Open_Punctuation.js":158,"./General_Category/Other.js":159,"./General_Category/Other_Letter.js":160,"./General_Category/Other_Number.js":161,"./General_Category/Other_Punctuation.js":162,"./General_Category/Other_Symbol.js":163,"./General_Category/Paragraph_Separator.js":164,"./General_Category/Private_Use.js":165,"./General_Category/Punctuation.js":166,"./General_Category/Separator.js":167,"./General_Category/Space_Separator.js":168,"./General_Category/Spacing_Mark.js":169,"./General_Category/Surrogate.js":170,"./General_Category/Symbol.js":171,"./General_Category/Titlecase_Letter.js":172,"./General_Category/Unassigned.js":173,"./General_Category/Uppercase_Letter.js":174,"./Script/Adlam.js":175,"./Script/Ahom.js":176,"./Script/Anatolian_Hieroglyphs.js":177,"./Script/Arabic.js":178,"./Script/Armenian.js":179,"./Script/Avestan.js":180,"./Script/Balinese.js":181,"./Script/Bamum.js":182,"./Script/Bassa_Vah.js":183,"./Script/Batak.js":184,"./Script/Bengali.js":185,"./Script/Bhaiksuki.js":186,"./Script/Bopomofo.js":187,"./Script/Brahmi.js":188,"./Script/Braille.js":189,"./Script/Buginese.js":190,"./Script/Buhid.js":191,"./Script/Canadian_Aboriginal.js":192,"./Script/Carian.js":193,"./Script/Caucasian_Albanian.js":194,"./Script/Chakma.js":195,"./Script/Cham.js":196,"./Script/Cherokee.js":197,"./Script/Chorasmian.js":198,"./Script/Common.js":199,"./Script/Coptic.js":200,"./Script/Cuneiform.js":201,"./Script/Cypriot.js":202,"./Script/Cyrillic.js":203,"./Script/Deseret.js":204,"./Script/Devanagari.js":205,"./Script/Dives_Akuru.js":206,"./Script/Dogra.js":207,"./Script/Duployan.js":208,"./Script/Egyptian_Hieroglyphs.js":209,"./Script/Elbasan.js":210,"./Script/Elymaic.js":211,"./Script/Ethiopic.js":212,"./Script/Georgian.js":213,"./Script/Glagolitic.js":214,"./Script/Gothic.js":215,"./Script/Grantha.js":216,"./Script/Greek.js":217,"./Script/Gujarati.js":218,"./Script/Gunjala_Gondi.js":219,"./Script/Gurmukhi.js":220,"./Script/Han.js":221,"./Script/Hangul.js":222,"./Script/Hanifi_Rohingya.js":223,"./Script/Hanunoo.js":224,"./Script/Hatran.js":225,"./Script/Hebrew.js":226,"./Script/Hiragana.js":227,"./Script/Imperial_Aramaic.js":228,"./Script/Inherited.js":229,"./Script/Inscriptional_Pahlavi.js":230,"./Script/Inscriptional_Parthian.js":231,"./Script/Javanese.js":232,"./Script/Kaithi.js":233,"./Script/Kannada.js":234,"./Script/Katakana.js":235,"./Script/Kayah_Li.js":236,"./Script/Kharoshthi.js":237,"./Script/Khitan_Small_Script.js":238,"./Script/Khmer.js":239,"./Script/Khojki.js":240,"./Script/Khudawadi.js":241,"./Script/Lao.js":242,"./Script/Latin.js":243,"./Script/Lepcha.js":244,"./Script/Limbu.js":245,"./Script/Linear_A.js":246,"./Script/Linear_B.js":247,"./Script/Lisu.js":248,"./Script/Lycian.js":249,"./Script/Lydian.js":250,"./Script/Mahajani.js":251,"./Script/Makasar.js":252,"./Script/Malayalam.js":253,"./Script/Mandaic.js":254,"./Script/Manichaean.js":255,"./Script/Marchen.js":256,"./Script/Masaram_Gondi.js":257,"./Script/Medefaidrin.js":258,"./Script/Meetei_Mayek.js":259,"./Script/Mende_Kikakui.js":260,"./Script/Meroitic_Cursive.js":261,"./Script/Meroitic_Hieroglyphs.js":262,"./Script/Miao.js":263,"./Script/Modi.js":264,"./Script/Mongolian.js":265,"./Script/Mro.js":266,"./Script/Multani.js":267,"./Script/Myanmar.js":268,"./Script/Nabataean.js":269,"./Script/Nandinagari.js":270,"./Script/New_Tai_Lue.js":271,"./Script/Newa.js":272,"./Script/Nko.js":273,"./Script/Nushu.js":274,"./Script/Nyiakeng_Puachue_Hmong.js":275,"./Script/Ogham.js":276,"./Script/Ol_Chiki.js":277,"./Script/Old_Hungarian.js":278,"./Script/Old_Italic.js":279,"./Script/Old_North_Arabian.js":280,"./Script/Old_Permic.js":281,"./Script/Old_Persian.js":282,"./Script/Old_Sogdian.js":283,"./Script/Old_South_Arabian.js":284,"./Script/Old_Turkic.js":285,"./Script/Oriya.js":286,"./Script/Osage.js":287,"./Script/Osmanya.js":288,"./Script/Pahawh_Hmong.js":289,"./Script/Palmyrene.js":290,"./Script/Pau_Cin_Hau.js":291,"./Script/Phags_Pa.js":292,"./Script/Phoenician.js":293,"./Script/Psalter_Pahlavi.js":294,"./Script/Rejang.js":295,"./Script/Runic.js":296,"./Script/Samaritan.js":297,"./Script/Saurashtra.js":298,"./Script/Sharada.js":299,"./Script/Shavian.js":300,"./Script/Siddham.js":301,"./Script/SignWriting.js":302,"./Script/Sinhala.js":303,"./Script/Sogdian.js":304,"./Script/Sora_Sompeng.js":305,"./Script/Soyombo.js":306,"./Script/Sundanese.js":307,"./Script/Syloti_Nagri.js":308,"./Script/Syriac.js":309,"./Script/Tagalog.js":310,"./Script/Tagbanwa.js":311,"./Script/Tai_Le.js":312,"./Script/Tai_Tham.js":313,"./Script/Tai_Viet.js":314,"./Script/Takri.js":315,"./Script/Tamil.js":316,"./Script/Tangut.js":317,"./Script/Telugu.js":318,"./Script/Thaana.js":319,"./Script/Thai.js":320,"./Script/Tibetan.js":321,"./Script/Tifinagh.js":322,"./Script/Tirhuta.js":323,"./Script/Ugaritic.js":324,"./Script/Vai.js":325,"./Script/Wancho.js":326,"./Script/Warang_Citi.js":327,"./Script/Yezidi.js":328,"./Script/Yi.js":329,"./Script/Zanabazar_Square.js":330,"./Script_Extensions/Adlam.js":331,"./Script_Extensions/Ahom.js":332,"./Script_Extensions/Anatolian_Hieroglyphs.js":333,"./Script_Extensions/Arabic.js":334,"./Script_Extensions/Armenian.js":335,"./Script_Extensions/Avestan.js":336,"./Script_Extensions/Balinese.js":337,"./Script_Extensions/Bamum.js":338,"./Script_Extensions/Bassa_Vah.js":339,"./Script_Extensions/Batak.js":340,"./Script_Extensions/Bengali.js":341,"./Script_Extensions/Bhaiksuki.js":342,"./Script_Extensions/Bopomofo.js":343,"./Script_Extensions/Brahmi.js":344,"./Script_Extensions/Braille.js":345,"./Script_Extensions/Buginese.js":346,"./Script_Extensions/Buhid.js":347,"./Script_Extensions/Canadian_Aboriginal.js":348,"./Script_Extensions/Carian.js":349,"./Script_Extensions/Caucasian_Albanian.js":350,"./Script_Extensions/Chakma.js":351,"./Script_Extensions/Cham.js":352,"./Script_Extensions/Cherokee.js":353,"./Script_Extensions/Chorasmian.js":354,"./Script_Extensions/Common.js":355,"./Script_Extensions/Coptic.js":356,"./Script_Extensions/Cuneiform.js":357,"./Script_Extensions/Cypriot.js":358,"./Script_Extensions/Cyrillic.js":359,"./Script_Extensions/Deseret.js":360,"./Script_Extensions/Devanagari.js":361,"./Script_Extensions/Dives_Akuru.js":362,"./Script_Extensions/Dogra.js":363,"./Script_Extensions/Duployan.js":364,"./Script_Extensions/Egyptian_Hieroglyphs.js":365,"./Script_Extensions/Elbasan.js":366,"./Script_Extensions/Elymaic.js":367,"./Script_Extensions/Ethiopic.js":368,"./Script_Extensions/Georgian.js":369,"./Script_Extensions/Glagolitic.js":370,"./Script_Extensions/Gothic.js":371,"./Script_Extensions/Grantha.js":372,"./Script_Extensions/Greek.js":373,"./Script_Extensions/Gujarati.js":374,"./Script_Extensions/Gunjala_Gondi.js":375,"./Script_Extensions/Gurmukhi.js":376,"./Script_Extensions/Han.js":377,"./Script_Extensions/Hangul.js":378,"./Script_Extensions/Hanifi_Rohingya.js":379,"./Script_Extensions/Hanunoo.js":380,"./Script_Extensions/Hatran.js":381,"./Script_Extensions/Hebrew.js":382,"./Script_Extensions/Hiragana.js":383,"./Script_Extensions/Imperial_Aramaic.js":384,"./Script_Extensions/Inherited.js":385,"./Script_Extensions/Inscriptional_Pahlavi.js":386,"./Script_Extensions/Inscriptional_Parthian.js":387,"./Script_Extensions/Javanese.js":388,"./Script_Extensions/Kaithi.js":389,"./Script_Extensions/Kannada.js":390,"./Script_Extensions/Katakana.js":391,"./Script_Extensions/Kayah_Li.js":392,"./Script_Extensions/Kharoshthi.js":393,"./Script_Extensions/Khitan_Small_Script.js":394,"./Script_Extensions/Khmer.js":395,"./Script_Extensions/Khojki.js":396,"./Script_Extensions/Khudawadi.js":397,"./Script_Extensions/Lao.js":398,"./Script_Extensions/Latin.js":399,"./Script_Extensions/Lepcha.js":400,"./Script_Extensions/Limbu.js":401,"./Script_Extensions/Linear_A.js":402,"./Script_Extensions/Linear_B.js":403,"./Script_Extensions/Lisu.js":404,"./Script_Extensions/Lycian.js":405,"./Script_Extensions/Lydian.js":406,"./Script_Extensions/Mahajani.js":407,"./Script_Extensions/Makasar.js":408,"./Script_Extensions/Malayalam.js":409,"./Script_Extensions/Mandaic.js":410,"./Script_Extensions/Manichaean.js":411,"./Script_Extensions/Marchen.js":412,"./Script_Extensions/Masaram_Gondi.js":413,"./Script_Extensions/Medefaidrin.js":414,"./Script_Extensions/Meetei_Mayek.js":415,"./Script_Extensions/Mende_Kikakui.js":416,"./Script_Extensions/Meroitic_Cursive.js":417,"./Script_Extensions/Meroitic_Hieroglyphs.js":418,"./Script_Extensions/Miao.js":419,"./Script_Extensions/Modi.js":420,"./Script_Extensions/Mongolian.js":421,"./Script_Extensions/Mro.js":422,"./Script_Extensions/Multani.js":423,"./Script_Extensions/Myanmar.js":424,"./Script_Extensions/Nabataean.js":425,"./Script_Extensions/Nandinagari.js":426,"./Script_Extensions/New_Tai_Lue.js":427,"./Script_Extensions/Newa.js":428,"./Script_Extensions/Nko.js":429,"./Script_Extensions/Nushu.js":430,"./Script_Extensions/Nyiakeng_Puachue_Hmong.js":431,"./Script_Extensions/Ogham.js":432,"./Script_Extensions/Ol_Chiki.js":433,"./Script_Extensions/Old_Hungarian.js":434,"./Script_Extensions/Old_Italic.js":435,"./Script_Extensions/Old_North_Arabian.js":436,"./Script_Extensions/Old_Permic.js":437,"./Script_Extensions/Old_Persian.js":438,"./Script_Extensions/Old_Sogdian.js":439,"./Script_Extensions/Old_South_Arabian.js":440,"./Script_Extensions/Old_Turkic.js":441,"./Script_Extensions/Oriya.js":442,"./Script_Extensions/Osage.js":443,"./Script_Extensions/Osmanya.js":444,"./Script_Extensions/Pahawh_Hmong.js":445,"./Script_Extensions/Palmyrene.js":446,"./Script_Extensions/Pau_Cin_Hau.js":447,"./Script_Extensions/Phags_Pa.js":448,"./Script_Extensions/Phoenician.js":449,"./Script_Extensions/Psalter_Pahlavi.js":450,"./Script_Extensions/Rejang.js":451,"./Script_Extensions/Runic.js":452,"./Script_Extensions/Samaritan.js":453,"./Script_Extensions/Saurashtra.js":454,"./Script_Extensions/Sharada.js":455,"./Script_Extensions/Shavian.js":456,"./Script_Extensions/Siddham.js":457,"./Script_Extensions/SignWriting.js":458,"./Script_Extensions/Sinhala.js":459,"./Script_Extensions/Sogdian.js":460,"./Script_Extensions/Sora_Sompeng.js":461,"./Script_Extensions/Soyombo.js":462,"./Script_Extensions/Sundanese.js":463,"./Script_Extensions/Syloti_Nagri.js":464,"./Script_Extensions/Syriac.js":465,"./Script_Extensions/Tagalog.js":466,"./Script_Extensions/Tagbanwa.js":467,"./Script_Extensions/Tai_Le.js":468,"./Script_Extensions/Tai_Tham.js":469,"./Script_Extensions/Tai_Viet.js":470,"./Script_Extensions/Takri.js":471,"./Script_Extensions/Tamil.js":472,"./Script_Extensions/Tangut.js":473,"./Script_Extensions/Telugu.js":474,"./Script_Extensions/Thaana.js":475,"./Script_Extensions/Thai.js":476,"./Script_Extensions/Tibetan.js":477,"./Script_Extensions/Tifinagh.js":478,"./Script_Extensions/Tirhuta.js":479,"./Script_Extensions/Ugaritic.js":480,"./Script_Extensions/Vai.js":481,"./Script_Extensions/Wancho.js":482,"./Script_Extensions/Warang_Citi.js":483,"./Script_Extensions/Yezidi.js":484,"./Script_Extensions/Yi.js":485,"./Script_Extensions/Zanabazar_Square.js":486,"./index.js":487,"./unicode-version.js":488};function r(e){var t=i(e);return n(t)}function i(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=i,e.exports=r,r.id=83}},[[56,1,2]]]);
//# sourceMappingURL=main.f50fa19d.chunk.js.map