(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ua="184",ts={ROTATE:0,DOLLY:1,PAN:2},Ki={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Zh=0,pl=1,$h=2,vr=1,Kh=2,Ss=3,_i=0,on=1,We=2,$n=0,es=1,ml=2,gl=3,_l=4,Jh=5,Ti=100,Qh=101,tu=102,eu=103,nu=104,iu=200,su=201,ru=202,ou=203,Uo=204,Fo=205,au=206,lu=207,cu=208,hu=209,uu=210,du=211,fu=212,pu=213,mu=214,Oo=0,Bo=1,zo=2,ss=3,ko=4,Vo=5,Go=6,Ho=7,Gc=0,gu=1,_u=2,Nn=0,Hc=1,Wc=2,Xc=3,Yc=4,qc=5,jc=6,Zc=7,$c=300,Di=301,rs=302,jr=303,Zr=304,kr=306,Wo=1e3,qn=1001,Xo=1002,Ye=1003,xu=1004,Gs=1005,Ke=1006,$r=1007,Ri=1008,hn=1009,Kc=1010,Jc=1011,Is=1012,Fa=1013,Fn=1014,In=1015,Qn=1016,Oa=1017,Ba=1018,Ds=1020,Qc=35902,th=35899,eh=1021,nh=1022,yn=1023,ti=1026,Ci=1027,ih=1028,za=1029,Li=1030,ka=1031,Va=1033,yr=33776,Mr=33777,Sr=33778,Er=33779,Yo=35840,qo=35841,jo=35842,Zo=35843,$o=36196,Ko=37492,Jo=37496,Qo=37488,ta=37489,Ar=37490,ea=37491,na=37808,ia=37809,sa=37810,ra=37811,oa=37812,aa=37813,la=37814,ca=37815,ha=37816,ua=37817,da=37818,fa=37819,pa=37820,ma=37821,ga=36492,_a=36494,xa=36495,va=36283,ya=36284,Pr=36285,Ma=36286,vu=3200,Sa=0,yu=1,pi="",fn="srgb",Rr="srgb-linear",Cr="linear",he="srgb",Oi=7680,xl=519,Mu=512,Su=513,Eu=514,Ga=515,bu=516,wu=517,Ha=518,Tu=519,Ea=35044,vl="300 es",Dn=2e3,Ls=2001;function Au(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}const Pu={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function Hs(i,t){return new Pu[i](t)}function Ir(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ru(){const i=Ir("canvas");return i.style.display="block",i}const yl={};function Dr(...i){const t="THREE."+i.shift();console.log(t,...i)}function sh(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function kt(...i){i=sh(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function se(...i){i=sh(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function ba(...i){const t=i.join(" ");t in yl||(yl[t]=!0,kt(...i))}function Cu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const Iu={[Oo]:Bo,[zo]:Go,[ko]:Ho,[ss]:Vo,[Bo]:Oo,[Go]:zo,[Ho]:ko,[Vo]:ss};class xi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],br=Math.PI/180,wa=180/Math.PI;function Kn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(je[i&255]+je[i>>8&255]+je[i>>16&255]+je[i>>24&255]+"-"+je[t&255]+je[t>>8&255]+"-"+je[t>>16&15|64]+je[t>>24&255]+"-"+je[e&63|128]+je[e>>8&255]+"-"+je[e>>16&255]+je[e>>24&255]+je[n&255]+je[n>>8&255]+je[n>>16&255]+je[n>>24&255]).toLowerCase()}function te(i,t,e){return Math.max(t,Math.min(e,i))}function Du(i,t){return(i%t+t)%t}function Kr(i,t,e){return(1-e)*i+e*t}function Rn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function fe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Lu={DEG2RAD:br},el=class el{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};el.prototype.isVector2=!0;let ct=el;class He{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],f=n[s+3],d=r[o+0],h=r[o+1],g=r[o+2],x=r[o+3];if(f!==x||l!==d||c!==h||u!==g){let p=l*d+c*h+u*g+f*x;p<0&&(d=-d,h=-h,g=-g,x=-x,p=-p);let m=1-a;if(p<.9995){const _=Math.acos(p),v=Math.sin(_);m=Math.sin(m*_)/v,a=Math.sin(a*_)/v,l=l*m+d*a,c=c*m+h*a,u=u*m+g*a,f=f*m+x*a}else{l=l*m+d*a,c=c*m+h*a,u=u*m+g*a,f=f*m+x*a;const _=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=_,c*=_,u*=_,f*=_}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],f=r[o],d=r[o+1],h=r[o+2],g=r[o+3];return t[e]=a*g+u*f+l*h-c*d,t[e+1]=l*g+u*d+c*f-a*h,t[e+2]=c*g+u*h+a*d-l*f,t[e+3]=u*g-a*f-l*d-c*h,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),f=a(r/2),d=l(n/2),h=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*u*f+c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f-d*h*g;break;case"YXZ":this._x=d*u*f+c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f+d*h*g;break;case"ZXY":this._x=d*u*f-c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f-d*h*g;break;case"ZYX":this._x=d*u*f-c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f+d*h*g;break;case"YZX":this._x=d*u*f+c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f-d*h*g;break;case"XZY":this._x=d*u*f-c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f+d*h*g;break;default:kt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],f=e[10],d=n+a+f;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(u-l)*h,this._y=(r-c)*h,this._z=(o-s)*h}else if(n>a&&n>f){const h=2*Math.sqrt(1+n-a-f);this._w=(u-l)/h,this._x=.25*h,this._y=(s+o)/h,this._z=(r+c)/h}else if(a>f){const h=2*Math.sqrt(1+a-n-f);this._w=(r-c)/h,this._x=(s+o)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+f-n-a);this._w=(o-s)/h,this._x=(r+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(te(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const nl=class nl{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ml.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ml.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),u=2*(a*e-r*s),f=2*(r*n-o*e);return this.x=e+l*c+o*f-a*u,this.y=n+l*u+a*c-r*f,this.z=s+l*f+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this.z=te(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this.z=te(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Jr.copy(this).projectOnVector(t),this.sub(Jr)}reflect(t){return this.sub(Jr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};nl.prototype.isVector3=!0;let I=nl;const Jr=new I,Ml=new He,il=class il{constructor(t,e,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],f=n[7],d=n[2],h=n[5],g=n[8],x=s[0],p=s[3],m=s[6],_=s[1],v=s[4],S=s[7],R=s[2],E=s[5],C=s[8];return r[0]=o*x+a*_+l*R,r[3]=o*p+a*v+l*E,r[6]=o*m+a*S+l*C,r[1]=c*x+u*_+f*R,r[4]=c*p+u*v+f*E,r[7]=c*m+u*S+f*C,r[2]=d*x+h*_+g*R,r[5]=d*p+h*v+g*E,r[8]=d*m+h*S+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],f=u*o-a*c,d=a*l-u*r,h=c*r-o*l,g=e*f+n*d+s*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=f*x,t[1]=(s*c-u*n)*x,t[2]=(a*n-s*o)*x,t[3]=d*x,t[4]=(u*e-s*l)*x,t[5]=(s*r-a*e)*x,t[6]=h*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Qr.makeScale(t,e)),this}rotate(t){return this.premultiply(Qr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Qr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};il.prototype.isMatrix3=!0;let qt=il;const Qr=new qt,Sl=new qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),El=new qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Nu(){const i={enabled:!0,workingColorSpace:Rr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===he&&(s.r=Jn(s.r),s.g=Jn(s.g),s.b=Jn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===he&&(s.r=ns(s.r),s.g=ns(s.g),s.b=ns(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===pi?Cr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ba("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ba("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Rr]:{primaries:t,whitePoint:n,transfer:Cr,toXYZ:Sl,fromXYZ:El,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:fn},outputColorSpaceConfig:{drawingBufferColorSpace:fn}},[fn]:{primaries:t,whitePoint:n,transfer:he,toXYZ:Sl,fromXYZ:El,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:fn}}}),i}const re=Nu();function Jn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ns(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Bi;class Uu{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Bi===void 0&&(Bi=Ir("canvas")),Bi.width=t.width,Bi.height=t.height;const s=Bi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Bi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ir("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Jn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Jn(e[n]/255)*255):e[n]=Jn(e[n]);return{data:e,width:t.width,height:t.height}}else return kt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Fu=0;class Wa{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Fu++}),this.uuid=Kn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(to(s[o].image)):r.push(to(s[o]))}else r=to(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function to(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Uu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(kt("Texture: Unable to serialize Texture."),{})}let Ou=0;const eo=new I;class tn extends xi{constructor(t=tn.DEFAULT_IMAGE,e=tn.DEFAULT_MAPPING,n=qn,s=qn,r=Ke,o=Ri,a=yn,l=hn,c=tn.DEFAULT_ANISOTROPY,u=pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ou++}),this.uuid=Kn(),this.name="",this.source=new Wa(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(eo).x}get height(){return this.source.getSize(eo).y}get depth(){return this.source.getSize(eo).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){kt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){kt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==$c)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Wo:t.x=t.x-Math.floor(t.x);break;case qn:t.x=t.x<0?0:1;break;case Xo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Wo:t.y=t.y-Math.floor(t.y);break;case qn:t.y=t.y<0?0:1;break;case Xo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=$c;tn.DEFAULT_ANISOTROPY=1;const sl=class sl{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],u=l[4],f=l[8],d=l[1],h=l[5],g=l[9],x=l[2],p=l[6],m=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+x)<.1&&Math.abs(g+p)<.1&&Math.abs(c+h+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(c+1)/2,S=(h+1)/2,R=(m+1)/2,E=(u+d)/4,C=(f+x)/4,y=(g+p)/4;return v>S&&v>R?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=E/n,r=C/n):S>R?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=E/s,r=y/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=C/r,s=y/r),this.set(n,s,r,e),this}let _=Math.sqrt((p-g)*(p-g)+(f-x)*(f-x)+(d-u)*(d-u));return Math.abs(_)<.001&&(_=1),this.x=(p-g)/_,this.y=(f-x)/_,this.z=(d-u)/_,this.w=Math.acos((c+h+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this.z=te(this.z,t.z,e.z),this.w=te(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this.z=te(this.z,t,e),this.w=te(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};sl.prototype.isVector4=!0;let we=sl;class Bu extends xi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ke,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new we(0,0,t,e),this.scissorTest=!1,this.viewport=new we(0,0,t,e),this.textures=[];const s={width:t,height:e,depth:n.depth},r=new tn(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:Ke,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Wa(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Un extends Bu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class rh extends tn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class zu extends tn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const zr=class zr{constructor(t,e,n,s,r,o,a,l,c,u,f,d,h,g,x,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,u,f,d,h,g,x,p)}set(t,e,n,s,r,o,a,l,c,u,f,d,h,g,x,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=f,m[14]=d,m[3]=h,m[7]=g,m[11]=x,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new zr().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,n=t.elements,s=1/zi.setFromMatrixColumn(t,0).length(),r=1/zi.setFromMatrixColumn(t,1).length(),o=1/zi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const d=o*u,h=o*f,g=a*u,x=a*f;e[0]=l*u,e[4]=-l*f,e[8]=c,e[1]=h+g*c,e[5]=d-x*c,e[9]=-a*l,e[2]=x-d*c,e[6]=g+h*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*u,h=l*f,g=c*u,x=c*f;e[0]=d+x*a,e[4]=g*a-h,e[8]=o*c,e[1]=o*f,e[5]=o*u,e[9]=-a,e[2]=h*a-g,e[6]=x+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*u,h=l*f,g=c*u,x=c*f;e[0]=d-x*a,e[4]=-o*f,e[8]=g+h*a,e[1]=h+g*a,e[5]=o*u,e[9]=x-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*u,h=o*f,g=a*u,x=a*f;e[0]=l*u,e[4]=g*c-h,e[8]=d*c+x,e[1]=l*f,e[5]=x*c+d,e[9]=h*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,h=o*c,g=a*l,x=a*c;e[0]=l*u,e[4]=x-d*f,e[8]=g*f+h,e[1]=f,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=h*f+g,e[10]=d-x*f}else if(t.order==="XZY"){const d=o*l,h=o*c,g=a*l,x=a*c;e[0]=l*u,e[4]=-f,e[8]=c*u,e[1]=d*f+x,e[5]=o*u,e[9]=h*f-g,e[2]=g*f-h,e[6]=a*u,e[10]=x*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ku,t,Vu)}lookAt(t,e,n){const s=this.elements;return ln.subVectors(t,e),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),ri.crossVectors(n,ln),ri.lengthSq()===0&&(Math.abs(n.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),ri.crossVectors(n,ln)),ri.normalize(),Ws.crossVectors(ln,ri),s[0]=ri.x,s[4]=Ws.x,s[8]=ln.x,s[1]=ri.y,s[5]=Ws.y,s[9]=ln.y,s[2]=ri.z,s[6]=Ws.z,s[10]=ln.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],f=n[5],d=n[9],h=n[13],g=n[2],x=n[6],p=n[10],m=n[14],_=n[3],v=n[7],S=n[11],R=n[15],E=s[0],C=s[4],y=s[8],P=s[12],D=s[1],w=s[5],L=s[9],B=s[13],O=s[2],N=s[6],z=s[10],F=s[14],q=s[3],H=s[7],Z=s[11],tt=s[15];return r[0]=o*E+a*D+l*O+c*q,r[4]=o*C+a*w+l*N+c*H,r[8]=o*y+a*L+l*z+c*Z,r[12]=o*P+a*B+l*F+c*tt,r[1]=u*E+f*D+d*O+h*q,r[5]=u*C+f*w+d*N+h*H,r[9]=u*y+f*L+d*z+h*Z,r[13]=u*P+f*B+d*F+h*tt,r[2]=g*E+x*D+p*O+m*q,r[6]=g*C+x*w+p*N+m*H,r[10]=g*y+x*L+p*z+m*Z,r[14]=g*P+x*B+p*F+m*tt,r[3]=_*E+v*D+S*O+R*q,r[7]=_*C+v*w+S*N+R*H,r[11]=_*y+v*L+S*z+R*Z,r[15]=_*P+v*B+S*F+R*tt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],f=t[6],d=t[10],h=t[14],g=t[3],x=t[7],p=t[11],m=t[15],_=l*h-c*d,v=a*h-c*f,S=a*d-l*f,R=o*h-c*u,E=o*d-l*u,C=o*f-a*u;return e*(x*_-p*v+m*S)-n*(g*_-p*R+m*E)+s*(g*v-x*R+m*C)-r*(g*S-x*E+p*C)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],f=t[9],d=t[10],h=t[11],g=t[12],x=t[13],p=t[14],m=t[15],_=e*a-n*o,v=e*l-s*o,S=e*c-r*o,R=n*l-s*a,E=n*c-r*a,C=s*c-r*l,y=u*x-f*g,P=u*p-d*g,D=u*m-h*g,w=f*p-d*x,L=f*m-h*x,B=d*m-h*p,O=_*B-v*L+S*w+R*D-E*P+C*y;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/O;return t[0]=(a*B-l*L+c*w)*N,t[1]=(s*L-n*B-r*w)*N,t[2]=(x*C-p*E+m*R)*N,t[3]=(d*E-f*C-h*R)*N,t[4]=(l*D-o*B-c*P)*N,t[5]=(e*B-s*D+r*P)*N,t[6]=(p*S-g*C-m*v)*N,t[7]=(u*C-d*S+h*v)*N,t[8]=(o*L-a*D+c*y)*N,t[9]=(n*D-e*L-r*y)*N,t[10]=(g*E-x*S+m*_)*N,t[11]=(f*S-u*E-h*_)*N,t[12]=(a*P-o*w-l*y)*N,t[13]=(e*w-n*P+s*y)*N,t[14]=(x*v-g*R-p*_)*N,t[15]=(u*R-f*v+d*_)*N,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,f=a+a,d=r*c,h=r*u,g=r*f,x=o*u,p=o*f,m=a*f,_=l*c,v=l*u,S=l*f,R=n.x,E=n.y,C=n.z;return s[0]=(1-(x+m))*R,s[1]=(h+S)*R,s[2]=(g-v)*R,s[3]=0,s[4]=(h-S)*E,s[5]=(1-(d+m))*E,s[6]=(p+_)*E,s[7]=0,s[8]=(g+v)*C,s[9]=(p-_)*C,s[10]=(1-(d+x))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinant();if(r===0)return n.set(1,1,1),e.identity(),this;let o=zi.set(s[0],s[1],s[2]).length();const a=zi.set(s[4],s[5],s[6]).length(),l=zi.set(s[8],s[9],s[10]).length();r<0&&(o=-o),mn.copy(this);const c=1/o,u=1/a,f=1/l;return mn.elements[0]*=c,mn.elements[1]*=c,mn.elements[2]*=c,mn.elements[4]*=u,mn.elements[5]*=u,mn.elements[6]*=u,mn.elements[8]*=f,mn.elements[9]*=f,mn.elements[10]*=f,e.setFromRotationMatrix(mn),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,s,r,o,a=Dn,l=!1){const c=this.elements,u=2*r/(e-t),f=2*r/(n-s),d=(e+t)/(e-t),h=(n+s)/(n-s);let g,x;if(l)g=r/(o-r),x=o*r/(o-r);else if(a===Dn)g=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Ls)g=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Dn,l=!1){const c=this.elements,u=2/(e-t),f=2/(n-s),d=-(e+t)/(e-t),h=-(n+s)/(n-s);let g,x;if(l)g=1/(o-r),x=o/(o-r);else if(a===Dn)g=-2/(o-r),x=-(o+r)/(o-r);else if(a===Ls)g=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};zr.prototype.isMatrix4=!0;let ye=zr;const zi=new I,mn=new ye,ku=new I(0,0,0),Vu=new I(1,1,1),ri=new I,Ws=new I,ln=new I,bl=new ye,wl=new He;class ei{constructor(t=0,e=0,n=0,s=ei.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],f=s[2],d=s[6],h=s[10];switch(e){case"XYZ":this._y=Math.asin(te(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-te(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(te(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-te(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(te(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-te(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,h),this._y=0);break;default:kt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return bl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(bl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return wl.setFromEuler(this),this.setFromQuaternion(wl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ei.DEFAULT_ORDER="XYZ";class Xa{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Gu=0;const Tl=new I,ki=new He,zn=new ye,Xs=new I,ds=new I,Hu=new I,Wu=new He,Al=new I(1,0,0),Pl=new I(0,1,0),Rl=new I(0,0,1),Cl={type:"added"},Xu={type:"removed"},Vi={type:"childadded",child:null},no={type:"childremoved",child:null};class Ue extends xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gu++}),this.uuid=Kn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ue.DEFAULT_UP.clone();const t=new I,e=new ei,n=new He,s=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ye},normalMatrix:{value:new qt}}),this.matrix=new ye,this.matrixWorld=new ye,this.matrixAutoUpdate=Ue.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ki.setFromAxisAngle(t,e),this.quaternion.multiply(ki),this}rotateOnWorldAxis(t,e){return ki.setFromAxisAngle(t,e),this.quaternion.premultiply(ki),this}rotateX(t){return this.rotateOnAxis(Al,t)}rotateY(t){return this.rotateOnAxis(Pl,t)}rotateZ(t){return this.rotateOnAxis(Rl,t)}translateOnAxis(t,e){return Tl.copy(t).applyQuaternion(this.quaternion),this.position.add(Tl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Al,t)}translateY(t){return this.translateOnAxis(Pl,t)}translateZ(t){return this.translateOnAxis(Rl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(zn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Xs.copy(t):Xs.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ds.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zn.lookAt(ds,Xs,this.up):zn.lookAt(Xs,ds,this.up),this.quaternion.setFromRotationMatrix(zn),s&&(zn.extractRotation(s.matrixWorld),ki.setFromRotationMatrix(zn),this.quaternion.premultiply(ki.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(se("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Cl),Vi.child=t,this.dispatchEvent(Vi),Vi.child=null):se("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Xu),no.child=t,this.dispatchEvent(no),no.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),zn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),zn.multiply(t.parent.matrixWorld)),t.applyMatrix4(zn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Cl),Vi.child=t,this.dispatchEvent(Vi),Vi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ds,t,Hu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ds,Wu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),f=o(t.shapes),d=o(t.skeletons),h=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),h.length>0&&(n.animations=h),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ue.DEFAULT_UP=new I(0,1,0);Ue.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ii extends Ue{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Yu={type:"move"};class io{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ii,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ii,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ii,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const x of t.hand.values()){const p=e.getJointPose(x,n),m=this._getHandJoint(c,x);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),h=.02,g=.005;c.inputState.pinching&&d>h+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=h-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Yu)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ii;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const oh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},oi={h:0,s:0,l:0},Ys={h:0,s:0,l:0};function so(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class ee{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=fn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,re.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=re.workingColorSpace){return this.r=t,this.g=e,this.b=n,re.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=re.workingColorSpace){if(t=Du(t,1),e=te(e,0,1),n=te(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=so(o,r,t+1/3),this.g=so(o,r,t),this.b=so(o,r,t-1/3)}return re.colorSpaceToWorking(this,s),this}setStyle(t,e=fn){function n(r){r!==void 0&&parseFloat(r)<1&&kt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:kt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);kt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=fn){const n=oh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):kt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Jn(t.r),this.g=Jn(t.g),this.b=Jn(t.b),this}copyLinearToSRGB(t){return this.r=ns(t.r),this.g=ns(t.g),this.b=ns(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=fn){return re.workingToColorSpace(Ze.copy(this),t),Math.round(te(Ze.r*255,0,255))*65536+Math.round(te(Ze.g*255,0,255))*256+Math.round(te(Ze.b*255,0,255))}getHexString(t=fn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=re.workingColorSpace){re.workingToColorSpace(Ze.copy(this),e);const n=Ze.r,s=Ze.g,r=Ze.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=re.workingColorSpace){return re.workingToColorSpace(Ze.copy(this),e),t.r=Ze.r,t.g=Ze.g,t.b=Ze.b,t}getStyle(t=fn){re.workingToColorSpace(Ze.copy(this),t);const e=Ze.r,n=Ze.g,s=Ze.b;return t!==fn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(oi),this.setHSL(oi.h+t,oi.s+e,oi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(oi),t.getHSL(Ys);const n=Kr(oi.h,Ys.h,e),s=Kr(oi.s,Ys.s,e),r=Kr(oi.l,Ys.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ze=new ee;ee.NAMES=oh;class qu extends Ue{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ei,this.environmentIntensity=1,this.environmentRotation=new ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const gn=new I,kn=new I,ro=new I,Vn=new I,Gi=new I,Hi=new I,Il=new I,oo=new I,ao=new I,lo=new I,co=new we,ho=new we,uo=new we;class vn{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),gn.subVectors(t,e),s.cross(gn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){gn.subVectors(s,e),kn.subVectors(n,e),ro.subVectors(t,e);const o=gn.dot(gn),a=gn.dot(kn),l=gn.dot(ro),c=kn.dot(kn),u=kn.dot(ro),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;const d=1/f,h=(c*l-a*u)*d,g=(o*u-a*l)*d;return r.set(1-h-g,g,h)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Vn)===null?!1:Vn.x>=0&&Vn.y>=0&&Vn.x+Vn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Vn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Vn.x),l.addScaledVector(o,Vn.y),l.addScaledVector(a,Vn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return co.setScalar(0),ho.setScalar(0),uo.setScalar(0),co.fromBufferAttribute(t,e),ho.fromBufferAttribute(t,n),uo.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(co,r.x),o.addScaledVector(ho,r.y),o.addScaledVector(uo,r.z),o}static isFrontFacing(t,e,n,s){return gn.subVectors(n,e),kn.subVectors(t,e),gn.cross(kn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return gn.subVectors(this.c,this.b),kn.subVectors(this.a,this.b),gn.cross(kn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return vn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return vn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return vn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return vn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return vn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Gi.subVectors(s,n),Hi.subVectors(r,n),oo.subVectors(t,n);const l=Gi.dot(oo),c=Hi.dot(oo);if(l<=0&&c<=0)return e.copy(n);ao.subVectors(t,s);const u=Gi.dot(ao),f=Hi.dot(ao);if(u>=0&&f<=u)return e.copy(s);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(Gi,o);lo.subVectors(t,r);const h=Gi.dot(lo),g=Hi.dot(lo);if(g>=0&&h<=g)return e.copy(r);const x=h*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Hi,a);const p=u*g-h*f;if(p<=0&&f-u>=0&&h-g>=0)return Il.subVectors(r,s),a=(f-u)/(f-u+(h-g)),e.copy(s).addScaledVector(Il,a);const m=1/(p+x+d);return o=x*m,a=d*m,e.copy(n).addScaledVector(Gi,o).addScaledVector(Hi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class cs{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(_n.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(_n.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=_n.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,_n):_n.fromBufferAttribute(r,o),_n.applyMatrix4(t.matrixWorld),this.expandByPoint(_n);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),qs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),qs.copy(n.boundingBox)),qs.applyMatrix4(t.matrixWorld),this.union(qs)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,_n),_n.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(fs),js.subVectors(this.max,fs),Wi.subVectors(t.a,fs),Xi.subVectors(t.b,fs),Yi.subVectors(t.c,fs),ai.subVectors(Xi,Wi),li.subVectors(Yi,Xi),yi.subVectors(Wi,Yi);let e=[0,-ai.z,ai.y,0,-li.z,li.y,0,-yi.z,yi.y,ai.z,0,-ai.x,li.z,0,-li.x,yi.z,0,-yi.x,-ai.y,ai.x,0,-li.y,li.x,0,-yi.y,yi.x,0];return!fo(e,Wi,Xi,Yi,js)||(e=[1,0,0,0,1,0,0,0,1],!fo(e,Wi,Xi,Yi,js))?!1:(Zs.crossVectors(ai,li),e=[Zs.x,Zs.y,Zs.z],fo(e,Wi,Xi,Yi,js))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,_n).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(_n).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Gn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Gn=[new I,new I,new I,new I,new I,new I,new I,new I],_n=new I,qs=new cs,Wi=new I,Xi=new I,Yi=new I,ai=new I,li=new I,yi=new I,fs=new I,js=new I,Zs=new I,Mi=new I;function fo(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Mi.fromArray(i,r);const a=s.x*Math.abs(Mi.x)+s.y*Math.abs(Mi.y)+s.z*Math.abs(Mi.z),l=t.dot(Mi),c=e.dot(Mi),u=n.dot(Mi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Fe=new I,$s=new ct;let ju=0;class en extends xi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ju++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ea,this.updateRanges=[],this.gpuType=In,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)$s.fromBufferAttribute(this,e),$s.applyMatrix3(t),this.setXY(e,$s.x,$s.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix3(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix4(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyNormalMatrix(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.transformDirection(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Rn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=fe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Rn(e,this.array)),e}setX(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Rn(e,this.array)),e}setY(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Rn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Rn(e,this.array)),e}setW(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),s=fe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),s=fe(s,this.array),r=fe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ea&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}}class ah extends en{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class lh extends en{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ne extends en{constructor(t,e,n){super(new Float32Array(t),e,n)}}const Zu=new cs,ps=new I,po=new I;class Os{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Zu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ps.subVectors(t,this.center);const e=ps.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ps,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(po.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ps.copy(t.center).add(po)),this.expandByPoint(ps.copy(t.center).sub(po))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let $u=0;const dn=new ye,mo=new Ue,qi=new I,cn=new cs,ms=new cs,Ve=new I;class ie extends xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$u++}),this.uuid=Kn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Au(t)?lh:ah)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new qt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return dn.makeRotationFromQuaternion(t),this.applyMatrix4(dn),this}rotateX(t){return dn.makeRotationX(t),this.applyMatrix4(dn),this}rotateY(t){return dn.makeRotationY(t),this.applyMatrix4(dn),this}rotateZ(t){return dn.makeRotationZ(t),this.applyMatrix4(dn),this}translate(t,e,n){return dn.makeTranslation(t,e,n),this.applyMatrix4(dn),this}scale(t,e,n){return dn.makeScale(t,e,n),this.applyMatrix4(dn),this}lookAt(t){return mo.lookAt(t),mo.updateMatrix(),this.applyMatrix4(mo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qi).negate(),this.translate(qi.x,qi.y,qi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ne(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&kt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){se("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];cn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ve.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(Ve),Ve.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(Ve)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&se('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Os);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){se("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const n=this.boundingSphere.center;if(cn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];ms.setFromBufferAttribute(a),this.morphTargetsRelative?(Ve.addVectors(cn.min,ms.min),cn.expandByPoint(Ve),Ve.addVectors(cn.max,ms.max),cn.expandByPoint(Ve)):(cn.expandByPoint(ms.min),cn.expandByPoint(ms.max))}cn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ve.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ve));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ve.fromBufferAttribute(a,c),l&&(qi.fromBufferAttribute(t,c),Ve.add(qi)),s=Math.max(s,n.distanceToSquared(Ve))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&se('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){se("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new en(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let y=0;y<n.count;y++)a[y]=new I,l[y]=new I;const c=new I,u=new I,f=new I,d=new ct,h=new ct,g=new ct,x=new I,p=new I;function m(y,P,D){c.fromBufferAttribute(n,y),u.fromBufferAttribute(n,P),f.fromBufferAttribute(n,D),d.fromBufferAttribute(r,y),h.fromBufferAttribute(r,P),g.fromBufferAttribute(r,D),u.sub(c),f.sub(c),h.sub(d),g.sub(d);const w=1/(h.x*g.y-g.x*h.y);isFinite(w)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(f,-h.y).multiplyScalar(w),p.copy(f).multiplyScalar(h.x).addScaledVector(u,-g.x).multiplyScalar(w),a[y].add(x),a[P].add(x),a[D].add(x),l[y].add(p),l[P].add(p),l[D].add(p))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let y=0,P=_.length;y<P;++y){const D=_[y],w=D.start,L=D.count;for(let B=w,O=w+L;B<O;B+=3)m(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const v=new I,S=new I,R=new I,E=new I;function C(y){R.fromBufferAttribute(s,y),E.copy(R);const P=a[y];v.copy(P),v.sub(R.multiplyScalar(R.dot(P))).normalize(),S.crossVectors(E,P);const w=S.dot(l[y])<0?-1:1;o.setXYZW(y,v.x,v.y,v.z,w)}for(let y=0,P=_.length;y<P;++y){const D=_[y],w=D.start,L=D.count;for(let B=w,O=w+L;B<O;B+=3)C(t.getX(B+0)),C(t.getX(B+1)),C(t.getX(B+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new en(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,h=n.count;d<h;d++)n.setXYZ(d,0,0,0);const s=new I,r=new I,o=new I,a=new I,l=new I,c=new I,u=new I,f=new I;if(t)for(let d=0,h=t.count;d<h;d+=3){const g=t.getX(d+0),x=t.getX(d+1),p=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,p),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,h=e.count;d<h;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ve.fromBufferAttribute(t,e),Ve.normalize(),t.setXYZ(e,Ve.x,Ve.y,Ve.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let h=0,g=0;for(let x=0,p=l.length;x<p;x++){a.isInterleavedBufferAttribute?h=l[x]*a.data.stride+a.offset:h=l[x]*u;for(let m=0;m<u;m++)d[g++]=c[h++]}return new en(d,u,f)}if(this.index===null)return kt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ie,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],h=t(d,n);l.push(h)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const h=c[f];u.push(h.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],f=r[c];for(let d=0,h=f.length;d<h;d++)u.push(f[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ku{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ea,this.updateRanges=[],this.version=0,this.uuid=Kn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Je=new I;class Lr{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.applyMatrix4(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.applyNormalMatrix(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.transformDirection(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Rn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=fe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Rn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Rn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Rn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Rn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),s=fe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),s=fe(s,this.array),r=fe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Dr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new en(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Lr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Dr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let Ju=0;class hs extends xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ju++}),this.uuid=Kn(),this.name="",this.type="Material",this.blending=es,this.side=_i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Uo,this.blendDst=Fo,this.blendEquation=Ti,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ee(0,0,0),this.blendAlpha=0,this.depthFunc=ss,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Oi,this.stencilZFail=Oi,this.stencilZPass=Oi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){kt(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){kt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==es&&(n.blending=this.blending),this.side!==_i&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Uo&&(n.blendSrc=this.blendSrc),this.blendDst!==Fo&&(n.blendDst=this.blendDst),this.blendEquation!==Ti&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ss&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Oi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Oi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Oi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Hn=new I,go=new I,Ks=new I,ci=new I,_o=new I,Js=new I,xo=new I;class Vr{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Hn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Hn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Hn.copy(this.origin).addScaledVector(this.direction,e),Hn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){go.copy(t).add(e).multiplyScalar(.5),Ks.copy(e).sub(t).normalize(),ci.copy(this.origin).sub(go);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Ks),a=ci.dot(this.direction),l=-ci.dot(Ks),c=ci.lengthSq(),u=Math.abs(1-o*o);let f,d,h,g;if(u>0)if(f=o*l-a,d=o*a-l,g=r*u,f>=0)if(d>=-g)if(d<=g){const x=1/u;f*=x,d*=x,h=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=r,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-o*r+a)),d=f>0?-r:Math.min(Math.max(-r,-l),r),h=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-r,-l),r),h=d*(d+2*l)+c):(f=Math.max(0,-(o*r+a)),d=f>0?r:Math.min(Math.max(-r,-l),r),h=-f*f+d*(d+2*l)+c);else d=o>0?-r:r,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(go).addScaledVector(Ks,d),h}intersectSphere(t,e){Hn.subVectors(t.center,this.origin);const n=Hn.dot(this.direction),s=Hn.dot(Hn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),u>=0?(r=(t.min.y-d.y)*u,o=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,o=(t.min.y-d.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(t.min.z-d.z)*f,l=(t.max.z-d.z)*f):(a=(t.max.z-d.z)*f,l=(t.min.z-d.z)*f),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Hn)!==null}intersectTriangle(t,e,n,s,r){_o.subVectors(e,t),Js.subVectors(n,t),xo.crossVectors(_o,Js);let o=this.direction.dot(xo),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ci.subVectors(this.origin,t);const l=a*this.direction.dot(Js.crossVectors(ci,Js));if(l<0)return null;const c=a*this.direction.dot(_o.cross(ci));if(c<0||l+c>o)return null;const u=-a*ci.dot(xo);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ie extends hs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.combine=Gc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Dl=new ye,Si=new Vr,Qs=new Os,Ll=new I,tr=new I,er=new I,nr=new I,vo=new I,ir=new I,Nl=new I,sr=new I;class at extends Ue{constructor(t=new ie,e=new Ie){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){ir.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],f=r[l];u!==0&&(vo.fromBufferAttribute(f,t),o?ir.addScaledVector(vo,u):ir.addScaledVector(vo.sub(e),u))}e.add(ir)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Qs.copy(n.boundingSphere),Qs.applyMatrix4(r),Si.copy(t.ray).recast(t.near),!(Qs.containsPoint(Si.origin)===!1&&(Si.intersectSphere(Qs,Ll)===null||Si.origin.distanceToSquared(Ll)>(t.far-t.near)**2))&&(Dl.copy(r).invert(),Si.copy(t.ray).applyMatrix4(Dl),!(n.boundingBox!==null&&Si.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Si)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,d=r.groups,h=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){const p=d[g],m=o[p.materialIndex],_=Math.max(p.start,h.start),v=Math.min(a.count,Math.min(p.start+p.count,h.start+h.count));for(let S=_,R=v;S<R;S+=3){const E=a.getX(S),C=a.getX(S+1),y=a.getX(S+2);s=rr(this,m,t,n,c,u,f,E,C,y),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,h.start),x=Math.min(a.count,h.start+h.count);for(let p=g,m=x;p<m;p+=3){const _=a.getX(p),v=a.getX(p+1),S=a.getX(p+2);s=rr(this,o,t,n,c,u,f,_,v,S),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){const p=d[g],m=o[p.materialIndex],_=Math.max(p.start,h.start),v=Math.min(l.count,Math.min(p.start+p.count,h.start+h.count));for(let S=_,R=v;S<R;S+=3){const E=S,C=S+1,y=S+2;s=rr(this,m,t,n,c,u,f,E,C,y),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,h.start),x=Math.min(l.count,h.start+h.count);for(let p=g,m=x;p<m;p+=3){const _=p,v=p+1,S=p+2;s=rr(this,o,t,n,c,u,f,_,v,S),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function Qu(i,t,e,n,s,r,o,a){let l;if(t.side===on?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===_i,a),l===null)return null;sr.copy(a),sr.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(sr);return c<e.near||c>e.far?null:{distance:c,point:sr.clone(),object:i}}function rr(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,tr),i.getVertexPosition(l,er),i.getVertexPosition(c,nr);const u=Qu(i,t,e,n,tr,er,nr,Nl);if(u){const f=new I;vn.getBarycoord(Nl,tr,er,nr,f),s&&(u.uv=vn.getInterpolatedAttribute(s,a,l,c,f,new ct)),r&&(u.uv1=vn.getInterpolatedAttribute(r,a,l,c,f,new ct)),o&&(u.normal=vn.getInterpolatedAttribute(o,a,l,c,f,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new I,materialIndex:0};vn.getNormal(tr,er,nr,d.normal),u.face=d,u.barycoord=f}return u}class td extends tn{constructor(t=null,e=1,n=1,s,r,o,a,l,c=Ye,u=Ye,f,d){super(null,o,a,l,c,u,s,r,f,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ed extends en{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const yo=new I,nd=new I,id=new qt;class Xn{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=yo.subVectors(n,e).cross(nd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const s=t.delta(yo),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||id.getNormalMatrix(t),s=this.coplanarPoint(yo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ei=new Os,sd=new ct(.5,.5),or=new I;class Ya{constructor(t=new Xn,e=new Xn,n=new Xn,s=new Xn,r=new Xn,o=new Xn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Dn,n=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],f=r[5],d=r[6],h=r[7],g=r[8],x=r[9],p=r[10],m=r[11],_=r[12],v=r[13],S=r[14],R=r[15];if(s[0].setComponents(c-o,h-u,m-g,R-_).normalize(),s[1].setComponents(c+o,h+u,m+g,R+_).normalize(),s[2].setComponents(c+a,h+f,m+x,R+v).normalize(),s[3].setComponents(c-a,h-f,m-x,R-v).normalize(),n)s[4].setComponents(l,d,p,S).normalize(),s[5].setComponents(c-l,h-d,m-p,R-S).normalize();else if(s[4].setComponents(c-l,h-d,m-p,R-S).normalize(),e===Dn)s[5].setComponents(c+l,h+d,m+p,R+S).normalize();else if(e===Ls)s[5].setComponents(l,d,p,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ei.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ei.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ei)}intersectsSprite(t){Ei.center.set(0,0,0);const e=sd.distanceTo(t.center);return Ei.radius=.7071067811865476+e,Ei.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ei)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(or.x=s.normal.x>0?t.max.x:t.min.x,or.y=s.normal.y>0?t.max.y:t.min.y,or.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(or)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class rn extends hs{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ee(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Nr=new I,Ur=new I,Ul=new ye,gs=new Vr,ar=new Os,Mo=new I,Fl=new I;class Se extends Ue{constructor(t=new ie,e=new rn){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Nr.fromBufferAttribute(e,s-1),Ur.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Nr.distanceTo(Ur);t.setAttribute("lineDistance",new ne(n,1))}else kt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ar.copy(n.boundingSphere),ar.applyMatrix4(s),ar.radius+=r,t.ray.intersectsSphere(ar)===!1)return;Ul.copy(s).invert(),gs.copy(t.ray).applyMatrix4(Ul);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const h=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let x=h,p=g-1;x<p;x+=c){const m=u.getX(x),_=u.getX(x+1),v=lr(this,t,gs,l,m,_,x);v&&e.push(v)}if(this.isLineLoop){const x=u.getX(g-1),p=u.getX(h),m=lr(this,t,gs,l,x,p,g-1);m&&e.push(m)}}else{const h=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let x=h,p=g-1;x<p;x+=c){const m=lr(this,t,gs,l,x,x+1,x);m&&e.push(m)}if(this.isLineLoop){const x=lr(this,t,gs,l,g-1,h,g-1);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function lr(i,t,e,n,s,r,o){const a=i.geometry.attributes.position;if(Nr.fromBufferAttribute(a,s),Ur.fromBufferAttribute(a,r),e.distanceSqToSegment(Nr,Ur,Mo,Fl)>n)return;Mo.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Mo);if(!(c<t.near||c>t.far))return{distance:c,point:Fl.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const Ol=new I,Bl=new I;class rd extends Se{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Ol.fromBufferAttribute(e,s),Bl.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Ol.distanceTo(Bl);t.setAttribute("lineDistance",new ne(n,1))}else kt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ch extends tn{constructor(t=[],e=Di,n,s,r,o,a,l,c,u){super(t,e,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class os extends tn{constructor(t,e,n=Fn,s,r,o,a=Ye,l=Ye,c,u=ti,f=1){if(u!==ti&&u!==Ci)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:f};super(d,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Wa(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class od extends os{constructor(t,e=Fn,n=Di,s,r,o=Ye,a=Ye,l,c=ti){const u={width:t,height:t,depth:1},f=[u,u,u,u,u,u];super(t,t,e,n,s,r,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class hh extends tn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class De extends ie{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,h=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ne(c,3)),this.setAttribute("normal",new ne(u,3)),this.setAttribute("uv",new ne(f,2));function g(x,p,m,_,v,S,R,E,C,y,P){const D=S/C,w=R/y,L=S/2,B=R/2,O=E/2,N=C+1,z=y+1;let F=0,q=0;const H=new I;for(let Z=0;Z<z;Z++){const tt=Z*w-B;for(let dt=0;dt<N;dt++){const It=dt*D-L;H[x]=It*_,H[p]=tt*v,H[m]=O,c.push(H.x,H.y,H.z),H[x]=0,H[p]=0,H[m]=E>0?1:-1,u.push(H.x,H.y,H.z),f.push(dt/C),f.push(1-Z/y),F+=1}}for(let Z=0;Z<y;Z++)for(let tt=0;tt<C;tt++){const dt=d+tt+N*Z,It=d+tt+N*(Z+1),zt=d+(tt+1)+N*(Z+1),yt=d+(tt+1)+N*Z;l.push(dt,It,yt),l.push(It,zt,yt),q+=6}a.addGroup(h,q,P),h+=q,d+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new De(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class sn extends ie{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new I,u=new ct;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,d=3;f<=e;f++,d+=3){const h=n+f/e*s;c.x=t*Math.cos(h),c.y=t*Math.sin(h),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[d]/t+1)/2,u.y=(o[d+1]/t+1)/2,l.push(u.x,u.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new ne(o,3)),this.setAttribute("normal",new ne(a,3)),this.setAttribute("uv",new ne(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new sn(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Xe extends ie{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],f=[],d=[],h=[];let g=0;const x=[],p=n/2;let m=0;_(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new ne(f,3)),this.setAttribute("normal",new ne(d,3)),this.setAttribute("uv",new ne(h,2));function _(){const S=new I,R=new I;let E=0;const C=(e-t)/n;for(let y=0;y<=r;y++){const P=[],D=y/r,w=D*(e-t)+t;for(let L=0;L<=s;L++){const B=L/s,O=B*l+a,N=Math.sin(O),z=Math.cos(O);R.x=w*N,R.y=-D*n+p,R.z=w*z,f.push(R.x,R.y,R.z),S.set(N,C,z).normalize(),d.push(S.x,S.y,S.z),h.push(B,1-D),P.push(g++)}x.push(P)}for(let y=0;y<s;y++)for(let P=0;P<r;P++){const D=x[P][y],w=x[P+1][y],L=x[P+1][y+1],B=x[P][y+1];(t>0||P!==0)&&(u.push(D,w,B),E+=3),(e>0||P!==r-1)&&(u.push(w,L,B),E+=3)}c.addGroup(m,E,0),m+=E}function v(S){const R=g,E=new ct,C=new I;let y=0;const P=S===!0?t:e,D=S===!0?1:-1;for(let L=1;L<=s;L++)f.push(0,p*D,0),d.push(0,D,0),h.push(.5,.5),g++;const w=g;for(let L=0;L<=s;L++){const O=L/s*l+a,N=Math.cos(O),z=Math.sin(O);C.x=P*z,C.y=p*D,C.z=P*N,f.push(C.x,C.y,C.z),d.push(0,D,0),E.x=N*.5+.5,E.y=z*.5*D+.5,h.push(E.x,E.y),g++}for(let L=0;L<s;L++){const B=R+L,O=w+L;S===!0?u.push(O,O+1,B):u.push(O+1,O,B),y+=3}c.addGroup(m,y,S===!0?1:2),m+=y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xe(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class qa extends ie{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),c(n),u(),this.setAttribute("position",new ne(r,3)),this.setAttribute("normal",new ne(r.slice(),3)),this.setAttribute("uv",new ne(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(_){const v=new I,S=new I,R=new I;for(let E=0;E<e.length;E+=3)h(e[E+0],v),h(e[E+1],S),h(e[E+2],R),l(v,S,R,_)}function l(_,v,S,R){const E=R+1,C=[];for(let y=0;y<=E;y++){C[y]=[];const P=_.clone().lerp(S,y/E),D=v.clone().lerp(S,y/E),w=E-y;for(let L=0;L<=w;L++)L===0&&y===E?C[y][L]=P:C[y][L]=P.clone().lerp(D,L/w)}for(let y=0;y<E;y++)for(let P=0;P<2*(E-y)-1;P++){const D=Math.floor(P/2);P%2===0?(d(C[y][D+1]),d(C[y+1][D]),d(C[y][D])):(d(C[y][D+1]),d(C[y+1][D+1]),d(C[y+1][D]))}}function c(_){const v=new I;for(let S=0;S<r.length;S+=3)v.x=r[S+0],v.y=r[S+1],v.z=r[S+2],v.normalize().multiplyScalar(_),r[S+0]=v.x,r[S+1]=v.y,r[S+2]=v.z}function u(){const _=new I;for(let v=0;v<r.length;v+=3){_.x=r[v+0],_.y=r[v+1],_.z=r[v+2];const S=p(_)/2/Math.PI+.5,R=m(_)/Math.PI+.5;o.push(S,1-R)}g(),f()}function f(){for(let _=0;_<o.length;_+=6){const v=o[_+0],S=o[_+2],R=o[_+4],E=Math.max(v,S,R),C=Math.min(v,S,R);E>.9&&C<.1&&(v<.2&&(o[_+0]+=1),S<.2&&(o[_+2]+=1),R<.2&&(o[_+4]+=1))}}function d(_){r.push(_.x,_.y,_.z)}function h(_,v){const S=_*3;v.x=t[S+0],v.y=t[S+1],v.z=t[S+2]}function g(){const _=new I,v=new I,S=new I,R=new I,E=new ct,C=new ct,y=new ct;for(let P=0,D=0;P<r.length;P+=9,D+=6){_.set(r[P+0],r[P+1],r[P+2]),v.set(r[P+3],r[P+4],r[P+5]),S.set(r[P+6],r[P+7],r[P+8]),E.set(o[D+0],o[D+1]),C.set(o[D+2],o[D+3]),y.set(o[D+4],o[D+5]),R.copy(_).add(v).add(S).divideScalar(3);const w=p(R);x(E,D+0,_,w),x(C,D+2,v,w),x(y,D+4,S,w)}}function x(_,v,S,R){R<0&&_.x===1&&(o[v]=_.x-1),S.x===0&&S.z===0&&(o[v]=R/2/Math.PI+.5)}function p(_){return Math.atan2(_.z,-_.x)}function m(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qa(t.vertices,t.indices,t.radius,t.detail)}}class On{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){kt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const u=n[s],d=n[s+1]-u,h=(o-u)/d;return(s+h)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new ct:new I);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new I,s=[],r=[],o=[],a=new I,l=new ye;for(let h=0;h<=t;h++){const g=h/t;s[h]=this.getTangentAt(g,new I)}r[0]=new I,o[0]=new I;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),f=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let h=1;h<=t;h++){if(r[h]=r[h-1].clone(),o[h]=o[h-1].clone(),a.crossVectors(s[h-1],s[h]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(te(s[h-1].dot(s[h]),-1,1));r[h].applyMatrix4(l.makeRotationAxis(a,g))}o[h].crossVectors(s[h],r[h])}if(e===!0){let h=Math.acos(te(r[0].dot(r[t]),-1,1));h/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(h=-h);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],h*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class ja extends On{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new ct){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=l-this.aX,h=c-this.aY;l=d*u-h*f+this.aX,c=d*f+h*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class ad extends ja{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Za(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,f){let d=(o-r)/c-(a-r)/(c+u)+(a-o)/u,h=(a-o)/u-(l-o)/(u+f)+(l-a)/f;d*=u,h*=u,s(o,a,d,h)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const zl=new I,kl=new I,So=new Za,Eo=new Za,bo=new Za;class ld extends On{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new I){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(kl.subVectors(s[0],s[1]).add(s[0]),c=kl);const f=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(zl.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=zl),this.curveType==="centripetal"||this.curveType==="chordal"){const h=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(f),h),x=Math.pow(f.distanceToSquared(d),h),p=Math.pow(d.distanceToSquared(u),h);x<1e-4&&(x=1),g<1e-4&&(g=x),p<1e-4&&(p=x),So.initNonuniformCatmullRom(c.x,f.x,d.x,u.x,g,x,p),Eo.initNonuniformCatmullRom(c.y,f.y,d.y,u.y,g,x,p),bo.initNonuniformCatmullRom(c.z,f.z,d.z,u.z,g,x,p)}else this.curveType==="catmullrom"&&(So.initCatmullRom(c.x,f.x,d.x,u.x,this.tension),Eo.initCatmullRom(c.y,f.y,d.y,u.y,this.tension),bo.initCatmullRom(c.z,f.z,d.z,u.z,this.tension));return n.set(So.calc(l),Eo.calc(l),bo.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new I().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Vl(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function cd(i,t){const e=1-i;return e*e*t}function hd(i,t){return 2*(1-i)*i*t}function ud(i,t){return i*i*t}function As(i,t,e,n){return cd(i,t)+hd(i,e)+ud(i,n)}function dd(i,t){const e=1-i;return e*e*e*t}function fd(i,t){const e=1-i;return 3*e*e*i*t}function pd(i,t){return 3*(1-i)*i*i*t}function md(i,t){return i*i*i*t}function Ps(i,t,e,n,s){return dd(i,t)+fd(i,e)+pd(i,n)+md(i,s)}class uh extends On{constructor(t=new ct,e=new ct,n=new ct,s=new ct){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ct){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ps(t,s.x,r.x,o.x,a.x),Ps(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class gd extends On{constructor(t=new I,e=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new I){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ps(t,s.x,r.x,o.x,a.x),Ps(t,s.y,r.y,o.y,a.y),Ps(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class dh extends On{constructor(t=new ct,e=new ct){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ct){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ct){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class _d extends On{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class fh extends On{constructor(t=new ct,e=new ct,n=new ct){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ct){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(As(t,s.x,r.x,o.x),As(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class xd extends On{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(As(t,s.x,r.x,o.x),As(t,s.y,r.y,o.y),As(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ph extends On{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ct){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return n.set(Vl(a,l.x,c.x,u.x,f.x),Vl(a,l.y,c.y,u.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new ct().fromArray(s))}return this}}var Ta=Object.freeze({__proto__:null,ArcCurve:ad,CatmullRomCurve3:ld,CubicBezierCurve:uh,CubicBezierCurve3:gd,EllipseCurve:ja,LineCurve:dh,LineCurve3:_d,QuadraticBezierCurve:fh,QuadraticBezierCurve3:xd,SplineCurve:ph});class vd extends On{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ta[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Ta[s.type]().fromJSON(s))}return this}}class Gl extends vd{constructor(t){super(),this.type="Path",this.currentPoint=new ct,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new dh(this.currentPoint.clone(),new ct(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new fh(this.currentPoint.clone(),new ct(t,e),new ct(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new uh(this.currentPoint.clone(),new ct(t,e),new ct(n,s),new ct(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new ph(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){const c=new ja(t,e,n,s,r,o,a,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class An extends Gl{constructor(t){super(t),this.uuid=Kn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Gl().fromJSON(s))}return this}}function yd(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=mh(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=wd(i,t,r,e)),i.length>80*e){a=i[0],l=i[1];let u=a,f=l;for(let d=e;d<s;d+=e){const h=i[d],g=i[d+1];h<a&&(a=h),g<l&&(l=g),h>u&&(u=h),g>f&&(f=g)}c=Math.max(u-a,f-l),c=c!==0?32767/c:0}return Ns(r,o,e,a,l,c,0),o}function mh(i,t,e,n,s){let r;if(s===Fd(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=Hl(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=Hl(o/n|0,i[o],i[o+1],r);return r&&as(r,r.next)&&(Fs(r),r=r.next),r}function Ni(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(as(e,e.next)||Ee(e.prev,e,e.next)===0)){if(Fs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ns(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Cd(i,n,s,r);let a=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?Sd(i,n,s,r):Md(i)){t.push(l.i,i.i,c.i),Fs(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Ed(Ni(i),t),Ns(i,t,e,n,s,r,2)):o===2&&bd(i,t,e,n,s,r):Ns(Ni(i),t,e,n,s,r,1);break}}}function Md(i){const t=i.prev,e=i,n=i.next;if(Ee(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,u=Math.min(s,r,o),f=Math.min(a,l,c),d=Math.max(s,r,o),h=Math.max(a,l,c);let g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=d&&g.y>=f&&g.y<=h&&Es(s,a,r,l,o,c,g.x,g.y)&&Ee(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Sd(i,t,e,n){const s=i.prev,r=i,o=i.next;if(Ee(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,u=s.y,f=r.y,d=o.y,h=Math.min(a,l,c),g=Math.min(u,f,d),x=Math.max(a,l,c),p=Math.max(u,f,d),m=Aa(h,g,t,e,n),_=Aa(x,p,t,e,n);let v=i.prevZ,S=i.nextZ;for(;v&&v.z>=m&&S&&S.z<=_;){if(v.x>=h&&v.x<=x&&v.y>=g&&v.y<=p&&v!==s&&v!==o&&Es(a,u,l,f,c,d,v.x,v.y)&&Ee(v.prev,v,v.next)>=0||(v=v.prevZ,S.x>=h&&S.x<=x&&S.y>=g&&S.y<=p&&S!==s&&S!==o&&Es(a,u,l,f,c,d,S.x,S.y)&&Ee(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;v&&v.z>=m;){if(v.x>=h&&v.x<=x&&v.y>=g&&v.y<=p&&v!==s&&v!==o&&Es(a,u,l,f,c,d,v.x,v.y)&&Ee(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;S&&S.z<=_;){if(S.x>=h&&S.x<=x&&S.y>=g&&S.y<=p&&S!==s&&S!==o&&Es(a,u,l,f,c,d,S.x,S.y)&&Ee(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function Ed(i,t){let e=i;do{const n=e.prev,s=e.next.next;!as(n,s)&&_h(n,e,e.next,s)&&Us(n,s)&&Us(s,n)&&(t.push(n.i,e.i,s.i),Fs(e),Fs(e.next),e=i=s),e=e.next}while(e!==i);return Ni(e)}function bd(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Ld(o,a)){let l=xh(o,a);o=Ni(o,o.next),l=Ni(l,l.next),Ns(o,t,e,n,s,r,0),Ns(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function wd(i,t,e,n){const s=[];for(let r=0,o=t.length;r<o;r++){const a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=mh(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Dd(c))}s.sort(Td);for(let r=0;r<s.length;r++)e=Ad(s[r],e);return e}function Td(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Ad(i,t){const e=Pd(i,t);if(!e)return t;const n=xh(e,i);return Ni(n,n.next),Ni(e,e.next)}function Pd(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,o;if(as(i,e))return e;do{if(as(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const f=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=n&&f>r&&(r=f,o=e.x<e.next.x?e:e.next,f===n))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,l=o.x,c=o.y;let u=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&gh(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){const f=Math.abs(s-e.y)/(n-e.x);Us(e,i)&&(f<u||f===u&&(e.x>o.x||e.x===o.x&&Rd(o,e)))&&(o=e,u=f)}e=e.next}while(e!==a);return o}function Rd(i,t){return Ee(i.prev,i,t.prev)<0&&Ee(t.next,i,i.next)<0}function Cd(i,t,e,n){let s=i;do s.z===0&&(s.z=Aa(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Id(s)}function Id(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function Aa(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Dd(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function gh(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Es(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&gh(i,t,e,n,s,r,o,a)}function Ld(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Nd(i,t)&&(Us(i,t)&&Us(t,i)&&Ud(i,t)&&(Ee(i.prev,i,t.prev)||Ee(i,t.prev,t))||as(i,t)&&Ee(i.prev,i,i.next)>0&&Ee(t.prev,t,t.next)>0)}function Ee(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function as(i,t){return i.x===t.x&&i.y===t.y}function _h(i,t,e,n){const s=hr(Ee(i,t,e)),r=hr(Ee(i,t,n)),o=hr(Ee(e,n,i)),a=hr(Ee(e,n,t));return!!(s!==r&&o!==a||s===0&&cr(i,e,t)||r===0&&cr(i,n,t)||o===0&&cr(e,i,n)||a===0&&cr(e,t,n))}function cr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function hr(i){return i>0?1:i<0?-1:0}function Nd(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&_h(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Us(i,t){return Ee(i.prev,i,i.next)<0?Ee(i,t,i.next)>=0&&Ee(i,i.prev,t)>=0:Ee(i,t,i.prev)<0||Ee(i,i.next,t)<0}function Ud(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function xh(i,t){const e=Pa(i.i,i.x,i.y),n=Pa(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Hl(i,t,e,n){const s=Pa(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Fs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Pa(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Fd(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class Od{static triangulate(t,e,n=2){return yd(t,e,n)}}class jn{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return jn.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];Wl(t),Xl(n,t);let o=t.length;e.forEach(Wl);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Xl(n,e[l]);const a=Od.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Wl(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Xl(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class fi extends ie{constructor(t=new An([new ct(.5,.5),new ct(-.5,.5),new ct(-.5,-.5),new ct(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new ne(s,3)),this.setAttribute("uv",new ne(r,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,h=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:h-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3;const m=e.extrudePath,_=e.UVGenerator!==void 0?e.UVGenerator:Bd;let v,S=!1,R,E,C,y;if(m){v=m.getSpacedPoints(u),S=!0,d=!1;const et=m.isCatmullRomCurve3?m.closed:!1;R=m.computeFrenetFrames(u,et),E=new I,C=new I,y=new I}d||(p=0,h=0,g=0,x=0);const P=a.extractPoints(c);let D=P.shape;const w=P.holes;if(!jn.isClockWise(D)){D=D.reverse();for(let et=0,lt=w.length;et<lt;et++){const it=w[et];jn.isClockWise(it)&&(w[et]=it.reverse())}}function B(et){const it=10000000000000001e-36;let Mt=et[0];for(let vt=1;vt<=et.length;vt++){const Gt=vt%et.length,U=et[Gt],Wt=U.x-Mt.x,Dt=U.y-Mt.y,Ht=Wt*Wt+Dt*Dt,ut=Math.max(Math.abs(U.x),Math.abs(U.y),Math.abs(Mt.x),Math.abs(Mt.y)),ce=it*ut*ut;if(Ht<=ce){et.splice(Gt,1),vt--;continue}Mt=U}}B(D),w.forEach(B);const O=w.length,N=D;for(let et=0;et<O;et++){const lt=w[et];D=D.concat(lt)}function z(et,lt,it){return lt||se("ExtrudeGeometry: vec does not exist"),et.clone().addScaledVector(lt,it)}const F=D.length;function q(et,lt,it){let Mt,vt,Gt;const U=et.x-lt.x,Wt=et.y-lt.y,Dt=it.x-et.x,Ht=it.y-et.y,ut=U*U+Wt*Wt,ce=U*Ht-Wt*Dt;if(Math.abs(ce)>Number.EPSILON){const A=Math.sqrt(ut),b=Math.sqrt(Dt*Dt+Ht*Ht),G=lt.x-Wt/A,J=lt.y+U/A,st=it.x-Ht/b,ft=it.y+Dt/b,gt=((st-G)*Ht-(ft-J)*Dt)/(U*Ht-Wt*Dt);Mt=G+U*gt-et.x,vt=J+Wt*gt-et.y;const $=Mt*Mt+vt*vt;if($<=2)return new ct(Mt,vt);Gt=Math.sqrt($/2)}else{let A=!1;U>Number.EPSILON?Dt>Number.EPSILON&&(A=!0):U<-Number.EPSILON?Dt<-Number.EPSILON&&(A=!0):Math.sign(Wt)===Math.sign(Ht)&&(A=!0),A?(Mt=-Wt,vt=U,Gt=Math.sqrt(ut)):(Mt=U,vt=Wt,Gt=Math.sqrt(ut/2))}return new ct(Mt/Gt,vt/Gt)}const H=[];for(let et=0,lt=N.length,it=lt-1,Mt=et+1;et<lt;et++,it++,Mt++)it===lt&&(it=0),Mt===lt&&(Mt=0),H[et]=q(N[et],N[it],N[Mt]);const Z=[];let tt,dt=H.concat();for(let et=0,lt=O;et<lt;et++){const it=w[et];tt=[];for(let Mt=0,vt=it.length,Gt=vt-1,U=Mt+1;Mt<vt;Mt++,Gt++,U++)Gt===vt&&(Gt=0),U===vt&&(U=0),tt[Mt]=q(it[Mt],it[Gt],it[U]);Z.push(tt),dt=dt.concat(tt)}let It;if(p===0)It=jn.triangulateShape(N,w);else{const et=[],lt=[];for(let it=0;it<p;it++){const Mt=it/p,vt=h*Math.cos(Mt*Math.PI/2),Gt=g*Math.sin(Mt*Math.PI/2)+x;for(let U=0,Wt=N.length;U<Wt;U++){const Dt=z(N[U],H[U],Gt);bt(Dt.x,Dt.y,-vt),Mt===0&&et.push(Dt)}for(let U=0,Wt=O;U<Wt;U++){const Dt=w[U];tt=Z[U];const Ht=[];for(let ut=0,ce=Dt.length;ut<ce;ut++){const A=z(Dt[ut],tt[ut],Gt);bt(A.x,A.y,-vt),Mt===0&&Ht.push(A)}Mt===0&&lt.push(Ht)}}It=jn.triangulateShape(et,lt)}const zt=It.length,yt=g+x;for(let et=0;et<F;et++){const lt=d?z(D[et],dt[et],yt):D[et];S?(C.copy(R.normals[0]).multiplyScalar(lt.x),E.copy(R.binormals[0]).multiplyScalar(lt.y),y.copy(v[0]).add(C).add(E),bt(y.x,y.y,y.z)):bt(lt.x,lt.y,0)}for(let et=1;et<=u;et++)for(let lt=0;lt<F;lt++){const it=d?z(D[lt],dt[lt],yt):D[lt];S?(C.copy(R.normals[et]).multiplyScalar(it.x),E.copy(R.binormals[et]).multiplyScalar(it.y),y.copy(v[et]).add(C).add(E),bt(y.x,y.y,y.z)):bt(it.x,it.y,f/u*et)}for(let et=p-1;et>=0;et--){const lt=et/p,it=h*Math.cos(lt*Math.PI/2),Mt=g*Math.sin(lt*Math.PI/2)+x;for(let vt=0,Gt=N.length;vt<Gt;vt++){const U=z(N[vt],H[vt],Mt);bt(U.x,U.y,f+it)}for(let vt=0,Gt=w.length;vt<Gt;vt++){const U=w[vt];tt=Z[vt];for(let Wt=0,Dt=U.length;Wt<Dt;Wt++){const Ht=z(U[Wt],tt[Wt],Mt);S?bt(Ht.x,Ht.y+v[u-1].y,v[u-1].x+it):bt(Ht.x,Ht.y,f+it)}}}j(),ht();function j(){const et=s.length/3;if(d){let lt=0,it=F*lt;for(let Mt=0;Mt<zt;Mt++){const vt=It[Mt];Nt(vt[2]+it,vt[1]+it,vt[0]+it)}lt=u+p*2,it=F*lt;for(let Mt=0;Mt<zt;Mt++){const vt=It[Mt];Nt(vt[0]+it,vt[1]+it,vt[2]+it)}}else{for(let lt=0;lt<zt;lt++){const it=It[lt];Nt(it[2],it[1],it[0])}for(let lt=0;lt<zt;lt++){const it=It[lt];Nt(it[0]+F*u,it[1]+F*u,it[2]+F*u)}}n.addGroup(et,s.length/3-et,0)}function ht(){const et=s.length/3;let lt=0;ot(N,lt),lt+=N.length;for(let it=0,Mt=w.length;it<Mt;it++){const vt=w[it];ot(vt,lt),lt+=vt.length}n.addGroup(et,s.length/3-et,1)}function ot(et,lt){let it=et.length;for(;--it>=0;){const Mt=it;let vt=it-1;vt<0&&(vt=et.length-1);for(let Gt=0,U=u+p*2;Gt<U;Gt++){const Wt=F*Gt,Dt=F*(Gt+1),Ht=lt+Mt+Wt,ut=lt+vt+Wt,ce=lt+vt+Dt,A=lt+Mt+Dt;Ut(Ht,ut,ce,A)}}}function bt(et,lt,it){l.push(et),l.push(lt),l.push(it)}function Nt(et,lt,it){Jt(et),Jt(lt),Jt(it);const Mt=s.length/3,vt=_.generateTopUV(n,s,Mt-3,Mt-2,Mt-1);Vt(vt[0]),Vt(vt[1]),Vt(vt[2])}function Ut(et,lt,it,Mt){Jt(et),Jt(lt),Jt(Mt),Jt(lt),Jt(it),Jt(Mt);const vt=s.length/3,Gt=_.generateSideWallUV(n,s,vt-6,vt-3,vt-2,vt-1);Vt(Gt[0]),Vt(Gt[1]),Vt(Gt[3]),Vt(Gt[1]),Vt(Gt[2]),Vt(Gt[3])}function Jt(et){s.push(l[et*3+0]),s.push(l[et*3+1]),s.push(l[et*3+2])}function Vt(et){r.push(et.x),r.push(et.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return zd(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Ta[s.type]().fromJSON(s)),new fi(n,t.options)}}const Bd={generateTopUV:function(i,t,e,n,s){const r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],u=t[s*3+1];return[new ct(r,o),new ct(a,l),new ct(c,u)]},generateSideWallUV:function(i,t,e,n,s,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],u=t[n*3+1],f=t[n*3+2],d=t[s*3],h=t[s*3+1],g=t[s*3+2],x=t[r*3],p=t[r*3+1],m=t[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new ct(o,1-l),new ct(c,1-f),new ct(d,1-g),new ct(x,1-m)]:[new ct(a,1-l),new ct(u,1-f),new ct(h,1-g),new ct(p,1-m)]}};function zd(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Ji extends qa{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ji(t.radius,t.detail)}}class Bs extends ie{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,f=t/a,d=e/l,h=[],g=[],x=[],p=[];for(let m=0;m<u;m++){const _=m*d-o;for(let v=0;v<c;v++){const S=v*f-r;g.push(S,-_,0),x.push(0,0,1),p.push(v/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let _=0;_<a;_++){const v=_+c*m,S=_+c*(m+1),R=_+1+c*(m+1),E=_+1+c*m;h.push(v,S,E),h.push(S,R,E)}this.setIndex(h),this.setAttribute("position",new ne(g,3)),this.setAttribute("normal",new ne(x,3)),this.setAttribute("uv",new ne(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bs(t.width,t.height,t.widthSegments,t.heightSegments)}}class $a extends ie{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],l=[],c=[],u=[];let f=t;const d=(e-t)/s,h=new I,g=new ct;for(let x=0;x<=s;x++){for(let p=0;p<=n;p++){const m=r+p/n*o;h.x=f*Math.cos(m),h.y=f*Math.sin(m),l.push(h.x,h.y,h.z),c.push(0,0,1),g.x=(h.x/e+1)/2,g.y=(h.y/e+1)/2,u.push(g.x,g.y)}f+=d}for(let x=0;x<s;x++){const p=x*(n+1);for(let m=0;m<n;m++){const _=m+p,v=_,S=_+n+1,R=_+n+2,E=_+1;a.push(v,S,E),a.push(S,R,E)}}this.setIndex(a),this.setAttribute("position",new ne(l,3)),this.setAttribute("normal",new ne(c,3)),this.setAttribute("uv",new ne(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $a(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Fr extends ie{constructor(t=new An([new ct(0,.5),new ct(-.5,-.5),new ct(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],r=[],o=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let u=0;u<t.length;u++)c(t[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new ne(s,3)),this.setAttribute("normal",new ne(r,3)),this.setAttribute("uv",new ne(o,2));function c(u){const f=s.length/3,d=u.extractPoints(e);let h=d.shape;const g=d.holes;jn.isClockWise(h)===!1&&(h=h.reverse());for(let p=0,m=g.length;p<m;p++){const _=g[p];jn.isClockWise(_)===!0&&(g[p]=_.reverse())}const x=jn.triangulateShape(h,g);for(let p=0,m=g.length;p<m;p++){const _=g[p];h=h.concat(_)}for(let p=0,m=h.length;p<m;p++){const _=h[p];s.push(_.x,_.y,0),r.push(0,0,1),o.push(_.x,_.y)}for(let p=0,m=x.length;p<m;p++){const _=x[p],v=_[0]+f,S=_[1]+f,R=_[2]+f;n.push(v,S,R),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return kd(e,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];n.push(o)}return new Fr(n,t.curveSegments)}}function kd(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class Ka extends ie{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new I,d=new I,h=[],g=[],x=[],p=[];for(let m=0;m<=n;m++){const _=[],v=m/n;let S=0;m===0&&o===0?S=.5/e:m===n&&l===Math.PI&&(S=-.5/e);for(let R=0;R<=e;R++){const E=R/e;f.x=-t*Math.cos(s+E*r)*Math.sin(o+v*a),f.y=t*Math.cos(o+v*a),f.z=t*Math.sin(s+E*r)*Math.sin(o+v*a),g.push(f.x,f.y,f.z),d.copy(f).normalize(),x.push(d.x,d.y,d.z),p.push(E+S,1-v),_.push(c++)}u.push(_)}for(let m=0;m<n;m++)for(let _=0;_<e;_++){const v=u[m][_+1],S=u[m][_],R=u[m+1][_],E=u[m+1][_+1];(m!==0||o>0)&&h.push(v,S,E),(m!==n-1||l<Math.PI)&&h.push(S,R,E)}this.setIndex(h),this.setAttribute("position",new ne(g,3)),this.setAttribute("normal",new ne(x,3)),this.setAttribute("uv",new ne(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ka(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ai extends ie{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);const l=[],c=[],u=[],f=[],d=new I,h=new I,g=new I;for(let x=0;x<=n;x++){const p=o+x/n*a;for(let m=0;m<=s;m++){const _=m/s*r;h.x=(t+e*Math.cos(p))*Math.cos(_),h.y=(t+e*Math.cos(p))*Math.sin(_),h.z=e*Math.sin(p),c.push(h.x,h.y,h.z),d.x=t*Math.cos(_),d.y=t*Math.sin(_),g.subVectors(h,d).normalize(),u.push(g.x,g.y,g.z),f.push(m/s),f.push(x/n)}}for(let x=1;x<=n;x++)for(let p=1;p<=s;p++){const m=(s+1)*x+p-1,_=(s+1)*(x-1)+p-1,v=(s+1)*(x-1)+p,S=(s+1)*x+p;l.push(m,_,S),l.push(_,v,S)}this.setIndex(l),this.setAttribute("position",new ne(c,3)),this.setAttribute("normal",new ne(u,3)),this.setAttribute("uv",new ne(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ai(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}function ls(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];if(Yl(s))s.isRenderTargetTexture?(kt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Yl(s[0])){const r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Qe(i){const t={};for(let e=0;e<i.length;e++){const n=ls(i[e]);for(const s in n)t[s]=n[s]}return t}function Yl(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Vd(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function vh(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:re.workingColorSpace}const Gd={clone:ls,merge:Qe};var Hd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mn extends hs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hd,this.fragmentShader=Wd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ls(t.uniforms),this.uniformsGroups=Vd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Xd extends Mn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class hi extends hs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ee(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sa,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Yd extends hs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class qd extends hs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class ql extends rn{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}const jl={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(Zl(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!Zl(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Zl(i){try{const t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class jd{constructor(t,e,n){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=c.length;f<d;f+=2){const h=c[f],g=c[f+1];if(h.global&&(h.lastIndex=0),h.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Zd=new jd;class Ja{constructor(t){this.manager=t!==void 0?t:Zd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}Ja.DEFAULT_MATERIAL_NAME="__DEFAULT";const Wn={};class $d extends Error{constructor(t,e){super(t),this.response=e}}class Kd extends Ja{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=jl.get(`file:${t}`);if(r!==void 0){this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0);return}if(Wn[t]!==void 0){Wn[t].push({onLoad:e,onProgress:n,onError:s});return}Wn[t]=[],Wn[t].push({onLoad:e,onProgress:n,onError:s});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&kt("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Wn[t],f=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),h=d?parseInt(d):0,g=h!==0;let x=0;const p=new ReadableStream({start(m){_();function _(){f.read().then(({done:v,value:S})=>{if(v)m.close();else{x+=S.byteLength;const R=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:h});for(let E=0,C=u.length;E<C;E++){const y=u[E];y.onProgress&&y.onProgress(R)}m.enqueue(S),_()}},v=>{m.error(v)})}}});return new Response(p)}else throw new $d(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),d=f&&f[1]?f[1].toLowerCase():void 0,h=new TextDecoder(d);return c.arrayBuffer().then(g=>h.decode(g))}}}).then(c=>{jl.add(`file:${t}`,c);const u=Wn[t];delete Wn[t];for(let f=0,d=u.length;f<d;f++){const h=u[f];h.onLoad&&h.onLoad(c)}}).catch(c=>{const u=Wn[t];if(u===void 0)throw this.manager.itemError(t),c;delete Wn[t];for(let f=0,d=u.length;f<d;f++){const h=u[f];h.onError&&h.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class yh extends Ue{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ee(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}const wo=new ye,$l=new I,Kl=new I;class Jd{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ct(512,512),this.mapType=hn,this.map=null,this.mapPass=null,this.matrix=new ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ya,this._frameExtents=new ct(1,1),this._viewportCount=1,this._viewports=[new we(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;$l.setFromMatrixPosition(t.matrixWorld),e.position.copy($l),Kl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Kl),e.updateMatrixWorld(),wo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wo,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===Ls||e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(wo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const ur=new I,dr=new He,bn=new I;class Mh extends Ue{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ye,this.projectionMatrix=new ye,this.projectionMatrixInverse=new ye,this.coordinateSystem=Dn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ur,dr,bn),bn.x===1&&bn.y===1&&bn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ur,dr,bn.set(1,1,1)).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorld.decompose(ur,dr,bn),bn.x===1&&bn.y===1&&bn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ur,dr,bn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ui=new I,Jl=new ct,Ql=new ct;class pn extends Mh{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=wa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(br*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return wa*2*Math.atan(Math.tan(br*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ui.x,ui.y).multiplyScalar(-t/ui.z),ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ui.x,ui.y).multiplyScalar(-t/ui.z)}getViewSize(t,e){return this.getViewBounds(t,Jl,Ql),e.subVectors(Ql,Jl)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(br*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Gr extends Mh{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Qd extends Jd{constructor(){super(new Gr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class tc extends yh{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ue.DEFAULT_UP),this.updateMatrix(),this.target=new Ue,this.shadow=new Qd}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class tf extends yh{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class ef extends ie{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}class nf extends Ja{constructor(t){super(t)}load(t,e,n,s){const r=this,o=new Kd(r.manager);o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(t,function(a){try{e(r.parse(JSON.parse(a)))}catch(l){s?s(l):se(l),r.manager.itemError(t)}},n,s)}parse(t){const e={},n={};function s(h,g){if(e[g]!==void 0)return e[g];const p=h.interleavedBuffers[g],m=r(h,p.buffer),_=Hs(p.type,m),v=new Ku(_,p.stride);return v.uuid=p.uuid,e[g]=v,v}function r(h,g){if(n[g]!==void 0)return n[g];const p=h.arrayBuffers[g],m=new Uint32Array(p).buffer;return n[g]=m,m}const o=t.isInstancedBufferGeometry?new ef:new ie,a=t.data.index;if(a!==void 0){const h=Hs(a.type,a.array);o.setIndex(new en(h,1))}const l=t.data.attributes;for(const h in l){const g=l[h];let x;if(g.isInterleavedBufferAttribute){const p=s(t.data,g.data);x=new Lr(p,g.itemSize,g.offset,g.normalized)}else{const p=Hs(g.type,g.array),m=g.isInstancedBufferAttribute?ed:en;x=new m(p,g.itemSize,g.normalized)}g.name!==void 0&&(x.name=g.name),g.usage!==void 0&&x.setUsage(g.usage),o.setAttribute(h,x)}const c=t.data.morphAttributes;if(c)for(const h in c){const g=c[h],x=[];for(let p=0,m=g.length;p<m;p++){const _=g[p];let v;if(_.isInterleavedBufferAttribute){const S=s(t.data,_.data);v=new Lr(S,_.itemSize,_.offset,_.normalized)}else{const S=Hs(_.type,_.array);v=new en(S,_.itemSize,_.normalized)}_.name!==void 0&&(v.name=_.name),x.push(v)}o.morphAttributes[h]=x}t.data.morphTargetsRelative&&(o.morphTargetsRelative=!0);const f=t.data.groups||t.data.drawcalls||t.data.offsets;if(f!==void 0)for(let h=0,g=f.length;h!==g;++h){const x=f[h];o.addGroup(x.start,x.count,x.materialIndex)}const d=t.data.boundingSphere;return d!==void 0&&(o.boundingSphere=new Os().fromJSON(d)),t.name&&(o.name=t.name),t.userData&&(o.userData=t.userData),o}}const ji=-90,Zi=1;class sf extends Ue{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new pn(ji,Zi,t,e);s.layers=this.layers,this.add(s);const r=new pn(ji,Zi,t,e);r.layers=this.layers,this.add(r);const o=new pn(ji,Zi,t,e);o.layers=this.layers,this.add(o);const a=new pn(ji,Zi,t,e);a.layers=this.layers,this.add(a);const l=new pn(ji,Zi,t,e);l.layers=this.layers,this.add(l);const c=new pn(ji,Zi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===Dn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ls)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),h=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(f,d,h),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class rf extends pn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const ec=new ye;class Sh{constructor(t,e,n=0,s=1/0){this.ray=new Vr(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Xa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):se("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return ec.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ec),this}intersectObject(t,e=!0,n=[]){return Ra(t,this,n,e),n.sort(nc),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Ra(t[s],this,n,e);return n.sort(nc),n}}function nc(i,t){return i.distance-t.distance}function Ra(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)Ra(r[o],t,e,!0)}}class ic{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=te(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(te(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const rl=class rl{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){const r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};rl.prototype.isMatrix2=!0;let sc=rl;class Ca extends rd{constructor(t=10,e=10,n=4473924,s=8947848){n=new ee(n),s=new ee(s);const r=e/2,o=t/e,a=t/2,l=[],c=[];for(let d=0,h=0,g=-a;d<=e;d++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const x=d===r?n:s;x.toArray(c,h),h+=3,x.toArray(c,h),h+=3,x.toArray(c,h),h+=3,x.toArray(c,h),h+=3}const u=new ie;u.setAttribute("position",new ne(l,3)),u.setAttribute("color",new ne(c,3));const f=new rn({vertexColors:!0,toneMapped:!1});super(u,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Eh extends xi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){kt("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function rc(i,t,e,n){const s=of(n);switch(e){case eh:return i*t;case ih:return i*t/s.components*s.byteLength;case za:return i*t/s.components*s.byteLength;case Li:return i*t*2/s.components*s.byteLength;case ka:return i*t*2/s.components*s.byteLength;case nh:return i*t*3/s.components*s.byteLength;case yn:return i*t*4/s.components*s.byteLength;case Va:return i*t*4/s.components*s.byteLength;case yr:case Mr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Sr:case Er:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case qo:case Zo:return Math.max(i,16)*Math.max(t,8)/4;case Yo:case jo:return Math.max(i,8)*Math.max(t,8)/2;case $o:case Ko:case Qo:case ta:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Jo:case Ar:case ea:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case na:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ia:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case sa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ra:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case oa:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case aa:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case la:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ca:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ha:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ua:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case da:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case fa:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case pa:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ma:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ga:case _a:case xa:return Math.ceil(i/4)*Math.ceil(t/4)*16;case va:case ya:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Pr:case Ma:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function of(i){switch(i){case hn:case Kc:return{byteLength:1,components:1};case Is:case Jc:case Qn:return{byteLength:2,components:1};case Oa:case Ba:return{byteLength:2,components:4};case Fn:case Fa:case In:return{byteLength:4,components:1};case Qc:case th:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ua}}));typeof window<"u"&&(window.__THREE__?kt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ua);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function bh(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function af(i){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,f=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),a.onUploadCallback();let h;if(c instanceof Float32Array)h=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?h=i.HALF_FLOAT:h=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=i.SHORT;else if(c instanceof Uint32Array)h=i.UNSIGNED_INT;else if(c instanceof Int32Array)h=i.INT;else if(c instanceof Int8Array)h=i.BYTE;else if(c instanceof Uint8Array)h=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){const u=l.array,f=l.updateRanges;if(i.bindBuffer(c,a),f.length===0)i.bufferSubData(c,0,u);else{f.sort((h,g)=>h.start-g.start);let d=0;for(let h=1;h<f.length;h++){const g=f[d],x=f[h];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,f[d]=x)}f.length=d+1;for(let h=0,g=f.length;h<g;h++){const x=f[h];i.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var lf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,hf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,uf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,df=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ff=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,mf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,_f=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,xf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Mf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Sf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ef=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,bf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Tf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Af=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Pf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Rf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Cf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,If=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Df=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Lf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Nf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Uf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ff=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Of=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bf="gl_FragColor = linearToOutputTexel( gl_FragColor );",zf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Vf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Gf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Hf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Xf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Yf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,$f=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Kf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,tp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ep=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,np=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ip=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,op=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ap=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,cp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hp=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,up=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,mp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_p=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,xp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Mp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Sp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ep=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,wp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ap=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Pp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ip=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Dp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Lp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Np=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Up=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Op=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Bp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Vp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Gp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Wp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Xp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Yp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,qp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,jp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Zp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,$p=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Kp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Jp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Qp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,em=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,nm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,im=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,sm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,om=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,am=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const lm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,um=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,mm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,gm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,_m=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,xm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ym=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Mm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Em=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Am=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Rm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Cm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Im=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Lm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Um=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Om=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Bm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,km=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Vm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Kt={alphahash_fragment:lf,alphahash_pars_fragment:cf,alphamap_fragment:hf,alphamap_pars_fragment:uf,alphatest_fragment:df,alphatest_pars_fragment:ff,aomap_fragment:pf,aomap_pars_fragment:mf,batching_pars_vertex:gf,batching_vertex:_f,begin_vertex:xf,beginnormal_vertex:vf,bsdfs:yf,iridescence_fragment:Mf,bumpmap_pars_fragment:Sf,clipping_planes_fragment:Ef,clipping_planes_pars_fragment:bf,clipping_planes_pars_vertex:wf,clipping_planes_vertex:Tf,color_fragment:Af,color_pars_fragment:Pf,color_pars_vertex:Rf,color_vertex:Cf,common:If,cube_uv_reflection_fragment:Df,defaultnormal_vertex:Lf,displacementmap_pars_vertex:Nf,displacementmap_vertex:Uf,emissivemap_fragment:Ff,emissivemap_pars_fragment:Of,colorspace_fragment:Bf,colorspace_pars_fragment:zf,envmap_fragment:kf,envmap_common_pars_fragment:Vf,envmap_pars_fragment:Gf,envmap_pars_vertex:Hf,envmap_physical_pars_fragment:tp,envmap_vertex:Wf,fog_vertex:Xf,fog_pars_vertex:Yf,fog_fragment:qf,fog_pars_fragment:jf,gradientmap_pars_fragment:Zf,lightmap_pars_fragment:$f,lights_lambert_fragment:Kf,lights_lambert_pars_fragment:Jf,lights_pars_begin:Qf,lights_toon_fragment:ep,lights_toon_pars_fragment:np,lights_phong_fragment:ip,lights_phong_pars_fragment:sp,lights_physical_fragment:rp,lights_physical_pars_fragment:op,lights_fragment_begin:ap,lights_fragment_maps:lp,lights_fragment_end:cp,lightprobes_pars_fragment:hp,logdepthbuf_fragment:up,logdepthbuf_pars_fragment:dp,logdepthbuf_pars_vertex:fp,logdepthbuf_vertex:pp,map_fragment:mp,map_pars_fragment:gp,map_particle_fragment:_p,map_particle_pars_fragment:xp,metalnessmap_fragment:vp,metalnessmap_pars_fragment:yp,morphinstance_vertex:Mp,morphcolor_vertex:Sp,morphnormal_vertex:Ep,morphtarget_pars_vertex:bp,morphtarget_vertex:wp,normal_fragment_begin:Tp,normal_fragment_maps:Ap,normal_pars_fragment:Pp,normal_pars_vertex:Rp,normal_vertex:Cp,normalmap_pars_fragment:Ip,clearcoat_normal_fragment_begin:Dp,clearcoat_normal_fragment_maps:Lp,clearcoat_pars_fragment:Np,iridescence_pars_fragment:Up,opaque_fragment:Fp,packing:Op,premultiplied_alpha_fragment:Bp,project_vertex:zp,dithering_fragment:kp,dithering_pars_fragment:Vp,roughnessmap_fragment:Gp,roughnessmap_pars_fragment:Hp,shadowmap_pars_fragment:Wp,shadowmap_pars_vertex:Xp,shadowmap_vertex:Yp,shadowmask_pars_fragment:qp,skinbase_vertex:jp,skinning_pars_vertex:Zp,skinning_vertex:$p,skinnormal_vertex:Kp,specularmap_fragment:Jp,specularmap_pars_fragment:Qp,tonemapping_fragment:tm,tonemapping_pars_fragment:em,transmission_fragment:nm,transmission_pars_fragment:im,uv_pars_fragment:sm,uv_pars_vertex:rm,uv_vertex:om,worldpos_vertex:am,background_vert:lm,background_frag:cm,backgroundCube_vert:hm,backgroundCube_frag:um,cube_vert:dm,cube_frag:fm,depth_vert:pm,depth_frag:mm,distance_vert:gm,distance_frag:_m,equirect_vert:xm,equirect_frag:vm,linedashed_vert:ym,linedashed_frag:Mm,meshbasic_vert:Sm,meshbasic_frag:Em,meshlambert_vert:bm,meshlambert_frag:wm,meshmatcap_vert:Tm,meshmatcap_frag:Am,meshnormal_vert:Pm,meshnormal_frag:Rm,meshphong_vert:Cm,meshphong_frag:Im,meshphysical_vert:Dm,meshphysical_frag:Lm,meshtoon_vert:Nm,meshtoon_frag:Um,points_vert:Fm,points_frag:Om,shadow_vert:Bm,shadow_frag:zm,sprite_vert:km,sprite_frag:Vm},St={common:{diffuse:{value:new ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},envMapRotation:{value:new qt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new I},probesMax:{value:new I},probesResolution:{value:new I}},points:{diffuse:{value:new ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new ee(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},Pn={basic:{uniforms:Qe([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.fog]),vertexShader:Kt.meshbasic_vert,fragmentShader:Kt.meshbasic_frag},lambert:{uniforms:Qe([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new ee(0)},envMapIntensity:{value:1}}]),vertexShader:Kt.meshlambert_vert,fragmentShader:Kt.meshlambert_frag},phong:{uniforms:Qe([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new ee(0)},specular:{value:new ee(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphong_vert,fragmentShader:Kt.meshphong_frag},standard:{uniforms:Qe([St.common,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.roughnessmap,St.metalnessmap,St.fog,St.lights,{emissive:{value:new ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag},toon:{uniforms:Qe([St.common,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.gradientmap,St.fog,St.lights,{emissive:{value:new ee(0)}}]),vertexShader:Kt.meshtoon_vert,fragmentShader:Kt.meshtoon_frag},matcap:{uniforms:Qe([St.common,St.bumpmap,St.normalmap,St.displacementmap,St.fog,{matcap:{value:null}}]),vertexShader:Kt.meshmatcap_vert,fragmentShader:Kt.meshmatcap_frag},points:{uniforms:Qe([St.points,St.fog]),vertexShader:Kt.points_vert,fragmentShader:Kt.points_frag},dashed:{uniforms:Qe([St.common,St.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Kt.linedashed_vert,fragmentShader:Kt.linedashed_frag},depth:{uniforms:Qe([St.common,St.displacementmap]),vertexShader:Kt.depth_vert,fragmentShader:Kt.depth_frag},normal:{uniforms:Qe([St.common,St.bumpmap,St.normalmap,St.displacementmap,{opacity:{value:1}}]),vertexShader:Kt.meshnormal_vert,fragmentShader:Kt.meshnormal_frag},sprite:{uniforms:Qe([St.sprite,St.fog]),vertexShader:Kt.sprite_vert,fragmentShader:Kt.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Kt.background_vert,fragmentShader:Kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qt}},vertexShader:Kt.backgroundCube_vert,fragmentShader:Kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Kt.cube_vert,fragmentShader:Kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Kt.equirect_vert,fragmentShader:Kt.equirect_frag},distance:{uniforms:Qe([St.common,St.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Kt.distance_vert,fragmentShader:Kt.distance_frag},shadow:{uniforms:Qe([St.lights,St.fog,{color:{value:new ee(0)},opacity:{value:1}}]),vertexShader:Kt.shadow_vert,fragmentShader:Kt.shadow_frag}};Pn.physical={uniforms:Qe([Pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new ee(0)},specularColor:{value:new ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag};const fr={r:0,b:0,g:0},Gm=new ye,wh=new qt;wh.set(-1,0,0,0,1,0,0,0,1);function Hm(i,t,e,n,s,r){const o=new ee(0);let a=s===!0?0:1,l,c,u=null,f=0,d=null;function h(_){let v=_.isScene===!0?_.background:null;if(v&&v.isTexture){const S=_.backgroundBlurriness>0;v=t.get(v,S)}return v}function g(_){let v=!1;const S=h(_);S===null?p(o,a):S&&S.isColor&&(p(S,1),v=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?e.buffers.color.setClear(0,0,0,1,r):R==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||v)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(_,v){const S=h(v);S&&(S.isCubeTexture||S.mapping===kr)?(c===void 0&&(c=new at(new De(1,1,1),new Mn({name:"BackgroundCubeMaterial",uniforms:ls(Pn.backgroundCube.uniforms),vertexShader:Pn.backgroundCube.vertexShader,fragmentShader:Pn.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(R,E,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Gm.makeRotationFromEuler(v.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(wh),c.material.toneMapped=re.getTransfer(S.colorSpace)!==he,(u!==S||f!==S.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=S,f=S.version,d=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new at(new Bs(2,2),new Mn({name:"BackgroundMaterial",uniforms:ls(Pn.background.uniforms),vertexShader:Pn.background.vertexShader,fragmentShader:Pn.background.fragmentShader,side:_i,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=re.getTransfer(S.colorSpace)!==he,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||f!==S.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=S,f=S.version,d=i.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function p(_,v){_.getRGB(fr,vh(i)),e.buffers.color.setClear(fr.r,fr.g,fr.b,v,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,v=1){o.set(_),a=v,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(_){a=_,p(o,a)},render:g,addToRenderList:x,dispose:m}}function Wm(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(w,L,B,O,N){let z=!1;const F=f(w,O,B,L);r!==F&&(r=F,c(r.object)),z=h(w,O,B,N),z&&g(w,O,B,N),N!==null&&t.update(N,i.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,S(w,L,B,O),N!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function l(){return i.createVertexArray()}function c(w){return i.bindVertexArray(w)}function u(w){return i.deleteVertexArray(w)}function f(w,L,B,O){const N=O.wireframe===!0;let z=n[L.id];z===void 0&&(z={},n[L.id]=z);const F=w.isInstancedMesh===!0?w.id:0;let q=z[F];q===void 0&&(q={},z[F]=q);let H=q[B.id];H===void 0&&(H={},q[B.id]=H);let Z=H[N];return Z===void 0&&(Z=d(l()),H[N]=Z),Z}function d(w){const L=[],B=[],O=[];for(let N=0;N<e;N++)L[N]=0,B[N]=0,O[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:B,attributeDivisors:O,object:w,attributes:{},index:null}}function h(w,L,B,O){const N=r.attributes,z=L.attributes;let F=0;const q=B.getAttributes();for(const H in q)if(q[H].location>=0){const tt=N[H];let dt=z[H];if(dt===void 0&&(H==="instanceMatrix"&&w.instanceMatrix&&(dt=w.instanceMatrix),H==="instanceColor"&&w.instanceColor&&(dt=w.instanceColor)),tt===void 0||tt.attribute!==dt||dt&&tt.data!==dt.data)return!0;F++}return r.attributesNum!==F||r.index!==O}function g(w,L,B,O){const N={},z=L.attributes;let F=0;const q=B.getAttributes();for(const H in q)if(q[H].location>=0){let tt=z[H];tt===void 0&&(H==="instanceMatrix"&&w.instanceMatrix&&(tt=w.instanceMatrix),H==="instanceColor"&&w.instanceColor&&(tt=w.instanceColor));const dt={};dt.attribute=tt,tt&&tt.data&&(dt.data=tt.data),N[H]=dt,F++}r.attributes=N,r.attributesNum=F,r.index=O}function x(){const w=r.newAttributes;for(let L=0,B=w.length;L<B;L++)w[L]=0}function p(w){m(w,0)}function m(w,L){const B=r.newAttributes,O=r.enabledAttributes,N=r.attributeDivisors;B[w]=1,O[w]===0&&(i.enableVertexAttribArray(w),O[w]=1),N[w]!==L&&(i.vertexAttribDivisor(w,L),N[w]=L)}function _(){const w=r.newAttributes,L=r.enabledAttributes;for(let B=0,O=L.length;B<O;B++)L[B]!==w[B]&&(i.disableVertexAttribArray(B),L[B]=0)}function v(w,L,B,O,N,z,F){F===!0?i.vertexAttribIPointer(w,L,B,N,z):i.vertexAttribPointer(w,L,B,O,N,z)}function S(w,L,B,O){x();const N=O.attributes,z=B.getAttributes(),F=L.defaultAttributeValues;for(const q in z){const H=z[q];if(H.location>=0){let Z=N[q];if(Z===void 0&&(q==="instanceMatrix"&&w.instanceMatrix&&(Z=w.instanceMatrix),q==="instanceColor"&&w.instanceColor&&(Z=w.instanceColor)),Z!==void 0){const tt=Z.normalized,dt=Z.itemSize,It=t.get(Z);if(It===void 0)continue;const zt=It.buffer,yt=It.type,j=It.bytesPerElement,ht=yt===i.INT||yt===i.UNSIGNED_INT||Z.gpuType===Fa;if(Z.isInterleavedBufferAttribute){const ot=Z.data,bt=ot.stride,Nt=Z.offset;if(ot.isInstancedInterleavedBuffer){for(let Ut=0;Ut<H.locationSize;Ut++)m(H.location+Ut,ot.meshPerAttribute);w.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let Ut=0;Ut<H.locationSize;Ut++)p(H.location+Ut);i.bindBuffer(i.ARRAY_BUFFER,zt);for(let Ut=0;Ut<H.locationSize;Ut++)v(H.location+Ut,dt/H.locationSize,yt,tt,bt*j,(Nt+dt/H.locationSize*Ut)*j,ht)}else{if(Z.isInstancedBufferAttribute){for(let ot=0;ot<H.locationSize;ot++)m(H.location+ot,Z.meshPerAttribute);w.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let ot=0;ot<H.locationSize;ot++)p(H.location+ot);i.bindBuffer(i.ARRAY_BUFFER,zt);for(let ot=0;ot<H.locationSize;ot++)v(H.location+ot,dt/H.locationSize,yt,tt,dt*j,dt/H.locationSize*ot*j,ht)}}else if(F!==void 0){const tt=F[q];if(tt!==void 0)switch(tt.length){case 2:i.vertexAttrib2fv(H.location,tt);break;case 3:i.vertexAttrib3fv(H.location,tt);break;case 4:i.vertexAttrib4fv(H.location,tt);break;default:i.vertexAttrib1fv(H.location,tt)}}}}_()}function R(){P();for(const w in n){const L=n[w];for(const B in L){const O=L[B];for(const N in O){const z=O[N];for(const F in z)u(z[F].object),delete z[F];delete O[N]}}delete n[w]}}function E(w){if(n[w.id]===void 0)return;const L=n[w.id];for(const B in L){const O=L[B];for(const N in O){const z=O[N];for(const F in z)u(z[F].object),delete z[F];delete O[N]}}delete n[w.id]}function C(w){for(const L in n){const B=n[L];for(const O in B){const N=B[O];if(N[w.id]===void 0)continue;const z=N[w.id];for(const F in z)u(z[F].object),delete z[F];delete N[w.id]}}}function y(w){for(const L in n){const B=n[L],O=w.isInstancedMesh===!0?w.id:0,N=B[O];if(N!==void 0){for(const z in N){const F=N[z];for(const q in F)u(F[q].object),delete F[q];delete N[z]}delete B[O],Object.keys(B).length===0&&delete n[L]}}}function P(){D(),o=!0,r!==s&&(r=s,c(r.object))}function D(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:D,dispose:R,releaseStatesOfGeometry:E,releaseStatesOfObject:y,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:p,disableUnusedAttributes:_}}function Xm(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),e.update(c,n,u))}function a(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let d=0;for(let h=0;h<u;h++)d+=c[h];e.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Ym(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==yn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const y=C===Qn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==hn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==In&&!y)}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(kt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&d===!1&&kt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:h,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:_,maxVaryings:v,maxFragmentUniforms:S,maxSamples:R,samples:E}}function qm(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Xn,a=new qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const h=f.length!==0||d||n!==0||s;return s=d,n=f.length,h},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){e=u(f,d,0)},this.setState=function(f,d,h){const g=f.clippingPlanes,x=f.clipIntersection,p=f.clipShadows,m=i.get(f);if(!s||g===null||g.length===0||r&&!p)r?u(null):c();else{const _=r?0:n,v=_*4;let S=m.clippingState||null;l.value=S,S=u(g,d,v,h);for(let R=0;R!==v;++R)S[R]=e[R];m.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,d,h,g){const x=f!==null?f.length:0;let p=null;if(x!==0){if(p=l.value,g!==!0||p===null){const m=h+x*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(p===null||p.length<m)&&(p=new Float32Array(m));for(let v=0,S=h;v!==x;++v,S+=4)o.copy(f[v]).applyMatrix4(_,a),o.normal.toArray(p,S),p[S+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,p}}const mi=4,oc=[.125,.215,.35,.446,.526,.582],Pi=20,jm=256,_s=new Gr,ac=new ee;let To=null,Ao=0,Po=0,Ro=!1;const Zm=new I;class lc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){const{size:o=256,position:a=Zm}=r;To=this._renderer.getRenderTarget(),Ao=this._renderer.getActiveCubeFace(),Po=this._renderer.getActiveMipmapLevel(),Ro=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=uc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(To,Ao,Po),this._renderer.xr.enabled=Ro,t.scissorTest=!1,$i(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Di||t.mapping===rs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),To=this._renderer.getRenderTarget(),Ao=this._renderer.getActiveCubeFace(),Po=this._renderer.getActiveMipmapLevel(),Ro=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ke,minFilter:Ke,generateMipmaps:!1,type:Qn,format:yn,colorSpace:Rr,depthBuffer:!1},s=cc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=cc(t,e,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=$m(r)),this._blurMaterial=Jm(r,t,e),this._ggxMaterial=Km(r,t,e)}return s}_compileMaterial(t){const e=new at(new ie,t);this._renderer.compile(e,_s)}_sceneToCubeUV(t,e,n,s,r){const l=new pn(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor(ac),f.toneMapping=Nn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new at(new De,new Ie({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,p=x.material;let m=!1;const _=t.background;_?_.isColor&&(p.color.copy(_),t.background=null,m=!0):(p.color.copy(ac),m=!0);for(let v=0;v<6;v++){const S=v%3;S===0?(l.up.set(0,c[v],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[v],r.y,r.z)):S===1?(l.up.set(0,0,c[v]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[v],r.z)):(l.up.set(0,c[v],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[v]));const R=this._cubeSize;$i(s,S*R,v>2?R:0,R,R),f.setRenderTarget(s),m&&f.render(x,l),f.render(t,l)}f.toneMapping=h,f.autoClear=d,t.background=_}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Di||t.mapping===rs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=uc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hc());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;$i(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,_s)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const l=o.uniforms,c=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),d=0+c*1.25,h=f*d,{_lodMax:g}=this,x=this._sizeLods[n],p=3*x*(n>g-mi?n-g+mi:0),m=4*(this._cubeSize-x);l.envMap.value=t.texture,l.roughness.value=h,l.mipInt.value=g-e,$i(r,p,m,3*x,2*x),s.setRenderTarget(r),s.render(a,_s),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,$i(t,p,m,3*x,2*x),s.setRenderTarget(t),s.render(a,_s)}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&se("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[s];f.material=c;const d=c.uniforms,h=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*h):2*Math.PI/(2*Pi-1),x=r/g,p=isFinite(r)?1+Math.floor(u*x):Pi;p>Pi&&kt(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Pi}`);const m=[];let _=0;for(let C=0;C<Pi;++C){const y=C/x,P=Math.exp(-y*y/2);m.push(P),C===0?_+=P:C<p&&(_+=2*P)}for(let C=0;C<m.length;C++)m[C]=m[C]/_;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;const S=this._sizeLods[s],R=3*S*(s>v-mi?s-v+mi:0),E=4*(this._cubeSize-S);$i(e,R,E,3*S,2*S),l.setRenderTarget(e),l.render(f,_s)}}function $m(i){const t=[],e=[],n=[];let s=i;const r=i-mi+1+oc.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>i-mi?l=oc[o-i+mi-1]:o===0&&(l=0),e.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],h=6,g=6,x=3,p=2,m=1,_=new Float32Array(x*g*h),v=new Float32Array(p*g*h),S=new Float32Array(m*g*h);for(let E=0;E<h;E++){const C=E%3*2/3-1,y=E>2?0:-1,P=[C,y,0,C+2/3,y,0,C+2/3,y+1,0,C,y,0,C+2/3,y+1,0,C,y+1,0];_.set(P,x*g*E),v.set(d,p*g*E);const D=[E,E,E,E,E,E];S.set(D,m*g*E)}const R=new ie;R.setAttribute("position",new en(_,x)),R.setAttribute("uv",new en(v,p)),R.setAttribute("faceIndex",new en(S,m)),n.push(new at(R,null)),s>mi&&s--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function cc(i,t,e){const n=new Un(i,t,e);return n.texture.mapping=kr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function $i(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Km(i,t,e){return new Mn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:jm,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Hr(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function Jm(i,t,e){const n=new Float32Array(Pi),s=new I(0,1,0);return new Mn({name:"SphericalGaussianBlur",defines:{n:Pi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Hr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function hc(){return new Mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function uc(){return new Mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function Hr(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Th extends Un{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new ch(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new De(5,5,5),r=new Mn({name:"CubemapFromEquirect",uniforms:ls(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:on,blending:$n});r.uniforms.tEquirect.value=e;const o=new at(s,r),a=e.minFilter;return e.minFilter===Ri&&(e.minFilter=Ke),new sf(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}function Qm(i){let t=new WeakMap,e=new WeakMap,n=null;function s(d,h=!1){return d==null?null:h?o(d):r(d)}function r(d){if(d&&d.isTexture){const h=d.mapping;if(h===jr||h===Zr)if(t.has(d)){const g=t.get(d).texture;return a(g,d.mapping)}else{const g=d.image;if(g&&g.height>0){const x=new Th(g.height);return x.fromEquirectangularTexture(i,d),t.set(d,x),d.addEventListener("dispose",c),a(x.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){const h=d.mapping,g=h===jr||h===Zr,x=h===Di||h===rs;if(g||x){let p=e.get(d);const m=p!==void 0?p.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return n===null&&(n=new lc(i)),p=g?n.fromEquirectangular(d,p):n.fromCubemap(d,p),p.texture.pmremVersion=d.pmremVersion,e.set(d,p),p.texture;if(p!==void 0)return p.texture;{const _=d.image;return g&&_&&_.height>0||x&&_&&l(_)?(n===null&&(n=new lc(i)),p=g?n.fromEquirectangular(d):n.fromCubemap(d),p.texture.pmremVersion=d.pmremVersion,e.set(d,p),d.addEventListener("dispose",u),p.texture):null}}}return d}function a(d,h){return h===jr?d.mapping=Di:h===Zr&&(d.mapping=rs),d}function l(d){let h=0;const g=6;for(let x=0;x<g;x++)d[x]!==void 0&&h++;return h===g}function c(d){const h=d.target;h.removeEventListener("dispose",c);const g=t.get(h);g!==void 0&&(t.delete(h),g.dispose())}function u(d){const h=d.target;h.removeEventListener("dispose",u);const g=e.get(h);g!==void 0&&(e.delete(h),g.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function tg(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&ba("WebGLRenderer: "+n+" extension not supported."),s}}}function eg(i,t,e,n){const s={},r=new WeakMap;function o(f){const d=f.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete s[d.id];const h=r.get(d);h&&(t.remove(h),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(f,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(f){const d=f.attributes;for(const h in d)t.update(d[h],i.ARRAY_BUFFER)}function c(f){const d=[],h=f.index,g=f.attributes.position;let x=0;if(g===void 0)return;if(h!==null){const _=h.array;x=h.version;for(let v=0,S=_.length;v<S;v+=3){const R=_[v+0],E=_[v+1],C=_[v+2];d.push(R,E,E,C,C,R)}}else{const _=g.array;x=g.version;for(let v=0,S=_.length/3-1;v<S;v+=3){const R=v+0,E=v+1,C=v+2;d.push(R,E,E,C,C,R)}}const p=new(g.count>=65535?lh:ah)(d,1);p.version=x;const m=r.get(f);m&&t.remove(m),r.set(f,p)}function u(f){const d=r.get(f);if(d){const h=f.index;h!==null&&d.version<h.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function ng(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){i.drawElements(n,d,r,f*o),e.update(d,n,1)}function c(f,d,h){h!==0&&(i.drawElementsInstanced(n,d,r,f*o,h),e.update(d,n,h))}function u(f,d,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,h);let x=0;for(let p=0;p<h;p++)x+=d[p];e.update(x,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function ig(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:se("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function sg(i,t,e){const n=new WeakMap,s=new we;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==f){let P=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",P)};d!==void 0&&d.texture.dispose();const h=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let v=0;h===!0&&(v=1),g===!0&&(v=2),x===!0&&(v=3);let S=a.attributes.position.count*v,R=1;S>t.maxTextureSize&&(R=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);const E=new Float32Array(S*R*4*f),C=new rh(E,S,R,f);C.type=In,C.needsUpdate=!0;const y=v*4;for(let D=0;D<f;D++){const w=p[D],L=m[D],B=_[D],O=S*R*4*D;for(let N=0;N<w.count;N++){const z=N*y;h===!0&&(s.fromBufferAttribute(w,N),E[O+z+0]=s.x,E[O+z+1]=s.y,E[O+z+2]=s.z,E[O+z+3]=0),g===!0&&(s.fromBufferAttribute(L,N),E[O+z+4]=s.x,E[O+z+5]=s.y,E[O+z+6]=s.z,E[O+z+7]=0),x===!0&&(s.fromBufferAttribute(B,N),E[O+z+8]=s.x,E[O+z+9]=s.y,E[O+z+10]=s.z,E[O+z+11]=B.itemSize===4?s.w:1)}}d={count:f,texture:C,size:new ct(S,R)},n.set(a,d),a.addEventListener("dispose",P)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let h=0;for(let x=0;x<c.length;x++)h+=c[x];const g=a.morphTargetsRelative?1:1-h;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function rg(i,t,e,n,s){let r=new WeakMap;function o(c){const u=s.render.frame,f=c.geometry,d=t.get(c,f);if(r.get(d)!==u&&(t.update(d),r.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const h=c.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return d}function a(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:o,dispose:a}}const og={[Hc]:"LINEAR_TONE_MAPPING",[Wc]:"REINHARD_TONE_MAPPING",[Xc]:"CINEON_TONE_MAPPING",[Yc]:"ACES_FILMIC_TONE_MAPPING",[jc]:"AGX_TONE_MAPPING",[Zc]:"NEUTRAL_TONE_MAPPING",[qc]:"CUSTOM_TONE_MAPPING"};function ag(i,t,e,n,s){const r=new Un(t,e,{type:i,depthBuffer:n,stencilBuffer:s,depthTexture:n?new os(t,e):void 0}),o=new Un(t,e,{type:Qn,depthBuffer:!1,stencilBuffer:!1}),a=new ie;a.setAttribute("position",new ne([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new ne([0,2,0,0,2,0],2));const l=new Xd({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new at(a,l),u=new Gr(-1,1,1,-1,0,1);let f=null,d=null,h=!1,g,x=null,p=[],m=!1;this.setSize=function(_,v){r.setSize(_,v),o.setSize(_,v);for(let S=0;S<p.length;S++){const R=p[S];R.setSize&&R.setSize(_,v)}},this.setEffects=function(_){p=_,m=p.length>0&&p[0].isRenderPass===!0;const v=r.width,S=r.height;for(let R=0;R<p.length;R++){const E=p[R];E.setSize&&E.setSize(v,S)}},this.begin=function(_,v){if(h||_.toneMapping===Nn&&p.length===0)return!1;if(x=v,v!==null){const S=v.width,R=v.height;(r.width!==S||r.height!==R)&&this.setSize(S,R)}return m===!1&&_.setRenderTarget(r),g=_.toneMapping,_.toneMapping=Nn,!0},this.hasRenderPass=function(){return m},this.end=function(_,v){_.toneMapping=g,h=!0;let S=r,R=o;for(let E=0;E<p.length;E++){const C=p[E];if(C.enabled!==!1&&(C.render(_,R,S,v),C.needsSwap!==!1)){const y=S;S=R,R=y}}if(f!==_.outputColorSpace||d!==_.toneMapping){f=_.outputColorSpace,d=_.toneMapping,l.defines={},re.getTransfer(f)===he&&(l.defines.SRGB_TRANSFER="");const E=og[d];E&&(l.defines[E]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=S.texture,_.setRenderTarget(x),_.render(c,u),x=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){r.depthTexture&&r.depthTexture.dispose(),r.dispose(),o.dispose(),a.dispose(),l.dispose()}}const Ah=new tn,Ia=new os(1,1),Ph=new rh,Rh=new zu,Ch=new ch,dc=[],fc=[],pc=new Float32Array(16),mc=new Float32Array(9),gc=new Float32Array(4);function us(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=dc[s];if(r===void 0&&(r=new Float32Array(s),dc[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function ze(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ke(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Wr(i,t){let e=fc[t];e===void 0&&(e=new Int32Array(t),fc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function lg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function cg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2fv(this.addr,t),ke(e,t)}}function hg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ze(e,t))return;i.uniform3fv(this.addr,t),ke(e,t)}}function ug(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4fv(this.addr,t),ke(e,t)}}function dg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ke(e,t)}else{if(ze(e,n))return;gc.set(n),i.uniformMatrix2fv(this.addr,!1,gc),ke(e,n)}}function fg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ke(e,t)}else{if(ze(e,n))return;mc.set(n),i.uniformMatrix3fv(this.addr,!1,mc),ke(e,n)}}function pg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ke(e,t)}else{if(ze(e,n))return;pc.set(n),i.uniformMatrix4fv(this.addr,!1,pc),ke(e,n)}}function mg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function gg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2iv(this.addr,t),ke(e,t)}}function _g(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;i.uniform3iv(this.addr,t),ke(e,t)}}function xg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4iv(this.addr,t),ke(e,t)}}function vg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function yg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2uiv(this.addr,t),ke(e,t)}}function Mg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;i.uniform3uiv(this.addr,t),ke(e,t)}}function Sg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4uiv(this.addr,t),ke(e,t)}}function Eg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ia.compareFunction=e.isReversedDepthBuffer()?Ha:Ga,r=Ia):r=Ah,e.setTexture2D(t||r,s)}function bg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Rh,s)}function wg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Ch,s)}function Tg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Ph,s)}function Ag(i){switch(i){case 5126:return lg;case 35664:return cg;case 35665:return hg;case 35666:return ug;case 35674:return dg;case 35675:return fg;case 35676:return pg;case 5124:case 35670:return mg;case 35667:case 35671:return gg;case 35668:case 35672:return _g;case 35669:case 35673:return xg;case 5125:return vg;case 36294:return yg;case 36295:return Mg;case 36296:return Sg;case 35678:case 36198:case 36298:case 36306:case 35682:return Eg;case 35679:case 36299:case 36307:return bg;case 35680:case 36300:case 36308:case 36293:return wg;case 36289:case 36303:case 36311:case 36292:return Tg}}function Pg(i,t){i.uniform1fv(this.addr,t)}function Rg(i,t){const e=us(t,this.size,2);i.uniform2fv(this.addr,e)}function Cg(i,t){const e=us(t,this.size,3);i.uniform3fv(this.addr,e)}function Ig(i,t){const e=us(t,this.size,4);i.uniform4fv(this.addr,e)}function Dg(i,t){const e=us(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Lg(i,t){const e=us(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Ng(i,t){const e=us(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Ug(i,t){i.uniform1iv(this.addr,t)}function Fg(i,t){i.uniform2iv(this.addr,t)}function Og(i,t){i.uniform3iv(this.addr,t)}function Bg(i,t){i.uniform4iv(this.addr,t)}function zg(i,t){i.uniform1uiv(this.addr,t)}function kg(i,t){i.uniform2uiv(this.addr,t)}function Vg(i,t){i.uniform3uiv(this.addr,t)}function Gg(i,t){i.uniform4uiv(this.addr,t)}function Hg(i,t,e){const n=this.cache,s=t.length,r=Wr(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),ke(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Ia:o=Ah;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function Wg(i,t,e){const n=this.cache,s=t.length,r=Wr(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),ke(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Rh,r[o])}function Xg(i,t,e){const n=this.cache,s=t.length,r=Wr(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),ke(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Ch,r[o])}function Yg(i,t,e){const n=this.cache,s=t.length,r=Wr(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),ke(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Ph,r[o])}function qg(i){switch(i){case 5126:return Pg;case 35664:return Rg;case 35665:return Cg;case 35666:return Ig;case 35674:return Dg;case 35675:return Lg;case 35676:return Ng;case 5124:case 35670:return Ug;case 35667:case 35671:return Fg;case 35668:case 35672:return Og;case 35669:case 35673:return Bg;case 5125:return zg;case 36294:return kg;case 36295:return Vg;case 36296:return Gg;case 35678:case 36198:case 36298:case 36306:case 35682:return Hg;case 35679:case 36299:case 36307:return Wg;case 35680:case 36300:case 36308:case 36293:return Xg;case 36289:case 36303:case 36311:case 36292:return Yg}}class jg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Ag(e.type)}}class Zg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=qg(e.type)}}class $g{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Co=/(\w+)(\])?(\[|\.)?/g;function _c(i,t){i.seq.push(t),i.map[t.id]=t}function Kg(i,t,e){const n=i.name,s=n.length;for(Co.lastIndex=0;;){const r=Co.exec(n),o=Co.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){_c(e,c===void 0?new jg(a,i,t):new Zg(a,i,t));break}else{let f=e.map[a];f===void 0&&(f=new $g(a),_c(e,f)),e=f}}}class wr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);Kg(a,l,this)}const s=[],r=[];for(const o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function xc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Jg=37297;let Qg=0;function t0(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const vc=new qt;function e0(i){re._getMatrix(vc,re.workingColorSpace,i);const t=`mat3( ${vc.elements.map(e=>e.toFixed(4))} )`;switch(re.getTransfer(i)){case Cr:return[t,"LinearTransferOETF"];case he:return[t,"sRGBTransferOETF"];default:return kt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function yc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+t0(i.getShaderSource(t),a)}else return r}function n0(i,t){const e=e0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const i0={[Hc]:"Linear",[Wc]:"Reinhard",[Xc]:"Cineon",[Yc]:"ACESFilmic",[jc]:"AgX",[Zc]:"Neutral",[qc]:"Custom"};function s0(i,t){const e=i0[t];return e===void 0?(kt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const pr=new I;function r0(){re.getLuminanceCoefficients(pr);const i=pr.x.toFixed(4),t=pr.y.toFixed(4),e=pr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function o0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(bs).join(`
`)}function a0(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function l0(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function bs(i){return i!==""}function Mc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Sc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const c0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Da(i){return i.replace(c0,u0)}const h0=new Map;function u0(i,t){let e=Kt[t];if(e===void 0){const n=h0.get(t);if(n!==void 0)e=Kt[n],kt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Da(e)}const d0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ec(i){return i.replace(d0,f0)}function f0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function bc(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const p0={[vr]:"SHADOWMAP_TYPE_PCF",[Ss]:"SHADOWMAP_TYPE_VSM"};function m0(i){return p0[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const g0={[Di]:"ENVMAP_TYPE_CUBE",[rs]:"ENVMAP_TYPE_CUBE",[kr]:"ENVMAP_TYPE_CUBE_UV"};function _0(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":g0[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const x0={[rs]:"ENVMAP_MODE_REFRACTION"};function v0(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":x0[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const y0={[Gc]:"ENVMAP_BLENDING_MULTIPLY",[gu]:"ENVMAP_BLENDING_MIX",[_u]:"ENVMAP_BLENDING_ADD"};function M0(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":y0[i.combine]||"ENVMAP_BLENDING_NONE"}function S0(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function E0(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=m0(e),c=_0(e),u=v0(e),f=M0(e),d=S0(e),h=o0(e),g=a0(r),x=s.createProgram();let p,m,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(bs).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(bs).join(`
`),m.length>0&&(m+=`
`)):(p=[bc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bs).join(`
`),m=[bc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Nn?"#define TONE_MAPPING":"",e.toneMapping!==Nn?Kt.tonemapping_pars_fragment:"",e.toneMapping!==Nn?s0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Kt.colorspace_pars_fragment,n0("linearToOutputTexel",e.outputColorSpace),r0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(bs).join(`
`)),o=Da(o),o=Mc(o,e),o=Sc(o,e),a=Da(a),a=Mc(a,e),a=Sc(a,e),o=Ec(o),a=Ec(a),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===vl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===vl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const v=_+p+o,S=_+m+a,R=xc(s,s.VERTEX_SHADER,v),E=xc(s,s.FRAGMENT_SHADER,S);s.attachShader(x,R),s.attachShader(x,E),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function C(w){if(i.debug.checkShaderErrors){const L=s.getProgramInfoLog(x)||"",B=s.getShaderInfoLog(R)||"",O=s.getShaderInfoLog(E)||"",N=L.trim(),z=B.trim(),F=O.trim();let q=!0,H=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,R,E);else{const Z=yc(s,R,"vertex"),tt=yc(s,E,"fragment");se("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+N+`
`+Z+`
`+tt)}else N!==""?kt("WebGLProgram: Program Info Log:",N):(z===""||F==="")&&(H=!1);H&&(w.diagnostics={runnable:q,programLog:N,vertexShader:{log:z,prefix:p},fragmentShader:{log:F,prefix:m}})}s.deleteShader(R),s.deleteShader(E),y=new wr(s,x),P=l0(s,x)}let y;this.getUniforms=function(){return y===void 0&&C(this),y};let P;this.getAttributes=function(){return P===void 0&&C(this),P};let D=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(x,Jg)),D},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Qg++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=R,this.fragmentShader=E,this}let b0=0;class w0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new T0(t),e.set(t,n)),n}}class T0{constructor(t){this.id=b0++,this.code=t,this.usedTimes=0}}function A0(i){return i===Li||i===Ar||i===Pr}function P0(i,t,e,n,s,r){const o=new Xa,a=new w0,l=new Set,c=[],u=new Map,f=n.logarithmicDepthBuffer;let d=n.precision;const h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return l.add(y),y===0?"uv":`uv${y}`}function x(y,P,D,w,L,B){const O=w.fog,N=L.geometry,z=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?w.environment:null,F=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,q=t.get(y.envMap||z,F),H=q&&q.mapping===kr?q.image.height:null,Z=h[y.type];y.precision!==null&&(d=n.getMaxPrecision(y.precision),d!==y.precision&&kt("WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));const tt=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,dt=tt!==void 0?tt.length:0;let It=0;N.morphAttributes.position!==void 0&&(It=1),N.morphAttributes.normal!==void 0&&(It=2),N.morphAttributes.color!==void 0&&(It=3);let zt,yt,j,ht;if(Z){const jt=Pn[Z];zt=jt.vertexShader,yt=jt.fragmentShader}else zt=y.vertexShader,yt=y.fragmentShader,a.update(y),j=a.getVertexShaderID(y),ht=a.getFragmentShaderID(y);const ot=i.getRenderTarget(),bt=i.state.buffers.depth.getReversed(),Nt=L.isInstancedMesh===!0,Ut=L.isBatchedMesh===!0,Jt=!!y.map,Vt=!!y.matcap,et=!!q,lt=!!y.aoMap,it=!!y.lightMap,Mt=!!y.bumpMap,vt=!!y.normalMap,Gt=!!y.displacementMap,U=!!y.emissiveMap,Wt=!!y.metalnessMap,Dt=!!y.roughnessMap,Ht=y.anisotropy>0,ut=y.clearcoat>0,ce=y.dispersion>0,A=y.iridescence>0,b=y.sheen>0,G=y.transmission>0,J=Ht&&!!y.anisotropyMap,st=ut&&!!y.clearcoatMap,ft=ut&&!!y.clearcoatNormalMap,gt=ut&&!!y.clearcoatRoughnessMap,$=A&&!!y.iridescenceMap,Q=A&&!!y.iridescenceThicknessMap,Tt=b&&!!y.sheenColorMap,Rt=b&&!!y.sheenRoughnessMap,_t=!!y.specularMap,pt=!!y.specularColorMap,Xt=!!y.specularIntensityMap,$t=G&&!!y.transmissionMap,le=G&&!!y.thicknessMap,k=!!y.gradientMap,mt=!!y.alphaMap,K=y.alphaTest>0,At=!!y.alphaHash,xt=!!y.extensions;let rt=Nn;y.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(rt=i.toneMapping);const Ft={shaderID:Z,shaderType:y.type,shaderName:y.name,vertexShader:zt,fragmentShader:yt,defines:y.defines,customVertexShaderID:j,customFragmentShaderID:ht,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:Ut,batchingColor:Ut&&L._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&L.instanceColor!==null,instancingMorph:Nt&&L.morphTexture!==null,outputColorSpace:ot===null?i.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:re.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Jt,matcap:Vt,envMap:et,envMapMode:et&&q.mapping,envMapCubeUVHeight:H,aoMap:lt,lightMap:it,bumpMap:Mt,normalMap:vt,displacementMap:Gt,emissiveMap:U,normalMapObjectSpace:vt&&y.normalMapType===yu,normalMapTangentSpace:vt&&y.normalMapType===Sa,packedNormalMap:vt&&y.normalMapType===Sa&&A0(y.normalMap.format),metalnessMap:Wt,roughnessMap:Dt,anisotropy:Ht,anisotropyMap:J,clearcoat:ut,clearcoatMap:st,clearcoatNormalMap:ft,clearcoatRoughnessMap:gt,dispersion:ce,iridescence:A,iridescenceMap:$,iridescenceThicknessMap:Q,sheen:b,sheenColorMap:Tt,sheenRoughnessMap:Rt,specularMap:_t,specularColorMap:pt,specularIntensityMap:Xt,transmission:G,transmissionMap:$t,thicknessMap:le,gradientMap:k,opaque:y.transparent===!1&&y.blending===es&&y.alphaToCoverage===!1,alphaMap:mt,alphaTest:K,alphaHash:At,combine:y.combine,mapUv:Jt&&g(y.map.channel),aoMapUv:lt&&g(y.aoMap.channel),lightMapUv:it&&g(y.lightMap.channel),bumpMapUv:Mt&&g(y.bumpMap.channel),normalMapUv:vt&&g(y.normalMap.channel),displacementMapUv:Gt&&g(y.displacementMap.channel),emissiveMapUv:U&&g(y.emissiveMap.channel),metalnessMapUv:Wt&&g(y.metalnessMap.channel),roughnessMapUv:Dt&&g(y.roughnessMap.channel),anisotropyMapUv:J&&g(y.anisotropyMap.channel),clearcoatMapUv:st&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:ft&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:gt&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:$&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:Tt&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:Rt&&g(y.sheenRoughnessMap.channel),specularMapUv:_t&&g(y.specularMap.channel),specularColorMapUv:pt&&g(y.specularColorMap.channel),specularIntensityMapUv:Xt&&g(y.specularIntensityMap.channel),transmissionMapUv:$t&&g(y.transmissionMap.channel),thicknessMapUv:le&&g(y.thicknessMap.channel),alphaMapUv:mt&&g(y.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(vt||Ht),vertexNormals:!!N.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!N.attributes.uv&&(Jt||mt),fog:!!O,useFog:y.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||N.attributes.normal===void 0&&vt===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:bt,skinning:L.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:dt,morphTextureStride:It,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numLightProbeGrids:B.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:rt,decodeVideoTexture:Jt&&y.map.isVideoTexture===!0&&re.getTransfer(y.map.colorSpace)===he,decodeVideoTextureEmissive:U&&y.emissiveMap.isVideoTexture===!0&&re.getTransfer(y.emissiveMap.colorSpace)===he,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===We,flipSided:y.side===on,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:xt&&y.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xt&&y.extensions.multiDraw===!0||Ut)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ft.vertexUv1s=l.has(1),Ft.vertexUv2s=l.has(2),Ft.vertexUv3s=l.has(3),l.clear(),Ft}function p(y){const P=[];if(y.shaderID?P.push(y.shaderID):(P.push(y.customVertexShaderID),P.push(y.customFragmentShaderID)),y.defines!==void 0)for(const D in y.defines)P.push(D),P.push(y.defines[D]);return y.isRawShaderMaterial===!1&&(m(P,y),_(P,y),P.push(i.outputColorSpace)),P.push(y.customProgramCacheKey),P.join()}function m(y,P){y.push(P.precision),y.push(P.outputColorSpace),y.push(P.envMapMode),y.push(P.envMapCubeUVHeight),y.push(P.mapUv),y.push(P.alphaMapUv),y.push(P.lightMapUv),y.push(P.aoMapUv),y.push(P.bumpMapUv),y.push(P.normalMapUv),y.push(P.displacementMapUv),y.push(P.emissiveMapUv),y.push(P.metalnessMapUv),y.push(P.roughnessMapUv),y.push(P.anisotropyMapUv),y.push(P.clearcoatMapUv),y.push(P.clearcoatNormalMapUv),y.push(P.clearcoatRoughnessMapUv),y.push(P.iridescenceMapUv),y.push(P.iridescenceThicknessMapUv),y.push(P.sheenColorMapUv),y.push(P.sheenRoughnessMapUv),y.push(P.specularMapUv),y.push(P.specularColorMapUv),y.push(P.specularIntensityMapUv),y.push(P.transmissionMapUv),y.push(P.thicknessMapUv),y.push(P.combine),y.push(P.fogExp2),y.push(P.sizeAttenuation),y.push(P.morphTargetsCount),y.push(P.morphAttributeCount),y.push(P.numDirLights),y.push(P.numPointLights),y.push(P.numSpotLights),y.push(P.numSpotLightMaps),y.push(P.numHemiLights),y.push(P.numRectAreaLights),y.push(P.numDirLightShadows),y.push(P.numPointLightShadows),y.push(P.numSpotLightShadows),y.push(P.numSpotLightShadowsWithMaps),y.push(P.numLightProbes),y.push(P.shadowMapType),y.push(P.toneMapping),y.push(P.numClippingPlanes),y.push(P.numClipIntersection),y.push(P.depthPacking)}function _(y,P){o.disableAll(),P.instancing&&o.enable(0),P.instancingColor&&o.enable(1),P.instancingMorph&&o.enable(2),P.matcap&&o.enable(3),P.envMap&&o.enable(4),P.normalMapObjectSpace&&o.enable(5),P.normalMapTangentSpace&&o.enable(6),P.clearcoat&&o.enable(7),P.iridescence&&o.enable(8),P.alphaTest&&o.enable(9),P.vertexColors&&o.enable(10),P.vertexAlphas&&o.enable(11),P.vertexUv1s&&o.enable(12),P.vertexUv2s&&o.enable(13),P.vertexUv3s&&o.enable(14),P.vertexTangents&&o.enable(15),P.anisotropy&&o.enable(16),P.alphaHash&&o.enable(17),P.batching&&o.enable(18),P.dispersion&&o.enable(19),P.batchingColor&&o.enable(20),P.gradientMap&&o.enable(21),P.packedNormalMap&&o.enable(22),P.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),P.fog&&o.enable(0),P.useFog&&o.enable(1),P.flatShading&&o.enable(2),P.logarithmicDepthBuffer&&o.enable(3),P.reversedDepthBuffer&&o.enable(4),P.skinning&&o.enable(5),P.morphTargets&&o.enable(6),P.morphNormals&&o.enable(7),P.morphColors&&o.enable(8),P.premultipliedAlpha&&o.enable(9),P.shadowMapEnabled&&o.enable(10),P.doubleSided&&o.enable(11),P.flipSided&&o.enable(12),P.useDepthPacking&&o.enable(13),P.dithering&&o.enable(14),P.transmission&&o.enable(15),P.sheen&&o.enable(16),P.opaque&&o.enable(17),P.pointsUvs&&o.enable(18),P.decodeVideoTexture&&o.enable(19),P.decodeVideoTextureEmissive&&o.enable(20),P.alphaToCoverage&&o.enable(21),P.numLightProbeGrids>0&&o.enable(22),y.push(o.mask)}function v(y){const P=h[y.type];let D;if(P){const w=Pn[P];D=Gd.clone(w.uniforms)}else D=y.uniforms;return D}function S(y,P){let D=u.get(P);return D!==void 0?++D.usedTimes:(D=new E0(i,P,y,s),c.push(D),u.set(P,D)),D}function R(y){if(--y.usedTimes===0){const P=c.indexOf(y);c[P]=c[c.length-1],c.pop(),u.delete(y.cacheKey),y.destroy()}}function E(y){a.remove(y)}function C(){a.dispose()}return{getParameters:x,getProgramCacheKey:p,getUniforms:v,acquireProgram:S,releaseProgram:R,releaseShaderCache:E,programs:c,dispose:C}}function R0(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function C0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function wc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Tc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(d){let h=0;return d.isInstancedMesh&&(h+=2),d.isSkinnedMesh&&(h+=1),h}function a(d,h,g,x,p,m){let _=i[t];return _===void 0?(_={id:d.id,object:d,geometry:h,material:g,materialVariant:o(d),groupOrder:x,renderOrder:d.renderOrder,z:p,group:m},i[t]=_):(_.id=d.id,_.object=d,_.geometry=h,_.material=g,_.materialVariant=o(d),_.groupOrder=x,_.renderOrder=d.renderOrder,_.z=p,_.group=m),t++,_}function l(d,h,g,x,p,m){const _=a(d,h,g,x,p,m);g.transmission>0?n.push(_):g.transparent===!0?s.push(_):e.push(_)}function c(d,h,g,x,p,m){const _=a(d,h,g,x,p,m);g.transmission>0?n.unshift(_):g.transparent===!0?s.unshift(_):e.unshift(_)}function u(d,h){e.length>1&&e.sort(d||C0),n.length>1&&n.sort(h||wc),s.length>1&&s.sort(h||wc)}function f(){for(let d=t,h=i.length;d<h;d++){const g=i[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:f,sort:u}}function I0(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Tc,i.set(n,[o])):s>=r.length?(o=new Tc,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function D0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new ee};break;case"SpotLight":e={position:new I,direction:new I,color:new ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new ee,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new ee,groundColor:new ee};break;case"RectAreaLight":e={color:new ee,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function L0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let N0=0;function U0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function F0(i){const t=new D0,e=L0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);const s=new I,r=new ye,o=new ye;function a(c){let u=0,f=0,d=0;for(let P=0;P<9;P++)n.probe[P].set(0,0,0);let h=0,g=0,x=0,p=0,m=0,_=0,v=0,S=0,R=0,E=0,C=0;c.sort(U0);for(let P=0,D=c.length;P<D;P++){const w=c[P],L=w.color,B=w.intensity,O=w.distance;let N=null;if(w.shadow&&w.shadow.map&&(w.shadow.map.texture.format===Li?N=w.shadow.map.texture:N=w.shadow.map.depthTexture||w.shadow.map.texture),w.isAmbientLight)u+=L.r*B,f+=L.g*B,d+=L.b*B;else if(w.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(w.sh.coefficients[z],B);C++}else if(w.isDirectionalLight){const z=t.get(w);if(z.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const F=w.shadow,q=e.get(w);q.shadowIntensity=F.intensity,q.shadowBias=F.bias,q.shadowNormalBias=F.normalBias,q.shadowRadius=F.radius,q.shadowMapSize=F.mapSize,n.directionalShadow[h]=q,n.directionalShadowMap[h]=N,n.directionalShadowMatrix[h]=w.shadow.matrix,_++}n.directional[h]=z,h++}else if(w.isSpotLight){const z=t.get(w);z.position.setFromMatrixPosition(w.matrixWorld),z.color.copy(L).multiplyScalar(B),z.distance=O,z.coneCos=Math.cos(w.angle),z.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),z.decay=w.decay,n.spot[x]=z;const F=w.shadow;if(w.map&&(n.spotLightMap[R]=w.map,R++,F.updateMatrices(w),w.castShadow&&E++),n.spotLightMatrix[x]=F.matrix,w.castShadow){const q=e.get(w);q.shadowIntensity=F.intensity,q.shadowBias=F.bias,q.shadowNormalBias=F.normalBias,q.shadowRadius=F.radius,q.shadowMapSize=F.mapSize,n.spotShadow[x]=q,n.spotShadowMap[x]=N,S++}x++}else if(w.isRectAreaLight){const z=t.get(w);z.color.copy(L).multiplyScalar(B),z.halfWidth.set(w.width*.5,0,0),z.halfHeight.set(0,w.height*.5,0),n.rectArea[p]=z,p++}else if(w.isPointLight){const z=t.get(w);if(z.color.copy(w.color).multiplyScalar(w.intensity),z.distance=w.distance,z.decay=w.decay,w.castShadow){const F=w.shadow,q=e.get(w);q.shadowIntensity=F.intensity,q.shadowBias=F.bias,q.shadowNormalBias=F.normalBias,q.shadowRadius=F.radius,q.shadowMapSize=F.mapSize,q.shadowCameraNear=F.camera.near,q.shadowCameraFar=F.camera.far,n.pointShadow[g]=q,n.pointShadowMap[g]=N,n.pointShadowMatrix[g]=w.shadow.matrix,v++}n.point[g]=z,g++}else if(w.isHemisphereLight){const z=t.get(w);z.skyColor.copy(w.color).multiplyScalar(B),z.groundColor.copy(w.groundColor).multiplyScalar(B),n.hemi[m]=z,m++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=St.LTC_FLOAT_1,n.rectAreaLTC2=St.LTC_FLOAT_2):(n.rectAreaLTC1=St.LTC_HALF_1,n.rectAreaLTC2=St.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=d;const y=n.hash;(y.directionalLength!==h||y.pointLength!==g||y.spotLength!==x||y.rectAreaLength!==p||y.hemiLength!==m||y.numDirectionalShadows!==_||y.numPointShadows!==v||y.numSpotShadows!==S||y.numSpotMaps!==R||y.numLightProbes!==C)&&(n.directional.length=h,n.spot.length=x,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=S+R-E,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=C,y.directionalLength=h,y.pointLength=g,y.spotLength=x,y.rectAreaLength=p,y.hemiLength=m,y.numDirectionalShadows=_,y.numPointShadows=v,y.numSpotShadows=S,y.numSpotMaps=R,y.numLightProbes=C,n.version=N0++)}function l(c,u){let f=0,d=0,h=0,g=0,x=0;const p=u.matrixWorldInverse;for(let m=0,_=c.length;m<_;m++){const v=c[m];if(v.isDirectionalLight){const S=n.directional[f];S.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),f++}else if(v.isSpotLight){const S=n.spot[h];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),h++}else if(v.isRectAreaLight){const S=n.rectArea[g];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(p),o.identity(),r.copy(v.matrixWorld),r.premultiply(p),o.extractRotation(r),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){const S=n.point[d];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(p),d++}else if(v.isHemisphereLight){const S=n.hemi[x];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(p),x++}}}return{setup:a,setupView:l,state:n}}function Ac(i){const t=new F0(i),e=[],n=[],s=[];function r(d){f.camera=d,e.length=0,n.length=0,s.length=0}function o(d){e.push(d)}function a(d){n.push(d)}function l(d){s.push(d)}function c(){t.setup(e)}function u(d){t.setupView(e,d)}const f={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function O0(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Ac(i),t.set(s,[a])):r>=o.length?(a=new Ac(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const B0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,z0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,k0=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],V0=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],Pc=new ye,xs=new I,Io=new I;function G0(i,t,e){let n=new Ya;const s=new ct,r=new ct,o=new we,a=new Yd,l=new qd,c={},u=e.maxTextureSize,f={[_i]:on,[on]:_i,[We]:We},d=new Mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:B0,fragmentShader:z0}),h=d.clone();h.defines.HORIZONTAL_PASS=1;const g=new ie;g.setAttribute("position",new en(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new at(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vr;let m=this.type;this.render=function(E,C,y){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;this.type===Kh&&(kt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=vr);const P=i.getRenderTarget(),D=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),L=i.state;L.setBlending($n),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const B=m!==this.type;B&&C.traverse(function(O){O.material&&(Array.isArray(O.material)?O.material.forEach(N=>N.needsUpdate=!0):O.material.needsUpdate=!0)});for(let O=0,N=E.length;O<N;O++){const z=E[O],F=z.shadow;if(F===void 0){kt("WebGLShadowMap:",z,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);const q=F.getFrameExtents();s.multiply(q),r.copy(F.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/q.x),s.x=r.x*q.x,F.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/q.y),s.y=r.y*q.y,F.mapSize.y=r.y));const H=i.state.buffers.depth.getReversed();if(F.camera._reversedDepth=H,F.map===null||B===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===Ss){if(z.isPointLight){kt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new Un(s.x,s.y,{format:Li,type:Qn,minFilter:Ke,magFilter:Ke,generateMipmaps:!1}),F.map.texture.name=z.name+".shadowMap",F.map.depthTexture=new os(s.x,s.y,In),F.map.depthTexture.name=z.name+".shadowMapDepth",F.map.depthTexture.format=ti,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Ye,F.map.depthTexture.magFilter=Ye}else z.isPointLight?(F.map=new Th(s.x),F.map.depthTexture=new od(s.x,Fn)):(F.map=new Un(s.x,s.y),F.map.depthTexture=new os(s.x,s.y,Fn)),F.map.depthTexture.name=z.name+".shadowMap",F.map.depthTexture.format=ti,this.type===vr?(F.map.depthTexture.compareFunction=H?Ha:Ga,F.map.depthTexture.minFilter=Ke,F.map.depthTexture.magFilter=Ke):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Ye,F.map.depthTexture.magFilter=Ye);F.camera.updateProjectionMatrix()}const Z=F.map.isWebGLCubeRenderTarget?6:1;for(let tt=0;tt<Z;tt++){if(F.map.isWebGLCubeRenderTarget)i.setRenderTarget(F.map,tt),i.clear();else{tt===0&&(i.setRenderTarget(F.map),i.clear());const dt=F.getViewport(tt);o.set(r.x*dt.x,r.y*dt.y,r.x*dt.z,r.y*dt.w),L.viewport(o)}if(z.isPointLight){const dt=F.camera,It=F.matrix,zt=z.distance||dt.far;zt!==dt.far&&(dt.far=zt,dt.updateProjectionMatrix()),xs.setFromMatrixPosition(z.matrixWorld),dt.position.copy(xs),Io.copy(dt.position),Io.add(k0[tt]),dt.up.copy(V0[tt]),dt.lookAt(Io),dt.updateMatrixWorld(),It.makeTranslation(-xs.x,-xs.y,-xs.z),Pc.multiplyMatrices(dt.projectionMatrix,dt.matrixWorldInverse),F._frustum.setFromProjectionMatrix(Pc,dt.coordinateSystem,dt.reversedDepth)}else F.updateMatrices(z);n=F.getFrustum(),S(C,y,F.camera,z,this.type)}F.isPointLightShadow!==!0&&this.type===Ss&&_(F,y),F.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(P,D,w)};function _(E,C){const y=t.update(x);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,h.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Un(s.x,s.y,{format:Li,type:Qn})),d.uniforms.shadow_pass.value=E.map.depthTexture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(C,null,y,d,x,null),h.uniforms.shadow_pass.value=E.mapPass.texture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(C,null,y,h,x,null)}function v(E,C,y,P){let D=null;const w=y.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(w!==void 0)D=w;else if(D=y.isPointLight===!0?l:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const L=D.uuid,B=C.uuid;let O=c[L];O===void 0&&(O={},c[L]=O);let N=O[B];N===void 0&&(N=D.clone(),O[B]=N,C.addEventListener("dispose",R)),D=N}if(D.visible=C.visible,D.wireframe=C.wireframe,P===Ss?D.side=C.shadowSide!==null?C.shadowSide:C.side:D.side=C.shadowSide!==null?C.shadowSide:f[C.side],D.alphaMap=C.alphaMap,D.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,D.map=C.map,D.clipShadows=C.clipShadows,D.clippingPlanes=C.clippingPlanes,D.clipIntersection=C.clipIntersection,D.displacementMap=C.displacementMap,D.displacementScale=C.displacementScale,D.displacementBias=C.displacementBias,D.wireframeLinewidth=C.wireframeLinewidth,D.linewidth=C.linewidth,y.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const L=i.properties.get(D);L.light=y}return D}function S(E,C,y,P,D){if(E.visible===!1)return;if(E.layers.test(C.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&D===Ss)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,E.matrixWorld);const B=t.update(E),O=E.material;if(Array.isArray(O)){const N=B.groups;for(let z=0,F=N.length;z<F;z++){const q=N[z],H=O[q.materialIndex];if(H&&H.visible){const Z=v(E,H,P,D);E.onBeforeShadow(i,E,C,y,B,Z,q),i.renderBufferDirect(y,null,B,Z,E,q),E.onAfterShadow(i,E,C,y,B,Z,q)}}}else if(O.visible){const N=v(E,O,P,D);E.onBeforeShadow(i,E,C,y,B,N,null),i.renderBufferDirect(y,null,B,N,E,null),E.onAfterShadow(i,E,C,y,B,N,null)}}const L=E.children;for(let B=0,O=L.length;B<O;B++)S(L[B],C,y,P,D)}function R(E){E.target.removeEventListener("dispose",R);for(const y in c){const P=c[y],D=E.target.uuid;D in P&&(P[D].dispose(),delete P[D])}}}function H0(i,t){function e(){let k=!1;const mt=new we;let K=null;const At=new we(0,0,0,0);return{setMask:function(xt){K!==xt&&!k&&(i.colorMask(xt,xt,xt,xt),K=xt)},setLocked:function(xt){k=xt},setClear:function(xt,rt,Ft,jt,Ae){Ae===!0&&(xt*=jt,rt*=jt,Ft*=jt),mt.set(xt,rt,Ft,jt),At.equals(mt)===!1&&(i.clearColor(xt,rt,Ft,jt),At.copy(mt))},reset:function(){k=!1,K=null,At.set(-1,0,0,0)}}}function n(){let k=!1,mt=!1,K=null,At=null,xt=null;return{setReversed:function(rt){if(mt!==rt){const Ft=t.get("EXT_clip_control");rt?Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.ZERO_TO_ONE_EXT):Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.NEGATIVE_ONE_TO_ONE_EXT),mt=rt;const jt=xt;xt=null,this.setClear(jt)}},getReversed:function(){return mt},setTest:function(rt){rt?ot(i.DEPTH_TEST):bt(i.DEPTH_TEST)},setMask:function(rt){K!==rt&&!k&&(i.depthMask(rt),K=rt)},setFunc:function(rt){if(mt&&(rt=Iu[rt]),At!==rt){switch(rt){case Oo:i.depthFunc(i.NEVER);break;case Bo:i.depthFunc(i.ALWAYS);break;case zo:i.depthFunc(i.LESS);break;case ss:i.depthFunc(i.LEQUAL);break;case ko:i.depthFunc(i.EQUAL);break;case Vo:i.depthFunc(i.GEQUAL);break;case Go:i.depthFunc(i.GREATER);break;case Ho:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}At=rt}},setLocked:function(rt){k=rt},setClear:function(rt){xt!==rt&&(xt=rt,mt&&(rt=1-rt),i.clearDepth(rt))},reset:function(){k=!1,K=null,At=null,xt=null,mt=!1}}}function s(){let k=!1,mt=null,K=null,At=null,xt=null,rt=null,Ft=null,jt=null,Ae=null;return{setTest:function(ue){k||(ue?ot(i.STENCIL_TEST):bt(i.STENCIL_TEST))},setMask:function(ue){mt!==ue&&!k&&(i.stencilMask(ue),mt=ue)},setFunc:function(ue,Bn,Sn){(K!==ue||At!==Bn||xt!==Sn)&&(i.stencilFunc(ue,Bn,Sn),K=ue,At=Bn,xt=Sn)},setOp:function(ue,Bn,Sn){(rt!==ue||Ft!==Bn||jt!==Sn)&&(i.stencilOp(ue,Bn,Sn),rt=ue,Ft=Bn,jt=Sn)},setLocked:function(ue){k=ue},setClear:function(ue){Ae!==ue&&(i.clearStencil(ue),Ae=ue)},reset:function(){k=!1,mt=null,K=null,At=null,xt=null,rt=null,Ft=null,jt=null,Ae=null}}}const r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let u={},f={},d={},h=new WeakMap,g=[],x=null,p=!1,m=null,_=null,v=null,S=null,R=null,E=null,C=null,y=new ee(0,0,0),P=0,D=!1,w=null,L=null,B=null,O=null,N=null;const z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,q=0;const H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(H)[1]),F=q>=1):H.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),F=q>=2);let Z=null,tt={};const dt=i.getParameter(i.SCISSOR_BOX),It=i.getParameter(i.VIEWPORT),zt=new we().fromArray(dt),yt=new we().fromArray(It);function j(k,mt,K,At){const xt=new Uint8Array(4),rt=i.createTexture();i.bindTexture(k,rt),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ft=0;Ft<K;Ft++)k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?i.texImage3D(mt,0,i.RGBA,1,1,At,0,i.RGBA,i.UNSIGNED_BYTE,xt):i.texImage2D(mt+Ft,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,xt);return rt}const ht={};ht[i.TEXTURE_2D]=j(i.TEXTURE_2D,i.TEXTURE_2D,1),ht[i.TEXTURE_CUBE_MAP]=j(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ht[i.TEXTURE_2D_ARRAY]=j(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ht[i.TEXTURE_3D]=j(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ot(i.DEPTH_TEST),o.setFunc(ss),Mt(!1),vt(pl),ot(i.CULL_FACE),lt($n);function ot(k){u[k]!==!0&&(i.enable(k),u[k]=!0)}function bt(k){u[k]!==!1&&(i.disable(k),u[k]=!1)}function Nt(k,mt){return d[k]!==mt?(i.bindFramebuffer(k,mt),d[k]=mt,k===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=mt),k===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=mt),!0):!1}function Ut(k,mt){let K=g,At=!1;if(k){K=h.get(mt),K===void 0&&(K=[],h.set(mt,K));const xt=k.textures;if(K.length!==xt.length||K[0]!==i.COLOR_ATTACHMENT0){for(let rt=0,Ft=xt.length;rt<Ft;rt++)K[rt]=i.COLOR_ATTACHMENT0+rt;K.length=xt.length,At=!0}}else K[0]!==i.BACK&&(K[0]=i.BACK,At=!0);At&&i.drawBuffers(K)}function Jt(k){return x!==k?(i.useProgram(k),x=k,!0):!1}const Vt={[Ti]:i.FUNC_ADD,[Qh]:i.FUNC_SUBTRACT,[tu]:i.FUNC_REVERSE_SUBTRACT};Vt[eu]=i.MIN,Vt[nu]=i.MAX;const et={[iu]:i.ZERO,[su]:i.ONE,[ru]:i.SRC_COLOR,[Uo]:i.SRC_ALPHA,[uu]:i.SRC_ALPHA_SATURATE,[cu]:i.DST_COLOR,[au]:i.DST_ALPHA,[ou]:i.ONE_MINUS_SRC_COLOR,[Fo]:i.ONE_MINUS_SRC_ALPHA,[hu]:i.ONE_MINUS_DST_COLOR,[lu]:i.ONE_MINUS_DST_ALPHA,[du]:i.CONSTANT_COLOR,[fu]:i.ONE_MINUS_CONSTANT_COLOR,[pu]:i.CONSTANT_ALPHA,[mu]:i.ONE_MINUS_CONSTANT_ALPHA};function lt(k,mt,K,At,xt,rt,Ft,jt,Ae,ue){if(k===$n){p===!0&&(bt(i.BLEND),p=!1);return}if(p===!1&&(ot(i.BLEND),p=!0),k!==Jh){if(k!==m||ue!==D){if((_!==Ti||R!==Ti)&&(i.blendEquation(i.FUNC_ADD),_=Ti,R=Ti),ue)switch(k){case es:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ml:i.blendFunc(i.ONE,i.ONE);break;case gl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case _l:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:se("WebGLState: Invalid blending: ",k);break}else switch(k){case es:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ml:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case gl:se("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case _l:se("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:se("WebGLState: Invalid blending: ",k);break}v=null,S=null,E=null,C=null,y.set(0,0,0),P=0,m=k,D=ue}return}xt=xt||mt,rt=rt||K,Ft=Ft||At,(mt!==_||xt!==R)&&(i.blendEquationSeparate(Vt[mt],Vt[xt]),_=mt,R=xt),(K!==v||At!==S||rt!==E||Ft!==C)&&(i.blendFuncSeparate(et[K],et[At],et[rt],et[Ft]),v=K,S=At,E=rt,C=Ft),(jt.equals(y)===!1||Ae!==P)&&(i.blendColor(jt.r,jt.g,jt.b,Ae),y.copy(jt),P=Ae),m=k,D=!1}function it(k,mt){k.side===We?bt(i.CULL_FACE):ot(i.CULL_FACE);let K=k.side===on;mt&&(K=!K),Mt(K),k.blending===es&&k.transparent===!1?lt($n):lt(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),r.setMask(k.colorWrite);const At=k.stencilWrite;a.setTest(At),At&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),U(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ot(i.SAMPLE_ALPHA_TO_COVERAGE):bt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Mt(k){w!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),w=k)}function vt(k){k!==Zh?(ot(i.CULL_FACE),k!==L&&(k===pl?i.cullFace(i.BACK):k===$h?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):bt(i.CULL_FACE),L=k}function Gt(k){k!==B&&(F&&i.lineWidth(k),B=k)}function U(k,mt,K){k?(ot(i.POLYGON_OFFSET_FILL),(O!==mt||N!==K)&&(O=mt,N=K,o.getReversed()&&(mt=-mt),i.polygonOffset(mt,K))):bt(i.POLYGON_OFFSET_FILL)}function Wt(k){k?ot(i.SCISSOR_TEST):bt(i.SCISSOR_TEST)}function Dt(k){k===void 0&&(k=i.TEXTURE0+z-1),Z!==k&&(i.activeTexture(k),Z=k)}function Ht(k,mt,K){K===void 0&&(Z===null?K=i.TEXTURE0+z-1:K=Z);let At=tt[K];At===void 0&&(At={type:void 0,texture:void 0},tt[K]=At),(At.type!==k||At.texture!==mt)&&(Z!==K&&(i.activeTexture(K),Z=K),i.bindTexture(k,mt||ht[k]),At.type=k,At.texture=mt)}function ut(){const k=tt[Z];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function ce(){try{i.compressedTexImage2D(...arguments)}catch(k){se("WebGLState:",k)}}function A(){try{i.compressedTexImage3D(...arguments)}catch(k){se("WebGLState:",k)}}function b(){try{i.texSubImage2D(...arguments)}catch(k){se("WebGLState:",k)}}function G(){try{i.texSubImage3D(...arguments)}catch(k){se("WebGLState:",k)}}function J(){try{i.compressedTexSubImage2D(...arguments)}catch(k){se("WebGLState:",k)}}function st(){try{i.compressedTexSubImage3D(...arguments)}catch(k){se("WebGLState:",k)}}function ft(){try{i.texStorage2D(...arguments)}catch(k){se("WebGLState:",k)}}function gt(){try{i.texStorage3D(...arguments)}catch(k){se("WebGLState:",k)}}function $(){try{i.texImage2D(...arguments)}catch(k){se("WebGLState:",k)}}function Q(){try{i.texImage3D(...arguments)}catch(k){se("WebGLState:",k)}}function Tt(k){return f[k]!==void 0?f[k]:i.getParameter(k)}function Rt(k,mt){f[k]!==mt&&(i.pixelStorei(k,mt),f[k]=mt)}function _t(k){zt.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),zt.copy(k))}function pt(k){yt.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),yt.copy(k))}function Xt(k,mt){let K=c.get(mt);K===void 0&&(K=new WeakMap,c.set(mt,K));let At=K.get(k);At===void 0&&(At=i.getUniformBlockIndex(mt,k.name),K.set(k,At))}function $t(k,mt){const At=c.get(mt).get(k);l.get(mt)!==At&&(i.uniformBlockBinding(mt,At,k.__bindingPointIndex),l.set(mt,At))}function le(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},f={},Z=null,tt={},d={},h=new WeakMap,g=[],x=null,p=!1,m=null,_=null,v=null,S=null,R=null,E=null,C=null,y=new ee(0,0,0),P=0,D=!1,w=null,L=null,B=null,O=null,N=null,zt.set(0,0,i.canvas.width,i.canvas.height),yt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ot,disable:bt,bindFramebuffer:Nt,drawBuffers:Ut,useProgram:Jt,setBlending:lt,setMaterial:it,setFlipSided:Mt,setCullFace:vt,setLineWidth:Gt,setPolygonOffset:U,setScissorTest:Wt,activeTexture:Dt,bindTexture:Ht,unbindTexture:ut,compressedTexImage2D:ce,compressedTexImage3D:A,texImage2D:$,texImage3D:Q,pixelStorei:Rt,getParameter:Tt,updateUBOMapping:Xt,uniformBlockBinding:$t,texStorage2D:ft,texStorage3D:gt,texSubImage2D:b,texSubImage3D:G,compressedTexSubImage2D:J,compressedTexSubImage3D:st,scissor:_t,viewport:pt,reset:le}}function W0(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ct,u=new WeakMap,f=new Set;let d;const h=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(A,b){return g?new OffscreenCanvas(A,b):Ir("canvas")}function p(A,b,G){let J=1;const st=ce(A);if((st.width>G||st.height>G)&&(J=G/Math.max(st.width,st.height)),J<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const ft=Math.floor(J*st.width),gt=Math.floor(J*st.height);d===void 0&&(d=x(ft,gt));const $=b?x(ft,gt):d;return $.width=ft,$.height=gt,$.getContext("2d").drawImage(A,0,0,ft,gt),kt("WebGLRenderer: Texture has been resized from ("+st.width+"x"+st.height+") to ("+ft+"x"+gt+")."),$}else return"data"in A&&kt("WebGLRenderer: Image in DataTexture is too big ("+st.width+"x"+st.height+")."),A;return A}function m(A){return A.generateMipmaps}function _(A){i.generateMipmap(A)}function v(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(A,b,G,J,st,ft=!1){if(A!==null){if(i[A]!==void 0)return i[A];kt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let gt;J&&(gt=t.get("EXT_texture_norm16"),gt||kt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=b;if(b===i.RED&&(G===i.FLOAT&&($=i.R32F),G===i.HALF_FLOAT&&($=i.R16F),G===i.UNSIGNED_BYTE&&($=i.R8),G===i.UNSIGNED_SHORT&&gt&&($=gt.R16_EXT),G===i.SHORT&&gt&&($=gt.R16_SNORM_EXT)),b===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&($=i.R8UI),G===i.UNSIGNED_SHORT&&($=i.R16UI),G===i.UNSIGNED_INT&&($=i.R32UI),G===i.BYTE&&($=i.R8I),G===i.SHORT&&($=i.R16I),G===i.INT&&($=i.R32I)),b===i.RG&&(G===i.FLOAT&&($=i.RG32F),G===i.HALF_FLOAT&&($=i.RG16F),G===i.UNSIGNED_BYTE&&($=i.RG8),G===i.UNSIGNED_SHORT&&gt&&($=gt.RG16_EXT),G===i.SHORT&&gt&&($=gt.RG16_SNORM_EXT)),b===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&($=i.RG8UI),G===i.UNSIGNED_SHORT&&($=i.RG16UI),G===i.UNSIGNED_INT&&($=i.RG32UI),G===i.BYTE&&($=i.RG8I),G===i.SHORT&&($=i.RG16I),G===i.INT&&($=i.RG32I)),b===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&($=i.RGB8UI),G===i.UNSIGNED_SHORT&&($=i.RGB16UI),G===i.UNSIGNED_INT&&($=i.RGB32UI),G===i.BYTE&&($=i.RGB8I),G===i.SHORT&&($=i.RGB16I),G===i.INT&&($=i.RGB32I)),b===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&($=i.RGBA8UI),G===i.UNSIGNED_SHORT&&($=i.RGBA16UI),G===i.UNSIGNED_INT&&($=i.RGBA32UI),G===i.BYTE&&($=i.RGBA8I),G===i.SHORT&&($=i.RGBA16I),G===i.INT&&($=i.RGBA32I)),b===i.RGB&&(G===i.UNSIGNED_SHORT&&gt&&($=gt.RGB16_EXT),G===i.SHORT&&gt&&($=gt.RGB16_SNORM_EXT),G===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),G===i.UNSIGNED_INT_10F_11F_11F_REV&&($=i.R11F_G11F_B10F)),b===i.RGBA){const Q=ft?Cr:re.getTransfer(st);G===i.FLOAT&&($=i.RGBA32F),G===i.HALF_FLOAT&&($=i.RGBA16F),G===i.UNSIGNED_BYTE&&($=Q===he?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT&&gt&&($=gt.RGBA16_EXT),G===i.SHORT&&gt&&($=gt.RGBA16_SNORM_EXT),G===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function R(A,b){let G;return A?b===null||b===Fn||b===Ds?G=i.DEPTH24_STENCIL8:b===In?G=i.DEPTH32F_STENCIL8:b===Is&&(G=i.DEPTH24_STENCIL8,kt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Fn||b===Ds?G=i.DEPTH_COMPONENT24:b===In?G=i.DEPTH_COMPONENT32F:b===Is&&(G=i.DEPTH_COMPONENT16),G}function E(A,b){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Ye&&A.minFilter!==Ke?Math.log2(Math.max(b.width,b.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?b.mipmaps.length:1}function C(A){const b=A.target;b.removeEventListener("dispose",C),P(b),b.isVideoTexture&&u.delete(b),b.isHTMLTexture&&f.delete(b)}function y(A){const b=A.target;b.removeEventListener("dispose",y),w(b)}function P(A){const b=n.get(A);if(b.__webglInit===void 0)return;const G=A.source,J=h.get(G);if(J){const st=J[b.__cacheKey];st.usedTimes--,st.usedTimes===0&&D(A),Object.keys(J).length===0&&h.delete(G)}n.remove(A)}function D(A){const b=n.get(A);i.deleteTexture(b.__webglTexture);const G=A.source,J=h.get(G);delete J[b.__cacheKey],o.memory.textures--}function w(A){const b=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(b.__webglFramebuffer[J]))for(let st=0;st<b.__webglFramebuffer[J].length;st++)i.deleteFramebuffer(b.__webglFramebuffer[J][st]);else i.deleteFramebuffer(b.__webglFramebuffer[J]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[J])}else{if(Array.isArray(b.__webglFramebuffer))for(let J=0;J<b.__webglFramebuffer.length;J++)i.deleteFramebuffer(b.__webglFramebuffer[J]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let J=0;J<b.__webglColorRenderbuffer.length;J++)b.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[J]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const G=A.textures;for(let J=0,st=G.length;J<st;J++){const ft=n.get(G[J]);ft.__webglTexture&&(i.deleteTexture(ft.__webglTexture),o.memory.textures--),n.remove(G[J])}n.remove(A)}let L=0;function B(){L=0}function O(){return L}function N(A){L=A}function z(){const A=L;return A>=s.maxTextures&&kt("WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),L+=1,A}function F(A){const b=[];return b.push(A.wrapS),b.push(A.wrapT),b.push(A.wrapR||0),b.push(A.magFilter),b.push(A.minFilter),b.push(A.anisotropy),b.push(A.internalFormat),b.push(A.format),b.push(A.type),b.push(A.generateMipmaps),b.push(A.premultiplyAlpha),b.push(A.flipY),b.push(A.unpackAlignment),b.push(A.colorSpace),b.join()}function q(A,b){const G=n.get(A);if(A.isVideoTexture&&Ht(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&G.__version!==A.version){const J=A.image;if(J===null)kt("WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)kt("WebGLRenderer: Texture marked for update but image is incomplete");else{bt(G,A,b);return}}else A.isExternalTexture&&(G.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+b)}function H(A,b){const G=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&G.__version!==A.version){bt(G,A,b);return}else A.isExternalTexture&&(G.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+b)}function Z(A,b){const G=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&G.__version!==A.version){bt(G,A,b);return}e.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+b)}function tt(A,b){const G=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&G.__version!==A.version){Nt(G,A,b);return}e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+b)}const dt={[Wo]:i.REPEAT,[qn]:i.CLAMP_TO_EDGE,[Xo]:i.MIRRORED_REPEAT},It={[Ye]:i.NEAREST,[xu]:i.NEAREST_MIPMAP_NEAREST,[Gs]:i.NEAREST_MIPMAP_LINEAR,[Ke]:i.LINEAR,[$r]:i.LINEAR_MIPMAP_NEAREST,[Ri]:i.LINEAR_MIPMAP_LINEAR},zt={[Mu]:i.NEVER,[Tu]:i.ALWAYS,[Su]:i.LESS,[Ga]:i.LEQUAL,[Eu]:i.EQUAL,[Ha]:i.GEQUAL,[bu]:i.GREATER,[wu]:i.NOTEQUAL};function yt(A,b){if(b.type===In&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Ke||b.magFilter===$r||b.magFilter===Gs||b.magFilter===Ri||b.minFilter===Ke||b.minFilter===$r||b.minFilter===Gs||b.minFilter===Ri)&&kt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,dt[b.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,dt[b.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,dt[b.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,It[b.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,It[b.minFilter]),b.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,zt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Ye||b.minFilter!==Gs&&b.minFilter!==Ri||b.type===In&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function j(A,b){let G=!1;A.__webglInit===void 0&&(A.__webglInit=!0,b.addEventListener("dispose",C));const J=b.source;let st=h.get(J);st===void 0&&(st={},h.set(J,st));const ft=F(b);if(ft!==A.__cacheKey){st[ft]===void 0&&(st[ft]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,G=!0),st[ft].usedTimes++;const gt=st[A.__cacheKey];gt!==void 0&&(st[A.__cacheKey].usedTimes--,gt.usedTimes===0&&D(b)),A.__cacheKey=ft,A.__webglTexture=st[ft].texture}return G}function ht(A,b,G){return Math.floor(Math.floor(A/G)/b)}function ot(A,b,G,J){const ft=A.updateRanges;if(ft.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,b.width,b.height,G,J,b.data);else{ft.sort((Rt,_t)=>Rt.start-_t.start);let gt=0;for(let Rt=1;Rt<ft.length;Rt++){const _t=ft[gt],pt=ft[Rt],Xt=_t.start+_t.count,$t=ht(pt.start,b.width,4),le=ht(_t.start,b.width,4);pt.start<=Xt+1&&$t===le&&ht(pt.start+pt.count-1,b.width,4)===$t?_t.count=Math.max(_t.count,pt.start+pt.count-_t.start):(++gt,ft[gt]=pt)}ft.length=gt+1;const $=e.getParameter(i.UNPACK_ROW_LENGTH),Q=e.getParameter(i.UNPACK_SKIP_PIXELS),Tt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,b.width);for(let Rt=0,_t=ft.length;Rt<_t;Rt++){const pt=ft[Rt],Xt=Math.floor(pt.start/4),$t=Math.ceil(pt.count/4),le=Xt%b.width,k=Math.floor(Xt/b.width),mt=$t,K=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,le),e.pixelStorei(i.UNPACK_SKIP_ROWS,k),e.texSubImage2D(i.TEXTURE_2D,0,le,k,mt,K,G,J,b.data)}A.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,$),e.pixelStorei(i.UNPACK_SKIP_PIXELS,Q),e.pixelStorei(i.UNPACK_SKIP_ROWS,Tt)}}function bt(A,b,G){let J=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(J=i.TEXTURE_3D);const st=j(A,b),ft=b.source;e.bindTexture(J,A.__webglTexture,i.TEXTURE0+G);const gt=n.get(ft);if(ft.version!==gt.__version||st===!0){if(e.activeTexture(i.TEXTURE0+G),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){const K=re.getPrimaries(re.workingColorSpace),At=b.colorSpace===pi?null:re.getPrimaries(b.colorSpace),xt=b.colorSpace===pi||K===At?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt)}e.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment);let Q=p(b.image,!1,s.maxTextureSize);Q=ut(b,Q);const Tt=r.convert(b.format,b.colorSpace),Rt=r.convert(b.type);let _t=S(b.internalFormat,Tt,Rt,b.normalized,b.colorSpace,b.isVideoTexture);yt(J,b);let pt;const Xt=b.mipmaps,$t=b.isVideoTexture!==!0,le=gt.__version===void 0||st===!0,k=ft.dataReady,mt=E(b,Q);if(b.isDepthTexture)_t=R(b.format===Ci,b.type),le&&($t?e.texStorage2D(i.TEXTURE_2D,1,_t,Q.width,Q.height):e.texImage2D(i.TEXTURE_2D,0,_t,Q.width,Q.height,0,Tt,Rt,null));else if(b.isDataTexture)if(Xt.length>0){$t&&le&&e.texStorage2D(i.TEXTURE_2D,mt,_t,Xt[0].width,Xt[0].height);for(let K=0,At=Xt.length;K<At;K++)pt=Xt[K],$t?k&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,pt.width,pt.height,Tt,Rt,pt.data):e.texImage2D(i.TEXTURE_2D,K,_t,pt.width,pt.height,0,Tt,Rt,pt.data);b.generateMipmaps=!1}else $t?(le&&e.texStorage2D(i.TEXTURE_2D,mt,_t,Q.width,Q.height),k&&ot(b,Q,Tt,Rt)):e.texImage2D(i.TEXTURE_2D,0,_t,Q.width,Q.height,0,Tt,Rt,Q.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){$t&&le&&e.texStorage3D(i.TEXTURE_2D_ARRAY,mt,_t,Xt[0].width,Xt[0].height,Q.depth);for(let K=0,At=Xt.length;K<At;K++)if(pt=Xt[K],b.format!==yn)if(Tt!==null)if($t){if(k)if(b.layerUpdates.size>0){const xt=rc(pt.width,pt.height,b.format,b.type);for(const rt of b.layerUpdates){const Ft=pt.data.subarray(rt*xt/pt.data.BYTES_PER_ELEMENT,(rt+1)*xt/pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,rt,pt.width,pt.height,1,Tt,Ft)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,pt.width,pt.height,Q.depth,Tt,pt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,K,_t,pt.width,pt.height,Q.depth,0,pt.data,0,0);else kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $t?k&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,pt.width,pt.height,Q.depth,Tt,Rt,pt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,K,_t,pt.width,pt.height,Q.depth,0,Tt,Rt,pt.data)}else{$t&&le&&e.texStorage2D(i.TEXTURE_2D,mt,_t,Xt[0].width,Xt[0].height);for(let K=0,At=Xt.length;K<At;K++)pt=Xt[K],b.format!==yn?Tt!==null?$t?k&&e.compressedTexSubImage2D(i.TEXTURE_2D,K,0,0,pt.width,pt.height,Tt,pt.data):e.compressedTexImage2D(i.TEXTURE_2D,K,_t,pt.width,pt.height,0,pt.data):kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$t?k&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,pt.width,pt.height,Tt,Rt,pt.data):e.texImage2D(i.TEXTURE_2D,K,_t,pt.width,pt.height,0,Tt,Rt,pt.data)}else if(b.isDataArrayTexture)if($t){if(le&&e.texStorage3D(i.TEXTURE_2D_ARRAY,mt,_t,Q.width,Q.height,Q.depth),k)if(b.layerUpdates.size>0){const K=rc(Q.width,Q.height,b.format,b.type);for(const At of b.layerUpdates){const xt=Q.data.subarray(At*K/Q.data.BYTES_PER_ELEMENT,(At+1)*K/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,At,Q.width,Q.height,1,Tt,Rt,xt)}b.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,Tt,Rt,Q.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,_t,Q.width,Q.height,Q.depth,0,Tt,Rt,Q.data);else if(b.isData3DTexture)$t?(le&&e.texStorage3D(i.TEXTURE_3D,mt,_t,Q.width,Q.height,Q.depth),k&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,Tt,Rt,Q.data)):e.texImage3D(i.TEXTURE_3D,0,_t,Q.width,Q.height,Q.depth,0,Tt,Rt,Q.data);else if(b.isFramebufferTexture){if(le)if($t)e.texStorage2D(i.TEXTURE_2D,mt,_t,Q.width,Q.height);else{let K=Q.width,At=Q.height;for(let xt=0;xt<mt;xt++)e.texImage2D(i.TEXTURE_2D,xt,_t,K,At,0,Tt,Rt,null),K>>=1,At>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in i){const K=i.canvas;if(K.hasAttribute("layoutsubtree")||K.setAttribute("layoutsubtree","true"),Q.parentNode!==K){K.appendChild(Q),f.add(b),K.onpaint=jt=>{const Ae=jt.changedElements;for(const ue of f)Ae.includes(ue.image)&&(ue.needsUpdate=!0)},K.requestPaint();return}const At=0,xt=i.RGBA,rt=i.RGBA,Ft=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,At,xt,rt,Ft,Q),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Xt.length>0){if($t&&le){const K=ce(Xt[0]);e.texStorage2D(i.TEXTURE_2D,mt,_t,K.width,K.height)}for(let K=0,At=Xt.length;K<At;K++)pt=Xt[K],$t?k&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,Tt,Rt,pt):e.texImage2D(i.TEXTURE_2D,K,_t,Tt,Rt,pt);b.generateMipmaps=!1}else if($t){if(le){const K=ce(Q);e.texStorage2D(i.TEXTURE_2D,mt,_t,K.width,K.height)}k&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Tt,Rt,Q)}else e.texImage2D(i.TEXTURE_2D,0,_t,Tt,Rt,Q);m(b)&&_(J),gt.__version=ft.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function Nt(A,b,G){if(b.image.length!==6)return;const J=j(A,b),st=b.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+G);const ft=n.get(st);if(st.version!==ft.__version||J===!0){e.activeTexture(i.TEXTURE0+G);const gt=re.getPrimaries(re.workingColorSpace),$=b.colorSpace===pi?null:re.getPrimaries(b.colorSpace),Q=b.colorSpace===pi||gt===$?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);const Tt=b.isCompressedTexture||b.image[0].isCompressedTexture,Rt=b.image[0]&&b.image[0].isDataTexture,_t=[];for(let rt=0;rt<6;rt++)!Tt&&!Rt?_t[rt]=p(b.image[rt],!0,s.maxCubemapSize):_t[rt]=Rt?b.image[rt].image:b.image[rt],_t[rt]=ut(b,_t[rt]);const pt=_t[0],Xt=r.convert(b.format,b.colorSpace),$t=r.convert(b.type),le=S(b.internalFormat,Xt,$t,b.normalized,b.colorSpace),k=b.isVideoTexture!==!0,mt=ft.__version===void 0||J===!0,K=st.dataReady;let At=E(b,pt);yt(i.TEXTURE_CUBE_MAP,b);let xt;if(Tt){k&&mt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,At,le,pt.width,pt.height);for(let rt=0;rt<6;rt++){xt=_t[rt].mipmaps;for(let Ft=0;Ft<xt.length;Ft++){const jt=xt[Ft];b.format!==yn?Xt!==null?k?K&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ft,0,0,jt.width,jt.height,Xt,jt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ft,le,jt.width,jt.height,0,jt.data):kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?K&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ft,0,0,jt.width,jt.height,Xt,$t,jt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ft,le,jt.width,jt.height,0,Xt,$t,jt.data)}}}else{if(xt=b.mipmaps,k&&mt){xt.length>0&&At++;const rt=ce(_t[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,At,le,rt.width,rt.height)}for(let rt=0;rt<6;rt++)if(Rt){k?K&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,_t[rt].width,_t[rt].height,Xt,$t,_t[rt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,le,_t[rt].width,_t[rt].height,0,Xt,$t,_t[rt].data);for(let Ft=0;Ft<xt.length;Ft++){const Ae=xt[Ft].image[rt].image;k?K&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ft+1,0,0,Ae.width,Ae.height,Xt,$t,Ae.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ft+1,le,Ae.width,Ae.height,0,Xt,$t,Ae.data)}}else{k?K&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,Xt,$t,_t[rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,le,Xt,$t,_t[rt]);for(let Ft=0;Ft<xt.length;Ft++){const jt=xt[Ft];k?K&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ft+1,0,0,Xt,$t,jt.image[rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ft+1,le,Xt,$t,jt.image[rt])}}}m(b)&&_(i.TEXTURE_CUBE_MAP),ft.__version=st.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function Ut(A,b,G,J,st,ft){const gt=r.convert(G.format,G.colorSpace),$=r.convert(G.type),Q=S(G.internalFormat,gt,$,G.normalized,G.colorSpace),Tt=n.get(b),Rt=n.get(G);if(Rt.__renderTarget=b,!Tt.__hasExternalTextures){const _t=Math.max(1,b.width>>ft),pt=Math.max(1,b.height>>ft);st===i.TEXTURE_3D||st===i.TEXTURE_2D_ARRAY?e.texImage3D(st,ft,Q,_t,pt,b.depth,0,gt,$,null):e.texImage2D(st,ft,Q,_t,pt,0,gt,$,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),Dt(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,st,Rt.__webglTexture,0,Wt(b)):(st===i.TEXTURE_2D||st>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,st,Rt.__webglTexture,ft),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Jt(A,b,G){if(i.bindRenderbuffer(i.RENDERBUFFER,A),b.depthBuffer){const J=b.depthTexture,st=J&&J.isDepthTexture?J.type:null,ft=R(b.stencilBuffer,st),gt=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Dt(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Wt(b),ft,b.width,b.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,Wt(b),ft,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,ft,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,gt,i.RENDERBUFFER,A)}else{const J=b.textures;for(let st=0;st<J.length;st++){const ft=J[st],gt=r.convert(ft.format,ft.colorSpace),$=r.convert(ft.type),Q=S(ft.internalFormat,gt,$,ft.normalized,ft.colorSpace);Dt(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Wt(b),Q,b.width,b.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,Wt(b),Q,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Q,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Vt(A,b,G){const J=b.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const st=n.get(b.depthTexture);if(st.__renderTarget=b,(!st.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),J){if(st.__webglInit===void 0&&(st.__webglInit=!0,b.depthTexture.addEventListener("dispose",C)),st.__webglTexture===void 0){st.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,st.__webglTexture),yt(i.TEXTURE_CUBE_MAP,b.depthTexture);const Tt=r.convert(b.depthTexture.format),Rt=r.convert(b.depthTexture.type);let _t;b.depthTexture.format===ti?_t=i.DEPTH_COMPONENT24:b.depthTexture.format===Ci&&(_t=i.DEPTH24_STENCIL8);for(let pt=0;pt<6;pt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,_t,b.width,b.height,0,Tt,Rt,null)}}else q(b.depthTexture,0);const ft=st.__webglTexture,gt=Wt(b),$=J?i.TEXTURE_CUBE_MAP_POSITIVE_X+G:i.TEXTURE_2D,Q=b.depthTexture.format===Ci?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(b.depthTexture.format===ti)Dt(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,$,ft,0,gt):i.framebufferTexture2D(i.FRAMEBUFFER,Q,$,ft,0);else if(b.depthTexture.format===Ci)Dt(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,$,ft,0,gt):i.framebufferTexture2D(i.FRAMEBUFFER,Q,$,ft,0);else throw new Error("Unknown depthTexture format")}function et(A){const b=n.get(A),G=A.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==A.depthTexture){const J=A.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),J){const st=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,J.removeEventListener("dispose",st)};J.addEventListener("dispose",st),b.__depthDisposeCallback=st}b.__boundDepthTexture=J}if(A.depthTexture&&!b.__autoAllocateDepthBuffer)if(G)for(let J=0;J<6;J++)Vt(b.__webglFramebuffer[J],A,J);else{const J=A.texture.mipmaps;J&&J.length>0?Vt(b.__webglFramebuffer[0],A,0):Vt(b.__webglFramebuffer,A,0)}else if(G){b.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[J]),b.__webglDepthbuffer[J]===void 0)b.__webglDepthbuffer[J]=i.createRenderbuffer(),Jt(b.__webglDepthbuffer[J],A,!1);else{const st=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=b.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,ft),i.framebufferRenderbuffer(i.FRAMEBUFFER,st,i.RENDERBUFFER,ft)}}else{const J=A.texture.mipmaps;if(J&&J.length>0?e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),Jt(b.__webglDepthbuffer,A,!1);else{const st=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ft),i.framebufferRenderbuffer(i.FRAMEBUFFER,st,i.RENDERBUFFER,ft)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function lt(A,b,G){const J=n.get(A);b!==void 0&&Ut(J.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&et(A)}function it(A){const b=A.texture,G=n.get(A),J=n.get(b);A.addEventListener("dispose",y);const st=A.textures,ft=A.isWebGLCubeRenderTarget===!0,gt=st.length>1;if(gt||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=b.version,o.memory.textures++),ft){G.__webglFramebuffer=[];for(let $=0;$<6;$++)if(b.mipmaps&&b.mipmaps.length>0){G.__webglFramebuffer[$]=[];for(let Q=0;Q<b.mipmaps.length;Q++)G.__webglFramebuffer[$][Q]=i.createFramebuffer()}else G.__webglFramebuffer[$]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){G.__webglFramebuffer=[];for(let $=0;$<b.mipmaps.length;$++)G.__webglFramebuffer[$]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(gt)for(let $=0,Q=st.length;$<Q;$++){const Tt=n.get(st[$]);Tt.__webglTexture===void 0&&(Tt.__webglTexture=i.createTexture(),o.memory.textures++)}if(A.samples>0&&Dt(A)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let $=0;$<st.length;$++){const Q=st[$];G.__webglColorRenderbuffer[$]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[$]);const Tt=r.convert(Q.format,Q.colorSpace),Rt=r.convert(Q.type),_t=S(Q.internalFormat,Tt,Rt,Q.normalized,Q.colorSpace,A.isXRRenderTarget===!0),pt=Wt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,pt,_t,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.RENDERBUFFER,G.__webglColorRenderbuffer[$])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),Jt(G.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ft){e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),yt(i.TEXTURE_CUBE_MAP,b);for(let $=0;$<6;$++)if(b.mipmaps&&b.mipmaps.length>0)for(let Q=0;Q<b.mipmaps.length;Q++)Ut(G.__webglFramebuffer[$][Q],A,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,Q);else Ut(G.__webglFramebuffer[$],A,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);m(b)&&_(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(gt){for(let $=0,Q=st.length;$<Q;$++){const Tt=st[$],Rt=n.get(Tt);let _t=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(_t=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(_t,Rt.__webglTexture),yt(_t,Tt),Ut(G.__webglFramebuffer,A,Tt,i.COLOR_ATTACHMENT0+$,_t,0),m(Tt)&&_(_t)}e.unbindTexture()}else{let $=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&($=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture($,J.__webglTexture),yt($,b),b.mipmaps&&b.mipmaps.length>0)for(let Q=0;Q<b.mipmaps.length;Q++)Ut(G.__webglFramebuffer[Q],A,b,i.COLOR_ATTACHMENT0,$,Q);else Ut(G.__webglFramebuffer,A,b,i.COLOR_ATTACHMENT0,$,0);m(b)&&_($),e.unbindTexture()}A.depthBuffer&&et(A)}function Mt(A){const b=A.textures;for(let G=0,J=b.length;G<J;G++){const st=b[G];if(m(st)){const ft=v(A),gt=n.get(st).__webglTexture;e.bindTexture(ft,gt),_(ft),e.unbindTexture()}}}const vt=[],Gt=[];function U(A){if(A.samples>0){if(Dt(A)===!1){const b=A.textures,G=A.width,J=A.height;let st=i.COLOR_BUFFER_BIT;const ft=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=n.get(A),$=b.length>1;if($)for(let Tt=0;Tt<b.length;Tt++)e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,gt.__webglMultisampledFramebuffer);const Q=A.texture.mipmaps;Q&&Q.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglFramebuffer);for(let Tt=0;Tt<b.length;Tt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(st|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(st|=i.STENCIL_BUFFER_BIT)),$){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,gt.__webglColorRenderbuffer[Tt]);const Rt=n.get(b[Tt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Rt,0)}i.blitFramebuffer(0,0,G,J,0,0,G,J,st,i.NEAREST),l===!0&&(vt.length=0,Gt.length=0,vt.push(i.COLOR_ATTACHMENT0+Tt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(vt.push(ft),Gt.push(ft),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Gt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,vt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),$)for(let Tt=0;Tt<b.length;Tt++){e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,gt.__webglColorRenderbuffer[Tt]);const Rt=n.get(b[Tt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,Rt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const b=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function Wt(A){return Math.min(s.maxSamples,A.samples)}function Dt(A){const b=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Ht(A){const b=o.render.frame;u.get(A)!==b&&(u.set(A,b),A.update())}function ut(A,b){const G=A.colorSpace,J=A.format,st=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||G!==Rr&&G!==pi&&(re.getTransfer(G)===he?(J!==yn||st!==hn)&&kt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):se("WebGLTextures: Unsupported texture color space:",G)),b}function ce(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=B,this.getTextureUnits=O,this.setTextureUnits=N,this.setTexture2D=q,this.setTexture2DArray=H,this.setTexture3D=Z,this.setTextureCube=tt,this.rebindTextures=lt,this.setupRenderTarget=it,this.updateRenderTargetMipmap=Mt,this.updateMultisampleRenderTarget=U,this.setupDepthRenderbuffer=et,this.setupFrameBufferTexture=Ut,this.useMultisampledRTT=Dt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function X0(i,t){function e(n,s=pi){let r;const o=re.getTransfer(s);if(n===hn)return i.UNSIGNED_BYTE;if(n===Oa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ba)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Qc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===th)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Kc)return i.BYTE;if(n===Jc)return i.SHORT;if(n===Is)return i.UNSIGNED_SHORT;if(n===Fa)return i.INT;if(n===Fn)return i.UNSIGNED_INT;if(n===In)return i.FLOAT;if(n===Qn)return i.HALF_FLOAT;if(n===eh)return i.ALPHA;if(n===nh)return i.RGB;if(n===yn)return i.RGBA;if(n===ti)return i.DEPTH_COMPONENT;if(n===Ci)return i.DEPTH_STENCIL;if(n===ih)return i.RED;if(n===za)return i.RED_INTEGER;if(n===Li)return i.RG;if(n===ka)return i.RG_INTEGER;if(n===Va)return i.RGBA_INTEGER;if(n===yr||n===Mr||n===Sr||n===Er)if(o===he)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===yr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Sr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Er)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===yr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Mr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Sr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Er)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Yo||n===qo||n===jo||n===Zo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Yo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===qo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===jo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Zo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===$o||n===Ko||n===Jo||n===Qo||n===ta||n===Ar||n===ea)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===$o||n===Ko)return o===he?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Jo)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Qo)return r.COMPRESSED_R11_EAC;if(n===ta)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ar)return r.COMPRESSED_RG11_EAC;if(n===ea)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===na||n===ia||n===sa||n===ra||n===oa||n===aa||n===la||n===ca||n===ha||n===ua||n===da||n===fa||n===pa||n===ma)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===na)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ia)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===sa)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ra)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===oa)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===aa)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===la)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ca)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ha)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ua)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===da)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===fa)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===pa)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ma)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ga||n===_a||n===xa)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ga)return o===he?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===_a)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===xa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===va||n===ya||n===Pr||n===Ma)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===va)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ya)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Pr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ma)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ds?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const Y0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,q0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class j0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new hh(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Mn({vertexShader:Y0,fragmentShader:q0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new at(new Bs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Z0 extends xi{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,h=null,g=null;const x=typeof XRWebGLBinding<"u",p=new j0,m={},_=e.getContextAttributes();let v=null,S=null;const R=[],E=[],C=new ct;let y=null;const P=new pn;P.viewport=new we;const D=new pn;D.viewport=new we;const w=[P,D],L=new rf;let B=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ht=R[j];return ht===void 0&&(ht=new io,R[j]=ht),ht.getTargetRaySpace()},this.getControllerGrip=function(j){let ht=R[j];return ht===void 0&&(ht=new io,R[j]=ht),ht.getGripSpace()},this.getHand=function(j){let ht=R[j];return ht===void 0&&(ht=new io,R[j]=ht),ht.getHandSpace()};function N(j){const ht=E.indexOf(j.inputSource);if(ht===-1)return;const ot=R[ht];ot!==void 0&&(ot.update(j.inputSource,j.frame,c||o),ot.dispatchEvent({type:j.type,data:j.inputSource}))}function z(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",F);for(let j=0;j<R.length;j++){const ht=E[j];ht!==null&&(E[j]=null,R[j].disconnect(ht))}B=null,O=null,p.reset();for(const j in m)delete m[j];t.setRenderTarget(v),h=null,d=null,f=null,s=null,S=null,yt.stop(),n.isPresenting=!1,t.setPixelRatio(y),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&kt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&kt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(v=t.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",z),s.addEventListener("inputsourceschange",F),_.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(C),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ot=null,bt=null,Nt=null;_.depth&&(Nt=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ot=_.stencil?Ci:ti,bt=_.stencil?Ds:Fn);const Ut={colorFormat:e.RGBA8,depthFormat:Nt,scaleFactor:r};f=this.getBinding(),d=f.createProjectionLayer(Ut),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),S=new Un(d.textureWidth,d.textureHeight,{format:yn,type:hn,depthTexture:new os(d.textureWidth,d.textureHeight,bt,void 0,void 0,void 0,void 0,void 0,void 0,ot),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const ot={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(s,e,ot),s.updateRenderState({baseLayer:h}),t.setPixelRatio(1),t.setSize(h.framebufferWidth,h.framebufferHeight,!1),S=new Un(h.framebufferWidth,h.framebufferHeight,{format:yn,type:hn,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),yt.setContext(s),yt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function F(j){for(let ht=0;ht<j.removed.length;ht++){const ot=j.removed[ht],bt=E.indexOf(ot);bt>=0&&(E[bt]=null,R[bt].disconnect(ot))}for(let ht=0;ht<j.added.length;ht++){const ot=j.added[ht];let bt=E.indexOf(ot);if(bt===-1){for(let Ut=0;Ut<R.length;Ut++)if(Ut>=E.length){E.push(ot),bt=Ut;break}else if(E[Ut]===null){E[Ut]=ot,bt=Ut;break}if(bt===-1)break}const Nt=R[bt];Nt&&Nt.connect(ot)}}const q=new I,H=new I;function Z(j,ht,ot){q.setFromMatrixPosition(ht.matrixWorld),H.setFromMatrixPosition(ot.matrixWorld);const bt=q.distanceTo(H),Nt=ht.projectionMatrix.elements,Ut=ot.projectionMatrix.elements,Jt=Nt[14]/(Nt[10]-1),Vt=Nt[14]/(Nt[10]+1),et=(Nt[9]+1)/Nt[5],lt=(Nt[9]-1)/Nt[5],it=(Nt[8]-1)/Nt[0],Mt=(Ut[8]+1)/Ut[0],vt=Jt*it,Gt=Jt*Mt,U=bt/(-it+Mt),Wt=U*-it;if(ht.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Wt),j.translateZ(U),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Nt[10]===-1)j.projectionMatrix.copy(ht.projectionMatrix),j.projectionMatrixInverse.copy(ht.projectionMatrixInverse);else{const Dt=Jt+U,Ht=Vt+U,ut=vt-Wt,ce=Gt+(bt-Wt),A=et*Vt/Ht*Dt,b=lt*Vt/Ht*Dt;j.projectionMatrix.makePerspective(ut,ce,A,b,Dt,Ht),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function tt(j,ht){ht===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ht.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let ht=j.near,ot=j.far;p.texture!==null&&(p.depthNear>0&&(ht=p.depthNear),p.depthFar>0&&(ot=p.depthFar)),L.near=D.near=P.near=ht,L.far=D.far=P.far=ot,(B!==L.near||O!==L.far)&&(s.updateRenderState({depthNear:L.near,depthFar:L.far}),B=L.near,O=L.far),L.layers.mask=j.layers.mask|6,P.layers.mask=L.layers.mask&-5,D.layers.mask=L.layers.mask&-3;const bt=j.parent,Nt=L.cameras;tt(L,bt);for(let Ut=0;Ut<Nt.length;Ut++)tt(Nt[Ut],bt);Nt.length===2?Z(L,P,D):L.projectionMatrix.copy(P.projectionMatrix),dt(j,L,bt)};function dt(j,ht,ot){ot===null?j.matrix.copy(ht.matrixWorld):(j.matrix.copy(ot.matrixWorld),j.matrix.invert(),j.matrix.multiply(ht.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ht.projectionMatrix),j.projectionMatrixInverse.copy(ht.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=wa*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(d===null&&h===null))return l},this.setFoveation=function(j){l=j,d!==null&&(d.fixedFoveation=j),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=j)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(L)},this.getCameraTexture=function(j){return m[j]};let It=null;function zt(j,ht){if(u=ht.getViewerPose(c||o),g=ht,u!==null){const ot=u.views;h!==null&&(t.setRenderTargetFramebuffer(S,h.framebuffer),t.setRenderTarget(S));let bt=!1;ot.length!==L.cameras.length&&(L.cameras.length=0,bt=!0);for(let Vt=0;Vt<ot.length;Vt++){const et=ot[Vt];let lt=null;if(h!==null)lt=h.getViewport(et);else{const Mt=f.getViewSubImage(d,et);lt=Mt.viewport,Vt===0&&(t.setRenderTargetTextures(S,Mt.colorTexture,Mt.depthStencilTexture),t.setRenderTarget(S))}let it=w[Vt];it===void 0&&(it=new pn,it.layers.enable(Vt),it.viewport=new we,w[Vt]=it),it.matrix.fromArray(et.transform.matrix),it.matrix.decompose(it.position,it.quaternion,it.scale),it.projectionMatrix.fromArray(et.projectionMatrix),it.projectionMatrixInverse.copy(it.projectionMatrix).invert(),it.viewport.set(lt.x,lt.y,lt.width,lt.height),Vt===0&&(L.matrix.copy(it.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),bt===!0&&L.cameras.push(it)}const Nt=s.enabledFeatures;if(Nt&&Nt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){f=n.getBinding();const Vt=f.getDepthInformation(ot[0]);Vt&&Vt.isValid&&Vt.texture&&p.init(Vt,s.renderState)}if(Nt&&Nt.includes("camera-access")&&x){t.state.unbindTexture(),f=n.getBinding();for(let Vt=0;Vt<ot.length;Vt++){const et=ot[Vt].camera;if(et){let lt=m[et];lt||(lt=new hh,m[et]=lt);const it=f.getCameraImage(et);lt.sourceTexture=it}}}}for(let ot=0;ot<R.length;ot++){const bt=E[ot],Nt=R[ot];bt!==null&&Nt!==void 0&&Nt.update(bt,ht,c||o)}It&&It(j,ht),ht.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ht}),g=null}const yt=new bh;yt.setAnimationLoop(zt),this.setAnimationLoop=function(j){It=j},this.dispose=function(){}}}const $0=new ye,Ih=new qt;Ih.set(-1,0,0,0,1,0,0,0,1);function K0(i,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,vh(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,_,v,S){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),f(p,m)):m.isMeshPhongMaterial?(r(p,m),u(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),d(p,m),m.isMeshPhysicalMaterial&&h(p,m,S)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),x(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,_,v):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===on&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===on&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const _=t.get(m),v=_.envMap,S=_.envMapRotation;v&&(p.envMap.value=v,p.envMapRotation.value.setFromMatrix4($0.makeRotationFromEuler(S)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Ih),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,_,v){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*_,p.scale.value=v*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function f(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function h(p,m,_){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===on&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function x(p,m){const _=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(_.matrixWorld),p.nearDistance.value=_.shadow.camera.near,p.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function J0(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,v){const S=v.program;n.uniformBlockBinding(_,S)}function c(_,v){let S=s[_.id];S===void 0&&(g(_),S=u(_),s[_.id]=S,_.addEventListener("dispose",p));const R=v.program;n.updateUBOMapping(_,R);const E=t.render.frame;r[_.id]!==E&&(d(_),r[_.id]=E)}function u(_){const v=f();_.__bindingPointIndex=v;const S=i.createBuffer(),R=_.__size,E=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,R,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,S),S}function f(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return se("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){const v=s[_.id],S=_.uniforms,R=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let E=0,C=S.length;E<C;E++){const y=Array.isArray(S[E])?S[E]:[S[E]];for(let P=0,D=y.length;P<D;P++){const w=y[P];if(h(w,E,P,R)===!0){const L=w.__offset,B=Array.isArray(w.value)?w.value:[w.value];let O=0;for(let N=0;N<B.length;N++){const z=B[N],F=x(z);typeof z=="number"||typeof z=="boolean"?(w.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,L+O,w.__data)):z.isMatrix3?(w.__data[0]=z.elements[0],w.__data[1]=z.elements[1],w.__data[2]=z.elements[2],w.__data[3]=0,w.__data[4]=z.elements[3],w.__data[5]=z.elements[4],w.__data[6]=z.elements[5],w.__data[7]=0,w.__data[8]=z.elements[6],w.__data[9]=z.elements[7],w.__data[10]=z.elements[8],w.__data[11]=0):ArrayBuffer.isView(z)?w.__data.set(new z.constructor(z.buffer,z.byteOffset,w.__data.length)):(z.toArray(w.__data,O),O+=F.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,L,w.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(_,v,S,R){const E=_.value,C=v+"_"+S;if(R[C]===void 0)return typeof E=="number"||typeof E=="boolean"?R[C]=E:ArrayBuffer.isView(E)?R[C]=E.slice():R[C]=E.clone(),!0;{const y=R[C];if(typeof E=="number"||typeof E=="boolean"){if(y!==E)return R[C]=E,!0}else{if(ArrayBuffer.isView(E))return!0;if(y.equals(E)===!1)return y.copy(E),!0}}return!1}function g(_){const v=_.uniforms;let S=0;const R=16;for(let C=0,y=v.length;C<y;C++){const P=Array.isArray(v[C])?v[C]:[v[C]];for(let D=0,w=P.length;D<w;D++){const L=P[D],B=Array.isArray(L.value)?L.value:[L.value];for(let O=0,N=B.length;O<N;O++){const z=B[O],F=x(z),q=S%R,H=q%F.boundary,Z=q+H;S+=H,Z!==0&&R-Z<F.storage&&(S+=R-Z),L.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=S,S+=F.storage}}}const E=S%R;return E>0&&(S+=R-E),_.__size=S,_.__cache={},this}function x(_){const v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?kt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(v.boundary=16,v.storage=_.byteLength):kt("WebGLRenderer: Unsupported uniform value type.",_),v}function p(_){const v=_.target;v.removeEventListener("dispose",p);const S=o.indexOf(v.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function m(){for(const _ in s)i.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}const Q0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let wn=null;function t_(){return wn===null&&(wn=new td(Q0,16,16,Li,Qn),wn.name="DFG_LUT",wn.minFilter=Ke,wn.magFilter=Ke,wn.wrapS=qn,wn.wrapT=qn,wn.generateMipmaps=!1,wn.needsUpdate=!0),wn}class e_{constructor(t={}){const{canvas:e=Ru(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:h=hn}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;const x=h,p=new Set([Va,ka,za]),m=new Set([hn,Fn,Is,Ds,Oa,Ba]),_=new Uint32Array(4),v=new Int32Array(4),S=new I;let R=null,E=null;const C=[],y=[];let P=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Nn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let w=!1,L=null;this._outputColorSpace=fn;let B=0,O=0,N=null,z=-1,F=null;const q=new we,H=new we;let Z=null;const tt=new ee(0);let dt=0,It=e.width,zt=e.height,yt=1,j=null,ht=null;const ot=new we(0,0,It,zt),bt=new we(0,0,It,zt);let Nt=!1;const Ut=new Ya;let Jt=!1,Vt=!1;const et=new ye,lt=new I,it=new we,Mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let vt=!1;function Gt(){return N===null?yt:1}let U=n;function Wt(T,V){return e.getContext(T,V)}try{const T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ua}`),e.addEventListener("webglcontextlost",rt,!1),e.addEventListener("webglcontextrestored",Ft,!1),e.addEventListener("webglcontextcreationerror",jt,!1),U===null){const V="webgl2";if(U=Wt(V,T),U===null)throw Wt(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw se("WebGLRenderer: "+T.message),T}let Dt,Ht,ut,ce,A,b,G,J,st,ft,gt,$,Q,Tt,Rt,_t,pt,Xt,$t,le,k,mt,K;function At(){Dt=new tg(U),Dt.init(),k=new X0(U,Dt),Ht=new Ym(U,Dt,t,k),ut=new H0(U,Dt),Ht.reversedDepthBuffer&&d&&ut.buffers.depth.setReversed(!0),ce=new ig(U),A=new R0,b=new W0(U,Dt,ut,A,Ht,k,ce),G=new Qm(D),J=new af(U),mt=new Wm(U,J),st=new eg(U,J,ce,mt),ft=new rg(U,st,J,mt,ce),Xt=new sg(U,Ht,b),Rt=new qm(A),gt=new P0(D,G,Dt,Ht,mt,Rt),$=new K0(D,A),Q=new I0,Tt=new O0(Dt),pt=new Hm(D,G,ut,ft,g,l),_t=new G0(D,ft,Ht),K=new J0(U,ce,Ht,ut),$t=new Xm(U,Dt,ce),le=new ng(U,Dt,ce),ce.programs=gt.programs,D.capabilities=Ht,D.extensions=Dt,D.properties=A,D.renderLists=Q,D.shadowMap=_t,D.state=ut,D.info=ce}At(),x!==hn&&(P=new ag(x,e.width,e.height,s,r));const xt=new Z0(D,U);this.xr=xt,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const T=Dt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Dt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return yt},this.setPixelRatio=function(T){T!==void 0&&(yt=T,this.setSize(It,zt,!1))},this.getSize=function(T){return T.set(It,zt)},this.setSize=function(T,V,Y=!0){if(xt.isPresenting){kt("WebGLRenderer: Can't change size while VR device is presenting.");return}It=T,zt=V,e.width=Math.floor(T*yt),e.height=Math.floor(V*yt),Y===!0&&(e.style.width=T+"px",e.style.height=V+"px"),P!==null&&P.setSize(e.width,e.height),this.setViewport(0,0,T,V)},this.getDrawingBufferSize=function(T){return T.set(It*yt,zt*yt).floor()},this.setDrawingBufferSize=function(T,V,Y){It=T,zt=V,yt=Y,e.width=Math.floor(T*Y),e.height=Math.floor(V*Y),this.setViewport(0,0,T,V)},this.setEffects=function(T){if(x===hn){se("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let V=0;V<T.length;V++)if(T[V].isOutputPass===!0){kt("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(q)},this.getViewport=function(T){return T.copy(ot)},this.setViewport=function(T,V,Y,W){T.isVector4?ot.set(T.x,T.y,T.z,T.w):ot.set(T,V,Y,W),ut.viewport(q.copy(ot).multiplyScalar(yt).round())},this.getScissor=function(T){return T.copy(bt)},this.setScissor=function(T,V,Y,W){T.isVector4?bt.set(T.x,T.y,T.z,T.w):bt.set(T,V,Y,W),ut.scissor(H.copy(bt).multiplyScalar(yt).round())},this.getScissorTest=function(){return Nt},this.setScissorTest=function(T){ut.setScissorTest(Nt=T)},this.setOpaqueSort=function(T){j=T},this.setTransparentSort=function(T){ht=T},this.getClearColor=function(T){return T.copy(pt.getClearColor())},this.setClearColor=function(){pt.setClearColor(...arguments)},this.getClearAlpha=function(){return pt.getClearAlpha()},this.setClearAlpha=function(){pt.setClearAlpha(...arguments)},this.clear=function(T=!0,V=!0,Y=!0){let W=0;if(T){let X=!1;if(N!==null){const wt=N.texture.format;X=p.has(wt)}if(X){const wt=N.texture.type,Ct=m.has(wt),Et=pt.getClearColor(),Lt=pt.getClearAlpha(),Ot=Et.r,Zt=Et.g,Qt=Et.b;Ct?(_[0]=Ot,_[1]=Zt,_[2]=Qt,_[3]=Lt,U.clearBufferuiv(U.COLOR,0,_)):(v[0]=Ot,v[1]=Zt,v[2]=Qt,v[3]=Lt,U.clearBufferiv(U.COLOR,0,v))}else W|=U.COLOR_BUFFER_BIT}V&&(W|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(W|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&U.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),L=T},this.dispose=function(){e.removeEventListener("webglcontextlost",rt,!1),e.removeEventListener("webglcontextrestored",Ft,!1),e.removeEventListener("webglcontextcreationerror",jt,!1),pt.dispose(),Q.dispose(),Tt.dispose(),A.dispose(),G.dispose(),ft.dispose(),mt.dispose(),K.dispose(),gt.dispose(),xt.dispose(),xt.removeEventListener("sessionstart",ol),xt.removeEventListener("sessionend",al),vi.stop()};function rt(T){T.preventDefault(),Dr("WebGLRenderer: Context Lost."),w=!0}function Ft(){Dr("WebGLRenderer: Context Restored."),w=!1;const T=ce.autoReset,V=_t.enabled,Y=_t.autoUpdate,W=_t.needsUpdate,X=_t.type;At(),ce.autoReset=T,_t.enabled=V,_t.autoUpdate=Y,_t.needsUpdate=W,_t.type=X}function jt(T){se("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Ae(T){const V=T.target;V.removeEventListener("dispose",Ae),ue(V)}function ue(T){Bn(T),A.remove(T)}function Bn(T){const V=A.get(T).programs;V!==void 0&&(V.forEach(function(Y){gt.releaseProgram(Y)}),T.isShaderMaterial&&gt.releaseShaderCache(T))}this.renderBufferDirect=function(T,V,Y,W,X,wt){V===null&&(V=Mt);const Ct=X.isMesh&&X.matrixWorld.determinant()<0,Et=Hh(T,V,Y,W,X);ut.setMaterial(W,Ct);let Lt=Y.index,Ot=1;if(W.wireframe===!0){if(Lt=st.getWireframeAttribute(Y),Lt===void 0)return;Ot=2}const Zt=Y.drawRange,Qt=Y.attributes.position;let Bt=Zt.start*Ot,de=(Zt.start+Zt.count)*Ot;wt!==null&&(Bt=Math.max(Bt,wt.start*Ot),de=Math.min(de,(wt.start+wt.count)*Ot)),Lt!==null?(Bt=Math.max(Bt,0),de=Math.min(de,Lt.count)):Qt!=null&&(Bt=Math.max(Bt,0),de=Math.min(de,Qt.count));const Pe=de-Bt;if(Pe<0||Pe===1/0)return;mt.setup(X,W,Et,Y,Lt);let be,me=$t;if(Lt!==null&&(be=J.get(Lt),me=le,me.setIndex(be)),X.isMesh)W.wireframe===!0?(ut.setLineWidth(W.wireframeLinewidth*Gt()),me.setMode(U.LINES)):me.setMode(U.TRIANGLES);else if(X.isLine){let qe=W.linewidth;qe===void 0&&(qe=1),ut.setLineWidth(qe*Gt()),X.isLineSegments?me.setMode(U.LINES):X.isLineLoop?me.setMode(U.LINE_LOOP):me.setMode(U.LINE_STRIP)}else X.isPoints?me.setMode(U.POINTS):X.isSprite&&me.setMode(U.TRIANGLES);if(X.isBatchedMesh)if(Dt.get("WEBGL_multi_draw"))me.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const qe=X._multiDrawStarts,Pt=X._multiDrawCounts,an=X._multiDrawCount,oe=Lt?J.get(Lt).bytesPerElement:1,un=A.get(W).currentProgram.getUniforms();for(let En=0;En<an;En++)un.setValue(U,"_gl_DrawID",En),me.render(qe[En]/oe,Pt[En])}else if(X.isInstancedMesh)me.renderInstances(Bt,Pe,X.count);else if(Y.isInstancedBufferGeometry){const qe=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Pt=Math.min(Y.instanceCount,qe);me.renderInstances(Bt,Pe,Pt)}else me.render(Bt,Pe)};function Sn(T,V,Y){T.transparent===!0&&T.side===We&&T.forceSinglePass===!1?(T.side=on,T.needsUpdate=!0,Vs(T,V,Y),T.side=_i,T.needsUpdate=!0,Vs(T,V,Y),T.side=We):Vs(T,V,Y)}this.compile=function(T,V,Y=null){Y===null&&(Y=T),E=Tt.get(Y),E.init(V),y.push(E),Y.traverseVisible(function(X){X.isLight&&X.layers.test(V.layers)&&(E.pushLight(X),X.castShadow&&E.pushShadow(X))}),T!==Y&&T.traverseVisible(function(X){X.isLight&&X.layers.test(V.layers)&&(E.pushLight(X),X.castShadow&&E.pushShadow(X))}),E.setupLights();const W=new Set;return T.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const wt=X.material;if(wt)if(Array.isArray(wt))for(let Ct=0;Ct<wt.length;Ct++){const Et=wt[Ct];Sn(Et,Y,X),W.add(Et)}else Sn(wt,Y,X),W.add(wt)}),E=y.pop(),W},this.compileAsync=function(T,V,Y=null){const W=this.compile(T,V,Y);return new Promise(X=>{function wt(){if(W.forEach(function(Ct){A.get(Ct).currentProgram.isReady()&&W.delete(Ct)}),W.size===0){X(T);return}setTimeout(wt,10)}Dt.get("KHR_parallel_shader_compile")!==null?wt():setTimeout(wt,10)})};let Yr=null;function Vh(T){Yr&&Yr(T)}function ol(){vi.stop()}function al(){vi.start()}const vi=new bh;vi.setAnimationLoop(Vh),typeof self<"u"&&vi.setContext(self),this.setAnimationLoop=function(T){Yr=T,xt.setAnimationLoop(T),T===null?vi.stop():vi.start()},xt.addEventListener("sessionstart",ol),xt.addEventListener("sessionend",al),this.render=function(T,V){if(V!==void 0&&V.isCamera!==!0){se("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;L!==null&&L.renderStart(T,V);const Y=xt.enabled===!0&&xt.isPresenting===!0,W=P!==null&&(N===null||Y)&&P.begin(D,N);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),xt.enabled===!0&&xt.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(xt.cameraAutoUpdate===!0&&xt.updateCamera(V),V=xt.getCamera()),T.isScene===!0&&T.onBeforeRender(D,T,V,N),E=Tt.get(T,y.length),E.init(V),E.state.textureUnits=b.getTextureUnits(),y.push(E),et.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),Ut.setFromProjectionMatrix(et,Dn,V.reversedDepth),Vt=this.localClippingEnabled,Jt=Rt.init(this.clippingPlanes,Vt),R=Q.get(T,C.length),R.init(),C.push(R),xt.enabled===!0&&xt.isPresenting===!0){const Ct=D.xr.getDepthSensingMesh();Ct!==null&&qr(Ct,V,-1/0,D.sortObjects)}qr(T,V,0,D.sortObjects),R.finish(),D.sortObjects===!0&&R.sort(j,ht),vt=xt.enabled===!1||xt.isPresenting===!1||xt.hasDepthSensing()===!1,vt&&pt.addToRenderList(R,T),this.info.render.frame++,Jt===!0&&Rt.beginShadows();const X=E.state.shadowsArray;if(_t.render(X,T,V),Jt===!0&&Rt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(W&&P.hasRenderPass())===!1){const Ct=R.opaque,Et=R.transmissive;if(E.setupLights(),V.isArrayCamera){const Lt=V.cameras;if(Et.length>0)for(let Ot=0,Zt=Lt.length;Ot<Zt;Ot++){const Qt=Lt[Ot];cl(Ct,Et,T,Qt)}vt&&pt.render(T);for(let Ot=0,Zt=Lt.length;Ot<Zt;Ot++){const Qt=Lt[Ot];ll(R,T,Qt,Qt.viewport)}}else Et.length>0&&cl(Ct,Et,T,V),vt&&pt.render(T),ll(R,T,V)}N!==null&&O===0&&(b.updateMultisampleRenderTarget(N),b.updateRenderTargetMipmap(N)),W&&P.end(D),T.isScene===!0&&T.onAfterRender(D,T,V),mt.resetDefaultState(),z=-1,F=null,y.pop(),y.length>0?(E=y[y.length-1],b.setTextureUnits(E.state.textureUnits),Jt===!0&&Rt.setGlobalState(D.clippingPlanes,E.state.camera)):E=null,C.pop(),C.length>0?R=C[C.length-1]:R=null,L!==null&&L.renderEnd()};function qr(T,V,Y,W){if(T.visible===!1)return;if(T.layers.test(V.layers)){if(T.isGroup)Y=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(V);else if(T.isLightProbeGrid)E.pushLightProbeGrid(T);else if(T.isLight)E.pushLight(T),T.castShadow&&E.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Ut.intersectsSprite(T)){W&&it.setFromMatrixPosition(T.matrixWorld).applyMatrix4(et);const Ct=ft.update(T),Et=T.material;Et.visible&&R.push(T,Ct,Et,Y,it.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Ut.intersectsObject(T))){const Ct=ft.update(T),Et=T.material;if(W&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),it.copy(T.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),it.copy(Ct.boundingSphere.center)),it.applyMatrix4(T.matrixWorld).applyMatrix4(et)),Array.isArray(Et)){const Lt=Ct.groups;for(let Ot=0,Zt=Lt.length;Ot<Zt;Ot++){const Qt=Lt[Ot],Bt=Et[Qt.materialIndex];Bt&&Bt.visible&&R.push(T,Ct,Bt,Y,it.z,Qt)}}else Et.visible&&R.push(T,Ct,Et,Y,it.z,null)}}const wt=T.children;for(let Ct=0,Et=wt.length;Ct<Et;Ct++)qr(wt[Ct],V,Y,W)}function ll(T,V,Y,W){const{opaque:X,transmissive:wt,transparent:Ct}=T;E.setupLightsView(Y),Jt===!0&&Rt.setGlobalState(D.clippingPlanes,Y),W&&ut.viewport(q.copy(W)),X.length>0&&ks(X,V,Y),wt.length>0&&ks(wt,V,Y),Ct.length>0&&ks(Ct,V,Y),ut.buffers.depth.setTest(!0),ut.buffers.depth.setMask(!0),ut.buffers.color.setMask(!0),ut.setPolygonOffset(!1)}function cl(T,V,Y,W){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[W.id]===void 0){const Bt=Dt.has("EXT_color_buffer_half_float")||Dt.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[W.id]=new Un(1,1,{generateMipmaps:!0,type:Bt?Qn:hn,minFilter:Ri,samples:Math.max(4,Ht.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:re.workingColorSpace})}const wt=E.state.transmissionRenderTarget[W.id],Ct=W.viewport||q;wt.setSize(Ct.z*D.transmissionResolutionScale,Ct.w*D.transmissionResolutionScale);const Et=D.getRenderTarget(),Lt=D.getActiveCubeFace(),Ot=D.getActiveMipmapLevel();D.setRenderTarget(wt),D.getClearColor(tt),dt=D.getClearAlpha(),dt<1&&D.setClearColor(16777215,.5),D.clear(),vt&&pt.render(Y);const Zt=D.toneMapping;D.toneMapping=Nn;const Qt=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),E.setupLightsView(W),Jt===!0&&Rt.setGlobalState(D.clippingPlanes,W),ks(T,Y,W),b.updateMultisampleRenderTarget(wt),b.updateRenderTargetMipmap(wt),Dt.has("WEBGL_multisampled_render_to_texture")===!1){let Bt=!1;for(let de=0,Pe=V.length;de<Pe;de++){const be=V[de],{object:me,geometry:qe,material:Pt,group:an}=be;if(Pt.side===We&&me.layers.test(W.layers)){const oe=Pt.side;Pt.side=on,Pt.needsUpdate=!0,hl(me,Y,W,qe,Pt,an),Pt.side=oe,Pt.needsUpdate=!0,Bt=!0}}Bt===!0&&(b.updateMultisampleRenderTarget(wt),b.updateRenderTargetMipmap(wt))}D.setRenderTarget(Et,Lt,Ot),D.setClearColor(tt,dt),Qt!==void 0&&(W.viewport=Qt),D.toneMapping=Zt}function ks(T,V,Y){const W=V.isScene===!0?V.overrideMaterial:null;for(let X=0,wt=T.length;X<wt;X++){const Ct=T[X],{object:Et,geometry:Lt,group:Ot}=Ct;let Zt=Ct.material;Zt.allowOverride===!0&&W!==null&&(Zt=W),Et.layers.test(Y.layers)&&hl(Et,V,Y,Lt,Zt,Ot)}}function hl(T,V,Y,W,X,wt){T.onBeforeRender(D,V,Y,W,X,wt),T.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),X.onBeforeRender(D,V,Y,W,T,wt),X.transparent===!0&&X.side===We&&X.forceSinglePass===!1?(X.side=on,X.needsUpdate=!0,D.renderBufferDirect(Y,V,W,X,T,wt),X.side=_i,X.needsUpdate=!0,D.renderBufferDirect(Y,V,W,X,T,wt),X.side=We):D.renderBufferDirect(Y,V,W,X,T,wt),T.onAfterRender(D,V,Y,W,X,wt)}function Vs(T,V,Y){V.isScene!==!0&&(V=Mt);const W=A.get(T),X=E.state.lights,wt=E.state.shadowsArray,Ct=X.state.version,Et=gt.getParameters(T,X.state,wt,V,Y,E.state.lightProbeGridArray),Lt=gt.getProgramCacheKey(Et);let Ot=W.programs;W.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?V.environment:null,W.fog=V.fog;const Zt=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;W.envMap=G.get(T.envMap||W.environment,Zt),W.envMapRotation=W.environment!==null&&T.envMap===null?V.environmentRotation:T.envMapRotation,Ot===void 0&&(T.addEventListener("dispose",Ae),Ot=new Map,W.programs=Ot);let Qt=Ot.get(Lt);if(Qt!==void 0){if(W.currentProgram===Qt&&W.lightsStateVersion===Ct)return dl(T,Et),Qt}else Et.uniforms=gt.getUniforms(T),L!==null&&T.isNodeMaterial&&L.build(T,Y,Et),T.onBeforeCompile(Et,D),Qt=gt.acquireProgram(Et,Lt),Ot.set(Lt,Qt),W.uniforms=Et.uniforms;const Bt=W.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Bt.clippingPlanes=Rt.uniform),dl(T,Et),W.needsLights=Xh(T),W.lightsStateVersion=Ct,W.needsLights&&(Bt.ambientLightColor.value=X.state.ambient,Bt.lightProbe.value=X.state.probe,Bt.directionalLights.value=X.state.directional,Bt.directionalLightShadows.value=X.state.directionalShadow,Bt.spotLights.value=X.state.spot,Bt.spotLightShadows.value=X.state.spotShadow,Bt.rectAreaLights.value=X.state.rectArea,Bt.ltc_1.value=X.state.rectAreaLTC1,Bt.ltc_2.value=X.state.rectAreaLTC2,Bt.pointLights.value=X.state.point,Bt.pointLightShadows.value=X.state.pointShadow,Bt.hemisphereLights.value=X.state.hemi,Bt.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Bt.spotLightMatrix.value=X.state.spotLightMatrix,Bt.spotLightMap.value=X.state.spotLightMap,Bt.pointShadowMatrix.value=X.state.pointShadowMatrix),W.lightProbeGrid=E.state.lightProbeGridArray.length>0,W.currentProgram=Qt,W.uniformsList=null,Qt}function ul(T){if(T.uniformsList===null){const V=T.currentProgram.getUniforms();T.uniformsList=wr.seqWithValue(V.seq,T.uniforms)}return T.uniformsList}function dl(T,V){const Y=A.get(T);Y.outputColorSpace=V.outputColorSpace,Y.batching=V.batching,Y.batchingColor=V.batchingColor,Y.instancing=V.instancing,Y.instancingColor=V.instancingColor,Y.instancingMorph=V.instancingMorph,Y.skinning=V.skinning,Y.morphTargets=V.morphTargets,Y.morphNormals=V.morphNormals,Y.morphColors=V.morphColors,Y.morphTargetsCount=V.morphTargetsCount,Y.numClippingPlanes=V.numClippingPlanes,Y.numIntersection=V.numClipIntersection,Y.vertexAlphas=V.vertexAlphas,Y.vertexTangents=V.vertexTangents,Y.toneMapping=V.toneMapping}function Gh(T,V){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;S.setFromMatrixPosition(V.matrixWorld);for(let Y=0,W=T.length;Y<W;Y++){const X=T[Y];if(X.texture!==null&&X.boundingBox.containsPoint(S))return X}return null}function Hh(T,V,Y,W,X){V.isScene!==!0&&(V=Mt),b.resetTextureUnits();const wt=V.fog,Ct=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?V.environment:null,Et=N===null?D.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:re.workingColorSpace,Lt=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,Ot=G.get(W.envMap||Ct,Lt),Zt=W.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Qt=!!Y.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Bt=!!Y.morphAttributes.position,de=!!Y.morphAttributes.normal,Pe=!!Y.morphAttributes.color;let be=Nn;W.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(be=D.toneMapping);const me=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,qe=me!==void 0?me.length:0,Pt=A.get(W),an=E.state.lights;if(Jt===!0&&(Vt===!0||T!==F)){const ve=T===F&&W.id===z;Rt.setState(W,T,ve)}let oe=!1;W.version===Pt.__version?(Pt.needsLights&&Pt.lightsStateVersion!==an.state.version||Pt.outputColorSpace!==Et||X.isBatchedMesh&&Pt.batching===!1||!X.isBatchedMesh&&Pt.batching===!0||X.isBatchedMesh&&Pt.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Pt.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Pt.instancing===!1||!X.isInstancedMesh&&Pt.instancing===!0||X.isSkinnedMesh&&Pt.skinning===!1||!X.isSkinnedMesh&&Pt.skinning===!0||X.isInstancedMesh&&Pt.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Pt.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Pt.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Pt.instancingMorph===!1&&X.morphTexture!==null||Pt.envMap!==Ot||W.fog===!0&&Pt.fog!==wt||Pt.numClippingPlanes!==void 0&&(Pt.numClippingPlanes!==Rt.numPlanes||Pt.numIntersection!==Rt.numIntersection)||Pt.vertexAlphas!==Zt||Pt.vertexTangents!==Qt||Pt.morphTargets!==Bt||Pt.morphNormals!==de||Pt.morphColors!==Pe||Pt.toneMapping!==be||Pt.morphTargetsCount!==qe||!!Pt.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(oe=!0):(oe=!0,Pt.__version=W.version);let un=Pt.currentProgram;oe===!0&&(un=Vs(W,V,X),L&&W.isNodeMaterial&&L.onUpdateProgram(W,un,Pt));let En=!1,ni=!1,Ui=!1;const ge=un.getUniforms(),Re=Pt.uniforms;if(ut.useProgram(un.program)&&(En=!0,ni=!0,Ui=!0),W.id!==z&&(z=W.id,ni=!0),Pt.needsLights){const ve=Gh(E.state.lightProbeGridArray,X);Pt.lightProbeGrid!==ve&&(Pt.lightProbeGrid=ve,ni=!0)}if(En||F!==T){ut.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),ge.setValue(U,"projectionMatrix",T.projectionMatrix),ge.setValue(U,"viewMatrix",T.matrixWorldInverse);const si=ge.map.cameraPosition;si!==void 0&&si.setValue(U,lt.setFromMatrixPosition(T.matrixWorld)),Ht.logarithmicDepthBuffer&&ge.setValue(U,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&ge.setValue(U,"isOrthographic",T.isOrthographicCamera===!0),F!==T&&(F=T,ni=!0,Ui=!0)}if(Pt.needsLights&&(an.state.directionalShadowMap.length>0&&ge.setValue(U,"directionalShadowMap",an.state.directionalShadowMap,b),an.state.spotShadowMap.length>0&&ge.setValue(U,"spotShadowMap",an.state.spotShadowMap,b),an.state.pointShadowMap.length>0&&ge.setValue(U,"pointShadowMap",an.state.pointShadowMap,b)),X.isSkinnedMesh){ge.setOptional(U,X,"bindMatrix"),ge.setOptional(U,X,"bindMatrixInverse");const ve=X.skeleton;ve&&(ve.boneTexture===null&&ve.computeBoneTexture(),ge.setValue(U,"boneTexture",ve.boneTexture,b))}X.isBatchedMesh&&(ge.setOptional(U,X,"batchingTexture"),ge.setValue(U,"batchingTexture",X._matricesTexture,b),ge.setOptional(U,X,"batchingIdTexture"),ge.setValue(U,"batchingIdTexture",X._indirectTexture,b),ge.setOptional(U,X,"batchingColorTexture"),X._colorsTexture!==null&&ge.setValue(U,"batchingColorTexture",X._colorsTexture,b));const ii=Y.morphAttributes;if((ii.position!==void 0||ii.normal!==void 0||ii.color!==void 0)&&Xt.update(X,Y,un),(ni||Pt.receiveShadow!==X.receiveShadow)&&(Pt.receiveShadow=X.receiveShadow,ge.setValue(U,"receiveShadow",X.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&V.environment!==null&&(Re.envMapIntensity.value=V.environmentIntensity),Re.dfgLUT!==void 0&&(Re.dfgLUT.value=t_()),ni){if(ge.setValue(U,"toneMappingExposure",D.toneMappingExposure),Pt.needsLights&&Wh(Re,Ui),wt&&W.fog===!0&&$.refreshFogUniforms(Re,wt),$.refreshMaterialUniforms(Re,W,yt,zt,E.state.transmissionRenderTarget[T.id]),Pt.needsLights&&Pt.lightProbeGrid){const ve=Pt.lightProbeGrid;Re.probesSH.value=ve.texture,Re.probesMin.value.copy(ve.boundingBox.min),Re.probesMax.value.copy(ve.boundingBox.max),Re.probesResolution.value.copy(ve.resolution)}wr.upload(U,ul(Pt),Re,b)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(wr.upload(U,ul(Pt),Re,b),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&ge.setValue(U,"center",X.center),ge.setValue(U,"modelViewMatrix",X.modelViewMatrix),ge.setValue(U,"normalMatrix",X.normalMatrix),ge.setValue(U,"modelMatrix",X.matrixWorld),W.uniformsGroups!==void 0){const ve=W.uniformsGroups;for(let si=0,Fi=ve.length;si<Fi;si++){const fl=ve[si];K.update(fl,un),K.bind(fl,un)}}return un}function Wh(T,V){T.ambientLightColor.needsUpdate=V,T.lightProbe.needsUpdate=V,T.directionalLights.needsUpdate=V,T.directionalLightShadows.needsUpdate=V,T.pointLights.needsUpdate=V,T.pointLightShadows.needsUpdate=V,T.spotLights.needsUpdate=V,T.spotLightShadows.needsUpdate=V,T.rectAreaLights.needsUpdate=V,T.hemisphereLights.needsUpdate=V}function Xh(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(T,V,Y){const W=A.get(T);W.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),A.get(T.texture).__webglTexture=V,A.get(T.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:Y,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,V){const Y=A.get(T);Y.__webglFramebuffer=V,Y.__useDefaultFramebuffer=V===void 0};const Yh=U.createFramebuffer();this.setRenderTarget=function(T,V=0,Y=0){N=T,B=V,O=Y;let W=null,X=!1,wt=!1;if(T){const Et=A.get(T);if(Et.__useDefaultFramebuffer!==void 0){ut.bindFramebuffer(U.FRAMEBUFFER,Et.__webglFramebuffer),q.copy(T.viewport),H.copy(T.scissor),Z=T.scissorTest,ut.viewport(q),ut.scissor(H),ut.setScissorTest(Z),z=-1;return}else if(Et.__webglFramebuffer===void 0)b.setupRenderTarget(T);else if(Et.__hasExternalTextures)b.rebindTextures(T,A.get(T.texture).__webglTexture,A.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Zt=T.depthTexture;if(Et.__boundDepthTexture!==Zt){if(Zt!==null&&A.has(Zt)&&(T.width!==Zt.image.width||T.height!==Zt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(T)}}const Lt=T.texture;(Lt.isData3DTexture||Lt.isDataArrayTexture||Lt.isCompressedArrayTexture)&&(wt=!0);const Ot=A.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ot[V])?W=Ot[V][Y]:W=Ot[V],X=!0):T.samples>0&&b.useMultisampledRTT(T)===!1?W=A.get(T).__webglMultisampledFramebuffer:Array.isArray(Ot)?W=Ot[Y]:W=Ot,q.copy(T.viewport),H.copy(T.scissor),Z=T.scissorTest}else q.copy(ot).multiplyScalar(yt).floor(),H.copy(bt).multiplyScalar(yt).floor(),Z=Nt;if(Y!==0&&(W=Yh),ut.bindFramebuffer(U.FRAMEBUFFER,W)&&ut.drawBuffers(T,W),ut.viewport(q),ut.scissor(H),ut.setScissorTest(Z),X){const Et=A.get(T.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+V,Et.__webglTexture,Y)}else if(wt){const Et=V;for(let Lt=0;Lt<T.textures.length;Lt++){const Ot=A.get(T.textures[Lt]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Lt,Ot.__webglTexture,Y,Et)}}else if(T!==null&&Y!==0){const Et=A.get(T.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Et.__webglTexture,Y)}z=-1},this.readRenderTargetPixels=function(T,V,Y,W,X,wt,Ct,Et=0){if(!(T&&T.isWebGLRenderTarget)){se("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=A.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ct!==void 0&&(Lt=Lt[Ct]),Lt){ut.bindFramebuffer(U.FRAMEBUFFER,Lt);try{const Ot=T.textures[Et],Zt=Ot.format,Qt=Ot.type;if(T.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Et),!Ht.textureFormatReadable(Zt)){se("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ht.textureTypeReadable(Qt)){se("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=T.width-W&&Y>=0&&Y<=T.height-X&&U.readPixels(V,Y,W,X,k.convert(Zt),k.convert(Qt),wt)}finally{const Ot=N!==null?A.get(N).__webglFramebuffer:null;ut.bindFramebuffer(U.FRAMEBUFFER,Ot)}}},this.readRenderTargetPixelsAsync=async function(T,V,Y,W,X,wt,Ct,Et=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Lt=A.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ct!==void 0&&(Lt=Lt[Ct]),Lt)if(V>=0&&V<=T.width-W&&Y>=0&&Y<=T.height-X){ut.bindFramebuffer(U.FRAMEBUFFER,Lt);const Ot=T.textures[Et],Zt=Ot.format,Qt=Ot.type;if(T.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Et),!Ht.textureFormatReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ht.textureTypeReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Bt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Bt),U.bufferData(U.PIXEL_PACK_BUFFER,wt.byteLength,U.STREAM_READ),U.readPixels(V,Y,W,X,k.convert(Zt),k.convert(Qt),0);const de=N!==null?A.get(N).__webglFramebuffer:null;ut.bindFramebuffer(U.FRAMEBUFFER,de);const Pe=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Cu(U,Pe,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Bt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,wt),U.deleteBuffer(Bt),U.deleteSync(Pe),wt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,V=null,Y=0){const W=Math.pow(2,-Y),X=Math.floor(T.image.width*W),wt=Math.floor(T.image.height*W),Ct=V!==null?V.x:0,Et=V!==null?V.y:0;b.setTexture2D(T,0),U.copyTexSubImage2D(U.TEXTURE_2D,Y,0,0,Ct,Et,X,wt),ut.unbindTexture()};const qh=U.createFramebuffer(),jh=U.createFramebuffer();this.copyTextureToTexture=function(T,V,Y=null,W=null,X=0,wt=0){let Ct,Et,Lt,Ot,Zt,Qt,Bt,de,Pe;const be=T.isCompressedTexture?T.mipmaps[wt]:T.image;if(Y!==null)Ct=Y.max.x-Y.min.x,Et=Y.max.y-Y.min.y,Lt=Y.isBox3?Y.max.z-Y.min.z:1,Ot=Y.min.x,Zt=Y.min.y,Qt=Y.isBox3?Y.min.z:0;else{const Re=Math.pow(2,-X);Ct=Math.floor(be.width*Re),Et=Math.floor(be.height*Re),T.isDataArrayTexture?Lt=be.depth:T.isData3DTexture?Lt=Math.floor(be.depth*Re):Lt=1,Ot=0,Zt=0,Qt=0}W!==null?(Bt=W.x,de=W.y,Pe=W.z):(Bt=0,de=0,Pe=0);const me=k.convert(V.format),qe=k.convert(V.type);let Pt;V.isData3DTexture?(b.setTexture3D(V,0),Pt=U.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(b.setTexture2DArray(V,0),Pt=U.TEXTURE_2D_ARRAY):(b.setTexture2D(V,0),Pt=U.TEXTURE_2D),ut.activeTexture(U.TEXTURE0),ut.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,V.flipY),ut.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),ut.pixelStorei(U.UNPACK_ALIGNMENT,V.unpackAlignment);const an=ut.getParameter(U.UNPACK_ROW_LENGTH),oe=ut.getParameter(U.UNPACK_IMAGE_HEIGHT),un=ut.getParameter(U.UNPACK_SKIP_PIXELS),En=ut.getParameter(U.UNPACK_SKIP_ROWS),ni=ut.getParameter(U.UNPACK_SKIP_IMAGES);ut.pixelStorei(U.UNPACK_ROW_LENGTH,be.width),ut.pixelStorei(U.UNPACK_IMAGE_HEIGHT,be.height),ut.pixelStorei(U.UNPACK_SKIP_PIXELS,Ot),ut.pixelStorei(U.UNPACK_SKIP_ROWS,Zt),ut.pixelStorei(U.UNPACK_SKIP_IMAGES,Qt);const Ui=T.isDataArrayTexture||T.isData3DTexture,ge=V.isDataArrayTexture||V.isData3DTexture;if(T.isDepthTexture){const Re=A.get(T),ii=A.get(V),ve=A.get(Re.__renderTarget),si=A.get(ii.__renderTarget);ut.bindFramebuffer(U.READ_FRAMEBUFFER,ve.__webglFramebuffer),ut.bindFramebuffer(U.DRAW_FRAMEBUFFER,si.__webglFramebuffer);for(let Fi=0;Fi<Lt;Fi++)Ui&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,A.get(T).__webglTexture,X,Qt+Fi),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,A.get(V).__webglTexture,wt,Pe+Fi)),U.blitFramebuffer(Ot,Zt,Ct,Et,Bt,de,Ct,Et,U.DEPTH_BUFFER_BIT,U.NEAREST);ut.bindFramebuffer(U.READ_FRAMEBUFFER,null),ut.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(X!==0||T.isRenderTargetTexture||A.has(T)){const Re=A.get(T),ii=A.get(V);ut.bindFramebuffer(U.READ_FRAMEBUFFER,qh),ut.bindFramebuffer(U.DRAW_FRAMEBUFFER,jh);for(let ve=0;ve<Lt;ve++)Ui?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Re.__webglTexture,X,Qt+ve):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Re.__webglTexture,X),ge?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,ii.__webglTexture,wt,Pe+ve):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ii.__webglTexture,wt),X!==0?U.blitFramebuffer(Ot,Zt,Ct,Et,Bt,de,Ct,Et,U.COLOR_BUFFER_BIT,U.NEAREST):ge?U.copyTexSubImage3D(Pt,wt,Bt,de,Pe+ve,Ot,Zt,Ct,Et):U.copyTexSubImage2D(Pt,wt,Bt,de,Ot,Zt,Ct,Et);ut.bindFramebuffer(U.READ_FRAMEBUFFER,null),ut.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else ge?T.isDataTexture||T.isData3DTexture?U.texSubImage3D(Pt,wt,Bt,de,Pe,Ct,Et,Lt,me,qe,be.data):V.isCompressedArrayTexture?U.compressedTexSubImage3D(Pt,wt,Bt,de,Pe,Ct,Et,Lt,me,be.data):U.texSubImage3D(Pt,wt,Bt,de,Pe,Ct,Et,Lt,me,qe,be):T.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,wt,Bt,de,Ct,Et,me,qe,be.data):T.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,wt,Bt,de,be.width,be.height,me,be.data):U.texSubImage2D(U.TEXTURE_2D,wt,Bt,de,Ct,Et,me,qe,be);ut.pixelStorei(U.UNPACK_ROW_LENGTH,an),ut.pixelStorei(U.UNPACK_IMAGE_HEIGHT,oe),ut.pixelStorei(U.UNPACK_SKIP_PIXELS,un),ut.pixelStorei(U.UNPACK_SKIP_ROWS,En),ut.pixelStorei(U.UNPACK_SKIP_IMAGES,ni),wt===0&&V.generateMipmaps&&U.generateMipmap(Pt),ut.unbindTexture()},this.initRenderTarget=function(T){A.get(T).__webglFramebuffer===void 0&&b.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?b.setTextureCube(T,0):T.isData3DTexture?b.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?b.setTexture2DArray(T,0):b.setTexture2D(T,0),ut.unbindTexture()},this.resetState=function(){B=0,O=0,N=null,ut.reset(),mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=re._getDrawingBufferColorSpace(t),e.unpackColorSpace=re._getUnpackColorSpace()}}const Rc={type:"change"},Qa={type:"start"},Dh={type:"end"},mr=new Vr,Cc=new Xn,n_=Math.cos(70*Lu.DEG2RAD),Be=new I,nn=2*Math.PI,pe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Do=1e-6;class i_ extends Eh{constructor(t,e=null){super(t,e),this.state=pe.NONE,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ts.ROTATE,MIDDLE:ts.DOLLY,RIGHT:ts.PAN},this.touches={ONE:Ki.ROTATE,TWO:Ki.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new He,this._lastTargetPosition=new I,this._quat=new He().setFromUnitVectors(t.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ic,this._sphericalDelta=new ic,this._scale=1,this._panOffset=new I,this._rotateStart=new ct,this._rotateEnd=new ct,this._rotateDelta=new ct,this._panStart=new ct,this._panEnd=new ct,this._panDelta=new ct,this._dollyStart=new ct,this._dollyEnd=new ct,this._dollyDelta=new ct,this._dollyDirection=new I,this._mouse=new ct,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=r_.bind(this),this._onPointerDown=s_.bind(this),this._onPointerUp=o_.bind(this),this._onContextMenu=f_.bind(this),this._onMouseWheel=c_.bind(this),this._onKeyDown=h_.bind(this),this._onTouchStart=u_.bind(this),this._onTouchMove=d_.bind(this),this._onMouseDown=a_.bind(this),this._onMouseMove=l_.bind(this),this._interceptControlDown=p_.bind(this),this._interceptControlUp=m_.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Rc),this.update(),this.state=pe.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const e=this.object.position;Be.copy(e).sub(this.target),Be.applyQuaternion(this._quat),this._spherical.setFromVector3(Be),this.autoRotate&&this.state===pe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=nn:n>Math.PI&&(n-=nn),s<-Math.PI?s+=nn:s>Math.PI&&(s-=nn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Be.setFromSpherical(this._spherical),Be.applyQuaternion(this._quatInverse),e.copy(this.target).add(Be),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Be.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new I(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new I(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Be.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(mr.origin.copy(this.object.position),mr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(mr.direction))<n_?this.object.lookAt(this.target):(Cc.setFromNormalAndCoplanarPoint(this.object.up,this.target),mr.intersectPlane(Cc,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Do||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Do||this._lastTargetPosition.distanceToSquared(this.target)>Do?(this.dispatchEvent(Rc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?nn/60*this.autoRotateSpeed*t:nn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Be.setFromMatrixColumn(e,0),Be.multiplyScalar(-t),this._panOffset.add(Be)}_panUp(t,e){this.screenSpacePanning===!0?Be.setFromMatrixColumn(e,1):(Be.setFromMatrixColumn(e,0),Be.crossVectors(this.object.up,Be)),Be.multiplyScalar(t),this._panOffset.add(Be)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Be.copy(s).sub(this.target);let r=Be.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(nn*this._rotateDelta.x/e.clientHeight),this._rotateUp(nn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(nn*this._rotateDelta.x/e.clientHeight),this._rotateUp(nn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new ct,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function s_(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function r_(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function o_(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Dh),this.state=pe.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function a_(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ts.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=pe.DOLLY;break;case ts.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=pe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=pe.ROTATE}break;case ts.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=pe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=pe.PAN}break;default:this.state=pe.NONE}this.state!==pe.NONE&&this.dispatchEvent(Qa)}function l_(i){switch(this.state){case pe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case pe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case pe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function c_(i){this.enabled===!1||this.enableZoom===!1||this.state!==pe.NONE||(i.preventDefault(),this.dispatchEvent(Qa),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Dh))}function h_(i){this.enabled!==!1&&this._handleKeyDown(i)}function u_(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Ki.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=pe.TOUCH_ROTATE;break;case Ki.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=pe.TOUCH_PAN;break;default:this.state=pe.NONE}break;case 2:switch(this.touches.TWO){case Ki.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=pe.TOUCH_DOLLY_PAN;break;case Ki.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=pe.TOUCH_DOLLY_ROTATE;break;default:this.state=pe.NONE}break;default:this.state=pe.NONE}this.state!==pe.NONE&&this.dispatchEvent(Qa)}function d_(i){switch(this._trackPointer(i),this.state){case pe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case pe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case pe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case pe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=pe.NONE}}function f_(i){this.enabled!==!1&&i.preventDefault()}function p_(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function m_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const bi=new Sh,$e=new I,di=new I,Me=new He,Ic={X:new I(1,0,0),Y:new I(0,1,0),Z:new I(0,0,1)},Lo={type:"change"},Dc={type:"mouseDown",mode:null},Lc={type:"mouseUp",mode:null},Nc={type:"objectChange"};class g_ extends Eh{constructor(t,e=null){super(void 0,e);const n=new S_(this);this._root=n;const s=new E_;this._gizmo=s,n.add(s);const r=new b_;this._plane=r,n.add(r);const o=this;function a(v,S){let R=S;Object.defineProperty(o,v,{get:function(){return R!==void 0?R:S},set:function(E){R!==E&&(R=E,r[v]=E,s[v]=E,o.dispatchEvent({type:v+"-changed",value:E}),o.dispatchEvent(Lo))}}),o[v]=S,r[v]=S,s[v]=S}a("camera",t),a("object",void 0),a("enabled",!0),a("axis",null),a("mode","translate"),a("translationSnap",null),a("rotationSnap",null),a("scaleSnap",null),a("space","world"),a("size",1),a("dragging",!1),a("showX",!0),a("showY",!0),a("showZ",!0),a("showXY",!0),a("showYZ",!0),a("showXZ",!0),a("minX",-1/0),a("maxX",1/0),a("minY",-1/0),a("maxY",1/0),a("minZ",-1/0),a("maxZ",1/0);const l=new I,c=new I,u=new He,f=new He,d=new I,h=new He,g=new I,x=new I,p=new I,m=0,_=new I;a("worldPosition",l),a("worldPositionStart",c),a("worldQuaternion",u),a("worldQuaternionStart",f),a("cameraPosition",d),a("cameraQuaternion",h),a("pointStart",g),a("pointEnd",x),a("rotationAxis",p),a("rotationAngle",m),a("eye",_),this._offset=new I,this._startNorm=new I,this._endNorm=new I,this._cameraScale=new I,this._parentPosition=new I,this._parentQuaternion=new He,this._parentQuaternionInv=new He,this._parentScale=new I,this._worldScaleStart=new I,this._worldQuaternionInv=new He,this._worldScale=new I,this._positionStart=new I,this._quaternionStart=new He,this._scaleStart=new I,this._getPointer=__.bind(this),this._onPointerDown=v_.bind(this),this._onPointerHover=x_.bind(this),this._onPointerMove=y_.bind(this),this._onPointerUp=M_.bind(this),e!==null&&this.connect(e)}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction=""}getHelper(){return this._root}pointerHover(t){if(this.object===void 0||this.dragging===!0)return;t!==null&&bi.setFromCamera(t,this.camera);const e=No(this._gizmo.picker[this.mode],bi);e?this.axis=e.object.name:this.axis=null}pointerDown(t){if(!(this.object===void 0||this.dragging===!0||t!=null&&t.button!==0)&&this.axis!==null){t!==null&&bi.setFromCamera(t,this.camera);const e=No(this._plane,bi,!0);e&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(e.point).sub(this.worldPositionStart)),this.dragging=!0,Dc.mode=this.mode,this.dispatchEvent(Dc)}}pointerMove(t){const e=this.axis,n=this.mode,s=this.object;let r=this.space;if(n==="scale"?r="local":(e==="E"||e==="XYZE"||e==="XYZ")&&(r="world"),s===void 0||e===null||this.dragging===!1||t!==null&&t.button!==-1)return;t!==null&&bi.setFromCamera(t,this.camera);const o=No(this._plane,bi,!0);if(o){if(this.pointEnd.copy(o.point).sub(this.worldPositionStart),n==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),r==="local"&&e!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),e.indexOf("X")===-1&&(this._offset.x=0),e.indexOf("Y")===-1&&(this._offset.y=0),e.indexOf("Z")===-1&&(this._offset.z=0),r==="local"&&e!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),s.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(r==="local"&&(s.position.applyQuaternion(Me.copy(this._quaternionStart).invert()),e.search("X")!==-1&&(s.position.x=Math.round(s.position.x/this.translationSnap)*this.translationSnap),e.search("Y")!==-1&&(s.position.y=Math.round(s.position.y/this.translationSnap)*this.translationSnap),e.search("Z")!==-1&&(s.position.z=Math.round(s.position.z/this.translationSnap)*this.translationSnap),s.position.applyQuaternion(this._quaternionStart)),r==="world"&&(s.parent&&s.position.add($e.setFromMatrixPosition(s.parent.matrixWorld)),e.search("X")!==-1&&(s.position.x=Math.round(s.position.x/this.translationSnap)*this.translationSnap),e.search("Y")!==-1&&(s.position.y=Math.round(s.position.y/this.translationSnap)*this.translationSnap),e.search("Z")!==-1&&(s.position.z=Math.round(s.position.z/this.translationSnap)*this.translationSnap),s.parent&&s.position.sub($e.setFromMatrixPosition(s.parent.matrixWorld)))),s.position.x=Math.max(this.minX,Math.min(this.maxX,s.position.x)),s.position.y=Math.max(this.minY,Math.min(this.maxY,s.position.y)),s.position.z=Math.max(this.minZ,Math.min(this.maxZ,s.position.z));else if(n==="scale"){if(e.search("XYZ")!==-1){let a=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(a*=-1),di.set(a,a,a)}else $e.copy(this.pointStart),di.copy(this.pointEnd),$e.applyQuaternion(this._worldQuaternionInv),di.applyQuaternion(this._worldQuaternionInv),di.divide($e),e.search("X")===-1&&(di.x=1),e.search("Y")===-1&&(di.y=1),e.search("Z")===-1&&(di.z=1);s.scale.copy(this._scaleStart).multiply(di),this.scaleSnap&&(e.search("X")!==-1&&(s.scale.x=Math.round(s.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),e.search("Y")!==-1&&(s.scale.y=Math.round(s.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),e.search("Z")!==-1&&(s.scale.z=Math.round(s.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(n==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);const a=20/this.worldPosition.distanceTo($e.setFromMatrixPosition(this.camera.matrixWorld));let l=!1;e==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot($e.copy(this.rotationAxis).cross(this.eye))*a):(e==="X"||e==="Y"||e==="Z")&&(this.rotationAxis.copy(Ic[e]),$e.copy(Ic[e]),r==="local"&&$e.applyQuaternion(this.worldQuaternion),$e.cross(this.eye),$e.length()===0?l=!0:this.rotationAngle=this._offset.dot($e.normalize())*a),(e==="E"||l)&&(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),r==="local"&&e!=="E"&&e!=="XYZE"?(s.quaternion.copy(this._quaternionStart),s.quaternion.multiply(Me.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),s.quaternion.copy(Me.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),s.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(Lo),this.dispatchEvent(Nc)}}pointerUp(t){t!==null&&t.button!==0||(this.dragging&&this.axis!==null&&(Lc.mode=this.mode,this.dispatchEvent(Lc)),this.dragging=!1,this.axis=null)}dispose(){this.disconnect(),this._root.dispose()}attach(t){return this.object=t,this._root.visible=!0,this}detach(){return this.object=void 0,this.axis=null,this._root.visible=!1,this}reset(){this.enabled&&this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(Lo),this.dispatchEvent(Nc),this.pointStart.copy(this.pointEnd))}getRaycaster(){return bi}getMode(){return this.mode}setMode(t){this.mode=t}setTranslationSnap(t){this.translationSnap=t}setRotationSnap(t){this.rotationSnap=t}setScaleSnap(t){this.scaleSnap=t}setSize(t){this.size=t}setSpace(t){this.space=t}setColors(t,e,n,s){const r=this._gizmo.materialLib;r.xAxis.color.set(t),r.yAxis.color.set(e),r.zAxis.color.set(n),r.active.color.set(s),r.xAxisTransparent.color.set(t),r.yAxisTransparent.color.set(e),r.zAxisTransparent.color.set(n),r.activeTransparent.color.set(s),r.xAxis._color&&r.xAxis._color.set(t),r.yAxis._color&&r.yAxis._color.set(e),r.zAxis._color&&r.zAxis._color.set(n),r.active._color&&r.active._color.set(s),r.xAxisTransparent._color&&r.xAxisTransparent._color.set(t),r.yAxisTransparent._color&&r.yAxisTransparent._color.set(e),r.zAxisTransparent._color&&r.zAxisTransparent._color.set(n),r.activeTransparent._color&&r.activeTransparent._color.set(s)}}function __(i){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:i.button};{const t=this.domElement.getBoundingClientRect();return{x:(i.clientX-t.left)/t.width*2-1,y:-(i.clientY-t.top)/t.height*2+1,button:i.button}}}function x_(i){if(this.enabled)switch(i.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(i));break}}function v_(i){this.enabled&&(document.pointerLockElement||this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(i)),this.pointerDown(this._getPointer(i)))}function y_(i){this.enabled&&this.pointerMove(this._getPointer(i))}function M_(i){this.enabled&&(this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(i)))}function No(i,t,e){const n=t.intersectObject(i,!0);for(let s=0;s<n.length;s++)if(n[s].object.visible||e)return n[s];return!1}const gr=new ei,_e=new I(0,1,0),Uc=new I(0,0,0),Fc=new ye,_r=new He,Tr=new He,Tn=new I,Oc=new ye,ws=new I(1,0,0),wi=new I(0,1,0),Ts=new I(0,0,1),xr=new I,vs=new I,ys=new I;class S_ extends Ue{constructor(t){super(),this.isTransformControlsRoot=!0,this.controls=t,this.visible=!1}updateMatrixWorld(t){const e=this.controls;e.object!==void 0&&(e.object.updateMatrixWorld(),e.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):e.object.parent.matrixWorld.decompose(e._parentPosition,e._parentQuaternion,e._parentScale),e.object.matrixWorld.decompose(e.worldPosition,e.worldQuaternion,e._worldScale),e._parentQuaternionInv.copy(e._parentQuaternion).invert(),e._worldQuaternionInv.copy(e.worldQuaternion).invert()),e.camera.updateMatrixWorld(),e.camera.matrixWorld.decompose(e.cameraPosition,e.cameraQuaternion,e._cameraScale),e.camera.isOrthographicCamera?e.camera.getWorldDirection(e.eye).negate():e.eye.copy(e.cameraPosition).sub(e.worldPosition).normalize(),super.updateMatrixWorld(t)}dispose(){this.traverse(function(t){t.geometry&&t.geometry.dispose(),t.material&&t.material.dispose()})}}class E_ extends Ue{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";const t=new Ie({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),e=new rn({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),n=t.clone();n.opacity=.15;const s=e.clone();s.opacity=.5;const r=t.clone();r.color.setHex(16711680);const o=t.clone();o.color.setHex(65280);const a=t.clone();a.color.setHex(255);const l=t.clone();l.color.setHex(16711680),l.opacity=.5;const c=t.clone();c.color.setHex(65280),c.opacity=.5;const u=t.clone();u.color.setHex(255),u.opacity=.5;const f=t.clone();f.opacity=.25;const d=t.clone();d.color.setHex(16776960),d.opacity=.25;const h=t.clone();h.color.setHex(16776960);const g=t.clone();g.color.setHex(7895160),this.materialLib={xAxis:r,yAxis:o,zAxis:a,active:h,xAxisTransparent:l,yAxisTransparent:c,zAxisTransparent:u,activeTransparent:d};const x=new Xe(0,.04,.1,12);x.translate(0,.05,0);const p=new De(.08,.08,.08);p.translate(0,.04,0);const m=new ie;m.setAttribute("position",new ne([0,0,0,1,0,0],3));const _=new Xe(.0075,.0075,.5,3);_.translate(0,.25,0);function v(N,z){const F=new Ai(N,.0075,3,64,z*Math.PI*2);return F.rotateY(Math.PI/2),F.rotateX(Math.PI/2),F}function S(){const N=new ie;return N.setAttribute("position",new ne([0,0,0,1,1,1],3)),N}const R={X:[[new at(x,r),[.5,0,0],[0,0,-Math.PI/2]],[new at(x,r),[-.5,0,0],[0,0,Math.PI/2]],[new at(_,r),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new at(x,o),[0,.5,0]],[new at(x,o),[0,-.5,0],[Math.PI,0,0]],[new at(_,o)]],Z:[[new at(x,a),[0,0,.5],[Math.PI/2,0,0]],[new at(x,a),[0,0,-.5],[-Math.PI/2,0,0]],[new at(_,a),null,[Math.PI/2,0,0]]],XYZ:[[new at(new Ji(.1,0),f),[0,0,0]]],XY:[[new at(new De(.15,.15,.01),u),[.15,.15,0]]],YZ:[[new at(new De(.15,.15,.01),l),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new at(new De(.15,.15,.01),c),[.15,0,.15],[-Math.PI/2,0,0]]]},E={X:[[new at(new Xe(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new at(new Xe(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new at(new Xe(.2,0,.6,4),n),[0,.3,0]],[new at(new Xe(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new at(new Xe(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new at(new Xe(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new at(new Ji(.2,0),n)]],XY:[[new at(new De(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new at(new De(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new at(new De(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]]},C={START:[[new at(new Ji(.01,2),s),null,null,null,"helper"]],END:[[new at(new Ji(.01,2),s),null,null,null,"helper"]],DELTA:[[new Se(S(),s),null,null,null,"helper"]],X:[[new Se(m,s),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Se(m,s),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Se(m,s),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},y={XYZE:[[new at(v(.5,1),g),null,[0,Math.PI/2,0]]],X:[[new at(v(.5,.5),r)]],Y:[[new at(v(.5,.5),o),null,[0,0,-Math.PI/2]]],Z:[[new at(v(.5,.5),a),null,[0,Math.PI/2,0]]],E:[[new at(v(.75,1),d),null,[0,Math.PI/2,0]]]},P={AXIS:[[new Se(m,s),[-1e3,0,0],null,[1e6,1,1],"helper"]]},D={XYZE:[[new at(new Ka(.25,10,8),n)]],X:[[new at(new Ai(.5,.1,4,24),n),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new at(new Ai(.5,.1,4,24),n),[0,0,0],[Math.PI/2,0,0]]],Z:[[new at(new Ai(.5,.1,4,24),n),[0,0,0],[0,0,-Math.PI/2]]],E:[[new at(new Ai(.75,.1,2,24),n)]]},w={X:[[new at(p,r),[.5,0,0],[0,0,-Math.PI/2]],[new at(_,r),[0,0,0],[0,0,-Math.PI/2]],[new at(p,r),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new at(p,o),[0,.5,0]],[new at(_,o)],[new at(p,o),[0,-.5,0],[0,0,Math.PI]]],Z:[[new at(p,a),[0,0,.5],[Math.PI/2,0,0]],[new at(_,a),[0,0,0],[Math.PI/2,0,0]],[new at(p,a),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new at(new De(.15,.15,.01),u),[.15,.15,0]]],YZ:[[new at(new De(.15,.15,.01),l),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new at(new De(.15,.15,.01),c),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new at(new De(.1,.1,.1),f)]]},L={X:[[new at(new Xe(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new at(new Xe(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new at(new Xe(.2,0,.6,4),n),[0,.3,0]],[new at(new Xe(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new at(new Xe(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new at(new Xe(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new at(new De(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new at(new De(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new at(new De(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new at(new De(.2,.2,.2),n),[0,0,0]]]},B={X:[[new Se(m,s),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Se(m,s),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Se(m,s),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function O(N){const z=new Ue;for(const F in N)for(let q=N[F].length;q--;){const H=N[F][q][0].clone(),Z=N[F][q][1],tt=N[F][q][2],dt=N[F][q][3],It=N[F][q][4];H.name=F,H.tag=It,Z&&H.position.set(Z[0],Z[1],Z[2]),tt&&H.rotation.set(tt[0],tt[1],tt[2]),dt&&H.scale.set(dt[0],dt[1],dt[2]),H.updateMatrix();const zt=H.geometry.clone();zt.applyMatrix4(H.matrix),H.geometry=zt,H.renderOrder=1/0,H.position.set(0,0,0),H.rotation.set(0,0,0),H.scale.set(1,1,1),z.add(H)}return z}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=O(R)),this.add(this.gizmo.rotate=O(y)),this.add(this.gizmo.scale=O(w)),this.add(this.picker.translate=O(E)),this.add(this.picker.rotate=O(D)),this.add(this.picker.scale=O(L)),this.add(this.helper.translate=O(C)),this.add(this.helper.rotate=O(P)),this.add(this.helper.scale=O(B)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(t){const n=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:Tr;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let s=[];s=s.concat(this.picker[this.mode].children),s=s.concat(this.gizmo[this.mode].children),s=s.concat(this.helper[this.mode].children);for(let r=0;r<s.length;r++){const o=s[r];o.visible=!0,o.rotation.set(0,0,0),o.position.copy(this.worldPosition);let a;if(this.camera.isOrthographicCamera?a=(this.camera.top-this.camera.bottom)/this.camera.zoom:a=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),o.scale.set(1,1,1).multiplyScalar(a*this.size/4),o.tag==="helper"){o.visible=!1,o.name==="AXIS"?(o.visible=!!this.axis,this.axis==="X"&&(Me.setFromEuler(gr.set(0,0,0)),o.quaternion.copy(n).multiply(Me),Math.abs(_e.copy(ws).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Y"&&(Me.setFromEuler(gr.set(0,0,Math.PI/2)),o.quaternion.copy(n).multiply(Me),Math.abs(_e.copy(wi).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Z"&&(Me.setFromEuler(gr.set(0,Math.PI/2,0)),o.quaternion.copy(n).multiply(Me),Math.abs(_e.copy(Ts).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="XYZE"&&(Me.setFromEuler(gr.set(0,Math.PI/2,0)),_e.copy(this.rotationAxis),o.quaternion.setFromRotationMatrix(Fc.lookAt(Uc,_e,wi)),o.quaternion.multiply(Me),o.visible=this.dragging),this.axis==="E"&&(o.visible=!1)):o.name==="START"?(o.position.copy(this.worldPositionStart),o.visible=this.dragging):o.name==="END"?(o.position.copy(this.worldPosition),o.visible=this.dragging):o.name==="DELTA"?(o.position.copy(this.worldPositionStart),o.quaternion.copy(this.worldQuaternionStart),$e.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),$e.applyQuaternion(this.worldQuaternionStart.clone().invert()),o.scale.copy($e),o.visible=this.dragging):(o.quaternion.copy(n),this.dragging?o.position.copy(this.worldPositionStart):o.position.copy(this.worldPosition),this.axis&&(o.visible=this.axis.search(o.name)!==-1));continue}o.quaternion.copy(n),this.mode==="translate"||this.mode==="scale"?(o.name==="X"&&Math.abs(_e.copy(ws).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Y"&&Math.abs(_e.copy(wi).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Z"&&Math.abs(_e.copy(Ts).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XY"&&Math.abs(_e.copy(Ts).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="YZ"&&Math.abs(_e.copy(ws).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XZ"&&Math.abs(_e.copy(wi).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1)):this.mode==="rotate"&&(_r.copy(n),_e.copy(this.eye).applyQuaternion(Me.copy(n).invert()),o.name.search("E")!==-1&&o.quaternion.setFromRotationMatrix(Fc.lookAt(this.eye,Uc,wi)),o.name==="X"&&(Me.setFromAxisAngle(ws,Math.atan2(-_e.y,_e.z)),Me.multiplyQuaternions(_r,Me),o.quaternion.copy(Me)),o.name==="Y"&&(Me.setFromAxisAngle(wi,Math.atan2(_e.x,_e.z)),Me.multiplyQuaternions(_r,Me),o.quaternion.copy(Me)),o.name==="Z"&&(Me.setFromAxisAngle(Ts,Math.atan2(_e.y,_e.x)),Me.multiplyQuaternions(_r,Me),o.quaternion.copy(Me))),o.visible=o.visible&&(o.name.indexOf("X")===-1||this.showX),o.visible=o.visible&&(o.name.indexOf("Y")===-1||this.showY),o.visible=o.visible&&(o.name.indexOf("Z")===-1||this.showZ),o.visible=o.visible&&(o.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),o.visible=o.visible&&(o.name.indexOf("XY")===-1||this.showXY),o.visible=o.visible&&(o.name.indexOf("YZ")===-1||this.showYZ),o.visible=o.visible&&(o.name.indexOf("XZ")===-1||this.showXZ),o.material._color=o.material._color||o.material.color.clone(),o.material._opacity=o.material._opacity||o.material.opacity,o.material.color.copy(o.material._color),o.material.opacity=o.material._opacity,this.enabled&&this.axis&&(o.name===this.axis?(o.material.color.copy(this.materialLib.active.color),o.material.opacity=1):this.axis.split("").some(function(l){return o.name===l})&&(o.material.color.copy(this.materialLib.active.color),o.material.opacity=1))}super.updateMatrixWorld(t)}}class b_ extends at{constructor(){super(new Bs(1e5,1e5,2,2),new Ie({visible:!1,wireframe:!0,side:We,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(t){let e=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(e="local"),xr.copy(ws).applyQuaternion(e==="local"?this.worldQuaternion:Tr),vs.copy(wi).applyQuaternion(e==="local"?this.worldQuaternion:Tr),ys.copy(Ts).applyQuaternion(e==="local"?this.worldQuaternion:Tr),_e.copy(vs),this.mode){case"translate":case"scale":switch(this.axis){case"X":_e.copy(this.eye).cross(xr),Tn.copy(xr).cross(_e);break;case"Y":_e.copy(this.eye).cross(vs),Tn.copy(vs).cross(_e);break;case"Z":_e.copy(this.eye).cross(ys),Tn.copy(ys).cross(_e);break;case"XY":Tn.copy(ys);break;case"YZ":Tn.copy(xr);break;case"XZ":_e.copy(ys),Tn.copy(vs);break;case"XYZ":case"E":Tn.set(0,0,0);break}break;case"rotate":default:Tn.set(0,0,0)}Tn.length()===0?this.quaternion.copy(this.cameraQuaternion):(Oc.lookAt($e.set(0,0,0),Tn,_e),this.quaternion.setFromRotationMatrix(Oc)),super.updateMatrixWorld(t)}}class nt{constructor(t,e){this.x=t,this.y=e}add(t){return new nt(this.x+t.x,this.y+t.y)}sub(t){return new nt(this.x-t.x,this.y-t.y)}scale(t){return new nt(this.x*t,this.y*t)}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.lengthSq())}normalize(){const t=this.length();return t>1e-12?this.scale(1/t):new nt(0,0)}distSq(t){return(this.x-t.x)**2+(this.y-t.y)**2}dist(t){return Math.sqrt(this.distSq(t))}}function w_(i){let t=0;for(let e=0;e<i.length;e++){const n=i[e],s=i[(e+1)%i.length];t+=(s.x-n.x)*(s.y+n.y)}return t<0?i:[...i].reverse()}function T_(i,t){const e=t.x-i.x,n=t.y-i.y;return new nt(-n,e).normalize()}function tl(i,t,e,n){const s=n.sub(e),r=t.cross(s);if(Math.abs(r)<1e-10)return null;const o=e.sub(i),a=o.cross(s)/r,l=o.cross(t)/r;return a>1e-6&&l>=0&&l<=1?{point:i.add(t.scale(a)),s:a}:null}function Ln(i,t,e){const n=e.sub(t),s=i.sub(t),r=n.lengthSq();if(r<1e-10)return t;let o=s.dot(n)/r;return o=Math.max(0,Math.min(1,o)),t.add(n.scale(o))}function A_(i,t){let e=1/0,n=null,s=-1;for(let r=0;r<t.length;r++){const o=t[r],a=t[(r+1)%t.length],l=Ln(i,o,a),c=i.dist(l);c<e&&(e=c,n=l,s=r)}return{distance:e,point:n,edgeIndex:s}}function Lh(i,t){let e=i.x,n=i.y,s=!1;for(let r=0,o=t.length-1;r<t.length;o=r++){let a=t[r].x,l=t[r].y,c=t[o].x,u=t[o].y;l>n!=u>n&&e<(c-a)*(n-l)/(u-l)+a&&(s=!s)}return s}function P_(i){if(i.length===0)return null;let t=i[0];for(let e=1;e<i.length;e++)if(t=R_(t,i[e]),!t)return null;return C_(t)}function R_(i,t){const e=[];for(let x=0;x<i.length;x++)e.push([i[x],i[(x+1)%i.length]]);const n=[];for(let x=0;x<t.length;x++)n.push([t[x],t[(x+1)%t.length]]);const s=x=>`${x.x.toFixed(4)},${x.y.toFixed(4)}`,r=new Set;for(const x of n)r.add(`${s(x[0])}->${s(x[1])}`);const o=e.filter(x=>!r.has(`${s(x[1])}->${s(x[0])}`)),a=new Set;for(const x of e)a.add(`${s(x[0])}->${s(x[1])}`);const l=n.filter(x=>!a.has(`${s(x[1])}->${s(x[0])}`)),c=[...o,...l];if(c.length===0)return null;const u=new Map;for(const x of c)u.set(s(x[0]),{start:x[0],end:x[1]});let d=Array.from(u.keys())[0];const h=[],g=new Set;for(;d&&!g.has(d);){g.add(d);const x=u.get(d);if(!x)break;h.push(x.start),d=s(x.end)}return g.size<c.length?null:h}function C_(i){if(i.length<3)return i;const t=[];for(let e=0;e<i.length;e++){const n=i[(e-1+i.length)%i.length],s=i[e],r=i[(e+1)%i.length],o=s.x-n.x,a=s.y-n.y,l=r.x-s.x,c=r.y-s.y,u=Math.hypot(o,a),f=Math.hypot(l,c);if(u<1e-6||f<1e-6)continue;const d=(o*c-a*l)/(u*f);Math.abs(d)>.001&&t.push(s)}return t}const Ms=(i,t,e)=>{if(i===t)return 1;if(typeof i!="string"||typeof t!="string")return 0;const n=i.startsWith("V")?parseInt(i.substring(1))*2:parseInt(i.substring(1))*2+1,s=t.startsWith("V")?parseInt(t.substring(1))*2:parseInt(t.substring(1))*2+1;return Math.min(Math.abs(n-s),2*e-Math.abs(n-s))===1?.5:0};class I_{constructor(t,e={}){this.polygon=w_(t.map(n=>new nt(n.x,n.y))),this.epsilon=e.epsilon!==void 0?e.epsilon:1e-5,this.tangentEpsilon=e.tangentEpsilon||1e-4}containsBall(t,e){const{distance:n}=A_(t,this.polygon);return n>=e-this.epsilon}computeMedialPoint(t,e){let n=t,s=e,r=t.add(e).scale(.5),o=r.dist(t);for(;s.dist(n)>this.epsilon;)this.containsBall(r,o)?n=r:s=r,r=n.add(s).scale(.5),o=r.dist(t);return r.radius=o,r}computeStructuredSkeleton(t){const e=[],n=[],s=this.polygon.length,r=this.polygon.map((f,d)=>{const h=(d-1+s)%s,g=(d+1)%s,x=f.sub(this.polygon[h]),p=this.polygon[g].sub(f);return x.cross(p)>=0?"CONVEX":"CONCAVE"});let o=0;for(let f=0;f<s;f++)o+=this.polygon[f].dist(this.polygon[(f+1)%s]);const a=t*s,l=[];for(let f=0;f<s;f++){const d=this.polygon[f],h=this.polygon[(f+1)%s],g=d.dist(h);if(g===0)continue;const x=T_(d,h);let p=Math.max(5,Math.floor(g/o*a));p%2!==0&&(p+=1);for(let m=1;m<p;m++){const _=d.add(h.sub(d).scale(m/p));let v=null,S=1/0;for(let R=0;R<s;R++){const E=tl(_,x,this.polygon[R],this.polygon[(R+1)%s]);E&&E.s<S&&(S=E.s,v=E.point)}if(v){const R=this.computeMedialPoint(_,v);l.push(R)}}}l.forEach(f=>{f.governors=new Set;for(let d=0;d<s;d++){const h=this.polygon[d],g=this.polygon[(d+1)%s],x=Ln(f,h,g),p=f.dist(x),m=Math.max(.2,f.radius*.05);if(Math.abs(p-f.radius)<m){const _=g.sub(h),v=_.length(),S=v===0?p:Math.abs((f.x-h.x)*_.y-(f.y-h.y)*_.x)/v;Math.abs(S-f.radius)<m&&f.governors.add("E"+d),x.dist(h)<.05*v&&r[d]==="CONCAVE"?f.governors.add("V"+d):x.dist(g)<.05*v&&r[(d+1)%s]==="CONCAVE"&&f.governors.add("V"+(d+1)%s)}}});const c=l.filter(f=>{let d=[];for(let g=0;g<s;g++)if(f.governors.has("E"+g)||f.governors.has("V"+g)){const x=this.polygon[g],p=this.polygon[(g+1)%s],_=(f.governors.has("V"+g)?x:Ln(f,x,p)).sub(f).normalize();_.lengthSq()>1e-6&&d.push(_)}if(d.length<2)return!0;let h=1;for(let g=0;g<d.length;g++)for(let x=g+1;x<d.length;x++){const p=d[g].dot(d[x]);h=Math.min(h,p)}return h<.92});e.push(...c);for(let f=0;f<s;f++)if(r[f]==="CONVEX"){const d=(f-1+s)%s,h=(f+1)%s,g=this.polygon[d],x=this.polygon[f],p=this.polygon[h],m=g.sub(x).normalize(),_=p.sub(x).normalize();if(m.dot(_)>-.92){const R=new nt(x.x,x.y);R.radius=0,R.isEndPoint=!0,R.governors=new Set(["E"+d,"V"+f,"E"+f]),n.push(R)}}const u=[];return c.forEach(f=>{let d=!1;for(const h of u){let g=0;if(f.governors.forEach(x=>h.governors.forEach(p=>{g+=Ms(x,p,s)})),g>=1&&f.dist(h)<2.5){h.x=(h.x*h.count+f.x)/(h.count+1),h.y=(h.y*h.count+f.y)/(h.count+1),h.radius=(h.radius*h.count+f.radius)/(h.count+1),h.count++,f.governors.forEach(x=>h.governors.add(x)),d=!0;break}}if(!d){const h=new nt(f.x,f.y);h.governors=new Set(f.governors),h.count=1,h.isEndPoint=!1,h.radius=f.radius,u.push(h)}}),n.push(...u),{regularPoints:e,junctionPoints:n}}simplifySkeleton(t,e,n=20){const r=e.filter(_=>_.isEndPoint).map(_=>{const v=new nt(_.x,_.y);return v.governors=new Set(_.governors),v.isEndPoint=!0,v.count=1,v.radius=0,v});t.forEach(_=>{let v=!1;for(const S of r){if(S.isEndPoint)continue;let R=0;if(_.governors.forEach(E=>S.governors.forEach(C=>{R+=Ms(E,C,this.polygon.length)})),R>=1&&_.dist(S)<2.5){S.x=(S.x*S.count+_.x)/(S.count+1),S.y=(S.y*S.count+_.y)/(S.count+1),S.radius=(S.radius*S.count+_.radius)/(S.count+1),S.count++,_.governors.forEach(E=>S.governors.add(E)),v=!0;break}}if(!v){const S=new nt(_.x,_.y);S.governors=new Set(_.governors),S.count=1,S.isEndPoint=!1,S.radius=_.radius,r.push(S)}});const o=r.map(()=>new Set),a=[];for(let _=0;_<r.length;_++)for(let v=_+1;v<r.length;v++){let S=0;r[_].governors.forEach(R=>r[v].governors.forEach(E=>{S+=Ms(R,E,this.polygon.length)})),S>=1&&a.push({i:_,j:v,distSq:r[_].distSq(r[v])})}for(const _ of a){let v=!0;for(let S=0;S<r.length;S++)if(!(S===_.i||S===_.j)&&r[_.i].distSq(r[S])<_.distSq-.01&&r[S].distSq(r[_.j])<_.distSq-.01){let R=0,E=0;if(r[S].governors.forEach(C=>r[_.i].governors.forEach(y=>{R+=Ms(C,y,this.polygon.length)})),r[S].governors.forEach(C=>r[_.j].governors.forEach(y=>{E+=Ms(C,y,this.polygon.length)})),R>=1&&E>=1){v=!1;break}}v&&(o[_.i].add(_.j),o[_.j].add(_.i))}const l=r.map(()=>!0);let c=!0;for(;c;){c=!1;for(let _=0;_<r.length;_++)if(l[_]){for(const v of Array.from(o[_])){if(!l[v]||_>=v)continue;const S=(r[_].radius+r[v].radius)/2,R=Math.max(n,S*.4);if(r[_].dist(r[v])<R){if(r[_].isEndPoint&&r[v].isEndPoint)continue;const E=r[_].isEndPoint?_:r[v].isEndPoint?v:_,C=E===_?v:_;r[E].isEndPoint||(r[E].x=(r[E].x*r[E].count+r[C].x*r[C].count)/(r[E].count+r[C].count),r[E].y=(r[E].y*r[E].count+r[C].y*r[C].count)/(r[E].count+r[C].count),r[E].radius=(r[E].radius*r[E].count+r[C].radius*r[C].count)/(r[E].count+r[C].count),r[E].count+=r[C].count),r[C].governors.forEach(y=>r[E].governors.add(y)),o[C].forEach(y=>{y!==E&&(o[y].delete(C),o[y].add(E),o[E].add(y))}),o[E].delete(C),l[C]=!1,o[C].clear(),c=!0;break}}if(c)break}}const u=(_,v)=>{const R=v.x-_.x,E=v.y-_.y,C=new nt(_.x+R*.001,_.y+E*.001),y=new nt(v.x-R*.001,v.y-E*.001);for(let P=0;P<this.polygon.length;P++){const D=this.polygon[P],w=this.polygon[(P+1)%this.polygon.length],L=(O,N,z)=>(z.y-O.y)*(N.x-O.x)>(N.y-O.y)*(z.x-O.x);if(L(C,D,w)!==L(y,D,w)&&L(C,y,D)!==L(C,y,w))return!1}return!0},f=Array.from({length:r.length},(_,v)=>v),d=_=>f[_]===_?_:f[_]=d(f[_]),h=(_,v)=>{const S=d(_),R=d(v);return S!==R?(f[S]=R,!0):!1};for(let _=0;_<r.length;_++)if(l[_])for(const v of o[_])l[v]&&_<v&&h(_,v);for(let _=0;_<r.length;_++)if(l[_])for(let v=_+1;v<r.length;v++)l[v]&&d(_)!==d(v)&&u(r[_],r[v])&&(h(_,v),o[_].add(v),o[v].add(_));const g=(_,v,S)=>{const R=S.sub(v),E=_.sub(v),C=R.lengthSq();if(C<1e-10)return _.dist(v);let y=E.dot(R)/C;y=Math.max(0,Math.min(1,y));const P=v.add(R.scale(y));return _.dist(P)};let x=!0;for(;x;){x=!1;for(let _=0;_<r.length;_++)if(!(!l[_]||r[_].isEndPoint)){if(o[_].size===2){const v=Array.from(o[_]),S=v[0],R=v[1],E=r[S],C=r[R],y=r[_],P=E.sub(y).normalize(),D=C.sub(y).normalize(),w=P.dot(D),L=g(y,E,C);let B=!1;for(const O of y.governors)if(!E.governors.has(O)&&!C.governors.has(O)){B=!0;break}(w<-.95||L<.5||!B)&&(o[S].delete(_),o[R].delete(_),S!==R&&(o[S].add(R),o[R].add(S)),l[_]=!1,o[_].clear(),x=!0)}else if(o[_].size<=1){const v=Array.from(o[_]);v.length===1&&o[v[0]].delete(_),l[_]=!1,o[_].clear(),x=!0}}}const p=[];for(let _=0;_<r.length;_++)if(l[_])for(const v of o[_])_<v&&p.push({start:r[_],end:r[v]});const m=r.filter((_,v)=>l[v]);for(let _=0;_<r.length;_++)l[_]&&(r[_].isJunction=o[_].size>=3);return{segments:p,nodes:m}}computeVoronoiCells(t,e=3e3,n=3e3){const s=[];if(t.length===0)return[];const r=(o,a,l)=>{const c=[];if(o.length===0)return[];for(let u=0;u<o.length;u++){const f=o[u],d=o[(u+1)%o.length],h=f.sub(a).dot(l),g=d.sub(a).dot(l);if(h>=-1e-9&&c.push(f),h>=0&&g<0||h<0&&g>=0){const x=h-g;if(Math.abs(x)>1e-9){const p=h/x;c.push(f.add(d.sub(f).scale(p)))}}}return c};for(let o=0;o<t.length;o++){const a=t[o];let l=[new nt(-e,-n),new nt(e,-n),new nt(e,n),new nt(-e,n)];for(let c=0;c<t.length;c++){if(o===c)continue;const u=t[c],f=a.add(u).scale(.5),d=a.sub(u).normalize();l=r(l,f,d)}s.push({seed:a,polygon:l})}return s}}class D_{constructor(t){this.viewport=t}async generateRender(t,e,n){try{e("Preparing scene renders...");const s=this.viewport.container.clientWidth,r=this.viewport.container.clientHeight,o=this.viewport.renderer.getPixelRatio(),a=document.getElementById("imagen-resolution");if(a){const L=a.value;let B=3840,O=2160;L==="4k"?(B=3840,O=2160):L==="2k"?(B=2560,O=1440):L==="1k"&&(B=1920,O=1080),this.viewport.camera.aspect=B/O,this.viewport.camera.updateProjectionMatrix(),this.viewport.renderer.setPixelRatio(1),this.viewport.renderer.setSize(B,O,!1),this.viewport.composer.setSize(B,O),this.viewport.saoPass&&this.viewport.saoPass.setSize(B,O)}let l=null;this.viewport.osmGroup&&this.viewport.osmGroup.children.forEach(L=>{L.name==="Landmark Buildings (Merged)"&&(l=L,l.material&&l.material.color.setHex(16777215))}),this.viewport.setDisplayMode("STANDARD"),this.viewport.render();let u=this.viewport.renderer.domElement.toDataURL("image/jpeg",.95).split(",")[1];this.viewport.setDisplayMode("DEPTH"),this.viewport.render();const f=this.viewport.renderer.domElement.toDataURL("image/jpeg",.9).split(",")[1];this.viewport.setDisplayMode("STANDARD"),l&&l.material&&l.material.color.setHex(16753920),this.viewport.camera.aspect=s/r,this.viewport.camera.updateProjectionMatrix(),this.viewport.renderer.setPixelRatio(o),this.viewport.renderer.setSize(s,r),this.viewport.composer.setSize(s,r),this.viewport.saoPass&&this.viewport.saoPass.setSize(s,r),this.viewport.onWindowResize(),n&&n(`data:image/jpeg;base64,${u}`,`data:image/jpeg;base64,${f}`),e("Fetching API Key...");const d=await fetch("/api/get-key");if(!d.ok)throw new Error("Failed to retrieve API key");const{key:h}=await d.json();if(!h)throw new Error("API Key is empty");e("Compiling scene parameters...");const g=this.viewport.controls?this.viewport.camera.position.distanceTo(this.viewport.controls.target).toFixed(1):0,x=this.viewport.controls?(Math.PI/2-this.viewport.controls.getPolarAngle()).toFixed(2):0,p=this.viewport.controls?this.viewport.controls.getAzimuthalAngle().toFixed(2):0,m=this.viewport.camera.fov||"Orthographic",_=`Camera Distance: ${g}m, Pitch: ${x} rad, Yaw: ${p} rad, FOV: ${m}`,S=`Transform this building design geometry into a breathtaking, ultra-realistic architectural visualization. 
The design features structural members such as columns, beams, floor slabs, facades, and roofs.
Stated style/theme: "${t||"A modern architectural building design."}". 
STRICTLY apply this theme while elevating it to a cinematic, hyper-detailed architectural rendering standard.
Ensure hyper-crisp details, stunning ray-traced lighting, physically accurate materials (e.g., exposed concrete, structural steel, timber panels, glass facades), and elegant surrounding landscaping (gardens, pathways). The final image must look like a premium architectural visualization render, completely clean, sharp, and awe-inspiring!`,R=`Camera Context: ${_}
${S}`;e("Dispatching payload to Gemini API...");const C=`https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-image-preview:generateContent?key=${h}`,y={systemInstruction:{parts:[{text:"You are an advanced architectural rendering agent utilizing strict structural control. Your primary directive is 100% geometry, silhouette, and scale preservation of the input building design. Treat the input image as an absolute structural mask. Do not alter the base geometry, structural columns, beams, vaults, or floor slabs. Your only job is to compute realistic architectural lighting, apply premium materials (concrete, glass, timber, steel, cladding), and render professional architectural visualization environments around the building."}]},contents:[{role:"user",parts:[{text:`CRITICAL INSTRUCTION: You MUST function like a strict depth-map renderer. Maintain the EXACT silhouette, contours, 3D wireframe structure, and camera perspective of the input image.

RENDER INSTRUCTIONS:
${R}`},{text:"Input 1 (Base Geometry - DO NOT ALTER SHAPE):"},{inlineData:{mimeType:"image/jpeg",data:u}}]}],generationConfig:{responseModalities:["IMAGE"],temperature:0}};console.log(`Payload string length: ${JSON.stringify(y).length}`),console.log(`b64Beauty length: ${u.length}`),console.log(`b64Depth length: ${f.length}`);const P=document.getElementById("imagen-payload-display");if(P){const L=JSON.parse(JSON.stringify(y));L.contents&&L.contents[0].parts[2]&&(L.contents[0].parts[2].inlineData.data=`<BASE64_IMAGE_DATA_TRUNCATED (${u.length} bytes)>`),P.value=JSON.stringify(L,null,2)}const D=await fetch(C,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(y)});if(!D.ok){const L=await D.text();throw new Error(`API Error ${D.status}: ${L}`)}e("Receiving generated image...");const w=await D.json();if(w.candidates&&w.candidates[0].content.parts[0].inlineData){const L=w.candidates[0].content.parts[0].inlineData.data,B=w.candidates[0].content.parts[0].inlineData.mimeType||"image/jpeg";return e("Ready."),{beauty:`data:image/jpeg;base64,${u}`,depth:`data:image/jpeg;base64,${f}`,result:`data:${B};base64,${L}`}}else throw new Error("API returned OK, but no image data found.")}catch(s){throw console.error("ImagenAPI Error:",s),e(`Error: ${s.message}`),this.viewport.setDisplayMode("STANDARD"),s}}}class L_{constructor(t){this.appContext=t,this.worker=new Worker(new URL("/assets/rhino.worker-CEcRQeJi.js",import.meta.url)),this.metadataResolve=null,this.loadResolve=null,this.exportResolve=null,this.rejectCallback=null,this.layers=[],this.worker.onmessage=e=>{const{type:n,success:s,layers:r,objectCount:o,geometries:a,error:l}=e.data;if(!s){console.error("[RhinoManager] Worker error:",l),this.rejectCallback&&this.rejectCallback(new Error(l));return}n==="metadata-result"?(this.layers=r,this.metadataResolve&&this.metadataResolve({layers:r,objectCount:o})):n==="load-result"?(this.processGeometries(a),this.loadResolve&&this.loadResolve(a)):n==="export-result"&&this.exportResolve&&this.exportResolve(e.data.bytes)}}parseMetadata(t){return new Promise((e,n)=>{this.metadataResolve=e,this.rejectCallback=n,this.worker.postMessage({type:"parse-metadata",buffer:t})})}loadLayers(t,e){return new Promise((n,s)=>{this.loadResolve=n,this.rejectCallback=s,this.worker.postMessage({type:"load-layers",buffer:t,layerIndices:e})})}processGeometries(t){console.log(`[RhinoManager] Processing ${t.length} geometries...`),this.clearRhinoGeometries();const e=[],n=new nf;t.forEach(s=>{const r=this.layers.find(l=>l.index===s.layerIndex),o=r?r.color:{r:128,g:128,b:128},a=o.r<<16|o.g<<8|o.b;if(s.type==="mesh")try{const l=typeof s.data=="string"?JSON.parse(s.data):s.data,c=n.parse(l),u=new Ie({color:a,transparent:!0,opacity:.4,side:We}),f=new at(c,u);f.name=s.name,f.userData={type:"rhino-geometry"},this.appContext.rhinoGroup.add(f)}catch(l){console.error("[RhinoManager] Failed to load mesh:",l)}else if(s.type==="curve")try{const l=s.points.map(d=>new I(d[0],d[1],d[2])),c=new ie().setFromPoints(l),u=new rn({color:a,linewidth:2}),f=new Se(c,u);if(f.name=s.name,f.userData={type:"rhino-geometry"},this.appContext.rhinoGroup.add(f),s.points.length>=3){const d=s.points[0],h=s.points[s.points.length-1];if(Math.sqrt((d[0]-h[0])**2+(d[1]-h[1])**2+(d[2]-h[2])**2)<.2){const x=s.points.map(p=>[p[0],p[1]]);x.pop(),e.push(x)}}}catch(l){console.error("[RhinoManager] Failed to load curve:",l)}}),e.length>0&&(console.log(`[RhinoManager] Found ${e.length} closed boundary curves. Setting imported polygons!`),this.appContext.setPolygonsFrom3dm(e))}clearRhinoGeometries(){const t=this.appContext.rhinoGroup;if(t)for(;t.children.length>0;){const e=t.children[0];t.remove(e),e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach(n=>n.dispose()):e.material.dispose())}}exportSceneTo3dm(t="medial_axis_export.3dm"){console.log("[RhinoManager] Triggering background export to .3dm...");const e=this.appContext.state.activePolygonId,n=this.appContext.state.importedPolygons.map(s=>{this.appContext.state.activePolygonId=s.id;const r=s.polygon.map(x=>[x.x,x.y,0]);if(!s.hasScaffold)return{boundary:r,hasScaffold:!1};const o=[];if(this.appContext.state.showSkeleton&&s.polygon.length>=3)if(s.planarGraph){const x=s.planarGraph;x.edges.forEach(p=>{if(p[2]==="skeleton"){const m=x.vertices[p[0]],_=x.vertices[p[1]];o.push([[m.x,m.y,0],[_.x,_.y,0]])}})}else if(this.appContext.state.simplifySkeleton)(this.appContext.state.pruneBranches?s.skeletonData.simplifiedSegments.filter(p=>!(p.start.isEndPoint||p.end.isEndPoint)):s.skeletonData.simplifiedSegments).forEach(p=>{o.push([[p.start.x,p.start.y,0],[p.end.x,p.end.y,0]])});else{const x=s.skeletonData.regularPoints,p=this.appContext.state.samplesPerEdge;for(let m=0;m<s.polygon.length;m++){const _=[];for(let v=0;v<p;v++){const S=m*p+v;x[S]&&_.push([x[S].x,x[S].y,0])}_.length>=2&&o.push(_)}}const a=[];if(this.appContext.state.showSkeleton&&this.appContext.state.showRibs)if(s.planarGraph){const x=s.planarGraph;x.edges.forEach(p=>{if(p[2]&&p[2].startsWith("rib_")){const m=x.vertices[p[0]],_=x.vertices[p[1]];a.push({start:[m.x,m.y,0],end:[_.x,_.y,0]})}})}else s.id===e&&this.appContext.acceptedRibsCache&&this.appContext.acceptedRibsCache.forEach(x=>{a.push({start:[x.source.x,x.source.y,0],end:[x.target.x,x.target.y,0]})});const l=[];if(s.id===e&&this.appContext.state.hoverCircle&&this.appContext.state.hoveredMedialPoint){const x=this.appContext.state.hoveredMedialPoint;l.push({center:[x.x,x.y,0],radius:x.radius})}s.polygon.length>=3&&s.skeletonData.simplifiedNodes&&s.skeletonData.simplifiedNodes.filter(p=>!p.isEndPoint).forEach(p=>{l.push({center:[p.x,p.y,0],radius:p.radius||5})});const c=[];s.structuralBays&&s.structuralBays.forEach(x=>{c.push(x.map(p=>[p.x,p.y,0]))});let u=!0,f=0;for(let x=0;x<s.polygon.length;x++){const p=s.polygon[x],m=s.polygon[(x+1)%s.polygon.length];f+=p.x*m.y-m.x*p.y}u=f>0;const d=[];for(let x=0;x<s.polygon.length;x++){const p=s.polygon[x],m=s.polygon[(x+1)%s.polygon.length],_=m.x-p.x,v=m.y-p.y,S=Math.hypot(_,v);let R=0,E=0;S>1e-6&&(u?(R=v/S,E=-_/S):(R=-v/S,E=_/S)),d.push(new nt(R,E))}const h=[];for(let x=0;x<s.polygon.length;x++){const p=s.polygon[x],m=s.polygon[(x+1)%s.polygon.length],_=d[x];h.push(N_(p,m,_,s,this.appContext.state.importedPolygons))}const g=[];return s.structuralBays&&s.structuralBays.forEach(x=>{g.push(F_(x,s.polygon))}),{boundary:r,hasScaffold:!0,skeleton:o,ribs:a,circles:l,bays:c,planarGraphVertices:s.planarGraph?s.planarGraph.vertices.map(x=>[x.x,x.y,0]):null,planarGraphEdges:s.planarGraph?s.planarGraph.edges.map(x=>[x[0],x[1]]):null,segmentContexts:h,cellIsCorner:g,boundaryNormals:d.map(x=>[x.x,x.y,0])}});return this.appContext.state.activePolygonId=e,new Promise((s,r)=>{this.exportResolve=o=>{try{if(typeof document<"u"){const a=new Blob([o],{type:"application/octet-stream"}),l=document.createElement("a");l.href=URL.createObjectURL(a),l.download=t,document.body.appendChild(l),l.click(),document.body.removeChild(l),URL.revokeObjectURL(l.href)}console.log(`[RhinoManager] Exported ${o.length} bytes to ${t}`),s(o)}catch(a){r(a)}finally{this.exportResolve=null,this.rejectCallback=null}},this.rejectCallback=o=>{this.exportResolve=null,this.rejectCallback=null,r(o)},this.worker.postMessage({type:"export-scene",polygons:n,numFloors:this.appContext.state.numFloors,floorHeight:this.appContext.state.floorHeight,show3DColumns:this.appContext.state.show3DColumns,show3DBeams:this.appContext.state.show3DBeams,showFloorSlabs:this.appContext.state.showFloorSlabs,showBalconies:this.appContext.state.showBalconies,showBriseSoleil:this.appContext.state.showBriseSoleil,showVaultedRoofs:this.appContext.state.showVaultedRoofs,show3DCells:this.appContext.state.show3DCells,columnRadius:this.appContext.state.columnRadius,beamWidth:this.appContext.state.beamWidth,beamDepth:this.appContext.state.beamDepth,slabThickness:this.appContext.state.slabThickness,balconyOffset:this.appContext.state.balconyOffset,balconyThickness:this.appContext.state.balconyThickness,louverWidth:this.appContext.state.louverWidth,louverDepth:this.appContext.state.louverDepth,louverSpacing:this.appContext.state.louverSpacing,vaultHeight:this.appContext.state.vaultHeight})})}}function N_(i,t,e,n,s){const r=i.add(t).scale(.5),o=new nt(r.x+e.x*.1,r.y+e.y*.1),a=e;let l=1/0,c="open_space";return s.forEach(u=>{const f=u.id===n.id;for(let d=0;d<u.polygon.length;d++){const h=u.polygon[d],g=u.polygon[(d+1)%u.polygon.length];if(f){const p=h.dist(i),m=g.dist(t),_=h.dist(t),v=g.dist(i);if(p<1e-4&&m<1e-4||_<1e-4&&v<1e-4)continue}const x=tl(o,a,h,g);x&&x.s<l&&(l=x.s,c=f?"courtyard":"other_building")}}),l<.5?"touching":l<25?c:"open_space"}function U_(i,t){const e=t.length;if(e<3)return!1;const n=t[(i-1+e)%e],s=t[i],r=t[(i+1)%e],o=s.x-n.x,a=s.y-n.y,l=Math.hypot(o,a),c=r.x-s.x,u=r.y-s.y,f=Math.hypot(c,u);return l<1e-6||f<1e-6?!1:(o*c+a*u)/(l*f)<.98}function F_(i,t){const e=t.length;for(const n of i)for(let s=0;s<e;s++){const r=t[s];if(Math.hypot(n.x-r.x,n.y-r.y)<.1&&U_(s,t))return!0}return!1}class O_{constructor(t=.001,e=new Map){this.vertices=[],this.originalVertices=[],this.edges=[],this.vertexTolerance=t,this.vertexOverrides=e}getOverride(t){for(const[e,n]of this.vertexOverrides.entries()){const s=e.split(","),r=parseFloat(s[0]),o=parseFloat(s[1]);if(Math.hypot(t.x-r,t.y-o)<.1)return n}return null}addVertex(t){const e=t.origX!==void 0&&t.origY!==void 0?new nt(t.origX,t.origY):t,s=this.getOverride(e)||t,r=Math.max(this.vertexTolerance,.02);for(let o=0;o<this.vertices.length;o++)if(this.vertices[o].dist(s)<r)return o;return this.vertices.push(new nt(s.x,s.y)),this.originalVertices.push(new nt(e.x,e.y)),this.vertices.length-1}addEdge(t,e,n="unknown"){const s=this.addVertex(t),r=this.addVertex(e);if(s===r)return;this.edges.some(a=>a[0]===s&&a[1]===r||a[0]===r&&a[1]===s)||this.edges.push([s,r,n])}subdivideEdges(){let t=!0,e=0;const n=20;for(;t&&e<n;){t=!1,e++;const s=[];for(const r of this.edges){const o=r[0],a=r[1],l=r[2],c=this.vertices[o],u=this.vertices[a],d=u.sub(c).length();if(d<this.vertexTolerance)continue;let h=-1;for(let g=0;g<this.vertices.length;g++){if(g===o||g===a)continue;const x=this.vertices[g],p=Ln(x,c,u);if(x.dist(p)<this.vertexTolerance){const v=c.dist(p)/d;if(v>1e-4&&v<1-1e-4){h=g;break}}}h!==-1?(s.push([o,h,l]),s.push([h,a,l]),t=!0):s.push([o,a,l])}this.edges=[];for(const r of s){const o=r[0],a=r[1],l=r[2];!this.edges.some(u=>u[0]===o&&u[1]===a||u[0]===a&&u[1]===o)&&o!==a&&this.edges.push([o,a,l])}}}extractFaces(){this.subdivideEdges();const t=this.vertices.length,e=Array.from({length:t},()=>[]);for(const[o,a]of this.edges)e[o].push(a),e[a].push(o);const n=e.map((o,a)=>{const l=this.vertices[a];return o.map(c=>{const u=this.vertices[c],f=Math.atan2(u.y-l.y,u.x-l.x);return{v:c,angle:f}}).sort((c,u)=>c.angle-u.angle).map(c=>c.v)}),s=new Set,r=[];for(let o=0;o<t;o++)for(const a of n[o]){const l=`${o},${a}`;if(s.has(l))continue;const c=[];let u=a,f=o,d=!1;for(;!s.has(`${f},${u}`);){c.push(u),s.add(`${f},${u}`);const h=n[u],g=h.indexOf(f);if(g===-1)break;const x=h[(g-1+h.length)%h.length];if(f=u,u=x,u===a&&f===o){d=!0;break}}if(d&&c.length>=3){let h=0;const g=c.map(x=>this.vertices[x]);for(let x=0;x<g.length;x++){const p=g[x],m=g[(x+1)%g.length];h+=p.x*m.y-m.x*p.y}if(h=.5*h,h>1e-4){let x=0;const p=new Set;for(let m=0;m<c.length;m++){const _=c[m],v=c[(m+1)%c.length],S=this.edges.find(R=>R[0]===_&&R[1]===v||R[0]===v&&R[1]===_);if(S){const R=S[2];R==="boundary"?x++:R&&R.startsWith("rib_")&&p.add(R)}}x>0&&p.size>=2&&r.push(g)}}}return r}}const M={importedPolygons:[],activePolygonId:"default",activePreset:"tree",samplesPerEdge:25,precision:1e-5,showSkeleton:!0,simplifySkeleton:!0,mergeThreshold:2,pruneBranches:!0,showRibs:!0,ribSpacing:10,showBays:!0,editBaysMode:!0,draggedGraphVertexIdx:-1,draggedGraphVertexOrig:null,draggedGraphEdgeIdx:-1,dragStartMousePos:null,hoverCircle:!1,showGovernors:!1,isDrawing:!1,customVertices:[],draggedVertexIdx:-1,selectedVertexType:null,selectedVertexIdx:-1,selectedVertexOrig:null,hoveredMedialPoint:null,computeTime:0,camera:{zoom:1},mouseWorldPos:null,numFloors:3,floorHeight:4,show3DColumns:!0,show3DBeams:!0,showFloorSlabs:!0,showBalconies:!0,showBriseSoleil:!0,showVaultedRoofs:!0,show3DCells:!0,columnRadius:.25,beamWidth:.3,beamDepth:.5,slabThickness:.2,balconyOffset:1.5,balconyThickness:.15,louverWidth:.05,louverDepth:.2,louverSpacing:1,vaultHeight:1.5};Object.defineProperty(M,"polygon",{get(){const i=M.importedPolygons.find(t=>t.id===M.activePolygonId);return i?i.polygon:[]},set(i){const t=M.importedPolygons.find(e=>e.id===M.activePolygonId);t?t.polygon=i:(M.importedPolygons=[{id:"default",polygon:i,hasScaffold:!0,planarGraph:null,structuralBays:[],selectedBayIndices:[],bayEdits:[],graphVertexOverrides:new Map,skeletonData:{regularPoints:[],junctionPoints:[],simplifiedSegments:[],simplifiedNodes:[]}}],M.activePolygonId="default")}});Object.defineProperty(M,"planarGraph",{get(){const i=M.importedPolygons.find(t=>t.id===M.activePolygonId);return i?i.planarGraph:null},set(i){const t=M.importedPolygons.find(e=>e.id===M.activePolygonId);t&&(t.planarGraph=i)}});Object.defineProperty(M,"structuralBays",{get(){const i=M.importedPolygons.find(t=>t.id===M.activePolygonId);return i?i.structuralBays:[]},set(i){const t=M.importedPolygons.find(e=>e.id===M.activePolygonId);t&&(t.structuralBays=i)}});Object.defineProperty(M,"skeletonData",{get(){const i=M.importedPolygons.find(t=>t.id===M.activePolygonId);return i?i.skeletonData:{regularPoints:[],junctionPoints:[],simplifiedSegments:[],simplifiedNodes:[]}},set(i){const t=M.importedPolygons.find(e=>e.id===M.activePolygonId);t&&(t.skeletonData=i)}});Object.defineProperty(M,"selectedBayIndices",{get(){const i=M.importedPolygons.find(t=>t.id===M.activePolygonId);return i?i.selectedBayIndices:[]},set(i){const t=M.importedPolygons.find(e=>e.id===M.activePolygonId);t&&(t.selectedBayIndices=i)}});Object.defineProperty(M,"bayEdits",{get(){const i=M.importedPolygons.find(t=>t.id===M.activePolygonId);return i?i.bayEdits:[]},set(i){const t=M.importedPolygons.find(e=>e.id===M.activePolygonId);t&&(t.bayEdits=i)}});Object.defineProperty(M,"graphVertexOverrides",{get(){const i=M.importedPolygons.find(t=>t.id===M.activePolygonId);return i?i.graphVertexOverrides:new Map},set(i){const t=M.importedPolygons.find(e=>e.id===M.activePolygonId);t&&(t.graphVertexOverrides=i)}});const Cn=document.getElementById("polygon-canvas"),zs=document.getElementById("canvas-wrapper");let xn,Ge,Zn,Le,Te,Ne,ae,Rs,Ce,Qi,Yt,gi;const La={state:M,rhinoGroup:null,setPolygonsFrom3dm:i=>{M.importedPolygons=i.map((n,s)=>{const r=n.map(o=>new nt(o[0],o[1]));return{id:`rhino-poly-${s}-${Date.now()}`,polygon:r,hasScaffold:!1,planarGraph:null,structuralBays:[],selectedBayIndices:[],bayEdits:[],graphVertexOverrides:new Map,skeletonData:{regularPoints:[],junctionPoints:[],simplifiedSegments:[],simplifiedNodes:[]}}}),M.activePreset="custom",document.querySelectorAll(".preset-card").forEach(n=>n.classList.remove("active"));const e=document.getElementById("card-custom");e&&(e.style.display="flex",e.classList.add("active")),M.importedPolygons.length>0?M.activePolygonId=M.importedPolygons[0].id:M.activePolygonId=null,Oe(),Xr()},acceptedRibsCache:null},B_=new Xn(new I(0,0,1),0),Cs=new Sh,is=new ct;function z_(){const i=zs.getBoundingClientRect(),t=Math.max(800,i.width-40),e=Math.max(600,i.height-40);xn=new e_({canvas:Cn,antialias:!0,alpha:!0,preserveDrawingBuffer:!0}),xn.setPixelRatio(Math.min(window.devicePixelRatio,2)),xn.setSize(t,e),xn.setClearColor(16777215,1),xn.shadowMap.enabled=!0,Ge=new qu,Ge.background=new ee(16777215),Zn=new pn(45,t/e,1,1e4),Zn.position.set(0,-600,600),Zn.up.set(0,0,1);const n=t/e;Le=new Gr(-500*n,500*n,500,-500,1,1e4),Le.position.set(0,0,1e3),Le.up.set(0,1,0),Te=Zn,Ne=new i_(Te,xn.domElement),Ne.enableDamping=!0,Ne.dampingFactor=.05,Ne.maxPolarAngle=Math.PI/2-.01,Ne.minDistance=50,Ne.maxDistance=3e3;const s=new tf(16777215,.75);Ge.add(s);const r=new tc(16777215,.4);r.position.set(1e3,800,1500),Ge.add(r);const o=new tc(16777215,.2);o.position.set(-1e3,-800,1e3),Ge.add(o);const a=new Ca(2e3,200,14870768,15857145);a.rotation.x=Math.PI/2,a.position.z=-.01,Ge.add(a),ae=new Ii,Ge.add(ae),Rs=new Ii,Ge.add(Rs),La.rhinoGroup=Rs,Ce=new Ii,Ge.add(Ce),Qi=new L_(La),window.rhinoManager=Qi,gi=new Ue,Ge.add(gi),Yt=new g_(Te,xn.domElement),Yt.setMode("translate"),Yt.showZ=!1,Ge.add(Yt.getHelper()),Yt.addEventListener("dragging-changed",l=>{Ne.enabled=!l.value;const c=document.getElementById("status-dot"),u=document.getElementById("status-text");l.value?(c&&c.classList.add("loading"),u&&(u.innerText="Moving vertex via manipulator...")):(c&&c.classList.remove("loading"),u&&(u.innerText=`Computed ${M.skeletonData.regularPoints.length+M.skeletonData.junctionPoints.length} medial points successfully.`))}),Yt.addEventListener("change",()=>{if(Yt.dragging&&Yt.object){const l=Yt.object.position;M.selectedVertexType==="polygon"&&M.selectedVertexIdx!==void 0&&M.selectedVertexIdx!==-1?(M.polygon[M.selectedVertexIdx]=new nt(l.x,l.y),Oe()):M.selectedVertexType==="graph"&&M.selectedVertexOrig&&(M.graphVertexOverrides.set(`${M.selectedVertexOrig.x.toFixed(4)},${M.selectedVertexOrig.y.toFixed(4)}`,new nt(l.x,l.y)),Oe())}}),window.addEventListener("resize",Nh),Bh()}function Na(i){const t=new I(i.x,i.y,0);t.project(Te);const e=Cn.getBoundingClientRect();return new nt((t.x*.5+.5)*e.width,(-(t.y*.5)+.5)*e.height)}function k_(){if(M.polygon.length===0)return new nt(0,0);let i=1/0,t=-1/0,e=1/0,n=-1/0;for(const s of M.polygon)i=Math.min(i,s.x),t=Math.max(t,s.x),e=Math.min(e,s.y),n=Math.max(n,s.y);return new nt((i+t)/2,(e+n)/2)}function Or(){const i=document.getElementById("camera-info");if(i){const t=Te.position.distanceTo(Ne.target),e=Te.isOrthographicCamera?`${(1e3/Te.zoom).toFixed(0)}m`:`${(1e3/t).toFixed(2)}x`;i.innerText=`View Scale: ${e}`}}function Bc(i){const t=document.getElementById("btn-view-perspective"),e=document.getElementById("btn-view-top");if(i==="perspective")Te=Zn,Ne.object=Te,Ne.enableRotate=!0,t.classList.add("active"),e.classList.remove("active");else{Te=Le;const n=k_();Ne.target.set(n.x,n.y,0),Le.position.set(n.x,n.y,1e3),Le.up.set(0,1,0),Ne.object=Te,Ne.enableRotate=!1,t.classList.remove("active"),e.classList.add("active")}Ne.update(),Or(),Yt&&(Yt.camera=Te)}function Xr(){if(M.polygon.length===0){Ne.target.set(0,0,0),Zn.position.set(0,-600,600),Le.position.set(0,0,1e3),Le.zoom=1,Le.updateProjectionMatrix(),Ne.update(),Or();return}let i=1/0,t=-1/0,e=1/0,n=-1/0;for(const g of M.polygon)i=Math.min(i,g.x),t=Math.max(t,g.x),e=Math.min(e,g.y),n=Math.max(n,g.y);const s=(i+t)/2,r=(e+n)/2,o=t-i||1,a=n-e||1,l=Math.max(o,a);Ne.target.set(s,r,0),Zn.position.set(s,r-l*1.3,l*1.3);const c=zs.getBoundingClientRect(),u=Math.max(800,c.width-40),f=Math.max(600,c.height-40),d=u/f,h=l*1.45;Le.left=-h*d/2,Le.right=h*d/2,Le.top=h/2,Le.bottom=-h/2,Le.zoom=1,Le.position.set(s,r,1e3),Le.updateProjectionMatrix(),Ne.update(),Or()}function Nh(){const i=zs.getBoundingClientRect(),t=Math.max(800,i.width-40),e=Math.max(600,i.height-40);Zn.aspect=t/e,Zn.updateProjectionMatrix();const n=t/e,s=Le.top-Le.bottom;Le.left=-s*n/2,Le.right=s*n/2,Le.updateProjectionMatrix(),xn.setSize(t,e),Or()}function Uh(i){M.activePreset=i,M.importedPolygons=[],M.activePolygonId="default",M.graphVertexOverrides.clear(),M.bayEdits=[],M.selectedBayIndices=[],Yt&&Yt.detach(),M.selectedVertexType=null,M.selectedVertexIdx=-1,M.selectedVertexOrig=null;const t=zs.getBoundingClientRect(),e=Math.max(800,t.width-40),n=Math.max(600,t.height-40);i!=="custom"&&(M.polygon=V_[i](e,n),M.isDrawing=!1,document.getElementById("btn-clear-custom").style.display="none",document.getElementById("drawing-indicator").style.display="none",document.getElementById("card-custom").style.display="none"),Oe(),Xr()}const V_={cross:(i,t)=>[new nt(0-100*.1,0+100*.3),new nt(0+100*.1,0+100*.3),new nt(0+100*.1,0+100*.1),new nt(0+100*.3,0+100*.1),new nt(0+100*.3,0-100*.1),new nt(0+100*.1,0-100*.1),new nt(0+100*.1,0-100*.3),new nt(0-100*.1,0-100*.3),new nt(0-100*.1,0-100*.1),new nt(0-100*.3,0-100*.1),new nt(0-100*.3,0+100*.1),new nt(0-100*.1,0+100*.1)],yshape:(i,t)=>[new nt(0+100*.1,0-100*.4),new nt(0+100*.1,0-100*.1),new nt(0+100*.4,0+100*.4),new nt(0+100*.2,0+100*.4),new nt(0,0+100*.1),new nt(0-100*.2,0+100*.4),new nt(0-100*.4,0+100*.4),new nt(0-100*.1,0-100*.1),new nt(0-100*.1,0-100*.4)],sqdonut:(i,t)=>[new nt(0-100*.01,0+100*.3),new nt(0-100*.3,0+100*.3),new nt(0-100*.3,0-100*.3),new nt(0+100*.3,0-100*.3),new nt(0+100*.3,0+100*.3),new nt(0+100*.01,0+100*.3),new nt(0+100*.01,0+100*.1),new nt(0+100*.1,0+100*.1),new nt(0+100*.1,0-100*.1),new nt(0-100*.1,0-100*.1),new nt(0-100*.1,0+100*.1),new nt(0-100*.01,0+100*.1)],donut:(i,t)=>{const r=[];for(let l=0;l<=32;l++){const c=.05+(Math.PI*2-.1)*(l/32);r.push(new nt(0+Math.cos(c)*100*.4,0-Math.sin(c)*100*.4))}for(let l=0;l<=32;l++){const c=Math.PI*2-.05-(Math.PI*2-.1)*(l/32);r.push(new nt(0+Math.cos(c)*100*.2,0-Math.sin(c)*100*.2))}return r},pentagon:(i,t)=>[new nt(0-100*.05,0+100*.4),new nt(0-100*.45,0+100*.15),new nt(0-100*.25,0-100*.4),new nt(0+100*.35,0-100*.35),new nt(0+100*.4,0+100*.1)],tree:(i,t)=>[new nt(0+100*.1,0-100*.4),new nt(0+100*.1,0-100*.1),new nt(0+100*.4,0-100*.1),new nt(0+100*.4,0+100*.05),new nt(0+100*.1,0+100*.05),new nt(0+100*.1,0+100*.2),new nt(0+100*.3,0+100*.4),new nt(0+100*.15,0+100*.4),new nt(0,0+100*.25),new nt(0-100*.15,0+100*.4),new nt(0-100*.3,0+100*.4),new nt(0-100*.1,0+100*.2),new nt(0-100*.1,0+100*.05),new nt(0-100*.4,0+100*.05),new nt(0-100*.4,0-100*.1),new nt(0-100*.1,0-100*.1),new nt(0-100*.1,0-100*.4)]};function Br(i){let t=0,e=0;return i.forEach(n=>{t+=n.x,e+=n.y}),new nt(t/i.length,e/i.length)}function zc(i,t){for(let s=0;s<i.length;s++)if(Lh(t,i[s]))return s;let e=1/0,n=-1;for(let s=0;s<i.length;s++){const o=Br(i[s]).dist(t);o<e&&(e=o,n=s)}return n}function G_(i,t){let e=i.map(n=>n.map(s=>new nt(s.x,s.y)));for(const n of t)if(n.type==="delete"){const s=zc(e,n.point);s!==-1&&e.splice(s,1)}else if(n.type==="merge"){const s=[];for(const r of n.points){const o=zc(e,r);o!==-1&&!s.includes(o)&&s.push(o)}if(s.length>=2){s.sort((a,l)=>l-a);const r=[];for(const a of s)r.push(e[a]),e.splice(a,1);const o=P_(r);if(o)e.push(o);else for(const a of r)e.push(a)}}return e}function H_(i,t,e,n=.001){for(const s of e)for(let r=0;r<s.length;r++){const o=s[r],a=s[(r+1)%s.length],l=o.dist(i)<n&&a.dist(t)<n,c=o.dist(t)<n&&a.dist(i)<n;if(l||c)return!0}return!1}function W_(i,t){const e=[];for(const l of i.edges){const c=l[0],u=l[1];if(l[2]==="boundary"){e.push(l);continue}const d=i.vertices[c],h=i.vertices[u];H_(d,h,t,.02)&&e.push(l)}const n=new Set;for(const[l,c]of e)n.add(l),n.add(c);const s=[],r=[],o=new Map;for(let l=0;l<i.vertices.length;l++)n.has(l)&&(o.set(l,s.length),s.push(i.vertices[l]),r.push(i.originalVertices[l]));const a=e.map(l=>[o.get(l[0]),o.get(l[1]),l[2]]);i.vertices=s,i.originalVertices=r,i.edges=a}function Oe(){const i=M.activePolygonId,t=performance.now();for(const r of M.importedPolygons){if(!r.hasScaffold){r.skeletonData={regularPoints:[],junctionPoints:[],simplifiedSegments:[],simplifiedNodes:[]},r.planarGraph=null,r.structuralBays=[];continue}M.activePolygonId=r.id,X_()}M.activePolygonId=i,M.computeTime=performance.now()-t;const e=document.getElementById("container-merge-slider");e&&(e.style.display=M.simplifySkeleton?"block":"none");const n=document.getElementById("container-ribs-slider");n&&(n.style.display=M.showRibs?"block":"none"),document.getElementById("stats-render-time").innerText=`Computation: ${M.computeTime.toFixed(1)}ms`;const s=M.importedPolygons.find(r=>r.id===M.activePolygonId);if(s&&s.hasScaffold){const r=s.skeletonData.regularPoints.length+s.skeletonData.junctionPoints.length,o=s.skeletonData.simplifiedSegments.length,a=s.skeletonData.simplifiedNodes.length,l=M.simplifySkeleton?`Simplified skeleton to ${a} merged nodes and ${o} straight branches.`:`Computed ${r} medial points successfully.`;document.getElementById("status-text").innerText=l}else document.getElementById("status-text").innerText="Select a curve in the viewport to apply the scaffold.";M.hoveredMedialPoint=null,xe()}function X_(){if(M.polygon.length<3){M.skeletonData={regularPoints:[],junctionPoints:[]};return}for(const s of M.polygon){s.origX===void 0&&(s.origX=s.x,s.origY=s.y),s.x=s.origX,s.y=s.origY;let r=null;for(const[o,a]of M.graphVertexOverrides.entries()){const l=o.split(","),c=parseFloat(l[0]),u=parseFloat(l[1]);if(Math.hypot(s.origX-c,s.origY-u)<.1){r=a;break}}r&&(s.x=r.x,s.y=r.y)}const i=new I_(M.polygon,{epsilon:M.activePreset!=="custom"?.5:M.precision,tangentEpsilon:M.precision*10}),t=i.computeStructuredSkeleton(M.samplesPerEdge),{segments:e,nodes:n}=i.simplifySkeleton(t.regularPoints,t.junctionPoints,M.mergeThreshold);for(const s of n){s.origX=s.x,s.origY=s.y;let r=null;for(const[o,a]of M.graphVertexOverrides.entries()){const l=o.split(","),c=parseFloat(l[0]),u=parseFloat(l[1]);if(Math.hypot(s.origX-c,s.origY-u)<.1){r=a;break}}r&&(s.x=r.x,s.y=r.y)}for(const s of e){const r=s.start,o=s.end,a=o.sub(r),l=a.length(),c=Math.max(1,Math.round(l/M.ribSpacing)),u=new nt(r.origX,r.origY),d=new nt(o.origX,o.origY).sub(u);s.divisionPoints=[];for(let h=1;h<c;h++){const g=h/c,x=r.add(a.scale(g)),p=u.add(d.scale(g));x.origX=p.x,x.origY=p.y;let m=null;for(const[_,v]of M.graphVertexOverrides.entries()){const S=_.split(","),R=parseFloat(S[0]),E=parseFloat(S[1]);if(Math.hypot(x.origX-R,x.origY-E)<.1){m=v;break}}m&&(x.x=m.x,x.y=m.y),s.divisionPoints.push(x)}}if(t.simplifiedSegments=e,t.simplifiedNodes=n,M.skeletonData=t,M.polygon.length>=3){const s=new O_(.001,M.graphVertexOverrides);M.planarGraph=s;const r=M.showSkeleton&&M.showRibs&&M.simplifySkeleton?Fh():[],o=[],a=[];for(const u of r)a.push(u.target);const l=M.pruneBranches?t.simplifiedSegments.filter(u=>!(u.start.isEndPoint||u.end.isEndPoint)):t.simplifiedSegments;for(const u of t.simplifiedNodes)u.isEndPoint&&a.push(u);for(let u=0;u<M.polygon.length;u++){const f=M.polygon[u],d=M.polygon[(u+1)%M.polygon.length];o.push(f);const h=[];for(const g of a){const x=Ln(g,f,d);if(g.dist(x)<.001){const p=d.sub(f).length(),m=f.dist(x),_=d.dist(x);m>.001&&_>.001&&m+_<p+.001&&(h.some(v=>v.point.dist(g)<.001)||h.push({point:g,dist:m}))}}h.sort((g,x)=>g.dist-x.dist);for(const g of h)o.push(g.point)}for(let u=0;u<o.length;u++)s.addEdge(o[u],o[(u+1)%o.length],"boundary");if(M.showSkeleton)if(M.simplifySkeleton)for(const u of l){const f=[u.start,...u.divisionPoints||[],u.end];for(let d=0;d<f.length-1;d++)s.addEdge(f[d],f[d+1],"skeleton")}else{const u=M.samplesPerEdge,f=t.regularPoints;for(let d=0;d<M.polygon.length;d++)for(let h=0;h<u-1;h++){const g=d*u+h,x=d*u+(h+1);f[g]&&f[x]&&s.addEdge(f[g],f[x],"skeleton")}}for(let u=0;u<r.length;u++){const f=r[u];s.addEdge(f.source,f.target,`rib_${u}`)}const c=s.extractFaces();M.structuralBays=G_(c,M.bayEdits),W_(s,M.structuralBays)}else M.structuralBays=[]}const Y_=(i,t,e)=>{const s=t.x-i.x,r=t.y-i.y,o=new nt(i.x+s*.001,i.y+r*.001),a=new nt(t.x-s*.001,t.y-r*.001),l=(u,f,d)=>(d.y-u.y)*(f.x-u.x)>(f.y-u.y)*(d.x-u.x),c=(u,f,d,h)=>l(u,d,h)!==l(f,d,h)&&l(u,f,d)!==l(u,f,h);for(let u=0;u<e.length;u++){const f=e[u],d=e[(u+1)%e.length];if(c(o,a,f,d))return!0}return!1};function Fh(){if(!M.showRibs||M.polygon.length<3||!M.skeletonData||!M.skeletonData.simplifiedSegments)return[];const i=M.pruneBranches?M.skeletonData.simplifiedSegments.filter(o=>!(o.start.isEndPoint||o.end.isEndPoint)):M.skeletonData.simplifiedSegments,t=[];for(const o of i)if(o.divisionPoints)for(const a of o.divisionPoints){const l=new nt(a.origX,a.origY),c=[];for(let g=0;g<M.polygon.length;g++){const x=M.polygon[g],p=M.polygon[(g+1)%M.polygon.length];let m=Ln(a,x,p);m.dist(x)<.05?m=x:m.dist(p)<.05&&(m=p);let _=Ln(l,x,p);_.dist(x)<.05?_=x:_.dist(p)<.05&&(_=p);const v=a.dist(m);c.push({point:m,pointOrig:_,dist:v,vector:m.sub(a).normalize()})}c.sort((g,x)=>g.dist-x.dist);const u=c[0],f=new nt(u.point.x,u.point.y);f.origX=u.pointOrig.x,f.origY=u.pointOrig.y;let d=null,h=null;for(let g=1;g<c.length;g++){const x=c[g];if(u.vector.dot(x.vector)<.5){d=x,h=new nt(d.point.x,d.point.y),h.origX=d.pointOrig.x,h.origY=d.pointOrig.y;break}}t.push({source:a,target:f,priority:1}),d&&t.push({source:a,target:h,priority:2})}const e=new Set;for(const o of i)o.start.isEndPoint||e.add(o.start),o.end.isEndPoint||e.add(o.end);for(const o of e){const a=new nt(o.origX,o.origY),l=[];for(let x=0;x<M.polygon.length;x++){const p=M.polygon[x],m=M.polygon[(x+1)%M.polygon.length];let _=Ln(o,p,m);_.dist(p)<.05?_=p:_.dist(m)<.05&&(_=m);let v=Ln(a,p,m);v.dist(p)<.05?v=p:v.dist(m)<.05&&(v=m);const S=o.dist(_);l.push({point:_,pointOrig:v,dist:S,vector:_.sub(o).normalize()})}l.sort((x,p)=>x.dist-p.dist);const c=l[0],u=new nt(c.point.x,c.point.y);u.origX=c.pointOrig.x,u.origY=c.pointOrig.y;let f=null,d=null,h=null,g=null;for(let x=1;x<l.length;x++){const p=l[x];if(c.vector.dot(p.vector)<.5){f=p,d=new nt(f.point.x,f.point.y),d.origX=f.pointOrig.x,d.origY=f.pointOrig.y;break}}if(f)for(let x=1;x<l.length;x++){const p=l[x];if(p!==f&&c.vector.dot(p.vector)<.5&&f.vector.dot(p.vector)<.5){h=p,g=new nt(h.point.x,h.point.y),g.origX=h.pointOrig.x,g.origY=h.pointOrig.y;break}}t.push({source:o,target:u,priority:1}),f&&t.push({source:o,target:d,priority:2}),h&&t.push({source:o,target:g,priority:3})}const n=t.map(o=>({...o,length:o.source.dist(o.target)})).sort((o,a)=>o.priority!==a.priority?o.priority-a.priority:o.length-a.length),s=(o,a)=>{if(o.source.dist(a.source)<.001||o.target.dist(a.target)<.001||o.source.dist(a.target)<.001||o.target.dist(a.source)<.001)return!1;const l=(c,u,f)=>(f.y-c.y)*(u.x-c.x)>(u.y-c.y)*(f.x-c.x);return l(o.source,a.source,a.target)!==l(o.target,a.source,a.target)&&l(o.source,o.target,a.source)!==l(o.source,o.target,a.target)},r=[];for(const o of n){if(Y_(o.source,o.target,M.polygon))continue;let a=!1;for(const l of r)if(s(o,l)){a=!0;break}a||r.push(o)}return r}function xe(){if(!ae)return;const i=M.activePolygonId,t=M.importedPolygons.find(n=>n.id===M.activePolygonId);if(t&&M.selectedVertexType==="graph"&&M.selectedVertexOrig&&t.planarGraph){const n=M.selectedVertexOrig;let s=-1,r=1/0;for(let o=0;o<t.planarGraph.vertices.length;o++){const a=t.planarGraph.originalVertices[o];if(a){const l=Math.hypot(n.x-a.x,n.y-a.y);l<.1&&l<r&&(r=l,s=o)}}s!==-1?M.selectedVertexIdx=s:(Yt&&Yt.detach(),M.selectedVertexType=null,M.selectedVertexIdx=-1,M.selectedVertexOrig=null)}for(;ae.children.length>0;){const n=ae.children[0];ae.remove(n),n.geometry&&n.geometry.dispose(),n.material&&(Array.isArray(n.material)?n.material.forEach(s=>s.dispose()):n.material.dispose())}if(M.isDrawing&&M.customVertices.length>0){const n=M.customVertices.map(r=>new I(r.x,r.y,.025));if(M.mouseWorldPos&&(n.push(new I(M.mouseWorldPos.x,M.mouseWorldPos.y,.025)),M.customVertices.length>=3&&n.push(new I(M.customVertices[0].x,M.customVertices[0].y,.025))),n.length>=2){const r=new ie().setFromPoints(n),o=new rn({color:4937059,linewidth:1.5}),a=new Se(r,o);a.raycast=function(){},ae.add(a)}const s=new sn(.7,32);for(let r=0;r<M.customVertices.length;r++){const o=M.customVertices[r],a=r===0&&M.customVertices.length>=3;let l=!1;a&&M.mouseWorldPos&&(l=Math.sqrt((o.x-M.mouseWorldPos.x)**2+(o.y-M.mouseWorldPos.y)**2)<2);const c=new Ie({color:l?1096065:a?3621201:4937059}),u=new at(s,c);u.position.set(o.x,o.y,.03),u.raycast=function(){},ae.add(u)}}M.importedPolygons.forEach(n=>{M.activePolygonId=n.id;const s=n.id===i;if(M.polygon.length>=3){const r=new An;r.moveTo(M.polygon[0].x,M.polygon[0].y);for(let h=1;h<M.polygon.length;h++)r.lineTo(M.polygon[h].x,M.polygon[h].y);r.closePath();const o=new Fr(r),a=new Ie({color:n.hasScaffold?s?5195493:3621201:10265519,transparent:!0,opacity:n.hasScaffold?s?.08:.04:.015,side:We,depthWrite:!1}),l=new at(o,a);l.position.z=.005,l.userData={isPolygonFace:!0,polygonId:n.id},ae.add(l);const c=M.polygon.map(h=>new I(h.x,h.y,.02));c.push(c[0]);const u=new ie().setFromPoints(c),f=new rn({color:n.hasScaffold?s?5195493:3621201:10265519,linewidth:s?2.5:1.5}),d=new Se(u,f);d.userData={isPolygonLine:!0,polygonId:n.id},ae.add(d)}if(n.hasScaffold&&M.polygon.length>=3){if(M.showSkeleton){const r=M.skeletonData.regularPoints;if(M.simplifySkeleton){const a=M.pruneBranches?M.skeletonData.simplifiedSegments.filter(c=>!(c.start.isEndPoint||c.end.isEndPoint)):M.skeletonData.simplifiedSegments,l=new rn({color:3621201,linewidth:3.5});for(const c of a){const u=[new I(c.start.x,c.start.y,.035),new I(c.end.x,c.end.y,.035)],f=new ie().setFromPoints(u),d=new Se(f,l);d.raycast=function(){},ae.add(d)}}else{const a=M.samplesPerEdge,l=new rn({color:7041664,transparent:!0,opacity:.65,linewidth:1.5});for(let f=0;f<M.polygon.length;f++){const d=[];for(let h=0;h<a;h++){const g=f*a+h;r[g]&&d.push(new I(r[g].x,r[g].y,.025))}if(d.length>=2){const h=new ie().setFromPoints(d),g=new Se(h,l);g.raycast=function(){},ae.add(g)}}const c=new sn(.12,16),u=new Ie({color:7041664});for(const f of r){const d=new at(c,u);d.position.set(f.x,f.y,.03),d.raycast=function(){},ae.add(d)}}let o=M.simplifySkeleton?M.skeletonData.simplifiedNodes:M.skeletonData.junctionPoints;M.pruneBranches&&(o=o.filter(a=>!a.isEndPoint));for(const a of o){const l=a.isEndPoint?.3:.45,c=new sn(l,32),u=new Ie({color:a.isEndPoint?4937059:3621201}),f=new at(c,u);f.position.set(a.x,a.y,.035),f.raycast=function(){},ae.add(f);const d=[],h=32,g=l*1.65;for(let _=0;_<=h;_++){const v=_/h*Math.PI*2;d.push(new I(a.x+Math.cos(v)*g,a.y+Math.sin(v)*g,.035))}const x=new ie().setFromPoints(d),p=new ql({color:a.isEndPoint?4937059:3621201,transparent:!0,opacity:.4,dashSize:.15,gapSize:.1}),m=new Se(x,p);m.computeLineDistances(),m.raycast=function(){},ae.add(m)}if(M.showRibs){const a=Fh();s&&(La.acceptedRibsCache=a);const l=new sn(.15,16),c=new Ie({color:16777215}),u=new rn({color:4937059,transparent:!0,opacity:.65}),f=new sn(.2,16),d=new Ie({color:4937059});for(const h of a){const g=new at(l,c);g.position.set(h.source.x,h.source.y,.038),g.raycast=function(){},ae.add(g);const x=[new I(h.source.x,h.source.y,.038),new I(h.target.x,h.target.y,.038)],p=new ie().setFromPoints(x),m=new Se(p,u);m.raycast=function(){},ae.add(m);const _=new at(f,d);_.position.set(h.target.x,h.target.y,.038),_.raycast=function(){},ae.add(_)}}}M.showBays&&M.structuralBays&&M.structuralBays.length>0&&M.structuralBays.forEach((r,o)=>{if(r.length>=3){const a=new An;a.moveTo(r[0].x,r[0].y);for(let m=1;m<r.length;m++)a.lineTo(r[m].x,r[m].y);a.closePath();const l=s&&M.selectedBayIndices.includes(o),c=l?new ee("hsl(25, 95%, 55%)"):new ee(`hsl(${o*137.5%360}, 45%, 60%)`),u=l?.45:.15,f=new Fr(a),d=new Ie({color:c,transparent:!0,opacity:u,side:We,depthWrite:!1}),h=new at(f,d);h.position.z=.015,ae.add(h);const g=r.map(m=>new I(m.x,m.y,.018));g.push(g[0]);const x=new ie().setFromPoints(g);let p;if(l){const m=new rn({color:15094016,linewidth:2.5});p=new Se(x,m)}else{const m=new ql({color:4937059,transparent:!0,opacity:.35,dashSize:.2,gapSize:.15});p=new Se(x,m),p.computeLineDistances()}ae.add(p)}})}if(s&&!M.isDrawing&&M.polygon.length>0)if(M.editBaysMode){if(M.showBays&&M.planarGraph){const r=new rn({color:5195493,linewidth:3.5,transparent:!0,opacity:.8});M.planarGraph.edges.forEach((c,u)=>{const f=c[0],d=c[1],h=M.planarGraph.vertices[f],g=M.planarGraph.vertices[d];if(h&&g){const x=[new I(h.x,h.y,.032),new I(g.x,g.y,.032)],p=new ie().setFromPoints(x),m=new Se(p,r);m.userData={index:u,u:f,v:d,polygonId:n.id},ae.add(m)}});const o=new sn(.7,32),a=new sn(.25,16),l=new Ie({color:16777215});M.planarGraph.vertices.forEach((c,u)=>{const f=M.selectedVertexType==="graph"&&M.selectedVertexIdx===u,d=new Ie({color:f?1096065:5195493,transparent:!0,opacity:.95}),h=new at(o,d);h.position.set(c.x,c.y,.035),h.userData={isGraphVertex:!0,index:u,polygonId:n.id},ae.add(h);const g=new at(a,l);g.position.set(c.x,c.y,.039),ae.add(g)})}}else{const r=new sn(1,32),o=new sn(.3,16),a=new Ie({color:16777215});for(let l=0;l<M.polygon.length;l++){const c=M.polygon[l],u=M.selectedVertexType==="polygon"&&M.selectedVertexIdx===l,f=new Ie({color:u?1096065:3621201}),d=new at(r,f);d.position.set(c.x,c.y,.03),d.userData={isHandle:!0,index:l,polygonId:n.id},ae.add(d);const h=new at(o,a);h.position.set(c.x,c.y,.038),ae.add(h)}}}),M.activePolygonId=i;const e=M.importedPolygons.find(n=>n.id===M.activePolygonId);if(e&&(M.activePolygonId=e.id,M.hoverCircle&&M.hoveredMedialPoint&&M.polygon.length>=3)){const n=M.hoveredMedialPoint,s=n.radius,r=new $a(s-.2,s+.2,64),o=new Ie({color:3621201,transparent:!0,opacity:.82,side:We}),a=new at(r,o);a.position.set(n.x,n.y,.045),ae.add(a);const l=new sn(s,64),c=new Ie({color:3621201,transparent:!0,opacity:.05,side:We,depthWrite:!1}),u=new at(l,c);u.position.set(n.x,n.y,.04),ae.add(u);const f=new sn(.6,16),d=new Ie({color:16777215}),h=new at(f,d);if(h.position.set(n.x,n.y,.048),ae.add(h),M.showGovernors){const g=new rn({color:4937059,linewidth:1.5}),x=new sn(.5,16),p=new Ie({color:4937059});for(let m=0;m<M.polygon.length;m++){const _=M.polygon[m],v=M.polygon[(m+1)%M.polygon.length],S=Ln(n,_,v);if(Math.abs(n.dist(S)-s)<.2){const R=[new I(n.x,n.y,.046),new I(S.x,S.y,.046)],E=new ie().setFromPoints(R),C=new Se(E,g);ae.add(C);const y=new at(x,p);y.position.set(S.x,S.y,.046),ae.add(y)}}}}if(M.activePolygonId=i,Yt&&Yt.object)if(M.selectedVertexType==="polygon"&&M.selectedVertexIdx!==-1&&M.polygon[M.selectedVertexIdx]){const n=M.polygon[M.selectedVertexIdx];gi.position.set(n.x,n.y,.03)}else if(M.selectedVertexType==="graph"&&M.selectedVertexIdx!==-1&&M.planarGraph&&M.planarGraph.vertices[M.selectedVertexIdx]){const n=M.planarGraph.vertices[M.selectedVertexIdx];gi.position.set(n.x,n.y,.035)}else Yt.detach(),M.selectedVertexType=null,M.selectedVertexIdx=-1,M.selectedVertexOrig=null;K_()}function q_(i,t,e,n,s){const r=i.add(t).scale(.5),o=new nt(r.x+e.x*.1,r.y+e.y*.1),a=e;let l=1/0,c="open_space";return s.forEach(u=>{const f=u.id===n.id;for(let d=0;d<u.polygon.length;d++){const h=u.polygon[d],g=u.polygon[(d+1)%u.polygon.length];if(f){const p=h.dist(i),m=g.dist(t),_=h.dist(t),v=g.dist(i);if(p<1e-4&&m<1e-4||_<1e-4&&v<1e-4)continue}const x=tl(o,a,h,g);x&&x.s<l&&(l=x.s,c=f?"courtyard":"other_building")}}),l<.5?"touching":l<25?c:"open_space"}function j_(i,t){const e=t.length;if(e<3)return!1;const n=t[(i-1+e)%e],s=t[i],r=t[(i+1)%e],o=s.x-n.x,a=s.y-n.y,l=Math.hypot(o,a),c=r.x-s.x,u=r.y-s.y,f=Math.hypot(c,u);return l<1e-6||f<1e-6?!1:(o*c+a*u)/(l*f)<.98}function Z_(i,t){const e=t.length;for(const n of i)for(let s=0;s<e;s++){const r=t[s];if(Math.hypot(n.x-r.x,n.y-r.y)<.1&&j_(s,t))return!0}return!1}function $_(i,t,e){const n=e.x-t.x,s=e.y-t.y,r=n*n+s*s;if(r<1e-9)return Math.hypot(i.x-t.x,i.y-t.y);let o=((i.x-t.x)*n+(i.y-t.y)*s)/r;o=Math.max(0,Math.min(1,o));const a=t.x+o*n,l=t.y+o*s;return Math.hypot(i.x-a,i.y-l)}function K_(){if(!Ce)return;for(;Ce.children.length>0;){const h=Ce.children[0];Ce.remove(h),h.geometry&&h.geometry.dispose(),h.material&&(Array.isArray(h.material)?h.material.forEach(g=>g.dispose()):h.material.dispose())}const i=M.numFloors,t=M.floorHeight,e=new hi({color:15067115,roughness:.85,metalness:.1}),n=new hi({color:3621201,roughness:.5,metalness:.6}),s=new hi({color:4937059,roughness:.6,metalness:.4}),r=new hi({color:4937059,roughness:.8,metalness:.2}),o=new hi({color:889992,transparent:!0,opacity:.4,roughness:.1,metalness:.1,side:We}),a=new hi({color:14251782,roughness:.7,metalness:0}),l=new hi({color:15987958,roughness:.8,metalness:.1,side:We}),c=new Ie({color:3621201,wireframe:!0,transparent:!0,opacity:.3,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),u=M.activePolygonId,f=Array.from({length:i},()=>[]),d=Array.from({length:i},()=>[]);M.importedPolygons.forEach(h=>{if(!h.hasScaffold||h.polygon.length<3)return;M.activePolygonId=h.id;let g=!0,x=0;for(let E=0;E<M.polygon.length;E++){const C=M.polygon[E],y=M.polygon[(E+1)%M.polygon.length];x+=C.x*y.y-y.x*C.y}g=x>0;const p=[];for(let E=0;E<M.polygon.length;E++){const C=M.polygon[E],y=M.polygon[(E+1)%M.polygon.length],P=y.x-C.x,D=y.y-C.y,w=Math.hypot(P,D);let L=0,B=0;w>1e-6&&(g?(L=D/w,B=-P/w):(L=-D/w,B=P/w)),p.push(new nt(L,B))}const m=[];for(let E=0;E<M.polygon.length;E++){const C=M.polygon[E],y=M.polygon[(E+1)%M.polygon.length],P=p[E],D=q_(C,y,P,h,M.importedPolygons);m.push(D)}const _=[];M.structuralBays&&M.structuralBays.forEach(E=>{_.push(Z_(E,M.polygon))});const v=M.planarGraph?M.planarGraph.vertices:M.polygon,S=[];if(M.planarGraph)M.planarGraph.edges.forEach(E=>{const C=M.planarGraph.vertices[E[0]],y=M.planarGraph.vertices[E[1]];S.push([C,y])});else for(let E=0;E<M.polygon.length;E++)S.push([M.polygon[E],M.polygon[(E+1)%M.polygon.length]]);h.planarGraph3D={vertices:[],edges:[]},h.structuralBays3D=[];const R=v.length;for(let E=0;E<i;E++){const C=E*t;v.forEach((y,P)=>{h.planarGraph3D.vertices.push({id:`vertex_P${h.id}_F${E}_V${P}`,x:y.x,y:y.y,z:C})})}for(let E=0;E<i;E++)S.forEach(([C,y],P)=>{const D=E*R+v.indexOf(C),w=E*R+v.indexOf(y);h.planarGraph3D.edges.push({u:D,v:w,type:"beam",floorIndex:E})});for(let E=0;E<i-1;E++)v.forEach((C,y)=>{const P=E*R+y,D=(E+1)*R+y;h.planarGraph3D.edges.push({u:P,v:D,type:"column",floorIndex:E})});M.structuralBays&&M.structuralBays.forEach((E,C)=>{if(E.length<3)return;let y="interior";if(_[C])y="corner";else{let w=!1,L=!1,B=!1;for(let O=0;O<E.length;O++){const N=E[O],z=E[(O+1)%E.length],F={x:(N.x+z.x)/2,y:(N.y+z.y)/2};for(let q=0;q<M.polygon.length;q++){const H=M.polygon[q],Z=M.polygon[(q+1)%M.polygon.length];if($_(F,H,Z)<.1){const tt=m[q];tt==="courtyard"?w=!0:tt==="other_building"?L=!0:tt==="open_space"&&(B=!0)}}}w?y="courtyard":L?y="neighbor":B&&(y="open_space")}let D="#64748b";y==="corner"?D="#8b5cf6":y==="courtyard"?D="#10b981":y==="neighbor"?D="#f59e0b":y==="open_space"&&(D="#0ea5e9");for(let w=0;w<i;w++){const L=w*t;h.structuralBays3D.push({id:`${h.id}_bay_${C}_floor_${w}`,cellIdx:C,floorIndex:w,polygonId:h.id,vertices:E.map(B=>({x:B.x,y:B.y,z:L})),topVertices:E.map(B=>({x:B.x,y:B.y,z:L+t})),phenotype:y,color:D})}});for(let E=0;E<i;E++){const C=E*t,y=E===0,P=E===i-1;if(M.showFloorSlabs){let D=M.slabThickness;y?D=M.slabThickness*1.5:P&&(D=M.slabThickness*.8);const w=new An;w.moveTo(M.polygon[0].x,M.polygon[0].y);for(let O=1;O<M.polygon.length;O++)w.lineTo(M.polygon[O].x,M.polygon[O].y);w.closePath();const L=new fi(w,{depth:D,bevelEnabled:!1}),B=new at(L,e);B.position.z=C-D,B.userData={is3DStackMesh:!0,polygonId:h.id},Ce.add(B)}if(M.show3DColumns&&!P){let D=M.slabThickness;y?D=M.slabThickness*1.5:P&&(D=M.slabThickness*.8);const w=t-D;let L=1;i>1&&(L=1.4-.7*(E/(i-1)));const B=M.columnRadius*L,O=new Xe(B,B,w,16);O.rotateX(Math.PI/2);const N=B*2.2,z=B*.8,F=new An;F.moveTo(-N/2,-N/2),F.lineTo(N/2,-N/2),F.lineTo(N/2,-N/2+z),F.lineTo(-N/2+z,-N/2+z),F.lineTo(-N/2+z,N/2),F.lineTo(-N/2,N/2),F.closePath();const q=new fi(F,{depth:w,bevelEnabled:!1});v.forEach(H=>{let Z=!1;for(const It of f[E])if(Math.hypot(H.x-It.x,H.y-It.y)<.2){Z=!0;break}if(Z)return;f[E].push({x:H.x,y:H.y});let tt=!1;for(const It of M.polygon)if(Math.hypot(H.x-It.x,H.y-It.y)<.1){tt=!0;break}let dt;tt?(dt=new at(q,n),dt.position.set(H.x,H.y,C)):(dt=new at(O,n),dt.position.set(H.x,H.y,C+w/2)),dt.userData={is3DStackMesh:!0,polygonId:h.id},Ce.add(dt)}),O.dispose(),q.dispose()}if(M.show3DBeams){let D=1;i>1&&(D=1.3-.5*(E/(i-1)));const w=M.beamWidth*D,L=M.beamDepth*D;let B=M.slabThickness;y?B=M.slabThickness*1.5:P&&(B=M.slabThickness*.8),S.forEach(([O,N])=>{const z=N.x-O.x,F=N.y-O.y,q=Math.hypot(z,F);if(q<.001)return;const H=(O.x+N.x)/2,Z=(O.y+N.y)/2;let tt=!1;for(const yt of d[E])if(Math.hypot(H-yt.x,Z-yt.y)<.2){tt=!0;break}if(tt)return;d[E].push({x:H,y:Z});const dt=new De(q,w,L),It=new at(dt,s),zt=C-B-L/2;It.position.set(H,Z,zt),It.rotation.z=Math.atan2(F,z),It.userData={is3DStackMesh:!0,polygonId:h.id},Ce.add(It),dt.dispose()})}if(M.showBalconies&&!y&&!P)for(let D=0;D<M.polygon.length;D++){const w=M.polygon[D],L=M.polygon[(D+1)%M.polygon.length],B=m[D],O=Math.hypot(L.x-w.x,L.y-w.y);if(O<.001||B==="other_building"||B==="touching")continue;let N=M.balconyOffset;B==="courtyard"&&(N=M.balconyOffset*1.5);const z=O/2,F=new An,q=Math.min(.8,N*.4);F.moveTo(-z,0),F.lineTo(-z,N-q),F.quadraticCurveTo(-z,N,-z+q,N),F.lineTo(z-q,N),F.quadraticCurveTo(z,N,z,N-q),F.lineTo(z,0),F.closePath();const H=new fi(F,{depth:M.balconyThickness,bevelEnabled:!1}),Z=new at(H,r),tt=Math.atan2(L.y-w.y,L.x-w.x),dt=(w.x+L.x)/2,It=(w.y+L.y)/2,zt=C-M.balconyThickness;Z.position.set(dt,It,zt),Z.rotation.z=tt,Z.userData={is3DStackMesh:!0,polygonId:h.id},Ce.add(Z);const yt=1.1,j=.02,ht=new An;ht.moveTo(-z,N-j),ht.lineTo(z,N-j),ht.lineTo(z,N),ht.lineTo(-z,N),ht.closePath();const ot=new fi(ht,{depth:yt,bevelEnabled:!1}),bt=new at(ot,o);bt.position.set(dt,It,C),bt.rotation.z=tt,bt.userData={is3DStackMesh:!0,polygonId:h.id},Ce.add(bt),H.dispose(),ot.dispose()}if(M.showBriseSoleil&&!y&&!P){const D=new nt(-.707,-.707);for(let w=0;w<M.polygon.length;w++){const L=M.polygon[w],B=M.polygon[(w+1)%M.polygon.length],O=p[w],N=m[w],z=Math.hypot(B.x-L.x,B.y-L.y);if(z<.001)continue;const F=O.dot(D);let q=M.louverDepth,H=M.louverSpacing,Z=!0;if(N==="other_building"?(q=M.louverDepth*.8,H=M.louverSpacing*.6):N==="courtyard"||N==="touching"?Z=!1:F>0?(q=M.louverDepth*(.3+1.2*F),H=M.louverSpacing*(1.2-.5*F)):Z=!1,!Z)continue;const tt=Math.max(2,Math.floor(z/H));let dt=M.slabThickness;y?dt=M.slabThickness*1.5:P&&(dt=M.slabThickness*.8);const It=t-dt,zt=M.louverWidth,yt=new An;yt.moveTo(0,-q/2),yt.quadraticCurveTo(zt/2,0,0,q/2),yt.quadraticCurveTo(-zt/2,0,0,-q/2),yt.closePath();const j=new fi(yt,{depth:It,bevelEnabled:!1});for(let ht=0;ht<=tt;ht++){const ot=ht/tt,bt=L.x+(B.x-L.x)*ot+O.x*.15,Nt=L.y+(B.y-L.y)*ot+O.y*.15,Ut=new at(j,a);Ut.position.set(bt,Nt,C);const Jt=Math.atan2(B.y-L.y,B.x-L.x);Ut.rotation.z=Jt,Ut.userData={is3DStackMesh:!0,polygonId:h.id},Ce.add(Ut)}j.dispose()}}}if(M.showVaultedRoofs&&M.structuralBays&&M.structuralBays.length>0){const E=(i-1)*t,C=8;M.structuralBays.forEach((y,P)=>{if(y.length<3)return;const D=Br(y),w=y.some(H=>M.polygon.some(Z=>Math.hypot(H.x-Z.x,H.y-Z.y)<.1)),L=y.map(H=>M.polygon.some(tt=>Math.hypot(H.x-tt.x,H.y-tt.y)<.1)?1:0),B=[],O=[];let N=0;for(let H=0;H<y.length;H++){const Z=y[H],tt=y[(H+1)%y.length],dt=L[H],It=L[(H+1)%y.length];for(let yt=0;yt<=C;yt++)for(let j=0;j<=yt;j++){let ht=Z.x,ot=Z.y;const bt=yt>0?j/yt:0;yt>0&&(ht=Z.x+(tt.x-Z.x)*bt,ot=Z.y+(tt.y-Z.y)*bt);const Nt=yt/C,Ut=D.x+(ht-D.x)*Nt,Jt=D.y+(ot-D.y)*Nt,Vt=dt*(1-bt)+It*bt,et=w?1:0,lt=M.vaultHeight*(1-.8*et),it=M.vaultHeight*Vt*et,Mt=lt*(1-Nt*Nt)+it*Nt*Nt,vt=E+Mt;B.push(Ut,Jt,vt)}const zt=(yt,j)=>{const ht=yt*(yt+1)/2;return N+ht+j};for(let yt=0;yt<C;yt++)for(let j=0;j<=yt;j++){const ht=zt(yt,j),ot=zt(yt+1,j),bt=zt(yt+1,j+1);if(O.push(ht,ot,bt),j<yt){const Nt=zt(yt,j),Ut=zt(yt+1,j+1),Jt=zt(yt,j+1);O.push(Nt,Ut,Jt)}}N+=(C+1)*(C+2)/2}const z=new ie;z.setAttribute("position",new ne(B,3)),z.setIndex(O),z.computeVertexNormals();const F=new at(z,l);F.userData={is3DStackMesh:!0,polygonId:h.id},Ce.add(F);const q=new at(z,c);q.userData={is3DStackMesh:!0,polygonId:h.id},Ce.add(q)})}M.show3DCells&&h.structuralBays3D&&h.structuralBays3D.length>0&&h.structuralBays3D.forEach(E=>{const C=new An;C.moveTo(E.vertices[0].x,E.vertices[0].y);for(let Z=1;Z<E.vertices.length;Z++)C.lineTo(E.vertices[Z].x,E.vertices[Z].y);C.closePath();const y=new fi(C,{depth:t,bevelEnabled:!1}),P=new ee(E.color),D=new hi({color:P,transparent:!0,opacity:.12,roughness:.2,metalness:.1,side:We,depthWrite:!1}),w=new at(y,D);w.position.z=E.vertices[0].z,w.userData={is3DStackMesh:!0,polygonId:h.id},Ce.add(w);const L=new ee(E.color).clone().multiplyScalar(.7),B=new rn({color:L,transparent:!0,opacity:.25}),O=E.vertices.map(Z=>new I(Z.x,Z.y,Z.z));O.push(O[0]);const N=new ie().setFromPoints(O),z=new Se(N,B);z.userData={is3DStackMesh:!0,polygonId:h.id},Ce.add(z);const F=E.topVertices.map(Z=>new I(Z.x,Z.y,Z.z));F.push(F[0]);const q=new ie().setFromPoints(F),H=new Se(q,B);H.userData={is3DStackMesh:!0,polygonId:h.id},Ce.add(H);for(let Z=0;Z<E.vertices.length;Z++){const tt=E.vertices[Z],dt=[new I(tt.x,tt.y,tt.z),new I(tt.x,tt.y,tt.z+t)],It=new ie().setFromPoints(dt),zt=new Se(It,B);zt.userData={is3DStackMesh:!0,polygonId:h.id},Ce.add(zt)}})}),M.activePolygonId=u}function J_(){const i=document.getElementById("btn-minimize-sidebar"),t=document.getElementById("control-sidebar");i&&t&&i.addEventListener("click",()=>{t.classList.toggle("collapsed");const w=i.querySelector("span");w&&(w.innerText=t.classList.contains("collapsed")?"▲":"▼")});const e=document.getElementById("header-mat-params"),n=document.getElementById("section-mat-params");e&&n&&e.addEventListener("click",()=>{n.classList.toggle("collapsed")});const s=document.getElementById("header-interactive-helpers"),r=document.getElementById("section-interactive-helpers");s&&r&&s.addEventListener("click",()=>{r.classList.toggle("collapsed")});const o=document.getElementById("header-rhino-integration"),a=document.getElementById("section-rhino-integration");o&&a&&o.addEventListener("click",()=>{a.classList.toggle("collapsed")});const l=document.getElementById("header-3d-stack"),c=document.getElementById("section-3d-stack");l&&c&&l.addEventListener("click",()=>{c.classList.toggle("collapsed")});const u=document.getElementById("btn-collapse-ribs-workflow"),f=document.getElementById("ribs-workflow-dependents");u&&f&&u.addEventListener("click",()=>{const w=f.style.display==="none";f.style.display=w?"block":"none",u.classList.toggle("collapsed",!w)}),document.getElementById("btn-view-perspective").addEventListener("click",()=>Bc("perspective")),document.getElementById("btn-view-top").addEventListener("click",()=>Bc("top"));const d=document.querySelectorAll(".preset-card");d.forEach(w=>{w.addEventListener("click",()=>{d.forEach(B=>B.classList.remove("active")),w.classList.add("active");const L=w.getAttribute("data-preset");L&&Uh(L)})});const h=document.getElementById("slider-samples"),g=document.getElementById("val-samples");h.addEventListener("input",w=>{M.samplesPerEdge=parseInt(w.target.value),g.innerText=M.samplesPerEdge,Oe()});const x=document.getElementById("slider-precision"),p=document.getElementById("val-precision");x.addEventListener("input",w=>{const L=parseInt(w.target.value);M.precision=Math.pow(10,-L),p.innerText=`1e-${L}`,Oe()}),document.getElementById("chk-show-skeleton").addEventListener("change",w=>{M.showSkeleton=w.target.checked,xe()}),document.getElementById("chk-simplify-skeleton").addEventListener("change",w=>{M.simplifySkeleton=w.target.checked,Oe()}),document.getElementById("chk-prune-branches").addEventListener("change",w=>{if(M.pruneBranches=w.target.checked,M.pruneBranches){M.simplifySkeleton=!0;const L=document.getElementById("chk-simplify-skeleton");L&&(L.checked=!0)}Oe()}),document.getElementById("chk-show-ribs").addEventListener("change",w=>{if(M.showRibs=w.target.checked,M.showRibs){M.simplifySkeleton=!0;const L=document.getElementById("chk-simplify-skeleton");L&&(L.checked=!0)}Oe()});const m=document.getElementById("slider-ribs"),_=document.getElementById("val-ribs");m.addEventListener("input",w=>{M.ribSpacing=parseFloat(w.target.value),_.innerText=`${M.ribSpacing.toFixed(1)}m`,Oe()});const v=document.getElementById("slider-merge"),S=document.getElementById("val-merge");v.addEventListener("input",w=>{M.mergeThreshold=parseFloat(w.target.value),S.innerText=`${M.mergeThreshold.toFixed(1)}m`,Oe()});function R(){const w=document.getElementById("btn-combine-bays"),L=document.getElementById("btn-delete-bays");w&&(w.disabled=M.selectedBayIndices.length<2),L&&(L.disabled=M.selectedBayIndices.length===0)}document.getElementById("chk-show-bays").addEventListener("change",w=>{M.showBays=w.target.checked;const L=document.getElementById("container-edit-bays");if(L&&(L.style.display=M.showBays?"block":"none"),!M.showBays){M.editBaysMode=!1,M.selectedBayIndices=[];const B=document.getElementById("chk-edit-bays-mode");B&&(B.checked=!1);const O=document.getElementById("edit-bays-actions");O&&(O.style.display="none")}Yt&&Yt.detach(),M.selectedVertexType=null,M.selectedVertexIdx=-1,M.selectedVertexOrig=null,xe()}),document.getElementById("chk-edit-bays-mode").addEventListener("change",w=>{M.editBaysMode=w.target.checked,M.selectedBayIndices=[],Yt&&Yt.detach(),M.selectedVertexType=null,M.selectedVertexIdx=-1,M.selectedVertexOrig=null;const L=document.getElementById("edit-bays-actions");L&&(L.style.display=M.editBaysMode?"grid":"none"),R(),xe()}),document.getElementById("btn-combine-bays").addEventListener("click",()=>{if(M.selectedBayIndices.length>=2){const w=M.selectedBayIndices.map(L=>Br(M.structuralBays[L]));M.bayEdits.push({type:"merge",points:w}),M.selectedBayIndices=[],Yt&&Yt.detach(),M.selectedVertexType=null,M.selectedVertexIdx=-1,M.selectedVertexOrig=null,R(),Oe()}});const E=()=>{M.selectedBayIndices.length>0&&(M.selectedBayIndices.forEach(w=>{M.bayEdits.push({type:"delete",point:Br(M.structuralBays[w])})}),M.selectedBayIndices=[],Yt&&Yt.detach(),M.selectedVertexType=null,M.selectedVertexIdx=-1,M.selectedVertexOrig=null,R(),Oe())};document.getElementById("btn-delete-bays").addEventListener("click",E),window.addEventListener("keydown",w=>{if(M.editBaysMode&&(w.key==="Delete"||w.key==="Del")){if(document.activeElement&&(document.activeElement.tagName==="INPUT"||document.activeElement.tagName==="TEXTAREA"))return;E()}}),document.getElementById("btn-reset-bay-edits").addEventListener("click",()=>{M.bayEdits=[],M.graphVertexOverrides.clear(),M.selectedBayIndices=[],Yt&&Yt.detach(),M.selectedVertexType=null,M.selectedVertexIdx=-1,M.selectedVertexOrig=null,R(),Oe()}),document.getElementById("chk-hover-circle").addEventListener("change",w=>{M.hoverCircle=w.target.checked,M.hoverCircle||(M.hoveredMedialPoint=null),xe()}),document.getElementById("chk-show-governors").addEventListener("change",w=>{M.showGovernors=w.target.checked,xe()});const C=document.getElementById("btn-draw-custom"),y=document.getElementById("btn-clear-custom"),P=document.getElementById("drawing-indicator");C.addEventListener("click",()=>{M.isDrawing=!0,M.importedPolygons=[],M.activePolygonId="default",M.customVertices=[],M.polygon=[],M.graphVertexOverrides.clear(),M.bayEdits=[],M.selectedBayIndices=[],M.skeletonData={regularPoints:[],junctionPoints:[]},Yt&&Yt.detach(),M.selectedVertexType=null,M.selectedVertexIdx=-1,M.selectedVertexOrig=null,C.style.display="none",y.style.display="inline-flex",P.style.display="flex",d.forEach(w=>w.classList.remove("active")),document.getElementById("card-custom").style.display="flex",document.getElementById("card-custom").classList.add("active"),xe()}),y.addEventListener("click",()=>{M.importedPolygons=[],M.activePolygonId="default",M.customVertices=[],M.polygon=[],M.isDrawing=!0,M.skeletonData={regularPoints:[],junctionPoints:[]},Yt&&Yt.detach(),M.selectedVertexType=null,M.selectedVertexIdx=-1,M.selectedVertexOrig=null,xe()}),Cn.addEventListener("mousedown",tx),Cn.addEventListener("mousemove",ex),Cn.addEventListener("mouseup",nx),Cn.addEventListener("mouseleave",ix),Cn.addEventListener("contextmenu",w=>w.preventDefault());const D=document.getElementById("btn-reset-view");D&&D.addEventListener("click",Xr),Q_()}function Q_(){const i=document.getElementById("rhino-file-input"),t=document.getElementById("btn-upload-rhino"),e=document.getElementById("rhino-file-info"),n=document.getElementById("rhino-filename"),s=document.getElementById("rhino-object-count"),r=document.getElementById("lbl-rhino-layers"),o=document.getElementById("rhino-layers-container"),a=document.getElementById("rhino-actions"),l=document.getElementById("btn-load-rhino-layers"),c=document.getElementById("btn-clear-rhino"),u=document.getElementById("btn-export-rhino"),f=document.getElementById("rhino-export-filename");if(!i||!t)return;let d=null;t.addEventListener("click",()=>{i.click()}),i.addEventListener("change",w=>{const L=w.target.files[0];if(!L)return;n.textContent=L.name,t.textContent="Loading File...",t.disabled=!0;const B=new FileReader;B.onload=async O=>{try{d=O.target.result,console.log("[UI] Parsing Rhino file metadata...");const{layers:N,objectCount:z}=await Qi.parseMetadata(d);s.textContent=`${z} objects found`,e.style.display="block",o.innerHTML="",N&&N.length>0&&(N.forEach(F=>{const q=document.createElement("div");q.className="layer-item";const H=document.createElement("input");H.type="checkbox",H.id=`layer-chk-${F.index}`,H.value=F.index,H.checked=!1;const Z=document.createElement("div");Z.className="layer-color-dot",Z.style.backgroundColor=`rgba(${F.color.r}, ${F.color.g}, ${F.color.b}, ${F.color.a/255})`;const tt=document.createElement("span");tt.className="layer-name",tt.textContent=F.name,tt.title=F.name,tt.addEventListener("click",()=>{H.checked=!H.checked}),q.appendChild(H),q.appendChild(Z),q.appendChild(tt),o.appendChild(q)}),r.style.display="block",o.style.display="block",a.style.display="grid"),t.textContent="Change .3DM File"}catch(N){console.error("[UI] Error loading Rhino metadata:",N),alert("Error loading .3dm metadata: "+N.message),t.textContent="Load .3DM File"}finally{t.disabled=!1}},B.readAsArrayBuffer(L)}),l.addEventListener("click",async()=>{if(!d)return;const w=o.querySelectorAll('input[type="checkbox"]:checked'),L=Array.from(w).map(O=>parseInt(O.value));if(L.length===0){alert("Please select at least one layer to load.");return}l.disabled=!0;const B=l.textContent;l.textContent="Loading...";try{await Qi.loadLayers(d,L),console.log("[UI] Rhino geometries successfully loaded.")}catch(O){console.error("[UI] Error loading layers:",O),alert("Failed to load layers: "+O.message)}finally{l.disabled=!1,l.textContent=B}}),c.addEventListener("click",()=>{Qi.clearRhinoGeometries(),console.log("[UI] Rhino geometries cleared.")}),u.addEventListener("click",async()=>{const w=f.value.trim()||"medial_axis_export.3dm";u.disabled=!0,u.textContent="Exporting...";try{await Qi.exportSceneTo3dm(w),console.log("[UI] Export complete.")}catch(L){console.error("[UI] Error exporting to 3DM:",L),alert("Failed to export to 3DM: "+L.message)}finally{u.disabled=!1,u.textContent="Export to 3DM"}});const h=document.getElementById("slider-floors"),g=document.getElementById("val-floors");h&&g&&h.addEventListener("input",w=>{M.numFloors=parseInt(w.target.value),g.innerText=M.numFloors,xe()});const x=document.getElementById("slider-floor-height"),p=document.getElementById("val-floor-height");x&&p&&x.addEventListener("input",w=>{M.floorHeight=parseFloat(w.target.value),p.innerText=`${M.floorHeight.toFixed(1)}m`,xe()});const m=document.getElementById("chk-3d-columns");m&&m.addEventListener("change",w=>{M.show3DColumns=w.target.checked,xe()});const _=document.getElementById("chk-3d-beams");_&&_.addEventListener("change",w=>{M.show3DBeams=w.target.checked,xe()});const v=document.getElementById("chk-3d-slabs");v&&v.addEventListener("change",w=>{M.showFloorSlabs=w.target.checked,xe()});const S=document.getElementById("chk-3d-balconies");S&&S.addEventListener("change",w=>{M.showBalconies=w.target.checked,xe()});const R=document.getElementById("chk-3d-brisesoleil");R&&R.addEventListener("change",w=>{M.showBriseSoleil=w.target.checked,xe()});const E=document.getElementById("chk-3d-vaults");E&&E.addEventListener("change",w=>{M.showVaultedRoofs=w.target.checked,xe()});const C=document.getElementById("chk-3d-cells");C&&C.addEventListener("change",w=>{M.show3DCells=w.target.checked,xe()});const y=document.getElementById("btn-minimize-ai-render"),P=document.getElementById("ai-render-panel");y&&P&&y.addEventListener("click",()=>{P.classList.toggle("collapsed");const w=y.querySelector("span");w&&(w.innerText=P.classList.contains("collapsed")?"▲":"▼")});const D=document.getElementById("display-mode-select");D&&D.addEventListener("change",w=>{kh(w.target.value)}),sx()}function Oh(i){const t=Cn.getBoundingClientRect();is.x=(i.clientX-t.left)/t.width*2-1,is.y=-((i.clientY-t.top)/t.height)*2+1,Cs.setFromCamera(is,Te);const e=new I;return Cs.ray.intersectPlane(B_,e),e}function tx(i){if(!(i.button===1||i.button===2)&&i.button===0){if(Yt&&(Yt.dragging||Yt.axis))return;const t=Cn.getBoundingClientRect();is.x=(i.clientX-t.left)/t.width*2-1,is.y=-((i.clientY-t.top)/t.height)*2+1;const e=Oh(i),n=new nt(e.x,e.y);Cs.setFromCamera(is,Te),Cs.params.Line.threshold=.4;const s=[...ae.children,...Ce.children],r=Cs.intersectObjects(s,!0);if(M.editBaysMode){let o=!1;for(const a of r)if(a.object.userData&&a.object.userData.isGraphVertex&&a.object.userData.polygonId===M.activePolygonId){const l=a.object.userData.index,c=M.planarGraph.vertices[l];M.selectedVertexType="graph",M.selectedVertexIdx=l,M.selectedVertexOrig=M.planarGraph.originalVertices[l],gi.position.set(c.x,c.y,.035),Yt.attach(gi),o=!0,xe();break}if(!o){let a=null,l=null;for(const c of r)if(c.object.userData&&c.object.userData.polygonId){a=c.object.userData.polygonId,l=c.object;break}if(a){const c=M.importedPolygons.find(u=>u.id===a);if(c)if(!c.hasScaffold)c.hasScaffold=!0,M.activePolygonId=c.id,Oe();else if(l.userData.isPolygonLine||l.userData.is3DStackMesh)c.hasScaffold=!1,Oe();else{const u=c.structuralBays.findIndex(f=>Lh(n,f));if(u!==-1){M.activePolygonId!==c.id&&(M.activePolygonId=c.id,xe());const f=M.selectedBayIndices.indexOf(u);f!==-1?M.selectedBayIndices.splice(f,1):M.selectedBayIndices.push(u);const d=document.getElementById("btn-combine-bays"),h=document.getElementById("btn-delete-bays");d&&(d.disabled=M.selectedBayIndices.length<2),h&&(h.disabled=M.selectedBayIndices.length===0),xe()}else c.hasScaffold=!1,Oe()}}else Yt.detach(),M.selectedVertexType=null,M.selectedVertexIdx=-1,M.selectedVertexOrig=null,xe()}return}else if(M.isDrawing){if(M.customVertices.length>=3){const o=Na(M.customVertices[0]);if(new nt(i.clientX-t.left,i.clientY-t.top).dist(o)<12){M.polygon=[...M.customVertices],M.isDrawing=!1,document.getElementById("btn-draw-custom").style.display="inline-flex",document.getElementById("btn-clear-custom").style.display="none",document.getElementById("drawing-indicator").style.display="none",Oe(),Xr();return}}M.customVertices.push(n),xe()}else{let o=!1;for(const a of r)if(a.object.userData&&a.object.userData.isHandle&&a.object.userData.polygonId===M.activePolygonId){const l=a.object.userData.index,c=M.polygon[l];M.selectedVertexType="polygon",M.selectedVertexIdx=l,M.selectedVertexOrig=null,gi.position.set(c.x,c.y,.03),Yt.attach(gi),o=!0,xe();break}if(!o){let a=null;for(const l of r)if(l.object.userData&&l.object.userData.polygonId){a=l.object.userData.polygonId;break}if(a){const l=M.importedPolygons.find(c=>c.id===a);l&&(l.hasScaffold?(l.hasScaffold=!1,Oe()):(l.hasScaffold=!0,M.activePolygonId=l.id,Oe()))}else Yt.detach(),M.selectedVertexType=null,M.selectedVertexIdx=-1,M.selectedVertexOrig=null,xe()}}}}function ex(i){const t=Oh(i),e=new nt(t.x,t.y);if(M.mouseWorldPos=e,M.isDrawing)xe();else if(M.hoverCircle&&!M.editBaysMode&&M.polygon.length>=3&&Ne.state===-1){const n=Cn.getBoundingClientRect(),s=new nt(i.clientX-n.left,i.clientY-n.top);let r=null,o=20;for(const a of M.skeletonData.regularPoints){const l=Na(a),c=s.dist(l);c<o&&(o=c,r=a)}for(const a of M.skeletonData.junctionPoints){if(a.isEndPoint)continue;const l=Na(a),c=s.dist(l);c<o&&(o=c,r=a)}r!==M.hoveredMedialPoint&&(M.hoveredMedialPoint=r,xe())}}function nx(){}function ix(){M.mouseWorldPos=null,M.hoveredMedialPoint=null,xe()}function Bh(){if(requestAnimationFrame(Bh),Ne.update(),Ge.overrideMaterial===Yn&&Yn){const i=zh();Yn.uniforms.cameraNear.value=i.min,Yn.uniforms.cameraFar.value=i.max}xn.render(Ge,Te)}let Yn=null,kc=!0,Vc=!0;function zh(){const i=new cs;if(ae&&i.expandByObject(ae),Ce&&i.expandByObject(Ce),Rs&&i.expandByObject(Rs),i.isEmpty())return{min:Te.near,max:Te.far};const t=[new I(i.min.x,i.min.y,i.min.z),new I(i.min.x,i.min.y,i.max.z),new I(i.min.x,i.max.y,i.min.z),new I(i.max.x,i.min.y,i.min.z),new I(i.max.x,i.max.y,i.min.z),new I(i.max.x,i.max.y,i.max.z)];let e=1/0,n=-1/0;const s=Te.matrixWorldInverse;return t.forEach(r=>{r.applyMatrix4(s);const o=-r.z;o<e&&(e=o),o>n&&(n=o)}),e=Math.max(Te.near,e-5),n=Math.min(Te.far,n+5),n<=e&&(n=e+10),{min:e,max:n}}function kh(i){if(i==="DEPTH"){const t=zh();Yn||(Yn=new Mn({uniforms:{cameraNear:{value:t.min},cameraFar:{value:t.max}},vertexShader:`
          varying float vDepth;
          void main() {
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            gl_Position = projectionMatrix * mvPosition;
            vDepth = -mvPosition.z;
          }
        `,fragmentShader:`
          uniform float cameraNear;
          uniform float cameraFar;
          varying float vDepth;
          void main() {
            float d = clamp((vDepth - cameraNear) / (cameraFar - cameraNear), 0.0, 1.0);
            gl_FragColor = vec4(vec3(d), 1.0);
          }
        `})),Yn.uniforms.cameraNear.value=t.min,Yn.uniforms.cameraFar.value=t.max,Ge.overrideMaterial=Yn,Yt&&(kc=Yt.visible,Yt.visible=!1);const e=Ge.children.find(n=>n instanceof Ca);e&&(Vc=e.visible,e.visible=!1)}else{Ge.overrideMaterial=null,Yt&&(Yt.visible=kc);const t=Ge.children.find(e=>e instanceof Ca);t&&(t.visible=Vc)}}function sx(){const i=document.getElementById("btn-generate-imagen"),t=document.getElementById("btn-show-imagen"),e=document.getElementById("imagen-status"),n=document.getElementById("imagen-modal"),s=document.getElementById("btn-close-imagen"),r=document.getElementById("imagen-result-img"),o=document.getElementById("imagen-prompt"),a=document.getElementById("btn-prev-imagen"),l=document.getElementById("btn-next-imagen"),c=document.getElementById("btn-save-imagen"),u=document.getElementById("imagen-modal-title");if(!i||!n)return;const f={container:zs,renderer:xn,get camera(){return Te},controls:Ne,osmGroup:null,osmFeature:null,composer:{setSize:(m,_)=>{}},saoPass:null,setDisplayMode:m=>kh(m),render:()=>{xn.render(Ge,Te)},onWindowResize:()=>{Nh()}},d=new D_(f);let h=[],g=0;const x=["Beauty Render","Depth Stencil","AI Render Result"],p=()=>{h.length!==0&&(r.src=h[g],u.textContent=x[g])};i.addEventListener("click",async()=>{const m=o.value.trim();if(!m){alert("Please enter prompt constraints.");return}i.disabled=!0,e.textContent="Initializing...";const _=()=>{const v=document.getElementById("imagen-modal-content");if(v){const S=window.devicePixelRatio||1;v.style.width=`${1365/S}px`,v.style.height=`${768/S}px`}};window.addEventListener("resize",()=>{n.style.display==="flex"&&_()});try{const v=await d.generateRender(m,S=>{e.textContent=S},(S,R)=>{h=[S,R],g=0,p(),_(),n.style.display="flex",t&&(t.style.display="block")});h=[v.beauty,v.depth,v.result],g=2,p(),e.textContent="Success!"}catch{}finally{i.disabled=!1}}),t&&t.addEventListener("click",()=>{h.length>0&&((()=>{const _=document.getElementById("imagen-modal-content");if(_){const v=window.devicePixelRatio||1;_.style.width=`${1365/v}px`,_.style.height=`${768/v}px`}})(),n.style.display="flex")}),a.addEventListener("click",()=>{h.length!==0&&(g=(g-1+h.length)%h.length,p())}),l.addEventListener("click",()=>{h.length!==0&&(g=(g+1)%h.length,p())}),c.addEventListener("click",()=>{if(h.length===0)return;const m=document.createElement("a");m.href=h[g],m.download=x[g].replace(/\s+/g,"_").toLowerCase()+".png",document.body.appendChild(m),m.click(),document.body.removeChild(m)}),s.addEventListener("click",()=>{n.style.display="none"}),document.addEventListener("keydown",m=>{n.style.display==="flex"&&(m.key==="ArrowLeft"||m.key==="<"||m.key===","?a.click():m.key==="ArrowRight"||m.key===">"||m.key==="."?l.click():m.key==="Escape"&&s.click())})}window.addEventListener("load",()=>{z_(),J_(),Uh(M.activePreset)});
