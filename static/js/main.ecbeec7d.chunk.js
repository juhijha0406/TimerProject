(this.webpackJsonptimer=this.webpackJsonptimer||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var s=n(1),i=n(7),a=n.n(i),c=(n(13),n(2)),l=n(3),o=n(5),r=n(4),d=(n(14),n(8)),u=n(0),h=function(e){Object(o.a)(n,e);var t=Object(r.a)(n);function n(e){var s;return Object(c.a)(this,n),(s=t.call(this,e)).state={days:0,hours:0,minutes:0,seconds:0},console.log("this.probs",s.props),s}return Object(l.a)(n,[{key:"componentWillMount",value:function(){this.getTimeUntil(this.props.deadline)}},{key:"componentDidMount",value:function(){var e=this;setInterval((function(){return e.getTimeUntil(e.props.deadline)}),1e3)}},{key:"leading0",value:function(e){return e<10?"0"+e:e}},{key:"getTimeUntil",value:function(e){var t=Date.parse(e)-Date.parse(new Date);console.log("time",t);var n=Math.floor(t/1e3%60),s=Math.floor(t/1e3/60%60),i=Math.floor(t/36e5%24),a=Math.floor(t/864e5);console.log(n,s,i,a),this.setState(Object(d.a)({days:a,hours:i,minutes:s,seconds:n},"seconds",n))}},{key:"render",value:function(){return Object(u.jsx)("div",{children:Object(u.jsxs)("div",{className:"style",children:[Object(u.jsxs)("div",{className:"dis1 style1",children:[this.leading0(this.state.days),"days"]}),Object(u.jsxs)("div",{className:"dis1 style1",children:[this.leading0(this.state.hours),"hours"]}),Object(u.jsxs)("div",{className:"dis1 style1",children:[this.leading0(this.state.minutes),"minutes"]}),Object(u.jsxs)("div",{className:"dis1 style1",children:[this.leading0(this.state.seconds),"seconds"]})]})})}}]),n}(s.Component),j=function(e){Object(o.a)(n,e);var t=Object(r.a)(n);function n(e){var s;return Object(c.a)(this,n),(s=t.call(this,e)).state={deadline:"December 31,2021",newDeadline:""},s}return Object(l.a)(n,[{key:"changeDeadline",value:function(){console.log("state",this.state),this.setState({deadline:this.state.newDeadline})}},{key:"render",value:function(){var e=this;return Object(u.jsx)("div",{className:"back",children:Object(u.jsxs)("div",{className:"container back",children:[Object(u.jsxs)("div",{className:"appTitle",children:[" CountDown to ",this.state.deadline]}),Object(u.jsx)("div",{children:Object(u.jsx)(h,{deadline:this.state.deadline})}),Object(u.jsxs)("div",{className:"input",children:[Object(u.jsx)("input",{className:"mar",placeholder:"enter new date(Year date,month)",onChange:function(t){return e.setState({newDeadline:t.target.value})}}),Object(u.jsx)("button",{className:"btn",onClick:function(){return e.changeDeadline()},children:"Submit"})]})]})})}}]),n}(s.Component),b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,s=t.getFID,i=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),s(e),i(e),a(e),c(e)}))};a.a.render(Object(u.jsx)("div",{children:Object(u.jsx)(j,{})}),document.getElementById("root")),b()}},[[16,1,2]]]);
//# sourceMappingURL=main.ecbeec7d.chunk.js.map