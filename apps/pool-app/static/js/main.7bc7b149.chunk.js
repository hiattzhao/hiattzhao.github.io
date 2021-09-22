(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(21)},17:function(e,t,a){},19:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);a(11);var n=a(0),r=a.n(n),l=a(9),s=a.n(l),c=(a(17),a(7)),i=a(2),o=a(3),m=a(5),u=a(4),p=a(6),y=a(1),h=(a(19),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={players:[],player1:"",player2:"",winners:[]},a.addPlayers=a.addPlayers.bind(Object(y.a)(Object(y.a)(a))),a.savePlayer1=a.savePlayer1.bind(Object(y.a)(Object(y.a)(a))),a.savePlayer2=a.savePlayer2.bind(Object(y.a)(Object(y.a)(a))),a.recordWinner=a.recordWinner.bind(Object(y.a)(Object(y.a)(a))),a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"addPlayers",value:function(e){this.setState({players:Object(c.a)(this.state.players).concat([e])})}},{key:"savePlayer1",value:function(e){this.setState({player1:e})}},{key:"savePlayer2",value:function(e){this.setState({player2:e})}},{key:"recordWinner",value:function(e){this.state.winners.filter(function(t){return t.player===e}).length>0?(this.state.winners.find(function(t){return t.player===e}).wins++,this.setState({winners:Object(c.a)(this.state.winners)})):this.setState({winners:Object(c.a)(this.state.winners).concat([{player:e,wins:1}])})}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement("h2",null,"Pool Game Tracking App")),r.a.createElement("main",{className:"container"},r.a.createElement(d,{className:"row",addPlayers:this.addPlayers}),r.a.createElement(v,{className:"row",players:this.state.players}),r.a.createElement(b,{className:"row",players:this.state.players,savePlayer1:this.savePlayer1,savePlayer2:this.savePlayer2}),r.a.createElement(f,{className:"row",player1:this.state.player1,player2:this.state.player2,recordWinner:this.recordWinner}),r.a.createElement(E,{className:"row",winners:this.state.winners})))}}]),t}(n.Component)),d=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={player:""},a.handleChange=a.handleChange.bind(Object(y.a)(Object(y.a)(a))),a.createPlayer=a.createPlayer.bind(Object(y.a)(Object(y.a)(a))),a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"handleChange",value:function(e){this.setState({player:e.target.value})}},{key:"createPlayer",value:function(e){e.preventDefault(),this.props.addPlayers(this.state.player),this.setState({player:""})}},{key:"render",value:function(){return r.a.createElement("div",{className:"block--margin-top"},r.a.createElement("h3",null,"1. Create Players"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md"}),r.a.createElement("div",{className:"col-md"},r.a.createElement("form",{onSubmit:this.createPlayer},r.a.createElement("input",{className:"form-control",type:"text",size:"40",placeholder:"Type player's name then press ENTER",value:this.state.player,onChange:this.handleChange}))),r.a.createElement("div",{className:"col-md"})))}}]),t}(n.Component);function v(e){return r.a.createElement("ul",{className:"flex-container"},e.players.filter(function(e,t,a){return a.indexOf(e)===t}).map(function(e,t){return r.a.createElement("li",{key:t},e)}))}var b=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={player1:"",player2:""},a.selectPlayer1=a.selectPlayer1.bind(Object(y.a)(Object(y.a)(a))),a.selectPlayer2=a.selectPlayer2.bind(Object(y.a)(Object(y.a)(a))),a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"selectPlayer1",value:function(e){var t=this;this.setState({player1:e.target.value},function(){t.props.savePlayer1(t.state.player1)})}},{key:"selectPlayer2",value:function(e){var t=this;this.setState({player2:e.target.value},function(){t.props.savePlayer2(t.state.player2)})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"block--margin-top"},r.a.createElement("h3",null,"2. Select Players"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md"}),r.a.createElement("div",{className:"col-md"},r.a.createElement("select",{className:"form-control",value:this.state.player1,onChange:this.selectPlayer1},r.a.createElement("option",{value:""},"Choose player 1"),this.props.players.filter(function(e,t,a){return a.indexOf(e)===t}).filter(function(t){return t!==e.state.player2}).map(function(e,t){return r.a.createElement("option",{key:t,value:e},e)})),r.a.createElement("h4",null,"VS"),r.a.createElement("select",{className:"form-control",value:this.state.player2,onChange:this.selectPlayer2},r.a.createElement("option",{value:""},"Choose player 2"),this.props.players.filter(function(e,t,a){return a.indexOf(e)===t}).filter(function(t){return t!==e.state.player1}).map(function(e,t){return r.a.createElement("option",{key:t,value:e},e)}))),r.a.createElement("div",{className:"col-md"})))}}]),t}(n.Component),f=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={winner:"Choose winner"},a.selectWinner=a.selectWinner.bind(Object(y.a)(Object(y.a)(a))),a.recordScore=a.recordScore.bind(Object(y.a)(Object(y.a)(a))),a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"selectWinner",value:function(e){this.setState({winner:e.target.value})}},{key:"recordScore",value:function(){""!==this.state.winner&&"Choose winner"!==this.state.winner&&this.props.recordWinner(this.state.winner)}},{key:"render",value:function(){return r.a.createElement("div",{className:"block--margin-top"},r.a.createElement("h3",null,"3. Select Winner"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md"}),r.a.createElement("div",{className:"col-md"},r.a.createElement("select",{className:"form-control",value:this.state.winner,onChange:this.selectWinner},r.a.createElement("option",{value:""},"Choose winner"),r.a.createElement("option",{value:this.props.player1},this.props.player1),r.a.createElement("option",{value:this.props.player2},this.props.player2)),r.a.createElement("div",{className:"block--margin-top"},r.a.createElement("button",{className:"btn btn-success btn-lg btn-block",onClick:this.recordScore},"Record Score"))),r.a.createElement("div",{className:"col-md"})))}}]),t}(n.Component);function E(e){return r.a.createElement("div",{className:"block--margin-top"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md"}),r.a.createElement("div",{className:"col-md leaderboard"},r.a.createElement("h3",null,"Leaderboard"),r.a.createElement("hr",null),r.a.createElement("ol",null,e.winners.filter(function(e,t,a){return a.indexOf(e)===t}).sort(function(e,t){return t.wins-e.wins}).map(function(e,t){return r.a.createElement("li",{key:t},e.player," (",e.wins,")")}))),r.a.createElement("div",{className:"col-md"})))}var O=h;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,2,1]]]);
//# sourceMappingURL=main.7bc7b149.chunk.js.map