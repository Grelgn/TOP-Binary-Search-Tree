(()=>{"use strict";function t(e){if(e.length<2)return;const l=e.slice(0,e.length/2),o=e.slice(Math.floor(e.length/2-e.length));t(l),t(o);let r=0,n=0,i=0;const h=e;for(;r<l.length&&n<o.length;)l[r]<o[n]?h[i++]=l[r++]:h[i++]=o[n++];for(;r<l.length;r++)h[i++]=l[r];for(;n<o.length;n++)h[i++]=o[n];e=h}class e{constructor(t,e,l){this.value=t||null,this.left=e||null,this.right=l||null}}function l(t,e="",o=!0){null!==t&&(null!==t.right&&l(t.right,`${e}${o?"│   ":"    "}`,!1),console.log(`${e}${o?"└── ":"┌── "}${t.value}`),null!==t.left&&l(t.left,`${e}${o?"    ":"│   "}`,!0))}const o=new class{constructor(t){this.array=t,this.sortArray(),this.root=this.buildTree(t)}sortArray(){!function(t){for(let e=0;e<t.length;e++)for(let l=e+1;l<t.length;l++)t[e]===t[l]&&(t.splice(l,1),l--)}(this.array),t(this.array)}buildTree(t){const l=Math.floor(t.length/2),o=t[l];if(t.length<1)return;const r=this.buildTree(t.slice(0,l)),n=this.buildTree(t.slice(l+1));return new e(o,r,n)}insert(t,l){t!==l.value&&(t<l.value?(null===l.left&&(l.left=new e(t)),this.insert(t,l.left)):l.value<t&&(null===l.right&&(l.right=new e(t)),this.insert(t,l.right)))}delete(t,e){return t<e.value?(e.left=this.delete(t,e.left),e):e.value<t?(e.right=this.delete(t,e.right),e):t===e.value?null!==e.left&&null!==e.right?(e.left.right=e.right,e=e.left):e=null!==e.left?e.left:null!==e.right?e.right:null:void 0}find(t,e=this.root){return t===e.value||null===e?e:t<e.value?this.find(t,e.left):e.value<t?this.find(t,e.right):void 0}height(t){if(null===t)return 0;const e=this.height(t.left),l=this.height(t.right);return e>l?e+1:l+1}depth(t,e=this.root,l=0){if(null!==t&&null!==e)return t===e?l:t.value<e.value?this.depth(t,e.left,++l):t.value>e.value?this.depth(t,e.right,++l):void 0}levelOrder(t=[],e=[],l=this.root){if(null!==l){for(t.push(l.value),e.push(l.left),e.push(l.right);e.length;){const l=e.shift();this.levelOrder(t,e,l)}return t}}}([1,7,4,23,8,9,4,3,5,7,9,67,6345,324]);console.log(o.array),console.log(o.root),l(o.root),o.insert(12,o.root),o.insert(68,o.root),o.insert(2,o.root),o.insert(486,o.root),console.log(o.root),l(o.root),o.delete(67,o.root),o.delete(4,o.root),o.delete(6345,o.root),o.delete(2,o.root),console.log(o.root),l(o.root),console.log(o.find(23)),console.log(o.height(o.root)),console.log(o.height(o.find(23))),console.log(o.depth(o.find(486))),console.log(o.depth(o.find(7))),console.log(o.levelOrder())})();