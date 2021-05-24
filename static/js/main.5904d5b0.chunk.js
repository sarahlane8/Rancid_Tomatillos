(this.webpackJsonprancid_tomatillos=this.webpackJsonprancid_tomatillos||[]).push([[0],{18:function(e,t,r){},25:function(e,t,r){},26:function(e,t,r){},36:function(e,t,r){},37:function(e,t,r){},38:function(e,t,r){},39:function(e,t,r){},40:function(e,t,r){"use strict";r.r(t);var i=r(1),n=r(19),a=r.n(n),s=(r(25),r(9)),o=r(10),c=r(12),l=r(11),h=(r(26),r(7)),v=r(0),u=function(e){var t=e.id,r=e.title,i=e.img,n=e.rating,a=e.clearMovies;return Object(v.jsxs)("article",{className:"movieCard",children:[Object(v.jsx)(h.b,{to:"/movies/".concat(t),children:Object(v.jsx)("img",{src:i,alt:"movie poster",onClick:function(){return a()}})}),Object(v.jsxs)("div",{className:"titleContainer",children:[Object(v.jsx)("p",{className:"title",children:r}),Object(v.jsxs)("div",{className:"ratingContainer",children:[Object(v.jsx)("i",{className:"far fa-star",style:{color:"#fcbf49"}}),Object(v.jsx)("p",{className:"rating",children:n.toFixed(1)})]})]})]})},d=(r(36),function(e){var t=e.movieData,r=e.clearMovies,i=t.map((function(e){return Object(v.jsx)(u,{id:e.id,title:e.title,img:e.poster_path,rating:e.average_rating,clearMovies:r},e.id)}));return Object(v.jsx)("section",{className:"cardContainer",children:i})}),j=(r(37),r(38),function(){return Object(v.jsxs)("div",{className:"noMatchContainer",children:[Object(v.jsx)("h1",{children:"Sorry, page not found!"}),Object(v.jsx)(h.b,{to:"/",children:Object(v.jsx)("button",{children:"GO TO HOMEPAGE"})})]})}),f=function(e){Object(c.a)(r,e);var t=Object(l.a)(r);function r(){var e;return Object(s.a)(this,r),(e=t.call(this)).componentDidMount=function(t){(function(e){return fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies/".concat(e)).then((function(e){return e.json()}))})(e.props.movieId).then((function(t){var r=function(e){var t=e.movie;return{id:t.id,title:t.title,backdrop_path:t.backdrop_path,release_date:t.release_date,overview:t.overview,average_rating:t.average_rating,genres:t.genres[0]}}(t);e.setState({singleMovie:r})})).catch((function(t){return e.setState({error:"Something went wrong!"})})),function(e){return fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies/".concat(e,"/videos")).then((function(e){return e.json()}))}(e.props.movieId).then((function(t){var r=t.videos[0].key;e.setState({singleVideoKey:r})})).catch((function(t){return e.setState({error:"Unable to load video!"})}))},e.state={singleMovie:{},singleVideoKey:"",error:""},e}return Object(o.a)(r,[{key:"render",value:function(){var e=this;if(!this.state.singleVideoKey&&!this.state.error)return Object(v.jsx)("h1",{children:"Loading content..."});var t=new Date("".concat(this.state.singleMovie.release_date)).getFullYear(),r={backgroundImage:"linear-gradient(to right, #1C1D1E, 60%, transparent),\n         url(".concat(this.state.singleMovie.backdrop_path,")")};return this.state.error?Object(v.jsx)(j,{}):Object(v.jsxs)("section",{className:"movieDetailsContainer",style:r,children:[Object(v.jsx)(h.b,{to:"/",style:{textDecoration:"none",color:"white"},children:Object(v.jsx)("i",{className:"fas fa-arrow-circle-left fa-3x",onClick:function(){return e.props.clearMovies()}})}),Object(v.jsx)("h2",{className:"movieTitle",children:this.state.singleMovie.title}),Object(v.jsxs)("div",{className:"infoContainer",children:[this.state.singleMovie.average_rating&&Object(v.jsxs)("h2",{children:["\u2b50\ufe0f ",this.state.singleMovie.average_rating.toFixed(1)]}),Object(v.jsx)("h2",{children:t}),Object(v.jsx)("h2",{children:this.state.singleMovie.genres})]}),Object(v.jsxs)("section",{className:"overviewContainer",children:[Object(v.jsx)("div",{className:"overview",children:Object(v.jsx)("p",{children:this.state.singleMovie.overview})}),Object(v.jsx)("iframe",{src:"https://youtube.com/embed/".concat(this.state.singleVideoKey),alt:"trailer-iframe-video-player",title:"trailer-video-player",height:"400",width:"600"})]})]})}}]),r}(i.Component),b=(r(18),function(e){Object(c.a)(r,e);var t=Object(l.a)(r);function r(){var e;return Object(s.a)(this,r),(e=t.call(this)).filterMoviesBySearch=function(t){e.setState({searchBarValue:t.target.value},(function(){e.props.filterMovies(e.state.searchBarValue)}))},e.clearInput=function(t){t.preventDefault(),e.setState({searchBarValue:""},(function(){return e.props.clearFilteredMovies()}))},e.state={searchBarValue:""},e}return Object(o.a)(r,[{key:"render",value:function(){var e=this;return Object(v.jsxs)("form",{className:"searchBar",children:[Object(v.jsx)("input",{type:"text",placeholder:"Search Movies by Title",value:this.state.searchBarValue,onChange:function(t){return e.filterMoviesBySearch(t)}}),Object(v.jsx)("i",{className:"far fa-times-circle fa-2x",onClick:function(t){return e.clearInput(t)}})]})}}]),r}(i.Component)),m=function(e){var t=e.clearFilteredMovies,r=e.filterMovies;return Object(v.jsxs)("div",{className:"navBar",children:[Object(v.jsx)("h1",{children:"Rancid Tomatillos"}),Object(v.jsx)(b,{clearFilteredMovies:t,filterMovies:r})]})},p=(r(39),r(2)),O=function(e){Object(c.a)(r,e);var t=Object(l.a)(r);function r(){var e;return Object(s.a)(this,r),(e=t.call(this)).componentDidMount=function(){fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies").then((function(e){return e.json()})).then((function(t){var r=t.movies.map((function(e){return{id:e.id,poster_path:e.poster_path,title:e.title,average_rating:e.average_rating}}));e.setState({movieData:r})})).catch((function(t){return e.setState({error:"Something went wrong, try again later!"})}))},e.filterMovies=function(t){var r=e.state.movieData.filter((function(e){return e.title.toLowerCase().includes(t.toLowerCase())}));e.setState({filteredMovies:r},(function(){return e.showError(t)}))},e.showError=function(t){t&&(e.state.filteredMovies.length&&e.setState({showError:!1}),!e.state.filteredMovies.length&&e.setState({showError:!0}))},e.clearFilteredMovies=function(){e.setState({filteredMovies:[],showError:!1})},e.state={movieData:[],error:"",filteredMovies:[],showError:!1},e}return Object(o.a)(r,[{key:"render",value:function(){var e=this;return Object(v.jsx)("main",{className:"App",children:Object(v.jsxs)(p.c,{children:[Object(v.jsx)(p.a,{exact:!0,path:"/",render:function(){var t=e.state.filteredMovies.length?e.state.filteredMovies:e.state.movieData;return Object(v.jsxs)("div",{children:[Object(v.jsx)(m,{clearFilteredMovies:e.clearFilteredMovies,filterMovies:e.filterMovies}),!e.state.movieData.length&&!e.state.error&&Object(v.jsx)("h2",{children:"Loading"}),e.state.error&&Object(v.jsx)("h3",{children:e.state.error}),e.state.showError&&Object(v.jsx)("h1",{children:"No movies match your search criteria!"}),!e.state.showError&&Object(v.jsx)(d,{movieData:t,clearMovies:e.clearFilteredMovies})]})}}),Object(v.jsx)(p.a,{exact:!0,path:"/movies/:movies_id",render:function(t){var r=t.match.params.movies_id;return Object(v.jsx)(f,{movieId:r,clearMovies:e.clearFilteredMovies})}}),Object(v.jsx)(p.a,{render:function(){return Object(v.jsx)(j,{})}})]})})}}]),r}(i.Component),g=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,41)).then((function(t){var r=t.getCLS,i=t.getFID,n=t.getFCP,a=t.getLCP,s=t.getTTFB;r(e),i(e),n(e),a(e),s(e)}))},x=Object(v.jsx)(h.a,{children:Object(v.jsx)(O,{})});a.a.render(x,document.getElementById("root")),g()}},[[40,1,2]]]);
//# sourceMappingURL=main.5904d5b0.chunk.js.map