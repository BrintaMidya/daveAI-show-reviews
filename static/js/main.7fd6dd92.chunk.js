(this["webpackJsonpdisplay-reviews"]=this["webpackJsonpdisplay-reviews"]||[]).push([[0],{14:function(e,t,s){"use strict";s.r(t);var n=s(0),i=s(1),r=s.n(i),a=s(8),c=s.n(a),l=s(2),o=s(3),h=s(5),u=s(4),m=function(e){Object(h.a)(s,e);var t=Object(u.a)(s);function s(){var e;Object(l.a)(this,s);for(var i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={showMore:!1},e.getStars=function(e){for(var t=[],s=0;s<e;s++)t.push(Object(n.jsx)("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-star-fill",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:Object(n.jsx)("path",{d:"M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"})},s));for(var i=e;i<5;i++)t.push(Object(n.jsx)("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",className:"bi bi-star",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:Object(n.jsx)("path",{fillRule:"evenodd",d:"M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"})},i));return Object(n.jsx)("span",{children:t})},e}return Object(o.a)(s,[{key:"render",value:function(){var e=this;return Object(n.jsx)("div",{className:"card mb-3",children:Object(n.jsxs)("div",{className:"list-group-item",children:[Object(n.jsxs)("div",{className:"d-flex w-100 justify-content-between",children:[Object(n.jsx)("h5",{className:"mb-1",children:this.props.title}),Object(n.jsx)("small",{className:"text-muted",children:this.props.friend?this.props.name:"user"})]}),Object(n.jsx)("p",{className:"mb-1",children:this.props.comment}),Object(n.jsxs)("small",{className:"text-muted",children:["usefulness : ","   ",this.props.usefulness]}),Object(n.jsxs)("div",{className:"list-group mt-2",children:[Object(n.jsx)("div",{className:"list-group-item",children:Object(n.jsxs)("p",{className:"mb-1",children:["Overall Ratings : ","   ",this.getStars(this.props.ratings.Overall)]})}),this.state.showMore?Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:"list-group-item",children:Object(n.jsxs)("p",{className:"mb-1",children:["Delivery Time : ","   ",this.getStars(this.props.ratings.delivery_time)]})}),Object(n.jsx)("div",{className:"list-group-item",children:Object(n.jsxs)("p",{className:"mb-1",children:["Discounts and Offers : ","   ",this.getStars(this.props.ratings.discounts_and_offers)]})}),Object(n.jsx)("div",{className:"list-group-item",children:Object(n.jsxs)("p",{className:"mb-1",children:["Matches Description : ","   ",this.getStars(this.props.ratings.matches_description)]})}),Object(n.jsx)("div",{className:"list-group-item",children:Object(n.jsxs)("p",{className:"mb-1",children:["Matches Photo : ","   ",this.getStars(this.props.ratings.matches_photo)]})}),Object(n.jsx)("div",{className:"list-group-item",children:Object(n.jsxs)("p",{className:"mb-1",children:["Packaging : ","   ",this.getStars(this.props.ratings.packaging)]})}),Object(n.jsx)("div",{className:"list-group-item",children:Object(n.jsxs)("p",{className:"mb-1",children:["Price : ","   ",this.getStars(this.props.ratings.price)]})})]}):"",Object(n.jsx)("a",{onClick:function(){e.state.showMore?e.setState({showMore:!1}):e.setState({showMore:!0})},href:"#!",children:this.state.showMore?"show less":"show more"})]})]})})}}]),s}(r.a.Component),j=function(e){if(e.loading)return Object(n.jsx)("div",{className:"container d-flex justify-content-around mt-5 ",children:Object(n.jsx)("div",{className:"spinner-border text-primary",role:"status",style:{width:"3rem",height:"3rem"},children:Object(n.jsx)("span",{className:"sr-only",children:"Loading..."})})});var t=e.reviews.map((function(e){return Object(n.jsx)(m,{title:e.title,comment:e.comment,confStartDate:e.confStartDate,usefulness:e.usefulness,name:e.reviewer.name,ratings:e.ratings,friend:e.friend},e.user_id+toString(e.reviewer.timestamp))}));return Object(n.jsx)("div",{className:"container d-flex justify-content-around mt-5 ",children:Object(n.jsx)("div",{className:"list-group",children:t})})},d=s(7),v=function(e){Object(h.a)(s,e);var t=Object(u.a)(s);function s(){var e;Object(l.a)(this,s);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={productID:null,viewerID:null,ratingBtnActive:!1,UsefulnessBtnActive:!1,connectionBtnActive:!1},e.handleSubmit=function(t){t.preventDefault(0),e.state.productID&&e.state.viewerID?e.props.onSearchSubmit(e.state.productID,e.state.viewerID):console.log(e.state.productID,e.state.viewerID)},e.onClickRating=function(){e.setState({ratingBtnActive:!0,UsefulnessBtnActive:!1,connectionBtnActive:!1}),e.props.sortByRating()},e.onClickConnection=function(){e.setState({ratingBtnActive:!1,UsefulnessBtnActive:!1,connectionBtnActive:!0}),e.props.sortByConnection()},e.onClickUsefulness=function(){e.setState({ratingBtnActive:!1,UsefulnessBtnActive:!0,connectionBtnActive:!1}),e.props.sortByUsefulness()},e}return Object(o.a)(s,[{key:"render",value:function(){var e=this;return Object(n.jsxs)("div",{children:[Object(n.jsx)("nav",{className:"nav justify-content-center",children:Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsxs)("form",{className:"form-inline mt-3",onSubmit:this.handleSubmit,children:[Object(n.jsxs)("select",{className:"custom-select my-1 mr-sm-2",defaultValue:this.state.productID,onChange:function(t){e.setState({productID:t.target.value})},children:[Object(n.jsx)("option",{children:"Select Product ID"}),Object(d.a)(Array(20).keys()).map((function(e){return Object(n.jsxs)("option",{value:e+1,children:["Product ",e+1]},e+1)}))]}),Object(n.jsxs)("select",{className:"custom-select my-1 mr-sm-2",defaultValue:this.state.viewerID,onChange:function(t){e.setState({viewerID:t.target.value})},children:[Object(n.jsx)("option",{children:"Select Viewer ID"}),Object(d.a)(Array(10).keys()).map((function(e){return Object(n.jsxs)("option",{value:e+1,children:["Viewer ",e+1]},e+1)}))]}),Object(n.jsx)("button",{type:"submit",className:"btn btn-primary my-1",children:"Submit"})]})})}),Object(n.jsxs)("nav",{className:"nav nav justify-content-center mt-3",children:[Object(n.jsx)("li",{className:"nav-item mr-2 ml-2 mt-2",children:Object(n.jsx)("h5",{children:"Sort By"})}),Object(n.jsx)("li",{className:"nav-item mr-2 ml-2 mt-2",children:Object(n.jsx)("button",{onClick:this.onClickRating,type:"button",className:this.state.ratingBtnActive?"btn btn-primary":"btn btn-outline-primary",children:"Rating"})}),Object(n.jsx)("li",{className:"nav-item mr-2 ml-2 mt-2",children:Object(n.jsx)("button",{onClick:this.onClickConnection,type:"button",className:this.state.connectionBtnActive?"btn btn-primary":"btn btn-outline-primary",children:"Connection"})}),Object(n.jsx)("li",{className:"nav-item mr-2 ml-2 mt-2",children:Object(n.jsx)("button",{onClick:this.onClickUsefulness,type:"button",className:this.state.UsefulnessBtnActive?"btn btn-primary":"btn btn-outline-primary",children:"Usefulness"})})]})]})}}]),s}(r.a.Component),b=function(e){for(var t=e.currentPage,s=e.reviewsPerPage,i=e.totalReviews,r=e.paginate,a=[],c=1;c<=Math.ceil(i/s);c++)a.push(c);return Object(n.jsx)("nav",{className:"nav nav justify-content-center",children:Object(n.jsx)("div",{className:"nav-item",children:Object(n.jsx)("div",{className:"pagination mt-5 mb-5",children:a.map((function(e){return Object(n.jsx)("li",{className:t===e?"page-item active":"page-item",children:Object(n.jsx)("a",{onClick:function(){return r(e)},href:"#/",className:"page-link",children:e})},e)}))})})})},p=function(e){Object(h.a)(s,e);var t=Object(u.a)(s);function s(){var e;Object(l.a)(this,s);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={reviews:[],loading:!1,currentPage:1,reviewsPerPage:3},e.fetchReviews=function(t,s){e.setState({loading:!0});var n="http://www.i2ce.in/reviews/".concat(t,"/").concat(s);console.log("fetching data from",n),fetch("https://cors-anywhere.herokuapp.com/"+n).then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({reviews:t.reviews}),e.setState({loading:!1})})).catch((function(e){console.error("There has been a problem with your fetch operation:",e),alert("Error feching data from server ! please try again later")}))},e.paginate=function(t){return e.setState({currentPage:t})},e.sortByRating=function(){e.setState({loading:!0});var t=e.state.reviews;t.sort((function(e,t){return e.ratings.Overall<t.ratings.Overall?1:-1})),e.setState({reviews:t,currentPage:1,loading:!1})},e.sortByConnection=function(){e.setState({loading:!0});var t=e.state.reviews;t.sort((function(e,t){return e.reviewer.connection_level<t.reviewer.connection_level?1:-1})),e.setState({reviews:t,currentPage:1,loading:!1})},e.sortByUsefulness=function(){e.setState({loading:!0});var t=e.state.reviews;t.sort((function(e,t){return e.usefulness<t.usefulness?1:-1})),e.setState({reviews:t,currentPage:1,loading:!1})},e}return Object(o.a)(s,[{key:"render",value:function(){var e=this.state.currentPage*this.state.reviewsPerPage,t=e-this.state.reviewsPerPage,s=this.state.reviews.slice(t,e);return Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)(v,{onSearchSubmit:this.fetchReviews,sortByRating:this.sortByRating,sortByConnection:this.sortByConnection,sortByUsefulness:this.sortByUsefulness}),Object(n.jsx)(j,{reviews:s,loading:this.state.loading}),Object(n.jsx)(b,{currentPage:this.state.currentPage,reviewsPerPage:this.state.reviewsPerPage,totalReviews:this.state.reviews.length,paginate:this.paginate})]})}}]),s}(r.a.Component);c.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(p,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.7fd6dd92.chunk.js.map