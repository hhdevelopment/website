"use strict";(self.webpackChunksoftwarity=self.webpackChunksoftwarity||[]).push([[2047],{3959:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var i=s(5893),t=s(1151);const r={slug:"https",title:"HTTPS - HTTP/2",authors:"fachache",tags:[]},o=void 0,c={id:"doc/conf/https",title:"HTTPS - HTTP/2",description:"In this section, we will see how to configure ARCHWAY so that the server is accessible via HTTPS and to enable HTTP/2.",source:"@site/docs/doc/conf/https.md",sourceDirName:"doc/conf",slug:"/doc/conf/https",permalink:"/doc/conf/https",draft:!1,unlisted:!1,editUrl:"https://github.com/softwarity/website/tree/main/docs/doc/conf/https.md",tags:[],version:"current",frontMatter:{slug:"https",title:"HTTPS - HTTP/2",authors:"fachache",tags:[]},sidebar:"docuSidebar",previous:{title:"Getting Started",permalink:"/doc/start"},next:{title:"Clusterization",permalink:"/doc/conf/custerization"}},l={},a=[{value:"Self-Signed Certificates",id:"self-signed-certificates",level:2},{value:"Certificate Authorities",id:"certificate-authorities",level:3},{value:"Creation of the <code>.p12</code>",id:"creation-of-the-p12",level:3},{value:"Provided Certificates",id:"provided-certificates",level:2},{value:"Displaying Information",id:"displaying-information",level:3},{value:"Using the <code>.p12</code>",id:"using-the-p12",level:2},{value:"Explanations",id:"explanations",level:3},{value:"Starting the Project",id:"starting-the-project",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["In this section, we will see how to configure ",(0,i.jsx)(n.code,{children:"ARCHWAY"})," so that the server is accessible via ",(0,i.jsx)(n.code,{children:"HTTPS"})," and to enable ",(0,i.jsx)(n.code,{children:"HTTP/2"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"ARCHWAY"})," uses a ",(0,i.jsx)(n.code,{children:".p12"})," file to import the necessary certificates and keys."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["A ",(0,i.jsx)(n.code,{children:".p12"})," file is a binary file format used to store the server certificate, the entire certificate chain, and the private key in a single encrypted file. It is also known as a PKCS#12 file, which is a standard for storing private keys and certificates."]})}),"\n",(0,i.jsx)(n.h2,{id:"self-signed-certificates",children:"Self-Signed Certificates"}),"\n",(0,i.jsxs)(n.p,{children:["We will start with a self-generated ",(0,i.jsx)(n.code,{children:".p12"})," file for ",(0,i.jsx)(n.code,{children:"localhost"}),".\nThis can be used locally on the developer's workstation, for example."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["The procedure is described for a ",(0,i.jsx)(n.code,{children:"linux"})," ",(0,i.jsx)(n.code,{children:"debian"})," distribution."]})}),"\n",(0,i.jsx)(n.h3,{id:"certificate-authorities",children:"Certificate Authorities"}),"\n",(0,i.jsxs)(n.p,{children:["We will generate a new local ",(0,i.jsx)(n.code,{children:"CA"})," that will issue and sign our ",(0,i.jsx)(n.code,{children:".p12"})," file."]}),"\n",(0,i.jsx)(n.p,{children:"Updating and installing tools:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ sudo update-ca-certificates\n$ sudo apt install libnss3-tools mkcert\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Generating the local ",(0,i.jsx)(n.code,{children:"CA"}),":"]}),"\n",(0,i.jsx)(n.p,{children:"The following command will create and install a CA locally in your various browsers on your workstation."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ sudo mkcert -install\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"The local CA is now installed in the system trust store! \ud83d\udc4d\nThe local CA is now installed in the Firefox and/or Chrome/Chromium trust store (requires browser restart)! \ud83e\udd8a\nThe local CA is now installed in Java's trust store! \ud83d\udc4d\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"creation-of-the-p12",children:["Creation of the ",(0,i.jsx)(n.code,{children:".p12"})]}),"\n",(0,i.jsxs)(n.p,{children:["We will create a store containing the certificates and key for ",(0,i.jsx)(n.code,{children:"localhost"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$ mkcert -p12-file server-keystore.p12 -pkcs12 localhost\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'Created a new certificate valid for the following names \ud83d\udcdc\n - "localhost"\n\nThe PKCS#12 bundle is at "server-keystore.p12" \u2705\n\nThe legacy PKCS#12 encryption password is the often hardcoded default "changeit" \u2139\ufe0f\n\nIt will expire on 17 April 2026 \ud83d\uddd3\n'})}),"\n",(0,i.jsx)(n.h2,{id:"provided-certificates",children:"Provided Certificates"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["If you have a ",(0,i.jsx)(n.code,{children:".p12"})," file for your domain, skip to the next section."]})}),"\n",(0,i.jsxs)(n.p,{children:["If your registrar provides you with a private key and an SSL certificate for your domain ",(0,i.jsx)(n.code,{children:"mydomain.com"}),", you can generate a ",(0,i.jsx)(n.code,{children:".p12"})," store."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# mydomain.com_private_key.key\n# mydomain.com_ssl_certificate.cer\n"})}),"\n",(0,i.jsxs)(n.p,{children:["From these files, generate the ",(0,i.jsx)(n.code,{children:"server-keystore.p12"})," file."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"openssl pkcs12 -export -out server-keystore.p12 -inkey mydomain.com_private_key.key -in mydomain.com_ssl_certificate.cer\n# create password\n"})}),"\n",(0,i.jsx)(n.h3,{id:"displaying-information",children:"Displaying Information"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"keytool -list -keystore server-keystore.p12 -storetype PKCS12 -v\n"})}),"\n",(0,i.jsxs)(n.h2,{id:"using-the-p12",children:["Using the ",(0,i.jsx)(n.code,{children:".p12"})]}),"\n",(0,i.jsxs)(n.p,{children:["To add the certificate to ",(0,i.jsx)(n.code,{children:"ARCHWAY"})," and thus enable ",(0,i.jsx)(n.code,{children:"HTTPS"})," and ",(0,i.jsx)(n.code,{children:"HTTP/2"}),", we will modify the ",(0,i.jsx)(n.code,{children:"docker-compose.yml"})," used in the tutorial to mount the ",(0,i.jsx)(n.code,{children:".p12"})," store in the ",(0,i.jsx)(n.code,{children:"archway"})," image."]}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:(0,i.jsx)(n.code,{children:"docker-compose.yml"})}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yml",metastring:'title="docker-compose.yml" showLineNumbers',children:"version: '3.8'\nservices:\n  archway:\n    image: ghcr.io/softwarity/archway-ce:latest\n    ports:\n      - 443:8443 # HTTPS\n    volumes:\n      - ./server-keystore.p12:/server-keystore.p12:ro\n    environment:\n      SERVER_PORT: 8443\n      SSL: \"true\"\n      SSL_KEY_STORE_TYPE: PKCS12\n      SSL_KEY_STORE: server-keystore.p12\n      SSL_KEY_STORE_PASSWORD: changeit\n      SSL_KEY_ALIAS: 1\n      MONGODB_HOST: mongodb \n      MONGODB_DB_NAME: archway\n      MONGODB_USER: admin\n      MONGODB_PWD: changeit\n\n  mongodb:\n    image: mongo # official image  \n    volumes:\n      - mongodb_data:/data/db\n    environment:\n      MONGO_INITDB_DATABASE: archway\n      MONGO_INITDB_ROOT_USERNAME: admin\n      MONGO_INITDB_ROOT_PASSWORD: changeit\nvolumes:\n  mongodb_data:\n\n"})})]}),"\n",(0,i.jsx)(n.h3,{id:"explanations",children:"Explanations"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yml",children:"./server-keystore.p12:/server-keystore.p12:ro\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The line ",(0,i.jsx)(n.code,{children:"./server-keystore.p12:/server-keystore.p12:ro"})," specifies that we will mount the ",(0,i.jsx)(n.code,{children:".p12"})," store at the root of the container. It is specified as read-only ",(0,i.jsx)(n.code,{children:"ro"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["In our case, the ",(0,i.jsx)(n.code,{children:"server-keystore.p12"})," file and the ",(0,i.jsx)(n.code,{children:"docker-compose.yml"})," file must be at the same level."]}),"\n",(0,i.jsx)(n.p,{children:"Adapt the password as needed, of course."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yml",children:"- 443:8443 # HTTPS\n"})}),"\n",(0,i.jsxs)(n.p,{children:["This exposes the container's ",(0,i.jsx)(n.code,{children:"8443"})," port on the local ",(0,i.jsx)(n.code,{children:"443"})," port."]}),"\n",(0,i.jsx)(n.p,{children:"If port 443 is not free, you can use another one."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yml",children:'SERVER_PORT: 8443\nSSL: "true"\nSSL_KEY_STORE_TYPE: PKCS12\nSSL_KEY_STORE: server-keystore.p12\nSSL_KEY_STORE_PASSWORD: changeit\nSSL_KEY_ALIAS: 1\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"SERVER_PORT"})," defines the internal ",(0,i.jsx)(n.code,{children:"HTTPS"})," listening port of the server."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"SSL"})," activates ",(0,i.jsx)(n.code,{children:"SSL"}),", ",(0,i.jsx)(n.code,{children:"HTTPS"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"SSL_KEY_STORE_TYPE"})," Type of the store, normally ",(0,i.jsx)(n.code,{children:"PKCS12"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"SSL_KEY_STORE"})," The store in ",(0,i.jsx)(n.code,{children:".p12"})," format that we mounted."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"SSL_KEY_STORE_PASSWORD"})," The private key password."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"SSL_KEY_ALIAS"})," The certificate alias in the store."]}),"\n"]}),"\n",(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsx)(n.p,{children:"To know the list of aliases in the store use the command:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"keytool -list -keystore server-keystore.p12 -storetype PKCS12 -v\n"})})]}),"\n",(0,i.jsx)(n.h3,{id:"starting-the-project",children:"Starting the Project"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"docker compose -f docker-compose.yml pull\ndocker compose -f docker-compose.yml up -d\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Connection: ",(0,i.jsx)(n.a,{href:"https://localhost:443/login",children:"https://localhost:443/login"})]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["The previous link uses ",(0,i.jsx)(n.code,{children:"localhost"}),", you should adapt this with the ",(0,i.jsx)(n.code,{children:"DNS"})," linked to the certificate used."]})})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>o});var i=s(7294);const t={},r=i.createContext(t);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);