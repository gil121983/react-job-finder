(this["webpackJsonpjobs-app"]=this["webpackJsonpjobs-app"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),l=a.n(o),c=(a(14),a(1)),i=a(2),s=a(4),u=a(3),p=a(6),d=a(5);var h={textAlign:"center",background:"rgb(50,50,50)",color:"white",borderBottom:"1px solid royalblue",borderTop:"1px solid rgb(50,50,50)"},m=function(){return r.a.createElement("header",{style:h},r.a.createElement("h1",null,"Job Finder"))},b=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={on:!1},a.toggle=function(e){e.preventDefault(),a.setState({on:!a.state.on})},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("button",{onClick:this.toggle,style:v},"Advanced Search"),this.state.on&&r.a.createElement("div",null,r.a.createElement("select",{style:g,onChange:this.props.handleResultsPerPageChange},r.a.createElement("option",{value:"default"},"Results per page"),r.a.createElement("option",null,"25"),r.a.createElement("option",null,"50"),r.a.createElement("option",null,"75"),r.a.createElement("option",null,"100")),r.a.createElement("input",{type:"text",onChange:this.props.handleLocationChange,placeholder:"Location",style:g}),r.a.createElement("button",{onClick:this.toggle,style:v},"Close Advanced Search")))}}]),t}(n.Component),g={margin:"5px",borderRadius:"3px",border:"none",width:"280px"},v={border:"none",background:"none",color:"royalblue"},y=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleWhatChange=function(e){a.setState({what:e.target.value})},a.handleCountryChange=function(e){a.setState({country:e.target.value})},a.handleLocationChange=function(e){a.setState({where:e.target.value})},a.handleResultsPerPageChange=function(e){a.setState({resultsPerPage:e.target.value})},a.handleSubmit=function(e){e.preventDefault();var t=a.state.what,n=a.state.country;if(t&&n){var r=a.state.where,o=a.state.resultsPerPage,l="https://api.adzuna.com/v1/api/jobs/".concat(n,"/search/1?app_id=").concat("4ba05dac","&app_key=").concat("4c1878a7bab48cce0966ca79d9929993","&results_per_page=").concat(o,"&what=").concat(t,"&where=").concat(r,"&content-type=application/json");console.log(l),a.props.getServer(l)}},a.state={what:"",country:"",resultsPerPage:"10",where:""},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.what,a=e.country;return r.a.createElement("div",{style:E},r.a.createElement("form",{style:f,onSubmit:this.handleSubmit},r.a.createElement(b,{handleLocationChange:this.handleLocationChange,handleResultsPerPageChange:this.handleResultsPerPageChange}),r.a.createElement("input",{type:"text",value:t,onChange:this.handleWhatChange,placeholder:"WHAT?",style:j}),r.a.createElement("select",{value:a,onChange:this.handleCountryChange,style:x},r.a.createElement("option",{value:"0"},"YOUR COUNTRY"),r.a.createElement("option",{value:"at"},"Austria"),r.a.createElement("option",{value:"au"},"Australia"),r.a.createElement("option",{value:"br"},"Brazil"),r.a.createElement("option",{value:"ca"},"Canada"),r.a.createElement("option",{value:"de"},"Denemark"),r.a.createElement("option",{value:"fr"},"France"),r.a.createElement("option",{value:"gb"},"England"),r.a.createElement("option",{value:"in"},"India"),r.a.createElement("option",{value:"it"},"Italy"),r.a.createElement("option",{value:"nl"},"Netherland"),r.a.createElement("option",{value:"nz"},"New Zealand"),r.a.createElement("option",{value:"pl"},"Poland"),r.a.createElement("option",{value:"ru"},"Russia"),r.a.createElement("option",{value:"sg"},"Singapore"),r.a.createElement("option",{value:"us"},"USA"),r.a.createElement("option",{value:"za"},"South Africa")),r.a.createElement("button",{type:"submit",style:C},"SEARCH")))}}]),t}(n.Component),E={background:"rgb(50,50,50)",border:"3px solid rgb(50,50,50)",display:"flex",justifyContent:"center"},f={border:"3px solid rgb(50,50,50)",textAlign:"center",width:"300px"},j={margin:"5px",borderRadius:"3px",border:"none",width:"280px",fontSize:"12px"},x={margin:"5px",borderRadius:"3px",border:"none",width:"135px",fontSize:"12px"},C={width:"135px",margin:"5px",background:"royalblue",borderRadius:"3px",border:"1px solid royalblue",color:"white",fontSize:"12px"},O=y,w=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={on:!1},a.toggle=function(){a.setState({on:!a.state.on})},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.description,a=e.redirectUrl;return r.a.createElement("div",null,this.state.on&&r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("p",{className:"desc",style:S},t)),r.a.createElement("div",null,r.a.createElement("a",{href:a,style:A},"contact"))),r.a.createElement("button",{onClick:this.toggle,style:k},"Show/Hide"))}}]),t}(n.Component),S={wordWrap:"break-word"},k={border:"none",color:"royalblue"},A={color:"royalblue",margin:"20px"};function P(e){return e.replace(/[<strong>]/g,"").replace(/[</strong>]/g,"")}var R=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.title,a=e.company,n=e.location,o=e.created,l=e.description,c=e.redirectUrl,i=o.replace("T"," at: ").slice(0,-3);return console.log(typeof l),r.a.createElement("div",{style:z},r.a.createElement("div",{style:_},r.a.createElement("h3",null," ",P(t)),r.a.createElement("p",{style:{color:"royalblue"}},a.display_name)),r.a.createElement("div",{style:N},r.a.createElement("p",null,n)),r.a.createElement("div",{className:"desc-container",style:U},r.a.createElement(w,{description:P(l),redirectUrl:c})),r.a.createElement("p",{style:{textAlign:"center",fontSize:"12px"}}," Created on: ",i," "))}}]),t}(n.Component),_={display:"flex",justifyContent:"space-around",margin:"3px"},z={background:"white",boxShadow:"0px 0px 10px rgba(50,50,50,0.2)",margin:"10px",borderRadius:"8px",transition:"0.9s ease",alignSelf:"center"},U={textAlign:"center",transition:"0.9s ease"},N={textAlign:"center"},W=R,L=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return console.log(this.props.jobs),this.props.jobs.map((function(e){return r.a.createElement(W,{key:e.id,title:e.title,company:e.company,salary_is_predicted:e.salary_is_predicted,salary:e.salary,location:e.location.display_name,created:e.created,description:e.description,redirectUrl:e.redirect_url})}))}}]),t}(n.Component),B=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={jobs:[]},e.getServer=e.getServer.bind(Object(p.a)(e)),e}return Object(d.a)(t,e),Object(i.a)(t,[{key:"getServer",value:function(e){var t=this;fetch(e).then((function(e){return e.json()})).then((function(e){t.setState({jobs:e.results})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(m,null),r.a.createElement(O,{getServer:this.getServer}),r.a.createElement(L,{jobs:this.state.jobs}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.4b7e297d.chunk.js.map