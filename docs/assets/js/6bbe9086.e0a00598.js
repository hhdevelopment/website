"use strict";(self.webpackChunksoftwarity=self.webpackChunksoftwarity||[]).push([[5421],{6959:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var t=r(5893),s=r(1151);const i={slug:"design",title:"Principes de conception",authors:"fachache",tags:[]},o=void 0,a={id:"pres/design",title:"Principes de conception",description:"ARCHWAY est construit sur des technologies \xe9prouv\xe9es.",source:"@site/versioned_docs/version-1.0.1/pres/design.md",sourceDirName:"pres",slug:"/pres/design",permalink:"/1.0.1/pres/design",draft:!1,unlisted:!1,editUrl:"https://github.com/softwarity/website/tree/main/versioned_docs/version-1.0.1/pres/design.md",tags:[],version:"1.0.1",frontMatter:{slug:"design",title:"Principes de conception",authors:"fachache",tags:[]},sidebar:"presSidebar",previous:{title:"Informations utilisateurs",permalink:"/1.0.1/pres/concepts/users-infos"}},d={},c=[{value:"<code>Back-end</code>",id:"back-end",level:2},{value:"<code>Front-end</code>",id:"front-end",level:2},{value:"<code>Database</code>",id:"database",level:2},{value:"Schemas",id:"schemas",level:2},{value:"Routes",id:"routes",level:3},{value:"Route Filters",id:"route-filters",level:3},{value:"Route Predicates",id:"route-predicates",level:3},{value:"User",id:"user",level:3},{value:"Push",id:"push",level:3},{value:"Application configuraiton",id:"application-configuraiton",level:3},{value:"Configurations",id:"configurations",level:3},{value:"Vault",id:"vault",level:3}];function l(e){const n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",mermaid:"mermaid",p:"p",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"ARCHWAY"})," est construit sur des technologies \xe9prouv\xe9es."]})}),"\n",(0,t.jsx)(n.h2,{id:"back-end",children:(0,t.jsx)(n.code,{children:"Back-end"})}),"\n",(0,t.jsxs)(n.p,{children:["La partie ",(0,t.jsx)(n.code,{children:"back-end"})," s'appuie sur l'\xe9cosysteme ",(0,t.jsx)(n.code,{children:"Spring"}),". Et plus particulierement ",(0,t.jsx)(n.code,{children:"Spring cloud gateway"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Spring Cloud Gateway"})," est une ",(0,t.jsx)(n.code,{children:"API gateway"})," dynamique pour microservices.\nIl est construit sur ",(0,t.jsx)(n.code,{children:"Spring Framework"})," et ",(0,t.jsx)(n.code,{children:"Spring Boot"}),", offrant une mani\xe8re facile de cr\xe9er le routage d'",(0,t.jsx)(n.code,{children:"APIs"}),".\n",(0,t.jsx)(n.code,{children:"Spring Cloud Gateway"})," est souvent utilis\xe9 dans les architectures bas\xe9es sur les microservices pour g\xe9rer efficacement les requ\xeates entre les diff\xe9rents services."]}),"\n",(0,t.jsx)(n.h2,{id:"front-end",children:(0,t.jsx)(n.code,{children:"Front-end"})}),"\n",(0,t.jsxs)(n.p,{children:["La partie ",(0,t.jsx)(n.code,{children:"front-end"}),", elle, s'appuie sur l'\xe9cosysteme ",(0,t.jsx)(n.code,{children:"Angular"}),".  ",(0,t.jsx)(n.code,{children:"Angular"})," et ",(0,t.jsx)(n.code,{children:"Material Angular"})," sont utiliser principalement dans l'interface utilisateur. Avec d'autres ",(0,t.jsx)(n.code,{children:"Framework"})," ou librairies comme ",(0,t.jsx)(n.code,{children:"Fontawesome"})," ou ",(0,t.jsx)(n.code,{children:"Echartjs"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Angular"})," est un framework de d\xe9veloppement front-end bas\xe9 sur TypeScript, d\xe9velopp\xe9 et maintenu par ",(0,t.jsx)(n.code,{children:"Google"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Angular Material"})," est une biblioth\xe8que de composants ",(0,t.jsx)(n.code,{children:"UI"})," pour ",(0,t.jsx)(n.code,{children:"Angular"}),", suivant les principes du ",(0,t.jsx)(n.code,{children:"Material Design"})," de ",(0,t.jsx)(n.code,{children:"Google"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"database",children:(0,t.jsx)(n.code,{children:"Database"})}),"\n",(0,t.jsxs)(n.p,{children:["Pour la base de donn\xe9 nous avons choisi ",(0,t.jsx)(n.code,{children:"MongoDB"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"MongoDB"})," est une base de donn\xe9es ",(0,t.jsx)(n.code,{children:"NoSQL"})," orient\xe9e documents, tr\xe8s populaire pour sa flexibilit\xe9 et ses performances."]}),"\n",(0,t.jsx)(n.h2,{id:"schemas",children:"Schemas"}),"\n",(0,t.jsx)(n.h3,{id:"routes",children:"Routes"}),"\n",(0,t.jsx)(n.mermaid,{value:'erDiagram\nArchRoute {\n    string _id PK\n    string name\n    string description\n    string locale\n    Security security\n    Predicates predicates\n    Filters filters\n    string uri\n    string[] uris\n    int order\n    boolean link\n    boolean enabled\n    string[] tags\n    boolean system\n    string createdBy "Auto, userId"\n    date createdAt "Auto"\n    string updatedBy "Auto, userId"\n    date updatedAt "Auto"\n}\nSecurity {\n    boolean authenticated\n    string[] roles FK\n    string[] usernames FK "userId"\n}\nArchRoute ||--|| Security : security\nArchRoute ||--|| Predicates : predicates\nArchRoute ||--|| Filters : filters'}),"\n",(0,t.jsx)(n.h3,{id:"route-filters",children:"Route Filters"}),"\n",(0,t.jsx)(n.mermaid,{value:'erDiagram\nFilters {\n    AddRequestHeader[] addRequestHeaders\n    AddRequestHeader[] addRequestHeadersIfNotPresent\n    AddRequestParameterFilter[] addRequestParameters\n    AddResponseHeaderFilter[] addResponseHeaders\n    LocalResponseCacheFilter localResponseCache \n    string prefixPath\n    RedirectToFilter redirectTo\n    RemoveJsonAttributesResponseBodyFilter removeJsonAttributesResponseBody\n    string[] removeRequestHeaders\n    string[] removeRequestParameters\n    string[] removeResponseHeaders\n    Long requestHeaderSize\n    RewritePathFilter rewritePath\n    string setPath\n    SetRequestHeaderFilter[] setRequestHeaders\n    SetResponseHeaderFilter[] setResponseHeaders\n    string setStatus\n    int stripPrefix\n    boolean classpathFile\n    boolean archway\n    ModifyBaseHref modifyBaseHref\n    SendAuthFilter sendAuth\n    boolean imagePlugin\n}\nFilters||--o{ AddRequestHeader : addRequestHeaders\nFilters ||--o{ AddRequestHeader : addRequestHeadersIfNotPresent\nFilters ||--o{ AddRequestParameterFilter : addRequestParameters\nFilters ||--o{ AddResponseHeaderFilter : addResponseHeaders\nFilters ||--|| LocalResponseCacheFilter : localResponseCache \nFilters ||--|| RedirectToFilter : redirectTo \nFilters ||--|| RemoveJsonAttributesResponseBodyFilter : removeJsonAttributesResponseBody\nFilters ||--|| RewritePathFilter : rewritePath\nFilters ||--o{ SetRequestHeaderFilter : setRequestHeaders\nFilters ||--o{ SetResponseHeaderFilter : setResponseHeaders\nFilters ||--|| ModifyBaseHref : modifyBaseHref\nFilters ||--|| SendAuthFilter : sendAuth\nSendAuthFilter {\n  string mode "FORM, JWT"\n  string username FK "userId"\n  string password\n}\nRemoveJsonAttributesResponseBodyFilter {\n    string[] attributeNames\n    boolean recursive\n}\nSetRequestHeaderFilter {\n    string name\n    string value\n}\nAddResponseHeaderFilter {\n    string name\n    string value\n}\nModifyBaseHref {\n  string html\n  string json\n  string javascript\n}\nRedirectToFilter {\n  string status\n  string url\n}\nSetResponseHeaderFilter {\n    string name\n    string value\n}\nAddRequestHeader {\n    string name\n    string value\n}\nRewritePathFilter {\n    string regexp\n    string replacement\n}\nAddRequestParameterFilter {\n    string name\n    string value\n}\nLocalResponseCacheFilter {\n    long seconds\n    long kilobytes\n}'}),"\n",(0,t.jsx)(n.h3,{id:"route-predicates",children:"Route Predicates"}),"\n",(0,t.jsx)(n.mermaid,{value:"erDiagram\nPredicates {\n    CookiePredicate[] cookies\n    HeaderPredicate[] headers\n    string[] hosts\n    string[] methods\n    PathPredicate path\n    QueryPredicate query\n    string[] remoteAddrs\n    WeightPredicate weight\n    string[] xForwardedRemoteAddr\n}\nPredicates ||--o{ CookiePredicate : cookies\nPredicates ||--o{ HeaderPredicate : headers\nPredicates ||--|| PathPredicate : path\nPredicates ||--|| QueryPredicate : query\nPredicates ||--|| WeightPredicate : weight\nQueryPredicate {\n    string param\n    string regexp\n}\nPathPredicate {\n    string[] paths\n    boolean matchTrailingSlash\n    string linkName\n    string swagger\n}\nWeightPredicate {\n    string group\n    int weight\n}\nCookiePredicate {\n    string name\n    string regexp\n}\nHeaderPredicate {\n    string name\n    string regexp\n}"}),"\n",(0,t.jsx)(n.h3,{id:"user",children:"User"}),"\n",(0,t.jsx)(n.mermaid,{value:'erDiagram\nArchUser {\n    string _id PK "Manual"\n    string type "DB or LDAP"\n    string password "Encoded"\n    string fullname\n    string email\n    boolean nonEditable\n    boolean nonGroupsEditable\n    boolean nonProfilesEditable\n    int failedLoginAttempts\n    date passwordUpdatedAt\n    int passwordDayExpiration\n    date temporaryPasswordExpiration\n    string temporaryPassword\n    string[] profiles FK\n    string[] groups FK\n    string locale\n    ArchBusinessAccess businessAccess\n    string sessionTTL\n    string createdBy "Auto, userId"\n    date createdAt "Auto"\n    string updatedBy "Auto, userId"\n    date updatedAt "Auto"\n}\nArchUser ||--|| ArchBusinessAccess : businessAccess\nArchUser }o--o{ ArchProfile : profiles\nArchUser }o--o{ ArchGroup : groups\nArchProfile }o--o{ ArchRole : roles\nArchProfile {\n    string _id PK "Auto"\n    string name\n    string description\n    boolean nonEditable\n    string[] roles FK\n    string createdBy "Auto, userId"\n    date createdAt "Auto"\n    string updatedBy "Auto, userId"\n    date updatedAt "Auto"\n}\nArchGroup {\n    string _id PK "Auto"\n    string name\n    string createdBy "Auto, userId"\n    date createdAt "Auto"\n    string updatedBy "Auto, userId"\n    date updatedAt "Auto"\n}\nArchRole {\n    string _id PK "Auto"\n    string description\n    string[] tags\n    boolean system\n    string createdBy "Auto, userId"\n    date createdAt "Auto"\n    string updatedBy "Auto, userId"\n    date updatedAt "Auto"\n}\nArchBusinessAccess {\n    string timeFrom\n    string timeTo\n    string timezone\n    int[] days\n    boolean enabled\n    string dateFrom\n    string dateTo\n    boolean inherited\n}\nArchUserPasswordHistory ||--o{ ArchUser : userId\nArchConnection ||--o{ ArchUser : username\nArchTOTP ||--|| ArchUser : _id\nArchUserPasswordHistory {\n    string _id PK "Auto"\n    string userId FK "userId"\n    string password "Encoded" \n    date date "Auto"\n}\nArchTOTP {\n    string _id PK,FK "Manual, userId"\n    string secretKey\n    int validationCode\n    int[] scratchCodes\n    boolean enabled\n    string[] allowedBrowsers\n    string createdBy "Auto"\n    date createdAt "Auto, userId"\n    string updatedBy "Auto"\n    date updatedAt "Auto, userId"\n}\nArchConnection {\n  string _id PK "Auto"\n  string username FK\n  string client\n  string authType\n  string status\n  string message\n  date createdAt "Auto, userId"\n}'}),"\n",(0,t.jsx)(n.h3,{id:"push",children:"Push"}),"\n",(0,t.jsx)(n.mermaid,{value:"erDiagram\nArchSubscription {\n  string _id PK\n  string endpoint\n  Keys keys\n}\nKeys {\n  string p256dh\n  string auth\n}\nArchSubscription ||--|| Keys : keys"}),"\n",(0,t.jsx)(n.mermaid,{value:'erDiagram\nArchPasswordPolicy {\n    int historical     "Number of previous passwords to remember."\n    int maxLoginAttempts "Maximum number of login attempts before locking the account."\n    int minLength      "Minimum password length."\n    int minLowercase   "Minimum number of lowercase letters."\n    int minUppercase   "Minimum number of uppercase letters."\n    int minDigits      "Minimum number of digits."\n    int minSpecial     "Minimum number of special characters."\n}\nArchBusinessAccessPolicy {\n    string timeFrom  "Start time for business access."\n    string timeTo    "End time for business access."\n    string timezone\n    int[] days\n}\nArchPolicies {\n    ArchBusinessAccessPolicy businessAccessPolicy\n    ArchPasswordPolicy passwordPolicy\n    string sessionTTL\n}\nArchPolicies ||--|| ArchBusinessAccessPolicy : businessAccessPolicy\nArchPolicies ||--|| ArchPasswordPolicy : passwordPolicy'}),"\n",(0,t.jsx)(n.h3,{id:"application-configuraiton",children:"Application configuraiton"}),"\n",(0,t.jsx)(n.mermaid,{value:"erDiagram\nArchLocale {\n    string value PK\n    string label\n    boolean enabled\n    boolean fallback\n}"}),"\n",(0,t.jsx)(n.h3,{id:"configurations",children:"Configurations"}),"\n",(0,t.jsx)(n.mermaid,{value:"erDiagram\nArchConfiguration {\n  string logoBackgroundColor\n  string logoBackgroundCustomId\n  string applicationName\n  boolean pushEnabled\n  string host\n  boolean swaggerUI\n  byte[] jwtPrivateKey\n  byte[] jwtPublicKey\n  string jwtAlgorithm\n}\nArchMailConfiguration {\n    string host\n    int port\n    string username\n    string password\n    string protocol\n    boolean auth\n    boolean starttls\n    boolean starttlsRequired\n    boolean enabled\n    string validationDelay\n}\nArchLdapConfiguration {\n    boolean enabled\n    string uri\n    string bindDN\n    string baseDN\n    boolean zz\n    string filter\n    string cert\n    LdapAutorisation autorisation\n}\nArchLdapConfiguration ||--|| LdapAutorisation : autorisation\nLdapAutorisation {\n    boolean groupFetching\n    string groupPrefix\n    boolean profileFetching\n    string profilePrefix\n}\nArchPushConfiguration {\n  string publicKey\n  string privateKey\n  string subject\n}\nArchPreferences {\n    string locale\n    boolean utcTimeZone\n}"}),"\n",(0,t.jsx)(n.h3,{id:"vault",children:"Vault"}),"\n",(0,t.jsx)(n.mermaid,{value:"erDiagram\n\nArchKey {\n  byte[] key\n  string createdBy\n  date createdAt\n  string updatedBy\n  date updatedAt\n}\n\nArchVaultItem {\n  string _id PK\n  string value\n  string description\n  boolean enabled\n  date expiresOn\n  boolean encrypted\n  string updatedBy \n  date updatedAt\n}"})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>a,a:()=>o});var t=r(7294);const s={},i=t.createContext(s);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);