(() => {
var exports = {};
exports.id = 445;
exports.ids = [445];
exports.modules = {

/***/ 894:
/***/ ((module) => {

// Exports
module.exports = {

};


/***/ }),

/***/ 164:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProjectPost),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Slug_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(894);
/* harmony import */ var _styles_Slug_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Slug_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(805);
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_1__);



const graphcms = new graphql_request__WEBPACK_IMPORTED_MODULE_1__.GraphQLClient("https://api-eu-central-1.graphcms.com/v2/cl487ukop4j4101ywhu54g7ml/master");
const QUERY = graphql_request__WEBPACK_IMPORTED_MODULE_1__.gql`
 query Project($slug: String!) {
     project(where: {slug: $slug}) {
         id,
         title,
         slug,
         datePublished,
         project_type{
            id,
            name,
            avatar{
                url
            }
         }
         content{
             html
         }
         coverPhoto{
            id,
            url
        }
     }
 }
`;
const SLUGLIST = graphql_request__WEBPACK_IMPORTED_MODULE_1__.gql`
{
    projects {
        slug
    }
}
`;
async function getStaticPaths() {
    const { projects  } = await graphcms.request(SLUGLIST);
    return {
        paths: projects.map((project)=>({
                params: {
                    slug: project.slug
                }
            })
        ),
        fallback: false
    };
}
async function getStaticProps({ params  }) {
    const slug = params.slug;
    const data = await graphcms.request(QUERY, {
        slug
    });
    const project = data.project;
    return {
        props: {
            project
        },
        revalidate: 10
    };
}
function ProjectPost({ project  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
        className: (_styles_Slug_module_css__WEBPACK_IMPORTED_MODULE_2___default().blog),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                className: (_styles_Slug_module_css__WEBPACK_IMPORTED_MODULE_2___default().cover),
                src: project.coverPhoto.url,
                alt: ""
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_Slug_module_css__WEBPACK_IMPORTED_MODULE_2___default().title)
            })
        ]
    });
};


/***/ }),

/***/ 805:
/***/ ((module) => {

"use strict";
module.exports = require("graphql-request");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(164));
module.exports = __webpack_exports__;

})();