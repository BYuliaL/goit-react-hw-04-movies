(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[0],{65:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(30),s=n.n(r),i=n(11),o=n(2),h=n(12),l=n.n(h),u=n(15),j=n(7),d=n(8),b=n(10),p=n(9),v=n(14),m=n.n(v),O=n(0),f=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(j.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={movies:[]},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("https://api.themoviedb.org/3/trending/movie/day?api_key=bfc0b177c45bde411d6d53ddc48eee25");case 2:t=e.sent,console.log(t.data.results),this.setState({movies:t.data.results}),console.log(this.state.movies);case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.movies;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h1",{children:"Trending today"}),Object(O.jsx)("ul",{children:e.map((function(e){var t=e.title,n=e.id;return Object(O.jsx)("li",{children:Object(O.jsx)(i.b,{to:"/movies/".concat(n),children:t})},n)}))})]})}}]),n}(a.Component),x=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(j.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={query:""},e.handleChange=function(t){e.setState({query:t.currentTarget.value})},e.handleSubmit=function(t){t.preventDefault(),console.log(e.state.query),e.props.onSubmit(e.state.query),e.setState({query:""})},e}return Object(d.a)(n,[{key:"render",value:function(){return Object(O.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(O.jsx)("input",{value:this.state.query,onChange:this.handleChange,type:"text",placeholder:"Search movies"}),Object(O.jsx)("button",{type:"submit",children:Object(O.jsx)("span",{children:"Search"})})]})}}]),n}(a.Component),g=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(j.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={movies:[]},e.onChangeQuery=function(t){m.a.get("https://api.themoviedb.org/3/search/movie?api_key=".concat("bfc0b177c45bde411d6d53ddc48eee25","&query=").concat(t,"&language=en-US&page=1&include_adult=false")).then((function(t){e.setState({movies:t.data.results})}))},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state.movies;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h1",{children:"ffffffffff"}),Object(O.jsx)(x,{onSubmit:this.onChangeQuery}),Object(O.jsx)("ul",{children:e.map((function(e){var t=e.title,n=e.id;return Object(O.jsx)("li",{children:Object(O.jsx)(i.b,{to:"/movies/".concat(n),children:t})},n)}))})]})}}]),n}(a.Component),y=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(j.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={cast:[]},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(u.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.movieId,e.next=3,m.a.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=bfc0b177c45bde411d6d53ddc48eee25&language=en-US"));case 3:n=e.sent,console.log(n.data.cast),this.setState({cast:n.data.cast}),console.log(this.state.cast);case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.cast;return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("ul",{children:e.map((function(e){var t=e.name,n=e.profile_path;return Object(O.jsxs)("li",{children:[Object(O.jsx)("p",{children:t}),Object(O.jsx)("img",{src:"https://image.tmdb.org/t/p/w300/".concat(n),alt:t})]},t)}))})})}}]),n}(a.Component),w=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(j.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={reviews:[]},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(u.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"bfc0b177c45bde411d6d53ddc48eee25",t=this.props.match.params.movieId,e.next=4,m.a.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat("bfc0b177c45bde411d6d53ddc48eee25","&language=en-US&page=1"));case 4:n=e.sent,console.log(n.data.results),this.setState({reviews:n.data.results});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.reviews;return Object(O.jsx)(O.Fragment,{children:0===e.length?Object(O.jsx)("p",{children:"We don`t have any reviews for this movie =("}):Object(O.jsx)("ul",{children:e.map((function(e){var t=e.author,n=e.content;return Object(O.jsxs)("li",{children:[Object(O.jsx)("h3",{children:t}),Object(O.jsx)("p",{children:n})]},t)}))})})}}]),n}(a.Component),k=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(j.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={movie:[]},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(u.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.movieId,e.next=3,m.a.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=bfc0b177c45bde411d6d53ddc48eee25&language=en-US"));case 3:n=e.sent,console.log(n.data),this.setState({movie:n.data}),console.log(this.state.movie);case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.movie,t=10*e.vote_average;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("h1",{children:[e.title,"(",e.release_date,")"]}),Object(O.jsxs)("p",{children:["User Score: ",t,"%"]}),Object(O.jsx)("h2",{children:"Overview"}),Object(O.jsx)("p",{children:e.overview}),Object(O.jsx)("h2",{children:"Genres"}),Object(O.jsx)("img",{src:"https://image.tmdb.org/t/p/w300/".concat(e.poster_path),alt:e.title}),Object(O.jsx)("h2",{children:"Additional information"}),Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:Object(O.jsx)(i.c,{to:"".concat(this.props.match.url,"/cast"),children:"Cast"})}),Object(O.jsx)("li",{children:Object(O.jsx)(i.c,{to:"/movies/".concat(e.id,"/reviews"),children:"Reviews"})})]}),Object(O.jsx)(o.a,{path:"".concat(this.props.match.path,"/cast"),component:y}),Object(O.jsx)(o.a,{path:"".concat(this.props.match.path,"/reviews"),component:w})]})}}]),n}(a.Component),S=function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:Object(O.jsx)(i.c,{exact:!0,to:"/",className:"NavLink",activeClassName:"NavLink--active",children:"Home"})}),Object(O.jsx)("li",{children:Object(O.jsx)(i.c,{to:"/movies",className:"NavLink",activeClassName:"NavLink--active",children:"Movies"})})]}),Object(O.jsxs)(o.c,{children:[Object(O.jsx)(o.a,{exact:!0,path:"/",component:f}),Object(O.jsx)(o.a,{path:"/movies/:movieId",component:k}),Object(O.jsx)(o.a,{path:"/movies",component:g})]})]})};n(64),n(65);s.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(i.a,{children:Object(O.jsx)(S,{})})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.45d53c1d.chunk.js.map