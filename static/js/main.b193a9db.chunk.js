(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],{20:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(6),i=n.n(r),o=n(4),s=n(0),b=function(e){var t=e.title,n=e.children;return Object(s.jsxs)("section",{children:[Object(s.jsx)("h2",{children:t}),n]})},d=function(e){var t=e.feedback,n=e.onLeaveFeedback;return Object(s.jsx)("button",{type:"button","data-feedback":t,onClick:n,children:t})},j=function(e){var t=e.options,n=e.onLeaveFeedback;return t.map((function(e){return Object(s.jsx)(d,{feedback:e,onLeaveFeedback:n},e)}))},u=function(e){var t=e.message;return Object(s.jsx)("p",{children:t})},l=n(2),O=n.n(l),h=function(e){var t=e.good,n=e.neutral,c=e.bad,a=e.total,r=e.positiveFeedbackPercentage;return Object(s.jsxs)(s.Fragment,{children:[a>0&&Object(s.jsxs)("ul",{children:[Object(s.jsxs)("li",{children:["Good: ",t]},O.a.generate()),Object(s.jsxs)("li",{children:["Neutral: ",n]},O.a.generate()),Object(s.jsxs)("li",{children:["Bad: ",c]},O.a.generate()),Object(s.jsxs)("li",{children:["Total: ",a]},O.a.generate()),Object(s.jsxs)("li",{children:["Positive feedback: ",r,"%"]},O.a.generate())]}),0===a&&Object(s.jsx)(u,{message:"No feedback given"})]})},f=["good","neutral","bad"];function k(){var e=Object(c.useState)(0),t=Object(o.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(0),i=Object(o.a)(r,2),d=i[0],u=i[1],l=Object(c.useState)(0),O=Object(o.a)(l,2),k=O[0],x=O[1],g=function(){return n+d+k};return Object(s.jsxs)("div",{children:[Object(s.jsx)(b,{title:"Please leave feedback",children:Object(s.jsx)(j,{options:f,onLeaveFeedback:function(e){var t=e.target.dataset.feedback;"good"!==t?"neutral"!==t?"bad"!==t||x((function(e){return e+1})):u((function(e){return e+1})):a((function(e){return e+1}))}})}),Object(s.jsx)(b,{title:"Statistics",children:Object(s.jsx)(h,{good:n,neutral:d,bad:k,total:g(),positiveFeedbackPercentage:function(){var e=g();return e?Math.round(n/e*100):0}()})})]})}i.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(k,{})}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.b193a9db.chunk.js.map