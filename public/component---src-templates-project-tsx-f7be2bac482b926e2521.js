(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"6o60":function(e,t,a){"use strict";var n=a("pICx"),i=a("q1tI"),r=a.n(i),o=a("qhky"),c=(a("pJf4"),function(e){var t=e.url,a=e.title,n=e.desc,i=e.image,c=e.locale,m=e.name,l=e.type;return r.a.createElement(o.a,null,m&&r.a.createElement("meta",{property:"og:site_name",content:m}),r.a.createElement("meta",{property:"og:locale",content:c}),r.a.createElement("meta",{property:"og:url",content:t}),r.a.createElement("meta",{property:"og:type",content:l}),r.a.createElement("meta",{property:"og:title",content:a}),r.a.createElement("meta",{property:"og:description",content:n}),r.a.createElement("meta",{property:"og:image",content:i}),r.a.createElement("meta",{property:"og:image:alt",content:n}))});c.defaultProps={name:"",type:"website"};var m=c,l=function(e){var t=e.username,a=e.title,n=e.desc,i=e.image;return r.a.createElement(o.a,null,t&&r.a.createElement("meta",{name:"twitter:creator",content:t}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.a.createElement("meta",{name:"twitter:title",content:a}),r.a.createElement("meta",{name:"twitter:description",content:n}),r.a.createElement("meta",{name:"twitter:image",content:i}),r.a.createElement("meta",{name:"twitter:image:alt",content:n}))},p=l;l.defaultProps={username:""};var s=function(e){var t=e.title,a=e.desc,i=e.banner,c=e.pathname,l=e.node,s=e.individual,d=n.data.site,u=d.buildTime,g=d.siteMetadata,y=g.siteUrl,h=g.defaultTitle,f=g.defaultDescription,b=g.defaultBanner,E=g.headline,w=g.siteLanguage,j=g.ogLanguage,O=g.author,I=g.twitter,x=g.facebook,v={title:t||h,description:a||f,image:""+y+(i||b),url:""+y+(c||"")},P={"@context":"http://schema.org","@type":"WebPage",url:y,headline:E,inLanguage:w,mainEntityOfPage:y,description:f,name:h,author:{"@type":"Person",name:O},copyrightHolder:{"@type":"Person",name:O},copyrightYear:"2019",creator:{"@type":"Person",name:O},publisher:{"@type":"Person",name:O},datePublished:"2019-03-10T10:30:00+01:00",dateModified:u,image:{"@type":"ImageObject",url:""+y+b}},_=[{"@type":"ListItem",item:{"@id":y,name:"Homepage"},position:1},{"@type":"ListItem",item:{"@id":y+"/about",name:"About"},position:2},{"@type":"ListItem",item:{"@id":y+"/projects",name:"About"},position:3},{"@type":"ListItem",item:{"@id":y+"/instagram",name:"About"},position:4}],k=null;s&&(k={"@context":"http://schema.org","@type":"Article",author:{"@type":"Person",name:O},copyrightHolder:{"@type":"Person",name:O},copyrightYear:"2019",creator:{"@type":"Person",name:O},publisher:{"@type":"Organization",name:O,logo:{"@type":"ImageObject",url:""+y+b}},datePublished:l?l.birthTime:"2019-03-10T10:30:00+01:00",dateModified:l?l.modifiedTime:"2019-03-10T10:30:00+01:00",description:v.description,headline:v.title,inLanguage:"en",url:v.url,name:v.title,image:{"@type":"ImageObject",url:v.image},mainEntityOfPage:v.url},_.push({"@type":"ListItem",item:{"@id":v.url,name:v.title},position:5}));var L={"@context":"http://schema.org","@type":"BreadcrumbList",description:"Breadcrumbs list",name:"Breadcrumbs",itemListElement:_};return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,{title:v.title},r.a.createElement("html",{lang:w}),r.a.createElement("meta",{name:"description",content:v.description}),r.a.createElement("meta",{name:"image",content:v.image}),r.a.createElement("meta",{name:"gatsby-starter",content:""}),!s&&r.a.createElement("script",{type:"application/ld+json"},JSON.stringify(P)),s&&r.a.createElement("script",{type:"application/ld+json"},JSON.stringify(k)),r.a.createElement("script",{type:"application/ld+json"},JSON.stringify(L))),r.a.createElement(m,{desc:v.description,image:v.image,title:v.title,type:s?"article":"website",url:v.url,locale:j,name:x}),r.a.createElement(p,{title:v.title,image:v.image,desc:v.description,username:I}))};t.a=s;s.defaultProps={title:"",desc:"",banner:"",pathname:"",node:{modifiedTime:"",birthTime:""},individual:!1}},"8dg2":function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return b}));a("pJf4");var n=a("q1tI"),i=a.n(n),r=a("9eSz"),o=a.n(r),c=a("ufqH"),m=a("vOnD"),l=a("wEEd"),p=a("9Dj+"),s=a("sKiF"),d=a("6o60"),u=Object(m.d)(s.a).withConfig({displayName:"project__PBox",componentId:"akd9pz-0"})(["max-width:1400px;margin:0 auto;"]),g=Object(m.d)(s.b).withConfig({displayName:"project__Content",componentId:"akd9pz-1"})(["background-color:",";.gatsby-image-wrapper:not(:last-child){margin-bottom:",";@media (max-width:","){margin-bottom:",";}}"],(function(e){return Object(c.b)(.9,e.bg)}),(function(e){return e.theme.space[10]}),(function(e){return e.theme.breakpoints[3]}),(function(e){return e.theme.space[8]})),y=Object(m.d)(s.a).withConfig({displayName:"project__Category",componentId:"akd9pz-2"})(["letter-spacing:0.05em;font-size:",";text-transform:uppercase;"],(function(e){return e.theme.fontSizes[1]})),h=Object(m.d)(l.a.div).withConfig({displayName:"project__Description",componentId:"akd9pz-3"})(["max-width:960px;letter-spacing:-0.003em;--baseline-multiplier:0.179;--x-height-multiplier:0.35;line-height:1.58;"]),f=Object(m.d)(s.c).withConfig({displayName:"project__PButton",componentId:"akd9pz-4"})(["background:",";color:",";"],(function(e){return"white"===e.color?"black":e.color}),(function(e){return Object(c.a)("white"===e.color?"black":e.color)}));t.default=function(e){var t=e.data,a=t.project,n=t.images,r=Object(l.c)({config:l.b.slow,from:{opacity:0,transform:"translate3d(0, -30px, 0)"},to:{opacity:1,transform:"translate3d(0, 0, 0)"}}),c=Object(l.c)({config:l.b.slow,delay:300,from:{opacity:0},to:{opacity:1}}),m=Object(l.c)({config:l.b.slow,delay:600,from:{opacity:0},to:{opacity:1}}),s=Object(l.c)({config:l.b.slow,delay:800,from:{opacity:0},to:{opacity:1}});return i.a.createElement(p.a,{color:a.color},i.a.createElement(d.a,{pathname:a.slug,title:a.title_detail+" | Jodie",desc:a.desc,node:a.parent,banner:a.cover.childImageSharp.resize.src,individual:!0}),i.a.createElement(u,{py:10,px:[6,6,8,10]},i.a.createElement(y,{style:r},a.category),i.a.createElement(l.a.h1,{style:c},a.title_detail),i.a.createElement(h,{style:m},i.a.createElement("div",{dangerouslySetInnerHTML:{__html:a.desc}}))),i.a.createElement(g,{bg:a.color,py:10},i.a.createElement(u,{style:s,px:[6,6,8,10]},n.nodes.map((function(e){return i.a.createElement(o.a,{alt:e.name,key:e.childImageSharp.fluid.src,fluid:e.childImageSharp.fluid})})))),i.a.createElement(u,{style:{textAlign:"center"},py:10,px:[6,6,8,10]},i.a.createElement("h2",null,"Want to start your own project?"),i.a.createElement(f,{color:a.color,py:4,px:8},"Contact Us")))};var b="3490628510"}}]);
//# sourceMappingURL=component---src-templates-project-tsx-f7be2bac482b926e2521.js.map