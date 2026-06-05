(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const nl="184",hs={ROTATE:0,DOLLY:1,PAN:2},as={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Lu=0,Xl=1,Nu=2,Gr=1,Uu=2,Ls=3,bi=0,dn=1,qe=2,tn=0,us=1,Yl=2,ql=3,jl=4,Th=5,ti=100,Fu=101,Ou=102,Bu=103,zu=104,ra=200,ku=201,Vu=202,Gu=203,oa=204,aa=205,Ah=206,Hu=207,Ph=208,Wu=209,Xu=210,Yu=211,qu=212,ju=213,Zu=214,la=0,ca=1,ha=2,fs=3,ua=4,da=5,fa=6,pa=7,Ch=0,$u=1,Ku=2,Gn=0,il=1,sl=2,rl=3,ol=4,al=5,ll=6,cl=7,Rh=300,zi=301,ps=302,_o=303,vo=304,ho=306,Xs=1e3,ei=1001,ma=1002,Ge=1003,Ju=1004,sr=1005,en=1006,yo=1007,Ui=1008,xn=1009,Ih=1010,Dh=1011,Ys=1012,hl=1013,Wn=1014,Dn=1015,bn=1016,ul=1017,dl=1018,ms=1020,Lh=35902,Nh=35899,Uh=1021,Fh=1022,Ln=1023,ai=1026,Mi=1027,fl=1028,pl=1029,ki=1030,ml=1031,gl=1033,Hr=33776,Wr=33777,Xr=33778,Yr=33779,ga=35840,xa=35841,_a=35842,va=35843,ya=36196,Ma=37492,Sa=37496,Ea=37488,ba=37489,$r=37490,wa=37491,Ta=37808,Aa=37809,Pa=37810,Ca=37811,Ra=37812,Ia=37813,Da=37814,La=37815,Na=37816,Ua=37817,Fa=37818,Oa=37819,Ba=37820,za=37821,ka=36492,Va=36494,Ga=36495,Ha=36283,Wa=36284,Kr=36285,Xa=36286,Qu=3200,Jr=0,td=1,vi="",Sn="srgb",Qr="srgb-linear",to="linear",de="srgb",Yi=7680,Zl=519,ed=512,nd=513,id=514,xl=515,sd=516,rd=517,_l=518,od=519,Ya=35044,$l="300 es",kn=2e3,qs=2001;function ad(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}const ld={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function rr(i,t){return new ld[i](t)}function eo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function cd(){const i=eo("canvas");return i.style.display="block",i}const Kl={};function no(...i){const t="THREE."+i.shift();console.log(t,...i)}function Oh(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Xt(...i){i=Oh(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function ae(...i){i=Oh(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function qa(...i){const t=i.join(" ");t in Kl||(Kl[t]=!0,Xt(...i))}function hd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const ud={[la]:ca,[ha]:fa,[ua]:pa,[fs]:da,[ca]:la,[fa]:ha,[pa]:ua,[da]:fs};class wi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Jl=1234567;const Bs=Math.PI/180,js=180/Math.PI;function Hn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ke[i&255]+Ke[i>>8&255]+Ke[i>>16&255]+Ke[i>>24&255]+"-"+Ke[t&255]+Ke[t>>8&255]+"-"+Ke[t>>16&15|64]+Ke[t>>24&255]+"-"+Ke[e&63|128]+Ke[e>>8&255]+"-"+Ke[e>>16&255]+Ke[e>>24&255]+Ke[n&255]+Ke[n>>8&255]+Ke[n>>16&255]+Ke[n>>24&255]).toLowerCase()}function ie(i,t,e){return Math.max(t,Math.min(e,i))}function vl(i,t){return(i%t+t)%t}function dd(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function fd(i,t,e){return i!==t?(e-i)/(t-i):0}function zs(i,t,e){return(1-e)*i+e*t}function pd(i,t,e,n){return zs(i,t,1-Math.exp(-e*n))}function md(i,t=1){return t-Math.abs(vl(i,t*2)-t)}function gd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function xd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function _d(i,t){return i+Math.floor(Math.random()*(t-i+1))}function vd(i,t){return i+Math.random()*(t-i)}function yd(i){return i*(.5-Math.random())}function Md(i){i!==void 0&&(Jl=i);let t=Jl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Sd(i){return i*Bs}function Ed(i){return i*js}function bd(i){return(i&i-1)===0&&i!==0}function wd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Td(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ad(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),u=o((t+n)/2),f=r((t-n)/2),h=o((t-n)/2),d=r((n-t)/2),m=o((n-t)/2);switch(s){case"XYX":i.set(a*u,c*f,c*h,a*l);break;case"YZY":i.set(c*h,a*u,c*f,a*l);break;case"ZXZ":i.set(c*f,c*h,a*u,a*l);break;case"XZX":i.set(a*u,c*m,c*d,a*l);break;case"YXY":i.set(c*d,a*u,c*m,a*l);break;case"ZYZ":i.set(c*m,c*d,a*u,a*l);break;default:Xt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Pn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function fe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Bh={DEG2RAD:Bs,RAD2DEG:js,generateUUID:Hn,clamp:ie,euclideanModulo:vl,mapLinear:dd,inverseLerp:fd,lerp:zs,damp:pd,pingpong:md,smoothstep:gd,smootherstep:xd,randInt:_d,randFloat:vd,randFloatSpread:yd,seededRandom:Md,degToRad:Sd,radToDeg:Ed,isPowerOfTwo:bd,ceilPowerOfTwo:wd,floorPowerOfTwo:Td,setQuaternionFromProperEuler:Ad,normalize:fe,denormalize:Pn},Dl=class Dl{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ie(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Dl.prototype.isVector2=!0;let gt=Dl;class Ye{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],u=n[s+2],f=n[s+3],h=r[o+0],d=r[o+1],m=r[o+2],_=r[o+3];if(f!==_||c!==h||l!==d||u!==m){let x=c*h+l*d+u*m+f*_;x<0&&(h=-h,d=-d,m=-m,_=-_,x=-x);let p=1-a;if(x<.9995){const g=Math.acos(x),y=Math.sin(g);p=Math.sin(p*g)/y,a=Math.sin(a*g)/y,c=c*p+h*a,l=l*p+d*a,u=u*p+m*a,f=f*p+_*a}else{c=c*p+h*a,l=l*p+d*a,u=u*p+m*a,f=f*p+_*a;const g=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=g,l*=g,u*=g,f*=g}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],f=r[o],h=r[o+1],d=r[o+2],m=r[o+3];return t[e]=a*m+u*f+c*d-l*h,t[e+1]=c*m+u*h+l*f-a*d,t[e+2]=l*m+u*d+a*h-c*f,t[e+3]=u*m-a*f-c*h-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),f=a(r/2),h=c(n/2),d=c(s/2),m=c(r/2);switch(o){case"XYZ":this._x=h*u*f+l*d*m,this._y=l*d*f-h*u*m,this._z=l*u*m+h*d*f,this._w=l*u*f-h*d*m;break;case"YXZ":this._x=h*u*f+l*d*m,this._y=l*d*f-h*u*m,this._z=l*u*m-h*d*f,this._w=l*u*f+h*d*m;break;case"ZXY":this._x=h*u*f-l*d*m,this._y=l*d*f+h*u*m,this._z=l*u*m+h*d*f,this._w=l*u*f-h*d*m;break;case"ZYX":this._x=h*u*f-l*d*m,this._y=l*d*f+h*u*m,this._z=l*u*m-h*d*f,this._w=l*u*f+h*d*m;break;case"YZX":this._x=h*u*f+l*d*m,this._y=l*d*f+h*u*m,this._z=l*u*m-h*d*f,this._w=l*u*f-h*d*m;break;case"XZY":this._x=h*u*f-l*d*m,this._y=l*d*f-h*u*m,this._z=l*u*m+h*d*f,this._w=l*u*f+h*d*m;break;default:Xt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],f=e[10],h=n+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(n>a&&n>f){const d=2*Math.sqrt(1+n-a-f);this._w=(u-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>f){const d=2*Math.sqrt(1+a-n-f);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+u)/d}else{const d=2*Math.sqrt(1+f-n-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ie(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-s*a,this._w=o*u-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let c=1-e;if(a<.9995){const l=Math.acos(a),u=Math.sin(l);c=Math.sin(c*l)/u,e=Math.sin(e*l)/u,this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Ll=class Ll{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ql.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ql.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),u=2*(a*e-r*s),f=2*(r*n-o*e);return this.x=e+c*l+o*f-a*u,this.y=n+c*u+a*l-r*f,this.z=s+c*f+r*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this.z=ie(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this.z=ie(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ie(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Mo.copy(this).projectOnVector(t),this.sub(Mo)}reflect(t){return this.sub(Mo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Ll.prototype.isVector3=!0;let N=Ll;const Mo=new N,Ql=new Ye,Nl=class Nl{constructor(t,e,n,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],f=n[7],h=n[2],d=n[5],m=n[8],_=s[0],x=s[3],p=s[6],g=s[1],y=s[4],S=s[7],P=s[2],w=s[5],b=s[8];return r[0]=o*_+a*g+c*P,r[3]=o*x+a*y+c*w,r[6]=o*p+a*S+c*b,r[1]=l*_+u*g+f*P,r[4]=l*x+u*y+f*w,r[7]=l*p+u*S+f*b,r[2]=h*_+d*g+m*P,r[5]=h*x+d*y+m*w,r[8]=h*p+d*S+m*b,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-n*r*u+n*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],f=u*o-a*l,h=a*c-u*r,d=l*r-o*c,m=e*f+n*h+s*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return t[0]=f*_,t[1]=(s*l-u*n)*_,t[2]=(a*n-s*o)*_,t[3]=h*_,t[4]=(u*e-s*c)*_,t[5]=(s*r-a*e)*_,t[6]=d*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(So.makeScale(t,e)),this}rotate(t){return this.premultiply(So.makeRotation(-t)),this}translate(t,e){return this.premultiply(So.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Nl.prototype.isMatrix3=!0;let $t=Nl;const So=new $t,tc=new $t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ec=new $t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Pd(){const i={enabled:!0,workingColorSpace:Qr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===de&&(s.r=ri(s.r),s.g=ri(s.g),s.b=ri(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===de&&(s.r=ds(s.r),s.g=ds(s.g),s.b=ds(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===vi?to:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return qa("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return qa("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Qr]:{primaries:t,whitePoint:n,transfer:to,toXYZ:tc,fromXYZ:ec,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Sn},outputColorSpaceConfig:{drawingBufferColorSpace:Sn}},[Sn]:{primaries:t,whitePoint:n,transfer:de,toXYZ:tc,fromXYZ:ec,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Sn}}}),i}const le=Pd();function ri(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ds(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let qi;class Cd{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{qi===void 0&&(qi=eo("canvas")),qi.width=t.width,qi.height=t.height;const s=qi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=qi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=eo("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ri(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ri(e[n]/255)*255):e[n]=ri(e[n]);return{data:e,width:t.width,height:t.height}}else return Xt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Rd=0;class yl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Rd++}),this.uuid=Hn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Eo(s[o].image)):r.push(Eo(s[o]))}else r=Eo(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Eo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Cd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Xt("Texture: Unable to serialize Texture."),{})}let Id=0;const bo=new N;class rn extends wi{constructor(t=rn.DEFAULT_IMAGE,e=rn.DEFAULT_MAPPING,n=ei,s=ei,r=en,o=Ui,a=Ln,c=xn,l=rn.DEFAULT_ANISOTROPY,u=vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Id++}),this.uuid=Hn(),this.name="",this.source=new yl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new gt(0,0),this.repeat=new gt(1,1),this.center=new gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(bo).x}get height(){return this.source.getSize(bo).y}get depth(){return this.source.getSize(bo).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Xt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Xt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Rh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Xs:t.x=t.x-Math.floor(t.x);break;case ei:t.x=t.x<0?0:1;break;case ma:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Xs:t.y=t.y-Math.floor(t.y);break;case ei:t.y=t.y<0?0:1;break;case ma:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=Rh;rn.DEFAULT_ANISOTROPY=1;const Ul=class Ul{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],u=c[4],f=c[8],h=c[1],d=c[5],m=c[9],_=c[2],x=c[6],p=c[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(m-x)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(m+x)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(l+1)/2,S=(d+1)/2,P=(p+1)/2,w=(u+h)/4,b=(f+_)/4,M=(m+x)/4;return y>S&&y>P?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=w/n,r=b/n):S>P?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=w/s,r=M/s):P<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),n=b/r,s=M/r),this.set(n,s,r,e),this}let g=Math.sqrt((x-m)*(x-m)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(g)<.001&&(g=1),this.x=(x-m)/g,this.y=(f-_)/g,this.z=(h-u)/g,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this.z=ie(this.z,t.z,e.z),this.w=ie(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this.z=ie(this.z,t,e),this.w=ie(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ie(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ul.prototype.isVector4=!0;let Pe=Ul;class Dd extends wi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Pe(0,0,t,e),this.scissorTest=!1,this.viewport=new Pe(0,0,t,e),this.textures=[];const s={width:t,height:e,depth:n.depth},r=new rn(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:en,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new yl(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vn extends Dd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class zh extends rn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ld extends rn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const co=class co{constructor(t,e,n,s,r,o,a,c,l,u,f,h,d,m,_,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,u,f,h,d,m,_,x)}set(t,e,n,s,r,o,a,c,l,u,f,h,d,m,_,x){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=m,p[11]=_,p[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new co().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,n=t.elements,s=1/ji.setFromMatrixColumn(t,0).length(),r=1/ji.setFromMatrixColumn(t,1).length(),o=1/ji.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const h=o*u,d=o*f,m=a*u,_=a*f;e[0]=c*u,e[4]=-c*f,e[8]=l,e[1]=d+m*l,e[5]=h-_*l,e[9]=-a*c,e[2]=_-h*l,e[6]=m+d*l,e[10]=o*c}else if(t.order==="YXZ"){const h=c*u,d=c*f,m=l*u,_=l*f;e[0]=h+_*a,e[4]=m*a-d,e[8]=o*l,e[1]=o*f,e[5]=o*u,e[9]=-a,e[2]=d*a-m,e[6]=_+h*a,e[10]=o*c}else if(t.order==="ZXY"){const h=c*u,d=c*f,m=l*u,_=l*f;e[0]=h-_*a,e[4]=-o*f,e[8]=m+d*a,e[1]=d+m*a,e[5]=o*u,e[9]=_-h*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const h=o*u,d=o*f,m=a*u,_=a*f;e[0]=c*u,e[4]=m*l-d,e[8]=h*l+_,e[1]=c*f,e[5]=_*l+h,e[9]=d*l-m,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const h=o*c,d=o*l,m=a*c,_=a*l;e[0]=c*u,e[4]=_-h*f,e[8]=m*f+d,e[1]=f,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=d*f+m,e[10]=h-_*f}else if(t.order==="XZY"){const h=o*c,d=o*l,m=a*c,_=a*l;e[0]=c*u,e[4]=-f,e[8]=l*u,e[1]=h*f+_,e[5]=o*u,e[9]=d*f-m,e[2]=m*f-d,e[6]=a*u,e[10]=_*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Nd,t,Ud)}lookAt(t,e,n){const s=this.elements;return pn.subVectors(t,e),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),di.crossVectors(n,pn),di.lengthSq()===0&&(Math.abs(n.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),di.crossVectors(n,pn)),di.normalize(),or.crossVectors(pn,di),s[0]=di.x,s[4]=or.x,s[8]=pn.x,s[1]=di.y,s[5]=or.y,s[9]=pn.y,s[2]=di.z,s[6]=or.z,s[10]=pn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],f=n[5],h=n[9],d=n[13],m=n[2],_=n[6],x=n[10],p=n[14],g=n[3],y=n[7],S=n[11],P=n[15],w=s[0],b=s[4],M=s[8],A=s[12],D=s[1],T=s[5],I=s[9],U=s[13],F=s[2],L=s[6],O=s[10],B=s[14],W=s[3],G=s[7],q=s[11],st=s[15];return r[0]=o*w+a*D+c*F+l*W,r[4]=o*b+a*T+c*L+l*G,r[8]=o*M+a*I+c*O+l*q,r[12]=o*A+a*U+c*B+l*st,r[1]=u*w+f*D+h*F+d*W,r[5]=u*b+f*T+h*L+d*G,r[9]=u*M+f*I+h*O+d*q,r[13]=u*A+f*U+h*B+d*st,r[2]=m*w+_*D+x*F+p*W,r[6]=m*b+_*T+x*L+p*G,r[10]=m*M+_*I+x*O+p*q,r[14]=m*A+_*U+x*B+p*st,r[3]=g*w+y*D+S*F+P*W,r[7]=g*b+y*T+S*L+P*G,r[11]=g*M+y*I+S*O+P*q,r[15]=g*A+y*U+S*B+P*st,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],f=t[6],h=t[10],d=t[14],m=t[3],_=t[7],x=t[11],p=t[15],g=c*d-l*h,y=a*d-l*f,S=a*h-c*f,P=o*d-l*u,w=o*h-c*u,b=o*f-a*u;return e*(_*g-x*y+p*S)-n*(m*g-x*P+p*w)+s*(m*y-_*P+p*b)-r*(m*S-_*w+x*b)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],f=t[9],h=t[10],d=t[11],m=t[12],_=t[13],x=t[14],p=t[15],g=e*a-n*o,y=e*c-s*o,S=e*l-r*o,P=n*c-s*a,w=n*l-r*a,b=s*l-r*c,M=u*_-f*m,A=u*x-h*m,D=u*p-d*m,T=f*x-h*_,I=f*p-d*_,U=h*p-d*x,F=g*U-y*I+S*T+P*D-w*A+b*M;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/F;return t[0]=(a*U-c*I+l*T)*L,t[1]=(s*I-n*U-r*T)*L,t[2]=(_*b-x*w+p*P)*L,t[3]=(h*w-f*b-d*P)*L,t[4]=(c*D-o*U-l*A)*L,t[5]=(e*U-s*D+r*A)*L,t[6]=(x*S-m*b-p*y)*L,t[7]=(u*b-h*S+d*y)*L,t[8]=(o*I-a*D+l*M)*L,t[9]=(n*D-e*I-r*M)*L,t[10]=(m*w-_*S+p*g)*L,t[11]=(f*S-u*w-d*g)*L,t[12]=(a*A-o*T-c*M)*L,t[13]=(e*T-n*A+s*M)*L,t[14]=(_*y-m*P-x*g)*L,t[15]=(u*P-f*y+h*g)*L,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,u=o+o,f=a+a,h=r*l,d=r*u,m=r*f,_=o*u,x=o*f,p=a*f,g=c*l,y=c*u,S=c*f,P=n.x,w=n.y,b=n.z;return s[0]=(1-(_+p))*P,s[1]=(d+S)*P,s[2]=(m-y)*P,s[3]=0,s[4]=(d-S)*w,s[5]=(1-(h+p))*w,s[6]=(x+g)*w,s[7]=0,s[8]=(m+y)*b,s[9]=(x-g)*b,s[10]=(1-(h+_))*b,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinant();if(r===0)return n.set(1,1,1),e.identity(),this;let o=ji.set(s[0],s[1],s[2]).length();const a=ji.set(s[4],s[5],s[6]).length(),c=ji.set(s[8],s[9],s[10]).length();r<0&&(o=-o),wn.copy(this);const l=1/o,u=1/a,f=1/c;return wn.elements[0]*=l,wn.elements[1]*=l,wn.elements[2]*=l,wn.elements[4]*=u,wn.elements[5]*=u,wn.elements[6]*=u,wn.elements[8]*=f,wn.elements[9]*=f,wn.elements[10]*=f,e.setFromRotationMatrix(wn),n.x=o,n.y=a,n.z=c,this}makePerspective(t,e,n,s,r,o,a=kn,c=!1){const l=this.elements,u=2*r/(e-t),f=2*r/(n-s),h=(e+t)/(e-t),d=(n+s)/(n-s);let m,_;if(c)m=r/(o-r),_=o*r/(o-r);else if(a===kn)m=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===qs)m=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=kn,c=!1){const l=this.elements,u=2/(e-t),f=2/(n-s),h=-(e+t)/(e-t),d=-(n+s)/(n-s);let m,_;if(c)m=1/(o-r),_=o/(o-r);else if(a===kn)m=-2/(o-r),_=-(o+r)/(o-r);else if(a===qs)m=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=f,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};co.prototype.isMatrix4=!0;let xe=co;const ji=new N,wn=new xe,Nd=new N(0,0,0),Ud=new N(1,1,1),di=new N,or=new N,pn=new N,nc=new xe,ic=new Ye;class li{constructor(t=0,e=0,n=0,s=li.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],f=s[2],h=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(ie(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ie(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(ie(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ie(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(ie(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ie(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Xt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return nc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(nc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ic.setFromEuler(this),this.setFromQuaternion(ic,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}li.DEFAULT_ORDER="XYZ";class Ml{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Fd=0;const sc=new N,Zi=new Ye,qn=new xe,ar=new N,Es=new N,Od=new N,Bd=new Ye,rc=new N(1,0,0),oc=new N(0,1,0),ac=new N(0,0,1),lc={type:"added"},zd={type:"removed"},$i={type:"childadded",child:null},wo={type:"childremoved",child:null};class Fe extends wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fd++}),this.uuid=Hn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Fe.DEFAULT_UP.clone();const t=new N,e=new li,n=new Ye,s=new N(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new xe},normalMatrix:{value:new $t}}),this.matrix=new xe,this.matrixWorld=new xe,this.matrixAutoUpdate=Fe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ml,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Zi.setFromAxisAngle(t,e),this.quaternion.multiply(Zi),this}rotateOnWorldAxis(t,e){return Zi.setFromAxisAngle(t,e),this.quaternion.premultiply(Zi),this}rotateX(t){return this.rotateOnAxis(rc,t)}rotateY(t){return this.rotateOnAxis(oc,t)}rotateZ(t){return this.rotateOnAxis(ac,t)}translateOnAxis(t,e){return sc.copy(t).applyQuaternion(this.quaternion),this.position.add(sc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(rc,t)}translateY(t){return this.translateOnAxis(oc,t)}translateZ(t){return this.translateOnAxis(ac,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(qn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ar.copy(t):ar.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Es.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qn.lookAt(Es,ar,this.up):qn.lookAt(ar,Es,this.up),this.quaternion.setFromRotationMatrix(qn),s&&(qn.extractRotation(s.matrixWorld),Zi.setFromRotationMatrix(qn),this.quaternion.premultiply(Zi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ae("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(lc),$i.child=t,this.dispatchEvent($i),$i.child=null):ae("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(zd),wo.child=t,this.dispatchEvent(wo),wo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),qn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),qn.multiply(t.parent.matrixWorld)),t.applyMatrix4(qn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(lc),$i.child=t,this.dispatchEvent($i),$i.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Es,t,Od),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Es,Bd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];r(t.shapes,f)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),f=o(t.shapes),h=o(t.skeletons),d=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Fe.DEFAULT_UP=new N(0,1,0);Fe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Fi extends Fe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const kd={type:"move"};class To{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const _ of t.hand.values()){const x=e.getJointPose(_,n),p=this._getHandJoint(l,_);x!==null&&(p.matrix.fromArray(x.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=x.radius),p.visible=x!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,m=.005;l.inputState.pinching&&h>d+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=d-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(kd)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Fi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const kh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fi={h:0,s:0,l:0},lr={h:0,s:0,l:0};function Ao(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class ee{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Sn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,le.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=le.workingColorSpace){return this.r=t,this.g=e,this.b=n,le.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=le.workingColorSpace){if(t=vl(t,1),e=ie(e,0,1),n=ie(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Ao(o,r,t+1/3),this.g=Ao(o,r,t),this.b=Ao(o,r,t-1/3)}return le.colorSpaceToWorking(this,s),this}setStyle(t,e=Sn){function n(r){r!==void 0&&parseFloat(r)<1&&Xt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Xt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Xt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Sn){const n=kh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Xt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ri(t.r),this.g=ri(t.g),this.b=ri(t.b),this}copyLinearToSRGB(t){return this.r=ds(t.r),this.g=ds(t.g),this.b=ds(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Sn){return le.workingToColorSpace(Je.copy(this),t),Math.round(ie(Je.r*255,0,255))*65536+Math.round(ie(Je.g*255,0,255))*256+Math.round(ie(Je.b*255,0,255))}getHexString(t=Sn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=le.workingColorSpace){le.workingToColorSpace(Je.copy(this),e);const n=Je.r,s=Je.g,r=Je.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const f=o-a;switch(l=u<=.5?f/(o+a):f/(2-o-a),o){case n:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-n)/f+2;break;case r:c=(n-s)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=le.workingColorSpace){return le.workingToColorSpace(Je.copy(this),e),t.r=Je.r,t.g=Je.g,t.b=Je.b,t}getStyle(t=Sn){le.workingToColorSpace(Je.copy(this),t);const e=Je.r,n=Je.g,s=Je.b;return t!==Sn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(fi),this.setHSL(fi.h+t,fi.s+e,fi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(fi),t.getHSL(lr);const n=zs(fi.h,lr.h,e),s=zs(fi.s,lr.s,e),r=zs(fi.l,lr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Je=new ee;ee.NAMES=kh;class Vd extends Fe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new li,this.environmentIntensity=1,this.environmentRotation=new li,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Tn=new N,jn=new N,Po=new N,Zn=new N,Ki=new N,Ji=new N,cc=new N,Co=new N,Ro=new N,Io=new N,Do=new Pe,Lo=new Pe,No=new Pe;class Cn{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Tn.subVectors(t,e),s.cross(Tn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Tn.subVectors(s,e),jn.subVectors(n,e),Po.subVectors(t,e);const o=Tn.dot(Tn),a=Tn.dot(jn),c=Tn.dot(Po),l=jn.dot(jn),u=jn.dot(Po),f=o*l-a*a;if(f===0)return r.set(0,0,0),null;const h=1/f,d=(l*c-a*u)*h,m=(o*u-a*c)*h;return r.set(1-d-m,m,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Zn)===null?!1:Zn.x>=0&&Zn.y>=0&&Zn.x+Zn.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,Zn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Zn.x),c.addScaledVector(o,Zn.y),c.addScaledVector(a,Zn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return Do.setScalar(0),Lo.setScalar(0),No.setScalar(0),Do.fromBufferAttribute(t,e),Lo.fromBufferAttribute(t,n),No.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Do,r.x),o.addScaledVector(Lo,r.y),o.addScaledVector(No,r.z),o}static isFrontFacing(t,e,n,s){return Tn.subVectors(n,e),jn.subVectors(t,e),Tn.cross(jn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Tn.subVectors(this.c,this.b),jn.subVectors(this.a,this.b),Tn.cross(jn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Cn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Cn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Cn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Cn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Cn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Ki.subVectors(s,n),Ji.subVectors(r,n),Co.subVectors(t,n);const c=Ki.dot(Co),l=Ji.dot(Co);if(c<=0&&l<=0)return e.copy(n);Ro.subVectors(t,s);const u=Ki.dot(Ro),f=Ji.dot(Ro);if(u>=0&&f<=u)return e.copy(s);const h=c*f-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(n).addScaledVector(Ki,o);Io.subVectors(t,r);const d=Ki.dot(Io),m=Ji.dot(Io);if(m>=0&&d<=m)return e.copy(r);const _=d*l-c*m;if(_<=0&&l>=0&&m<=0)return a=l/(l-m),e.copy(n).addScaledVector(Ji,a);const x=u*m-d*f;if(x<=0&&f-u>=0&&d-m>=0)return cc.subVectors(r,s),a=(f-u)/(f-u+(d-m)),e.copy(s).addScaledVector(cc,a);const p=1/(x+_+h);return o=_*p,a=h*p,e.copy(n).addScaledVector(Ki,o).addScaledVector(Ji,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class vs{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(An.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(An.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=An.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,An):An.fromBufferAttribute(r,o),An.applyMatrix4(t.matrixWorld),this.expandByPoint(An);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),cr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),cr.copy(n.boundingBox)),cr.applyMatrix4(t.matrixWorld),this.union(cr)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,An),An.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(bs),hr.subVectors(this.max,bs),Qi.subVectors(t.a,bs),ts.subVectors(t.b,bs),es.subVectors(t.c,bs),pi.subVectors(ts,Qi),mi.subVectors(es,ts),Ai.subVectors(Qi,es);let e=[0,-pi.z,pi.y,0,-mi.z,mi.y,0,-Ai.z,Ai.y,pi.z,0,-pi.x,mi.z,0,-mi.x,Ai.z,0,-Ai.x,-pi.y,pi.x,0,-mi.y,mi.x,0,-Ai.y,Ai.x,0];return!Uo(e,Qi,ts,es,hr)||(e=[1,0,0,0,1,0,0,0,1],!Uo(e,Qi,ts,es,hr))?!1:(ur.crossVectors(pi,mi),e=[ur.x,ur.y,ur.z],Uo(e,Qi,ts,es,hr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,An).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(An).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:($n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),$n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),$n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),$n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),$n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),$n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),$n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),$n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints($n),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const $n=[new N,new N,new N,new N,new N,new N,new N,new N],An=new N,cr=new vs,Qi=new N,ts=new N,es=new N,pi=new N,mi=new N,Ai=new N,bs=new N,hr=new N,ur=new N,Pi=new N;function Uo(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Pi.fromArray(i,r);const a=s.x*Math.abs(Pi.x)+s.y*Math.abs(Pi.y)+s.z*Math.abs(Pi.z),c=t.dot(Pi),l=e.dot(Pi),u=n.dot(Pi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Oe=new N,dr=new gt;let Gd=0;class on extends wi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Gd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ya,this.updateRanges=[],this.gpuType=Dn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)dr.fromBufferAttribute(this,e),dr.applyMatrix3(t),this.setXY(e,dr.x,dr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix3(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix4(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyNormalMatrix(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.transformDirection(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Pn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=fe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Pn(e,this.array)),e}setX(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Pn(e,this.array)),e}setY(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Pn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Pn(e,this.array)),e}setW(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),s=fe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),s=fe(s,this.array),r=fe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ya&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}}class Vh extends on{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Gh extends on{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Zt extends on{constructor(t,e,n){super(new Float32Array(t),e,n)}}const Hd=new vs,ws=new N,Fo=new N;class Qs{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Hd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ws.subVectors(t,this.center);const e=ws.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ws,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Fo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ws.copy(t.center).add(Fo)),this.expandByPoint(ws.copy(t.center).sub(Fo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Wd=0;const Mn=new xe,Oo=new Fe,ns=new N,mn=new vs,Ts=new vs,Xe=new N;class te extends wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wd++}),this.uuid=Hn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ad(t)?Gh:Vh)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new $t().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Mn.makeRotationFromQuaternion(t),this.applyMatrix4(Mn),this}rotateX(t){return Mn.makeRotationX(t),this.applyMatrix4(Mn),this}rotateY(t){return Mn.makeRotationY(t),this.applyMatrix4(Mn),this}rotateZ(t){return Mn.makeRotationZ(t),this.applyMatrix4(Mn),this}translate(t,e,n){return Mn.makeTranslation(t,e,n),this.applyMatrix4(Mn),this}scale(t,e,n){return Mn.makeScale(t,e,n),this.applyMatrix4(Mn),this}lookAt(t){return Oo.lookAt(t),Oo.updateMatrix(),this.applyMatrix4(Oo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ns).negate(),this.translate(ns.x,ns.y,ns.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Zt(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Xt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ae("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];mn.setFromBufferAttribute(r),this.morphTargetsRelative?(Xe.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(Xe),Xe.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(Xe)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ae('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ae("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){const n=this.boundingSphere.center;if(mn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Ts.setFromBufferAttribute(a),this.morphTargetsRelative?(Xe.addVectors(mn.min,Ts.min),mn.expandByPoint(Xe),Xe.addVectors(mn.max,Ts.max),mn.expandByPoint(Xe)):(mn.expandByPoint(Ts.min),mn.expandByPoint(Ts.max))}mn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Xe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Xe));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Xe.fromBufferAttribute(a,l),c&&(ns.fromBufferAttribute(t,l),Xe.add(ns)),s=Math.max(s,n.distanceToSquared(Xe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ae('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ae("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new on(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let M=0;M<n.count;M++)a[M]=new N,c[M]=new N;const l=new N,u=new N,f=new N,h=new gt,d=new gt,m=new gt,_=new N,x=new N;function p(M,A,D){l.fromBufferAttribute(n,M),u.fromBufferAttribute(n,A),f.fromBufferAttribute(n,D),h.fromBufferAttribute(r,M),d.fromBufferAttribute(r,A),m.fromBufferAttribute(r,D),u.sub(l),f.sub(l),d.sub(h),m.sub(h);const T=1/(d.x*m.y-m.x*d.y);isFinite(T)&&(_.copy(u).multiplyScalar(m.y).addScaledVector(f,-d.y).multiplyScalar(T),x.copy(f).multiplyScalar(d.x).addScaledVector(u,-m.x).multiplyScalar(T),a[M].add(_),a[A].add(_),a[D].add(_),c[M].add(x),c[A].add(x),c[D].add(x))}let g=this.groups;g.length===0&&(g=[{start:0,count:t.count}]);for(let M=0,A=g.length;M<A;++M){const D=g[M],T=D.start,I=D.count;for(let U=T,F=T+I;U<F;U+=3)p(t.getX(U+0),t.getX(U+1),t.getX(U+2))}const y=new N,S=new N,P=new N,w=new N;function b(M){P.fromBufferAttribute(s,M),w.copy(P);const A=a[M];y.copy(A),y.sub(P.multiplyScalar(P.dot(A))).normalize(),S.crossVectors(w,A);const T=S.dot(c[M])<0?-1:1;o.setXYZW(M,y.x,y.y,y.z,T)}for(let M=0,A=g.length;M<A;++M){const D=g[M],T=D.start,I=D.count;for(let U=T,F=T+I;U<F;U+=3)b(t.getX(U+0)),b(t.getX(U+1)),b(t.getX(U+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new on(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const s=new N,r=new N,o=new N,a=new N,c=new N,l=new N,u=new N,f=new N;if(t)for(let h=0,d=t.count;h<d;h+=3){const m=t.getX(h+0),_=t.getX(h+1),x=t.getX(h+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,x),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,x),a.add(u),c.add(u),l.add(u),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(x,l.x,l.y,l.z)}else for(let h=0,d=e.count;h<d;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Xe.fromBufferAttribute(t,e),Xe.normalize(),t.setXYZ(e,Xe.x,Xe.y,Xe.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,f=a.normalized,h=new l.constructor(c.length*u);let d=0,m=0;for(let _=0,x=c.length;_<x;_++){a.isInterleavedBufferAttribute?d=c[_]*a.data.stride+a.offset:d=c[_]*u;for(let p=0;p<u;p++)h[m++]=l[d++]}return new on(h,u,f)}if(this.index===null)return Xt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new te,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,f=l.length;u<f;u++){const h=l[u],d=t(h,n);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,h=l.length;f<h;f++){const d=l[f];u.push(d.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(e))}const r=t.morphAttributes;for(const l in r){const u=[],f=r[l];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xd{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ya,this.updateRanges=[],this.version=0,this.uuid=Hn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Hn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Hn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const nn=new N;class io{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.applyMatrix4(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.applyNormalMatrix(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.transformDirection(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Pn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=fe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Pn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Pn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Pn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Pn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),s=fe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),s=fe(s,this.array),r=fe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){no("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new on(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new io(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){no("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let Yd=0;class Hi extends wi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Yd++}),this.uuid=Hn(),this.name="",this.type="Material",this.blending=us,this.side=bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=oa,this.blendDst=aa,this.blendEquation=ti,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ee(0,0,0),this.blendAlpha=0,this.depthFunc=fs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yi,this.stencilZFail=Yi,this.stencilZPass=Yi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Xt(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Xt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==us&&(n.blending=this.blending),this.side!==bi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==oa&&(n.blendSrc=this.blendSrc),this.blendDst!==aa&&(n.blendDst=this.blendDst),this.blendEquation!==ti&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==fs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Yi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Yi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Kn=new N,Bo=new N,fr=new N,gi=new N,zo=new N,pr=new N,ko=new N;class uo{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Kn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Kn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Kn.copy(this.origin).addScaledVector(this.direction,e),Kn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Bo.copy(t).add(e).multiplyScalar(.5),fr.copy(e).sub(t).normalize(),gi.copy(this.origin).sub(Bo);const r=t.distanceTo(e)*.5,o=-this.direction.dot(fr),a=gi.dot(this.direction),c=-gi.dot(fr),l=gi.lengthSq(),u=Math.abs(1-o*o);let f,h,d,m;if(u>0)if(f=o*c-a,h=o*a-c,m=r*u,f>=0)if(h>=-m)if(h<=m){const _=1/u;f*=_,h*=_,d=f*(f+o*h+2*a)+h*(o*f+h+2*c)+l}else h=r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*c)+l;else h=-r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*c)+l;else h<=-m?(f=Math.max(0,-(-o*r+a)),h=f>0?-r:Math.min(Math.max(-r,-c),r),d=-f*f+h*(h+2*c)+l):h<=m?(f=0,h=Math.min(Math.max(-r,-c),r),d=h*(h+2*c)+l):(f=Math.max(0,-(o*r+a)),h=f>0?r:Math.min(Math.max(-r,-c),r),d=-f*f+h*(h+2*c)+l);else h=o>0?-r:r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Bo).addScaledVector(fr,h),d}intersectSphere(t,e){Kn.subVectors(t.center,this.origin);const n=Kn.dot(this.direction),s=Kn.dot(Kn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return l>=0?(n=(t.min.x-h.x)*l,s=(t.max.x-h.x)*l):(n=(t.max.x-h.x)*l,s=(t.min.x-h.x)*l),u>=0?(r=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(t.min.z-h.z)*f,c=(t.max.z-h.z)*f):(a=(t.max.z-h.z)*f,c=(t.min.z-h.z)*f),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Kn)!==null}intersectTriangle(t,e,n,s,r){zo.subVectors(e,t),pr.subVectors(n,t),ko.crossVectors(zo,pr);let o=this.direction.dot(ko),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;gi.subVectors(this.origin,t);const c=a*this.direction.dot(pr.crossVectors(gi,pr));if(c<0)return null;const l=a*this.direction.dot(zo.cross(gi));if(l<0||c+l>o)return null;const u=-a*gi.dot(ko);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class De extends Hi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new li,this.combine=Ch,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const hc=new xe,Ci=new uo,mr=new Qs,uc=new N,gr=new N,xr=new N,_r=new N,Vo=new N,vr=new N,dc=new N,yr=new N;class xt extends Fe{constructor(t=new te,e=new De){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){vr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],f=r[c];u!==0&&(Vo.fromBufferAttribute(f,t),o?vr.addScaledVector(Vo,u):vr.addScaledVector(Vo.sub(e),u))}e.add(vr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),mr.copy(n.boundingSphere),mr.applyMatrix4(r),Ci.copy(t.ray).recast(t.near),!(mr.containsPoint(Ci.origin)===!1&&(Ci.intersectSphere(mr,uc)===null||Ci.origin.distanceToSquared(uc)>(t.far-t.near)**2))&&(hc.copy(r).invert(),Ci.copy(t.ray).applyMatrix4(hc),!(n.boundingBox!==null&&Ci.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ci)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=h.length;m<_;m++){const x=h[m],p=o[x.materialIndex],g=Math.max(x.start,d.start),y=Math.min(a.count,Math.min(x.start+x.count,d.start+d.count));for(let S=g,P=y;S<P;S+=3){const w=a.getX(S),b=a.getX(S+1),M=a.getX(S+2);s=Mr(this,p,t,n,l,u,f,w,b,M),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=x.materialIndex,e.push(s))}}else{const m=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let x=m,p=_;x<p;x+=3){const g=a.getX(x),y=a.getX(x+1),S=a.getX(x+2);s=Mr(this,o,t,n,l,u,f,g,y,S),s&&(s.faceIndex=Math.floor(x/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,_=h.length;m<_;m++){const x=h[m],p=o[x.materialIndex],g=Math.max(x.start,d.start),y=Math.min(c.count,Math.min(x.start+x.count,d.start+d.count));for(let S=g,P=y;S<P;S+=3){const w=S,b=S+1,M=S+2;s=Mr(this,p,t,n,l,u,f,w,b,M),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=x.materialIndex,e.push(s))}}else{const m=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let x=m,p=_;x<p;x+=3){const g=x,y=x+1,S=x+2;s=Mr(this,o,t,n,l,u,f,g,y,S),s&&(s.faceIndex=Math.floor(x/3),e.push(s))}}}}function qd(i,t,e,n,s,r,o,a){let c;if(t.side===dn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===bi,a),c===null)return null;yr.copy(a),yr.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(yr);return l<e.near||l>e.far?null:{distance:l,point:yr.clone(),object:i}}function Mr(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,gr),i.getVertexPosition(c,xr),i.getVertexPosition(l,_r);const u=qd(i,t,e,n,gr,xr,_r,dc);if(u){const f=new N;Cn.getBarycoord(dc,gr,xr,_r,f),s&&(u.uv=Cn.getInterpolatedAttribute(s,a,c,l,f,new gt)),r&&(u.uv1=Cn.getInterpolatedAttribute(r,a,c,l,f,new gt)),o&&(u.normal=Cn.getInterpolatedAttribute(o,a,c,l,f,new N),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:c,c:l,normal:new N,materialIndex:0};Cn.getNormal(gr,xr,_r,h.normal),u.face=h,u.barycoord=f}return u}class Hh extends rn{constructor(t=null,e=1,n=1,s,r,o,a,c,l=Ge,u=Ge,f,h){super(null,o,a,c,l,u,s,r,f,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class jd extends on{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Go=new N,Zd=new N,$d=new $t;class Qn{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Go.subVectors(n,e).cross(Zd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const s=t.delta(Go),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||$d.getNormalMatrix(t),s=this.coplanarPoint(Go).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ri=new Qs,Kd=new gt(.5,.5),Sr=new N;class Sl{constructor(t=new Qn,e=new Qn,n=new Qn,s=new Qn,r=new Qn,o=new Qn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=kn,n=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],u=r[4],f=r[5],h=r[6],d=r[7],m=r[8],_=r[9],x=r[10],p=r[11],g=r[12],y=r[13],S=r[14],P=r[15];if(s[0].setComponents(l-o,d-u,p-m,P-g).normalize(),s[1].setComponents(l+o,d+u,p+m,P+g).normalize(),s[2].setComponents(l+a,d+f,p+_,P+y).normalize(),s[3].setComponents(l-a,d-f,p-_,P-y).normalize(),n)s[4].setComponents(c,h,x,S).normalize(),s[5].setComponents(l-c,d-h,p-x,P-S).normalize();else if(s[4].setComponents(l-c,d-h,p-x,P-S).normalize(),e===kn)s[5].setComponents(l+c,d+h,p+x,P+S).normalize();else if(e===qs)s[5].setComponents(c,h,x,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ri.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ri.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ri)}intersectsSprite(t){Ri.center.set(0,0,0);const e=Kd.distanceTo(t.center);return Ri.radius=.7071067811865476+e,Ri.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ri)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Sr.x=s.normal.x>0?t.max.x:t.min.x,Sr.y=s.normal.y>0?t.max.y:t.min.y,Sr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Sr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class hn extends Hi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ee(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const so=new N,ro=new N,fc=new xe,As=new uo,Er=new Qs,Ho=new N,pc=new N;class be extends Fe{constructor(t=new te,e=new hn){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)so.fromBufferAttribute(e,s-1),ro.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=so.distanceTo(ro);t.setAttribute("lineDistance",new Zt(n,1))}else Xt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Er.copy(n.boundingSphere),Er.applyMatrix4(s),Er.radius+=r,t.ray.intersectsSphere(Er)===!1)return;fc.copy(s).invert(),As.copy(t.ray).applyMatrix4(fc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){const d=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let _=d,x=m-1;_<x;_+=l){const p=u.getX(_),g=u.getX(_+1),y=br(this,t,As,c,p,g,_);y&&e.push(y)}if(this.isLineLoop){const _=u.getX(m-1),x=u.getX(d),p=br(this,t,As,c,_,x,m-1);p&&e.push(p)}}else{const d=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let _=d,x=m-1;_<x;_+=l){const p=br(this,t,As,c,_,_+1,_);p&&e.push(p)}if(this.isLineLoop){const _=br(this,t,As,c,m-1,d,m-1);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function br(i,t,e,n,s,r,o){const a=i.geometry.attributes.position;if(so.fromBufferAttribute(a,s),ro.fromBufferAttribute(a,r),e.distanceSqToSegment(so,ro,Ho,pc)>n)return;Ho.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Ho);if(!(l<t.near||l>t.far))return{distance:l,point:pc.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const mc=new N,gc=new N;class Jd extends be{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)mc.fromBufferAttribute(e,s),gc.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+mc.distanceTo(gc);t.setAttribute("lineDistance",new Zt(n,1))}else Xt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Wh extends rn{constructor(t=[],e=zi,n,s,r,o,a,c,l,u){super(t,e,n,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Vi extends rn{constructor(t,e,n=Wn,s,r,o,a=Ge,c=Ge,l,u=ai,f=1){if(u!==ai&&u!==Mi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:t,height:e,depth:f};super(h,s,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new yl(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Qd extends Vi{constructor(t,e=Wn,n=zi,s,r,o=Ge,a=Ge,c,l=ai){const u={width:t,height:t,depth:1},f=[u,u,u,u,u,u];super(t,t,e,n,s,r,o,a,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Xh extends rn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Ae extends te{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],f=[];let h=0,d=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,s,o,2),m("x","z","y",1,-1,t,n,-e,s,o,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Zt(l,3)),this.setAttribute("normal",new Zt(u,3)),this.setAttribute("uv",new Zt(f,2));function m(_,x,p,g,y,S,P,w,b,M,A){const D=S/b,T=P/M,I=S/2,U=P/2,F=w/2,L=b+1,O=M+1;let B=0,W=0;const G=new N;for(let q=0;q<O;q++){const st=q*T-U;for(let nt=0;nt<L;nt++){const ct=nt*D-I;G[_]=ct*g,G[x]=st*y,G[p]=F,l.push(G.x,G.y,G.z),G[_]=0,G[x]=0,G[p]=w>0?1:-1,u.push(G.x,G.y,G.z),f.push(nt/b),f.push(1-q/M),B+=1}}for(let q=0;q<M;q++)for(let st=0;st<b;st++){const nt=h+st+L*q,ct=h+st+L*(q+1),Pt=h+(st+1)+L*(q+1),Tt=h+(st+1)+L*q;c.push(nt,ct,Tt),c.push(ct,Pt,Tt),W+=6}a.addGroup(d,W,A),d+=W,h+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ae(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class ln extends te{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new N,u=new gt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let f=0,h=3;f<=e;f++,h+=3){const d=n+f/e*s;l.x=t*Math.cos(d),l.y=t*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[h]/t+1)/2,u.y=(o[h+1]/t+1)/2,c.push(u.x,u.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new Zt(o,3)),this.setAttribute("normal",new Zt(a,3)),this.setAttribute("uv",new Zt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ln(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class je extends te{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],f=[],h=[],d=[];let m=0;const _=[],x=n/2;let p=0;g(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new Zt(f,3)),this.setAttribute("normal",new Zt(h,3)),this.setAttribute("uv",new Zt(d,2));function g(){const S=new N,P=new N;let w=0;const b=(e-t)/n;for(let M=0;M<=r;M++){const A=[],D=M/r,T=D*(e-t)+t;for(let I=0;I<=s;I++){const U=I/s,F=U*c+a,L=Math.sin(F),O=Math.cos(F);P.x=T*L,P.y=-D*n+x,P.z=T*O,f.push(P.x,P.y,P.z),S.set(L,b,O).normalize(),h.push(S.x,S.y,S.z),d.push(U,1-D),A.push(m++)}_.push(A)}for(let M=0;M<s;M++)for(let A=0;A<r;A++){const D=_[A][M],T=_[A+1][M],I=_[A+1][M+1],U=_[A][M+1];(t>0||A!==0)&&(u.push(D,T,U),w+=3),(e>0||A!==r-1)&&(u.push(T,I,U),w+=3)}l.addGroup(p,w,0),p+=w}function y(S){const P=m,w=new gt,b=new N;let M=0;const A=S===!0?t:e,D=S===!0?1:-1;for(let I=1;I<=s;I++)f.push(0,x*D,0),h.push(0,D,0),d.push(.5,.5),m++;const T=m;for(let I=0;I<=s;I++){const F=I/s*c+a,L=Math.cos(F),O=Math.sin(F);b.x=A*O,b.y=x*D,b.z=A*L,f.push(b.x,b.y,b.z),h.push(0,D,0),w.x=L*.5+.5,w.y=O*.5*D+.5,d.push(w.x,w.y),m++}for(let I=0;I<s;I++){const U=P+I,F=T+I;S===!0?u.push(F,F+1,U):u.push(F+1,F,U),M+=3}l.addGroup(p,M,S===!0?1:2),p+=M}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new je(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class El extends te{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),l(n),u(),this.setAttribute("position",new Zt(r,3)),this.setAttribute("normal",new Zt(r.slice(),3)),this.setAttribute("uv",new Zt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(g){const y=new N,S=new N,P=new N;for(let w=0;w<e.length;w+=3)d(e[w+0],y),d(e[w+1],S),d(e[w+2],P),c(y,S,P,g)}function c(g,y,S,P){const w=P+1,b=[];for(let M=0;M<=w;M++){b[M]=[];const A=g.clone().lerp(S,M/w),D=y.clone().lerp(S,M/w),T=w-M;for(let I=0;I<=T;I++)I===0&&M===w?b[M][I]=A:b[M][I]=A.clone().lerp(D,I/T)}for(let M=0;M<w;M++)for(let A=0;A<2*(w-M)-1;A++){const D=Math.floor(A/2);A%2===0?(h(b[M][D+1]),h(b[M+1][D]),h(b[M][D])):(h(b[M][D+1]),h(b[M+1][D+1]),h(b[M+1][D]))}}function l(g){const y=new N;for(let S=0;S<r.length;S+=3)y.x=r[S+0],y.y=r[S+1],y.z=r[S+2],y.normalize().multiplyScalar(g),r[S+0]=y.x,r[S+1]=y.y,r[S+2]=y.z}function u(){const g=new N;for(let y=0;y<r.length;y+=3){g.x=r[y+0],g.y=r[y+1],g.z=r[y+2];const S=x(g)/2/Math.PI+.5,P=p(g)/Math.PI+.5;o.push(S,1-P)}m(),f()}function f(){for(let g=0;g<o.length;g+=6){const y=o[g+0],S=o[g+2],P=o[g+4],w=Math.max(y,S,P),b=Math.min(y,S,P);w>.9&&b<.1&&(y<.2&&(o[g+0]+=1),S<.2&&(o[g+2]+=1),P<.2&&(o[g+4]+=1))}}function h(g){r.push(g.x,g.y,g.z)}function d(g,y){const S=g*3;y.x=t[S+0],y.y=t[S+1],y.z=t[S+2]}function m(){const g=new N,y=new N,S=new N,P=new N,w=new gt,b=new gt,M=new gt;for(let A=0,D=0;A<r.length;A+=9,D+=6){g.set(r[A+0],r[A+1],r[A+2]),y.set(r[A+3],r[A+4],r[A+5]),S.set(r[A+6],r[A+7],r[A+8]),w.set(o[D+0],o[D+1]),b.set(o[D+2],o[D+3]),M.set(o[D+4],o[D+5]),P.copy(g).add(y).add(S).divideScalar(3);const T=x(P);_(w,D+0,g,T),_(b,D+2,y,T),_(M,D+4,S,T)}}function _(g,y,S,P){P<0&&g.x===1&&(o[y]=g.x-1),S.x===0&&S.z===0&&(o[y]=P/2/Math.PI+.5)}function x(g){return Math.atan2(g.z,-g.x)}function p(g){return Math.atan2(-g.y,Math.sqrt(g.x*g.x+g.z*g.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new El(t.vertices,t.indices,t.radius,t.detail)}}class Xn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Xt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const u=n[s],h=n[s+1]-u,d=(o-u)/h;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new gt:new N);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new N,s=[],r=[],o=[],a=new N,c=new xe;for(let d=0;d<=t;d++){const m=d/t;s[d]=this.getTangentAt(m,new N)}r[0]=new N,o[0]=new N;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),f=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),f<=l&&(l=f,n.set(0,1,0)),h<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(ie(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,m))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(ie(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let m=1;m<=t;m++)r[m].applyMatrix4(c.makeRotationAxis(s[m],d*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class bl extends Xn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new gt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=c-this.aX,d=l-this.aY;c=h*u-d*f+this.aX,l=h*f+d*u+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class tf extends bl{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function wl(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,f){let h=(o-r)/l-(a-r)/(l+u)+(a-o)/u,d=(a-o)/u-(c-o)/(u+f)+(c-a)/f;h*=u,d*=u,s(o,a,h,d)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const xc=new N,_c=new N,Wo=new wl,Xo=new wl,Yo=new wl;class ef extends Xn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new N){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(_c.subVectors(s[0],s[1]).add(s[0]),l=_c);const f=s[a%r],h=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(xc.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=xc),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let m=Math.pow(l.distanceToSquared(f),d),_=Math.pow(f.distanceToSquared(h),d),x=Math.pow(h.distanceToSquared(u),d);_<1e-4&&(_=1),m<1e-4&&(m=_),x<1e-4&&(x=_),Wo.initNonuniformCatmullRom(l.x,f.x,h.x,u.x,m,_,x),Xo.initNonuniformCatmullRom(l.y,f.y,h.y,u.y,m,_,x),Yo.initNonuniformCatmullRom(l.z,f.z,h.z,u.z,m,_,x)}else this.curveType==="catmullrom"&&(Wo.initCatmullRom(l.x,f.x,h.x,u.x,this.tension),Xo.initCatmullRom(l.y,f.y,h.y,u.y,this.tension),Yo.initCatmullRom(l.z,f.z,h.z,u.z,this.tension));return n.set(Wo.calc(c),Xo.calc(c),Yo.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new N().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function vc(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function nf(i,t){const e=1-i;return e*e*t}function sf(i,t){return 2*(1-i)*i*t}function rf(i,t){return i*i*t}function ks(i,t,e,n){return nf(i,t)+sf(i,e)+rf(i,n)}function of(i,t){const e=1-i;return e*e*e*t}function af(i,t){const e=1-i;return 3*e*e*i*t}function lf(i,t){return 3*(1-i)*i*i*t}function cf(i,t){return i*i*i*t}function Vs(i,t,e,n,s){return of(i,t)+af(i,e)+lf(i,n)+cf(i,s)}class Yh extends Xn{constructor(t=new gt,e=new gt,n=new gt,s=new gt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new gt){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Vs(t,s.x,r.x,o.x,a.x),Vs(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class hf extends Xn{constructor(t=new N,e=new N,n=new N,s=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new N){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Vs(t,s.x,r.x,o.x,a.x),Vs(t,s.y,r.y,o.y,a.y),Vs(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class qh extends Xn{constructor(t=new gt,e=new gt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new gt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new gt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class uf extends Xn{constructor(t=new N,e=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new N){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new N){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class jh extends Xn{constructor(t=new gt,e=new gt,n=new gt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new gt){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(ks(t,s.x,r.x,o.x),ks(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class df extends Xn{constructor(t=new N,e=new N,n=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new N){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(ks(t,s.x,r.x,o.x),ks(t,s.y,r.y,o.y),ks(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Zh extends Xn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new gt){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return n.set(vc(a,c.x,l.x,u.x,f.x),vc(a,c.y,l.y,u.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new gt().fromArray(s))}return this}}var ja=Object.freeze({__proto__:null,ArcCurve:tf,CatmullRomCurve3:ef,CubicBezierCurve:Yh,CubicBezierCurve3:hf,EllipseCurve:bl,LineCurve:qh,LineCurve3:uf,QuadraticBezierCurve:jh,QuadraticBezierCurve3:df,SplineCurve:Zh});class ff extends Xn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ja[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new ja[s.type]().fromJSON(s))}return this}}class yc extends ff{constructor(t){super(),this.type="Path",this.currentPoint=new gt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new qh(this.currentPoint.clone(),new gt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new jh(this.currentPoint.clone(),new gt(t,e),new gt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new Yh(this.currentPoint.clone(),new gt(t,e),new gt(n,s),new gt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Zh(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){const l=new bl(t,e,n,s,r,o,a,c);if(this.curves.length>0){const f=l.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class ni extends yc{constructor(t){super(t),this.uuid=Hn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new yc().fromJSON(s))}return this}}function pf(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=$h(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=vf(i,t,r,e)),i.length>80*e){a=i[0],c=i[1];let u=a,f=c;for(let h=e;h<s;h+=e){const d=i[h],m=i[h+1];d<a&&(a=d),m<c&&(c=m),d>u&&(u=d),m>f&&(f=m)}l=Math.max(u-a,f-c),l=l!==0?32767/l:0}return Zs(r,o,e,a,c,l,0),o}function $h(i,t,e,n,s){let r;if(s===Rf(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=Mc(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=Mc(o/n|0,i[o],i[o+1],r);return r&&gs(r,r.next)&&(Ks(r),r=r.next),r}function Gi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(gs(e,e.next)||we(e.prev,e,e.next)===0)){if(Ks(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Zs(i,t,e,n,s,r,o){if(!i)return;!o&&r&&bf(i,n,s,r);let a=i;for(;i.prev!==i.next;){const c=i.prev,l=i.next;if(r?gf(i,n,s,r):mf(i)){t.push(c.i,i.i,l.i),Ks(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=xf(Gi(i),t),Zs(i,t,e,n,s,r,2)):o===2&&_f(i,t,e,n,s,r):Zs(Gi(i),t,e,n,s,r,1);break}}}function mf(i){const t=i.prev,e=i,n=i.next;if(we(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,u=Math.min(s,r,o),f=Math.min(a,c,l),h=Math.max(s,r,o),d=Math.max(a,c,l);let m=n.next;for(;m!==t;){if(m.x>=u&&m.x<=h&&m.y>=f&&m.y<=d&&Ns(s,a,r,c,o,l,m.x,m.y)&&we(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function gf(i,t,e,n){const s=i.prev,r=i,o=i.next;if(we(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,u=s.y,f=r.y,h=o.y,d=Math.min(a,c,l),m=Math.min(u,f,h),_=Math.max(a,c,l),x=Math.max(u,f,h),p=Za(d,m,t,e,n),g=Za(_,x,t,e,n);let y=i.prevZ,S=i.nextZ;for(;y&&y.z>=p&&S&&S.z<=g;){if(y.x>=d&&y.x<=_&&y.y>=m&&y.y<=x&&y!==s&&y!==o&&Ns(a,u,c,f,l,h,y.x,y.y)&&we(y.prev,y,y.next)>=0||(y=y.prevZ,S.x>=d&&S.x<=_&&S.y>=m&&S.y<=x&&S!==s&&S!==o&&Ns(a,u,c,f,l,h,S.x,S.y)&&we(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;y&&y.z>=p;){if(y.x>=d&&y.x<=_&&y.y>=m&&y.y<=x&&y!==s&&y!==o&&Ns(a,u,c,f,l,h,y.x,y.y)&&we(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;S&&S.z<=g;){if(S.x>=d&&S.x<=_&&S.y>=m&&S.y<=x&&S!==s&&S!==o&&Ns(a,u,c,f,l,h,S.x,S.y)&&we(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function xf(i,t){let e=i;do{const n=e.prev,s=e.next.next;!gs(n,s)&&Jh(n,e,e.next,s)&&$s(n,s)&&$s(s,n)&&(t.push(n.i,e.i,s.i),Ks(e),Ks(e.next),e=i=s),e=e.next}while(e!==i);return Gi(e)}function _f(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Af(o,a)){let c=Qh(o,a);o=Gi(o,o.next),c=Gi(c,c.next),Zs(o,t,e,n,s,r,0),Zs(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function vf(i,t,e,n){const s=[];for(let r=0,o=t.length;r<o;r++){const a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=$h(i,a,c,n,!1);l===l.next&&(l.steiner=!0),s.push(Tf(l))}s.sort(yf);for(let r=0;r<s.length;r++)e=Mf(s[r],e);return e}function yf(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Mf(i,t){const e=Sf(i,t);if(!e)return t;const n=Qh(e,i);return Gi(n,n.next),Gi(e,e.next)}function Sf(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,o;if(gs(i,e))return e;do{if(gs(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const f=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=n&&f>r&&(r=f,o=e.x<e.next.x?e:e.next,f===n))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,c=o.x,l=o.y;let u=1/0;e=o;do{if(n>=e.x&&e.x>=c&&n!==e.x&&Kh(s<l?n:r,s,c,l,s<l?r:n,s,e.x,e.y)){const f=Math.abs(s-e.y)/(n-e.x);$s(e,i)&&(f<u||f===u&&(e.x>o.x||e.x===o.x&&Ef(o,e)))&&(o=e,u=f)}e=e.next}while(e!==a);return o}function Ef(i,t){return we(i.prev,i,t.prev)<0&&we(t.next,i,i.next)<0}function bf(i,t,e,n){let s=i;do s.z===0&&(s.z=Za(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,wf(s)}function wf(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let l=0;l<e&&(a++,o=o.nextZ,!!o);l++);let c=e;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function Za(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Tf(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Kh(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Ns(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&Kh(i,t,e,n,s,r,o,a)}function Af(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Pf(i,t)&&($s(i,t)&&$s(t,i)&&Cf(i,t)&&(we(i.prev,i,t.prev)||we(i,t.prev,t))||gs(i,t)&&we(i.prev,i,i.next)>0&&we(t.prev,t,t.next)>0)}function we(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function gs(i,t){return i.x===t.x&&i.y===t.y}function Jh(i,t,e,n){const s=Tr(we(i,t,e)),r=Tr(we(i,t,n)),o=Tr(we(e,n,i)),a=Tr(we(e,n,t));return!!(s!==r&&o!==a||s===0&&wr(i,e,t)||r===0&&wr(i,n,t)||o===0&&wr(e,i,n)||a===0&&wr(e,t,n))}function wr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Tr(i){return i>0?1:i<0?-1:0}function Pf(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Jh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function $s(i,t){return we(i.prev,i,i.next)<0?we(i,t,i.next)>=0&&we(i,i.prev,t)>=0:we(i,t,i.prev)<0||we(i,i.next,t)<0}function Cf(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Qh(i,t){const e=$a(i.i,i.x,i.y),n=$a(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Mc(i,t,e,n){const s=$a(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ks(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function $a(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Rf(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class If{static triangulate(t,e,n=2){return pf(t,e,n)}}class ii{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return ii.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];Sc(t),Ec(n,t);let o=t.length;e.forEach(Sc);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,Ec(n,e[c]);const a=If.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function Sc(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Ec(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Gs extends te{constructor(t=new ni([new gt(.5,.5),new gt(-.5,.5),new gt(-.5,-.5),new gt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];o(l)}this.setAttribute("position",new Zt(s,3)),this.setAttribute("uv",new Zt(r,2)),this.computeVertexNormals();function o(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1;let h=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:d-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,x=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,g=e.UVGenerator!==void 0?e.UVGenerator:Df;let y,S=!1,P,w,b,M;if(p){y=p.getSpacedPoints(u),S=!0,h=!1;const Q=p.isCatmullRomCurve3?p.closed:!1;P=p.computeFrenetFrames(u,Q),w=new N,b=new N,M=new N}h||(x=0,d=0,m=0,_=0);const A=a.extractPoints(l);let D=A.shape;const T=A.holes;if(!ii.isClockWise(D)){D=D.reverse();for(let Q=0,J=T.length;Q<J;Q++){const $=T[Q];ii.isClockWise($)&&(T[Q]=$.reverse())}}function U(Q){const $=10000000000000001e-36;let et=Q[0];for(let yt=1;yt<=Q.length;yt++){const kt=yt%Q.length,z=Q[kt],Gt=z.x-et.x,Nt=z.y-et.y,Wt=Gt*Gt+Nt*Nt,mt=Math.max(Math.abs(z.x),Math.abs(z.y),Math.abs(et.x),Math.abs(et.y)),se=$*mt*mt;if(Wt<=se){Q.splice(kt,1),yt--;continue}et=z}}U(D),T.forEach(U);const F=T.length,L=D;for(let Q=0;Q<F;Q++){const J=T[Q];D=D.concat(J)}function O(Q,J,$){return J||ae("ExtrudeGeometry: vec does not exist"),Q.clone().addScaledVector(J,$)}const B=D.length;function W(Q,J,$){let et,yt,kt;const z=Q.x-J.x,Gt=Q.y-J.y,Nt=$.x-Q.x,Wt=$.y-Q.y,mt=z*z+Gt*Gt,se=z*Wt-Gt*Nt;if(Math.abs(se)>Number.EPSILON){const R=Math.sqrt(mt),E=Math.sqrt(Nt*Nt+Wt*Wt),V=J.x-Gt/R,tt=J.y+z/R,lt=$.x-Wt/E,dt=$.y+Nt/E,St=((lt-V)*Wt-(dt-tt)*Nt)/(z*Wt-Gt*Nt);et=V+z*St-Q.x,yt=tt+Gt*St-Q.y;const K=et*et+yt*yt;if(K<=2)return new gt(et,yt);kt=Math.sqrt(K/2)}else{let R=!1;z>Number.EPSILON?Nt>Number.EPSILON&&(R=!0):z<-Number.EPSILON?Nt<-Number.EPSILON&&(R=!0):Math.sign(Gt)===Math.sign(Wt)&&(R=!0),R?(et=-Gt,yt=z,kt=Math.sqrt(mt)):(et=z,yt=Gt,kt=Math.sqrt(mt/2))}return new gt(et/kt,yt/kt)}const G=[];for(let Q=0,J=L.length,$=J-1,et=Q+1;Q<J;Q++,$++,et++)$===J&&($=0),et===J&&(et=0),G[Q]=W(L[Q],L[$],L[et]);const q=[];let st,nt=G.concat();for(let Q=0,J=F;Q<J;Q++){const $=T[Q];st=[];for(let et=0,yt=$.length,kt=yt-1,z=et+1;et<yt;et++,kt++,z++)kt===yt&&(kt=0),z===yt&&(z=0),st[et]=W($[et],$[kt],$[z]);q.push(st),nt=nt.concat(st)}let ct;if(x===0)ct=ii.triangulateShape(L,T);else{const Q=[],J=[];for(let $=0;$<x;$++){const et=$/x,yt=d*Math.cos(et*Math.PI/2),kt=m*Math.sin(et*Math.PI/2)+_;for(let z=0,Gt=L.length;z<Gt;z++){const Nt=O(L[z],G[z],kt);ut(Nt.x,Nt.y,-yt),et===0&&Q.push(Nt)}for(let z=0,Gt=F;z<Gt;z++){const Nt=T[z];st=q[z];const Wt=[];for(let mt=0,se=Nt.length;mt<se;mt++){const R=O(Nt[mt],st[mt],kt);ut(R.x,R.y,-yt),et===0&&Wt.push(R)}et===0&&J.push(Wt)}}ct=ii.triangulateShape(Q,J)}const Pt=ct.length,Tt=m+_;for(let Q=0;Q<B;Q++){const J=h?O(D[Q],nt[Q],Tt):D[Q];S?(b.copy(P.normals[0]).multiplyScalar(J.x),w.copy(P.binormals[0]).multiplyScalar(J.y),M.copy(y[0]).add(b).add(w),ut(M.x,M.y,M.z)):ut(J.x,J.y,0)}for(let Q=1;Q<=u;Q++)for(let J=0;J<B;J++){const $=h?O(D[J],nt[J],Tt):D[J];S?(b.copy(P.normals[Q]).multiplyScalar($.x),w.copy(P.binormals[Q]).multiplyScalar($.y),M.copy(y[Q]).add(b).add(w),ut(M.x,M.y,M.z)):ut($.x,$.y,f/u*Q)}for(let Q=x-1;Q>=0;Q--){const J=Q/x,$=d*Math.cos(J*Math.PI/2),et=m*Math.sin(J*Math.PI/2)+_;for(let yt=0,kt=L.length;yt<kt;yt++){const z=O(L[yt],G[yt],et);ut(z.x,z.y,f+$)}for(let yt=0,kt=T.length;yt<kt;yt++){const z=T[yt];st=q[yt];for(let Gt=0,Nt=z.length;Gt<Nt;Gt++){const Wt=O(z[Gt],st[Gt],et);S?ut(Wt.x,Wt.y+y[u-1].y,y[u-1].x+$):ut(Wt.x,Wt.y,f+$)}}}Z(),ht();function Z(){const Q=s.length/3;if(h){let J=0,$=B*J;for(let et=0;et<Pt;et++){const yt=ct[et];vt(yt[2]+$,yt[1]+$,yt[0]+$)}J=u+x*2,$=B*J;for(let et=0;et<Pt;et++){const yt=ct[et];vt(yt[0]+$,yt[1]+$,yt[2]+$)}}else{for(let J=0;J<Pt;J++){const $=ct[J];vt($[2],$[1],$[0])}for(let J=0;J<Pt;J++){const $=ct[J];vt($[0]+B*u,$[1]+B*u,$[2]+B*u)}}n.addGroup(Q,s.length/3-Q,0)}function ht(){const Q=s.length/3;let J=0;at(L,J),J+=L.length;for(let $=0,et=T.length;$<et;$++){const yt=T[$];at(yt,J),J+=yt.length}n.addGroup(Q,s.length/3-Q,1)}function at(Q,J){let $=Q.length;for(;--$>=0;){const et=$;let yt=$-1;yt<0&&(yt=Q.length-1);for(let kt=0,z=u+x*2;kt<z;kt++){const Gt=B*kt,Nt=B*(kt+1),Wt=J+et+Gt,mt=J+yt+Gt,se=J+yt+Nt,R=J+et+Nt;pt(Wt,mt,se,R)}}}function ut(Q,J,$){c.push(Q),c.push(J),c.push($)}function vt(Q,J,$){It(Q),It(J),It($);const et=s.length/3,yt=g.generateTopUV(n,s,et-3,et-2,et-1);At(yt[0]),At(yt[1]),At(yt[2])}function pt(Q,J,$,et){It(Q),It(J),It(et),It(J),It($),It(et);const yt=s.length/3,kt=g.generateSideWallUV(n,s,yt-6,yt-3,yt-2,yt-1);At(kt[0]),At(kt[1]),At(kt[3]),At(kt[1]),At(kt[2]),At(kt[3])}function It(Q){s.push(c[Q*3+0]),s.push(c[Q*3+1]),s.push(c[Q*3+2])}function At(Q){r.push(Q.x),r.push(Q.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Lf(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new ja[s.type]().fromJSON(s)),new Gs(n,t.options)}}const Df={generateTopUV:function(i,t,e,n,s){const r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],u=t[s*3+1];return[new gt(r,o),new gt(a,c),new gt(l,u)]},generateSideWallUV:function(i,t,e,n,s,r){const o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],u=t[n*3+1],f=t[n*3+2],h=t[s*3],d=t[s*3+1],m=t[s*3+2],_=t[r*3],x=t[r*3+1],p=t[r*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new gt(o,1-c),new gt(l,1-f),new gt(h,1-m),new gt(_,1-p)]:[new gt(a,1-c),new gt(u,1-f),new gt(d,1-m),new gt(x,1-p)]}};function Lf(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class ls extends El{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ls(t.radius,t.detail)}}class ys extends te{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,f=t/a,h=e/c,d=[],m=[],_=[],x=[];for(let p=0;p<u;p++){const g=p*h-o;for(let y=0;y<l;y++){const S=y*f-r;m.push(S,-g,0),_.push(0,0,1),x.push(y/a),x.push(1-p/c)}}for(let p=0;p<c;p++)for(let g=0;g<a;g++){const y=g+l*p,S=g+l*(p+1),P=g+1+l*(p+1),w=g+1+l*p;d.push(y,S,w),d.push(S,P,w)}this.setIndex(d),this.setAttribute("position",new Zt(m,3)),this.setAttribute("normal",new Zt(_,3)),this.setAttribute("uv",new Zt(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ys(t.width,t.height,t.widthSegments,t.heightSegments)}}class Tl extends te{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],c=[],l=[],u=[];let f=t;const h=(e-t)/s,d=new N,m=new gt;for(let _=0;_<=s;_++){for(let x=0;x<=n;x++){const p=r+x/n*o;d.x=f*Math.cos(p),d.y=f*Math.sin(p),c.push(d.x,d.y,d.z),l.push(0,0,1),m.x=(d.x/e+1)/2,m.y=(d.y/e+1)/2,u.push(m.x,m.y)}f+=h}for(let _=0;_<s;_++){const x=_*(n+1);for(let p=0;p<n;p++){const g=p+x,y=g,S=g+n+1,P=g+n+2,w=g+1;a.push(y,S,w),a.push(S,P,w)}}this.setIndex(a),this.setAttribute("position",new Zt(c,3)),this.setAttribute("normal",new Zt(l,3)),this.setAttribute("uv",new Zt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Tl(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Js extends te{constructor(t=new ni([new gt(0,.5),new gt(-.5,-.5),new gt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],r=[],o=[];let a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let u=0;u<t.length;u++)l(t[u]),this.addGroup(a,c,u),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new Zt(s,3)),this.setAttribute("normal",new Zt(r,3)),this.setAttribute("uv",new Zt(o,2));function l(u){const f=s.length/3,h=u.extractPoints(e);let d=h.shape;const m=h.holes;ii.isClockWise(d)===!1&&(d=d.reverse());for(let x=0,p=m.length;x<p;x++){const g=m[x];ii.isClockWise(g)===!0&&(m[x]=g.reverse())}const _=ii.triangulateShape(d,m);for(let x=0,p=m.length;x<p;x++){const g=m[x];d=d.concat(g)}for(let x=0,p=d.length;x<p;x++){const g=d[x];s.push(g.x,g.y,0),r.push(0,0,1),o.push(g.x,g.y)}for(let x=0,p=_.length;x<p;x++){const g=_[x],y=g[0]+f,S=g[1]+f,P=g[2]+f;n.push(y,S,P),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Nf(e,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];n.push(o)}return new Js(n,t.curveSegments)}}function Nf(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class Al extends te{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],f=new N,h=new N,d=[],m=[],_=[],x=[];for(let p=0;p<=n;p++){const g=[],y=p/n;let S=0;p===0&&o===0?S=.5/e:p===n&&c===Math.PI&&(S=-.5/e);for(let P=0;P<=e;P++){const w=P/e;f.x=-t*Math.cos(s+w*r)*Math.sin(o+y*a),f.y=t*Math.cos(o+y*a),f.z=t*Math.sin(s+w*r)*Math.sin(o+y*a),m.push(f.x,f.y,f.z),h.copy(f).normalize(),_.push(h.x,h.y,h.z),x.push(w+S,1-y),g.push(l++)}u.push(g)}for(let p=0;p<n;p++)for(let g=0;g<e;g++){const y=u[p][g+1],S=u[p][g],P=u[p+1][g],w=u[p+1][g+1];(p!==0||o>0)&&d.push(y,S,w),(p!==n-1||c<Math.PI)&&d.push(S,P,w)}this.setIndex(d),this.setAttribute("position",new Zt(m,3)),this.setAttribute("normal",new Zt(_,3)),this.setAttribute("uv",new Zt(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Al(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Li extends te{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);const c=[],l=[],u=[],f=[],h=new N,d=new N,m=new N;for(let _=0;_<=n;_++){const x=o+_/n*a;for(let p=0;p<=s;p++){const g=p/s*r;d.x=(t+e*Math.cos(x))*Math.cos(g),d.y=(t+e*Math.cos(x))*Math.sin(g),d.z=e*Math.sin(x),l.push(d.x,d.y,d.z),h.x=t*Math.cos(g),h.y=t*Math.sin(g),m.subVectors(d,h).normalize(),u.push(m.x,m.y,m.z),f.push(p/s),f.push(_/n)}}for(let _=1;_<=n;_++)for(let x=1;x<=s;x++){const p=(s+1)*_+x-1,g=(s+1)*(_-1)+x-1,y=(s+1)*(_-1)+x,S=(s+1)*_+x;c.push(p,g,S),c.push(g,y,S)}this.setIndex(c),this.setAttribute("position",new Zt(l,3)),this.setAttribute("normal",new Zt(u,3)),this.setAttribute("uv",new Zt(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Li(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}function xs(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];if(bc(s))s.isRenderTargetTexture?(Xt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(bc(s[0])){const r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function sn(i){const t={};for(let e=0;e<i.length;e++){const n=xs(i[e]);for(const s in n)t[s]=n[s]}return t}function bc(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Uf(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function tu(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:le.workingColorSpace}const Oi={clone:xs,merge:sn};var Ff=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Of=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ze extends Hi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ff,this.fragmentShader=Of,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=xs(t.uniforms),this.uniformsGroups=Uf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class eu extends Ze{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class os extends Hi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ee(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jr,this.normalScale=new gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new li,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Bf extends Hi{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jr,this.normalScale=new gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}class zf extends Hi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Qu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class kf extends Hi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class wc extends hn{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}const Tc={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(Ac(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!Ac(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Ac(i){try{const t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class Vf{constructor(t,e,n){const s=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,f){return l.push(u,f),this},this.removeHandler=function(u){const f=l.indexOf(u);return f!==-1&&l.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=l.length;f<h;f+=2){const d=l[f],m=l[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Gf=new Vf;class Pl{constructor(t){this.manager=t!==void 0?t:Gf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}Pl.DEFAULT_MATERIAL_NAME="__DEFAULT";const Jn={};class Hf extends Error{constructor(t,e){super(t),this.response=e}}class Wf extends Pl{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=Tc.get(`file:${t}`);if(r!==void 0){this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0);return}if(Jn[t]!==void 0){Jn[t].push({onLoad:e,onProgress:n,onError:s});return}Jn[t]=[],Jn[t].push({onLoad:e,onProgress:n,onError:s});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Xt("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=Jn[t],f=l.body.getReader(),h=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),d=h?parseInt(h):0,m=d!==0;let _=0;const x=new ReadableStream({start(p){g();function g(){f.read().then(({done:y,value:S})=>{if(y)p.close();else{_+=S.byteLength;const P=new ProgressEvent("progress",{lengthComputable:m,loaded:_,total:d});for(let w=0,b=u.length;w<b;w++){const M=u[w];M.onProgress&&M.onProgress(P)}p.enqueue(S),g()}},y=>{p.error(y)})}}});return new Response(x)}else throw new Hf(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a==="")return l.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),h=f&&f[1]?f[1].toLowerCase():void 0,d=new TextDecoder(h);return l.arrayBuffer().then(m=>d.decode(m))}}}).then(l=>{Tc.add(`file:${t}`,l);const u=Jn[t];delete Jn[t];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onLoad&&d.onLoad(l)}}).catch(l=>{const u=Jn[t];if(u===void 0)throw this.manager.itemError(t),l;delete Jn[t];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onError&&d.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class nu extends Fe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ee(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}const qo=new xe,Pc=new N,Cc=new N;class Xf{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new gt(512,512),this.mapType=xn,this.map=null,this.mapPass=null,this.matrix=new xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Sl,this._frameExtents=new gt(1,1),this._viewportCount=1,this._viewports=[new Pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Pc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Pc),Cc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Cc),e.updateMatrixWorld(),qo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qo,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===qs||e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(qo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Ar=new N,Pr=new Ye,Fn=new N;class iu extends Fe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xe,this.projectionMatrix=new xe,this.projectionMatrixInverse=new xe,this.coordinateSystem=kn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ar,Pr,Fn),Fn.x===1&&Fn.y===1&&Fn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ar,Pr,Fn.set(1,1,1)).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorld.decompose(Ar,Pr,Fn),Fn.x===1&&Fn.y===1&&Fn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ar,Pr,Fn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const xi=new N,Rc=new gt,Ic=new gt;class En extends iu{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=js*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Bs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return js*2*Math.atan(Math.tan(Bs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(xi.x,xi.y).multiplyScalar(-t/xi.z),xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xi.x,xi.y).multiplyScalar(-t/xi.z)}getViewSize(t,e){return this.getViewBounds(t,Rc,Ic),e.subVectors(Ic,Rc)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Bs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class tr extends iu{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Yf extends Xf{constructor(){super(new tr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Dc extends nu{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.target=new Fe,this.shadow=new Yf}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class qf extends nu{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class jf extends te{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}class Zf extends Pl{constructor(t){super(t)}load(t,e,n,s){const r=this,o=new Wf(r.manager);o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(t,function(a){try{e(r.parse(JSON.parse(a)))}catch(c){s?s(c):ae(c),r.manager.itemError(t)}},n,s)}parse(t){const e={},n={};function s(d,m){if(e[m]!==void 0)return e[m];const x=d.interleavedBuffers[m],p=r(d,x.buffer),g=rr(x.type,p),y=new Xd(g,x.stride);return y.uuid=x.uuid,e[m]=y,y}function r(d,m){if(n[m]!==void 0)return n[m];const x=d.arrayBuffers[m],p=new Uint32Array(x).buffer;return n[m]=p,p}const o=t.isInstancedBufferGeometry?new jf:new te,a=t.data.index;if(a!==void 0){const d=rr(a.type,a.array);o.setIndex(new on(d,1))}const c=t.data.attributes;for(const d in c){const m=c[d];let _;if(m.isInterleavedBufferAttribute){const x=s(t.data,m.data);_=new io(x,m.itemSize,m.offset,m.normalized)}else{const x=rr(m.type,m.array),p=m.isInstancedBufferAttribute?jd:on;_=new p(x,m.itemSize,m.normalized)}m.name!==void 0&&(_.name=m.name),m.usage!==void 0&&_.setUsage(m.usage),o.setAttribute(d,_)}const l=t.data.morphAttributes;if(l)for(const d in l){const m=l[d],_=[];for(let x=0,p=m.length;x<p;x++){const g=m[x];let y;if(g.isInterleavedBufferAttribute){const S=s(t.data,g.data);y=new io(S,g.itemSize,g.offset,g.normalized)}else{const S=rr(g.type,g.array);y=new on(S,g.itemSize,g.normalized)}g.name!==void 0&&(y.name=g.name),_.push(y)}o.morphAttributes[d]=_}t.data.morphTargetsRelative&&(o.morphTargetsRelative=!0);const f=t.data.groups||t.data.drawcalls||t.data.offsets;if(f!==void 0)for(let d=0,m=f.length;d!==m;++d){const _=f[d];o.addGroup(_.start,_.count,_.materialIndex)}const h=t.data.boundingSphere;return h!==void 0&&(o.boundingSphere=new Qs().fromJSON(h)),t.name&&(o.name=t.name),t.userData&&(o.userData=t.userData),o}}const is=-90,ss=1;class $f extends Fe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new En(is,ss,t,e);s.layers=this.layers,this.add(s);const r=new En(is,ss,t,e);r.layers=this.layers,this.add(r);const o=new En(is,ss,t,e);o.layers=this.layers,this.add(o);const a=new En(is,ss,t,e);a.layers=this.layers,this.add(a);const c=new En(is,ss,t,e);c.layers=this.layers,this.add(c);const l=new En(is,ss,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===kn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===qs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let x=!1;t.isWebGLRenderer===!0?x=t.state.buffers.depth.getReversed():x=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(f,h,d),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class Kf extends En{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Jf{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=Qf.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function Qf(){this._document.hidden===!1&&this.reset()}const Lc=new xe;class su{constructor(t,e,n=0,s=1/0){this.ray=new uo(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Ml,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ae("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Lc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Lc),this}intersectObject(t,e=!0,n=[]){return Ka(t,this,n,e),n.sort(Nc),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Ka(t[s],this,n,e);return n.sort(Nc),n}}function Nc(i,t){return i.distance-t.distance}function Ka(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)Ka(r[o],t,e,!0)}}class Uc{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=ie(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(ie(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Fl=class Fl{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){const r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};Fl.prototype.isMatrix2=!0;let Fc=Fl;class tp extends Jd{constructor(t=10,e=10,n=4473924,s=8947848){n=new ee(n),s=new ee(s);const r=e/2,o=t/e,a=t/2,c=[],l=[];for(let h=0,d=0,m=-a;h<=e;h++,m+=o){c.push(-a,0,m,a,0,m),c.push(m,0,-a,m,0,a);const _=h===r?n:s;_.toArray(l,d),d+=3,_.toArray(l,d),d+=3,_.toArray(l,d),d+=3,_.toArray(l,d),d+=3}const u=new te;u.setAttribute("position",new Zt(c,3)),u.setAttribute("color",new Zt(l,3));const f=new hn({vertexColors:!0,toneMapped:!1});super(u,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class ru extends wi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){Xt("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Oc(i,t,e,n){const s=ep(n);switch(e){case Uh:return i*t;case fl:return i*t/s.components*s.byteLength;case pl:return i*t/s.components*s.byteLength;case ki:return i*t*2/s.components*s.byteLength;case ml:return i*t*2/s.components*s.byteLength;case Fh:return i*t*3/s.components*s.byteLength;case Ln:return i*t*4/s.components*s.byteLength;case gl:return i*t*4/s.components*s.byteLength;case Hr:case Wr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Xr:case Yr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case xa:case va:return Math.max(i,16)*Math.max(t,8)/4;case ga:case _a:return Math.max(i,8)*Math.max(t,8)/2;case ya:case Ma:case Ea:case ba:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Sa:case $r:case wa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ta:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Aa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Pa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ca:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ra:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ia:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Da:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case La:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Na:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ua:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Fa:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Oa:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ba:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case za:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ka:case Va:case Ga:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ha:case Wa:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Kr:case Xa:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ep(i){switch(i){case xn:case Ih:return{byteLength:1,components:1};case Ys:case Dh:case bn:return{byteLength:2,components:1};case ul:case dl:return{byteLength:2,components:4};case Wn:case hl:case Dn:return{byteLength:4,components:1};case Lh:case Nh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:nl}}));typeof window<"u"&&(window.__THREE__?Xt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=nl);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ou(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function np(i){const t=new WeakMap;function e(a,c){const l=a.array,u=a.usage,f=l.byteLength,h=i.createBuffer();i.bindBuffer(c,h),i.bufferData(c,l,u),a.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,c,l){const u=c.array,f=c.updateRanges;if(i.bindBuffer(l,a),f.length===0)i.bufferSubData(l,0,u);else{f.sort((d,m)=>d.start-m.start);let h=0;for(let d=1;d<f.length;d++){const m=f[h],_=f[d];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++h,f[h]=_)}f.length=h+1;for(let d=0,m=f.length;d<m;d++){const _=f[d];i.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var ip=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sp=`#ifdef USE_ALPHAHASH
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
#endif`,rp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,op=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ap=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cp=`#ifdef USE_AOMAP
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
#endif`,hp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,up=`#ifdef USE_BATCHING
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
#endif`,dp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,fp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,gp=`#ifdef USE_IRIDESCENCE
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
#endif`,xp=`#ifdef USE_BUMPMAP
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
#endif`,_p=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,vp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Mp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ep=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,bp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,wp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Tp=`#define PI 3.141592653589793
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
} // validated`,Ap=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Pp=`vec3 transformedNormal = objectNormal;
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
#endif`,Cp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Rp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ip=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Dp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Lp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Np=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Up=`#ifdef USE_ENVMAP
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
#endif`,Fp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Op=`#ifdef USE_ENVMAP
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
#endif`,Bp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zp=`#ifdef USE_ENVMAP
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
#endif`,kp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Wp=`#ifdef USE_GRADIENTMAP
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
}`,Xp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Yp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jp=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Zp=`#ifdef USE_ENVMAP
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
#endif`,$p=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Kp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Jp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,tm=`PhysicalMaterial material;
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
#endif`,em=`uniform sampler2D dfgLUT;
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
}`,nm=`
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
#endif`,im=`#if defined( RE_IndirectDiffuse )
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
#endif`,sm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rm=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,om=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,am=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,um=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,fm=`#if defined( USE_POINTS_UV )
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
#endif`,pm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,xm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_m=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vm=`#ifdef USE_MORPHTARGETS
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
#endif`,ym=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Sm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Em=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Tm=`#ifdef USE_NORMALMAP
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
#endif`,Am=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Pm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Rm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Im=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Dm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Lm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Nm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Um=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Fm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Om=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Bm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,km=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Vm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Gm=`float getShadowMask() {
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
}`,Hm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wm=`#ifdef USE_SKINNING
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
#endif`,Xm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ym=`#ifdef USE_SKINNING
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
#endif`,qm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Zm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$m=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Km=`#ifdef USE_TRANSMISSION
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
#endif`,Jm=`#ifdef USE_TRANSMISSION
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
#endif`,Qm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ng=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ig=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sg=`uniform sampler2D t2D;
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
}`,rg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,og=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ag=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cg=`#include <common>
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
}`,hg=`#if DEPTH_PACKING == 3200
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
}`,ug=`#define DISTANCE
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
}`,dg=`#define DISTANCE
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
}`,fg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mg=`uniform float scale;
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
}`,gg=`uniform vec3 diffuse;
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
}`,xg=`#include <common>
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
}`,_g=`uniform vec3 diffuse;
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
}`,vg=`#define LAMBERT
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
}`,yg=`#define LAMBERT
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
}`,Mg=`#define MATCAP
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
}`,Sg=`#define MATCAP
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
}`,Eg=`#define NORMAL
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
}`,bg=`#define NORMAL
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
}`,wg=`#define PHONG
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
}`,Tg=`#define PHONG
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
}`,Ag=`#define STANDARD
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
}`,Pg=`#define STANDARD
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
}`,Cg=`#define TOON
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
}`,Rg=`#define TOON
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
}`,Ig=`uniform float size;
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
}`,Dg=`uniform vec3 diffuse;
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
}`,Lg=`#include <common>
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
}`,Ng=`uniform vec3 color;
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
}`,Ug=`uniform float rotation;
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
}`,Fg=`uniform vec3 diffuse;
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
}`,ne={alphahash_fragment:ip,alphahash_pars_fragment:sp,alphamap_fragment:rp,alphamap_pars_fragment:op,alphatest_fragment:ap,alphatest_pars_fragment:lp,aomap_fragment:cp,aomap_pars_fragment:hp,batching_pars_vertex:up,batching_vertex:dp,begin_vertex:fp,beginnormal_vertex:pp,bsdfs:mp,iridescence_fragment:gp,bumpmap_pars_fragment:xp,clipping_planes_fragment:_p,clipping_planes_pars_fragment:vp,clipping_planes_pars_vertex:yp,clipping_planes_vertex:Mp,color_fragment:Sp,color_pars_fragment:Ep,color_pars_vertex:bp,color_vertex:wp,common:Tp,cube_uv_reflection_fragment:Ap,defaultnormal_vertex:Pp,displacementmap_pars_vertex:Cp,displacementmap_vertex:Rp,emissivemap_fragment:Ip,emissivemap_pars_fragment:Dp,colorspace_fragment:Lp,colorspace_pars_fragment:Np,envmap_fragment:Up,envmap_common_pars_fragment:Fp,envmap_pars_fragment:Op,envmap_pars_vertex:Bp,envmap_physical_pars_fragment:Zp,envmap_vertex:zp,fog_vertex:kp,fog_pars_vertex:Vp,fog_fragment:Gp,fog_pars_fragment:Hp,gradientmap_pars_fragment:Wp,lightmap_pars_fragment:Xp,lights_lambert_fragment:Yp,lights_lambert_pars_fragment:qp,lights_pars_begin:jp,lights_toon_fragment:$p,lights_toon_pars_fragment:Kp,lights_phong_fragment:Jp,lights_phong_pars_fragment:Qp,lights_physical_fragment:tm,lights_physical_pars_fragment:em,lights_fragment_begin:nm,lights_fragment_maps:im,lights_fragment_end:sm,lightprobes_pars_fragment:rm,logdepthbuf_fragment:om,logdepthbuf_pars_fragment:am,logdepthbuf_pars_vertex:lm,logdepthbuf_vertex:cm,map_fragment:hm,map_pars_fragment:um,map_particle_fragment:dm,map_particle_pars_fragment:fm,metalnessmap_fragment:pm,metalnessmap_pars_fragment:mm,morphinstance_vertex:gm,morphcolor_vertex:xm,morphnormal_vertex:_m,morphtarget_pars_vertex:vm,morphtarget_vertex:ym,normal_fragment_begin:Mm,normal_fragment_maps:Sm,normal_pars_fragment:Em,normal_pars_vertex:bm,normal_vertex:wm,normalmap_pars_fragment:Tm,clearcoat_normal_fragment_begin:Am,clearcoat_normal_fragment_maps:Pm,clearcoat_pars_fragment:Cm,iridescence_pars_fragment:Rm,opaque_fragment:Im,packing:Dm,premultiplied_alpha_fragment:Lm,project_vertex:Nm,dithering_fragment:Um,dithering_pars_fragment:Fm,roughnessmap_fragment:Om,roughnessmap_pars_fragment:Bm,shadowmap_pars_fragment:zm,shadowmap_pars_vertex:km,shadowmap_vertex:Vm,shadowmask_pars_fragment:Gm,skinbase_vertex:Hm,skinning_pars_vertex:Wm,skinning_vertex:Xm,skinnormal_vertex:Ym,specularmap_fragment:qm,specularmap_pars_fragment:jm,tonemapping_fragment:Zm,tonemapping_pars_fragment:$m,transmission_fragment:Km,transmission_pars_fragment:Jm,uv_pars_fragment:Qm,uv_pars_vertex:tg,uv_vertex:eg,worldpos_vertex:ng,background_vert:ig,background_frag:sg,backgroundCube_vert:rg,backgroundCube_frag:og,cube_vert:ag,cube_frag:lg,depth_vert:cg,depth_frag:hg,distance_vert:ug,distance_frag:dg,equirect_vert:fg,equirect_frag:pg,linedashed_vert:mg,linedashed_frag:gg,meshbasic_vert:xg,meshbasic_frag:_g,meshlambert_vert:vg,meshlambert_frag:yg,meshmatcap_vert:Mg,meshmatcap_frag:Sg,meshnormal_vert:Eg,meshnormal_frag:bg,meshphong_vert:wg,meshphong_frag:Tg,meshphysical_vert:Ag,meshphysical_frag:Pg,meshtoon_vert:Cg,meshtoon_frag:Rg,points_vert:Ig,points_frag:Dg,shadow_vert:Lg,shadow_frag:Ng,sprite_vert:Ug,sprite_frag:Fg},Ct={common:{diffuse:{value:new ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new N},probesMax:{value:new N},probesResolution:{value:new N}},points:{diffuse:{value:new ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new ee(16777215)},opacity:{value:1},center:{value:new gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},zn={basic:{uniforms:sn([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.fog]),vertexShader:ne.meshbasic_vert,fragmentShader:ne.meshbasic_frag},lambert:{uniforms:sn([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new ee(0)},envMapIntensity:{value:1}}]),vertexShader:ne.meshlambert_vert,fragmentShader:ne.meshlambert_frag},phong:{uniforms:sn([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new ee(0)},specular:{value:new ee(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ne.meshphong_vert,fragmentShader:ne.meshphong_frag},standard:{uniforms:sn([Ct.common,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.roughnessmap,Ct.metalnessmap,Ct.fog,Ct.lights,{emissive:{value:new ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag},toon:{uniforms:sn([Ct.common,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.gradientmap,Ct.fog,Ct.lights,{emissive:{value:new ee(0)}}]),vertexShader:ne.meshtoon_vert,fragmentShader:ne.meshtoon_frag},matcap:{uniforms:sn([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,{matcap:{value:null}}]),vertexShader:ne.meshmatcap_vert,fragmentShader:ne.meshmatcap_frag},points:{uniforms:sn([Ct.points,Ct.fog]),vertexShader:ne.points_vert,fragmentShader:ne.points_frag},dashed:{uniforms:sn([Ct.common,Ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ne.linedashed_vert,fragmentShader:ne.linedashed_frag},depth:{uniforms:sn([Ct.common,Ct.displacementmap]),vertexShader:ne.depth_vert,fragmentShader:ne.depth_frag},normal:{uniforms:sn([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,{opacity:{value:1}}]),vertexShader:ne.meshnormal_vert,fragmentShader:ne.meshnormal_frag},sprite:{uniforms:sn([Ct.sprite,Ct.fog]),vertexShader:ne.sprite_vert,fragmentShader:ne.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ne.background_vert,fragmentShader:ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:ne.backgroundCube_vert,fragmentShader:ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ne.cube_vert,fragmentShader:ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ne.equirect_vert,fragmentShader:ne.equirect_frag},distance:{uniforms:sn([Ct.common,Ct.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ne.distance_vert,fragmentShader:ne.distance_frag},shadow:{uniforms:sn([Ct.lights,Ct.fog,{color:{value:new ee(0)},opacity:{value:1}}]),vertexShader:ne.shadow_vert,fragmentShader:ne.shadow_frag}};zn.physical={uniforms:sn([zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new ee(0)},specularColor:{value:new ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag};const Cr={r:0,b:0,g:0},Og=new xe,au=new $t;au.set(-1,0,0,0,1,0,0,0,1);function Bg(i,t,e,n,s,r){const o=new ee(0);let a=s===!0?0:1,c,l,u=null,f=0,h=null;function d(g){let y=g.isScene===!0?g.background:null;if(y&&y.isTexture){const S=g.backgroundBlurriness>0;y=t.get(y,S)}return y}function m(g){let y=!1;const S=d(g);S===null?x(o,a):S&&S.isColor&&(x(S,1),y=!0);const P=i.xr.getEnvironmentBlendMode();P==="additive"?e.buffers.color.setClear(0,0,0,1,r):P==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||y)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(g,y){const S=d(y);S&&(S.isCubeTexture||S.mapping===ho)?(l===void 0&&(l=new xt(new Ae(1,1,1),new Ze({name:"BackgroundCubeMaterial",uniforms:xs(zn.backgroundCube.uniforms),vertexShader:zn.backgroundCube.vertexShader,fragmentShader:zn.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(P,w,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=S,l.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Og.makeRotationFromEuler(y.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(au),l.material.toneMapped=le.getTransfer(S.colorSpace)!==de,(u!==S||f!==S.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=S,f=S.version,h=i.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new xt(new ys(2,2),new Ze({name:"BackgroundMaterial",uniforms:xs(zn.background.uniforms),vertexShader:zn.background.vertexShader,fragmentShader:zn.background.fragmentShader,side:bi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=le.getTransfer(S.colorSpace)!==de,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||f!==S.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=S,f=S.version,h=i.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function x(g,y){g.getRGB(Cr,tu(i)),e.buffers.color.setClear(Cr.r,Cr.g,Cr.b,y,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(g,y=1){o.set(g),a=y,x(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(g){a=g,x(o,a)},render:m,addToRenderList:_,dispose:p}}function zg(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null);let r=s,o=!1;function a(T,I,U,F,L){let O=!1;const B=f(T,F,U,I);r!==B&&(r=B,l(r.object)),O=d(T,F,U,L),O&&m(T,F,U,L),L!==null&&t.update(L,i.ELEMENT_ARRAY_BUFFER),(O||o)&&(o=!1,S(T,I,U,F),L!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(L).buffer))}function c(){return i.createVertexArray()}function l(T){return i.bindVertexArray(T)}function u(T){return i.deleteVertexArray(T)}function f(T,I,U,F){const L=F.wireframe===!0;let O=n[I.id];O===void 0&&(O={},n[I.id]=O);const B=T.isInstancedMesh===!0?T.id:0;let W=O[B];W===void 0&&(W={},O[B]=W);let G=W[U.id];G===void 0&&(G={},W[U.id]=G);let q=G[L];return q===void 0&&(q=h(c()),G[L]=q),q}function h(T){const I=[],U=[],F=[];for(let L=0;L<e;L++)I[L]=0,U[L]=0,F[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:U,attributeDivisors:F,object:T,attributes:{},index:null}}function d(T,I,U,F){const L=r.attributes,O=I.attributes;let B=0;const W=U.getAttributes();for(const G in W)if(W[G].location>=0){const st=L[G];let nt=O[G];if(nt===void 0&&(G==="instanceMatrix"&&T.instanceMatrix&&(nt=T.instanceMatrix),G==="instanceColor"&&T.instanceColor&&(nt=T.instanceColor)),st===void 0||st.attribute!==nt||nt&&st.data!==nt.data)return!0;B++}return r.attributesNum!==B||r.index!==F}function m(T,I,U,F){const L={},O=I.attributes;let B=0;const W=U.getAttributes();for(const G in W)if(W[G].location>=0){let st=O[G];st===void 0&&(G==="instanceMatrix"&&T.instanceMatrix&&(st=T.instanceMatrix),G==="instanceColor"&&T.instanceColor&&(st=T.instanceColor));const nt={};nt.attribute=st,st&&st.data&&(nt.data=st.data),L[G]=nt,B++}r.attributes=L,r.attributesNum=B,r.index=F}function _(){const T=r.newAttributes;for(let I=0,U=T.length;I<U;I++)T[I]=0}function x(T){p(T,0)}function p(T,I){const U=r.newAttributes,F=r.enabledAttributes,L=r.attributeDivisors;U[T]=1,F[T]===0&&(i.enableVertexAttribArray(T),F[T]=1),L[T]!==I&&(i.vertexAttribDivisor(T,I),L[T]=I)}function g(){const T=r.newAttributes,I=r.enabledAttributes;for(let U=0,F=I.length;U<F;U++)I[U]!==T[U]&&(i.disableVertexAttribArray(U),I[U]=0)}function y(T,I,U,F,L,O,B){B===!0?i.vertexAttribIPointer(T,I,U,L,O):i.vertexAttribPointer(T,I,U,F,L,O)}function S(T,I,U,F){_();const L=F.attributes,O=U.getAttributes(),B=I.defaultAttributeValues;for(const W in O){const G=O[W];if(G.location>=0){let q=L[W];if(q===void 0&&(W==="instanceMatrix"&&T.instanceMatrix&&(q=T.instanceMatrix),W==="instanceColor"&&T.instanceColor&&(q=T.instanceColor)),q!==void 0){const st=q.normalized,nt=q.itemSize,ct=t.get(q);if(ct===void 0)continue;const Pt=ct.buffer,Tt=ct.type,Z=ct.bytesPerElement,ht=Tt===i.INT||Tt===i.UNSIGNED_INT||q.gpuType===hl;if(q.isInterleavedBufferAttribute){const at=q.data,ut=at.stride,vt=q.offset;if(at.isInstancedInterleavedBuffer){for(let pt=0;pt<G.locationSize;pt++)p(G.location+pt,at.meshPerAttribute);T.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let pt=0;pt<G.locationSize;pt++)x(G.location+pt);i.bindBuffer(i.ARRAY_BUFFER,Pt);for(let pt=0;pt<G.locationSize;pt++)y(G.location+pt,nt/G.locationSize,Tt,st,ut*Z,(vt+nt/G.locationSize*pt)*Z,ht)}else{if(q.isInstancedBufferAttribute){for(let at=0;at<G.locationSize;at++)p(G.location+at,q.meshPerAttribute);T.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let at=0;at<G.locationSize;at++)x(G.location+at);i.bindBuffer(i.ARRAY_BUFFER,Pt);for(let at=0;at<G.locationSize;at++)y(G.location+at,nt/G.locationSize,Tt,st,nt*Z,nt/G.locationSize*at*Z,ht)}}else if(B!==void 0){const st=B[W];if(st!==void 0)switch(st.length){case 2:i.vertexAttrib2fv(G.location,st);break;case 3:i.vertexAttrib3fv(G.location,st);break;case 4:i.vertexAttrib4fv(G.location,st);break;default:i.vertexAttrib1fv(G.location,st)}}}}g()}function P(){A();for(const T in n){const I=n[T];for(const U in I){const F=I[U];for(const L in F){const O=F[L];for(const B in O)u(O[B].object),delete O[B];delete F[L]}}delete n[T]}}function w(T){if(n[T.id]===void 0)return;const I=n[T.id];for(const U in I){const F=I[U];for(const L in F){const O=F[L];for(const B in O)u(O[B].object),delete O[B];delete F[L]}}delete n[T.id]}function b(T){for(const I in n){const U=n[I];for(const F in U){const L=U[F];if(L[T.id]===void 0)continue;const O=L[T.id];for(const B in O)u(O[B].object),delete O[B];delete L[T.id]}}}function M(T){for(const I in n){const U=n[I],F=T.isInstancedMesh===!0?T.id:0,L=U[F];if(L!==void 0){for(const O in L){const B=L[O];for(const W in B)u(B[W].object),delete B[W];delete L[O]}delete U[F],Object.keys(U).length===0&&delete n[I]}}}function A(){D(),o=!0,r!==s&&(r=s,l(r.object))}function D(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:A,resetDefaultState:D,dispose:P,releaseStatesOfGeometry:w,releaseStatesOfObject:M,releaseStatesOfProgram:b,initAttributes:_,enableAttribute:x,disableUnusedAttributes:g}}function kg(i,t,e){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),e.update(l,n,1)}function o(c,l,u){u!==0&&(i.drawArraysInstanced(n,c,l,u),e.update(l,n,u))}function a(c,l,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,u);let h=0;for(let d=0;d<u;d++)h+=l[d];e.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Vg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const b=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(b){return!(b!==Ln&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){const M=b===bn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(b!==xn&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==Dn&&!M)}function c(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(Xt("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const f=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&Xt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),g=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:x,maxAttributes:p,maxVertexUniforms:g,maxVaryings:y,maxFragmentUniforms:S,maxSamples:P,samples:w}}function Gg(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Qn,a=new $t,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||n!==0||s;return s=h,n=f.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,d){const m=f.clippingPlanes,_=f.clipIntersection,x=f.clipShadows,p=i.get(f);if(!s||m===null||m.length===0||r&&!x)r?u(null):l();else{const g=r?0:n,y=g*4;let S=p.clippingState||null;c.value=S,S=u(m,h,y,d);for(let P=0;P!==y;++P)S[P]=e[P];p.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=g}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,h,d,m){const _=f!==null?f.length:0;let x=null;if(_!==0){if(x=c.value,m!==!0||x===null){const p=d+_*4,g=h.matrixWorldInverse;a.getNormalMatrix(g),(x===null||x.length<p)&&(x=new Float32Array(p));for(let y=0,S=d;y!==_;++y,S+=4)o.copy(f[y]).applyMatrix4(g,a),o.normal.toArray(x,S),x[S+3]=o.constant}c.value=x,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,x}}const Si=4,Bc=[.125,.215,.35,.446,.526,.582],Ni=20,Hg=256,Ps=new tr,zc=new ee;let jo=null,Zo=0,$o=0,Ko=!1;const Wg=new N;class kc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){const{size:o=256,position:a=Wg}=r;jo=this._renderer.getRenderTarget(),Zo=this._renderer.getActiveCubeFace(),$o=this._renderer.getActiveMipmapLevel(),Ko=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(jo,Zo,$o),this._renderer.xr.enabled=Ko,t.scissorTest=!1,rs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===zi||t.mapping===ps?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),jo=this._renderer.getRenderTarget(),Zo=this._renderer.getActiveCubeFace(),$o=this._renderer.getActiveMipmapLevel(),Ko=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:en,minFilter:en,generateMipmaps:!1,type:bn,format:Ln,colorSpace:Qr,depthBuffer:!1},s=Vc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vc(t,e,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Xg(r)),this._blurMaterial=qg(r,t,e),this._ggxMaterial=Yg(r,t,e)}return s}_compileMaterial(t){const e=new xt(new te,t);this._renderer.compile(e,Ps)}_sceneToCubeUV(t,e,n,s,r){const c=new En(90,1,e,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(zc),f.toneMapping=Gn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new xt(new Ae,new De({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,x=_.material;let p=!1;const g=t.background;g?g.isColor&&(x.color.copy(g),t.background=null,p=!0):(x.color.copy(zc),p=!0);for(let y=0;y<6;y++){const S=y%3;S===0?(c.up.set(0,l[y],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[y],r.y,r.z)):S===1?(c.up.set(0,0,l[y]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[y],r.z)):(c.up.set(0,l[y],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[y]));const P=this._cubeSize;rs(s,S*P,y>2?P:0,P,P),f.setRenderTarget(s),p&&f.render(_,c),f.render(t,c)}f.toneMapping=d,f.autoClear=h,t.background=g}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===zi||t.mapping===ps;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gc());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;rs(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Ps)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const c=o.uniforms,l=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),f=Math.sqrt(l*l-u*u),h=0+l*1.25,d=f*h,{_lodMax:m}=this,_=this._sizeLods[n],x=3*_*(n>m-Si?n-m+Si:0),p=4*(this._cubeSize-_);c.envMap.value=t.texture,c.roughness.value=d,c.mipInt.value=m-e,rs(r,x,p,3*_,2*_),s.setRenderTarget(r),s.render(a,Ps),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=m-n,rs(t,x,p,3*_,2*_),s.setRenderTarget(t),s.render(a,Ps)}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&ae("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[s];f.material=l;const h=l.uniforms,d=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Ni-1),_=r/m,x=isFinite(r)?1+Math.floor(u*_):Ni;x>Ni&&Xt(`sigmaRadians, ${r}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Ni}`);const p=[];let g=0;for(let b=0;b<Ni;++b){const M=b/_,A=Math.exp(-M*M/2);p.push(A),b===0?g+=A:b<x&&(g+=2*A)}for(let b=0;b<p.length;b++)p[b]=p[b]/g;h.envMap.value=t.texture,h.samples.value=x,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:y}=this;h.dTheta.value=m,h.mipInt.value=y-n;const S=this._sizeLods[s],P=3*S*(s>y-Si?s-y+Si:0),w=4*(this._cubeSize-S);rs(e,P,w,3*S,2*S),c.setRenderTarget(e),c.render(f,Ps)}}function Xg(i){const t=[],e=[],n=[];let s=i;const r=i-Si+1+Bc.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let c=1/a;o>i-Si?c=Bc[o-i+Si-1]:o===0&&(c=0),e.push(c);const l=1/(a-2),u=-l,f=1+l,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,m=6,_=3,x=2,p=1,g=new Float32Array(_*m*d),y=new Float32Array(x*m*d),S=new Float32Array(p*m*d);for(let w=0;w<d;w++){const b=w%3*2/3-1,M=w>2?0:-1,A=[b,M,0,b+2/3,M,0,b+2/3,M+1,0,b,M,0,b+2/3,M+1,0,b,M+1,0];g.set(A,_*m*w),y.set(h,x*m*w);const D=[w,w,w,w,w,w];S.set(D,p*m*w)}const P=new te;P.setAttribute("position",new on(g,_)),P.setAttribute("uv",new on(y,x)),P.setAttribute("faceIndex",new on(S,p)),n.push(new xt(P,null)),s>Si&&s--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function Vc(i,t,e){const n=new vn(i,t,e);return n.texture.mapping=ho,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function rs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Yg(i,t,e){return new Ze({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Hg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:fo(),fragmentShader:`

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
		`,blending:tn,depthTest:!1,depthWrite:!1})}function qg(i,t,e){const n=new Float32Array(Ni),s=new N(0,1,0);return new Ze({name:"SphericalGaussianBlur",defines:{n:Ni,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:fo(),fragmentShader:`

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
		`,blending:tn,depthTest:!1,depthWrite:!1})}function Gc(){return new Ze({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fo(),fragmentShader:`

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
		`,blending:tn,depthTest:!1,depthWrite:!1})}function Hc(){return new Ze({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:tn,depthTest:!1,depthWrite:!1})}function fo(){return`

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
	`}class lu extends vn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Wh(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ae(5,5,5),r=new Ze({name:"CubemapFromEquirect",uniforms:xs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:dn,blending:tn});r.uniforms.tEquirect.value=e;const o=new xt(s,r),a=e.minFilter;return e.minFilter===Ui&&(e.minFilter=en),new $f(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}function jg(i){let t=new WeakMap,e=new WeakMap,n=null;function s(h,d=!1){return h==null?null:d?o(h):r(h)}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===_o||d===vo)if(t.has(h)){const m=t.get(h).texture;return a(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const _=new lu(m.height);return _.fromEquirectangularTexture(i,h),t.set(h,_),h.addEventListener("dispose",l),a(_.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){const d=h.mapping,m=d===_o||d===vo,_=d===zi||d===ps;if(m||_){let x=e.get(h);const p=x!==void 0?x.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return n===null&&(n=new kc(i)),x=m?n.fromEquirectangular(h,x):n.fromCubemap(h,x),x.texture.pmremVersion=h.pmremVersion,e.set(h,x),x.texture;if(x!==void 0)return x.texture;{const g=h.image;return m&&g&&g.height>0||_&&g&&c(g)?(n===null&&(n=new kc(i)),x=m?n.fromEquirectangular(h):n.fromCubemap(h),x.texture.pmremVersion=h.pmremVersion,e.set(h,x),h.addEventListener("dispose",u),x.texture):null}}}return h}function a(h,d){return d===_o?h.mapping=zi:d===vo&&(h.mapping=ps),h}function c(h){let d=0;const m=6;for(let _=0;_<m;_++)h[_]!==void 0&&d++;return d===m}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function u(h){const d=h.target;d.removeEventListener("dispose",u);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function Zg(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&qa("WebGLRenderer: "+n+" extension not supported."),s}}}function $g(i,t,e,n){const s={},r=new WeakMap;function o(f){const h=f.target;h.index!==null&&t.remove(h.index);for(const m in h.attributes)t.remove(h.attributes[m]);h.removeEventListener("dispose",o),delete s[h.id];const d=r.get(h);d&&(t.remove(d),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(f,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,e.memory.geometries++),h}function c(f){const h=f.attributes;for(const d in h)t.update(h[d],i.ARRAY_BUFFER)}function l(f){const h=[],d=f.index,m=f.attributes.position;let _=0;if(m===void 0)return;if(d!==null){const g=d.array;_=d.version;for(let y=0,S=g.length;y<S;y+=3){const P=g[y+0],w=g[y+1],b=g[y+2];h.push(P,w,w,b,b,P)}}else{const g=m.array;_=m.version;for(let y=0,S=g.length/3-1;y<S;y+=3){const P=y+0,w=y+1,b=y+2;h.push(P,w,w,b,b,P)}}const x=new(m.count>=65535?Gh:Vh)(h,1);x.version=_;const p=r.get(f);p&&t.remove(p),r.set(f,x)}function u(f){const h=r.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&l(f)}else l(f);return r.get(f)}return{get:a,update:c,getWireframeAttribute:u}}function Kg(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,h){i.drawElements(n,h,r,f*o),e.update(h,n,1)}function l(f,h,d){d!==0&&(i.drawElementsInstanced(n,h,r,f*o,d),e.update(h,n,d))}function u(f,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,f,0,d);let _=0;for(let x=0;x<d;x++)_+=h[x];e.update(_,n,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Jg(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:ae("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Qg(i,t,e){const n=new WeakMap,s=new Pe;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=n.get(a);if(h===void 0||h.count!==f){let A=function(){b.dispose(),n.delete(a),a.removeEventListener("dispose",A)};h!==void 0&&h.texture.dispose();const d=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,x=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],g=a.morphAttributes.color||[];let y=0;d===!0&&(y=1),m===!0&&(y=2),_===!0&&(y=3);let S=a.attributes.position.count*y,P=1;S>t.maxTextureSize&&(P=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);const w=new Float32Array(S*P*4*f),b=new zh(w,S,P,f);b.type=Dn,b.needsUpdate=!0;const M=y*4;for(let D=0;D<f;D++){const T=x[D],I=p[D],U=g[D],F=S*P*4*D;for(let L=0;L<T.count;L++){const O=L*M;d===!0&&(s.fromBufferAttribute(T,L),w[F+O+0]=s.x,w[F+O+1]=s.y,w[F+O+2]=s.z,w[F+O+3]=0),m===!0&&(s.fromBufferAttribute(I,L),w[F+O+4]=s.x,w[F+O+5]=s.y,w[F+O+6]=s.z,w[F+O+7]=0),_===!0&&(s.fromBufferAttribute(U,L),w[F+O+8]=s.x,w[F+O+9]=s.y,w[F+O+10]=s.z,w[F+O+11]=U.itemSize===4?s.w:1)}}h={count:f,texture:b,size:new gt(S,P)},n.set(a,h),a.addEventListener("dispose",A)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let _=0;_<l.length;_++)d+=l[_];const m=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(i,"morphTargetBaseInfluence",m),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function t0(i,t,e,n,s){let r=new WeakMap;function o(l){const u=s.render.frame,f=l.geometry,h=t.get(l,f);if(r.get(h)!==u&&(t.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return h}function a(){r=new WeakMap}function c(l){const u=l.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:o,dispose:a}}const e0={[il]:"LINEAR_TONE_MAPPING",[sl]:"REINHARD_TONE_MAPPING",[rl]:"CINEON_TONE_MAPPING",[ol]:"ACES_FILMIC_TONE_MAPPING",[ll]:"AGX_TONE_MAPPING",[cl]:"NEUTRAL_TONE_MAPPING",[al]:"CUSTOM_TONE_MAPPING"};function n0(i,t,e,n,s){const r=new vn(t,e,{type:i,depthBuffer:n,stencilBuffer:s,depthTexture:n?new Vi(t,e):void 0}),o=new vn(t,e,{type:bn,depthBuffer:!1,stencilBuffer:!1}),a=new te;a.setAttribute("position",new Zt([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new Zt([0,2,0,0,2,0],2));const c=new eu({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),l=new xt(a,c),u=new tr(-1,1,1,-1,0,1);let f=null,h=null,d=!1,m,_=null,x=[],p=!1;this.setSize=function(g,y){r.setSize(g,y),o.setSize(g,y);for(let S=0;S<x.length;S++){const P=x[S];P.setSize&&P.setSize(g,y)}},this.setEffects=function(g){x=g,p=x.length>0&&x[0].isRenderPass===!0;const y=r.width,S=r.height;for(let P=0;P<x.length;P++){const w=x[P];w.setSize&&w.setSize(y,S)}},this.begin=function(g,y){if(d||g.toneMapping===Gn&&x.length===0)return!1;if(_=y,y!==null){const S=y.width,P=y.height;(r.width!==S||r.height!==P)&&this.setSize(S,P)}return p===!1&&g.setRenderTarget(r),m=g.toneMapping,g.toneMapping=Gn,!0},this.hasRenderPass=function(){return p},this.end=function(g,y){g.toneMapping=m,d=!0;let S=r,P=o;for(let w=0;w<x.length;w++){const b=x[w];if(b.enabled!==!1&&(b.render(g,P,S,y),b.needsSwap!==!1)){const M=S;S=P,P=M}}if(f!==g.outputColorSpace||h!==g.toneMapping){f=g.outputColorSpace,h=g.toneMapping,c.defines={},le.getTransfer(f)===de&&(c.defines.SRGB_TRANSFER="");const w=e0[h];w&&(c.defines[w]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=S.texture,g.setRenderTarget(_),g.render(l,u),_=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){r.depthTexture&&r.depthTexture.dispose(),r.dispose(),o.dispose(),a.dispose(),c.dispose()}}const cu=new rn,Ja=new Vi(1,1),hu=new zh,uu=new Ld,du=new Wh,Wc=[],Xc=[],Yc=new Float32Array(16),qc=new Float32Array(9),jc=new Float32Array(4);function Ms(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Wc[s];if(r===void 0&&(r=new Float32Array(s),Wc[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function He(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function We(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function po(i,t){let e=Xc[t];e===void 0&&(e=new Int32Array(t),Xc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function i0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function s0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;i.uniform2fv(this.addr,t),We(e,t)}}function r0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(He(e,t))return;i.uniform3fv(this.addr,t),We(e,t)}}function o0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;i.uniform4fv(this.addr,t),We(e,t)}}function a0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(He(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),We(e,t)}else{if(He(e,n))return;jc.set(n),i.uniformMatrix2fv(this.addr,!1,jc),We(e,n)}}function l0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(He(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),We(e,t)}else{if(He(e,n))return;qc.set(n),i.uniformMatrix3fv(this.addr,!1,qc),We(e,n)}}function c0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(He(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),We(e,t)}else{if(He(e,n))return;Yc.set(n),i.uniformMatrix4fv(this.addr,!1,Yc),We(e,n)}}function h0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function u0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;i.uniform2iv(this.addr,t),We(e,t)}}function d0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(He(e,t))return;i.uniform3iv(this.addr,t),We(e,t)}}function f0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;i.uniform4iv(this.addr,t),We(e,t)}}function p0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function m0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;i.uniform2uiv(this.addr,t),We(e,t)}}function g0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(He(e,t))return;i.uniform3uiv(this.addr,t),We(e,t)}}function x0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;i.uniform4uiv(this.addr,t),We(e,t)}}function _0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ja.compareFunction=e.isReversedDepthBuffer()?_l:xl,r=Ja):r=cu,e.setTexture2D(t||r,s)}function v0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||uu,s)}function y0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||du,s)}function M0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||hu,s)}function S0(i){switch(i){case 5126:return i0;case 35664:return s0;case 35665:return r0;case 35666:return o0;case 35674:return a0;case 35675:return l0;case 35676:return c0;case 5124:case 35670:return h0;case 35667:case 35671:return u0;case 35668:case 35672:return d0;case 35669:case 35673:return f0;case 5125:return p0;case 36294:return m0;case 36295:return g0;case 36296:return x0;case 35678:case 36198:case 36298:case 36306:case 35682:return _0;case 35679:case 36299:case 36307:return v0;case 35680:case 36300:case 36308:case 36293:return y0;case 36289:case 36303:case 36311:case 36292:return M0}}function E0(i,t){i.uniform1fv(this.addr,t)}function b0(i,t){const e=Ms(t,this.size,2);i.uniform2fv(this.addr,e)}function w0(i,t){const e=Ms(t,this.size,3);i.uniform3fv(this.addr,e)}function T0(i,t){const e=Ms(t,this.size,4);i.uniform4fv(this.addr,e)}function A0(i,t){const e=Ms(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function P0(i,t){const e=Ms(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function C0(i,t){const e=Ms(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function R0(i,t){i.uniform1iv(this.addr,t)}function I0(i,t){i.uniform2iv(this.addr,t)}function D0(i,t){i.uniform3iv(this.addr,t)}function L0(i,t){i.uniform4iv(this.addr,t)}function N0(i,t){i.uniform1uiv(this.addr,t)}function U0(i,t){i.uniform2uiv(this.addr,t)}function F0(i,t){i.uniform3uiv(this.addr,t)}function O0(i,t){i.uniform4uiv(this.addr,t)}function B0(i,t,e){const n=this.cache,s=t.length,r=po(e,s);He(n,r)||(i.uniform1iv(this.addr,r),We(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Ja:o=cu;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function z0(i,t,e){const n=this.cache,s=t.length,r=po(e,s);He(n,r)||(i.uniform1iv(this.addr,r),We(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||uu,r[o])}function k0(i,t,e){const n=this.cache,s=t.length,r=po(e,s);He(n,r)||(i.uniform1iv(this.addr,r),We(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||du,r[o])}function V0(i,t,e){const n=this.cache,s=t.length,r=po(e,s);He(n,r)||(i.uniform1iv(this.addr,r),We(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||hu,r[o])}function G0(i){switch(i){case 5126:return E0;case 35664:return b0;case 35665:return w0;case 35666:return T0;case 35674:return A0;case 35675:return P0;case 35676:return C0;case 5124:case 35670:return R0;case 35667:case 35671:return I0;case 35668:case 35672:return D0;case 35669:case 35673:return L0;case 5125:return N0;case 36294:return U0;case 36295:return F0;case 36296:return O0;case 35678:case 36198:case 36298:case 36306:case 35682:return B0;case 35679:case 36299:case 36307:return z0;case 35680:case 36300:case 36308:case 36293:return k0;case 36289:case 36303:case 36311:case 36292:return V0}}class H0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=S0(e.type)}}class W0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=G0(e.type)}}class X0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Jo=/(\w+)(\])?(\[|\.)?/g;function Zc(i,t){i.seq.push(t),i.map[t.id]=t}function Y0(i,t,e){const n=i.name,s=n.length;for(Jo.lastIndex=0;;){const r=Jo.exec(n),o=Jo.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Zc(e,l===void 0?new H0(a,i,t):new W0(a,i,t));break}else{let f=e.map[a];f===void 0&&(f=new X0(a),Zc(e,f)),e=f}}}class qr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=t.getActiveUniform(e,o),c=t.getUniformLocation(e,a.name);Y0(a,c,this)}const s=[],r=[];for(const o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function $c(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const q0=37297;let j0=0;function Z0(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Kc=new $t;function $0(i){le._getMatrix(Kc,le.workingColorSpace,i);const t=`mat3( ${Kc.elements.map(e=>e.toFixed(4))} )`;switch(le.getTransfer(i)){case to:return[t,"LinearTransferOETF"];case de:return[t,"sRGBTransferOETF"];default:return Xt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Jc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Z0(i.getShaderSource(t),a)}else return r}function K0(i,t){const e=$0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const J0={[il]:"Linear",[sl]:"Reinhard",[rl]:"Cineon",[ol]:"ACESFilmic",[ll]:"AgX",[cl]:"Neutral",[al]:"Custom"};function Q0(i,t){const e=J0[t];return e===void 0?(Xt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Rr=new N;function tx(){le.getLuminanceCoefficients(Rr);const i=Rr.x.toFixed(4),t=Rr.y.toFixed(4),e=Rr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ex(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Us).join(`
`)}function nx(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function ix(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Us(i){return i!==""}function Qc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function th(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const sx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qa(i){return i.replace(sx,ox)}const rx=new Map;function ox(i,t){let e=ne[t];if(e===void 0){const n=rx.get(t);if(n!==void 0)e=ne[n],Xt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Qa(e)}const ax=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function eh(i){return i.replace(ax,lx)}function lx(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function nh(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}const cx={[Gr]:"SHADOWMAP_TYPE_PCF",[Ls]:"SHADOWMAP_TYPE_VSM"};function hx(i){return cx[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const ux={[zi]:"ENVMAP_TYPE_CUBE",[ps]:"ENVMAP_TYPE_CUBE",[ho]:"ENVMAP_TYPE_CUBE_UV"};function dx(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":ux[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const fx={[ps]:"ENVMAP_MODE_REFRACTION"};function px(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":fx[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const mx={[Ch]:"ENVMAP_BLENDING_MULTIPLY",[$u]:"ENVMAP_BLENDING_MIX",[Ku]:"ENVMAP_BLENDING_ADD"};function gx(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":mx[i.combine]||"ENVMAP_BLENDING_NONE"}function xx(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function _x(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=hx(e),l=dx(e),u=px(e),f=gx(e),h=xx(e),d=ex(e),m=nx(r),_=s.createProgram();let x,p,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Us).join(`
`),x.length>0&&(x+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Us).join(`
`),p.length>0&&(p+=`
`)):(x=[nh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Us).join(`
`),p=[nh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Gn?"#define TONE_MAPPING":"",e.toneMapping!==Gn?ne.tonemapping_pars_fragment:"",e.toneMapping!==Gn?Q0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ne.colorspace_pars_fragment,K0("linearToOutputTexel",e.outputColorSpace),tx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Us).join(`
`)),o=Qa(o),o=Qc(o,e),o=th(o,e),a=Qa(a),a=Qc(a,e),a=th(a,e),o=eh(o),a=eh(a),e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,x=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,p=["#define varying in",e.glslVersion===$l?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===$l?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=g+x+o,S=g+p+a,P=$c(s,s.VERTEX_SHADER,y),w=$c(s,s.FRAGMENT_SHADER,S);s.attachShader(_,P),s.attachShader(_,w),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function b(T){if(i.debug.checkShaderErrors){const I=s.getProgramInfoLog(_)||"",U=s.getShaderInfoLog(P)||"",F=s.getShaderInfoLog(w)||"",L=I.trim(),O=U.trim(),B=F.trim();let W=!0,G=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,P,w);else{const q=Jc(s,P,"vertex"),st=Jc(s,w,"fragment");ae("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+L+`
`+q+`
`+st)}else L!==""?Xt("WebGLProgram: Program Info Log:",L):(O===""||B==="")&&(G=!1);G&&(T.diagnostics={runnable:W,programLog:L,vertexShader:{log:O,prefix:x},fragmentShader:{log:B,prefix:p}})}s.deleteShader(P),s.deleteShader(w),M=new qr(s,_),A=ix(s,_)}let M;this.getUniforms=function(){return M===void 0&&b(this),M};let A;this.getAttributes=function(){return A===void 0&&b(this),A};let D=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(_,q0)),D},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=j0++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=P,this.fragmentShader=w,this}let vx=0;class yx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Mx(t),e.set(t,n)),n}}class Mx{constructor(t){this.id=vx++,this.code=t,this.usedTimes=0}}function Sx(i){return i===ki||i===$r||i===Kr}function Ex(i,t,e,n,s,r){const o=new Ml,a=new yx,c=new Set,l=[],u=new Map,f=n.logarithmicDepthBuffer;let h=n.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(M){return c.add(M),M===0?"uv":`uv${M}`}function _(M,A,D,T,I,U){const F=T.fog,L=I.geometry,O=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?T.environment:null,B=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,W=t.get(M.envMap||O,B),G=W&&W.mapping===ho?W.image.height:null,q=d[M.type];M.precision!==null&&(h=n.getMaxPrecision(M.precision),h!==M.precision&&Xt("WebGLProgram.getParameters:",M.precision,"not supported, using",h,"instead."));const st=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,nt=st!==void 0?st.length:0;let ct=0;L.morphAttributes.position!==void 0&&(ct=1),L.morphAttributes.normal!==void 0&&(ct=2),L.morphAttributes.color!==void 0&&(ct=3);let Pt,Tt,Z,ht;if(q){const Kt=zn[q];Pt=Kt.vertexShader,Tt=Kt.fragmentShader}else Pt=M.vertexShader,Tt=M.fragmentShader,a.update(M),Z=a.getVertexShaderID(M),ht=a.getFragmentShaderID(M);const at=i.getRenderTarget(),ut=i.state.buffers.depth.getReversed(),vt=I.isInstancedMesh===!0,pt=I.isBatchedMesh===!0,It=!!M.map,At=!!M.matcap,Q=!!W,J=!!M.aoMap,$=!!M.lightMap,et=!!M.bumpMap,yt=!!M.normalMap,kt=!!M.displacementMap,z=!!M.emissiveMap,Gt=!!M.metalnessMap,Nt=!!M.roughnessMap,Wt=M.anisotropy>0,mt=M.clearcoat>0,se=M.dispersion>0,R=M.iridescence>0,E=M.sheen>0,V=M.transmission>0,tt=Wt&&!!M.anisotropyMap,lt=mt&&!!M.clearcoatMap,dt=mt&&!!M.clearcoatNormalMap,St=mt&&!!M.clearcoatRoughnessMap,K=R&&!!M.iridescenceMap,it=R&&!!M.iridescenceThicknessMap,bt=E&&!!M.sheenColorMap,Lt=E&&!!M.sheenRoughnessMap,_t=!!M.specularMap,Mt=!!M.specularColorMap,Yt=!!M.specularIntensityMap,jt=V&&!!M.transmissionMap,oe=V&&!!M.thicknessMap,k=!!M.gradientMap,Et=!!M.alphaMap,rt=M.alphaTest>0,Ut=!!M.alphaHash,wt=!!M.extensions;let ft=Gn;M.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(ft=i.toneMapping);const zt={shaderID:q,shaderType:M.type,shaderName:M.name,vertexShader:Pt,fragmentShader:Tt,defines:M.defines,customVertexShaderID:Z,customFragmentShaderID:ht,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:h,batching:pt,batchingColor:pt&&I._colorsTexture!==null,instancing:vt,instancingColor:vt&&I.instanceColor!==null,instancingMorph:vt&&I.morphTexture!==null,outputColorSpace:at===null?i.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:le.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:It,matcap:At,envMap:Q,envMapMode:Q&&W.mapping,envMapCubeUVHeight:G,aoMap:J,lightMap:$,bumpMap:et,normalMap:yt,displacementMap:kt,emissiveMap:z,normalMapObjectSpace:yt&&M.normalMapType===td,normalMapTangentSpace:yt&&M.normalMapType===Jr,packedNormalMap:yt&&M.normalMapType===Jr&&Sx(M.normalMap.format),metalnessMap:Gt,roughnessMap:Nt,anisotropy:Wt,anisotropyMap:tt,clearcoat:mt,clearcoatMap:lt,clearcoatNormalMap:dt,clearcoatRoughnessMap:St,dispersion:se,iridescence:R,iridescenceMap:K,iridescenceThicknessMap:it,sheen:E,sheenColorMap:bt,sheenRoughnessMap:Lt,specularMap:_t,specularColorMap:Mt,specularIntensityMap:Yt,transmission:V,transmissionMap:jt,thicknessMap:oe,gradientMap:k,opaque:M.transparent===!1&&M.blending===us&&M.alphaToCoverage===!1,alphaMap:Et,alphaTest:rt,alphaHash:Ut,combine:M.combine,mapUv:It&&m(M.map.channel),aoMapUv:J&&m(M.aoMap.channel),lightMapUv:$&&m(M.lightMap.channel),bumpMapUv:et&&m(M.bumpMap.channel),normalMapUv:yt&&m(M.normalMap.channel),displacementMapUv:kt&&m(M.displacementMap.channel),emissiveMapUv:z&&m(M.emissiveMap.channel),metalnessMapUv:Gt&&m(M.metalnessMap.channel),roughnessMapUv:Nt&&m(M.roughnessMap.channel),anisotropyMapUv:tt&&m(M.anisotropyMap.channel),clearcoatMapUv:lt&&m(M.clearcoatMap.channel),clearcoatNormalMapUv:dt&&m(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:St&&m(M.clearcoatRoughnessMap.channel),iridescenceMapUv:K&&m(M.iridescenceMap.channel),iridescenceThicknessMapUv:it&&m(M.iridescenceThicknessMap.channel),sheenColorMapUv:bt&&m(M.sheenColorMap.channel),sheenRoughnessMapUv:Lt&&m(M.sheenRoughnessMap.channel),specularMapUv:_t&&m(M.specularMap.channel),specularColorMapUv:Mt&&m(M.specularColorMap.channel),specularIntensityMapUv:Yt&&m(M.specularIntensityMap.channel),transmissionMapUv:jt&&m(M.transmissionMap.channel),thicknessMapUv:oe&&m(M.thicknessMap.channel),alphaMapUv:Et&&m(M.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(yt||Wt),vertexNormals:!!L.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!L.attributes.uv&&(It||Et),fog:!!F,useFog:M.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||L.attributes.normal===void 0&&yt===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ut,skinning:I.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:nt,morphTextureStride:ct,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:U.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:ft,decodeVideoTexture:It&&M.map.isVideoTexture===!0&&le.getTransfer(M.map.colorSpace)===de,decodeVideoTextureEmissive:z&&M.emissiveMap.isVideoTexture===!0&&le.getTransfer(M.emissiveMap.colorSpace)===de,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===qe,flipSided:M.side===dn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:wt&&M.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(wt&&M.extensions.multiDraw===!0||pt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return zt.vertexUv1s=c.has(1),zt.vertexUv2s=c.has(2),zt.vertexUv3s=c.has(3),c.clear(),zt}function x(M){const A=[];if(M.shaderID?A.push(M.shaderID):(A.push(M.customVertexShaderID),A.push(M.customFragmentShaderID)),M.defines!==void 0)for(const D in M.defines)A.push(D),A.push(M.defines[D]);return M.isRawShaderMaterial===!1&&(p(A,M),g(A,M),A.push(i.outputColorSpace)),A.push(M.customProgramCacheKey),A.join()}function p(M,A){M.push(A.precision),M.push(A.outputColorSpace),M.push(A.envMapMode),M.push(A.envMapCubeUVHeight),M.push(A.mapUv),M.push(A.alphaMapUv),M.push(A.lightMapUv),M.push(A.aoMapUv),M.push(A.bumpMapUv),M.push(A.normalMapUv),M.push(A.displacementMapUv),M.push(A.emissiveMapUv),M.push(A.metalnessMapUv),M.push(A.roughnessMapUv),M.push(A.anisotropyMapUv),M.push(A.clearcoatMapUv),M.push(A.clearcoatNormalMapUv),M.push(A.clearcoatRoughnessMapUv),M.push(A.iridescenceMapUv),M.push(A.iridescenceThicknessMapUv),M.push(A.sheenColorMapUv),M.push(A.sheenRoughnessMapUv),M.push(A.specularMapUv),M.push(A.specularColorMapUv),M.push(A.specularIntensityMapUv),M.push(A.transmissionMapUv),M.push(A.thicknessMapUv),M.push(A.combine),M.push(A.fogExp2),M.push(A.sizeAttenuation),M.push(A.morphTargetsCount),M.push(A.morphAttributeCount),M.push(A.numDirLights),M.push(A.numPointLights),M.push(A.numSpotLights),M.push(A.numSpotLightMaps),M.push(A.numHemiLights),M.push(A.numRectAreaLights),M.push(A.numDirLightShadows),M.push(A.numPointLightShadows),M.push(A.numSpotLightShadows),M.push(A.numSpotLightShadowsWithMaps),M.push(A.numLightProbes),M.push(A.shadowMapType),M.push(A.toneMapping),M.push(A.numClippingPlanes),M.push(A.numClipIntersection),M.push(A.depthPacking)}function g(M,A){o.disableAll(),A.instancing&&o.enable(0),A.instancingColor&&o.enable(1),A.instancingMorph&&o.enable(2),A.matcap&&o.enable(3),A.envMap&&o.enable(4),A.normalMapObjectSpace&&o.enable(5),A.normalMapTangentSpace&&o.enable(6),A.clearcoat&&o.enable(7),A.iridescence&&o.enable(8),A.alphaTest&&o.enable(9),A.vertexColors&&o.enable(10),A.vertexAlphas&&o.enable(11),A.vertexUv1s&&o.enable(12),A.vertexUv2s&&o.enable(13),A.vertexUv3s&&o.enable(14),A.vertexTangents&&o.enable(15),A.anisotropy&&o.enable(16),A.alphaHash&&o.enable(17),A.batching&&o.enable(18),A.dispersion&&o.enable(19),A.batchingColor&&o.enable(20),A.gradientMap&&o.enable(21),A.packedNormalMap&&o.enable(22),A.vertexNormals&&o.enable(23),M.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.reversedDepthBuffer&&o.enable(4),A.skinning&&o.enable(5),A.morphTargets&&o.enable(6),A.morphNormals&&o.enable(7),A.morphColors&&o.enable(8),A.premultipliedAlpha&&o.enable(9),A.shadowMapEnabled&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),A.decodeVideoTextureEmissive&&o.enable(20),A.alphaToCoverage&&o.enable(21),A.numLightProbeGrids>0&&o.enable(22),M.push(o.mask)}function y(M){const A=d[M.type];let D;if(A){const T=zn[A];D=Oi.clone(T.uniforms)}else D=M.uniforms;return D}function S(M,A){let D=u.get(A);return D!==void 0?++D.usedTimes:(D=new _x(i,A,M,s),l.push(D),u.set(A,D)),D}function P(M){if(--M.usedTimes===0){const A=l.indexOf(M);l[A]=l[l.length-1],l.pop(),u.delete(M.cacheKey),M.destroy()}}function w(M){a.remove(M)}function b(){a.dispose()}return{getParameters:_,getProgramCacheKey:x,getUniforms:y,acquireProgram:S,releaseProgram:P,releaseShaderCache:w,programs:l,dispose:b}}function bx(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function wx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function ih(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function sh(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function a(h,d,m,_,x,p){let g=i[t];return g===void 0?(g={id:h.id,object:h,geometry:d,material:m,materialVariant:o(h),groupOrder:_,renderOrder:h.renderOrder,z:x,group:p},i[t]=g):(g.id=h.id,g.object=h,g.geometry=d,g.material=m,g.materialVariant=o(h),g.groupOrder=_,g.renderOrder=h.renderOrder,g.z=x,g.group=p),t++,g}function c(h,d,m,_,x,p){const g=a(h,d,m,_,x,p);m.transmission>0?n.push(g):m.transparent===!0?s.push(g):e.push(g)}function l(h,d,m,_,x,p){const g=a(h,d,m,_,x,p);m.transmission>0?n.unshift(g):m.transparent===!0?s.unshift(g):e.unshift(g)}function u(h,d){e.length>1&&e.sort(h||wx),n.length>1&&n.sort(d||ih),s.length>1&&s.sort(d||ih)}function f(){for(let h=t,d=i.length;h<d;h++){const m=i[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:f,sort:u}}function Tx(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new sh,i.set(n,[o])):s>=r.length?(o=new sh,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Ax(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new ee};break;case"SpotLight":e={position:new N,direction:new N,color:new ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new ee,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new ee,groundColor:new ee};break;case"RectAreaLight":e={color:new ee,position:new N,halfWidth:new N,halfHeight:new N};break}return i[t.id]=e,e}}}function Px(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Cx=0;function Rx(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Ix(i){const t=new Ax,e=Px(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new N);const s=new N,r=new xe,o=new xe;function a(l){let u=0,f=0,h=0;for(let A=0;A<9;A++)n.probe[A].set(0,0,0);let d=0,m=0,_=0,x=0,p=0,g=0,y=0,S=0,P=0,w=0,b=0;l.sort(Rx);for(let A=0,D=l.length;A<D;A++){const T=l[A],I=T.color,U=T.intensity,F=T.distance;let L=null;if(T.shadow&&T.shadow.map&&(T.shadow.map.texture.format===ki?L=T.shadow.map.texture:L=T.shadow.map.depthTexture||T.shadow.map.texture),T.isAmbientLight)u+=I.r*U,f+=I.g*U,h+=I.b*U;else if(T.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(T.sh.coefficients[O],U);b++}else if(T.isDirectionalLight){const O=t.get(T);if(O.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const B=T.shadow,W=e.get(T);W.shadowIntensity=B.intensity,W.shadowBias=B.bias,W.shadowNormalBias=B.normalBias,W.shadowRadius=B.radius,W.shadowMapSize=B.mapSize,n.directionalShadow[d]=W,n.directionalShadowMap[d]=L,n.directionalShadowMatrix[d]=T.shadow.matrix,g++}n.directional[d]=O,d++}else if(T.isSpotLight){const O=t.get(T);O.position.setFromMatrixPosition(T.matrixWorld),O.color.copy(I).multiplyScalar(U),O.distance=F,O.coneCos=Math.cos(T.angle),O.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),O.decay=T.decay,n.spot[_]=O;const B=T.shadow;if(T.map&&(n.spotLightMap[P]=T.map,P++,B.updateMatrices(T),T.castShadow&&w++),n.spotLightMatrix[_]=B.matrix,T.castShadow){const W=e.get(T);W.shadowIntensity=B.intensity,W.shadowBias=B.bias,W.shadowNormalBias=B.normalBias,W.shadowRadius=B.radius,W.shadowMapSize=B.mapSize,n.spotShadow[_]=W,n.spotShadowMap[_]=L,S++}_++}else if(T.isRectAreaLight){const O=t.get(T);O.color.copy(I).multiplyScalar(U),O.halfWidth.set(T.width*.5,0,0),O.halfHeight.set(0,T.height*.5,0),n.rectArea[x]=O,x++}else if(T.isPointLight){const O=t.get(T);if(O.color.copy(T.color).multiplyScalar(T.intensity),O.distance=T.distance,O.decay=T.decay,T.castShadow){const B=T.shadow,W=e.get(T);W.shadowIntensity=B.intensity,W.shadowBias=B.bias,W.shadowNormalBias=B.normalBias,W.shadowRadius=B.radius,W.shadowMapSize=B.mapSize,W.shadowCameraNear=B.camera.near,W.shadowCameraFar=B.camera.far,n.pointShadow[m]=W,n.pointShadowMap[m]=L,n.pointShadowMatrix[m]=T.shadow.matrix,y++}n.point[m]=O,m++}else if(T.isHemisphereLight){const O=t.get(T);O.skyColor.copy(T.color).multiplyScalar(U),O.groundColor.copy(T.groundColor).multiplyScalar(U),n.hemi[p]=O,p++}}x>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ct.LTC_FLOAT_1,n.rectAreaLTC2=Ct.LTC_FLOAT_2):(n.rectAreaLTC1=Ct.LTC_HALF_1,n.rectAreaLTC2=Ct.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;const M=n.hash;(M.directionalLength!==d||M.pointLength!==m||M.spotLength!==_||M.rectAreaLength!==x||M.hemiLength!==p||M.numDirectionalShadows!==g||M.numPointShadows!==y||M.numSpotShadows!==S||M.numSpotMaps!==P||M.numLightProbes!==b)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=x,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=g,n.directionalShadowMap.length=g,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=g,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=S+P-w,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=b,M.directionalLength=d,M.pointLength=m,M.spotLength=_,M.rectAreaLength=x,M.hemiLength=p,M.numDirectionalShadows=g,M.numPointShadows=y,M.numSpotShadows=S,M.numSpotMaps=P,M.numLightProbes=b,n.version=Cx++)}function c(l,u){let f=0,h=0,d=0,m=0,_=0;const x=u.matrixWorldInverse;for(let p=0,g=l.length;p<g;p++){const y=l[p];if(y.isDirectionalLight){const S=n.directional[f];S.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(x),f++}else if(y.isSpotLight){const S=n.spot[d];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(x),S.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(x),d++}else if(y.isRectAreaLight){const S=n.rectArea[m];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(x),o.identity(),r.copy(y.matrixWorld),r.premultiply(x),o.extractRotation(r),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),m++}else if(y.isPointLight){const S=n.point[h];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(x),h++}else if(y.isHemisphereLight){const S=n.hemi[_];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(x),_++}}}return{setup:a,setupView:c,state:n}}function rh(i){const t=new Ix(i),e=[],n=[],s=[];function r(h){f.camera=h,e.length=0,n.length=0,s.length=0}function o(h){e.push(h)}function a(h){n.push(h)}function c(h){s.push(h)}function l(){t.setup(e)}function u(h){t.setupView(e,h)}const f={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function Dx(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new rh(i),t.set(s,[a])):r>=o.length?(a=new rh(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const Lx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Nx=`uniform sampler2D shadow_pass;
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
}`,Ux=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],Fx=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],oh=new xe,Cs=new N,Qo=new N;function Ox(i,t,e){let n=new Sl;const s=new gt,r=new gt,o=new Pe,a=new zf,c=new kf,l={},u=e.maxTextureSize,f={[bi]:dn,[dn]:bi,[qe]:qe},h=new Ze({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new gt},radius:{value:4}},vertexShader:Lx,fragmentShader:Nx}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const m=new te;m.setAttribute("position",new on(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new xt(m,h),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gr;let p=this.type;this.render=function(w,b,M){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||w.length===0)return;this.type===Uu&&(Xt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Gr);const A=i.getRenderTarget(),D=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),I=i.state;I.setBlending(tn),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const U=p!==this.type;U&&b.traverse(function(F){F.material&&(Array.isArray(F.material)?F.material.forEach(L=>L.needsUpdate=!0):F.material.needsUpdate=!0)});for(let F=0,L=w.length;F<L;F++){const O=w[F],B=O.shadow;if(B===void 0){Xt("WebGLShadowMap:",O,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);const W=B.getFrameExtents();s.multiply(W),r.copy(B.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/W.x),s.x=r.x*W.x,B.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/W.y),s.y=r.y*W.y,B.mapSize.y=r.y));const G=i.state.buffers.depth.getReversed();if(B.camera._reversedDepth=G,B.map===null||U===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===Ls){if(O.isPointLight){Xt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new vn(s.x,s.y,{format:ki,type:bn,minFilter:en,magFilter:en,generateMipmaps:!1}),B.map.texture.name=O.name+".shadowMap",B.map.depthTexture=new Vi(s.x,s.y,Dn),B.map.depthTexture.name=O.name+".shadowMapDepth",B.map.depthTexture.format=ai,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Ge,B.map.depthTexture.magFilter=Ge}else O.isPointLight?(B.map=new lu(s.x),B.map.depthTexture=new Qd(s.x,Wn)):(B.map=new vn(s.x,s.y),B.map.depthTexture=new Vi(s.x,s.y,Wn)),B.map.depthTexture.name=O.name+".shadowMap",B.map.depthTexture.format=ai,this.type===Gr?(B.map.depthTexture.compareFunction=G?_l:xl,B.map.depthTexture.minFilter=en,B.map.depthTexture.magFilter=en):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Ge,B.map.depthTexture.magFilter=Ge);B.camera.updateProjectionMatrix()}const q=B.map.isWebGLCubeRenderTarget?6:1;for(let st=0;st<q;st++){if(B.map.isWebGLCubeRenderTarget)i.setRenderTarget(B.map,st),i.clear();else{st===0&&(i.setRenderTarget(B.map),i.clear());const nt=B.getViewport(st);o.set(r.x*nt.x,r.y*nt.y,r.x*nt.z,r.y*nt.w),I.viewport(o)}if(O.isPointLight){const nt=B.camera,ct=B.matrix,Pt=O.distance||nt.far;Pt!==nt.far&&(nt.far=Pt,nt.updateProjectionMatrix()),Cs.setFromMatrixPosition(O.matrixWorld),nt.position.copy(Cs),Qo.copy(nt.position),Qo.add(Ux[st]),nt.up.copy(Fx[st]),nt.lookAt(Qo),nt.updateMatrixWorld(),ct.makeTranslation(-Cs.x,-Cs.y,-Cs.z),oh.multiplyMatrices(nt.projectionMatrix,nt.matrixWorldInverse),B._frustum.setFromProjectionMatrix(oh,nt.coordinateSystem,nt.reversedDepth)}else B.updateMatrices(O);n=B.getFrustum(),S(b,M,B.camera,O,this.type)}B.isPointLightShadow!==!0&&this.type===Ls&&g(B,M),B.needsUpdate=!1}p=this.type,x.needsUpdate=!1,i.setRenderTarget(A,D,T)};function g(w,b){const M=t.update(_);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new vn(s.x,s.y,{format:ki,type:bn})),h.uniforms.shadow_pass.value=w.map.depthTexture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(b,null,M,h,_,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(b,null,M,d,_,null)}function y(w,b,M,A){let D=null;const T=M.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(T!==void 0)D=T;else if(D=M.isPointLight===!0?c:a,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){const I=D.uuid,U=b.uuid;let F=l[I];F===void 0&&(F={},l[I]=F);let L=F[U];L===void 0&&(L=D.clone(),F[U]=L,b.addEventListener("dispose",P)),D=L}if(D.visible=b.visible,D.wireframe=b.wireframe,A===Ls?D.side=b.shadowSide!==null?b.shadowSide:b.side:D.side=b.shadowSide!==null?b.shadowSide:f[b.side],D.alphaMap=b.alphaMap,D.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,D.map=b.map,D.clipShadows=b.clipShadows,D.clippingPlanes=b.clippingPlanes,D.clipIntersection=b.clipIntersection,D.displacementMap=b.displacementMap,D.displacementScale=b.displacementScale,D.displacementBias=b.displacementBias,D.wireframeLinewidth=b.wireframeLinewidth,D.linewidth=b.linewidth,M.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const I=i.properties.get(D);I.light=M}return D}function S(w,b,M,A,D){if(w.visible===!1)return;if(w.layers.test(b.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&D===Ls)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,w.matrixWorld);const U=t.update(w),F=w.material;if(Array.isArray(F)){const L=U.groups;for(let O=0,B=L.length;O<B;O++){const W=L[O],G=F[W.materialIndex];if(G&&G.visible){const q=y(w,G,A,D);w.onBeforeShadow(i,w,b,M,U,q,W),i.renderBufferDirect(M,null,U,q,w,W),w.onAfterShadow(i,w,b,M,U,q,W)}}}else if(F.visible){const L=y(w,F,A,D);w.onBeforeShadow(i,w,b,M,U,L,null),i.renderBufferDirect(M,null,U,L,w,null),w.onAfterShadow(i,w,b,M,U,L,null)}}const I=w.children;for(let U=0,F=I.length;U<F;U++)S(I[U],b,M,A,D)}function P(w){w.target.removeEventListener("dispose",P);for(const M in l){const A=l[M],D=w.target.uuid;D in A&&(A[D].dispose(),delete A[D])}}}function Bx(i,t){function e(){let k=!1;const Et=new Pe;let rt=null;const Ut=new Pe(0,0,0,0);return{setMask:function(wt){rt!==wt&&!k&&(i.colorMask(wt,wt,wt,wt),rt=wt)},setLocked:function(wt){k=wt},setClear:function(wt,ft,zt,Kt,Ce){Ce===!0&&(wt*=Kt,ft*=Kt,zt*=Kt),Et.set(wt,ft,zt,Kt),Ut.equals(Et)===!1&&(i.clearColor(wt,ft,zt,Kt),Ut.copy(Et))},reset:function(){k=!1,rt=null,Ut.set(-1,0,0,0)}}}function n(){let k=!1,Et=!1,rt=null,Ut=null,wt=null;return{setReversed:function(ft){if(Et!==ft){const zt=t.get("EXT_clip_control");ft?zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.ZERO_TO_ONE_EXT):zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.NEGATIVE_ONE_TO_ONE_EXT),Et=ft;const Kt=wt;wt=null,this.setClear(Kt)}},getReversed:function(){return Et},setTest:function(ft){ft?at(i.DEPTH_TEST):ut(i.DEPTH_TEST)},setMask:function(ft){rt!==ft&&!k&&(i.depthMask(ft),rt=ft)},setFunc:function(ft){if(Et&&(ft=ud[ft]),Ut!==ft){switch(ft){case la:i.depthFunc(i.NEVER);break;case ca:i.depthFunc(i.ALWAYS);break;case ha:i.depthFunc(i.LESS);break;case fs:i.depthFunc(i.LEQUAL);break;case ua:i.depthFunc(i.EQUAL);break;case da:i.depthFunc(i.GEQUAL);break;case fa:i.depthFunc(i.GREATER);break;case pa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ut=ft}},setLocked:function(ft){k=ft},setClear:function(ft){wt!==ft&&(wt=ft,Et&&(ft=1-ft),i.clearDepth(ft))},reset:function(){k=!1,rt=null,Ut=null,wt=null,Et=!1}}}function s(){let k=!1,Et=null,rt=null,Ut=null,wt=null,ft=null,zt=null,Kt=null,Ce=null;return{setTest:function(pe){k||(pe?at(i.STENCIL_TEST):ut(i.STENCIL_TEST))},setMask:function(pe){Et!==pe&&!k&&(i.stencilMask(pe),Et=pe)},setFunc:function(pe,Yn,Nn){(rt!==pe||Ut!==Yn||wt!==Nn)&&(i.stencilFunc(pe,Yn,Nn),rt=pe,Ut=Yn,wt=Nn)},setOp:function(pe,Yn,Nn){(ft!==pe||zt!==Yn||Kt!==Nn)&&(i.stencilOp(pe,Yn,Nn),ft=pe,zt=Yn,Kt=Nn)},setLocked:function(pe){k=pe},setClear:function(pe){Ce!==pe&&(i.clearStencil(pe),Ce=pe)},reset:function(){k=!1,Et=null,rt=null,Ut=null,wt=null,ft=null,zt=null,Kt=null,Ce=null}}}const r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let u={},f={},h={},d=new WeakMap,m=[],_=null,x=!1,p=null,g=null,y=null,S=null,P=null,w=null,b=null,M=new ee(0,0,0),A=0,D=!1,T=null,I=null,U=null,F=null,L=null;const O=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,W=0;const G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(G)[1]),B=W>=1):G.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),B=W>=2);let q=null,st={};const nt=i.getParameter(i.SCISSOR_BOX),ct=i.getParameter(i.VIEWPORT),Pt=new Pe().fromArray(nt),Tt=new Pe().fromArray(ct);function Z(k,Et,rt,Ut){const wt=new Uint8Array(4),ft=i.createTexture();i.bindTexture(k,ft),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let zt=0;zt<rt;zt++)k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?i.texImage3D(Et,0,i.RGBA,1,1,Ut,0,i.RGBA,i.UNSIGNED_BYTE,wt):i.texImage2D(Et+zt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,wt);return ft}const ht={};ht[i.TEXTURE_2D]=Z(i.TEXTURE_2D,i.TEXTURE_2D,1),ht[i.TEXTURE_CUBE_MAP]=Z(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ht[i.TEXTURE_2D_ARRAY]=Z(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ht[i.TEXTURE_3D]=Z(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),at(i.DEPTH_TEST),o.setFunc(fs),et(!1),yt(Xl),at(i.CULL_FACE),J(tn);function at(k){u[k]!==!0&&(i.enable(k),u[k]=!0)}function ut(k){u[k]!==!1&&(i.disable(k),u[k]=!1)}function vt(k,Et){return h[k]!==Et?(i.bindFramebuffer(k,Et),h[k]=Et,k===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=Et),k===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=Et),!0):!1}function pt(k,Et){let rt=m,Ut=!1;if(k){rt=d.get(Et),rt===void 0&&(rt=[],d.set(Et,rt));const wt=k.textures;if(rt.length!==wt.length||rt[0]!==i.COLOR_ATTACHMENT0){for(let ft=0,zt=wt.length;ft<zt;ft++)rt[ft]=i.COLOR_ATTACHMENT0+ft;rt.length=wt.length,Ut=!0}}else rt[0]!==i.BACK&&(rt[0]=i.BACK,Ut=!0);Ut&&i.drawBuffers(rt)}function It(k){return _!==k?(i.useProgram(k),_=k,!0):!1}const At={[ti]:i.FUNC_ADD,[Fu]:i.FUNC_SUBTRACT,[Ou]:i.FUNC_REVERSE_SUBTRACT};At[Bu]=i.MIN,At[zu]=i.MAX;const Q={[ra]:i.ZERO,[ku]:i.ONE,[Vu]:i.SRC_COLOR,[oa]:i.SRC_ALPHA,[Xu]:i.SRC_ALPHA_SATURATE,[Ph]:i.DST_COLOR,[Ah]:i.DST_ALPHA,[Gu]:i.ONE_MINUS_SRC_COLOR,[aa]:i.ONE_MINUS_SRC_ALPHA,[Wu]:i.ONE_MINUS_DST_COLOR,[Hu]:i.ONE_MINUS_DST_ALPHA,[Yu]:i.CONSTANT_COLOR,[qu]:i.ONE_MINUS_CONSTANT_COLOR,[ju]:i.CONSTANT_ALPHA,[Zu]:i.ONE_MINUS_CONSTANT_ALPHA};function J(k,Et,rt,Ut,wt,ft,zt,Kt,Ce,pe){if(k===tn){x===!0&&(ut(i.BLEND),x=!1);return}if(x===!1&&(at(i.BLEND),x=!0),k!==Th){if(k!==p||pe!==D){if((g!==ti||P!==ti)&&(i.blendEquation(i.FUNC_ADD),g=ti,P=ti),pe)switch(k){case us:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Yl:i.blendFunc(i.ONE,i.ONE);break;case ql:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case jl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ae("WebGLState: Invalid blending: ",k);break}else switch(k){case us:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Yl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ql:ae("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case jl:ae("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ae("WebGLState: Invalid blending: ",k);break}y=null,S=null,w=null,b=null,M.set(0,0,0),A=0,p=k,D=pe}return}wt=wt||Et,ft=ft||rt,zt=zt||Ut,(Et!==g||wt!==P)&&(i.blendEquationSeparate(At[Et],At[wt]),g=Et,P=wt),(rt!==y||Ut!==S||ft!==w||zt!==b)&&(i.blendFuncSeparate(Q[rt],Q[Ut],Q[ft],Q[zt]),y=rt,S=Ut,w=ft,b=zt),(Kt.equals(M)===!1||Ce!==A)&&(i.blendColor(Kt.r,Kt.g,Kt.b,Ce),M.copy(Kt),A=Ce),p=k,D=!1}function $(k,Et){k.side===qe?ut(i.CULL_FACE):at(i.CULL_FACE);let rt=k.side===dn;Et&&(rt=!rt),et(rt),k.blending===us&&k.transparent===!1?J(tn):J(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),r.setMask(k.colorWrite);const Ut=k.stencilWrite;a.setTest(Ut),Ut&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),z(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?at(i.SAMPLE_ALPHA_TO_COVERAGE):ut(i.SAMPLE_ALPHA_TO_COVERAGE)}function et(k){T!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),T=k)}function yt(k){k!==Lu?(at(i.CULL_FACE),k!==I&&(k===Xl?i.cullFace(i.BACK):k===Nu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ut(i.CULL_FACE),I=k}function kt(k){k!==U&&(B&&i.lineWidth(k),U=k)}function z(k,Et,rt){k?(at(i.POLYGON_OFFSET_FILL),(F!==Et||L!==rt)&&(F=Et,L=rt,o.getReversed()&&(Et=-Et),i.polygonOffset(Et,rt))):ut(i.POLYGON_OFFSET_FILL)}function Gt(k){k?at(i.SCISSOR_TEST):ut(i.SCISSOR_TEST)}function Nt(k){k===void 0&&(k=i.TEXTURE0+O-1),q!==k&&(i.activeTexture(k),q=k)}function Wt(k,Et,rt){rt===void 0&&(q===null?rt=i.TEXTURE0+O-1:rt=q);let Ut=st[rt];Ut===void 0&&(Ut={type:void 0,texture:void 0},st[rt]=Ut),(Ut.type!==k||Ut.texture!==Et)&&(q!==rt&&(i.activeTexture(rt),q=rt),i.bindTexture(k,Et||ht[k]),Ut.type=k,Ut.texture=Et)}function mt(){const k=st[q];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function se(){try{i.compressedTexImage2D(...arguments)}catch(k){ae("WebGLState:",k)}}function R(){try{i.compressedTexImage3D(...arguments)}catch(k){ae("WebGLState:",k)}}function E(){try{i.texSubImage2D(...arguments)}catch(k){ae("WebGLState:",k)}}function V(){try{i.texSubImage3D(...arguments)}catch(k){ae("WebGLState:",k)}}function tt(){try{i.compressedTexSubImage2D(...arguments)}catch(k){ae("WebGLState:",k)}}function lt(){try{i.compressedTexSubImage3D(...arguments)}catch(k){ae("WebGLState:",k)}}function dt(){try{i.texStorage2D(...arguments)}catch(k){ae("WebGLState:",k)}}function St(){try{i.texStorage3D(...arguments)}catch(k){ae("WebGLState:",k)}}function K(){try{i.texImage2D(...arguments)}catch(k){ae("WebGLState:",k)}}function it(){try{i.texImage3D(...arguments)}catch(k){ae("WebGLState:",k)}}function bt(k){return f[k]!==void 0?f[k]:i.getParameter(k)}function Lt(k,Et){f[k]!==Et&&(i.pixelStorei(k,Et),f[k]=Et)}function _t(k){Pt.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),Pt.copy(k))}function Mt(k){Tt.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),Tt.copy(k))}function Yt(k,Et){let rt=l.get(Et);rt===void 0&&(rt=new WeakMap,l.set(Et,rt));let Ut=rt.get(k);Ut===void 0&&(Ut=i.getUniformBlockIndex(Et,k.name),rt.set(k,Ut))}function jt(k,Et){const Ut=l.get(Et).get(k);c.get(Et)!==Ut&&(i.uniformBlockBinding(Et,Ut,k.__bindingPointIndex),c.set(Et,Ut))}function oe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},f={},q=null,st={},h={},d=new WeakMap,m=[],_=null,x=!1,p=null,g=null,y=null,S=null,P=null,w=null,b=null,M=new ee(0,0,0),A=0,D=!1,T=null,I=null,U=null,F=null,L=null,Pt.set(0,0,i.canvas.width,i.canvas.height),Tt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:at,disable:ut,bindFramebuffer:vt,drawBuffers:pt,useProgram:It,setBlending:J,setMaterial:$,setFlipSided:et,setCullFace:yt,setLineWidth:kt,setPolygonOffset:z,setScissorTest:Gt,activeTexture:Nt,bindTexture:Wt,unbindTexture:mt,compressedTexImage2D:se,compressedTexImage3D:R,texImage2D:K,texImage3D:it,pixelStorei:Lt,getParameter:bt,updateUBOMapping:Yt,uniformBlockBinding:jt,texStorage2D:dt,texStorage3D:St,texSubImage2D:E,texSubImage3D:V,compressedTexSubImage2D:tt,compressedTexSubImage3D:lt,scissor:_t,viewport:Mt,reset:oe}}function zx(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new gt,u=new WeakMap,f=new Set;let h;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,E){return m?new OffscreenCanvas(R,E):eo("canvas")}function x(R,E,V){let tt=1;const lt=se(R);if((lt.width>V||lt.height>V)&&(tt=V/Math.max(lt.width,lt.height)),tt<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const dt=Math.floor(tt*lt.width),St=Math.floor(tt*lt.height);h===void 0&&(h=_(dt,St));const K=E?_(dt,St):h;return K.width=dt,K.height=St,K.getContext("2d").drawImage(R,0,0,dt,St),Xt("WebGLRenderer: Texture has been resized from ("+lt.width+"x"+lt.height+") to ("+dt+"x"+St+")."),K}else return"data"in R&&Xt("WebGLRenderer: Image in DataTexture is too big ("+lt.width+"x"+lt.height+")."),R;return R}function p(R){return R.generateMipmaps}function g(R){i.generateMipmap(R)}function y(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(R,E,V,tt,lt,dt=!1){if(R!==null){if(i[R]!==void 0)return i[R];Xt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let St;tt&&(St=t.get("EXT_texture_norm16"),St||Xt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=E;if(E===i.RED&&(V===i.FLOAT&&(K=i.R32F),V===i.HALF_FLOAT&&(K=i.R16F),V===i.UNSIGNED_BYTE&&(K=i.R8),V===i.UNSIGNED_SHORT&&St&&(K=St.R16_EXT),V===i.SHORT&&St&&(K=St.R16_SNORM_EXT)),E===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(K=i.R8UI),V===i.UNSIGNED_SHORT&&(K=i.R16UI),V===i.UNSIGNED_INT&&(K=i.R32UI),V===i.BYTE&&(K=i.R8I),V===i.SHORT&&(K=i.R16I),V===i.INT&&(K=i.R32I)),E===i.RG&&(V===i.FLOAT&&(K=i.RG32F),V===i.HALF_FLOAT&&(K=i.RG16F),V===i.UNSIGNED_BYTE&&(K=i.RG8),V===i.UNSIGNED_SHORT&&St&&(K=St.RG16_EXT),V===i.SHORT&&St&&(K=St.RG16_SNORM_EXT)),E===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(K=i.RG8UI),V===i.UNSIGNED_SHORT&&(K=i.RG16UI),V===i.UNSIGNED_INT&&(K=i.RG32UI),V===i.BYTE&&(K=i.RG8I),V===i.SHORT&&(K=i.RG16I),V===i.INT&&(K=i.RG32I)),E===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(K=i.RGB8UI),V===i.UNSIGNED_SHORT&&(K=i.RGB16UI),V===i.UNSIGNED_INT&&(K=i.RGB32UI),V===i.BYTE&&(K=i.RGB8I),V===i.SHORT&&(K=i.RGB16I),V===i.INT&&(K=i.RGB32I)),E===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),V===i.UNSIGNED_INT&&(K=i.RGBA32UI),V===i.BYTE&&(K=i.RGBA8I),V===i.SHORT&&(K=i.RGBA16I),V===i.INT&&(K=i.RGBA32I)),E===i.RGB&&(V===i.UNSIGNED_SHORT&&St&&(K=St.RGB16_EXT),V===i.SHORT&&St&&(K=St.RGB16_SNORM_EXT),V===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),V===i.UNSIGNED_INT_10F_11F_11F_REV&&(K=i.R11F_G11F_B10F)),E===i.RGBA){const it=dt?to:le.getTransfer(lt);V===i.FLOAT&&(K=i.RGBA32F),V===i.HALF_FLOAT&&(K=i.RGBA16F),V===i.UNSIGNED_BYTE&&(K=it===de?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT&&St&&(K=St.RGBA16_EXT),V===i.SHORT&&St&&(K=St.RGBA16_SNORM_EXT),V===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function P(R,E){let V;return R?E===null||E===Wn||E===ms?V=i.DEPTH24_STENCIL8:E===Dn?V=i.DEPTH32F_STENCIL8:E===Ys&&(V=i.DEPTH24_STENCIL8,Xt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Wn||E===ms?V=i.DEPTH_COMPONENT24:E===Dn?V=i.DEPTH_COMPONENT32F:E===Ys&&(V=i.DEPTH_COMPONENT16),V}function w(R,E){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==Ge&&R.minFilter!==en?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function b(R){const E=R.target;E.removeEventListener("dispose",b),A(E),E.isVideoTexture&&u.delete(E),E.isHTMLTexture&&f.delete(E)}function M(R){const E=R.target;E.removeEventListener("dispose",M),T(E)}function A(R){const E=n.get(R);if(E.__webglInit===void 0)return;const V=R.source,tt=d.get(V);if(tt){const lt=tt[E.__cacheKey];lt.usedTimes--,lt.usedTimes===0&&D(R),Object.keys(tt).length===0&&d.delete(V)}n.remove(R)}function D(R){const E=n.get(R);i.deleteTexture(E.__webglTexture);const V=R.source,tt=d.get(V);delete tt[E.__cacheKey],o.memory.textures--}function T(R){const E=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(E.__webglFramebuffer[tt]))for(let lt=0;lt<E.__webglFramebuffer[tt].length;lt++)i.deleteFramebuffer(E.__webglFramebuffer[tt][lt]);else i.deleteFramebuffer(E.__webglFramebuffer[tt]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[tt])}else{if(Array.isArray(E.__webglFramebuffer))for(let tt=0;tt<E.__webglFramebuffer.length;tt++)i.deleteFramebuffer(E.__webglFramebuffer[tt]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let tt=0;tt<E.__webglColorRenderbuffer.length;tt++)E.__webglColorRenderbuffer[tt]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[tt]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const V=R.textures;for(let tt=0,lt=V.length;tt<lt;tt++){const dt=n.get(V[tt]);dt.__webglTexture&&(i.deleteTexture(dt.__webglTexture),o.memory.textures--),n.remove(V[tt])}n.remove(R)}let I=0;function U(){I=0}function F(){return I}function L(R){I=R}function O(){const R=I;return R>=s.maxTextures&&Xt("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),I+=1,R}function B(R){const E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function W(R,E){const V=n.get(R);if(R.isVideoTexture&&Wt(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&V.__version!==R.version){const tt=R.image;if(tt===null)Xt("WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)Xt("WebGLRenderer: Texture marked for update but image is incomplete");else{ut(V,R,E);return}}else R.isExternalTexture&&(V.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+E)}function G(R,E){const V=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){ut(V,R,E);return}else R.isExternalTexture&&(V.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+E)}function q(R,E){const V=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){ut(V,R,E);return}e.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+E)}function st(R,E){const V=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&V.__version!==R.version){vt(V,R,E);return}e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+E)}const nt={[Xs]:i.REPEAT,[ei]:i.CLAMP_TO_EDGE,[ma]:i.MIRRORED_REPEAT},ct={[Ge]:i.NEAREST,[Ju]:i.NEAREST_MIPMAP_NEAREST,[sr]:i.NEAREST_MIPMAP_LINEAR,[en]:i.LINEAR,[yo]:i.LINEAR_MIPMAP_NEAREST,[Ui]:i.LINEAR_MIPMAP_LINEAR},Pt={[ed]:i.NEVER,[od]:i.ALWAYS,[nd]:i.LESS,[xl]:i.LEQUAL,[id]:i.EQUAL,[_l]:i.GEQUAL,[sd]:i.GREATER,[rd]:i.NOTEQUAL};function Tt(R,E){if(E.type===Dn&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===en||E.magFilter===yo||E.magFilter===sr||E.magFilter===Ui||E.minFilter===en||E.minFilter===yo||E.minFilter===sr||E.minFilter===Ui)&&Xt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,nt[E.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,nt[E.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,nt[E.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,ct[E.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,ct[E.minFilter]),E.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,Pt[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Ge||E.minFilter!==sr&&E.minFilter!==Ui||E.type===Dn&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const V=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function Z(R,E){let V=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",b));const tt=E.source;let lt=d.get(tt);lt===void 0&&(lt={},d.set(tt,lt));const dt=B(E);if(dt!==R.__cacheKey){lt[dt]===void 0&&(lt[dt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,V=!0),lt[dt].usedTimes++;const St=lt[R.__cacheKey];St!==void 0&&(lt[R.__cacheKey].usedTimes--,St.usedTimes===0&&D(E)),R.__cacheKey=dt,R.__webglTexture=lt[dt].texture}return V}function ht(R,E,V){return Math.floor(Math.floor(R/V)/E)}function at(R,E,V,tt){const dt=R.updateRanges;if(dt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,E.width,E.height,V,tt,E.data);else{dt.sort((Lt,_t)=>Lt.start-_t.start);let St=0;for(let Lt=1;Lt<dt.length;Lt++){const _t=dt[St],Mt=dt[Lt],Yt=_t.start+_t.count,jt=ht(Mt.start,E.width,4),oe=ht(_t.start,E.width,4);Mt.start<=Yt+1&&jt===oe&&ht(Mt.start+Mt.count-1,E.width,4)===jt?_t.count=Math.max(_t.count,Mt.start+Mt.count-_t.start):(++St,dt[St]=Mt)}dt.length=St+1;const K=e.getParameter(i.UNPACK_ROW_LENGTH),it=e.getParameter(i.UNPACK_SKIP_PIXELS),bt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,E.width);for(let Lt=0,_t=dt.length;Lt<_t;Lt++){const Mt=dt[Lt],Yt=Math.floor(Mt.start/4),jt=Math.ceil(Mt.count/4),oe=Yt%E.width,k=Math.floor(Yt/E.width),Et=jt,rt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,oe),e.pixelStorei(i.UNPACK_SKIP_ROWS,k),e.texSubImage2D(i.TEXTURE_2D,0,oe,k,Et,rt,V,tt,E.data)}R.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,K),e.pixelStorei(i.UNPACK_SKIP_PIXELS,it),e.pixelStorei(i.UNPACK_SKIP_ROWS,bt)}}function ut(R,E,V){let tt=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(tt=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(tt=i.TEXTURE_3D);const lt=Z(R,E),dt=E.source;e.bindTexture(tt,R.__webglTexture,i.TEXTURE0+V);const St=n.get(dt);if(dt.version!==St.__version||lt===!0){if(e.activeTexture(i.TEXTURE0+V),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const rt=le.getPrimaries(le.workingColorSpace),Ut=E.colorSpace===vi?null:le.getPrimaries(E.colorSpace),wt=E.colorSpace===vi||rt===Ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt)}e.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment);let it=x(E.image,!1,s.maxTextureSize);it=mt(E,it);const bt=r.convert(E.format,E.colorSpace),Lt=r.convert(E.type);let _t=S(E.internalFormat,bt,Lt,E.normalized,E.colorSpace,E.isVideoTexture);Tt(tt,E);let Mt;const Yt=E.mipmaps,jt=E.isVideoTexture!==!0,oe=St.__version===void 0||lt===!0,k=dt.dataReady,Et=w(E,it);if(E.isDepthTexture)_t=P(E.format===Mi,E.type),oe&&(jt?e.texStorage2D(i.TEXTURE_2D,1,_t,it.width,it.height):e.texImage2D(i.TEXTURE_2D,0,_t,it.width,it.height,0,bt,Lt,null));else if(E.isDataTexture)if(Yt.length>0){jt&&oe&&e.texStorage2D(i.TEXTURE_2D,Et,_t,Yt[0].width,Yt[0].height);for(let rt=0,Ut=Yt.length;rt<Ut;rt++)Mt=Yt[rt],jt?k&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,Mt.width,Mt.height,bt,Lt,Mt.data):e.texImage2D(i.TEXTURE_2D,rt,_t,Mt.width,Mt.height,0,bt,Lt,Mt.data);E.generateMipmaps=!1}else jt?(oe&&e.texStorage2D(i.TEXTURE_2D,Et,_t,it.width,it.height),k&&at(E,it,bt,Lt)):e.texImage2D(i.TEXTURE_2D,0,_t,it.width,it.height,0,bt,Lt,it.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){jt&&oe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Et,_t,Yt[0].width,Yt[0].height,it.depth);for(let rt=0,Ut=Yt.length;rt<Ut;rt++)if(Mt=Yt[rt],E.format!==Ln)if(bt!==null)if(jt){if(k)if(E.layerUpdates.size>0){const wt=Oc(Mt.width,Mt.height,E.format,E.type);for(const ft of E.layerUpdates){const zt=Mt.data.subarray(ft*wt/Mt.data.BYTES_PER_ELEMENT,(ft+1)*wt/Mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,ft,Mt.width,Mt.height,1,bt,zt)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,0,Mt.width,Mt.height,it.depth,bt,Mt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,rt,_t,Mt.width,Mt.height,it.depth,0,Mt.data,0,0);else Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else jt?k&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,0,Mt.width,Mt.height,it.depth,bt,Lt,Mt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,rt,_t,Mt.width,Mt.height,it.depth,0,bt,Lt,Mt.data)}else{jt&&oe&&e.texStorage2D(i.TEXTURE_2D,Et,_t,Yt[0].width,Yt[0].height);for(let rt=0,Ut=Yt.length;rt<Ut;rt++)Mt=Yt[rt],E.format!==Ln?bt!==null?jt?k&&e.compressedTexSubImage2D(i.TEXTURE_2D,rt,0,0,Mt.width,Mt.height,bt,Mt.data):e.compressedTexImage2D(i.TEXTURE_2D,rt,_t,Mt.width,Mt.height,0,Mt.data):Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):jt?k&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,Mt.width,Mt.height,bt,Lt,Mt.data):e.texImage2D(i.TEXTURE_2D,rt,_t,Mt.width,Mt.height,0,bt,Lt,Mt.data)}else if(E.isDataArrayTexture)if(jt){if(oe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Et,_t,it.width,it.height,it.depth),k)if(E.layerUpdates.size>0){const rt=Oc(it.width,it.height,E.format,E.type);for(const Ut of E.layerUpdates){const wt=it.data.subarray(Ut*rt/it.data.BYTES_PER_ELEMENT,(Ut+1)*rt/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ut,it.width,it.height,1,bt,Lt,wt)}E.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,bt,Lt,it.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,_t,it.width,it.height,it.depth,0,bt,Lt,it.data);else if(E.isData3DTexture)jt?(oe&&e.texStorage3D(i.TEXTURE_3D,Et,_t,it.width,it.height,it.depth),k&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,bt,Lt,it.data)):e.texImage3D(i.TEXTURE_3D,0,_t,it.width,it.height,it.depth,0,bt,Lt,it.data);else if(E.isFramebufferTexture){if(oe)if(jt)e.texStorage2D(i.TEXTURE_2D,Et,_t,it.width,it.height);else{let rt=it.width,Ut=it.height;for(let wt=0;wt<Et;wt++)e.texImage2D(i.TEXTURE_2D,wt,_t,rt,Ut,0,bt,Lt,null),rt>>=1,Ut>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in i){const rt=i.canvas;if(rt.hasAttribute("layoutsubtree")||rt.setAttribute("layoutsubtree","true"),it.parentNode!==rt){rt.appendChild(it),f.add(E),rt.onpaint=Kt=>{const Ce=Kt.changedElements;for(const pe of f)Ce.includes(pe.image)&&(pe.needsUpdate=!0)},rt.requestPaint();return}const Ut=0,wt=i.RGBA,ft=i.RGBA,zt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,Ut,wt,ft,zt,it),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Yt.length>0){if(jt&&oe){const rt=se(Yt[0]);e.texStorage2D(i.TEXTURE_2D,Et,_t,rt.width,rt.height)}for(let rt=0,Ut=Yt.length;rt<Ut;rt++)Mt=Yt[rt],jt?k&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,bt,Lt,Mt):e.texImage2D(i.TEXTURE_2D,rt,_t,bt,Lt,Mt);E.generateMipmaps=!1}else if(jt){if(oe){const rt=se(it);e.texStorage2D(i.TEXTURE_2D,Et,_t,rt.width,rt.height)}k&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,bt,Lt,it)}else e.texImage2D(i.TEXTURE_2D,0,_t,bt,Lt,it);p(E)&&g(tt),St.__version=dt.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function vt(R,E,V){if(E.image.length!==6)return;const tt=Z(R,E),lt=E.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+V);const dt=n.get(lt);if(lt.version!==dt.__version||tt===!0){e.activeTexture(i.TEXTURE0+V);const St=le.getPrimaries(le.workingColorSpace),K=E.colorSpace===vi?null:le.getPrimaries(E.colorSpace),it=E.colorSpace===vi||St===K?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);const bt=E.isCompressedTexture||E.image[0].isCompressedTexture,Lt=E.image[0]&&E.image[0].isDataTexture,_t=[];for(let ft=0;ft<6;ft++)!bt&&!Lt?_t[ft]=x(E.image[ft],!0,s.maxCubemapSize):_t[ft]=Lt?E.image[ft].image:E.image[ft],_t[ft]=mt(E,_t[ft]);const Mt=_t[0],Yt=r.convert(E.format,E.colorSpace),jt=r.convert(E.type),oe=S(E.internalFormat,Yt,jt,E.normalized,E.colorSpace),k=E.isVideoTexture!==!0,Et=dt.__version===void 0||tt===!0,rt=lt.dataReady;let Ut=w(E,Mt);Tt(i.TEXTURE_CUBE_MAP,E);let wt;if(bt){k&&Et&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Ut,oe,Mt.width,Mt.height);for(let ft=0;ft<6;ft++){wt=_t[ft].mipmaps;for(let zt=0;zt<wt.length;zt++){const Kt=wt[zt];E.format!==Ln?Yt!==null?k?rt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,zt,0,0,Kt.width,Kt.height,Yt,Kt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,zt,oe,Kt.width,Kt.height,0,Kt.data):Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,zt,0,0,Kt.width,Kt.height,Yt,jt,Kt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,zt,oe,Kt.width,Kt.height,0,Yt,jt,Kt.data)}}}else{if(wt=E.mipmaps,k&&Et){wt.length>0&&Ut++;const ft=se(_t[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Ut,oe,ft.width,ft.height)}for(let ft=0;ft<6;ft++)if(Lt){k?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,_t[ft].width,_t[ft].height,Yt,jt,_t[ft].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,oe,_t[ft].width,_t[ft].height,0,Yt,jt,_t[ft].data);for(let zt=0;zt<wt.length;zt++){const Ce=wt[zt].image[ft].image;k?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,zt+1,0,0,Ce.width,Ce.height,Yt,jt,Ce.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,zt+1,oe,Ce.width,Ce.height,0,Yt,jt,Ce.data)}}else{k?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,Yt,jt,_t[ft]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,oe,Yt,jt,_t[ft]);for(let zt=0;zt<wt.length;zt++){const Kt=wt[zt];k?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,zt+1,0,0,Yt,jt,Kt.image[ft]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,zt+1,oe,Yt,jt,Kt.image[ft])}}}p(E)&&g(i.TEXTURE_CUBE_MAP),dt.__version=lt.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function pt(R,E,V,tt,lt,dt){const St=r.convert(V.format,V.colorSpace),K=r.convert(V.type),it=S(V.internalFormat,St,K,V.normalized,V.colorSpace),bt=n.get(E),Lt=n.get(V);if(Lt.__renderTarget=E,!bt.__hasExternalTextures){const _t=Math.max(1,E.width>>dt),Mt=Math.max(1,E.height>>dt);lt===i.TEXTURE_3D||lt===i.TEXTURE_2D_ARRAY?e.texImage3D(lt,dt,it,_t,Mt,E.depth,0,St,K,null):e.texImage2D(lt,dt,it,_t,Mt,0,St,K,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),Nt(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,tt,lt,Lt.__webglTexture,0,Gt(E)):(lt===i.TEXTURE_2D||lt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&lt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,tt,lt,Lt.__webglTexture,dt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function It(R,E,V){if(i.bindRenderbuffer(i.RENDERBUFFER,R),E.depthBuffer){const tt=E.depthTexture,lt=tt&&tt.isDepthTexture?tt.type:null,dt=P(E.stencilBuffer,lt),St=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Nt(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Gt(E),dt,E.width,E.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,Gt(E),dt,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,dt,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,St,i.RENDERBUFFER,R)}else{const tt=E.textures;for(let lt=0;lt<tt.length;lt++){const dt=tt[lt],St=r.convert(dt.format,dt.colorSpace),K=r.convert(dt.type),it=S(dt.internalFormat,St,K,dt.normalized,dt.colorSpace);Nt(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Gt(E),it,E.width,E.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,Gt(E),it,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,it,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function At(R,E,V){const tt=E.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const lt=n.get(E.depthTexture);if(lt.__renderTarget=E,(!lt.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),tt){if(lt.__webglInit===void 0&&(lt.__webglInit=!0,E.depthTexture.addEventListener("dispose",b)),lt.__webglTexture===void 0){lt.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,lt.__webglTexture),Tt(i.TEXTURE_CUBE_MAP,E.depthTexture);const bt=r.convert(E.depthTexture.format),Lt=r.convert(E.depthTexture.type);let _t;E.depthTexture.format===ai?_t=i.DEPTH_COMPONENT24:E.depthTexture.format===Mi&&(_t=i.DEPTH24_STENCIL8);for(let Mt=0;Mt<6;Mt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,_t,E.width,E.height,0,bt,Lt,null)}}else W(E.depthTexture,0);const dt=lt.__webglTexture,St=Gt(E),K=tt?i.TEXTURE_CUBE_MAP_POSITIVE_X+V:i.TEXTURE_2D,it=E.depthTexture.format===Mi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(E.depthTexture.format===ai)Nt(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,it,K,dt,0,St):i.framebufferTexture2D(i.FRAMEBUFFER,it,K,dt,0);else if(E.depthTexture.format===Mi)Nt(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,it,K,dt,0,St):i.framebufferTexture2D(i.FRAMEBUFFER,it,K,dt,0);else throw new Error("Unknown depthTexture format")}function Q(R){const E=n.get(R),V=R.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==R.depthTexture){const tt=R.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),tt){const lt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,tt.removeEventListener("dispose",lt)};tt.addEventListener("dispose",lt),E.__depthDisposeCallback=lt}E.__boundDepthTexture=tt}if(R.depthTexture&&!E.__autoAllocateDepthBuffer)if(V)for(let tt=0;tt<6;tt++)At(E.__webglFramebuffer[tt],R,tt);else{const tt=R.texture.mipmaps;tt&&tt.length>0?At(E.__webglFramebuffer[0],R,0):At(E.__webglFramebuffer,R,0)}else if(V){E.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[tt]),E.__webglDepthbuffer[tt]===void 0)E.__webglDepthbuffer[tt]=i.createRenderbuffer(),It(E.__webglDepthbuffer[tt],R,!1);else{const lt=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=E.__webglDepthbuffer[tt];i.bindRenderbuffer(i.RENDERBUFFER,dt),i.framebufferRenderbuffer(i.FRAMEBUFFER,lt,i.RENDERBUFFER,dt)}}else{const tt=R.texture.mipmaps;if(tt&&tt.length>0?e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),It(E.__webglDepthbuffer,R,!1);else{const lt=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,dt),i.framebufferRenderbuffer(i.FRAMEBUFFER,lt,i.RENDERBUFFER,dt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function J(R,E,V){const tt=n.get(R);E!==void 0&&pt(tt.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&Q(R)}function $(R){const E=R.texture,V=n.get(R),tt=n.get(E);R.addEventListener("dispose",M);const lt=R.textures,dt=R.isWebGLCubeRenderTarget===!0,St=lt.length>1;if(St||(tt.__webglTexture===void 0&&(tt.__webglTexture=i.createTexture()),tt.__version=E.version,o.memory.textures++),dt){V.__webglFramebuffer=[];for(let K=0;K<6;K++)if(E.mipmaps&&E.mipmaps.length>0){V.__webglFramebuffer[K]=[];for(let it=0;it<E.mipmaps.length;it++)V.__webglFramebuffer[K][it]=i.createFramebuffer()}else V.__webglFramebuffer[K]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){V.__webglFramebuffer=[];for(let K=0;K<E.mipmaps.length;K++)V.__webglFramebuffer[K]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(St)for(let K=0,it=lt.length;K<it;K++){const bt=n.get(lt[K]);bt.__webglTexture===void 0&&(bt.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&Nt(R)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let K=0;K<lt.length;K++){const it=lt[K];V.__webglColorRenderbuffer[K]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[K]);const bt=r.convert(it.format,it.colorSpace),Lt=r.convert(it.type),_t=S(it.internalFormat,bt,Lt,it.normalized,it.colorSpace,R.isXRRenderTarget===!0),Mt=Gt(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Mt,_t,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+K,i.RENDERBUFFER,V.__webglColorRenderbuffer[K])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),It(V.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(dt){e.bindTexture(i.TEXTURE_CUBE_MAP,tt.__webglTexture),Tt(i.TEXTURE_CUBE_MAP,E);for(let K=0;K<6;K++)if(E.mipmaps&&E.mipmaps.length>0)for(let it=0;it<E.mipmaps.length;it++)pt(V.__webglFramebuffer[K][it],R,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,it);else pt(V.__webglFramebuffer[K],R,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);p(E)&&g(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(St){for(let K=0,it=lt.length;K<it;K++){const bt=lt[K],Lt=n.get(bt);let _t=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(_t=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(_t,Lt.__webglTexture),Tt(_t,bt),pt(V.__webglFramebuffer,R,bt,i.COLOR_ATTACHMENT0+K,_t,0),p(bt)&&g(_t)}e.unbindTexture()}else{let K=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(K=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(K,tt.__webglTexture),Tt(K,E),E.mipmaps&&E.mipmaps.length>0)for(let it=0;it<E.mipmaps.length;it++)pt(V.__webglFramebuffer[it],R,E,i.COLOR_ATTACHMENT0,K,it);else pt(V.__webglFramebuffer,R,E,i.COLOR_ATTACHMENT0,K,0);p(E)&&g(K),e.unbindTexture()}R.depthBuffer&&Q(R)}function et(R){const E=R.textures;for(let V=0,tt=E.length;V<tt;V++){const lt=E[V];if(p(lt)){const dt=y(R),St=n.get(lt).__webglTexture;e.bindTexture(dt,St),g(dt),e.unbindTexture()}}}const yt=[],kt=[];function z(R){if(R.samples>0){if(Nt(R)===!1){const E=R.textures,V=R.width,tt=R.height;let lt=i.COLOR_BUFFER_BIT;const dt=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,St=n.get(R),K=E.length>1;if(K)for(let bt=0;bt<E.length;bt++)e.bindFramebuffer(i.FRAMEBUFFER,St.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,St.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,St.__webglMultisampledFramebuffer);const it=R.texture.mipmaps;it&&it.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let bt=0;bt<E.length;bt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(lt|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(lt|=i.STENCIL_BUFFER_BIT)),K){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,St.__webglColorRenderbuffer[bt]);const Lt=n.get(E[bt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Lt,0)}i.blitFramebuffer(0,0,V,tt,0,0,V,tt,lt,i.NEAREST),c===!0&&(yt.length=0,kt.length=0,yt.push(i.COLOR_ATTACHMENT0+bt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(yt.push(dt),kt.push(dt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,kt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,yt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),K)for(let bt=0;bt<E.length;bt++){e.bindFramebuffer(i.FRAMEBUFFER,St.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,St.__webglColorRenderbuffer[bt]);const Lt=n.get(E[bt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,St.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,Lt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){const E=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function Gt(R){return Math.min(s.maxSamples,R.samples)}function Nt(R){const E=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Wt(R){const E=o.render.frame;u.get(R)!==E&&(u.set(R,E),R.update())}function mt(R,E){const V=R.colorSpace,tt=R.format,lt=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||V!==Qr&&V!==vi&&(le.getTransfer(V)===de?(tt!==Ln||lt!==xn)&&Xt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ae("WebGLTextures: Unsupported texture color space:",V)),E}function se(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=O,this.resetTextureUnits=U,this.getTextureUnits=F,this.setTextureUnits=L,this.setTexture2D=W,this.setTexture2DArray=G,this.setTexture3D=q,this.setTextureCube=st,this.rebindTextures=J,this.setupRenderTarget=$,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=z,this.setupDepthRenderbuffer=Q,this.setupFrameBufferTexture=pt,this.useMultisampledRTT=Nt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function kx(i,t){function e(n,s=vi){let r;const o=le.getTransfer(s);if(n===xn)return i.UNSIGNED_BYTE;if(n===ul)return i.UNSIGNED_SHORT_4_4_4_4;if(n===dl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Lh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Nh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ih)return i.BYTE;if(n===Dh)return i.SHORT;if(n===Ys)return i.UNSIGNED_SHORT;if(n===hl)return i.INT;if(n===Wn)return i.UNSIGNED_INT;if(n===Dn)return i.FLOAT;if(n===bn)return i.HALF_FLOAT;if(n===Uh)return i.ALPHA;if(n===Fh)return i.RGB;if(n===Ln)return i.RGBA;if(n===ai)return i.DEPTH_COMPONENT;if(n===Mi)return i.DEPTH_STENCIL;if(n===fl)return i.RED;if(n===pl)return i.RED_INTEGER;if(n===ki)return i.RG;if(n===ml)return i.RG_INTEGER;if(n===gl)return i.RGBA_INTEGER;if(n===Hr||n===Wr||n===Xr||n===Yr)if(o===de)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Hr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Yr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Hr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Wr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Xr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Yr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ga||n===xa||n===_a||n===va)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ga)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===xa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===_a)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===va)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ya||n===Ma||n===Sa||n===Ea||n===ba||n===$r||n===wa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ya||n===Ma)return o===de?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Sa)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ea)return r.COMPRESSED_R11_EAC;if(n===ba)return r.COMPRESSED_SIGNED_R11_EAC;if(n===$r)return r.COMPRESSED_RG11_EAC;if(n===wa)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ta||n===Aa||n===Pa||n===Ca||n===Ra||n===Ia||n===Da||n===La||n===Na||n===Ua||n===Fa||n===Oa||n===Ba||n===za)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ta)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Aa)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Pa)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ca)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ra)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ia)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Da)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===La)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Na)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ua)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Fa)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Oa)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ba)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===za)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ka||n===Va||n===Ga)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ka)return o===de?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Va)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ga)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ha||n===Wa||n===Kr||n===Xa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ha)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Wa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Kr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Xa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ms?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const Vx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Gx=`
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

}`;class Hx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Xh(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Ze({vertexShader:Vx,fragmentShader:Gx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new xt(new ys(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Wx extends wi{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,f=null,h=null,d=null,m=null;const _=typeof XRWebGLBinding<"u",x=new Hx,p={},g=e.getContextAttributes();let y=null,S=null;const P=[],w=[],b=new gt;let M=null;const A=new En;A.viewport=new Pe;const D=new En;D.viewport=new Pe;const T=[A,D],I=new Kf;let U=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ht=P[Z];return ht===void 0&&(ht=new To,P[Z]=ht),ht.getTargetRaySpace()},this.getControllerGrip=function(Z){let ht=P[Z];return ht===void 0&&(ht=new To,P[Z]=ht),ht.getGripSpace()},this.getHand=function(Z){let ht=P[Z];return ht===void 0&&(ht=new To,P[Z]=ht),ht.getHandSpace()};function L(Z){const ht=w.indexOf(Z.inputSource);if(ht===-1)return;const at=P[ht];at!==void 0&&(at.update(Z.inputSource,Z.frame,l||o),at.dispatchEvent({type:Z.type,data:Z.inputSource}))}function O(){s.removeEventListener("select",L),s.removeEventListener("selectstart",L),s.removeEventListener("selectend",L),s.removeEventListener("squeeze",L),s.removeEventListener("squeezestart",L),s.removeEventListener("squeezeend",L),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",B);for(let Z=0;Z<P.length;Z++){const ht=w[Z];ht!==null&&(w[Z]=null,P[Z].disconnect(ht))}U=null,F=null,x.reset();for(const Z in p)delete p[Z];t.setRenderTarget(y),d=null,h=null,f=null,s=null,S=null,Tt.stop(),n.isPresenting=!1,t.setPixelRatio(M),t.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&Xt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&Xt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(y=t.getRenderTarget(),s.addEventListener("select",L),s.addEventListener("selectstart",L),s.addEventListener("selectend",L),s.addEventListener("squeeze",L),s.addEventListener("squeezestart",L),s.addEventListener("squeezeend",L),s.addEventListener("end",O),s.addEventListener("inputsourceschange",B),g.xrCompatible!==!0&&await e.makeXRCompatible(),M=t.getPixelRatio(),t.getSize(b),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let at=null,ut=null,vt=null;g.depth&&(vt=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,at=g.stencil?Mi:ai,ut=g.stencil?ms:Wn);const pt={colorFormat:e.RGBA8,depthFormat:vt,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(pt),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),S=new vn(h.textureWidth,h.textureHeight,{format:Ln,type:xn,depthTexture:new Vi(h.textureWidth,h.textureHeight,ut,void 0,void 0,void 0,void 0,void 0,void 0,at),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const at={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,at),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new vn(d.framebufferWidth,d.framebufferHeight,{format:Ln,type:xn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Tt.setContext(s),Tt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function B(Z){for(let ht=0;ht<Z.removed.length;ht++){const at=Z.removed[ht],ut=w.indexOf(at);ut>=0&&(w[ut]=null,P[ut].disconnect(at))}for(let ht=0;ht<Z.added.length;ht++){const at=Z.added[ht];let ut=w.indexOf(at);if(ut===-1){for(let pt=0;pt<P.length;pt++)if(pt>=w.length){w.push(at),ut=pt;break}else if(w[pt]===null){w[pt]=at,ut=pt;break}if(ut===-1)break}const vt=P[ut];vt&&vt.connect(at)}}const W=new N,G=new N;function q(Z,ht,at){W.setFromMatrixPosition(ht.matrixWorld),G.setFromMatrixPosition(at.matrixWorld);const ut=W.distanceTo(G),vt=ht.projectionMatrix.elements,pt=at.projectionMatrix.elements,It=vt[14]/(vt[10]-1),At=vt[14]/(vt[10]+1),Q=(vt[9]+1)/vt[5],J=(vt[9]-1)/vt[5],$=(vt[8]-1)/vt[0],et=(pt[8]+1)/pt[0],yt=It*$,kt=It*et,z=ut/(-$+et),Gt=z*-$;if(ht.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Gt),Z.translateZ(z),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),vt[10]===-1)Z.projectionMatrix.copy(ht.projectionMatrix),Z.projectionMatrixInverse.copy(ht.projectionMatrixInverse);else{const Nt=It+z,Wt=At+z,mt=yt-Gt,se=kt+(ut-Gt),R=Q*At/Wt*Nt,E=J*At/Wt*Nt;Z.projectionMatrix.makePerspective(mt,se,R,E,Nt,Wt),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function st(Z,ht){ht===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ht.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let ht=Z.near,at=Z.far;x.texture!==null&&(x.depthNear>0&&(ht=x.depthNear),x.depthFar>0&&(at=x.depthFar)),I.near=D.near=A.near=ht,I.far=D.far=A.far=at,(U!==I.near||F!==I.far)&&(s.updateRenderState({depthNear:I.near,depthFar:I.far}),U=I.near,F=I.far),I.layers.mask=Z.layers.mask|6,A.layers.mask=I.layers.mask&-5,D.layers.mask=I.layers.mask&-3;const ut=Z.parent,vt=I.cameras;st(I,ut);for(let pt=0;pt<vt.length;pt++)st(vt[pt],ut);vt.length===2?q(I,A,D):I.projectionMatrix.copy(A.projectionMatrix),nt(Z,I,ut)};function nt(Z,ht,at){at===null?Z.matrix.copy(ht.matrixWorld):(Z.matrix.copy(at.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ht.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ht.projectionMatrix),Z.projectionMatrixInverse.copy(ht.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=js*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(h===null&&d===null))return c},this.setFoveation=function(Z){c=Z,h!==null&&(h.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(I)},this.getCameraTexture=function(Z){return p[Z]};let ct=null;function Pt(Z,ht){if(u=ht.getViewerPose(l||o),m=ht,u!==null){const at=u.views;d!==null&&(t.setRenderTargetFramebuffer(S,d.framebuffer),t.setRenderTarget(S));let ut=!1;at.length!==I.cameras.length&&(I.cameras.length=0,ut=!0);for(let At=0;At<at.length;At++){const Q=at[At];let J=null;if(d!==null)J=d.getViewport(Q);else{const et=f.getViewSubImage(h,Q);J=et.viewport,At===0&&(t.setRenderTargetTextures(S,et.colorTexture,et.depthStencilTexture),t.setRenderTarget(S))}let $=T[At];$===void 0&&($=new En,$.layers.enable(At),$.viewport=new Pe,T[At]=$),$.matrix.fromArray(Q.transform.matrix),$.matrix.decompose($.position,$.quaternion,$.scale),$.projectionMatrix.fromArray(Q.projectionMatrix),$.projectionMatrixInverse.copy($.projectionMatrix).invert(),$.viewport.set(J.x,J.y,J.width,J.height),At===0&&(I.matrix.copy($.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),ut===!0&&I.cameras.push($)}const vt=s.enabledFeatures;if(vt&&vt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){f=n.getBinding();const At=f.getDepthInformation(at[0]);At&&At.isValid&&At.texture&&x.init(At,s.renderState)}if(vt&&vt.includes("camera-access")&&_){t.state.unbindTexture(),f=n.getBinding();for(let At=0;At<at.length;At++){const Q=at[At].camera;if(Q){let J=p[Q];J||(J=new Xh,p[Q]=J);const $=f.getCameraImage(Q);J.sourceTexture=$}}}}for(let at=0;at<P.length;at++){const ut=w[at],vt=P[at];ut!==null&&vt!==void 0&&vt.update(ut,ht,l||o)}ct&&ct(Z,ht),ht.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ht}),m=null}const Tt=new ou;Tt.setAnimationLoop(Pt),this.setAnimationLoop=function(Z){ct=Z},this.dispose=function(){}}}const Xx=new xe,fu=new $t;fu.set(-1,0,0,0,1,0,0,0,1);function Yx(i,t){function e(x,p){x.matrixAutoUpdate===!0&&x.updateMatrix(),p.value.copy(x.matrix)}function n(x,p){p.color.getRGB(x.fogColor.value,tu(i)),p.isFog?(x.fogNear.value=p.near,x.fogFar.value=p.far):p.isFogExp2&&(x.fogDensity.value=p.density)}function s(x,p,g,y,S){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(x,p):p.isMeshLambertMaterial?(r(x,p),p.envMap&&(x.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(x,p),f(x,p)):p.isMeshPhongMaterial?(r(x,p),u(x,p),p.envMap&&(x.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(x,p),h(x,p),p.isMeshPhysicalMaterial&&d(x,p,S)):p.isMeshMatcapMaterial?(r(x,p),m(x,p)):p.isMeshDepthMaterial?r(x,p):p.isMeshDistanceMaterial?(r(x,p),_(x,p)):p.isMeshNormalMaterial?r(x,p):p.isLineBasicMaterial?(o(x,p),p.isLineDashedMaterial&&a(x,p)):p.isPointsMaterial?c(x,p,g,y):p.isSpriteMaterial?l(x,p):p.isShadowMaterial?(x.color.value.copy(p.color),x.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(x,p){x.opacity.value=p.opacity,p.color&&x.diffuse.value.copy(p.color),p.emissive&&x.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(x.map.value=p.map,e(p.map,x.mapTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,e(p.alphaMap,x.alphaMapTransform)),p.bumpMap&&(x.bumpMap.value=p.bumpMap,e(p.bumpMap,x.bumpMapTransform),x.bumpScale.value=p.bumpScale,p.side===dn&&(x.bumpScale.value*=-1)),p.normalMap&&(x.normalMap.value=p.normalMap,e(p.normalMap,x.normalMapTransform),x.normalScale.value.copy(p.normalScale),p.side===dn&&x.normalScale.value.negate()),p.displacementMap&&(x.displacementMap.value=p.displacementMap,e(p.displacementMap,x.displacementMapTransform),x.displacementScale.value=p.displacementScale,x.displacementBias.value=p.displacementBias),p.emissiveMap&&(x.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,x.emissiveMapTransform)),p.specularMap&&(x.specularMap.value=p.specularMap,e(p.specularMap,x.specularMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest);const g=t.get(p),y=g.envMap,S=g.envMapRotation;y&&(x.envMap.value=y,x.envMapRotation.value.setFromMatrix4(Xx.makeRotationFromEuler(S)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(fu),x.reflectivity.value=p.reflectivity,x.ior.value=p.ior,x.refractionRatio.value=p.refractionRatio),p.lightMap&&(x.lightMap.value=p.lightMap,x.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,x.lightMapTransform)),p.aoMap&&(x.aoMap.value=p.aoMap,x.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,x.aoMapTransform))}function o(x,p){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,p.map&&(x.map.value=p.map,e(p.map,x.mapTransform))}function a(x,p){x.dashSize.value=p.dashSize,x.totalSize.value=p.dashSize+p.gapSize,x.scale.value=p.scale}function c(x,p,g,y){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,x.size.value=p.size*g,x.scale.value=y*.5,p.map&&(x.map.value=p.map,e(p.map,x.uvTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,e(p.alphaMap,x.alphaMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest)}function l(x,p){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,x.rotation.value=p.rotation,p.map&&(x.map.value=p.map,e(p.map,x.mapTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,e(p.alphaMap,x.alphaMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest)}function u(x,p){x.specular.value.copy(p.specular),x.shininess.value=Math.max(p.shininess,1e-4)}function f(x,p){p.gradientMap&&(x.gradientMap.value=p.gradientMap)}function h(x,p){x.metalness.value=p.metalness,p.metalnessMap&&(x.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,x.metalnessMapTransform)),x.roughness.value=p.roughness,p.roughnessMap&&(x.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,x.roughnessMapTransform)),p.envMap&&(x.envMapIntensity.value=p.envMapIntensity)}function d(x,p,g){x.ior.value=p.ior,p.sheen>0&&(x.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),x.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(x.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,x.sheenColorMapTransform)),p.sheenRoughnessMap&&(x.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,x.sheenRoughnessMapTransform))),p.clearcoat>0&&(x.clearcoat.value=p.clearcoat,x.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(x.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,x.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(x.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===dn&&x.clearcoatNormalScale.value.negate())),p.dispersion>0&&(x.dispersion.value=p.dispersion),p.iridescence>0&&(x.iridescence.value=p.iridescence,x.iridescenceIOR.value=p.iridescenceIOR,x.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(x.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,x.iridescenceMapTransform)),p.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),p.transmission>0&&(x.transmission.value=p.transmission,x.transmissionSamplerMap.value=g.texture,x.transmissionSamplerSize.value.set(g.width,g.height),p.transmissionMap&&(x.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,x.transmissionMapTransform)),x.thickness.value=p.thickness,p.thicknessMap&&(x.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=p.attenuationDistance,x.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(x.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(x.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=p.specularIntensity,x.specularColor.value.copy(p.specularColor),p.specularColorMap&&(x.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,x.specularColorMapTransform)),p.specularIntensityMap&&(x.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,x.specularIntensityMapTransform))}function m(x,p){p.matcap&&(x.matcap.value=p.matcap)}function _(x,p){const g=t.get(p).light;x.referencePosition.value.setFromMatrixPosition(g.matrixWorld),x.nearDistance.value=g.shadow.camera.near,x.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function qx(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(g,y){const S=y.program;n.uniformBlockBinding(g,S)}function l(g,y){let S=s[g.id];S===void 0&&(m(g),S=u(g),s[g.id]=S,g.addEventListener("dispose",x));const P=y.program;n.updateUBOMapping(g,P);const w=t.render.frame;r[g.id]!==w&&(h(g),r[g.id]=w)}function u(g){const y=f();g.__bindingPointIndex=y;const S=i.createBuffer(),P=g.__size,w=g.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,P,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,S),S}function f(){for(let g=0;g<a;g++)if(o.indexOf(g)===-1)return o.push(g),g;return ae("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(g){const y=s[g.id],S=g.uniforms,P=g.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let w=0,b=S.length;w<b;w++){const M=Array.isArray(S[w])?S[w]:[S[w]];for(let A=0,D=M.length;A<D;A++){const T=M[A];if(d(T,w,A,P)===!0){const I=T.__offset,U=Array.isArray(T.value)?T.value:[T.value];let F=0;for(let L=0;L<U.length;L++){const O=U[L],B=_(O);typeof O=="number"||typeof O=="boolean"?(T.__data[0]=O,i.bufferSubData(i.UNIFORM_BUFFER,I+F,T.__data)):O.isMatrix3?(T.__data[0]=O.elements[0],T.__data[1]=O.elements[1],T.__data[2]=O.elements[2],T.__data[3]=0,T.__data[4]=O.elements[3],T.__data[5]=O.elements[4],T.__data[6]=O.elements[5],T.__data[7]=0,T.__data[8]=O.elements[6],T.__data[9]=O.elements[7],T.__data[10]=O.elements[8],T.__data[11]=0):ArrayBuffer.isView(O)?T.__data.set(new O.constructor(O.buffer,O.byteOffset,T.__data.length)):(O.toArray(T.__data,F),F+=B.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,I,T.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(g,y,S,P){const w=g.value,b=y+"_"+S;if(P[b]===void 0)return typeof w=="number"||typeof w=="boolean"?P[b]=w:ArrayBuffer.isView(w)?P[b]=w.slice():P[b]=w.clone(),!0;{const M=P[b];if(typeof w=="number"||typeof w=="boolean"){if(M!==w)return P[b]=w,!0}else{if(ArrayBuffer.isView(w))return!0;if(M.equals(w)===!1)return M.copy(w),!0}}return!1}function m(g){const y=g.uniforms;let S=0;const P=16;for(let b=0,M=y.length;b<M;b++){const A=Array.isArray(y[b])?y[b]:[y[b]];for(let D=0,T=A.length;D<T;D++){const I=A[D],U=Array.isArray(I.value)?I.value:[I.value];for(let F=0,L=U.length;F<L;F++){const O=U[F],B=_(O),W=S%P,G=W%B.boundary,q=W+G;S+=G,q!==0&&P-q<B.storage&&(S+=P-q),I.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=S,S+=B.storage}}}const w=S%P;return w>0&&(S+=P-w),g.__size=S,g.__cache={},this}function _(g){const y={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(y.boundary=4,y.storage=4):g.isVector2?(y.boundary=8,y.storage=8):g.isVector3||g.isColor?(y.boundary=16,y.storage=12):g.isVector4?(y.boundary=16,y.storage=16):g.isMatrix3?(y.boundary=48,y.storage=48):g.isMatrix4?(y.boundary=64,y.storage=64):g.isTexture?Xt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(g)?(y.boundary=16,y.storage=g.byteLength):Xt("WebGLRenderer: Unsupported uniform value type.",g),y}function x(g){const y=g.target;y.removeEventListener("dispose",x);const S=o.indexOf(y.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(const g in s)i.deleteBuffer(s[g]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}const jx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let On=null;function Zx(){return On===null&&(On=new Hh(jx,16,16,ki,bn),On.name="DFG_LUT",On.minFilter=en,On.magFilter=en,On.wrapS=ei,On.wrapT=ei,On.generateMipmaps=!1,On.needsUpdate=!0),On}class $x{constructor(t={}){const{canvas:e=cd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:d=xn}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;const _=d,x=new Set([gl,ml,pl]),p=new Set([xn,Wn,Ys,ms,ul,dl]),g=new Uint32Array(4),y=new Int32Array(4),S=new N;let P=null,w=null;const b=[],M=[];let A=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Gn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let T=!1,I=null;this._outputColorSpace=Sn;let U=0,F=0,L=null,O=-1,B=null;const W=new Pe,G=new Pe;let q=null;const st=new ee(0);let nt=0,ct=e.width,Pt=e.height,Tt=1,Z=null,ht=null;const at=new Pe(0,0,ct,Pt),ut=new Pe(0,0,ct,Pt);let vt=!1;const pt=new Sl;let It=!1,At=!1;const Q=new xe,J=new N,$=new Pe,et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let yt=!1;function kt(){return L===null?Tt:1}let z=n;function Gt(C,H){return e.getContext(C,H)}try{const C={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${nl}`),e.addEventListener("webglcontextlost",ft,!1),e.addEventListener("webglcontextrestored",zt,!1),e.addEventListener("webglcontextcreationerror",Kt,!1),z===null){const H="webgl2";if(z=Gt(H,C),z===null)throw Gt(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw ae("WebGLRenderer: "+C.message),C}let Nt,Wt,mt,se,R,E,V,tt,lt,dt,St,K,it,bt,Lt,_t,Mt,Yt,jt,oe,k,Et,rt;function Ut(){Nt=new Zg(z),Nt.init(),k=new kx(z,Nt),Wt=new Vg(z,Nt,t,k),mt=new Bx(z,Nt),Wt.reversedDepthBuffer&&h&&mt.buffers.depth.setReversed(!0),se=new Jg(z),R=new bx,E=new zx(z,Nt,mt,R,Wt,k,se),V=new jg(D),tt=new np(z),Et=new zg(z,tt),lt=new $g(z,tt,se,Et),dt=new t0(z,lt,tt,Et,se),Yt=new Qg(z,Wt,E),Lt=new Gg(R),St=new Ex(D,V,Nt,Wt,Et,Lt),K=new Yx(D,R),it=new Tx,bt=new Dx(Nt),Mt=new Bg(D,V,mt,dt,m,c),_t=new Ox(D,dt,Wt),rt=new qx(z,se,Wt,mt),jt=new kg(z,Nt,se),oe=new Kg(z,Nt,se),se.programs=St.programs,D.capabilities=Wt,D.extensions=Nt,D.properties=R,D.renderLists=it,D.shadowMap=_t,D.state=mt,D.info=se}Ut(),_!==xn&&(A=new n0(_,e.width,e.height,s,r));const wt=new Wx(D,z);this.xr=wt,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const C=Nt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Nt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Tt},this.setPixelRatio=function(C){C!==void 0&&(Tt=C,this.setSize(ct,Pt,!1))},this.getSize=function(C){return C.set(ct,Pt)},this.setSize=function(C,H,j=!0){if(wt.isPresenting){Xt("WebGLRenderer: Can't change size while VR device is presenting.");return}ct=C,Pt=H,e.width=Math.floor(C*Tt),e.height=Math.floor(H*Tt),j===!0&&(e.style.width=C+"px",e.style.height=H+"px"),A!==null&&A.setSize(e.width,e.height),this.setViewport(0,0,C,H)},this.getDrawingBufferSize=function(C){return C.set(ct*Tt,Pt*Tt).floor()},this.setDrawingBufferSize=function(C,H,j){ct=C,Pt=H,Tt=j,e.width=Math.floor(C*j),e.height=Math.floor(H*j),this.setViewport(0,0,C,H)},this.setEffects=function(C){if(_===xn){ae("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let H=0;H<C.length;H++)if(C[H].isOutputPass===!0){Xt("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(W)},this.getViewport=function(C){return C.copy(at)},this.setViewport=function(C,H,j,X){C.isVector4?at.set(C.x,C.y,C.z,C.w):at.set(C,H,j,X),mt.viewport(W.copy(at).multiplyScalar(Tt).round())},this.getScissor=function(C){return C.copy(ut)},this.setScissor=function(C,H,j,X){C.isVector4?ut.set(C.x,C.y,C.z,C.w):ut.set(C,H,j,X),mt.scissor(G.copy(ut).multiplyScalar(Tt).round())},this.getScissorTest=function(){return vt},this.setScissorTest=function(C){mt.setScissorTest(vt=C)},this.setOpaqueSort=function(C){Z=C},this.setTransparentSort=function(C){ht=C},this.getClearColor=function(C){return C.copy(Mt.getClearColor())},this.setClearColor=function(){Mt.setClearColor(...arguments)},this.getClearAlpha=function(){return Mt.getClearAlpha()},this.setClearAlpha=function(){Mt.setClearAlpha(...arguments)},this.clear=function(C=!0,H=!0,j=!0){let X=0;if(C){let Y=!1;if(L!==null){const Dt=L.texture.format;Y=x.has(Dt)}if(Y){const Dt=L.texture.type,Ot=p.has(Dt),Rt=Mt.getClearColor(),Bt=Mt.getClearAlpha(),Vt=Rt.r,Jt=Rt.g,re=Rt.b;Ot?(g[0]=Vt,g[1]=Jt,g[2]=re,g[3]=Bt,z.clearBufferuiv(z.COLOR,0,g)):(y[0]=Vt,y[1]=Jt,y[2]=re,y[3]=Bt,z.clearBufferiv(z.COLOR,0,y))}else X|=z.COLOR_BUFFER_BIT}H&&(X|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),j&&(X|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&z.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),I=C},this.dispose=function(){e.removeEventListener("webglcontextlost",ft,!1),e.removeEventListener("webglcontextrestored",zt,!1),e.removeEventListener("webglcontextcreationerror",Kt,!1),Mt.dispose(),it.dispose(),bt.dispose(),R.dispose(),V.dispose(),dt.dispose(),Et.dispose(),rt.dispose(),St.dispose(),wt.dispose(),wt.removeEventListener("sessionstart",Ol),wt.removeEventListener("sessionend",Bl),Ti.stop()};function ft(C){C.preventDefault(),no("WebGLRenderer: Context Lost."),T=!0}function zt(){no("WebGLRenderer: Context Restored."),T=!1;const C=se.autoReset,H=_t.enabled,j=_t.autoUpdate,X=_t.needsUpdate,Y=_t.type;Ut(),se.autoReset=C,_t.enabled=H,_t.autoUpdate=j,_t.needsUpdate=X,_t.type=Y}function Kt(C){ae("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Ce(C){const H=C.target;H.removeEventListener("dispose",Ce),pe(H)}function pe(C){Yn(C),R.remove(C)}function Yn(C){const H=R.get(C).programs;H!==void 0&&(H.forEach(function(j){St.releaseProgram(j)}),C.isShaderMaterial&&St.releaseShaderCache(C))}this.renderBufferDirect=function(C,H,j,X,Y,Dt){H===null&&(H=et);const Ot=Y.isMesh&&Y.matrixWorld.determinant()<0,Rt=Au(C,H,j,X,Y);mt.setMaterial(X,Ot);let Bt=j.index,Vt=1;if(X.wireframe===!0){if(Bt=lt.getWireframeAttribute(j),Bt===void 0)return;Vt=2}const Jt=j.drawRange,re=j.attributes.position;let Ht=Jt.start*Vt,me=(Jt.start+Jt.count)*Vt;Dt!==null&&(Ht=Math.max(Ht,Dt.start*Vt),me=Math.min(me,(Dt.start+Dt.count)*Vt)),Bt!==null?(Ht=Math.max(Ht,0),me=Math.min(me,Bt.count)):re!=null&&(Ht=Math.max(Ht,0),me=Math.min(me,re.count));const Re=me-Ht;if(Re<0||Re===1/0)return;Et.setup(Y,X,Rt,j,Bt);let Te,_e=jt;if(Bt!==null&&(Te=tt.get(Bt),_e=oe,_e.setIndex(Te)),Y.isMesh)X.wireframe===!0?(mt.setLineWidth(X.wireframeLinewidth*kt()),_e.setMode(z.LINES)):_e.setMode(z.TRIANGLES);else if(Y.isLine){let $e=X.linewidth;$e===void 0&&($e=1),mt.setLineWidth($e*kt()),Y.isLineSegments?_e.setMode(z.LINES):Y.isLineLoop?_e.setMode(z.LINE_LOOP):_e.setMode(z.LINE_STRIP)}else Y.isPoints?_e.setMode(z.POINTS):Y.isSprite&&_e.setMode(z.TRIANGLES);if(Y.isBatchedMesh)if(Nt.get("WEBGL_multi_draw"))_e.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const $e=Y._multiDrawStarts,Ft=Y._multiDrawCounts,fn=Y._multiDrawCount,ce=Bt?tt.get(Bt).bytesPerElement:1,yn=R.get(X).currentProgram.getUniforms();for(let Un=0;Un<fn;Un++)yn.setValue(z,"_gl_DrawID",Un),_e.render($e[Un]/ce,Ft[Un])}else if(Y.isInstancedMesh)_e.renderInstances(Ht,Re,Y.count);else if(j.isInstancedBufferGeometry){const $e=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Ft=Math.min(j.instanceCount,$e);_e.renderInstances(Ht,Re,Ft)}else _e.render(Ht,Re)};function Nn(C,H,j){C.transparent===!0&&C.side===qe&&C.forceSinglePass===!1?(C.side=dn,C.needsUpdate=!0,ir(C,H,j),C.side=bi,C.needsUpdate=!0,ir(C,H,j),C.side=qe):ir(C,H,j)}this.compile=function(C,H,j=null){j===null&&(j=C),w=bt.get(j),w.init(H),M.push(w),j.traverseVisible(function(Y){Y.isLight&&Y.layers.test(H.layers)&&(w.pushLight(Y),Y.castShadow&&w.pushShadow(Y))}),C!==j&&C.traverseVisible(function(Y){Y.isLight&&Y.layers.test(H.layers)&&(w.pushLight(Y),Y.castShadow&&w.pushShadow(Y))}),w.setupLights();const X=new Set;return C.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const Dt=Y.material;if(Dt)if(Array.isArray(Dt))for(let Ot=0;Ot<Dt.length;Ot++){const Rt=Dt[Ot];Nn(Rt,j,Y),X.add(Rt)}else Nn(Dt,j,Y),X.add(Dt)}),w=M.pop(),X},this.compileAsync=function(C,H,j=null){const X=this.compile(C,H,j);return new Promise(Y=>{function Dt(){if(X.forEach(function(Ot){R.get(Ot).currentProgram.isReady()&&X.delete(Ot)}),X.size===0){Y(C);return}setTimeout(Dt,10)}Nt.get("KHR_parallel_shader_compile")!==null?Dt():setTimeout(Dt,10)})};let go=null;function wu(C){go&&go(C)}function Ol(){Ti.stop()}function Bl(){Ti.start()}const Ti=new ou;Ti.setAnimationLoop(wu),typeof self<"u"&&Ti.setContext(self),this.setAnimationLoop=function(C){go=C,wt.setAnimationLoop(C),C===null?Ti.stop():Ti.start()},wt.addEventListener("sessionstart",Ol),wt.addEventListener("sessionend",Bl),this.render=function(C,H){if(H!==void 0&&H.isCamera!==!0){ae("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;I!==null&&I.renderStart(C,H);const j=wt.enabled===!0&&wt.isPresenting===!0,X=A!==null&&(L===null||j)&&A.begin(D,L);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),wt.enabled===!0&&wt.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(wt.cameraAutoUpdate===!0&&wt.updateCamera(H),H=wt.getCamera()),C.isScene===!0&&C.onBeforeRender(D,C,H,L),w=bt.get(C,M.length),w.init(H),w.state.textureUnits=E.getTextureUnits(),M.push(w),Q.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),pt.setFromProjectionMatrix(Q,kn,H.reversedDepth),At=this.localClippingEnabled,It=Lt.init(this.clippingPlanes,At),P=it.get(C,b.length),P.init(),b.push(P),wt.enabled===!0&&wt.isPresenting===!0){const Ot=D.xr.getDepthSensingMesh();Ot!==null&&xo(Ot,H,-1/0,D.sortObjects)}xo(C,H,0,D.sortObjects),P.finish(),D.sortObjects===!0&&P.sort(Z,ht),yt=wt.enabled===!1||wt.isPresenting===!1||wt.hasDepthSensing()===!1,yt&&Mt.addToRenderList(P,C),this.info.render.frame++,It===!0&&Lt.beginShadows();const Y=w.state.shadowsArray;if(_t.render(Y,C,H),It===!0&&Lt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(X&&A.hasRenderPass())===!1){const Ot=P.opaque,Rt=P.transmissive;if(w.setupLights(),H.isArrayCamera){const Bt=H.cameras;if(Rt.length>0)for(let Vt=0,Jt=Bt.length;Vt<Jt;Vt++){const re=Bt[Vt];kl(Ot,Rt,C,re)}yt&&Mt.render(C);for(let Vt=0,Jt=Bt.length;Vt<Jt;Vt++){const re=Bt[Vt];zl(P,C,re,re.viewport)}}else Rt.length>0&&kl(Ot,Rt,C,H),yt&&Mt.render(C),zl(P,C,H)}L!==null&&F===0&&(E.updateMultisampleRenderTarget(L),E.updateRenderTargetMipmap(L)),X&&A.end(D),C.isScene===!0&&C.onAfterRender(D,C,H),Et.resetDefaultState(),O=-1,B=null,M.pop(),M.length>0?(w=M[M.length-1],E.setTextureUnits(w.state.textureUnits),It===!0&&Lt.setGlobalState(D.clippingPlanes,w.state.camera)):w=null,b.pop(),b.length>0?P=b[b.length-1]:P=null,I!==null&&I.renderEnd()};function xo(C,H,j,X){if(C.visible===!1)return;if(C.layers.test(H.layers)){if(C.isGroup)j=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(H);else if(C.isLightProbeGrid)w.pushLightProbeGrid(C);else if(C.isLight)w.pushLight(C),C.castShadow&&w.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||pt.intersectsSprite(C)){X&&$.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Q);const Ot=dt.update(C),Rt=C.material;Rt.visible&&P.push(C,Ot,Rt,j,$.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||pt.intersectsObject(C))){const Ot=dt.update(C),Rt=C.material;if(X&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),$.copy(C.boundingSphere.center)):(Ot.boundingSphere===null&&Ot.computeBoundingSphere(),$.copy(Ot.boundingSphere.center)),$.applyMatrix4(C.matrixWorld).applyMatrix4(Q)),Array.isArray(Rt)){const Bt=Ot.groups;for(let Vt=0,Jt=Bt.length;Vt<Jt;Vt++){const re=Bt[Vt],Ht=Rt[re.materialIndex];Ht&&Ht.visible&&P.push(C,Ot,Ht,j,$.z,re)}}else Rt.visible&&P.push(C,Ot,Rt,j,$.z,null)}}const Dt=C.children;for(let Ot=0,Rt=Dt.length;Ot<Rt;Ot++)xo(Dt[Ot],H,j,X)}function zl(C,H,j,X){const{opaque:Y,transmissive:Dt,transparent:Ot}=C;w.setupLightsView(j),It===!0&&Lt.setGlobalState(D.clippingPlanes,j),X&&mt.viewport(W.copy(X)),Y.length>0&&nr(Y,H,j),Dt.length>0&&nr(Dt,H,j),Ot.length>0&&nr(Ot,H,j),mt.buffers.depth.setTest(!0),mt.buffers.depth.setMask(!0),mt.buffers.color.setMask(!0),mt.setPolygonOffset(!1)}function kl(C,H,j,X){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[X.id]===void 0){const Ht=Nt.has("EXT_color_buffer_half_float")||Nt.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[X.id]=new vn(1,1,{generateMipmaps:!0,type:Ht?bn:xn,minFilter:Ui,samples:Math.max(4,Wt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:le.workingColorSpace})}const Dt=w.state.transmissionRenderTarget[X.id],Ot=X.viewport||W;Dt.setSize(Ot.z*D.transmissionResolutionScale,Ot.w*D.transmissionResolutionScale);const Rt=D.getRenderTarget(),Bt=D.getActiveCubeFace(),Vt=D.getActiveMipmapLevel();D.setRenderTarget(Dt),D.getClearColor(st),nt=D.getClearAlpha(),nt<1&&D.setClearColor(16777215,.5),D.clear(),yt&&Mt.render(j);const Jt=D.toneMapping;D.toneMapping=Gn;const re=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),w.setupLightsView(X),It===!0&&Lt.setGlobalState(D.clippingPlanes,X),nr(C,j,X),E.updateMultisampleRenderTarget(Dt),E.updateRenderTargetMipmap(Dt),Nt.has("WEBGL_multisampled_render_to_texture")===!1){let Ht=!1;for(let me=0,Re=H.length;me<Re;me++){const Te=H[me],{object:_e,geometry:$e,material:Ft,group:fn}=Te;if(Ft.side===qe&&_e.layers.test(X.layers)){const ce=Ft.side;Ft.side=dn,Ft.needsUpdate=!0,Vl(_e,j,X,$e,Ft,fn),Ft.side=ce,Ft.needsUpdate=!0,Ht=!0}}Ht===!0&&(E.updateMultisampleRenderTarget(Dt),E.updateRenderTargetMipmap(Dt))}D.setRenderTarget(Rt,Bt,Vt),D.setClearColor(st,nt),re!==void 0&&(X.viewport=re),D.toneMapping=Jt}function nr(C,H,j){const X=H.isScene===!0?H.overrideMaterial:null;for(let Y=0,Dt=C.length;Y<Dt;Y++){const Ot=C[Y],{object:Rt,geometry:Bt,group:Vt}=Ot;let Jt=Ot.material;Jt.allowOverride===!0&&X!==null&&(Jt=X),Rt.layers.test(j.layers)&&Vl(Rt,H,j,Bt,Jt,Vt)}}function Vl(C,H,j,X,Y,Dt){C.onBeforeRender(D,H,j,X,Y,Dt),C.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Y.onBeforeRender(D,H,j,X,C,Dt),Y.transparent===!0&&Y.side===qe&&Y.forceSinglePass===!1?(Y.side=dn,Y.needsUpdate=!0,D.renderBufferDirect(j,H,X,Y,C,Dt),Y.side=bi,Y.needsUpdate=!0,D.renderBufferDirect(j,H,X,Y,C,Dt),Y.side=qe):D.renderBufferDirect(j,H,X,Y,C,Dt),C.onAfterRender(D,H,j,X,Y,Dt)}function ir(C,H,j){H.isScene!==!0&&(H=et);const X=R.get(C),Y=w.state.lights,Dt=w.state.shadowsArray,Ot=Y.state.version,Rt=St.getParameters(C,Y.state,Dt,H,j,w.state.lightProbeGridArray),Bt=St.getProgramCacheKey(Rt);let Vt=X.programs;X.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?H.environment:null,X.fog=H.fog;const Jt=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;X.envMap=V.get(C.envMap||X.environment,Jt),X.envMapRotation=X.environment!==null&&C.envMap===null?H.environmentRotation:C.envMapRotation,Vt===void 0&&(C.addEventListener("dispose",Ce),Vt=new Map,X.programs=Vt);let re=Vt.get(Bt);if(re!==void 0){if(X.currentProgram===re&&X.lightsStateVersion===Ot)return Hl(C,Rt),re}else Rt.uniforms=St.getUniforms(C),I!==null&&C.isNodeMaterial&&I.build(C,j,Rt),C.onBeforeCompile(Rt,D),re=St.acquireProgram(Rt,Bt),Vt.set(Bt,re),X.uniforms=Rt.uniforms;const Ht=X.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ht.clippingPlanes=Lt.uniform),Hl(C,Rt),X.needsLights=Cu(C),X.lightsStateVersion=Ot,X.needsLights&&(Ht.ambientLightColor.value=Y.state.ambient,Ht.lightProbe.value=Y.state.probe,Ht.directionalLights.value=Y.state.directional,Ht.directionalLightShadows.value=Y.state.directionalShadow,Ht.spotLights.value=Y.state.spot,Ht.spotLightShadows.value=Y.state.spotShadow,Ht.rectAreaLights.value=Y.state.rectArea,Ht.ltc_1.value=Y.state.rectAreaLTC1,Ht.ltc_2.value=Y.state.rectAreaLTC2,Ht.pointLights.value=Y.state.point,Ht.pointLightShadows.value=Y.state.pointShadow,Ht.hemisphereLights.value=Y.state.hemi,Ht.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Ht.spotLightMatrix.value=Y.state.spotLightMatrix,Ht.spotLightMap.value=Y.state.spotLightMap,Ht.pointShadowMatrix.value=Y.state.pointShadowMatrix),X.lightProbeGrid=w.state.lightProbeGridArray.length>0,X.currentProgram=re,X.uniformsList=null,re}function Gl(C){if(C.uniformsList===null){const H=C.currentProgram.getUniforms();C.uniformsList=qr.seqWithValue(H.seq,C.uniforms)}return C.uniformsList}function Hl(C,H){const j=R.get(C);j.outputColorSpace=H.outputColorSpace,j.batching=H.batching,j.batchingColor=H.batchingColor,j.instancing=H.instancing,j.instancingColor=H.instancingColor,j.instancingMorph=H.instancingMorph,j.skinning=H.skinning,j.morphTargets=H.morphTargets,j.morphNormals=H.morphNormals,j.morphColors=H.morphColors,j.morphTargetsCount=H.morphTargetsCount,j.numClippingPlanes=H.numClippingPlanes,j.numIntersection=H.numClipIntersection,j.vertexAlphas=H.vertexAlphas,j.vertexTangents=H.vertexTangents,j.toneMapping=H.toneMapping}function Tu(C,H){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;S.setFromMatrixPosition(H.matrixWorld);for(let j=0,X=C.length;j<X;j++){const Y=C[j];if(Y.texture!==null&&Y.boundingBox.containsPoint(S))return Y}return null}function Au(C,H,j,X,Y){H.isScene!==!0&&(H=et),E.resetTextureUnits();const Dt=H.fog,Ot=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?H.environment:null,Rt=L===null?D.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:le.workingColorSpace,Bt=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,Vt=V.get(X.envMap||Ot,Bt),Jt=X.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,re=!!j.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Ht=!!j.morphAttributes.position,me=!!j.morphAttributes.normal,Re=!!j.morphAttributes.color;let Te=Gn;X.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Te=D.toneMapping);const _e=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,$e=_e!==void 0?_e.length:0,Ft=R.get(X),fn=w.state.lights;if(It===!0&&(At===!0||C!==B)){const Me=C===B&&X.id===O;Lt.setState(X,C,Me)}let ce=!1;X.version===Ft.__version?(Ft.needsLights&&Ft.lightsStateVersion!==fn.state.version||Ft.outputColorSpace!==Rt||Y.isBatchedMesh&&Ft.batching===!1||!Y.isBatchedMesh&&Ft.batching===!0||Y.isBatchedMesh&&Ft.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Ft.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Ft.instancing===!1||!Y.isInstancedMesh&&Ft.instancing===!0||Y.isSkinnedMesh&&Ft.skinning===!1||!Y.isSkinnedMesh&&Ft.skinning===!0||Y.isInstancedMesh&&Ft.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Ft.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Ft.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Ft.instancingMorph===!1&&Y.morphTexture!==null||Ft.envMap!==Vt||X.fog===!0&&Ft.fog!==Dt||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==Lt.numPlanes||Ft.numIntersection!==Lt.numIntersection)||Ft.vertexAlphas!==Jt||Ft.vertexTangents!==re||Ft.morphTargets!==Ht||Ft.morphNormals!==me||Ft.morphColors!==Re||Ft.toneMapping!==Te||Ft.morphTargetsCount!==$e||!!Ft.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(ce=!0):(ce=!0,Ft.__version=X.version);let yn=Ft.currentProgram;ce===!0&&(yn=ir(X,H,Y),I&&X.isNodeMaterial&&I.onUpdateProgram(X,yn,Ft));let Un=!1,ci=!1,Wi=!1;const ve=yn.getUniforms(),Ie=Ft.uniforms;if(mt.useProgram(yn.program)&&(Un=!0,ci=!0,Wi=!0),X.id!==O&&(O=X.id,ci=!0),Ft.needsLights){const Me=Tu(w.state.lightProbeGridArray,Y);Ft.lightProbeGrid!==Me&&(Ft.lightProbeGrid=Me,ci=!0)}if(Un||B!==C){mt.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),ve.setValue(z,"projectionMatrix",C.projectionMatrix),ve.setValue(z,"viewMatrix",C.matrixWorldInverse);const ui=ve.map.cameraPosition;ui!==void 0&&ui.setValue(z,J.setFromMatrixPosition(C.matrixWorld)),Wt.logarithmicDepthBuffer&&ve.setValue(z,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&ve.setValue(z,"isOrthographic",C.isOrthographicCamera===!0),B!==C&&(B=C,ci=!0,Wi=!0)}if(Ft.needsLights&&(fn.state.directionalShadowMap.length>0&&ve.setValue(z,"directionalShadowMap",fn.state.directionalShadowMap,E),fn.state.spotShadowMap.length>0&&ve.setValue(z,"spotShadowMap",fn.state.spotShadowMap,E),fn.state.pointShadowMap.length>0&&ve.setValue(z,"pointShadowMap",fn.state.pointShadowMap,E)),Y.isSkinnedMesh){ve.setOptional(z,Y,"bindMatrix"),ve.setOptional(z,Y,"bindMatrixInverse");const Me=Y.skeleton;Me&&(Me.boneTexture===null&&Me.computeBoneTexture(),ve.setValue(z,"boneTexture",Me.boneTexture,E))}Y.isBatchedMesh&&(ve.setOptional(z,Y,"batchingTexture"),ve.setValue(z,"batchingTexture",Y._matricesTexture,E),ve.setOptional(z,Y,"batchingIdTexture"),ve.setValue(z,"batchingIdTexture",Y._indirectTexture,E),ve.setOptional(z,Y,"batchingColorTexture"),Y._colorsTexture!==null&&ve.setValue(z,"batchingColorTexture",Y._colorsTexture,E));const hi=j.morphAttributes;if((hi.position!==void 0||hi.normal!==void 0||hi.color!==void 0)&&Yt.update(Y,j,yn),(ci||Ft.receiveShadow!==Y.receiveShadow)&&(Ft.receiveShadow=Y.receiveShadow,ve.setValue(z,"receiveShadow",Y.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&H.environment!==null&&(Ie.envMapIntensity.value=H.environmentIntensity),Ie.dfgLUT!==void 0&&(Ie.dfgLUT.value=Zx()),ci){if(ve.setValue(z,"toneMappingExposure",D.toneMappingExposure),Ft.needsLights&&Pu(Ie,Wi),Dt&&X.fog===!0&&K.refreshFogUniforms(Ie,Dt),K.refreshMaterialUniforms(Ie,X,Tt,Pt,w.state.transmissionRenderTarget[C.id]),Ft.needsLights&&Ft.lightProbeGrid){const Me=Ft.lightProbeGrid;Ie.probesSH.value=Me.texture,Ie.probesMin.value.copy(Me.boundingBox.min),Ie.probesMax.value.copy(Me.boundingBox.max),Ie.probesResolution.value.copy(Me.resolution)}qr.upload(z,Gl(Ft),Ie,E)}if(X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(qr.upload(z,Gl(Ft),Ie,E),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&ve.setValue(z,"center",Y.center),ve.setValue(z,"modelViewMatrix",Y.modelViewMatrix),ve.setValue(z,"normalMatrix",Y.normalMatrix),ve.setValue(z,"modelMatrix",Y.matrixWorld),X.uniformsGroups!==void 0){const Me=X.uniformsGroups;for(let ui=0,Xi=Me.length;ui<Xi;ui++){const Wl=Me[ui];rt.update(Wl,yn),rt.bind(Wl,yn)}}return yn}function Pu(C,H){C.ambientLightColor.needsUpdate=H,C.lightProbe.needsUpdate=H,C.directionalLights.needsUpdate=H,C.directionalLightShadows.needsUpdate=H,C.pointLights.needsUpdate=H,C.pointLightShadows.needsUpdate=H,C.spotLights.needsUpdate=H,C.spotLightShadows.needsUpdate=H,C.rectAreaLights.needsUpdate=H,C.hemisphereLights.needsUpdate=H}function Cu(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(C,H,j){const X=R.get(C);X.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),R.get(C.texture).__webglTexture=H,R.get(C.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:j,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,H){const j=R.get(C);j.__webglFramebuffer=H,j.__useDefaultFramebuffer=H===void 0};const Ru=z.createFramebuffer();this.setRenderTarget=function(C,H=0,j=0){L=C,U=H,F=j;let X=null,Y=!1,Dt=!1;if(C){const Rt=R.get(C);if(Rt.__useDefaultFramebuffer!==void 0){mt.bindFramebuffer(z.FRAMEBUFFER,Rt.__webglFramebuffer),W.copy(C.viewport),G.copy(C.scissor),q=C.scissorTest,mt.viewport(W),mt.scissor(G),mt.setScissorTest(q),O=-1;return}else if(Rt.__webglFramebuffer===void 0)E.setupRenderTarget(C);else if(Rt.__hasExternalTextures)E.rebindTextures(C,R.get(C.texture).__webglTexture,R.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Jt=C.depthTexture;if(Rt.__boundDepthTexture!==Jt){if(Jt!==null&&R.has(Jt)&&(C.width!==Jt.image.width||C.height!==Jt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(C)}}const Bt=C.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(Dt=!0);const Vt=R.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Vt[H])?X=Vt[H][j]:X=Vt[H],Y=!0):C.samples>0&&E.useMultisampledRTT(C)===!1?X=R.get(C).__webglMultisampledFramebuffer:Array.isArray(Vt)?X=Vt[j]:X=Vt,W.copy(C.viewport),G.copy(C.scissor),q=C.scissorTest}else W.copy(at).multiplyScalar(Tt).floor(),G.copy(ut).multiplyScalar(Tt).floor(),q=vt;if(j!==0&&(X=Ru),mt.bindFramebuffer(z.FRAMEBUFFER,X)&&mt.drawBuffers(C,X),mt.viewport(W),mt.scissor(G),mt.setScissorTest(q),Y){const Rt=R.get(C.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+H,Rt.__webglTexture,j)}else if(Dt){const Rt=H;for(let Bt=0;Bt<C.textures.length;Bt++){const Vt=R.get(C.textures[Bt]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+Bt,Vt.__webglTexture,j,Rt)}}else if(C!==null&&j!==0){const Rt=R.get(C.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Rt.__webglTexture,j)}O=-1},this.readRenderTargetPixels=function(C,H,j,X,Y,Dt,Ot,Rt=0){if(!(C&&C.isWebGLRenderTarget)){ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Bt=R.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ot!==void 0&&(Bt=Bt[Ot]),Bt){mt.bindFramebuffer(z.FRAMEBUFFER,Bt);try{const Vt=C.textures[Rt],Jt=Vt.format,re=Vt.type;if(C.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Rt),!Wt.textureFormatReadable(Jt)){ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Wt.textureTypeReadable(re)){ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=C.width-X&&j>=0&&j<=C.height-Y&&z.readPixels(H,j,X,Y,k.convert(Jt),k.convert(re),Dt)}finally{const Vt=L!==null?R.get(L).__webglFramebuffer:null;mt.bindFramebuffer(z.FRAMEBUFFER,Vt)}}},this.readRenderTargetPixelsAsync=async function(C,H,j,X,Y,Dt,Ot,Rt=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Bt=R.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ot!==void 0&&(Bt=Bt[Ot]),Bt)if(H>=0&&H<=C.width-X&&j>=0&&j<=C.height-Y){mt.bindFramebuffer(z.FRAMEBUFFER,Bt);const Vt=C.textures[Rt],Jt=Vt.format,re=Vt.type;if(C.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Rt),!Wt.textureFormatReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Wt.textureTypeReadable(re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ht=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Ht),z.bufferData(z.PIXEL_PACK_BUFFER,Dt.byteLength,z.STREAM_READ),z.readPixels(H,j,X,Y,k.convert(Jt),k.convert(re),0);const me=L!==null?R.get(L).__webglFramebuffer:null;mt.bindFramebuffer(z.FRAMEBUFFER,me);const Re=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await hd(z,Re,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Ht),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Dt),z.deleteBuffer(Ht),z.deleteSync(Re),Dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,H=null,j=0){const X=Math.pow(2,-j),Y=Math.floor(C.image.width*X),Dt=Math.floor(C.image.height*X),Ot=H!==null?H.x:0,Rt=H!==null?H.y:0;E.setTexture2D(C,0),z.copyTexSubImage2D(z.TEXTURE_2D,j,0,0,Ot,Rt,Y,Dt),mt.unbindTexture()};const Iu=z.createFramebuffer(),Du=z.createFramebuffer();this.copyTextureToTexture=function(C,H,j=null,X=null,Y=0,Dt=0){let Ot,Rt,Bt,Vt,Jt,re,Ht,me,Re;const Te=C.isCompressedTexture?C.mipmaps[Dt]:C.image;if(j!==null)Ot=j.max.x-j.min.x,Rt=j.max.y-j.min.y,Bt=j.isBox3?j.max.z-j.min.z:1,Vt=j.min.x,Jt=j.min.y,re=j.isBox3?j.min.z:0;else{const Ie=Math.pow(2,-Y);Ot=Math.floor(Te.width*Ie),Rt=Math.floor(Te.height*Ie),C.isDataArrayTexture?Bt=Te.depth:C.isData3DTexture?Bt=Math.floor(Te.depth*Ie):Bt=1,Vt=0,Jt=0,re=0}X!==null?(Ht=X.x,me=X.y,Re=X.z):(Ht=0,me=0,Re=0);const _e=k.convert(H.format),$e=k.convert(H.type);let Ft;H.isData3DTexture?(E.setTexture3D(H,0),Ft=z.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(E.setTexture2DArray(H,0),Ft=z.TEXTURE_2D_ARRAY):(E.setTexture2D(H,0),Ft=z.TEXTURE_2D),mt.activeTexture(z.TEXTURE0),mt.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,H.flipY),mt.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),mt.pixelStorei(z.UNPACK_ALIGNMENT,H.unpackAlignment);const fn=mt.getParameter(z.UNPACK_ROW_LENGTH),ce=mt.getParameter(z.UNPACK_IMAGE_HEIGHT),yn=mt.getParameter(z.UNPACK_SKIP_PIXELS),Un=mt.getParameter(z.UNPACK_SKIP_ROWS),ci=mt.getParameter(z.UNPACK_SKIP_IMAGES);mt.pixelStorei(z.UNPACK_ROW_LENGTH,Te.width),mt.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Te.height),mt.pixelStorei(z.UNPACK_SKIP_PIXELS,Vt),mt.pixelStorei(z.UNPACK_SKIP_ROWS,Jt),mt.pixelStorei(z.UNPACK_SKIP_IMAGES,re);const Wi=C.isDataArrayTexture||C.isData3DTexture,ve=H.isDataArrayTexture||H.isData3DTexture;if(C.isDepthTexture){const Ie=R.get(C),hi=R.get(H),Me=R.get(Ie.__renderTarget),ui=R.get(hi.__renderTarget);mt.bindFramebuffer(z.READ_FRAMEBUFFER,Me.__webglFramebuffer),mt.bindFramebuffer(z.DRAW_FRAMEBUFFER,ui.__webglFramebuffer);for(let Xi=0;Xi<Bt;Xi++)Wi&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,R.get(C).__webglTexture,Y,re+Xi),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,R.get(H).__webglTexture,Dt,Re+Xi)),z.blitFramebuffer(Vt,Jt,Ot,Rt,Ht,me,Ot,Rt,z.DEPTH_BUFFER_BIT,z.NEAREST);mt.bindFramebuffer(z.READ_FRAMEBUFFER,null),mt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(Y!==0||C.isRenderTargetTexture||R.has(C)){const Ie=R.get(C),hi=R.get(H);mt.bindFramebuffer(z.READ_FRAMEBUFFER,Iu),mt.bindFramebuffer(z.DRAW_FRAMEBUFFER,Du);for(let Me=0;Me<Bt;Me++)Wi?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ie.__webglTexture,Y,re+Me):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Ie.__webglTexture,Y),ve?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,hi.__webglTexture,Dt,Re+Me):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,hi.__webglTexture,Dt),Y!==0?z.blitFramebuffer(Vt,Jt,Ot,Rt,Ht,me,Ot,Rt,z.COLOR_BUFFER_BIT,z.NEAREST):ve?z.copyTexSubImage3D(Ft,Dt,Ht,me,Re+Me,Vt,Jt,Ot,Rt):z.copyTexSubImage2D(Ft,Dt,Ht,me,Vt,Jt,Ot,Rt);mt.bindFramebuffer(z.READ_FRAMEBUFFER,null),mt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else ve?C.isDataTexture||C.isData3DTexture?z.texSubImage3D(Ft,Dt,Ht,me,Re,Ot,Rt,Bt,_e,$e,Te.data):H.isCompressedArrayTexture?z.compressedTexSubImage3D(Ft,Dt,Ht,me,Re,Ot,Rt,Bt,_e,Te.data):z.texSubImage3D(Ft,Dt,Ht,me,Re,Ot,Rt,Bt,_e,$e,Te):C.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Dt,Ht,me,Ot,Rt,_e,$e,Te.data):C.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Dt,Ht,me,Te.width,Te.height,_e,Te.data):z.texSubImage2D(z.TEXTURE_2D,Dt,Ht,me,Ot,Rt,_e,$e,Te);mt.pixelStorei(z.UNPACK_ROW_LENGTH,fn),mt.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ce),mt.pixelStorei(z.UNPACK_SKIP_PIXELS,yn),mt.pixelStorei(z.UNPACK_SKIP_ROWS,Un),mt.pixelStorei(z.UNPACK_SKIP_IMAGES,ci),Dt===0&&H.generateMipmaps&&z.generateMipmap(Ft),mt.unbindTexture()},this.initRenderTarget=function(C){R.get(C).__webglFramebuffer===void 0&&E.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?E.setTextureCube(C,0):C.isData3DTexture?E.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?E.setTexture2DArray(C,0):E.setTexture2D(C,0),mt.unbindTexture()},this.resetState=function(){U=0,F=0,L=null,mt.reset(),Et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=le._getDrawingBufferColorSpace(t),e.unpackColorSpace=le._getUnpackColorSpace()}}const ah={type:"change"},Cl={type:"start"},pu={type:"end"},Ir=new uo,lh=new Qn,Kx=Math.cos(70*Bh.DEG2RAD),Ve=new N,an=2*Math.PI,ge={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ta=1e-6;class Jx extends ru{constructor(t,e=null){super(t,e),this.state=ge.NONE,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:hs.ROTATE,MIDDLE:hs.DOLLY,RIGHT:hs.PAN},this.touches={ONE:as.ROTATE,TWO:as.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new N,this._lastQuaternion=new Ye,this._lastTargetPosition=new N,this._quat=new Ye().setFromUnitVectors(t.up,new N(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Uc,this._sphericalDelta=new Uc,this._scale=1,this._panOffset=new N,this._rotateStart=new gt,this._rotateEnd=new gt,this._rotateDelta=new gt,this._panStart=new gt,this._panEnd=new gt,this._panDelta=new gt,this._dollyStart=new gt,this._dollyEnd=new gt,this._dollyDelta=new gt,this._dollyDirection=new N,this._mouse=new gt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=t_.bind(this),this._onPointerDown=Qx.bind(this),this._onPointerUp=e_.bind(this),this._onContextMenu=l_.bind(this),this._onMouseWheel=s_.bind(this),this._onKeyDown=r_.bind(this),this._onTouchStart=o_.bind(this),this._onTouchMove=a_.bind(this),this._onMouseDown=n_.bind(this),this._onMouseMove=i_.bind(this),this._interceptControlDown=c_.bind(this),this._interceptControlUp=h_.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ah),this.update(),this.state=ge.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const e=this.object.position;Ve.copy(e).sub(this.target),Ve.applyQuaternion(this._quat),this._spherical.setFromVector3(Ve),this.autoRotate&&this.state===ge.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=an:n>Math.PI&&(n-=an),s<-Math.PI?s+=an:s>Math.PI&&(s-=an),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Ve.setFromSpherical(this._spherical),Ve.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ve),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Ve.length();o=this._clampDistance(a*this._scale);const c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const a=new N(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const l=new N(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=Ve.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Ir.origin.copy(this.object.position),Ir.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ir.direction))<Kx?this.object.lookAt(this.target):(lh.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ir.intersectPlane(lh,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>ta||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ta||this._lastTargetPosition.distanceToSquared(this.target)>ta?(this.dispatchEvent(ah),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?an/60*this.autoRotateSpeed*t:an/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ve.setFromMatrixColumn(e,0),Ve.multiplyScalar(-t),this._panOffset.add(Ve)}_panUp(t,e){this.screenSpacePanning===!0?Ve.setFromMatrixColumn(e,1):(Ve.setFromMatrixColumn(e,0),Ve.crossVectors(this.object.up,Ve)),Ve.multiplyScalar(t),this._panOffset.add(Ve)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Ve.copy(s).sub(this.target);let r=Ve.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(an*this._rotateDelta.x/e.clientHeight),this._rotateUp(an*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(an*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-an*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(an*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-an*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(an*this._rotateDelta.x/e.clientHeight),this._rotateUp(an*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new gt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Qx(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function t_(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function e_(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(pu),this.state=ge.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function n_(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case hs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ge.DOLLY;break;case hs.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ge.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ge.ROTATE}break;case hs.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ge.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ge.PAN}break;default:this.state=ge.NONE}this.state!==ge.NONE&&this.dispatchEvent(Cl)}function i_(i){switch(this.state){case ge.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ge.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ge.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function s_(i){this.enabled===!1||this.enableZoom===!1||this.state!==ge.NONE||(i.preventDefault(),this.dispatchEvent(Cl),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(pu))}function r_(i){this.enabled!==!1&&this._handleKeyDown(i)}function o_(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case as.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ge.TOUCH_ROTATE;break;case as.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ge.TOUCH_PAN;break;default:this.state=ge.NONE}break;case 2:switch(this.touches.TWO){case as.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ge.TOUCH_DOLLY_PAN;break;case as.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ge.TOUCH_DOLLY_ROTATE;break;default:this.state=ge.NONE}break;default:this.state=ge.NONE}this.state!==ge.NONE&&this.dispatchEvent(Cl)}function a_(i){switch(this._trackPointer(i),this.state){case ge.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ge.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ge.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ge.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ge.NONE}}function l_(i){this.enabled!==!1&&i.preventDefault()}function c_(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function h_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Ii=new su,Qe=new N,_i=new N,Se=new Ye,ch={X:new N(1,0,0),Y:new N(0,1,0),Z:new N(0,0,1)},ea={type:"change"},hh={type:"mouseDown",mode:null},uh={type:"mouseUp",mode:null},dh={type:"objectChange"};class u_ extends ru{constructor(t,e=null){super(void 0,e);const n=new x_(this);this._root=n;const s=new __;this._gizmo=s,n.add(s);const r=new v_;this._plane=r,n.add(r);const o=this;function a(y,S){let P=S;Object.defineProperty(o,y,{get:function(){return P!==void 0?P:S},set:function(w){P!==w&&(P=w,r[y]=w,s[y]=w,o.dispatchEvent({type:y+"-changed",value:w}),o.dispatchEvent(ea))}}),o[y]=S,r[y]=S,s[y]=S}a("camera",t),a("object",void 0),a("enabled",!0),a("axis",null),a("mode","translate"),a("translationSnap",null),a("rotationSnap",null),a("scaleSnap",null),a("space","world"),a("size",1),a("dragging",!1),a("showX",!0),a("showY",!0),a("showZ",!0),a("showXY",!0),a("showYZ",!0),a("showXZ",!0),a("minX",-1/0),a("maxX",1/0),a("minY",-1/0),a("maxY",1/0),a("minZ",-1/0),a("maxZ",1/0);const c=new N,l=new N,u=new Ye,f=new Ye,h=new N,d=new Ye,m=new N,_=new N,x=new N,p=0,g=new N;a("worldPosition",c),a("worldPositionStart",l),a("worldQuaternion",u),a("worldQuaternionStart",f),a("cameraPosition",h),a("cameraQuaternion",d),a("pointStart",m),a("pointEnd",_),a("rotationAxis",x),a("rotationAngle",p),a("eye",g),this._offset=new N,this._startNorm=new N,this._endNorm=new N,this._cameraScale=new N,this._parentPosition=new N,this._parentQuaternion=new Ye,this._parentQuaternionInv=new Ye,this._parentScale=new N,this._worldScaleStart=new N,this._worldQuaternionInv=new Ye,this._worldScale=new N,this._positionStart=new N,this._quaternionStart=new Ye,this._scaleStart=new N,this._getPointer=d_.bind(this),this._onPointerDown=p_.bind(this),this._onPointerHover=f_.bind(this),this._onPointerMove=m_.bind(this),this._onPointerUp=g_.bind(this),e!==null&&this.connect(e)}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction=""}getHelper(){return this._root}pointerHover(t){if(this.object===void 0||this.dragging===!0)return;t!==null&&Ii.setFromCamera(t,this.camera);const e=na(this._gizmo.picker[this.mode],Ii);e?this.axis=e.object.name:this.axis=null}pointerDown(t){if(!(this.object===void 0||this.dragging===!0||t!=null&&t.button!==0)&&this.axis!==null){t!==null&&Ii.setFromCamera(t,this.camera);const e=na(this._plane,Ii,!0);e&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(e.point).sub(this.worldPositionStart)),this.dragging=!0,hh.mode=this.mode,this.dispatchEvent(hh)}}pointerMove(t){const e=this.axis,n=this.mode,s=this.object;let r=this.space;if(n==="scale"?r="local":(e==="E"||e==="XYZE"||e==="XYZ")&&(r="world"),s===void 0||e===null||this.dragging===!1||t!==null&&t.button!==-1)return;t!==null&&Ii.setFromCamera(t,this.camera);const o=na(this._plane,Ii,!0);if(o){if(this.pointEnd.copy(o.point).sub(this.worldPositionStart),n==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),r==="local"&&e!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),e.indexOf("X")===-1&&(this._offset.x=0),e.indexOf("Y")===-1&&(this._offset.y=0),e.indexOf("Z")===-1&&(this._offset.z=0),r==="local"&&e!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),s.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(r==="local"&&(s.position.applyQuaternion(Se.copy(this._quaternionStart).invert()),e.search("X")!==-1&&(s.position.x=Math.round(s.position.x/this.translationSnap)*this.translationSnap),e.search("Y")!==-1&&(s.position.y=Math.round(s.position.y/this.translationSnap)*this.translationSnap),e.search("Z")!==-1&&(s.position.z=Math.round(s.position.z/this.translationSnap)*this.translationSnap),s.position.applyQuaternion(this._quaternionStart)),r==="world"&&(s.parent&&s.position.add(Qe.setFromMatrixPosition(s.parent.matrixWorld)),e.search("X")!==-1&&(s.position.x=Math.round(s.position.x/this.translationSnap)*this.translationSnap),e.search("Y")!==-1&&(s.position.y=Math.round(s.position.y/this.translationSnap)*this.translationSnap),e.search("Z")!==-1&&(s.position.z=Math.round(s.position.z/this.translationSnap)*this.translationSnap),s.parent&&s.position.sub(Qe.setFromMatrixPosition(s.parent.matrixWorld)))),s.position.x=Math.max(this.minX,Math.min(this.maxX,s.position.x)),s.position.y=Math.max(this.minY,Math.min(this.maxY,s.position.y)),s.position.z=Math.max(this.minZ,Math.min(this.maxZ,s.position.z));else if(n==="scale"){if(e.search("XYZ")!==-1){let a=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(a*=-1),_i.set(a,a,a)}else Qe.copy(this.pointStart),_i.copy(this.pointEnd),Qe.applyQuaternion(this._worldQuaternionInv),_i.applyQuaternion(this._worldQuaternionInv),_i.divide(Qe),e.search("X")===-1&&(_i.x=1),e.search("Y")===-1&&(_i.y=1),e.search("Z")===-1&&(_i.z=1);s.scale.copy(this._scaleStart).multiply(_i),this.scaleSnap&&(e.search("X")!==-1&&(s.scale.x=Math.round(s.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),e.search("Y")!==-1&&(s.scale.y=Math.round(s.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),e.search("Z")!==-1&&(s.scale.z=Math.round(s.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(n==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);const a=20/this.worldPosition.distanceTo(Qe.setFromMatrixPosition(this.camera.matrixWorld));let c=!1;e==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(Qe.copy(this.rotationAxis).cross(this.eye))*a):(e==="X"||e==="Y"||e==="Z")&&(this.rotationAxis.copy(ch[e]),Qe.copy(ch[e]),r==="local"&&Qe.applyQuaternion(this.worldQuaternion),Qe.cross(this.eye),Qe.length()===0?c=!0:this.rotationAngle=this._offset.dot(Qe.normalize())*a),(e==="E"||c)&&(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),r==="local"&&e!=="E"&&e!=="XYZE"?(s.quaternion.copy(this._quaternionStart),s.quaternion.multiply(Se.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),s.quaternion.copy(Se.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),s.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(ea),this.dispatchEvent(dh)}}pointerUp(t){t!==null&&t.button!==0||(this.dragging&&this.axis!==null&&(uh.mode=this.mode,this.dispatchEvent(uh)),this.dragging=!1,this.axis=null)}dispose(){this.disconnect(),this._root.dispose()}attach(t){return this.object=t,this._root.visible=!0,this}detach(){return this.object=void 0,this.axis=null,this._root.visible=!1,this}reset(){this.enabled&&this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(ea),this.dispatchEvent(dh),this.pointStart.copy(this.pointEnd))}getRaycaster(){return Ii}getMode(){return this.mode}setMode(t){this.mode=t}setTranslationSnap(t){this.translationSnap=t}setRotationSnap(t){this.rotationSnap=t}setScaleSnap(t){this.scaleSnap=t}setSize(t){this.size=t}setSpace(t){this.space=t}setColors(t,e,n,s){const r=this._gizmo.materialLib;r.xAxis.color.set(t),r.yAxis.color.set(e),r.zAxis.color.set(n),r.active.color.set(s),r.xAxisTransparent.color.set(t),r.yAxisTransparent.color.set(e),r.zAxisTransparent.color.set(n),r.activeTransparent.color.set(s),r.xAxis._color&&r.xAxis._color.set(t),r.yAxis._color&&r.yAxis._color.set(e),r.zAxis._color&&r.zAxis._color.set(n),r.active._color&&r.active._color.set(s),r.xAxisTransparent._color&&r.xAxisTransparent._color.set(t),r.yAxisTransparent._color&&r.yAxisTransparent._color.set(e),r.zAxisTransparent._color&&r.zAxisTransparent._color.set(n),r.activeTransparent._color&&r.activeTransparent._color.set(s)}}function d_(i){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:i.button};{const t=this.domElement.getBoundingClientRect();return{x:(i.clientX-t.left)/t.width*2-1,y:-(i.clientY-t.top)/t.height*2+1,button:i.button}}}function f_(i){if(this.enabled)switch(i.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(i));break}}function p_(i){this.enabled&&(document.pointerLockElement||this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(i)),this.pointerDown(this._getPointer(i)))}function m_(i){this.enabled&&this.pointerMove(this._getPointer(i))}function g_(i){this.enabled&&(this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(i)))}function na(i,t,e){const n=t.intersectObject(i,!0);for(let s=0;s<n.length;s++)if(n[s].object.visible||e)return n[s];return!1}const Dr=new li,ye=new N(0,1,0),fh=new N(0,0,0),ph=new xe,Lr=new Ye,jr=new Ye,Bn=new N,mh=new xe,Fs=new N(1,0,0),Di=new N(0,1,0),Os=new N(0,0,1),Nr=new N,Rs=new N,Is=new N;class x_ extends Fe{constructor(t){super(),this.isTransformControlsRoot=!0,this.controls=t,this.visible=!1}updateMatrixWorld(t){const e=this.controls;e.object!==void 0&&(e.object.updateMatrixWorld(),e.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):e.object.parent.matrixWorld.decompose(e._parentPosition,e._parentQuaternion,e._parentScale),e.object.matrixWorld.decompose(e.worldPosition,e.worldQuaternion,e._worldScale),e._parentQuaternionInv.copy(e._parentQuaternion).invert(),e._worldQuaternionInv.copy(e.worldQuaternion).invert()),e.camera.updateMatrixWorld(),e.camera.matrixWorld.decompose(e.cameraPosition,e.cameraQuaternion,e._cameraScale),e.camera.isOrthographicCamera?e.camera.getWorldDirection(e.eye).negate():e.eye.copy(e.cameraPosition).sub(e.worldPosition).normalize(),super.updateMatrixWorld(t)}dispose(){this.traverse(function(t){t.geometry&&t.geometry.dispose(),t.material&&t.material.dispose()})}}class __ extends Fe{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";const t=new De({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),e=new hn({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),n=t.clone();n.opacity=.15;const s=e.clone();s.opacity=.5;const r=t.clone();r.color.setHex(16711680);const o=t.clone();o.color.setHex(65280);const a=t.clone();a.color.setHex(255);const c=t.clone();c.color.setHex(16711680),c.opacity=.5;const l=t.clone();l.color.setHex(65280),l.opacity=.5;const u=t.clone();u.color.setHex(255),u.opacity=.5;const f=t.clone();f.opacity=.25;const h=t.clone();h.color.setHex(16776960),h.opacity=.25;const d=t.clone();d.color.setHex(16776960);const m=t.clone();m.color.setHex(7895160),this.materialLib={xAxis:r,yAxis:o,zAxis:a,active:d,xAxisTransparent:c,yAxisTransparent:l,zAxisTransparent:u,activeTransparent:h};const _=new je(0,.04,.1,12);_.translate(0,.05,0);const x=new Ae(.08,.08,.08);x.translate(0,.04,0);const p=new te;p.setAttribute("position",new Zt([0,0,0,1,0,0],3));const g=new je(.0075,.0075,.5,3);g.translate(0,.25,0);function y(L,O){const B=new Li(L,.0075,3,64,O*Math.PI*2);return B.rotateY(Math.PI/2),B.rotateX(Math.PI/2),B}function S(){const L=new te;return L.setAttribute("position",new Zt([0,0,0,1,1,1],3)),L}const P={X:[[new xt(_,r),[.5,0,0],[0,0,-Math.PI/2]],[new xt(_,r),[-.5,0,0],[0,0,Math.PI/2]],[new xt(g,r),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new xt(_,o),[0,.5,0]],[new xt(_,o),[0,-.5,0],[Math.PI,0,0]],[new xt(g,o)]],Z:[[new xt(_,a),[0,0,.5],[Math.PI/2,0,0]],[new xt(_,a),[0,0,-.5],[-Math.PI/2,0,0]],[new xt(g,a),null,[Math.PI/2,0,0]]],XYZ:[[new xt(new ls(.1,0),f),[0,0,0]]],XY:[[new xt(new Ae(.15,.15,.01),u),[.15,.15,0]]],YZ:[[new xt(new Ae(.15,.15,.01),c),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new xt(new Ae(.15,.15,.01),l),[.15,0,.15],[-Math.PI/2,0,0]]]},w={X:[[new xt(new je(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new xt(new je(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new xt(new je(.2,0,.6,4),n),[0,.3,0]],[new xt(new je(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new xt(new je(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new xt(new je(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new xt(new ls(.2,0),n)]],XY:[[new xt(new Ae(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new xt(new Ae(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new xt(new Ae(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]]},b={START:[[new xt(new ls(.01,2),s),null,null,null,"helper"]],END:[[new xt(new ls(.01,2),s),null,null,null,"helper"]],DELTA:[[new be(S(),s),null,null,null,"helper"]],X:[[new be(p,s),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new be(p,s),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new be(p,s),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},M={XYZE:[[new xt(y(.5,1),m),null,[0,Math.PI/2,0]]],X:[[new xt(y(.5,.5),r)]],Y:[[new xt(y(.5,.5),o),null,[0,0,-Math.PI/2]]],Z:[[new xt(y(.5,.5),a),null,[0,Math.PI/2,0]]],E:[[new xt(y(.75,1),h),null,[0,Math.PI/2,0]]]},A={AXIS:[[new be(p,s),[-1e3,0,0],null,[1e6,1,1],"helper"]]},D={XYZE:[[new xt(new Al(.25,10,8),n)]],X:[[new xt(new Li(.5,.1,4,24),n),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new xt(new Li(.5,.1,4,24),n),[0,0,0],[Math.PI/2,0,0]]],Z:[[new xt(new Li(.5,.1,4,24),n),[0,0,0],[0,0,-Math.PI/2]]],E:[[new xt(new Li(.75,.1,2,24),n)]]},T={X:[[new xt(x,r),[.5,0,0],[0,0,-Math.PI/2]],[new xt(g,r),[0,0,0],[0,0,-Math.PI/2]],[new xt(x,r),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new xt(x,o),[0,.5,0]],[new xt(g,o)],[new xt(x,o),[0,-.5,0],[0,0,Math.PI]]],Z:[[new xt(x,a),[0,0,.5],[Math.PI/2,0,0]],[new xt(g,a),[0,0,0],[Math.PI/2,0,0]],[new xt(x,a),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new xt(new Ae(.15,.15,.01),u),[.15,.15,0]]],YZ:[[new xt(new Ae(.15,.15,.01),c),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new xt(new Ae(.15,.15,.01),l),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new xt(new Ae(.1,.1,.1),f)]]},I={X:[[new xt(new je(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new xt(new je(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new xt(new je(.2,0,.6,4),n),[0,.3,0]],[new xt(new je(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new xt(new je(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new xt(new je(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new xt(new Ae(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new xt(new Ae(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new xt(new Ae(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new xt(new Ae(.2,.2,.2),n),[0,0,0]]]},U={X:[[new be(p,s),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new be(p,s),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new be(p,s),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function F(L){const O=new Fe;for(const B in L)for(let W=L[B].length;W--;){const G=L[B][W][0].clone(),q=L[B][W][1],st=L[B][W][2],nt=L[B][W][3],ct=L[B][W][4];G.name=B,G.tag=ct,q&&G.position.set(q[0],q[1],q[2]),st&&G.rotation.set(st[0],st[1],st[2]),nt&&G.scale.set(nt[0],nt[1],nt[2]),G.updateMatrix();const Pt=G.geometry.clone();Pt.applyMatrix4(G.matrix),G.geometry=Pt,G.renderOrder=1/0,G.position.set(0,0,0),G.rotation.set(0,0,0),G.scale.set(1,1,1),O.add(G)}return O}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=F(P)),this.add(this.gizmo.rotate=F(M)),this.add(this.gizmo.scale=F(T)),this.add(this.picker.translate=F(w)),this.add(this.picker.rotate=F(D)),this.add(this.picker.scale=F(I)),this.add(this.helper.translate=F(b)),this.add(this.helper.rotate=F(A)),this.add(this.helper.scale=F(U)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(t){const n=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:jr;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let s=[];s=s.concat(this.picker[this.mode].children),s=s.concat(this.gizmo[this.mode].children),s=s.concat(this.helper[this.mode].children);for(let r=0;r<s.length;r++){const o=s[r];o.visible=!0,o.rotation.set(0,0,0),o.position.copy(this.worldPosition);let a;if(this.camera.isOrthographicCamera?a=(this.camera.top-this.camera.bottom)/this.camera.zoom:a=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),o.scale.set(1,1,1).multiplyScalar(a*this.size/4),o.tag==="helper"){o.visible=!1,o.name==="AXIS"?(o.visible=!!this.axis,this.axis==="X"&&(Se.setFromEuler(Dr.set(0,0,0)),o.quaternion.copy(n).multiply(Se),Math.abs(ye.copy(Fs).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Y"&&(Se.setFromEuler(Dr.set(0,0,Math.PI/2)),o.quaternion.copy(n).multiply(Se),Math.abs(ye.copy(Di).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Z"&&(Se.setFromEuler(Dr.set(0,Math.PI/2,0)),o.quaternion.copy(n).multiply(Se),Math.abs(ye.copy(Os).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="XYZE"&&(Se.setFromEuler(Dr.set(0,Math.PI/2,0)),ye.copy(this.rotationAxis),o.quaternion.setFromRotationMatrix(ph.lookAt(fh,ye,Di)),o.quaternion.multiply(Se),o.visible=this.dragging),this.axis==="E"&&(o.visible=!1)):o.name==="START"?(o.position.copy(this.worldPositionStart),o.visible=this.dragging):o.name==="END"?(o.position.copy(this.worldPosition),o.visible=this.dragging):o.name==="DELTA"?(o.position.copy(this.worldPositionStart),o.quaternion.copy(this.worldQuaternionStart),Qe.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),Qe.applyQuaternion(this.worldQuaternionStart.clone().invert()),o.scale.copy(Qe),o.visible=this.dragging):(o.quaternion.copy(n),this.dragging?o.position.copy(this.worldPositionStart):o.position.copy(this.worldPosition),this.axis&&(o.visible=this.axis.search(o.name)!==-1));continue}o.quaternion.copy(n),this.mode==="translate"||this.mode==="scale"?(o.name==="X"&&Math.abs(ye.copy(Fs).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Y"&&Math.abs(ye.copy(Di).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Z"&&Math.abs(ye.copy(Os).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XY"&&Math.abs(ye.copy(Os).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="YZ"&&Math.abs(ye.copy(Fs).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XZ"&&Math.abs(ye.copy(Di).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1)):this.mode==="rotate"&&(Lr.copy(n),ye.copy(this.eye).applyQuaternion(Se.copy(n).invert()),o.name.search("E")!==-1&&o.quaternion.setFromRotationMatrix(ph.lookAt(this.eye,fh,Di)),o.name==="X"&&(Se.setFromAxisAngle(Fs,Math.atan2(-ye.y,ye.z)),Se.multiplyQuaternions(Lr,Se),o.quaternion.copy(Se)),o.name==="Y"&&(Se.setFromAxisAngle(Di,Math.atan2(ye.x,ye.z)),Se.multiplyQuaternions(Lr,Se),o.quaternion.copy(Se)),o.name==="Z"&&(Se.setFromAxisAngle(Os,Math.atan2(ye.y,ye.x)),Se.multiplyQuaternions(Lr,Se),o.quaternion.copy(Se))),o.visible=o.visible&&(o.name.indexOf("X")===-1||this.showX),o.visible=o.visible&&(o.name.indexOf("Y")===-1||this.showY),o.visible=o.visible&&(o.name.indexOf("Z")===-1||this.showZ),o.visible=o.visible&&(o.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),o.visible=o.visible&&(o.name.indexOf("XY")===-1||this.showXY),o.visible=o.visible&&(o.name.indexOf("YZ")===-1||this.showYZ),o.visible=o.visible&&(o.name.indexOf("XZ")===-1||this.showXZ),o.material._color=o.material._color||o.material.color.clone(),o.material._opacity=o.material._opacity||o.material.opacity,o.material.color.copy(o.material._color),o.material.opacity=o.material._opacity,this.enabled&&this.axis&&(o.name===this.axis?(o.material.color.copy(this.materialLib.active.color),o.material.opacity=1):this.axis.split("").some(function(c){return o.name===c})&&(o.material.color.copy(this.materialLib.active.color),o.material.opacity=1))}super.updateMatrixWorld(t)}}class v_ extends xt{constructor(){super(new ys(1e5,1e5,2,2),new De({visible:!1,wireframe:!0,side:qe,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(t){let e=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(e="local"),Nr.copy(Fs).applyQuaternion(e==="local"?this.worldQuaternion:jr),Rs.copy(Di).applyQuaternion(e==="local"?this.worldQuaternion:jr),Is.copy(Os).applyQuaternion(e==="local"?this.worldQuaternion:jr),ye.copy(Rs),this.mode){case"translate":case"scale":switch(this.axis){case"X":ye.copy(this.eye).cross(Nr),Bn.copy(Nr).cross(ye);break;case"Y":ye.copy(this.eye).cross(Rs),Bn.copy(Rs).cross(ye);break;case"Z":ye.copy(this.eye).cross(Is),Bn.copy(Is).cross(ye);break;case"XY":Bn.copy(Is);break;case"YZ":Bn.copy(Nr);break;case"XZ":ye.copy(Is),Bn.copy(Rs);break;case"XYZ":case"E":Bn.set(0,0,0);break}break;case"rotate":default:Bn.set(0,0,0)}Bn.length()===0?this.quaternion.copy(this.cameraQuaternion):(mh.lookAt(Qe.set(0,0,0),Bn,ye),this.quaternion.setFromRotationMatrix(mh)),super.updateMatrixWorld(t)}}class ot{constructor(t,e){this.x=t,this.y=e}add(t){return new ot(this.x+t.x,this.y+t.y)}sub(t){return new ot(this.x-t.x,this.y-t.y)}scale(t){return new ot(this.x*t,this.y*t)}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.lengthSq())}normalize(){const t=this.length();return t>1e-12?this.scale(1/t):new ot(0,0)}distSq(t){return(this.x-t.x)**2+(this.y-t.y)**2}dist(t){return Math.sqrt(this.distSq(t))}}function y_(i){let t=0;for(let e=0;e<i.length;e++){const n=i[e],s=i[(e+1)%i.length];t+=(s.x-n.x)*(s.y+n.y)}return t<0?i:[...i].reverse()}function M_(i,t){const e=t.x-i.x,n=t.y-i.y;return new ot(-n,e).normalize()}function Rl(i,t,e,n){const s=n.sub(e),r=t.cross(s);if(Math.abs(r)<1e-10)return null;const o=e.sub(i),a=o.cross(s)/r,c=o.cross(t)/r;return a>1e-6&&c>=0&&c<=1?{point:i.add(t.scale(a)),s:a}:null}function Vn(i,t,e){const n=e.sub(t),s=i.sub(t),r=n.lengthSq();if(r<1e-10)return t;let o=s.dot(n)/r;return o=Math.max(0,Math.min(1,o)),t.add(n.scale(o))}function mu(i,t){let e=1/0,n=null,s=-1;for(let r=0;r<t.length;r++){const o=t[r],a=t[(r+1)%t.length],c=Vn(i,o,a),l=i.dist(c);l<e&&(e=l,n=c,s=r)}return{distance:e,point:n,edgeIndex:s}}function oo(i,t){let e=i.x,n=i.y,s=!1;for(let r=0,o=t.length-1;r<t.length;o=r++){let a=t[r].x,c=t[r].y,l=t[o].x,u=t[o].y;c>n!=u>n&&e<(l-a)*(n-c)/(u-c)+a&&(s=!s)}return s}function ia(i){if(i.length===0)return null;let t=i[0];for(let e=1;e<i.length;e++)if(t=S_(t,i[e]),!t)return null;return E_(t)}function S_(i,t){const e=[];for(let _=0;_<i.length;_++)e.push([i[_],i[(_+1)%i.length]]);const n=[];for(let _=0;_<t.length;_++)n.push([t[_],t[(_+1)%t.length]]);const s=_=>`${_.x.toFixed(4)},${_.y.toFixed(4)}`,r=new Set;for(const _ of n)r.add(`${s(_[0])}->${s(_[1])}`);const o=e.filter(_=>!r.has(`${s(_[1])}->${s(_[0])}`)),a=new Set;for(const _ of e)a.add(`${s(_[0])}->${s(_[1])}`);const c=n.filter(_=>!a.has(`${s(_[1])}->${s(_[0])}`)),l=[...o,...c];if(l.length===0)return null;const u=new Map;for(const _ of l)u.set(s(_[0]),{start:_[0],end:_[1]});let h=Array.from(u.keys())[0];const d=[],m=new Set;for(;h&&!m.has(h);){m.add(h);const _=u.get(h);if(!_)break;d.push(_.start),h=s(_.end)}return m.size<l.length?null:d}function E_(i){if(i.length<3)return i;const t=[];for(let e=0;e<i.length;e++){const n=i[(e-1+i.length)%i.length],s=i[e],r=i[(e+1)%i.length],o=s.x-n.x,a=s.y-n.y,c=r.x-s.x,l=r.y-s.y,u=Math.hypot(o,a),f=Math.hypot(c,l);if(u<1e-6||f<1e-6)continue;const h=(o*l-a*c)/(u*f);Math.abs(h)>.001&&t.push(s)}return t}const Ds=(i,t,e)=>{if(i===t)return 1;if(typeof i!="string"||typeof t!="string")return 0;const n=i.startsWith("V")?parseInt(i.substring(1))*2:parseInt(i.substring(1))*2+1,s=t.startsWith("V")?parseInt(t.substring(1))*2:parseInt(t.substring(1))*2+1;return Math.min(Math.abs(n-s),2*e-Math.abs(n-s))===1?.5:0};class b_{constructor(t,e={}){this.polygon=y_(t.map(n=>new ot(n.x,n.y))),this.epsilon=e.epsilon!==void 0?e.epsilon:1e-5,this.tangentEpsilon=e.tangentEpsilon||1e-4}containsBall(t,e){const{distance:n}=mu(t,this.polygon);return n>=e-this.epsilon}computeMedialPoint(t,e){let n=t,s=e,r=t.add(e).scale(.5),o=r.dist(t);for(;s.dist(n)>this.epsilon;)this.containsBall(r,o)?n=r:s=r,r=n.add(s).scale(.5),o=r.dist(t);return r.radius=o,r}computeStructuredSkeleton(t){const e=[],n=[],s=this.polygon.length,r=this.polygon.map((f,h)=>{const d=(h-1+s)%s,m=(h+1)%s,_=f.sub(this.polygon[d]),x=this.polygon[m].sub(f);return _.cross(x)>=0?"CONVEX":"CONCAVE"});let o=0;for(let f=0;f<s;f++)o+=this.polygon[f].dist(this.polygon[(f+1)%s]);const a=t*s,c=[];for(let f=0;f<s;f++){const h=this.polygon[f],d=this.polygon[(f+1)%s],m=h.dist(d);if(m===0)continue;const _=M_(h,d);let x=Math.max(5,Math.floor(m/o*a));x%2!==0&&(x+=1);for(let p=1;p<x;p++){const g=h.add(d.sub(h).scale(p/x));let y=null,S=1/0;for(let P=0;P<s;P++){const w=Rl(g,_,this.polygon[P],this.polygon[(P+1)%s]);w&&w.s<S&&(S=w.s,y=w.point)}if(y){const P=this.computeMedialPoint(g,y);c.push(P)}}}c.forEach(f=>{f.governors=new Set;for(let h=0;h<s;h++){const d=this.polygon[h],m=this.polygon[(h+1)%s],_=Vn(f,d,m),x=f.dist(_),p=Math.max(.2,f.radius*.05);if(Math.abs(x-f.radius)<p){const g=m.sub(d),y=g.length(),S=y===0?x:Math.abs((f.x-d.x)*g.y-(f.y-d.y)*g.x)/y;Math.abs(S-f.radius)<p&&f.governors.add("E"+h),_.dist(d)<.05*y&&r[h]==="CONCAVE"?f.governors.add("V"+h):_.dist(m)<.05*y&&r[(h+1)%s]==="CONCAVE"&&f.governors.add("V"+(h+1)%s)}}});const l=c.filter(f=>{let h=[];for(let m=0;m<s;m++)if(f.governors.has("E"+m)||f.governors.has("V"+m)){const _=this.polygon[m],x=this.polygon[(m+1)%s],g=(f.governors.has("V"+m)?_:Vn(f,_,x)).sub(f).normalize();g.lengthSq()>1e-6&&h.push(g)}if(h.length<2)return!0;let d=1;for(let m=0;m<h.length;m++)for(let _=m+1;_<h.length;_++){const x=h[m].dot(h[_]);d=Math.min(d,x)}return d<.92});e.push(...l);for(let f=0;f<s;f++)if(r[f]==="CONVEX"){const h=(f-1+s)%s,d=(f+1)%s,m=this.polygon[h],_=this.polygon[f],x=this.polygon[d],p=m.sub(_).normalize(),g=x.sub(_).normalize();if(p.dot(g)>-.92){const P=new ot(_.x,_.y);P.radius=0,P.isEndPoint=!0,P.governors=new Set(["E"+h,"V"+f,"E"+f]),n.push(P)}}const u=[];return l.forEach(f=>{let h=!1;for(const d of u){let m=0;if(f.governors.forEach(_=>d.governors.forEach(x=>{m+=Ds(_,x,s)})),m>=1&&f.dist(d)<2.5){d.x=(d.x*d.count+f.x)/(d.count+1),d.y=(d.y*d.count+f.y)/(d.count+1),d.radius=(d.radius*d.count+f.radius)/(d.count+1),d.count++,f.governors.forEach(_=>d.governors.add(_)),h=!0;break}}if(!h){const d=new ot(f.x,f.y);d.governors=new Set(f.governors),d.count=1,d.isEndPoint=!1,d.radius=f.radius,u.push(d)}}),n.push(...u),{regularPoints:e,junctionPoints:n}}simplifySkeleton(t,e,n=20){const r=e.filter(g=>g.isEndPoint).map(g=>{const y=new ot(g.x,g.y);return y.governors=new Set(g.governors),y.isEndPoint=!0,y.count=1,y.radius=0,y});t.forEach(g=>{let y=!1;for(const S of r){if(S.isEndPoint)continue;let P=0;if(g.governors.forEach(w=>S.governors.forEach(b=>{P+=Ds(w,b,this.polygon.length)})),P>=1&&g.dist(S)<2.5){S.x=(S.x*S.count+g.x)/(S.count+1),S.y=(S.y*S.count+g.y)/(S.count+1),S.radius=(S.radius*S.count+g.radius)/(S.count+1),S.count++,g.governors.forEach(w=>S.governors.add(w)),y=!0;break}}if(!y){const S=new ot(g.x,g.y);S.governors=new Set(g.governors),S.count=1,S.isEndPoint=!1,S.radius=g.radius,r.push(S)}});const o=r.map(()=>new Set),a=[];for(let g=0;g<r.length;g++)for(let y=g+1;y<r.length;y++){let S=0;r[g].governors.forEach(P=>r[y].governors.forEach(w=>{S+=Ds(P,w,this.polygon.length)})),S>=1&&a.push({i:g,j:y,distSq:r[g].distSq(r[y])})}for(const g of a){let y=!0;for(let S=0;S<r.length;S++)if(!(S===g.i||S===g.j)&&r[g.i].distSq(r[S])<g.distSq-.01&&r[S].distSq(r[g.j])<g.distSq-.01){let P=0,w=0;if(r[S].governors.forEach(b=>r[g.i].governors.forEach(M=>{P+=Ds(b,M,this.polygon.length)})),r[S].governors.forEach(b=>r[g.j].governors.forEach(M=>{w+=Ds(b,M,this.polygon.length)})),P>=1&&w>=1){y=!1;break}}y&&(o[g.i].add(g.j),o[g.j].add(g.i))}const c=r.map(()=>!0);let l=!0;for(;l;){l=!1;for(let g=0;g<r.length;g++)if(c[g]){for(const y of Array.from(o[g])){if(!c[y]||g>=y)continue;const S=(r[g].radius+r[y].radius)/2,P=Math.max(n,S*.4);if(r[g].dist(r[y])<P){if(r[g].isEndPoint&&r[y].isEndPoint)continue;const w=r[g].isEndPoint?g:r[y].isEndPoint?y:g,b=w===g?y:g;r[w].isEndPoint||(r[w].x=(r[w].x*r[w].count+r[b].x*r[b].count)/(r[w].count+r[b].count),r[w].y=(r[w].y*r[w].count+r[b].y*r[b].count)/(r[w].count+r[b].count),r[w].radius=(r[w].radius*r[w].count+r[b].radius*r[b].count)/(r[w].count+r[b].count),r[w].count+=r[b].count),r[b].governors.forEach(M=>r[w].governors.add(M)),o[b].forEach(M=>{M!==w&&(o[M].delete(b),o[M].add(w),o[w].add(M))}),o[w].delete(b),c[b]=!1,o[b].clear(),l=!0;break}}if(l)break}}const u=(g,y)=>{const P=y.x-g.x,w=y.y-g.y,b=new ot(g.x+P*.001,g.y+w*.001),M=new ot(y.x-P*.001,y.y-w*.001);for(let A=0;A<this.polygon.length;A++){const D=this.polygon[A],T=this.polygon[(A+1)%this.polygon.length],I=(F,L,O)=>(O.y-F.y)*(L.x-F.x)>(L.y-F.y)*(O.x-F.x);if(I(b,D,T)!==I(M,D,T)&&I(b,M,D)!==I(b,M,T))return!1}return!0},f=Array.from({length:r.length},(g,y)=>y),h=g=>f[g]===g?g:f[g]=h(f[g]),d=(g,y)=>{const S=h(g),P=h(y);return S!==P?(f[S]=P,!0):!1};for(let g=0;g<r.length;g++)if(c[g])for(const y of o[g])c[y]&&g<y&&d(g,y);for(let g=0;g<r.length;g++)if(c[g])for(let y=g+1;y<r.length;y++)c[y]&&h(g)!==h(y)&&u(r[g],r[y])&&(d(g,y),o[g].add(y),o[y].add(g));const m=(g,y,S)=>{const P=S.sub(y),w=g.sub(y),b=P.lengthSq();if(b<1e-10)return g.dist(y);let M=w.dot(P)/b;M=Math.max(0,Math.min(1,M));const A=y.add(P.scale(M));return g.dist(A)};let _=!0;for(;_;){_=!1;for(let g=0;g<r.length;g++)if(!(!c[g]||r[g].isEndPoint)){if(o[g].size===2){const y=Array.from(o[g]),S=y[0],P=y[1],w=r[S],b=r[P],M=r[g],A=w.sub(M).normalize(),D=b.sub(M).normalize(),T=A.dot(D),I=m(M,w,b);let U=!1;for(const F of M.governors)if(!w.governors.has(F)&&!b.governors.has(F)){U=!0;break}(T<-.95||I<.5||!U)&&(o[S].delete(g),o[P].delete(g),S!==P&&(o[S].add(P),o[P].add(S)),c[g]=!1,o[g].clear(),_=!0)}else if(o[g].size<=1){const y=Array.from(o[g]);y.length===1&&o[y[0]].delete(g),c[g]=!1,o[g].clear(),_=!0}}}const x=[];for(let g=0;g<r.length;g++)if(c[g])for(const y of o[g])g<y&&x.push({start:r[g],end:r[y]});const p=r.filter((g,y)=>c[y]);for(let g=0;g<r.length;g++)c[g]&&(r[g].isJunction=o[g].size>=3);return{segments:x,nodes:p}}computeVoronoiCells(t,e=3e3,n=3e3){const s=[];if(t.length===0)return[];const r=(o,a,c)=>{const l=[];if(o.length===0)return[];for(let u=0;u<o.length;u++){const f=o[u],h=o[(u+1)%o.length],d=f.sub(a).dot(c),m=h.sub(a).dot(c);if(d>=-1e-9&&l.push(f),d>=0&&m<0||d<0&&m>=0){const _=d-m;if(Math.abs(_)>1e-9){const x=d/_;l.push(f.add(h.sub(f).scale(x)))}}}return l};for(let o=0;o<t.length;o++){const a=t[o];let c=[new ot(-e,-n),new ot(e,-n),new ot(e,n),new ot(-e,n)];for(let l=0;l<t.length;l++){if(o===l)continue;const u=t[l],f=a.add(u).scale(.5),h=a.sub(u).normalize();c=r(c,f,h)}s.push({seed:a,polygon:c})}return s}}class w_{constructor(t){this.appContext=t,this.worker=new Worker(new URL("/assets/rhino.worker-_byWEIAV.js",import.meta.url)),this.metadataResolve=null,this.loadResolve=null,this.exportResolve=null,this.rejectCallback=null,this.layers=[],this.worker.onmessage=e=>{const{type:n,success:s,layers:r,objectCount:o,geometries:a,error:c}=e.data;if(!s){console.error("[RhinoManager] Worker error:",c),this.rejectCallback&&this.rejectCallback(new Error(c));return}n==="metadata-result"?(this.layers=r,this.metadataResolve&&this.metadataResolve({layers:r,objectCount:o})):n==="load-result"?(this.processGeometries(a),this.loadResolve&&this.loadResolve(a)):n==="export-result"&&this.exportResolve&&this.exportResolve(e.data.bytes)}}parseMetadata(t){return new Promise((e,n)=>{this.metadataResolve=e,this.rejectCallback=n,this.worker.postMessage({type:"parse-metadata",buffer:t})})}loadLayers(t,e){return new Promise((n,s)=>{this.loadResolve=n,this.rejectCallback=s,this.worker.postMessage({type:"load-layers",buffer:t,layerIndices:e})})}processGeometries(t){console.log(`[RhinoManager] Processing ${t.length} geometries...`),this.clearRhinoGeometries();const e=[],n=new Zf;t.forEach(s=>{const r=this.layers.find(c=>c.index===s.layerIndex),o=r?r.color:{r:128,g:128,b:128},a=o.r<<16|o.g<<8|o.b;if(s.type==="mesh")try{const c=typeof s.data=="string"?JSON.parse(s.data):s.data,l=n.parse(c),u=new De({color:a,transparent:!0,opacity:.4,side:qe}),f=new xt(l,u);f.name=s.name,f.userData={type:"rhino-geometry"},this.appContext.rhinoGroup.add(f)}catch(c){console.error("[RhinoManager] Failed to load mesh:",c)}else if(s.type==="curve")try{const c=s.points.map(h=>new N(h[0],h[1],h[2])),l=new te().setFromPoints(c),u=new hn({color:a,linewidth:2}),f=new be(l,u);if(f.name=s.name,f.userData={type:"rhino-geometry"},this.appContext.rhinoGroup.add(f),s.points.length>=3){const h=s.points[0],d=s.points[s.points.length-1];if(Math.sqrt((h[0]-d[0])**2+(h[1]-d[1])**2+(h[2]-d[2])**2)<.2){const _=s.points.map(x=>[x[0],x[1]]);_.pop(),e.push(_)}}}catch(c){console.error("[RhinoManager] Failed to load curve:",c)}}),e.length>0&&(console.log(`[RhinoManager] Found ${e.length} closed boundary curves. Setting imported polygons!`),this.appContext.setPolygonsFrom3dm(e))}clearRhinoGeometries(){const t=this.appContext.rhinoGroup;if(t)for(;t.children.length>0;){const e=t.children[0];t.remove(e),e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach(n=>n.dispose()):e.material.dispose())}}exportSceneTo3dm(t="medial_axis_export.3dm"){console.log("[RhinoManager] Triggering background export to .3dm...");const e=this.appContext.state.activePolygonId,n=this.appContext.state.importedPolygons.map(s=>{this.appContext.state.activePolygonId=s.id;const r=s.polygon.map(p=>[p.x,p.y,0]);if(!s.hasScaffold)return{boundary:r,hasScaffold:!1};const o=[];if(this.appContext.state.showSkeleton&&s.polygon.length>=3)if(s.planarGraph){const p=s.planarGraph;p.edges.forEach(g=>{if(g[2]==="skeleton"){const y=p.vertices[g[0]],S=p.vertices[g[1]];o.push([[y.x,y.y,0],[S.x,S.y,0]])}})}else if(this.appContext.state.simplifySkeleton)(this.appContext.state.pruneBranches?s.skeletonData.simplifiedSegments.filter(g=>!(g.start.isEndPoint||g.end.isEndPoint)):s.skeletonData.simplifiedSegments).forEach(g=>{o.push([[g.start.x,g.start.y,0],[g.end.x,g.end.y,0]])});else{const p=s.skeletonData.regularPoints,g=this.appContext.state.samplesPerEdge;for(let y=0;y<s.polygon.length;y++){const S=[];for(let P=0;P<g;P++){const w=y*g+P;p[w]&&S.push([p[w].x,p[w].y,0])}S.length>=2&&o.push(S)}}const a=[];if(this.appContext.state.showSkeleton&&this.appContext.state.showRibs)if(s.planarGraph){const p=s.planarGraph;p.edges.forEach(g=>{if(g[2]&&g[2].startsWith("rib_")){const y=p.vertices[g[0]],S=p.vertices[g[1]];a.push({start:[y.x,y.y,0],end:[S.x,S.y,0]})}})}else s.id===e&&this.appContext.acceptedRibsCache&&this.appContext.acceptedRibsCache.forEach(p=>{a.push({start:[p.source.x,p.source.y,0],end:[p.target.x,p.target.y,0]})});const c=[];if(s.id===e&&this.appContext.state.hoverCircle&&this.appContext.state.hoveredMedialPoint){const p=this.appContext.state.hoveredMedialPoint;c.push({center:[p.x,p.y,0],radius:p.radius})}s.polygon.length>=3&&s.skeletonData.simplifiedNodes&&s.skeletonData.simplifiedNodes.filter(g=>!g.isEndPoint).forEach(g=>{c.push({center:[g.x,g.y,0],radius:g.radius||5})});const l=[];s.structuralBays&&s.structuralBays.forEach(p=>{l.push(p.map(g=>[g.x,g.y,0]))});const u=[];s.unprunedStructuralBays&&s.unprunedStructuralBays.forEach(p=>{u.push(p.map(g=>[g.x,g.y,0]))});const f=[];s.polygon.length>=3&&s.skeletonData&&s.skeletonData.simplifiedSegments&&s.skeletonData.simplifiedSegments.filter(g=>!(g.start.isEndPoint||g.end.isEndPoint)).forEach(g=>{f.push([g.start.x,g.start.y]),f.push([g.end.x,g.end.y]),g.divisionPoints&&g.divisionPoints.forEach(y=>{f.push([y.x,y.y])})});let h=!0,d=0;for(let p=0;p<s.polygon.length;p++){const g=s.polygon[p],y=s.polygon[(p+1)%s.polygon.length];d+=g.x*y.y-y.x*g.y}h=d>0;const m=[];for(let p=0;p<s.polygon.length;p++){const g=s.polygon[p],y=s.polygon[(p+1)%s.polygon.length],S=y.x-g.x,P=y.y-g.y,w=Math.hypot(S,P);let b=0,M=0;w>1e-6&&(h?(b=P/w,M=-S/w):(b=-P/w,M=S/w)),m.push(new ot(b,M))}const _=[];for(let p=0;p<s.polygon.length;p++){const g=s.polygon[p],y=s.polygon[(p+1)%s.polygon.length],S=m[p];_.push(T_(g,y,S,s,this.appContext.state.importedPolygons))}const x=[];return s.structuralBays&&s.structuralBays.forEach(p=>{x.push(P_(p,s.polygon))}),{boundary:r,hasScaffold:!0,skeleton:o,ribs:a,circles:c,bays:l,unprunedBays:u,prunedSkeletonVertices:f,planarGraphVertices:s.planarGraph?s.planarGraph.vertices.map(p=>[p.x,p.y,0]):null,planarGraphEdges:s.planarGraph?s.planarGraph.edges.map(p=>[p[0],p[1]]):null,segmentContexts:_,cellIsCorner:x,boundaryNormals:m.map(p=>[p.x,p.y,0])}});return this.appContext.state.activePolygonId=e,new Promise((s,r)=>{this.exportResolve=o=>{try{if(typeof document<"u"){const a=new Blob([o],{type:"application/octet-stream"}),c=document.createElement("a");c.href=URL.createObjectURL(a),c.download=t,document.body.appendChild(c),c.click(),document.body.removeChild(c),URL.revokeObjectURL(c.href)}console.log(`[RhinoManager] Exported ${o.length} bytes to ${t}`),s(o)}catch(a){r(a)}finally{this.exportResolve=null,this.rejectCallback=null}},this.rejectCallback=o=>{this.exportResolve=null,this.rejectCallback=null,r(o)},this.worker.postMessage({type:"export-scene",polygons:n,numFloors:this.appContext.state.numFloors,floorHeight:this.appContext.state.floorHeight,groundFloorHeightFactor:this.appContext.state.groundFloorHeightFactor,show3DColumns:this.appContext.state.show3DColumns,show3DBeams:this.appContext.state.show3DBeams,showFloorSlabs:this.appContext.state.showFloorSlabs,showRoofSlab:this.appContext.state.showRoofSlab,showBriseSoleil:this.appContext.state.showBriseSoleil,show3DCells:this.appContext.state.show3DCells,columnRadius:this.appContext.state.columnRadius,beamWidth:this.appContext.state.beamWidth,beamDepth:this.appContext.state.beamDepth,slabThickness:this.appContext.state.slabThickness,louverWidth:this.appContext.state.louverWidth,louverDepth:this.appContext.state.louverDepth,louverSpacing:this.appContext.state.louverSpacing,vaultHeight:this.appContext.state.vaultHeight,showVaultedRoofs:this.appContext.state.showVaultedRoofs,cantileverScale:this.appContext.state.cantileverScale,briseFinScale:this.appContext.state.briseFinScale,roofHyparH:this.appContext.state.roofHyparH,roofHyparSlatSpacing:this.appContext.state.roofHyparSlatSpacing,roofPitchRH:this.appContext.state.roofPitchRH})})}}function T_(i,t,e,n,s){const r=i.add(t).scale(.5),o=new ot(r.x+e.x*.1,r.y+e.y*.1),a=e;let c=1/0,l="open_space";return s.forEach(u=>{const f=u.id===n.id;for(let h=0;h<u.polygon.length;h++){const d=u.polygon[h],m=u.polygon[(h+1)%u.polygon.length];if(f){const x=d.dist(i),p=m.dist(t),g=d.dist(t),y=m.dist(i);if(x<1e-4&&p<1e-4||g<1e-4&&y<1e-4)continue}const _=Rl(o,a,d,m);_&&_.s<c&&(c=_.s,l=f?"courtyard":"other_building")}}),c<.5?"touching":c<25?l:"open_space"}function A_(i,t){const e=t.length;if(e<3)return!1;const n=t[(i-1+e)%e],s=t[i],r=t[(i+1)%e],o=s.x-n.x,a=s.y-n.y,c=Math.hypot(o,a),l=r.x-s.x,u=r.y-s.y,f=Math.hypot(l,u);return c<1e-6||f<1e-6?!1:(o*l+a*u)/(c*f)<.98}function P_(i,t){const e=t.length;for(const n of i)for(let s=0;s<e;s++){const r=t[s];if(Math.hypot(n.x-r.x,n.y-r.y)<.1&&A_(s,t))return!0}return!1}class gh{constructor(t=.001,e=new Map){this.vertices=[],this.originalVertices=[],this.edges=[],this.vertexTolerance=t,this.vertexOverrides=e}getOverride(t){for(const[e,n]of this.vertexOverrides.entries()){const s=e.split(","),r=parseFloat(s[0]),o=parseFloat(s[1]);if(Math.hypot(t.x-r,t.y-o)<.1)return n}return null}addVertex(t){const e=t.origX!==void 0&&t.origY!==void 0?new ot(t.origX,t.origY):t,s=this.getOverride(e)||t,r=Math.max(this.vertexTolerance,.02);for(let o=0;o<this.vertices.length;o++)if(this.vertices[o].dist(s)<r)return o;return this.vertices.push(new ot(s.x,s.y)),this.originalVertices.push(new ot(e.x,e.y)),this.vertices.length-1}addEdge(t,e,n="unknown"){const s=this.addVertex(t),r=this.addVertex(e);if(s===r)return;this.edges.some(a=>a[0]===s&&a[1]===r||a[0]===r&&a[1]===s)||this.edges.push([s,r,n])}subdivideEdges(){let t=!0,e=0;const n=20;for(;t&&e<n;){t=!1,e++;const s=[];for(const r of this.edges){const o=r[0],a=r[1],c=r[2],l=this.vertices[o],u=this.vertices[a],h=u.sub(l).length();if(h<this.vertexTolerance)continue;let d=-1;for(let m=0;m<this.vertices.length;m++){if(m===o||m===a)continue;const _=this.vertices[m],x=Vn(_,l,u);if(_.dist(x)<this.vertexTolerance){const y=l.dist(x)/h;if(y>1e-4&&y<1-1e-4){d=m;break}}}d!==-1?(s.push([o,d,c]),s.push([d,a,c]),t=!0):s.push([o,a,c])}this.edges=[];for(const r of s){const o=r[0],a=r[1],c=r[2];!this.edges.some(u=>u[0]===o&&u[1]===a||u[0]===a&&u[1]===o)&&o!==a&&this.edges.push([o,a,c])}}}extractFaces(){this.subdivideEdges();const t=this.vertices.length,e=Array.from({length:t},()=>[]);for(const[o,a]of this.edges)e[o].push(a),e[a].push(o);const n=e.map((o,a)=>{const c=this.vertices[a];return o.map(l=>{const u=this.vertices[l],f=Math.atan2(u.y-c.y,u.x-c.x);return{v:l,angle:f}}).sort((l,u)=>l.angle-u.angle).map(l=>l.v)}),s=new Set,r=[];for(let o=0;o<t;o++)for(const a of n[o]){const c=`${o},${a}`;if(s.has(c))continue;const l=[];let u=a,f=o,h=!1;for(;!s.has(`${f},${u}`);){l.push(u),s.add(`${f},${u}`);const d=n[u],m=d.indexOf(f);if(m===-1)break;const _=d[(m-1+d.length)%d.length];if(f=u,u=_,u===a&&f===o){h=!0;break}}if(h&&l.length>=3){let d=0;const m=l.map(_=>this.vertices[_]);for(let _=0;_<m.length;_++){const x=m[_],p=m[(_+1)%m.length];d+=x.x*p.y-p.x*x.y}if(d=.5*d,d>1e-4){let _=0;const x=new Set;for(let p=0;p<l.length;p++){const g=l[p],y=l[(p+1)%l.length],S=this.edges.find(P=>P[0]===g&&P[1]===y||P[0]===y&&P[1]===g);if(S){const P=S[2];P==="boundary"?_++:P&&P.startsWith("rib_")&&x.add(P)}}_>0&&r.push(m)}}}return r}}class C_{constructor(t){this.viewport=t}async generateRender(t,e,n){try{e("Preparing scene renders...");const s=this.viewport.container.clientWidth,r=this.viewport.container.clientHeight,o=this.viewport.renderer.getPixelRatio(),a=document.getElementById("imagen-resolution");if(a){const I=a.value;let U=3840,F=2160;I==="4k"?(U=3840,F=2160):I==="2k"?(U=2560,F=1440):I==="1k"&&(U=1920,F=1080),this.viewport.camera.aspect=U/F,this.viewport.camera.updateProjectionMatrix(),this.viewport.renderer.setPixelRatio(1),this.viewport.renderer.setSize(U,F,!1),this.viewport.composer.setSize(U,F),this.viewport.saoPass&&this.viewport.saoPass.setSize(U,F)}let c=null;this.viewport.osmGroup&&this.viewport.osmGroup.children.forEach(I=>{I.name==="Landmark Buildings (Merged)"&&(c=I,c.material&&c.material.color.setHex(16777215))}),this.viewport.setDisplayMode("STANDARD"),this.viewport.render();let u=this.viewport.renderer.domElement.toDataURL("image/jpeg",.95).split(",")[1];this.viewport.setDisplayMode("DEPTH"),this.viewport.render();const f=this.viewport.renderer.domElement.toDataURL("image/jpeg",.9).split(",")[1];this.viewport.setDisplayMode("STANDARD"),c&&c.material&&c.material.color.setHex(16753920),this.viewport.camera.aspect=s/r,this.viewport.camera.updateProjectionMatrix(),this.viewport.renderer.setPixelRatio(o),this.viewport.renderer.setSize(s,r),this.viewport.composer.setSize(s,r),this.viewport.saoPass&&this.viewport.saoPass.setSize(s,r),this.viewport.onWindowResize(),n&&n(`data:image/jpeg;base64,${u}`,`data:image/jpeg;base64,${f}`),e("Fetching API Key...");const h=await fetch("/api/get-key");if(!h.ok)throw new Error("Failed to retrieve API key");const{key:d}=await h.json();if(!d)throw new Error("API Key is empty");e("Compiling scene parameters...");const m=this.viewport.controls?this.viewport.camera.position.distanceTo(this.viewport.controls.target).toFixed(1):0,_=this.viewport.controls?(Math.PI/2-this.viewport.controls.getPolarAngle()).toFixed(2):0,x=this.viewport.controls?this.viewport.controls.getAzimuthalAngle().toFixed(2):0,p=this.viewport.camera.fov||"Orthographic",g=`Camera Distance: ${m}m, Pitch: ${_} rad, Yaw: ${x} rad, FOV: ${p}`,S=`Transform this building design geometry into a breathtaking, ultra-realistic architectural rendering.
STRICTLY apply the lighting instructions specified by the user: "${t||"A modern architectural building design."}".

MATERIAL & TECTONIC SYSTEM RULES:
The input geometry is color-coded. You must apply the material and tectonic systems according to their display colors:
- All grey elements in the input image represent concrete masonry. Render them as concrete masonry surfaces (e.g., exposed concrete blockwork, concrete slabs, or solid masonry panels).
- All brown elements in the input image represent timber tectonics. Render them as timber tectonic systems (e.g., natural timber frames, structural timber members, or cladding).

Ensure hyper-crisp details, realistic ambient and ray-traced lighting matching the requested lighting instructions, and elegant surrounding landscaping (gardens, pathways). The final image must look like a premium architectural visualization render, completely clean, sharp, and awe-inspiring, while strictly preserving the silhouette, scale, and color-coded materials of the original geometry.`,P=`Camera Context: ${g}
${S}`;e("Dispatching payload to Gemini API...");const b=`https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-image-preview:generateContent?key=${d}`,M={systemInstruction:{parts:[{text:"You are an advanced architectural rendering agent utilizing strict structural control. Your primary directive is 100% geometry, silhouette, and scale preservation of the input building design. Treat the input image as an absolute structural mask. Do not alter the base geometry, structural columns, beams, vaults, or floor slabs. You must apply materials based on the display colors in the input image: grey elements represent concrete masonry, and brown elements represent timber tectonics. Compute realistic architectural lighting and render professional architectural visualization environments around the building."}]},contents:[{role:"user",parts:[{text:`CRITICAL INSTRUCTION: You MUST function like a strict depth-map renderer. Maintain the EXACT silhouette, contours, 3D wireframe structure, and camera perspective of the input image.

RENDER INSTRUCTIONS:
${P}`},{text:"Input 1 (Base Geometry - DO NOT ALTER SHAPE):"},{inlineData:{mimeType:"image/jpeg",data:u}}]}],generationConfig:{responseModalities:["IMAGE"],temperature:0}};console.log(`Payload string length: ${JSON.stringify(M).length}`),console.log(`b64Beauty length: ${u.length}`),console.log(`b64Depth length: ${f.length}`);const A=document.getElementById("imagen-payload-display");if(A){const I=JSON.parse(JSON.stringify(M));I.contents&&I.contents[0].parts[2]&&(I.contents[0].parts[2].inlineData.data=`<BASE64_IMAGE_DATA_TRUNCATED (${u.length} bytes)>`),A.value=JSON.stringify(I,null,2)}const D=await fetch(b,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(M)});if(!D.ok){const I=await D.text();throw new Error(`API Error ${D.status}: ${I}`)}e("Receiving generated image...");const T=await D.json();if(T.candidates&&T.candidates[0].content.parts[0].inlineData){const I=T.candidates[0].content.parts[0].inlineData.data,U=T.candidates[0].content.parts[0].inlineData.mimeType||"image/jpeg";return e("Ready."),{beauty:`data:image/jpeg;base64,${u}`,depth:`data:image/jpeg;base64,${f}`,result:`data:${U};base64,${I}`}}else throw new Error("API returned OK, but no image data found.")}catch(s){throw console.error("ImagenAPI Error:",s),e(`Error: ${s.message}`),this.viewport.setDisplayMode("STANDARD"),s}}}const Zr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Ss{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const R_=new tr(-1,1,1,-1,0,1);class I_ extends te{constructor(){super(),this.setAttribute("position",new Zt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Zt([0,2,0,0,2,0],2))}}const D_=new I_;class Il{constructor(t){this._mesh=new xt(D_,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,R_)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class L_ extends Ss{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof Ze?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Oi.clone(t.uniforms),this.material=new Ze({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Il(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class xh extends Ss{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class N_ extends Ss{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class U_{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new gt);this._width=n.width,this._height=n.height,e=new vn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:bn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new L_(Zr),this.copyPass.material.blending=tn,this.timer=new Jf}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){const a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}xh!==void 0&&(o instanceof xh?n=!0:o instanceof N_&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new gt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class F_ extends Ss{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new ee}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}}class O_{constructor(t=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let e=0;e<256;e++)this.p[e]=Math.floor(t.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(t,e){let n,s,r;const o=.5*(Math.sqrt(3)-1),a=(t+e)*o,c=Math.floor(t+a),l=Math.floor(e+a),u=(3-Math.sqrt(3))/6,f=(c+l)*u,h=c-f,d=l-f,m=t-h,_=e-d;let x,p;m>_?(x=1,p=0):(x=0,p=1);const g=m-x+u,y=_-p+u,S=m-1+2*u,P=_-1+2*u,w=c&255,b=l&255,M=this.perm[w+this.perm[b]]%12,A=this.perm[w+x+this.perm[b+p]]%12,D=this.perm[w+1+this.perm[b+1]]%12;let T=.5-m*m-_*_;T<0?n=0:(T*=T,n=T*T*this._dot(this.grad3[M],m,_));let I=.5-g*g-y*y;I<0?s=0:(I*=I,s=I*I*this._dot(this.grad3[A],g,y));let U=.5-S*S-P*P;return U<0?r=0:(U*=U,r=U*U*this._dot(this.grad3[D],S,P)),70*(n+s+r)}noise3d(t,e,n){let s,r,o,a;const l=(t+e+n)*.3333333333333333,u=Math.floor(t+l),f=Math.floor(e+l),h=Math.floor(n+l),d=1/6,m=(u+f+h)*d,_=u-m,x=f-m,p=h-m,g=t-_,y=e-x,S=n-p;let P,w,b,M,A,D;g>=y?y>=S?(P=1,w=0,b=0,M=1,A=1,D=0):g>=S?(P=1,w=0,b=0,M=1,A=0,D=1):(P=0,w=0,b=1,M=1,A=0,D=1):y<S?(P=0,w=0,b=1,M=0,A=1,D=1):g<S?(P=0,w=1,b=0,M=0,A=1,D=1):(P=0,w=1,b=0,M=1,A=1,D=0);const T=g-P+d,I=y-w+d,U=S-b+d,F=g-M+2*d,L=y-A+2*d,O=S-D+2*d,B=g-1+3*d,W=y-1+3*d,G=S-1+3*d,q=u&255,st=f&255,nt=h&255,ct=this.perm[q+this.perm[st+this.perm[nt]]]%12,Pt=this.perm[q+P+this.perm[st+w+this.perm[nt+b]]]%12,Tt=this.perm[q+M+this.perm[st+A+this.perm[nt+D]]]%12,Z=this.perm[q+1+this.perm[st+1+this.perm[nt+1]]]%12;let ht=.6-g*g-y*y-S*S;ht<0?s=0:(ht*=ht,s=ht*ht*this._dot3(this.grad3[ct],g,y,S));let at=.6-T*T-I*I-U*U;at<0?r=0:(at*=at,r=at*at*this._dot3(this.grad3[Pt],T,I,U));let ut=.6-F*F-L*L-O*O;ut<0?o=0:(ut*=ut,o=ut*ut*this._dot3(this.grad3[Tt],F,L,O));let vt=.6-B*B-W*W-G*G;return vt<0?a=0:(vt*=vt,a=vt*vt*this._dot3(this.grad3[Z],B,W,G)),32*(s+r+o+a)}noise4d(t,e,n,s){const r=this.grad4,o=this.simplex,a=this.perm,c=(Math.sqrt(5)-1)/4,l=(5-Math.sqrt(5))/20;let u,f,h,d,m;const _=(t+e+n+s)*c,x=Math.floor(t+_),p=Math.floor(e+_),g=Math.floor(n+_),y=Math.floor(s+_),S=(x+p+g+y)*l,P=x-S,w=p-S,b=g-S,M=y-S,A=t-P,D=e-w,T=n-b,I=s-M,U=A>D?32:0,F=A>T?16:0,L=D>T?8:0,O=A>I?4:0,B=D>I?2:0,W=T>I?1:0,G=U+F+L+O+B+W,q=o[G][0]>=3?1:0,st=o[G][1]>=3?1:0,nt=o[G][2]>=3?1:0,ct=o[G][3]>=3?1:0,Pt=o[G][0]>=2?1:0,Tt=o[G][1]>=2?1:0,Z=o[G][2]>=2?1:0,ht=o[G][3]>=2?1:0,at=o[G][0]>=1?1:0,ut=o[G][1]>=1?1:0,vt=o[G][2]>=1?1:0,pt=o[G][3]>=1?1:0,It=A-q+l,At=D-st+l,Q=T-nt+l,J=I-ct+l,$=A-Pt+2*l,et=D-Tt+2*l,yt=T-Z+2*l,kt=I-ht+2*l,z=A-at+3*l,Gt=D-ut+3*l,Nt=T-vt+3*l,Wt=I-pt+3*l,mt=A-1+4*l,se=D-1+4*l,R=T-1+4*l,E=I-1+4*l,V=x&255,tt=p&255,lt=g&255,dt=y&255,St=a[V+a[tt+a[lt+a[dt]]]]%32,K=a[V+q+a[tt+st+a[lt+nt+a[dt+ct]]]]%32,it=a[V+Pt+a[tt+Tt+a[lt+Z+a[dt+ht]]]]%32,bt=a[V+at+a[tt+ut+a[lt+vt+a[dt+pt]]]]%32,Lt=a[V+1+a[tt+1+a[lt+1+a[dt+1]]]]%32;let _t=.6-A*A-D*D-T*T-I*I;_t<0?u=0:(_t*=_t,u=_t*_t*this._dot4(r[St],A,D,T,I));let Mt=.6-It*It-At*At-Q*Q-J*J;Mt<0?f=0:(Mt*=Mt,f=Mt*Mt*this._dot4(r[K],It,At,Q,J));let Yt=.6-$*$-et*et-yt*yt-kt*kt;Yt<0?h=0:(Yt*=Yt,h=Yt*Yt*this._dot4(r[it],$,et,yt,kt));let jt=.6-z*z-Gt*Gt-Nt*Nt-Wt*Wt;jt<0?d=0:(jt*=jt,d=jt*jt*this._dot4(r[bt],z,Gt,Nt,Wt));let oe=.6-mt*mt-se*se-R*R-E*E;return oe<0?m=0:(oe*=oe,m=oe*oe*this._dot4(r[Lt],mt,se,R,E)),27*(u+f+h+d+m)}_dot(t,e,n){return t[0]*e+t[1]*n}_dot3(t,e,n,s){return t[0]*e+t[1]*n+t[2]*s}_dot4(t,e,n,s,r){return t[0]*e+t[1]*n+t[2]*s+t[3]*r}}const Ur={defines:{PERSPECTIVE_CAMERA:1,KERNEL_SIZE:32},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},kernel:{value:null},cameraNear:{value:null},cameraFar:{value:null},resolution:{value:new gt},cameraProjectionMatrix:{value:new xe},cameraInverseProjectionMatrix:{value:new xe},kernelRadius:{value:8},minDistance:{value:.005},maxDistance:{value:.05}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;

		uniform vec3 kernel[ KERNEL_SIZE ];

		uniform vec2 resolution;

		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraInverseProjectionMatrix;

		uniform float kernelRadius;
		uniform float minDistance; // avoid artifacts caused by neighbour fragments with minimal depth difference
		uniform float maxDistance; // avoid the influence of fragments which are too far away

		varying vec2 vUv;

		#include <packing>

		#ifdef USE_REVERSED_DEPTH_BUFFER

			const float depthThreshold = 0.0;

		#else

			const float depthThreshold = 1.0;

		#endif

		float getDepth( const in vec2 screenPosition ) {

			return texture2D( tDepth, screenPosition ).x;

		}

		float getLinearDepth( const in vec2 screenPosition ) {

			#if PERSPECTIVE_CAMERA == 1

				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );

			#else

				return texture2D( tDepth, screenPosition ).x;

			#endif

		}

		float getViewZ( const in float depth ) {

			#if PERSPECTIVE_CAMERA == 1

				return perspectiveDepthToViewZ( depth, cameraNear, cameraFar );

			#else

				return orthographicDepthToViewZ( depth, cameraNear, cameraFar );

			#endif

		}

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth, const in float viewZ ) {

			float clipW = cameraProjectionMatrix[2][3] * viewZ + cameraProjectionMatrix[3][3];

			vec4 clipPosition = vec4( ( vec3( screenPosition, depth ) - 0.5 ) * 2.0, 1.0 );

			clipPosition *= clipW; // unprojection.

			return ( cameraInverseProjectionMatrix * clipPosition ).xyz;

		}

		vec3 getViewNormal( const in vec2 screenPosition ) {

			return unpackRGBToNormal( texture2D( tNormal, screenPosition ).xyz );

		}

		void main() {

			float depth = getDepth( vUv );

			if ( depth == depthThreshold ) {

				gl_FragColor = vec4( 1.0 ); // don't influence background

			} else {

				float viewZ = getViewZ( depth );

				vec3 viewPosition = getViewPosition( vUv, depth, viewZ );
				vec3 viewNormal = getViewNormal( vUv );

				vec2 noiseScale = vec2( resolution.x / 4.0, resolution.y / 4.0 );
				vec3 random = vec3( texture2D( tNoise, vUv * noiseScale ).r );

				// compute matrix used to reorient a kernel vector

				vec3 tangent = normalize( random - viewNormal * dot( random, viewNormal ) );
				vec3 bitangent = cross( viewNormal, tangent );
				mat3 kernelMatrix = mat3( tangent, bitangent, viewNormal );

				float occlusion = 0.0;

				for ( int i = 0; i < KERNEL_SIZE; i ++ ) {

					vec3 sampleVector = kernelMatrix * kernel[ i ]; // reorient sample vector in view space
					vec3 samplePoint = viewPosition + ( sampleVector * kernelRadius ); // calculate sample point

					vec4 samplePointNDC = cameraProjectionMatrix * vec4( samplePoint, 1.0 ); // project point and calculate NDC
					samplePointNDC /= samplePointNDC.w;

					vec2 samplePointUv = samplePointNDC.xy * 0.5 + 0.5; // compute uv coordinates

					float realDepth = getLinearDepth( samplePointUv ); // get linear depth from depth texture
					float sampleDepth = viewZToOrthographicDepth( samplePoint.z, cameraNear, cameraFar ); // compute linear depth of the sample view Z value
					float delta = sampleDepth - realDepth;

					if ( delta > minDistance && delta < maxDistance ) { // if fragment is before sample point, increase occlusion

						occlusion += 1.0;

					}

				}

				occlusion = clamp( occlusion / float( KERNEL_SIZE ), 0.0, 1.0 );

				gl_FragColor = vec4( vec3( 1.0 - occlusion ), 1.0 );

			}

		}`},Fr={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`uniform sampler2D tDepth;

		uniform float cameraNear;
		uniform float cameraFar;

		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {

			#if PERSPECTIVE_CAMERA == 1

				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );

			#else

				return texture2D( tDepth, screenPosition ).x;

			#endif

		}

		void main() {

			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},Or={uniforms:{tDiffuse:{value:null},resolution:{value:new gt}},vertexShader:`varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`uniform sampler2D tDiffuse;

		uniform vec2 resolution;

		varying vec2 vUv;

		void main() {

			vec2 texelSize = ( 1.0 / resolution );
			float result = 0.0;

			for ( int i = - 2; i <= 2; i ++ ) {

				for ( int j = - 2; j <= 2; j ++ ) {

					vec2 offset = ( vec2( float( i ), float( j ) ) ) * texelSize;
					result += texture2D( tDiffuse, vUv + offset ).r;

				}

			}

			gl_FragColor = vec4( vec3( result / ( 5.0 * 5.0 ) ), 1.0 );

		}`};class yi extends Ss{constructor(t,e,n=512,s=512,r=32){super(),this.width=n,this.height=s,this.clear=!0,this.needsSwap=!1,this.camera=e,this.scene=t,this.kernelRadius=8,this.kernel=[],this.noiseTexture=null,this.output=0,this.minDistance=.005,this.maxDistance=.1,this._visibilityCache=[],this._generateSampleKernel(r),this._generateRandomKernelRotations();const o=new Vi;o.format=Mi,o.type=ms,this.normalRenderTarget=new vn(this.width,this.height,{minFilter:Ge,magFilter:Ge,type:bn,depthTexture:o}),this.ssaoRenderTarget=new vn(this.width,this.height,{type:bn}),this.blurRenderTarget=this.ssaoRenderTarget.clone(),this.ssaoMaterial=new Ze({defines:Object.assign({},Ur.defines),uniforms:Oi.clone(Ur.uniforms),vertexShader:Ur.vertexShader,fragmentShader:Ur.fragmentShader,blending:tn}),this.ssaoMaterial.defines.KERNEL_SIZE=r,this.ssaoMaterial.uniforms.tNormal.value=this.normalRenderTarget.texture,this.ssaoMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.ssaoMaterial.uniforms.tNoise.value=this.noiseTexture,this.ssaoMaterial.uniforms.kernel.value=this.kernel,this.ssaoMaterial.uniforms.cameraNear.value=this.camera.near,this.ssaoMaterial.uniforms.cameraFar.value=this.camera.far,this.ssaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.normalMaterial=new Bf,this.normalMaterial.blending=tn,this.blurMaterial=new Ze({defines:Object.assign({},Or.defines),uniforms:Oi.clone(Or.uniforms),vertexShader:Or.vertexShader,fragmentShader:Or.fragmentShader}),this.blurMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.blurMaterial.uniforms.resolution.value.set(this.width,this.height),this.depthRenderMaterial=new Ze({defines:Object.assign({},Fr.defines),uniforms:Oi.clone(Fr.uniforms),vertexShader:Fr.vertexShader,fragmentShader:Fr.fragmentShader,blending:tn}),this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Ze({uniforms:Oi.clone(Zr.uniforms),vertexShader:Zr.vertexShader,fragmentShader:Zr.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Ph,blendDst:ra,blendEquation:ti,blendSrcAlpha:Ah,blendDstAlpha:ra,blendEquationAlpha:ti}),this._fsQuad=new Il(null),this._originalClearColor=new ee}dispose(){this.normalRenderTarget.dispose(),this.ssaoRenderTarget.dispose(),this.blurRenderTarget.dispose(),this.normalMaterial.dispose(),this.blurMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}render(t,e,n){switch(this._overrideVisibility(),this._renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility(),this.ssaoMaterial.uniforms.kernelRadius.value=this.kernelRadius,this.ssaoMaterial.uniforms.minDistance.value=this.minDistance,this.ssaoMaterial.uniforms.maxDistance.value=this.maxDistance,this._renderPass(t,this.ssaoMaterial,this.ssaoRenderTarget),this._renderPass(t,this.blurMaterial,this.blurRenderTarget),this.output){case yi.OUTPUT.SSAO:this.copyMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.copyMaterial.blending=tn,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case yi.OUTPUT.Blur:this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=tn,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case yi.OUTPUT.Depth:this._renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:n);break;case yi.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=tn,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;case yi.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=Th,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:n);break;default:console.warn("THREE.SSAOPass: Unknown output type.")}}setSize(t,e){this.width=t,this.height=e,this.ssaoRenderTarget.setSize(t,e),this.normalRenderTarget.setSize(t,e),this.blurRenderTarget.setSize(t,e),this.ssaoMaterial.uniforms.resolution.value.set(t,e),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.blurMaterial.uniforms.resolution.value.set(t,e)}_renderPass(t,e,n,s,r){t.getClearColor(this._originalClearColor);const o=t.getClearAlpha(),a=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,s!=null&&(t.setClearColor(s),t.setClearAlpha(r||0),t.clear()),this._fsQuad.material=e,this._fsQuad.render(t),t.autoClear=a,t.setClearColor(this._originalClearColor),t.setClearAlpha(o)}_renderOverride(t,e,n,s,r){t.getClearColor(this._originalClearColor);const o=t.getClearAlpha(),a=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,s=e.clearColor||s,r=e.clearAlpha||r,s!=null&&(t.setClearColor(s),t.setClearAlpha(r||0),t.clear()),this.scene.overrideMaterial=e,t.render(this.scene,this.camera),this.scene.overrideMaterial=null,t.autoClear=a,t.setClearColor(this._originalClearColor),t.setClearAlpha(o)}_generateSampleKernel(t){const e=this.kernel;for(let n=0;n<t;n++){const s=new N;s.x=Math.random()*2-1,s.y=Math.random()*2-1,s.z=Math.random(),s.normalize();let r=n/t;r=Bh.lerp(.1,1,r*r),s.multiplyScalar(r),e.push(s)}}_generateRandomKernelRotations(){const n=new O_,s=4*4,r=new Float32Array(s);for(let o=0;o<s;o++){const a=Math.random()*2-1,c=Math.random()*2-1,l=0;r[o]=n.noise3d(a,c,l)}this.noiseTexture=new Hh(r,4,4,fl,Dn),this.noiseTexture.wrapS=Xs,this.noiseTexture.wrapT=Xs,this.noiseTexture.needsUpdate=!0}_overrideVisibility(){const t=this.scene,e=this._visibilityCache;t.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,e.push(n))})}_restoreVisibility(){const t=this._visibilityCache;for(let e=0;e<t.length;e++)t[e].visible=!0;t.length=0}}yi.OUTPUT={Default:0,SSAO:1,Blur:2,Depth:3,Normal:4};const Br={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

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

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class B_ extends Ss{constructor(){super(),this.isOutputPass=!0,this.uniforms=Oi.clone(Br.uniforms),this.material=new eu({name:Br.name,uniforms:this.uniforms,vertexShader:Br.vertexShader,fragmentShader:Br.fragmentShader}),this._fsQuad=new Il(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},le.getTransfer(this._outputColorSpace)===de&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===il?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===sl?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===rl?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ol?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===ll?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===cl?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===al&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const v={importedPolygons:[],activePolygonId:"default",activePreset:"tree",samplesPerEdge:25,precision:1e-5,showSkeleton:!0,simplifySkeleton:!0,mergeThreshold:2,pruneBranches:!0,showRibs:!0,ribSpacing:10,showBays:!0,editBaysMode:!0,draggedGraphVertexIdx:-1,draggedGraphVertexOrig:null,draggedGraphEdgeIdx:-1,dragStartMousePos:null,hoverCircle:!1,showGovernors:!1,isDrawing:!1,customVertices:[],draggedVertexIdx:-1,selectedVertexType:null,selectedVertexIdx:-1,selectedVertexOrig:null,hoveredMedialPoint:null,computeTime:0,camera:{zoom:1},mouseWorldPos:null,numFloors:3,floorHeight:4,show3DColumns:!0,show3DBeams:!0,showFloorSlabs:!0,showRoofSlab:!0,showVaultedRoofs:!0,showBriseSoleil:!0,show3DCells:!1,columnRadius:.25,beamWidth:.3,beamDepth:.5,slabThickness:.2,louverWidth:.05,louverDepth:.2,louverSpacing:1,showHoverLabels:!0,groundFloorHeightFactor:2,ssaoEnabled:!0,ssaoRadius:2,ssaoMinDistance:.1,ssaoMaxDistance:8,ssaoIntensity:2,ambientIntensity:.75,dirLight1Intensity:.4,dirLight2Intensity:.2,showGroundPlane:!0,cantileverScale:1,briseFinScale:1.5,roofHyparH:2,roofHyparSlatSpacing:2,roofPitchRH:1,showGridHelper:!0};Object.defineProperty(v,"polygon",{get(){const i=v.importedPolygons.find(t=>t.id===v.activePolygonId);return i?i.polygon:[]},set(i){const t=v.importedPolygons.find(e=>e.id===v.activePolygonId);t?t.polygon=i:(v.importedPolygons=[{id:"default",polygon:i,hasScaffold:!0,planarGraph:null,structuralBays:[],unprunedStructuralBays:[],selectedBayIndices:[],bayEdits:[],graphVertexOverrides:new Map,skeletonData:{regularPoints:[],junctionPoints:[],simplifiedSegments:[],simplifiedNodes:[]}}],v.activePolygonId="default")}});Object.defineProperty(v,"planarGraph",{get(){const i=v.importedPolygons.find(t=>t.id===v.activePolygonId);return i?i.planarGraph:null},set(i){const t=v.importedPolygons.find(e=>e.id===v.activePolygonId);t&&(t.planarGraph=i)}});Object.defineProperty(v,"structuralBays",{get(){const i=v.importedPolygons.find(t=>t.id===v.activePolygonId);return i?i.structuralBays:[]},set(i){const t=v.importedPolygons.find(e=>e.id===v.activePolygonId);t&&(t.structuralBays=i)}});Object.defineProperty(v,"unprunedStructuralBays",{get(){const i=v.importedPolygons.find(t=>t.id===v.activePolygonId);return i?i.unprunedStructuralBays||[]:[]},set(i){const t=v.importedPolygons.find(e=>e.id===v.activePolygonId);t&&(t.unprunedStructuralBays=i)}});Object.defineProperty(v,"skeletonData",{get(){const i=v.importedPolygons.find(t=>t.id===v.activePolygonId);return i?i.skeletonData:{regularPoints:[],junctionPoints:[],simplifiedSegments:[],simplifiedNodes:[]}},set(i){const t=v.importedPolygons.find(e=>e.id===v.activePolygonId);t&&(t.skeletonData=i)}});Object.defineProperty(v,"selectedBayIndices",{get(){const i=v.importedPolygons.find(t=>t.id===v.activePolygonId);return i?i.selectedBayIndices:[]},set(i){const t=v.importedPolygons.find(e=>e.id===v.activePolygonId);t&&(t.selectedBayIndices=i)}});Object.defineProperty(v,"bayEdits",{get(){const i=v.importedPolygons.find(t=>t.id===v.activePolygonId);return i?i.bayEdits:[]},set(i){const t=v.importedPolygons.find(e=>e.id===v.activePolygonId);t&&(t.bayEdits=i)}});Object.defineProperty(v,"graphVertexOverrides",{get(){const i=v.importedPolygons.find(t=>t.id===v.activePolygonId);return i?i.graphVertexOverrides:new Map},set(i){const t=v.importedPolygons.find(e=>e.id===v.activePolygonId);t&&(t.graphVertexOverrides=i)}});const Rn=document.getElementById("polygon-canvas"),er=document.getElementById("canvas-wrapper");let un,Ee,si,Ne,ue,Ue,_n,Qt,gn,Le,cs,qt,Ei,ao,Hs,Ws,Be,cn,ke;const tl={state:v,rhinoGroup:null,setPolygonsFrom3dm:i=>{v.importedPolygons=i.map((n,s)=>{const r=n.map(o=>new ot(o[0],o[1]));return{id:`rhino-poly-${s}-${Date.now()}`,polygon:r,hasScaffold:!1,planarGraph:null,structuralBays:[],unprunedStructuralBays:[],selectedBayIndices:[],bayEdits:[],graphVertexOverrides:new Map,skeletonData:{regularPoints:[],junctionPoints:[],simplifiedSegments:[],simplifiedNodes:[]}}}),v.activePreset="custom",document.querySelectorAll(".preset-card").forEach(n=>n.classList.remove("active"));const e=document.getElementById("card-custom");e&&(e.style.display="flex",e.classList.add("active")),v.importedPolygons.length>0?v.activePolygonId=v.importedPolygons[0].id:v.activePolygonId=null,ze(),mo()},acceptedRibsCache:null},z_=new Qn(new N(0,0,1),0),Bi=new su,oi=new gt;function k_(){const i=er.getBoundingClientRect(),t=Math.max(800,i.width-40),e=Math.max(600,i.height-40);un=new $x({canvas:Rn,antialias:!0,alpha:!0}),un.setPixelRatio(Math.min(window.devicePixelRatio,2)),un.setSize(t,e),un.setClearColor(16777215,1),un.shadowMap.enabled=!0,Ee=new Vd,Ee.background=new ee(16777215),si=new En(45,t/e,10,4e3),si.position.set(0,-600,600),si.up.set(0,0,1);const n=t/e;Ne=new tr(-500*n,500*n,500,-500,10,4e3),Ne.position.set(0,0,1e3),Ne.up.set(0,1,0),ue=si,Ue=new Jx(ue,un.domElement),Ue.enableDamping=!0,Ue.dampingFactor=.05,Ue.maxPolarAngle=Math.PI/2-.01,Ue.minDistance=50,Ue.maxDistance=3e3,ao=new qf(16777215,v.ambientIntensity),Ee.add(ao),Hs=new Dc(16777215,v.dirLight1Intensity),Hs.position.set(1e3,800,1500),Ee.add(Hs),Ws=new Dc(16777215,v.dirLight2Intensity),Ws.position.set(-1e3,-800,1e3),Ee.add(Ws),Be=new tp(2e3,200,14870768,15857145),Be.rotation.x=Math.PI/2,Be.position.z=-.01,Be.visible=v.showGridHelper,Ee.add(Be);const s=new ys(2e3,2e3),r=new os({color:16777215,roughness:.9,metalness:0});cn=new xt(s,r),cn.position.z=-.02,cn.visible=v.showGroundPlane,Ee.add(cn),Qt=new Fi,Ee.add(Qt),gn=new Fi,Ee.add(gn),tl.rhinoGroup=gn,Le=new Fi,Ee.add(Le),cs=new w_(tl),window.rhinoManager=cs,Ei=new Fe,Ee.add(Ei),_n=new U_(un);const o=new F_(Ee,ue);_n.addPass(o),ke=new yi(Ee,ue,t,e),ke.ssaoMaterial.uniforms.intensity={value:v.ssaoIntensity},ke.ssaoMaterial.fragmentShader=ke.ssaoMaterial.fragmentShader.replace("uniform float maxDistance;",`uniform float maxDistance;
uniform float intensity;`).replace("gl_FragColor = vec4( vec3( 1.0 - occlusion ), 1.0 );","gl_FragColor = vec4( vec3( pow( 1.0 - occlusion, intensity ) ), 1.0 );"),ke.kernelRadius=v.ssaoRadius,ke.minDistance=v.ssaoMinDistance,ke.maxDistance=v.ssaoMaxDistance,ke.enabled=v.ssaoEnabled,_n.addPass(ke);const a=new B_;_n.addPass(a),qt=new u_(ue,un.domElement),qt.setMode("translate"),qt.showZ=!1,Ee.add(qt.getHelper()),qt.addEventListener("dragging-changed",c=>{Ue.enabled=!c.value;const l=document.getElementById("status-dot"),u=document.getElementById("status-text");c.value?(l&&l.classList.add("loading"),u&&(u.innerText="Moving vertex via manipulator...")):(l&&l.classList.remove("loading"),u&&(u.innerText=`Computed ${v.skeletonData.regularPoints.length+v.skeletonData.junctionPoints.length} medial points successfully.`))}),qt.addEventListener("change",()=>{if(qt.dragging&&qt.object){const c=qt.object.position;v.selectedVertexType==="polygon"&&v.selectedVertexIdx!==void 0&&v.selectedVertexIdx!==-1?(v.polygon[v.selectedVertexIdx]=new ot(c.x,c.y),ze()):v.selectedVertexType==="graph"&&v.selectedVertexOrig&&(v.graphVertexOverrides.set(`${v.selectedVertexOrig.x.toFixed(4)},${v.selectedVertexOrig.y.toFixed(4)}`,new ot(c.x,c.y)),ze())}}),window.addEventListener("resize",xu),Su()}function el(i){const t=new N(i.x,i.y,0);t.project(ue);const e=Rn.getBoundingClientRect();return new ot((t.x*.5+.5)*e.width,(-(t.y*.5)+.5)*e.height)}function V_(){if(v.polygon.length===0)return new ot(0,0);let i=1/0,t=-1/0,e=1/0,n=-1/0;for(const s of v.polygon)i=Math.min(i,s.x),t=Math.max(t,s.x),e=Math.min(e,s.y),n=Math.max(n,s.y);return new ot((i+t)/2,(e+n)/2)}function lo(){const i=document.getElementById("camera-info");if(i){const t=ue.position.distanceTo(Ue.target),e=ue.isOrthographicCamera?`${(1e3/ue.zoom).toFixed(0)}m`:`${(1e3/t).toFixed(2)}x`;i.innerText=`View Scale: ${e}`}}function _h(i){const t=document.getElementById("btn-view-perspective"),e=document.getElementById("btn-view-top");if(i==="perspective")ue=si,Ue.object=ue,Ue.enableRotate=!0,t.classList.add("active"),e.classList.remove("active");else{ue=Ne;const n=V_();Ue.target.set(n.x,n.y,0),Ne.position.set(n.x,n.y,1e3),Ne.up.set(0,1,0),Ue.object=ue,Ue.enableRotate=!1,t.classList.remove("active"),e.classList.add("active")}Ue.update(),lo(),qt&&(qt.camera=ue),gu()}function gu(){_n&&_n.passes.forEach(i=>{i.camera&&(i.camera=ue)})}function mo(){if(v.polygon.length===0){Ue.target.set(0,0,0),si.position.set(0,-600,600),Ne.position.set(0,0,1e3),Ne.zoom=1,Ne.updateProjectionMatrix(),Ue.update(),lo(),gu();return}let i=1/0,t=-1/0,e=1/0,n=-1/0;for(const m of v.polygon)i=Math.min(i,m.x),t=Math.max(t,m.x),e=Math.min(e,m.y),n=Math.max(n,m.y);const s=(i+t)/2,r=(e+n)/2,o=t-i||1,a=n-e||1,c=Math.max(o,a);Ue.target.set(s,r,0),si.position.set(s,r-c*1.3,c*1.3);const l=er.getBoundingClientRect(),u=Math.max(800,l.width-40),f=Math.max(600,l.height-40),h=u/f,d=c*1.45;Ne.left=-d*h/2,Ne.right=d*h/2,Ne.top=d/2,Ne.bottom=-d/2,Ne.zoom=1,Ne.position.set(s,r,1e3),Ne.updateProjectionMatrix(),Ue.update(),lo()}function xu(){const i=er.getBoundingClientRect(),t=Math.max(800,i.width-40),e=Math.max(600,i.height-40);si.aspect=t/e,si.updateProjectionMatrix();const n=t/e,s=Ne.top-Ne.bottom;Ne.left=-s*n/2,Ne.right=s*n/2,Ne.updateProjectionMatrix(),un.setSize(t,e),_n&&_n.setSize(t,e),lo()}function _u(i){v.activePreset=i,v.importedPolygons=[],v.activePolygonId="default",v.graphVertexOverrides.clear(),v.bayEdits=[],v.selectedBayIndices=[],qt&&qt.detach(),v.selectedVertexType=null,v.selectedVertexIdx=-1,v.selectedVertexOrig=null;const t=er.getBoundingClientRect(),e=Math.max(800,t.width-40),n=Math.max(600,t.height-40);i!=="custom"&&(v.polygon=G_[i](e,n),v.isDrawing=!1,document.getElementById("btn-clear-custom").style.display="none",document.getElementById("drawing-indicator").style.display="none",document.getElementById("card-custom").style.display="none"),ze(),mo()}const G_={cross:(i,t)=>[new ot(0-100*.1,0+100*.3),new ot(0+100*.1,0+100*.3),new ot(0+100*.1,0+100*.1),new ot(0+100*.3,0+100*.1),new ot(0+100*.3,0-100*.1),new ot(0+100*.1,0-100*.1),new ot(0+100*.1,0-100*.3),new ot(0-100*.1,0-100*.3),new ot(0-100*.1,0-100*.1),new ot(0-100*.3,0-100*.1),new ot(0-100*.3,0+100*.1),new ot(0-100*.1,0+100*.1)],yshape:(i,t)=>[new ot(0+100*.1,0-100*.4),new ot(0+100*.1,0-100*.1),new ot(0+100*.4,0+100*.4),new ot(0+100*.2,0+100*.4),new ot(0,0+100*.1),new ot(0-100*.2,0+100*.4),new ot(0-100*.4,0+100*.4),new ot(0-100*.1,0-100*.1),new ot(0-100*.1,0-100*.4)],sqdonut:(i,t)=>[new ot(0-100*.01,0+100*.3),new ot(0-100*.3,0+100*.3),new ot(0-100*.3,0-100*.3),new ot(0+100*.3,0-100*.3),new ot(0+100*.3,0+100*.3),new ot(0+100*.01,0+100*.3),new ot(0+100*.01,0+100*.1),new ot(0+100*.1,0+100*.1),new ot(0+100*.1,0-100*.1),new ot(0-100*.1,0-100*.1),new ot(0-100*.1,0+100*.1),new ot(0-100*.01,0+100*.1)],donut:(i,t)=>{const r=[];for(let c=0;c<=32;c++){const l=.05+(Math.PI*2-.1)*(c/32);r.push(new ot(0+Math.cos(l)*100*.4,0-Math.sin(l)*100*.4))}for(let c=0;c<=32;c++){const l=Math.PI*2-.05-(Math.PI*2-.1)*(c/32);r.push(new ot(0+Math.cos(l)*100*.2,0-Math.sin(l)*100*.2))}return r},pentagon:(i,t)=>[new ot(0-100*.05,0+100*.4),new ot(0-100*.45,0+100*.15),new ot(0-100*.25,0-100*.4),new ot(0+100*.35,0-100*.35),new ot(0+100*.4,0+100*.1)],tree:(i,t)=>[new ot(0+100*.1,0-100*.4),new ot(0+100*.1,0-100*.1),new ot(0+100*.4,0-100*.1),new ot(0+100*.4,0+100*.05),new ot(0+100*.1,0+100*.05),new ot(0+100*.1,0+100*.2),new ot(0+100*.3,0+100*.4),new ot(0+100*.15,0+100*.4),new ot(0,0+100*.25),new ot(0-100*.15,0+100*.4),new ot(0-100*.3,0+100*.4),new ot(0-100*.1,0+100*.2),new ot(0-100*.1,0+100*.05),new ot(0-100*.4,0+100*.05),new ot(0-100*.4,0-100*.1),new ot(0-100*.1,0-100*.1),new ot(0-100*.1,0-100*.4)]};function _s(i){let t=0,e=0;return i.forEach(n=>{t+=n.x,e+=n.y}),new ot(t/i.length,e/i.length)}function zr(i,t){for(let s=0;s<i.length;s++)if(oo(t,i[s]))return s;let e=1/0,n=-1;for(let s=0;s<i.length;s++){const o=_s(i[s]).dist(t);o<e&&(e=o,n=s)}return n}function vh(i,t,e=null){let n=i.map(r=>r.map(o=>new ot(o.x,o.y))),s=e?e.map(r=>r.map(o=>new ot(o.x,o.y))):null;for(const r of t)if(r.type==="delete")if(s){const o=zr(s,r.point);if(o!==-1){const a=s[o];s.splice(o,1);for(let c=n.length-1;c>=0;c--){const l=_s(n[c]);oo(l,a)&&n.splice(c,1)}}}else{const o=zr(n,r.point);o!==-1&&n.splice(o,1)}else if(r.type==="merge")if(s){const o=[];for(const a of r.points){const c=zr(s,a);c!==-1&&!o.includes(c)&&o.push(c)}if(o.length>=2){o.sort((u,f)=>f-u);const a=[];for(const u of o)a.push(s[u]),s.splice(u,1);const c=ia(a);if(c)s.push(c);else for(const u of a)s.push(u);const l=[];for(let u=0;u<n.length;u++){const f=_s(n[u]);a.some(d=>oo(f,d))&&l.push(u)}if(l.length>=2){l.sort((h,d)=>d-h);const u=[];for(const h of l)u.push(n[h]),n.splice(h,1);const f=ia(u);if(f)n.push(f);else for(const h of u)n.push(h)}}}else{const o=[];for(const a of r.points){const c=zr(n,a);c!==-1&&!o.includes(c)&&o.push(c)}if(o.length>=2){o.sort((l,u)=>u-l);const a=[];for(const l of o)a.push(n[l]),n.splice(l,1);const c=ia(a);if(c)n.push(c);else for(const l of a)n.push(l)}}return n}function H_(i,t,e,n=.001){for(const s of e)for(let r=0;r<s.length;r++){const o=s[r],a=s[(r+1)%s.length],c=o.dist(i)<n&&a.dist(t)<n,l=o.dist(t)<n&&a.dist(i)<n;if(c||l)return!0}return!1}function W_(i,t){const e=[];for(const c of i.edges){const l=c[0],u=c[1];if(c[2]==="boundary"){e.push(c);continue}const h=i.vertices[l],d=i.vertices[u];H_(h,d,t,.02)&&e.push(c)}const n=new Set;for(const[c,l]of e)n.add(c),n.add(l);const s=[],r=[],o=new Map;for(let c=0;c<i.vertices.length;c++)n.has(c)&&(o.set(c,s.length),s.push(i.vertices[c]),r.push(i.originalVertices[c]));const a=e.map(c=>[o.get(c[0]),o.get(c[1]),c[2]]);i.vertices=s,i.originalVertices=r,i.edges=a}function ze(){const i=v.activePolygonId,t=performance.now();for(const r of v.importedPolygons){if(!r.hasScaffold){r.skeletonData={regularPoints:[],junctionPoints:[],simplifiedSegments:[],simplifiedNodes:[]},r.planarGraph=null,r.structuralBays=[];continue}v.activePolygonId=r.id,X_()}v.activePolygonId=i,v.computeTime=performance.now()-t;const e=document.getElementById("container-merge-slider");e&&(e.style.display=v.simplifySkeleton?"block":"none");const n=document.getElementById("container-ribs-slider");n&&(n.style.display=v.showRibs?"block":"none"),document.getElementById("stats-render-time").innerText=`Computation: ${v.computeTime.toFixed(1)}ms`;const s=v.importedPolygons.find(r=>r.id===v.activePolygonId);if(s&&s.hasScaffold){const r=s.skeletonData.regularPoints.length+s.skeletonData.junctionPoints.length,o=s.skeletonData.simplifiedSegments.length,a=s.skeletonData.simplifiedNodes.length,c=v.simplifySkeleton?`Simplified skeleton to ${a} merged nodes and ${o} straight branches.`:`Computed ${r} medial points successfully.`;document.getElementById("status-text").innerText=c}else document.getElementById("status-text").innerText="Select a curve in the viewport to apply the scaffold.";v.hoveredMedialPoint=null,he()}function X_(){if(v.polygon.length<3){v.skeletonData={regularPoints:[],junctionPoints:[]};return}for(const s of v.polygon){s.origX===void 0&&(s.origX=s.x,s.origY=s.y),s.x=s.origX,s.y=s.origY;let r=null;for(const[o,a]of v.graphVertexOverrides.entries()){const c=o.split(","),l=parseFloat(c[0]),u=parseFloat(c[1]);if(Math.hypot(s.origX-l,s.origY-u)<.1){r=a;break}}r&&(s.x=r.x,s.y=r.y)}const i=new b_(v.polygon,{epsilon:v.activePreset!=="custom"?.5:v.precision,tangentEpsilon:v.precision*10}),t=i.computeStructuredSkeleton(v.samplesPerEdge),{segments:e,nodes:n}=i.simplifySkeleton(t.regularPoints,t.junctionPoints,v.mergeThreshold);for(const s of n){s.origX=s.x,s.origY=s.y;let r=null;for(const[o,a]of v.graphVertexOverrides.entries()){const c=o.split(","),l=parseFloat(c[0]),u=parseFloat(c[1]);if(Math.hypot(s.origX-l,s.origY-u)<.1){r=a;break}}r&&(s.x=r.x,s.y=r.y)}for(const s of e){const r=s.start,o=s.end,a=o.sub(r),c=a.length(),l=Math.max(1,Math.round(c/v.ribSpacing)),u=new ot(r.origX,r.origY),h=new ot(o.origX,o.origY).sub(u);s.divisionPoints=[];for(let d=1;d<l;d++){const m=d/l,_=r.add(a.scale(m)),x=u.add(h.scale(m));_.origX=x.x,_.origY=x.y;let p=null;for(const[g,y]of v.graphVertexOverrides.entries()){const S=g.split(","),P=parseFloat(S[0]),w=parseFloat(S[1]);if(Math.hypot(_.origX-P,_.origY-w)<.1){p=y;break}}p&&(_.x=p.x,_.y=p.y),s.divisionPoints.push(_)}}if(t.simplifiedSegments=e,t.simplifiedNodes=n,v.skeletonData=t,v.polygon.length>=3){const s=new gh(.001,v.graphVertexOverrides);v.planarGraph=s;const r=v.showSkeleton&&v.showRibs&&v.simplifySkeleton?vu():[],o=[],a=[];for(const h of r)a.push(h.target);const c=v.pruneBranches?t.simplifiedSegments.filter(h=>!(h.start.isEndPoint||h.end.isEndPoint)):t.simplifiedSegments;for(const h of t.simplifiedNodes)h.isEndPoint&&a.push(h);for(let h=0;h<v.polygon.length;h++){const d=v.polygon[h],m=v.polygon[(h+1)%v.polygon.length];o.push(d);const _=[];for(const x of a){const p=Vn(x,d,m);if(x.dist(p)<.001){const g=m.sub(d).length(),y=d.dist(p),S=m.dist(p);y>.001&&S>.001&&y+S<g+.001&&(_.some(P=>P.point.dist(x)<.001)||_.push({point:x,dist:y}))}}_.sort((x,p)=>x.dist-p.dist);for(const x of _)o.push(x.point)}for(let h=0;h<o.length;h++)s.addEdge(o[h],o[(h+1)%o.length],"boundary");if(v.showSkeleton)if(v.simplifySkeleton)for(const h of c){const d=[h.start,...h.divisionPoints||[],h.end];for(let m=0;m<d.length-1;m++)s.addEdge(d[m],d[m+1],"skeleton")}else{const h=v.samplesPerEdge,d=t.regularPoints;for(let m=0;m<v.polygon.length;m++)for(let _=0;_<h-1;_++){const x=m*h+_,p=m*h+(_+1);d[x]&&d[p]&&s.addEdge(d[x],d[p],"skeleton")}}for(let h=0;h<r.length;h++){const d=r[h];s.addEdge(d.source,d.target,`rib_${h}`)}const l=s.extractFaces();v.structuralBays=vh(l,v.bayEdits);const u=new gh(.001,v.graphVertexOverrides);for(let h=0;h<o.length;h++)u.addEdge(o[h],o[(h+1)%o.length],"boundary");if(v.showSkeleton)if(v.simplifySkeleton)for(const h of t.simplifiedSegments){const d=[h.start,...h.divisionPoints||[],h.end];for(let m=0;m<d.length-1;m++)u.addEdge(d[m],d[m+1],"skeleton")}else{const h=v.samplesPerEdge,d=t.regularPoints;for(let m=0;m<v.polygon.length;m++)for(let _=0;_<h-1;_++){const x=m*h+_,p=m*h+(_+1);d[x]&&d[p]&&u.addEdge(d[x],d[p],"skeleton")}}for(let h=0;h<r.length;h++){const d=r[h];u.addEdge(d.source,d.target,`rib_${h}`)}const f=u.extractFaces();v.unprunedStructuralBays=vh(f,v.bayEdits,l),W_(s,v.structuralBays)}else v.structuralBays=[],v.unprunedStructuralBays=[]}const Y_=(i,t,e)=>{const s=t.x-i.x,r=t.y-i.y,o=new ot(i.x+s*.001,i.y+r*.001),a=new ot(t.x-s*.001,t.y-r*.001),c=(u,f,h)=>(h.y-u.y)*(f.x-u.x)>(f.y-u.y)*(h.x-u.x),l=(u,f,h,d)=>c(u,h,d)!==c(f,h,d)&&c(u,f,h)!==c(u,f,d);for(let u=0;u<e.length;u++){const f=e[u],h=e[(u+1)%e.length];if(l(o,a,f,h))return!0}return!1};function vu(){if(!v.showRibs||v.polygon.length<3||!v.skeletonData||!v.skeletonData.simplifiedSegments)return[];const i=v.pruneBranches?v.skeletonData.simplifiedSegments.filter(o=>!(o.start.isEndPoint||o.end.isEndPoint)):v.skeletonData.simplifiedSegments,t=[];for(const o of i)if(o.divisionPoints)for(const a of o.divisionPoints){const c=new ot(a.origX,a.origY),l=[];for(let m=0;m<v.polygon.length;m++){const _=v.polygon[m],x=v.polygon[(m+1)%v.polygon.length];let p=Vn(a,_,x);p.dist(_)<.05?p=_:p.dist(x)<.05&&(p=x);let g=Vn(c,_,x);g.dist(_)<.05?g=_:g.dist(x)<.05&&(g=x);const y=a.dist(p);l.push({point:p,pointOrig:g,dist:y,vector:p.sub(a).normalize()})}l.sort((m,_)=>m.dist-_.dist);const u=l[0],f=new ot(u.point.x,u.point.y);f.origX=u.pointOrig.x,f.origY=u.pointOrig.y;let h=null,d=null;for(let m=1;m<l.length;m++){const _=l[m];if(u.vector.dot(_.vector)<.5){h=_,d=new ot(h.point.x,h.point.y),d.origX=h.pointOrig.x,d.origY=h.pointOrig.y;break}}t.push({source:a,target:f,priority:1}),h&&t.push({source:a,target:d,priority:2})}const e=new Set;for(const o of i)o.start.isEndPoint||e.add(o.start),o.end.isEndPoint||e.add(o.end);for(const o of e){const a=new ot(o.origX,o.origY),c=[];for(let _=0;_<v.polygon.length;_++){const x=v.polygon[_],p=v.polygon[(_+1)%v.polygon.length];let g=Vn(o,x,p);g.dist(x)<.05?g=x:g.dist(p)<.05&&(g=p);let y=Vn(a,x,p);y.dist(x)<.05?y=x:y.dist(p)<.05&&(y=p);const S=o.dist(g);c.push({point:g,pointOrig:y,dist:S,vector:g.sub(o).normalize()})}c.sort((_,x)=>_.dist-x.dist);const l=c[0],u=new ot(l.point.x,l.point.y);u.origX=l.pointOrig.x,u.origY=l.pointOrig.y;let f=null,h=null,d=null,m=null;for(let _=1;_<c.length;_++){const x=c[_];if(l.vector.dot(x.vector)<.5){f=x,h=new ot(f.point.x,f.point.y),h.origX=f.pointOrig.x,h.origY=f.pointOrig.y;break}}if(f)for(let _=1;_<c.length;_++){const x=c[_];if(x!==f&&l.vector.dot(x.vector)<.5&&f.vector.dot(x.vector)<.5){d=x,m=new ot(d.point.x,d.point.y),m.origX=d.pointOrig.x,m.origY=d.pointOrig.y;break}}t.push({source:o,target:u,priority:1}),f&&t.push({source:o,target:h,priority:2}),d&&t.push({source:o,target:m,priority:3})}const n=t.map(o=>({...o,length:o.source.dist(o.target)})).sort((o,a)=>o.priority!==a.priority?o.priority-a.priority:o.length-a.length),s=(o,a)=>{if(o.source.dist(a.source)<.001||o.target.dist(a.target)<.001||o.source.dist(a.target)<.001||o.target.dist(a.source)<.001)return!1;const c=(l,u,f)=>(f.y-l.y)*(u.x-l.x)>(u.y-l.y)*(f.x-l.x);return c(o.source,a.source,a.target)!==c(o.target,a.source,a.target)&&c(o.source,o.target,a.source)!==c(o.source,o.target,a.target)},r=[];for(const o of n){if(Y_(o.source,o.target,v.polygon))continue;let a=!1;for(const c of r)if(s(o,c)){a=!0;break}a||r.push(o)}return r}function he(){if(!Qt)return;const i=v.activePolygonId,t=v.importedPolygons.find(n=>n.id===v.activePolygonId);if(t&&v.selectedVertexType==="graph"&&v.selectedVertexOrig&&t.planarGraph){const n=v.selectedVertexOrig;let s=-1,r=1/0;for(let o=0;o<t.planarGraph.vertices.length;o++){const a=t.planarGraph.originalVertices[o];if(a){const c=Math.hypot(n.x-a.x,n.y-a.y);c<.1&&c<r&&(r=c,s=o)}}s!==-1?v.selectedVertexIdx=s:(qt&&qt.detach(),v.selectedVertexType=null,v.selectedVertexIdx=-1,v.selectedVertexOrig=null)}for(;Qt.children.length>0;){const n=Qt.children[0];Qt.remove(n),n.geometry&&n.geometry.dispose(),n.material&&(Array.isArray(n.material)?n.material.forEach(s=>s.dispose()):n.material.dispose())}if(v.isDrawing&&v.customVertices.length>0){const n=v.customVertices.map(r=>new N(r.x,r.y,.025));if(v.mouseWorldPos&&(n.push(new N(v.mouseWorldPos.x,v.mouseWorldPos.y,.025)),v.customVertices.length>=3&&n.push(new N(v.customVertices[0].x,v.customVertices[0].y,.025))),n.length>=2){const r=new te().setFromPoints(n),o=new hn({color:4937059,linewidth:1.5}),a=new be(r,o);a.raycast=function(){},Qt.add(a)}const s=new ln(.7,32);for(let r=0;r<v.customVertices.length;r++){const o=v.customVertices[r],a=r===0&&v.customVertices.length>=3;let c=!1;a&&v.mouseWorldPos&&(c=Math.sqrt((o.x-v.mouseWorldPos.x)**2+(o.y-v.mouseWorldPos.y)**2)<2);const l=new De({color:c?1096065:a?3621201:4937059}),u=new xt(s,l);u.position.set(o.x,o.y,.03),u.raycast=function(){},Qt.add(u)}}v.importedPolygons.forEach(n=>{v.activePolygonId=n.id;const s=n.id===i;if(v.polygon.length>=3){const r=new ni;r.moveTo(v.polygon[0].x,v.polygon[0].y);for(let d=1;d<v.polygon.length;d++)r.lineTo(v.polygon[d].x,v.polygon[d].y);r.closePath();const o=new Js(r),a=new De({color:n.hasScaffold?s?5195493:3621201:10265519,transparent:!0,opacity:n.hasScaffold?s?.08:.04:.015,side:qe,depthWrite:!1}),c=new xt(o,a);c.position.z=.005,c.userData={isPolygonFace:!0,polygonId:n.id},Qt.add(c);const l=v.polygon.map(d=>new N(d.x,d.y,.02));l.push(l[0]);const u=new te().setFromPoints(l),f=new hn({color:n.hasScaffold?s?5195493:3621201:10265519,linewidth:s?2.5:1.5}),h=new be(u,f);h.userData={isPolygonLine:!0,polygonId:n.id},Qt.add(h)}if(n.hasScaffold&&v.polygon.length>=3){if(v.showSkeleton){const r=v.skeletonData.regularPoints;if(v.simplifySkeleton){const a=v.pruneBranches?v.skeletonData.simplifiedSegments.filter(l=>!(l.start.isEndPoint||l.end.isEndPoint)):v.skeletonData.simplifiedSegments,c=new hn({color:3621201,linewidth:3.5});for(const l of a){const u=[new N(l.start.x,l.start.y,.035),new N(l.end.x,l.end.y,.035)],f=new te().setFromPoints(u),h=new be(f,c);h.raycast=function(){},Qt.add(h)}}else{const a=v.samplesPerEdge,c=new hn({color:7041664,transparent:!0,opacity:.65,linewidth:1.5});for(let f=0;f<v.polygon.length;f++){const h=[];for(let d=0;d<a;d++){const m=f*a+d;r[m]&&h.push(new N(r[m].x,r[m].y,.025))}if(h.length>=2){const d=new te().setFromPoints(h),m=new be(d,c);m.raycast=function(){},Qt.add(m)}}const l=new ln(.12,16),u=new De({color:7041664});for(const f of r){const h=new xt(l,u);h.position.set(f.x,f.y,.03),h.raycast=function(){},Qt.add(h)}}let o=v.simplifySkeleton?v.skeletonData.simplifiedNodes:v.skeletonData.junctionPoints;v.pruneBranches&&(o=o.filter(a=>!a.isEndPoint));for(const a of o){const c=a.isEndPoint?.3:.45,l=new ln(c,32),u=new De({color:a.isEndPoint?4937059:3621201}),f=new xt(l,u);f.position.set(a.x,a.y,.035),f.raycast=function(){},Qt.add(f);const h=[],d=32,m=c*1.65;for(let g=0;g<=d;g++){const y=g/d*Math.PI*2;h.push(new N(a.x+Math.cos(y)*m,a.y+Math.sin(y)*m,.035))}const _=new te().setFromPoints(h),x=new wc({color:a.isEndPoint?4937059:3621201,transparent:!0,opacity:.4,dashSize:.15,gapSize:.1}),p=new be(_,x);p.computeLineDistances(),p.raycast=function(){},Qt.add(p)}if(v.showRibs){const a=vu();s&&(tl.acceptedRibsCache=a);const c=new ln(.15,16),l=new De({color:16777215}),u=new hn({color:4937059,transparent:!0,opacity:.65}),f=new ln(.2,16),h=new De({color:4937059});for(const d of a){const m=new xt(c,l);m.position.set(d.source.x,d.source.y,.038),m.raycast=function(){},Qt.add(m);const _=[new N(d.source.x,d.source.y,.038),new N(d.target.x,d.target.y,.038)],x=new te().setFromPoints(_),p=new be(x,u);p.raycast=function(){},Qt.add(p);const g=new xt(f,h);g.position.set(d.target.x,d.target.y,.038),g.raycast=function(){},Qt.add(g)}}}v.showBays&&v.structuralBays&&v.structuralBays.length>0&&v.structuralBays.forEach((r,o)=>{if(r.length>=3){const a=new ni;a.moveTo(r[0].x,r[0].y);for(let p=1;p<r.length;p++)a.lineTo(r[p].x,r[p].y);a.closePath();const c=s&&v.selectedBayIndices.includes(o),l=c?new ee("hsl(25, 95%, 55%)"):new ee(`hsl(${o*137.5%360}, 45%, 60%)`),u=c?.45:.15,f=new Js(a),h=new De({color:l,transparent:!0,opacity:u,side:qe,depthWrite:!1}),d=new xt(f,h);d.position.z=.015,Qt.add(d);const m=r.map(p=>new N(p.x,p.y,.018));m.push(m[0]);const _=new te().setFromPoints(m);let x;if(c){const p=new hn({color:15094016,linewidth:2.5});x=new be(_,p)}else{const p=new wc({color:4937059,transparent:!0,opacity:.35,dashSize:.2,gapSize:.15});x=new be(_,p),x.computeLineDistances()}Qt.add(x)}})}if(s&&!v.isDrawing&&v.polygon.length>0)if(v.editBaysMode){if(v.showBays&&v.planarGraph){const r=new hn({color:5195493,linewidth:3.5,transparent:!0,opacity:.8});v.planarGraph.edges.forEach((l,u)=>{const f=l[0],h=l[1],d=v.planarGraph.vertices[f],m=v.planarGraph.vertices[h];if(d&&m){const _=[new N(d.x,d.y,.032),new N(m.x,m.y,.032)],x=new te().setFromPoints(_),p=new be(x,r);p.userData={index:u,u:f,v:h,polygonId:n.id},Qt.add(p)}});const o=new ln(.7,32),a=new ln(.25,16),c=new De({color:16777215});v.planarGraph.vertices.forEach((l,u)=>{const f=v.selectedVertexType==="graph"&&v.selectedVertexIdx===u,h=new De({color:f?1096065:5195493,transparent:!0,opacity:.95}),d=new xt(o,h);d.position.set(l.x,l.y,.035),d.userData={isGraphVertex:!0,index:u,polygonId:n.id},Qt.add(d);const m=new xt(a,c);m.position.set(l.x,l.y,.039),Qt.add(m)})}}else{const r=new ln(1,32),o=new ln(.3,16),a=new De({color:16777215});for(let c=0;c<v.polygon.length;c++){const l=v.polygon[c],u=v.selectedVertexType==="polygon"&&v.selectedVertexIdx===c,f=new De({color:u?1096065:3621201}),h=new xt(r,f);h.position.set(l.x,l.y,.03),h.userData={isHandle:!0,index:c,polygonId:n.id},Qt.add(h);const d=new xt(o,a);d.position.set(l.x,l.y,.038),Qt.add(d)}}}),v.activePolygonId=i;const e=v.importedPolygons.find(n=>n.id===v.activePolygonId);if(e&&(v.activePolygonId=e.id,v.hoverCircle&&v.hoveredMedialPoint&&v.polygon.length>=3)){const n=v.hoveredMedialPoint,s=n.radius,r=new Tl(s-.2,s+.2,64),o=new De({color:3621201,transparent:!0,opacity:.82,side:qe}),a=new xt(r,o);a.position.set(n.x,n.y,.045),Qt.add(a);const c=new ln(s,64),l=new De({color:3621201,transparent:!0,opacity:.05,side:qe,depthWrite:!1}),u=new xt(c,l);u.position.set(n.x,n.y,.04),Qt.add(u);const f=new ln(.6,16),h=new De({color:16777215}),d=new xt(f,h);if(d.position.set(n.x,n.y,.048),Qt.add(d),v.showGovernors){const m=new hn({color:4937059,linewidth:1.5}),_=new ln(.5,16),x=new De({color:4937059});for(let p=0;p<v.polygon.length;p++){const g=v.polygon[p],y=v.polygon[(p+1)%v.polygon.length],S=Vn(n,g,y);if(Math.abs(n.dist(S)-s)<.2){const P=[new N(n.x,n.y,.046),new N(S.x,S.y,.046)],w=new te().setFromPoints(P),b=new be(w,m);Qt.add(b);const M=new xt(_,x);M.position.set(S.x,S.y,.046),Qt.add(M)}}}}if(v.activePolygonId=i,qt&&qt.object)if(v.selectedVertexType==="polygon"&&v.selectedVertexIdx!==-1&&v.polygon[v.selectedVertexIdx]){const n=v.polygon[v.selectedVertexIdx];Ei.position.set(n.x,n.y,.03)}else if(v.selectedVertexType==="graph"&&v.selectedVertexIdx!==-1&&v.planarGraph&&v.planarGraph.vertices[v.selectedVertexIdx]){const n=v.planarGraph.vertices[v.selectedVertexIdx];Ei.position.set(n.x,n.y,.035)}else qt.detach(),v.selectedVertexType=null,v.selectedVertexIdx=-1,v.selectedVertexOrig=null;ev()}function q_(i,t,e,n,s){const r=i.add(t).scale(.5),o=new ot(r.x+e.x*.1,r.y+e.y*.1),a=e;let c=1/0,l="open_space";return s.forEach(u=>{const f=u.id===n.id;for(let h=0;h<u.polygon.length;h++){const d=u.polygon[h],m=u.polygon[(h+1)%u.polygon.length];if(f){const x=d.dist(i),p=m.dist(t),g=d.dist(t),y=m.dist(i);if(x<1e-4&&p<1e-4||g<1e-4&&y<1e-4)continue}const _=Rl(o,a,d,m);_&&_.s<c&&(c=_.s,l=f?"courtyard":"other_building")}}),c<.5?"touching":c<25?l:"open_space"}function yu(i,t){const e=t.length;if(e<3)return!1;const n=t[(i-1+e)%e],s=t[i],r=t[(i+1)%e],o=s.x-n.x,a=s.y-n.y,c=Math.hypot(o,a),l=r.x-s.x,u=r.y-s.y,f=Math.hypot(l,u);return c<1e-6||f<1e-6?!1:(o*l+a*u)/(c*f)<.98}function j_(i,t){const e=t.length;for(const n of i)for(let s=0;s<e;s++){const r=t[s];if(Math.hypot(n.x-r.x,n.y-r.y)<.1&&yu(s,t))return!0}return!1}function sa(i,t,e){const n=e.x-t.x,s=e.y-t.y,r=n*n+s*s;if(r<1e-9)return Math.hypot(i.x-t.x,i.y-t.y);let o=((i.x-t.x)*n+(i.y-t.y)*s)/r;o=Math.max(0,Math.min(1,o));const a=t.x+o*n,c=t.y+o*s;return Math.hypot(i.x-a,i.y-c)}function kr(i,t,e,n){const s=e*n;if(i===0)return{bottom:0,top:s,height:s};{const r=s+(i-1)*e;return{bottom:r,top:r+e,height:e}}}function Z_(i,t,e,n,s,r){const o=s.map(c=>new ot(c.x,c.y)),a=[];for(let c=0;c<s.length;c++)yu(c,s)&&a.push(c);if(a.length>=2){const c=a.length;let l=1;t>1&&(l=1-.9*(i/(t-1)));for(let u=0;u<c;u++){const f=a[u],h=a[(u+1)%c],d=[];let m=f;for(;m!==h;)d.push(m),m=(m+1)%s.length;d.push(h);const _=[0];let x=0;for(let p=0;p<d.length-1;p++){const g=s[d[p]],y=s[d[p+1]];x+=Math.hypot(y.x-g.x,y.y-g.y),_.push(x)}if(x>1e-5)for(let p=1;p<d.length-1;p++){const g=d[p],y=_[p]/x,S=4*l*y*(1-y),P=s.length,w=r[(g-1+P)%P],b=r[g],M=new ot(w.x+b.x,w.y+b.y).normalize();o[g]=new ot(s[g].x-S*M.x,s[g].y-S*M.y)}}}return o}function yh(i,t,e){return i.map(n=>{let s=-1,r=.1;for(let o=0;o<t.length;o++){const a=Math.hypot(n.x-t[o].x,n.y-t[o].y);a<r&&(r=a,s=o)}if(s!==-1){const o=e[s].x-t[s].x,a=e[s].y-t[s].y;return new ot(n.x+o,n.y+a)}return new ot(n.x,n.y)})}function Vr(i,t,e){return i.map(n=>{let s=-1,r=.1;for(let o=0;o<t.length;o++){const a=Math.hypot(n.x-t[o].x,n.y-t[o].y);a<r&&(r=a,s=o)}if(s!==-1){const o=e[s].x-t[s].x,a=e[s].y-t[s].y;return new ot(n.x+o,n.y+a)}return new ot(n.x,n.y)})}function Mh(i){let t=Math.atan2(i.y,i.x);if(t<0&&(t+=2*Math.PI),t>=Math.PI/2&&t<Math.PI){const e=(t-Math.PI/2)/(Math.PI/2);return 2*(1-e)+5*e}else if(t>=Math.PI&&t<3*Math.PI/2){const e=(t-Math.PI)/(Math.PI/2);return 5*(1-e)+3.5*e}else{if(t>=3*Math.PI/2&&t<2*Math.PI)return 3.5;{let e=0;return t<Math.PI/2?e=t/(Math.PI/2):e=(t-2*Math.PI)/(Math.PI/2),3.5*(1-e)+2*e}}}function Sh(i){const t=l=>l.x!==void 0?l.x:l[0],e=l=>l.y!==void 0?l.y:l[1],n=[],s=l=>{const u=t(l),f=e(l);for(let h=0;h<n.length;h++){const d=t(n[h]),m=e(n[h]);if(Math.hypot(u-d,f-m)<.05)return h}return n.push(l),n.length-1},r=i.map(l=>l.map(u=>s(u))),o=Array.from({length:n.length},()=>[]);r.forEach(l=>{const u=l.length;for(let f=0;f<u;f++){const h=l[f],d=l[(f+1)%u];o[h].includes(d)||o[h].push(d)}});for(let l=0;l<n.length;l++)o[l].forEach(u=>{o[u].includes(l)||o[u].push(l)});const a=Array.from({length:n.length},(l,u)=>u);a.sort((l,u)=>{const f=t(n[l]),h=e(n[l]),d=t(n[u]),m=e(n[u]);return Math.abs(f-d)>1e-4?f-d:h-m}),o.forEach(l=>{l.sort((u,f)=>{const h=t(n[u]),d=e(n[u]),m=t(n[f]),_=e(n[f]);return Math.abs(h-m)>1e-4?h-m:d-_})});const c=new Array(n.length).fill(-1);for(const l of a)if(c[l]===-1){c[l]=0;const u=[l];for(;u.length>0;){const f=u.shift(),d=1-c[f];o[f].forEach(m=>{c[m]===-1&&(c[m]=d,u.push(m))})}}return{uniqueVerts:n,colors:c,getX:t,getY:e}}function $_(i,t){if(!t)return 0;const{uniqueVerts:e,colors:n,getX:s,getY:r}=t,o=s(i),a=r(i);for(let c=0;c<e.length;c++){const l=s(e[c]),u=r(e[c]);if(Math.hypot(o-l,a-u)<.05)return n[c]}return 0}function K_(i,t){const{distance:e}=mu(i,t);return e>.05}function Eh(i,t,e,n,s){const r=new te,o=[],a=[];let c=0;const l=(f,h,d,m,_,x)=>{(h.x-f.x)*(d.y-f.y)-(d.x-f.x)*(h.y-f.y)<0?a.push(m,x,_):a.push(m,_,x)},u=f=>K_(f,v.polygon)?s?e:e-n:s?e+n:e;return i.forEach(f=>{const h=f.length;if(h<3)return;let d=0,m=0;f.forEach(S=>{d+=S.x,m+=S.y});const _=d/h,x=m/h,p=[];f.forEach(S=>{const P=u(S);p.push(P),o.push(S.x,S.y,P)});const g=p.reduce((S,P)=>S+P,0)/h;o.push(_,x,g);const y={x:_,y:x};for(let S=0;S<h;S++){const P=(S+1)%h;l(f[S],f[P],y,c+S,c+P,c+h)}c+=h+1}),t.forEach(f=>{const h=f.length;if(h<3)return;let d=0,m=0;f.forEach(S=>{d+=S.x,m+=S.y});const _=d/h,x=m/h,p=[];f.forEach((S,P)=>{const b=s||(P===2||P===3)?e+n:e;p.push(b),o.push(S.x,S.y,b)});const g=p.reduce((S,P)=>S+P,0)/h;o.push(_,x,g);const y={x:_,y:x};for(let S=0;S<h;S++){const P=(S+1)%h;l(f[S],f[P],y,c+S,c+P,c+h)}c+=h+1}),r.setAttribute("position",new Zt(o,3)),r.setIndex(a),r.computeVertexNormals(),r}function J_(i,t,e,n,s,r,o){const a=new te,c=i.length;if(c<3)return a;const l=[],u=[],f=t-.05,h=P=>P.x!==void 0?P.x:P[0],d=P=>P.y!==void 0?P.y:P[1],m=Math.min(...i.map(P=>h(P))),_=Math.max(...i.map(P=>h(P))),x=i.map((P,w)=>{const b=o&&o[w]?o[w]:P;return $_(b,r)===0?e:f}),p=(P,w)=>{let b=0,M=0;for(let A=0;A<i.length;A++){const D=h(i[A]),T=d(i[A]),I=Math.hypot(P-D,w-T);if(I<1e-4)return x[A];const U=1/(I*I);b+=U,M+=U*x[A]}return b>0?M/b:f},g=.05,y=.1,S=Math.max(2,Math.round((_-m)/s));for(let P=1;P<S;P++){const w=P/S,b=m+w*(_-m),M=[];for(let A=0;A<c;A++){const D=i[A],T=i[(A+1)%c],I=h(D),U=d(D),F=h(T),L=d(T);if((I<=b&&F>b||F<=b&&I>b)&&Math.abs(F-I)>1e-6){const O=U+(b-I)*(L-U)/(F-I);M.push(O)}}M.sort((A,D)=>A-D);for(let A=0;A<M.length-1;A+=2){const D=M[A],T=M[A+1];if(T-D<.05)continue;const I=b,U=D,F=p(I,U),L=b,O=T,B=p(L,O),W=L-I,G=O-U,q=B-F,st=Math.hypot(W,G,q);if(st<1e-4)continue;const nt=W/st,ct=G/st,Pt=q/st;let Tt,Z,ht;Math.abs(nt)<.9&&Math.abs(ct)<.9?(Tt=-ct,Z=nt,ht=0):(Tt=Pt,Z=0,ht=-nt);const at=Math.hypot(Tt,Z,ht),ut=Tt/at,vt=Z/at,pt=ht/at,It=ct*pt-Pt*vt,At=Pt*ut-nt*pt,Q=nt*vt-ct*ut,J=g/2,$=y/2,et=l.length/3;l.push(I-ut*J-It*$,U-vt*J-At*$,F-pt*J-Q*$),l.push(I+ut*J-It*$,U+vt*J-At*$,F+pt*J-Q*$),l.push(I+ut*J+It*$,U+vt*J+At*$,F+pt*J+Q*$),l.push(I-ut*J+It*$,U-vt*J+At*$,F-pt*J+Q*$),l.push(L-ut*J-It*$,O-vt*J-At*$,B-pt*J-Q*$),l.push(L+ut*J-It*$,O+vt*J-At*$,B+pt*J-Q*$),l.push(L+ut*J+It*$,O+vt*J+At*$,B+pt*J+Q*$),l.push(L-ut*J+It*$,O+vt*J+At*$,B-pt*J+Q*$),u.push(et+0,et+2,et+1),u.push(et+0,et+3,et+2),u.push(et+4,et+5,et+6),u.push(et+4,et+6,et+7),u.push(et+0,et+1,et+5),u.push(et+0,et+5,et+4),u.push(et+1,et+2,et+6),u.push(et+1,et+6,et+5),u.push(et+2,et+3,et+7),u.push(et+2,et+7,et+6),u.push(et+3,et+0,et+4),u.push(et+3,et+4,et+7)}}return a.setAttribute("position",new Zt(l,3)),a.setIndex(u),a.computeVertexNormals(),a}function Q_(i,t,e,n,s=8){const r=new te,o=[],a=[];for(let l=0;l<=s;l++){const u=l/s,f=-i/2+i*u,h=-e+n*4*u*(1-u);o.push(f,-t/2,0),o.push(f,t/2,0),o.push(f,t/2,h),o.push(f,-t/2,h)}for(let l=0;l<s;l++){const u=l*4,f=(l+1)*4;a.push(u+0,f+0,f+1),a.push(u+0,f+1,u+1),a.push(u+3,f+3,f+2),a.push(u+3,f+2,u+2),a.push(u+3,f+3,f+0),a.push(u+3,f+0,u+0),a.push(u+1,u+2,f+2),a.push(u+1,f+2,f+1)}a.push(0,3,2),a.push(0,2,1);const c=s*4;return a.push(c+1,c+2,c+3),a.push(c+1,c+3,c+0),r.setAttribute("position",new Zt(o,3)),r.setIndex(a),r.computeVertexNormals(),r}function tv(i,t,e,n,s,r,o){const a=new te,c=[],l=[],u=new ni;u.moveTo(i[0].x,i[0].y);for(let b=1;b<i.length;b++)u.lineTo(i[b].x,i[b].y);u.closePath();const f=new Js(u),h=f.attributes.position.array,d=f.index.array,m=h.length/3;for(let b=0;b<m;b++)c.push(h[3*b],h[3*b+1],t);for(let b=0;b<d.length;b++)l.push(d[b]);const _=8,x=_s(i),p=[],g=[];let y=0;const S=i.map(b=>r.some(A=>Math.hypot(b.x-A.x,b.y-A.y)<.1)?1:0);for(let b=0;b<i.length;b++){const M=i[b],A=i[(b+1)%i.length],D=S[b],T=S[(b+1)%i.length];for(let U=0;U<=_;U++)for(let F=0;F<=U;F++){let L=M.x,O=M.y;const B=U>0?F/U:0;U>0&&(L=M.x+(A.x-M.x)*B,O=M.y+(A.y-M.y)*B);const W=U/_,G=x.x+(L-x.x)*W,q=x.y+(O-x.y)*W,st=D*(1-B)+T*B,nt=s?1:0,ct=n*(1-.8*nt),Pt=4*B*(1-B),Tt=n*st*nt+n*(1-st)*Pt,Z=ct*(1-W*W)+Tt*W*W,ht=t-e+Z;p.push(G,q,ht)}const I=(U,F)=>{const L=U*(U+1)/2;return y+L+F};for(let U=0;U<_;U++)for(let F=0;F<=U;F++){const L=I(U,F),O=I(U+1,F),B=I(U+1,F+1);if(g.push(L,O,B),F<U){const W=I(U,F),G=I(U+1,F+1),q=I(U,F+1);g.push(W,G,q)}}y+=(_+1)*(_+2)/2}const P=m;for(let b=0;b<p.length;b+=3)c.push(p[b],p[b+1],p[b+2]);for(let b=0;b<g.length;b+=3)l.push(P+g[b+2],P+g[b+1],P+g[b]);let w=0;for(let b=0;b<i.length;b++){const M=i[b],A=i[(b+1)%i.length],D=c.length/3;for(let I=0;I<=_;I++){const U=M.x+(A.x-M.x)*(I/_),F=M.y+(A.y-M.y)*(I/_);c.push(U,F,t)}const T=(I,U)=>{const F=I*(I+1)/2;return w+F+U};for(let I=0;I<_;I++){const U=D+I,F=D+I+1,L=P+T(_,I+1),O=P+T(_,I);l.push(U,O,L),l.push(U,L,F)}w+=(_+1)*(_+2)/2}return a.setAttribute("position",new Zt(c,3)),a.setIndex(l),a.computeVertexNormals(),f.dispose(),a}function ev(){if(!Le)return;for(;Le.children.length>0;){const l=Le.children[0];Le.remove(l),l.geometry&&l.geometry.dispose(),l.material&&(Array.isArray(l.material)?l.material.forEach(u=>u.dispose()):l.material.dispose())}const i=v.numFloors,t=v.floorHeight;Sh(v.structuralBays);const e=new os({color:7893356,roughness:.8,metalness:.1}),n=new os({color:7893356,roughness:.8,metalness:.1,side:qe}),s=new os({color:8736014,roughness:.9,metalness:0}),r=new os({color:8736014,roughness:.9,metalness:0,side:qe});new De({color:13421772,wireframe:!0,transparent:!0,opacity:.3,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1});const o=v.activePolygonId,a=Array.from({length:i},()=>[]),c=Array.from({length:i},()=>[]);v.importedPolygons.forEach(l=>{if(!l.hasScaffold||l.polygon.length<3)return;v.activePolygonId=l.id;let u=!0,f=0;for(let b=0;b<v.polygon.length;b++){const M=v.polygon[b],A=v.polygon[(b+1)%v.polygon.length];f+=M.x*A.y-A.x*M.y}u=f>0;const h=[];for(let b=0;b<v.polygon.length;b++){const M=v.polygon[b],A=v.polygon[(b+1)%v.polygon.length],D=A.x-M.x,T=A.y-M.y,I=Math.hypot(D,T);let U=0,F=0;I>1e-6&&(u?(U=T/I,F=-D/I):(U=-T/I,F=D/I)),h.push(new ot(U,F))}const d=[];for(let b=0;b<v.polygon.length;b++){const M=v.polygon[b],A=v.polygon[(b+1)%v.polygon.length],D=h[b],T=q_(M,A,D,l,v.importedPolygons);d.push(T)}const m=[];v.structuralBays&&v.structuralBays.forEach(b=>{m.push(j_(b,v.polygon))});const _=v.planarGraph?v.planarGraph.vertices:v.polygon,x=[];if(v.planarGraph)v.planarGraph.edges.forEach(b=>{const M=v.planarGraph.vertices[b[0]],A=v.planarGraph.vertices[b[1]];x.push([M,A])});else for(let b=0;b<v.polygon.length;b++)x.push([v.polygon[b],v.polygon[(b+1)%v.polygon.length]]);l.planarGraph3D={vertices:[],edges:[]},l.structuralBays3D=[];const p=[];for(let b=0;b<i;b++)p.push(Z_(b,i,t,v.groundFloorHeightFactor,v.polygon,h));const g=_.length;for(let b=0;b<=i;b++){const M=kr(Math.min(b,i-1),i,t,v.groundFloorHeightFactor),A=b===i?M.top:M.bottom,D=Math.min(b,i-1);yh(_,v.polygon,p[D]).forEach((I,U)=>{l.planarGraph3D.vertices.push({id:`vertex_P${l.id}_F${b}_V${U}`,x:I.x,y:I.y,z:A})})}for(let b=0;b<i;b++)x.forEach(([M,A],D)=>{const T=b*g+_.indexOf(M),I=b*g+_.indexOf(A);l.planarGraph3D.edges.push({u:T,v:I,type:"beam",floorIndex:b})});for(let b=0;b<i;b++)_.forEach((M,A)=>{const D=b*g+A,T=(b+1)*g+A;l.planarGraph3D.edges.push({u:D,v:T,type:"column",floorIndex:b})});v.structuralBays&&v.structuralBays.forEach((b,M)=>{if(b.length<3)return;let A="interior";const D=m[M],T=new Set;for(let U=0;U<b.length;U++){const F=b[U],L=b[(U+1)%b.length],O={x:(F.x+L.x)/2,y:(F.y+L.y)/2};for(let B=0;B<v.polygon.length;B++){const W=v.polygon[B],G=v.polygon[(B+1)%v.polygon.length];if(sa(O,W,G)<.1){const q=h[B];q.y>.5&&T.add("North"),q.y<-.5&&T.add("South"),q.x>.5&&T.add("East"),q.x<-.5&&T.add("West")}}}const I=Array.from(T);if(D)A="corner";else{let U=!1,F=!1,L=!1;for(let O=0;O<b.length;O++){const B=b[O],W=b[(O+1)%b.length],G={x:(B.x+W.x)/2,y:(B.y+W.y)/2};for(let q=0;q<v.polygon.length;q++){const st=v.polygon[q],nt=v.polygon[(q+1)%v.polygon.length];if(sa(G,st,nt)<.1){const ct=d[q];ct==="courtyard"?U=!0:ct==="other_building"?F=!0:ct==="open_space"&&(L=!0)}}}U?A="courtyard":F?A="neighbor":L&&(A="open_space")}for(let U=0;U<i;U++){const F=kr(U,i,t,v.groundFloorHeightFactor),L=p[U],O=Vr(b,v.polygon,L);let B=55;U===0?B=35:U===i-1&&(B=75);let W=30;A==="corner"?W=90:A==="courtyard"&&(W=60);let G=60;const q=I.includes("North"),st=I.includes("South"),nt=I.includes("East"),ct=I.includes("West");q&&nt?G=45:st&&nt?G=135:st&&ct?G=225:q&&ct?G=315:q?G=0:nt?G=90:st?G=180:ct&&(G=270);const Pt=`hsl(${G}, ${W}%, ${B}%)`;l.structuralBays3D.push({id:`${l.id}_bay_${M}_floor_${U}`,cellIdx:M,floorIndex:U,polygonId:l.id,vertices:O.map(Tt=>({x:Tt.x,y:Tt.y,z:F.bottom})),topVertices:O.map(Tt=>({x:Tt.x,y:Tt.y,z:F.top})),phenotype:A,color:Pt,facingDirections:I})}});const y=new Set,S=new Map,P=new Set,w=new Map;_.forEach((b,M)=>{let A=!1;const D=[];let T=!1;const I=[];for(let U=0;U<v.polygon.length;U++){const F=v.polygon[U],L=v.polygon[(U+1)%v.polygon.length],O=h[U],B=d[U];sa(b,F,L)<.1&&(B==="courtyard"?(A=!0,D.push(O)):(B==="open_space"||B==="other_building"||B==="touching")&&(T=!0,I.push(O)))}if(A){y.add(M);let U=0,F=0;D.forEach(O=>{U+=O.x,F+=O.y});const L=new ot(U,F).normalize();S.set(M,L)}if(T&&!A){let U=0,F=0;I.forEach(O=>{U+=O.x,F+=O.y});const L=new ot(U,F).normalize();(L.x<-.5||L.y<-.5)&&(P.add(M),w.set(M,L))}});for(let b=0;b<i;b++){const M=kr(b,i,t,v.groundFloorHeightFactor),A=b===0,D=b===i-1,T=p[b],I=yh(_,v.polygon,T),U=x.map(([F,L])=>{const O=I[_.indexOf(F)],B=I[_.indexOf(L)];return[O,B]});if(v.showFloorSlabs&&b>0&&v.structuralBays.forEach((F,L)=>{if(m[L]&&b<1)return;const B=Vr(F,v.polygon,T),W=b===0,G=F.some(Tt=>v.polygon.some(Z=>Math.hypot(Tt.x-Z.x,Tt.y-Z.y)<.1)),q=W?v.slabThickness*1.5:v.slabThickness,st=b===1?3*(q+v.beamDepth):q+v.beamDepth,nt=b===1?3*v.beamDepth:v.beamDepth,ct=tv(B,M.bottom,st,nt,G,v.polygon),Pt=new xt(ct,b===1?n:r);Pt.position.z=0,Pt.userData={is3DStackMesh:!0,polygonId:l.id,materialGroup:b===1?"concrete_masonry":"tectonic_timber"},Le.add(Pt)}),v.showRoofSlab&&D&&T&&T.length>=3){const F=[];for(let ct=0;ct<T.length;ct++){const Pt=T[ct],Tt=(ct-1+T.length)%T.length,Z=ct,ht=h[Tt],at=h[Z],ut=Mh(ht),vt=Mh(at),pt=(ut+vt)/2,It=new ot(ht.x+at.x,ht.y+at.y).normalize();F.push(new ot(Pt.x+It.x*pt*v.cantileverScale,Pt.y+It.y*pt*v.cantileverScale))}const L=new ni;L.moveTo(F[0].x,F[0].y);for(let ct=1;ct<F.length;ct++)L.lineTo(F[ct].x,F[ct].y);L.closePath();const O=[];for(let ct=0;ct<T.length;ct++){const Pt=(ct+1)%T.length;O.push([T[ct],T[Pt],F[Pt],F[ct]])}const B=(v.unprunedStructuralBays||[]).map(ct=>Vr(ct,v.polygon,T)),W=O,G=Eh(B,W,M.top,v.roofPitchRH,!1),q=new xt(G,r);q.position.z=0,q.userData={is3DStackMesh:!0,polygonId:l.id,materialGroup:"tectonic_timber"},Le.add(q);const st=Eh(B,W,M.top,v.roofPitchRH,!0),nt=new xt(st,n);nt.position.z=0,nt.userData={is3DStackMesh:!0,polygonId:l.id,materialGroup:"concrete_masonry"},Le.add(nt)}if(v.showVaultedRoofs&&D&&T&&T.length>=3){const F=(v.unprunedStructuralBays||[]).map(O=>Vr(O,v.polygon,T)),L=Sh(v.unprunedStructuralBays||[]);(v.unprunedStructuralBays||[]).forEach((O,B)=>{const W=F[B],G=O,q=M.top,st=M.top-v.roofHyparH,nt=J_(W,q,st,v.roofHyparH,v.roofHyparSlatSpacing,L,G),ct=new xt(nt,r);ct.userData={is3DStackMesh:!0,polygonId:l.id,materialGroup:"tectonic_timber"},Le.add(ct)})}if(v.show3DColumns){v.slabThickness,A?v.slabThickness*1.5:D&&v.slabThickness*.8;const F=M.height;let L=1;i>1&&(L=1.4-.7*(b/(i-1)));const O=v.columnRadius*L,B=O*2.2,W=O*.8,G=new ni;G.moveTo(-B/2,-B/2),G.lineTo(B/2,-B/2),G.lineTo(B/2,-B/2+W),G.lineTo(-B/2+W,-B/2+W),G.lineTo(-B/2+W,B/2),G.lineTo(-B/2,B/2),G.closePath(),I.forEach((q,st)=>{let nt=!1;for(const pt of a[b])if(Math.hypot(q.x-pt.x,q.y-pt.y)<.2){nt=!0;break}if(nt)return;a[b].push({x:q.x,y:q.y});let ct=!1,Pt=-1;const Tt=_[st];for(let pt=0;pt<v.polygon.length;pt++){const It=v.polygon[pt];if(Math.hypot(Tt.x-It.x,Tt.y-It.y)<.1){ct=!0,Pt=pt;break}}let Z=0;if(ct&&Pt!==-1){const pt=v.polygon.length,It=h[(Pt-1+pt)%pt],At=h[Pt],Q=(It.x+At.x)/2,J=(It.y+At.y)/2;Z=(Math.hypot(Q,J)>1e-6?Math.atan2(J,Q):0)-5*Math.PI/4}const ht=y.has(st),at=P.has(st);let ut=F;const vt=(pt,It,At,Q=!1)=>{let J;const $=b===0?e:s;if(at&&!Q){const kt=new Ae(2,.3,ut);J=new xt(kt,$),J.position.set(pt,It,M.bottom+ut/2),J.rotation.z=At}else if(ct&&!Q){const et=new Gs(G,{depth:ut,bevelEnabled:!1});J=new xt(et,$),J.position.set(pt,It,M.bottom),J.rotation.z=At}else{const et=new je(O,O,ut,16);et.rotateX(Math.PI/2),J=new xt(et,$),J.position.set(pt,It,M.bottom+ut/2)}J.userData={is3DStackMesh:!0,polygonId:l.id,materialGroup:b===0?"concrete_masonry":"tectonic_timber"},Le.add(J)};if(ht){vt(q.x,q.y,0,!1);const pt=S.get(st),It=q.x-3*pt.x,At=q.y-3*pt.y;vt(It,At,0,!0)}else if(at){const pt=w.get(st),It=Math.atan2(pt.y,pt.x);vt(q.x,q.y,It,!1)}else ct?vt(q.x,q.y,Z,!1):vt(q.x,q.y,0,!1)})}if(v.show3DBeams&&b>=1){let F=1;i>1&&(F=1.3-.5*(b/(i-1)));const L=b===1?.3:v.beamWidth*F,O=b===1?3*v.beamDepth*F:v.beamDepth*F;let B=v.slabThickness;A&&(B=v.slabThickness*1.5),U.forEach(([W,G])=>{const q=G.x-W.x,st=G.y-W.y;if(Math.hypot(q,st)<.001)return;const ct=(W.x+G.x)/2,Pt=(W.y+G.y)/2;let Tt=!1;for(const ut of c[b])if(Math.hypot(ct-ut.x,Pt-ut.y)<.2){Tt=!0;break}if(Tt)return;c[b].push({x:ct,y:Pt});const Z=(ut,vt)=>{const pt=vt.x-ut.x,It=vt.y-ut.y,At=Math.hypot(pt,It);if(At<.001)return;const Q=(ut.x+vt.x)/2,J=(ut.y+vt.y)/2;let $=b===1;if(!$&&v.structuralBays)for(let Gt=0;Gt<v.structuralBays.length;Gt++){const Nt=v.structuralBays[Gt];if(!(m[Gt]&&b<1)){const mt=Nt.some(R=>Math.hypot(R.x-ut.x,R.y-ut.y)<.1),se=Nt.some(R=>Math.hypot(R.x-vt.x,R.y-vt.y)<.1);if(mt&&se){$=!0;break}}}let et,yt;$?(yt=M.bottom-B,et=Q_(At,L,O,O)):(yt=M.bottom-B-O/2,et=new Ae(At,L,O));const kt=b===1?e:s,z=new xt(et,kt);z.position.set(Q,J,yt),z.rotation.z=Math.atan2(It,pt),z.userData={is3DStackMesh:!0,polygonId:l.id,materialGroup:b===1?"concrete_masonry":"tectonic_timber"},Le.add(z)};Z(W,G);const ht=I.indexOf(W),at=I.indexOf(G);if(y.has(ht)&&y.has(at)){const ut=S.get(ht),vt=S.get(at),pt=new ot(W.x-3*ut.x,W.y-3*ut.y),It=new ot(G.x-3*vt.x,G.y-3*vt.y);Z(pt,It)}})}if(v.showBriseSoleil){const F=new ot(-.707,-.707);for(let L=0;L<T.length;L++){const O=T[L],B=T[(L+1)%T.length],W=h[L],G=d[L],q=Math.hypot(B.x-O.x,B.y-O.y);if(q<.001)continue;W.dot(F);let st=.5,nt=.5,ct=W.y<-.5||W.x<-.5;if(ct&&(G==="courtyard"||G==="touching")&&(ct=!1),!ct)continue;const Pt=Math.max(2,Math.floor(q/nt));let Tt=v.slabThickness;D&&(Tt=v.slabThickness*.8);const Z=M.height-Tt,ht=v.louverWidth*v.briseFinScale,at=new ni;at.moveTo(0,-st/2),at.quadraticCurveTo(ht/2,0,0,st/2),at.quadraticCurveTo(-ht/2,0,0,-st/2),at.closePath();const ut=new Gs(at,{depth:Z,bevelEnabled:!1});for(let vt=0;vt<=Pt;vt++){const pt=vt/Pt,It=O.x+(B.x-O.x)*pt+W.x*.15,At=O.y+(B.y-O.y)*pt+W.y*.15,Q=new xt(ut,s);Q.position.set(It,At,M.bottom),Q.rotation.z=-120*Math.PI/180,Q.userData={is3DStackMesh:!0,polygonId:l.id,materialGroup:"tectonic_timber"},Le.add(Q)}}}}v.show3DCells&&l.structuralBays3D&&l.structuralBays3D.length>0&&l.structuralBays3D.forEach(b=>{const M=new ni;M.moveTo(b.vertices[0].x,b.vertices[0].y);for(let nt=1;nt<b.vertices.length;nt++)M.lineTo(b.vertices[nt].x,b.vertices[nt].y);M.closePath();const A=kr(b.floorIndex,i,t,v.groundFloorHeightFactor).height,D=new Gs(M,{depth:A,bevelEnabled:!1}),T=new ee(b.color),I=new os({color:T,transparent:!1,roughness:.5,metalness:.1,side:qe,depthWrite:!0}),U=new xt(D,I);U.position.z=b.vertices[0].z,U.userData={is3DStackMesh:!0,isCellVolume:!0,polygonId:l.id,cellIdx:b.cellIdx,floorIndex:b.floorIndex,phenotype:b.phenotype,facingDirections:b.facingDirections},Le.add(U);const F=new ee(b.color).clone().multiplyScalar(.7),L=new hn({color:F,transparent:!0,opacity:.25}),O=b.vertices.map(nt=>new N(nt.x,nt.y,nt.z));O.push(O[0]);const B=new te().setFromPoints(O),W=new be(B,L);W.userData={is3DStackMesh:!0,polygonId:l.id},Le.add(W);const G=b.topVertices.map(nt=>new N(nt.x,nt.y,nt.z));G.push(G[0]);const q=new te().setFromPoints(G),st=new be(q,L);st.userData={is3DStackMesh:!0,polygonId:l.id},Le.add(st);for(let nt=0;nt<b.vertices.length;nt++){const ct=b.vertices[nt],Pt=[new N(ct.x,ct.y,ct.z),new N(ct.x,ct.y,ct.z+A)],Tt=new te().setFromPoints(Pt),Z=new be(Tt,L);Z.userData={is3DStackMesh:!0,polygonId:l.id},Le.add(Z)}})}),v.activePolygonId=o}function nv(){const i=document.getElementById("btn-minimize-sidebar"),t=document.getElementById("control-sidebar");i&&t&&i.addEventListener("click",()=>{t.classList.toggle("collapsed");const T=i.querySelector("span");T&&(T.innerText=t.classList.contains("collapsed")?"▲":"▼")});const e=document.getElementById("header-mat-params"),n=document.getElementById("section-mat-params");e&&n&&e.addEventListener("click",()=>{n.classList.toggle("collapsed")});const s=document.getElementById("header-interactive-helpers"),r=document.getElementById("section-interactive-helpers");s&&r&&s.addEventListener("click",()=>{r.classList.toggle("collapsed")});const o=document.getElementById("header-rhino-integration"),a=document.getElementById("section-rhino-integration");o&&a&&o.addEventListener("click",()=>{a.classList.toggle("collapsed")});const c=document.getElementById("header-3d-stack"),l=document.getElementById("section-3d-stack");c&&l&&c.addEventListener("click",()=>{l.classList.toggle("collapsed")});const u=document.getElementById("btn-collapse-ribs-workflow"),f=document.getElementById("ribs-workflow-dependents");u&&f&&u.addEventListener("click",()=>{const T=f.style.display==="none";f.style.display=T?"block":"none",u.classList.toggle("collapsed",!T)}),document.getElementById("btn-view-perspective").addEventListener("click",()=>_h("perspective")),document.getElementById("btn-view-top").addEventListener("click",()=>_h("top"));const h=document.querySelectorAll(".preset-card");h.forEach(T=>{T.addEventListener("click",()=>{h.forEach(U=>U.classList.remove("active")),T.classList.add("active");const I=T.getAttribute("data-preset");I&&_u(I)})});const d=document.getElementById("slider-samples"),m=document.getElementById("val-samples");d.addEventListener("input",T=>{v.samplesPerEdge=parseInt(T.target.value),m.innerText=v.samplesPerEdge,ze()});const _=document.getElementById("slider-precision"),x=document.getElementById("val-precision");_.addEventListener("input",T=>{const I=parseInt(T.target.value);v.precision=Math.pow(10,-I),x.innerText=`1e-${I}`,ze()}),document.getElementById("chk-show-skeleton").addEventListener("change",T=>{v.showSkeleton=T.target.checked,he()}),document.getElementById("chk-simplify-skeleton").addEventListener("change",T=>{v.simplifySkeleton=T.target.checked,ze()}),document.getElementById("chk-prune-branches").addEventListener("change",T=>{if(v.pruneBranches=T.target.checked,v.pruneBranches){v.simplifySkeleton=!0;const I=document.getElementById("chk-simplify-skeleton");I&&(I.checked=!0)}ze()}),document.getElementById("chk-show-ribs").addEventListener("change",T=>{if(v.showRibs=T.target.checked,v.showRibs){v.simplifySkeleton=!0;const I=document.getElementById("chk-simplify-skeleton");I&&(I.checked=!0)}ze()});const p=document.getElementById("slider-ribs"),g=document.getElementById("val-ribs");p.addEventListener("input",T=>{v.ribSpacing=parseFloat(T.target.value),g.innerText=`${v.ribSpacing.toFixed(1)}m`,ze()});const y=document.getElementById("slider-merge"),S=document.getElementById("val-merge");y.addEventListener("input",T=>{v.mergeThreshold=parseFloat(T.target.value),S.innerText=`${v.mergeThreshold.toFixed(1)}m`,ze()});function P(){const T=document.getElementById("btn-combine-bays"),I=document.getElementById("btn-delete-bays");T&&(T.disabled=v.selectedBayIndices.length<2),I&&(I.disabled=v.selectedBayIndices.length===0)}document.getElementById("chk-show-bays").addEventListener("change",T=>{v.showBays=T.target.checked;const I=document.getElementById("container-edit-bays");if(I&&(I.style.display=v.showBays?"block":"none"),!v.showBays){v.editBaysMode=!1,v.selectedBayIndices=[];const U=document.getElementById("chk-edit-bays-mode");U&&(U.checked=!1);const F=document.getElementById("edit-bays-actions");F&&(F.style.display="none")}qt&&qt.detach(),v.selectedVertexType=null,v.selectedVertexIdx=-1,v.selectedVertexOrig=null,he()}),document.getElementById("chk-edit-bays-mode").addEventListener("change",T=>{v.editBaysMode=T.target.checked,v.selectedBayIndices=[],qt&&qt.detach(),v.selectedVertexType=null,v.selectedVertexIdx=-1,v.selectedVertexOrig=null;const I=document.getElementById("edit-bays-actions");I&&(I.style.display=v.editBaysMode?"grid":"none"),P(),he()}),document.getElementById("btn-combine-bays").addEventListener("click",()=>{if(v.selectedBayIndices.length>=2){const T=v.selectedBayIndices.map(I=>_s(v.structuralBays[I]));v.bayEdits.push({type:"merge",points:T}),v.selectedBayIndices=[],qt&&qt.detach(),v.selectedVertexType=null,v.selectedVertexIdx=-1,v.selectedVertexOrig=null,P(),ze()}});const w=()=>{v.selectedBayIndices.length>0&&(v.selectedBayIndices.forEach(T=>{v.bayEdits.push({type:"delete",point:_s(v.structuralBays[T])})}),v.selectedBayIndices=[],qt&&qt.detach(),v.selectedVertexType=null,v.selectedVertexIdx=-1,v.selectedVertexOrig=null,P(),ze())};document.getElementById("btn-delete-bays").addEventListener("click",w),window.addEventListener("keydown",T=>{if(v.editBaysMode&&(T.key==="Delete"||T.key==="Del")){if(document.activeElement&&(document.activeElement.tagName==="INPUT"||document.activeElement.tagName==="TEXTAREA"))return;w()}}),document.getElementById("btn-reset-bay-edits").addEventListener("click",()=>{v.bayEdits=[],v.graphVertexOverrides.clear(),v.selectedBayIndices=[],qt&&qt.detach(),v.selectedVertexType=null,v.selectedVertexIdx=-1,v.selectedVertexOrig=null,P(),ze()}),document.getElementById("chk-hover-circle").addEventListener("change",T=>{v.hoverCircle=T.target.checked,v.hoverCircle||(v.hoveredMedialPoint=null),he()}),document.getElementById("chk-show-governors").addEventListener("change",T=>{v.showGovernors=T.target.checked,he()});const b=document.getElementById("btn-draw-custom"),M=document.getElementById("btn-clear-custom"),A=document.getElementById("drawing-indicator");b.addEventListener("click",()=>{v.isDrawing=!0,v.importedPolygons=[],v.activePolygonId="default",v.customVertices=[],v.polygon=[],v.graphVertexOverrides.clear(),v.bayEdits=[],v.selectedBayIndices=[],v.skeletonData={regularPoints:[],junctionPoints:[]},qt&&qt.detach(),v.selectedVertexType=null,v.selectedVertexIdx=-1,v.selectedVertexOrig=null,b.style.display="none",M.style.display="inline-flex",A.style.display="flex",h.forEach(T=>T.classList.remove("active")),document.getElementById("card-custom").style.display="flex",document.getElementById("card-custom").classList.add("active"),he()}),M.addEventListener("click",()=>{v.importedPolygons=[],v.activePolygonId="default",v.customVertices=[],v.polygon=[],v.isDrawing=!0,v.skeletonData={regularPoints:[],junctionPoints:[]},qt&&qt.detach(),v.selectedVertexType=null,v.selectedVertexIdx=-1,v.selectedVertexOrig=null,he()}),Rn.addEventListener("mousedown",sv),Rn.addEventListener("mousemove",rv),Rn.addEventListener("mouseup",ov),Rn.addEventListener("mouseleave",av),Rn.addEventListener("contextmenu",T=>T.preventDefault());const D=document.getElementById("btn-reset-view");D&&D.addEventListener("click",mo),iv()}function iv(){const i=document.getElementById("rhino-file-input"),t=document.getElementById("btn-upload-rhino"),e=document.getElementById("rhino-file-info"),n=document.getElementById("rhino-filename"),s=document.getElementById("rhino-object-count"),r=document.getElementById("lbl-rhino-layers"),o=document.getElementById("rhino-layers-container"),a=document.getElementById("rhino-actions"),c=document.getElementById("btn-load-rhino-layers"),l=document.getElementById("btn-clear-rhino"),u=document.getElementById("btn-export-rhino"),f=document.getElementById("rhino-export-filename");if(!i||!t)return;let h=null;t.addEventListener("click",()=>{i.click()}),i.addEventListener("change",E=>{const V=E.target.files[0];if(!V)return;n.textContent=V.name,t.textContent="Loading File...",t.disabled=!0;const tt=new FileReader;tt.onload=async lt=>{try{h=lt.target.result,console.log("[UI] Parsing Rhino file metadata...");const{layers:dt,objectCount:St}=await cs.parseMetadata(h);s.textContent=`${St} objects found`,e.style.display="block",o.innerHTML="",dt&&dt.length>0&&(dt.forEach(K=>{const it=document.createElement("div");it.className="layer-item";const bt=document.createElement("input");bt.type="checkbox",bt.id=`layer-chk-${K.index}`,bt.value=K.index,bt.checked=!1;const Lt=document.createElement("div");Lt.className="layer-color-dot",Lt.style.backgroundColor=`rgba(${K.color.r}, ${K.color.g}, ${K.color.b}, ${K.color.a/255})`;const _t=document.createElement("span");_t.className="layer-name",_t.textContent=K.name,_t.title=K.name,_t.addEventListener("click",()=>{bt.checked=!bt.checked}),it.appendChild(bt),it.appendChild(Lt),it.appendChild(_t),o.appendChild(it)}),r.style.display="block",o.style.display="block",a.style.display="grid"),t.textContent="Change .3DM File"}catch(dt){console.error("[UI] Error loading Rhino metadata:",dt),alert("Error loading .3dm metadata: "+dt.message),t.textContent="Load .3DM File"}finally{t.disabled=!1}},tt.readAsArrayBuffer(V)}),c.addEventListener("click",async()=>{if(!h)return;const E=o.querySelectorAll('input[type="checkbox"]:checked'),V=Array.from(E).map(lt=>parseInt(lt.value));if(V.length===0){alert("Please select at least one layer to load.");return}c.disabled=!0;const tt=c.textContent;c.textContent="Loading...";try{await cs.loadLayers(h,V),console.log("[UI] Rhino geometries successfully loaded.")}catch(lt){console.error("[UI] Error loading layers:",lt),alert("Failed to load layers: "+lt.message)}finally{c.disabled=!1,c.textContent=tt}}),l.addEventListener("click",()=>{cs.clearRhinoGeometries(),console.log("[UI] Rhino geometries cleared.")}),u.addEventListener("click",async()=>{const E=f.value.trim()||"medial_axis_export.3dm";u.disabled=!0,u.textContent="Exporting...";try{await cs.exportSceneTo3dm(E),console.log("[UI] Export complete.")}catch(V){console.error("[UI] Error exporting to 3DM:",V),alert("Failed to export to 3DM: "+V.message)}finally{u.disabled=!1,u.textContent="Export to 3DM"}});const d=document.getElementById("slider-floors"),m=document.getElementById("val-floors");d&&m&&d.addEventListener("input",E=>{v.numFloors=parseInt(E.target.value),m.innerText=v.numFloors,he()});const _=document.getElementById("slider-floor-height"),x=document.getElementById("val-floor-height");_&&x&&_.addEventListener("input",E=>{v.floorHeight=parseFloat(E.target.value),x.innerText=`${v.floorHeight.toFixed(1)}m`,he()});const p=document.getElementById("slider-ground-floor-factor"),g=document.getElementById("val-ground-floor-factor");p&&g&&p.addEventListener("input",E=>{v.groundFloorHeightFactor=parseFloat(E.target.value),g.innerText=v.groundFloorHeightFactor.toFixed(1),he()});const y=document.getElementById("chk-3d-columns");y&&y.addEventListener("change",E=>{v.show3DColumns=E.target.checked,he()});const S=document.getElementById("chk-3d-beams");S&&S.addEventListener("change",E=>{v.show3DBeams=E.target.checked,he()});const P=document.getElementById("chk-3d-slabs");P&&P.addEventListener("change",E=>{v.showFloorSlabs=E.target.checked,he()});const w=document.getElementById("chk-3d-roof");w&&w.addEventListener("change",E=>{v.showRoofSlab=E.target.checked,he()});const b=document.getElementById("chk-3d-vaults");b&&b.addEventListener("change",E=>{v.showVaultedRoofs=E.target.checked,he()});const M=document.getElementById("chk-3d-brisesoleil");M&&M.addEventListener("change",E=>{v.showBriseSoleil=E.target.checked,he()});const A=document.getElementById("chk-3d-cells");A&&A.addEventListener("change",E=>{v.show3DCells=E.target.checked,he()});const D=document.getElementById("chk-hover-labels");D&&D.addEventListener("change",E=>{if(v.showHoverLabels=E.target.checked,!v.showHoverLabels){const V=document.getElementById("cell-tooltip");V&&(V.style.display="none")}});const T=document.getElementById("btn-tab-workflow"),I=document.getElementById("btn-tab-shading"),U=document.getElementById("btn-tab-ai-render"),F=document.getElementById("btn-tab-shape-grammar"),L=document.getElementById("tab-content-workflow"),O=document.getElementById("tab-content-shading"),B=document.getElementById("tab-content-ai-render"),W=document.getElementById("tab-content-shape-grammar");T&&I&&U&&F&&L&&O&&B&&W&&(T.addEventListener("click",()=>{T.classList.add("active"),I.classList.remove("active"),U.classList.remove("active"),F.classList.remove("active"),L.style.display="flex",O.style.display="none",B.style.display="none",W.style.display="none",Qt&&(Qt.visible=!0),gn&&(gn.visible=!0),Be&&(Be.visible=!0),cn&&(cn.visible=!1)}),I.addEventListener("click",()=>{I.classList.add("active"),T.classList.remove("active"),U.classList.remove("active"),F.classList.remove("active"),O.style.display="flex",L.style.display="none",B.style.display="none",W.style.display="none",Qt&&(Qt.visible=!1),gn&&(gn.visible=!1),qt&&qt.detach(),Be&&(Be.visible=v.showGridHelper),cn&&(cn.visible=v.showGroundPlane)}),U.addEventListener("click",()=>{U.classList.add("active"),T.classList.remove("active"),I.classList.remove("active"),F.classList.remove("active"),B.style.display="flex",L.style.display="none",O.style.display="none",W.style.display="none",Qt&&(Qt.visible=!1),gn&&(gn.visible=!1),qt&&qt.detach(),Be&&(Be.visible=v.showGridHelper),cn&&(cn.visible=v.showGroundPlane)}),F.addEventListener("click",()=>{F.classList.add("active"),T.classList.remove("active"),I.classList.remove("active"),U.classList.remove("active"),W.style.display="flex",L.style.display="none",O.style.display="none",B.style.display="none",Qt&&(Qt.visible=!0),gn&&(gn.visible=!0),Be&&(Be.visible=!0),cn&&(cn.visible=!1)}));const G=document.getElementById("chk-ssao-enabled");G&&G.addEventListener("change",E=>{v.ssaoEnabled=E.target.checked,ke&&(ke.enabled=v.ssaoEnabled)});const q=document.getElementById("slider-ssao-radius"),st=document.getElementById("val-ssao-radius");q&&st&&q.addEventListener("input",E=>{v.ssaoRadius=parseInt(E.target.value),st.innerText=v.ssaoRadius,ke&&(ke.kernelRadius=v.ssaoRadius)});const nt=document.getElementById("slider-ssao-min-dist"),ct=document.getElementById("val-ssao-min-dist");nt&&ct&&nt.addEventListener("input",E=>{v.ssaoMinDistance=parseFloat(E.target.value),ct.innerText=v.ssaoMinDistance.toFixed(3)});const Pt=document.getElementById("slider-ssao-max-dist"),Tt=document.getElementById("val-ssao-max-dist");Pt&&Tt&&Pt.addEventListener("input",E=>{v.ssaoMaxDistance=parseFloat(E.target.value),Tt.innerText=v.ssaoMaxDistance.toFixed(1)});const Z=document.getElementById("slider-ssao-intensity"),ht=document.getElementById("val-ssao-intensity");Z&&ht&&Z.addEventListener("input",E=>{v.ssaoIntensity=parseFloat(E.target.value),ht.innerText=v.ssaoIntensity.toFixed(1),ke&&ke.ssaoMaterial.uniforms.intensity&&(ke.ssaoMaterial.uniforms.intensity.value=v.ssaoIntensity)});const at=document.getElementById("slider-ambient-intensity"),ut=document.getElementById("val-ambient-intensity");at&&ut&&at.addEventListener("input",E=>{v.ambientIntensity=parseFloat(E.target.value),ut.innerText=v.ambientIntensity.toFixed(2),ao&&(ao.intensity=v.ambientIntensity)});const vt=document.getElementById("slider-dir1-intensity"),pt=document.getElementById("val-dir1-intensity");vt&&pt&&vt.addEventListener("input",E=>{v.dirLight1Intensity=parseFloat(E.target.value),pt.innerText=v.dirLight1Intensity.toFixed(2),Hs&&(Hs.intensity=v.dirLight1Intensity)});const It=document.getElementById("slider-dir2-intensity"),At=document.getElementById("val-dir2-intensity");It&&At&&It.addEventListener("input",E=>{v.dirLight2Intensity=parseFloat(E.target.value),At.innerText=v.dirLight2Intensity.toFixed(2),Ws&&(Ws.intensity=v.dirLight2Intensity)});const Q=document.getElementById("chk-ground-plane");Q&&Q.addEventListener("change",E=>{v.showGroundPlane=E.target.checked,cn&&(cn.visible=v.showGroundPlane)});const J=document.getElementById("slider-cantilever-scale"),$=document.getElementById("val-cantilever-scale");J&&$&&J.addEventListener("input",E=>{v.cantileverScale=parseFloat(E.target.value),$.innerText=v.cantileverScale.toFixed(1),he()});const et=document.getElementById("slider-brise-fin-scale"),yt=document.getElementById("val-brise-fin-scale");et&&yt&&et.addEventListener("input",E=>{v.briseFinScale=parseFloat(E.target.value),yt.innerText=v.briseFinScale.toFixed(1),he()});const kt=document.getElementById("chk-grid-helper");kt&&kt.addEventListener("change",E=>{v.showGridHelper=E.target.checked,Be&&(Be.visible=v.showGridHelper)});const z=document.getElementById("slider-roof-hypar-h"),Gt=document.getElementById("val-roof-hypar-h");z&&Gt&&z.addEventListener("input",E=>{v.roofHyparH=parseFloat(E.target.value),Gt.innerText=`${v.roofHyparH.toFixed(1)}m`,he()});const Nt=document.getElementById("slider-roof-pitch-rh"),Wt=document.getElementById("val-roof-pitch-rh");Nt&&Wt&&Nt.addEventListener("input",E=>{v.roofPitchRH=parseFloat(E.target.value),Wt.innerText=`${v.roofPitchRH.toFixed(1)}m`,he()});const mt=document.getElementById("slider-roof-hypar-spacing"),se=document.getElementById("val-roof-hypar-spacing");mt&&se&&mt.addEventListener("input",E=>{v.roofHyparSlatSpacing=parseFloat(E.target.value),se.innerText=`${v.roofHyparSlatSpacing.toFixed(1)}m`,he()});const R=document.getElementById("display-mode-select");R&&R.addEventListener("change",E=>{bu(E.target.value)}),lv()}function Mu(i){const t=Rn.getBoundingClientRect();oi.x=(i.clientX-t.left)/t.width*2-1,oi.y=-((i.clientY-t.top)/t.height)*2+1,Bi.setFromCamera(oi,ue);const e=new N;return Bi.ray.intersectPlane(z_,e),e}function sv(i){if(!(i.button===1||i.button===2)&&i.button===0){if(qt&&(qt.dragging||qt.axis))return;const t=Rn.getBoundingClientRect();oi.x=(i.clientX-t.left)/t.width*2-1,oi.y=-((i.clientY-t.top)/t.height)*2+1;const e=Mu(i),n=new ot(e.x,e.y);Bi.setFromCamera(oi,ue),Bi.params.Line.threshold=.4;const s=[...Qt.children,...Le.children],r=Bi.intersectObjects(s,!0);if(v.editBaysMode){let o=!1;for(const a of r)if(a.object.userData&&a.object.userData.isGraphVertex&&a.object.userData.polygonId===v.activePolygonId){const c=a.object.userData.index,l=v.planarGraph.vertices[c];v.selectedVertexType="graph",v.selectedVertexIdx=c,v.selectedVertexOrig=v.planarGraph.originalVertices[c],Ei.position.set(l.x,l.y,.035),qt.attach(Ei),o=!0,he();break}if(!o){let a=null,c=null;for(const l of r)if(l.object.userData&&l.object.userData.polygonId){a=l.object.userData.polygonId,c=l.object;break}if(a){const l=v.importedPolygons.find(u=>u.id===a);if(l)if(!l.hasScaffold)l.hasScaffold=!0,v.activePolygonId=l.id,ze();else if(c.userData.isPolygonLine||c.userData.is3DStackMesh)l.hasScaffold=!1,ze();else{const u=l.structuralBays.findIndex(f=>oo(n,f));if(u!==-1){v.activePolygonId!==l.id&&(v.activePolygonId=l.id,he());const f=v.selectedBayIndices.indexOf(u);f!==-1?v.selectedBayIndices.splice(f,1):v.selectedBayIndices.push(u);const h=document.getElementById("btn-combine-bays"),d=document.getElementById("btn-delete-bays");h&&(h.disabled=v.selectedBayIndices.length<2),d&&(d.disabled=v.selectedBayIndices.length===0),he()}else l.hasScaffold=!1,ze()}}else qt.detach(),v.selectedVertexType=null,v.selectedVertexIdx=-1,v.selectedVertexOrig=null,he()}return}else if(v.isDrawing){if(v.customVertices.length>=3){const o=el(v.customVertices[0]);if(new ot(i.clientX-t.left,i.clientY-t.top).dist(o)<12){v.polygon=[...v.customVertices],v.isDrawing=!1,document.getElementById("btn-draw-custom").style.display="inline-flex",document.getElementById("btn-clear-custom").style.display="none",document.getElementById("drawing-indicator").style.display="none",ze(),mo();return}}v.customVertices.push(n),he()}else{let o=!1;for(const a of r)if(a.object.userData&&a.object.userData.isHandle&&a.object.userData.polygonId===v.activePolygonId){const c=a.object.userData.index,l=v.polygon[c];v.selectedVertexType="polygon",v.selectedVertexIdx=c,v.selectedVertexOrig=null,Ei.position.set(l.x,l.y,.03),qt.attach(Ei),o=!0,he();break}if(!o){let a=null;for(const c of r)if(c.object.userData&&c.object.userData.polygonId){a=c.object.userData.polygonId;break}if(a){const c=v.importedPolygons.find(l=>l.id===a);c&&(c.hasScaffold?(c.hasScaffold=!1,ze()):(c.hasScaffold=!0,v.activePolygonId=c.id,ze()))}else qt.detach(),v.selectedVertexType=null,v.selectedVertexIdx=-1,v.selectedVertexOrig=null,he()}}}}function rv(i){const t=Mu(i),e=new ot(t.x,t.y);if(v.mouseWorldPos=e,v.showHoverLabels&&v.show3DCells&&!v.isDrawing){const n=Rn.getBoundingClientRect();oi.x=(i.clientX-n.left)/n.width*2-1,oi.y=-((i.clientY-n.top)/n.height)*2+1,Bi.setFromCamera(oi,ue);const s=Bi.intersectObjects(Le.children,!0);let r=null;for(const a of s)if(a.object.userData&&a.object.userData.isCellVolume){r=a.object;break}const o=document.getElementById("cell-tooltip");if(o)if(r){const a=r.userData,c=a.floorIndex===0?"Ground Floor":a.floorIndex===v.numFloors-1?"Roof Floor":`Intermediate Floor (F${a.floorIndex})`;let l="Interior Cell";a.phenotype==="corner"?l="Corner Cell":a.phenotype==="courtyard"?l="Courtyard Cell":a.phenotype==="neighbor"?l="Facade Cell (Neighbor)":a.phenotype==="open_space"&&(l="Facade Cell (Open Space)");const u=a.facingDirections&&a.facingDirections.length>0?a.facingDirections.join(", "):"N/A (Interior)";o.innerHTML=`
          <div style="font-weight: 700; margin-bottom: 6px; color: #60a5fa; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 4px;">Cell Phenotype</div>
          <div style="margin-bottom: 4px;"><strong>Level:</strong> ${c}</div>
          <div style="margin-bottom: 4px;"><strong>Type:</strong> ${l}</div>
          <div><strong>Facing:</strong> ${u}</div>
        `,o.style.display="block",o.style.left=i.clientX-n.left+15+"px",o.style.top=i.clientY-n.top+15+"px"}else o.style.display="none"}else{const n=document.getElementById("cell-tooltip");n&&(n.style.display="none")}if(v.isDrawing)he();else if(v.hoverCircle&&!v.editBaysMode&&v.polygon.length>=3&&Ue.state===-1){const n=Rn.getBoundingClientRect(),s=new ot(i.clientX-n.left,i.clientY-n.top);let r=null,o=20;for(const a of v.skeletonData.regularPoints){const c=el(a),l=s.dist(c);l<o&&(o=l,r=a)}for(const a of v.skeletonData.junctionPoints){if(a.isEndPoint)continue;const c=el(a),l=s.dist(c);l<o&&(o=l,r=a)}r!==v.hoveredMedialPoint&&(v.hoveredMedialPoint=r,he())}}function ov(){}function av(){v.mouseWorldPos=null,v.hoveredMedialPoint=null;const i=document.getElementById("cell-tooltip");i&&(i.style.display="none"),he()}function Su(){if(requestAnimationFrame(Su),Ue.update(),Ee.overrideMaterial===In&&In){const i=Eu();In.uniforms.cameraNear.value=i.min,In.uniforms.cameraFar.value=i.max}else if(ke&&ue){const i=ue.far-ue.near;ke.minDistance=v.ssaoMinDistance/i,ke.maxDistance=v.ssaoMaxDistance/i}Ee.overrideMaterial===In?un.render(Ee,ue):_n?_n.render():un.render(Ee,ue)}let In=null,bh=!0,wh=!0;function Eu(){const i=new vs;if(Qt&&i.expandByObject(Qt),Le&&i.expandByObject(Le),gn&&i.expandByObject(gn),i.isEmpty())return{min:ue.near,max:ue.far};const t=[new N(i.min.x,i.min.y,i.min.z),new N(i.min.x,i.min.y,i.max.z),new N(i.min.x,i.max.y,i.min.z),new N(i.max.x,i.min.y,i.min.z),new N(i.max.x,i.max.y,i.min.z),new N(i.max.x,i.max.y,i.max.z)];let e=1/0,n=-1/0;const s=ue.matrixWorldInverse;return t.forEach(r=>{r.applyMatrix4(s);const o=-r.z;o<e&&(e=o),o>n&&(n=o)}),e=Math.max(ue.near,e-5),n=Math.min(ue.far,n+5),n<=e&&(n=e+10),{min:e,max:n}}function bu(i){if(i==="DEPTH"){const t=Eu();In||(In=new Ze({uniforms:{cameraNear:{value:t.min},cameraFar:{value:t.max}},vertexShader:`
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
        `})),In.uniforms.cameraNear.value=t.min,In.uniforms.cameraFar.value=t.max,Ee.overrideMaterial=In,qt&&(bh=qt.visible,qt.visible=!1),Be&&(wh=Be.visible,Be.visible=!1)}else Ee.overrideMaterial=null,qt&&(qt.visible=bh),Be&&(Be.visible=wh)}function lv(){const i=document.getElementById("btn-generate-imagen"),t=document.getElementById("btn-show-imagen"),e=document.getElementById("imagen-status"),n=document.getElementById("imagen-modal"),s=document.getElementById("btn-close-imagen"),r=document.getElementById("imagen-result-img"),o=document.getElementById("imagen-prompt"),a=document.getElementById("btn-prev-imagen"),c=document.getElementById("btn-next-imagen"),l=document.getElementById("btn-save-imagen"),u=document.getElementById("imagen-modal-title");if(!i||!n)return;const f={container:er,renderer:un,get camera(){return ue},controls:Ue,osmGroup:null,osmFeature:null,get composer(){return _n},get saoPass(){return ke},setDisplayMode:p=>bu(p),render:()=>{Ee.overrideMaterial===In?un.render(Ee,ue):_n?_n.render():un.render(Ee,ue)},onWindowResize:()=>{xu()}},h=new C_(f);let d=[],m=0;const _=["Beauty Render","Depth Stencil","AI Render Result"],x=()=>{d.length!==0&&(r.src=d[m],u.textContent=_[m])};i.addEventListener("click",async()=>{const p=o.value.trim();if(!p){alert("Please enter prompt constraints.");return}i.disabled=!0,e.textContent="Initializing...";const g=()=>{const y=document.getElementById("imagen-modal-content");if(y){const S=window.devicePixelRatio||1;y.style.width=`${1365/S}px`,y.style.height=`${768/S}px`}};window.addEventListener("resize",()=>{n.style.display==="flex"&&g()});try{const y=await h.generateRender(p,S=>{e.textContent=S},(S,P)=>{d=[S,P],m=0,x(),g(),n.style.display="flex",t&&(t.style.display="block")});d=[y.beauty,y.depth,y.result],m=2,x(),e.textContent="Success!"}catch{}finally{i.disabled=!1}}),t&&t.addEventListener("click",()=>{d.length>0&&((()=>{const g=document.getElementById("imagen-modal-content");if(g){const y=window.devicePixelRatio||1;g.style.width=`${1365/y}px`,g.style.height=`${768/y}px`}})(),n.style.display="flex")}),a.addEventListener("click",()=>{d.length!==0&&(m=(m-1+d.length)%d.length,x())}),c.addEventListener("click",()=>{d.length!==0&&(m=(m+1)%d.length,x())}),l.addEventListener("click",()=>{if(d.length===0)return;const p=document.createElement("a");p.href=d[m],p.download=_[m].replace(/\s+/g,"_").toLowerCase()+".png",document.body.appendChild(p),p.click(),document.body.removeChild(p)}),s.addEventListener("click",()=>{n.style.display="none"}),document.addEventListener("keydown",p=>{n.style.display==="flex"&&(p.key==="ArrowLeft"||p.key==="<"||p.key===","?a.click():p.key==="ArrowRight"||p.key===">"||p.key==="."?c.click():p.key==="Escape"&&s.click())})}window.addEventListener("load",()=>{k_(),nv(),_u(v.activePreset)});
