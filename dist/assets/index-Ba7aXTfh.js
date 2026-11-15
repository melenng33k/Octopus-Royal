(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=1e3,t=1001,n=1002,r=1003,i=1004,a=1005,o=1006,s=1007,c=1008,l=1009,u=1010,d=1011,f=1012,p=1013,m=1014,h=1015,g=1016,_=1017,v=1018,y=1020,b=35902,x=35899,S=1021,C=1022,w=1023,T=1026,E=1027,D=1028,O=1029,k=1030,A=1031,j=1033,M=33776,N=33777,P=33778,ee=33779,F=35840,te=35841,I=35842,ne=35843,re=36196,ie=37492,ae=37496,oe=37488,L=37489,se=37490,ce=37491,le=37808,ue=37809,de=37810,fe=37811,pe=37812,me=37813,he=37814,ge=37815,_e=37816,ve=37817,R=37818,ye=37819,be=37820,xe=37821,Se=36492,Ce=36494,we=36495,Te=36283,Ee=36284,De=36285,Oe=36286,ke=2300,Ae=2301,z=2302,je=2303,Me=2400,Ne=2401,B=2402,Pe=3200,Fe=`srgb`,V=`srgb-linear`,Ie=`linear`,Le=`srgb`,Re=7680,ze=35044,Be=2e3;function Ve(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function He(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Ue(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function We(){let e=Ue(`canvas`);return e.style.display=`block`,e}var Ge={};function Ke(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function qe(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function H(...e){e=qe(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function U(...e){e=qe(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function Je(...e){let t=e.join(` `);t in Ge||(Ge[t]=!0,H(...e))}function Ye(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var Xe={0:0,2:6,4:4,3:5,1:1,6:2,7:7,5:3},Ze=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},Qe=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),$e=Math.PI/180,et=180/Math.PI;function tt(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Qe[e&255]+Qe[e>>8&255]+Qe[e>>16&255]+Qe[e>>24&255]+`-`+Qe[t&255]+Qe[t>>8&255]+`-`+Qe[t>>16&15|64]+Qe[t>>24&255]+`-`+Qe[n&63|128]+Qe[n>>8&255]+`-`+Qe[n>>16&255]+Qe[n>>24&255]+Qe[r&255]+Qe[r>>8&255]+Qe[r>>16&255]+Qe[r>>24&255]).toLowerCase()}function nt(e,t,n){return Math.max(t,Math.min(n,e))}function rt(e,t){return(e%t+t)%t}function it(e,t,n){return(1-n)*e+n*t}function at(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function ot(e){switch(e.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function st(e,t){if(t.constructor===Float32Array)return e;let n=ot(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.max(e/n,-1)}function ct(e,t){if(t.constructor===Float32Array)return e;let n=ot(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.round(e*n)}var W=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},lt=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:H(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},G=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(dt.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(dt.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ut.copy(this).projectOnVector(e),this.sub(ut)}reflect(e){return this.sub(ut.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ut=new G,dt=new lt,K=class{static{this.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return Je(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(ft.makeScale(e,t)),this}rotate(e){return Je(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(ft.makeRotation(-e)),this}translate(e,t){return Je(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(ft.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ft=new K,pt=new K().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),mt=new K().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ht(){let e={enabled:!0,workingColorSpace:V,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=_t(e.r),e.g=_t(e.g),e.b=_t(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=vt(e.r),e.g=vt(e.g),e.b=vt(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Ie:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[n].fromXYZ).multiply(this.spaces[t].toXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[V]:{primaries:t,whitePoint:r,transfer:Ie,toXYZ:pt,fromXYZ:mt,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Fe},outputColorSpaceConfig:{drawingBufferColorSpace:Fe}},[Fe]:{primaries:t,whitePoint:r,transfer:Le,toXYZ:pt,fromXYZ:mt,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Fe}}}),e}var gt=ht();function _t(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function vt(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var yt,bt=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{yt===void 0&&(yt=Ue(`canvas`)),yt.width=e.width,yt.height=e.height;let t=yt.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=yt}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=Ue(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=_t(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(_t(t[e]/255)*255):t[e]=_t(t[e]);return{data:t,width:e.width,height:e.height}}return H(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},xt=0,St=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:xt++}),this.uuid=tt(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width||0,t.height||0,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Ct(r[t].image)):e.push(Ct(r[t]))}else e=Ct(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Ct(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?bt.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(H(`Texture: Unable to serialize Texture.`),{})}var wt=0,Tt=new G,Et=class r extends Ze{constructor(e=r.DEFAULT_IMAGE,n=r.DEFAULT_MAPPING,i=t,a=t,s=o,u=c,d=w,f=l,p=r.DEFAULT_ANISOTROPY,m=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wt++}),this.uuid=tt(),this.name=``,this.source=new St(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=s,this.minFilter=u,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=f,this.offset=new W(0,0),this.repeat=new W(1,1),this.center=new W(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new K,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Tt).x}get height(){return this.source.getSize(Tt).y}get depth(){return this.source.getSize(Tt).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){H(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?H(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(r){if(this.mapping!==300)return r;if(r.applyMatrix3(this.matrix),r.x<0||r.x>1)switch(this.wrapS){case e:r.x-=Math.floor(r.x);break;case t:r.x=r.x<0?0:1;break;case n:Math.abs(Math.floor(r.x)%2)===1?r.x=Math.ceil(r.x)-r.x:r.x-=Math.floor(r.x)}if(r.y<0||r.y>1)switch(this.wrapT){case e:r.y-=Math.floor(r.y);break;case t:r.y=r.y<0?0:1;break;case n:Math.abs(Math.floor(r.y)%2)===1?r.y=Math.ceil(r.y)-r.y:r.y-=Math.floor(r.y)}return this.flipY&&(r.y=1-r.y),r}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Et.DEFAULT_IMAGE=null,Et.DEFAULT_MAPPING=300,Et.DEFAULT_ANISOTROPY=1;var Dt=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this.w=nt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this.w=nt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ot=class extends Ze{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:o,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Dt(0,0,e,t),this.scissorTest=!1,this.viewport=new Dt(0,0,e,t),this.textures=[];let r=n.count;for(let i=0;i<r;i++)this.textures[i]=new Et({width:e,height:t,depth:n.depth}),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:o,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new St(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},kt=class extends Ot{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},At=class extends Et{constructor(e=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=r,this.minFilter=r,this.wrapR=t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},jt=class extends Et{constructor(e=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=r,this.minFilter=r,this.wrapR=t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},Mt=class e{static{this.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/Nt.setFromMatrixColumn(e,0).length(),i=1/Nt.setFromMatrixColumn(e,1).length(),a=1/Nt.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ft,e,It)}lookAt(e,t,n){let r=this.elements;return zt.subVectors(e,t),zt.lengthSq()===0&&(zt.z=1),zt.normalize(),Lt.crossVectors(n,zt),Lt.lengthSq()===0&&(Math.abs(n.z)===1?zt.x+=1e-4:zt.z+=1e-4,zt.normalize(),Lt.crossVectors(n,zt)),Lt.normalize(),Rt.crossVectors(zt,Lt),r[0]=Lt.x,r[4]=Rt.x,r[8]=zt.x,r[1]=Lt.y,r[5]=Rt.y,r[9]=zt.y,r[2]=Lt.z,r[6]=Rt.z,r[10]=zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],M=r[14],N=r[3],P=r[7],ee=r[11],F=r[15];return i[0]=a*x+o*T+s*k+c*N,i[4]=a*S+o*E+s*A+c*P,i[8]=a*C+o*D+s*j+c*ee,i[12]=a*w+o*O+s*M+c*F,i[1]=l*x+u*T+d*k+f*N,i[5]=l*S+u*E+d*A+f*P,i[9]=l*C+u*D+d*j+f*ee,i[13]=l*w+u*O+d*M+f*F,i[2]=p*x+m*T+h*k+g*N,i[6]=p*S+m*E+h*A+g*P,i[10]=p*C+m*D+h*j+g*ee,i[14]=p*w+m*O+h*M+g*F,i[3]=_*x+v*T+y*k+b*N,i[7]=_*S+v*E+y*A+b*P,i[11]=_*C+v*D+y*j+b*ee,i[15]=_*w+v*O+y*M+b*F,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=Nt.set(r[0],r[1],r[2]).length(),o=Nt.set(r[4],r[5],r[6]).length(),s=Nt.set(r[8],r[9],r[10]).length();i<0&&(a=-a),Pt.copy(this);let c=1/a,l=1/o,u=1/s;return Pt.elements[0]*=c,Pt.elements[1]*=c,Pt.elements[2]*=c,Pt.elements[4]*=l,Pt.elements[5]*=l,Pt.elements[6]*=l,Pt.elements[8]*=u,Pt.elements[9]*=u,Pt.elements[10]*=u,t.setFromRotationMatrix(Pt),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=Be,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=Be,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Nt=new G,Pt=new Mt,Ft=new G(0,0,0),It=new G(1,1,1),Lt=new G,Rt=new G,zt=new G,Bt=new Mt,Vt=new lt,Ht=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-nt(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(nt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-nt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(nt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:H(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Bt.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Bt,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Vt.setFromEuler(this),this.setFromQuaternion(Vt,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ht.DEFAULT_ORDER=`XYZ`;var Ut=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},Wt=0,Gt=new G,Kt=new lt,qt=new Mt,Jt=new G,Yt=new G,Xt=new G,Zt=new lt,Qt=new G(1,0,0),$t=new G(0,1,0),en=new G(0,0,1),tn={type:`added`},nn={type:`removed`},rn={type:`childadded`,child:null},an={type:`childremoved`,child:null},on=class e extends Ze{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Wt++}),this.uuid=tt(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new G,n=new Ht,r=new lt,i=new G(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Mt},normalMatrix:{value:new K}}),this.matrix=new Mt,this.matrixWorld=new Mt,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ut,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Kt.setFromAxisAngle(e,t),this.quaternion.multiply(Kt),this}rotateOnWorldAxis(e,t){return Kt.setFromAxisAngle(e,t),this.quaternion.premultiply(Kt),this}rotateX(e){return this.rotateOnAxis(Qt,e)}rotateY(e){return this.rotateOnAxis($t,e)}rotateZ(e){return this.rotateOnAxis(en,e)}translateOnAxis(e,t){return Gt.copy(e).applyQuaternion(this.quaternion),this.position.add(Gt.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Qt,e)}translateY(e){return this.translateOnAxis($t,e)}translateZ(e){return this.translateOnAxis(en,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(qt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Jt.copy(e):Jt.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Yt.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qt.lookAt(Yt,Jt,this.up):qt.lookAt(Jt,Yt,this.up),this.quaternion.setFromRotationMatrix(qt),r&&(qt.extractRotation(r.matrixWorld),Kt.setFromRotationMatrix(qt),this.quaternion.premultiply(Kt.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(U(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(tn),rn.child=e,this.dispatchEvent(rn),rn.child=null):U(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(nn),an.child=e,this.dispatchEvent(an),an.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),qt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),qt.multiply(e.parent.matrixWorld)),e.applyMatrix4(qt),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(tn),rn.child=e,this.dispatchEvent(rn),rn.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yt,e,Xt),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yt,Zt,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};on.DEFAULT_UP=new G(0,1,0),on.DEFAULT_MATRIX_AUTO_UPDATE=!0,on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var sn=class extends on{constructor(){super(),this.isGroup=!0,this.type=`Group`}},cn={type:`move`},ln=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new sn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new sn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new sn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.quaternion,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.quaternion,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(cn)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new sn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},un={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},dn={h:0,s:0,l:0},fn={h:0,s:0,l:0};function pn(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var q=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Fe){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,gt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=gt.workingColorSpace){return this.r=e,this.g=t,this.b=n,gt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=gt.workingColorSpace){if(e=rt(e,1),t=nt(t,0,1),n=nt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=pn(i,r,e+1/3),this.g=pn(i,r,e),this.b=pn(i,r,e-1/3)}return gt.colorSpaceToWorking(this,r),this}setStyle(e,t=Fe){function n(t){t!==void 0&&parseFloat(t)<1&&H(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseFloat(i[1]))/100,Math.min(100,parseFloat(i[2]))/100,Math.min(100,parseFloat(i[3]))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:H(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);H(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Fe){let n=un[e.toLowerCase()];return n===void 0?H(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_t(e.r),this.g=_t(e.g),this.b=_t(e.b),this}copyLinearToSRGB(e){return this.r=vt(e.r),this.g=vt(e.g),this.b=vt(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Fe){return gt.workingToColorSpace(mn.copy(this),e),Math.round(nt(mn.r*255,0,255))*65536+Math.round(nt(mn.g*255,0,255))*256+Math.round(nt(mn.b*255,0,255))}getHexString(e=Fe){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=gt.workingColorSpace){gt.workingToColorSpace(mn.copy(this),t);let n=mn.r,r=mn.g,i=mn.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=gt.workingColorSpace){return gt.workingToColorSpace(mn.copy(this),t),e.r=mn.r,e.g=mn.g,e.b=mn.b,e}getStyle(e=Fe){gt.workingToColorSpace(mn.copy(this),e);let t=mn.r,n=mn.g,r=mn.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(dn),this.setHSL(dn.h+e,dn.s+t,dn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(dn),e.getHSL(fn);let n=it(dn.h,fn.h,t),r=it(dn.s,fn.s,t),i=it(dn.l,fn.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},mn=new q;q.NAMES=un;var hn=class e{constructor(e,t=25e-5){this.isFogExp2=!0,this.name=``,this.color=new q(e),this.density=t}clone(){return new e(this.color,this.density)}toJSON(){return{type:`FogExp2`,name:this.name,color:this.color.getHex(),density:this.density}}},gn=class extends on{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ht,this.environmentIntensity=1,this.environmentRotation=new Ht,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background===null?null:e.background.clone(),this.environment=e.environment===null?null:e.environment.clone(),this.fog=e.fog===null?null:e.fog.clone(),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial===null?null:e.overrideMaterial.clone(),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},_n=new G,vn=new G,yn=new G,bn=new G,xn=new G,Sn=new G,Cn=new G,wn=new G,Tn=new G,En=new G,Dn=new Dt,On=new Dt,kn=new Dt,An=class e{constructor(e=new G,t=new G,n=new G){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),_n.subVectors(e,t),r.cross(_n);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){_n.subVectors(r,t),vn.subVectors(n,t),yn.subVectors(e,t);let a=_n.dot(_n),o=_n.dot(vn),s=_n.dot(yn),c=vn.dot(vn),l=vn.dot(yn),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,bn)!==null&&bn.x>=0&&bn.y>=0&&bn.x+bn.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,bn)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,bn.x),s.addScaledVector(a,bn.y),s.addScaledVector(o,bn.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return Dn.setScalar(0),On.setScalar(0),kn.setScalar(0),Dn.fromBufferAttribute(e,t),On.fromBufferAttribute(e,n),kn.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Dn,i.x),a.addScaledVector(On,i.y),a.addScaledVector(kn,i.z),a}static isFrontFacing(e,t,n,r){return _n.subVectors(n,t),vn.subVectors(e,t),_n.cross(vn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _n.subVectors(this.c,this.b),vn.subVectors(this.a,this.b),_n.cross(vn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;xn.subVectors(r,n),Sn.subVectors(i,n),wn.subVectors(e,n);let s=xn.dot(wn),c=Sn.dot(wn);if(s<=0&&c<=0)return t.copy(n);Tn.subVectors(e,r);let l=xn.dot(Tn),u=Sn.dot(Tn);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0&&s-l>0)return a=s/(s-l),t.copy(n).addScaledVector(xn,a);En.subVectors(e,i);let f=xn.dot(En),p=Sn.dot(En);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Sn,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Cn.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Cn,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(xn,a).addScaledVector(Sn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},jn=class{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Nn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Nn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Nn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,Nn):Nn.fromBufferAttribute(r,t),Nn.applyMatrix4(e.matrixWorld),this.expandByPoint(Nn);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),Pn.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),Pn.copy(e.boundingBox)),Pn.applyMatrix4(e.matrixWorld),this.union(Pn)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Nn),Nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vn),Hn.subVectors(this.max,Vn),Fn.subVectors(e.a,Vn),In.subVectors(e.b,Vn),Ln.subVectors(e.c,Vn),Rn.subVectors(In,Fn),zn.subVectors(Ln,In),Bn.subVectors(Fn,Ln);let t=[0,-Rn.z,Rn.y,0,-zn.z,zn.y,0,-Bn.z,Bn.y,Rn.z,0,-Rn.x,zn.z,0,-zn.x,Bn.z,0,-Bn.x,-Rn.y,Rn.x,0,-zn.y,zn.x,0,-Bn.y,Bn.x,0];return!Gn(t,Fn,In,Ln,Hn)||(t=[1,0,0,0,1,0,0,0,1],!Gn(t,Fn,In,Ln,Hn))?!1:(Un.crossVectors(Rn,zn),t=[Un.x,Un.y,Un.z],Gn(t,Fn,In,Ln,Hn))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mn)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Mn=[new G,new G,new G,new G,new G,new G,new G,new G],Nn=new G,Pn=new jn,Fn=new G,In=new G,Ln=new G,Rn=new G,zn=new G,Bn=new G,Vn=new G,Hn=new G,Un=new G,Wn=new G;function Gn(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){Wn.fromArray(e,a);let o=i.x*Math.abs(Wn.x)+i.y*Math.abs(Wn.y)+i.z*Math.abs(Wn.z),s=t.dot(Wn),c=n.dot(Wn),l=r.dot(Wn);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var Kn=new G,qn=new W,Jn=0,Yn=class extends Ze{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Jn++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=ze,this.updateRanges=[],this.gpuType=h,this.version=0,this._normalizationScale=e===void 0?void 0:ot(e)}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)qn.fromBufferAttribute(this,t),qn.applyMatrix3(e),this.setXY(t,qn.x,qn.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Kn.fromBufferAttribute(this,t),Kn.applyMatrix3(e),this.setXYZ(t,Kn.x,Kn.y,Kn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Kn.fromBufferAttribute(this,t),Kn.applyMatrix4(e),this.setXYZ(t,Kn.x,Kn.y,Kn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Kn.fromBufferAttribute(this,t),Kn.applyNormalMatrix(e),this.setXYZ(t,Kn.x,Kn.y,Kn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Kn.fromBufferAttribute(this,t),Kn.transformDirection(e),this.setXYZ(t,Kn.x,Kn.y,Kn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}_denormalize(e){let t=this._normalizationScale;return t===void 0?st(e,this.array):Math.max(e/t,-1)}_normalize(e){let t=this._normalizationScale;return t===void 0?ct(e,this.array):Math.round(e*t)}},Xn=class extends Yn{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Zn=class extends Yn{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Qn=class extends Yn{constructor(e,t,n){super(new Float32Array(e),t,n)}},$n=new jn,er=new G,tr=new G,nr=class{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?$n.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;er.subVectors(e,this.center);let t=er.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(er,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(tr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(er.copy(e.center).add(tr)),this.expandByPoint(er.copy(e.center).sub(tr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},rr=0,ir=new Mt,ar=new on,or=new G,sr=new jn,cr=new jn,lr=new G,ur=class e extends Ze{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rr++}),this.uuid=tt(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(Ve(e)?Zn:Xn)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new K().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ir.makeRotationFromQuaternion(e),this.applyMatrix4(ir),this}rotateX(e){return ir.makeRotationX(e),this.applyMatrix4(ir),this}rotateY(e){return ir.makeRotationY(e),this.applyMatrix4(ir),this}rotateZ(e){return ir.makeRotationZ(e),this.applyMatrix4(ir),this}translate(e,t,n){return ir.makeTranslation(e,t,n),this.applyMatrix4(ir),this}scale(e,t,n){return ir.makeScale(e,t,n),this.applyMatrix4(ir),this}lookAt(e){return ar.lookAt(e),ar.updateMatrix(),this.applyMatrix4(ar.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(or).negate(),this.translate(or.x,or.y,or.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new Qn(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&H(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)U(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];sr.setFromBufferAttribute(n),this.morphTargetsRelative?(lr.addVectors(this.boundingBox.min,sr.min),this.boundingBox.expandByPoint(lr),lr.addVectors(this.boundingBox.max,sr.max),this.boundingBox.expandByPoint(lr)):(this.boundingBox.expandByPoint(sr.min),this.boundingBox.expandByPoint(sr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&U(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new nr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)U(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new G,1/0);else if(e){let n=this.boundingSphere.center;if(sr.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];cr.setFromBufferAttribute(n),this.morphTargetsRelative?(lr.addVectors(sr.min,cr.min),sr.expandByPoint(lr),lr.addVectors(sr.max,cr.max),sr.expandByPoint(lr)):(sr.expandByPoint(cr.min),sr.expandByPoint(cr.max))}sr.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)lr.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(lr));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)lr.fromBufferAttribute(a,t),o&&(or.fromBufferAttribute(e,t),lr.add(or)),r=Math.max(r,n.distanceToSquared(lr))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&U(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){U(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new Yn(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[],c=new Uint8Array(n.count);for(let e=0;e<n.count;e++)o[e]=new G,s[e]=new G;let l=new G,u=new G,d=new G,f=new W,p=new W,m=new W,h=new G,g=new G;function _(e,t,r){c[e]=c[t]=c[r]=1,l.fromBufferAttribute(n,e),u.fromBufferAttribute(n,t),d.fromBufferAttribute(n,r),f.fromBufferAttribute(i,e),p.fromBufferAttribute(i,t),m.fromBufferAttribute(i,r),u.sub(l),d.sub(l),p.sub(f),m.sub(f);let a=1/(p.x*m.y-m.x*p.y);isFinite(a)&&(h.copy(u).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(a),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-m.x).multiplyScalar(a),o[e].add(h),o[t].add(h),o[r].add(h),s[e].add(g),s[t].add(g),s[r].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let t=0,n=v.length;t<n;++t){let n=v[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)_(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let y=new G,b=new G,x=new G,S=new G;function C(e){x.fromBufferAttribute(r,e),S.copy(x);let t=o[e];y.copy(t),y.sub(x.multiplyScalar(x.dot(t))).normalize(),b.crossVectors(S,t);let n=b.dot(s[e])<0?-1:1;a.setXYZW(e,y.x,y.y,y.z,n)}for(let e=0,t=n.count;e<t;++e)c[e]&&C(e);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new Yn(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new G,i=new G,a=new G,o=new G,s=new G,c=new G,l=new G,u=new G;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)lr.fromBufferAttribute(e,t),lr.normalize(),e.setXYZ(t,lr.x,lr.y,lr.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new Yn(a,r,i)}if(this.index===null)return H(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},dr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e===void 0?0:e.length/t,this.usage=ze,this.updateRanges=[],this.version=0,this.uuid=tt()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=fr(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),r=new this.constructor(n,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=fr(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function fr(e){return e.buffer._uuid===void 0&&(e.buffer._uuid=tt()),e.byteOffset===0&&e.byteLength===e.buffer.byteLength?e.buffer._uuid:e.buffer._uuid+`:`+e.byteOffset+`:`+e.byteLength}var pr=new G,mr=class e{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name=``,this.data=e,this.itemSize=t,this.offset=n,this.normalized=r,this._normalizationScale=e===void 0?void 0:ot(e.array)}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)pr.fromBufferAttribute(this,t),pr.applyMatrix4(e),this.setXYZ(t,pr.x,pr.y,pr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)pr.fromBufferAttribute(this,t),pr.applyNormalMatrix(e),this.setXYZ(t,pr.x,pr.y,pr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)pr.fromBufferAttribute(this,t),pr.transformDirection(e),this.setXYZ(t,pr.x,pr.y,pr.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=i,this}clone(t){if(t===void 0){Ke(`InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return new Yn(new this.array.constructor(e),this.itemSize,this.normalized)}return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ke(`InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t===void 0?st(e,this.data.array):Math.max(e/t,-1)}_normalize(e){let t=this._normalizationScale;return t===void 0?ct(e,this.data.array):Math.round(e*t)}},hr=new G,gr=new G,_r=new K,vr=class{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=hr.subVectors(n,t).cross(gr.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(hr),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||_r.getNormalMatrix(e),r=this.coplanarPoint(hr).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},yr=0,br=class extends Ze{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yr++}),this.uuid=tt(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new q(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Re,this.stencilZFail=Re,this.stencilZPass=Re,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){H(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?H(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new q().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new vr().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new W().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new W().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},xr=class extends br{constructor(e){super(),this.isSpriteMaterial=!0,this.type=`SpriteMaterial`,this.color=new q(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Sr,Cr=new G,wr=new G,Tr=new G,Er=new W,Dr=new W,Or=new Mt,kr=new G,Ar=new G,jr=new G,Mr=new W,Nr=new W,Pr=new W,Fr=class extends on{constructor(e=new xr){if(super(),this.isSprite=!0,this.type=`Sprite`,Sr===void 0){Sr=new ur;let e=new dr(new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),5);Sr.setIndex([0,1,2,0,2,3]),Sr.setAttribute(`position`,new mr(e,3,0,!1)),Sr.setAttribute(`uv`,new mr(e,2,3,!1))}this.geometry=Sr,this.material=e,this.center=new W(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&U(`Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.`),wr.setFromMatrixScale(this.matrixWorld),Or.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Tr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&wr.multiplyScalar(-Tr.z);let n=this.material.rotation,r,i;n!==0&&(i=Math.cos(n),r=Math.sin(n));let a=this.center;Ir(kr.set(-.5,-.5,0),Tr,a,wr,r,i),Ir(Ar.set(.5,-.5,0),Tr,a,wr,r,i),Ir(jr.set(.5,.5,0),Tr,a,wr,r,i),Mr.set(0,0),Nr.set(1,0),Pr.set(1,1);let o=e.ray.intersectTriangle(kr,Ar,jr,!1,Cr);if(o===null&&(Ir(Ar.set(-.5,.5,0),Tr,a,wr,r,i),Nr.set(0,1),o=e.ray.intersectTriangle(kr,jr,Ar,!1,Cr),o===null))return;let s=e.ray.origin.distanceTo(Cr);s<e.near||s>e.far||t.push({distance:s,point:Cr.clone(),uv:An.getInterpolation(Cr,kr,Ar,jr,Mr,Nr,Pr,new W),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function Ir(e,t,n,r,i,a){Er.subVectors(e,n).addScalar(.5).multiply(r),i===void 0?Dr.copy(Er):(Dr.x=a*Er.x-i*Er.y,Dr.y=i*Er.x+a*Er.y),e.copy(t),e.x+=Dr.x,e.y+=Dr.y,e.applyMatrix4(Or)}var Lr=new G,Rr=new G,zr=new G,Br=new G,Vr=class{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Lr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Lr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Lr.copy(this.origin).addScaledVector(this.direction,t),Lr.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Rr.copy(e).add(t).multiplyScalar(.5),zr.copy(t).sub(e).normalize(),Br.copy(this.origin).sub(Rr);let i=e.distanceTo(t)*.5,a=-this.direction.dot(zr),o=Br.dot(this.direction),s=-Br.dot(zr),c=Br.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Rr).addScaledVector(zr,d),f}intersectSphere(e,t){if(e.radius<0)return null;Lr.subVectors(e.center,this.origin);let n=Lr.dot(this.direction),r=Lr.dot(Lr)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Lr)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,A,j,M,N;if(y>=b&&y>=x?(w=s,D=u,A=p,N=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,j=_,M=v):(S=l,C=c,T=f,E=d,O=h,k=m,j=v,M=_)):b>=x?(w=c,D=d,A=m,N=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,j=v,M=g):(S=s,C=l,T=u,E=f,O=p,k=h,j=g,M=v)):(w=l,D=f,A=h,N=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,j=g,M=_):(S=c,C=s,T=d,E=u,O=m,k=p,j=_,M=g)),w===0)return null;let P=S/w,ee=C/w,F=1/w,te=T-P*D,I=E-ee*D,ne=O-P*A,re=k-ee*A,ie=j-P*N,ae=M-ee*N,oe=ie*re-ae*ne,L=te*ae-I*ie,se=ne*I-re*te;if(r){if(oe<0||L<0||se<0)return null}else if((oe<0||L<0||se<0)&&(oe>0||L>0||se>0))return null;let ce=oe+L+se;if(ce===0)return null;let le=F*(oe*D+L*A+se*N);return(ce>0?le<0:le>0)?null:this.at(le/ce,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Hr=class extends br{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new q(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ht,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Ur=new Mt,Wr=new Vr,Gr=new nr,Kr=new G,qr=new G,Jr=new G,Yr=new G,Xr=new G,Zr=new G,Qr=new G,$r=new G,ei=class extends on{constructor(e=new ur,t=new Hr){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){Zr.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(Xr.fromBufferAttribute(s,e),a?Zr.addScaledVector(Xr,r):Zr.addScaledVector(Xr.sub(t),r))}t.add(Zr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Gr.copy(n.boundingSphere),Gr.applyMatrix4(i),Wr.copy(e.ray).recast(e.near),Gr.containsPoint(Wr.origin)===!1&&(Wr.intersectSphere(Gr,Kr)===null||Wr.origin.distanceToSquared(Kr)>(e.far-e.near)**2)||(Ur.copy(i).invert(),Wr.copy(e.ray).applyMatrix4(Ur),(n.boundingBox===null||Wr.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,Wr)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=ni(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=ni(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=ni(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=ni(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function ti(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;$r.copy(s),$r.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo($r);return l<n.near||l>n.far?null:{distance:l,point:$r.clone(),object:e}}function ni(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,qr),e.getVertexPosition(c,Jr),e.getVertexPosition(l,Yr);let u=ti(e,t,n,r,qr,Jr,Yr,Qr);if(u){let e=new G;An.getBarycoord(Qr,qr,Jr,Yr,e),i&&(u.uv=An.getInterpolatedAttribute(i,s,c,l,e,new W)),a&&(u.uv1=An.getInterpolatedAttribute(a,s,c,l,e,new W)),o&&(u.normal=An.getInterpolatedAttribute(o,s,c,l,e,new G),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new G,materialIndex:0};An.getNormal(qr,Jr,Yr,t.normal),u.face=t,u.barycoord=e}return u}var ri=class extends Et{constructor(e=null,t=1,n=1,i,a,o,s,c,l=r,u=r,d,f){super(null,o,s,c,l,u,i,a,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ii=new nr,ai=new W(.5,.5),oi=new G,si=class{constructor(e=new vr,t=new vr,n=new vr,r=new vr,i=new vr,a=new vr){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Be,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ii.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ii.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ii)}intersectsSprite(e){return ii.center.set(0,0,0),ii.radius=.7071067811865476+ai.distanceTo(e.center),ii.applyMatrix4(e.matrixWorld),this.intersectsSphere(ii)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(oi.x=r.normal.x>0?e.max.x:e.min.x,oi.y=r.normal.y>0?e.max.y:e.min.y,oi.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(oi)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},ci=new Mt,li=class e{constructor(){this.coordinateSystem=Be,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let e=0;e<t.length;e++){let r=t[e];ci.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[e]===void 0&&(n[e]=new si),n[e].setFromProjectionMatrix(ci,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let r=0;r<e._count;r++)t[r]===void 0&&(t[r]=new si),t[r].copy(n[r]);return this._count=e._count,this}clone(){return new e().copy(this)}},ui=class extends br{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new q(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},di=new Mt,fi=new Vr,pi=new nr,mi=new G,hi=class extends on{constructor(e=new ur,t=new ui){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),pi.copy(n.boundingSphere),pi.applyMatrix4(r),pi.radius+=i,e.ray.intersectsSphere(pi)===!1)return;di.copy(r).invert(),fi.copy(e.ray).applyMatrix4(di);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);mi.fromBufferAttribute(l,n),gi(mi,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)mi.fromBufferAttribute(l,a),gi(mi,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function gi(e,t,n,r,i,a,o){let s=fi.distanceSqToPoint(e);if(s<n){let n=new G;fi.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var _i=class extends Et{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},vi=class extends Et{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},yi=class extends Et{constructor(e,t,n=m,i,a,o,s=r,c=r,l,u=T,d=1){if(u!==1026&&u!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:d},i,a,o,s,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new St(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},bi=class extends yi{constructor(e,t=m,n=301,i,a,o=r,s=r,c,l=T){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,i,a,o,s,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},xi=class extends Et{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Si=class e extends ur{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new Qn(c,3)),this.setAttribute(`normal`,new Qn(l,3)),this.setAttribute(`uv`,new Qn(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new G;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Ci=class e extends ur{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new Qn(u,3)),this.setAttribute(`normal`,new Qn(d,3)),this.setAttribute(`uv`,new Qn(f,2));function _(){let a=new G,_=new G,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new W,m=new G,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},wi=class e extends Ci{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ti=class e extends ur{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new Qn(i,3)),this.setAttribute(`normal`,new Qn(i.slice(),3)),this.setAttribute(`uv`,new Qn(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new G,r=new G,i=new G;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new G;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new G;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new G,t=new G,n=new G,r=new G,o=new W,s=new W,c=new W;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.detail)}},Ei=class e extends Ti{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1];super(r,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type=`IcosahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},Di=class e extends ur{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new Qn(p,3)),this.setAttribute(`normal`,new Qn(m,3)),this.setAttribute(`uv`,new Qn(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},Oi=class e extends ur{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new G,d=new G,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new Qn(p,3)),this.setAttribute(`normal`,new Qn(m,3)),this.setAttribute(`uv`,new Qn(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function ki(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(ji(i))i.isRenderTargetTexture?(H(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(ji(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function Ai(e){let t={};for(let n=0;n<e.length;n++){let r=ki(e[n]);for(let e in r)t[e]=r[e]}return t}function ji(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Mi(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Ni(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:gt.workingColorSpace}var Pi={clone:ki,merge:Ai},Fi=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ii=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Li=class extends br{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fi,this.fragmentShader=Ii,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ki(e.uniforms),this.uniformsGroups=Mi(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new q().setHex(r.value);break;case`v2`:this.uniforms[n].value=new W().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new G().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new Dt().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new K().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new Mt().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Ri=class extends Li{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},zi=class extends br{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new q(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new q(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new W(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ht,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Bi=class extends br{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type=`MeshPhongMaterial`,this.color=new q(16777215),this.specular=new q(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new q(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new W(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ht,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Vi=class extends br{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=Pe,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Hi=class extends br{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ui(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function Wi(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var Gi=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},Ki=class extends Gi{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Me,endingEnd:Me}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ne:i=e,o=2*t-n;break;case B:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case Ne:a=e,s=2*n-t;break;case B:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},qi=class extends Gi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Ji=class extends Gi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Yi=class extends Gi{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=Qi(n,t,g,y,r);i[p]=Xi(x,o,_,b,m)}return i}};function Xi(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function Zi(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function Qi(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=Xi(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=Zi(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var $i=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Ui(t,this.TimeBufferType),this.values=Ui(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ui(e.times,Array),values:Ui(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),Wi(e.settings)&&(n.settings={inTangents:Ui(e.settings.inTangents,Array),outTangents:Ui(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ji(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new qi(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ki(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Yi(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case ke:t=this.InterpolantFactoryMethodDiscrete;break;case Ae:t=this.InterpolantFactoryMethodLinear;break;case z:t=this.InterpolantFactoryMethodSmooth;break;case je:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return H(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ke;case this.InterpolantFactoryMethodLinear:return Ae;case this.InterpolantFactoryMethodSmooth:return z;case this.InterpolantFactoryMethodBezier:return je}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e;Wi(this.settings)&&(ea(this.settings.inTangents,e),ea(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;Wi(this.settings)&&(ta(this.settings.inTangents,e),ta(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(U(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(U(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){U(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){U(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&He(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){U(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===z,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,Wi(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function ea(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]+=t}function ta(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}$i.prototype.ValueTypeName=``,$i.prototype.TimeBufferType=Float32Array,$i.prototype.ValueBufferType=Float32Array,$i.prototype.DefaultInterpolation=Ae;var na=class extends $i{constructor(e,t,n){super(e,t,n)}};na.prototype.ValueTypeName=`bool`,na.prototype.ValueBufferType=Array,na.prototype.DefaultInterpolation=ke,na.prototype.InterpolantFactoryMethodLinear=void 0,na.prototype.InterpolantFactoryMethodSmooth=void 0;var ra=class extends $i{constructor(e,t,n,r){super(e,t,n,r)}};ra.prototype.ValueTypeName=`color`;var ia=class extends $i{constructor(e,t,n,r){super(e,t,n,r)}};ia.prototype.ValueTypeName=`number`;var aa=class extends Gi{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)lt.slerpFlat(i,0,a,c-o,a,c,s);return i}},oa=class extends $i{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new aa(this.times,this.values,this.getValueSize(),e)}};oa.prototype.ValueTypeName=`quaternion`,oa.prototype.InterpolantFactoryMethodSmooth=void 0;var sa=class extends $i{constructor(e,t,n){super(e,t,n)}};sa.prototype.ValueTypeName=`string`,sa.prototype.ValueBufferType=Array,sa.prototype.DefaultInterpolation=ke,sa.prototype.InterpolantFactoryMethodLinear=void 0,sa.prototype.InterpolantFactoryMethodSmooth=void 0;var ca=class extends $i{constructor(e,t,n,r){super(e,t,n,r)}};ca.prototype.ValueTypeName=`vector`;var la=class extends on{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new q(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},ua=class extends la{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(on.DEFAULT_UP),this.updateMatrix(),this.groundColor=new q(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},da=new Mt,fa=new G,pa=new G,ma=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new W(512,512),this.mapType=l,this.map=null,this.mapPass=null,this.matrix=new Mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new si,this._frameExtents=new W(1,1),this._viewportCount=1,this._viewports=[new Dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;fa.setFromMatrixPosition(e.matrixWorld),t.position.copy(fa),pa.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(pa),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){da.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(da,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(da)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ha=new G,ga=new lt,_a=new G,va=class extends on{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new Mt,this.projectionMatrix=new Mt,this.projectionMatrixInverse=new Mt,this.coordinateSystem=Be,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ha,ga,_a),_a.x===1&&_a.y===1&&_a.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ha,ga,_a.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(ha,ga,_a),_a.x===1&&_a.y===1&&_a.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ha,ga,_a.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ya=new G,ba=new W,xa=new W,Sa=class extends va{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=et*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan($e*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return et*2*Math.atan(Math.tan($e*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ya.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ya.x,ya.y).multiplyScalar(-e/ya.z),ya.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ya.x,ya.y).multiplyScalar(-e/ya.z)}getViewSize(e,t){return this.getViewBounds(e,ba,xa),t.subVectors(xa,ba)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan($e*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ca=class extends va{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},wa=class extends ma{constructor(){super(new Ca(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ta=class extends la{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(on.DEFAULT_UP),this.updateMatrix(),this.target=new on,this.shadow=new wa}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Ea=-90,Da=1,Oa=class extends on{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Sa(Ea,Da,e,t);r.layers=this.layers,this.add(r);let i=new Sa(Ea,Da,e,t);i.layers=this.layers,this.add(i);let a=new Sa(Ea,Da,e,t);a.layers=this.layers,this.add(a);let o=new Sa(Ea,Da,e,t);o.layers=this.layers,this.add(o);let s=new Sa(Ea,Da,e,t);s.layers=this.layers,this.add(s);let c=new Sa(Ea,Da,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},ka=class extends Sa{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},Aa=`\\[\\]\\.:\\/`,ja=RegExp(`[\\[\\]\\.:\\/]`,`g`),Ma=`[^\\[\\]\\.:\\/]`,Na=`[^`+Aa.replace(`\\.`,``)+`]`,Pa=`((?:WC+[\\/:])*)`.replace(`WC`,Ma),Fa=`(WCOD+)?`.replace(`WCOD`,Na),Ia=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Ma),La=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Ma),Ra=RegExp(`^`+Pa+Fa+Ia+La+`$`),za=[`material`,`materials`,`bones`,`map`],Ba=class{constructor(e,t,n){let r=n||Va.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Va=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(ja,``)}static parseTrackName(e){let t=Ra.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);za.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){H(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){U(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){U(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){U(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){U(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){U(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){U(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){U(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;U(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){U(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){U(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Va.Composite=Ba,Va.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Va.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Va.prototype.GetterByBindingType=[Va.prototype._getValue_direct,Va.prototype._getValue_array,Va.prototype._getValue_arrayElement,Va.prototype._getValue_toArray],Va.prototype.SetterByBindingTypeAndVersioning=[[Va.prototype._setValue_direct,Va.prototype._setValue_direct_setNeedsUpdate,Va.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Va.prototype._setValue_array,Va.prototype._setValue_array_setNeedsUpdate,Va.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Va.prototype._setValue_arrayElement,Va.prototype._setValue_arrayElement_setNeedsUpdate,Va.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Va.prototype._setValue_fromArray,Va.prototype._setValue_fromArray_setNeedsUpdate,Va.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ha=new Mt,Ua=class{constructor(e,t,n=0,r=1/0){this.ray=new Vr(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Ut,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):U(`Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return Ha.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ha),this}intersectObject(e,t=!0,n=[]){return Ga(e,this,n,t),n.sort(Wa),n}intersectObjects(e,t=!0,n=[]){for(let r=0,i=e.length;r<i;r++)Ga(e[r],this,n,t);return n.sort(Wa),n}};function Wa(e,t){return e.distance-t.distance}function Ga(e,t,n,r){let i=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(i=!1),i===!0&&r===!0){let r=e.children;for(let e=0,i=r.length;e<i;e++)Ga(r[e],t,n,!0)}}(class{static{this.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}});function Ka(e,t,n,r){let i=qa(r);switch(n){case S:return e*t;case D:return e*t/i.components*i.byteLength;case O:return e*t/i.components*i.byteLength;case k:return e*t*2/i.components*i.byteLength;case A:return e*t*2/i.components*i.byteLength;case C:return e*t*3/i.components*i.byteLength;case w:return e*t*4/i.components*i.byteLength;case j:return e*t*4/i.components*i.byteLength;case M:case N:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case P:case ee:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case te:case ne:return Math.max(e,16)*Math.max(t,8)/4;case F:case I:return Math.max(e,8)*Math.max(t,8)/2;case re:case ie:case oe:case L:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ae:case se:case ce:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case le:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ue:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case de:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case fe:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case pe:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case me:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case he:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case ge:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case _e:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case ve:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case R:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case ye:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case be:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case xe:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Se:case Ce:case we:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Te:case Ee:return Math.ceil(e/4)*Math.ceil(t/4)*8;case De:case Oe:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function qa(e){switch(e){case l:case u:return{byteLength:1,components:1};case f:case d:case g:return{byteLength:2,components:1};case _:case v:return{byteLength:2,components:4};case m:case p:case h:return{byteLength:4,components:1};case b:case x:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`187`}})),typeof window<`u`&&(window.__THREE__?H(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`187`);function Ja(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Ya(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var Xa={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
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
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
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
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
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
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
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
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
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
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
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
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,common:`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
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
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
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
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
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
		float roughness = max( material.clearcoatRoughness, 0.045 );
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
	float roughness = max( material.roughness, 0.045 );
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
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
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
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
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
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
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
}`,lights_fragment_begin:`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
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
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
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
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
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
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
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
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
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
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
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
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
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
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
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
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
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
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
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
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
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
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
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
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
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
}`,distance_vert:`#define DISTANCE
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
}`,distance_frag:`#define DISTANCE
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
void main() {
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
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
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
}`,linedashed_frag:`uniform vec3 diffuse;
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
}`,meshbasic_vert:`#include <common>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
}`,meshlambert_vert:`#define LAMBERT
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
}`,meshlambert_frag:`#define LAMBERT
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
}`,meshmatcap_vert:`#define MATCAP
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
}`,meshmatcap_frag:`#define MATCAP
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
}`,meshnormal_vert:`#define NORMAL
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
}`,meshnormal_frag:`#define NORMAL
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
}`,meshphong_vert:`#define PHONG
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
}`,meshphong_frag:`#define PHONG
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
}`,meshphysical_vert:`#define STANDARD
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
}`,meshphysical_frag:`#define STANDARD
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
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
}`,meshtoon_vert:`#define TOON
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
}`,meshtoon_frag:`#define TOON
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
}`,points_vert:`uniform float size;
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
}`,points_frag:`uniform vec3 diffuse;
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
}`,shadow_vert:`#include <common>
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
}`,shadow_frag:`uniform vec3 color;
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
}`,sprite_vert:`uniform float rotation;
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
}`,sprite_frag:`uniform vec3 diffuse;
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
}`},J={common:{diffuse:{value:new q(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new K},alphaMap:{value:null},alphaMapTransform:{value:new K},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new K}},envmap:{envMap:{value:null},envMapRotation:{value:new K},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new K}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new K}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new K},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new K},normalScale:{value:new W(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new K},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new K}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new K}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new K}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new q(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new q(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new K},alphaTest:{value:0},uvTransform:{value:new K}},sprite:{diffuse:{value:new q(16777215)},opacity:{value:1},center:{value:new W(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new K},alphaMap:{value:null},alphaMapTransform:{value:new K},alphaTest:{value:0}}},Za={basic:{uniforms:Ai([J.common,J.specularmap,J.envmap,J.aomap,J.lightmap,J.fog]),vertexShader:Xa.meshbasic_vert,fragmentShader:Xa.meshbasic_frag},lambert:{uniforms:Ai([J.common,J.specularmap,J.envmap,J.aomap,J.lightmap,J.emissivemap,J.bumpmap,J.normalmap,J.displacementmap,J.fog,J.lights,{emissive:{value:new q(0)},envMapIntensity:{value:1}}]),vertexShader:Xa.meshlambert_vert,fragmentShader:Xa.meshlambert_frag},phong:{uniforms:Ai([J.common,J.specularmap,J.envmap,J.aomap,J.lightmap,J.emissivemap,J.bumpmap,J.normalmap,J.displacementmap,J.fog,J.lights,{emissive:{value:new q(0)},specular:{value:new q(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Xa.meshphong_vert,fragmentShader:Xa.meshphong_frag},standard:{uniforms:Ai([J.common,J.envmap,J.aomap,J.lightmap,J.emissivemap,J.bumpmap,J.normalmap,J.displacementmap,J.roughnessmap,J.metalnessmap,J.fog,J.lights,{emissive:{value:new q(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xa.meshphysical_vert,fragmentShader:Xa.meshphysical_frag},toon:{uniforms:Ai([J.common,J.aomap,J.lightmap,J.emissivemap,J.bumpmap,J.normalmap,J.displacementmap,J.gradientmap,J.fog,J.lights,{emissive:{value:new q(0)}}]),vertexShader:Xa.meshtoon_vert,fragmentShader:Xa.meshtoon_frag},matcap:{uniforms:Ai([J.common,J.bumpmap,J.normalmap,J.displacementmap,J.fog,{matcap:{value:null}}]),vertexShader:Xa.meshmatcap_vert,fragmentShader:Xa.meshmatcap_frag},points:{uniforms:Ai([J.points,J.fog]),vertexShader:Xa.points_vert,fragmentShader:Xa.points_frag},dashed:{uniforms:Ai([J.common,J.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xa.linedashed_vert,fragmentShader:Xa.linedashed_frag},depth:{uniforms:Ai([J.common,J.displacementmap]),vertexShader:Xa.depth_vert,fragmentShader:Xa.depth_frag},normal:{uniforms:Ai([J.common,J.bumpmap,J.normalmap,J.displacementmap,{opacity:{value:1}}]),vertexShader:Xa.meshnormal_vert,fragmentShader:Xa.meshnormal_frag},sprite:{uniforms:Ai([J.sprite,J.fog]),vertexShader:Xa.sprite_vert,fragmentShader:Xa.sprite_frag},background:{uniforms:{uvTransform:{value:new K},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xa.background_vert,fragmentShader:Xa.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new K}},vertexShader:Xa.backgroundCube_vert,fragmentShader:Xa.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xa.cube_vert,fragmentShader:Xa.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xa.equirect_vert,fragmentShader:Xa.equirect_frag},distance:{uniforms:Ai([J.common,J.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xa.distance_vert,fragmentShader:Xa.distance_frag},shadow:{uniforms:Ai([J.lights,J.fog,{color:{value:new q(0)},opacity:{value:1}}]),vertexShader:Xa.shadow_vert,fragmentShader:Xa.shadow_frag}};Za.physical={uniforms:Ai([Za.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new K},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new K},clearcoatNormalScale:{value:new W(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new K},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new K},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new K},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new K},sheen:{value:0},sheenColor:{value:new q(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new K},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new K},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new K},transmissionSamplerSize:{value:new W},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new K},attenuationDistance:{value:0},attenuationColor:{value:new q(0)},specularColor:{value:new q(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new K},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new K},anisotropyVector:{value:new W},anisotropyMap:{value:null},anisotropyMapTransform:{value:new K}}]),vertexShader:Xa.meshphysical_vert,fragmentShader:Xa.meshphysical_frag};var Qa={r:0,b:0,g:0},$a=new Mt,eo=new K;eo.set(-1,0,0,0,1,0,0,0,1);function to(e,t,n,r,i,a){let o=new q(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&i.isCubeTexture?(l===void 0&&(l=new ei(new Si(1,1,1),new Li({name:`BackgroundCubeMaterial`,uniforms:ki(Za.backgroundCube.uniforms),vertexShader:Za.backgroundCube.vertexShader,fragmentShader:Za.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4($a.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(eo),l.material.toneMapped=gt.getTransfer(i.colorSpace)!==Le,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new ei(new Di(2,2),new Li({name:`BackgroundMaterial`,uniforms:ki(Za.background.uniforms),vertexShader:Za.background.vertexShader,fragmentShader:Za.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=gt.getTransfer(i.colorSpace)!==Le,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(Qa,Ni(e)),n.buffers.color.setClear(Qa.r,Qa.g,Qa.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function no(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.isInterleavedBuffer===!0?t.stride:t.itemSize,p=s.offset;if(t.isInstancedInterleavedBuffer||t.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function ro(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function io(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(H(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`),f=n.logarithmicDepthBuffer===!0&&d===!1;n.reversedDepthBuffer===!0&&d===!1&&H(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`),n.logarithmicDepthBuffer===!0&&d===!0&&H(`WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function ao(e){let t=this,n=null,r=0,i=!1,a=!1,o=new vr,s=new K,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var oo=class extends kt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new _i(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Si(5,5,5),i=new Li({name:`CubemapFromEquirect`,uniforms:ki(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new ei(r,i),s=t.minFilter;return t.minFilter===1008&&(t.minFilter=o),new Oa(1,10,this).update(e,a),t.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}},so=256,co=3,lo=20,uo=256,fo=16,po=3,mo=new G,ho=new q,go=class e{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Oa(1,10,null),this._boxMesh=new ei(new Si(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=mo}=i,s=this._renderer;this._setSize(a);let c=this._allocateTarget(),l=this._getSourceTarget(!0);t>0&&(l.texture.mipmapsAutoUpdate=!1);let u=s.autoClear,d=s.autoClearColor,f=s.autoClearDepth,p=s.autoClearStencil,m=e.background;s.autoClear=!0,s.autoClearColor=!0,s.autoClearDepth=!0,s.autoClearStencil=!0,m===null&&(e.background=s.getClearColor(ho));let h=new Oa(n,r,l);return h.position.copy(o),h.update(s,e),s.autoClear=u,s.autoClearColor=d,s.autoClearDepth=f,s.autoClearStencil=p,e.background=m,t>0&&(l.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Co(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=So(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(so,at(e))}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?so:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=_o(e,!1,!1),n=Math.log2(e)-co;for(let r=0;r<=n;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name=`PMREM`,t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=_o(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let r=this._boxMesh,i=this._cubeCamera;r.material=n,i.renderTarget=e,i.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),i.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===301||e.mapping===302?(this._cubemapMaterial===null&&(this._cubemapMaterial=Co()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=So()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=yo(),this._integrationMaterial=bo());let n=this._cubeSize,r=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let a=this._integrationMaterial.uniforms;a.envMap.value=this._sourceTarget.texture,a.sourceLod.value=Math.log2(n/fo);for(let o=0;o<=r;o++){let s=e.lodToRoughness(o,r);if(o>r-po)a.roughness.value=s,this._renderCube(t,o,this._integrationMaterial);else{let e=s>0?Math.log2(n)+.5*Math.log2(6/(uo*s**4))+.5:0;i.roughness.value=s,i.lodBias.value=e,this._renderCube(t,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=xo());let n=this._blurMaterial,r=n.uniforms,i=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=i.texture,this._renderCube(e,0,n),r.envMap.value=e.texture,this._renderCube(i,0,n)}};function _o(e,t,n){return new oo(e,{minFilter:c,generateMipmaps:t,type:g,colorSpace:V,depthBuffer:n})}function vo(e,t,n){return new Li({name:e,uniforms:t,vertexShader:Xa.cube_vert,fragmentShader:n,side:1,blending:0,depthTest:!1,depthWrite:!1})}function yo(){return vo(`PMREMGGXConvolution`,{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${uo}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function bo(){return vo(`PMREMGGXIntegration`,{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:fo}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function xo(){return vo(`PMREMSphericalGaussianBlur`,{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${lo}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function So(){return vo(`PMREMEquirectangularToCubemap`,{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Co(){return vo(`PMREMCubemapToCubemap`,{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function wo(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new oo(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture&&t.isPMREMTexture!==!0){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new go(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new go(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function To(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&Je(`WebGLRenderer: `+e+` extension not supported.`),t}}}function Eo(e,t,n,r){let i={},a=new WeakMap,o=new FinalizationRegistry(e=>delete i[e]);function s(e){c(e.target)}function c(e){e.index!==null&&t.remove(e.index);for(let n in e.attributes)t.remove(e.attributes[n]);e.removeEventListener(`dispose`,s),delete i[e.id],o.unregister(e);let c=a.get(e);c&&(t.remove(c),a.delete(e)),r.releaseStatesOfGeometry(e),e.isInstancedBufferGeometry===!0&&delete e._maxInstanceCount,n.memory.geometries--}function l(e,t){return i[t.id]===void 0&&(t.addEventListener(`dispose`,s),i[t.id]=new WeakRef(t),o.register(t,t.id,t),n.memory.geometries++),t}function u(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function d(e){let n=e.index,r=e.attributes.position,i=0;if(r===void 0)return;let o=n===null?r.array.length/3-1:n.array.length,s=new(r.count>=65535?Zn:Xn)(Math.ceil(o/3)*6,1),c=s.array;if(n!==null){let e=n.array;i=n.version;for(let t=0,n=0;t<o;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];c[n++]=r,c[n++]=i,c[n++]=i,c[n++]=a,c[n++]=a,c[n++]=r}}else{i=r.version;for(let e=0,t=0;e<o;e+=3){let n=e+0,r=e+1,i=e+2;c[t++]=n,c[t++]=r,c[t++]=r,c[t++]=i,c[t++]=i,c[t++]=n}}s.version=i;let l=a.get(e);l&&t.remove(l),a.set(e,s)}function f(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&d(e)}else d(e);return a.get(e)}function p(){for(let e in i){let t=i[e].deref();t!==void 0&&c(t)}}return{get:l,update:u,getWireframeAttribute:f,dispose:p}}function Do(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Oo(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:U(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function ko(e,t,n){let r=new WeakMap,i=new Dt;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let g=new Float32Array(p*m*4*u),_=new At(g,p,m,u);_.type=h,_.needsUpdate=!0;let v=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*v;e===!0&&(i.fromBufferAttribute(r,t),g[d+s+0]=i.x,g[d+s+1]=i.y,g[d+s+2]=i.z,g[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),g[d+s+4]=i.x,g[d+s+5]=i.y,g[d+s+6]=i.z,g[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),g[d+s+8]=i.x,g[d+s+9]=i.y,g[d+s+10]=i.z,g[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:_,size:new W(p,m)},r.set(o,d);function y(){_.dispose(),r.delete(o),o.removeEventListener(`dispose`,y)}o.addEventListener(`dispose`,y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function Ao(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var jo={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function Mo(e,t,n,r,i,a){let o=new kt(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=null,u=new ur;u.setAttribute(`position`,new Qn([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute(`uv`,new Qn([0,2,0,0,2,0],2));let d=new Ri({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new ei(u,d),p=new Ca(-1,1,1,-1,0,1),m=null,h=null,_=!1,v,b=null,x=[],S=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<x.length;n++){let r=x[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){x=e,S=x.length>0&&x[0].isRenderPass===!0;let t=o.width,n=o.height;x.length>0&&s===null&&(s=new kt(t,n,{type:g,depthBuffer:!1,stencilBuffer:!1}),c=new kt(t,n,{type:g,depthBuffer:!1,stencilBuffer:!1}));let r=i===!0&&x.some(e=>e.needsDepthTexture===!0);r!==(o.depthTexture!==null)&&(r===!0&&l===null&&(l=new yi(t,n),a===!0&&(l.format=E,l.type=y)),o.dispose(),o.depthTexture=r?l:null,o.resolveDepthBuffer=r,o.storeMultisampledDepthBuffer=r);for(let e=0;e<x.length;e++){let i=x[e];i.setSize&&i.setSize(t,n),r&&i.needsDepthTexture===!0&&i.setDepthTexture&&i.setDepthTexture(l)}},this.begin=function(e,t){if(_||e.toneMapping===0&&x.length===0)return!1;if(b=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return S===!1&&e.setRenderTarget(o),v=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return S},this.end=function(e,t){e.toneMapping=v,_=!0;let n=o,r=s;for(let i=0;i<x.length;i++){let a=x[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(m!==e.outputColorSpace||h!==e.toneMapping){m=e.outputColorSpace,h=e.toneMapping,d.defines={},gt.getTransfer(m)===`srgb`&&(d.defines.SRGB_TRANSFER=``);let t=jo[h];t&&(d.defines[t]=``),d.needsUpdate=!0}d.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(b),e.render(f,p),b=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),u.dispose(),d.dispose()}}var No=new Et,Po=new yi(1,1),Fo=new bi(1),Io=new At,Lo=new jt,Ro=new _i,zo=[],Bo=[],Vo=new Float32Array(16),Ho=new Float32Array(9),Uo=new Float32Array(4);function Wo(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=zo[i];if(a===void 0&&(a=new Float32Array(i),zo[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Go(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Ko(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function qo(e,t){let n=Bo[t];n===void 0&&(n=new Int32Array(t),Bo[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Jo(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Yo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Go(n,t))return;e.uniform2fv(this.addr,t),Ko(n,t)}}function Xo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Go(n,t))return;e.uniform3fv(this.addr,t),Ko(n,t)}}function Zo(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Go(n,t))return;e.uniform4fv(this.addr,t),Ko(n,t)}}function Qo(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Go(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Ko(n,t)}else{if(Go(n,r))return;Uo.set(r),e.uniformMatrix2fv(this.addr,!1,Uo),Ko(n,r)}}function $o(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Go(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Ko(n,t)}else{if(Go(n,r))return;Ho.set(r),e.uniformMatrix3fv(this.addr,!1,Ho),Ko(n,r)}}function es(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Go(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Ko(n,t)}else{if(Go(n,r))return;Vo.set(r),e.uniformMatrix4fv(this.addr,!1,Vo),Ko(n,r)}}function ts(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function ns(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Go(n,t))return;e.uniform2iv(this.addr,t),Ko(n,t)}}function rs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Go(n,t))return;e.uniform3iv(this.addr,t),Ko(n,t)}}function is(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Go(n,t))return;e.uniform4iv(this.addr,t),Ko(n,t)}}function as(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function os(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Go(n,t))return;e.uniform2uiv(this.addr,t),Ko(n,t)}}function ss(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Go(n,t))return;e.uniform3uiv(this.addr,t),Ko(n,t)}}function cs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Go(n,t))return;e.uniform4uiv(this.addr,t),Ko(n,t)}}function ls(e){return e.version===0&&(e.compareFunction=519,e.needsUpdate=!0),e}function us(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_2D_SHADOW?ls(Po):No,n.setTexture2D(t||a,i)}function ds(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Lo,i)}function fs(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_CUBE_SHADOW?ls(Fo):Ro,n.setTextureCube(t||a,i)}function ps(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Io,i)}function ms(e){switch(e){case 5126:return Jo;case 35664:return Yo;case 35665:return Xo;case 35666:return Zo;case 35674:return Qo;case 35675:return $o;case 35676:return es;case 5124:case 35670:return ts;case 35667:case 35671:return ns;case 35668:case 35672:return rs;case 35669:case 35673:return is;case 5125:return as;case 36294:return os;case 36295:return ss;case 36296:return cs;case 35678:case 36198:case 36298:case 36306:case 35682:return us;case 35679:case 36299:case 36307:return ds;case 35680:case 36300:case 36308:case 36293:return fs;case 36289:case 36303:case 36311:case 36292:return ps}}function hs(e,t){e.uniform1fv(this.addr,t)}function gs(e,t){let n=Wo(t,this.size,2);e.uniform2fv(this.addr,n)}function _s(e,t){let n=Wo(t,this.size,3);e.uniform3fv(this.addr,n)}function vs(e,t){let n=Wo(t,this.size,4);e.uniform4fv(this.addr,n)}function ys(e,t){let n=Wo(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function bs(e,t){let n=Wo(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function xs(e,t){let n=Wo(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Ss(e,t){e.uniform1iv(this.addr,t)}function Cs(e,t){e.uniform2iv(this.addr,t)}function ws(e,t){e.uniform3iv(this.addr,t)}function Ts(e,t){e.uniform4iv(this.addr,t)}function Es(e,t){e.uniform1uiv(this.addr,t)}function Ds(e,t){e.uniform2uiv(this.addr,t)}function Os(e,t){e.uniform3uiv(this.addr,t)}function ks(e,t){e.uniform4uiv(this.addr,t)}function As(e,t,n){let r=this.cache,i=t.length,a=qo(n,i);Go(r,a)||(e.uniform1iv(this.addr,a),Ko(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?ls(Po):No;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function js(e,t,n){let r=this.cache,i=t.length,a=qo(n,i);Go(r,a)||(e.uniform1iv(this.addr,a),Ko(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Lo,a[e])}function Ms(e,t,n){let r=this.cache,i=t.length,a=qo(n,i);Go(r,a)||(e.uniform1iv(this.addr,a),Ko(r,a));let o;o=this.type===e.SAMPLER_CUBE_SHADOW?ls(Fo):Ro;for(let e=0;e!==i;++e)n.setTextureCube(t[e]||o,a[e])}function Ns(e,t,n){let r=this.cache,i=t.length,a=qo(n,i);Go(r,a)||(e.uniform1iv(this.addr,a),Ko(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Io,a[e])}function Ps(e){switch(e){case 5126:return hs;case 35664:return gs;case 35665:return _s;case 35666:return vs;case 35674:return ys;case 35675:return bs;case 35676:return xs;case 5124:case 35670:return Ss;case 35667:case 35671:return Cs;case 35668:case 35672:return ws;case 35669:case 35673:return Ts;case 5125:return Es;case 36294:return Ds;case 36295:return Os;case 36296:return ks;case 35678:case 36198:case 36298:case 36306:case 35682:return As;case 35679:case 36299:case 36307:return js;case 35680:case 36300:case 36308:case 36293:return Ms;case 36289:case 36303:case 36311:case 36292:return Ns}}var Fs=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ms(t.type)}},Is=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ps(t.type)}},Ls=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Rs=/(\w+)(\])?(\[|\.)?/g;function zs(e,t){e.seq.push(t),e.map[t.id]=t}function Bs(e,t,n){let r=e.name,i=r.length;for(Rs.lastIndex=0;;){let a=Rs.exec(r),o=Rs.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){zs(n,l===void 0?new Fs(s,e,t):new Is(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new Ls(s),zs(n,e)),n=e}}}var Vs=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Bs(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Hs(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Us=37297,Ws=0;function Gs(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var Ks=new K;function qs(e){gt._getMatrix(Ks,gt.workingColorSpace,e);let t=`mat3( ${Ks.elements.map(e=>e.toFixed(4))} )`;switch(gt.getTransfer(e)){case Ie:return[t,`LinearTransferOETF`];case Le:return[t,`sRGBTransferOETF`];default:return H(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Js(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Gs(e.getShaderSource(t),r)}return i}function Ys(e,t){let n=qs(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,`}`].join(`
`)}var Xs={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function Zs(e,t){let n=Xs[t];return n===void 0?(H(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Qs=new G;function $s(){return gt.getLuminanceCoefficients(Qs),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Qs.x.toFixed(4)}, ${Qs.y.toFixed(4)}, ${Qs.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function ec(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(rc).join(`
`)}function tc(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function nc(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function rc(e){return e!==``}function ic(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function ac(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var oc=/^[ \t]*#include +<([\w\d./]+)>/gm;function sc(e){return e.replace(oc,cc)}function cc(e,t){let n=Xa[t];if(n===void 0)throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`);return sc(n)}var lc=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function uc(e){return e.replace(lc,dc)}function dc(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function fc(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var pc={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function mc(e){return pc[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var hc={302:`ENVMAP_MODE_REFRACTION`};function gc(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:hc[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var _c={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function vc(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:_c[e.combine]||`ENVMAP_BLENDING_NONE`}function yc(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=mc(n),l=n.envMapPMREM===!0?`ENVMAP_TYPE_PMREM`:`ENVMAP_TYPE_CUBE`,u=gc(n),d=vc(n),f=ec(n),p=tc(a),m=i.createProgram(),h,g,_=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(h=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(rc).join(`
`),h.length>0&&(h+=`
`),g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(rc).join(`
`),g.length>0&&(g+=`
`)):(h=[fc(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.diffuseRoughnessMapUv?`#define DIFFUSE_ROUGHNESSMAP_UV `+n.diffuseRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(rc).join(`
`),g=[fc(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,n.envMapPMREM?`#define ENVMAP_MAX_LOD `+n.envMapMaxLod+`.0`:``,n.envMapPMREM?`#define ENVMAP_SIZE `+n.envMapSize+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughness?`#define USE_DIFFUSE_ROUGHNESS`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:Xa.tonemapping_pars_fragment,n.toneMapping===0?``:Zs(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,Xa.colorspace_pars_fragment,Ys(`linearToOutputTexel`,n.outputColorSpace),$s(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(rc).join(`
`)),o=sc(o),o=ic(o,n),o=ac(o,n),s=sc(s),s=ic(s,n),s=ac(s,n),o=uc(o),s=uc(s),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,h=[f,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+h,g=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+g);let v=_+h+o,y=_+g+s,b=Hs(i,i.VERTEX_SHADER,v),x=Hs(i,i.FRAGMENT_SHADER,y);i.attachShader(m,b),i.attachShader(m,x),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(m,0,`position`):i.bindAttribLocation(m,0,n.index0AttributeName),i.linkProgram(m);function S(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(m)||``,r=i.getShaderInfoLog(b)||``,a=i.getShaderInfoLog(x)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,m,b,x);else{let e=Js(i,b,`vertex`),n=Js(i,x,`fragment`);U(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):H(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:h},fragmentShader:{log:c,prefix:g}})}i.deleteShader(b),i.deleteShader(x),C=new Vs(i,m),w=nc(i,m)}let C;this.getUniforms=function(){return C===void 0&&S(this),C};let w;this.getAttributes=function(){return w===void 0&&S(this),w};let T=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=i.getProgramParameter(m,Us)),T},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Ws++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=x,this}var bc=0,xc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Sc(e),t.set(e,n)),n}},Sc=class{constructor(e){this.id=bc++,this.code=e,this.usedTimes=0}};function Cc(e){return e===1030||e===37490||e===36285}function wc(e,t,n,r,i,a){let o=new Ut,s=new xc,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function p(e){return c.add(e),e===0?`uv`:`uv${e}`}function m(i,o,l,u,m,h){let g=u.fog,_=m.geometry,v=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,b=t.get(i.envMap||v,y),x=f[i.type],S=r.precision;i.precision!==null&&(S=r.getMaxPrecision(i.precision),S!==i.precision&&H(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,S,`instead.`));let C=_.morphAttributes.position||_.morphAttributes.normal||_.morphAttributes.color,w=C===void 0?0:C.length,T=0;_.morphAttributes.position!==void 0&&(T=1),_.morphAttributes.normal!==void 0&&(T=2),_.morphAttributes.color!==void 0&&(T=3);let E,D,O,k;if(x){let e=Za[x];E=e.vertexShader,D=e.fragmentShader}else{E=i.vertexShader,D=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),O=e.id,k=t.id}let A=e.getRenderTarget(),j=e.state.buffers.depth.getReversed(),M=m.isInstancedMesh===!0,N=m.isBatchedMesh===!0,P=!!i.map,ee=!!i.matcap,F=!!b,te=F&&b.isPMREMTexture===!0,I=!!i.aoMap,ne=!!i.lightMap,re=!!i.bumpMap&&i.wireframe===!1,ie=!!i.normalMap,ae=!!i.displacementMap,oe=!!i.emissiveMap,L=!!i.metalnessMap,se=!!i.roughnessMap,ce=i.anisotropy>0,le=i.clearcoat>0,ue=i.diffuseRoughness>0,de=i.dispersion>0,fe=i.retroreflectivity>0,pe=i.iridescence>0,me=i.sheen>0,he=i.transmission>0,ge=ce&&!!i.anisotropyMap,_e=le&&!!i.clearcoatMap,ve=le&&!!i.clearcoatNormalMap,R=le&&!!i.clearcoatRoughnessMap,ye=ue&&!!i.diffuseRoughnessMap,be=pe&&!!i.iridescenceMap,xe=pe&&!!i.iridescenceThicknessMap,Se=me&&!!i.sheenColorMap,Ce=me&&!!i.sheenRoughnessMap,we=!!i.specularMap,Te=!!i.specularColorMap,Ee=!!i.specularIntensityMap,De=he&&!!i.transmissionMap,Oe=he&&!!i.thicknessMap,ke=!!i.gradientMap,Ae=!!i.alphaMap,z=i.alphaTest>0,je=!!i.alphaHash,Me=!!i.extensions,Ne=0;i.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Ne=e.toneMapping);let B=te?b.isCompressedCubeTexture?b.image[0].mipmaps:b.mipmaps:null,Pe={shaderID:x,shaderType:i.type,shaderName:i.name,vertexShader:E,fragmentShader:D,defines:i.defines,customVertexShaderID:O,customFragmentShaderID:k,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:S,batching:N,batchingColor:N&&m._colorsTexture!==null,instancing:M,instancingColor:M&&m.instanceColor!==null,instancingMorph:M&&m.morphTexture!==null,outputColorSpace:A===null?e.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:gt.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:P,matcap:ee,envMap:F,envMapMode:F&&b.mapping,envMapPMREM:te,envMapMaxLod:te?B.length-1:null,envMapSize:te?B[0].width:null,aoMap:I,lightMap:ne,bumpMap:re,normalMap:ie,displacementMap:ae,emissiveMap:oe,normalMapObjectSpace:ie&&i.normalMapType===1,normalMapTangentSpace:ie&&i.normalMapType===0,packedNormalMap:ie&&i.normalMapType===0&&Cc(i.normalMap.format),metalnessMap:L,roughnessMap:se,anisotropy:ce,anisotropyMap:ge,clearcoat:le,clearcoatMap:_e,clearcoatNormalMap:ve,clearcoatRoughnessMap:R,diffuseRoughness:ue,diffuseRoughnessMap:ye,dispersion:de,retroreflection:fe,iridescence:pe,iridescenceMap:be,iridescenceThicknessMap:xe,sheen:me,sheenColorMap:Se,sheenRoughnessMap:Ce,specularMap:we,specularColorMap:Te,specularIntensityMap:Ee,transmission:he,transmissionMap:De,thicknessMap:Oe,gradientMap:ke,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Ae,alphaTest:z,alphaHash:je,combine:i.combine,mapUv:P&&p(i.map.channel),aoMapUv:I&&p(i.aoMap.channel),lightMapUv:ne&&p(i.lightMap.channel),bumpMapUv:re&&p(i.bumpMap.channel),normalMapUv:ie&&p(i.normalMap.channel),displacementMapUv:ae&&p(i.displacementMap.channel),emissiveMapUv:oe&&p(i.emissiveMap.channel),metalnessMapUv:L&&p(i.metalnessMap.channel),roughnessMapUv:se&&p(i.roughnessMap.channel),anisotropyMapUv:ge&&p(i.anisotropyMap.channel),clearcoatMapUv:_e&&p(i.clearcoatMap.channel),clearcoatNormalMapUv:ve&&p(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:R&&p(i.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ye&&p(i.diffuseRoughnessMap.channel),iridescenceMapUv:be&&p(i.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&p(i.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&p(i.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&p(i.sheenRoughnessMap.channel),specularMapUv:we&&p(i.specularMap.channel),specularColorMapUv:Te&&p(i.specularColorMap.channel),specularIntensityMapUv:Ee&&p(i.specularIntensityMap.channel),transmissionMapUv:De&&p(i.transmissionMap.channel),thicknessMapUv:Oe&&p(i.thicknessMap.channel),alphaMapUv:Ae&&p(i.alphaMap.channel),vertexTangents:!!_.attributes.tangent&&(ie||ce),vertexNormals:!!_.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!_.attributes.color&&_.attributes.color.itemSize===4,pointsUvs:m.isPoints===!0&&!!_.attributes.uv&&(P||Ae),fog:!!g,useFog:i.fog===!0,fogExp2:!!g&&g.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||_.attributes.normal===void 0&&ie===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:j,skinning:m.isSkinnedMesh===!0,hasPositionAttribute:_.attributes.position!==void 0,morphTargets:_.morphAttributes.position!==void 0,morphNormals:_.morphAttributes.normal!==void 0,morphColors:_.morphAttributes.color!==void 0,morphTargetsCount:w,morphTextureStride:T,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:h.filter(e=>e.texture!==null).length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ne,decodeVideoTexture:P&&i.map.isVideoTexture===!0&&gt.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:oe&&i.emissiveMap.isVideoTexture===!0&&gt.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Me&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Me&&i.extensions.multiDraw===!0||N)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Pe.vertexUv1s=c.has(1),Pe.vertexUv2s=c.has(2),Pe.vertexUv3s=c.has(3),c.clear(),Pe}function h(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(g(n,t),_(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function g(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapPMREM),e.push(t.envMapMaxLod),e.push(t.envMapSize),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.diffuseRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.numLightProbeGrids),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function _(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.diffuseRoughness&&o.enable(25),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function v(e){let t=f[e.type],n;if(t){let e=Za[t];n=Pi.clone(e.uniforms)}else n=e.uniforms;return n}function y(t,n){let r=u.get(n);return r===void 0?(r=new yc(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function b(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function x(e){s.remove(e)}function S(){s.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:v,acquireProgram:y,releaseProgram:b,releaseShaderCache:x,programs:l,dispose:S}}function Tc(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Ec(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Dc(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Oc(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||Ec),r.length>1&&r.sort(t||Dc),i.length>1&&i.sort(t||Dc)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function kc(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Oc,e.set(t,[i])):n>=r.length?(i=new Oc,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Ac(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new G,color:new q};break;case`SpotLight`:n={position:new G,direction:new G,color:new q,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new G,color:new q,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new G,skyColor:new q,groundColor:new q};break;case`RectAreaLight`:n={color:new q,position:new G,halfWidth:new G,halfHeight:new G}}return e[t.id]=n,n}}}function jc(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new W};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new W};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new W,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var Mc=0;function Nc(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Pc(e){let t=new Ac,n=jc(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new G);let i=new G,a=new Mt,o=new Mt;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(Nc);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=J.LTC_FLOAT_1,r.rectAreaLTC2=J.LTC_FLOAT_2):(r.rectAreaLTC1=J.LTC_HALF_1,r.rectAreaLTC2=J.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=Mc++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function Fc(e){let t=new Pc(e),n=[],r=[],i=[];function a(e){u.camera=e,n.length=0,r.length=0,i.length=0}function o(e){e.isLightProbeGrid?i.push(e):n.push(e)}function s(e){r.push(e)}function c(){t.setup(n),i.sort((e,t)=>e.priority-t.priority||e.id-t.id)}function l(e){t.setupView(n,e)}let u={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:u,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:s}}function Ic(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Fc(e),t.set(n,[a])):r>=i.length?(a=new Fc(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Lc=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Rc=`uniform sampler2D shadow_pass;
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
}`,zc=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],Bc=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],Vc=new Mt,Hc=new G,Uc=new G;function Wc(e,t,n){let i=new si,a=new W,s=new W,c=new Dt,l=new Vi,u=new Hi,d={},f=n.maxTextureSize,p={0:1,1:0,2:2},_=new Li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new W},radius:{value:4}},vertexShader:Lc,fragmentShader:Rc}),v=_.clone();v.defines.HORIZONTAL_PASS=1;let y=new ur;y.setAttribute(`position`,new Yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new ei(y,_),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let S=this.type;this.render=function(t,n,l){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||t.length===0)return;this.type===2&&(H(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.state;_.setBlending(0),_.buffers.depth.getReversed()===!0?_.buffers.color.setClear(0,0,0,0):_.buffers.color.setClear(1,1,1,1),_.buffers.depth.setTest(!0),_.setScissorTest(!1);let v=S!==this.type;v&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let u=0,d=t.length;u<d;u++){let d=t[u],p=d.shadow;if(p===void 0){H(`WebGLShadowMap:`,d,`has no shadow.`);continue}if(p.autoUpdate===!1&&p.needsUpdate===!1)continue;a.copy(p.mapSize);let y=p.getFrameExtents();a.multiply(y),s.copy(p.mapSize),(a.x>f||a.y>f)&&(a.x>f&&(s.x=Math.floor(f/y.x),a.x=s.x*y.x,p.mapSize.x=s.x),a.y>f&&(s.y=Math.floor(f/y.y),a.y=s.y*y.y,p.mapSize.y=s.y));let b=e.state.buffers.depth.getReversed();if(p.camera._reversedDepth=b,p.map===null||v===!0){if(p.map!==null&&(p.map.depthTexture!==null&&(p.map.depthTexture.dispose(),p.map.depthTexture=null),p.map.dispose()),this.type===3){if(d.isPointLight){H(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}p.map=new kt(a.x,a.y,{format:k,type:g,minFilter:o,magFilter:o,generateMipmaps:!1}),p.map.texture.name=d.name+`.shadowMap`,p.map.depthTexture=new yi(a.x,a.y,h),p.map.depthTexture.name=d.name+`.shadowMapDepth`,p.map.depthTexture.format=T,p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=r,p.map.depthTexture.magFilter=r}else d.isPointLight?(p.map=new oo(a.x),p.map.depthTexture=new bi(a.x,m)):(p.map=new kt(a.x,a.y),p.map.depthTexture=new yi(a.x,a.y,m)),p.map.depthTexture.name=d.name+`.shadowMap`,p.map.depthTexture.format=T,this.type===1?(p.map.depthTexture.compareFunction=b?518:515,p.map.depthTexture.minFilter=o,p.map.depthTexture.magFilter=o):(p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=r,p.map.depthTexture.magFilter=r);p.camera.updateProjectionMatrix()}p.map.isWebGLCubeRenderTarget!==!0&&(p.map.width!==a.x||p.map.height!==a.y)&&p.map.setSize(a.x,a.y);let x=p.map.isWebGLCubeRenderTarget?6:p.getViewportCount();d.isPointLight!==!0&&p.updateMatrices(d,l);let S=p.camera.layers.mask&4294967294?p.camera.layers:l.layers;for(let t=0;t<x;t++){let r=p.getCamera(t);if(d.isPointLight){let e=p.camera,n=p.matrix,r=d.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Hc.setFromMatrixPosition(d.matrixWorld),e.position.copy(Hc),Uc.copy(e.position),Uc.add(zc[t]),e.up.copy(Bc[t]),e.lookAt(Uc),e.updateMatrixWorld(),n.makeTranslation(-Hc.x,-Hc.y,-Hc.z),Vc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),p._frustum.setFromProjectionMatrix(Vc,e.coordinateSystem,e.reversedDepth)}if(p.map.isWebGLCubeRenderTarget)e.setRenderTarget(p.map,t),e.clear();else{t===0&&(e.setRenderTarget(p.map),e.clear());let n=p.getViewport(t);c.set(s.x*n.x,s.y*n.y,s.x*n.z,s.y*n.w),_.viewport(c)}i=p.getFrustum(t),E(n,l,r,d,S,this.type)}p.isPointLightShadow!==!0&&this.type===3&&C(p,l),p.needsUpdate=!1}S=this.type,x.needsUpdate=!1,e.setRenderTarget(u,d,p)};function C(n,r){let i=t.update(b);_.defines.VSM_SAMPLES!==n.blurSamples&&(_.defines.VSM_SAMPLES=n.blurSamples,v.defines.VSM_SAMPLES=n.blurSamples,_.needsUpdate=!0,v.needsUpdate=!0),n.mapPass===null?n.mapPass=new kt(a.x,a.y,{format:k,type:g}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),_.uniforms.shadow_pass.value=n.map.depthTexture,_.uniforms.resolution.value.set(n.map.width,n.map.height),_.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,i,_,b,null),v.uniforms.shadow_pass.value=n.mapPass.texture,v.uniforms.resolution.value.set(n.map.width,n.map.height),v.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,i,v,b,null)}function w(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?u:l,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=d[e];r===void 0&&(r={},d[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,D)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?p[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function E(n,r,a,o,s,c){if(n.visible===!1)return;if(n.layers.test(s)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&c===3)&&(!n.frustumCulled||n.intersectsFrustum(i))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let i=t.update(n),s=n.material;if(Array.isArray(s)){let t=i.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=s[u.materialIndex];if(d&&d.visible){let t=w(n,d,o,c);n.onBeforeShadow(e,n,r,a,i,t,u),e.renderBufferDirect(a,null,i,t,n,u),n.onAfterShadow(e,n,r,a,i,t,u)}}}else if(s.visible){let t=w(n,s,o,c);n.onBeforeShadow(e,n,r,a,i,t,null),e.renderBufferDirect(a,null,i,t,n,null),n.onAfterShadow(e,n,r,a,i,t,null)}}let l=n.children;for(let e=0,t=l.length;e<t;e++)E(l[e],r,a,o,s,c)}function D(e){e.target.removeEventListener(`dispose`,D);for(let t in d){let n=d[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Gc(e,t){function n(){let t=!1,n=new Dt,r=null,i=new Dt(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?L(e.DEPTH_TEST):se(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=Xe[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?L(e.STENCIL_TEST):se(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c={},l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new q(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,M=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,P=0,ee=e.getParameter(e.VERSION);ee.indexOf(`WebGL`)===-1?ee.indexOf(`OpenGL ES`)!==-1&&(P=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),N=P>=2):(P=parseFloat(/^WebGL (\d)/.exec(ee)[1]),N=P>=1);let F=null,te={},I=e.getParameter(e.SCISSOR_BOX),ne=e.getParameter(e.VIEWPORT),re=new Dt().fromArray(I),ie=new Dt().fromArray(ne);function ae(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let oe={};oe[e.TEXTURE_2D]=ae(e.TEXTURE_2D,e.TEXTURE_2D,1),oe[e.TEXTURE_CUBE_MAP]=ae(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[e.TEXTURE_2D_ARRAY]=ae(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),oe[e.TEXTURE_3D]=ae(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),L(e.DEPTH_TEST),o.setFunc(3),he(!1),ge(1),L(e.CULL_FACE),pe(0);function L(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function se(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function ce(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function le(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function ue(t){return h!==t&&(e.useProgram(t),h=t,!0)}let de={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};de[103]=e.MIN,de[104]=e.MAX;let fe={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function pe(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(se(e.BLEND),g=!1);else if(g===!1&&(L(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:U(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:U(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:U(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:U(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(de[n],de[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(fe[r],fe[i],fe[o],fe[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function me(t,n){t.side===2?se(e.CULL_FACE):L(e.CULL_FACE);let r=t.side===1;n&&(r=!r),he(r),t.blending===1&&t.transparent===!1?pe(0):pe(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),ve(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?L(e.SAMPLE_ALPHA_TO_COVERAGE):se(e.SAMPLE_ALPHA_TO_COVERAGE)}function he(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function ge(t){t===0?se(e.CULL_FACE):(L(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function _e(t){t!==k&&(N&&e.lineWidth(t),k=t)}function ve(t,n,r){t?(L(e.POLYGON_OFFSET_FILL),(A!==n||j!==r)&&(A=n,j=r,o.getReversed()&&(n=-n,r=-r),e.polygonOffset(n,r))):se(e.POLYGON_OFFSET_FILL)}function R(t){t?L(e.SCISSOR_TEST):se(e.SCISSOR_TEST)}function ye(t){t===void 0&&(t=e.TEXTURE0+M-1),F!==t&&(e.activeTexture(t),F=t)}function be(t,n,r){r===void 0&&(r=F===null?e.TEXTURE0+M-1:F);let i=te[r];i===void 0&&(i={type:void 0,texture:void 0},te[r]=i),(i.type!==t||i.texture!==n)&&(F!==r&&(e.activeTexture(r),F=r),e.bindTexture(t,n||oe[t]),i.type=t,i.texture=n)}function xe(){let t=te[F];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Se(){try{e.compressedTexImage2D(...arguments)}catch(e){U(`WebGLState:`,e)}}function Ce(){try{e.compressedTexImage3D(...arguments)}catch(e){U(`WebGLState:`,e)}}function we(){try{e.texSubImage2D(...arguments)}catch(e){U(`WebGLState:`,e)}}function Te(){try{e.texSubImage3D(...arguments)}catch(e){U(`WebGLState:`,e)}}function Ee(){try{e.compressedTexSubImage2D(...arguments)}catch(e){U(`WebGLState:`,e)}}function De(){try{e.compressedTexSubImage3D(...arguments)}catch(e){U(`WebGLState:`,e)}}function Oe(){try{e.texStorage2D(...arguments)}catch(e){U(`WebGLState:`,e)}}function ke(){try{e.texStorage3D(...arguments)}catch(e){U(`WebGLState:`,e)}}function Ae(){try{e.texImage2D(...arguments)}catch(e){U(`WebGLState:`,e)}}function z(){try{e.texImage3D(...arguments)}catch(e){U(`WebGLState:`,e)}}function je(t){return d[t]===void 0?e.getParameter(t):d[t]}function Me(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function Ne(t){re.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),re.copy(t))}function B(t){ie.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),ie.copy(t))}function Pe(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),e.uniformBlockBinding(n,i,i),r.set(t,i))}function Fe(t,n,r){let i=l.get(n).get(t);c[i]!==r&&(e.bindBufferBase(e.UNIFORM_BUFFER,i,r),c[i]=r)}function V(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},F=null,te={},f={},c={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new q(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,re.set(0,0,e.canvas.width,e.canvas.height),ie.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:L,disable:se,bindFramebuffer:ce,drawBuffers:le,useProgram:ue,setBlending:pe,setMaterial:me,setFlipSided:he,setCullFace:ge,setLineWidth:_e,setPolygonOffset:ve,setScissorTest:R,activeTexture:ye,bindTexture:be,unbindTexture:xe,compressedTexImage2D:Se,compressedTexImage3D:Ce,texImage2D:Ae,texImage3D:z,pixelStorei:Me,getParameter:je,updateUBOMapping:Pe,uniformBlockBinding:Fe,texStorage2D:Oe,texStorage3D:ke,texSubImage2D:we,texSubImage3D:Te,compressedTexSubImage2D:Ee,compressedTexSubImage3D:De,scissor:Ne,viewport:B,reset:V}}function Kc(l,u,d,f,p,m,h){let g=u.has(`WEBGL_multisampled_render_to_texture`)?u.get(`WEBGL_multisampled_render_to_texture`):null,_=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),v=new W,y=new WeakMap,b=new Set,x,S=new WeakMap,C=new Set,w=new FinalizationRegistry(e=>C.delete(e)),T=!1;try{T=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function D(e,t){return T?new OffscreenCanvas(e,t):Ue(`canvas`)}function O(e,t,n){let r=1,i=V(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);x===void 0&&(x=D(n,a));let o=t?D(n,a):x;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),H(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&H(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function k(e){return e.generateMipmaps}function A(e){l.generateMipmap(e)}function j(e){return e.isWebGLCubeRenderTarget?l.TEXTURE_CUBE_MAP:e.isWebGL3DRenderTarget?l.TEXTURE_3D:e.isWebGLArrayRenderTarget||e.isCompressedArrayTexture?l.TEXTURE_2D_ARRAY:l.TEXTURE_2D}function M(e,t,n,r,i,a=!1){if(e!==null){if(l[e]!==void 0)return l[e];H(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+e+`'`)}let o;r&&(o=u.get(`EXT_texture_norm16`),o||H(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let s=t;if(t===l.RED&&(n===l.FLOAT&&(s=l.R32F),n===l.HALF_FLOAT&&(s=l.R16F),n===l.UNSIGNED_BYTE&&(s=l.R8),n===l.UNSIGNED_SHORT&&o&&(s=o.R16_EXT),n===l.SHORT&&o&&(s=o.R16_SNORM_EXT)),t===l.RED_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.R8UI),n===l.UNSIGNED_SHORT&&(s=l.R16UI),n===l.UNSIGNED_INT&&(s=l.R32UI),n===l.BYTE&&(s=l.R8I),n===l.SHORT&&(s=l.R16I),n===l.INT&&(s=l.R32I)),t===l.RG&&(n===l.FLOAT&&(s=l.RG32F),n===l.HALF_FLOAT&&(s=l.RG16F),n===l.UNSIGNED_BYTE&&(s=l.RG8),n===l.UNSIGNED_SHORT&&o&&(s=o.RG16_EXT),n===l.SHORT&&o&&(s=o.RG16_SNORM_EXT)),t===l.RG_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RG8UI),n===l.UNSIGNED_SHORT&&(s=l.RG16UI),n===l.UNSIGNED_INT&&(s=l.RG32UI),n===l.BYTE&&(s=l.RG8I),n===l.SHORT&&(s=l.RG16I),n===l.INT&&(s=l.RG32I)),t===l.RGB_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RGB8UI),n===l.UNSIGNED_SHORT&&(s=l.RGB16UI),n===l.UNSIGNED_INT&&(s=l.RGB32UI),n===l.BYTE&&(s=l.RGB8I),n===l.SHORT&&(s=l.RGB16I),n===l.INT&&(s=l.RGB32I)),t===l.RGBA_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RGBA8UI),n===l.UNSIGNED_SHORT&&(s=l.RGBA16UI),n===l.UNSIGNED_INT&&(s=l.RGBA32UI),n===l.BYTE&&(s=l.RGBA8I),n===l.SHORT&&(s=l.RGBA16I),n===l.INT&&(s=l.RGBA32I)),t===l.RGB&&(n===l.UNSIGNED_SHORT&&o&&(s=o.RGB16_EXT),n===l.SHORT&&o&&(s=o.RGB16_SNORM_EXT),n===l.UNSIGNED_INT_5_9_9_9_REV&&(s=l.RGB9_E5),n===l.UNSIGNED_INT_10F_11F_11F_REV&&(s=l.R11F_G11F_B10F)),t===l.RGBA){let e=a?Ie:gt.getTransfer(i);n===l.FLOAT&&(s=l.RGBA32F),n===l.HALF_FLOAT&&(s=l.RGBA16F),n===l.UNSIGNED_BYTE&&(s=e===`srgb`?l.SRGB8_ALPHA8:l.RGBA8),n===l.UNSIGNED_SHORT&&o&&(s=o.RGBA16_EXT),n===l.SHORT&&o&&(s=o.RGBA16_SNORM_EXT),n===l.UNSIGNED_SHORT_4_4_4_4&&(s=l.RGBA4),n===l.UNSIGNED_SHORT_5_5_5_1&&(s=l.RGB5_A1)}return(s===l.R16F||s===l.R32F||s===l.RG16F||s===l.RG32F||s===l.RGBA16F||s===l.RGBA32F)&&u.get(`EXT_color_buffer_float`),s}function N(e,t){let n;return e?t===null||t===1014||t===1020?n=l.DEPTH24_STENCIL8:t===1015?n=l.DEPTH32F_STENCIL8:t===1012&&(n=l.DEPTH24_STENCIL8,H(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):t===null||t===1014||t===1020?n=l.DEPTH_COMPONENT24:t===1015?n=l.DEPTH_COMPONENT32F:t===1012&&(n=l.DEPTH_COMPONENT16),n}function P(e,t){return k(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function ee(e){let t=new WeakRef(e);f.get(e).__ref=t,C.add(t),w.register(e,t,t)}function F(e){let t=f.get(e).__ref;t!==void 0&&(C.delete(t),w.unregister(t))}function te(e){ne(e.target)}function I(e){re(e.target)}function ne(e){e.removeEventListener(`dispose`,te),F(e),ae(e),e.isVideoTexture&&y.delete(e),e.isHTMLTexture&&b.delete(e)}function re(e){e.removeEventListener(`dispose`,I),F(e),L(e)}function ie(){for(let e of C){let t=e.deref();t!==void 0&&(t.isRenderTarget===!0?re(t):ne(t))}C.clear(),b.clear()}function ae(e){let t=f.get(e);if(t.__webglInit===void 0)return;let n=e.source,r=S.get(n);if(r){let i=r[t.__cacheKey];i.usedTimes--,i.usedTimes===0&&oe(e),Object.keys(r).length===0&&S.delete(n)}f.remove(e)}function oe(e){let t=f.get(e);l.deleteTexture(t.__webglTexture);let n=e.source,r=S.get(n);delete r[t.__cacheKey],h.memory.textures--}function L(e){let t=f.get(e);t.__depthDisposeCallback&&t.__depthDisposeCallback();let n=e.depthTexture;if(n&&n.renderTarget===e&&ne(n),e.isWebGLCubeRenderTarget)for(let e=0;e<6;e++){if(Array.isArray(t.__webglFramebuffer[e]))for(let n=0;n<t.__webglFramebuffer[e].length;n++)l.deleteFramebuffer(t.__webglFramebuffer[e][n]);else l.deleteFramebuffer(t.__webglFramebuffer[e]);t.__webglDepthbuffer&&l.deleteRenderbuffer(t.__webglDepthbuffer[e])}else{if(Array.isArray(t.__webglFramebuffer))for(let e=0;e<t.__webglFramebuffer.length;e++)l.deleteFramebuffer(t.__webglFramebuffer[e]);else l.deleteFramebuffer(t.__webglFramebuffer);if(t.__webglDepthbuffer&&l.deleteRenderbuffer(t.__webglDepthbuffer),t.__webglMultisampledFramebuffer&&l.deleteFramebuffer(t.__webglMultisampledFramebuffer),t.__webglColorRenderbuffer)for(let e=0;e<t.__webglColorRenderbuffer.length;e++)t.__webglColorRenderbuffer[e]&&l.deleteRenderbuffer(t.__webglColorRenderbuffer[e]);t.__webglDepthRenderbuffer&&l.deleteRenderbuffer(t.__webglDepthRenderbuffer)}let r=e.textures;for(let e=0,t=r.length;e<t;e++){let t=f.get(r[e]);t.__webglTexture&&(l.deleteTexture(t.__webglTexture),h.memory.textures--),f.remove(r[e])}f.remove(e)}let se=0;function ce(){se=0}function le(){return se}function ue(e){se=e}function de(){let e=se;return e>=p.maxTextures&&H(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+p.maxTextures),se+=1,e}function fe(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.mipmapsAutoUpdate),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function pe(e,t){let n=f.get(e);if(e.isVideoTexture&&Pe(e),e.isRenderTargetTexture===!1&&e.isExternalTexture!==!0&&e.version>0&&n.__version!==e.version){let r=e.image;if(r===null)H(`WebGLRenderer: Texture marked for update but no image data found.`);else if(r.complete===!1)H(`WebGLRenderer: Texture marked for update but image is incomplete`);else{Ce(n,e,t);return}}else e.isExternalTexture&&(n.__webglTexture=e.sourceTexture?e.sourceTexture:null);d.bindTexture(l.TEXTURE_2D,n.__webglTexture,l.TEXTURE0+t)}function me(e,t){let n=f.get(e);e.isRenderTargetTexture===!1&&e.version>0&&n.__version!==e.version?Ce(n,e,t):(e.isExternalTexture&&(n.__webglTexture=e.sourceTexture?e.sourceTexture:null),d.bindTexture(l.TEXTURE_2D_ARRAY,n.__webglTexture,l.TEXTURE0+t))}function he(e,t){let n=f.get(e);e.isRenderTargetTexture===!1&&e.version>0&&n.__version!==e.version?Ce(n,e,t):d.bindTexture(l.TEXTURE_3D,n.__webglTexture,l.TEXTURE0+t)}function ge(e,t){let n=f.get(e);e.version>0&&n.__version!==e.version?we(n,e,t):d.bindTexture(l.TEXTURE_CUBE_MAP,n.__webglTexture,l.TEXTURE0+t)}let _e={[e]:l.REPEAT,[t]:l.CLAMP_TO_EDGE,[n]:l.MIRRORED_REPEAT},ve={[r]:l.NEAREST,[i]:l.NEAREST_MIPMAP_NEAREST,[a]:l.NEAREST_MIPMAP_LINEAR,[o]:l.LINEAR,[s]:l.LINEAR_MIPMAP_NEAREST,[c]:l.LINEAR_MIPMAP_LINEAR},R={512:l.NEVER,519:l.ALWAYS,513:l.LESS,515:l.LEQUAL,514:l.EQUAL,518:l.GEQUAL,516:l.GREATER,517:l.NOTEQUAL};function ye(e,t){if(t.type===1015&&u.has(`OES_texture_float_linear`)===!1&&(t.magFilter===1006||t.magFilter===1007||t.magFilter===1005||t.magFilter===1008||t.minFilter===1006||t.minFilter===1007||t.minFilter===1005||t.minFilter===1008)&&H(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),l.texParameteri(e,l.TEXTURE_WRAP_S,_e[t.wrapS]),l.texParameteri(e,l.TEXTURE_WRAP_T,_e[t.wrapT]),(e===l.TEXTURE_3D||e===l.TEXTURE_2D_ARRAY)&&l.texParameteri(e,l.TEXTURE_WRAP_R,_e[t.wrapR]),l.texParameteri(e,l.TEXTURE_MAG_FILTER,ve[t.magFilter]),l.texParameteri(e,l.TEXTURE_MIN_FILTER,ve[t.minFilter]),t.compareFunction&&(l.texParameteri(e,l.TEXTURE_COMPARE_MODE,l.COMPARE_REF_TO_TEXTURE),l.texParameteri(e,l.TEXTURE_COMPARE_FUNC,R[t.compareFunction])),u.has(`EXT_texture_filter_anisotropic`)===!0){if(t.magFilter===1003||t.minFilter!==1005&&t.minFilter!==1008||t.type===1015&&u.has(`OES_texture_float_linear`)===!1)return;if(t.anisotropy>1||f.get(t).__currentAnisotropy){let n=u.get(`EXT_texture_filter_anisotropic`);l.texParameterf(e,n.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(t.anisotropy,p.getMaxAnisotropy())),f.get(t).__currentAnisotropy=t.anisotropy}}}function be(e,t){let n=!1;e.__webglInit===void 0&&(e.__webglInit=!0,t.addEventListener(`dispose`,te),ee(t));let r=t.source,i=S.get(r);i===void 0&&(i={},S.set(r,i));let a=fe(t);if(a!==e.__cacheKey){i[a]===void 0&&(i[a]={texture:l.createTexture(),usedTimes:0},h.memory.textures++,n=!0),i[a].usedTimes++;let r=i[e.__cacheKey];r!==void 0&&(i[e.__cacheKey].usedTimes--,r.usedTimes===0&&oe(t)),e.__cacheKey=a,e.__webglTexture=i[a].texture}return n}function xe(e,t,n){return Math.floor(Math.floor(e/n)/t)}function Se(e,t,n,r){let i=e.updateRanges;if(i.length===0)d.texSubImage2D(l.TEXTURE_2D,0,0,0,t.width,t.height,n,r,t.data);else{i.sort((e,t)=>e.start-t.start);let a=0;for(let e=1;e<i.length;e++){let n=i[a],r=i[e],o=n.start+n.count,s=xe(r.start,t.width,4),c=xe(n.start,t.width,4);r.start<=o+1&&s===c&&xe(r.start+r.count-1,t.width,4)===s?n.count=Math.max(n.count,r.start+r.count-n.start):(++a,i[a]=r)}i.length=a+1;let o=d.getParameter(l.UNPACK_ROW_LENGTH),s=d.getParameter(l.UNPACK_SKIP_PIXELS),c=d.getParameter(l.UNPACK_SKIP_ROWS);d.pixelStorei(l.UNPACK_ROW_LENGTH,t.width);for(let e=0,a=i.length;e<a;e++){let a=i[e],o=Math.floor(a.start/4),s=Math.ceil(a.count/4),c=o%t.width,u=Math.floor(o/t.width),f=s;d.pixelStorei(l.UNPACK_SKIP_PIXELS,c),d.pixelStorei(l.UNPACK_SKIP_ROWS,u),d.texSubImage2D(l.TEXTURE_2D,0,c,u,f,1,n,r,t.data)}e.clearUpdateRanges(),d.pixelStorei(l.UNPACK_ROW_LENGTH,o),d.pixelStorei(l.UNPACK_SKIP_PIXELS,s),d.pixelStorei(l.UNPACK_SKIP_ROWS,c)}}function Ce(e,t,n){let r=l.TEXTURE_2D;(t.isDataArrayTexture||t.isCompressedArrayTexture)&&(r=l.TEXTURE_2D_ARRAY),t.isData3DTexture&&(r=l.TEXTURE_3D);let i=be(e,t),a=t.source;d.bindTexture(r,e.__webglTexture,l.TEXTURE0+n);let o=f.get(a);if(a.version!==o.__version||i===!0){if(d.activeTexture(l.TEXTURE0+n),!(typeof ImageBitmap<`u`&&t.image instanceof ImageBitmap)){let e=gt.getPrimaries(gt.workingColorSpace),n=t.colorSpace===``?null:gt.getPrimaries(t.colorSpace),r=t.colorSpace===``||e===n?l.NONE:l.BROWSER_DEFAULT_WEBGL;d.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,t.flipY),d.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),d.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,r)}d.pixelStorei(l.UNPACK_ALIGNMENT,t.unpackAlignment);let e=O(t.image,!1,p.maxTextureSize);e=Fe(t,e);let s=m.convert(t.format,t.colorSpace),c=m.convert(t.type),u=M(t.internalFormat,s,c,t.normalized,t.colorSpace,t.isVideoTexture);ye(r,t);let f,h=t.mipmaps,g=t.isVideoTexture!==!0,_=o.__version===void 0||i===!0,v=a.dataReady,y=P(t,e);if(t.isDepthTexture)u=N(t.format===E,t.type),_&&(g?d.texStorage2D(l.TEXTURE_2D,1,u,e.width,e.height):d.texImage2D(l.TEXTURE_2D,0,u,e.width,e.height,0,s,c,null));else if(t.isDataTexture){if(h.length>0){g&&_&&d.texStorage2D(l.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let e=0,t=h.length;e<t;e++)f=h[e],g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,c,f.data):d.texImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,s,c,f.data);t.generateMipmaps=!1}else g?(_&&d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height),v&&Se(t,e,s,c)):d.texImage2D(l.TEXTURE_2D,0,u,e.width,e.height,0,s,c,e.data)}else if(t.isCompressedTexture){if(t.isCompressedArrayTexture){g&&_&&d.texStorage3D(l.TEXTURE_2D_ARRAY,y,u,h[0].width,h[0].height,e.depth);for(let n=0,r=h.length;n<r;n++)if(f=h[n],t.format!==1023){if(s!==null){if(g){if(v){if(t.layerUpdates.size>0){let e=Ka(f.width,f.height,t.format,t.type);for(let r of t.layerUpdates){let t=f.data.subarray(r*e/f.data.BYTES_PER_ELEMENT,(r+1)*e/f.data.BYTES_PER_ELEMENT);d.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,r,f.width,f.height,1,s,t)}}else d.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,0,f.width,f.height,e.depth,s,f.data)}}else d.compressedTexImage3D(l.TEXTURE_2D_ARRAY,n,u,f.width,f.height,e.depth,0,f.data,0,0)}else H(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else g?v&&d.texSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,0,f.width,f.height,e.depth,s,c,f.data):d.texImage3D(l.TEXTURE_2D_ARRAY,n,u,f.width,f.height,e.depth,0,s,c,f.data);t.layerUpdates.size>0&&t.clearLayerUpdates()}else{g&&_&&d.texStorage2D(l.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let e=0,n=h.length;e<n;e++)f=h[e],t.format===1023?g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,c,f.data):d.texImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,s,c,f.data):s===null?H(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):g?v&&d.compressedTexSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,f.data):d.compressedTexImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,f.data)}}else if(t.isDataArrayTexture){if(g){if(_&&d.texStorage3D(l.TEXTURE_2D_ARRAY,y,u,e.width,e.height,e.depth),v){if(t.layerUpdates.size>0){let n=Ka(e.width,e.height,t.format,t.type);for(let r of t.layerUpdates){let t=e.data.subarray(r*n/e.data.BYTES_PER_ELEMENT,(r+1)*n/e.data.BYTES_PER_ELEMENT);d.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,r,e.width,e.height,1,s,c,t)}t.clearLayerUpdates()}else d.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,0,e.width,e.height,e.depth,s,c,e.data)}}else d.texImage3D(l.TEXTURE_2D_ARRAY,0,u,e.width,e.height,e.depth,0,s,c,e.data)}else if(t.isData3DTexture)g?(_&&d.texStorage3D(l.TEXTURE_3D,y,u,e.width,e.height,e.depth),v&&d.texSubImage3D(l.TEXTURE_3D,0,0,0,0,e.width,e.height,e.depth,s,c,e.data)):d.texImage3D(l.TEXTURE_3D,0,u,e.width,e.height,e.depth,0,s,c,e.data);else if(t.isFramebufferTexture){if(_){if(g)d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height);else{let t=e.width,n=e.height;for(let e=0;e<y;e++)d.texImage2D(l.TEXTURE_2D,e,u,t,n,0,s,c,null),t>>=1,n>>=1}}}else if(t.isHTMLTexture){if(`texElementImage2D`in l){let n=l.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),e.parentNode!==n){n.appendChild(e),b.add(t),n.onpaint=e=>{let t=e.changedElements;for(let e of b)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(l.texElementImage2D.length===3)l.texElementImage2D(l.TEXTURE_2D,l.RGBA8,e);else{let t=l.RGBA,n=l.RGBA,r=l.UNSIGNED_BYTE;l.texElementImage2D(l.TEXTURE_2D,0,t,n,r,e)}l.texParameteri(l.TEXTURE_2D,l.TEXTURE_MIN_FILTER,l.LINEAR),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_S,l.CLAMP_TO_EDGE),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_T,l.CLAMP_TO_EDGE)}}else if(h.length>0){if(g&&_){let e=V(h[0]);d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height)}for(let e=0,t=h.length;e<t;e++)f=h[e],g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,s,c,f):d.texImage2D(l.TEXTURE_2D,e,u,s,c,f);t.generateMipmaps=!1}else if(g){if(_){let t=V(e);d.texStorage2D(l.TEXTURE_2D,y,u,t.width,t.height)}v&&d.texSubImage2D(l.TEXTURE_2D,0,0,0,s,c,e)}else d.texImage2D(l.TEXTURE_2D,0,u,s,c,e);k(t)&&t.mipmapsAutoUpdate===!0&&A(r),o.__version=a.version,t.onUpdate&&t.onUpdate(t)}e.__version=t.version}function we(e,t,n){if(t.image.length!==6)return;let r=be(e,t),i=t.source;d.bindTexture(l.TEXTURE_CUBE_MAP,e.__webglTexture,l.TEXTURE0+n);let a=f.get(i);if(i.version!==a.__version||r===!0){d.activeTexture(l.TEXTURE0+n);let e=gt.getPrimaries(gt.workingColorSpace),o=t.colorSpace===``?null:gt.getPrimaries(t.colorSpace),s=t.colorSpace===``||e===o?l.NONE:l.BROWSER_DEFAULT_WEBGL;d.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,t.flipY),d.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),d.pixelStorei(l.UNPACK_ALIGNMENT,t.unpackAlignment),d.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,s);let c=t.isCompressedTexture||t.image[0].isCompressedTexture,u=t.image[0]&&t.image[0].isDataTexture,f=[];for(let e=0;e<6;e++)!c&&!u?f[e]=O(t.image[e],!0,p.maxCubemapSize):f[e]=u?t.image[e].image:t.image[e],f[e]=Fe(t,f[e]);let h=f[0],g=m.convert(t.format,t.colorSpace),_=m.convert(t.type),v=M(t.internalFormat,g,_,t.normalized,t.colorSpace),y=t.isVideoTexture!==!0,b=a.__version===void 0||r===!0,x=i.dataReady,S=P(t,h);ye(l.TEXTURE_CUBE_MAP,t);let C;if(t.isDepthTexture){if(v=N(t.format===E,t.type),b){if(y)d.texStorage2D(l.TEXTURE_CUBE_MAP,1,v,h.width,h.height);else for(let e=0;e<6;e++)d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,h.width,h.height,0,g,_,null)}}else if(c){y&&b&&d.texStorage2D(l.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let e=0;e<6;e++){C=f[e].mipmaps;for(let n=0;n<C.length;n++){let r=C[n];t.format===1023?y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,0,0,r.width,r.height,g,_,r.data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,v,r.width,r.height,0,g,_,r.data):g===null?H(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&d.compressedTexSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,0,0,r.width,r.height,g,r.data):d.compressedTexImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,v,r.width,r.height,0,r.data)}}}else{if(C=t.mipmaps,y&&b){C.length>0&&S++;let e=V(f[0]);d.texStorage2D(l.TEXTURE_CUBE_MAP,S,v,e.width,e.height)}for(let e=0;e<6;e++)if(u){y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,f[e].width,f[e].height,g,_,f[e].data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,f[e].width,f[e].height,0,g,_,f[e].data);for(let t=0;t<C.length;t++){let n=C[t].image[e].image;y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,0,0,n.width,n.height,g,_,n.data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,v,n.width,n.height,0,g,_,n.data)}}else{y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,g,_,f[e]):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,g,_,f[e]);for(let t=0;t<C.length;t++){let n=C[t];y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,0,0,g,_,n.image[e]):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,v,g,_,n.image[e])}}}k(t)&&t.mipmapsAutoUpdate===!0&&A(l.TEXTURE_CUBE_MAP),a.__version=i.version,t.onUpdate&&t.onUpdate(t)}e.__version=t.version}function Te(e,t,n,r,i,a){let o=m.convert(n.format,n.colorSpace),s=m.convert(n.type),c=M(n.internalFormat,o,s,n.normalized,n.colorSpace),u=f.get(t),p=f.get(n);if(p.__renderTarget=t,!u.__hasExternalTextures){let e=Math.max(1,t.width>>a),n=Math.max(1,t.height>>a);i===l.TEXTURE_3D||i===l.TEXTURE_2D_ARRAY?d.texImage3D(i,a,c,e,n,t.depth,0,o,s,null):d.texImage2D(i,a,c,e,n,0,o,s,null)}d.bindFramebuffer(l.FRAMEBUFFER,e),B(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,r,i,p.__webglTexture,0,Ne(t)):(i===l.TEXTURE_2D||i>=l.TEXTURE_CUBE_MAP_POSITIVE_X&&i<=l.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&l.framebufferTexture2D(l.FRAMEBUFFER,r,i,p.__webglTexture,a),d.bindFramebuffer(l.FRAMEBUFFER,null)}function Ee(e,t,n){if(l.bindRenderbuffer(l.RENDERBUFFER,e),t.depthBuffer){let r=t.depthTexture,i=r&&r.isDepthTexture?r.type:null,a=N(t.stencilBuffer,i),o=t.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;B(t)?g.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,Ne(t),a,t.width,t.height):n?l.renderbufferStorageMultisample(l.RENDERBUFFER,Ne(t),a,t.width,t.height):l.renderbufferStorage(l.RENDERBUFFER,a,t.width,t.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,o,l.RENDERBUFFER,e)}else{let e=t.textures;for(let r=0;r<e.length;r++){let i=e[r],a=m.convert(i.format,i.colorSpace),o=m.convert(i.type),s=M(i.internalFormat,a,o,i.normalized,i.colorSpace);B(t)?g.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,Ne(t),s,t.width,t.height):n?l.renderbufferStorageMultisample(l.RENDERBUFFER,Ne(t),s,t.width,t.height):l.renderbufferStorage(l.RENDERBUFFER,s,t.width,t.height)}}l.bindRenderbuffer(l.RENDERBUFFER,null)}function De(e,t,n){let r=t.isWebGLCubeRenderTarget===!0;if(d.bindFramebuffer(l.FRAMEBUFFER,e),!(t.depthTexture&&t.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let i=f.get(t.depthTexture);i.__renderTarget=t;let a=r?t.depthTexture.image[0]:t.depthTexture.image;i.__webglTexture&&a.width===t.width&&a.height===t.height||(a.width=t.width,a.height=t.height,t.depthTexture.needsUpdate=!0),r?ge(t.depthTexture,0):pe(t.depthTexture,0);let o=i.__webglTexture,s=Ne(t),c=r?l.TEXTURE_CUBE_MAP_POSITIVE_X+n:l.TEXTURE_2D,u=t.depthTexture.format===1027?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;if(t.depthTexture.format===1026)B(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,u,c,o,0,s):l.framebufferTexture2D(l.FRAMEBUFFER,u,c,o,0);else if(t.depthTexture.format===1027)B(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,u,c,o,0,s):l.framebufferTexture2D(l.FRAMEBUFFER,u,c,o,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function Oe(e){let t=f.get(e),n=e.isWebGLCubeRenderTarget===!0;if(t.__boundDepthTexture!==e.depthTexture){let n=e.depthTexture;if(t.__depthDisposeCallback&&t.__depthDisposeCallback(),n){let e=()=>{delete t.__boundDepthTexture,delete t.__depthDisposeCallback,n.removeEventListener(`dispose`,e)};n.addEventListener(`dispose`,e),t.__depthDisposeCallback=e}t.__boundDepthTexture=n}if(e.depthTexture&&!t.__autoAllocateDepthBuffer){if(n)for(let n=0;n<6;n++)De(t.__webglFramebuffer[n],e,n);else e.texture.mipmaps.length>0?De(t.__webglFramebuffer[0],e,0):De(t.__webglFramebuffer,e,0)}else if(n){t.__webglDepthbuffer=[];for(let n=0;n<6;n++)if(d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer[n]),t.__webglDepthbuffer[n]===void 0)t.__webglDepthbuffer[n]=l.createRenderbuffer(),Ee(t.__webglDepthbuffer[n],e,!1);else{let r=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,i=t.__webglDepthbuffer[n];l.bindRenderbuffer(l.RENDERBUFFER,i),l.framebufferRenderbuffer(l.FRAMEBUFFER,r,l.RENDERBUFFER,i)}}else if(e.texture.mipmaps.length>0?d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer[0]):d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer),t.__webglDepthbuffer===void 0)t.__webglDepthbuffer=l.createRenderbuffer(),Ee(t.__webglDepthbuffer,e,!1);else{let n=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,r=t.__webglDepthbuffer;l.bindRenderbuffer(l.RENDERBUFFER,r),l.framebufferRenderbuffer(l.FRAMEBUFFER,n,l.RENDERBUFFER,r)}d.bindFramebuffer(l.FRAMEBUFFER,null)}function ke(e,t,n){let r=f.get(e);t!==void 0&&Te(r.__webglFramebuffer,e,e.texture,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,0),n!==void 0&&Oe(e)}function Ae(e){let t=e.texture,n=f.get(e),r=f.get(t);e.addEventListener(`dispose`,I),ee(e);let i=e.textures,a=e.isWebGLCubeRenderTarget===!0,o=i.length>1;if(o||(r.__webglTexture===void 0&&(r.__webglTexture=l.createTexture()),r.__version=t.version,h.memory.textures++),a){n.__webglFramebuffer=[];for(let e=0;e<6;e++)if(t.mipmaps.length>0){n.__webglFramebuffer[e]=[];for(let r=0;r<t.mipmaps.length;r++)n.__webglFramebuffer[e][r]=l.createFramebuffer()}else n.__webglFramebuffer[e]=l.createFramebuffer()}else{if(t.mipmaps.length>0){n.__webglFramebuffer=[];for(let e=0;e<t.mipmaps.length;e++)n.__webglFramebuffer[e]=l.createFramebuffer()}else n.__webglFramebuffer=l.createFramebuffer();if(o)for(let e=0,t=i.length;e<t;e++){let t=f.get(i[e]);t.__webglTexture===void 0&&(t.__webglTexture=l.createTexture(),h.memory.textures++)}if(e.samples>0&&B(e)===!1){n.__webglMultisampledFramebuffer=l.createFramebuffer(),n.__webglColorRenderbuffer=[],d.bindFramebuffer(l.FRAMEBUFFER,n.__webglMultisampledFramebuffer);for(let t=0;t<i.length;t++){let r=i[t];n.__webglColorRenderbuffer[t]=l.createRenderbuffer(),l.bindRenderbuffer(l.RENDERBUFFER,n.__webglColorRenderbuffer[t]);let a=m.convert(r.format,r.colorSpace),o=m.convert(r.type),s=M(r.internalFormat,a,o,r.normalized,r.colorSpace,e.isXRRenderTarget===!0),c=Ne(e);l.renderbufferStorageMultisample(l.RENDERBUFFER,c,s,e.width,e.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+t,l.RENDERBUFFER,n.__webglColorRenderbuffer[t])}l.bindRenderbuffer(l.RENDERBUFFER,null),e.depthBuffer&&(n.__webglDepthRenderbuffer=l.createRenderbuffer(),Ee(n.__webglDepthRenderbuffer,e,!0)),d.bindFramebuffer(l.FRAMEBUFFER,null)}}if(a){d.bindTexture(l.TEXTURE_CUBE_MAP,r.__webglTexture),ye(l.TEXTURE_CUBE_MAP,t);for(let r=0;r<6;r++)if(t.mipmaps.length>0)for(let i=0;i<t.mipmaps.length;i++)Te(n.__webglFramebuffer[r][i],e,t,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+r,i);else Te(n.__webglFramebuffer[r],e,t,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+r,0);k(t)?A(l.TEXTURE_CUBE_MAP):t.mipmaps.length>0&&l.texParameteri(l.TEXTURE_CUBE_MAP,l.TEXTURE_MAX_LEVEL,t.mipmaps.length-1),d.unbindTexture()}else if(o){for(let t=0,r=i.length;t<r;t++){let r=i[t],a=f.get(r),o=l.TEXTURE_2D;(e.isWebGL3DRenderTarget||e.isWebGLArrayRenderTarget)&&(o=e.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),d.bindTexture(o,a.__webglTexture),ye(o,r),Te(n.__webglFramebuffer,e,r,l.COLOR_ATTACHMENT0+t,o,0),k(r)&&A(o)}d.unbindTexture()}else{let i=l.TEXTURE_2D;if((e.isWebGL3DRenderTarget||e.isWebGLArrayRenderTarget)&&(i=e.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),d.bindTexture(i,r.__webglTexture),ye(i,t),t.mipmaps.length>0)for(let r=0;r<t.mipmaps.length;r++)Te(n.__webglFramebuffer[r],e,t,l.COLOR_ATTACHMENT0,i,r);else Te(n.__webglFramebuffer,e,t,l.COLOR_ATTACHMENT0,i,0);k(t)?A(i):t.mipmaps.length>0&&l.texParameteri(i,l.TEXTURE_MAX_LEVEL,t.mipmaps.length-1),d.unbindTexture()}e.depthBuffer&&Oe(e)}function z(e){let t=e.textures;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(k(r)&&r.mipmapsAutoUpdate===!0){let t=j(e),n=f.get(r).__webglTexture;d.bindTexture(t,n),A(t),d.unbindTexture()}}}let je=[];function Me(e){if(e.samples>0){if(B(e)===!1){let t=e.textures,n=e.width,r=e.height,i=l.COLOR_BUFFER_BIT,a=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,o=f.get(e),s=t.length>1;if(s)for(let e=0;e<t.length;e++)d.bindFramebuffer(l.FRAMEBUFFER,o.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.RENDERBUFFER,null),d.bindFramebuffer(l.FRAMEBUFFER,o.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.TEXTURE_2D,null,0);d.bindFramebuffer(l.READ_FRAMEBUFFER,o.__webglMultisampledFramebuffer),e.texture.mipmaps.length>0?d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglFramebuffer[0]):d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglFramebuffer);for(let c=0;c<t.length;c++){if(e.resolveDepthBuffer&&(e.depthBuffer&&(i|=l.DEPTH_BUFFER_BIT),e.stencilBuffer&&e.resolveStencilBuffer&&(i|=l.STENCIL_BUFFER_BIT)),s){l.framebufferRenderbuffer(l.READ_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.RENDERBUFFER,o.__webglColorRenderbuffer[c]);let e=f.get(t[c]).__webglTexture;l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,e,0)}l.blitFramebuffer(0,0,n,r,0,0,n,r,i,l.NEAREST),_===!0&&(je.length=0,je.push(l.COLOR_ATTACHMENT0+c),e.depthBuffer&&e.storeMultisampledDepthBuffer===!1&&je.push(a),l.invalidateFramebuffer(l.READ_FRAMEBUFFER,je))}if(d.bindFramebuffer(l.READ_FRAMEBUFFER,null),d.bindFramebuffer(l.DRAW_FRAMEBUFFER,null),s)for(let e=0;e<t.length;e++){d.bindFramebuffer(l.FRAMEBUFFER,o.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.RENDERBUFFER,o.__webglColorRenderbuffer[e]);let n=f.get(t[e]).__webglTexture;d.bindFramebuffer(l.FRAMEBUFFER,o.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.TEXTURE_2D,n,0)}d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglMultisampledFramebuffer)}else if(e.depthBuffer&&e.storeMultisampledDepthBuffer===!1&&_){let t=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;l.invalidateFramebuffer(l.DRAW_FRAMEBUFFER,[t])}}}function Ne(e){return Math.min(p.maxSamples,e.samples)}function B(e){let t=f.get(e);return e.samples>0&&u.has(`WEBGL_multisampled_render_to_texture`)===!0&&t.__useRenderToTexture!==!1}function Pe(e){let t=h.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function Fe(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(gt.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&H(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):U(`WebGLTextures: Unsupported texture color space:`,n)),t}function V(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(v.width=e.naturalWidth||e.width,v.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(v.width=e.displayWidth,v.height=e.displayHeight):(v.width=e.width,v.height=e.height),v}this.allocateTextureUnit=de,this.resetTextureUnits=ce,this.getTextureUnits=le,this.setTextureUnits=ue,this.setTexture2D=pe,this.setTexture2DArray=me,this.setTexture3D=he,this.setTextureCube=ge,this.rebindTextures=ke,this.setupRenderTarget=Ae,this.updateRenderTargetMipmap=z,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=B,this.dispose=ie}function qc(e,t){function n(n,r=``){let i,a=gt.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var Jc=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Yc=`
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

}`,Xc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new xi(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Li({vertexShader:Jc,fragmentShader:Yc,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ei(new Di(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Zc=class extends Ze{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,u=null,d=null,f=null,p=null,h=null,g=typeof XRWebGLBinding<`u`,_=new Xc,v={},b=t.getContextAttributes(),x=null,S=null,C=[],D=[],O=new W,k=null,A=null,j=new Sa;j.viewport=new Dt;let M=new Sa;M.viewport=new Dt;let N=[j,M],P=new ka,ee=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=C[e];return t===void 0&&(t=new ln,C[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=C[e];return t===void 0&&(t=new ln,C[e]=t),t.getGripSpace()},this.getHand=function(e){let t=C[e];return t===void 0&&(t=new ln,C[e]=t),t.getHandSpace()};function te(e){let t=D.indexOf(e.inputSource);if(t===-1)return;let n=C[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function I(){r.removeEventListener(`select`,te),r.removeEventListener(`selectstart`,te),r.removeEventListener(`selectend`,te),r.removeEventListener(`squeeze`,te),r.removeEventListener(`squeezestart`,te),r.removeEventListener(`squeezeend`,te),r.removeEventListener(`end`,I),r.removeEventListener(`inputsourceschange`,ne);for(let e=0;e<C.length;e++){let t=D[e];t!==null&&(D[e]=null,C[e].disconnect(t))}ee=null,F=null,_.reset();for(let e in v)delete v[e];if(e.setRenderTarget(x),p=null,f=null,d=null,r=null,S=null,L.stop(),n.isPresenting=!1,e.setPixelRatio(k),e.setSize(O.width,O.height,!1),A!==null){let e=A.camera;e.fov=A.fov,e.zoom=A.zoom,e.updateProjectionMatrix(),A=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&H(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&H(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return f===null?p:f},this.getBinding=function(){return d===null&&g&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return h},this.getSession=function(){return r},this.setSession=async function(u){if(r=u,r!==null){if(x=e.getRenderTarget(),r.addEventListener(`select`,te),r.addEventListener(`selectstart`,te),r.addEventListener(`selectend`,te),r.addEventListener(`squeeze`,te),r.addEventListener(`squeezestart`,te),r.addEventListener(`squeezeend`,te),r.addEventListener(`end`,I),r.addEventListener(`inputsourceschange`,ne),b.xrCompatible!==!0&&await t.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(O),g&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;b.depth&&(o=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=b.stencil?E:T,a=b.stencil?y:m);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};d=this.getBinding(),f=d.createProjectionLayer(s),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new kt(f.textureWidth,f.textureHeight,{format:w,type:l,depthTexture:new yi(f.textureWidth,f.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let n={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:i};p=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new kt(p.framebufferWidth,p.framebufferHeight,{format:w,type:l,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),L.setContext(r),L.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function ne(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=D.indexOf(n);r>=0&&(D[r]=null,C[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=D.indexOf(n);if(r===-1){for(let e=0;e<C.length;e++)if(e>=D.length){D.push(n),r=e;break}else if(D[e]===null){D[e]=n,r=e;break}if(r===-1)break}let i=C[r];i&&i.connect(n)}}function re(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;_.texture!==null&&(_.depthNear>0&&(t=_.depthNear),_.depthFar>0&&(n=_.depthFar)),P.near=M.near=j.near=t,P.far=M.far=j.far=n,(ee!==P.near||F!==P.far)&&(r.updateRenderState({depthNear:P.near,depthFar:P.far}),ee=P.near,F=P.far),P.layers.mask=e.layers.mask|6,j.layers.mask=P.layers.mask&-5,M.layers.mask=P.layers.mask&-3;let i=e.parent,a=P.cameras;re(P,i);for(let e=0;e<a.length;e++)re(a[e],i);P.projectionMatrix.copy(j.projectionMatrix),P.projectionMatrixInverse.copy(j.projectionMatrixInverse),A===null&&e.isPerspectiveCamera&&(A={camera:e,fov:e.fov,zoom:e.zoom}),ie(e,P,i)};function ie(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=et*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(f!==null||p!==null)return s},this.setFoveation=function(e){s=e,f!==null&&(f.fixedFoveation=e),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=e)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(P)},this.getCameraTexture=function(e){return v[e]};let ae=null;function oe(t,i){if(u=i.getViewerPose(c||a),h=i,u!==null){let t=u.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let i=!1;t.length!==P.cameras.length&&(P.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(p!==null)a=p.getViewport(r);else{let t=d.getViewSubImage(f,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(S,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(S))}let o=N[n];o===void 0&&(o=new Sa,o.layers.enable(n),o.viewport=new Dt,N[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(P.matrix.copy(o.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),i===!0&&P.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&g){d=n.getBinding();let e=d.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&_.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&g){e.state.unbindTexture(),d=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=v[n];e||(e=new xi,v[n]=e);let t=d.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<C.length;e++){let t=D[e],n=C[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}ae&&ae(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),h=null}let L=new Ja;L.setAnimationLoop(oe),this.setAnimationLoop=function(e){ae=e},this.dispose=function(){}}},Qc=new Mt,$c=new K;$c.set(-1,0,0,0,1,0,0,0,1);function el(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Ni(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(Qc.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply($c),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.diffuseRoughness>0&&(e.diffuseRoughness.value=t.diffuseRoughness,t.diffuseRoughnessMap&&(e.diffuseRoughnessMap.value=t.diffuseRoughnessMap,n(t.diffuseRoughnessMap,e.diffuseRoughnessMapTransform))),t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessMinimum,e.iridescenceThicknessMaximum.value=t.iridescenceThicknessMaximum,t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function tl(e,t,n,r){let i={},a={};function o(e,t){let n=t.program;r.uniformBlockBinding(e,n,i[e.id])}function s(e,n){let o=i[e.id];o===void 0&&(m(e),o=c(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let u=t.render.frame;a[e.id]!==u&&(l(e),a[e.id]=u)}function c(t){let n=e.createBuffer(),r=t.__size,i=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,n),e.bufferData(e.UNIFORM_BUFFER,r,i),e.bindBuffer(e.UNIFORM_BUFFER,null),n}function l(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)u(t[n],e,n,a);else u(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function u(t,n,r,i){if(f(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=h(i,!0);d(i,t.__data,e),e+=a.storage/Float32Array.BYTES_PER_ELEMENT}}else d(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function d(e,t,n){typeof e==`number`||typeof e==`boolean`?t[n]=e:e.isMatrix3?(t[n]=e.elements[0],t[n+1]=e.elements[1],t[n+2]=e.elements[2],t[n+3]=0,t[n+4]=e.elements[3],t[n+5]=e.elements[4],t[n+6]=e.elements[5],t[n+7]=0,t[n+8]=e.elements[6],t[n+9]=e.elements[7],t[n+10]=e.elements[8],t[n+11]=0):ArrayBuffer.isView(e)?t.set(e.subarray(0,t.length-n),n):e.toArray(t,n)}function f(e,t,n,r){let i=e.value,a=t+`_`+n;if(Array.isArray(i)){r[a]===void 0&&(r[a]=[]);let e=r[a],t=!1;for(let n=0;n<i.length;n++)p(i[n],e,n)===!0&&(t=!0);return t}return p(i,r,a)}function p(e,t,n){if(t[n]===void 0)return t[n]=typeof e==`number`||typeof e==`boolean`?e:ArrayBuffer.isView(e)?e.slice():e.clone(),!0;{let r=t[n];if(typeof e==`number`||typeof e==`boolean`){if(r!==e)return t[n]=e,!0}else if(ArrayBuffer.isView(e))return!0;else if(r.equals(e)===!1)return r.copy(e),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let i=0,a=r.length;i<a;i++){let a=r[i],o=Array.isArray(a.value)?a.value:[a.value],s=Array.isArray(t[e])||Array.isArray(a.value),c=n;for(let e=0,t=o.length;e<t;e++){let t=o[e],r=h(t,s),i=n%16,a=i%r.boundary,l=i+a;n+=a,l!==0&&16-l<r.storage&&(n+=16-l),e===0&&(c=n),n+=r.storage}a.__data=new(a.type===`int`?Int32Array:a.type===`uint`?Uint32Array:Float32Array)((n-c)/Float32Array.BYTES_PER_ELEMENT),a.__offset=c}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e,t){let n={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(n.boundary=4,n.storage=4):e.isVector2?(n.boundary=8,n.storage=8):e.isVector3||e.isColor?(n.boundary=16,n.storage=12):e.isVector4?(n.boundary=16,n.storage=16):e.isMatrix3?(n.boundary=16,n.storage=48):e.isMatrix4?(n.boundary=16,n.storage=64):e.isTexture?H(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(n.boundary=16,n.storage=e.byteLength):H(`WebGLRenderer: Unsupported uniform value type.`,e),t===!0&&(n.boundary=16,n.storage=Math.ceil(n.storage/16)*16),n}function g(t){let n=t.target;n.removeEventListener(`dispose`,g),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);i={},a={}}return{bind:o,update:s,dispose:_}}var nl=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),rl=null;function il(){return rl===null&&(rl=new ri(nl,16,16,k,g),rl.name=`DFG_LUT`,rl.minFilter=o,rl.magFilter=o,rl.wrapS=t,rl.wrapT=t,rl.generateMipmaps=!1,rl.needsUpdate=!0),rl}var al=class{constructor(e={}){let{canvas:t=We(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:u=!1,powerPreference:d=`default`,failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:h=!1,outputBufferType:b=l}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);x=n.getContextAttributes().alpha}else x=a;let S=b,C=new Set([j,A,O]),w=new Set([l,m,f,y,_,v]),T=new Uint32Array(4),E=new Int32Array(4),D={textures:[],min:[],max:[],resolution:[]},k=null,M=null,N=[],P=[],ee=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let F=this,te=!1,I=null,ne=null,re=null,ie=null;this._outputColorSpace=Fe;let ae=0,oe=0,L=null,se=-1,ce=null,le=new Dt,ue=new Dt,de=null,fe=new q(0),pe=0,me=t.width,he=t.height,ge=1,_e=null,ve=null,R=new Dt(0,0,me,he),ye=new Dt(0,0,me,he),be=!1,xe=new si,Se=new li,Ce=!1,we=!1,Te=new Mt,Ee=new G,De=new Dt,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ke=!1;function Ae(){return L===null?ge:1}let z=n;function je(e,n){return t.getContext(e,n)}let Me,Ne,B,Pe,V,Ie,Le,Re,ze,Ve,He,Ue,Ge,qe,Je,Xe,Ze,Qe,$e,et,tt,nt,rt;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:p};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r187`),t.addEventListener(`webglcontextlost`,ot,!1),t.addEventListener(`webglcontextrestored`,st,!1),t.addEventListener(`webglcontextcreationerror`,ct,!1),z===null){let t=`webgl2`;if(z=je(t,e),z===null)throw je(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}it()}catch(e){throw t.removeEventListener(`webglcontextlost`,ot,!1),t.removeEventListener(`webglcontextrestored`,st,!1),t.removeEventListener(`webglcontextcreationerror`,ct,!1),U(`WebGLRenderer: `+e.message),e}function it(){Me=new To(z),Me.init(),tt=new qc(z,Me),Ne=new io(z,Me,e,tt),B=new Gc(z,Me),Ne.reversedDepthBuffer&&h&&B.buffers.depth.setReversed(!0),ne=z.createFramebuffer(),re=z.createFramebuffer(),ie=z.createFramebuffer(),Pe=new Oo(z),V=new Tc,Ie=new Kc(z,Me,B,V,Ne,tt,Pe),Le=new wo(F),Re=new Ya(z),nt=new no(z,Re),ze=new Eo(z,Re,Pe,nt),Ve=new Ao(z,ze,Re,nt,Pe),Qe=new ko(z,Ne,Ie),Je=new ao(V),He=new wc(F,Le,Me,Ne,nt,Je),Ue=new el(F,V),Ge=new kc,qe=new Ic(Me),Ze=new to(F,Le,B,Ve,x,s),Xe=new Wc(F,Ve,Ne),rt=new tl(z,Pe,Ne,B),$e=new ro(z,Me,Pe),et=new Do(z,Me,Pe),Pe.programs=He.programs,F.capabilities=Ne,F.extensions=Me,F.properties=V,F.renderLists=Ge,F.shadowMap=Xe,F.state=B,F.info=Pe}S!==1009&&(ee=new Mo(S,t.width,t.height,o,r,i));let at=new Zc(F,z);this.xr=at,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let e=Me.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Me.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return ge},this.setPixelRatio=function(e){e!==void 0&&(ge=e,this.setSize(me,he,!1))},this.getSize=function(e){return e.set(me,he)},this.setSize=function(e,n,r=!0){at.isPresenting?H(`WebGLRenderer: Can't change size while VR device is presenting.`):(me=e,he=n,t.width=Math.floor(e*ge),t.height=Math.floor(n*ge),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),ee!==null&&ee.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(me*ge,he*ge).floor()},this.setDrawingBufferSize=function(e,n,r){me=e,he=n,ge=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(S===1009)U(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){H(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}ee.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(le)},this.getViewport=function(e){return e.copy(R)},this.setViewport=function(e,t,n,r){e.isVector4?R.set(e.x,e.y,e.z,e.w):R.set(e,t,n,r),B.viewport(le.copy(R).multiplyScalar(Ae()).round())},this.getScissor=function(e){return e.copy(ye)},this.setScissor=function(e,t,n,r){e.isVector4?ye.set(e.x,e.y,e.z,e.w):ye.set(e,t,n,r),B.scissor(ue.copy(ye).multiplyScalar(Ae()).round())},this.getScissorTest=function(){return be},this.setScissorTest=function(e){B.setScissorTest(be=e)},this.setOpaqueSort=function(e){_e=e},this.setTransparentSort=function(e){ve=e},this.getClearColor=function(e){return e.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor(...arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(L!==null){let t=L.texture.format;e=C.has(t)}if(e){let e=L.texture.type,t=w.has(e),n=Ze.getClearColor(),r=Ze.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(T[0]=i,T[1]=a,T[2]=o,T[3]=r,z.clearBufferuiv(z.COLOR,0,T)):(E[0]=i,E[1]=a,E[2]=o,E[3]=r,z.clearBufferiv(z.COLOR,0,E))}else r|=z.COLOR_BUFFER_BIT}t&&(r|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&z.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),I=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,ot,!1),t.removeEventListener(`webglcontextrestored`,st,!1),t.removeEventListener(`webglcontextcreationerror`,ct,!1),Ze.dispose(),Ge.dispose(),qe.dispose(),Ie.dispose(),V.dispose(),Le.dispose(),Ve.dispose(),ze.dispose(),nt.dispose(),rt.dispose(),He.dispose(),at.dispose(),at.removeEventListener(`sessionstart`,pt),at.removeEventListener(`sessionend`,mt),ht.stop()};function ot(e){e.preventDefault(),Ke(`WebGLRenderer: Context Lost.`),te=!0}function st(){Ke(`WebGLRenderer: Context Restored.`),te=!1;let e=Pe.autoReset,t=Xe.enabled,n=Xe.autoUpdate,r=Xe.needsUpdate,i=Xe.type;it(),Pe.autoReset=e,Xe.enabled=t,Xe.autoUpdate=n,Xe.needsUpdate=r,Xe.type=i}function ct(e){U(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function W(e){let t=e.target;t.removeEventListener(`dispose`,W),lt(t)}function lt(e){ut(e),V.remove(e)}function ut(e){let t=V.get(e).programs;t!==void 0&&(t.forEach(function(e){He.releaseProgram(e)}),e.isShaderMaterial&&He.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Oe);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=Ot(e,t,n,r,i);B.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=ze.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;nt.setup(i,r,s,n,c);let h,g=$e;if(c!==null&&(h=Re.get(c),g=et,g.setIndex(h)),i.isMesh)r.wireframe===!0?(B.setLineWidth(r.wireframeLinewidth*Ae()),g.setMode(z.LINES)):g.setMode(z.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),B.setLineWidth(e*Ae()),i.isLineSegments?g.setMode(z.LINES):i.isLineLoop?g.setMode(z.LINE_LOOP):g.setMode(z.LINE_STRIP)}else i.isPoints?g.setMode(z.POINTS):i.isSprite&&g.setMode(z.TRIANGLES);if(i.isBatchedMesh){if(Me.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Re.get(c).bytesPerElement:1,o=V.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(z,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function dt(e,t,n,r){I!==null&&e.isNodeMaterial&&I.setObject(r,e),Ce===!0&&Je.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,Ct(e,t,r),e.side=0,e.needsUpdate=!0,Ct(e,t,r),e.side=2):Ct(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),I!==null&&I.renderStart(e,t,n),M=qe.get(n),M.init(t),P.push(M),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(M.pushLight(e),e.castShadow&&M.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(M.pushLight(e),e.castShadow&&M.pushShadow(e))}),M.setupLights(),I!==null&&I.updateLights(M.state.lightsArray),we=this.localClippingEnabled,Ce=Je.init(this.clippingPlanes,we),Ce===!0&&Je.setGlobalState(this.clippingPlanes,t),I!==null&&Xe.render(M.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];dt(o,n,t,e),r.add(o)}else dt(i,n,t,e),r.add(i)}}),M=P.pop(),I!==null&&I.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=V.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}Me.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let K=null;function ft(e){K&&K(e)}function pt(){ht.stop()}function mt(){ht.start()}let ht=new Ja;ht.setAnimationLoop(ft),typeof self<`u`&&ht.setContext(self),this.setAnimationLoop=function(e){K=e,at.setAnimationLoop(e),e===null?ht.stop():ht.start()},at.addEventListener(`sessionstart`,pt),at.addEventListener(`sessionend`,mt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){U(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(te===!0)return;I!==null&&I.renderStart(e,t);let n=at.enabled===!0&&at.isPresenting===!0,r=ee!==null&&(L===null||n)&&ee.begin(F,L);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),at.enabled===!0&&at.isPresenting===!0&&(ee===null||ee.isCompositing()===!1)&&(at.cameraAutoUpdate===!0&&at.updateCamera(t),t=at.getCamera()),e.isScene===!0&&e.onBeforeRender(F,e,t,L),M=qe.get(e,P.length),M.init(t),M.state.textureUnits=Ie.getTextureUnits(),P.push(M),Te.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),t.isArrayCamera?Se.setFromArrayCamera(t):xe.setFromProjectionMatrix(Te,Be,t.reversedDepth),we=this.localClippingEnabled,Ce=Je.init(this.clippingPlanes,we),k=Ge.get(e,N.length),k.init(),N.push(k),this.info.render.frame++,at.enabled===!0&&at.isPresenting===!0){let e=F.xr.getDepthSensingMesh();e!==null&&_t(e,t,-1/0,F.sortObjects)}_t(e,t,0,F.sortObjects),k.finish(),I!==null&&I.updateLights(M.state.lightsArray),F.sortObjects===!0&&k.sort(_e,ve),ke=at.enabled===!1||at.isPresenting===!1||at.hasDepthSensing()===!1,ke&&Ze.addToRenderList(k,e),this.info.autoReset===!0&&this.info.reset(),Ce===!0&&Je.beginShadows();let i=M.state.shadowsArray;if(Xe.render(i,e,t),Ce===!0&&Je.endShadows(),(r&&ee.hasRenderPass())===!1){let n=k.opaque,r=k.transmissive;if(M.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];yt(n,r,e,a)}ke&&Ze.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];vt(k,e,n,n.viewport)}}else r.length>0&&yt(n,r,e,t),ke&&Ze.render(e),vt(k,e,t)}L!==null&&oe===0&&(Ie.updateMultisampleRenderTarget(L),Ie.updateRenderTargetMipmap(L)),r&&ee.end(F),e.isScene===!0&&e.onAfterRender(F,e,t),nt.resetDefaultState(),se=-1,ce=null,P.pop(),P.length>0?(M=P[P.length-1],Ie.setTextureUnits(M.state.textureUnits),Ce===!0&&Je.setGlobalState(F.clippingPlanes,M.state.camera)):M=null,N.pop(),k=N.length>0?N[N.length-1]:null,I!==null&&I.renderEnd()};function _t(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)M.pushLight(e),e.castShadow&&M.pushShadow(e);else if(e.isSprite){let i=t.isArrayCamera?Se:xe;if(!e.frustumCulled||e.intersectsFrustum(i)){r&&De.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Te);let i=Ve.update(e),a=e.material;a.visible&&k.push(e,i,a,n,De.z,null,t)}}else if(e.isMesh||e.isLine||e.isPoints){let i=t.isArrayCamera?Se:xe;if(!e.frustumCulled||e.intersectsFrustum(i)){let i=Ve.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),De.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),De.copy(e.boundingSphere.center)),De.applyMatrix4(e.matrixWorld).applyMatrix4(Te)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&k.push(e,i,c,n,De.z,s,t)}}else a.visible&&k.push(e,i,a,n,De.z,null,t)}}}let i=e.children;for(let e=0,a=i.length;e<a;e++)_t(i[e],t,n,r)}function vt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;M.setupLightsView(n),Ce===!0&&Je.setGlobalState(F.clippingPlanes,n),r&&B.viewport(le.copy(r)),i.length>0&&bt(i,t,n),a.length>0&&bt(a,t,n),o.length>0&&bt(o,t,n),B.buffers.depth.setTest(!0),B.buffers.depth.setMask(!0),B.buffers.color.setMask(!0),B.setPolygonOffset(!1)}function yt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[r.id]===void 0){let e=Me.has(`EXT_color_buffer_half_float`)||Me.has(`EXT_color_buffer_float`);M.state.transmissionRenderTarget[r.id]=new kt(1,1,{generateMipmaps:!0,type:e?g:l,minFilter:c,samples:Math.max(4,Ne.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:gt.workingColorSpace})}let a=M.state.transmissionRenderTarget[r.id],o=r.viewport||le;a.setSize(o.z*F.transmissionResolutionScale,o.w*F.transmissionResolutionScale);let s=F.getRenderTarget(),u=F.getActiveCubeFace(),d=F.getActiveMipmapLevel();F.setRenderTarget(a),F.getClearColor(fe),pe=F.getClearAlpha(),pe<1&&F.setClearColor(16777215,.5),F.clear(),ke&&Ze.render(n);let f=F.toneMapping;F.toneMapping=0;let p=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),M.setupLightsView(r),Ce===!0&&Je.setGlobalState(F.clippingPlanes,r),bt(e,n,r),Ie.updateMultisampleRenderTarget(a),Ie.updateRenderTargetMipmap(a),Me.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,xt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(Ie.updateMultisampleRenderTarget(a),Ie.updateRenderTargetMipmap(a))}F.setRenderTarget(s,u,d),F.setClearColor(fe,pe),p!==void 0&&(r.viewport=p),F.toneMapping=f}function bt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&xt(o,t,n,s,l,c)}}function xt(e,t,n,r,i,a){I!==null&&i.isNodeMaterial&&I.setObject(e,i),e.onBeforeRender(F,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(F,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,F.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,F.renderBufferDirect(n,t,r,i,e,a),i.side=2):F.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(F,t,n,r,i,a)}function St(e){let t=0;for(let n of e)n.texture!==null&&t++;return t}function Ct(e,t,n){t.isScene!==!0&&(t=Oe);let r=V.get(e),i=M.state.lights,a=M.state.shadowsArray,o=i.state.version,s=He.getParameters(e,i.state,a,t,n,M.state.lightProbeGridArray),c=He.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Le.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,W),l=new Map,r.programs=l,r.programVariants=new Map);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return Et(e,s),d}else s.uniforms=He.getUniforms(e),I!==null&&e.isNodeMaterial&&I.build(e,n,s),e.onBeforeCompile(s,F),d=He.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Je.uniform),Et(e,s),r.needsLights=jt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.numLightProbeGrids=St(M.state.lightProbeGridArray),r.currentProgram=d,r.uniformsList=null,d}function wt(e,t,n,r,i){let a=V.get(e),o=a.currentProgram.id+`,`+r+`,`+i,s=a.programVariants.get(o);return s===void 0?(s=Ct(e,t,n),a.programVariants.set(o,s)):(a.currentProgram=s,a.uniformsList=null,a.outputColorSpace=r,a.toneMapping=i),s}function Tt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Vs.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function Et(e,t){let n=V.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function Ot(e,t,n,r,i){t.isScene!==!0&&(t=Oe),Ie.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=L===null?F.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:gt.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Le.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(h=F.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=V.get(r),y=M.state.lights;if(Ce===!0&&(we===!0||e!==ce)){let t=e===ce&&r.id===se;Je.setState(r,e,t)}let b=!1,x=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version||i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Je.numPlanes||v.numIntersection!==Je.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.morphTargetsCount===_&&v.numLightProbeGrids===St(M.state.lightProbeGridArray)?(v.outputColorSpace!==s||v.toneMapping!==h)&&(x=!0):b=!0:b=!0:(b=!0,v.__version=r.version);let S=v.currentProgram;(b===!0||x===!0)&&(S=x===!0?wt(r,t,i,s,h):Ct(r,t,i),I&&r.isNodeMaterial&&I.onUpdateProgram(r,S,v));let C=!1,w=!1,T=!1,E=S.getUniforms(),O=v.uniforms;if(B.useProgram(S.program)&&(C=!0,w=!0,T=!0),r.id!==se&&(se=r.id,w=!0),C||ce!==e){B.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),E.setValue(z,`projectionMatrix`,e.projectionMatrix),E.setValue(z,`viewMatrix`,e.matrixWorldInverse);let t=E.map.cameraPosition;t!==void 0&&t.setValue(z,Ee.setFromMatrixPosition(e.matrixWorld)),Ne.logarithmicDepthBuffer&&E.setValue(z,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&E.setValue(z,`isOrthographic`,e.isOrthographicCamera===!0),ce!==e&&(ce=e,w=!0,T=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&E.setValue(z,`sunShadowMap`,y.state.sunShadowMap,Ie),y.state.directionalShadowMap.length>0&&E.setValue(z,`directionalShadowMap`,y.state.directionalShadowMap,Ie),y.state.spotShadowMap.length>0&&E.setValue(z,`spotShadowMap`,y.state.spotShadowMap,Ie),y.state.pointShadowMap.length>0&&E.setValue(z,`pointShadowMap`,y.state.pointShadowMap,Ie)),i.isSkinnedMesh){E.setOptional(z,i,`bindMatrix`),E.setOptional(z,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),E.setValue(z,`boneTexture`,e.boneTexture,Ie))}i.isBatchedMesh&&(E.setOptional(z,i,`batchingTexture`),E.setValue(z,`batchingTexture`,i._matricesTexture,Ie),E.setOptional(z,i,`batchingIdTexture`),E.setValue(z,`batchingIdTexture`,i._indirectTexture,Ie),E.setOptional(z,i,`batchingColorTexture`),i._colorsTexture!==null&&E.setValue(z,`batchingColorTexture`,i._colorsTexture,Ie));let k=n.morphAttributes;if((k.position!==void 0||k.normal!==void 0||k.color!==void 0)&&Qe.update(i,n,S),(w||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,E.setValue(z,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(O.envMapIntensity.value=t.environmentIntensity),O.dfgLUT!==void 0&&(O.dfgLUT.value=il()),w){if(E.setValue(z,`toneMappingExposure`,F.toneMappingExposure),v.needsLights&&At(O,T),a&&r.fog===!0&&Ue.refreshFogUniforms(O,a),Ue.refreshMaterialUniforms(O,r,ge,he,M.state.transmissionRenderTarget[e.id]),v.needsLights&&v.numLightProbeGrids>0){let e=D,t=0;for(let n of M.state.lightProbeGridArray)n.texture!==null&&(e.textures[t]=n.texture,e.min[t]=n.boundingBox.min,e.max[t]=n.boundingBox.max,e.resolution[t]=n.resolution,t++);for(let n in e)e[n].length=t;O.probesSH.value=e.textures,O.probesMin.value=e.min,O.probesMax.value=e.max,O.probesResolution.value=e.resolution}Vs.upload(z,Tt(v),O,Ie)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Vs.upload(z,Tt(v),O,Ie),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&E.setValue(z,`center`,i.center),E.setValue(z,`modelViewMatrix`,i.modelViewMatrix),E.setValue(z,`normalMatrix`,i.normalMatrix),E.setValue(z,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];rt.update(n,S),rt.bind(n,S)}}return S}function At(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function jt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return ae},this.getActiveMipmapLevel=function(){return oe},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(e,t,n){let r=V.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),V.get(e.texture).__webglTexture=t,V.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=V.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){L=e,ae=t,oe=n;let r=null,i=!1,a=!1;if(e){let o=V.get(e);if(o.__useDefaultFramebuffer!==void 0){B.bindFramebuffer(z.FRAMEBUFFER,o.__webglFramebuffer),le.copy(e.viewport),ue.copy(e.scissor),de=e.scissorTest,B.viewport(le),B.scissor(ue),B.setScissorTest(de),se=-1;return}if(o.__webglFramebuffer===void 0)Ie.setupRenderTarget(e);else if(o.__hasExternalTextures)Ie.rebindTextures(e,V.get(e.texture).__webglTexture,V.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&V.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);Ie.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=V.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&Ie.useMultisampledRTT(e)===!1?V.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,le.copy(e.viewport),ue.copy(e.scissor),de=e.scissorTest}else le.copy(R).multiplyScalar(ge).floor(),ue.copy(ye).multiplyScalar(ge).floor(),de=be;if(n!==0&&(r=ne),B.bindFramebuffer(z.FRAMEBUFFER,r)&&B.drawBuffers(e,r),B.viewport(le),B.scissor(ue),B.setScissorTest(de),i){let r=V.get(e.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=V.get(e.textures[t]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=V.get(e.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,t.__webglTexture,n)}se=-1};function Nt(e){let t=V.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Ne.textureFormatReadable(e.format),t.__typeReadable=Ne.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){U(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=V.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){B.bindFramebuffer(z.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+s);let u=Nt(o);if(u.__formatReadable===!1){U(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){U(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&z.readPixels(t,n,r,i,tt.convert(c),tt.convert(l),a)}finally{let e=L===null?null:V.get(L).__webglFramebuffer;B.bindFramebuffer(z.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=V.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){B.bindFramebuffer(z.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+s);let d=Nt(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,f),z.bufferData(z.PIXEL_PACK_BUFFER,a.byteLength,z.STREAM_READ),z.readPixels(t,n,r,i,tt.convert(l),tt.convert(u),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);let p=L===null?null:V.get(L).__webglFramebuffer;B.bindFramebuffer(z.FRAMEBUFFER,p);let m=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await Ye(z,m,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,f),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,a),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(f),z.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;Ie.setTexture2D(e,0),z.copyTexSubImage2D(z.TEXTURE_2D,n,0,0,o,s,i,a),B.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=tt.convert(t.format),_=tt.convert(t.type),v;t.isData3DTexture?(Ie.setTexture3D(t,0),v=z.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(Ie.setTexture2DArray(t,0),v=z.TEXTURE_2D_ARRAY):(Ie.setTexture2D(t,0),v=z.TEXTURE_2D),B.activeTexture(z.TEXTURE0),B.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,t.flipY),B.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),B.pixelStorei(z.UNPACK_ALIGNMENT,t.unpackAlignment);let y=B.getParameter(z.UNPACK_ROW_LENGTH),b=B.getParameter(z.UNPACK_IMAGE_HEIGHT),x=B.getParameter(z.UNPACK_SKIP_PIXELS),S=B.getParameter(z.UNPACK_SKIP_ROWS),C=B.getParameter(z.UNPACK_SKIP_IMAGES);B.pixelStorei(z.UNPACK_ROW_LENGTH,h.width),B.pixelStorei(z.UNPACK_IMAGE_HEIGHT,h.height),B.pixelStorei(z.UNPACK_SKIP_PIXELS,l),B.pixelStorei(z.UNPACK_SKIP_ROWS,u),B.pixelStorei(z.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=V.get(e),r=V.get(t),h=V.get(n.__renderTarget),g=V.get(r.__renderTarget);B.bindFramebuffer(z.READ_FRAMEBUFFER,h.__webglFramebuffer),B.bindFramebuffer(z.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,V.get(e).__webglTexture,i,d+n),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,V.get(t).__webglTexture,a,m+n)),z.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,z.DEPTH_BUFFER_BIT,z.NEAREST);B.bindFramebuffer(z.READ_FRAMEBUFFER,null),B.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||V.has(e)){let n=V.get(e),r=V.get(t);B.bindFramebuffer(z.READ_FRAMEBUFFER,re),B.bindFramebuffer(z.DRAW_FRAMEBUFFER,ie);for(let e=0;e<c;e++)w?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,n.__webglTexture,i),T?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,r.__webglTexture,a),i===0?T?z.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):z.copyTexSubImage2D(v,a,f,p,l,u,o,s):z.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,z.COLOR_BUFFER_BIT,z.NEAREST);B.bindFramebuffer(z.READ_FRAMEBUFFER,null),B.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?z.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?z.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):z.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):z.texSubImage2D(z.TEXTURE_2D,a,f,p,o,s,g,_,h);B.pixelStorei(z.UNPACK_ROW_LENGTH,y),B.pixelStorei(z.UNPACK_IMAGE_HEIGHT,b),B.pixelStorei(z.UNPACK_SKIP_PIXELS,x),B.pixelStorei(z.UNPACK_SKIP_ROWS,S),B.pixelStorei(z.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps===!0&&t.mipmapsAutoUpdate===!0&&z.generateMipmap(v),B.unbindTexture()},this.initRenderTarget=function(e){V.get(e).__webglFramebuffer===void 0&&Ie.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?Ie.setTextureCube(e,0):e.isData3DTexture?Ie.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?Ie.setTexture2DArray(e,0):Ie.setTexture2D(e,0),B.unbindTexture()},this.resetState=function(){ae=0,oe=0,L=null,B.reset(),nt.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Be}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=gt._getDrawingBufferColorSpace(e),t.unpackColorSpace=gt._getUnpackColorSpace()}},Y={tank:{w:40,d:24,h:15},phys:{gravity:2.1,drag:1.35,swimGain:.42,pushGain:.85,jetThreshold:2.4,jetGain:1.5,maxSpeed:6.5,bodyRadius:.4,handRadius:.07},growth:{scalePerFish:.028,scaleMax:2.4,hpBase:100,hpPerFish:8,hpMax:480,speedPerFish:.012,speedMax:1.45,dmgBase:12,dmgPerFish:1.6,healPerFish:10,levelPerFish:5,abilities:{doubleJump:10,dash:25,camo:50}},combat:{punchSpeedMin:3.2,punchCooldown:.45,punchRange:.95,inkHits:3,inkWindow:15,regenDelay:8,regenRate:3},weapons:[{id:`fists`,name:`Poings`,price:0,dmg:null,rate:0,mag:0,reload:0,spread:0,auto:!1},{id:`glock`,name:`Glock`,price:500,dmg:16,rate:.38,mag:12,reload:1.6,spread:.015,auto:!1},{id:`uzi`,name:`Uzi`,price:1200,dmg:10,rate:.105,mag:24,reload:2,spread:.05,auto:!0},{id:`sniper`,name:`Sniper`,price:2500,dmg:65,rate:1.5,mag:5,reload:2.6,spread:.002,auto:!1},{id:`minigun`,name:`Mitrailleuse`,price:5e3,dmg:13,rate:.07,mag:60,reload:3.4,spread:.045,auto:!0}],economy:{startMoney:150,killBonus:25,bountyBase:200,bountyPerLevel:80,bountyPerFish:5,bountyRefreshDelay:5},abilities:{jumpImpulse:3.6,jumpRecharge:2.2,dashSpeed:9.5,dashCooldown:2.5,camoDuration:8,camoCooldown:14,camoOpacity:.16},fish:{count:24,cruiseSpeed:1.1,fleeSpeed:3.3,fleeRadius:1.9,respawnDelay:8},ink:{radius:4.5,life:8,npcBlindRadius:6},net:{appId:`poulpe-royale.global.v1`,room:`ocean-global`,stateHz:12,fishHz:8,turn:[]},spawn:{x:1,y:4.6,z:6},invulnAfterDeath:3,desktop:{speed:4.2,sprintMult:1.8},save:`poulpe_save_v1`},ol=Object.fromEntries(Y.weapons.map(e=>[e.id,e]));function sl(e,t=!1){let n=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),i=new Set(Object.keys(e[0].morphAttributes)),a={},o={},s=e[0].morphTargetsRelative,c=new ur;c.morphTargetsRelative=s;let l=0;for(let u=0;u<e.length;++u){let d=e[u],f=0,p=0;if(n!==(d.index!==null))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`),null;for(let e in d.attributes){if(!r.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure "`+e+`" attribute exists among all geometries, or in none of them.`),null;a[e]===void 0&&(a[e]=[]),a[e].push(d.attributes[e]),f++}if(f!==r.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of attributes.`),null;if(s!==d.morphTargetsRelative)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. .morphTargetsRelative must be consistent throughout all geometries.`),null;for(let t in d.morphAttributes){if(!i.has(t))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`.  .morphAttributes must be consistent throughout all geometries.`),null;if(d.morphAttributes[t].length!==e[0].morphAttributes[t].length)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have the same number of morph targets for the "`+t+`" morph attribute.`),null;o[t]===void 0&&(o[t]=[]),o[t].push(d.morphAttributes[t]),p++}if(p!==i.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of morph attributes.`),null;if(t){let e;if(n)e=d.index.count;else if(d.attributes.position!==void 0)e=d.attributes.position.count;else return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. The geometry must have either an index or a position attribute`),null;c.addGroup(l,e,u),l+=e}}if(n){let t=0,n=[];for(let r=0;r<e.length;++r){let i=e[r].index;for(let e=0;e<i.count;++e)n.push(i.getX(e)+t);t+=e[r].attributes.position.count}c.setIndex(n)}for(let e in a){let t=cl(a[e]);if(!t)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` attribute.`),null;c.setAttribute(e,t)}for(let e in o){let t=o[e][0].length;if(t!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[e]=[];for(let n=0;n<t;++n){let t=[];for(let r=0;r<o[e].length;++r)t.push(o[e][r][n]);let r=cl(t);if(!r)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` morphAttribute.`),null;c.morphAttributes[e].push(r)}}}return c}function cl(e){let t,n,r,i=-1,a=0;for(let o=0;o<e.length;++o){let s=e[o];if(t===void 0&&(t=s.array.constructor),t!==s.array.constructor)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.`),null;if(n===void 0&&(n=s.itemSize),n!==s.itemSize)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.`),null;if(r===void 0&&(r=s.normalized),r!==s.normalized)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.`),null;if(i===-1&&(i=s.gpuType),i!==s.gpuType)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.`),null;a+=s.count*n}let o=new t(a),s=new Yn(o,n,r),c=0;for(let t=0;t<e.length;++t){let r=e[t];if(r.isInterleavedBufferAttribute){let e=c/n;for(let t=0,i=r.count;t<i;t++)for(let i=0;i<n;i++){let n=r.getComponent(t,i);s.setComponent(t+e,i,n)}}else o.set(r.array,c);c+=r.count*n}return i!==void 0&&(s.gpuType=i),s}var X=(e,t)=>e+Math.random()*(t-e),ll=(e,t)=>Math.floor(X(e,t+1)),ul=(e,t,n)=>Math.max(t,Math.min(n,e)),dl=(e,t,n)=>e+(t-e)*n,fl=(e,t,n,r)=>dl(e,t,1-Math.exp(-n*r)),pl=[`Kraken`,`Calmar`,`Pieuvre`,`Bloup`,`Tako`,`Inko`,`Poulpi`,`Marlin`,`Requin`,`Corail`,`Bulles`,`Choco`],ml=[`Jr`,`Le Fugitif`,`Le Voyou`,`Malin`,`Furax`,`Titan`,`Mini`,`Fantome`,`Champion`,`Le Peintre`];function hl(){return pl[ll(0,pl.length-1)]+`_`+ml[ll(0,ml.length-1)]}function gl(e,t){return(e||``).replace(/[^\p{L}\p{N}_-]/gu,``).slice(0,14).trim()||t}var _l=e=>Math.round(e).toLocaleString(`fr-FR`)+` ¢`;function vl(e){try{return JSON.parse(localStorage.getItem(e)||`null`)}catch{return null}}function yl(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch{}}function bl(e,t){let n=document.createElement(`canvas`);n.width=e,n.height=t;let r=n.getContext(`2d`),i=new vi(n);return i.colorSpace=Fe,i.anisotropy=4,{canvas:n,ctx:r,tex:i}}function xl(e,{fontSize:t=42,color:n=`#ffffff`,bg:r=`rgba(8,20,26,0.72)`,pad:i=18}={}){let a=bl(64,64).ctx;a.font=`bold ${t}px system-ui, sans-serif`;let o=Array.isArray(e)?e:[e],s=0;for(let e of o)s=Math.max(s,a.measureText(e).width);let c=Math.min(1024,Math.ceil(s)+i*2),l=o.length*(t*1.25)+i*2,{canvas:u,ctx:d,tex:f}=bl(c,l);d.font=`bold ${t}px system-ui, sans-serif`,d.textAlign=`center`,d.textBaseline=`middle`,r&&(d.fillStyle=r,d.beginPath(),d.roundRect(0,0,c,l,16),d.fill()),o.forEach((e,r)=>{d.fillStyle=Array.isArray(n)?n[r]:n,d.fillText(e,c/2,i+t*.62+r*t*1.25,c-i*2)}),f.needsUpdate=!0;let p=new Fr(new xr({map:f,transparent:!0,depthWrite:!1})),m=.0016;return p.scale.set(c*m,l*m,1),p}var Sl=null;function Cl(){if(Sl)return Sl;let{canvas:e,ctx:t,tex:n}=bl(64,64),r=t.createRadialGradient(32,32,2,32,32,30);return r.addColorStop(0,`rgba(255,255,255,1)`),r.addColorStop(.7,`rgba(255,255,255,0.5)`),r.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=r,t.beginPath(),t.arc(32,32,30,0,Math.PI*2),t.fill(),Sl=n,n}var wl={sand:14206607,sandDark:11772017,glass:10479871,frame:1977395,rock:8227456,rockDark:6253411,weed:3121500,coralA:16747120,coralB:16758123,coralC:15232936,pipe:10465464,water:892088,deep:416628,lamp:16773828},Tl=class e{constructor(e){this.scene=e;let{w:t,d:n,h:r}=Y.tank;this.w=t,this.d=n,this.h=r,this.group=new sn,e.add(this.group),this.bounds={xmin:-t/2,xmax:t/2,zmin:-n/2,zmax:n/2,floorY:.22,topY:r-.4},this.colliders=[],this._buildLights(),this._buildOuterShell(),this._buildFloor(),this._buildGlass(),this._buildProps(),this._buildWeeds(),this._buildBubbles(),this._buildShafts(),this._buildPoliceStation()}_buildLights(){let e=new ua(12578556,4885102,1.05);this.scene.add(e);let t=new Ta(15400949,1.7);t.position.set(3,20,2),this.scene.add(t);let n=new Ta(6740456,.5);n.position.set(-6,8,-6),this.scene.add(n),this.scene.fog=new hn(wl.water,.014),this.scene.background=new q(wl.water)}_buildOuterShell(){let{w:e,d:t,h:n}=this,r=new ei(new Si(e+26,n+16,t+26),new Hr({color:wl.water,side:1,fog:!1}));r.position.y=n/2+3,this.group.add(r);let i=new Si(.22,.22,1),a=new Hr({color:wl.lamp,fog:!1}),o=[],s=(e,t,n,r,a)=>{let s=i.clone();a===`x`?s.scale(r,1,1):a===`z`?s.scale(1,1,r):s.scale(1,r,1),s.translate(e,t,n),o.push(s)},c=2.6;s(0,n+2.5,t/2+c,e+8,`x`),s(0,n+2.5,-t/2-c,e+8,`x`),s(e/2+c,n+2.5,0,t+8,`z`),s(-e/2-c,n+2.5,0,t+8,`z`),this.group.add(new ei(sl(o),a))}_buildFloor(){let{w:e,d:t}=this,n=new Di(e,t,56,36);n.rotateX(-Math.PI/2);let r=n.attributes.position,i=new Float32Array(r.count*3),a=new q(wl.sand),o=new q(wl.sandDark);for(let e=0;e<r.count;e++){let t=r.getX(e),n=r.getZ(e),s=.16*Math.sin(t*.45)*Math.cos(n*.6)+.06*Math.sin(t*1.7+n*1.3);r.setY(e,s);let c=ul((s+.2)/.45,0,1),l=o.clone().lerp(a,c);i[e*3]=l.r,i[e*3+1]=l.g,i[e*3+2]=l.b}n.setAttribute(`color`,new Yn(i,3)),n.computeVertexNormals();let s=new ei(n,new zi({vertexColors:!0,roughness:1,metalness:0}));this.group.add(s)}_buildGlass(){let{w:e,d:t,h:n}=this,r=new Bi({color:wl.glass,transparent:!0,opacity:.09,side:2,depthWrite:!1,shininess:80}),i=(e,t,n,i,a,o)=>{let s=new ei(new Di(e,t),r);s.position.set(n,i,a),s.rotation.y=o,this.group.add(s)};i(e,n,0,n/2,t/2,0),i(e,n,0,n/2,-t/2,0),i(t,n,e/2,n/2,0,Math.PI/2),i(t,n,-e/2,n/2,0,Math.PI/2);let a=.28,o=[],s=(e,t,n,r,i,a)=>{let s=new Si(e,t,n);s.translate(r,i,a),o.push(s)},c=e/2,l=t/2;for(let r of[.14,n])s(e+a,a,a,0,r,l),s(e+a,a,a,0,r,-l),s(a,a,t+a,c,r,0),s(a,a,t+a,-c,r,0);for(let e of[-c,c])for(let t of[-l,l])s(a,n,a,e,n/2,t);let u=new ei(sl(o),new zi({color:wl.frame,roughness:.6,metalness:.3}));this.group.add(u)}_buildProps(){let{w:e,d:t}=this,n=[],r=[],i=[],a=(e,t,n=.06)=>{let r=new q(t),i=e.attributes.position.count,a=new Float32Array(i*3);for(let e=0;e<i;e++){let t=1+X(-n,n);a[e*3]=r.r*t,a[e*3+1]=r.g*t,a[e*3+2]=r.b*t}return e.setAttribute(`color`,new Yn(a,3)),e};for(let r=0;r<12;r++){let i=X(.7,1.9),o=X(-e/2+3,e/2-3),s=X(-t/2+2.5,t/2-3.5);if(Math.abs(o)<9&&s>t/2-7)continue;let c=.15+i*.45,l=new Ei(i,1),u=l.attributes.position;for(let e=0;e<u.count;e++)u.setXYZ(e,u.getX(e)*X(.85,1.2),u.getY(e)*X(.6,.95),u.getZ(e)*X(.85,1.2));l.computeVertexNormals(),l.translate(o,c,s),n.push(a(l,r%2?wl.rock:wl.rockDark)),this.colliders.push({x:o,y:c,z:s,r:i*.82})}for(let n=0;n<14;n++){let i=X(-e/2+2.5,e/2-2.5),o=X(-t/2+2,t/2-3.5),s=[wl.coralA,wl.coralB,wl.coralC][n%3],c=ll(3,5);for(let e=0;e<c;e++){let e=X(.5,1.5),t=new wi(X(.08,.16),e,5);t.translate(i+X(-.5,.5),e/2+.15,o+X(-.5,.5)),r.push(a(t,s))}}for(let n=0;n<3;n++){let r=X(2.5,4.5),o=X(.45,.6),s=X(-e/2+4,e/2-4),c=X(-t/2+2.5,0),l=n%2==0,u=new Ci(o,o,r,12,1,!0);l?u.rotateZ(Math.PI/2):u.rotateX(Math.PI/2),u.translate(s,o+.25,c),i.push(a(u,wl.pipe,.03));for(let e of[-.35,0,.35])this.colliders.push(l?{x:s+e*r,y:o+.25,z:c,r:o*.95}:{x:s,y:o+.25,z:c+e*r,r:o*.95})}let o=new zi({vertexColors:!0,roughness:.95,metalness:.02});this.group.add(new ei(sl(n),o)),this.group.add(new ei(sl(r),o.clone())),this.group.add(new ei(sl(i),new zi({vertexColors:!0,roughness:.5,metalness:.35,side:2})))}_buildWeeds(){let{w:e,d:t}=this;this.weeds=[];let n=new zi({color:wl.weed,roughness:.9,side:2});for(let r=0;r<9;r++){let r=X(-e/2+2,e/2-2),i=X(-t/2+1.5,t/2-3);if(Math.abs(r)<9&&i>t/2-6)continue;let a=new sn;a.position.set(r,.1,i);let o=ll(3,5);for(let e=0;e<o;e++){let e=X(1.6,3.4),t=new Di(X(.22,.4),e,1,5);t.translate(0,e/2,0);let r=t.attributes.position;for(let t=0;t<r.count;t++){let n=r.getY(t);r.setX(t,r.getX(t)+Math.sin(n*1.2)*.22*(n/e))}let i=new ei(t,n);i.position.set(X(-.5,.5),0,X(-.4,.4)),i.rotation.y=X(0,Math.PI*2),i.userData.phase=X(0,Math.PI*2),a.add(i),this.weeds.push(i)}this.group.add(a)}}_buildBubbles(){this.bubbleData=[];let e=new Float32Array(450);for(let t=0;t<150;t++){let n=X(-this.w/2+1,this.w/2-1),r=X(-this.d/2+1,this.d/2-1),i=X(0,this.h);e[t*3]=n,e[t*3+1]=i,e[t*3+2]=r,this.bubbleData.push({x:n,z:r,speed:X(.4,1.1),wobble:X(0,Math.PI*2),size:X(.5,1)})}let t=new ur;t.setAttribute(`position`,new Yn(e,3));let n=new ui({size:.22,map:this._dot(),transparent:!0,opacity:.55,depthWrite:!1,color:14677759,sizeAttenuation:!0});this.bubbles=new hi(t,n),this.bubbles.frustumCulled=!1,this.group.add(this.bubbles)}_dot(){if(e._dotTex)return e._dotTex;let t=document.createElement(`canvas`);t.width=t.height=64;let n=t.getContext(`2d`),r=n.createRadialGradient(32,32,2,32,32,28);return r.addColorStop(0,`rgba(255,255,255,1)`),r.addColorStop(.6,`rgba(255,255,255,0.4)`),r.addColorStop(1,`rgba(255,255,255,0)`),n.fillStyle=r,n.beginPath(),n.arc(32,32,28,0,Math.PI*2),n.fill(),e._dotTex=new vi(t),e._dotTex}_buildShafts(){this.shafts=[];let e=new Hr({color:12580095,transparent:!0,opacity:.055,blending:2,depthWrite:!1,side:2});for(let t=0;t<3;t++){let n=new ei(new Di(X(3,5),this.h),e);n.position.set(X(-10,10),this.h/2,X(-6,6)),n.rotation.y=X(0,Math.PI),n.userData.speed=X(.02,.06)*(t%2?1:-1),this.shafts.push(n),this.group.add(n)}}_buildPoliceStation(){let e=new sn,t=new ei(new Si(13,5.2,.35),new zi({color:4017236,roughness:.85}));t.position.set(1,3,this.d/2-.2),e.add(t);let n=new ei(new Si(7.2,.75,.18),new zi({color:2113609,roughness:.6}));n.position.set(1,6,this.d/2-.45),e.add(n);let r=new ei(new Si(5.2,1.15,1.5),new zi({color:5916210,roughness:.9}));r.position.set(1,.72,this.d/2-1.6),e.add(r),this.colliders.push({x:1,y:.72,z:this.d/2-1.6,r:1.5}),this.group.add(e),this.policeAnchor={pos:new G(-2.6,3.9,this.d/2-.5),rotY:Math.PI},this.shopAnchor={pos:new G(4.6,3.6,this.d/2-.5),rotY:Math.PI},this.statsAnchor={pos:new G(8.5,3.4,this.d/2-.8),rotY:Math.PI+.42},this.spawnPos=new G(Y.spawn.x,Y.spawn.y,Y.spawn.z)}collideSphere(e,t){let n=this.bounds,r=!1,i=!1,a=0,o=0,s=0;e.x<n.xmin+t&&(e.x=n.xmin+t,a=1,r=!0),e.x>n.xmax-t&&(e.x=n.xmax-t,a=-1,r=!0),e.z<n.zmin+t&&(e.z=n.zmin+t,s=1,r=!0),e.z>n.zmax-t&&(e.z=n.zmax-t,s=-1,r=!0),e.y<n.floorY+t&&(e.y=n.floorY+t,o=1,r=!0,i=!0),e.y>n.topY-t&&(e.y=n.topY-t,o=-1,r=!0);for(let n of this.colliders){let c=e.x-n.x,l=e.y-n.y,u=e.z-n.z,d=t+n.r,f=c*c+l*l+u*u;if(f<d*d&&f>1e-9){let t=Math.sqrt(f),n=(d-t)/t;e.x+=c*n,e.y+=l*n,e.z+=u*n,a=c/t,o=l/t,s=u/t,r=!0,o>.5&&(i=!0)}}return{hit:r,floor:i,nx:a,ny:o,nz:s}}raycast(e,t,n=80){let r=n,i=this.bounds;{let n=1/0,a=[[e.x,t.x,i.xmin,i.xmax],[e.y,t.y,-1,i.topY],[e.z,t.z,i.zmin,i.zmax]],o=!0;for(let[e,t,r,i]of a){if(Math.abs(t)<1e-9){if(e<r||e>i){o=!1;break}continue}let a=(r-e)/t,s=(i-e)/t,c=Math.max(a,s);if(c<0){o=!1;break}n=Math.min(n,c)}o&&n<r&&(r=n)}if(t.y<-1e-9){let n=(.15-e.y)/t.y;n>0&&n<r&&(r=n)}for(let n of this.colliders){let i=e.x-n.x,a=e.y-n.y,o=e.z-n.z,s=t.x*t.x+t.y*t.y+t.z*t.z,c=2*(i*t.x+a*t.y+o*t.z),l=i*i+a*a+o*o-n.r*n.r,u=c*c-4*s*l;if(u<0||s<1e-9)continue;let d=(-c-Math.sqrt(u))/(2*s);d>.05&&d<r&&(r=d)}return r>=n?null:{t:r,point:e.clone().addScaledVector(t,r)}}update(e,t){let n=this.bubbles.geometry.attributes.position;for(let r=0;r<this.bubbleData.length;r++){let i=this.bubbleData[r],a=n.getY(r)+i.speed*e;a>this.h-.3&&(a=.1,i.x=X(-this.w/2+1,this.w/2-1),i.z=X(-this.d/2+1,this.d/2-1)),n.setXYZ(r,i.x+Math.sin(t*1.3+i.wobble)*.25,a,i.z+Math.cos(t*1.1+i.wobble)*.25)}n.needsUpdate=!0;for(let e of this.weeds)e.rotation.z=Math.sin(t*1.1+e.userData.phase)*.14,e.rotation.x=Math.cos(t*.9+e.userData.phase)*.08;for(let t of this.shafts)t.rotation.y+=t.userData.speed*e}},El=new G(0,1,0),Dl=class{constructor(e={}){let t={n:12,segLen:.17,radius:.055,collisionRadius:.05,stiffness:.05,colorRoot:12864023,colorTip:16095835,...e};this.n=t.n,this.segLen=t.segLen,this.radius=t.radius,this.cr=t.collisionRadius,this.stiffness=t.stiffness,this.pts=[];for(let e=0;e<this.n;e++)this.pts.push({x:0,y:0,z:0,px:0,py:0,pz:0});this.tipCur=new G,this.tipPrev=new G,this.tipSpeed=0,this.initialized=!1,this.radial=7;let n=this.n*8,r=new ur;r.setAttribute(`position`,new Yn(new Float32Array(n*3),3)),r.setAttribute(`color`,new Yn(new Float32Array(n*3),3));let i=[];for(let e=0;e<this.n-1;e++)for(let t=0;t<7;t++){let n=e*8+t,r=n+1,a=n+7+1,o=a+1;i.push(n,a,r,r,a,o)}r.setIndex(i),this.colorRoot=new q(t.colorRoot),this.colorTip=new q(t.colorTip),this._colorsInit=!1;let a=new zi({vertexColors:!0,roughness:.72,metalness:.02});this.mesh=new ei(r,a),this.mesh.frustumCulled=!1,this.mesh.matrixAutoUpdate=!1,this._v1=new G,this._v2=new G,this._tangent=new G,this._normal=new G,this._binormal=new G}setRoot(e){let t=this.pts[0];if(t.x=e.x,t.y=e.y,t.z=e.z,t.px=e.x,t.py=e.y,t.pz=e.z,!this.initialized){for(let t=1;t<this.n;t++){let n=this.pts[t];n.x=e.x,n.y=e.y-t*this.segLen,n.z=e.z,n.px=n.x,n.py=n.y,n.pz=n.z}this.tipCur.copy(e),this.tipPrev.copy(e),this.initialized=!0}}setTip(e){this.tipTarget=e}update(e,t,n,r=!0){e=Math.min(e,.05);let i=this.pts,a=this.n,o=this.segLen;if(this.tipTarget){let t=1-Math.exp(-20*e);this.tipPrev.copy(this.tipCur),this.tipCur.lerp(this.tipTarget,t)}this.tipSpeed=this.tipPrev.distanceTo(this.tipCur)/Math.max(e,1e-4);for(let n=1;n<a-1;n++){let r=i[n],a=(r.x-r.px)*.93,o=(r.y-r.py)*.93,s=(r.z-r.pz)*.93;r.px=r.x,r.py=r.y,r.pz=r.z,r.x=r.x+a+Math.sin(t*2.1+n*.55)*.018*e*60*.016,r.y=r.y+o-.55*e*e,r.z=r.z+s+Math.cos(t*1.7+n*.5)*.018*e*60*.016}let s=this.tipCur;for(let e=0;e<3;e++){i[0].x=i[0].px,i[0].y=i[0].py,i[0].z=i[0].pz;for(let e=0;e<a-1;e++){let t=i[e],n=i[e+1],r=n.x-t.x,s=n.y-t.y,c=n.z-t.z,l=Math.sqrt(r*r+s*s+c*c);l<1e-8&&(r=0,s=-o,c=0,l=o);let u=(l-o)/l,d=u*.5;e===0?(n.x-=r*u,n.y-=s*u,n.z-=c*u):e===a-2?(t.x+=r*u,t.y+=s*u,t.z+=c*u):(t.x+=r*d,t.y+=s*d,t.z+=c*d,n.x-=r*d,n.y-=s*d,n.z-=c*d)}if(this.stiffness>0)for(let e=1;e<a-1;e++){let t=e/(a-1),n=i[0],r=n.x+(s.x-n.x)*t,o=n.y+(s.y-n.y)*t,c=n.z+(s.z-n.z)*t,l=i[e];l.x+=(r-l.x)*this.stiffness,l.y+=(o-l.y)*this.stiffness,l.z+=(c-l.z)*this.stiffness}}let c=i[a-1];if(c.x=s.x,c.y=s.y,c.z=s.z,r&&n)for(let e=1;e<a-1;e++){let t=i[e];this._v1.set(t.x,t.y,t.z),n.collideSphere(this._v1,this.cr),t.x=this._v1.x,t.y=this._v1.y,t.z=this._v1.z}this._rebuildTube()}_rebuildTube(){let e=this.mesh.geometry,t=e.attributes.position,n=e.attributes.color,r=this.radial,i=this.pts,a=this.n,o=this.radius;for(let e=0;e<a;e++){let s=i[e],c=i[Math.max(0,e-1)],l=i[Math.min(a-1,e+1)];this._tangent.set(l.x-c.x,l.y-c.y,l.z-c.z),this._tangent.lengthSq()<1e-8&&this._tangent.set(0,1,0),this._tangent.normalize(),this._normal.crossVectors(this._tangent,El),this._normal.lengthSq()<1e-6&&this._normal.set(1,0,0),this._normal.normalize(),this._binormal.crossVectors(this._tangent,this._normal).normalize();let u=e/(a-1),d=o*(1-.62*u);e===a-1&&(d=o*.5*1.5),e===0&&(d=o*.8);for(let i=0;i<=r;i++){let a=i/r*Math.PI*2,o=this._binormal.x*Math.cos(a)+this._normal.x*Math.sin(a),c=this._binormal.y*Math.cos(a)+this._normal.y*Math.sin(a),l=this._binormal.z*Math.cos(a)+this._normal.z*Math.sin(a),f=e*(r+1)+i;if(t.setXYZ(f,s.x+o*d,s.y+c*d,s.z+l*d),!this._colorsInit){let t=this.colorRoot.clone().lerp(this.colorTip,u),r=e%2==0?1.22:.92;n.setXYZ(f,t.r*r,t.g*r,t.b*r)}}}this._colorsInit=!0,t.needsUpdate=!0,this._normalsDoneOnce,e.computeVertexNormals(),e.attributes.normal.needsUpdate=!0}getTip(e=new G){let t=this.pts[this.n-1];return e.set(t.x,t.y,t.z)}dispose(){this.mesh.geometry.dispose(),this.mesh.material.dispose()}},Ol=e=>new zi({color:e,roughness:.45,metalness:.55}),kl=e=>new zi({color:e,roughness:.85,metalness:.05}),Al={dark:Ol(2830648),steel:Ol(4871518),wood:kl(7031343),tan:kl(9075292),olive:kl(5595194),black:kl(1514014),orange:kl(15229996)};function jl(e,t,n,r,i,a,o){let s=new ei(new Si(e,t,n),o);return s.position.set(r,i,a),s}function Ml(e,t,n,r,i,a,o=`z`){let s=new ei(new Ci(e,e,t,10),a);return o===`z`?s.rotation.x=Math.PI/2:o===`x`&&(s.rotation.z=Math.PI/2),s.position.set(n,r,i),s}var Nl={glock(){let e=new sn;e.add(jl(.05,.09,.24,0,.02,-.06,Al.dark)),e.add(jl(.044,.05,.2,0,-.02,-.04,Al.tan));let t=jl(.045,.13,.06,0,-.09,.04,Al.black);return t.rotation.x=.18,e.add(t),e.userData.muzzle=new G(0,.02,-.2),e},uzi(){let e=new sn;return e.add(jl(.06,.09,.3,0,.02,-.08,Al.dark)),e.add(jl(.05,.05,.22,0,-.025,-.06,Al.wood)),e.add(jl(.05,.16,.05,0,-.1,.02,Al.black)),e.add(Ml(.018,.14,0,.02,-.28,Al.steel)),e.userData.muzzle=new G(0,.02,-.36),e},sniper(){let e=new sn;e.add(jl(.05,.07,.6,0,.02,-.16,Al.olive)),e.add(Ml(.02,.2,0,.02,-.52,Al.steel));let t=Ml(.035,.16,0,.09,-.1,Al.black);return e.add(t),e.add(jl(.045,.12,.07,0,-.07,.06,Al.wood)),e.userData.muzzle=new G(0,.02,-.62),e},minigun(){let e=new sn;e.add(Ml(.07,.16,0,0,0,Al.dark,`z`)),e.add(jl(.09,.09,.2,0,0,-.18,Al.steel));for(let t=0;t<6;t++){let n=t/6*Math.PI*2;e.add(Ml(.016,.3,Math.cos(n)*.035,Math.sin(n)*.035,-.4,Al.black,`z`))}return e.add(jl(.05,.12,.05,0,-.09,.05,Al.orange)),e.userData.muzzle=new G(0,0,-.56),e}},Pl=new Map;function Fl(e){if(Pl.has(e))return Pl.get(e).clone(!0);let t=Nl[e]();return Pl.set(e,t),t.clone(!0)}function Il(){for(let e of[`glock`,`uzi`,`sniper`,`minigun`])Fl(e)}var Ll=new class{constructor(){this.ctx=null,this.master=null,this.muted=!1}init(){if(this.ctx)return;let e=window.AudioContext||window.webkitAudioContext;if(!e)return;this.ctx=new e,this.master=this.ctx.createGain(),this.master.gain.value=.5,this.master.connect(this.ctx.destination);let t=this.ctx.sampleRate;this.noiseBuf=this.ctx.createBuffer(1,t,this.ctx.sampleRate);let n=this.noiseBuf.getChannelData(0);for(let e=0;e<t;e++)n[e]=Math.random()*2-1}resume(){this.ctx&&this.ctx.state===`suspended`&&this.ctx.resume()}toggleMute(){return this.muted=!this.muted,this.master&&(this.master.gain.value=this.muted?0:.5),this.muted}_noise(e,t=.3,n=1200,r=`lowpass`,i=null){if(!this.ctx||this.muted)return;let a=this.ctx.currentTime,o=this.ctx.createBufferSource();o.buffer=this.noiseBuf,o.loop=!0;let s=this.ctx.createBiquadFilter();s.type=r,s.frequency.value=n,i&&s.frequency.exponentialRampToValueAtTime(Math.max(40,i),a+e);let c=this.ctx.createGain();c.gain.setValueAtTime(t,a),c.gain.exponentialRampToValueAtTime(.001,a+e),o.connect(s),s.connect(c),c.connect(this.master),o.start(a),o.stop(a+e+.05)}_tone(e,t,{type:n=`sine`,vol:r=.25,slideTo:i=null,delay:a=0}={}){if(!this.ctx||this.muted)return;let o=this.ctx.currentTime+a,s=this.ctx.createOscillator();s.type=n,s.frequency.setValueAtTime(e,o),i&&s.frequency.exponentialRampToValueAtTime(Math.max(20,i),o+t);let c=this.ctx.createGain();c.gain.setValueAtTime(r,o),c.gain.exponentialRampToValueAtTime(.001,o+t),s.connect(c),c.connect(this.master),s.start(o),s.stop(o+t+.05)}chomp(){this._tone(180,.18,{type:`square`,vol:.3,slideTo:60}),this._noise(.12,.25,500)}punch(){this._noise(.14,.5,300,`lowpass`,120),this._tone(90,.12,{type:`sine`,vol:.4,slideTo:45})}hurt(){this._tone(220,.2,{type:`sawtooth`,vol:.22,slideTo:110})}die(){this._tone(160,.6,{type:`sawtooth`,vol:.3,slideTo:40}),this._noise(.5,.3,800,`lowpass`,100)}coin(){this._tone(880,.09,{vol:.22}),this._tone(1320,.14,{vol:.22,delay:.09})}ui(){this._tone(660,.05,{vol:.15})}buy(){this._tone(520,.08,{vol:.2}),this._tone(780,.1,{vol:.2,delay:.08}),this._tone(1040,.14,{vol:.2,delay:.16})}denied(){this._tone(180,.15,{type:`square`,vol:.2,slideTo:120})}unlock(){[523,659,784,1047].forEach((e,t)=>this._tone(e,.16,{vol:.22,delay:t*.09}))}ink(){this._noise(.45,.4,900,`lowpass`,200),this._tone(70,.4,{type:`sine`,vol:.3,slideTo:30})}jet(){this._noise(.25,.18,600,`bandpass`)}dash(){this._noise(.3,.3,1400,`bandpass`,300),this._tone(300,.2,{vol:.15,slideTo:900})}dryfire(){this._tone(900,.04,{type:`square`,vol:.12})}shoot(e){switch(e){case`sniper`:this._noise(.35,.7,2500,`lowpass`,200),this._tone(140,.3,{vol:.4,slideTo:50});break;case`minigun`:this._noise(.08,.4,1800,`lowpass`,500),this._tone(180,.05,{vol:.2});break;case`uzi`:this._noise(.06,.35,2e3,`lowpass`,600);break;default:this._noise(.1,.45,2200,`lowpass`,400),this._tone(220,.06,{vol:.18})}}impact(){this._noise(.08,.2,2500,`highpass`)}reload(){this._tone(500,.05,{type:`square`,vol:.12}),this._tone(400,.05,{type:`square`,vol:.12,delay:.15})}grab(){this._tone(320,.1,{type:`triangle`,vol:.2,slideTo:480})}fanfare(){[392,523,659,784,1047].forEach((e,t)=>this._tone(e,.22,{vol:.2,delay:t*.11}))}};Il();var Rl={v1:new G,v2:new G,v3:new G,v4:new G,q1:new lt},zl=class{constructor(e,t){this.game=e,this.scene=e.scene,this.renderer=e.renderer;let n=vl(Y.save)||{};this.name=gl(t,n.name||hl()),this.money=typeof n.money==`number`?n.money:Y.economy.startMoney,this.fishCount=typeof n.fish==`number`?n.fish:0,this.owned=Array.isArray(n.owned)&&n.owned.length?n.owned:[`fists`],this.weaponIdx=0,this.hp=this.maxHp,this.maxHp=0,this.dead=!1,this.deadT=0,this.invuln=0,this.hitFlash=0,this.hitTimes=[],this.regenT=0,this.vel=new G,this.scaleCur=this.targetScale,this.heldFish={left:null,right:null},this.jumpCharges=1,this.jumpRechargeT=0,this.dashCd=0,this.camoActive=!1,this.camoT=0,this.camoCd=0,this.ammo={},this.fireCd=0,this.reloadT=0,this.punchCd=0,this.punchAnimT=0,this._buildBody(),this._buildRig(),this._updateStats(!0),this.hp=this.maxHp,this._equip(this.owned[this.weaponIdx],!0),this.xrHands={left:null,right:null},this.controllers=[null,null];for(let e=0;e<2;e++){let t=this.renderer.xr.getController(e);t.userData.hand=null,t.addEventListener(`connected`,n=>{t.userData.hand=n.data.handedness||(e===0?`left`:`right`),this.xrHands[t.userData.hand]=t,t.userData.hand===`right`&&this._attachGun(t)}),t.addEventListener(`disconnected`,()=>{t.userData.hand===`right`&&this._attachGun(null),t.userData.hand=null}),t.addEventListener(`selectstart`,()=>this._trigger(t.userData.hand,!0)),t.addEventListener(`selectend`,()=>this._trigger(t.userData.hand,!1)),t.addEventListener(`squeezestart`,()=>this._grip(t.userData.hand)),t.addEventListener(`squeezeend`,()=>{}),this.rig.add(t),this.controllers[e]=t}this.triggerHeld={left:!1,right:!1},this._btnPrev={a:!1,b:!1,stick:!1},this._xrPosPrev={left:new G,right:new G,has:!1},this.handVelRel={left:new G,right:new G},this.keys={},this._bindDesktop(),this.saveT=0}_buildBody(){let e=new sn;this.bodyGroup=e,this.scene.add(e);let t=new zi({color:15229996,roughness:.6,transparent:!0});this.mantleMat=t;let n=new ei(new Oi(.34,14,12),t);n.scale.set(1,.95,1.25),e.add(n);let r=new ei(new wi(.2,.5,10),t);r.position.set(0,.12,.42),r.rotation.x=Math.PI/2.2,e.add(r);let i=new zi({color:16777215,roughness:.3,transparent:!0}),a=new zi({color:1052696,roughness:.3,transparent:!0});for(let t of[-1,1]){let n=new ei(new Oi(.09,10,10),i);n.position.set(t*.15,.16,-.26),e.add(n);let r=new ei(new Oi(.042,8,8),a);r.position.set(t*.15,.16,-.335),e.add(r)}this.tentL=new Dl({n:12,segLen:.17,radius:.055,stiffness:.08}),this.tentR=new Dl({n:12,segLen:.17,radius:.055,stiffness:.08}),this.scene.add(this.tentL.mesh,this.tentR.mesh),this.deco=[];for(let e=0;e<4;e++){let e=new Dl({n:10,segLen:.15,radius:.04,stiffness:.02,colorRoot:10895124,colorTip:14252602});this.scene.add(e.mesh),this.deco.push(e)}}_buildRig(){this.rig=new sn,this.scene.add(this.rig),this.camera=new Sa(72,innerWidth/innerHeight,.05,120),this.rig.add(this.camera),this.rig.position.set(Y.spawn.x,Y.spawn.y,Y.spawn.z),this.desktopYaw=Math.PI,this.desktopPitch=-.12,this.camera.rotation.set(this.desktopPitch,Math.PI,0,`YXZ`),this.gunHolder=new sn,this.camera.add(this.gunHolder),this.gunHolder.position.set(.26,-.24,-.42),this.gunMesh=null}_bindDesktop(){let e=this.renderer.domElement;e.addEventListener(`click`,()=>{!this.renderer.xr.isPresenting&&!document.pointerLockElement&&e.requestPointerLock()}),document.addEventListener(`mousemove`,t=>{document.pointerLockElement===e&&(this.desktopYaw-=t.movementX*.0023,this.desktopPitch=ul(this.desktopPitch-t.movementY*.0023,-1.35,1.35))}),document.addEventListener(`pointerlockchange`,()=>{document.pointerLockElement!==e&&(this.keys={})}),document.addEventListener(`keydown`,e=>{this.renderer.xr.isPresenting||(this.keys[e.code]=!0,e.code===`KeyF`&&this._desktopGrabOrEat(),e.code===`KeyE`&&this._doDash(),e.code===`KeyX`&&this._toggleCamo(),e.code===`Space`&&(e.preventDefault(),this._doJump()),/^Digit[1-5]$/.test(e.code)&&this._selectWeaponSlot(parseInt(e.code.slice(5))-1))}),document.addEventListener(`keyup`,e=>{this.keys[e.code]=!1}),this._mouseDown=!1,document.addEventListener(`mousedown`,t=>{this.renderer.xr.isPresenting||document.pointerLockElement!==e||(this._mouseDown=!0,t.button===2?this._desktopEat():this.game.uiPointing?this.game.uiClickRequested=!0:this.curWeapon===`fists`?this.punchAnimT=.18:this._firePressed=!0)}),document.addEventListener(`mouseup`,()=>{this._mouseDown=!1,this._firePressed=!1}),document.addEventListener(`contextmenu`,e=>e.preventDefault())}get fish(){return this.fishCount}get targetScale(){return Math.min(1+this.fishCount*Y.growth.scalePerFish,Y.growth.scaleMax)}get level(){return Math.floor(this.fishCount/Y.growth.levelPerFish)+1}get dmgStat(){return Math.min(Y.growth.dmgBase+this.fishCount*Y.growth.dmgPerFish,60)}get speedMult(){return Math.min(1+this.fishCount*Y.growth.speedPerFish,Y.growth.speedMax)}get bodyRadius(){return Y.phys.bodyRadius*this.scaleCur}get bodyCenter(){return Rl.v1.copy(this.headWorld).addScaledVector(Rl.v2.set(0,1,0),-.18*this.scaleCur)}get unlocked(){let e=Y.growth.abilities;return{doubleJump:this.fishCount>=e.doubleJump,dash:this.fishCount>=e.dash,camo:this.fishCount>=e.camo}}_updateStats(e=!1){let t=this.maxHp;this.maxHp=Math.min(Y.growth.hpBase+this.fishCount*Y.growth.hpPerFish,Y.growth.hpMax),!e&&this.maxHp>t&&(this.hp+=this.maxHp-t),this.hp=ul(this.hp,1,this.maxHp)}persist(){yl(Y.save,{name:this.name,money:this.money,fish:this.fishCount,owned:this.owned})}_trigger(e,t){if(!e)return;let n=this.triggerHeld[e];this.triggerHeld[e]=t,t&&!n&&this._onTriggerPress(e),!t&&n&&e===`right`&&(this._firePressed=!1)}_grip(e){e&&this._grabOrEat(e)}_onTriggerPress(e){this.game.uiPointing?this.game.uiClickRequested=!0:((this.curWeapon===`fists`||e===`left`)&&this._grabOrEat(e),e===`right`&&this.curWeapon!==`fists`&&(this._firePressed=!0))}_desktopGrabOrEat(){this.heldFish.right?this._eat(`right`):this._tryGrab(`right`)}_desktopEat(){this.heldFish.right?this._eat(`right`):this.heldFish.left&&this._eat(`left`)}_grabOrEat(e){this.heldFish[e]?this._eat(e):this._tryGrab(e)}_tryGrab(e){if(this.dead)return;let t=e===`left`?this._handPos(`left`,Rl.v3):this._handPos(`right`,Rl.v3),n=this.game.fish.findGrab(t,.6);n&&(this.heldFish[e]=n,this.game.fish.grab(n,`self`),this.game.net.sendEv({t:`grab`,id:n.id,by:this.game.net.selfId,hand:e}),Ll.grab())}_eat(e){let t=this.heldFish[e];if(!t)return;this.heldFish[e]=null,this.game.fish.eat(t,!0),this.game.net.sendEv({t:`ate`,id:t.id,by:this.game.net.selfId}),this.fishCount++,this._updateStats(),this.hp=ul(this.hp+Y.growth.healPerFish,1,this.maxHp),Ll.chomp(),this.game.fx.bubbles(this.headWorld,6);let n=Y.growth.abilities;for(let[e,t,r]of[[`doubleJump`,n.doubleJump,`DOUBLE SAUT`],[`dash`,n.dash,`DASH`],[`camo`,n.camo,`CAMOUFLAGE`]])this.fishCount===t&&(Ll.unlock(),this.game.fx.popup(`CAPACITÉ DÉBLOQUÉE : `+r,this.headWorld.clone().add(new G(0,.6,0)),{color:`#7dff9b`,size:54,ttl:3}));this.game.hud.dirty=!0,this.game.net.sendMeta(),this.persist(),this.game.boards.markDirty()}get curWeapon(){return this.owned[this.weaponIdx]||`fists`}_attachGun(e){let t=e||this.camera;this.gunHolder.parent!==t&&(t.add(this.gunHolder),this.gunHolder.position.copy(e?new G(0,0,-.02):new G(.26,-.24,-.42)),this.gunHolder.rotation.set(0,0,0))}_equip(e,t=!1){this.gunMesh&&=(this.gunHolder.remove(this.gunMesh),null),this.curWeaponId=e,e!==`fists`&&(this.gunMesh=Fl(e),this.gunHolder.add(this.gunMesh),this.ammo[e]===void 0&&(this.ammo[e]=ol[e].mag)),t||Ll.ui(),this.game.hud&&(this.game.hud.dirty=!0)}_selectWeaponSlot(e){e>=0&&e<this.owned.length&&e!==this.weaponIdx&&(this.weaponIdx=e,this._equip(this.owned[e]))}cycleWeapon(e=1){this.owned.length<=1||(this.weaponIdx=(this.weaponIdx+e+this.owned.length)%this.owned.length,this._equip(this.owned[this.weaponIdx]))}buyWeapon(e){let t=ol[e];return!t||this.owned.includes(e)?!1:this.money<t.price?(Ll.denied(),!1):(this.money-=t.price,this.owned.push(e),this.weaponIdx=this.owned.length-1,this._equip(e),Ll.buy(),this.persist(),this.game.net.sendMeta(),!0)}_fire(e){let t=ol[this.curWeapon];if(!t||!t.dmg||this.reloadT>0||!(t.auto?this._firePressed||this.renderer.xr.isPresenting&&this.triggerHeld.right:this._firePressed)||this.fireCd>0)return;let n=t.id;if((this.ammo[n]||0)<=0){this._startReload();return}this.fireCd=t.rate,this.ammo[n]--,this.game.hud.dirty=!0;let r=Rl.v1,i=Rl.v2;this._getMuzzleWorld(r,i),t.spread>0&&(i.x+=X(-t.spread,t.spread),i.y+=X(-t.spread,t.spread),i.z+=X(-t.spread,t.spread),i.normalize()),this.game.doHitscan(this,r,i,t),Ll.shoot(n),this.game.fx.muzzle(r.clone(),n===`sniper`?.4:.25),this.vel.addScaledVector(i,-.35)}_getMuzzleWorld(e,t){if(this.gunMesh)return e.copy(this.gunMesh.userData.muzzle||new G(0,0,-.2)),this.gunMesh.localToWorld(e),this.gunHolder.getWorldQuaternion(Rl.q1),t.set(0,0,-1).applyQuaternion(Rl.q1),t;if(this.renderer.xr.isPresenting&&this.xrHands.right){let n=this.xrHands.right;n.getWorldQuaternion(Rl.q1),n.getWorldPosition(e),t.set(0,0,-1).applyQuaternion(Rl.q1)}else this.camera.getWorldPosition(e),this.camera.getWorldDirection(t),e.addScaledVector(t,.45);return t}_startReload(){let e=ol[this.curWeapon];!e||!e.dmg||this.reloadT>0||(this.reloadT=e.reload,Ll.reload())}_doJump(){this.dead||this.jumpCharges>0&&(this.jumpCharges--,this.jumpRechargeT=Y.abilities.jumpRecharge,this.vel.y+=Y.abilities.jumpImpulse,Ll.jet(),this.game.fx.bubbles(this.bodyCenter.clone(),8))}_doDash(){if(this.dead||!this.unlocked.dash||this.dashCd>0)return;this.dashCd=Y.abilities.dashCooldown;let e=Rl.v3;this.renderer.xr.isPresenting&&this.xrHands.right?(this.xrHands.right.getWorldQuaternion(Rl.q1),e.set(0,0,-1).applyQuaternion(Rl.q1)):this.getLookDir(e),this.vel.addScaledVector(e,Y.abilities.dashSpeed),Ll.dash(),this.game.fx.bubbles(this.bodyCenter.clone(),12,.25)}_toggleCamo(){!this.dead&&this.unlocked.camo&&(this.camoActive||this.camoCd>0||(this.camoActive=!0,this.camoT=Y.abilities.camoDuration,Ll.ui(),this.game.hud.dirty=!0))}damage(e,t){if(this.dead||this.invuln>0)return;this.hp-=e,this.hitFlash=.22,this.regenT=Y.combat.regenDelay,Ll.hurt(),this.game.hud.dirty=!0;let n=performance.now()/1e3;this.hitTimes.push(n),this.hitTimes=this.hitTimes.filter(e=>n-e<=Y.combat.inkWindow),this.hitTimes.length>=Y.combat.inkHits&&(this.hitTimes=[],this.emitInk()),this.hp<=0&&this.die(t)}emitInk(){let e=this.bodyCenter.clone();this.game.spawnInk(e),this.game.net.sendEv({t:`ink`,p:[e.x,e.y,e.z]}),Ll.ink()}die(e){this.dead=!0,this.deadT=3,this.hp=0,Ll.die(),this.game.fx.inkBurst(this.bodyCenter.clone(),16),this.game.net.sendEv({t:`died`,victim:this.game.net.selfId,killer:e}),this.game.hud.dirty=!0}respawn(){this.dead=!1,this.hp=this.maxHp,this.invuln=Y.invulnAfterDeath,this.vel.set(0,0,0),this.rig.position.set(Y.spawn.x,Y.spawn.y,Y.spawn.z),this.hitTimes=[],this.game.hud.dirty=!0}get headWorld(){return this.camera.getWorldPosition(Rl.v2)}getLookDir(e){return this.renderer.xr.isPresenting?(this.camera.getWorldQuaternion(Rl.q1),e.set(0,0,-1).applyQuaternion(Rl.q1).normalize()):this.camera.getWorldDirection(e).normalize()}_handPos(e,t){if(this.renderer.xr.isPresenting&&this.xrHands[e])return this.xrHands[e].getWorldPosition(t);this.camera.getWorldPosition(t),this.camera.getWorldQuaternion(Rl.q1);let n=new G((e===`left`?-1:1)*.3,-.22,-.5).applyQuaternion(Rl.q1);return t.add(n),t}update(e,t){this.scaleCur=fl(this.scaleCur,this.targetScale,6,e);let n=this.renderer.xr.isPresenting;this.fireCd=Math.max(0,this.fireCd-e),this.punchCd=Math.max(0,this.punchCd-e),this.dashCd=Math.max(0,this.dashCd-e),this.camoCd=Math.max(0,this.camoCd-e),this.invuln=Math.max(0,this.invuln-e),this.hitFlash=Math.max(0,this.hitFlash-e),this.punchAnimT=Math.max(0,this.punchAnimT-e),this.reloadT>0&&(this.reloadT-=e,this.reloadT<=0&&(this.reloadT=0,this.ammo[this.curWeapon]=ol[this.curWeapon].mag,this.game.hud.dirty=!0)),this.camoActive&&(this.camoT-=e,this.camoT<=0&&(this.camoActive=!1,this.camoCd=Y.abilities.camoCooldown,this.game.hud.dirty=!0)),this.jumpCharges<(this.unlocked.doubleJump?2:1)&&(this.jumpRechargeT-=e,this.jumpRechargeT<=0&&this.jumpCharges++),this.dead?(this.deadT-=e,this.deadT<=0&&this.respawn(),this._updateBodyVisuals(e,t,!0)):(n?this._updateVRInput(e):this._updateDesktopInput(e,t),this._locomotion(e),this._updateBodyVisuals(e,t,!1),this._updateTentacles(e,t),this._updateHeldFish(),this._fire(e),this._punchCheck(),this._updateCamoVisuals(),this.regenT=Math.max(0,this.regenT-e),this.regenT<=0&&this.hp<this.maxHp&&(this.hp=Math.min(this.hp+Y.combat.regenRate*e,this.maxHp),this.game.hud.dirty=!0),this.saveT+=e,this.saveT>10&&(this.saveT=0,this.persist()))}_updateVRInput(e){let t=this.renderer.xr.getSession();if(t){let e=!1,n=!1,r=!1,i=0;for(let a of t.inputSources){let t=a.gamepad;t&&a.handedness===`right`&&(e=t.buttons[4]&&t.buttons[4].pressed,n=t.buttons[5]&&t.buttons[5].pressed,r=t.buttons[3]&&t.buttons[3].pressed,i=t.axes[2]||0)}e&&!this._btnPrev.a&&this._doJump(),n&&!this._btnPrev.b&&this._doDash(),r&&!this._btnPrev.stick&&this._toggleCamo(),Math.abs(i)>.65&&this._stickEdge!==Math.sign(i)?(this._stickEdge=Math.sign(i),this.cycleWeapon(this._stickEdge>0?1:-1)):Math.abs(i)<.4&&(this._stickEdge=0),this._btnPrev={a:e,b:n,stick:r}}for(let t of[`left`,`right`]){let n=this._handPos(t,new G),r=this._xrPosPrev[t];if(this._xrPosPrev.has){let i=n.clone().sub(r).divideScalar(Math.max(e,1e-4));i.sub(this.vel),this.handVelRel[t].lerp(i,.6)}this._xrPosPrev[t].copy(n),this._xrPosPrev.has=!0}}_updateDesktopInput(e,t){this.camera.rotation.set(this.desktopPitch,this.desktopYaw,0,`YXZ`);let n=Rl.v3.set(0,0,0),r=this.getLookDir(Rl.v4),i=new G().crossVectors(r,new G(0,-1,0)).normalize(),a=this.keys.ShiftLeft||this.keys.ShiftRight?Y.desktop.sprintMult:1,o=Y.desktop.speed*a;this.keys.KeyW&&n.addScaledVector(r,1),this.keys.KeyS&&n.addScaledVector(r,-1),this.keys.KeyA&&n.addScaledVector(i,-1),this.keys.KeyD&&n.addScaledVector(i,1),this.keys.Space&&(n.y+=1),(this.keys.KeyC||this.keys.ControlLeft)&&--n.y,n.lengthSq()>0&&(n.normalize().multiplyScalar(o*.9),this.vel.lerp(n,Math.min(1,5*e))),this.punchAnimT>0?this.handVelRel.right.copy(r).multiplyScalar(7):(this.handVelRel.right.set(0,0,0),this.handVelRel.left.set(0,0,0)),this._mouseDown&&this.curWeapon!==`fists`&&!this.game.uiPointing&&(this._firePressed=!0)}_locomotion(e){let t=Y.phys;for(let n of[`left`,`right`]){let r=this.handVelRel[n],i=r.length();if(i>.4){this.vel.addScaledVector(r,-t.swimGain*e),r.y<-t.jetThreshold&&(this.vel.y+=-r.y*t.jetGain*e,Math.random()<e*8&&(this.game.fx.bubbles(this._handPos(n,Rl.v3).clone(),2),Ll.jet()));let a=this._handPos(n,Rl.v4).clone();this.game.world.collideSphere(a,t.handRadius+.03).hit&&i>.9&&this.vel.addScaledVector(r,-t.pushGain*e)}}this.vel.y-=t.gravity*e,this.vel.y<-.45&&(this.vel.y=-.45),this.vel.multiplyScalar(Math.exp(-t.drag*e));let n=t.maxSpeed*this.speedMult;this.vel.length()>n&&this.vel.setLength(n),this.rig.position.addScaledVector(this.vel,e);let r=this.camera.getWorldPosition(new G).clone().add(new G(0,-.18*this.scaleCur,0)),i=this.bodyRadius,a=r.clone(),o=this.game.world.collideSphere(r,i);if(o.hit){let e=r.sub(a);this.rig.position.add(e),o.floor&&this.vel.y<0&&(this.vel.y=0),Math.abs(o.nx)>.5&&Math.sign(this.vel.x)===-Math.sign(o.nx)&&(this.vel.x*=.2),Math.abs(o.nz)>.5&&Math.sign(this.vel.z)===-Math.sign(o.nz)&&(this.vel.z*=.2)}}_updateBodyVisuals(e,t,n){let r=this.headWorld.clone(),i=this.getLookDir(new G);i.y=0,i.normalize(),this.bodyGroup.position.copy(r).addScaledVector(i,-.5*this.scaleCur),this.bodyGroup.position.y-=.12*this.scaleCur,this.bodyGroup.rotation.y=Math.atan2(i.x,i.z);let a=this.scaleCur;this.bodyGroup.scale.setScalar(a),n?this.bodyGroup.visible=!1:this.bodyGroup.visible=!0;let o=this.hitFlash>0;this.mantleMat.color.setHex(o?16734780:15229996),this.mantleMat.opacity=this.camoActive?.35:1}_updateTentacles(e,t){let n=new G(-.24,-.05,-.05),r=new G(.24,-.05,-.05),i=new G(0,0,1);this.bodyGroup.updateMatrixWorld(),n.applyMatrix4(this.bodyGroup.matrixWorld),r.applyMatrix4(this.bodyGroup.matrixWorld),this.tentL.setRoot(n),this.tentL.setTip(this._handPos(`left`,new G)),this.tentR.setRoot(r),this.tentR.setTip(this._handPos(`right`,new G)),this.tentL.update(e,t,this.game.world),this.tentR.update(e,t,this.game.world);let a=[new G(-.16,-.12,.16),new G(.16,-.12,.16),new G(-.06,-.14,.2),new G(.06,-.14,.2)],o=Math.sin(t*1.6)*.25;this.deco.forEach((n,r)=>{let s=a[r].clone().applyMatrix4(this.bodyGroup.matrixWorld),c=i.clone().applyQuaternion(this.bodyGroup.quaternion),l=s.clone().addScaledVector(c,.9*this.scaleCur).add(new G(Math.sin(t*1.3+r*1.7)*.3,-.55*this.scaleCur+o,Math.cos(t*1.1+r)*.2));n.setRoot(s),n.setTip(l),n.update(e,t,this.game.world)})}_updateHeldFish(){for(let e of[`left`,`right`]){let t=this.heldFish[e];t&&(this._handPos(e,Rl.v3),this.game.fish.followHand(t,Rl.v3))}}_updateCamoVisuals(){let e=this.camoActive?.35:1;for(let t of[this.tentL,this.tentR,...this.deco])t.mesh.material.transparent=e<1,t.mesh.material.opacity=e}_punchCheck(){if(!(this.punchCd>0))for(let e of[this.tentL,this.tentR]){if(e.tipSpeed<Y.combat.punchSpeedMin)continue;let t=e.getTip(new G),n=this.game.findPunchTarget(t,Y.combat.punchRange,this);if(n){this.punchCd=Y.combat.punchCooldown;let r=ul(1+(e.tipSpeed-Y.combat.punchSpeedMin)*.22,1,2.2),i=Math.round(this.dmgStat*r);this.game.applyPunch(this,n,i,t),Ll.punch();break}}}encodeState(){let e=new Float32Array(29),t=this.headWorld;e[0]=t.x,e[1]=t.y,e[2]=t.z,this.camera.getWorldQuaternion(Rl.q1),e[3]=Rl.q1.x,e[4]=Rl.q1.y,e[5]=Rl.q1.z,e[6]=Rl.q1.w;let n=this._handPos(`left`,new G),r=this._handPos(`right`,new G);return e[7]=n.x,e[8]=n.y,e[9]=n.z,e[10]=r.x,e[11]=r.y,e[12]=r.z,e[13]=this.scaleCur,e[14]=ul(this.hp/this.maxHp,0,1),e[15]=Y.weapons.findIndex(e=>e.id===this.curWeapon),e[16]=+!!this.camoActive,e[17]=this.fishCount,e[18]=+!this.dead,this.renderer.xr.isPresenting&&this.xrHands.right?(this.xrHands.right.getWorldQuaternion(Rl.q1),e[19]=Rl.q1.x,e[20]=Rl.q1.y,e[21]=Rl.q1.z,e[22]=Rl.q1.w):(this.camera.getWorldQuaternion(Rl.q1),e[19]=Rl.q1.x,e[20]=Rl.q1.y,e[21]=Rl.q1.z,e[22]=Rl.q1.w),this.renderer.xr.isPresenting&&this.xrHands.left?(this.xrHands.left.getWorldQuaternion(Rl.q1),e[23]=Rl.q1.x,e[24]=Rl.q1.y,e[25]=Rl.q1.z,e[26]=Rl.q1.w):(e[23]=0,e[24]=0,e[25]=0,e[26]=1),e[27]=this.heldFish.left?this.heldFish.left.id:-1,e[28]=this.heldFish.right?this.heldFish.right.id:-1,e}weaponIdFromIdx(e){return Y.weapons[ul(e,0,Y.weapons.length-1)].id}},Bl=[{body:16763196,fin:16747068},{body:16740419,fin:16777215},{body:2736809,fin:2068349},{body:15921906,fin:3043183},{body:16736143,fin:16765286}];function Vl(e){let t=[],n=(e,t)=>{let n=new q(t),r=e.attributes.position.count,i=new Float32Array(r*3);for(let e=0;e<r;e++)i[e*3]=n.r,i[e*3+1]=n.g,i[e*3+2]=n.b;return e.setAttribute(`color`,new Yn(i,3)),e},r=new Oi(.16,10,8);r.scale(1.5,.9,.62),t.push(n(r,e.body));let i=new wi(.1,.2,6);i.rotateZ(Math.PI/2),i.translate(-.3,0,0),t.push(n(i,e.fin));let a=new wi(.05,.14,5);a.translate(.02,.16,0),t.push(n(a,e.fin));for(let e of[-1,1]){let r=new Oi(.032,6,6);r.translate(.14,.03,e*.09),t.push(n(r,1053720))}return t}var Hl=class{constructor(e,t){this.scene=e,this.world=t,this.count=Y.fish.count,this.fish=[],this.geometries=Bl.map(e=>sl(Vl(e)));for(let e=0;e<this.count;e++)this.fish.push(this._spawn(e));this.netPos=new Map,this.tempV=new G}_spawn(e){let t=e%this.geometries.length,n=this.geometries[t],r=new ei(n,this._materialFor(t)),i={id:e,mesh:r,pos:r.position,yaw:X(0,Math.PI*2),speed:X(.7,1.3),target:new G,stateTimer:X(1,4),alive:!0,holder:null,respawnT:0,phase:X(0,Math.PI*2),hasNet:!1};return this._pickTarget(i),i.pos.set(X(-14,14),X(1.5,10),X(-8,8)),this.scene.add(r),i}_materialFor(e){return this.materials||=[],this.materials[e]||(this.materials[e]=new zi({vertexColors:!0,roughness:.55,metalness:.05})),this.materials[e]}_pickTarget(e){let t=this.world.bounds;e.target.set(X(t.xmin+2,t.xmax-2),X(1.2,t.topY-1),X(t.zmin+2,t.zmax-2))}simulate(e,t,n){for(let r of this.fish){if(!r.alive){r.respawnT-=e,r.respawnT<=0&&this._respawn(r);continue}if(r.holder)continue;let i=null,a=1e9;for(let e of n){let t=e.distanceTo(r.pos);t<Y.fish.fleeRadius&&t<a&&(a=t,i=e)}let o=this.tempV;i?(o.copy(r.pos).sub(i).normalize(),r.speed=Y.fish.fleeSpeed,r.stateTimer=1.2):(r.stateTimer-=e,r.stateTimer<=0&&(this._pickTarget(r),r.stateTimer=X(2,5)),o.copy(r.target).sub(r.pos),o.lengthSq()<.4&&(this._pickTarget(r),r.stateTimer=X(2,5)),o.normalize(),r.speed=fl(r.speed,Y.fish.cruiseSpeed,2,e));let s=Math.atan2(o.x,o.z)-r.yaw;for(;s>Math.PI;)s-=Math.PI*2;for(;s<-Math.PI;)s+=Math.PI*2;r.yaw+=s*Math.min(1,4.5*e);let c=ul(-o.y*.8,-.6,.6),l=o.clone().multiplyScalar(r.speed*e);r.pos.add(l);let u=this.world.bounds;r.pos.x=ul(r.pos.x,u.xmin+1,u.xmax-1),r.pos.z=ul(r.pos.z,u.zmin+1,u.zmax-1),r.pos.y=ul(r.pos.y,.8,u.topY-.8),r.mesh.rotation.set(c,r.yaw,Math.sin(t*6+r.phase)*.18)}}_respawn(e){e.alive=!0,e.holder=null,e.mesh.visible=!0;let t=this.world.bounds;e.pos.set(X(t.xmin+3,t.xmax-3),X(1.5,t.topY-2),X(t.zmin+3,t.zmax-3)),this._pickTarget(e)}findGrab(e,t=.55){let n=null,r=t*t;for(let t of this.fish){if(!t.alive||t.holder)continue;let i=t.pos.distanceToSquared(e);i<r&&(r=i,n=t)}return n}grab(e,t){e.holder=t,e.mesh.visible=!0}eat(e,t){e.alive=!1,e.holder=null,e.mesh.visible=!1,e.respawnT=Y.fish.respawnDelay,t||(e.mesh.visible=!1)}release(e){e.holder=null}followHand(e,t){e.pos.copy(t),e.mesh.rotation.set(0,Math.PI,0)}followRemoteHand(e,t){e.pos.copy(t),e.mesh.rotation.set(0,Math.PI,0)}encodeSync(){let e=new Float32Array(this.count*6);return this.fish.forEach((t,n)=>{let r=n*6;e[r]=n,e[r+1]=t.pos.x,e[r+2]=t.pos.y,e[r+3]=t.pos.z,e[r+4]=t.yaw,e[r+5]=t.holder?2:+!!t.alive}),e}decodeSync(e){let t=e instanceof Float32Array?e:new Float32Array(e.buffer?e.buffer:e);for(let e=0;e<this.count&&e*6+5<t.length;e++){let n=e*6,r=this.fish[e];r.hasNet||=!0;let i=t[n+5];r.netX=t[n+1],r.netY=t[n+2],r.netZ=t[n+3],r.netYaw=t[n+4],i===1&&!r.alive&&!r.holder?(r.alive=!0,r.mesh.visible=!0):i===0&&r.alive&&!r.holder&&(r.alive=!1,r.mesh.visible=!1),i===0&&!r.holder&&(r.mesh.visible=!1,r.alive=!1)}}updateRemote(e){for(let t of this.fish)if(t.hasNet&&!t.holder&&t.alive){t.pos.x=fl(t.pos.x,t.netX,10,e),t.pos.y=fl(t.pos.y,t.netY,10,e),t.pos.z=fl(t.pos.z,t.netZ,10,e);let n=t.netYaw-t.yaw;for(;n>Math.PI;)n-=Math.PI*2;for(;n<-Math.PI;)n+=Math.PI*2;t.yaw+=n*Math.min(1,8*e),t.mesh.rotation.set(0,t.yaw,Math.sin(t.phase*7)*.15)}}dispose(){for(let e of this.fish)this.scene.remove(e.mesh)}},Ul=class{constructor(e){this.scene=e,this.items=[],this._unitCyl=new Ci(1,1,1,6,1,!0),this._plane=new Di(1,1),this.dot=Cl()}_add(e,t,n=null,r=0,i=1){this.scene.add(e);let a=e.material?e.material.opacity:1;return this.items.push({obj:e,ttl:t,life:t,vel:n,grow:r,fade:i,baseOpacity:a}),e}tracer(e,t,n,r=16773544,i=.02){let a=new Hr({color:r,transparent:!0,opacity:.95,blending:2,depthWrite:!1}),o=new ei(this._unitCyl,a);o.position.copy(e).addScaledVector(t,n/2),o.quaternion.setFromUnitVectors(new G(0,1,0),t),o.scale.set(i,n,i),this._add(o,.09)}muzzle(e,t=.3){let n=new Fr(new xr({map:this.dot,color:16769162,transparent:!0,opacity:.95,blending:2,depthWrite:!1}));n.position.copy(e),n.scale.setScalar(t),this._add(n,.06,null,1.5)}impact(e,t=16765562,n=6){for(let r=0;r<n;r++){let n=new Fr(new xr({map:this.dot,color:t,transparent:!0,opacity:.9,depthWrite:!1}));n.position.copy(e),n.scale.setScalar(X(.06,.14));let r=new G(X(-1.6,1.6),X(.5,2.4),X(-1.6,1.6));this._add(n,X(.25,.45),r,-.4)}}bubbles(e,t=6,n=.12){for(let r=0;r<t;r++){let t=new Fr(new xr({map:this.dot,color:14677759,transparent:!0,opacity:.65,depthWrite:!1}));t.position.copy(e),t.position.x+=X(-n,n),t.position.y+=X(-n,n),t.position.z+=X(-n,n),t.scale.setScalar(X(.04,.12));let r=new G(X(-.3,.3),X(.6,1.6),X(-.3,.3));this._add(t,X(.6,1.4),r,.5)}}coinPopup(e,t,n=`#7dff9b`){let r=xl(e,{fontSize:46,color:n,bg:`rgba(6,18,14,0.75)`});r.position.copy(t),this._add(r,1.6,new G(0,.9,0),.06)}popup(e,t,{color:n=`#ffffff`,size:r=60,ttl:i=2.4}={}){let a=xl(e,{fontSize:r,color:n,bg:`rgba(8,20,26,0.8)`});return a.position.copy(t),this._add(a,i,new G(0,.35,0),0),a}inkBurst(e,t=12){for(let n=0;n<t;n++){let t=new Fr(new xr({map:this.dot,color:1709088,transparent:!0,opacity:.85,depthWrite:!1}));t.position.copy(e),t.scale.setScalar(X(.3,.7));let n=new G(X(-1.4,1.4),X(.2,1.8),X(-1.4,1.4));this._add(t,X(.8,1.6),n,.8)}}update(e){for(let t=this.items.length-1;t>=0;t--){let n=this.items[t];n.life-=e;let r=Math.max(n.life/n.ttl,0);n.life<=0?(this.scene.remove(n.obj),n.obj.material&&n.obj.material.dispose(),this.items.splice(t,1)):(n.obj.material&&n.obj.material.transparent&&(n.obj.material.opacity=n.baseOpacity*r),n.vel&&n.obj.position.addScaledVector(n.vel,e),n.grow&&n.obj.scale.multiplyScalar(1+n.grow*e))}}},Wl=class{constructor(e,t,n=null){this.scene=e,this.R=Y.ink.radius,this.life=Y.ink.life,this.ttl=this.life,this.pos=t.clone(),this.ownerId=n,this._visible=n===null;let r=new Oi(1,18,14),i=new Hr({color:1182744,transparent:!0,opacity:.92,depthWrite:!1});this.sphere=new ei(r,i),this.sphere.position.copy(t),this.sphere.scale.setScalar(.4),this.sphere.visible=this._visible,e.add(this.sphere),this.blobs=[];let a=Cl();for(let n=0;n<22;n++){let n=new Fr(new xr({map:a,color:1511455,transparent:!0,opacity:.8,depthWrite:!1}));n.position.copy(t).add(new G(X(-1,1),X(-1,1),X(-1,1))),n.scale.setScalar(X(1.5,3.2)),n.visible=this._visible,n.userData.drift=new G(X(-.35,.35),X(.05,.45),X(-.35,.35)),e.add(n),this.blobs.push(n)}}blocks(e){return e.distanceTo(this.pos)<this.R*.92}update(e){this.ttl-=e;let t=this.life-this.ttl,n=Math.min(t/1.3,1),r=.4+(this.R-.4)*(1-(1-n)**3);this.sphere.scale.setScalar(r),this.sphere.position.y=this.pos.y+Math.sin(t*.8)*.15;let i=1;this.ttl<2.2&&(i=Math.max(this.ttl/2.2,0)),this.sphere.material.opacity=.92*i,this.sphere.visible=this._visible&&i>0;for(let t of this.blobs)t.position.addScaledVector(t.userData.drift,e),t.material.opacity=.8*i,t.visible=this._visible&&i>0;return this.ttl<=0}dispose(){this.scene.remove(this.sphere),this.sphere.geometry.dispose(),this.sphere.material.dispose();for(let e of this.blobs)this.scene.remove(e),e.material.dispose()}};Il();var Gl=class{constructor(e,t,n,r){this.scene=e,this.id=t,this.game=n,this.name=r&&r.name||`Poulpe`,this.fish=r&&r.fish||0,this.headPos=new G(0,5,0),this.headQuat=new lt,this.lHand=new G().copy(this.headPos),this.rHand=new G().copy(this.headPos),this.rHandQuat=new lt,this.scale=1,this.hpNorm=1,this.weaponIdx=0,this.camo=!1,this.alive=!0,this.fishL=-1,this.fishR=-1,this._hasState=!1,this._build(),this._refreshName()}_build(){let e=new sn;this.group=e,this.scene.add(e);let t=new zi({color:4165482,roughness:.6});this.mantleMat=t;let n=new ei(new Oi(.34,14,12),t);n.scale.set(1,.95,1.25),e.add(n);let r=new ei(new wi(.2,.5,10),t);r.position.set(0,.12,.42),r.rotation.x=Math.PI/2.2,e.add(r);let i=new zi({color:16777215,roughness:.3}),a=new zi({color:1052696,roughness:.3});for(let t of[-1,1]){let n=new ei(new Oi(.09,10,10),i);n.position.set(t*.15,.16,-.26),e.add(n);let r=new ei(new Oi(.042,8,8),a);r.position.set(t*.15,.16,-.335),e.add(r)}this.mats=[t,i,a],this.tentL=new Dl({colorRoot:3045972,colorTip:5550467}),this.tentR=new Dl({colorRoot:3045972,colorTip:5550467}),this.deco=[];for(let e=0;e<4;e++)this.deco.push(new Dl({n:10,segLen:.15,radius:.04,stiffness:.02,colorRoot:2449220,colorTip:4165482}));this.scene.add(this.tentL.mesh,this.tentR.mesh);for(let e of this.deco)this.scene.add(e.mesh);this.nameSprite=xl([this.name,`Niv 1`],{fontSize:44,color:[`#eafff5`,`#ffd166`],bg:`rgba(6,20,26,0.7)`}),this.scene.add(this.nameSprite),this._hpCanvas=bl(128,16),this.hpSprite=new Fr(new xr({map:this._hpCanvas.tex,transparent:!0,depthWrite:!1})),this.hpSprite.scale.set(.62,.08,1),this._lastHpDrawn=-1,this.scene.add(this.hpSprite),this._drawHp(),this.gunHolder=new sn,this.scene.add(this.gunHolder),this.gunMesh=null,this._lastWeaponIdx=-1,this._flashT=0}_refreshName(){this.scene.remove(this.nameSprite);let e=Math.floor(this.fish/Y.growth.levelPerFish)+1;this.nameSprite=xl([this.name,`Niv `+e],{fontSize:44,color:[`#eafff5`,`#ffd166`],bg:`rgba(6,20,26,0.7)`}),this.scene.add(this.nameSprite)}_drawHp(){let{ctx:e,canvas:t,tex:n}=this._hpCanvas;e.clearRect(0,0,t.width,t.height),e.fillStyle=`rgba(8,16,20,0.75)`,e.beginPath(),e.roundRect(0,0,t.width,t.height,6),e.fill();let r=Math.max(0,Math.min(1,this.hpNorm))*(t.width-6);e.fillStyle=this.hpNorm>.5?`#54d98c`:this.hpNorm>.25?`#ffd166`:`#ff5a5a`,e.beginPath(),e.roundRect(3,3,r,t.height-6,4),e.fill(),n.needsUpdate=!0}applyState(e){if(!e||e.length<29)return;this.headPos.set(e[0],e[1],e[2]),this.headQuat.set(e[3],e[4],e[5],e[6]),this.lHand.set(e[7],e[8],e[9]),this.rHand.set(e[10],e[11],e[12]),this.scale=e[13],this.hpNorm=e[14],this.weaponIdx=e[15],this.camo=e[16]>.5;let t=Math.round(e[17]);t!==this.fish&&(this.fish=t,this._refreshName()),this.alive=e[18]>.5,this.rHandQuat.set(e[19],e[20],e[21],e[22]),this.fishL=Math.round(e[27]),this.fishR=Math.round(e[28]),this._hasState=!0,Math.abs(this.hpNorm-this._lastHpDrawn)>.02&&(this._drawHp(),this._lastHpDrawn=this.hpNorm)}setMeta(e){e&&(e.name&&e.name!==this.name&&(this.name=e.name,this._refreshName()),typeof e.fish==`number`&&(this.fish=e.fish))}hitFlash(){this._flashT=.15}update(e,t){if(!this._hasState)return;this._renderPos=this._renderPos||this.headPos.clone(),this._renderPos.x=fl(this._renderPos.x,this.headPos.x,14,e),this._renderPos.y=fl(this._renderPos.y,this.headPos.y,14,e),this._renderPos.z=fl(this._renderPos.z,this.headPos.z,14,e),this.group.position.copy(this._renderPos).addScaledVector(this._forward(),-.5*this.scale),this.group.position.y-=.12*this.scale,this.group.rotation.y=Math.atan2(this._forward().x,this._forward().z),this.group.scale.setScalar(this.scale),this.group.visible=this.alive;let n=this._renderPos.clone().add(new G(0,.75*this.scale,0));this.nameSprite.position.copy(n),this.nameSprite.visible=this.alive&&!this.camo,this.hpSprite.position.copy(n).add(new G(0,.16*this.scale,0)),this.hpSprite.visible=this.alive&&!this.camo&&this.hpNorm<.999,this._flashT>0?(this._flashT-=e,this.mantleMat.color.setHex(16734780)):this.mantleMat.color.setHex(4165482);let r=this.camo?Y.abilities.camoOpacity:1;for(let t of this.mats)t.transparent=r<1,t.opacity=fl(t.opacity,r,8,e);for(let t of[this.tentL,this.tentR,...this.deco])t.mesh.material.transparent=r<1,t.mesh.material.opacity=fl(t.mesh.material.opacity,r,8,e);if(this.weaponIdx!==this._lastWeaponIdx){this._lastWeaponIdx=this.weaponIdx,this.gunMesh&&this.gunHolder.remove(this.gunMesh);let e=Y.weapons[ul(this.weaponIdx,0,Y.weapons.length-1)].id;e===`fists`?this.gunMesh=null:(this.gunMesh=Fl(e),this.gunHolder.add(this.gunMesh))}this.gunHolder.position.copy(this.rHand),this.gunHolder.quaternion.copy(this.rHandQuat),this.gunHolder.visible=this.alive;let i=new G(-.24,-.05,-.05).applyMatrix4(this.group.matrixWorld),a=new G(.24,-.05,-.05).applyMatrix4(this.group.matrixWorld);this.tentL.setRoot(i),this.tentL.setTip(this.lHand),this.tentR.setRoot(a),this.tentR.setTip(this.rHand),this.tentL.update(e,t,this.game.world),this.tentR.update(e,t,this.game.world);let o=new G(0,0,1).applyQuaternion(this.group.quaternion),s=[new G(-.16,-.12,.16),new G(.16,-.12,.16),new G(-.06,-.14,.2),new G(.06,-.14,.2)];this.deco.forEach((n,r)=>{let i=s[r].clone().applyMatrix4(this.group.matrixWorld),a=i.clone().addScaledVector(o,.9*this.scale).add(new G(Math.sin(t*1.3+r*1.7)*.3,-.55*this.scale,Math.cos(t*1.1+r)*.2));n.setRoot(i),n.setTip(a),n.update(e,t,this.game.world)});let c=this.game.fish;if(this.fishR>=0&&this.fishR<c.fish.length){let e=c.fish[this.fishR];(e.alive||e.holder===`net`)&&(e.holder=`net`,c.followRemoteHand(e,this.rHand))}if(this.fishL>=0&&this.fishL<c.fish.length){let e=c.fish[this.fishL];(e.alive||e.holder===`net`)&&(e.holder=`net`,c.followRemoteHand(e,this.lHand))}}_forward(e=new G){return e.set(0,0,-1).applyQuaternion(this.headQuat)}get position(){return this._renderPos||this.headPos}dispose(){this.scene.remove(this.group,this.nameSprite,this.hpSprite,this.gunHolder,this.tentL.mesh,this.tentR.mesh);for(let e of this.deco)this.scene.remove(e.mesh)}},Kl=0,ql=class{constructor(e,t,{name:n,level:r,reward:i}){this.scene=e,this.world=t,this.id=`npc_`+ ++Kl,this.name=n,this.level=r,this.reward=i,this.scale=Math.min(1+r*.06,2),this.maxHp=60+r*25,this.hp=this.maxHp,this.dmg=8+r*2,this.dead=!1,this.pos=new G;let a=new G(Y.spawn.x,Y.spawn.y,Y.spawn.z),o=0;do this.pos.set(X(-13,13),X(2,9),X(-9,8)),o++;while(this.pos.distanceTo(a)<8&&o<30);this.vel=new G,this.yaw=X(0,Math.PI*2),this.target=new G,this.stateTimer=0,this.mode=`wander`,this.punchT=X(.5,1.5),this.attackAnim=0,this.fleeT=0,this._flashT=0,this.speed=2.1+r*.05,this._build()}_build(){let e=new sn;this.group=e,this.scene.add(e);let t=new zi({color:9059694,roughness:.6});this.mantleMat=t;let n=new ei(new Oi(.34,14,12),t);n.scale.set(1,.95,1.25),e.add(n);let r=new ei(new wi(.2,.5,10),t);r.position.set(0,.12,.42),r.rotation.x=Math.PI/2.2,e.add(r);let i=new zi({color:16771529,roughness:.3}),a=new zi({color:1576984,roughness:.3});for(let t of[-1,1]){let n=new ei(new Oi(.09,10,10),i);n.position.set(t*.15,.16,-.26),e.add(n);let r=new ei(new Oi(.045,8,8),a);r.position.set(t*.15,.16,-.335),e.add(r)}this.mats=[t,i,a],this.tentF=[new Dl({colorRoot:7220565,colorTip:10504828}),new Dl({colorRoot:7220565,colorTip:10504828})],this.deco=[];for(let e=0;e<3;e++)this.deco.push(new Dl({n:10,segLen:.14,radius:.038,stiffness:.02,colorRoot:5710915,colorTip:7220565}));for(let e of[...this.tentF,...this.deco])this.scene.add(e.mesh);this.nameSprite=xl([`VOYOU — `+this.name,`PRIME : `+this.reward+` ¢`],{fontSize:40,color:[`#ffb0d8`,`#ffd166`],bg:`rgba(30,6,20,0.78)`}),this.scene.add(this.nameSprite)}damage(e){this.dead||(this.hp-=e,this._flashT=.15,this.hp<this.maxHp*.25&&this.fleeT<=0&&(this.fleeT=4),this.hp<=0&&(this.dead=!0))}update(e,t,n,r,i){if(this.dead)return;let a=n.clone().sub(this.pos),o=a.length(),s=!1;for(let e of i)(e.blocks(this.pos)||this.pos.distanceTo(e.pos)<Y.ink.npcBlindRadius)&&(s=!0);s||r?this.mode=`wander`:this.fleeT>0?(this.mode=`flee`,this.fleeT-=e):this.mode=o<8?o<1.5*this.scale?`attack`:`chase`:`wander`;let c=new G,l=this.speed;if(this.mode===`wander`){if(this.stateTimer-=e,this.stateTimer<=0){let e=this.world.bounds;this.target.set(X(e.xmin+2,e.xmax-2),X(1.5,e.topY-1.5),X(e.zmin+2,e.zmax-2)),this.stateTimer=X(2.5,5)}c.copy(this.target).sub(this.pos),c.lengthSq()<1&&(this.stateTimer=0),l*=.6}else this.mode===`chase`?(c.copy(a).normalize(),l*=1.15):this.mode===`attack`?(c.set(0,0,0),this.punchT-=e,this.punchT<=0&&o<2.2*this.scale&&(this.punchT=1.2,this.attackAnim=.35,window.__game&&window.__game.onNpcPunch(this))):this.mode===`flee`&&(c.copy(a).multiplyScalar(-1).normalize(),l*=1.5);if(c.lengthSq()>1e-6){c.normalize();let t=Math.atan2(c.x,c.z)-this.yaw;for(;t>Math.PI;)t-=Math.PI*2;for(;t<-Math.PI;)t+=Math.PI*2;this.yaw+=t*Math.min(1,5*e),this.vel.lerp(c.clone().multiplyScalar(l),Math.min(1,4*e))}else this.vel.multiplyScalar(Math.exp(-3*e));this.pos.addScaledVector(this.vel,e),this.pos.y+=Math.sin(t*1.8+this.id.length)*.003,this.world.collideSphere(this.pos,.45*this.scale),this.group.position.copy(this.pos),this.group.rotation.y=this.yaw,this.group.scale.setScalar(this.scale),this._flashT>0?(this._flashT-=e,this.mantleMat.color.setHex(16734780)):this.mantleMat.color.setHex(9059694);let u=this.pos.clone().add(new G(0,.8*this.scale,0));this.nameSprite.position.copy(u);let d=new G(-.24,-.05,-.05).applyMatrix4(this.group.matrixWorld),f=new G(.24,-.05,-.05).applyMatrix4(this.group.matrixWorld),p=this.attackAnim>0;p&&(this.attackAnim-=e);let m=p&&o<3?n.clone():this.pos.clone().add(new G(-.1,-.6*this.scale,-.7*this.scale).applyQuaternion(this.group.quaternion).add(this.pos)),h=p&&o<3?n.clone():this.pos.clone().add(new G(.1,-.6*this.scale,-.7*this.scale).applyQuaternion(this.group.quaternion).add(this.pos));this.tentF[0].setRoot(d),this.tentF[0].setTip(m),this.tentF[1].setRoot(f),this.tentF[1].setTip(h),this.tentF[0].update(e,t,this.world),this.tentF[1].update(e,t,this.world);let g=new G(0,0,1).applyQuaternion(this.group.quaternion),_=[new G(-.1,-.14,.2),new G(.1,-.14,.2),new G(0,-.15,.22)];this.deco.forEach((n,r)=>{let i=_[r].clone().applyMatrix4(this.group.matrixWorld),a=i.clone().addScaledVector(g,.7*this.scale).add(new G(Math.sin(t*1.4+r)*.25,-.4*this.scale,0));n.setRoot(i),n.setTip(a),n.update(e,t,this.world)})}get bodyCenter(){return this.pos}get bodyRadius(){return .5*this.scale}dispose(){this.scene.remove(this.group,this.nameSprite);for(let e of[...this.tentF,...this.deco])this.scene.remove(e.mesh)}},Jl=`#22333b`,Yl=`#f3ead8`,Xl=`#c8442e`,Zl=`#2e7d4f`,Ql=class{constructor(e,t,n=260){this.wMeters=e,this.hMeters=t;let r=Math.round(e*n),i=Math.round(t*n),{canvas:a,ctx:o,tex:s}=bl(r,i);this.canvas=a,this.ctx=o,this.tex=s,this.W=r,this.H=i,this.buttons=[],this.mesh=new ei(new Di(e,t),new Hr({map:s,toneMapped:!1})),this.mesh.userData.board=this}draw(e){let t=this.ctx;t.setTransform(1,0,0,1,0,0),t.fillStyle=Yl,t.fillRect(0,0,this.W,this.H),this.buttons=[],e(t,this.W,this.H),this.tex.needsUpdate=!0}button(e,t,n,r,i,a,o=Zl){let s=this.ctx;s.fillStyle=o,s.beginPath(),s.roundRect(e,t,n,r,10),s.fill(),s.fillStyle=`#fff`,s.font=`bold 26px system-ui, sans-serif`,s.textAlign=`center`,s.textBaseline=`middle`,s.fillText(i,e+n/2,t+r/2),this.buttons.push({x:e,y:t,w:n,h:r,cb:a})}click(e,t){for(let n of this.buttons)if(e>=n.x&&e<=n.x+n.w&&t>=n.y&&t<=n.y+n.h)return n.cb(),!0;return!1}},$l=class{constructor(e,t,n){this.scene=e,this.game=n,this.cursor=new ei(new Oi(.02,8,8),new Hr({color:8257456})),this.cursor.visible=!1,e.add(this.cursor),this.police=new Ql(3.6,2.2),this.police.mesh.position.copy(t.policeAnchor.pos),this.police.mesh.rotation.y=t.policeAnchor.rotY,e.add(this.police.mesh),this.shop=new Ql(2.6,2.4),this.shop.mesh.position.copy(t.shopAnchor.pos),this.shop.mesh.rotation.y=t.shopAnchor.rotY,e.add(this.shop.mesh),this.stats=new Ql(2.4,1.9),this.stats.mesh.position.copy(t.statsAnchor.pos),this.stats.mesh.rotation.y=t.statsAnchor.rotY,e.add(this.stats.mesh),this._all=[this.police,this.shop,this.stats],this._hit=new Ua,this.dirty=!0,this.redrawAll()}markDirty(){this.dirty=!0}redrawAll(){this._drawPolice(),this._drawShop(),this._drawStats(),this.dirty=!1}_drawPolice(){this.police.draw((e,t,n)=>{e.fillStyle=`#2b3a42`,e.fillRect(0,0,t,n*.13),e.fillStyle=`#ffd166`,e.font=`bold 42px system-ui, sans-serif`,e.textAlign=`center`,e.textBaseline=`middle`,e.fillText(`AVIS DE RECHERCHE — COMMISSARIAT DU BASSIN`,t/2,n*.068);let r=this.game.bounties,i=t/3;r.forEach((t,r)=>{let a=i*r+i/2;this._poster(e,a,n*.18,i*.86,n*.74,t,r)}),r.length||(e.fillStyle=`#8899a0`,e.font=`28px system-ui, sans-serif`,e.fillText(`Aucune prime pour le moment...`,t/2,n/2))})}_poster(e,t,n,r,i,a,o){e.fillStyle=`#e9dcc0`,e.beginPath(),e.roundRect(t-r/2,n,r,i,8),e.fill(),e.strokeStyle=`#b8a888`,e.lineWidth=3,e.strokeRect(t-r/2,n,r,i),e.fillStyle=Xl,e.beginPath(),e.arc(t,n+14,8,0,Math.PI*2),e.fill(),e.fillStyle=Jl,e.font=`bold 24px system-ui, sans-serif`,e.textAlign=`center`,e.textBaseline=`middle`,e.fillText(`AVIS DE RECHERCHE`,t,n+42);let s=n+i*.4,c=.6+Math.min((a.level||1)*.12,1.1);this._octopusPortrait(e,t,s,34*c,a.npc?`#8a3d6e`:`#3f8f6a`),e.fillStyle=Jl,e.font=`bold 27px system-ui, sans-serif`,e.fillText(a.name,t,n+i*.66),e.font=`22px system-ui, sans-serif`,e.fillText(`TAILLE : Niv `+(a.level||1)+(a.npc?`  (VOYOU)`:`  (JOUEUR)`),t,n+i*.74),e.font=`bold 30px system-ui, sans-serif`,e.fillStyle=Xl,e.fillText(`PRIME : `+a.reward+` ¢`,t,n+i*.83),a.status===`done`?(e.fillStyle=`rgba(46,125,79,0.85)`,e.save(),e.translate(t,n+i/2),e.rotate(-.3),e.font=`bold 52px system-ui, sans-serif`,e.textAlign=`center`,e.textBaseline=`middle`,e.fillText(`LIQUIDÉ`,0,0),e.restore()):a.status===`gone`&&(e.fillStyle=`rgba(120,110,90,0.85)`,e.font=`bold 34px system-ui, sans-serif`,e.fillText(`PARTI SE CACHER`,t,n+i/2)),this.police.button(t-r/2+8,n+i-40,r-16,34,a.hint||`VISER POUR TRACKER`,()=>{this.game.trackBounty(o)},`#3a5a68`)}_octopusPortrait(e,t,n,r,i){e.save(),e.fillStyle=i,e.beginPath(),e.ellipse(t,n,r,r*.9,0,0,Math.PI*2),e.fill(),e.strokeStyle=i,e.lineWidth=r*.22,e.lineCap=`round`;for(let i=0;i<4;i++){let a=Math.PI*(.25+i*.17);e.beginPath(),e.moveTo(t+Math.cos(a)*r*.5,n+Math.sin(a)*r*.4),e.quadraticCurveTo(t+Math.cos(a)*r*1.3,n+r*.9,t+Math.cos(a)*r*1.5,n+r*.5+Math.sin(eu())*2),e.stroke()}e.fillStyle=`#fff`;for(let i of[-1,1])e.beginPath(),e.arc(t+i*r*.35,n-r*.25,r*.3,0,Math.PI*2),e.fill(),e.fillStyle=`#182028`,e.beginPath(),e.arc(t+i*r*.35,n-r*.25,r*.13,0,Math.PI*2),e.fill(),e.fillStyle=`#fff`;e.restore()}_drawShop(){let e=this.shop;e.draw((t,n,r)=>{t.fillStyle=`#2b3a42`,t.fillRect(0,0,n,r*.12),t.fillStyle=`#ffd166`,t.font=`bold 40px system-ui, sans-serif`,t.textAlign=`left`,t.textBaseline=`middle`,t.fillText(`ARMURERIE DU RÉCIF`,24,r*.06),t.font=`bold 30px system-ui, sans-serif`,t.fillStyle=`#7dff9b`,t.textAlign=`right`,t.fillText(_l(this.game.player.money),n-24,r*.06);let i=r*.88/Y.weapons.length-4,a=r*.13;for(let r of Y.weapons){if(r.id===`fists`)continue;let o=this.game.player.owned.includes(r.id);t.fillStyle=`#e9dcc0`,t.beginPath(),t.roundRect(16,a,n-32,i,10),t.fill(),t.fillStyle=Jl,t.textAlign=`left`,t.font=`bold 30px system-ui, sans-serif`,t.fillText(r.name,34,a+i*.3),t.font=`20px system-ui, sans-serif`,t.fillStyle=`#5b6b73`;let s=r.dmg?`Dégâts ${r.dmg} — chargeur ${r.mag} — ${r.auto?`auto`:`semi`}`:`Vos deux tentacules`;if(t.fillText(s,34,a+i*.68),o)e.button(n-190,a+i/2-22,160,44,`POSSÉDÉ`,()=>{this.game.player._selectWeaponSlot(this.game.player.owned.indexOf(r.id))},`#3a5a68`);else{let t=this.game.player.money>=r.price;e.button(n-190,a+i/2-22,160,44,`ACHETER`,()=>{this.game.tryBuy(r.id)},t?Zl:`#8a5a4a`)}t.fillStyle=Xl,t.font=`bold 24px system-ui, sans-serif`,t.textAlign=`center`,t.fillText(r.price+` ¢`,n-190+80,a+i/2-34),a+=i+4}})}_drawStats(){let e=this.stats,t=this.game.player;e.draw((e,n,r)=>{e.fillStyle=`#2b3a42`,e.fillRect(0,0,n,r*.12),e.fillStyle=`#ffd166`,e.font=`bold 38px system-ui, sans-serif`,e.textAlign=`center`,e.textBaseline=`middle`,e.fillText(`TON POULPE`,n/2,r*.06);let i=Y.growth.abilities,a=t.unlocked,o=[[`Pseudo`,t.name],[`Poissons mangés`,t.fishCount+`  (Niv `+t.level+`)`],[`Vie max`,Math.round(t.maxHp)+` pv`],[`Vitesse`,`x`+t.speedMult.toFixed(2)],[`Dégâts de tentacule`,Math.round(t.dmgStat)+``],[`Double saut`,a.doubleJump?`ACTIF (A/X)`:`à `+i.doubleJump+` poissons`],[`Dash`,a.dash?`ACTIF (B/Y)`:`à `+i.dash+` poissons`],[`Camouflage`,a.camo?`ACTIF (stick droit)`:`à `+i.camo+` poissons`],[`Encre (3 coups)`,t.hitTimes.length+` / `+Y.combat.inkHits]];e.textAlign=`left`;let s=r*.2;for(let[t,i]of o)e.fillStyle=`#5b6b73`,e.font=`24px system-ui, sans-serif`,e.fillText(t,30,s),e.fillStyle=Jl,e.font=`bold 24px system-ui, sans-serif`,e.fillText(String(i),n-30,s,n*.55),s+=r*.76/o.length})}raycast(e){e&&this._hit.ray.copy(e);let t=null;for(let e of this._all){let n=this._hit.intersectObject(e.mesh,!1)[0];n&&(!t||n.distance<t.distance)&&(t={board:e,point:n.point,uv:n.uv,distance:n.distance})}return t}click(e){if(!e)return!1;let t=e.uv.x*e.board.W,n=(1-e.uv.y)*e.board.H,r=e.board.click(t,n);return r&&this.redrawAll(),r}cursorAt(e){return e&&e.distance<5.5?(this.cursor.visible=!0,this.cursor.position.copy(e.point),!0):(this.cursor.visible=!1,!1)}update(){this.dirty&&this.redrawAll()}};function eu(){return performance.now()/500}var tu=class{constructor(e){this.game=e,this.dirty=!0,this._t=0;let{canvas:t,ctx:n,tex:r}=bl(512,352);this.canvas=t,this.ctx=n,this.tex=r;let i=new Hr({map:r,transparent:!0,toneMapped:!1});this.mesh=new ei(new Di(.115,.079),i),this.mesh.position.set(0,.045,.075),this.mesh.rotation.x=-.6,this.anchor=null,this.el=document.getElementById(`hud`),this.flashEl=document.getElementById(`hitflash`),this.toastEl=document.getElementById(`toasts`)}setWristAnchor(e){this.anchor&&this.anchor.remove(this.mesh),this.anchor=e||this.game.player.camera,this.anchor.add(this.mesh),e?(this.mesh.position.set(0,.045,.075),this.mesh.rotation.set(-.6,0,0)):(this.mesh.position.set(-.26,-.18,-.5),this.mesh.rotation.set(-.25,.35,0)),this.mesh.visible=!0}toast(e,t=3200){if(!this.toastEl)return;let n=document.createElement(`div`);n.className=`toast`,n.textContent=e,this.toastEl.appendChild(n),setTimeout(()=>n.remove(),t)}flashHit(){this.flashEl&&(this.flashEl.style.opacity=`0.55`,clearTimeout(this._flashTo),this._flashTo=setTimeout(()=>{this.flashEl.style.opacity=`0`},160))}draw(){let e=this.game.player,t=this.ctx,n=this.canvas.width,r=this.canvas.height;t.clearRect(0,0,n,r),t.fillStyle=`rgba(6,18,24,0.82)`,t.beginPath(),t.roundRect(0,0,n,r,18),t.fill(),t.strokeStyle=`rgba(140,220,240,0.35)`,t.lineWidth=3,t.stroke(),t.textBaseline=`middle`;let i=Math.max(0,e.hp/e.maxHp);t.fillStyle=`rgba(255,255,255,0.25)`,t.beginPath(),t.roundRect(20,20,n-40,26,8),t.fill(),t.fillStyle=i>.5?`#54d98c`:i>.25?`#ffd166`:`#ff5a5a`,t.beginPath(),t.roundRect(20,20,(n-40)*i,26,8),t.fill(),t.fillStyle=`#eafff5`,t.font=`bold 19px system-ui, sans-serif`,t.textAlign=`center`,t.fillText(Math.ceil(e.hp)+` / `+e.maxHp+` pv`,n/2,33,n-80),t.textAlign=`left`,t.font=`bold 21px system-ui, sans-serif`,t.fillStyle=`#7dff9b`,t.fillText(_l(e.money),20,62),t.fillStyle=`#ffd166`,t.textAlign=`right`,t.fillText(`Poissons : `+e.fishCount+`  (Niv `+e.level+`)`,n-20,62),t.textAlign=`left`,t.font=`bold 20px system-ui, sans-serif`,t.fillStyle=`#eafff5`;let a=Y.weapons.find(t=>t.id===e.curWeapon),o=``;a&&a.dmg&&(o=e.reloadT>0?`RECHARGEMENT...`:(e.ammo[a.id]||0)+` / `+a.mag),t.fillText(`Arme : `+(a?a.name:`Poings`)+(o?`  —  `+o:``),20,96);let s=Y.combat.inkHits;for(let n=0;n<s;n++)t.fillStyle=n<e.hitTimes.length?`#8f7dff`:`rgba(255,255,255,0.2)`,t.beginPath(),t.arc(30+n*24,128,9,0,Math.PI*2),t.fill();t.fillStyle=`#cfd8de`,t.font=`17px system-ui, sans-serif`,t.textAlign=`left`,t.fillText(`encre auto`,110,128);let c=e.unlocked,l=[[`SAUT x`+(c.doubleJump?2:1),!0,e.jumpCharges],[`DASH`,c.dash,+(e.dashCd<=0)],[`CAMO`,c.camo&&!e.camoActive,+(e.camoCd<=0)]],u=20;t.font=`bold 16px system-ui, sans-serif`;for(let[e,n,r]of l){t.fillStyle=n&&r?`#7dff9b`:`rgba(255,255,255,0.35)`,t.beginPath(),t.roundRect(u,150,148,30,8),t.fill(),t.fillStyle=n?`#0a1a20`:`rgba(10,26,32,0.8)`;let i=e+(n&&typeof r==`number`&&e.startsWith(`SAUT`)?` (`+r+`)`:``);t.fillText(i,u+10,165),u+=158}t.textAlign=`right`,t.fillStyle=`#9fb6c2`,t.font=`16px system-ui, sans-serif`;let d=this.game.net?this.game.net.peerCount:0;t.fillText(`Bassin : `+(d+1)+` poulpe`+(d?`s`:``),n-20,200),t.textAlign=`left`,t.font=`14px system-ui, sans-serif`,t.fillStyle=`#7f97a3`,t.fillText(`Commissariat au fond du bassin : avis de recherche + armurerie`,20,r-24),this.tex.needsUpdate=!0}drawDesktop(){let e=this.game.player,t=Y.weapons.find(t=>t.id===e.curWeapon),n=e.unlocked,r=Math.max(0,e.hp/e.maxHp);this.el.innerHTML=`
      <div class="row"><span class="k">Vie</span><div class="bar"><div class="fill" style="width:${r*100}%;background:${r>.5?`#54d98c`:r>.25?`#ffd166`:`#ff5a5a`}"></div></div></div>
      <div class="row"><span class="k">Argent</span><span class="v money">${_l(e.money)}</span>
      <span class="k">Poissons</span><span class="v">${e.fishCount} (Niv ${e.level})</span></div>
      <div class="row"><span class="k">Arme</span><span class="v">${t?t.name:`Poings`}${t&&t.dmg?e.reloadT>0?` — RECHARGE`:` — `+(e.ammo[t.id]||0)+`/`+t.mag:``}</span>
      <span class="k">Encre</span><span class="v">${e.hitTimes.length}/${Y.combat.inkHits}</span></div>
      <div class="row small">SAUT ${n.doubleJump?`x2`:`x1`} · DASH ${n.dash?`E`:`à `+Y.growth.abilities.dash+` poissons`} · CAMO ${n.camo?`X`:`à `+Y.growth.abilities.camo+` poissons`}</div>
      <div class="row small">WASD nager · Z monter · C descendre · clic tirer/poing · F saisir/manger · 1-4 armes</div>
    `}update(e){this._t+=e,this.game.renderer.xr.isPresenting?(this.mesh.visible=!this.game.player.dead,(this.dirty||this._t>.25)&&(this._t=0,this.draw(),this.dirty=!1)):(this.dirty||this._t>.25)&&(this._t=0,this.drawDesktop(),this.dirty=!1)}},nu=new TextEncoder,ru=new TextDecoder,iu=`Trystero`,au=`trystero`,ou=(e,t)=>`${au}:${e}:v${t}`,su=Symbol.for(`${au}.socketInitialFailure`),cu=Symbol.for(`${au}.slot`),Z=e=>Error(`${iu}: ${e}`),lu=e=>{throw Z(e)},uu=JSON.stringify,du=e=>{try{return JSON.parse(e)}catch{throw Z(`failed to parse JSON (${e.length} bytes)`)}},fu=e=>nu.encode(e),pu=(e,t)=>nu.encodeInto(e,t),mu=e=>{let t=0;for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);r<128?t+=1:r<2048?t+=2:r>=55296&&r<=56319&&n+1<e.length&&(e.charCodeAt(n+1)&64512)==56320?(t+=4,n++):t+=3}return t},hu=e=>ru.decode(e),gu={alphabet:`base64url`,omitPadding:!0},_u={alphabet:`base64url`},vu=Uint8Array.prototype.toBase64,yu=Uint8Array.fromBase64,bu=typeof vu==`function`?e=>vu.call(e,gu):e=>{let t=``;for(let n=0;n<e.byteLength;n++)t+=String.fromCharCode(e[n]);return btoa(t).replace(/\+/g,`-`).replace(/\//g,`_`).replace(/=+$/g,``)},xu=typeof yu==`function`?e=>yu(e,_u):e=>{let t=e.replace(/-/g,`+`).replace(/_/g,`/`),n=atob(t+`=`.repeat((4-t.length%4)%4)),r=new Uint8Array(n.length);for(let e=0;e<n.length;e++)r[e]=n.charCodeAt(e);return r},Su=`0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz`,Cu=/^[A-Za-z0-9_-]+$/,wu=e=>{let t=0n;for(let n of e)t=t<<8n|BigInt(n);return t},Tu=(e,t)=>{if(e.byteLength!==t.byteLength)return!1;for(let n=0;n<e.byteLength;n++)if(e[n]!==t[n])return!1;return!0},Eu=e=>{let t=fu(e),n=2166136261;for(let e=0;e<t.byteLength;e++)n=Math.imul(n^t[e],16777619);return n^=n>>>16,n=Math.imul(n,2246822507),n^=n>>>13,n=Math.imul(n,3266489909),(n^n>>>16)>>>0},Du=(e=4096)=>{let t=new Map;return{get size(){return t.size},get:e=>{if(!t.has(e))return;let n=t.get(e);return t.delete(e),t.set(e,n),n},has:e=>t.has(e),set:(n,r)=>{if(t.has(n))t.delete(n);else if(t.size>=e){let e=t.keys().next().value;e!==void 0&&t.delete(e)}t.set(n,r)},delete:e=>t.delete(e),clear:()=>t.clear(),keys:()=>[...t.keys()],entries:()=>[...t.entries()]}},Ou=()=>{},ku=(e,t)=>console.error(`${iu} ${e} error:`,t),Au=(e,t)=>{let n=new Set,r=0,i=(t,n)=>{try{let r=t(...n);r&&typeof r.then==`function`&&Promise.resolve(r).catch(t=>ku(e,t))}catch(t){ku(e,t)}};return[(a,o,s)=>{if(typeof a!=`function`)throw Z(`${e.endsWith(`handler`)?e:`${e} handler`} must be a function`);let c=o?.signal;if(c?.aborted)return Ou;let l=!!o?.once,u=c?new AbortController:null,d,f=()=>{switch(d.phase){case`closed`:return;case`replaying`:{let e=d.abortCleanup;d={phase:`closed`},e?.abort();return}case`live`:{let{entry:e,abortCleanup:r}=d;d={phase:`closed`},r?.abort(),n.delete(e)&&n.size===0&&t?.(!1);return}default:lu(d)}},p=[(...e)=>{d.phase===`live`&&(l&&f(),i(a,e))},f],m=()=>{switch(d.phase){case`replaying`:{if(d.epoch!==r){f();return}let e=n.size===0;d={phase:`live`,entry:p,abortCleanup:d.abortCleanup},n.add(p),e&&t?.(!0);return}case`live`:case`closed`:return;default:lu(d)}};if(d={phase:`replaying`,epoch:r,abortCleanup:u},u&&c&&c.addEventListener(`abort`,f,{once:!0,signal:u.signal}),o?.replay&&s){let e=()=>d;for(let t of s()){let n=e();if(n.phase!==`replaying`||n.epoch!==r){f();break}l&&f(),i(a,t)}}return m(),f},(...e)=>{for(let t of Array.from(n))t[0](...e)},()=>{r++;for(let e of Array.from(n))e[1]()},()=>n.size>0]},ju=(e,t)=>{let n=null;return[(r,i)=>{if(typeof r!=`function`)throw Z(`${e} handler must be a function`);let a=i?.signal;if(a?.aborted)return Ou;if(n)throw Z(`${e} handler already registered; unsubscribe first`);let o=!!i?.once,s=a?new AbortController:null,c=!0,l=()=>{c&&(c=!1,s?.abort(),n?.[1]===l&&(n=null,t?.(null)))},u=((...e)=>{if(c)return o&&l(),r(...e)});return n=[u,l],s&&a&&a.addEventListener(`abort`,l,{once:!0,signal:s.signal}),t?.(u),l},()=>n?.[0]??null,()=>n?.[1]()]},Mu=(e,t)=>{for(let n of t){let t=e[n];Object.defineProperty(e,n,{get:()=>t,set:()=>{throw TypeError(`${iu}: ${n} is a method; call ${n}(handler), which returns an unsubscribe function`)},enumerable:!0,configurable:!0})}return e},Nu=`__${au}Auth`,Pu=(e,t)=>e<t?-1:+(e>t),Fu=e=>console.warn(`${iu}: ${e}`),Iu=e=>Fu(`no peer with id ${e} found`),Lu=()=>Fu(`roles({selfAsAdmin: true}) with an ephemeral identity orphans the room on close; use identity: 'local' or an imported UserIdentity`),Ru=(e,t)=>console.error(`${iu} ${e} error:`,t),zu=e=>Ru(`action handler`,e),Bu=`peer disconnected`,Vu=Z(Bu),Hu=`peer banned`,Uu=Z(Hu),Wu=(e,t)=>({code:`banned`,message:e?`${Hu}: ${e}`:Hu,...e===void 0?{}:{reason:e},...t?{peerId:t}:{}}),Gu=Z(`peer left room`),Ku=Z(`room left`),qu=`room full`,Ju=Z(qu),Yu=`operation aborted`,Xu=`insufficient authority`,Zu=Z(`invalid ECDSA P-256 public key`),Qu=e=>Z(`${e} must be a positive safe integer`),$u=e=>Z(`${e} requires roles() in joinRoom config`),ed=$u(`self-certifying room ID`),td=e=>Z(`action type "${e}" cannot be redefined`),nd=e=>`invalid action ${e}`,rd=e=>`no active peer with id ${e}`,id=e=>Z(`${e} is required`),{floor:ad}=Math,od=(e,t)=>Array(e).fill(void 0).map(t),sd=248,cd=e=>{if(e<=0)return``;let t=new Uint8Array(Math.ceil(e*1.15)+4),n=``;for(;n.length<e;){crypto.getRandomValues(t);for(let r=0;r<t.byteLength&&n.length<e;r++){let e=t[r];e<sd&&(n+=Su[e%62])}}return n},ld=Promise.all.bind(Promise),ud=typeof window<`u`,dd=Object.entries,fd=Object.fromEntries,pd=Object.keys,md=Object.values,Q=()=>{},hd=`candidate`,gd=e=>(e!=null&&clearTimeout(e),null),_d=e=>{e?.unref?.()},vd=(e,t)=>e instanceof Error&&e.message?e.message:typeof e==`string`&&e?e:uu(e??t),yd=(e,t)=>e instanceof Error?e:Z(vd(e,t)),bd=(...e)=>uu(e),xd=(e,t)=>{let n=[...e],r=(Math.trunc(t)||1)>>>0,i=()=>{r=r+1831565813>>>0;let e=Math.imul(r^r>>>15,1|r);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296},a=n.length;for(;a;){let e=ad(i()*a--),t=n[a];n[a]=n[e],n[e]=t}return n},Sd=(e,t=2**53-1)=>Eu(e)%t,Cd=new WeakSet,wd=e=>(Cd.add(e),e),Td=e=>wd(Z(e)),Ed=RegExp(`^[0-9A-Za-z]{22}$`),Dd=RegExp(`^(.+)~([0-9A-Za-z]{22})$`),Od=e=>{let t=Dd.exec(e);return t?.[1]&&t[2]?[t[1],t[2]]:[e,null]},kd=(e,t)=>`${Od(e)[0]}~${t}`,Ad=e=>{if(typeof Blob<`u`&&e instanceof Blob)return[2,e];if(e instanceof ArrayBuffer||ArrayBuffer.isView(e))return[2,e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)];let t=typeof e==`string`;return[+!t,fu(t?e:uu(e))]},jd=(e,t)=>e.some(({urls:e})=>[e].flat().some(e=>t.test(e))),Md=e=>!(!e||typeof e!=`object`||Array.isArray(e)),Nd=e=>typeof e==`string`&&e.length>0,Pd=e=>typeof e==`number`&&Number.isSafeInteger(e)&&e>0,Fd=e=>typeof e==`string`&&e.length>=64&&e.length<=128,Id=e=>Md(e)&&e.v===1&&Nd(e.certId)&&Nd(e.issuerPubKey)&&Nd(e.subUserId)&&Nd(e.appId)&&Nd(e.roomId)&&Array.isArray(e.roles)&&e.roles.length>0&&e.roles.every(Nd)&&Pd(e.seq)&&Pd(e.iat)&&Fd(e.sig),Ld=(e,t,n=3e4)=>{let r=Du(e);return[e=>{let i=Date.now(),a=r.get(e);return(!a||i-a[1]>n)&&(a=[0,i],r.set(e,a)),++a[0]>=t},e=>{r.delete(e)},e=>{let i=r.get(e);return!!(i&&Date.now()-i[1]<=n&&i[0]>=t)}]},Rd=2,zd=1500,Bd=15e3,Vd=32,Hd=1e4,Ud=e=>e===void 0||typeof e==`string`&&e.length<=512,Wd=(e,t)=>{let n=(2166136261^t)>>>0;for(let t=0;t<e.length;t++)n^=e.charCodeAt(t),n=Math.imul(n,16777619)>>>0;return n},Gd=e=>e.phase===`in-flight`||e.phase===`completed`,Kd=({fanout:e=Rd,pullTimeoutMs:t=zd,periodicIntervalMs:n=Bd,maxPages:r=Vd,canSync:i=()=>!0,getDirectPeers:a,isPeerSendable:o,sendPull:s})=>{let c=crypto.getRandomValues(new Uint32Array(1))[0],l=new Map,u=`active`,d=0,f=()=>{let e=0;for(let t of l.values())t.phase===`completed`&&e++;return e},p=()=>{let e=0;for(let t of l.values())Gd(t)&&e++;return e},m=()=>{for(let e of l.values())if(e.phase===`in-flight`)return!0;return!1},h=e=>{let t=l.get(e);if(t)switch(t.phase){case`in-flight`:gd(t.timer),l.delete(e);return;case`completed`:case`cooldown`:l.delete(e);return;default:lu(t)}},g=(e,t)=>{let n=l.get(e);return n?.phase===`cooldown`?t>=n.until?(l.delete(e),!1):!0:!1},_=(e=!0)=>{let t=Date.now();return a().filter(n=>o(n)&&(!e||!g(n,t))).map(e=>[e,Wd(e,c)]).sort((e,t)=>e[1]-t[1]||Pu(e[0],t[0])).map(([e])=>e)},v=(t,n)=>{let r=l.get(t);u!==`closed`&&r?.phase===`in-flight`&&r.pullId===n&&(gd(r.timer),o(t)?l.set(t,{phase:`cooldown`,until:Date.now()+Hd}):l.delete(t),f()<e&&x())},y=(e,n)=>{let r=setTimeout(()=>v(e,n),t);return _d(r),r},b=(e,t,n=0,a=!1)=>{if(u===`closed`||!i()||n>=r||!o(e))return h(e),!1;let c=l.get(e);c?.phase===`in-flight`&&gd(c.timer);let d=Symbol(),f=y(e,d);return l.set(e,{phase:`in-flight`,pullId:d,timer:f,pages:n+1,staleDigest:a}),Promise.resolve().then(()=>s(e,t)).catch(()=>v(e,d)),!0},x=()=>{if(u===`closed`||!i())return;let t=p();for(let n of _()){if(t>=e)break;!l.has(n)&&b(n)&&t++}},S=(e,t=!1)=>{if(u===`closed`||!i())return;let n=l.get(e);if(!n)b(e);else switch(n.phase){case`in-flight`:t&&!n.staleDigest&&l.set(e,{...n,staleDigest:!0});return;case`completed`:t&&b(e);return;case`cooldown`:b(e);return;default:lu(n)}},C=(e,t)=>{let n=l.get(e);u!==`closed`&&n?.phase===`in-flight`&&(t&&n.pages<r?b(e,t,n.pages,n.staleDigest):(gd(n.timer),n.staleDigest?(l.delete(e),b(e)):l.set(e,{phase:`completed`})))},w=(e,t=!1)=>{if(u===`closed`)return;let n=l.get(e);n?.phase===`in-flight`?n.staleDigest||l.set(e,{...n,staleDigest:!0}):l.delete(e),t&&S(e,!0),x()},T=t=>{h(t),u!==`closed`&&f()<e&&x()},E=()=>{u===`active`&&a().length!==0&&(u=`repull-queued`,queueMicrotask(()=>{if(u===`repull-queued`&&(u=`active`,i())){for(let[e,t]of l)switch(t.phase){case`completed`:l.delete(e);break;case`in-flight`:t.staleDigest||l.set(e,{...t,staleDigest:!0});break;case`cooldown`:break;default:lu(t)}x()}}))},D=n>0?setInterval(()=>{if(u===`closed`||!i()||m())return;let e=_();if(e.length===0&&(e=_(!1)),e.length===0)return;let t=e[d++%e.length];b(t)},n):void 0;return _d(D),{pullPeer:S,onSyncPage:C,onPeerJoined:w,onPeerDisconnected:T,scheduleRepull:E,isPullInFlight:e=>l.get(e)?.phase===`in-flight`,destroy:()=>{u=`closed`,D!==void 0&&clearInterval(D);for(let e of l.values())e.phase===`in-flight`&&gd(e.timer);l.clear()}}},qd={name:`ECDSA`,namedCurve:`P-256`},Jd={name:`ECDSA`,hash:`SHA-256`},Yd=`AES-GCM`,Xd=12,Zd=`HMAC`,Qd=6e5,$d=new Uint8Array(32),ef=fu(ou(`room-aes`,3)),tf=fu(ou(`room-hmac`,3)),nf=Du(4096),rf=Du(64),af=115792089210356248762697446949407573529996955224135760342422259061068512044369n,of=af>>1n,sf=e=>{if(e.byteLength!==64)return e;let t=wu(e.subarray(32,64));if(t<=of)return e;let n=e.slice(),r=af-t;for(let e=63;e>=32;e--)n[e]=Number(r&255n),r>>=8n;return n},cf=e=>{if(e.byteLength!==64)return!1;let t=wu(e.subarray(0,32)),n=wu(e.subarray(32,64));return t>0n&&t<af&&n>0n&&n<=of},lf=async e=>new Uint8Array(await crypto.subtle.digest(`SHA-256`,typeof e==`string`?fu(e):e)),uf=async(e,t)=>sf(new Uint8Array(await crypto.subtle.sign(Jd,e,t))),df=(e,t,n)=>crypto.subtle.verify(Jd,e,t,n),ff=async e=>{let t=nf.get(e);if(t!==void 0)return t;let n=bu(await lf(e));return nf.set(e,n),n},pf=(e,t,n)=>{let r=uu([e,t,n]),i=rf.get(r);if(i)return i;let a=(async()=>{let[r,i]=await Promise.all([crypto.subtle.importKey(`raw`,fu(e),`PBKDF2`,!1,[`deriveBits`]),lf(uu([ou(`pbkdf2-master`,3),t,n]))]),a=new Uint8Array(await crypto.subtle.deriveBits({name:`PBKDF2`,salt:i,iterations:Qd,hash:`SHA-256`},r,256));try{let e=await crypto.subtle.importKey(`raw`,a,`HKDF`,!1,[`deriveKey`]),[t,n]=await Promise.all([crypto.subtle.deriveKey({name:`HKDF`,hash:`SHA-256`,salt:$d,info:ef},e,{name:Yd,length:256},!1,[`encrypt`,`decrypt`]),crypto.subtle.deriveKey({name:`HKDF`,hash:`SHA-256`,salt:$d,info:tf},e,{name:Zd,hash:`SHA-256`,length:256},!1,[`sign`,`verify`])]);return{aesKey:t,hmacKey:n}}finally{a.fill(0)}})();return a.catch(()=>{rf.delete(r)}),rf.set(r,a),a},mf=async(e,t,n)=>{if(!e){let e=await lf(uu([ou(`room-aes`,3),t,n]));return crypto.subtle.importKey(`raw`,e,{name:Yd},!1,[`encrypt`,`decrypt`])}return(await pf(e,t,n)).aesKey},hf=(e,t)=>t===void 0?{name:Yd,iv:e}:{name:Yd,iv:e,additionalData:fu(t)},gf=async(e,t,n)=>{let r=crypto.getRandomValues(new Uint8Array(Xd)),i=new Uint8Array(await crypto.subtle.encrypt(hf(r,n),await e,fu(t))),a=new Uint8Array(Xd+i.byteLength);return a.set(r,0),a.set(i,Xd),bu(a)},_f=async(e,t,n)=>{if(typeof t!=`string`||!Cu.test(t))throw Z(`invalid ciphertext`);let r=xu(t);if(r.byteLength<28||bu(r)!==t)throw Z(`invalid ciphertext`);return hu(await crypto.subtle.decrypt(hf(r.subarray(0,Xd),n),await e,r.subarray(Xd)))},vf=`${au}:user_identity:v1:`,yf=`${au}_identity_v1`,bf=`identities`,xf=e=>Z(`IndexedDB ${e} failed`),Sf=fu(ou(`idb-key-probe`,1)),Cf=e=>({userId:e.userId,signPubJwk:e.signPubJwk,sign:t=>uf(e.privateKey,t)}),wf=()=>new Promise((e,t)=>{let n=indexedDB.open(yf,1);n.onupgradeneeded=()=>{let e=n.result;e.objectStoreNames.contains(bf)||e.createObjectStore(bf)},n.onsuccess=()=>e(n.result),n.onerror=()=>t(n.error??xf(`open`))}),Tf=(e,t)=>new Promise((n,r)=>{let i=e.transaction(bf,`readonly`).objectStore(bf).get(t);i.onsuccess=()=>n(i.result),i.onerror=()=>r(i.error??xf(`get`))}),Ef=(e,t,n)=>new Promise((r,i)=>{let a=e.transaction(bf,`readwrite`),o,s=e=>{switch(o.phase){case`pending`:case`staged`:o={phase:`staged`,value:e};return;case`done`:return;default:lu(o)}},c=e=>{switch(o.phase){case`pending`:case`staged`:o={phase:`done`},i(e instanceof Error?e:a.error??xf(n));return;case`done`:return;default:lu(o)}};o={phase:`pending`},a.oncomplete=()=>{switch(o.phase){case`staged`:{let{value:e}=o;o={phase:`done`},r(e);return}case`pending`:o={phase:`done`},i(xf(n));return;case`done`:return;default:lu(o)}},a.onabort=()=>c(a.error),a.onerror=e=>c(e?.target?.error??a.error);try{t(a.objectStore(bf),s)}catch(e){c(e)}}),Df=(e,t,n)=>Ef(e,(e,r)=>{r(n),e.put(n,t)},`put`),Of=(e,t,n)=>Ef(e,(e,r)=>{let i=e.get(t);i.onsuccess=()=>{let a=i.result;a===void 0?(r([n,!1]),e.add(n,t)):r([a,!0])}},`add`),kf=async(e,t,n)=>{if(!e||typeof e!=`object`||!e.userId||!e.signPubJwk||!e.privateKey||!await t(e.userId,e.signPubJwk))return!1;try{return await n(await uf(e.privateKey,Sf),Sf,e.signPubJwk)}catch{return!1}},Af=async(e,t)=>{let n=`${vf}${e}`,r=async()=>{let e=await wf();try{return await t(e)}finally{e.close()}},i=typeof navigator<`u`?navigator.locks:void 0;return typeof i?.request==`function`?i.request(n,r):r()},jf=(e,t,n,r)=>Af(e,async i=>{let a=async a=>await kf(a,n,r)?a:Df(i,e,await t()),o=await Tf(i,e);if(o!==void 0)return Cf(await a(o));let[s,c]=await Of(i,e,await t());return Cf(c?await a(s):s)}),Mf=62n,Nf=4096,Pf=2097152,Ff=8192,If=fu(ou(`identity-self-test`,1)),Lf=Z(`invalid custom user identity; userId does not match signPubJwk`),Rf=Z(`invalid custom user identity; use "local", "none", loader, or importUserIdentity()`),zf=Z(`invalid custom user identity signature; sign() must return a valid 64-byte IEEE P1363 ECDSA P-256 SHA-256 signature`),Bf=(e,t)=>{let n=Mf**BigInt(t),r=wu(e)%n,i=``;for(let e=0;e<t;e++)i=Su[Number(r%Mf)]+i,r/=Mf;return i},Vf=e=>{let t,n;if(typeof e==`string`){if(e.length!==87||e[43]!==`.`)return null;t=e.slice(0,43),n=e.slice(44)}else{if(!e||typeof e!=`object`||e.d!==void 0||e.kty&&e.kty!==`EC`||e.crv&&e.crv!==`P-256`||typeof e.x!=`string`||typeof e.y!=`string`||!e.x||!e.y)return null;t=e.x,n=e.y}try{let e=xu(t),r=xu(n);if(e.byteLength!==32||r.byteLength!==32||bu(e)!==t||bu(r)!==n)return null;let i=new Uint8Array(65);return i[0]=4,i.set(e,1),i.set(r,33),i}catch{return null}},Hf=(e=``,t=``,n=`P-256`,r=`EC`)=>({crv:n,kty:r,x:e,y:t}),Uf=e=>{if(typeof e==`object`&&e){let t=qf.get(e);if(t)return t.compactPub}return Vf(e)?typeof e==`string`?e:`${e.x}.${e.y}`:null},Wf=e=>{let t=Uf(e);if(!t)throw Zu;return t},Gf=e=>typeof e==`string`&&Vf(e)?Hf(e.slice(0,43),e.slice(44)):null,Kf=Du(),qf=new WeakMap,Jf=new Map,Yf=e=>{if(typeof e==`object`&&e){let t=qf.get(e);if(t)return t}let t=Uf(e);return t?Kf.get(t):void 0},Xf=(e,t)=>{if(typeof e==`object`&&e){let t=qf.get(e);if(t)return Promise.resolve(t)}let n=Vf(e);if(!n)return Promise.resolve(null);let r=typeof e==`string`?e.slice(0,43):e.x,i=typeof e==`string`?e.slice(44):e.y,a=`${r}.${i}`,o=Kf.get(a);if(o)return Promise.resolve(o);let s=Jf.get(a);if(s)return s;let c=(async()=>{try{let[e,o,s]=await Promise.all([t?Promise.resolve(t):crypto.subtle.importKey(`raw`,n,qd,!1,[`verify`]),lf(`${ou(`pid`,1)}:${a}`),lf(`${ou(`uid`,1)}:${a}`)]),c=Object.freeze(Hf(r,i)),l={compactPub:a,cleanJwk:c,verifyKey:e,peerId:Bf(o,20),userId:Bf(s,22)};return qf.set(c,l),Kf.set(a,l),l}catch{return null}finally{Jf.delete(a)}})();return Jf.set(a,c),c},Zf=e=>typeof e==`string`&&Ed.test(e),Qf=(()=>{let e=new Map,t=0;return{get:t=>{let n=e.get(t);return n!==void 0&&(e.delete(t),e.set(t,n)),n},set:(n,r)=>{let i=e.get(n);for(i!==void 0&&(t-=i.byteLength,e.delete(n));e.size>=Ff||e.size>0&&t+r.byteLength>Pf;){let n=e.keys().next().value;if(n===void 0)break;let r=e.get(n);r&&(t-=r.byteLength),e.delete(n)}e.set(n,r),t+=r.byteLength}}})(),$f=new Map,ep=(e,t,n)=>{if(!e||e.byteLength!==64)return!1;let r=Yf(n);if(r&&t.byteLength<=Nf){let n=Qf.get(`${r.compactPub}:${bu(e)}`);if(n)return Tu(n,t)}return tp(e,t,n,r)},tp=async(e,t,n,r)=>{let i=r??await Xf(n);if(!i)return!1;if(t.byteLength>Nf){if(!cf(e))return!1;try{return await df(i.verifyKey,e,t)}catch{return!1}}let a=`${i.compactPub}:${bu(e)}`,o=Qf.get(a);if(o)return Tu(o,t);if(!cf(e))return!1;let s=$f.get(a);if(s&&Tu(s[0],t))return s[1];let c=t.slice(),l=df(i.verifyKey,e,c).then(e=>e?(Qf.set(a,c),$f.get(a)?.[1]===l&&$f.delete(a),!0):($f.get(a)?.[1]===l&&$f.delete(a),!1),()=>($f.get(a)?.[1]===l&&$f.delete(a),!1));return $f.set(a,[c,l]),l},np=(e,t,n)=>{let r=Yf(t);return r?r[n]===e:Xf(t).then(t=>!!(t&&t[n]===e))},rp=(e,t)=>!!(e&&typeof e==`string`)&&np(e,t,`peerId`),ip=(e,t)=>Zf(e)&&np(e,t,`userId`),ap=async e=>{let t=await crypto.subtle.generateKey(qd,e,[`sign`,`verify`]),n=await crypto.subtle.exportKey(`jwk`,e?t.privateKey:t.publicKey),r=await Xf(Hf(n.x,n.y),t.publicKey);if(!r)throw Zu;return[t,n,r]},op=`__default__`,sp=8,cp=e=>e||op,lp=new Map,up=Du(),dp=Du(),fp=e=>{let t=lp.get(e);return t||(t={epoch:0,inFlightLoad:null,opTail:Promise.resolve()},lp.set(e,t)),t},pp=(e,t)=>{let n=e.opTail.catch(Q).then(t);return e.opTail=n.catch(Q),n},mp=0,hp=()=>`c${++mp}`,gp=(e,t=``,n=fp(e).epoch)=>`${t}\0${n}\0${e}`,_p=()=>ap(!1).then(([e,,t])=>({peerId:t.peerId,signPrivateKey:e.privateKey,signPublicKey:e.publicKey,signPubJwk:t.cleanJwk,sign:t=>uf(e.privateKey,t)})),vp=(e,t)=>{let n=gp(cp(e),t),r=up.get(n);if(r)return r;let i=_p();return i.catch(()=>{up.get(n)===i&&up.delete(n)}),up.set(n,i),i},yp=new WeakMap,bp=new WeakSet,xp=async()=>{let[e,,t]=await ap(!1);return{userId:t.userId,signPubJwk:t.cleanJwk,privateKey:e.privateKey}},Sp=()=>xp().then(e=>{let t=Cf(e);return bp.add(t),t}),Cp=e=>!!(e&&typeof e==`object`&&typeof e.userId==`string`&&Zf(e.userId)&&e.signPubJwk&&Vf(e.signPubJwk)&&typeof e.sign==`function`),wp=(e,t,n=e.signPubJwk)=>{let r=bp.has(e),i={userId:e.userId,signPubJwk:n,sign:r?e.sign:async t=>sf(new Uint8Array(await e.sign(t))),persistence:t},a=yp.get(e);return a!==void 0&&yp.set(i,a),r&&bp.add(i),i},Tp=async e=>{if(!Cp(e))throw Rf;let t=await Xf(e.signPubJwk);if(!t||t.userId!==e.userId)throw Lf;if(!bp.has(e)){let n;try{n=new Uint8Array(await e.sign(If.slice()))}catch(e){throw Z(`custom user identity sign() failed startup check: ${e instanceof Error?e.message:String(e)}`)}let r=sf(n);if(r.byteLength!==64||!await df(t.verifyKey,r,If))throw zf}return wp(e,e.persistence??`custom`,t.cleanJwk)},Ep=()=>{try{return typeof globalThis<`u`&&`indexedDB`in globalThis&&!!globalThis.indexedDB}catch{return!1}},Dp=e=>e===`none`||(e===void 0||e===`local`)&&!Ep(),Op=e=>{let t=e?.identity;if(t!==void 0&&t!==`none`&&t!==`local`&&typeof t!=`function`){if(Cp(t)){let e=Yf(t.signPubJwk);if(e&&e.userId!==t.userId)throw Lf}else throw Rf}},kp=(e,t=``,n=fp(e).epoch)=>{let r=gp(e,t,n),i=dp.get(r);if(i)return i;let a=Sp().then(e=>wp(e,`none`));return a.catch(()=>{dp.get(r)===a&&dp.delete(r)}),dp.set(r,a),a},Ap=Z(`identity epoch superseded by clearUserIdentity`),jp=(e,t,n)=>{let r=pp(t,async()=>{if(t.epoch!==n)throw Ap;let r=await jf(e,xp,ip,ep);return bp.add(r),wp(r,`local`)}).finally(()=>{t.inFlightLoad?.promise===r&&(t.inFlightLoad=null)});return t.inFlightLoad={epoch:n,promise:r},r},Mp=async(e,t,n,r)=>{let i=n?.identity;if(typeof i==`function`)return Tp(await i({appId:e,roomId:t}));if(i!==void 0&&i!==`none`&&i!==`local`)return Tp(i);let a=cp(e),o=fp(a);if((i===`none`||i===`local`?i:Ep()?`local`:`none`)===`none`)return kp(a,r,o.epoch);if(!Ep())return Fu(`IndexedDB unavailable; falling back to identity: 'none'`),kp(a,r,o.epoch);for(let e=0;e<sp;e++){let e=o.epoch,t=o.inFlightLoad?.epoch===e?o.inFlightLoad.promise:jp(a,o,e);try{let n=await t;if(o.epoch===e)return n}catch{if(o.epoch!==e)continue;return Fu(`IndexedDB unavailable; falling back to identity: 'none'`),kp(a,r,e)}}return kp(a,r,o.epoch)},Np=[0,0],Pp=6e4,Fp=1e4,Ip=5e3,Lp=64,Rp=(e,t,n=1)=>uu([ou(e,n),...t]),zp=e=>Array.isArray(e)&&e.length===2&&Pd(e[0])&&typeof e[1]==`number`&&Number.isSafeInteger(e[1])&&e[1]>=0,Bp=(e,t)=>e[0]-t[0]||e[1]-t[1],Vp=async(e,t)=>{let n=fu(t);return bu(typeof e==`function`?sf(await e(n)):await uf(e,n))},Hp=(e,t,n)=>{try{let r=ep(xu(n),fu(t),e);return typeof r==`boolean`?r:r.catch(()=>!1)}catch{return!1}},Up=(e,t=1/0)=>{let n=new Set,r=(e,t)=>{if(t>Lp)return null;if(e===null||typeof e==`boolean`)return String(e);if(typeof e==`number`)return Number.isFinite(e)?uu(e):null;if(typeof e==`string`)return uu(e);if(typeof e!=`object`)return null;let i=e;if(n.has(i))return null;let a=Array.isArray(i);if(!a){let e=Object.getPrototypeOf(i);if(e!==Object.prototype&&e!==null)return null}n.add(i);try{if(a){let e=[];for(let n=0;n<i.length;n++){let a=r(i[n],t+1);if(a===null)return null;e.push(a)}return`[${e.join(`,`)}]`}let e=i,n=pd(e).sort(),o=[];for(let i=0;i<n.length;i++){let a=n[i],s=e[a];if(s===void 0)continue;let c=r(s,t+1);if(c===null)return null;o.push(`${uu(a)}:${c}`)}return`{${o.join(`,`)}}`}finally{n.delete(i)}},i=r(e,0);if(i===null)return 0;let a=mu(i);return a>t?1:[i,a]},Wp=e=>{let t=Up(e);if(!Array.isArray(t))throw Z(`value must be valid finite JSON`);return t[0]},Gp=(e=0)=>{let t=e,n=0;return{peek:()=>t,observe:(e,r=Ip)=>{let i=Math.min(e,Date.now()+r);i>t&&(t=i,n=0)},next:(e=0)=>{let r=Date.now(),i=Math.max(r,t+1,e),a=r+Ip;return i<=a?t=i:a>t&&(t=a),n=0,i},nextHlc:(e,r=Np,i=Fp)=>{let a=Date.now(),o=Math.max(a,t,r[0]);if(o>a+i)throw Z(`state clock skew exceeded for "${e}"`);let s=o>t&&o>r[0]?0:Math.max(o===t?n:-1,o===r[0]?r[1]:-1)+1,c=a+Ip;return o<=c?(t=o,n=s):c>t&&(t=c,n=0),[o,s]}}},Kp=(e,t,n=512)=>{let r=Du(n);return{consume:(n,i=1)=>{let a=Date.now(),o=r.get(n);if(!o)return t<i?!1:(r.set(n,[t-i,a]),!0);let s=Math.max(0,a-o[1])/1e3;return s>0&&(o[0]=Math.min(t,o[0]+s*e),o[1]=a),o[0]<i?!1:(o[0]-=i,!0)},delete:e=>{r.delete(e)},clear:()=>{r.clear()}}},{min:qp}=Math,Jp=3333,Yp=6e4,Xp=Z(`relay socket closed`),Zp=Du(256),Qp=e=>e.phase===`connecting`||e.phase===`open`,$p=e=>e.phase===`backoff-wait`||e.phase===`parked-offline`,em=new Set,tm=new WeakMap,nm=e=>!!e.isClosed,rm=`auto`,im=!1,am=null,om=(e,t,n,r=!1)=>e.relayConfig?.urls||(r?xd(t,Sd(e.appId)):t).slice(0,e.relayConfig?.redundancy??n),sm=()=>{im=!0,em.forEach(e=>e[0]())},cm=()=>{im=!1,Zp.clear(),em.forEach(e=>e[1]())},lm=()=>{if(am||typeof addEventListener!=`function`)return;let e=new AbortController,{signal:t}=e;addEventListener(`online`,cm,{signal:t}),addEventListener(`offline`,sm,{signal:t}),typeof document<`u`&&typeof document.addEventListener==`function`&&document.addEventListener(`visibilitychange`,()=>{!im&&document.visibilityState===`visible`&&cm()},{signal:t}),am=()=>e.abort()},um=e=>{e.onopen=e.onclose=e.onmessage=null,e.close()},dm=(e,t,n)=>{let r={url:e,isClosed:!1,send:Q},i=new Set,a={phase:`parked-offline`,didOpen:!1},o=e=>{i.forEach(t=>t(e)),i.clear()},s=()=>{let{promise:e,resolve:t,reject:n}=Promise.withResolvers();return e.catch(Q),Object.defineProperty(e,su,{value:()=>a.phase===`open`||a.phase===`closed`||im?Promise.resolve(null):a.phase===`backoff-wait`&&a.attemptFailure?Promise.resolve(a.attemptFailure):new Promise(e=>{i.add(e)}),enumerable:!1,configurable:!0}),{promise:e,resolve:t,reject:n}},c=s();r.ready=c.promise;let l=()=>{c=s(),r.ready=c.promise};rm===`auto`&&lm();let u=e=>e.phase===`open`||e.didOpen,d=()=>{switch(a.phase){case`closed`:case`connecting`:case`open`:return;case`backoff-wait`:if(clearTimeout(a.timer),im){a={phase:`parked-offline`,didOpen:a.didOpen};return}break;case`parked-offline`:if(im)return;break;default:lu(a)}let i=a.didOpen,s=new WebSocket(e);r.socket=s,r.url=s.url??e,a={phase:`connecting`,socket:s,didOpen:i},s.onclose=()=>{if(!Qp(a)||a.socket!==s)return;let t=a.phase===`open`,n=u(a);if(r.send=Q,t&&l(),im){a={phase:`parked-offline`,didOpen:n},t||o(null);return}let i=t?null:Z(`failed to connect to relay ${r.url}`);i&&o(i);let c=Zp.get(e)??Jp;Zp.set(e,c);let f=setTimeout(d,Math.random()*c);Zp.set(e,qp(c*2,Yp)),a={phase:`backoff-wait`,didOpen:n,timer:f,attemptFailure:i}},s.onmessage=e=>{try{t(String(e.data))}catch{}},s.onopen=()=>{if(a.phase!==`connecting`||a.socket!==s)return;let t=a.didOpen;a={phase:`open`,socket:s},o(null),c.resolve(r),Zp.set(e,Jp),t&&n?.()},r.send=e=>{s.readyState===1&&s.send(e)}},f=[()=>{switch(a.phase){case`closed`:case`parked-offline`:return;case`backoff-wait`:clearTimeout(a.timer),a={phase:`parked-offline`,didOpen:a.didOpen},o(null);return;case`connecting`:case`open`:{let e=a.phase===`open`,t=u(a),n=a.socket;r.send=Q,a={phase:`parked-offline`,didOpen:t},e&&l(),o(null),um(n);return}default:lu(a)}},()=>{a.phase!==`closed`&&(Zp.set(e,Jp),$p(a)&&d())}];return em.add(f),tm.set(r,()=>{!im&&$p(a)&&f[1]()}),r.close=()=>{if(a.phase===`closed`)return;let t=a;switch(r.isClosed=!0,r.send=Q,a={phase:`closed`},o(null),c.reject(Xp),em.delete(f),tm.delete(r),Zp.delete(e),t.phase){case`parked-offline`:break;case`backoff-wait`:clearTimeout(t.timer);break;case`connecting`:case`open`:um(t.socket);break;default:lu(t)}},im||d(),r},fm=()=>{let e=new WeakMap;return{forRelay:t=>{let n=e.get(t);return n||(n=Object.create(null),e.set(t,n)),n}}},pm=new WeakMap,mm=e=>{if(e&&typeof e==`object`){let t=pm.get(e);t&&(pm.delete(e),t())}},hm=(e,t,n)=>{let r=new Map,i=new WeakMap,a=new WeakMap,o=new WeakSet,s=n??nm,c=e=>{let t=i.get(e);t!==void 0&&r.get(t)===e&&r.delete(t)};return{register:(e,t)=>{let n=r.get(e);return n&&s(n)&&(c(n),a.delete(n),n=void 0),n?tm.get(n)?.():(n=t(),r.set(e,n),i.set(n,e)),n},lease:(e,n)=>{tm.get(e)?.(),a.set(e,(a.get(e)??0)+1);let r=Promise.resolve(n).then(e=>e);r.catch(Q);let i=n[su];typeof i==`function`&&Object.defineProperty(r,su,{value:i,enumerable:!1,configurable:!0});let l=!1;return pm.set(r,()=>{if(l)return;l=!0;let n=a.get(e);!n||n<=0||(n>1?a.set(e,n-1):(a.delete(e),c(e),!o.has(e)&&!s(e)&&(o.add(e),t?.(e))))}),r},evict:c,getSockets:()=>fd([...r.entries()].flatMap(([t,n])=>{let r=s(n)?void 0:e(n);return r?[[t,r]]:[]}))}},gm=16384,_m=65536,vm=17408,ym=1e4,bm=12e4,xm=0,Sm=1,Cm=2,wm=3,Tm=4,Em=5,Dm=64,Om=36,km=48,Am=6,jm=14,Mm=gm-jm,Nm=_m-jm,Pm=256*1024**2,Fm=1024**2,Im=1024,Lm=64,Rm=128,zm=8,Bm=32,Vm=`payload exceeds receiver size limit`,Hm=nd(`payload`),Um=0,Wm=1,Gm=2,Km={pending:{waiting:!0,reserved:!1,active:!1,admitted:!1},deciding:{waiting:!0,reserved:!1,active:!1,admitted:!1},queued:{waiting:!0,reserved:!1,active:!1,admitted:!0},accepted:{waiting:!1,reserved:!0,active:!0,admitted:!0},receiving:{waiting:!1,reserved:!0,active:!0,admitted:!0},buffered:{waiting:!1,reserved:!0,active:!1,admitted:!0},closed:{waiting:!1,reserved:!1,active:!1,admitted:!1}},qm=e=>e.phase===`failed`||e.phase===`done`,Jm=(e,t)=>{let n=Object.assign(Z(t),{kind:e});return e===`aborted`&&(n.name=`AbortError`),n},Ym=e=>{if(e?.aborted)throw Jm(`aborted`,Yu)},Xm=e=>new DataView(e.buffer,e.byteOffset,e.byteLength),Zm=(e,t,n=Am)=>{let r=new Uint8Array(n);return r[0]=3,r[1]=e,Xm(r).setUint32(2,t),r},Qm=(e,t,n)=>{let r=()=>{let i=bm-(Date.now()-e());if(i>0){let e=setTimeout(r,i);_d(e),n(e)}else t()},i=setTimeout(r,bm);return _d(i),i},$m=e=>hu(e.subarray(2,34)).replaceAll(`\0`,``),eh=(e,t)=>{let n;try{n=e()}catch{return t(!1)}return typeof n==`boolean`?t(n):Promise.resolve(n).then(e=>t(e===!0),()=>t(!1))},th=(e,t,n)=>t===Gm?n?e.slice():e:t===Wm?du(hu(e)):hu(e),nh=(e,t,n,r)=>{try{e.onProgress(t,n,r)}catch(e){Ru(`progress handler`,e)}},rh=(e,t,n,r)=>{nh(e,1,n,r);try{e.receiver?.(t,n,r)}catch(e){zu(e)}},ih=({resolveTransport:e,getPeerIds:t,canReceiveFromPeer:n,onPeerError:r,broadcastInline:i,checkAborted:a=Ym,onUnknownType:o,maxReceiveBytes:s=Pm})=>{if(!Number.isSafeInteger(s)||s<=0)throw Qu(`maxReceiveBytes`);let c=new Map,l=new Map,u=new Map,d=new Map,f=new Map,p=new Map,m=new Set,h=new Map,g=new WeakSet,_=null,v=0,y=0,b=0,x=0,S=!1,C=!1,w=()=>Jm(`disconnected`,Bu),T=nd(`frame`),E=e=>e.state.phase!==`closed`,D=e=>Math.min(s,e?.maxPayloadBytes??s),O=()=>{S&&(C=!0)},k=(t,n,i=!0)=>{let a=e(t,!0);a&&!g.has(a)&&(g.add(a),Fu(`${n}; disconnecting peer ${t}`),r(t,i?Td(n):Z(n)))},A=(e,t,n,r,i=``)=>{if(!t||!t.isOpen)return;let a=fu(i).subarray(0,200),o=Zm(r,n,Am+a.length);o.set(a,Am);try{if(t.bufferedAmount>Fm)throw Z(`control send buffer is full`);t.sendFrame(o,n)}catch{k(e,`unable to send action control`,!1)}},j=(t,n,r,i=``)=>{A(t,e(t,!0),n,r,i)},M=(e,t,n,r)=>{n?.[3](t),l.get(e.type)?.onReject?.(e.peerId,e.metadata,t),r!==void 0&&j(e.peerId,r,Tm,t)},N=e=>{for(let t of Array.from(m))t.message.peerId===e&&(m.delete(t),m.add(t))},P=e=>{b--;let t=(h.get(e)??1)-1;t>0?h.set(e,t):h.delete(e)},ee=(e,t)=>{let n=Km[e.state.phase],r=Km[t.phase],{peerId:i,size:a}=e.message,o=f.get(i);n.reserved!==r.reserved&&(x+=r.reserved?a:-a,r.reserved||O()),n.waiting!==r.waiting&&(r.waiting?m.add(e):m.delete(e)),n.active!==r.active&&o&&(r.active?o.activeBulk=e:o.activeBulk===e&&(o.activeBulk=null,N(i))),e.state=t,t.phase===`buffered`&&O()},F=e=>{if(e.state.phase===`closed`)return!1;let{peerId:t}=e.message,n=f.get(t);e.unbindScopeAbort?.(),e.unbindScopeAbort=null,e.timer=gd(e.timer);let r=e.controller;if(e.controller=null,e.kind===`inline`){e.state={phase:`closed`};let t=n?.inlineQueues.get(e.queueKey);if(t){let r=t.indexOf(e);r>=0&&t.splice(r,1),t.length||n.inlineQueues.delete(e.queueKey)}}else n?.bulkTransfers.delete(e.transferId),ee(e,{phase:`closed`});return n&&(n.pendingCount--,y--,n.pendingCount||f.delete(t)),r?.abort(),!0},te=(e,t)=>{F(e)&&M(e.message,t,e.scope,e.kind===`bulk`?e.transferId:void 0)},I=e=>{if(e.state.phase!==`pending`)return null;let{peerId:t}=e.message;if(b>=Rm||(h.get(t)??0)>=zm)return te(e,`too many pending receive decisions`),null;let n=new AbortController;return e.controller=n,b++,h.set(t,(h.get(t)??0)+1),e.kind===`inline`?e.state={phase:`deciding`,data:e.state.data}:ee(e,{phase:`deciding`}),n},ne=e=>{if(e.kind===`inline`)switch(e.state.phase){case`pending`:case`deciding`:return e.state={phase:`ready`,data:e.state.data},!0;case`ready`:return!0;case`closed`:return!1;default:return lu(e.state)}switch(e.state.phase){case`pending`:case`deciding`:return ee(e,{phase:`queued`}),!0;case`queued`:case`accepted`:case`receiving`:case`buffered`:return!0;case`closed`:return!1;default:return lu(e.state)}},re=e=>{if(e.state.phase!==`queued`)return;let t=f.get(e.message.peerId);!t||t.activeBulk!==null||x+e.message.size>s||(e.lastSeenAt=Date.now(),ee(e,{phase:`accepted`}),j(e.message.peerId,e.transferId,wm))},ie=e=>{switch(e.state.phase){case`receiving`:return e.state;case`accepted`:{let t=e.message.size;try{let n={phase:`receiving`,data:new Uint8Array(t),seenChunks:new Uint8Array(Math.ceil(Math.ceil(t/e.chunkSize)/8)),offset:0};return ee(e,n),n}catch{return te(e,`unable to allocate receive buffer`),de(),null}}case`pending`:case`deciding`:case`queued`:case`buffered`:case`closed`:return null;default:return lu(e.state)}},ae=e=>{if(e.state.phase!==`receiving`)return;let{data:t}=e.state;ee(e,{phase:`buffered`,data:t})},oe=e=>e.kind===`inline`?e.state.phase===`ready`:Km[e.state.phase].admitted,L=(e,t)=>{if(e.state.phase!==`pending`)return oe(e);if(e.message.size>D(t))return te(e,Vm),!1;let n=e.scope?e.scope[2]:t.receiveGate;if(!n)return t.receiver?ne(e):!1;let r=I(e);if(!r)return!1;let{peerId:i}=e.message,a=!1,o=eh(()=>n({byteLength:e.message.size,peerId:i,signal:r.signal,...e.message.metadata===void 0?{}:{metadata:e.message.metadata}}),t=>(a||(a=!0,P(i)),e.state.phase===`deciding`?t?ne(e):(te(e,`payload rejected by receiver`),!1):!1));return typeof o==`boolean`?o:(o.then(()=>de()),!1)},se=(e,t,n,r)=>{let i;try{i=th(n,e.message.format,r)}catch{F(e),k(e.message.peerId,Hm);return}F(e),rh(t,i,e.message.peerId,e.message.metadata)},ce=e=>{let t=l.get(e.message.type);if(t&&(e.state.phase!==`pending`||L(e,t))&&e.state.phase===`ready`){if(t.receiver)se(e,t,e.state.data,!0);else if(!e.scope){let{data:t}=e.state,{lastSeenAt:n,message:r}=e;F(e),me(r,t,!0,!0,n)}}},le=e=>{let t=l.get(e.message.type);if(t)switch(e.state.phase){case`pending`:L(e,t)&&t.receiver&&re(e);return;case`queued`:t.receiver&&re(e);return;case`buffered`:t.receiver&&se(e,t,e.state.data,!1);return;case`deciding`:case`accepted`:case`receiving`:case`closed`:return;default:lu(e.state)}},ue=(e,t)=>{let n=f.get(e)?.inlineQueues.get(t);for(;n?.[0];){let e=n[0];if(ce(e),E(e))break}},de=()=>{if(S)C=!0;else{S=!0;try{do{C=!1;for(let e of m)le(e);for(let[e,t]of f){for(let e of t.bulkTransfers.values())e.state.phase===`buffered`&&le(e);for(let n of t.inlineQueues.keys())ue(e,n)}}while(C)}finally{S=!1,C=!1}}},fe=()=>{_||(_=setTimeout(pe,ym),_d(_))},pe=()=>{_=gd(_);let e=Date.now(),t=!1;for(let[n,r]of p){for(let[n,i]of r){for(;i.length>0&&e-i[0].receivedAt>1e4;)i.shift();i.length===0?r.delete(n):t=!0}r.size===0&&p.delete(n)}t&&fe()},me=(e,t,n=!1,r=!1,i=Date.now())=>{let a=Date.now(),o=p.get(e.peerId);o||(o=new Map,p.set(e.peerId,o));let s=o.get(e.type);for(s||(s=[],o.set(e.type,s));s.length>0&&a-s[0].receivedAt>1e4;)s.shift();s.length>=Bm&&s.shift(),s.push({admitted:n,message:e,data:r?t:t.slice(),receivedAt:i}),fe()},he=(e,t)=>({message:e,scope:t,unbindScopeAbort:null,controller:null,lastSeenAt:Date.now(),timer:null}),ge=e=>{E(e)&&!e.timer&&(e.timer=Qm(()=>e.lastSeenAt,()=>{te(e,`action transfer timed out`),de()},t=>{E(e)?e.timer=t:clearTimeout(t)}))},_e=(e,t=!1)=>{let{peerId:n}=e.message,r=f.get(n);if(y>=Im||(r?.pendingCount??0)>=Lm)return M(e.message,`too many pending transfers`,e.scope,e.kind===`bulk`?e.transferId:void 0),!1;if(r||(r={bulkTransfers:new Map,inlineQueues:new Map,activeBulk:null,pendingCount:0},f.set(n,r)),r.pendingCount++,y++,e.kind===`inline`){let t=r.inlineQueues.get(e.queueKey)??[];t.push(e),r.inlineQueues.set(e.queueKey,t)}else r.bulkTransfers.set(e.transferId,e),ee(e,{phase:`pending`});if(t||ge(e),e.scope){let t=e.scope[1],n=()=>{te(e,`receive cancelled`),de()};if(t.aborted)return n(),!1;let r=new AbortController;t.addEventListener(`abort`,n,{once:!0,signal:r.signal}),e.unbindScopeAbort=()=>r.abort()}return!0},ve=(e,t)=>{let n=()=>!!(t.receiver||t.receiveGate);if(!n())return;let r=Date.now();for(let i of Array.from(p.keys())){if(!n())break;for(;n();){let n=p.get(i),a=n?.get(e);if(!a||a.length===0){n&&(n.delete(e),n.size===0&&p.delete(i));break}if(r-a[0].receivedAt>1e4){a.shift();continue}if(a[0].admitted&&!t.receiver)break;let o=a.shift();if(a.length===0&&(n.delete(e),n.size===0&&p.delete(i)),o.message.size>D(t))M(o.message,Vm);else if(o.admitted||t.receiver&&!t.receiveGate&&!f.get(i)?.inlineQueues.has(e)){let r;try{r=th(o.data,o.message.format,!1)}catch{n&&(n.delete(e),n.size===0&&p.delete(i)),k(i,Hm);break}rh(t,r,i,o.message.metadata)}else{let t={...he(o.message),kind:`inline`,queueKey:e,state:{phase:`pending`,data:o.data}};_e(t,!0)&&(ue(i,e),ge(t))}}}},R=(e,t)=>{let n=l.get(e.type);if(!n)return t!==void 0&&j(e.peerId,t,Tm,`unregistered action`),null;let r=n.receiveScope?.(e.peerId,e.metadata);return r===null||r?.[1].aborted?(t!==void 0&&j(e.peerId,t,Tm,`unexpected response`),null):e.size>D(n)?(M(e,Vm,r,t),null):[n,r]},ye=e=>{for(let t of u.get(e)?.values()??[])t.fail(w());u.delete(e),d.delete(e),p.delete(e);let t=f.get(e);if(t){for(let e of Array.from(t.bulkTransfers.values()))F(e);for(let e of Array.from(t.inlineQueues.values()))e.slice().forEach(e=>{F(e)})}de()},be=(e,t)=>new Promise((n,r)=>{let i=()=>{try{a(t)}catch(e){r(e)}};if(t.aborted){i();return}let o=new AbortController;t.addEventListener(`abort`,i,{once:!0,signal:o.signal}),e.then(n,r).finally(()=>{o.abort()})}),xe=async(e,t,n,r,i,o,s,c,l)=>{n();let u=s??e.waitForDrain(r);if(u!==!0){if(!await u)throw a(r),Jm(`disconnected`,`data channel stopped draining`);n()}c?.();try{e.sendFrame(t,i,o)}catch{let e=w();throw l?.(e),e}},Se=async(e,t,n,r,i,o,s,c,l)=>{let{promise:d,resolve:f,reject:p}=Promise.withResolvers();d.catch(Q);let m=u.get(e)??new Map;if(m.has(r))throw Z(`action transfer id in use`);u.set(e,m);let h=(e,t=!1,n)=>{if(qm(g))return;let r=!0;g.phase===`offering`?(r=g.sent,clearTimeout(g.timer),g={phase:`failed`,error:e,fromReceiver:t,didSendOffer:n??r},p(e)):g={phase:`failed`,error:e,fromReceiver:t,didSendOffer:n??r}},g={phase:`offering`,sent:!1,timer:Qm(()=>g.phase===`offering`?g.lastSeen:0,()=>h(Jm(`timeout`,`action offer timed out`)),e=>{g.phase===`offering`?g.timer=e:clearTimeout(e)}),lastSeen:Date.now()},_=()=>g,v=()=>{if(g.phase===`failed`)throw g.error;try{if(a(l),!t.isOpen)throw w()}catch(e){throw h(e),e}};m.set(r,{accept:()=>g.phase===`offering`&&g.sent?(clearTimeout(g.timer),g={phase:`streaming`},f(),!0):!1,fail:(e,t=!1)=>{h(e,t)},touch:()=>{g.phase===`offering`&&(g.lastSeen=Date.now())}});let y=l?new AbortController:null;y&&l&&l.addEventListener(`abort`,()=>{try{a(l)}catch(e){h(e)}},{once:!0,signal:y.signal});try{let a=(t.maxBulkFrameBytes??16384)>=_m,u=a?Nm:Mm,f=n;a&&(f=n.slice(),f[1]|=Dm),await xe(t,f,v,l,r,!0,void 0,()=>{g.phase===`offering`&&(g.sent=!0)},e=>{h(e,!1,!1)}),await d;for(let n=0;n<o;n+=u){v();let a=Math.min(u,o-n),d=Zm(Cm,r,jm+a);Xm(d).setFloat64(Am,n),d.set(i instanceof Uint8Array?i.subarray(n,n+a):new Uint8Array(await i.slice(n,n+a).arrayBuffer()),jm),await xe(t,d,v,l,r),m.forEach(e=>e.touch()),c?.((n+a)/o,e,s)}v(),_().phase===`streaming`&&(g={phase:`done`})}catch(n){h(n);let i=_();throw i.phase===`failed`&&i.didSendOffer&&!i.fromReceiver&&t.isOpen&&t.bufferedAmount<=Fm&&A(e,t,r,Em),i.phase===`failed`?i.error:n}finally{let t=_();t.phase===`offering`&&clearTimeout(t.timer),y?.abort(),m.delete(r),!m.size&&u.get(e)===m&&u.delete(e)}},Ce=(e,t,n,r)=>{if(t.length<Am||(n===wm||n===Em)&&t.length!==Am||n===Tm&&t.length>206){k(e,nd(`control`));return}let i=r.getUint32(2);if(n===wm){let t=u.get(e);t?.get(i)?.accept()&&t.forEach(e=>e.touch());return}if(n===Tm){u.get(e)?.get(i)?.fail(Jm(`rejected`,hu(t.subarray(Am))),!0);return}if(n===Em){let t=f.get(e)?.bulkTransfers.get(i);t&&(F(t),t.scope?.[3](`response cancelled by sender`)),de();return}let a=t.length>=jm?r.getFloat64(Am):NaN,o=t.subarray(jm),s=f.get(e)?.bulkTransfers.get(i);if(!s)return;let c=s.message.size,d=s.chunkSize;if(!Km[s.state.phase].active||!Number.isSafeInteger(a)||a<0||a>=c||a%d!==0||!o.length||o.length!==Math.min(d,c-a)){k(e,nd(`chunk`));return}let p=ie(s);if(!p)return;let h=a/d,g=h>>>3,_=1<<(h&7);if((p.seenChunks[g]&_)!==0){k(e,nd(`chunk`));return}p.seenChunks[g]|=_,p.data.set(o,a),p.offset+=o.length;let v=Date.now();s.lastSeenAt=v;for(let e of m)e.state.phase===`queued`&&l.get(e.message.type)?.receiver&&(e.lastSeenAt=v);if(p.offset===c){let e=l.get(s.message.type);e?.receiver?se(s,e,p.data,!1):ae(s),de()}else{let t=l.get(s.message.type);t&&nh(t,p.offset/c,e,s.message.metadata)}};return{makeWireAction:(n,r={})=>{let o=!!r.sendToPending,s=!!r.receiveWhilePending,{maxPayloadBytes:u,receiveScope:f}=r,p=c.get(n);if(p){if(p.sendToPending!==o||p.receiveWhilePending!==s||p.maxPayloadBytes!==u||p.receiveScope!==f)throw td(n);return p.action}let m=fu(n);if(!n||n.includes(`\0`)||m.length>32)throw Z(`action type must be 1–32 non-null UTF-8 bytes`);let h={...u===void 0?{}:{maxPayloadBytes:u},...f?{receiveScope:f}:{},receiver:null,receiveGate:null,onReject:null,onProgress:Q};l.set(n,h);let g={onMessage:e=>{h.receiver=e,ve(n,h),de()},onReceive:e=>{h.receiveGate=e,e&&ve(n,h),de()},onReject:e=>{h.onReject=e},onProgress:e=>{h.onProgress=e},send:async(n,r,s,c,l)=>{if(a(l),n===void 0)throw Z(`action data cannot be undefined`);let[u,f]=Ad(n),p=f instanceof Uint8Array?f.byteLength:f.size,h=s===void 0?``:uu(s),g=s===void 0?0:mu(h);if(g>16336)throw Z(`action metadata is too large`);let _=Om+g+p<=gm,y=_?0:v++>>>0,b=_?Om:km,x=new Uint8Array(b+g+(_?p:0));x[0]=3,x[1]=(_?xm:Sm)|u<<4,x.set(m,2);let S=Xm(x);S.setUint16(34,g),_||(S.setUint32(36,y),S.setFloat64(40,p)),g>0&&pu(h,x.subarray(b,b+g)),_&&x.set(f instanceof Uint8Array?f:new Uint8Array(await f.arrayBuffer()),b+g);let C=r!=null;if(!C&&_&&!o&&i){let e=i(x,e=>c?.(1,e,s),l);if(typeof e==`boolean`?e:await e)return}let T=C?[r].flat():t(o),E=[...new Set(T)];if(C&&E.length===0)throw Jm(`disconnected`,`target peer list must not be empty`);let D=[];for(let t of E){let n=e(t,o);if(!n||!n.isOpen){if(C)throw Jm(`disconnected`,rd(t))}else D.push([t,n])}let O=[],k=e=>{e.catch(Q),O.push(e)};for(let[e,t]of D)if(_){a(l);let n=d.get(e),r=n?void 0:t.waitForDrain(l);if(r===!0){try{t.sendFrame(x)}catch{throw w()}c?.(1,e,s);continue}let i=(async()=>{await n,await xe(t,x,()=>{if(a(l),!t.isOpen)throw w()},l,void 0,void 0,r),c?.(1,e,s)})(),o=i.catch(Q).finally(()=>{d.get(e)===o&&d.delete(e)});d.set(e,o),k(n&&l?be(i,l):i)}else k(Se(e,t,x,y,f,p,s,c,l));O.length>0&&await ld(O)}};return c.set(n,{sendToPending:o,receiveWhilePending:s,maxPayloadBytes:u,receiveScope:f,action:g}),g},handleData:(e,t)=>{if(t.byteLength<2||t.byteLength>65536){k(e,T);return}let r=new Uint8Array(t);if(r[0]!==3){k(e,`incompatible action protocol version`);return}let i=r[1]&15,a=r[1]>>>4&3,s=r[1]>>>6,l=Xm(r);if(i>Em||a>Gm||s>+(i===Sm)||i>Sm&&a!==Um||i!==Cm&&r.length>16384){k(e,T);return}if(i>=Cm){Ce(e,r,i,l);return}let u=i===xm?Om:km;if(r.length<u){k(e,nd(`header`));return}let d=$m(r),p=c.get(d);if(!p&&o&&(o(d),p=c.get(d)),!n(e,!!p?.receiveWhilePending))return;let m=l.getUint16(34),h=u+m,g=i===xm?r.length-h:l.getFloat64(40),_=i===Sm?l.getUint32(36):0;if(!d||h>r.length||!Number.isSafeInteger(g)||g<0||i===Sm&&(g===0||h!==r.length)){k(e,nd(`proposal`));return}let v;try{m&&(v=du(hu(r.subarray(u,h))))}catch{k(e,nd(`metadata`));return}let y={peerId:e,type:d,format:a,size:g,metadata:v};if(i===xm){let t=r.subarray(h),n=R(y);if(!n)return;let[i,o]=n,s=o?`${d}\0${o[0]}`:d,c=!!(o?o[2]:i.receiveGate);if(i.receiver&&!c&&!f.get(e)?.inlineQueues.has(s)){let n;try{n=th(t,a,!0)}catch{k(e,Hm);return}rh(i,n,e,v);return}if(!i.receiver&&!c&&!f.get(e)?.inlineQueues.has(s)){me(y,t);return}let l={...he(y,o),kind:`inline`,queueKey:s,state:{phase:`pending`,data:t.slice()}};_e(l,!0)&&(ue(e,s),ge(l));return}if(f.get(e)?.bulkTransfers.has(_)){k(e,`duplicate action offer`);return}let b=R(y,_);if(!b)return;let x={...he(y,b[1]),kind:`bulk`,transferId:_,chunkSize:s===1?Nm:Mm,state:{phase:`closed`}};_e(x)&&de()},clearPeer:ye}},ah=1e4,oh=(e,t,n=ah)=>t?.aborted?!1:e.readyState!==`open`||e.bufferedAmount<=(e.bufferedAmountLowThreshold??0)?e.readyState===`open`:new Promise(r=>{let i=!1,a=null,o=new AbortController,s=()=>u(!0),c=()=>u(!1),l=t=>{e[t](`bufferedamountlow`,s),e[t](`close`,c),e[t](`error`,c)},u=e=>{i||(i=!0,l(`removeEventListener`),o.abort(),a=gd(a),r(e))};a=setTimeout(()=>u(!1),n),_d(a),l(`addEventListener`),t?.addEventListener(`abort`,c,{once:!0,signal:o.signal}),e.readyState!==`open`||t?.aborted?u(!1):e.bufferedAmount<=(e.bufferedAmountLowThreshold??0)&&u(!0)}),sh=(e,t=40,n=150,r)=>{if(e.isDead)return r?.(),Q;e.setHandlers({connect:Q,data:Q,stream:Q,close:Q,error:Q});let i=e.channel;if(!i||i.readyState!==`open`)return e.destroy(),r?.(),Q;let a=typeof i.addEventListener==`function`,o,s=()=>{switch(o.phase){case`done`:return;case`grace-hold`:gd(o.graceTimer),gd(o.capTimer);break;case`draining`:gd(o.capTimer);break;default:lu(o)}o={phase:`done`},a&&(i.removeEventListener(`bufferedamountlow`,l),i.removeEventListener(`close`,s),i.removeEventListener(`error`,s)),e.destroy(),r?.()},c=()=>i.readyState!==`open`||typeof i.bufferedAmount!=`number`||i.bufferedAmount<=0,l=()=>{o.phase===`draining`&&c()&&s()},u=setTimeout(s,Math.max(t,n));if(_d(u),t>0){let e=setTimeout(()=>{o.phase===`grace-hold`&&(o={phase:`draining`,capTimer:o.capTimer},l())},t);_d(e),o={phase:`grace-hold`,graceTimer:e,capTimer:u}}else o={phase:`draining`,capTimer:u};if(a){try{i.bufferedAmountLowThreshold=0}catch{}i.addEventListener(`bufferedamountlow`,l),i.addEventListener(`close`,s),i.addEventListener(`error`,s)}return t<=0&&l(),s},ch=(e,t)=>({get isOpen(){let n=e.channel?.readyState;return(!t||t())&&!e.isDead&&n!==`closing`&&n!==`closed`},get bufferedAmount(){return typeof e.channel?.bufferedAmount==`number`?e.channel.bufferedAmount:0},get maxBulkFrameBytes(){let t=e.connection?.sctp?.maxMessageSize;return typeof t==`number`&&Number.isFinite(t)&&t>=65536?_m:gm},sendFrame:t=>{e.sendData(t)},waitForDrain:n=>n?.aborted||t&&!t()||e.isDead?!1:!e.channel||oh(e.channel,n),close:()=>e.destroy()}),lh=[`offer`,`answer`,`candidate`],uh=131072,dh=64,fh=65536,ph=4096,mh=256,hh=6e4,gh=/^[0-9A-Za-z]{20}$/,_h=/^[\w.~:!-]{1,64}$/,vh=(e,t,n)=>`${e}|${t}|${n}`,yh=(e,t)=>typeof e==`string`&&e.length>0&&e.length<=t&&_h.test(e),bh=e=>typeof e==`string`&&gh.test(e),xh=e=>yh(e,dh),Sh=e=>{if(typeof e==`string`){if(e.length>uh)return null;try{let t=du(e);return Md(t)?t:null}catch{return null}}return Md(e)?e:null},Ch=(e,t)=>typeof e[t]==`string`&&e[t]?e[t]:void 0,wh=e=>!!(e&&typeof e==`object`&&typeof e.signal==`function`&&typeof e.destroy==`function`&&typeof e.setHandlers==`function`),Th=e=>{let t=Sh(e);if(!t)return null;let n=typeof e==`string`,r=lh.some(e=>e in t);return`peerId`in t&&!bh(t.peerId)||(r||t.offerId!==void 0)&&!xh(t.offerId)||lh.some(e=>{if(!(e in t))return!1;let n=t[e];return typeof n!=`string`||n===``||n.length>(e===`candidate`?ph:fh)})||`peer`in t&&(n||t.peer!==void 0&&!wh(t.peer))?null:[Ch(t,`peerId`)??``,Ch(t,`offer`),Ch(t,`answer`),Ch(t,`candidate`),Ch(t,`offerId`),wh(t.peer)?t.peer:void 0]},Eh=e=>jd([...e.turnConfig??[],...e.rtcConfig?.iceServers??[]],/^turns?:/i),Dh=e=>e===`closed`||e===`failed`,Oh=e=>{let{connection:t,channel:n}=e;return e.isDead||Dh(t.connectionState)||Dh(t.iceConnectionState)||n?.readyState===`closing`||n?.readyState===`closed`?`stale`:!n||n.readyState!==`open`?`transient`:`live`},kh=23333,Ah=57333,jh=12,Mh=7533,Nh=23333,Ph=e=>!e||e.phase===`exhausted`,Fh=e=>e?.phase===`retrying`||e?.phase===`exhausted`,Ih=e=>{for(let t=0;t<e.length;t++){let n=e[t];n?.phase===`retrying`&&gd(n.retryTimer),e[t]=void 0}e.length=0},Lh=e=>{for(let t=0;t<e.length;t++){let n=e[t];if(n)switch(n.phase){case`reserved`:e[t]=void 0;break;case`retrying`:gd(n.retryTimer),e[t]={phase:`exhausted`,sendCandidate:n.sendCandidate};break;case`exhausted`:break;default:lu(n)}}},Rh=(e,t)=>{let n=e.relaySlots[t];n&&(n.phase===`retrying`&&gd(n.retryTimer),e.relaySlots[t]=void 0)},zh=(e,t)=>{e?.relaySlots[t]?.phase===`reserved`&&(e.relaySlots[t]=void 0)},Bh=(e,t,n)=>(e.outbound.phase===`advertising`||e.outbound.phase===`answered`)&&(!t||e.outbound.peer===t)&&(n===void 0||e.outbound.offerId===n),Vh=e=>{switch(e.outbound.phase){case`idle`:return e.relaySlots.some(Boolean);case`allocating`:case`advertising`:case`answered`:return!0;default:return lu(e.outbound)}},Hh=(e,t)=>{let n=0;for(let[r,i]of e)r!==t&&i.connection.phase!==`connected`&&((i.outbound.phase===`allocating`||Bh(i)&&!i.outbound.peer.isDead)&&n++,i.inbound.phase===`answering`&&!i.inbound.peer.isDead&&n++);return n},Uh=e=>e.connection.phase===`disconnected`&&e.inbound.phase===`idle`&&!Vh(e),Wh=e=>{for(let[t,n]of e)Uh(n)&&e.delete(t)},Gh=new WeakMap,Kh=e=>{e&&!e.isDead&&e.destroy()},qh=e=>{Gh.delete(e),e.inbound.phase===`answering`&&gd(e.inbound.expiryTimer),e.inbound={phase:`idle`}},Jh=(e,t)=>{e.inbound.phase===`answering`&&e.inbound.peer===t&&(qh(e),e.connectedPeer!==t&&Kh(t))},Yh=(e,t)=>{e.inbound.phase===`answering`&&e.inbound.peer!==t&&Kh(e.inbound.peer),qh(e),e.connection={phase:`connected`,peer:t,unhealthySince:null}},Xh=(e,t)=>{e?.connection.phase===`connected`&&e.connection.peer===t&&(e.connection={phase:`disconnected`})},Zh=e=>{if(e.connection.phase!==`connected`)return;let{peer:t}=e.connection;e.connection={phase:`disconnected`},Kh(t)},Qh=e=>{switch(Gh.delete(e),Ih(e.relaySlots),e.outbound.phase){case`idle`:case`allocating`:break;case`advertising`:case`answered`:gd(e.outbound.expiryTimer),e.outbound.peer!==e.connectedPeer&&Kh(e.outbound.peer);break;default:lu(e.outbound)}e.outbound={phase:`idle`},e.didReportFailure=!1},$h=()=>({outbound:{phase:`idle`},inbound:{phase:`idle`},connection:{phase:`disconnected`},relaySlots:[],didReportFailure:!1,get offerPeer(){return Bh(this)?this.outbound.peer:null},get answeringPeer(){return this.inbound.phase===`answering`?this.inbound.peer:null},get connectedPeer(){return this.connection.phase===`connected`?this.connection.peer:null}}),eg=(e,t)=>{let n=e.get(t);if(n)return n;if(e.size>=mh){let t,n;for(let[r,i]of e){if(Uh(i)){t=r;break}n===void 0&&i.connection.phase===`disconnected`&&(n=r)}let r=t??n;if(r!==void 0){let t=e.get(r);t&&(Kh(t.answeringPeer),Qh(t),qh(t)),e.delete(r)}}let r=$h();return e.set(t,r),r},tg=e=>{let{appId:t,getRoomId:n,config:r,peerStates:i,getRootTopicPlaintext:a,rootTopicP:o,selfTopicP:s,toPlain:c,toCipher:l,isLeaving:u,onError:d,checkoutOffers:f,claimLeasedOffer:p,reclaimLeasedOffer:m,encryptOffer:h,initPeer:g,connectPeer:_,disconnectPeer:v,announceIntervals:y,announceIntervalMs:b,getSelfIdNow:x,selfIdP:S,onPeerDiscovered:C,shouldConnectPeer:w}=e,T=[],E=Du(512),D=Du(512),O=new Map,k=()=>S,A=e=>ff(bd(a(),e)),j=e=>Hh(i,e)>=64,M=(e,i)=>{if(u()||e.connection.phase===`connected`||e.didReportFailure)return;e.didReportFailure=!0;let a=Eh(r);d?.({code:`peer-connect-failed`,peerId:i,turnConfigured:a,message:`could not connect to peer ${i} after exchanging SDP; ${a?`verify TURN server URLs and credentials`:`configure TURN via turnConfig or rtcConfig.iceServers`}`,appId:t,roomId:n()})},N=(e,r,i)=>{let a=`${e}:${r}`,o=Date.now(),s=E.get(a);s!==void 0&&o-s<hh||(E.set(a,o),d?.({code:`decrypt-failed`,peerId:e,stage:r,message:`failed to decrypt ${r} (incorrect password or corrupted signal)`,appId:t,roomId:n(),cause:i}))},P=(e,t)=>{let n=setTimeout(()=>{let n=i.get(e);n&&n.connection.phase!==`connected`&&n.inbound.phase===`answering`&&n.inbound.peer===t&&(n.inbound.didSendAnswer&&M(n,e),Jh(n,t),Wh(i))},Nh);return _d(n),n},ee=(e,t,n=Ah)=>{let r=setTimeout(()=>{let n=i.get(e);n&&n.connection.phase!==`connected`&&Bh(n,void 0,t)&&(n.outbound.phase===`answered`&&M(n,e),Qh(n),Wh(i))},n);return _d(r),r},F=(e,t,n,r)=>{let a=()=>{e.offerPeer===n&&e.connection.phase!==`connected`&&(e.outbound.phase===`answered`&&M(e,t),Qh(e)),v(n,t),Wh(i)};n.setHandlers({connect:()=>{D.delete(t),_(n,t)},...r?{signal:r}:{},close:a,error:a})},te=(e,t)=>{switch(e.outbound.phase){case`advertising`:return Promise.resolve([e.outbound.peer,e.outbound.offerSdp,e.outbound.offerId]);case`allocating`:return e.outbound.promise;case`answered`:return Promise.resolve(null);case`idle`:break;default:return lu(e.outbound)}if(j(t))return Promise.resolve(null);let n=()=>u()||e.outbound.phase!==`allocating`||e.outbound.promise!==r,r=(async()=>{let r=x()??await k(),i;try{i=(await f(1,!1,(e,t)=>h(e,r,t),jh))[0]}catch(e){if(n())return null;throw e}if(!i){if(n())return null;throw Z(`failed to allocate offer peer`)}let{peer:a,offer:o}=i,s=i.offerId||cd(jh);if(n())return a.destroy(),null;let c=[],l=ee(t,s);return e.didReportFailure=!1,e.outbound={phase:`advertising`,peer:a,offerId:s,offerSdp:o,expiryTimer:l,bufferedCandidates:c},F(e,t,a,t=>{if(e.connection.phase!==`connected`&&Bh(e,a,s)){e.outbound.bufferedCandidates.push(t);for(let n of e.relaySlots)Fh(n)&&n.sendCandidate(t)}}),[a,o,s]})().finally(()=>{e.outbound.phase===`allocating`&&e.outbound.promise===r&&(e.outbound={phase:`idle`})});return e.outbound={phase:`allocating`,promise:r},r},I=(e,t,n,r)=>{let i=[];Bh(e)?(gd(e.outbound.expiryTimer),e.outbound.peer===n&&e.outbound.offerId===r?(i=e.outbound.bufferedCandidates,Lh(e.relaySlots)):(Ih(e.relaySlots),e.connectedPeer!==e.outbound.peer&&Kh(e.outbound.peer))):Ih(e.relaySlots),e.outbound={phase:`answered`,peer:n,offerId:r,expiryTimer:ee(t,r,kh),bufferedCandidates:i}},ne=async(e,t,n,r=0)=>{let a=i.get(t);if(!a||a.connection.phase===`connected`||a.inbound.phase!==`idle`||a.outbound.phase===`answered`){zh(a,e);return}if(a.relaySlots[e]?.phase!==`reserved`)return;let o,s,c;try{[o,s,c]=await ld([A(t),te(a,t),k()])}catch(t){throw zh(a,e),Wh(i),t}if(!s){zh(a,e);return}if(u()){Qh(a);return}if((e=>e.connection.phase===`connected`)(a)||a.inbound.phase!==`idle`||a.outbound.phase!==`advertising`||a.relaySlots[e]?.phase!==`reserved`){zh(a,e);return}let[d,f,p]=s,m=e=>{!u()&&a.connection.phase!==`connected`&&Bh(a,d,p)&&e.type===`candidate`&&l(e,c,p).then(e=>{!u()&&a.connection.phase!==`connected`&&Bh(a,d,p)&&n(o,uu({peerId:c,offerId:p,candidate:e.sdp}))}).catch(Q)},h=setTimeout(()=>{if(r>=2||u()||a.connection.phase===`connected`||a.inbound.phase!==`idle`||a.outbound.phase!==`advertising`||a.outbound.peer!==d||a.outbound.offerId!==p){let n=i.get(t);n&&n.connection.phase!==`connected`&&(r>=2&&Bh(n,d,p)?n.relaySlots[e]={phase:`exhausted`,sendCandidate:m}:Rh(n,e),Wh(i))}else a.relaySlots[e]={phase:`reserved`},ne(e,t,n,r+1).catch(e=>{u()||Ru(`signal`,e)})},r===0&&y[e]===void 0?2e3:(y[e]??b)*.9);_d(h),n(o,uu({peerId:c,offerId:p,offer:f})),a.relaySlots[e]={phase:`retrying`,retryTimer:h,sendCandidate:m},a.outbound.bufferedCandidates.forEach(m)},re=async(e,t,n,r,i,a)=>{if(e.inbound.phase!==`answering`||e.inbound.peer.isDead||e.inbound.replay.offer!==r||e.inbound.replay.offerId!==i)return;let{replay:o}=e.inbound,s=o.lastSentAt[t];if(s!==void 0&&Date.now()-s<1e3)return;o.lastSentAt[t]=Date.now();let c=await A(n);if(!u()&&e.connection.phase!==`connected`&&e.inbound.phase===`answering`&&e.inbound.replay===o){let e=e=>{a(c,e)};o.relays[t]=e,o.messages.forEach(e)}},ie=(e,t,n)=>{let r=`${e}|${n}|${t}`,i=O.get(r);if(i)return i;let a=c({type:`offer`,sdp:t},e,n).catch(t=>(N(e,`offer`,t),null)).finally(()=>{O.delete(r)});return O.set(r,a),a},ae=async(e,t,n,a,o)=>{if(!a)return;let s=x()??await k();if(w&&!w(t,`inbound`))return;let c=i.get(t);if(c&&(c.inbound.phase===`answering`||c.outbound.phase===`answered`))return re(c,e,t,n,a,o);if(c&&Vh(c)&&s<t||j(t))return;let d=await ie(t,n,a);if(!d||u())return;let f=eg(i,t);if(f.connection.phase===`connected`)return;if(f.inbound.phase===`answering`||f.outbound.phase===`answered`)return re(f,e,t,n,a,o);if(Vh(f)){if(s<t)return;Qh(f)}if(j(t)){Wh(i);return}let p=g(!1,r),m={offer:n,offerId:a,messages:[],lastSentAt:[],relays:[]};m.lastSentAt[e]=Date.now();let h=P(t,p),y=[];f.didReportFailure=!1,f.inbound={phase:`answering`,peer:p,offerId:a,expiryTimer:h,didSendAnswer:!1,replay:m};let b=e=>!u()&&e.inbound.phase===`answering`&&e.inbound.peer===p&&!p.isDead,S=()=>{f.inbound.phase===`answering`&&f.inbound.peer===p&&f.connection.phase!==`connected`&&f.inbound.didSendAnswer&&M(f,t),Jh(f,p),v(p,t),Wh(i)};if(p.setHandlers({connect:()=>{D.delete(t),_(p,t)},close:S,error:S}),p.isDead){Jh(f,p),Wh(i);return}let C=await A(t);if(!b(f)||f.inbound.replay!==m)return;m.relays[e]=e=>{o(C,e)};let T=Promise.resolve(),E=e=>{T=T.then(async()=>{let t=await l(e,s,a);if(!b(f))return;let n=e.type===`answer`,r=uu({peerId:s,offerId:a,...n?{answer:t.sdp}:{candidate:t.sdp}}),i=Date.now();if(m.messages.push(r),m.relays.forEach((e,t)=>{e&&(m.lastSentAt[t]=i,e(r))}),n&&y){f.inbound.didSendAnswer=!0;let e=y;y=null,e.forEach(E)}}).catch(Q)};p.setHandlers({signal:e=>{!b(f)||e.type!==`answer`&&e.type!==`candidate`||(e.type===`candidate`&&y?y.push(e):E(e))}}),await p.signal(d)},oe=async(e,t,n,r)=>{if(!n)return;let a=i.get(e);if(!r&&!a?.offerPeer&&!a?.answeringPeer)return;let o;try{o=await c({type:hd,sdp:t},e,n)}catch{return}let s=i.get(e),l=r&&!r.isDead?r:s&&Bh(s,void 0,n)?s.outbound.peer:s?.inbound.phase===`answering`&&s.inbound.offerId===n?s.inbound.peer:null;l&&!l.isDead&&l.signal(o)},L=async(e,t,n,r)=>{if(!n)return;if(w&&!w(e,r?`outbound`:`inbound`)){if(r)m(r),Kh(r);else{let t=i.get(e);t&&Bh(t,void 0,n)&&Qh(t)}return}let a=x()??await k(),o;try{o=await c({type:`answer`,sdp:t},e,n)}catch(t){r&&(m(r),Kh(r)),N(e,`answer`,t);return}if(r){if(!p(r)||r.isDead){Kh(r);return}let t=eg(i,e);if(t.connection.phase===`connected`||t.outbound.phase===`answered`||t.inbound.phase===`answering`&&!t.inbound.peer.isDead&&a>e){r.destroy();return}t.inbound.phase===`answering`&&Jh(t,t.inbound.peer),Qh(t),I(t,e,r,n),F(t,e,r),r.signal(o);return}let s=i.get(e);if(!s||s.outbound.phase!==`advertising`||s.outbound.offerId!==n||s.outbound.peer.isDead)return;let l=s.outbound.peer;I(s,e,l,n),l.signal(o)},se=(e,t,n,r)=>A(e).then(e=>{!u()&&n.connection.phase!==`connected`&&n.inbound.phase===`idle`&&n.outbound.phase!==`answered`&&r(e,uu({peerId:t}))});return{handleMessage:e=>async(t,n,r)=>{try{if(u())return;T[e]=r;let a=Th(n);if(!a)return;let[c,l,d,f,p,m]=a,h=x();if(!c||h&&c===h)return;let[g,_,v]=await ld([o,s,k()]);if(c===v||u()||t!==g&&t!==_)return;C?.(c,e,r);let y=i.get(c);if(y?.connection.phase===`connected`){let e=Oh(y.connection.peer);if(e===`live`){y.connection.unhealthySince=null;return}if(e===`stale`)Zh(y);else{let e=Date.now();if(e-(y.connection.unhealthySince??=e)<Mh)return;Zh(y)}}if(!l&&!d&&!f){if(w&&!w(c,`outbound`)||!i.has(c)&&j(c))return;let t=eg(i,c);if(t.inbound.phase!==`idle`||t.connection.phase===`connected`||t.outbound.phase===`answered`)return;if(v>=c&&!t.offerPeer){let n=Gh.get(t);n||(n=[],Gh.set(t,n));let i=n[e];if(i!==void 0&&Date.now()-i<1e3)return;n[e]=Date.now(),await se(c,v,t,r);return}Ph(t.relaySlots[e])&&(t.relaySlots[e]={phase:`reserved`},await ne(e,c,r));return}if(l){await ae(e,c,l,p,r);return}if(f){await oe(c,f,p,m);return}d&&await L(c,d,p,m)}catch(e){u()||Ru(`signal`,e)}},dialPeer:e=>{bh(e)&&k().then(t=>{if(u()||!e||e===t||w&&!w(e,`outbound`)||!i.has(e)&&j(e))return;let n=eg(i,e);if(n.connection.phase===`connected`||n.inbound.phase!==`idle`||n.outbound.phase!==`idle`||!T.some(Boolean))return;let r=Date.now(),a=D.get(e);if(a&&r<a[1])return;let o=(a?.[0]??0)+1;D.set(e,[o,r+Math.min(6e4,2e3*2**(o-1))]),T.forEach((r,i)=>{r&&(t<e?n.outbound.phase!==`answered`&&Ph(n.relaySlots[i])&&(n.relaySlots[i]={phase:`reserved`},ne(i,e,r).catch(e=>{u()||Ru(`signal`,e)})):se(e,t,n,r).catch(Q))})}).catch(e=>{u()||Ru(`signal`,e)})}}},ng=18e4,rg=20,ig=Z(`room left while preparing offer`),ag=e=>{let t=new WeakMap,n=new Set,r=!1,i=e=>{let r=t.get(e);r?.phase===`leased`&&gd(r.timer),n.delete(e),t.set(e,{phase:`closed`}),e.destroy()},a=e=>{if(r||e.isDead)return!1;let i=t.get(e);if(!i)return!0;switch(i.phase){case`leased`:return gd(i.timer),n.delete(e),t.set(e,{phase:`claimed`}),!0;case`claimed`:return!0;case`closed`:return!1;default:return lu(i)}},o=e=>{t.get(e)?.phase===`leased`&&i(e)},s=(s,c,l,u=rg)=>{let d=async(s=!1)=>{if(r)throw ig;let f=e(),p=cd(u);try{let e=await l(f,p);if(r)throw ig;if(c){let r=setTimeout(()=>{t.get(f)?.phase===`leased`&&i(f)},ng);return _d(r),t.set(f,{phase:`leased`,timer:r}),n.add(f),{peer:f,offer:e,offerId:p,claim:()=>{a(f)},reclaim:()=>o(f)}}return{peer:f,offer:e,offerId:p}}catch(e){if(f.destroy(),!s&&!r)return d(!0);throw e}};return ld(od(s,()=>d()))};return{checkout:s,getOffers:(e,t)=>s(e,!0,t),claimLeased:a,reclaimLeased:o,destroy:()=>{if(!r){r=!0;for(let e of Array.from(n))i(e)}}}},og=15e3,sg=150,cg=5e3,lg=`icecandidate`,ug=`icegatheringstatechange`,dg=`iceconnectionstatechange`,fg=`offer`,pg=`answer`,mg=/out of range/i,hg=128,gg=8192,_g=(e,t)=>{let{trickleIce:n,rtcConfig:r,rtcPolyfill:i,turnConfig:a}=t,o=[...r?.iceServers??vg,...a??[]],s=new(i??RTCPeerConnection)({...r,iceServers:o}),c,l,u,d=new Set,f=n!==!1,p=[],m=null,h=new WeakMap,g=(e,t)=>{let n=h.get(e);n||(n=new Set,h.set(e,n)),n.add(t)},_={phase:`open`},v={phase:`idle`},y=0,b={phase:`unbound-idle`},x,S=[],C,w=[],T=null,E,D=null,O=e?new Promise(e=>{D=e}):void 0,k=e=>{if(D){let t=D;D=null,E=e,t(e)}},A=()=>{_.phase===`disconnected-grace`&&(gd(_.timer),_={phase:`open`})},j=()=>{_.phase!==`closed`&&(_.phase===`disconnected-grace`&&gd(_.timer),_={phase:`closed`},y+=1,v={phase:`idle`},k(),b.phase===`unbound-buffering`&&(gd(b.deadlineTimer),b.queue.length=0),b={phase:`closed`},x=void 0,S.length=0,C=void 0,w.length=0,p.length=0,d.forEach(e=>e()),l?.())},M=()=>(_.phase!==`closed`&&s.connectionState===`closed`&&j(),_.phase===`closed`),N=e=>{if(!M()){if(e.type===fg){let t=D!==null;if(k(e),t&&!x&&!s.remoteDescription)return}x?x(e):S.push(e)}},P=e=>{if(!M()){if(x){let t=x;x=n=>{t(n),e(n)}}else{x=e;for(let e of S.splice(0)){if(M()||!x)break;x(e)}}}},ee=e=>({type:e.localDescription?.type??fg,sdp:e.localDescription?.sdp??``}),F=()=>s.remoteDescription?.sdp?.match(/a=ice-ufrag:(\S+)/)?.[1]??null,te=e=>{if(!s.remoteDescription)return!1;let t=(s.remoteDescription.sdp?.match(/^m=/gm)??[]).length;if(typeof e.sdpMLineIndex==`number`&&t>0&&e.sdpMLineIndex>=t)return!1;let n=F();return!(n&&e.usernameFragment&&e.usernameFragment!==n)},I=async e=>{try{return await s.addIceCandidate(e),!0}catch(t){if(t instanceof Error&&mg.test(t.message)&&typeof e.sdpMLineIndex==`number`)return!1;throw t}},ne=e=>{M()||(p.length>=hg&&p.shift(),p.push(e))},re=async()=>{if(M()||!s.remoteDescription||m&&(await m,M()||!s.remoteDescription)||!p.length)return;let e=(async()=>{let e=[];try{for(;!M()&&s.remoteDescription&&p.length>0;){let t=F();for(let n of p.splice(0)){if(M())return;t&&n.usernameFragment&&n.usernameFragment!==t||te(n)&&await I(n)||e.push(n)}}}finally{if(!M()&&e.length>0){let t=p.splice(0);for(let n of[...e,...t])ne(n)}m=null}})();m=e,await e},ie=async e=>{m||!te(e)?ne(e):await I(e)||ne(e)},ae=e=>{e.binaryType=`arraybuffer`,e.bufferedAmountLowThreshold=65535;let t=()=>{Fu(`excessive pre-handler data; disconnecting peer`),e.close(),s.close(),j()};e.onmessage=n=>{if(T!==e||b.phase===`closed`)return;let r=n.data,i=b.phase===`bound`?_m:vm;if(!(r instanceof ArrayBuffer)&&!ArrayBuffer.isView(r)||r.byteLength>i)t();else switch(b.phase){case`bound`:b.handler(r);break;case`unbound-idle`:{let e=setTimeout(t,ym);_d(e),b={phase:`unbound-buffering`,queue:[r],deadlineTimer:e};break}case`unbound-buffering`:if(b.queue.length>=64){t();return}b.queue.push(r);break;default:lu(b)}},e.onopen=()=>{T===e&&!M()&&c?.()},e.onclose=()=>{T===e&&j()},e.onerror=({error:t})=>{T!==e||M()||t?.errorDetail===`sctp-failure`&&(t.sctpCauseCode===12||/^User-Initiated Abort\b/.test(t.message))||u?.(yd(t,`data channel error`))}},oe=jd(o,/^turns?:/i),L=!oe&&jd(o,/^stuns?:/i),se=oe?/\btyp relay\b/:L?/\btyp (?:srflx|relay|prflx)\b/:/\btyp (?:host|srflx|relay|prflx)\b/,ce=async e=>(await new Promise(t=>{let n=!1,r=null,i=()=>{n||(n=!0,gd(c),gd(r),e.removeEventListener(ug,o),e.removeEventListener(lg,s),d.delete(i),t())},a=(t=``)=>{if(n)return;let a=`${e.localDescription?.sdp??``}\n${t}`;se.test(a)&&(gd(r),r=setTimeout(i,sg),_d(r))},o=()=>{e.iceGatheringState===`complete`||M()?i():a()},s=e=>{let{candidate:t}=e;t?a(t.candidate):i()},c=setTimeout(i,og);_d(c),d.add(i),e.addEventListener(ug,o),e.addEventListener(lg,s),o()}),ee(e)),le=()=>f?ee(s):ce(s),ue=async e=>{let t=await le();if(!(M()||e!==void 0&&y!==e))return N(t),t};e?(T=s.createDataChannel(`data`),ae(T)):s.ondatachannel=({channel:e})=>{T&&T!==e&&(T.onopen=T.onclose=T.onmessage=T.onerror=null,T.close()),T=e,ae(e)};let de=async()=>{if(M()||v.phase!==`idle`||s.signalingState!==`stable`){M()&&k();return}let e=++y;v={phase:`making-offer`,gen:e};try{return await s.setLocalDescription(),M()||y!==e?void 0:await ue(e)}catch(t){if(y!==e)return;k(),u?.(yd(t,`failed to create local offer`))}finally{v.phase===`making-offer`&&v.gen===e&&(v={phase:`idle`})}};s.onnegotiationneeded=()=>{de()},s.onicecandidate=({candidate:e})=>{if(!f||!e||M())return;let t=typeof e.toJSON==`function`?e.toJSON():{candidate:e.candidate,sdpMid:e.sdpMid,sdpMLineIndex:e.sdpMLineIndex,usernameFragment:e.usernameFragment};N({type:hd,sdp:JSON.stringify(t)})};let fe=()=>s.connectionState===`disconnected`||s.iceConnectionState===`disconnected`,pe=()=>{if(_.phase===`closed`)return;let e=s.connectionState,t=s.iceConnectionState;if(e===`failed`||e===`closed`||t===`failed`||t===`closed`)j();else if(e===`connected`||e===`connecting`||t===`connected`||t===`completed`||t===`checking`)A();else if(fe()&&_.phase===`open`){let e=setTimeout(()=>{_.phase===`disconnected-grace`&&(_={phase:`open`},fe()&&j())},cg);_d(e),_={phase:`disconnected-grace`,timer:e}}};return s.onconnectionstatechange=pe,s.addEventListener(dg,pe),s.ontrack=e=>{let t=e.streams[0];t&&!M()&&(C?C(t):w.push(t))},e&&queueMicrotask(()=>{!M()&&v.phase===`idle`&&s.signalingState===`stable`&&!s.localDescription&&s.onnegotiationneeded?.(new Event(`negotiationneeded`))}),{connection:s,get channel(){return T},get isDead(){return M()},getOffer:async()=>{if(e)return D===null?E&&!s.remoteDescription?E:s.localDescription?.type===fg?le():E:O},async signal(t){if(!M()){if(t.type===`candidate`){if(t.sdp.length>gg)return;try{let e=JSON.parse(t.sdp);e&&typeof e==`object`&&await ie(e)}catch(e){u?.(yd(e,`failed to parse remote candidate`))}}else if(T?.readyState!==`open`||t.sdp?.includes(`a=rtpmap`))try{let n={...t};if(t.type===fg){let t=v.phase===`making-offer`||s.signalingState!==`stable`&&v.phase!==`applying-remote-answer`;return t&&e?void 0:(y+=1,v.phase===`making-offer`&&(v={phase:`idle`}),t&&s.signalingState!==`stable`?await ld([s.setLocalDescription({type:`rollback`}),s.setRemoteDescription(n)]):await s.setRemoteDescription(n),await re(),await s.setLocalDescription(),await ue())}if(t.type===pg){v={phase:`applying-remote-answer`};try{await s.setRemoteDescription(n),await re()}finally{v.phase===`applying-remote-answer`&&(v={phase:`idle`})}}}catch(e){M()||u?.(yd(e,`failed to apply remote signal`))}}},sendData:e=>{if(M()||!T||T.readyState===`closing`||T.readyState===`closed`)throw Z(Bu);T.send(e)},destroy:()=>{A(),k(),T?.close(),s.connectionState!==`closed`&&s.close(),j()},setHandlers:e=>{if(`connect`in e&&(c=e.connect),`close`in e&&(l=e.close),`error`in e&&(u=e.error),`data`in e&&b.phase!==`closed`){let t=e.data;if(t){let e=[];b.phase===`unbound-buffering`&&(gd(b.deadlineTimer),e=b.queue.splice(0)),b={phase:`bound`,handler:t};for(let t of e){if(b.phase!==`bound`)break;b.handler(t)}}else b.phase===`unbound-buffering`&&gd(b.deadlineTimer),b={phase:`unbound-idle`}}if(e.signal&&P(e.signal),`stream`in e&&!M()&&(C=e.stream,C))for(let e of w.splice(0)){if(M()||!C)break;C(e)}},addStream:e=>{e.getTracks().forEach(t=>{let n=s.addTrack(t,e);n&&g(e,n)})},removeStream:e=>{let t=h.get(e);if(t){h.delete(e),t.forEach(e=>s.removeTrack(e));return}let n=e.getTracks();s.getSenders().forEach(e=>{e.track&&n.includes(e.track)&&s.removeTrack(e)})},addTrack:(e,t)=>{let n=s.addTrack(e,t);n&&t&&g(t,n)},removeTrack:(e,t)=>{let n=s.getSenders().find(t=>t.track===e);n&&(t&&h.get(t)?.delete(n),s.removeTrack(n))},replaceTrack:(e,t)=>{let n=s.getSenders().find(t=>t.track===e);if(n)return n.replaceTrack(t)}}},vg=[...od(3,(e,t)=>`stun:stun${t||``}.l.google.com:19302`),`stun:stun.cloudflare.com:3478`].map(e=>({urls:e})),yg=64,bg=`request failed`,xg=e=>Md(e)&&typeof e.r==`string`?e:null,Sg=e=>{let t=xg(e);return t?[t.r,Object.hasOwn(t,`m`)?t.m:void 0]:null},Cg=e=>{let t=xg(e);return t?[t.r,typeof t.e==`string`?t.e:void 0]:null},wg=(e,t)=>t===void 0?e:{...e,metadata:t},Tg=(e,t)=>e?{[Nu]:e,...t===void 0?{}:{m:t}}:t,Eg=e=>{if(Md(e)&&Nu in e){let t=e[Nu];return[Id(t)?t:void 0,Object.hasOwn(e,`m`)?e.m:void 0]}return[void 0,e]},Dg=e=>{if(e===void 0)return[];let t=[e].flat().filter(Boolean);if(t.length===0)throw Z(`action roles must contain at least one non-empty role name`);return[...new Set(t)].sort()},Og=(e,t)=>e.length===t.length&&e.every((e,n)=>e===t[n]),kg=e=>{let t=e.getTransport,n=t=>e.getPeerUserId?e.getPeerUserId(t):t,r=t=>e.getPeerRoles?[...e.getPeerRoles(t)]:[],i=e=>!!t(e,!1)?.isOpen,a=Object.create(null),o=new Map,s=new Map,c=new Map,{makeWireAction:l,handleData:u,clearPeer:d}=ih({resolveTransport:t,getPeerIds:e.getPeerIds,canReceiveFromPeer:e.canReceiveFromPeer,onPeerError:e.onPeerError,...e.broadcastInline?{broadcastInline:e.broadcastInline}:{},...e.onUnknownType?{onUnknownType:e.onUnknownType}:{},...e.maxReceiveBytes===void 0?{}:{maxReceiveBytes:e.maxReceiveBytes}}),f=(e,t)=>e?(r,i)=>{let a=e(r,wg({peerId:i,userId:n(i)},t));a&&typeof a.then==`function`&&Promise.resolve(a).catch(e=>Ru(`progress handler`,e))}:void 0,p=(t,r={})=>{let i=t.startsWith(`@_`)?t:`@_${t}`,a=!!r.sendToPending,s=l(i,r),c=o.get(i);if(c)return c;let[u,d,,p]=Au(`progress handler`),[m,h]=Au(`internal action handler`,e=>{s.onMessage(e?(e,t,r)=>{h(e,wg({peerId:t,userId:n(t)},r))}:null)}),[g,_]=ju(`onReceive`,e=>{s.onReceive(e?t=>e(wg({peerId:t.peerId,userId:n(t.peerId),byteLength:t.byteLength,signal:t.signal},t.metadata)):null)});s.onProgress((e,t,r)=>{p()&&d(e,wg({peerId:t,userId:n(t)},r))});let v=Mu({send:(t,n={})=>s.send(t,e.resolveSendTarget?e.resolveSendTarget(n.target,a):n.target,n.metadata,f(n.onProgress,n.metadata),n.signal),onMessage:(e,t)=>m(e,t),onReceiveProgress:(e,t)=>u(e,t),onReceive:(e,t)=>g(e??_(),t)},[`onMessage`,`onReceive`,`onReceiveProgress`]);return o.set(i,v),v},m=e=>{let t=e.state;switch(t.phase){case`done`:return!1;case`preparing`:return e.state={phase:`done`},s.delete(e.requestId),t.controller.abort(),!0;case`active`:return e.state={phase:`done`},gd(t.timer),s.delete(e.requestId),t.controller.abort(),!0;default:return lu(t)}},h=e=>e.state.phase===`done`,g=(e,t)=>{if(e.state.phase!==`preparing`)return!1;let n=null;return t!==void 0&&(n=setTimeout(()=>{e.state.phase===`active`&&e.reject(Jm(`timeout`,`request timed out`))},t),_d(n)),e.state={phase:`active`,controller:e.state.controller,timer:n},!0},_=(e,t)=>{d(e);let n=c.get(e);n&&(c.delete(e),n.forEach(e=>e.abort()));let r=Jm(`disconnected`,vd(t,Bu));for(let t of Array.from(s.values()))if(t.peerId===e)switch(t.state.phase){case`preparing`:case`active`:t.reject(r);break;case`done`:break;default:lu(t.state)}},v=(e,t)=>{let n=Cg(t),r=n?s.get(n[0]):void 0;return n&&r&&r.state.phase===`active`&&r.peerId===e?[n,r]:null},y=l(`@_response`,{receiveScope:(e,t)=>{let i=v(e,t);if(!i)return null;let[a,o]=i;if(o.state.phase!==`active`)return null;let s=a[1]===void 0?o.getReceive():null;return[a[0],o.state.controller.signal,s?e=>s({byteLength:e.byteLength,peerId:e.peerId,userId:n(e.peerId),kind:`response`,signal:e.signal,roles:r(e.peerId)}):null,e=>{o.reject(Jm(`rejected`,e))}]}});y.onProgress((e,t,r)=>{let i=v(t,r);i&&i[0][1]===void 0&&i[1].emitReceiveProgress(e,{peerId:t,userId:n(t)})}),y.onMessage((e,t,n)=>{let r=v(t,n);if(!r)return;let[i,a]=r;i[1]===void 0?a.resolve(e):a.reject(Jm(`rejected`,i[1]))});let b=(t,o,u)=>{if(!u&&t.startsWith(`@_`))throw Z(`action namespace "${t}" is reserved for internal protocol use`);if(o&&(`onMessage`in o||`onRequest`in o||`onReceive`in o||`onReceiveProgress`in o))throw Z(`makeAction config does not accept event handlers; subscribe via action.on*(fn)`);let d=o?.kind??`message`,p=Dg(o?.roles),_=p.length>0,v=a[t];if(v){if(v.kind!==d||v.internal!==u||!Og(v.requiredRoles,p))throw td(t);return v.action}_&&e.registerActionAuthority?.(t,p);let b=l(t),[x,S,C,w]=Au(`progress handler`),T=e=>Eg(d===`request`?Sg(e)?.[1]:e),E=t=>(e.resolveRequestTarget?e.resolveRequestTarget(t,!1):t)??t,D=(e,t)=>wg({peerId:e,userId:n(e),roles:r(e)},t),O=(e,t)=>({...D(e.peerId,t),byteLength:e.byteLength,signal:e.signal,kind:d}),k=()=>{!j()&&!_?b.onReceive(null):b.onReceive(t=>{let[n,r]=T(t.metadata);if(!_){let e=j();return!e||e(O(t,r))}if(!e.authorizePeerAction)return!1;let i=e.authorizePeerAction(t.peerId,p,n),a=e=>{if(!e)return!1;let n=j();return!n||n(O(t,r))};return typeof i==`boolean`?a(i):i.then(a,()=>!1)})},[A,j,M]=ju(`onReceive`,()=>k());k(),b.onProgress((e,t,r)=>{if(w()){let[,i]=T(r);S(e,wg({peerId:t,userId:n(t)},i))}});let N=async n=>{if(!_)return n;if(!e.getLocalActionCert)throw Z(`${Xu} for action "${t}": requires [${p.join(`, `)}]`);return Tg(await e.getLocalActionCert(p,t),n)};if(d===`message`){let n=(t,n,r)=>{if(_&&(!e.authorizePeerAction||e.authorizePeerAction(n,p)!==!0))return;let[,a]=Eg(r);i(t,D(n,a))},[r,i,o]=Au(`action handler`,e=>b.onMessage(e?n:null)),s=Mu({send:async(t,n={})=>{Ym(n.signal);let r=_?await N(n.metadata):n.metadata;await b.send(t,e.resolveSendTarget?e.resolveSendTarget(n.target,!1):n.target,r,f(n.onProgress,n.metadata),n.signal)},onMessage:(e,t)=>r(e,t),onReceive:(e,t)=>A(e,t),onReceiveProgress:(e,t)=>x(e,t)},[`onMessage`,`onReceive`,`onReceiveProgress`]);return a[t]={kind:d,requiredRoles:p,action:s,internal:u,clear:()=>{o(),M(),C()}},s}b.onReject((e,t,n)=>{let r=Sg(t);r&&y.send(null,e,{r:r[0],e:n}).catch(Q)});let P=(t,n,r)=>{let i=Sg(r);if(!i)return;let a=i[0],o=c.get(n);if((o?.size??0)>=yg){y.send(null,n,{r:a,e:`too many concurrent requests`}).catch(Q);return}let s=new AbortController;o||(o=new Set,c.set(n,o)),o.add(s),(async()=>{if(_&&(!e.authorizePeerAction||await e.authorizePeerAction(n,p)!==!0))throw Z(`${Xu} for request`);let r=F();if(!r)throw Z(`no active request handler`);let[,a]=Eg(i[1]),o=await r(t,{...D(n,a),signal:s.signal});if(o===void 0)throw Z(`request handler returned undefined`);return o})().then(e=>s.signal.aborted?void 0:y.send(e,n,{r:a},void 0,s.signal),e=>s.signal.aborted?void 0:y.send(null,n,{r:a,e:vd(e,bg).slice(0,512)},void 0,s.signal)).catch(Q).finally(()=>{let e=c.get(n);e?.delete(s),e&&!e.size&&c.delete(n),s.abort()})},[ee,F,te]=ju(`onRequest`,e=>b.onMessage(e?P:null)),I=async(e,t,n,r)=>{let{metadata:a,onProgress:o,signal:c,timeoutMs:l}=r;if(Ym(c),!i(t))throw Jm(`disconnected`,rd(n));let u=crypto.randomUUID(),d=new AbortController,{promise:p,resolve:v,reject:y}=Promise.withResolvers();p.catch(Q);let x={requestId:u,peerId:t,state:{phase:`preparing`,controller:d},getReceive:j,emitReceiveProgress:S,resolve:e=>{m(x)&&v(e)},reject:e=>{m(x)&&y(e)}};if(s.set(u,x),c){let e=()=>{x.reject(Jm(`aborted`,Yu))};c.aborted?e():c.addEventListener(`abort`,e,{once:!0,signal:d.signal})}if(h(x))return await p;let C=a;if(_){try{C=await N(a)}catch(e){return x.reject(yd(e,bg)),await p}if(h(x))return await p;if(!i(t))return x.reject(Jm(`disconnected`,rd(n))),await p}if(!g(x,l))return await p;try{let n=c?AbortSignal.any([d.signal,c]):d.signal;return b.send(e,t,C===void 0?{r:u}:{r:u,m:C},f(o,a),n).catch(e=>{x.reject(yd(e,bg))}),await p}finally{x.reject(Jm(`aborted`,Yu))}},ne=Mu({request:(e,t)=>{let{target:n,...r}=t;return I(e,E(n),n,r)},requestMany:async(e,t)=>{let{targets:r,onResult:i,...a}=t;return Ym(a.signal),ld(r.map(async t=>{let r=E(t),o={peerId:r,userId:n(r)||t},s;try{s={...o,status:`fulfilled`,value:await I(e,r,t,a)}}catch(e){let t=yd(e,bg);if(t.kind===`aborted`||!t.kind)throw t;s=t.kind===`timeout`||t.kind===`disconnected`?{...o,status:t.kind}:{...o,status:`rejected`,error:t}}return i?.(s),s}))},onRequest:(e,t)=>ee(e,t),onReceive:(e,t)=>A(e,t),onReceiveProgress:(e,t)=>x(e,t)},[`onRequest`,`onReceive`,`onReceiveProgress`]);return a[t]={kind:d,requiredRoles:p,action:ne,internal:u,clear:()=>{te(),M(),C()}},ne};return{makeAction:((e,t)=>b(e,t,!1)),makeInternalAction:p,makeInternalRequestAction:e=>{let t=e.startsWith(`@_`)?e:`@_${e}`;return b(t,{kind:`request`},!0)},handleData:u,clearPeer:_,clearListeners:()=>{md(a).forEach(e=>{e.internal||e.clear()})}}},Ag=Z(`peer identity verification failed`),jg=Z(`peer disconnected during handshake`),Mg=1e4,Ng=16,Pg=`__${au}_id`,Fg=ou(`id-hs`,2),Ig=e=>{if(!e||typeof e!=`string`)return[];let t=e.matchAll(/^a=fingerprint:([^\r\n]+)$/gm),n=new Set;for(let e of t){let t=e[1]?.trim().toLowerCase();t&&n.add(t)}return[...n].sort()},Lg=async(e,t,n,r,i=[])=>{if(!e||typeof e!=`object`)throw Ag;let a=e;if(a[Pg]!==t||typeof a.n!=`string`||a.n.length<16||!Array.isArray(a.dtls)||!Nd(a.uid)||typeof a.pk!=`string`||typeof a.uk!=`string`||t===2&&(typeof a.ps!=`string`||typeof a.us!=`string`))throw Ag;let o=a.dtls.filter(e=>typeof e==`string`);if(r.length>0&&r.join(`,`)!==o.join(`,`)||i.length>0&&o.length===0)throw Z(`DTLS fingerprint mismatch`);let s=Gf(a.pk),c=Gf(a.uk);if(!s||!c)throw Ag;let[l,u]=await ld([rp(n,s),ip(a.uid,c)]);if(!l||!u)throw Ag;return[a.n,o,a.uid,s,c,typeof a.ps==`string`?a.ps:void 0,typeof a.us==`string`?a.us:void 0]},Rg=async(e,t,n,r,i)=>{let[a,o]=await ld([ep(xu(t),e,r),ep(xu(n),e,i)]);if(!a||!o)throw Ag},zg=e=>{let{endpointIdentityP:t,appId:n,roomId:r,getUserIdentity:i,onVerified:a}=e,o=async(e,n)=>{let[r,i]=await ld([(await t).sign(e),n.sign(e)]);return{ps:bu(r),us:bu(new Uint8Array(i))}},s=(e,t,r,i,a,o,s,c,l)=>fu(uu([Fg,n,e,t,r,i,a,o,s,c,l]));return{run:async(n,c,l,u,d)=>{let[f,p,m]=await ld([r,i(),t]),h=m.peerId,g=d??e.getPeerHandle?.(n),_=Ig(g?.connection?.localDescription?.sdp),v=Ig(g?.connection?.remoteDescription?.sdp);if(g?.connection&&(!_.length||!v.length))throw Z(`DTLS fingerprint missing`);let y=(e,t,n)=>c({[Pg]:e,n:t,dtls:_,uid:p.userId,pk:Wf(m.signPubJwk),uk:Wf(p.signPubJwk),...n}),b=(e,t)=>Lg(e,t,n,v,_),x=e=>v.length>0?v:e,S=(e,t,n)=>({userId:e,peerPubKey:t,userPubKey:n});if(u){let e=crypto.randomUUID();await y(1,e);let{data:t}=await l(),[r,i,u,d,m,v,C]=await b(t,2),w=s(f,h,n,e,r,_,x(i),p.userId,u);await Rg(w,v,C,d,m);let T=await o(w,p),E=()=>c({[Pg]:3,...T}),D=S(u,d,m);try{a?.(n,D,g)}catch(e){throw e===Uu&&await E(),e}return await E(),D}let{data:C}=await l(),[w,T,E,D,O]=await b(C,1),k=crypto.randomUUID(),A=s(f,n,h,w,k,x(T),_,E,p.userId);await y(2,k,await o(A,p));let{data:j}=await l();if(!j||typeof j!=`object`)throw Ag;let M=j;if(M[Pg]!==3||typeof M.ps!=`string`||typeof M.us!=`string`)throw Ag;await Rg(A,M.ps,M.us,D,O);let N=S(E,D,O);return a?.(n,N,g),N}}},Bg=(e,t)=>{e.messages.length=0;for(let[,n]of e.waiters.splice(0))n(t)},Vg=e=>{`timer`in e&&gd(e.timer)},Hg=e=>{let{selfIdP:t,onPeerHandshake:n,onHandshakeError:r,deferResponderReady:i,sendHandshakeData:a,sendHandshakeReady:o,onLocalHandshakePassed:s,acquireAdmissionSlot:c,beforeSendHandshakeReady:l,onActivate:u,onFailure:d}=e,f=new Map,p=(e,t)=>{let n=f.get(e);if(!(!n||n.phase===`active`||t&&n.peer!==t))return n},m=(e,t)=>{Vg(t),f.set(e,{phase:`active`,peer:t.peer}),u(e,t.peer)},h=(e,t,n)=>{let i=f.get(e);i&&i.peer===t&&(Vg(i),r?.(e,n),d(e,t,n))},g=(e,t,n,r)=>{if(!c(e,t))return;let i=p(e,t);if(!i)return;let a=r||i.phase===`awaiting-remote-ready`||`remoteReady`in i&&i.remoteReady;f.set(e,{phase:`preparing-ready`,peer:t,timer:n,remoteReady:a});let s=n=>{let r=f.get(e);if(!r||r.phase!==`preparing-ready`||r.peer!==t)return;let i=r.remoteReady;i?(Vg(r),f.set(e,{phase:`active`,peer:t})):f.set(e,{phase:`awaiting-peer-ready`,peer:t,timer:r.timer}),o(n||``,e).catch(n=>h(e,t,Z(`handshake ready send failed: ${vd(n,`send failed`)}`))),i&&u(e,t)},d;try{d=l(e,t)}catch{d=void 0}d?d.then(s,()=>s()):s()},_=(e,t)=>{let n=f.get(e);n&&(Vg(n),`queue`in n&&Bg(n.queue,t),f.delete(e))};return{addPeer:(e,t)=>{f.has(e)&&_(e,jg),f.set(e,{phase:`added`,peer:t,queue:{messages:[],waiters:[]},remoteReady:!1})},clearPeer:_,canReceiveFromPeer:(e,t)=>{let n=f.get(e);return!(!n||n.phase!==`active`&&!t)},start:(e,r)=>{let o=f.get(e);if(!o||o.phase!==`added`||o.peer!==r)return;let c=setTimeout(()=>h(e,r,Z(`handshake timed out after ${Mg}ms`)),Mg);_d(c),f.set(e,{phase:`running-steps`,peer:r,timer:c,role:`resolving`,queue:o.queue,remoteReady:o.remoteReady});let l=async(t,n)=>{if(f.get(e)?.peer!==r)throw jg;await a(t,e,n)},u=()=>new Promise((t,n)=>{let i=f.get(e);if(!i||i.peer!==r||i.phase!==`running-steps`){n(jg);return}let a=i.queue.messages.shift();a?t(a):i.queue.waiters.push([t,n])});t.then(t=>{let i=t<e,a=f.get(e);return a?.phase===`running-steps`&&a.peer===r&&f.set(e,{...a,role:i?`initiator`:`responder`}),n(e,l,u,i,r)}).then(()=>{let t=f.get(e);if(!t||t.phase!==`running-steps`||t.peer!==r||(Bg(t.queue,jg),!s(e,r)))return;let n=f.get(e);n&&n.phase===`running-steps`&&n.peer===r&&(i&&n.role===`responder`&&!n.remoteReady?f.set(e,{phase:`awaiting-remote-ready`,peer:r,timer:n.timer}):g(e,r,n.timer,n.remoteReady))}).catch(t=>h(e,r,yd(t,`handshake failed`)))},receiveData:(e,t,n)=>{let r=f.get(t);if(!r||!(`queue`in r))return;let i=n===void 0?{data:e}:{data:e,metadata:n},a=r.queue.waiters.shift();a?a[0](i):r.queue.messages.length>=Ng?h(t,r.peer,Z(`too many pending handshake messages`)):r.queue.messages.push(i)},receiveReady:e=>{let t=f.get(e);if(t&&t.phase!==`active`)switch(t.phase){case`added`:case`running-steps`:case`preparing-ready`:f.set(e,{...t,remoteReady:!0});return;case`awaiting-remote-ready`:g(e,t.peer,t.timer,!0);return;case`awaiting-peer-ready`:m(e,t);return;default:lu(t)}},getPeer:e=>f.get(e)?.peer}},Ug=e=>e?.phase===`waiting`||e?.phase===`active`,Wg=e=>{if(!Md(e)||typeof e.k!=`string`)return null;let t=e.t,n=Object.hasOwn(e,`m`);return{key:e.k,streamId:typeof e.s==`string`?e.s:void 0,expectedTrackCount:typeof t==`number`&&Number.isInteger(t)&&t>=0?t:void 0,hasMetadata:n,metadata:n?e.m:void 0}},Gg=e=>e?.getTracks?.()??[],Kg=e=>typeof e.id==`string`?e.id:void 0,qg=(e,t)=>e!==void 0&&e>0&&t.length<e,Jg=(e,t,n,r)=>{typeof e.addEventListener==`function`&&typeof e.removeEventListener==`function`&&(e.addEventListener(t,n),r.push(()=>{e.removeEventListener?.(t,n)}))},Yg=()=>{let e=new WeakMap;return t=>{let n=e.get(t);return n||(n=crypto.randomUUID(),e.set(t,n)),n}},Xg=()=>{let e=new Map,t=new Map,n=new WeakMap;return{getStreamKey:Yg(),rememberRemoteStream:(r,i,a)=>{let o=n.get(i);o!==void 0&&e.get(o)===i&&e.delete(o),n.set(i,r),e.set(r,i),a&&t.set(a,i)},getRemoteStream:(n,r)=>e.get(n)??(r?t.get(r):void 0),hasRemoteMedia:()=>e.size>0,clearRemote:()=>{e.clear(),t.clear()}}},Zg=(e,t)=>{for(let[n,r]of e.streams)if(r.phase===`waiting`&&(!t||n.id===t))return n},Qg=e=>{let t=0;for(let n of e.streams.values())n.phase===`waiting`&&t++;return t},$g=({iterate:e,isActive:t,preparePeer:n,getPeerUserId:r,onPeerError:i,onPeerMediaPinChange:a})=>{let o=new Map,s=new Map,[c,l,u]=Au(`peer stream handler`),d=Yg(),f=new WeakMap,p=new WeakMap,m=new WeakMap,h=0,g=e=>{let t=o.get(e);return t||(t={identityCache:Xg(),metaQueue:[],streams:new Map},o.set(e,t)),t},_=e=>{let t=s.get(e);return t||(t={streams:new Map},s.set(e,t)),t},v=e=>{let t=o.get(e);if(!t)return!1;for(let e of t.streams.values())if(e.phase===`active`)return!0;return!1},y=e=>!!s.get(e)?.streams.size,b=e=>{a?.(e,v(e)||y(e))},x=async(e,t)=>{let r=t??(n?await n(e):void 0);if(!r)throw Vu;return r},S=e=>{let t=e,n=new Set;for(;!n.has(t);){let e=m.get(t);if(!e)break;n.add(t),t=e}return t},C=e=>{let t=Gg(e),n=p.get(e);if(n)for(let e of t)n.has(e)||m.delete(e);return p.set(e,new Set(t)),t.map(S)},w=(e,t)=>{if(`active`in e&&e.active===!1)return!1;let n=e.getTracks?.();return n?t&&n.length===0?!1:n.length===0||!n.every(e=>e?.readyState===`ended`):!0},T=(e,t,n,r)=>{t.streams.get(n)===r&&(r.cleanup(),t.streams.set(n,{phase:`inactive`,key:r.key}),b(e))},E=e=>{for(let[t,n]of Array.from(e.streams.entries()))switch(n.phase){case`waiting`:n.cleanup(),e.streams.delete(t);break;case`active`:n.cleanup(),e.streams.set(t,{phase:`inactive`,key:n.key});break;case`inactive`:break;default:lu(n)}},D=(e,t,n)=>{let i=r?r(e):e;return t&&n!==void 0?{peerId:e,userId:i,metadata:n}:{peerId:e,userId:i}},O=(e,t)=>{if(!e.metaQueue.length)return null;let n=Kg(t),r=n?e.metaQueue.findIndex(e=>!e.streamId||e.streamId===n):0;if(r<0)return null;let i=e.metaQueue[r];return qg(i.expectedTrackCount,Gg(t))?null:(e.metaQueue.splice(r,1),i)},k=(e,n)=>{if(!t(e))return!1;let r=o.get(e);if(!r)return!1;let i=O(r,n);return i?(j(e,r,i.key,n,i.hasMetadata,i.metadata),!0):!1},A=(e,t,n)=>{if(Ug(t.streams.get(n))||Qg(t)>=64)return;let r=[];Jg(n,`addtrack`,()=>{k(e,n)},r),t.streams.set(n,{phase:`waiting`,cleanup:()=>{for(;r.length>0;)r.pop()()}})},j=(e,n,r,i,a,o)=>{if(!t(e))return;n.identityCache.rememberRemoteStream(r,i,Kg(i));let s=n.streams.get(i);Ug(s)&&s.cleanup();let c=Gg(i),u=!!(s?.phase===`active`&&s.hadTracks||c.length>0);if(!w(i,u)){n.streams.set(i,{phase:`inactive`,key:r}),s?.phase===`active`&&b(e);return}let d=a&&o!==void 0?`m:${uu(o)}`:``,f=s?.phase===`active`?s.emittedSig:void 0,p=[],m=new Set,h={phase:`active`,key:r,hasMetadata:a,metadata:o,emittedSig:d,hadTracks:u,cleanup:()=>{for(;p.length>0;)p.pop()()}},g=()=>{w(i,u)||T(e,n,i,h)},_=e=>{e&&!m.has(e)&&(m.add(e),u||(u=!0,n.streams.get(i)===h&&(h={...h,hadTracks:!0},n.streams.set(i,h))),Jg(e,`ended`,g,p))};Jg(i,`removetrack`,g,p),Jg(i,`inactive`,g,p),Jg(i,`addtrack`,()=>{if(n.streams.get(i)===h){for(let e of Gg(i))_(e);k(e,i)||g()}},p);for(let e of c)_(e);h={...h,hadTracks:u},n.streams.set(i,h),b(e),f!==d&&l(i,D(e,a,o))};return{addStream:async(t,n,r)=>{let i=d(t),a=Object.hasOwn(n,`metadata`)?(f.set(t,n.metadata),n.metadata):f.get(t),o=C(t);await ld(e(n.target,async(e,n)=>{let c=++h,l=_(e),u=l.streams.get(t);l.streams.set(t,u?.phase===`synced`?{phase:`synced`,syncGen:c,appliedTracks:u.appliedTracks}:{phase:`syncing-initial`,syncGen:c}),b(e);let d=()=>{let n=s.get(e),r=n?.streams.get(t);r?.syncGen===c&&r.phase===`syncing-initial`&&(n.streams.delete(t),n.streams.size||s.delete(e),b(e))},f;try{f=await x(e,n)}catch(e){throw d(),e}if(s.get(e)?.streams.get(t)?.syncGen!==c)return;try{await r({k:i,s:t.id,...o.length>0?{t:o.length}:{},...a===void 0?{}:{m:a}},{target:e})}catch(e){throw d(),e}let p=s.get(e)?.streams.get(t);if(!p||p.syncGen!==c)return;let m=Gg(t),g=m.map(S);switch(p.phase){case`syncing-initial`:s.get(e)?.streams.set(t,{phase:`synced`,syncGen:c,appliedTracks:new Set(g)}),g.length!==m.length||g.some((e,t)=>e!==m[t])?g.forEach(e=>f.addTrack(e,t)):f.addStream(t);return;case`synced`:{let e=new Set(g);for(let n of p.appliedTracks.difference(e))f.removeTrack(n,t),p.appliedTracks.delete(n);for(let n of e.difference(p.appliedTracks))f.addTrack(n,t),p.appliedTracks.add(n);return}default:lu(p)}}))},removeStream:(t,n)=>{n||(f.delete(t),p.delete(t)),e(n,(e,n)=>{let r=s.get(e),i=r?.streams.get(t);if(r&&(r.streams.delete(t),r.streams.size||s.delete(e)),b(e),n&&i?.phase!==`syncing-initial`&&(n.removeStream(t),i?.phase===`synced`))for(let e of i.appliedTracks.difference(new Set(Gg(t))))n.removeTrack(e,t)})},replaceTrack:async(t,n,r)=>{m.set(t,n),m.delete(n),await ld(e(r,async(e,r)=>{let i=s.get(e),a=!1;if(i)for(let[e,r]of i.streams.entries())r.phase===`synced`&&r.appliedTracks.has(t)?(r.appliedTracks.delete(t),r.appliedTracks.add(n),a=!0):r.phase===`syncing-initial`&&Gg(e).some(e=>e===t||S(e)===n)&&(a=!0);(a||r)&&await(await x(e,r)).replaceTrack(t,n)}))},receiveStreamMeta:(e,n)=>{if(!t(n))return;let r=Wg(e);if(!r)return;let a=g(n),o=Zg(a,r.streamId),s=o??a.identityCache.getRemoteStream(r.key,r.streamId),c=Gg(s);if(s&&(o!==void 0||c.length>0)&&!qg(r.expectedTrackCount,c)){let e=a.metaQueue.findIndex(e=>e.key===r.key);e>=0&&a.metaQueue.splice(e,1),j(n,a,r.key,s,r.hasMetadata,r.metadata);return}s&&qg(r.expectedTrackCount,c)&&A(n,a,s);let l=a.metaQueue.findIndex(e=>e.key===r.key);l>=0?a.metaQueue[l]=r:a.metaQueue.length>=64?(Fu(`too many pending stream metadata messages`),i(n,Z(`too many pending media metadata messages`))):a.metaQueue.push(r)},receiveRemoteStream:(e,n)=>{if(!t(e))return;let r=g(e),i=O(r,n);i?j(e,r,i.key,n,i.hasMetadata,i.metadata):A(e,r,n)},clearPeer:e=>{let t=o.get(e);t&&(E(t),o.delete(e)),s.delete(e),a?.(e,!1)},clearListeners:()=>{u();for(let[e,t]of o)E(t),b(e)},onPeerStream:(e,n)=>c(e,n,()=>{let e=[];for(let[n,r]of o)if(!t(n))E(r),b(n);else for(let[t,i]of Array.from(r.streams.entries()))i.phase===`active`&&(w(t,i.hadTracks)?e.push([t,D(n,i.hasMetadata,i.metadata)]):T(n,r,t,i));return e})}},e_=16384,t_=65536,n_=65536,r_=40,i_=60,a_=120,o_=1024,s_=16,c_=184320,l_=61440,u_=400,d_=5e3,f_=8,p_=32,m_=new Set([`v`,`k`,`appId`,`roomId`,`ns`,`hlc`,`peerId`,`userId`,`pub`,`val`,`del`,`cert`,`sig`]),h_=(e,t)=>Rp(`state`,[e.v,e.k,e.appId,e.roomId,e.ns,e.hlc,e.peerId,e.userId,e.pub,e.del===!0?null:t??Wp(e.val),+(e.del===!0),e.cert?.sig??``]),g_=(e,t=1/0)=>{if(!Md(e)||pd(e).some(e=>!m_.has(e))||e.v!==1||e.k!==`s`&&e.k!==`u`||!Nd(e.appId)||!Nd(e.roomId)||!Nd(e.ns)||e.ns.length>256||!zp(e.hlc)||!bh(e.peerId)||!Zf(e.userId)||typeof e.pub!=`string`||!Gf(e.pub)||!Fd(e.sig)||e.cert!==void 0&&!Id(e.cert))return null;if(e.del!==void 0)return e.del===!0&&e.k===`u`&&e.val===void 0?{rec:e,bytes:p_,canonVal:void 0}:null;if(!(`val`in e)||e.val===void 0)return null;let n=Up(e.val,t);return Array.isArray(n)?{rec:e,bytes:n[1],canonVal:n[0]}:null},__=async(e,t,n,r)=>{let i=typeof n.hlc==`number`?[n.hlc,0]:n.hlc??[Date.now(),0],a={v:1,appId:n.appId,roomId:n.roomId,ns:n.ns,hlc:i,peerId:n.peerId,userId:n.userId,pub:Wf(t),...n.cert?{cert:n.cert}:{}},o=n.del===!0?{...a,k:`u`,del:!0}:{...a,k:n.kind??`s`,val:n.val},s=await Vp(e,h_(o,r));return{...o,sig:s}},v_=(e,t)=>Bp(e.hlc,t.hlc)||Pu(e.userId,t.userId)||Pu(e.peerId,t.peerId)||Pu(e.sig,t.sig),y_=(e,t)=>Bp(e,t)>=0?e:t,b_=(e,t)=>({v:e.v,k:e.k,ns:e.ns,hlc:e.hlc,peerId:e.peerId,userId:e.userId,...t?{pub:e.pub}:{},...e.del===!0?{del:!0}:{val:e.val},...e.cert===void 0?{}:{cert:e.cert},sig:e.sig}),x_=(e,t,n,r)=>{if(!Md(e)||`appId`in e||`roomId`in e)return null;let i=e.userId,a=e.pub===void 0&&Nd(i)?r?.[i]:e.pub;return{...e,appId:t,roomId:n,pub:a}},S_=(e,t,n,r,i,a,o,s)=>{if(!Nd(e)||e.length>256)throw Z(`${o} requires a non-empty namespace string`);let c=Up(t===void 0?null:t);if(!Array.isArray(c))throw Z(`state "${e}" initialValue must be valid JSON`);let l=du(c[0]);if(n!==void 0&&(!Pd(n)||n>t_))throw Z(`state "${e}" maxBytes must be a positive integer <= ${t_}`);if(r!==void 0&&!i)throw $u(s);let u=null;if(i){if(r===void 0)u=a?[`admin`]:null;else{let e=[r].flat();if(!e.includes(`*`)){let t=e.filter(Boolean);if(!t.length)throw Z(`${s} roles must not be empty; use "*" for open`);u=t}}}return[l,n??e_,u]},C_=(e,t)=>{let n=e.entries.get(t);return n&&!n.rec.del?n:void 0},w_=e=>fu(uu(e)).byteLength+120,T_=e=>e.sig.slice(0,8),E_=e=>Z(`state "${e}" exceeds user quota`),D_=({appId:e,getRoomId:t,getSelfId:n,getLocalUserId:r,ensureReady:i,hasRolesPlugin:a,getRolesProvider:o,getScaleProvider:s,isPeerActive:c,isPeerPendingHandshake:l,isDirectPeer:u,getDirectPeerIds:d,isUserOnline:f,getKnownPeerUserId:p,isPeerBanned:m,getPeerRoles:h,makeInternalAction:g,onInvalidRecord:_})=>{let v=new Map,y=Kp(i_,a_,512),[b]=Ld(512,96),[x]=Ld(512,96),S=new Map,C=new Map,w=Du(128),T=new Map,E=new Set,D=new Map,O=Gp(),k=!1,A=()=>k,j=e=>c(e)||!!l?.(e),M=e=>T.get(e)??0,N=e=>{if(!e)return;let t=M(e)+1;if(!T.has(e)&&T.size>=4096){for(let e of T.keys())if(!E.has(e)&&!f(e)){T.delete(e);break}}T.set(e,t)},P=(e,t)=>{!A()&&e&&(t?E.has(e)||(E.add(e),N(e)):E.delete(e)&&N(e))},ee=(e,t)=>{e.optimistic=t,e.snapshot=null},F=e=>{e.optimistic!==null&&(e.optimistic=null,e.snapshot=null)},te=(e,t)=>{let{promise:n,resolve:r,reject:i}=Promise.withResolvers();return e.ops.push({...t,promise:n,resolve:r,reject:i}),ke(e),n},I=()=>!!s?.(),ne=(e,t)=>{let n=D.get(e);n&&(D.delete(e),n.resolve(t))},re=e=>{if(!l?.(e))return c(e)?null:!1;let t=D.get(e);if(!t){let{promise:n,resolve:r}=Promise.withResolvers();t={promise:n,resolve:r,count:0},D.set(e,t)}return t.count>=8?!1:(t.count++,t.promise)},ie=async(e,t)=>{if(t&&!await t)return null;let n;try{({roomId:n}=await i())}catch{return null}return A()||!c(e)||m(e)?null:n},ae=(e,t,n)=>{let i=0,a=n;for(let n of v.values()){if(n.kind!==`u`||n===t)continue;if(n.optimistic&&e===r()){i++,a+=n.optimistic.bytes;continue}let o=e?n.entries.get(e):void 0;o&&(i++,a+=o.bytes)}return i<32&&a<=n_},oe=(e,t,n,r,i)=>({prev:e,peerId:t,userId:n,roles:[...r],timestamp:i}),L=(e,t,n)=>oe(t,e.peerId,e.userId,n,e.hlc[0]),se=(e,t,n,i,a=e.hlc[0],o=f(e.userId))=>{let s=r();return{...oe(t,e.peerId,e.userId,n,a),self:!!(s&&e.userId===s),online:o,removed:i}},ce=(e,t)=>{if(m(e.userId))return!1;if(!t)return!0;let n=o();if(!n)return!1;let r=n.getPeerRoles(e.userId);return e.cert?t.some(t=>e.cert.roles.includes(t)&&r.includes(t)):t.some(e=>r.includes(e))},le=(e,t,r,i,a)=>{e.entries.delete(t),e.snapshot=null,e.kind===`s`?e.emit(e.initialValue,oe(r.value,n(),r.rec.userId,a,i)):r.rec.del||e.emit(void 0,se(r.rec,r.value,a,!0,i,!1))},ue=g?g(`state`,{receiveWhilePending:!0,maxPayloadBytes:262144}):null,de=(e,t)=>{ue&&ue.send(e,t===void 0?void 0:{target:t}).catch(Q)},fe=e=>{de({t:`rec`,r:b_(e,!0)})},pe=async({rec:n,bytes:r,canonVal:i},a,s)=>{let c=t();if(n.appId!==e||n.roomId!==c||n.cert&&n.cert.subUserId!==n.userId)return`invalid`;let l=await Xf(n.pub);if(!l||l.userId!==n.userId||!await Hp(n.pub,h_(n,i),n.sig))return`invalid`;let u=Date.now(),d=v.get(`${n.k}:${n.ns}`)?.entries.get(n.k===`s`?``:n.userId)?.rec.hlc[0]??0,f=Math.min(u+Pp,Math.max(u+Fp,n.cert?n.cert.iat+Fp:0,d));if(n.hlc[0]>f||n.cert&&n.hlc[0]<n.cert.iat||m(n.userId))return`drop`;let p=o();if(p){let e=await p.verifyStateRecordRoles(n,a,s);return e.valid?(O.observe(n.hlc[0]),{rec:n,roles:e.roles,bytes:r}):`drop`}return a&&a.length>0?`drop`:(O.observe(n.hlc[0]),{rec:n,roles:[],bytes:r})},me=(e,t,n,r)=>{if(r>e.maxBytes)return;let i=Date.now(),a=w.get(t.userId);if(!a)a=new Map,w.set(t.userId,a);else if(!a.has(e.namespace)&&a.size>=32)return;let o=a.get(e.namespace);if(o&&i-o.seenAt<d_&&v_(t,o.rec)<=0)return;let s=r;for(let[t,n]of a)t!==e.namespace&&(s+=n.bytes);s>n_||a.set(e.namespace,{slot:e,rec:t,roles:[...n],bytes:r,seenAt:i})},he=(e,t,n,i,a=!1,o=!1,s=!1)=>{if(A())return null;let c=e.kind===`s`?``:t.userId;if(e.kind===`u`&&!f(c))return o&&me(e,t,n,i),null;let l=e.entries.get(c);if(l&&v_(t,l.rec)<=0)return null;let u=l&&!l.rec.del?l:void 0,d=u?u.value:e.initialValue,p=e.kind===`s`||r()!==``&&t.userId===r(),m=!a&&p&&e.optimistic!==null&&(e.ops.length>0||e.flushState.phase===`stepping`&&Bp(t.hlc,e.flushState.signingHlc??[e.optimistic.timestamp,0])<=0)&&t.hlc[0]<=Date.now()+1e4;if(t.del){if(e.kind!==`u`||!ae(c,e,i))return null;let r={rec:t,value:e.initialValue,prev:d,roles:[...n],bytes:i};return e.entries.set(c,r),m?(e.optimistic.prev=e.initialValue,r):(!a&&p&&F(e),e.snapshot=null,!s&&u&&e.emit(void 0,se(t,d,n,!0)),r)}if(i>e.maxBytes||e.kind===`u`&&!ae(c,e,i))return null;let h=t.val,g={rec:t,value:h,prev:d,roles:[...n],bytes:i};if(e.kind===`s`){let r=!a&&e.optimistic!==null&&!m?e.optimistic.value:d,i=L(t,d,n);if(!a&&e.validate){let t=!1;try{t=e.validate(h,i)}catch{t=!1}if(!t)return null}return e.entries.set(c,g),m?(e.optimistic.prev=h,g):(a||F(e),e.snapshot=null,s||e.emit(h,r===d?i:L(t,r,n)),g)}let _=!a&&p&&e.optimistic!==null&&!m?e.optimistic.value:d,v=se(t,d,n,!1);if(!a&&e.validate){let t=!1;try{t=e.validate(h,v)}catch{t=!1}if(!t)return null}return e.entries.set(c,g),m?(e.optimistic.prev=h,g):(!a&&p&&F(e),e.snapshot=null,s||e.emit(h,_===d?v:se(t,_,n,!1)),g)},ge=e=>({startedOnline:f(e),startEpoch:M(e)}),_e=async(e,t,n=!1,r)=>{if(A())return null;let i=g_(e,t_);if(!i)return _?.(t),null;if(m(i.rec.userId))return null;let a=v.get(`${i.rec.k}:${i.rec.ns}`);if(!a||!i.rec.del&&i.bytes>a.maxBytes)return null;let o=a.kind===`s`?``:i.rec.userId,{startedOnline:s,startEpoch:c}=a.kind===`u`?r??ge(o):{startedOnline:!0,startEpoch:0};if(a.kind===`s`||s){let e=a.entries.get(o);if(e&&v_(i.rec,e.rec)<=0||!ae(o,a,i.bytes)&&a.kind===`u`)return null}let l=await pe(i,a.requiredRoles,t);if(A())return null;if(l===`invalid`)return _?.(t),null;if(l===`drop`||m(l.rec.userId))return null;if(a.kind===`u`){let e=M(o);if(s){if(e!==c)return null}else{let t=f(o)&&e===c+1;if(e!==c&&!t)return null}}return he(a,l.rec,l.roles,l.bytes,!1,n&&!s&&M(o)===c)},ve=()=>{let e=[];for(let t of v.values())for(let[n,r]of t.entries)(t.kind!==`u`||f(n))&&ce(r.rec,t.requiredRoles)&&e.push([t.kind===`s`?`s:${t.namespace}`:`u:${t.namespace}\u0000${n}`,r]);return e.sort((e,t)=>Pu(e[0],t[0])),e},R=e=>{let t={},n=0;for(let[r,i]of ve())if(!(e!==void 0&&Pu(r,e)<=0)){if(n>=o_)break;t[r]=[i.rec.hlc,T_(i.rec)],n++}return t},ye=(e,t,n,r=!1)=>{if(!ue||A()||!c(e))return;let i=(t,i,a)=>de({t:`sync`,p:t,r:i,...a&&n?{n}:{},...r?{f:1}:{}},e);if(!t.length){r||i({},[],!0);return}let a=[],o={},s=[],l=0;for(let e of t){let t=b_(e,!1),n=w_(t);s.length>0&&l+n>c_&&(a.push([o,s]),o={},s=[],l=0),o[e.userId]=e.pub,s.push(t),l+=n}s.length>0&&a.push([o,s]),a.forEach(([e,t],n)=>{i(e,t,n===a.length-1)})},be=(e,t)=>{if(ue&&e.length&&I())for(let n of d())n!==t&&!m(n)&&ye(n,e,void 0,!0)},xe=e=>u(e)&&!m(e),Se=Kd({maxPages:s_,canSync:()=>!!ue&&v.size>0,getDirectPeers:d,isPeerSendable:xe,sendPull:async(e,t)=>{if(!ue||A()||!xe(e))return;let n={t:`pull`,d:R(t),...t===void 0?{}:{c:t}};await ue.send(n,{target:e})}});if(ue){let t=(e,t)=>{let n=re(e);n!==!1&&ie(e,n).then(e=>e===null?void 0:t(e)).catch(Q)};ue.onMessage((n,{peerId:r})=>{if(A()||m(r)||!Md(n))return;let i=n;if(i.t===`rec`){if(!y.consume(r))return;let n=Md(i.r)&&Nd(i.r.userId)?i.r.userId:void 0,a=n?ge(n):void 0;t(r,async t=>{let n=x_(i.r,e,t);if(!n)_?.(r);else{if(u(r)&&n.peerId===r){let e=p(r);if(e&&e!==n.userId){_?.(r);return}}await _e(n,r,!0,a)}})}else if(i.t===`pull`){if(b(r)||!Md(i.d))return;if(!Ud(i.c)){_?.(r);return}let e=dd(i.d);if(e.length>o_){_?.(r);return}let n=new Map;for(let[t,i]of e){if(!Array.isArray(i)||i.length!==2||!zp(i[0])||typeof i[1]!=`string`||i[1].length>16){_?.(r);return}n.set(t,[i[0],i[1]])}let a=i.c;t(r,()=>{let e=ve().filter(([e])=>a===void 0||Pu(e,a)>0),t=e.slice(0,o_),i=e.length>o_?t[t.length-1][0]:void 0,o=(e,t,n,r)=>{let i=Bp(e,n);return i>0||i===0&&t!==r},s=[];for(let[e,r]of t){let t=r.rec,i=n.get(e);(!i||o(t.hlc,T_(t),i[0],i[1]))&&s.push(t)}if(ye(r,s,i),a===void 0&&!Se.isPullInFlight(r))for(let[e,t]of n){let n,i=``;if(e.startsWith(`s:`)){let t=v.get(e);t?.kind===`s`&&(n=t)}else if(e.startsWith(`u:`)){let t=e.indexOf(`\0`);if(t>2){let r=e.slice(t+1),a=v.get(e.slice(0,t));a?.kind===`u`&&f(r)&&(n=a,i=r)}}if(!n)continue;let a=n.entries.get(i),s=a&&ce(a.rec,n.requiredRoles)?a.rec:void 0;if(!s||o(t[0],t[1],s.hlc,T_(s))){Se.pullPeer(r,!0);break}}})}else if(i.t===`sync`){if(i.f&&!I()||(i.f?x:b)(r)||!Md(i.p)||!Array.isArray(i.r))return;if(i.r.length>o_||!Ud(i.n)){_?.(r);return}i.f||Se.onSyncPage(r,i.n);let n=i.p,a=new Map;for(let e of i.r)if(Md(e)&&e.k===`u`&&Nd(e.userId)){let t=e.userId;a.has(t)||a.set(t,ge(t))}t(r,async t=>{let o=[];for(let s of i.r){if(A()||m(r))return;let i=x_(s,e,t,n);if(!i){_?.(r);return}let c=await _e(i,r,!0,i.k===`u`?a.get(i.userId):void 0);c&&o.push(c.rec)}be(o,r)})}})}let Ce=async(e,t,n)=>{let r=o();if(r){let n=await r.getStateWriteCert(e,t);return[n.cert,n.roles]}if(e&&e.length>0)throw Z(`${Xu} to update state "${t}": requires [${e.join(`, `)}]`);return[null,[...h(n)]]},we=e=>{for(let t of e)t.resolve()},Te=(e,t)=>{for(let n of e)n.reject(t)},Ee=(e,t)=>{if(!e.optimistic||e.ops.length>0)return;let r=e.optimistic;F(e);let i=Date.now(),a=n(),o=t?[...h(t)]:[];if(e.kind===`s`){let n=e.entries.get(``)?.value??e.initialValue;n!==r.value&&e.emit(n,oe(r.value,a,t,o,i))}else{let n=t?C_(e,t):void 0;n?(r.del||n.value!==r.value)&&e.emit(n.value,{...oe(r.del?e.initialValue:r.value,a,t,o,i),self:!0,online:!0,removed:!1}):r.del||e.emit(void 0,{...oe(r.value,a,t,o,i),self:!0,online:!0,removed:!0})}},De=(e,t,n,r)=>{A()?we(t):(Ee(e,r),Te(t,n))},Oe=(e,t,n)=>n===1&&Array.isArray(Up(t))?Z(`state "${e.namespace}" exceeds maxBytes (${e.maxBytes})`):Z(`state "${e.namespace}" value must contain only finite JSON numbers`),ke=t=>{switch(t.flushState.phase){case`pacing`:case`stepping`:return t.flushState.flushPromise;case`idle`:break;default:return lu(t.flushState)}let{promise:n,resolve:a}=Promise.withResolvers();return(async()=>{try{for(;!A()&&t.ops.length>0;){if(!(t.ops.some(e=>!!e.urgent)||!Number.isFinite(t.lastBroadcastAt)||A())){let e=Math.min(r_,r_-(performance.now()-t.lastBroadcastAt));e>0&&await new Promise(r=>{let i=!1,a=()=>{i||(i=!0,clearTimeout(o),r())},o=setTimeout(a,e);_d(o),t.flushState={phase:`pacing`,flushPromise:n,wake:a}})}if(A()||t.ops.length===0)break;let{promise:a,resolve:o}=Promise.withResolvers(),s={phase:`stepping`,flushPromise:n,stepPromise:a,signingHlc:null,activeOps:[]};t.flushState=s;try{let n,a,o,c,l;try{if({selfId:n,user:a,roomId:o}=await i(),A()){we(t.ops.splice(0));break}[c,l]=await Ce(t.requiredRoles,t.namespace,a.userId)}catch(e){De(t,t.ops.splice(0),e,r());continue}if(A()){we(t.ops.splice(0));break}c&&O.observe(c.iat);let u=t.ops.splice(0);if(!u.length)continue;s.activeOps.push(...u);let d=a.userId,f=t.kind===`s`?``:d;for(let r=0;r<f_&&u.length>0;r++){if(A()){we(u),u=[];break}let r=t.entries.get(f),i=r&&!r.rec.del?r:void 0,p=i?i.value:t.initialValue,m=null,h=0,g,_=[],v=y_(r?.rec.hlc??Np,[c?.iat??0,0]),y=Math.max(Date.now(),O.peek(),v[0]);for(let e of u){let i=r?.rec.sig===e.baseSig;if(e.optimisticGen!==void 0&&(i||!e.updater)){e.del?(p=t.initialValue,m=`del`,h=e.prevalidatedBytes??p_,g=void 0):(p=e.next,m=`set`,h=e.prevalidatedBytes??0,g=e.prevalidatedJson),_.push(e);continue}if(e.del){if(!ae(d,t,p_)){e.reject(E_(t.namespace));continue}p=t.initialValue,m=`del`,h=p_,g=void 0,_.push(e);continue}let a=e.updater??e.next,o;try{o=typeof a==`function`?a(p):a}catch(t){e.reject(t);continue}let s=Up(o,t.maxBytes);if(typeof s==`number`){e.reject(Oe(t,o,s));continue}let[c,u]=s;if(o=du(c),t.kind===`u`&&!ae(d,t,u))e.reject(E_(t.namespace));else{if(t.validate){let r=oe(p,n,d,l,y),i=!1;try{i=t.kind===`s`?t.validate(o,r):t.validate(o,{...r,self:!0,online:!0,removed:!1})}catch(t){e.reject(t);continue}if(!i){e.reject(Z(`state validation failed for "${t.namespace}"`));continue}}p=o,m=`set`,h=u,g=c,_.push(e)}}if(!_.length||!m){u=[];break}let b=Math.min(Pp,Math.max(Fp,c?c.iat-Date.now()+1e3:0,r?r.rec.hlc[0]-Date.now()+1e3:0)),x;try{let r=O.nextHlc(t.namespace,v,b);s.signingHlc=r,x=await __(a.sign,a.signPubJwk,{kind:t.kind,appId:e,roomId:o,ns:t.namespace,hlc:r,peerId:n,userId:d,...m===`del`?{del:!0}:{val:p},cert:c},g)}catch(e){De(t,_,e,d),u=[];break}finally{s.signingHlc=null}if(A()){F(t),we(_),u=[];break}if(!ce(x,t.requiredRoles)){Ee(t,d),Te(_,Z(`${Xu} to update state "${t.namespace}"`)),u=[];break}let S=t.entries.get(f);if(S&&v_(x,S.rec)<=0){if(O.observe(S.rec.hlc[0]),_.some(e=>!!e.updater)){u=_;continue}Ee(t,d),we(_),u=[];break}let C=_[_.length-1]?.optimisticGen,w=C!==void 0&&t.optimistic?.gen===C,T=C!==void 0&&t.optimistic!==null&&t.optimistic.gen>C;w&&F(t),he(t,x,l,h,!0,!1,w||T)&&(t.lastBroadcastAt=performance.now(),fe(x)),we(_),u=[];break}u.length>0&&De(t,u,Z(`concurrent state contention exceeded for "${t.namespace}"`),d)}finally{s.activeOps.length=0,o()}}}finally{t.flushState={phase:`idle`},a()}})(),n},Ae=e=>{if(e.optimistic)return e.optimistic.del?e.initialValue:e.optimistic.value;if(e.kind===`s`)return e.entries.get(``)?.value??e.initialValue;let t=r();return t?C_(e,t)?.value??e.initialValue:e.initialValue},z=e=>{if(A())return`noop`;let t=r();if(!t)return`defer`;if(m(t))return Z(`${Xu} to update state "${e.namespace}"`);if(e.requiredRoles===null||e.requiredRoles.length===0)return`sync`;let n=o();if(!n)return a()?`defer`:Z(`${Xu} to update state "${e.namespace}": requires [${e.requiredRoles.join(`, `)}]`);if(!n.isAuthorityResolved())return`defer`;let i=n.getPeerRoles(t);return e.requiredRoles.some(e=>i.includes(e))?`sync`:Z(`${Xu} to update state "${e.namespace}": requires [${e.requiredRoles.join(`, `)}]`)},je=(e,t,i)=>{let a=z(e);if(a===`noop`)return Promise.resolve();if(a instanceof Error)return Promise.reject(a);if(a===`defer`)return te(e,{del:t,next:i});let o=r(),s=n(),c=o?[...h(o)]:[],l=Ae(e),u=Math.max(Date.now(),O.peek());if(t){if(!ae(o,e,p_))return Promise.reject(E_(e.namespace));let t=e.optimistic?!e.optimistic.del:!!(o&&C_(e,o)),n=++e.optGen;return ee(e,{gen:n,del:!0,value:e.initialValue,prev:l,bytes:p_,timestamp:u}),t&&e.kind===`u`&&e.emit(void 0,{...oe(l,s,o,c,u),self:!0,online:!0,removed:!0}),te(e,{del:!0,next:void 0,optimisticGen:n,prevalidatedBytes:p_})}let d;try{d=typeof i==`function`?i(l):i}catch(e){return Promise.reject(e)}let f=Up(d,e.maxBytes);if(typeof f==`number`)return Promise.reject(Oe(e,d,f));let[p,m]=f;if(d=du(p),e.kind===`u`&&!ae(o,e,m))return Promise.reject(E_(e.namespace));let g=oe(l,s,o,c,u);if(e.validate){let t=!1;try{t=e.kind===`s`?e.validate(d,g):e.validate(d,{...g,self:!0,online:!0,removed:!1})}catch(e){return Promise.reject(e)}if(!t)return Promise.reject(Z(`state validation failed for "${e.namespace}"`))}let _=++e.optGen;ee(e,{gen:_,del:!1,value:d,prev:l,bytes:m,timestamp:u}),e.kind===`s`?e.emit(d,g):e.emit(d,{...g,self:!0,online:!0,removed:!1});let v=e.kind===`s`?``:o,y=e.entries.get(v)?.rec.sig;return te(e,{del:!1,next:d,...typeof i==`function`?{updater:i}:{},...y===void 0?{}:{baseSig:y},optimisticGen:_,prevalidatedJson:p,prevalidatedBytes:m})},Me=(e,t,n,r,i)=>({namespace:e,initialValue:t,requiredRoles:n,maxBytes:r,entries:new Map,optimistic:null,optGen:0,snapshot:null,clearListeners:i,api:null,ops:[],flushState:{phase:`idle`},lastBroadcastAt:-1/0}),Ne=(e,t,n)=>(t.api=n,A()||(v.set(e,t),Se.scheduleRepull()),n),B=((e,t,i)=>{let s=`s:${e}`,c=v.get(s);if(c)return c.api;let[l,u,d]=S_(e,t,i?.maxBytes,i?.roles,a()||!!o(),!0,`makeState`,`state role gating`),[f,p,m]=Au(`state handler`),g=i?.validate,_={...Me(e,l,d,u,m),kind:`s`,...g?{validate:g}:{},emit:p},y=()=>{if(_.optimistic){let e=r();return oe(_.optimistic.prev,n(),e,e?[...h(e)]:[],_.optimistic.timestamp)}let e=_.entries.get(``);return e?L(e.rec,e.prev,e.roles):null};return Ne(s,_,Mu({get:()=>Ae(_),set:e=>je(_,!1,e),getMeta:y,onChange:(e,t)=>f(e,t,()=>{let e=y();return e?[[Ae(_),e]]:[]})},[`onChange`]))}),Pe=((e,t,i)=>{let s=`u:${e}`,c=v.get(s);if(c)return c.api;let[l,u,d]=S_(e,t,i?.maxBytes,i?.roles,a()||!!o(),!1,`makeUserState`,`user state role gating`),[f,m,g]=Au(`user state handler`),_=i?.validate,y={...Me(e,l,d,u,g),kind:`u`,..._?{validate:_}:{},emit:m},b=e=>{let t=r();if(e.length===0)return[!0,t||void 0];let i=e[0];if(!i)return[!1,void 0];let a=n();if(a!==``&&i===a||t!==``&&i===t)return[!0,t||void 0];let o=C_(y,i)?i:p(i)??i;return[t!==``&&o===t,o]},x=()=>{if(!y.optimistic||y.optimistic.del)return null;let e=r();return{...oe(y.optimistic.prev,n(),e,e?[...h(e)]:[],y.optimistic.timestamp),self:!0,online:!0,removed:!1}};return Ne(s,y,Mu({get:(...e)=>{let[t,n]=b(e);return t&&y.optimistic?y.optimistic.del?y.initialValue:y.optimistic.value:n===void 0?y.initialValue:C_(y,n)?.value??y.initialValue},getAll:()=>{if(!y.snapshot){let e={};for(let[t,n]of y.entries)n.rec.del||(e[t]=n.value);let t=r();y.optimistic&&t&&(y.optimistic.del?delete e[t]:e[t]=y.optimistic.value),y.snapshot=Object.freeze(e)}return y.snapshot},has:(...e)=>{let[t,n]=b(e);return t&&y.optimistic?!y.optimistic.del:!!(n!==void 0&&C_(y,n))},set:e=>je(y,!1,e),clear:()=>je(y,!0),getMeta:(...e)=>{let[t,n]=b(e);if(t&&y.optimistic)return x();let r=n?C_(y,n):void 0;return r?se(r.rec,r.prev,r.roles,!1):null},onChange:(e,t)=>f(e,t,()=>{let e=[],t=r(),n=!1;for(let[r,i]of y.entries)if(y.optimistic&&t&&r===t){n=!0;let t=x();t&&e.push([y.optimistic.value,t])}else i.rec.del||e.push([i.value,se(i.rec,i.prev,i.roles,!1)]);if(y.optimistic&&!n){let t=x();t&&e.push([y.optimistic.value,t])}return e})},[`onChange`]))}),Fe=e=>{if(A()||!j(e)||m(e))return;let t=r(),n=!1;for(let e of v.values())if(e.kind===`u`&&(e.flushState.phase!==`idle`||e.ops.length>0||t&&C_(e,t))){n=!0;break}if(n)return(async()=>{try{let t=[];for(let e of v.values()){if(e.kind!==`u`)continue;let n=e.ops.length>0;if(n)for(let n of e.ops)n.urgent=!0,t.push(n.promise.then(Q,Q));switch(e.flushState.phase){case`pacing`:n&&e.flushState.wake();break;case`idle`:n&&ke(e);break;case`stepping`:n||t.push(e.flushState.stepPromise);break;default:lu(e.flushState)}}if(t.length>0){let e;await Promise.race([Promise.allSettled(t),new Promise(t=>{e=setTimeout(t,u_),_d(e)})]),e!==void 0&&clearTimeout(e)}let n=r();if(!n||A()||!j(e)||m(e))return;let i={},a=[],o=new Set,s=0;for(let e of v.values()){if(e.kind!==`u`)continue;let t=C_(e,n);if(!t)continue;let r=b_(t.rec,!1),c=w_(r);s+c>l_||(i[t.rec.userId]=t.rec.pub,a.push(r),o.add(t.rec.sig),s+=c)}return o.size>0&&C.set(e,o),a.length>0?{ok:!0,p:i,r:a}:void 0}catch{return}})()},V=e=>A()||!j(e)||m(e),Ie=async(t,n,r)=>{try{let r=!Md(n.p)||!Array.isArray(n.r)||n.r.length>32;if(V(t)||r){!A()&&r&&_?.(t);return}let a;try{({roomId:a}=await i())}catch{return}if(V(t))return;let o=n.p,s=p(t),c=[],l=0,u=Date.now();for(let r of n.r){if(V(t))return;let n=x_(r,e,a,o),i=n&&n.k===`u`?g_(n,t_):null;if(!i||s&&i.rec.userId!==s){_?.(t);return}let d=v.get(`u:${i.rec.ns}`);if(!d||d.kind!==`u`||i.bytes>d.maxBytes)continue;let f=await pe(i,d.requiredRoles,t);if(V(t))return;if(f===`invalid`){_?.(t);return}if(f!==`drop`){if(l+=f.bytes,l>n_)return;c.push({slot:d,rec:f.rec,roles:f.roles,bytes:f.bytes,seenAt:u})}}!V(t)&&c.length>0&&S.set(t,c)}finally{r?.()}},Le=(e,t)=>{let n=r();if(!n||!ue||A())return;let i=[];for(let e of v.values()){let r=e.entries.get(e.kind===`s`?``:n);r&&r.rec.userId===n&&!t?.has(r.rec.sig)&&ce(r.rec,e.requiredRoles)&&i.push(r.rec)}if(i.length!==0){if(I())ye(e,i,void 0,!0);else for(let t of i)de({t:`rec`,r:b_(t,!0)},e)}},Re=(e,t,n)=>{if(A())return;let r=C.get(e);C.delete(e);let i=S.get(e);if(i){S.delete(e);let n=[];for(let r of i)if(r.rec.userId===t){let e=he(r.slot,r.rec,r.roles,r.bytes);e&&n.push(e.rec)}else _?.(e);be(n,e)}let a=w.get(t);if(a){w.delete(t);let n=Date.now(),r=[];for(let e of a.values())if(n-e.seenAt<d_&&v.get(`u:${e.slot.namespace}`)===e.slot&&ce(e.rec,e.slot.requiredRoles)){let t=he(e.slot,e.rec,e.roles,e.bytes);t&&r.push(t.rec)}be(r,e)}ne(e,!0),n&&ue&&v.size>0&&(Le(e,r),Se.onPeerJoined(e,I()))},ze=e=>{S.delete(e),C.delete(e),y.delete(e),ne(e,!1),Se.onPeerDisconnected(e)};return{makeState:B,makeUserState:Pe,verifyAndApplyStateRecord:async(e,t)=>!!await _e(e,t),prepareHandshakeReady:Fe,stageHandshakeUserState:Ie,setUserPresence:P,onPeerJoined:Re,onPeerDisconnected:e=>{ze(e)},onUserLeft:e=>{if(A()||f(e))return;w.delete(e);let t=Date.now();for(let n of v.values())if(n.kind===`u`){let r=n.entries.get(e);r&&le(n,e,r,t,[...r.roles])}},purgeBannedUser:e=>{if(A())return;P(e,!1),w.delete(e);let t=r(),n=Date.now(),i=!1;for(let r of v.values()){t&&e===t&&F(r);let a=r.kind===`s`?``:e,o=r.entries.get(a);o&&(r.kind===`u`||o.rec.userId===e)&&(le(r,a,o,n,[]),r.kind===`s`&&(i=!0))}i&&Se.scheduleRepull()},clearPeer:ze,destroy:()=>{k||(k=!0,Se.destroy(),S.clear(),C.clear(),w.clear(),E.clear(),T.clear(),y.clear(),D.forEach(e=>e.resolve(!1)),D.clear(),v.forEach(e=>{F(e);let t=e.ops.splice(0),n=[];switch(e.flushState.phase){case`pacing`:e.flushState.wake(),e.flushState={phase:`idle`};break;case`stepping`:n=e.flushState.activeOps.splice(0);break;case`idle`:break;default:lu(e.flushState)}we(n),we(t),e.clearListeners()}))}}},O_=50,k_=`beforeunload`,A_=new Set,j_=Object.freeze([]),M_=()=>A_.forEach(e=>e()),N_=e=>(A_.add(e),A_.size===1&&addEventListener(k_,M_),()=>{A_.delete(e),A_.size||removeEventListener(k_,M_)}),P_=e=>!!(e&&typeof e==`object`&&typeof e.then==`function`),F_=(e,t,n)=>{if(e!==void 0&&!Array.isArray(e))throw Z(`use must be an array of room plugins`);let r=null,i=null;for(let t of e??[]){let e=t&&typeof t==`object`?t[cu]:void 0;if(!e)throw Z(`invalid plugin in use[]; expected roles() or scale()`);if(e.kind===`roles`){if(r)throw Z(`duplicate plugin "roles" in use[]`);r=e}else{if(i)throw Z(`duplicate plugin "scale" in use[]`);i=e}}if(!r&&Dd.test(t))throw ed;return r?.selfAsAdmin&&Dp(n)&&Lu(),[r,i]},I_=e=>e.phase===`leaving`||e.phase===`left`,L_=e=>e.phase===`direct-pending`||e.phase===`virtual-upgrading`,R_=e=>e.phase===`virtual-only`||e.phase===`virtual-upgrading`,z_=(e,t,n,r={})=>{let{endpointIdentity:i,clientId:a,appId:o=``,roomId:s=``,password:c=``,maxUsers:l,identity:u,maxReceiveBytes:d,onBeforeLeave:f}=r;if(l!==void 0&&!Pd(l))throw Qu(`maxUsers`);u!==void 0&&Op({identity:u});let[p,m]=F_(r.use,s,u),h=!!p,g=i&&!P_(i)?i:void 0,_=a??(g?g.peerId:hp()),v=g?g.peerId:``,y=``,b={phase:`active`},x=!1,S=s,C=null,w=null,T=null,E=()=>v,D=()=>y,O=()=>I_(b),k=()=>b.phase===`active`,A=()=>{T=null},j=new Set,M=[],N=e=>{let[t,n,r]=Au(e);return M.push(r),[t,n]},[P,ee]=N(`onPeerActivated`),[F,te]=N(`onPeerDeactivated`),[I,ne]=N(`onRoomIdChanged`),[re,ie]=N(`onLeave`),[ae,oe]=N(`onPeerJoin`),[L,se]=N(`onPeerLeave`),[ce,le]=N(`onUserJoin`),[ue,de]=N(`onUserLeave`),[fe,pe]=N(`onError`),me=e=>{O()||pe({...e,appId:o,roomId:S})},he=e=>{x||b.phase!==`active`||(x=!0,b={phase:`setup-failed`},queueMicrotask(()=>{me(e),st()}))},ge=(i?Promise.resolve(i):vp(o,_)).then(e=>(v=e.peerId,e),e=>{throw he({code:`identity-failed`,message:vd(e,`endpoint identity resolution failed`),cause:e}),e});ge.catch(Q);let _e=v?Promise.resolve(v):ge.then(e=>e.peerId);_e.catch(Q);let ve=e=>{e&&e!==S&&(S=e,ne(e))},R=new Map,ye=Mp(o,s,u===void 0?void 0:{identity:u},_).then(e=>(y=e.userId,O()||Be?.setUserPresence(y,!0),A(),e),e=>{throw he({code:`identity-failed`,message:vd(e,`identity resolution failed`),cause:e}),e});ye.catch(Q);let be=p?.selfAsAdmin&&!Dd.test(s)?ye.then(e=>{let t=kd(s,e.userId);return O()||ve(t),t}):void 0;be?.catch(Q);let xe=e=>!!(e&&e.session.phase!==`direct-pending`),Se=(e,t)=>t?!!e:xe(e),Ce=e=>e.session.phase===`direct-active`||L_(e.session)&&e.session.verified,we=e=>{let t=E();return t&&e===t?D():R.get(e)?.userId??w?.getPeerUserId(e)??e},Te=e=>{let t=E();return t&&e===t?D()||void 0:R.get(e)?.userId??w?.getPeerUserId(e)},Ee=(e,t)=>{let n=0;for(let[r,i]of R)r!==t&&xe(i)&&we(r)===e&&n++;return n},De=(e,t,n)=>{let r=t.emittedUserId;if(!r||r===n){t.emittedUserId=n,!r&&!O()&&Be?.setUserPresence(n,!0);return}let i=D(),a=Ee(r,e)===0,o=Ee(n,e)===0;t.emittedUserId=n,O()||(a&&(!i||r!==i)&&(de({userId:r,peerId:e}),Be?.setUserPresence(r,!1),Be?.onUserLeft(r)),o&&(!i||n!==i)&&(Be?.setUserPresence(n,!0),Be?.onPeerJoined(e,n,ke(e)),le({userId:n,peerId:e,roles:ze(e)})))},Oe=(e,t)=>{if(!t)return;let n=R.get(e);n&&!Ce(n)&&n.userId!==t&&(n.userId=t,A(),xe(n)&&De(e,n,t))},ke=e=>R.get(e)?.session.phase===`direct-active`,Ae=e=>xe(R.get(e)),z=e=>R.has(e),je=(e,t=!1)=>{let n=R.get(e)?.session;if(n&&n.phase!==`virtual-only`)return n.phase===`direct-active`||t?n.peer:void 0},Me=(e=!1)=>{let t=[];for(let[n,r]of R)Se(r,e)&&t.push(n);return t},Ne=(e=!0)=>{let t=[];for(let n of R.keys()){let r=je(n,!e);r&&t.push([n,r])}return t},B=(e=!0)=>Ne(e).map(e=>e[0]),Pe=(e,t)=>{switch(delete t.deferredReady,t.session.phase){case`virtual-upgrading`:t.session={phase:`virtual-only`,virtual:t.session.virtual},A();return;case`direct-pending`:case`direct-active`:R.delete(e),A();return;case`virtual-only`:return;default:lu(t.session)}},Fe=(e,t)=>{let n=[];for(let[r,i]of R)Se(i,t)&&we(r)===e&&n.push(r);return n},V=e=>{let t=Fe(e,!1);return t.length?t:Fe(e,!0)},Ie=(e,t=!1)=>{if(!e)return;let n=[],r=new Set,i=e=>{r.has(e)||(r.add(e),n.push(e))};for(let n of Array.isArray(e)?e:[e])if(Se(R.get(n),t))i(n);else{let e=Fe(n,t);e.length?e.forEach(i):i(n)}return n},Le=(e,t=!1)=>Se(R.get(e),t)?e:Fe(e,t).sort((e,t)=>{let n=ke(e);return n===ke(t)?Pu(e,t):n?-1:1})[0],Re=e=>!!(e&&C?.isPeerBanned(e)),ze=(e=E())=>C?.getPeerRoles(e)??j_,Be=null,Ve=(e,t,n)=>{if(O())return;let r=D();n&&(!r||t!==r)&&Be?.setUserPresence(t,!0),Be?.onPeerJoined(e,t,ke(e));let i=ze(e);oe({peerId:e,userId:t,roles:i}),n&&(!r||t!==r)&&le({userId:t,peerId:e,roles:i})},He=(e,t,n,r)=>{if(!t)return;let i=D();Be?.onPeerDisconnected(e),te(e),O()||(se({peerId:e,userId:r}),n&&(!i||r!==i)&&(de({userId:r,peerId:e}),Be?.setUserPresence(r,!1),Be?.onUserLeft(r)))},Ue=Q,We=(e,t)=>{let n=Ie(e);return(n?Array.isArray(n)?n:[n]:Me(!1)).flatMap(e=>Ae(e)?[Promise.resolve(t(e,je(e,!1)))]:(Iu(e),[]))},Ge=e=>{let t=!1,n=()=>{r()},r=sh(e,40,150,()=>{t=!0,j.delete(n)});t||j.add(n)},Ke=(e,t,n)=>{let r=je(e,!0);r&&(!t||r===t||n===Uu)&&G.send(``,{target:e}).catch(Q),ot(e,t,n)},qe=(e,t)=>{t!==Uu&&me({code:`peer-error`,peerId:e,message:vd(t,`peer error`),cause:t})},H=(e,t)=>{z(e)&&qe(e,t),Ke(e,void 0,t)},U=$g({iterate:We,isActive:Ae,onPeerError:H,preparePeer:e=>{let t=je(e,!1);return t?Promise.resolve(t):w?w.prepareMediaPeer(e):Promise.reject(Vu)},getPeerUserId:we,onPeerMediaPinChange:(e,t)=>{w?.setPeerMediaPinned(e,t)}}),{makeAction:Je,makeInternalAction:Ye,makeInternalRequestAction:Xe,handleData:Ze,clearPeer:Qe,clearListeners:$e}=kg({getPeerIds:Me,canReceiveFromPeer:(e,t)=>!Re(e)&&(Ae(e)||St.canReceiveFromPeer(e,t)),onPeerError:H,getTransport:(e,t)=>{let n=R.get(e)?.session;if(n)switch(n.phase){case`direct-active`:return n.transport;case`direct-pending`:return t?n.transport:void 0;case`virtual-upgrading`:return t?n.transport:n.virtual;case`virtual-only`:return n.virtual;default:return lu(n)}},broadcastInline:(e,t,n)=>w?w.broadcastInline(e,t,n):!1,registerActionAuthority:(e,t)=>{if(!C)throw $u(`action role gating`);w?.registerActionAuthority(e,t)},getLocalActionCert:(e,t)=>C?C.getLocalActionCert(e,t):Promise.resolve(null),authorizePeerAction:(e,t,n)=>C?C.authorizePeerAction(e,t,n):!1,getPeerRoles:e=>ze(e),getPeerUserId:we,resolveSendTarget:Ie,resolveRequestTarget:Le,onUnknownType:e=>{e===`@_state`&&!O()&&rt()},...d===void 0?{}:{maxReceiveBytes:d}}),et=async()=>(await Et,[await ye,await C?.getAuthorityInfo()]),[tt,nt]=Ld(512,8),rt=()=>{if(!Be){let e=D_({appId:o,getRoomId:()=>S,getSelfId:E,getLocalUserId:D,ensureReady:async()=>{let[e,t]=await et();return{selfId:E(),user:e,roomId:t?.roomId??S}},hasRolesPlugin:()=>h,getRolesProvider:()=>C,getScaleProvider:()=>w,isPeerActive:Ae,isPeerPendingHandshake:e=>!(!St.getPeer(e)||ke(e)),isDirectPeer:ke,getDirectPeerIds:()=>B(!0),isUserOnline:e=>{let t=D();return!!(t&&e===t||Ee(e)>0)},getKnownPeerUserId:Te,isPeerBanned:e=>!!(e&&Re(e)),getPeerRoles:e=>ze(e),makeInternalAction:Ye,onInvalidRecord:e=>{let t=E();e&&e!==t&&tt(e)&&(nt(e),H(e,Td(`excessive invalid state records`)))}});if(O())e.destroy();else{y&&e.setUserPresence(y,!0);for(let[t,n]of R)xe(n)&&e.setUserPresence(we(t),!0)}Be=e}return Be},it=e=>{let t=R.get(e);if(!t)return[!1,!1,we(e),void 0];let n=xe(t),r=t.emittedUserId??t.userId??w?.getPeerUserId(e)??e,i=t.session.phase===`virtual-only`?void 0:t.session.peer,a=R_(t.session)?t.session.virtual:null;R.delete(e),a?.close?.();let o=n&&Ee(r,e)===0;return n&&A(),[n,o,r,i]},at=(e,t)=>{Be?.clearPeer(e),Qe(e,t),U.clearPeer(e)},ot=(e,n,r)=>{let i=r===void 0?Vu:yd(r,Bu),a=i===Uu,o=je(e,!0);if(n){if(o!==n){if(a){if(w?.markPeerBanned(e),!z(e))return}else return}}else if(!z(e)){a&&w?.markPeerBanned(e);return}let s=R.get(e);if(!a&&o&&s?.session.phase===`virtual-upgrading`){vt(e,i),Be?.clearPeer(e),Pe(e,s),o.destroy(),w?.removeDirectPeer(e,o,i),t(e,!1);return}a&&w?.markPeerBanned(e),vt(e,i),at(e,i);let[c,l,u,d]=it(e);He(e,c,l,u),d?((a||r===Ju)&&!O()?Ge(d):d.destroy(),w?.removeDirectPeer(e,d,i),t(e,!a&&r!==Ju)):c&&w?.removeDirectPeer(e,void 0,i)},st=()=>{if(I_(b))return b.promise;let{promise:e,resolve:t,reject:r}=Promise.withResolvers();return b={phase:`leaving`,promise:e},(async()=>{f?.(),K.clear();for(let e of Me(!0))St.clearPeer(e,Ku);ie();let t=w?B(!1).filter(e=>{let t=R.get(e)?.session;return t&&t.phase!==`virtual-only`&&t.transport.isOpen}):void 0,r=R.size>0&&(!t||t.length>0),i=new AbortController;r&&G.send(``,{...t?{target:t}:{},signal:i.signal}).catch(Q),w&&await w.announceLeave(),r&&await new Promise(e=>{setTimeout(e,O_)}),i.abort();try{w?.destroy();for(let e of j)e();j.clear();let e=Me(!0);for(let t of e){let e=R.get(t);if(!e)continue;let n=e.session.phase===`virtual-only`?null:e.session.peer,r=R_(e.session)?e.session.virtual:null;R.delete(t),n?.destroy(),r?.close?.()}R.clear(),A();for(let t of e)at(t,Ku)}finally{b={phase:`left`,promise:e};for(let e of[...M,U.clearListeners,$e,()=>Be?.destroy()])e();try{Ue()}finally{n()}}})().then(t,r),e},ct=Xe(`ping`);ct.onRequest(()=>``);let W=Ye(`signal`),lt=Ye(`stream`,{maxPayloadBytes:65536}),G=Ye(`leave`,{sendToPending:!0,receiveWhilePending:!0}),ut=Ye(`hsdata`,{sendToPending:!0,receiveWhilePending:!0,maxPayloadBytes:65536}),dt=Ye(`hsready`,{sendToPending:!0,receiveWhilePending:!0,maxPayloadBytes:131072}),K=new Map,ft=Du(256),pt=(e=!1,t)=>{let n=new Set([D()]);for(let[e,t]of R)xe(t)&&n.add(we(e));if(e)for(let[e,r]of K)e!==t&&n.add(r);return n},mt=(e,t=!1)=>{if(l===void 0||Ae(e))return!1;let n=pt(t,e),r=R.get(e)?.userId??w?.getPeerUserId(e)??ft.get(e)??e;return!n.has(r)&&n.size>=l},ht=e=>{let t=R.get(e)?.userId??w?.getPeerUserId(e)??ft.get(e);return!Re(E())&&!Re(e)&&!(t!==void 0&&mt(e,!0))},gt=(e,t,n)=>{if(je(e,!0)!==t)return;let r=n===Hu,i=r?Uu:Ju;if(r)w?.markPeerBanned(e);else{let t=R.get(e)?.userId??w?.getPeerUserId(e);t&&ft.set(e,t)}let a=r?C?.getBanReason(we(e))??C?.getBanReason(e):void 0;St.clearPeer(e,i),Be?.clearPeer(e),K.delete(e),dt.send({ok:!1,err:n,...a===void 0?{}:{reason:a}},{target:e}).catch(Q).finally(()=>{je(e,!0)===t&&ot(e,t,i)})},_t=(e,t)=>Re(e)?(gt(e,t,Hu),!1):l===void 0||Ae(e)?!0:mt(e,!0)?(gt(e,t,qu),!1):(K.set(e,we(e)),!0),vt=(e,t)=>{St.clearPeer(e,t),K.delete(e)},yt=(e,t)=>{if(e&&typeof e==`object`&&e.ok===!0){if(St.getPeer(t)&&!ke(t)&&!Re(t)&&!mt(t)){rt().stageHandshakeUserState(t,e,()=>{!O()&&St.getPeer(t)&&Dt(``,t)});return}Dt(``,t)}else Dt(e,t)},bt=(e,t,n)=>{if(n&&je(e,!0)!==n)return;let r=R.get(e);if(!r||!L_(r.session))return;if(r.userId=t.userId,A(),Re(e)||Re(t.userId))throw w?.markPeerBanned(e),Uu;let i=r.deferredReady;delete r.deferredReady,r.session={...r.session,verified:!0},w?.setPeerSignPublicKey(e,t.peerPubKey),i!==void 0&&queueMicrotask(()=>{let t=R.get(e);t&&Ce(t)&&(!n||je(e,!0)===n)&&yt(i,e)})},xt={get selfId(){return E()},appId:o,initialRoomId:s,password:c,...l===void 0?{}:{maxUsers:l},getRoomId:()=>S,setEffectiveRoomId:ve,getLocalEndpointIdentity:()=>ge,getLocalUserIdentity:()=>ye,getPeerUserId:we,getKnownPeerUserId:Te,getUserPeerIds:V,setPeerUserId:Oe,getActivePeerIds:()=>Me(!1),getDirectActivePeerIds:()=>B(!0),getAllPeerIds:()=>Me(!0),isPeerActive:Ae,getPeerHandle:je,kickPeer:(e,t)=>Ke(e,void 0,t),emitError:me,makeInternalAction:Ye,deliverRawData:(e,t)=>{Re(e)||Ze(e,t)},getRolesProvider:()=>C,getScaleProvider:()=>w,activateVirtualPeer:(e,t)=>{if(!k()||Re(e)||mt(e,!0))return t.close?.(),!1;if(ke(e))return t.close?.(),!0;let n=R.get(e),r=xe(n),i=n?.userId??w?.getPeerUserId(e)??e,a=!r&&Ee(i,e)===0;if(!n)R.set(e,{session:{phase:`virtual-only`,virtual:t},userId:i,emittedUserId:i});else switch(n.userId=i,n.session.phase){case`virtual-only`:n.session.virtual!==t&&n.session.virtual.close?.(),n.session={phase:`virtual-only`,virtual:t};break;case`virtual-upgrading`:n.session.virtual!==t&&n.session.virtual.close?.(),n.session={...n.session,virtual:t};break;case`direct-pending`:n.session={phase:`virtual-upgrading`,virtual:t,peer:n.session.peer,transport:n.session.transport,verified:n.session.verified},n.emittedUserId=i;break;case`direct-active`:break;default:lu(n.session)}return A(),r||Ve(e,i,a),!0},deactivateVirtualPeer:(e,t)=>{if(ke(e))return;let n=R.get(e);if(!n||!R_(n.session))return;let r=yd(t,Bu),i=n.emittedUserId??n.userId??w?.getPeerUserId(e)??e,a=n.session.virtual;n.session.phase===`virtual-upgrading`?(n.session={phase:`direct-pending`,peer:n.session.peer,transport:n.session.transport,verified:n.session.verified},delete n.emittedUserId):R.delete(e),a.close?.();let o=Ee(i,e)===0;A(),z(e)||at(e,r),He(e,!0,o,i)},purgeBannedUserState:e=>{Be?.purgeBannedUser(e)},onRolesChanged:A,onPeerActivated:(e,t)=>P(e,t,()=>Ne(!0)),onPeerDeactivated:F,onRoomIdChanged:I,onLeave:re},St=Hg({selfIdP:_e,onPeerHandshake:zg({endpointIdentityP:ge,appId:o,roomId:be??s,getUserIdentity:()=>ye,onVerified:bt}).run,onHandshakeError:(e,t)=>{t===Uu||Re(e)||me({code:`handshake-failed`,peerId:e,message:vd(t,`handshake failed`),cause:t})},deferResponderReady:l!==void 0,sendHandshakeData:(e,t,n)=>ut.send(e,{target:t,...n===void 0?{}:{metadata:n}}),sendHandshakeReady:(e,t)=>dt.send(e,{target:t}),onLocalHandshakePassed:(e,t)=>Re(e)?(gt(e,t,Hu),!1):!mt(e)||(gt(e,t,qu),!1),acquireAdmissionSlot:(e,t)=>je(e,!0)!==t||O()?!1:_t(e,t),beforeSendHandshakeReady:(e,t)=>je(e,!0)===t&&!Re(e)&&Be?Be.prepareHandshakeReady(e):void 0,onActivate:(e,t)=>{if(Re(e)){K.delete(e),Ke(e,t,Uu);return}if(mt(e)){gt(e,t,qu);return}let n=R.get(e);if(K.delete(e),!n||!L_(n.session)||n.session.peer!==t)return;let r=n.session.phase===`virtual-upgrading`,i=n.session.phase===`virtual-upgrading`?n.session.virtual:null,a=n.userId??e;n.userId=a,delete n.deferredReady;let o=!r&&Ee(a,e)===0;n.session={phase:`direct-active`,peer:t,transport:n.session.transport},i?.close?.(),A(),w?.addDirectPeer(e,t),ee(e,t),t.setHandlers({signal:n=>{je(e,!1)===t&&W.send(n,{target:e}).catch(Q)}}),r?(De(e,n,a),Be?.onPeerJoined(e,a,!0)):(n.emittedUserId=a,Ve(e,a,o))},onFailure:(e,t,n)=>{K.delete(e),n===Uu?gt(e,t,Hu):Ke(e,t,n)}}),Ct,wt,Tt=null;if(p)try{let e=p.setup(xt,be);C=e.provider,Ct=e.api}catch(e){Tt={error:e},he({code:`plugin-failed`,plugin:`roles`,message:vd(e,`roles setup failed`),cause:e})}if(m&&!Tt)try{let e=m.setup(xt);w=e.provider,wt=e.api}catch(e){Tt={error:e},he({code:`plugin-failed`,plugin:`scale`,message:vd(e,`scale setup failed`),cause:e})}let Et=Tt?Promise.reject(Tt.error):ld([ge,ye,...be?[be]:[]]).then(Q);Et.catch(Q),w&&!Tt&&rt();let Dt=(e,t)=>{if(!O()){if(e&&typeof e==`object`&&e.ok===!1){if(!St.getPeer(t)||ke(t))return;if(e.err===`room full`){St.clearPeer(t,Ju),me({code:`room-full`,peerId:t,message:qu}),ot(t,je(t,!0),Ju);return}if(e.err===`peer banned`){let n=typeof e.reason==`string`&&e.reason.length<=512?e.reason:void 0;St.clearPeer(t,Uu),me(Wu(n,t)),Ke(t,je(t,!0),Uu);return}}St.receiveReady(t)}};W.onMessage((e,{peerId:t})=>{je(t,!1)?.signal(e)}),lt.onMessage((e,{peerId:t})=>{U.receiveStreamMeta(e,t)}),G.onMessage((e,{peerId:t})=>ot(t,void 0,Gu)),ut.onMessage((e,{peerId:t,metadata:n})=>{O()||St.receiveData(e,t,n)}),dt.onMessage((e,{peerId:t})=>{if(O())return;let n=R.get(t);!n||!Ce(n)?n&&L_(n.session)&&!n.session.verified&&St.getPeer(t)&&(n.deferredReady=e):yt(e,t)}),e((e,t)=>{if(!k()||!ht(t)){e.destroy();return}let n=R.get(t);if(n)switch(n.session.phase){case`virtual-only`:Be?.clearPeer(t);break;case`direct-pending`:case`virtual-upgrading`:{let r=n.session.peer;if(r===e)return;let i=Z(`peer replaced`);r.destroy(),vt(t,i),Be?.clearPeer(t);let a=R.get(t);a&&je(t,!0)===r&&Pe(t,a);break}case`direct-active`:{let r=n.session.peer;if(r===e)return;let i=Z(`peer replaced`);r.destroy(),vt(t,i);let[a,o,s]=it(t);at(t,i),He(t,a,o,s),w?.removeDirectPeer(t,r,i);break}default:lu(n.session)}let r=ch(e,()=>{let e=R.get(t)?.session;return!!(e&&e.phase!==`virtual-only`&&e.transport===r)}),i=R.get(t);i?.session.phase===`virtual-only`?(delete i.deferredReady,i.session={phase:`virtual-upgrading`,virtual:i.session.virtual,peer:e,transport:r,verified:!1}):R.set(t,{session:{phase:`direct-pending`,peer:e,transport:r,verified:!1}}),St.addPeer(t,e),e.setHandlers({data:n=>{je(t,!0)!==e||Re(t)||w?.handleFrame(t,n)||Ze(t,n)},stream:e=>{Re(t)||U.receiveRemoteStream(t,e)},close:()=>ot(t,e,Vu),error:n=>{Ru(`peer`,n),je(t,!0)===e&&qe(t,n),ot(t,e,n)}}),St.start(t,e)}),ud&&(Ue=N_(()=>{st().catch(Q)}));let Ot={ready:Et,makeAction:Je,makeState:((e,t,n)=>rt().makeState(e,t,n)),makeUserState:((e,t,n)=>rt().makeUserState(e,t,n)),leave:st,ping:async e=>{let t=Date.now();return await ct.request(``,{target:e}),Date.now()-t},getSelf:async()=>{let[e,t]=await et();return{peerId:E(),userId:e.userId,identityPersistence:e.persistence??`none`,roomId:t?.roomId??S,baseRoomId:t?.baseRoomId??s,isAdmin:t?.isAdmin??!1,roles:t?.roles??[]}},getPeers:()=>fd(Me(!1).map(e=>{let t=je(e,!1),n=!!t;return[e,{userId:we(e),connection:t?t.connection:null,direct:n,hops:n?1:w?.getRoute(e)?.hops??2,roles:[...ze(e)]}]})),getUsers:()=>{if(T)return T;let e=D(),t={};for(let n of Me(!1)){let r=we(n);e&&r===e||(t[r]??={peerIds:[],roles:ze(r)}).peerIds.push(n)}let n={};for(let[e,r]of dd(t))n[e]=Object.freeze({peerIds:Object.freeze(r.peerIds),roles:Object.isFrozen(r.roles)?r.roles:Object.freeze([...r.roles])});return T=Object.freeze(n),T},addStream:(e,t={})=>U.addStream(e,t,lt.send),removeStream:(e,t={})=>{U.removeStream(e,t.target)},replaceTrack:(e,t,n={})=>U.replaceTrack(e,t,n.target),...Ct,...wt,onPeerJoin:(e,t)=>ae(e,t,()=>Me(!1).map(e=>[{peerId:e,userId:we(e),roles:[...ze(e)]}])),onPeerLeave:L,onUserJoin:(e,t)=>ce(e,t,()=>{let e=D(),t=[],n=new Set;for(let r of Me(!1)){let i=we(r);e&&i===e||n.has(i)||(n.add(i),t.push([{userId:i,peerId:r,roles:[...ze(r)]}]))}return t}),onUserLeave:ue,onPeerStream:U.onPeerStream,onError:fe};return Mu(Ot,[`onPeerJoin`,`onPeerLeave`,`onUserJoin`,`onUserLeave`,`onPeerStream`,`onError`,...Ct?[`onRoleChange`]:[]]),[Ot,{localEndpointP:ge,effectiveRoomIdP:be,hasSetupFailed:()=>x,getScaleProvider:()=>w,setOnScaleTargetsChanged:e=>{w?.setOnTargetsChanged(e)},canConnectPeer:ht,emitError:e=>{O()||pe(e)}}]},B_=5333,V_=[233,533,1333],H_=(e,t)=>{let n={...e};for(let[e,r]of dd(t))r!==void 0&&(n[e]=r);return n},U_=(e,t)=>{let n=e.get(t);return n||(n=new Map,e.set(t,n)),n},W_=({defaultConfig:e,init:t,subscribe:n,announce:r})=>{let i=hp(),a=new Map;return((o,s,...c)=>{if(!o)throw Z(`config map required`);if(c.length>0&&c[0]!==void 0)throw Z(`joinRoom takes 2 arguments; register error listeners via room.onError(fn)`);let l=e?H_(e,o):o,{appId:u}=l;if(!u)throw id(`appId`);if(!s)throw id(`roomId`);if(l.maxReceiveBytes!==void 0&&!Pd(l.maxReceiveBytes))throw Qu(`maxReceiveBytes`);if(l.maxUsers!==void 0&&!Pd(l.maxUsers))throw Qu(`maxUsers`);Op(l);let d=a.get(u)?.get(s);if(d?.phase===`occupied`)throw Z(`already joined room "${s}" for appId "${u}"`);d?.phase===`leaving`&&d.finalizeCleanup();let f={phase:`active`},p=`unconfirmed`,m=s,h,g=Q,_=Q,v=Q,y=()=>f.phase!==`active`,b=new Map,x=[],S=e=>bd(iu,u,e),C=e=>{let t=a.get(u);if(!t)return;let n=t.get(s);if(n&&e(n)&&t.delete(s),m!==s){let n=t.get(m);n&&e(n)&&t.delete(m)}t.size===0&&a.delete(u)},w=()=>{if(f.phase!==`left`){f={phase:`left`,relaysStopped:!1},g=Q,C(e=>e.phase===`occupied`&&e.room===D||e.phase===`leaving`&&e.finalizeCleanup===w);for(let e of b.values())e.connectedPeer&&!e.connectedPeer.isDead&&e.connectedPeer.destroy(),e.answeringPeer&&!e.answeringPeer.isDead&&e.answeringPeer.destroy(),Qh(e),qh(e),e.connection={phase:`disconnected`};b.clear(),v()}},T=e=>{for(let t of e)t.announce.phase===`active`&&(t.announce.timer=gd(t.announce.timer))},E=[],[D,O]=z_(e=>{g=e},(e,t=!0)=>{if(f.phase===`left`)return;let n=b.get(e);n?.connectedPeer&&Xh(n,n.connectedPeer),Wh(b),t&&_()},w,{clientId:i,appId:u,roomId:s,...l.password===void 0?{}:{password:l.password},...l.maxUsers===void 0?{}:{maxUsers:l.maxUsers},...l.use===void 0?{}:{use:l.use},...l.identity===void 0?{}:{identity:l.identity},...l.maxReceiveBytes===void 0?{}:{maxReceiveBytes:l.maxReceiveBytes},onBeforeLeave:()=>{f.phase===`active`&&(f={phase:`leaving-flush`}),T(E);let e=U_(a,u),t={phase:`leaving`,finalizeCleanup:w},n=e.get(s);if(n&&n.phase===`occupied`&&n.room!==D||e.set(s,t),m!==s){let n=e.get(m);n&&n.phase===`occupied`&&n.room!==D||e.set(m,t)}}});try{let e=O.localEndpointP.then(e=>e.peerId);e.catch(Q);let i=e=>{f.phase!==`left`&&O.emitError(e)},o={config:l,appId:u,roomId:s,peerId:``},c=O.effectiveRoomIdP?.then(e=>{if(m=e,o.roomId=e,e!==s&&f.phase===`active`){let t=U_(a,u),n=t.get(e);n?.phase===`leaving`&&n.finalizeCleanup(),t.has(e)||t.set(e,{phase:`occupied`,room:D})}return e});c?.catch(Q);let d=e=>{let t=c?c.then(e):e(s);return t.catch(Q),t},C=d(e=>ff(S(e))),w=ld([c??Promise.resolve(s),e]).then(([e,t])=>(h=t,o.peerId=t,ff(bd(S(e),t))));w.catch(Q);let k=d(e=>mf(l.password??``,u,e)),A=e=>async(t,n,r)=>({type:t.type,sdp:await e(k,t.sdp,vh(t.type,n,r))}),j=A(_f),M=A(gf),N=!1,P=!1,{checkout:ee,getOffers:F,claimLeased:te,reclaimLeased:I,destroy:ne}=ag(()=>_g(!0,l)),re=async(e,t,n)=>{let r=await e.getOffer();if(!r||r.type!==`offer`)throw Z(`failed to get offer for peer`);return(await M(r,t,n)).sdp},ie=(e,t)=>{if(y()){e.destroy();return}let n=eg(b,t);if(n.connectedPeer&&n.connectedPeer!==e){if(Oh(n.connectedPeer)!==`stale`){e.destroy();return}Zh(n)}Yh(n,e),g(e,t),Qh(n),e.isDead&&n.connectedPeer===e&&(Xh(n,e),Wh(b))},ae=!!l.passive,oe=Q,L=Q;_=()=>{oe(),ae||!N||P||(P=!0,queueMicrotask(()=>{P=!1,f.phase===`active`&&L()}))};let{handleMessage:se,dialPeer:ce}=tg({appId:u,getRoomId:()=>m,config:l,peerStates:b,getRootTopicPlaintext:()=>S(m),rootTopicP:C,selfTopicP:w,toPlain:j,toCipher:M,isLeaving:y,onError:i,checkoutOffers:ee,claimLeasedOffer:te,reclaimLeasedOffer:I,encryptOffer:re,initPeer:_g,connectPeer:ie,disconnectPeer:(e,t)=>{if(f.phase===`left`)return;let n=b.get(t);n?.connectedPeer===e&&(Zh(n),Wh(b),_())},announceIntervals:x,announceIntervalMs:B_,getSelfIdNow:()=>h,selfIdP:e,onPeerDiscovered:e=>{O.canConnectPeer(e)&&O.getScaleProvider()?.notePeerDiscovered(e)&&oe()},shouldConnectPeer:(e,t)=>O.canConnectPeer(e)&&(O.getScaleProvider()?.shouldConnectPeer(e,t)??!0)});oe=()=>{let e=O.getScaleProvider();if(!(y()||ae||!e))for(let t of e.getTargetNeighbors())ce(t)};let le=t(l);E=(Array.isArray(le)?le:[le]).map(e=>{let t=Promise.resolve(e);return t.catch(Q),{rawItem:e,relayP:t,leaseReleased:!1,subscription:{phase:`booting`},announce:{phase:`waiting`},gen:0,intervalMs:B_,attempts:0,errors:0,initial:`pending`}});let ue=e=>{e.leaseReleased||(e.leaseReleased=!0,mm(e.rawItem))};v=()=>{if(!(f.phase===`left`&&f.relaysStopped)){f={phase:`left`,relaysStopped:!0},T(E);for(let e of E){let t=e.subscription;e.subscription={phase:`closed`},e.gen+=1,e.announce={phase:`closed`},t.phase===`subscribed`&&t.unsub(),t.phase!==`subscribing`&&ue(e)}ne()}};let de=E.length,fe=e=>{p===`error-reported`||O.hasSetupFailed()||y()||(p=`error-reported`,queueMicrotask(()=>{!y()&&!O.hasSetupFailed()&&i({code:`relay-failed`,message:vd(e,`all signaling relays failed`),appId:u,roomId:m,...e===void 0?{}:{cause:e}})}))},pe=e=>{p===`unconfirmed`&&de>0&&E.every(e=>e.subscription.phase===`boot-failed`)&&fe(e)},me=(e,t)=>{switch(e.subscription.phase){case`booting`:case`subscribing`:e.subscription={phase:`boot-failed`},pe(t);return;case`subscribed`:case`closed`:case`boot-failed`:return;default:lu(e.subscription)}};E.forEach(e=>{let t=e.relayP[su];typeof t==`function`&&t().then(t=>{t&&me(e,t)})});let he=E.map(async(t,r)=>{let i,a;try{[i,a]=await ld([C,w])}catch{return t.subscription={phase:`closed`},ue(t),Q}if(y())return t.subscription={phase:`closed`},ue(t),Q;let s;try{s=await t.relayP}catch(e){return me(t,e),ue(t),Q}if(y())return t.subscription={phase:`closed`},ue(t),Q;t.subscription={phase:`subscribing`};try{let c=await n(s,i,a,se(r),t=>e.then(e=>F(t,(t,n)=>re(t,e,n))),o);return y()||(e=>e.subscription.phase===`closed`)(t)?(c(),t.subscription={phase:`closed`},ue(t),Q):(t.subscription={phase:`subscribed`,unsub:c},p===`unconfirmed`&&(p=`healthy`),c)}catch(e){return t.subscription={phase:`boot-failed`},ue(t),pe(e),Q}});return ae||ld([C,w]).then(([e,t])=>{if(y())return;let n=(e,t)=>!y()&&e.announce.phase===`active`&&e.gen===t,i=async(a,s,c,u)=>{if(!n(s,u))return;let d,f=s.initial===`pending`;try{d=await r(a,e,t,o),s.errors=0,f&&(s.initial=`succeeded`)}catch(e){if(y()||s.announce.phase===`closed`)return;if(s.errors===0&&l.relayConfig?.warnOnRelayFailure!==!1&&Fu(`announce failed - ${vd(e,``)}`),s.errors+=1,f){s.initial=`failed`;let t=E.some(e=>e.initial===`succeeded`),n=de>0&&E.every(e=>e.subscription.phase===`boot-failed`||e.announce.phase!==`waiting`&&e.initial!==`pending`);!t&&n&&fe(e)}}if(!n(s,u))return;if(typeof d==`number`)x[c]=d,s.intervalMs=d;else if(typeof d==`object`&&d){if(`stopAnnouncing`in d){s.announce={phase:`closed`};return}s.intervalMs=d.nextAnnounceMs,N||=d.reannounceOnDisconnect===!0}let p=s.attempts++,m=V_[p]??(p===3&&typeof d==`object`?B_:void 0),h=typeof m==`number`?Math.min(s.intervalMs,m):s.intervalMs,g=setTimeout(()=>{s.announce.phase===`active`&&s.announce.timer===g&&(s.announce.timer=null),i(a,s,c,u)},h);_d(g),s.announce.phase===`active`?s.announce.timer=g:clearTimeout(g)};L=()=>{T(E),E.forEach((e,t)=>{if(e.subscription.phase!==`subscribed`||e.announce.phase===`closed`)return;let r=++e.gen;e.attempts=0,e.announce={phase:`active`,timer:null},e.relayP.then(a=>{a&&n(e,r)&&i(a,e,t,r)},Q)})},he.forEach((e,t)=>{let r=E[t];r&&e.then(e=>{if(y()||e===Q||r.announce.phase!==`waiting`)return;let{gen:a}=r;r.announce={phase:`active`,timer:null},r.relayP.then(e=>{e&&n(r,a)&&i(e,r,t,a)},Q)},Q)})},Q),O.setOnScaleTargetsChanged(e=>{if(!y()&&!ae)for(let t of e)ce(t)}),U_(a,u).set(s,{phase:`occupied`,room:D}),D}catch(e){throw f={phase:`left`,relaysStopped:!1},v(),D.leave().catch(Q),e}})},G_=6e4,K_=(e,t,n,r)=>({kind:t,appId:e.appId,roomId:e.roomId,rootTopic:n,selfTopic:r,peerId:e.peerId}),q_=({defaultConfig:e,steadyAnnounceIntervalMs:t=G_,reannounceOnDisconnect:n=!0,init:r,subscribeTopic:i,publishTopic:a})=>W_({...e===void 0?{}:{defaultConfig:e},init:r,subscribe:async(e,t,n,r,o,s)=>{let c=!1,l=(r,i)=>{if(!c)try{Promise.resolve(a(e,r,i,K_(s,`signal`,t,n))).catch(Q)}catch{}},u=(e,t)=>{if(!c)return r(e,t,l)},d=await i(e,n,u,K_(s,`self`,t,n)),f;try{f=await i(e,t,u,K_(s,`root`,t,n))}catch(e){throw c=!0,d(),e}return()=>{c||(c=!0,d(),f())}},announce:async(e,r,i,o)=>{let s=await a(e,r,{peerId:o.peerId},K_(o,`announce`,r,i));return typeof s==`number`?s:typeof s==`object`&&s?`stopAnnouncing`in s?s:{nextAnnounceMs:s.nextAnnounceMs??t,reannounceOnDisconnect:s.reannounceOnDisconnect??n}:{nextAnnounceMs:t,reannounceOnDisconnect:n}}}),J_=Object.freeze,Y_=115792089237316195423570985008687907853269984665640564039457584007908834671663n,X_=115792089237316195423570985008687907852837564279074904382605163141518161494337n,Z_=55066263022277343669578718895168534326250603453777594175500187360389116729240n,Q_=32670510020758816978083085130507043184471273380659243275938904335757337482424n,$_=J_({p:Y_,n:X_,h:1n,a:0n,b:7n,Gx:Z_,Gy:Q_}),ev=32,tv=e=>e instanceof Uint8Array||ArrayBuffer.isView(e)&&e.constructor.name===`Uint8Array`&&e.BYTES_PER_ELEMENT===1,nv=(e,t,n=``)=>{if(tv(e)&&(t===void 0||e.length===t))return e;let r=tv(e),i=t===void 0?``:` of length ${t}`,a=r?`length=${e.length}`:`type=${typeof e}`,o=(n?`"${n}" `:``)+`expected Uint8Array`+i+`, got `+a;throw r?RangeError(o):TypeError(o)},rv=e=>Uint8Array.from(e),iv=(e,t,n)=>rv(nv(e,n,t)),av=(e,t)=>e.toString(16).padStart(t,`0`),ov=e=>{let t=``;for(let n of nv(e))t+=av(n,2);return t},sv=e=>{let t=`hex invalid`;if(typeof e!=`string`)throw TypeError(t);if(e.length%2||!/^[\da-f]*$/i.test(e))throw RangeError(t);let n=new Uint8Array(e.length/2);for(let t=0,r=0;t<n.length;t++,r+=2){let i=e.charCodeAt(r),a=e.charCodeAt(r+1);n[t]=((i&15)+(i>>6)*9)*16+(a&15)+(a>>6)*9}return n},cv=()=>{let e=globalThis?.crypto?.subtle;if(e)return e;throw Error(`crypto.subtle must be defined, consider polyfill`)},lv=(...e)=>{let t=0;for(let n of e)t+=nv(n).length;let n=new Uint8Array(t),r=0;for(let t of e)n.set(t,r),r+=t.length;return n},uv=(e=ev)=>{let t=globalThis?.crypto;if(typeof t?.getRandomValues!=`function`)throw Error(`crypto.getRandomValues must be defined, consider polyfill`);return t.getRandomValues(new Uint8Array(e))},dv=BigInt,fv=(e,t,n,r=`bad number: out of range`)=>{if(typeof e!=`bigint`)throw TypeError(r);if(t<=e&&e<n)return e;throw RangeError(r)},$=(e,t=Y_)=>(e%=t)>=0n?e:t+e,pv=e=>$(e,X_),mv=(e,t)=>{if(e===0n)throw Error(`invert: expected non-zero number`);if(t<=1n)throw Error(`invert: expected modulus > 1, got `+t);let n=$(e,t),r=t,i=0n,a=1n;for(;n!==0n;){let e=r/n,t=r-n*e,o=i-a*e;r=n,n=t,i=a,a=o}if(r!==1n)throw Error(`invert: does not exist`);return $(i,t)},hv=e=>{let t=Iv[e];if(typeof t!=`function`)throw Error(`hashes.`+e+` not set`);return t},gv=(e,t,n)=>nv(hv(e)(t,n),ev,`digest`),_v=async(e,t,n)=>nv(await hv(e)(t,n),ev,`digest`),vv=e=>{if(e instanceof Dv)return e;throw TypeError(`Point expected`)},yv=`bad point: not on curve`,bv=e=>$($(e*e)*e+7n),xv=e=>fv(e,0n,Y_),Sv=e=>fv(e,1n,Y_),Cv=e=>fv(e,1n,X_),wv=e=>!(e&1n),Tv=e=>Uint8Array.of(wv(e)?2:3),Ev=e=>{let t=bv(Sv(e)),n=1n;for(let e=t,r=115792089237316195423570985008687907853269984665640564039457584007908834671664n/4n;r>0n;r>>=1n)r&1n&&(n=n*e%Y_),e=e*e%Y_;if($(n*n)!==t)throw Error(`sqrt invalid`);return new Dv(e,wv(n)?n:$(-n),1n)},Dv=class e{static BASE;static ZERO;X;Y;Z;constructor(e,t,n){this.X=xv(e),this.Y=Sv(t),this.Z=xv(n),J_(this)}static CURVE(){return $_}static fromAffine(t){let{x:n,y:r}=t;return n===0n&&r===0n?kv:new e(n,r,1n)}static fromBytes(t){nv(t);let n=t.length,r=t[0],i=Mv(t,1,33);try{if(n===33&&(r===2||r===3)){let e=Ev(i);return r===3?e.negate():e}if(n===65&&r===4)return new e(i,Mv(t,33,65),1n).assertValidity()}catch{throw Error(yv)}throw Error(yv)}static fromHex(t){return e.fromBytes(sv(t))}get x(){return this.toAffine().x}get y(){return this.toAffine().y}equals(e){let{X:t,Y:n,Z:r}=this,{X:i,Y:a,Z:o}=vv(e);return $(t*o)===$(i*r)&&$(n*o)===$(a*r)}is0(){return this.Z===0n}negate(){return new e(this.X,$(-this.Y),this.Z)}double(){return this.add(this)}add(t){let{X:n,Y:r,Z:i}=this,{X:a,Y:o,Z:s}=vv(t),c=0n,l=0n,u=0n,d=0n,f=$(7n*3n),p=$(n*a),m=$(r*o),h=$(i*s),g=$(n+r),_=$(a+o);g=$(g*_),_=$(p+m),g=$(g-_),_=$(n+i);let v=$(a+s);return _=$(_*v),v=$(p+h),_=$(_-v),v=$(r+i),l=$(o+s),v=$(v*l),l=$(m+h),v=$(v-l),d=$(c*_),l=$(f*h),d=$(l+d),l=$(m-d),d=$(m+d),u=$(l*d),m=$(p+p),m=$(m+p),h=$(c*h),_=$(f*_),m=$(m+h),h=$(p-h),h=$(c*h),_=$(_+h),p=$(m*_),u=$(u+p),p=$(v*_),l=$(g*l),l=$(l-p),p=$(g*m),d=$(v*d),d=$(d+p),new e(l,u,d)}subtract(e){return this.add(vv(e).negate())}multiply(e,t=!0){if(!t&&e===0n)return kv;if(Cv(e),e===1n)return this;if(this.equals(Ov))return cy(e).p;let n=kv,r=Ov,i=this;for(let a=0;t?a<256:e>0n;a++)e&1n?n=n.add(i):t&&(r=r.add(i)),i=i.double(),e>>=1n;return n}multiplyUnsafe(e){return this.multiply(e,!1)}toAffine(){let{X:e,Y:t,Z:n}=this;if(n===0n)return{x:0n,y:0n};if(n===1n)return{x:e,y:t};let r=mv(n,Y_);if($(n*r)!==1n)throw Error(`inverse invalid`);return{x:$(e*r),y:$(t*r)}}assertValidity(){let{x:e,y:t}=this.toAffine();if(Sv(e),Sv(t),$(t*t)!==bv(e))throw Error(yv);return this}toBytes(e=!0){let{x:t,y:n}=this.assertValidity().toAffine(),r=Nv(t);return e?lv(Tv(n),r):lv(Uint8Array.of(4),r,Nv(n))}toHex(e){return ov(this.toBytes(e))}},Ov=new Dv(Z_,Q_,1n),kv=new Dv(0n,1n,0n);Dv.BASE=Ov,Dv.ZERO=kv;var Av=(e,t,n)=>Ov.multiply(t,!1).add(e.multiply(n,!1)).assertValidity(),jv=e=>dv(`0x`+(ov(e)||`0`)),Mv=(e,t,n)=>jv(e.subarray(t,n)),Nv=e=>sv(av(fv(e,0n,2n**256n),64)),Pv=e=>fv(jv(nv(e,ev,`secret key`)),1n,X_,`invalid secret key: outside of range`),Fv=`SHA-256`,Iv={hmacSha256Async:async(e,t)=>{let n=cv(),r=await n.importKey(`raw`,e,{name:`HMAC`,hash:Fv},!1,[`sign`]);return new Uint8Array(await n.sign(`HMAC`,r,t))},hmacSha256:void 0,sha256Async:async e=>new Uint8Array(await cv().digest(Fv,e)),sha256:void 0},Lv=e=>{if(e=e===void 0?uv(48):e,nv(e),e.length<48||e.length>1024)throw RangeError(`expected 48-1024b`);return Nv($(jv(e),X_-1n)+1n)},Rv=e=>t=>{let n=Lv(t);return{secretKey:n,publicKey:e(n)}},zv=e=>Uint8Array.from(`BIP0340/`+e,e=>e.charCodeAt(0)),Bv=(e,...t)=>{let n=gv(`sha256`,zv(e));return gv(`sha256`,lv(n,n,...t))},Vv=(e,...t)=>_v(`sha256Async`,zv(e)).then(e=>_v(`sha256Async`,lv(e,e,...t))),Hv=e=>{let t=Pv(e),{x:n,y:r}=Ov.multiply(t).assertValidity().toAffine();return{d:wv(r)?t:pv(-t),px:Nv(n)}},Uv=e=>pv(jv(e)),Wv=(...e)=>Uv(Bv(`challenge`,...e)),Gv=async(...e)=>Uv(await Vv(`challenge`,...e)),Kv=e=>Hv(e).px,qv=Rv(Kv),Jv=(e,t,n)=>{let r=iv(e,`message`),{px:i,d:a}=Hv(t);return{m:r,px:i,d:a,a:nv(n,ev)}},Yv=e=>{let t=Uv(e);if(t===0n)throw Error(`sign failed: k is zero`);let{px:n,d:r}=Hv(Nv(t));return{rx:n,k:r}},Xv=(e,t,n,r)=>lv(t,Nv(pv(e+n*r))),Zv=`invalid signature produced`,Qv=(e,t,n=uv(ev))=>{let{m:r,px:i,d:a,a:o}=Jv(e,t,n),{rx:s,k:c}=Yv(Bv(`nonce`,Nv(a^jv(Bv(`aux`,o))),i,r)),l=Xv(c,s,Wv(s,i,r),a);if(!ny(l,r,i))throw Error(Zv);return l},$v=async(e,t,n=uv(ev))=>{let{m:r,px:i,d:a,a:o}=Jv(e,t,n),{rx:s,k:c}=Yv(await Vv(`nonce`,Nv(a^jv(await Vv(`aux`,o))),i,r)),l=Xv(c,s,await Gv(s,i,r),a);if(!await ry(l,r,i))throw Error(Zv);return l},ey=(e,t)=>e instanceof Promise?e.then(t):t(e),ty=(e,t,n,r)=>{let i=nv(e,64,`signature`),a=nv(t,void 0,`message`),o=nv(n,ev,`publicKey`),s,c,l,u;try{s=Ev(jv(o)),c=Sv(Mv(i,0,ev)),l=Cv(Mv(i,ev,64)),u=lv(Nv(c),o,a)}catch{return!1}return ey(r(u),e=>{try{let{x:t,y:n}=Av(s,l,pv(-e)).toAffine();return!(!wv(n)||t!==c)}catch{return!1}})},ny=(e,t,n)=>ty(e,t,n,Wv),ry=async(e,t,n)=>ty(e,t,n,Gv),iy=J_({keygen:qv,getPublicKey:Kv,sign:Qv,verify:ny,signAsync:$v,verifyAsync:ry}),ay=()=>{let e=[],t=Ov,n=t;for(let r=0;r<33;r++){n=t,e.push(n);for(let r=1;r<128;r++)n=n.add(t),e.push(n);t=n.double()}return e},oy=void 0,sy=(e,t)=>{let n=t.negate();return e?n:t},cy=e=>{let t=oy||=ay(),n=kv,r=Ov;for(let i=0;i<33;i++){let a=Number(e&255n);e>>=8n,a>128&&(a-=256,e+=1n);let o=i*128,s=o+Math.abs(a)-1,c=i%2!=0,l=a<0;a===0?r=r.add(sy(c,t[o])):n=n.add(sy(l,t[s]))}if(e!==0n)throw Error(`invalid wnaf`);return{p:n,f:r}},ly=`EVENT`,uy=60,dy=Uint8Array.prototype.toHex,fy=typeof dy==`function`?e=>dy.call(e):e=>Array.from(e,e=>e.toString(16).padStart(2,`0`)).join(``),py=()=>Math.floor(Date.now()/1e3),my=()=>Math.max(0,py()-uy),hy=()=>{let{secretKey:e,publicKey:t}=iy.keygen();return{secretKey:e,pubkey:fy(t)}},gy=e=>{let t=2166136261;for(let n=0;n<e.length;n++)t=Math.imul(t^e.charCodeAt(n),16777619);return(t>>>0)%1e4+2e4},_y=async(e,t,n)=>{let r={kind:gy(e),tags:[[`x`,e]],created_at:py(),content:t,pubkey:n.pubkey},i=new Uint8Array(await crypto.subtle.digest(`SHA-256`,fu(uu([0,r.pubkey,r.created_at,r.kind,r.tags,r.content]))));return uu([ly,{...r,id:fy(i),sig:fy(await iy.signAsync(i,n.secretKey))}])},vy=e=>{throw Z(`unreachable: ${String(e)}`)},yy=e=>(e!==null&&clearTimeout(e),null),by=hm(e=>e.socket,e=>{By(e),e.close?.()}),xy=5,Sy=250,Cy=6e4,wy=9e5,Ty=5333,Ey=new Map,Dy=new WeakMap,Oy=fm(),ky=new WeakMap,Ay=(e,t)=>`${e}\0${t}`,jy=e=>{let t=Ey.get(e);return t?t.signer??=hy():hy()},My=e=>{let t=Dy.get(e);if(!t)return{phase:`healthy`};if(t.phase===`cooldown`&&Date.now()>=t.untilMs){let n={phase:`probation`,lastDelayMs:t.delayMs};return Dy.set(e,n),n}return t},Ny=e=>{let t=My(e);switch(t.phase){case`retired`:return wy;case`healthy`:{let t=Cy;return Dy.set(e,{phase:`cooldown`,delayMs:t,untilMs:Date.now()+t}),t}case`cooldown`:case`probation`:{let n=t.phase===`cooldown`?t.delayMs:t.lastDelayMs,r=Math.min(Math.max(Cy,n*2),wy);return Dy.set(e,{phase:`cooldown`,delayMs:r,untilMs:Date.now()+r}),r}default:return vy(t)}},Py=e=>{My(e).phase===`probation`&&Dy.set(e,{phase:`healthy`})},Fy=e=>{let t=My(e);return t.phase===`cooldown`?Math.max(0,t.untilMs-Date.now()):0},Iy=e=>({nextAnnounceMs:e}),Ly={stopAnnouncing:!0},Ry=e=>My(e).phase!==`retired`&&(Dy.set(e,{phase:`retired`}),by.evict(e),By(e),e.close?.(),!0),zy=e=>{e.flushWaiters.forEach(e=>e()),e.flushWaiters.clear()},By=e=>{let t=ky.get(e);t&&(t.flushTimer=yy(t.flushTimer),t.retryTimer=yy(t.retryTimer),t.sync={phase:`unsynced`},zy(t),ky.delete(e))},Vy=(e,t,n)=>{let r=ky.get(e);r||(r={subIds:[],topics:new Map,flushTimer:null,flushWaiters:new Set,sync:{phase:`unsynced`},retryTimer:null,retryMs:Ty},ky.set(e,r));let i=r.topics.get(t),a=!i;i||(i=new Set,r.topics.set(t,i)),i.add(n),(a||r.sync.phase===`unsynced`)&&Uy(e,r)},Hy=(e,t,n)=>{let r=ky.get(e);if(!r)return!1;let i=r.topics.get(t);return!i||!i.delete(n)?!1:i.size>0||(r.topics.delete(t),delete Oy.forRelay(e)[t],r.topics.size===0?(r.subIds.forEach(t=>e.send(uu([`CLOSE`,t]))),By(e),!0):(Uy(e,r),!0))},Uy=(e,t)=>{t.flushTimer===null&&(t.flushTimer=setTimeout(()=>{t.flushTimer=null;try{Gy(e)}finally{zy(t)}},0))},Wy=e=>{let t=ky.get(e);return!t||t.flushTimer===null?Promise.resolve():new Promise(e=>{t.flushWaiters.add(e)})},Gy=e=>{let t=ky.get(e);if(!t||t.topics.size===0)return;t.flushTimer=yy(t.flushTimer),t.retryTimer=yy(t.retryTimer);let n=[...t.topics.keys()],r=[],i=my();for(let e=0;e<n.length;e+=Sy)r.push(n.slice(e,e+Sy));for(;t.subIds.length>r.length;){let n=t.subIds.pop();n&&e.send(uu([`CLOSE`,n]))}let a=new Set,o=Date.now();r.forEach((n,r)=>{let o=t.subIds[r]??=cd(64);a.add(o),e.send(uu([`REQ`,o,{kinds:[...new Set(n.map(gy))],since:i,"#x":n}]))}),t.sync={phase:`awaiting-eose`,pendingSubIds:a,requestedAt:o},zy(t)},Ky=e=>{let t=ky.get(e);if(t&&t.topics.size>0&&!e.isClosed){if(Fy(e)>0){Xy(e,!0);return}Gy(e),qy(e)}},qy=e=>{Object.entries(Oy.forRelay(e)).forEach(([t,{payload:n,getSigner:r}])=>{Yy(e,t,n,!0,r)})},Jy=(e,t)=>{let n=My(e);if(n.phase===`retired`||e.isClosed)return t?Ly:void 0;let r=n.phase===`cooldown`?Math.max(0,n.untilMs-Date.now()):0;return r>0||e.socket?.readyState!==1?t?Iy(Math.max(Cy,r)):void 0:null},Yy=async(e,t,n,r,i)=>{let a=Jy(e,r);if(a!==null)return a;let o=await _y(t,r?uu({...du(n),nonce:cd(8)}):n,i()),s=Jy(e,r);return s===null?r&&!ky.get(e)?.topics.has(t)?Iy(Cy):(e.send(o),r?Iy(Cy):void 0):s},Xy=(e,t)=>{let n=ky.get(e);if(!n||n.topics.size===0||e.isClosed||n.retryTimer!==null&&!t)return;let r=t?Fy(e):n.retryMs;n.retryMs=Math.min(n.retryMs*2,Cy),n.sync.phase===`synced`&&(n.sync={phase:`unsynced`}),n.retryTimer=yy(n.retryTimer),n.retryTimer=setTimeout(()=>{n.retryTimer=null,Ky(e)},Math.max(r,Ty)),_d(n.retryTimer)},Zy=q_({init:e=>om(e,Qy,xy,!0).map(t=>{let n=by.register(t,()=>{let n=dm(t,t=>{let r=du(t);if(!Array.isArray(r))return;let[i,a,o,s]=r;if(i!==`EVENT`){if(i===`CLOSED`&&!ky.get(n)?.subIds.includes(a))return;let t=`${iu}: relay failure from ${n.url} - `,r=i===`CLOSED`&&typeof o==`string`?o:s,c=i===`OK`&&o===!1,l=(c||i===`CLOSED`)&&r?.startsWith(`rate-limited:`),u=c&&r?.startsWith(`duplicate:`),d=r&&/^(blocked|restricted|auth-required|pow):/.test(r);if(i===`OK`&&o===!0&&Py(n),(c||i===`CLOSED`)&&d&&!Ry(n))return;if(l)Ny(n);else if(i===`EOSE`){let e=ky.get(n);if(e&&e.sync.phase===`awaiting-eose`&&e.sync.pendingSubIds.delete(a)&&e.sync.pendingSubIds.size===0){let{requestedAt:t}=e.sync;e.retryTimer=yy(e.retryTimer),e.retryMs=Ty,e.sync={phase:`synced`},Date.now()-t>=1e3&&qy(n)}}i===`CLOSED`&&!d&&Xy(n,!!l),!u&&e.relayConfig?.warnOnRelayFailure!==!1&&(i===`NOTICE`?console.warn(t+a):(c||i===`CLOSED`)&&console.warn(t+r))}else if(o&&typeof o==`object`&&`content`in o){let e=ky.get(n);if(e?.subIds.includes(a)&&o.tags){let t=o.tags.find(e=>Array.isArray(e)&&e[0]===`x`);if(t?.[1]){let n=t[1];e.topics.get(n)?.forEach(e=>{e(n,o.content)})}}}},()=>Ky(n));return n});return by.lease(n,n.ready)}),subscribeTopic:(e,t,n,r)=>{let i=Ay(r.rootTopic,r.selfTopic),a=Ey.get(i);a?a.refs+=1:Ey.set(i,{refs:1,signer:null});let o=!1,s=(e,t)=>void n(e,t);Vy(e,t,s);let c=()=>{if(o)return;o=!0;let n=Ey.get(i);n&&(n.refs<=1?Ey.delete(i):--n.refs),Hy(e,t,s)};return r.kind===`root`?Wy(e).then(()=>c):c},publishTopic:(e,t,n,{kind:r,rootTopic:i,selfTopic:a})=>{let o=typeof n==`string`?n:uu(n),s=Ay(i,a),c=()=>jy(s);return r===`announce`&&ky.get(e)?.topics.has(t)&&(Oy.forRelay(e)[t]={payload:o,getSigner:c}),Yy(e,t,o,r===`announce`,c)}}),Qy=`wss://bucket.coracle.social,wss://fanfares.nostr1.com,wss://no.str.cr,wss://nostr-01.yakihonne.com,wss://nostr-pub.wellorder.net,wss://nostr.azzamo.net,wss://nostr.chaima.info,wss://nostr.data.haus,wss://nostr.hifish.org,wss://nostr.liberty.fans,wss://nostr.overmind.lol,wss://nostr.sathoarder.com,wss://nostrelay.circum.space,wss://relay.angor.io,wss://relay.ditto.pub,wss://relay.dwadziesciajeden.pl,wss://relay.fundstr.me,wss://relay.guggero.org,wss://relay.masize.com,wss://relay.minibolt.info,wss://relay.mostro.network,wss://relay.nostr.com,wss://relay.nostr.net,wss://relay.nostrhub.fr,wss://relay.notoshi.win,wss://relay.primal.net,wss://relay.snort.social,wss://relay.wavlake.com,wss://soloco.nl,wss://yabu.me`.split(`,`),$y=class{constructor(e){this.game=e,this.room=null,this.selfId=null,this.connected=!1,this._stateAcc=0,this._fishAcc=0}async connect(e){let t={appId:Y.net.appId};Y.net.turn&&Y.net.turn.length&&(t.turnConfig=Y.net.turn);try{this.room=Zy(t,e)}catch(e){console.error(`Trystero joinRoom:`,e),this.game.hud.toast(`Réseau indisponible : `+e.message);return}let n=await this.room.getSelf();this.selfId=n.peerId,this.connected=!0,this.roomName=e,this.poseA=this.room.makeAction(`pose`),this.fishA=this.room.makeAction(`fish`),this.evA=this.room.makeAction(`ev`),this.metaA=this.room.makeAction(`meta`);let r=e=>e instanceof Float32Array?e:e&&e.buffer?new Float32Array(e.buffer,e.byteOffset,e.byteLength/4):null;this.poseA.onMessage((e,t)=>{let n=this.game.remotes.get(t.peerId),i=r(e);n&&i&&n.applyState(i)}),this.fishA.onMessage(e=>{let t=r(e);t&&this.game.fish.decodeSync(t)}),this.evA.onMessage((e,t)=>{e&&typeof e==`object`&&this.game.onEvent(e,t.peerId)}),this.metaA.onMessage((e,t)=>{let n=this.game.remotes.get(t.peerId);n&&n.setMeta(e),this.game.refreshBounties()}),this.room.onPeerJoin(({peerId:e})=>{this.game.onPeerJoin(e),this.sendMetaTo(e),this.isHost&&(this.game.fishDirty=!0)},{replay:!0}),this.room.onPeerLeave(({peerId:e})=>{this.game.onPeerLeave(e)}),this.room.onError(e=>{console.warn(`Trystero error:`,e&&e.code||e)}),this._lastSent=0}get peerCount(){if(!this.room)return 0;let e=this.room.getPeers();return e?Object.keys(e).length:0}get peerIds(){if(!this.room)return[];let e=this.room.getPeers();return e?Object.keys(e):[]}get isHost(){if(!this.connected)return!0;let e=this.peerIds.sort();return e.length===0||this.selfId<=e[0]}sendState(e){if(this.connected)try{this.poseA.send(e)}catch{}}sendFish(e){if(this.connected)try{this.fishA.send(e)}catch{}}sendEv(e){if(this.connected)try{this.evA.send(e)}catch{}}_myMeta(){return{name:this.game.player.name,fish:this.game.player.fishCount,money:Math.round(this.game.player.money)}}sendMetaTo(e){if(this.connected)try{this.metaA.send(this._myMeta(),{target:e})}catch{}}sendMeta(){if(this.connected)try{this.metaA.send(this._myMeta())}catch{}}update(e,t){this.connected&&(this._stateAcc+=e,this._stateAcc>=1/Y.net.stateHz&&(this._stateAcc=0,this.sendState(t.encodeState())),this.isHost&&(this._fishAcc+=e,this._fishAcc>=1/Y.net.fishHz&&(this._fishAcc=0,this.sendFish(this.game.fish.encodeSync()))))}async leave(){if(this.room){try{await this.room.leave()}catch{}this.connected=!1}}},eb=class{constructor(e,t,n){this.mode=e,this.renderer=new al({antialias:!0,powerPreference:`high-performance`}),this.renderer.setSize(innerWidth,innerHeight),this.renderer.setPixelRatio(Math.min(devicePixelRatio,1.5)),this.renderer.xr.enabled=e===`vr`,document.getElementById(`app`).appendChild(this.renderer.domElement),this.scene=new gn,this.world=new Tl(this.scene),this.fx=new Ul(this.scene),this.fish=new Hl(this.scene,this.world),this.player=new zl(this,t),this.net=new $y(this),this.remotes=new Map,this.npcs=[],this.inkClouds=[],this.bounties=[],this.uiPointing=!1,this.uiClickRequested=!1,this._bountyTimers=[],this.boards=new $l(this.scene,this.world,this),this.hud=new tu(this),this.hud.setWristAnchor(null),this.renderer.xr.addEventListener(`sessionstart`,()=>{this.hud.setWristAnchor(this.player.controllers.find(e=>e.userData.hand===`left`)||null)}),this.renderer.xr.addEventListener(`sessionend`,()=>{this.hud.setWristAnchor(null),this.renderer.setSize(innerWidth,innerHeight)}),addEventListener(`resize`,()=>{this.camera.aspect=innerWidth/innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(innerWidth,innerHeight)}),this._raycaster=new Ua,this._ray=new Vr,this._v1=new G,this._v2=new G,this._last=performance.now(),this._threats=[],this.net.connect(n).then(()=>{this.refreshBounties()}),this.refreshBounties(),window.__game=this,addEventListener(`beforeunload`,()=>{this.net.leave()}),this.renderer.setAnimationLoop(e=>this._loop(e))}get camera(){return this.player.camera}_loop(e){let t=Math.min((e-this._last)/1e3,.05);this._last=e;let n=e/1e3;this.world.update(t,n),this.player.update(t,n),this.net.isHost?(this._collectThreats(),this.fish.simulate(t,n,this._threats)):this.fish.updateRemote(t);for(let e of this.npcs)e&&e.update(t,n,this.player.bodyCenter.clone(),this.player.dead,this.inkClouds);for(let e=this.npcs.length-1;e>=0;e--)this.npcs[e]&&this.npcs[e].dead&&this._npcDied(this.npcs[e]);for(let e of this.remotes.values())e.update(t,n);for(let e=this.inkClouds.length-1;e>=0;e--)this.inkClouds[e].update(t)&&(this.inkClouds[e].dispose(),this.inkClouds.splice(e,1));this.fx.update(t),this._updateUI(t),this.hud.update(t),this.net.update(t,this.player);for(let e=this._bountyTimers.length-1;e>=0;e--)this._bountyTimers[e].t-=t,this._bountyTimers[e].t<=0&&(this._bountyTimers[e].cb(),this._bountyTimers.splice(e,1));this.renderer.render(this.scene,this.camera)}_collectThreats(){let e=this._threats;e.length=0,this.player.dead||(e.push(this.player.headWorld.clone()),e.push(this.player._handPos(`left`,new G)),e.push(this.player._handPos(`right`,new G)));for(let t of this.remotes.values())t.alive&&t._hasState&&(e.push(t.headPos.clone()),e.push(t.lHand.clone()),e.push(t.rHand.clone()))}_updateUI(e){this.boards.update();let t=null;this.renderer.xr.isPresenting&&this.player.xrHands.right?(this.player.xrHands.right.getWorldQuaternion(this._q1||=new lt),this.player.xrHands.right.getWorldPosition(this._v1),this._ray.origin.copy(this._v1),this._ray.direction.set(0,0,-1).applyQuaternion(this._q1),t=this._ray):this.renderer.xr.isPresenting||(this._raycaster.setFromCamera({x:0,y:0},this.camera),t=this._raycaster.ray);let n=t?this.boards.raycast(t):null;this.uiPointing=this.boards.cursorAt(n),this.uiClickRequested&&(this.uiClickRequested=!1,n&&(Ll.ui(),this.boards.click(n)))}doHitscan(e,t,n,r){let i=this.world.raycast(t,n,70),a=i?i.t:70,o=null;for(let e of this.remotes.values()){if(!e.alive||!e._hasState)continue;let r=this._raySphere(t,n,e.position,.55*e.scale);r!==null&&r<a&&(a=r,o={kind:`remote`,obj:e})}for(let e of this.npcs){if(e.dead)continue;let r=this._raySphere(t,n,e.bodyCenter,e.bodyRadius);r!==null&&r<a&&(a=r,o={kind:`npc`,obj:e})}let s=r.id===`sniper`?11532543:r.id===`minigun`?16765562:16773544;this.fx.tracer(t.clone(),n.clone(),a,s,r.id===`sniper`?.014:.024);let c=t.clone().addScaledVector(n,a);this.fx.impact(c,o?16738906:16765562,5),o&&(o.kind===`remote`?this.net.sendEv({t:`hit`,to:o.obj.id,dmg:r.dmg,w:r.id}):(o.obj.damage(r.dmg),Ll.impact())),this.net.sendEv({t:`shot`,o:[t.x,t.y,t.z],d:[n.x,n.y,n.z],w:r.id})}_raySphere(e,t,n,r){let i=e.x-n.x,a=e.y-n.y,o=e.z-n.z,s=i*t.x+a*t.y+o*t.z,c=i*i+a*a+o*o-r*r,l=s*s-c;if(l<0)return null;let u=-s-Math.sqrt(l);return u<.1?null:u}findPunchTarget(e,t,n){let r=null,i=t;for(let t of this.remotes.values()){if(!t.alive||!t._hasState)continue;let n=e.distanceTo(t.position);n<i&&(i=n,r={kind:`remote`,obj:t})}for(let t of this.npcs){if(t.dead)continue;let n=e.distanceTo(t.bodyCenter);n<i&&(i=n,r={kind:`npc`,obj:t})}return r}applyPunch(e,t,n,r){this.fx.impact(r.clone(),16756896,5),t.kind===`remote`?this.net.sendEv({t:`hit`,to:t.obj.id,dmg:n,w:`fists`}):(t.obj.damage(n),Ll.impact())}onNpcPunch(e){this.player.damage(e.dmg,`npc:`+e.id),this.hud.flashHit()}spawnInk(e,t=this.net.selfId){this.inkClouds.push(new Wl(this.scene,e,t)),this.fx.inkBurst(e.clone(),10)}onEvent(e,t){switch(e.t){case`hit`:e.to===this.net.selfId&&(this.player.damage(e.dmg,t),this.hud.flashHit());break;case`shot`:{let t=this._v1.set(e.o[0],e.o[1],e.o[2]),n=this._v2.set(e.d[0],e.d[1],e.d[2]).clone().normalize(),r=ol[e.w]||ol.glock,i=this.world.raycast(t,n,70),a=i?i.t:40;this.fx.tracer(t.clone(),n,a,16773544,r.id===`sniper`?.014:.024),this.fx.impact(t.clone().addScaledVector(n,a),16765562,4);break}case`ink`:this.spawnInk(new G(e.p[0],e.p[1],e.p[2]),t),Ll.ink();break;case`died`:{let t=this.remotes.get(e.victim);t&&(this.fx.inkBurst(t.position.clone(),14),this.fx.popup(`${t.name} a été liquidé !`,t.position.clone().add(new G(0,1.2,0)),{color:`#ff9a8a`,ttl:2.6})),e.killer===this.net.selfId&&this._killCredit(e.victim,null);break}case`grab`:{let t=this.fish.fish[e.id];t&&(t.holder=`net`);break}case`ate`:{let t=this.fish.fish[e.id];t&&(t.alive=!1,t.holder=null,t.mesh.visible=!1,this.net.isHost&&(t.respawnT=Y.fish.respawnDelay));break}}}onPeerJoin(e){if(this.remotes.has(e))return;let t=new Gl(this.scene,e,this,null);this.remotes.set(e,t),this.hud.toast(`Un poulpe entre dans le bassin`),Ll.coin(),this.refreshBounties()}onPeerLeave(e){let t=this.remotes.get(e);t&&(t.dispose(),this.remotes.delete(e),this.hud.toast(`Un poulpe a quitté le bassin`)),this.refreshBounties()}refreshBounties(){let e=Y.economy,t=this.player.level,n=[],r=[...this.remotes.values()].filter(e=>e.alive&&e._hasState).sort((e,t)=>Math.abs(e.fish-this.player.fishCount)-Math.abs(t.fish-this.player.fishCount));for(let t of r){if(n.length>=3)break;let r=Math.round((e.bountyBase+t.fish/Y.growth.levelPerFish*e.bountyPerLevel+t.fish*e.bountyPerFish)/5)*5;n.push({type:`peer`,id:t.id,name:t.name,level:Math.floor(t.fish/Y.growth.levelPerFish)+1,reward:r,status:`alive`,npc:!1})}for(;n.length<3;){let r=n.length,i=this.npcs[r];if(i&&!i.dead&&i.level>=t-2&&i.level<=t+2)n.push({type:`npc`,id:i.id,npcRef:i,name:i.name,level:i.level,reward:i.reward,status:i.dead?`done`:`alive`,npc:!0});else{let i=Math.max(1,t+(Math.random()<.5?0:1)-+(Math.random()<.3)),a=Math.round((e.bountyBase+(i-1)*e.bountyPerLevel)/5)*5,o=hl()+`_V`,s=new ql(this.scene,this.world,{name:o,level:i,reward:a});this.npcs[r]=s,n.push({type:`npc`,id:s.id,npcRef:s,name:o,level:i,reward:a,status:`alive`,npc:!0})}}for(let e=0;e<this.npcs.length;e++)this.npcs[e]&&!n.some(t=>t.npcRef===this.npcs[e])&&(this.npcs[e].dispose(),this.npcs[e]=null);this.bounties=n,this.boards.markDirty()}trackBounty(e){let t=this.bounties[e];if(!t||t.status!==`alive`)return;let n=null;if(t.type===`peer`){let e=this.remotes.get(t.id);e&&(n=e.position.clone())}else t.npcRef&&(n=t.npcRef.pos.clone());n&&(this.fx.popup(`CIBLE : `+t.name,n.add(new G(0,.8,0)),{color:`#ffd166`,ttl:2.2}),Ll.ui())}_killCredit(e,t){let n=Y.economy,r=t?this.bounties.find(e=>e.npcRef===t&&e.status===`alive`):this.bounties.find(t=>t.type===`peer`&&t.id===e&&t.status===`alive`);r?(this.player.money+=r.reward,this.hud.toast(`PRIME ENCAISSÉE : `+_l(r.reward)+`  (`+r.name+`)`),Ll.fanfare(),r.status=`done`,this._bountyTimers.push({t:n.bountyRefreshDelay,cb:()=>this.refreshBounties()})):(this.player.money+=n.killBonus,this.hud.toast(`Élimination ! +`+n.killBonus+` ¢`)),this.player.persist(),this.net.sendMeta(),this.boards.markDirty()}_npcDied(e){this.fx.inkBurst(e.pos.clone(),16),this.fx.popup(`VOYOU `+e.name+` neutralisé !`,e.pos.clone().add(new G(0,.8,0)),{color:`#ff9a8a`,ttl:2.4}),Ll.die(),e.dispose(),this.npcs=this.npcs.map(t=>t===e?null:t),this._killCredit(null,e),this._bountyTimers.push({t:Y.economy.bountyRefreshDelay,cb:()=>this.refreshBounties()})}tryBuy(e){this.player.buyWeapon(e)&&(this.hud.toast(`Arme achetée : `+ol[e].name),this.boards.markDirty())}},tb=e=>document.getElementById(e);navigator.xr&&navigator.xr.isSessionSupported&&navigator.xr.isSessionSupported(`immersive-vr`).then(e=>{tb(`btn-vr`).disabled=!e,tb(`btn-vr`).textContent=e?`PLONGER EN VR`:`VR INDISPONIBLE ICI`}).catch(()=>{});var nb=vl(Y.save);tb(`name`).value=nb&&nb.name||hl();var rb=new URLSearchParams(location.search).get(`room`);rb&&(tb(`room`).value=rb);var ib=!1;async function ab(e){if(ib)return;ib=!0,Ll.init(),Ll.resume();let t=gl(tb(`name`).value,hl()),n=(tb(`room`).value||Y.net.room).trim().toLowerCase().replace(/[^a-z0-9_-]/g,`-`)||Y.net.room;tb(`title`).style.display=`none`,tb(`loading`).style.display=`flex`;let r=null;if(e===`vr`)try{r=await navigator.xr.requestSession(`immersive-vr`,{optionalFeatures:[`local-floor`,`bounded-floor`,`hand-tracking`]})}catch(e){ib=!1,tb(`title`).style.display=`flex`,tb(`loading`).style.display=`none`,tb(`xr-error`).textContent=`Impossible de démarrer la VR : `+(e.message||e);return}let i=new eb(e,t,n);r&&await i.renderer.xr.setSession(r),tb(`loading`).style.display=`none`,tb(`hud`).style.display=e===`vr`?`none`:`block`,tb(`crosshair`).style.display=e===`vr`?`none`:`block`,e===`desktop`&&i.renderer.domElement.requestPointerLock?.(),i.hud.toast(`Bienvenue dans le bassin, `+t+` !`,4e3)}tb(`btn-vr`).addEventListener(`click`,()=>ab(`vr`)),tb(`btn-desktop`).addEventListener(`click`,()=>ab(`desktop`)),tb(`btn-mute`).addEventListener(`click`,()=>{Ll.init();let e=Ll.toggleMute();tb(`btn-mute`).textContent=e?`SON : OFF`:`SON : ON`});