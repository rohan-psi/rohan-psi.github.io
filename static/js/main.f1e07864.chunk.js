(this["webpackJsonpstripe-gpay"]=this["webpackJsonpstripe-gpay"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},,function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),s=n.n(r),a=n(4),o=n.n(a),i=(n(13),n(2)),c=n.n(i),p=n(5),u=n(7),l=(n(15),n(16),n(1)),d=function(e){var t=Object(l.useStripe)(),n=Object(r.useState)(null),a=Object(u.a)(n,2),o=a[0],i=a[1],d=function(){var n=Object(p.a)(c.a.mark((function n(r){var s,a,o,i,p;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return s={payment_method:r.paymentMethod.id,shipping:{name:r.shippingAddress.recipient,phone:r.shippingAddress.phone,address:{line1:r.shippingAddress.addressLine[0],city:r.shippingAddress.city,postal_code:r.shippingAddress.postalCode,state:r.shippingAddress.region,country:r.shippingAddress.country}}},n.next=3,fetch("/.netlify/functions/create-payment-intent",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({paymentDetails:s})}).then((function(e){return e.json()}));case 3:if(!(a=n.sent).error){n.next=9;break}console.log(a.error),r.complete("fail"),n.next=19;break;case 9:return r.complete("success"),n.next=12,t.confirmCardPayment(a.paymentIntent.client_secret);case 12:if(o=n.sent,i=o.error,p=o.paymentIntent,!i){n.next=18;break}return console.log(i),n.abrupt("return");case 18:"succeeded"===p.status?e.history.push("/success"):console.warn("Unexpected status: ".concat(p.status," for ").concat(p));case 19:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(r.useEffect)((function(){if(t){var e=t.paymentRequest({country:"US",currency:"usd",total:{label:"Demo total",amount:1350},requestPayerName:!0,requestPayerEmail:!0,requestShipping:!0,shippingOptions:[{id:"standard-global",label:"Global shipping",detail:"Arrives in 5 to 7 days",amount:350}]});e.canMakePayment().then((function(t){t&&(e.on("paymentmethod",d),i(e))}))}}),[t]),o?s.a.createElement(l.PaymentRequestButtonElement,{options:{paymentRequest:o}}):"Insert your form or button component here."};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var m=n(6),h=Object(m.a)("pk_test_51H4jvNKcGN7AwZPA8UzruyuMubkqRcW3ea3SToljtumlv6NluktNZUZBevAI9KtNmxmqvdzAc9PGwYUhrDmKBUFa00GSDKZIIX");o.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(l.Elements,{stripe:h},s.a.createElement(d,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.f1e07864.chunk.js.map