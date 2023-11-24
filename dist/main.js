(()=>{"use strict";function t(e){if(e.length<2)return;const l=e.slice(0,e.length/2),r=e.slice(Math.floor(e.length/2-e.length));t(l),t(r);let o=0,i=0,h=0;const n=e;for(;o<l.length&&i<r.length;)l[o]<r[i]?n[h++]=l[o++]:n[h++]=r[i++];for(;o<l.length;o++)n[h++]=l[o];for(;i<r.length;i++)n[h++]=r[i];e=n}class e{constructor(t,e,l){this.value=t||null,this.left=e||null,this.right=l||null}}function l(t,e="",r=!0){null!==t&&(null!==t.right&&l(t.right,`${e}${r?"│   ":"    "}`,!1),console.log(`${e}${r?"└── ":"┌── "}${t.value}`),null!==t.left&&l(t.left,`${e}${r?"    ":"│   "}`,!0))}const r=new class{constructor(t){this.array=t,this.sortArray(),this.root=this.buildTree(t)}sortArray(){!function(t){for(let e=0;e<t.length;e++)for(let l=e+1;l<t.length;l++)t[e]===t[l]&&(t.splice(l,1),l--)}(this.array),t(this.array)}buildTree(t){const l=Math.floor(t.length/2),r=t[l];if(t.length<1)return;const o=this.buildTree(t.slice(0,l)),i=this.buildTree(t.slice(l+1));return new e(r,o,i)}insert(t,l){t!==l.value&&(t<l.value?(null===l.left&&(l.left=new e(t)),this.insert(t,l.left)):l.value<t&&(null===l.right&&(l.right=new e(t)),this.insert(t,l.right)))}delete(t,e){return t<e.value?(e.left=this.delete(t,e.left),e):e.value<t?(e.right=this.delete(t,e.right),e):t===e.value?null!==e.left&&null!==e.right?(e.left.right=e.right,e=e.left):e=null!==e.left?e.left:null!==e.right?e.right:null:void 0}find(t,e=this.root){return t===e.value||null===e?e:t<e.value?this.find(t,e.left):e.value<t?this.find(t,e.right):void 0}height(t){if(null===t)return 0;const e=this.height(t.left),l=this.height(t.right);return e>l?e+1:l+1}depth(t,e=this.root,l=0){if(null!==t&&null!==e)return t===e?l:t.value<e.value?this.depth(t,e.left,++l):t.value>e.value?this.depth(t,e.right,++l):void 0}levelOrder(t,e=[],l=[],r=this.root){if(null!==r){for(e.push(r.value),l.push(r.left),l.push(r.right),t&&t(r);l.length;){const r=l.shift();this.levelOrder(t,e,l,r)}return t?void 0:e}}inOrder(t=[],e=[],l=this.root){if(null!==l){for(this.inOrder(t,e,l.left),e.push(l.value),this.inOrder(t,e,l.right);e.length>0;)t.push(e.shift());return t}}preOrder(t=[],e=[],l=this.root){if(null!==l){for(e.push(l.value),this.preOrder(t,e,l.left),this.preOrder(t,e,l.right);e.length>0;)t.push(e.shift());return t}}postOrder(t=[],e=[],l=this.root){if(null!==l){for(this.postOrder(t,e,l.left),this.postOrder(t,e,l.right),e.push(l.value);e.length>0;)t.push(e.shift());return t}}}([1,7,4,23,8,9,4,3,5,7,9,67,6345,324]);console.log(r.array),console.log(r.root),l(r.root),r.insert(12,r.root),r.insert(68,r.root),r.insert(2,r.root),r.insert(486,r.root),console.log(r.root),l(r.root),r.delete(67,r.root),r.delete(4,r.root),r.delete(6345,r.root),r.delete(2,r.root),console.log(r.root),l(r.root),console.log(r.find(23)),console.log(r.height(r.root)),console.log(r.height(r.find(23))),console.log(r.depth(r.find(486))),console.log(r.depth(r.find(7))),console.log(r.levelOrder()),console.log(r.inOrder()),console.log(r.preOrder()),console.log(r.postOrder())})();