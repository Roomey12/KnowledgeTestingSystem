function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/account/account.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/account/account.component.ts ***!
    \**********************************************/

  /*! exports provided: AccountComponent */

  /***/
  function srcAppAccountAccountComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccountComponent", function () {
      return AccountComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_usertest_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/usertest.service */
    "./src/app/services/usertest.service.ts");
    /* harmony import */


    var _services_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/account.service */
    "./src/app/services/account.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function AccountComponent_div_4_li_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u041F\u043E\u0447\u0442\u0430: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r11.userDetails.email);
      }
    }

    function AccountComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u0418\u043C\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AccountComponent_div_4_li_10_Template, 4, 1, "li", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u041E \u0441\u0435\u0431\u0435:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.userDetails.profileImageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.userDetails.username);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.userId);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.userDetails.aboutMe);
      }
    }

    function AccountComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountComponent_div_5_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r12.showChangePassword();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountComponent_div_5_Template_button_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r14.showChangeEmail();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C Email");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountComponent_div_5_Template_button_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r15.showChangeUsername();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0438\u043C\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0430\u0432\u0430\u0442\u0430\u0440");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C '\u041E \u0441\u0435\u0431\u0435'");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AccountComponent_tr_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var u_r16 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](u_r16 == null ? null : u_r16.test);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", u_r16 == null ? null : u_r16.mark, "%");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](u_r16 == null ? null : u_r16.time.substring(14));
      }
    }

    function AccountComponent_label_35_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u042D\u0442\u043E \u043F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AccountComponent_label_36_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u041F\u043E\u0447\u0442\u0430 \u0432\u0432\u0435\u0434\u0435\u043D\u0430 \u043D\u0435\u0432\u0435\u0440\u043D\u043E. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AccountComponent_label_56_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u042D\u0442\u043E \u043F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AccountComponent_label_116_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u042D\u0442\u043E \u043F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AccountComponent_label_124_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u042D\u0442\u043E \u043F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AccountComponent_label_125_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u041F\u0430\u0440\u043E\u043B\u044C \u0434\u043E\u043B\u0436\u0435\u043D \u0441\u043E\u0441\u0442\u043E\u044F\u0442\u044C \u043C\u0438\u043D\u0438\u043C\u0443\u043C \u0438\u0437 6 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AccountComponent_label_133_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u042D\u0442\u043E \u043F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AccountComponent_label_134_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u041F\u0430\u0440\u043E\u043B\u0438 \u043D\u0435 \u0441\u043E\u0432\u043F\u0430\u0434\u0430\u044E\u0442. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var AccountComponent = /*#__PURE__*/function () {
      function AccountComponent(userTestService, accountService, toastr, userService, activeRoute) {
        _classCallCheck(this, AccountComponent);

        this.userTestService = userTestService;
        this.accountService = accountService;
        this.toastr = toastr;
        this.userService = userService;
        this.pas1 = "oldpass";
        this.pas2 = "newpass";
        this.pas3 = "confpass";
        this.userId = activeRoute.snapshot.params["id"];
      }

      _createClass(AccountComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (!this.userId) {
            this.accountService.usernameModel.reset();
            this.accountService.passwordModel.reset();
            this.loadUserProfile();
          } else {
            this.loadStrangeUserProfile();
          }
        }
      }, {
        key: "loadUserProfile",
        value: function loadUserProfile() {
          var _this = this;

          this.accountService.getUserProfile().subscribe(function (res) {
            _this.userDetails = res;

            _this.loadUserTests();
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "loadUserTests",
        value: function loadUserTests() {
          var _this2 = this;

          this.userTestService.getUserTestsByUserId(this.userDetails["id"]).subscribe(function (data) {
            _this2.userTests = data;
          });
        }
      }, {
        key: "showChangePassword",
        value: function showChangePassword() {
          this.accountService.passwordModel.reset();
        }
      }, {
        key: "showChangeUsername",
        value: function showChangeUsername() {
          this.accountService.usernameModel.reset();
        }
      }, {
        key: "showChangeEmail",
        value: function showChangeEmail() {
          this.accountService.newEmailModel.reset();
        }
      }, {
        key: "changePassword",
        value: function changePassword() {
          var _this3 = this;

          this.accountService.changePassword(this.userDetails["id"]).subscribe(function (res) {
            console.log(res);

            if (res.succeeded) {
              _this3.accountService.passwordModel.reset();

              _this3.toastr.success('Пароль был изменен.', 'Успешно.');
            } else {
              res.errors.forEach(function (element) {
                switch (element.code) {
                  case 'PasswordMismatch':
                    _this3.toastr.error('Старый пароль введен неверно.', 'Пароль не был изменен.');

                    break;

                  default:
                    _this3.toastr.error(element.description, 'Пароль не был изменен.');

                    break;
                }
              });
            }
          }, function (err) {
            if (err.error == "Old and new password are same") {
              _this3.toastr.error('Старый и новый пароли совпадают.', 'Пароль не был изменен.');
            }

            console.log(err);
          });
        }
      }, {
        key: "changeEmail",
        value: function changeEmail() {
          var _this4 = this;

          this.accountService.changeEmail(this.userDetails["email"]).subscribe(function (data) {
            _this4.accountService.newEmailModel.reset();

            _this4.toastr.success('Для продолжения, перейдите по ссылке, которая была отправлена на указаную почту.', 'Успешно.');
          }, function (err) {
            if (err.error == "User with this email already exists") {
              _this4.toastr.error("Данная почта уже занята.", "Безуспешно.");
            }
          });
        }
      }, {
        key: "changeUsername",
        value: function changeUsername() {
          var _this5 = this;

          this.accountService.changeUsername(this.userDetails.username).subscribe(function (data) {
            _this5.loadUserProfile();

            _this5.accountService.usernameModel.reset();

            _this5.toastr.success('Имя пользователя было изменено.', 'Успешно.');
          }, function (err) {
            if (err.error == "User with this username already exists") {
              _this5.toastr.error('Пользователь с таким именем уже существует.', 'Имя пользователя не было изменено.');
            } else if (err.error == "Username can not be the same as current") {
              _this5.toastr.error('Новое имя пользователя не должно совпадать с текущим.', 'Имя пользователя не было изменено.');
            }

            console.log(err);
          });
        }
      }, {
        key: "changeProfileImage",
        value: function changeProfileImage() {
          var _this6 = this;

          var profileImageUrl = document.getElementById("profileImageUrl").value;
          var img = document.createElement("img");
          img.src = profileImageUrl;

          img.onerror = function () {
            _this6.toastr.error("Ссылка на картинку недействительна.", "Безуспешно.");
          };

          img.onload = function () {
            _this6.accountService.changeProfileImage(_this6.userDetails.email, profileImageUrl).subscribe(function (data) {
              _this6.loadUserProfile();

              document.getElementById("profileImageUrl").value = "";

              _this6.toastr.success('Аватар был изменен', 'Успешно.');
            }, function (err) {
              _this6.toastr.error('Что-то пошло не так.', 'Безуспешно.');
            });
          };
        }
      }, {
        key: "changeAboutMe",
        value: function changeAboutMe() {
          var _this7 = this;

          var aboutMe = document.getElementById("aboutMe").value;

          if (aboutMe.length > 50) {
            this.toastr.error('Максимальная длина информации 50 символов.', 'Безуспешно.');
          } else {
            this.accountService.changeAboutMe(this.userDetails.email, aboutMe).subscribe(function (data) {
              _this7.loadUserProfile();

              document.getElementById("aboutMe").value = "";

              _this7.toastr.success('Информация `О себе была` изменена.', 'Успешно.');
            }, function (err) {
              _this7.toastr.error('Что-то пошло не так.', 'Безуспешно.');
            });
          }
        }
      }, {
        key: "show_hide_password",
        value: function show_hide_password(el) {
          if (el == "oldpass") {
            var input = document.getElementById('old-password');
            var eye = document.getElementById('old-passeye');
          } else if (el == "newpass") {
            var input = document.getElementById('new-password');
            var eye = document.getElementById('new-passeye');
          } else {
            var input = document.getElementById('conf-password');
            var eye = document.getElementById('conf-passeye');
          }

          if (input.getAttribute('type') == 'password') {
            eye.classList.add('view');
            input.setAttribute('type', 'text');
          } else {
            eye.classList.remove('view');
            input.setAttribute('type', 'password');
          }

          return false;
        }
      }, {
        key: "loadStrangeUserProfile",
        value: function loadStrangeUserProfile() {
          var _this8 = this;

          this.userService.getUser(this.userId).subscribe(function (data) {
            _this8.userDetails = data;

            _this8.loadUserTests();
          });
        }
      }]);

      return AccountComponent;
    }();

    AccountComponent.ɵfac = function AccountComponent_Factory(t) {
      return new (t || AccountComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_usertest_service__WEBPACK_IMPORTED_MODULE_1__["UserTestService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]));
    };

    AccountComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AccountComponent,
      selectors: [["app-account"]],
      decls: 139,
      vars: 17,
      consts: [[1, "container"], [2, "text-align", "center", "margin", "10px"], [1, "row", "d-flex", "justify-content-center"], ["class", "col-6", 4, "ngIf"], ["class", "col-12 d-flex justify-content-center", 4, "ngIf"], [1, "col-12"], [2, "text-align", "center"], [1, "table", "mtable", "m-3", 2, "height", "auto"], [4, "ngFor", "ngForOf"], ["id", "modachangeemail", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], ["autocomplete", "off", 3, "formGroup", "submit"], [1, "form-group", "required"], ["formControlName", "UserEmail", 1, "form-control"], ["class", "text-danger", 4, "ngIf"], [1, "form-row", "text-center"], [1, "form-group", "col-12"], ["type", "submit", 1, "btn", "btn-lg", "btn-success", 3, "disabled"], ["id", "modachangename", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["formControlName", "NewUsername", 1, "form-control"], ["id", "modachangeprofileimage", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["id", "profileImageUrl", 1, "form-control"], ["type", "submit", 1, "btn", "btn-lg", "btn-success", 3, "click"], ["id", "modachangeaboutme", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["id", "aboutMe", 1, "form-control"], ["id", "modalchangepass", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["formGroupName", "Passwords"], [1, "password"], ["type", "password", "id", "old-password", "formControlName", "OldPassword", 1, "form-control"], ["href", "#", "id", "old-passeye", 1, "password-control", 3, "click"], ["type", "password", "id", "new-password", "formControlName", "Password", 1, "form-control"], ["href", "#", "id", "new-passeye", 1, "password-control", 3, "click"], ["type", "password", "id", "conf-password", "formControlName", "ConfirmPassword", 1, "form-control"], ["href", "#", "id", "conf-passeye", 1, "password-control", 3, "click"], [1, "col-6"], [1, "d-flex", "justify-content-center", "align-items-center", 2, "border", "3px solid grey", "border-radius", "10px"], [1, "col-4"], [1, "img-thumbnail", 3, "src"], [1, "card-body", "col-6"], [1, "list-group"], [1, "list-group-item"], ["class", "list-group-item", 4, "ngIf"], [2, "word-break", "break-all"], [1, "col-12", "d-flex", "justify-content-center"], ["data-toggle", "modal", "data-target", "#modalchangepass", 1, "btn", "btn-info", "place", "m-3", 3, "click"], ["data-toggle", "modal", "data-target", "#modachangeemail", 1, "btn", "btn-info", "place", "m-3", 3, "click"], ["data-toggle", "modal", "data-target", "#modachangename", 1, "btn", "btn-info", "place", "m-3", 3, "click"], ["data-toggle", "modal", "data-target", "#modachangeprofileimage", 1, "btn", "btn-info", "place", "m-3"], ["data-toggle", "modal", "data-target", "#modachangeaboutme", 1, "btn", "btn-info", "place", "m-3"], [1, "text-danger"]],
      template: function AccountComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u041B\u0438\u0447\u043D\u044B\u0439 \u043A\u0430\u0431\u0438\u043D\u0435\u0442");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AccountComponent_div_4_Template, 16, 4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AccountComponent_div_5_Template, 11, 0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u041F\u0440\u043E\u0439\u0434\u0435\u043D\u043D\u044B\u0435 \u0442\u0435\u0441\u0442\u044B");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "table", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u0422\u0435\u0441\u0442");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u0412\u0440\u0435\u043C\u044F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, AccountComponent_tr_19_Template, 7, 3, "tr", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h5", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\u0418\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0435 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u043F\u043E\u0447\u0442\u044B");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "form", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function AccountComponent_Template_form_submit_30_listener() {
            return ctx.changeEmail();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\u041D\u043E\u0432\u044B\u0439 Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, AccountComponent_label_35_Template, 2, 0, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, AccountComponent_label_36_Template, 2, 0, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h5", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "\u0418\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0435 \u0438\u043C\u0435\u043D\u0438 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "form", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function AccountComponent_Template_form_submit_51_listener() {
            return ctx.changeUsername();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "\u041D\u043E\u0432\u043E\u0435 \u0438\u043C\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "input", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, AccountComponent_label_56_Template, 2, 0, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "h5", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "\u0418\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0435 \u0430\u0432\u0430\u0442\u0430\u0440\u0430");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u043D\u043E\u0432\u044B\u0439 \u0430\u0432\u0430\u0442\u0430\u0440");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "input", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "button", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountComponent_Template_button_click_77_listener() {
            return ctx.changeProfileImage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "h5", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "\u0418\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0435 '\u041E \u0441\u0435\u0431\u0435'");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "\u041E \u0441\u0435\u0431\u0435");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "input", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "button", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountComponent_Template_button_click_95_listener() {
            return ctx.changeAboutMe();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "h5", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "\u0418\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0435 \u043F\u0430\u0440\u043E\u043B\u044F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "form", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function AccountComponent_Template_form_submit_107_listener() {
            return ctx.changePassword();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "\u0421\u0442\u0430\u0440\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "input", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "a", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountComponent_Template_a_click_115_listener() {
            return ctx.show_hide_password(ctx.pas1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](116, AccountComponent_label_116_Template, 2, 0, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "\u041D\u043E\u0432\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "input", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "a", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountComponent_Template_a_click_123_listener() {
            return ctx.show_hide_password(ctx.pas2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](124, AccountComponent_label_124_Template, 2, 0, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](125, AccountComponent_label_125_Template, 2, 0, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "input", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "a", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountComponent_Template_a_click_132_listener() {
            return ctx.show_hide_password(ctx.pas3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](133, AccountComponent_label_133_Template, 2, 0, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](134, AccountComponent_label_134_Template, 2, 0, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userDetails);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.userId);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.userTests);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.accountService.newEmailModel);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.accountService.newEmailModel.get("UserEmail").touched && (ctx.accountService.newEmailModel.get("UserEmail").errors == null ? null : ctx.accountService.newEmailModel.get("UserEmail").errors.required));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.accountService.newEmailModel.get("UserEmail").touched && (ctx.accountService.newEmailModel.get("UserEmail").errors == null ? null : ctx.accountService.newEmailModel.get("UserEmail").errors.email));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.accountService.newEmailModel.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.accountService.usernameModel);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.accountService.usernameModel.get("NewUsername").touched && (ctx.accountService.usernameModel.get("NewUsername").errors == null ? null : ctx.accountService.usernameModel.get("NewUsername").errors.required));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.accountService.usernameModel.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.accountService.passwordModel);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.accountService.passwordModel.get("Passwords.OldPassword").touched && (ctx.accountService.passwordModel.get("Passwords.OldPassword").errors == null ? null : ctx.accountService.passwordModel.get("Passwords.OldPassword").errors.required));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.accountService.passwordModel.get("Passwords.Password").touched && (ctx.accountService.passwordModel.get("Passwords.Password").errors == null ? null : ctx.accountService.passwordModel.get("Passwords.Password").errors.required));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.accountService.passwordModel.get("Passwords.Password").touched && (ctx.accountService.passwordModel.get("Passwords.Password").errors == null ? null : ctx.accountService.passwordModel.get("Passwords.Password").errors.minlength));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.accountService.passwordModel.get("Passwords.ConfirmPassword").touched && (ctx.accountService.passwordModel.get("Passwords.ConfirmPassword").errors == null ? null : ctx.accountService.passwordModel.get("Passwords.ConfirmPassword").errors.required));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.accountService.passwordModel.get("Passwords.ConfirmPassword").touched && (ctx.accountService.passwordModel.get("Passwords.ConfirmPassword").errors == null ? null : ctx.accountService.passwordModel.get("Passwords.ConfirmPassword").errors.passwordMismatch));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.accountService.passwordModel.valid);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroupName"]],
      styles: [".password[_ngcontent-%COMP%] {\r\n\tposition: relative;\r\n }\r\n .password-control[_ngcontent-%COMP%] {\r\n\tposition: absolute;\r\n\ttop: 11px;\r\n\tright: 6px;\r\n\tdisplay: inline-block;\r\n\twidth: 20px;\r\n\theight: 20px;\r\n\tbackground: url(https://snipp.ru/demo/495/view.svg) 0 0 no-repeat;\r\n }\r\n .password-control.view[_ngcontent-%COMP%] {\r\n\tbackground: url(https://snipp.ru/demo/495/no-view.svg) 0 0 no-repeat;\r\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC9hY2NvdW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxrQkFBa0I7Q0FDbEI7Q0FDQTtDQUNBLGtCQUFrQjtDQUNsQixTQUFTO0NBQ1QsVUFBVTtDQUNWLHFCQUFxQjtDQUNyQixXQUFXO0NBQ1gsWUFBWTtDQUNaLGlFQUFpRTtDQUNqRTtDQUNBO0NBQ0Esb0VBQW9FO0NBQ3BFIiwiZmlsZSI6InNyYy9hcHAvYWNjb3VudC9hY2NvdW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFzc3dvcmQge1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuIH1cclxuIC5wYXNzd29yZC1jb250cm9sIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiAxMXB4O1xyXG5cdHJpZ2h0OiA2cHg7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdHdpZHRoOiAyMHB4O1xyXG5cdGhlaWdodDogMjBweDtcclxuXHRiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly9zbmlwcC5ydS9kZW1vLzQ5NS92aWV3LnN2ZykgMCAwIG5vLXJlcGVhdDtcclxuIH1cclxuIC5wYXNzd29yZC1jb250cm9sLnZpZXcge1xyXG5cdGJhY2tncm91bmQ6IHVybChodHRwczovL3NuaXBwLnJ1L2RlbW8vNDk1L25vLXZpZXcuc3ZnKSAwIDAgbm8tcmVwZWF0O1xyXG4gfSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccountComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-account',
          templateUrl: './account.component.html',
          styleUrls: ['./account.component.css']
        }]
      }], function () {
        return [{
          type: _services_usertest_service__WEBPACK_IMPORTED_MODULE_1__["UserTestService"]
        }, {
          type: _services_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
        }, {
          type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/admin-panel/admin-panel.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/admin-panel/admin-panel.component.ts ***!
    \******************************************************/

  /*! exports provided: AdminPanelComponent */

  /***/
  function srcAppAdminPanelAdminPanelComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminPanelComponent", function () {
      return AdminPanelComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/user.service */
    "./src/app/services/user.service.ts");

    var AdminPanelComponent = /*#__PURE__*/function () {
      function AdminPanelComponent(router, userService) {
        _classCallCheck(this, AdminPanelComponent);

        this.router = router;
        this.userService = userService;
      }

      _createClass(AdminPanelComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadUsers();
        }
      }, {
        key: "loadUsers",
        value: function loadUsers() {
          var _this9 = this;

          this.userService.getUsers().subscribe(function (data) {
            _this9.users = data;
          });
        }
      }]);

      return AdminPanelComponent;
    }();

    AdminPanelComponent.ɵfac = function AdminPanelComponent_Factory(t) {
      return new (t || AdminPanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]));
    };

    AdminPanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AdminPanelComponent,
      selectors: [["app-admin-panel"]],
      decls: 8,
      vars: 0,
      consts: [[1, "text-center"], ["routerLink", "/admin-panel/user-list", "routerLinkActive", "active", 1, "btn", "btn-info", "m-3"], ["routerLink", "/admin-panel/test-list", "routerLinkActive", "active", 1, "btn", "btn-info", "m-3"], ["routerLink", "/admin-panel/user-test-list", "routerLinkActive", "active", 1, "btn", "btn-info", "m-3"]],
      template: function AdminPanelComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u0422\u0435\u0441\u0442\u044B");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminPanelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-admin-panel',
          templateUrl: './admin-panel.component.html',
          styles: []
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/admin-panel/test/test-create/test-create.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/admin-panel/test/test-create/test-create.component.ts ***!
    \***********************************************************************/

  /*! exports provided: TestCreateComponent */

  /***/
  function srcAppAdminPanelTestTestCreateTestCreateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TestCreateComponent", function () {
      return TestCreateComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_models_test__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/models/test */
    "./src/app/models/test.ts");
    /* harmony import */


    var src_app_models_question__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/models/question */
    "./src/app/models/question.ts");
    /* harmony import */


    var src_app_models_answer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/models/answer */
    "./src/app/models/answer.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_services_test_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/services/test.service */
    "./src/app/services/test.service.ts");
    /* harmony import */


    var src_app_services_question_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/services/question.service */
    "./src/app/services/question.service.ts");
    /* harmony import */


    var src_app_services_answer_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/services/answer.service */
    "./src/app/services/answer.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _test_form_test_form_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../test-form/test-form.component */
    "./src/app/admin-panel/test/test-form/test-form.component.ts");

    function TestCreateComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F \u043F\u043E \u0442\u0435\u0441\u0442\u0443");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "test-form", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("testChange", function TestCreateComponent_div_1_Template_test_form_testChange_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.test = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TestCreateComponent_div_1_Template_input_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.create();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("test", ctx_r0.test);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r0.testService.testModel.valid);
      }
    }

    function TestCreateComponent_div_2_div_1_label_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u042D\u0442\u043E \u043F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TestCreateComponent_div_2_div_1_label_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432 \u0432\u0432\u0435\u0434\u0435\u043D\u043E \u043D\u0435\u0432\u0435\u0440\u043D\u043E. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TestCreateComponent_div_2_div_1_label_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u042D\u0442\u043E \u043F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TestCreateComponent_div_2_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u041D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0445 \u043E\u0442\u0432\u0435\u0442\u043E\u0432?");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TestCreateComponent_div_2_div_1_label_8_Template, 2, 0, "label", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TestCreateComponent_div_2_div_1_label_11_Template, 2, 0, "label", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, TestCreateComponent_div_2_div_1_label_12_Template, 2, 0, "label", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r8 = ctx.$implicit;

        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r6.questionModel);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", i_r8 + 1, ".");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "t_", i_r8 + 1, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "q_", i_r8 + 1, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.questionModel.get("Content").touched && (ctx_r6.questionModel.get("Content").errors == null ? null : ctx_r6.questionModel.get("Content").errors.required));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "cad_", i_r8 + 1, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "a_", i_r8 + 1, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.questionModel.get("AnswersCount").touched && (ctx_r6.questionModel.get("AnswersCount").errors == null ? null : ctx_r6.questionModel.get("AnswersCount").errors.answerCountRange));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.questionModel.get("AnswersCount").touched && (ctx_r6.questionModel.get("AnswersCount").errors == null ? null : ctx_r6.questionModel.get("AnswersCount").errors.required));
      }
    }

    function TestCreateComponent_div_2_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TestCreateComponent_div_2_div_2_Template_input_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r12.next();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r7.questionModel.valid);
      }
    }

    function TestCreateComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TestCreateComponent_div_2_div_1_Template, 14, 9, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TestCreateComponent_div_2_div_2_Template, 3, 1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.questions);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.hideQuestions);
      }
    }

    function TestCreateComponent_div_3_div_1_div_5_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var j_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

        var i_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("id", "a_isCorrect_", i_r17, ":", j_r20, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("name", "a_isCorrect_", i_r17, "");
      }
    }

    function TestCreateComponent_div_3_div_1_div_5_ng_template_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 28);
      }

      if (rf & 2) {
        var j_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

        var i_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("id", "a_isCorrect_", i_r17, ":", j_r20, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("name", "a_isCorrect_", i_r17, "");
      }
    }

    function TestCreateComponent_div_3_div_1_div_5_label_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u042D\u0442\u043E \u043F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TestCreateComponent_div_3_div_1_div_5_label_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432 \u0432\u0432\u0435\u0434\u0435\u043D\u043E \u043D\u0435\u0432\u0435\u0440\u043D\u043E. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TestCreateComponent_div_3_div_1_div_5_label_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u042D\u0442\u043E \u043F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TestCreateComponent_div_3_div_1_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u041F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0439?");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TestCreateComponent_div_3_div_1_div_5_div_6_Template, 2, 3, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TestCreateComponent_div_3_div_1_div_5_ng_template_7_Template, 1, 3, "ng-template", null, 24, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TestCreateComponent_div_3_div_1_div_5_label_10_Template, 2, 0, "label", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, TestCreateComponent_div_3_div_1_div_5_label_12_Template, 2, 0, "label", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, TestCreateComponent_div_3_div_1_div_5_label_13_Template, 2, 0, "label", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var j_r20 = ctx.index;

        var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

        var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var item_r16 = ctx_r31.$implicit;
        var i_r17 = ctx_r31.index;

        var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r16.key.isSingle)("ngIfElse", _r22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("id", "a_content_", i_r17, ":", j_r20, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r18.answerModel.get("Content").touched && (ctx_r18.answerModel.get("Content").errors == null ? null : ctx_r18.answerModel.get("Content").errors.required));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("id", "a_mark_", i_r17, ":", j_r20, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r18.answerModel.get("Mark").touched && (ctx_r18.answerModel.get("Mark").errors == null ? null : ctx_r18.answerModel.get("Mark").errors.markRange));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r18.answerModel.get("Mark").touched && (ctx_r18.answerModel.get("Mark").errors == null ? null : ctx_r18.answerModel.get("Mark").errors.required));
      }
    }

    function TestCreateComponent_div_3_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TestCreateComponent_div_3_div_1_div_5_Template, 14, 9, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r16 = ctx.$implicit;
        var i_r17 = ctx.index;

        var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("name", "form_", i_r17, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r14.answerModel);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", i_r17 + 1, ". ", item_r16.key.content, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r16.value);
      }
    }

    function TestCreateComponent_div_3_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TestCreateComponent_div_3_div_3_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33);

          var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r32.onSubmit();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0421\u043E\u0437\u0434\u0430\u0442\u044C");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r15.answerModel.valid);
      }
    }

    function TestCreateComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TestCreateComponent_div_3_div_1_Template, 7, 5, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "keyvalue");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TestCreateComponent_div_3_div_3_Template, 3, 1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx_r2.sas));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.end);
      }
    }

    var TestCreateComponent = /*#__PURE__*/function () {
      function TestCreateComponent(fb, testService, questionService, answerService, toastr, router) {
        _classCallCheck(this, TestCreateComponent);

        this.fb = fb;
        this.testService = testService;
        this.questionService = questionService;
        this.answerService = answerService;
        this.toastr = toastr;
        this.router = router;
        this.questions = [];
        this.hideQuestions = true;
        this.questionModel = this.fb.group({
          Content: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
          AnswersCount: ['', [this.answerCountRangeValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]]
        });
        this.answerModel = this.fb.group({
          Content: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
          Mark: ['', [this.markRangeValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]]
        });
      }

      _createClass(TestCreateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.test = new src_app_models_test__WEBPACK_IMPORTED_MODULE_1__["Test"]();
        }
      }, {
        key: "create",
        value: function create() {
          var testTime = new Date();
          var Time = this.test.maxTime.split(":");
          testTime.setMinutes(Time[0]);
          testTime.setSeconds(Time[1]);
          testTime.setMilliseconds(0);
          this.test.maxTime = testTime;
          this.test.maxScore = Number(this.test.maxScore);

          for (var i = 0; i < this.test.maxScore; i++) {
            this.questions.push(i);
          }

          this.testCreated = true;
        }
      }, {
        key: "next",
        value: function next() {
          this.sas = new Map();

          for (var i = 0; i < this.questions.length; i++) {
            var q = document.getElementById("q_".concat(i + 1));
            var t = document.getElementById("t_".concat(i + 1));
            var a = document.getElementById("a_".concat(i + 1));
            var cad = document.getElementById("cad_".concat(i + 1));
            var isSin = true;

            if (t.checked) {
              isSin = false;
            }

            var quest = {
              content: q.value,
              answerDescription: cad.value == null ? null : cad.value,
              isSingle: isSin
            };
            var help = [];

            for (var j = 0; j < Number(a.value); j++) {
              help.push(j);
            }

            this.sas.set(quest, help);
          }

          this.questionsCreated = true;
          this.hideQuestions = false;
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this10 = this;

          this.test.maxScore = 0;
          this.testService.createTest(this.test).subscribe(function (data) {
            _this10.fillQuest();
          });
        }
      }, {
        key: "fillQuest",
        value: function fillQuest() {
          var _this11 = this;

          var i = 0;
          Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(this.sas).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["concatMap"])(function (item) {
            // get question info
            var q = document.getElementById("q_".concat(i + 1));
            var t = document.getElementById("t_".concat(i + 1));
            var cad = document.getElementById("cad_".concat(i + 1));
            var isSin = true;

            if (t.checked) {
              isSin = false;
            }

            var question = new src_app_models_question__WEBPACK_IMPORTED_MODULE_2__["Question"]();
            question.Content = q.value;
            question.IsSingle = isSin;
            question.AnswerDescription = cad.value; // get answers for this question

            var answers = [];

            var _iterator = _createForOfIteratorHelper(item[1]),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var j = _step.value;
                var isCorrect = document.getElementById("a_isCorrect_".concat(i, ":").concat(j));
                var content = document.getElementById("a_content_".concat(i, ":").concat(j));
                var mark = document.getElementById("a_mark_".concat(i, ":").concat(j));
                var answer = new src_app_models_answer__WEBPACK_IMPORTED_MODULE_3__["Answer"]();
                answer.IsCorrect = isCorrect.checked;
                answer.Content = content.value;
                answer.Mark = Number(mark.value);
                answers.push(answer);
                j++;
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            i++; //post question

            return _this11.questionService.createQuestionForNewTest(question).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["concatMap"])(function (data) {
              console.log("question ".concat(question.Content, " done"));
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(answers).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["concatMap"])(function (answer) {
                return _this11.answerService.createAnswerForNewQuestion(answer).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) {
                  return console.log("answer ".concat(answer, " done"));
                }));
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () {
                console.log("done");
              }));
            }));
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () {
            _this11.router.navigateByUrl("/admin-panel");

            _this11.toastr.success("Тест был создан.", "Успешно.");

            _this11.end = true;
          })).subscribe();
        }
      }, {
        key: "answerCountRangeValidator",
        value: function answerCountRangeValidator(control) {
          if (control.value !== undefined && (isNaN(control.value) || control.value < 0 || control.value > 50)) {
            return {
              'answerCountRange': true
            };
          }

          return null;
        }
      }, {
        key: "markRangeValidator",
        value: function markRangeValidator(control) {
          if (control.value !== undefined && (isNaN(control.value) || control.value < -100 || control.value > 100)) {
            return {
              'markRange': true
            };
          }

          return null;
        }
      }]);

      return TestCreateComponent;
    }();

    TestCreateComponent.ɵfac = function TestCreateComponent_Factory(t) {
      return new (t || TestCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_test_service__WEBPACK_IMPORTED_MODULE_7__["TestService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_question_service__WEBPACK_IMPORTED_MODULE_8__["QuestionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_answer_service__WEBPACK_IMPORTED_MODULE_9__["AnswerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]));
    };

    TestCreateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TestCreateComponent,
      selectors: [["app-test-create"]],
      decls: 4,
      vars: 3,
      consts: [[1, "container"], ["class", "row justify-content-center", 4, "ngIf"], [4, "ngIf"], [1, "row", "justify-content-center"], [1, "col-12", "col-md-8", "col-lg-6", "pb-5"], [1, "text-center"], [3, "test", "testChange"], [1, "form-group", "text-center"], ["type", "button", "value", "\u0421\u043E\u0437\u0434\u0430\u0442\u044C", 1, "btn", "btn-success", 3, "disabled", "click"], [4, "ngFor", "ngForOf"], ["autocomplete", "off", 1, "mx-3", 3, "formGroup"], ["type", "checkbox", 1, "ml-2", 3, "id"], ["type", "text", "formControlName", "Content", "placeholder", "\u0422\u0435\u043A\u0441\u0442 \u0432\u043E\u043F\u0440\u043E\u0441\u0430", 1, "mx-3", 3, "id"], ["class", "text-danger", 4, "ngIf"], ["type", "text", "placeholder", "\u041E\u0431\u044A\u044F\u0441\u043D\u0435\u043D\u0438\u0435 \u043E\u0442\u0432\u0435\u0442\u0430", 1, "mx-3", 3, "id"], ["type", "text", "formControlName", "AnswersCount", "placeholder", "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043E\u0442\u0432\u0435\u0442\u043E\u0432", 3, "id"], [1, "text-danger"], [1, "form-group"], ["type", "button", "value", "\u0414\u0430\u043B\u0435\u0435", 1, "btn", "btn-success", 3, "disabled", "click"], ["autocomplete", "off", 3, "name", "formGroup"], [1, "col-12"], [1, "row"], [1, "mx-1"], [4, "ngIf", "ngIfElse"], ["isMultiple", ""], ["type", "text", "formControlName", "Content", "placeholder", "\u041A\u043E\u043D\u0442\u0435\u043D\u0442", "name", "a_content", 1, "mx-2", 3, "id"], ["type", "text", "formControlName", "Mark", "placeholder", "\u0411\u0430\u043B", "name", "a_mark", 1, "mx-2", 3, "id"], ["type", "radio", 3, "id", "name"], ["type", "checkbox", 3, "id", "name"], ["type", "submit", 1, "btn", "btn-success", 2, "margin-bottom", "20px", "margin-left", "10px", 3, "disabled", "click"]],
      template: function TestCreateComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TestCreateComponent_div_1_Template, 7, 2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TestCreateComponent_div_2_Template, 3, 2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TestCreateComponent_div_3_Template, 4, 4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.testCreated);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.testCreated);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.questionsCreated);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _test_form_test_form_component__WEBPACK_IMPORTED_MODULE_13__["TestFormComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControlName"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["KeyValuePipe"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TestCreateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-test-create',
          templateUrl: './test-create.component.html',
          styleUrls: []
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
        }, {
          type: src_app_services_test_service__WEBPACK_IMPORTED_MODULE_7__["TestService"]
        }, {
          type: src_app_services_question_service__WEBPACK_IMPORTED_MODULE_8__["QuestionService"]
        }, {
          type: src_app_services_answer_service__WEBPACK_IMPORTED_MODULE_9__["AnswerService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/admin-panel/test/test-edit/test-edit.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/admin-panel/test/test-edit/test-edit.component.ts ***!
    \*******************************************************************/

  /*! exports provided: TestEditComponent */

  /***/
  function srcAppAdminPanelTestTestEditTestEditComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TestEditComponent", function () {
      return TestEditComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_models_question__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/models/question */
    "./src/app/models/question.ts");
    /* harmony import */


    var src_app_models_answer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/models/answer */
    "./src/app/models/answer.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_app_services_test_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/test.service */
    "./src/app/services/test.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_services_question_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/services/question.service */
    "./src/app/services/question.service.ts");
    /* harmony import */


    var src_app_services_answer_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/services/answer.service */
    "./src/app/services/answer.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function TestEditComponent_div_0_p_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0412\u0440\u0435\u043C\u044F \u0432\u0432\u0435\u0434\u0435\u043D\u043E \u043D\u0435\u0432\u0435\u0440\u043D\u043E. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TestEditComponent_div_0_div_53_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TestEditComponent_div_0_div_53_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r5.addQuestion();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432\u043E\u043F\u0440\u043E\u0441");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TestEditComponent_div_0_div_55_div_12_div_7_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "a_isCorrect_", i_r10, "");
      }
    }

    function TestEditComponent_div_0_div_55_div_12_div_7_ng_template_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 36);
      }

      if (rf & 2) {
        var i_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "a_isCorrect_", i_r10, "");
      }
    }

    function TestEditComponent_div_0_div_55_div_12_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u041F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0439?");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TestEditComponent_div_0_div_55_div_12_div_7_div_8_Template, 2, 1, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TestEditComponent_div_0_div_55_div_12_div_7_ng_template_9_Template, 1, 1, "ng-template", null, 30, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r10 = ctx.index;

        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.newQuestion.isSingle)("ngIfElse", _r12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "a_content_", i_r10, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "a_mark_", i_r10, "");
      }
    }

    function TestEditComponent_div_0_div_55_div_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TestEditComponent_div_0_div_55_div_12_div_7_Template, 17, 4, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TestEditComponent_div_0_div_55_div_12_Template_button_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r16.onSubmit();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u0421\u043E\u0437\u0434\u0430\u0442\u044C");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.newQuestion.content);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.newQuestion.answerDescription);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.answersCount);
      }
    }

    function TestEditComponent_div_0_div_55_Template(rf, ctx) {
      if (rf & 1) {
        var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u041D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0445 \u043E\u0442\u0432\u0435\u0442\u043E\u0432?");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043E\u0442\u0432\u0435\u0442\u043E\u0432:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TestEditComponent_div_0_div_55_Template_input_click_11_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r18.next();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, TestEditComponent_div_0_div_55_div_12_Template, 10, 3, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.showFillQuestion);
      }
    }

    function TestEditComponent_div_0_div_56_div_1_div_17_div_8_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var s_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "a_isCorrect_", s_r25.answerId, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", s_r25.isCorrect);
      }
    }

    function TestEditComponent_div_0_div_56_div_1_div_17_div_8_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var s_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "a_isCorrect_", s_r25.answerId, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", s_r25.isCorrect);
      }
    }

    function TestEditComponent_div_0_div_56_div_1_div_17_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TestEditComponent_div_0_div_56_div_1_div_17_div_8_div_1_Template, 2, 2, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TestEditComponent_div_0_div_56_div_1_div_17_div_8_div_2_Template, 2, 2, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var s_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", s_r25.isCorrect);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !s_r25.isCorrect);
      }
    }

    function TestEditComponent_div_0_div_56_div_1_div_17_ng_template_9_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var s_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "a_isCorrect_", s_r25.answerId, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", s_r25.isCorrect);
      }
    }

    function TestEditComponent_div_0_div_56_div_1_div_17_ng_template_9_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var s_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "a_isCorrect_", s_r25.answerId, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", s_r25.isCorrect);
      }
    }

    function TestEditComponent_div_0_div_56_div_1_div_17_ng_template_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TestEditComponent_div_0_div_56_div_1_div_17_ng_template_9_div_0_Template, 2, 2, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TestEditComponent_div_0_div_56_div_1_div_17_ng_template_9_div_1_Template, 2, 2, "div", 0);
      }

      if (rf & 2) {
        var s_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", s_r25.isCorrect);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !s_r25.isCorrect);
      }
    }

    function TestEditComponent_div_0_div_56_div_1_div_17_Template(rf, ctx) {
      if (rf & 1) {
        var _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u041F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0439?");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TestEditComponent_div_0_div_56_div_1_div_17_div_8_Template, 3, 2, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TestEditComponent_div_0_div_56_div_1_div_17_ng_template_9_Template, 2, 2, "ng-template", null, 30, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " \u041A\u043E\u043D\u0442\u0435\u043D\u0442:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " \u0411\u0430\u043B: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TestEditComponent_div_0_div_56_div_1_div_17_Template_button_click_16_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40);

          var s_r25 = ctx.$implicit;

          var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          return ctx_r39.deleteAnswer(s_r25.answerId);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var s_r25 = ctx.$implicit;

        var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

        var item_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r21.key.isSingle)("ngIfElse", _r27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "a_content_", s_r25.answerId, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", s_r25.content);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "a_mark_", s_r25.answerId, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", s_r25.mark);
      }
    }

    function TestEditComponent_div_0_div_56_div_1_div_18_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u041F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0439?:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TestEditComponent_div_0_div_56_div_1_div_18_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0411\u0430\u043B: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TestEditComponent_div_0_div_56_div_1_div_18_Template(rf, ctx) {
      if (rf & 1) {
        var _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u041D\u043E\u0432\u044B\u0439 \u043E\u0442\u0432\u0435\u0442:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TestEditComponent_div_0_div_56_div_1_div_18_div_5_Template, 4, 0, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u041A\u043E\u043D\u0442\u0435\u043D\u0442:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TestEditComponent_div_0_div_56_div_1_div_18_div_9_Template, 4, 0, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TestEditComponent_div_0_div_56_div_1_div_18_Template_button_click_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45);

          var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          return ctx_r44.saveNewAnswer();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u0421\u043E\u0437\u0434\u0430\u0442\u044C");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r21.key.isSingle);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r21.key.isSingle);
      }
    }

    function TestEditComponent_div_0_div_56_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u041E\u0431\u044A\u044F\u0441\u043D\u0435\u043D\u0438\u0435 \u043E\u0442\u0432\u0435\u0442\u0430: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TestEditComponent_div_0_div_56_div_1_Template_button_click_11_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48);

          var item_r21 = ctx.$implicit;

          var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r47.editQuestion(item_r21.key.questionId);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TestEditComponent_div_0_div_56_div_1_Template_button_click_13_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48);

          var item_r21 = ctx.$implicit;

          var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r49.addAnswer(item_r21.key.questionId);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043E\u0442\u0432\u0435\u0442");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TestEditComponent_div_0_div_56_div_1_Template_button_click_15_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48);

          var item_r21 = ctx.$implicit;

          var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r50.deleteQuestion(item_r21.key.questionId);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, TestEditComponent_div_0_div_56_div_1_div_17_Template, 18, 6, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, TestEditComponent_div_0_div_56_div_1_div_18_Template, 12, 2, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r21 = ctx.$implicit;
        var i_r22 = ctx.index;

        var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("name", "form_", i_r22, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", i_r22 + 1, ". \u041A\u043E\u043D\u0442\u0435\u043D\u0442: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "q_isSingle_", item_r21.key.questionId, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", item_r21.key.isSingle);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "q_content_", item_r21.key.questionId, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", item_r21.key.content);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "q_ansDesc_", item_r21.key.questionId, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", item_r21.key.answerDescription);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r21.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r20.questIdForNewAns == item_r21.key.questionId);
      }
    }

    function TestEditComponent_div_0_div_56_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TestEditComponent_div_0_div_56_div_1_Template, 22, 10, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "keyvalue");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r4.testInfo));
      }
    }

    function TestEditComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u0418\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0435 \u0434\u0430\u043D\u043D\u044B\u0445 \u043E \u0442\u0435\u0441\u0442\u0435");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, TestEditComponent_div_0_p_19_Template, 2, 0, "p", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TestEditComponent_div_0_Template_input_click_21_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52);

          var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r51.saveTest();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h1", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u0422\u0435\u0441\u0442");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "table", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "thead");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\u0422\u0435\u0441\u0442");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\u0411\u0430\u043B");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\u041F\u0440\u043E\u0439\u0434\u0435\u043D\u043E \u0440\u0430\u0437");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\u0412\u0440\u0435\u043C\u044F");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, TestEditComponent_div_0_div_53_Template, 3, 0, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, TestEditComponent_div_0_div_55_Template, 13, 1, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, TestEditComponent_div_0_div_56_Template, 3, 3, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.testService.testModel);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.testService.testModel.get("Time").touched && (ctx_r0.testService.testModel.get("Time").errors == null ? null : ctx_r0.testService.testModel.get("Time").errors.pattern));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.testService.testModel.get("Time").errors == null ? null : ctx_r0.testService.testModel.get("Time").errors.pattern);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.test == null ? null : ctx_r0.test.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.test == null ? null : ctx_r0.test.description);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.test == null ? null : ctx_r0.test.maxScore);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.test == null ? null : ctx_r0.test.questionsCount);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.test == null ? null : ctx_r0.test.passedTimes);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.test == null ? null : ctx_r0.test.maxTime.substring(14));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.showAddQuestion);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.showAddQuestion);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.showAddQuestion);
      }
    }

    var TestEditComponent = /*#__PURE__*/function () {
      function TestEditComponent(testService, router, questionService, answerService, toastr, activeRoute) {
        _classCallCheck(this, TestEditComponent);

        this.testService = testService;
        this.router = router;
        this.questionService = questionService;
        this.answerService = answerService;
        this.toastr = toastr;
        this.testId = activeRoute.snapshot.params["id"];
      }

      _createClass(TestEditComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.testId) {
            this.testService.testModel.reset();
            this.loadTest(true);
          }
        }
      }, {
        key: "loadTest",
        value: function loadTest(withQA) {
          var _this12 = this;

          this.testService.getTestById(this.testId).subscribe(function (data) {
            _this12.test = data;

            if (withQA == true) {
              _this12.loadTestInfoGet();
            }
          });
        }
      }, {
        key: "loadTestInfoGet",
        value: function loadTestInfoGet() {
          var _this13 = this;

          var testInfoGet = new Map();
          this.testService.getTestStart(this.testId).subscribe(function (data) {
            testInfoGet = data;
            _this13.loaded = true;

            _this13.fillQuestions(testInfoGet);
          });
        }
      }, {
        key: "fillQuestions",
        value: function fillQuestions(testInfoGet) {
          var _this14 = this;

          this.testInfo = new Map();

          for (var t in testInfoGet) {
            this.questionService.getQuestionById(Number(t)).subscribe(function (data1) {
              _this14.fillTestInfo(testInfoGet, data1);
            });
          }
        }
      }, {
        key: "fillTestInfo",
        value: function fillTestInfo(testInfo, question) {
          this.testInfo.set(question, testInfo[question["questionId"].toString()]);
        }
      }, {
        key: "deleteQuestion",
        value: function deleteQuestion(questionId) {
          var _this15 = this;

          this.questionService.deleteQuestion(questionId).subscribe(function (data) {
            _this15.loadTestInfoGet();

            _this15.toastr.success("Вопрос был удален.", "Успешно.");
          });
        }
      }, {
        key: "deleteAnswer",
        value: function deleteAnswer(answerId) {
          var _this16 = this;

          this.answerService.deleteAnswer(answerId).subscribe(function (data) {
            _this16.loadTestInfoGet();

            _this16.toastr.success("Ответ был удален.", "Успешно.");
          });
        }
      }, {
        key: "addQuestion",
        value: function addQuestion() {
          this.showAddQuestion = true;
        }
      }, {
        key: "next",
        value: function next() {
          var isMultiple = document.getElementById('isMultiple');
          var content = document.getElementById('content');
          var answersCount = document.getElementById('answersCount');
          var answerDescription = document.getElementById('ansDesc');
          this.newQuestion = {
            content: content.value,
            isSingle: !isMultiple.checked,
            answersCount: Number(answersCount.value),
            answerDescription: answerDescription.value
          };
          this.answersCount = [];

          for (var i = 0; i < this.newQuestion.answersCount; i++) {
            this.answersCount.push(i);
          }

          this.showFillQuestion = true;
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this17 = this;

          var question = new src_app_models_question__WEBPACK_IMPORTED_MODULE_1__["Question"]();
          question.Content = this.newQuestion.content;
          question.IsSingle = this.newQuestion.isSingle;
          question.AnswerDescription = this.newQuestion.answerDescription;
          question.TestId = Number(this.testId);
          var answers = [];

          for (var i = 0; i < this.newQuestion.answersCount; i++) {
            var isCorrect = document.getElementById("a_isCorrect_".concat(i));
            var content = document.getElementById("a_content_".concat(i));
            var mark = document.getElementById("a_mark_".concat(i));
            var answer = new src_app_models_answer__WEBPACK_IMPORTED_MODULE_2__["Answer"]();
            answer.IsCorrect = isCorrect.checked;
            answer.Content = content.value;
            answer.Mark = Number(mark.value);
            answers.push(answer);
          }

          this.questionService.createQuestionForOldTest(question).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMap"])(function (data) {
            console.log("question ".concat(question.Content, " done"));
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(answers).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMap"])(function (answer) {
              return _this17.answerService.createAnswerForNewQuestion(answer).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) {
                return console.log("answer ".concat(answer, " done"));
              }));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () {
              console.log("final");
            }));
          })).subscribe(function (data) {
            _this17.showAddQuestion = false;
            _this17.showFillQuestion = false;

            _this17.loadTestInfoGet();

            _this17.toastr.success("Вопрос был добавлен.", "Успешно.");
          });
        }
      }, {
        key: "saveTest",
        value: function saveTest() {
          var _this18 = this;

          console.log(this.test.maxTime);
          var title = document.getElementById('title');
          var description = document.getElementById('description');
          var maxTime = document.getElementById('maxTime');
          var testTime = new Date();

          if (maxTime.value != "") {
            var Time = maxTime.value.split(":");
            testTime.setMinutes(Number(Time[0]));
            testTime.setSeconds(Number(Time[1]));
            testTime.setMilliseconds(0);
            this.test.maxTime = testTime;
          }

          this.test.title = title.value == "" ? this.test.title : title.value;
          this.test.description = description.value == "" ? this.test.description : description.value;
          console.log(this.test.maxTime);
          this.testService.putTest(this.test).subscribe(function (data) {
            _this18.toastr.success("Тест был изменен.", "Успешно.");

            _this18.testService.testModel.reset();

            _this18.loadTest(false);
          });
        }
      }, {
        key: "editQuestion",
        value: function editQuestion(questionId) {
          var _this19 = this;

          var question = new src_app_models_question__WEBPACK_IMPORTED_MODULE_1__["Question"]();
          var content = document.getElementById("q_content_".concat(questionId));
          var isSingle = document.getElementById("q_isSingle_".concat(questionId));
          var answerDescription = document.getElementById("q_ansDesc_".concat(questionId));
          question.QuestionId = questionId;
          question.Content = content.value;
          question.AnswerDescription = answerDescription.value;
          question.TestId = Number(this.testId);
          question.IsSingle = isSingle.value == "true" ? true : false;
          console.log(question);
          this.questionService.editQuestion(question).subscribe(function (data) {
            _this19.answerService.getAnswersByQuestionId(questionId).subscribe(function (data) {
              var answers = data;
              answers.forEach(function (el) {
                var answer = new src_app_models_answer__WEBPACK_IMPORTED_MODULE_2__["Answer"]();
                var content = document.getElementById("a_content_".concat(el["answerId"]));
                var isCorrect = document.getElementById("a_isCorrect_".concat(el["answerId"]));
                var mark = document.getElementById("a_mark_".concat(el["answerId"]));
                answer.QuestionId = questionId;
                answer.AnswerId = el["answerId"];
                answer.Content = content.value;
                answer.IsCorrect = isCorrect.checked;
                answer.Mark = Number(mark.value);

                _this19.answerService.editAnswer(answer).subscribe(function (data) {
                  _this19.loadTest(false);
                });
              });

              _this19.toastr.success("Данные по вопросу были изменены.", "Успешно.");
            });
          });
        }
      }, {
        key: "addAnswer",
        value: function addAnswer(questionId) {
          this.questIdForNewAns = questionId == this.questIdForNewAns ? null : questionId;
        }
      }, {
        key: "saveNewAnswer",
        value: function saveNewAnswer() {
          var _this20 = this;

          var answer = new src_app_models_answer__WEBPACK_IMPORTED_MODULE_2__["Answer"]();
          var content = document.getElementById('a_content_new');
          var mark = document.getElementById('a_mark_new');
          var isCorrect = document.getElementById('a_isCorrect_new');
          answer.Content = content.value;
          answer.IsCorrect = isCorrect != null ? isCorrect.checked : false;
          answer.Mark = mark != null ? Number(mark.value) : 0;
          answer.QuestionId = Number(this.questIdForNewAns);
          this.answerService.createAnswerForOldQuestion(answer).subscribe(function (data) {
            _this20.questIdForNewAns = null;

            _this20.loadTestInfoGet();
          });
        }
      }]);

      return TestEditComponent;
    }();

    TestEditComponent.ɵfac = function TestEditComponent_Factory(t) {
      return new (t || TestEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_test_service__WEBPACK_IMPORTED_MODULE_5__["TestService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_question_service__WEBPACK_IMPORTED_MODULE_7__["QuestionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_answer_service__WEBPACK_IMPORTED_MODULE_8__["AnswerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]));
    };

    TestEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TestEditComponent,
      selectors: [["app-test-edit"]],
      decls: 1,
      vars: 1,
      consts: [[4, "ngIf"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-12", "col-md-8", "col-lg-6", "pb-5"], [1, "text-center"], ["autocomplete", "off", 3, "formGroup"], [1, "form-group"], [1, "input-group", "mb-2"], ["type", "text", "formControlName", "Title", "id", "title", "placeholder", "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435", 1, "form-control"], ["type", "text", "formControlName", "Description", "id", "description", "placeholder", "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435", 1, "form-control"], ["type", "text", "formControlName", "Time", "id", "maxTime", "placeholder", "\u0412\u0440\u0435\u043C\u044F", 1, "form-control"], ["class", "text-danger", 4, "ngIf"], [1, "form-group", "text-center"], ["type", "button", "value", "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C", 1, "btn", "btn-success", 3, "disabled", "click"], [1, "table", "mtable"], [1, "text-danger"], [1, "btn", "btn-primary", 3, "click"], [1, "row"], ["type", "checkbox", "id", "isMultiple", 1, "m-2"], ["type", "text", "id", "content", "placeholder", "\u0422\u0435\u043A\u0441\u0442 \u0432\u043E\u043F\u0440\u043E\u0441\u0430", 1, "mx-3", 2, "width", "300px"], ["type", "text", "id", "ansDesc", "placeholder", "\u041E\u0431\u044A\u044F\u0441\u043D\u0435\u043D\u0438\u0435 \u043E\u0442\u0432\u0435\u0442\u0430", 1, "mx-3", 2, "width", "300px"], ["type", "text", "id", "answersCount", 1, "ml-2", 2, "width", "45px"], ["type", "button", "value", "\u0414\u0430\u043B\u0435\u0435", 1, "btn", "btn-success", "m-3", 3, "click"], ["class", "col-12", 4, "ngFor", "ngForOf"], ["type", "submit", 1, "btn", "btn-success", 2, "margin-bottom", "20px", "margin-left", "10px", 3, "click"], [1, "col-12"], [1, "col-2"], [1, "col-8"], [1, "col-1"], [4, "ngIf", "ngIfElse"], ["isMultiple", ""], [1, "col-6"], [1, "col-9"], ["type", "text", "placeholder", "\u041A\u043E\u043D\u0442\u0435\u043D\u0442", "name", "a_content", 2, "width", "100%", 3, "id"], ["type", "text", "placeholder", "\u0411\u0430\u043B", "name", "a_mark", 2, "width", "100%", 3, "id"], ["type", "radio", "name", "a_isCorrect", 3, "id"], ["type", "checkbox", "name", "a_isCorrect", 3, "id"], [4, "ngFor", "ngForOf"], [3, "name"], ["type", "radio", 2, "display", "none", 3, "id", "value"], ["type", "text", 2, "width", "700px", 3, "id", "value"], [1, "pl-3"], ["type", "text", 2, "width", "614px", 3, "id", "value"], [1, "text-center", "my-2"], [1, "btn", "btn-sm", "btn-primary", "mx-3", 3, "click"], [1, "btn", "btn-sm", "btn-primary", "mr-3", 3, "click"], [1, "btn", "btn-sm", "btn-danger", 3, "click"], [1, "col-3", "pr-0", 2, "max-width", "13%!important"], ["type", "text", 1, "mx-2", 2, "width", "400px", 3, "id", "value"], ["type", "text", 2, "width", "45px", 3, "id", "value"], [1, "btn", "btn-sm", "btn-danger", "mx-3", 3, "click"], ["type", "radio", "name", "answer", "checked", "", 3, "id", "value"], ["type", "radio", "name", "answer", 3, "id", "value"], ["type", "checkbox", "name", "answer", "checked", "", 3, "id", "value"], ["type", "checkbox", "name", "answer", 3, "id", "value"], [1, "ml-3", "mr-2", "py-0", "my-0"], ["type", "text", "id", "a_content_new", 1, "mr-3", 2, "width", "300px"], [1, "btn", "btn-sm", "btn-primary", "mx-2", 3, "click"], [1, "ml-3", "my-0"], ["type", "checkbox", "id", "a_isCorrect_new", 1, "mx-1"], [1, "my-0"], ["type", "text", "id", "a_mark_new", 2, "width", "45px"]],
      template: function TestEditComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TestEditComponent_div_0_Template, 57, 12, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loaded);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgForm"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["KeyValuePipe"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TestEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-test-edit',
          templateUrl: './test-edit.component.html',
          styles: []
        }]
      }], function () {
        return [{
          type: src_app_services_test_service__WEBPACK_IMPORTED_MODULE_5__["TestService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: src_app_services_question_service__WEBPACK_IMPORTED_MODULE_7__["QuestionService"]
        }, {
          type: src_app_services_answer_service__WEBPACK_IMPORTED_MODULE_8__["AnswerService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/admin-panel/test/test-form/test-form.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/admin-panel/test/test-form/test-form.component.ts ***!
    \*******************************************************************/

  /*! exports provided: TestFormComponent */

  /***/
  function srcAppAdminPanelTestTestFormTestFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TestFormComponent", function () {
      return TestFormComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_test_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/test.service */
    "./src/app/services/test.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function TestFormComponent_p_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u042D\u0442\u043E \u043F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TestFormComponent_p_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u042D\u0442\u043E \u043F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TestFormComponent_p_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432 \u0432\u0432\u0435\u0434\u0435\u043D\u043E \u043D\u0435\u0432\u0435\u0440\u043D\u043E. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TestFormComponent_p_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u042D\u0442\u043E \u043F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TestFormComponent_p_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0412\u0440\u0435\u043C\u044F \u0432\u0432\u0435\u0434\u0435\u043D\u043E \u043D\u0435\u0432\u0435\u0440\u043D\u043E. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TestFormComponent_p_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u042D\u0442\u043E \u043F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var TestFormComponent = /*#__PURE__*/function () {
      function TestFormComponent(testService) {
        _classCallCheck(this, TestFormComponent);

        this.testService = testService;
      }

      _createClass(TestFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TestFormComponent;
    }();

    TestFormComponent.ɵfac = function TestFormComponent_Factory(t) {
      return new (t || TestFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_test_service__WEBPACK_IMPORTED_MODULE_1__["TestService"]));
    };

    TestFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TestFormComponent,
      selectors: [["test-form"]],
      inputs: {
        test: "test"
      },
      decls: 23,
      vars: 11,
      consts: [["autocomplete", "off", 3, "formGroup"], [1, "form-group"], [1, "input-group", "mb-2"], ["type", "text", "formControlName", "Title", "placeholder", "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435", 1, "form-control", 3, "ngModel", "ngModelChange"], ["class", "text-danger", 4, "ngIf"], ["type", "text", "formControlName", "Description", "placeholder", "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "formControlName", "QuestionsCount", "placeholder", "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "formControlName", "Time", "placeholder", "\u0412\u0440\u0435\u043C\u044F", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "text-danger"]],
      template: function TestFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TestFormComponent_Template_input_ngModelChange_3_listener($event) {
            return ctx.test.title = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TestFormComponent_p_5_Template, 2, 0, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TestFormComponent_Template_input_ngModelChange_8_listener($event) {
            return ctx.test.description = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TestFormComponent_p_10_Template, 2, 0, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TestFormComponent_Template_input_ngModelChange_13_listener($event) {
            return ctx.test.maxScore = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, TestFormComponent_p_15_Template, 2, 0, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, TestFormComponent_p_16_Template, 2, 0, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TestFormComponent_Template_input_ngModelChange_19_listener($event) {
            return ctx.test.maxTime = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, TestFormComponent_p_21_Template, 2, 0, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, TestFormComponent_p_22_Template, 2, 0, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.testService.testModel);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.test.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.testService.testModel.get("Title").touched && (ctx.testService.testModel.get("Title").errors == null ? null : ctx.testService.testModel.get("Title").errors.required));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.test.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.testService.testModel.get("Description").touched && (ctx.testService.testModel.get("Description").errors == null ? null : ctx.testService.testModel.get("Description").errors.required));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.test.maxScore);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.testService.testModel.get("QuestionsCount").touched && (ctx.testService.testModel.get("QuestionsCount").errors == null ? null : ctx.testService.testModel.get("QuestionsCount").errors.questionCountRange));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.testService.testModel.get("QuestionsCount").touched && (ctx.testService.testModel.get("QuestionsCount").errors == null ? null : ctx.testService.testModel.get("QuestionsCount").errors.required));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.test.maxTime);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.testService.testModel.get("Time").touched && (ctx.testService.testModel.get("Time").errors == null ? null : ctx.testService.testModel.get("Time").errors.pattern));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.testService.testModel.get("Time").touched && (ctx.testService.testModel.get("Time").errors == null ? null : ctx.testService.testModel.get("Time").errors.required));
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TestFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'test-form',
          templateUrl: './test-form.component.html',
          styles: []
        }]
      }], function () {
        return [{
          type: src_app_services_test_service__WEBPACK_IMPORTED_MODULE_1__["TestService"]
        }];
      }, {
        test: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/admin-panel/test/test-list/test-list.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/admin-panel/test/test-list/test-list.component.ts ***!
    \*******************************************************************/

  /*! exports provided: TestListComponent */

  /***/
  function srcAppAdminPanelTestTestListTestListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TestListComponent", function () {
      return TestListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_test_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/test.service */
    "./src/app/services/test.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function TestListComponent_tr_29_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TestListComponent_tr_29_Template_button_click_16_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var t_r1 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2["delete"](t_r1.testId);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var t_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t_r1 == null ? null : t_r1.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t_r1 == null ? null : t_r1.description);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t_r1 == null ? null : t_r1.questionsCount);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t_r1 == null ? null : t_r1.maxScore);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t_r1 == null ? null : t_r1.passedTimes);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t_r1 == null ? null : t_r1.maxTime.substring(14));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/admin-panel/test-edit/", t_r1.testId, "");
      }
    }

    var TestListComponent = /*#__PURE__*/function () {
      function TestListComponent(testService, toastr) {
        _classCallCheck(this, TestListComponent);

        this.testService = testService;
        this.toastr = toastr;
        this.pageNumber = 1;
      }

      _createClass(TestListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadTests();
        }
      }, {
        key: "loadTests",
        value: function loadTests() {
          var _this21 = this;

          this.testService.getTestsForPagination(this.pageNumber).subscribe(function (data) {
            _this21.tests = data;

            if (data.length != 0) {
              _this21.previousTests = data;
            } else {
              _this21.tests = _this21.previousTests;
              _this21.pageNumber--;
            }
          });
        }
      }, {
        key: "nextPage",
        value: function nextPage() {
          this.pageNumber++;
          this.loadTests();
        }
      }, {
        key: "previousPage",
        value: function previousPage() {
          if (this.pageNumber > 1) {
            this.pageNumber--;
          }

          this.loadTests();
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          var _this22 = this;

          var result = confirm("Вы уверены что хотите удалить этот тест?");

          if (result == true) {
            this.testService.deleteTest(id).subscribe(function (data) {
              _this22.pageNumber--;

              _this22.loadTests();

              _this22.toastr.success('Тест был удален.', 'Успешно.');
            }), function (err) {
              _this22.toastr.success('Тест не был удален. Что-то пошло не так.', 'Безуспешно.');

              console.log(err);
            };
          }
        }
      }]);

      return TestListComponent;
    }();

    TestListComponent.ɵfac = function TestListComponent_Factory(t) {
      return new (t || TestListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_test_service__WEBPACK_IMPORTED_MODULE_1__["TestService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]));
    };

    TestListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TestListComponent,
      selectors: [["app-test-list"]],
      decls: 30,
      vars: 1,
      consts: [[1, "container"], [1, "text-center"], ["routerLink", "/admin-panel/test-create", 1, "btn", "btn-sm", "btn-primary"], [2, "text-align", "center"], [1, "btn", "btn-sm", "btn-info", "mx-3", 3, "click"], [1, "btn", "btn-sm", "btn-info", 3, "click"], [1, "table", "mtable"], [4, "ngFor", "ngForOf"], [1, "btn", "btn-sm", "btn-primary", 2, "margin-right", "5px", 3, "routerLink"], [1, "btn", "btn-sm", "btn-danger", 3, "click"]],
      template: function TestListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0442\u0435\u0441\u0442");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u0421\u043F\u0438\u0441\u043E\u043A \u0442\u0435\u0441\u0442\u043E\u0432");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TestListComponent_Template_button_click_7_listener() {
            return ctx.previousPage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "<");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TestListComponent_Template_button_click_9_listener() {
            return ctx.nextPage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, ">");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "table", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u0422\u0435\u0441\u0442");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\u0411\u0430\u043B");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u041F\u0440\u043E\u0439\u0434\u0435\u043D\u043E \u0440\u0430\u0437");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\u0412\u0440\u0435\u043C\u044F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\u041E\u043F\u0435\u0440\u0430\u0446\u0438\u0438");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, TestListComponent_tr_29_Template, 18, 7, "tr", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tests);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TestListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-test-list',
          templateUrl: './test-list.component.html',
          styles: []
        }]
      }], function () {
        return [{
          type: src_app_services_test_service__WEBPACK_IMPORTED_MODULE_1__["TestService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/admin-panel/user-test/user-test-create/user-test-create.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/admin-panel/user-test/user-test-create/user-test-create.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: UserTestCreateComponent */

  /***/
  function srcAppAdminPanelUserTestUserTestCreateUserTestCreateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserTestCreateComponent", function () {
      return UserTestCreateComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_models_testResult__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/models/testResult */
    "./src/app/models/testResult.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var src_app_services_usertest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/usertest.service */
    "./src/app/services/usertest.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _user_test_form_ut_user_test_form_ut_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../user-test-form-ut/user-test-form-ut.component */
    "./src/app/admin-panel/user-test/user-test-form-ut/user-test-form-ut.component.ts");
    /* harmony import */


    var _user_test_form_mt_user_test_form_mt_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../user-test-form-mt/user-test-form-mt.component */
    "./src/app/admin-panel/user-test/user-test-form-mt/user-test-form-mt.component.ts");

    var UserTestCreateComponent = /*#__PURE__*/function () {
      function UserTestCreateComponent(toastr, userTestService, router, activeRoute) {
        _classCallCheck(this, UserTestCreateComponent);

        this.toastr = toastr;
        this.userTestService = userTestService;
        this.router = router;
      }

      _createClass(UserTestCreateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.userTestService.userTestModel.reset();
          this.userTest = new src_app_models_testResult__WEBPACK_IMPORTED_MODULE_1__["TestResult"]();
        }
      }, {
        key: "create",
        value: function create() {
          var _this23 = this;

          var testResult = new src_app_models_testResult__WEBPACK_IMPORTED_MODULE_1__["TestResult"]();
          var time = new Date();
          var userTestTime = this.userTest.Time.split(":");
          time.setMinutes(userTestTime[0]);
          time.setSeconds(userTestTime[1]);
          time.setMilliseconds(0);
          var username = document.getElementById("Username");
          var testTitle = document.getElementById("TestTitle");
          testResult.Username = username.value;
          testResult.TestTitle = testTitle.value;
          testResult.Mark = Number(this.userTest.Mark);
          testResult.Time = time;
          this.userTestService.postTestResultByAdmin(testResult).subscribe(function (data) {
            _this23.userTestService.userTestModel.reset();

            _this23.toastr.success("Результат теста был создан.", "Успешно.");

            _this23.router.navigateByUrl("/admin-panel");
          }, function (err) {
            if (err.error == "User was not found") {
              _this23.toastr.error("Пользователь с таким именем не был найден.", "Результат теста не был создан.");
            } else if (err.error == "Test was not found") {
              _this23.toastr.error("Тест с таким названием не был найден.", "Результат теста не был создан.");
            } else if (err.error == "Test result`s time can not be higher than test`s maximum time") {
              _this23.toastr.error("Время прохождения теста не может быть больше чем максимально допустимое время теста.", "Результат теста не был создан.");
            }
          });
        }
      }]);

      return UserTestCreateComponent;
    }();

    UserTestCreateComponent.ɵfac = function UserTestCreateComponent_Factory(t) {
      return new (t || UserTestCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_usertest_service__WEBPACK_IMPORTED_MODULE_3__["UserTestService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]));
    };

    UserTestCreateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UserTestCreateComponent,
      selectors: [["app-user-test-create"]],
      decls: 9,
      vars: 3,
      consts: [[1, "container"], [1, "row", "justify-content-center"], [1, "col-12", "col-md-8", "col-lg-6", "pb-5"], [1, "text-center"], [3, "userTest", "userTestChange"], [1, "form-group", "text-center"], ["type", "button", "value", "\u0421\u043E\u0437\u0434\u0430\u0442\u044C", 1, "btn", "btn-success", 3, "disabled", "click"]],
      template: function UserTestCreateComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0430 \u0442\u0435\u0441\u0442\u0430");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "user-test-form-ut", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("userTestChange", function UserTestCreateComponent_Template_user_test_form_ut_userTestChange_5_listener($event) {
            return ctx.userTest = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "user-test-form-mt", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("userTestChange", function UserTestCreateComponent_Template_user_test_form_mt_userTestChange_6_listener($event) {
            return ctx.userTest = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserTestCreateComponent_Template_input_click_8_listener() {
            return ctx.create();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("userTest", ctx.userTest);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("userTest", ctx.userTest);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.userTestService.userTestModel.valid);
        }
      },
      directives: [_user_test_form_ut_user_test_form_ut_component__WEBPACK_IMPORTED_MODULE_5__["UserTestFormUTComponent"], _user_test_form_mt_user_test_form_mt_component__WEBPACK_IMPORTED_MODULE_6__["UserTestFormMTComponent"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserTestCreateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-user-test-create',
          templateUrl: './user-test-create.component.html',
          styles: []
        }]
      }], function () {
        return [{
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]
        }, {
          type: src_app_services_usertest_service__WEBPACK_IMPORTED_MODULE_3__["UserTestService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/admin-panel/user-test/user-test-edit/user-test-edit.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/admin-panel/user-test/user-test-edit/user-test-edit.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: UserTestEditComponent */

  /***/
  function srcAppAdminPanelUserTestUserTestEditUserTestEditComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserTestEditComponent", function () {
      return UserTestEditComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_models_testResult__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/models/testResult */
    "./src/app/models/testResult.ts");
    /* harmony import */


    var src_app_services_usertest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/usertest.service */
    "./src/app/services/usertest.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _user_test_form_mt_user_test_form_mt_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../user-test-form-mt/user-test-form-mt.component */
    "./src/app/admin-panel/user-test/user-test-form-mt/user-test-form-mt.component.ts");

    function UserTestEditComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u0418\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0435 \u0434\u0430\u043D\u043D\u044B\u0445 \u043E \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0435 \u0442\u0435\u0441\u0442\u0430 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "user-test-form-mt", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("userTestChange", function UserTestEditComponent_div_0_Template_user_test_form_mt_userTestChange_6_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1.userTest = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserTestEditComponent_div_0_Template_input_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.save();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "table", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "thead");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u0422\u0435\u0441\u0442");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u0412\u0440\u0435\u043C\u044F");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("userTest", ctx_r0.userTest);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.userTest == null ? null : ctx_r0.userTest.username);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.userTest == null ? null : ctx_r0.userTest.test);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.userTest == null ? null : ctx_r0.userTest.mark, "%");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.userTest == null ? null : ctx_r0.userTest.time.substring(14));
      }
    }

    var UserTestEditComponent = /*#__PURE__*/function () {
      function UserTestEditComponent(userTestService, activeRoute, toastr) {
        _classCallCheck(this, UserTestEditComponent);

        this.userTestService = userTestService;
        this.toastr = toastr;
        this.id = activeRoute.snapshot.params["id"];
      }

      _createClass(UserTestEditComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.id) {
            this.loadUserTest();
          }
        }
      }, {
        key: "save",
        value: function save() {
          var _this24 = this;

          if (this.userTest.Time != null || this.userTest.Mark != null) {
            var testResult = new src_app_models_testResult__WEBPACK_IMPORTED_MODULE_1__["TestResult"]();
            var time = new Date();

            if (this.userTest.Time != null) {
              var userTestTime = this.userTest.Time.split(":");
              time.setMinutes(userTestTime[0]);
              time.setSeconds(userTestTime[1]);
              time.setMilliseconds(0);
              testResult.Time = time;
            } else {
              testResult.Time = this.userTestTime;
            }

            if (this.userTest.Mark != null) {
              testResult.Mark = Number(this.userTest.Mark);
            } else {
              testResult.Mark = this.userTestMark;
            }

            testResult.UserTestId = this.userTest.userTestId;
            testResult.UserId = this.userTest.userId;
            testResult.TestId = this.userTest.testId;
            this.userTestService.putUserTest(testResult).subscribe(function (data) {
              _this24.userTestService.userTestModel.reset();

              _this24.toastr.success("Данные о результате теста были изменены.", "Успешно.");

              _this24.loadUserTest();
            }, function (err) {
              if (err.error == "Test result`s time can not be higher than test`s maximum time") {
                _this24.toastr.error("Время прохождения теста не может быть больше чем максимально допустимое время теста.", "Результат теста не был создан.");
              }
            });
          } else {
            this.toastr.error("Введите данные для результата теста.", "Безуспешно.");
          }
        }
      }, {
        key: "loadUserTest",
        value: function loadUserTest() {
          var _this25 = this;

          this.userTestService.getUserTestById(this.id).subscribe(function (data) {
            _this25.userTestTime = data["time"];
            _this25.userTestMark = data["mark"];
            _this25.userTest = data;
            _this25.loaded = true;
          });
        }
      }]);

      return UserTestEditComponent;
    }();

    UserTestEditComponent.ɵfac = function UserTestEditComponent_Factory(t) {
      return new (t || UserTestEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_usertest_service__WEBPACK_IMPORTED_MODULE_2__["UserTestService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]));
    };

    UserTestEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UserTestEditComponent,
      selectors: [["app-user-test-edit"]],
      decls: 1,
      vars: 1,
      consts: [[4, "ngIf"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-12", "col-md-8", "col-lg-6", "pb-5"], [1, "text-center"], [3, "userTest", "userTestChange"], [1, "form-group", "text-center"], ["type", "button", "value", "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C", 1, "btn", "btn-success", 3, "click"], [1, "table", "mtable"]],
      template: function UserTestEditComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, UserTestEditComponent_div_0_Template, 30, 5, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loaded);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _user_test_form_mt_user_test_form_mt_component__WEBPACK_IMPORTED_MODULE_6__["UserTestFormMTComponent"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserTestEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-user-test-edit',
          templateUrl: './user-test-edit.component.html',
          styleUrls: []
        }]
      }], function () {
        return [{
          type: src_app_services_usertest_service__WEBPACK_IMPORTED_MODULE_2__["UserTestService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/admin-panel/user-test/user-test-form-mt/user-test-form-mt.component.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/admin-panel/user-test/user-test-form-mt/user-test-form-mt.component.ts ***!
    \****************************************************************************************/

  /*! exports provided: UserTestFormMTComponent */

  /***/
  function srcAppAdminPanelUserTestUserTestFormMtUserTestFormMtComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserTestFormMTComponent", function () {
      return UserTestFormMTComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_usertest_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/usertest.service */
    "./src/app/services/usertest.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function UserTestFormMTComponent_label_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0411\u0430\u043B \u0432\u0432\u0435\u0434\u0435\u043D \u043D\u0435\u0432\u0435\u0440\u043D\u043E. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function UserTestFormMTComponent_label_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u042D\u0442\u043E \u043F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function UserTestFormMTComponent_label_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0412\u0440\u0435\u043C\u044F \u0432\u0432\u0435\u0434\u0435\u043D\u043E \u043D\u0435\u0432\u0435\u0440\u043D\u043E. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function UserTestFormMTComponent_label_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u042D\u0442\u043E \u043F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var UserTestFormMTComponent = /*#__PURE__*/function () {
      function UserTestFormMTComponent(userTestService) {
        _classCallCheck(this, UserTestFormMTComponent);

        this.userTestService = userTestService;
      }

      _createClass(UserTestFormMTComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return UserTestFormMTComponent;
    }();

    UserTestFormMTComponent.ɵfac = function UserTestFormMTComponent_Factory(t) {
      return new (t || UserTestFormMTComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_usertest_service__WEBPACK_IMPORTED_MODULE_1__["UserTestService"]));
    };

    UserTestFormMTComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UserTestFormMTComponent,
      selectors: [["user-test-form-mt"]],
      inputs: {
        userTest: "userTest"
      },
      decls: 11,
      vars: 7,
      consts: [["autocomplete", "off", 3, "formGroup"], [1, "form-group"], [1, "input-group", "mb-2"], ["type", "text", "formControlName", "Mark", "placeholder", "\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442", 1, "form-control", 3, "ngModel", "ngModelChange"], ["class", "text-danger", 4, "ngIf"], ["type", "text", "formControlName", "Time", "placeholder", "\u0412\u0440\u0435\u043C\u044F - 03:00", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "text-danger"]],
      template: function UserTestFormMTComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserTestFormMTComponent_Template_input_ngModelChange_3_listener($event) {
            return ctx.userTest.Mark = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, UserTestFormMTComponent_label_4_Template, 2, 0, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, UserTestFormMTComponent_label_5_Template, 2, 0, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserTestFormMTComponent_Template_input_ngModelChange_8_listener($event) {
            return ctx.userTest.Time = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, UserTestFormMTComponent_label_9_Template, 2, 0, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, UserTestFormMTComponent_label_10_Template, 2, 0, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.userTestService.userTestModel);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userTest.Mark);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userTestService.userTestModel.get("Mark").touched && (ctx.userTestService.userTestModel.get("Mark").errors == null ? null : ctx.userTestService.userTestModel.get("Mark").errors.markRange));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userTestService.userTestModel.get("Mark").touched && (ctx.userTestService.userTestModel.get("Mark").errors == null ? null : ctx.userTestService.userTestModel.get("Mark").errors.required));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userTest.Time);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userTestService.userTestModel.get("Time").touched && (ctx.userTestService.userTestModel.get("Time").errors == null ? null : ctx.userTestService.userTestModel.get("Time").errors.pattern));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userTestService.userTestModel.get("Time").touched && (ctx.userTestService.userTestModel.get("Time").errors == null ? null : ctx.userTestService.userTestModel.get("Time").errors.required));
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserTestFormMTComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'user-test-form-mt',
          templateUrl: './user-test-form-mt.component.html',
          styles: []
        }]
      }], function () {
        return [{
          type: src_app_services_usertest_service__WEBPACK_IMPORTED_MODULE_1__["UserTestService"]
        }];
      }, {
        userTest: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/admin-panel/user-test/user-test-form-ut/user-test-form-ut.component.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/admin-panel/user-test/user-test-form-ut/user-test-form-ut.component.ts ***!
    \****************************************************************************************/

  /*! exports provided: UserTestFormUTComponent */

  /***/
  function srcAppAdminPanelUserTestUserTestFormUtUserTestFormUtComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserTestFormUTComponent", function () {
      return UserTestFormUTComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_usertest_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/usertest.service */
    "./src/app/services/usertest.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function UserTestFormUTComponent_label_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u042D\u0442\u043E \u043F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function UserTestFormUTComponent_label_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u042D\u0442\u043E \u043F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var UserTestFormUTComponent = /*#__PURE__*/function () {
      function UserTestFormUTComponent(userTestService) {
        _classCallCheck(this, UserTestFormUTComponent);

        this.userTestService = userTestService;
      }

      _createClass(UserTestFormUTComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return UserTestFormUTComponent;
    }();

    UserTestFormUTComponent.ɵfac = function UserTestFormUTComponent_Factory(t) {
      return new (t || UserTestFormUTComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_usertest_service__WEBPACK_IMPORTED_MODULE_1__["UserTestService"]));
    };

    UserTestFormUTComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UserTestFormUTComponent,
      selectors: [["user-test-form-ut"]],
      inputs: {
        userTest: "userTest"
      },
      decls: 9,
      vars: 3,
      consts: [["autocomplete", "off", 3, "formGroup"], [1, "form-group"], [1, "input-group", "mb-2"], ["type", "text", "formControlName", "Username", "id", "Username", "placeholder", "\u0418\u043C\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F", 1, "form-control"], ["class", "text-danger", 4, "ngIf"], ["type", "text", "formControlName", "TestTitle", "id", "TestTitle", "placeholder", "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0442\u0435\u0441\u0442\u0430", 1, "form-control"], [1, "text-danger"]],
      template: function UserTestFormUTComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, UserTestFormUTComponent_label_4_Template, 2, 0, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, UserTestFormUTComponent_label_8_Template, 2, 0, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.userTestService.userTestModel);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userTestService.userTestModel.get("Username").touched && (ctx.userTestService.userTestModel.get("Username").errors == null ? null : ctx.userTestService.userTestModel.get("Username").errors.required));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userTestService.userTestModel.get("TestTitle").touched && (ctx.userTestService.userTestModel.get("TestTitle").errors == null ? null : ctx.userTestService.userTestModel.get("TestTitle").errors.required));
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserTestFormUTComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'user-test-form-ut',
          templateUrl: './user-test-form-ut.component.html',
          styles: []
        }]
      }], function () {
        return [{
          type: src_app_services_usertest_service__WEBPACK_IMPORTED_MODULE_1__["UserTestService"]
        }];
      }, {
        userTest: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/admin-panel/user-test/user-test-list/user-test-list.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/admin-panel/user-test/user-test-list/user-test-list.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: UserTestListComponent */

  /***/
  function srcAppAdminPanelUserTestUserTestListUserTestListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserTestListComponent", function () {
      return UserTestListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var src_app_services_usertest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/usertest.service */
    "./src/app/services/usertest.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function UserTestListComponent_tr_25_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserTestListComponent_tr_25_Template_button_click_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var u_r1 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.deleteUserTest(u_r1.userTestId);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var u_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](u_r1 == null ? null : u_r1.username);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](u_r1 == null ? null : u_r1.test);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", u_r1 == null ? null : u_r1.mark, "%");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](u_r1 == null ? null : u_r1.time.substring(14));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/admin-panel/user-test-edit/", u_r1.userTestId, "");
      }
    }

    var UserTestListComponent = /*#__PURE__*/function () {
      function UserTestListComponent(router, toastr, userTestService) {
        _classCallCheck(this, UserTestListComponent);

        this.router = router;
        this.toastr = toastr;
        this.userTestService = userTestService;
        this.pageNumber = 1;
      }

      _createClass(UserTestListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadUserTests();
        }
      }, {
        key: "loadUserTests",
        value: function loadUserTests() {
          var _this26 = this;

          this.userTestService.getUserTestsForPagination(this.pageNumber).subscribe(function (data) {
            _this26.userTests = data;

            if (data.length != 0) {
              _this26.previousUserTests = data;
            } else {
              _this26.userTests = _this26.previousUserTests;
              _this26.pageNumber--;
            }
          });
        }
      }, {
        key: "nextPage",
        value: function nextPage() {
          this.pageNumber++;
          this.loadUserTests();
        }
      }, {
        key: "previousPage",
        value: function previousPage() {
          if (this.pageNumber > 1) {
            this.pageNumber--;
          }

          this.loadUserTests();
        }
      }, {
        key: "deleteUserTest",
        value: function deleteUserTest(id) {
          var _this27 = this;

          var result = confirm("Вы уверены что хотите удалить этот результат?");

          if (result == true) {
            this.userTestService.deleteUserTest(id).subscribe(function (data) {
              return _this27.loadUserTests();
            });
            this.toastr.success("Результат прохождения теста был удален.", "Успешно.");
          }
        }
      }]);

      return UserTestListComponent;
    }();

    UserTestListComponent.ɵfac = function UserTestListComponent_Factory(t) {
      return new (t || UserTestListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_usertest_service__WEBPACK_IMPORTED_MODULE_3__["UserTestService"]));
    };

    UserTestListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UserTestListComponent,
      selectors: [["app-user-test-list"]],
      decls: 26,
      vars: 1,
      consts: [[1, "container"], [1, "text-center"], ["routerLink", "/admin-panel/user-test-create", 1, "btn", "btn-sm", "btn-primary"], [2, "text-align", "center"], [1, "btn", "btn-sm", "btn-info", "mx-3", 3, "click"], [1, "btn", "btn-sm", "btn-info", 3, "click"], [1, "table", "mtable"], [4, "ngFor", "ngForOf"], [1, "btn", "btn-sm", "btn-primary", 2, "margin-right", "5px", 3, "routerLink"], [1, "btn", "btn-sm", "btn-danger", 3, "click"]],
      template: function UserTestListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u0421\u043F\u0438\u0441\u043E\u043A \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserTestListComponent_Template_button_click_7_listener() {
            return ctx.previousPage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "<");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserTestListComponent_Template_button_click_9_listener() {
            return ctx.nextPage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, ">");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "table", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u0422\u0435\u0441\u0442");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\u0412\u0440\u0435\u043C\u044F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u041E\u043F\u0435\u0440\u0430\u0446\u0438\u0438");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, UserTestListComponent_tr_25_Template, 14, 5, "tr", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.userTests);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserTestListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-user-test-list',
          templateUrl: './user-test-list.component.html',
          styles: []
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]
        }, {
          type: src_app_services_usertest_service__WEBPACK_IMPORTED_MODULE_3__["UserTestService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/admin-panel/user/user-edit/user-edit.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/admin-panel/user/user-edit/user-edit.component.ts ***!
    \*******************************************************************/

  /*! exports provided: UserEditComponent */

  /***/
  function srcAppAdminPanelUserUserEditUserEditComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserEditComponent", function () {
      return UserEditComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var src_app_services_usertest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/usertest.service */
    "./src/app/services/usertest.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");

    function UserEditComponent_div_0_tr_30_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserEditComponent_div_0_tr_30_Template_button_click_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var u_r2 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r3.deleteTestResult(u_r2.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var u_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](u_r2 == null ? null : u_r2.test);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", u_r2 == null ? null : u_r2.mark, "%");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](u_r2 == null ? null : u_r2.time.substring(14));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/admin-panel/user-test-edit/", u_r2.id, "");
      }
    }

    function UserEditComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u0418\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0435 \u0434\u0430\u043D\u043D\u044B\u0445 \u043E \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "user-form", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("userChange", function UserEditComponent_div_0_Template_user_form_userChange_6_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.user = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserEditComponent_div_0_Template_input_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.onSubmit();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserEditComponent_div_0_Template_input_click_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r8.makeUserAdmin();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserEditComponent_div_0_Template_input_click_11_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r9.makeUserCustomer();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u041B\u0438\u0447\u043D\u044B\u0439 \u043A\u0430\u0431\u0438\u043D\u0435\u0442");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h1", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u041F\u0440\u043E\u0439\u0434\u0435\u043D\u043D\u044B\u0435 \u0442\u0435\u0441\u0442\u044B");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "table", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "thead");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u0422\u0435\u0441\u0442");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\u0412\u0440\u0435\u043C\u044F");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\u041E\u043F\u0435\u0440\u0430\u0446\u0438\u0438");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, UserEditComponent_div_0_tr_30_Template, 12, 4, "tr", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("user", ctx_r0.user);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r0.userService.emailModel.valid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/account/", ctx_r0.id, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.userTests);
      }
    }

    var UserEditComponent = /*#__PURE__*/function () {
      function UserEditComponent(userService, userTestService, router, toastr, activeRoute) {
        _classCallCheck(this, UserEditComponent);

        this.userService = userService;
        this.userTestService = userTestService;
        this.router = router;
        this.toastr = toastr;
        this.loaded = false;
        this.id = activeRoute.snapshot.params["id"];
      }

      _createClass(UserEditComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this28 = this;

          if (this.id) {
            this.userService.getUser(this.id).subscribe(function (data) {
              _this28.user = data;

              if (_this28.user != null) {
                _this28.loaded = true;
              }
            });
            this.loadUserTests();
          }
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this29 = this;

          var img = document.createElement("img");
          img.src = this.user.ProfileImageUrl;

          img.onerror = function () {
            if (!_this29.user.ProfileImageUrl) {
              _this29.saveUser();
            } else {
              _this29.toastr.error("Ссылка на картинку недействительна.", "Безуспешно.");

              ;
            }
          };

          img.onload = function () {
            _this29.saveUser();
          };
        }
      }, {
        key: "saveUser",
        value: function saveUser() {
          var _this30 = this;

          if (this.user.Email != null || this.user.UserName != null || this.user.AboutMe != null || this.user.ProfileImageUrl != null) {
            this.userService.putUser(this.user).subscribe(function (data) {
              _this30.userService.emailModel.reset();

              document.getElementById('Username').value = "";
              document.getElementById('AboutMe').value = "";
              document.getElementById('ProfileImageUrl').value = "";

              _this30.toastr.success("Данные о пользователе были изменены.", "Успешно.");
            });
          } else {
            this.toastr.error("Введите новые данные пользователя", "Безуспешно.");
          }
        }
      }, {
        key: "loadUserTests",
        value: function loadUserTests() {
          var _this31 = this;

          this.userTestService.getUserTestsByUserId(this.id).subscribe(function (data) {
            _this31.userTests = data;
          });
        }
      }, {
        key: "deleteTestResult",
        value: function deleteTestResult(id) {
          var _this32 = this;

          var result = confirm("Вы уверены что хотите удалить результат теста?");

          if (result == true) {
            this.userTestService.deleteUserTest(id).subscribe(function (data) {
              return _this32.loadUserTests();
            });
            this.toastr.success("Результат прохождения теста был удален.", "Успешно.");
          }
        }
      }, {
        key: "makeUserAdmin",
        value: function makeUserAdmin() {
          var _this33 = this;

          this.user.Role = "admin";
          this.userService.changeUserRole(this.user).subscribe(function (res) {
            if (res.succeeded) {
              _this33.toastr.success('Пользователь назначен администратором.', 'Успешно.');
            } else {
              res.errors.forEach(function (element) {
                switch (element.code) {
                  case 'UserAlreadyInRole':
                    _this33.toastr.error('Пользователь уже был назначен администратором.', 'Безуспешно.');

                    break;

                  default:
                    _this33.toastr.error(element.description, 'Безуспешно.');

                    break;
                }
              });
            }
          }, function (err) {
            _this33.toastr.error('Что-то пошло не так.', 'Безуспешно.');
          });
        }
      }, {
        key: "makeUserCustomer",
        value: function makeUserCustomer() {
          var _this34 = this;

          this.user.Role = "customer";
          this.userService.changeUserRole(this.user).subscribe(function (res) {
            if (res.succeeded) {
              _this34.toastr.success('Пользователь назначен клиентом.', 'Успешно.');
            } else {
              res.errors.forEach(function (element) {
                switch (element.code) {
                  case 'UserAlreadyInRole':
                    _this34.toastr.error('Пользователь уже был назначен клиентом.', 'Безуспешно.');

                    break;

                  default:
                    _this34.toastr.error(element.description, 'Безуспешно.');

                    break;
                }
              });
            }
          }, function (err) {
            console.log(err);

            _this34.toastr.error('Что-то пошло не так.', 'Безуспешно.');
          });
        }
      }]);

      return UserEditComponent;
    }();

    UserEditComponent.ɵfac = function UserEditComponent_Factory(t) {
      return new (t || UserEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_usertest_service__WEBPACK_IMPORTED_MODULE_2__["UserTestService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]));
    };

    UserEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UserEditComponent,
      selectors: [["app-user-edit"]],
      decls: 1,
      vars: 1,
      consts: [[4, "ngIf"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-12", "col-md-8", "col-lg-6", "pb-5"], [3, "user", "userChange"], [1, "form-group", "text-center"], ["type", "button", "value", "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C", 1, "btn", "btn-success", 3, "disabled", "click"], [1, "text-center"], ["type", "button", "value", "\u041D\u0430\u0437\u043D\u0430\u0447\u0438\u0442\u044C \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u043E\u043C", 1, "btn", "btn-info", "mx-3", 3, "click"], ["type", "button", "value", "\u041D\u0430\u0437\u043D\u0430\u0447\u0438\u0442\u044C \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u043C", 1, "btn", "btn-info", "mx-3", 3, "click"], [1, "btn", "btn-info", "mx-3", 3, "routerLink"], [1, "table", "mtable"], [4, "ngFor", "ngForOf"], [1, "btn", "btn-sm", "btn-primary", 2, "margin-right", "5px", 3, "routerLink"], [1, "btn", "btn-sm", "btn-danger", 3, "click"]],
      template: function UserEditComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, UserEditComponent_div_0_Template, 31, 4, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loaded);
        }
      },
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-user-edit',
          templateUrl: './user-edit.component.html',
          styles: []
        }]
      }], function () {
        return [{
          type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]
        }, {
          type: src_app_services_usertest_service__WEBPACK_IMPORTED_MODULE_2__["UserTestService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/admin-panel/user/user-form/user-form.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/admin-panel/user/user-form/user-form.component.ts ***!
    \*******************************************************************/

  /*! exports provided: UserFormComponent */

  /***/
  function srcAppAdminPanelUserUserFormUserFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserFormComponent", function () {
      return UserFormComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function UserFormComponent_label_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u041F\u043E\u0447\u0442\u0430 \u0432\u0432\u0435\u0434\u0435\u043D\u0430 \u043D\u0435\u0432\u0435\u0440\u043D\u043E. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var UserFormComponent = /*#__PURE__*/function () {
      function UserFormComponent(userService, fb) {
        _classCallCheck(this, UserFormComponent);

        this.userService = userService;
        this.fb = fb;
      }

      _createClass(UserFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.userService.emailModel.reset();
        }
      }]);

      return UserFormComponent;
    }();

    UserFormComponent.ɵfac = function UserFormComponent_Factory(t) {
      return new (t || UserFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]));
    };

    UserFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UserFormComponent,
      selectors: [["user-form"]],
      inputs: {
        user: "user"
      },
      decls: 20,
      vars: 6,
      consts: [[1, "form-group"], [1, "input-group", "mb-2"], [1, "input-group-prepend"], [1, "input-group-text"], [1, "fa", "fa-user", "text-info"], ["type", "text", "id", "Username", "placeholder", "Alex", 1, "form-control", 3, "ngModel", "ngModelChange"], ["autocomplete", "off", 3, "formGroup"], [1, "fa", "fa-envelope", "text-info"], ["type", "email", "formControlName", "UserEmail", "placeholder", "Email@gmail.com", 1, "form-control", 3, "ngModel", "ngModelChange"], ["class", "text-danger", 4, "ngIf"], ["type", "text", "id", "ProfileImageUrl", "placeholder", "\u041E \u0441\u0435\u0431\u0435", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "id", "AboutMe", "placeholder", "\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0430\u0432\u0430\u0442\u0430\u0440", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "text-danger"]],
      template: function UserFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserFormComponent_Template_input_ngModelChange_5_listener($event) {
            return ctx.user.UserName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserFormComponent_Template_input_ngModelChange_12_listener($event) {
            return ctx.user.Email = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, UserFormComponent_label_13_Template, 2, 0, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserFormComponent_Template_input_ngModelChange_16_listener($event) {
            return ctx.user.AboutMe = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserFormComponent_Template_input_ngModelChange_19_listener($event) {
            return ctx.user.ProfileImageUrl = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.UserName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.userService.emailModel);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.Email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userService.emailModel.get("UserEmail").touched && (ctx.userService.emailModel.get("UserEmail").errors == null ? null : ctx.userService.emailModel.get("UserEmail").errors.email));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.AboutMe);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.ProfileImageUrl);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'user-form',
          templateUrl: './user-form.component.html',
          styles: []
        }]
      }], function () {
        return [{
          type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }];
      }, {
        user: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/admin-panel/user/user-list/user-list.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/admin-panel/user/user-list/user-list.component.ts ***!
    \*******************************************************************/

  /*! exports provided: UserListComponent */

  /***/
  function srcAppAdminPanelUserUserListUserListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserListComponent", function () {
      return UserListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function UserListComponent_tr_18_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserListComponent_tr_18_Template_button_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var u_r1 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2["delete"](u_r1.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var u_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](u_r1 == null ? null : u_r1.email);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](u_r1 == null ? null : u_r1.username);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/admin-panel/user-edit/", u_r1.id, "");
      }
    }

    var UserListComponent = /*#__PURE__*/function () {
      function UserListComponent(toastr, userService) {
        _classCallCheck(this, UserListComponent);

        this.toastr = toastr;
        this.userService = userService;
        this.pageNumber = 1;
      }

      _createClass(UserListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadUsers();
        }
      }, {
        key: "loadUsers",
        value: function loadUsers() {
          var _this35 = this;

          this.userService.getUsersForPagination(this.pageNumber).subscribe(function (data) {
            _this35.users = data;

            if (data.length != 0) {
              _this35.previousUsers = data;
            } else {
              _this35.users = _this35.previousUsers;
              _this35.pageNumber--;
            }
          });
        }
      }, {
        key: "nextPage",
        value: function nextPage() {
          this.pageNumber++;
          this.loadUsers();
        }
      }, {
        key: "previousPage",
        value: function previousPage() {
          if (this.pageNumber > 1) {
            this.pageNumber--;
          }

          this.loadUsers();
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          var _this36 = this;

          var result = confirm("Вы уверены что хотите удалить этого пользователя?");

          if (result == true) {
            this.userService.deleteUser(id).subscribe(function (data) {
              return _this36.loadUsers();
            });
            this.toastr.success("Пользователь был удален.", "Успешно.");
          }
        }
      }]);

      return UserListComponent;
    }();

    UserListComponent.ɵfac = function UserListComponent_Factory(t) {
      return new (t || UserListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]));
    };

    UserListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UserListComponent,
      selectors: [["app-user-list"]],
      decls: 19,
      vars: 1,
      consts: [[1, "container"], [2, "text-align", "center"], [1, "text-center"], [1, "btn", "btn-sm", "btn-info", "mx-3", 3, "click"], [1, "btn", "btn-sm", "btn-info", 3, "click"], [1, "table", "mtable"], [4, "ngFor", "ngForOf"], [1, "btn", "btn-sm", "btn-primary", 2, "margin-right", "5px", 3, "routerLink"], [1, "btn", "btn-sm", "btn-danger", 3, "click"]],
      template: function UserListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0421\u043F\u0438\u0441\u043E\u043A \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserListComponent_Template_button_click_4_listener() {
            return ctx.previousPage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "<");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserListComponent_Template_button_click_6_listener() {
            return ctx.nextPage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, ">");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "table", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u041F\u043E\u0447\u0442\u0430");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u0418\u043C\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u041E\u043F\u0435\u0440\u0430\u0446\u0438\u0438");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, UserListComponent_tr_18_Template, 10, 3, "tr", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.users);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-user-list',
          templateUrl: './user-list.component.html',
          styles: []
        }]
      }], function () {
        return [{
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"]
        }, {
          type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _user_user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./user/user.component */
    "./src/app/user/user.component.ts");
    /* harmony import */


    var _user_registration_registration_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./user/registration/registration.component */
    "./src/app/user/registration/registration.component.ts");
    /* harmony import */


    var _user_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./user/login/login.component */
    "./src/app/user/login/login.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./auth/auth.guard */
    "./src/app/auth/auth.guard.ts");
    /* harmony import */


    var _test_start_test_start_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./test-start/test-start.component */
    "./src/app/test-start/test-start.component.ts");
    /* harmony import */


    var _test_start_exit_test_start_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./test-start/exit.test-start.guard */
    "./src/app/test-start/exit.test-start.guard.ts");
    /* harmony import */


    var _forbidden_forbidden_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./forbidden/forbidden.component */
    "./src/app/forbidden/forbidden.component.ts");
    /* harmony import */


    var _admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./admin-panel/admin-panel.component */
    "./src/app/admin-panel/admin-panel.component.ts");
    /* harmony import */


    var _admin_panel_user_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./admin-panel/user/user-edit/user-edit.component */
    "./src/app/admin-panel/user/user-edit/user-edit.component.ts");
    /* harmony import */


    var _admin_panel_user_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./admin-panel/user/user-list/user-list.component */
    "./src/app/admin-panel/user/user-list/user-list.component.ts");
    /* harmony import */


    var _account_account_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./account/account.component */
    "./src/app/account/account.component.ts");
    /* harmony import */


    var _test_info_test_info_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./test-info/test-info.component */
    "./src/app/test-info/test-info.component.ts");
    /* harmony import */


    var _admin_panel_test_test_list_test_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./admin-panel/test/test-list/test-list.component */
    "./src/app/admin-panel/test/test-list/test-list.component.ts");
    /* harmony import */


    var _admin_panel_test_test_edit_test_edit_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./admin-panel/test/test-edit/test-edit.component */
    "./src/app/admin-panel/test/test-edit/test-edit.component.ts");
    /* harmony import */


    var _admin_panel_test_test_create_test_create_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./admin-panel/test/test-create/test-create.component */
    "./src/app/admin-panel/test/test-create/test-create.component.ts");
    /* harmony import */


    var _admin_panel_user_test_user_test_list_user_test_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./admin-panel/user-test/user-test-list/user-test-list.component */
    "./src/app/admin-panel/user-test/user-test-list/user-test-list.component.ts");
    /* harmony import */


    var _admin_panel_user_test_user_test_edit_user_test_edit_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./admin-panel/user-test/user-test-edit/user-test-edit.component */
    "./src/app/admin-panel/user-test/user-test-edit/user-test-edit.component.ts");
    /* harmony import */


    var _admin_panel_user_test_user_test_create_user_test_create_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./admin-panel/user-test/user-test-create/user-test-create.component */
    "./src/app/admin-panel/user-test/user-test-create/user-test-create.component.ts");
    /* harmony import */


    var _user_confirm_email_confirm_email_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./user/confirm-email/confirm-email.component */
    "./src/app/user/confirm-email/confirm-email.component.ts");
    /* harmony import */


    var _user_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./user/forgot-password/forgot-password.component */
    "./src/app/user/forgot-password/forgot-password.component.ts");
    /* harmony import */


    var _user_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./user/reset-password/reset-password.component */
    "./src/app/user/reset-password/reset-password.component.ts");
    /* harmony import */


    var _user_external_login_external_login_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./user/external-login/external-login.component */
    "./src/app/user/external-login/external-login.component.ts");

    var routes = [{
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    }, {
      path: 'user',
      component: _user_user_component__WEBPACK_IMPORTED_MODULE_2__["UserComponent"],
      children: [{
        path: 'registration',
        component: _user_registration_registration_component__WEBPACK_IMPORTED_MODULE_3__["RegistrationComponent"]
      }, {
        path: 'login',
        component: _user_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
      }, {
        path: 'confirm-email',
        component: _user_confirm_email_confirm_email_component__WEBPACK_IMPORTED_MODULE_21__["ConfirmEmailComponent"]
      }, {
        path: 'forgot-password',
        component: _user_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_22__["ForgotPasswordComponent"]
      }, {
        path: 'reset-password',
        component: _user_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_23__["ResetPasswordComponent"]
      }, {
        path: 'external-login',
        component: _user_external_login_external_login_component__WEBPACK_IMPORTED_MODULE_24__["ExternalLoginComponent"]
      }]
    }, {
      path: 'home',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]
    }, {
      path: 'forbidden',
      component: _forbidden_forbidden_component__WEBPACK_IMPORTED_MODULE_9__["ForbiddenComponent"],
      canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    }, {
      path: 'admin-panel',
      component: _admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_10__["AdminPanelComponent"],
      canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
      data: {
        permittedRoles: ['admin']
      },
      children: [{
        path: 'user-edit/:id',
        component: _admin_panel_user_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_11__["UserEditComponent"]
      }, {
        path: 'user-list',
        component: _admin_panel_user_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_12__["UserListComponent"]
      }, {
        path: 'test-list',
        component: _admin_panel_test_test_list_test_list_component__WEBPACK_IMPORTED_MODULE_15__["TestListComponent"]
      }, {
        path: 'test-edit/:id',
        component: _admin_panel_test_test_edit_test_edit_component__WEBPACK_IMPORTED_MODULE_16__["TestEditComponent"]
      }, {
        path: 'test-create',
        component: _admin_panel_test_test_create_test_create_component__WEBPACK_IMPORTED_MODULE_17__["TestCreateComponent"]
      }, {
        path: 'user-test-list',
        component: _admin_panel_user_test_user_test_list_user_test_list_component__WEBPACK_IMPORTED_MODULE_18__["UserTestListComponent"]
      }, {
        path: 'user-test-edit/:id',
        component: _admin_panel_user_test_user_test_edit_user_test_edit_component__WEBPACK_IMPORTED_MODULE_19__["UserTestEditComponent"]
      }, {
        path: 'user-test-create',
        component: _admin_panel_user_test_user_test_create_user_test_create_component__WEBPACK_IMPORTED_MODULE_20__["UserTestCreateComponent"]
      }]
    }, {
      path: 'account',
      component: _account_account_component__WEBPACK_IMPORTED_MODULE_13__["AccountComponent"],
      canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    }, {
      path: 'account/:id',
      component: _account_account_component__WEBPACK_IMPORTED_MODULE_13__["AccountComponent"]
    }, {
      path: 'teststart/:id',
      component: _test_start_test_start_component__WEBPACK_IMPORTED_MODULE_7__["TestStartComponent"],
      canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
      canDeactivate: [_test_start_exit_test_start_guard__WEBPACK_IMPORTED_MODULE_8__["ExitTestStartGuard"]]
    }, {
      path: 'test/:id',
      component: _test_info_test_info_component__WEBPACK_IMPORTED_MODULE_14__["TestInfoComponent"]
    }, {
      path: '**',
      redirectTo: '/'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(spinner, router) {
        _classCallCheck(this, AppComponent);

        this.spinner = spinner;
        this.router = router;
        this.title = 'Knowledge Testing System';
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this37 = this;

          /** spinner starts on init */
          this.spinner.show();
          setTimeout(function () {
            /** spinner ends after 5 seconds */
            _this37.spinner.hide();
          }, 500);
        }
      }, {
        key: "onLogout",
        value: function onLogout() {
          localStorage.removeItem('token');
          this.router.navigate(['/user/login']);
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 13,
      vars: 0,
      consts: [[1, "navbar", "navbar-dark", "bg-dark"], ["routerLink", "/home", 1, "navbar-brand", "text-white"], [1, "navbar-nav", "mr-auto"], [1, "nav-item"], ["routerLink", "/admin-panel", 1, "nav-link"], ["routerLink", "/account", 1, "btn", "btn-info", "place"], [1, "btn", "btn-danger", "my-2", "my-sm-0", 3, "click"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Knowledge Testing System");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Admin Panel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u041B\u0438\u0447\u043D\u044B\u0439 \u043A\u0430\u0431\u0438\u043D\u0435\u0442");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_9_listener() {
            return ctx.onLogout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u0412\u044B\u0445\u043E\u0434");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "ngx-spinner");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: []
        }]
      }], function () {
        return [{
          type: ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _user_user_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./user/user.component */
    "./src/app/user/user.component.ts");
    /* harmony import */


    var _user_registration_registration_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./user/registration/registration.component */
    "./src/app/user/registration/registration.component.ts");
    /* harmony import */


    var _user_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./user/login/login.component */
    "./src/app/user/login/login.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./auth/auth.interceptor */
    "./src/app/auth/auth.interceptor.ts");
    /* harmony import */


    var _test_start_test_start_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./test-start/test-start.component */
    "./src/app/test-start/test-start.component.ts");
    /* harmony import */


    var _test_start_exit_test_start_guard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./test-start/exit.test-start.guard */
    "./src/app/test-start/exit.test-start.guard.ts");
    /* harmony import */


    var _admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./admin-panel/admin-panel.component */
    "./src/app/admin-panel/admin-panel.component.ts");
    /* harmony import */


    var _forbidden_forbidden_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./forbidden/forbidden.component */
    "./src/app/forbidden/forbidden.component.ts");
    /* harmony import */


    var _admin_panel_user_user_form_user_form_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./admin-panel/user/user-form/user-form.component */
    "./src/app/admin-panel/user/user-form/user-form.component.ts");
    /* harmony import */


    var _admin_panel_user_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./admin-panel/user/user-list/user-list.component */
    "./src/app/admin-panel/user/user-list/user-list.component.ts");
    /* harmony import */


    var _admin_panel_user_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./admin-panel/user/user-edit/user-edit.component */
    "./src/app/admin-panel/user/user-edit/user-edit.component.ts");
    /* harmony import */


    var _account_account_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./account/account.component */
    "./src/app/account/account.component.ts");
    /* harmony import */


    var _services_test_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./services/test.service */
    "./src/app/services/test.service.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _services_usertest_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./services/usertest.service */
    "./src/app/services/usertest.service.ts");
    /* harmony import */


    var _test_info_test_info_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./test-info/test-info.component */
    "./src/app/test-info/test-info.component.ts");
    /* harmony import */


    var _admin_panel_test_test_list_test_list_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./admin-panel/test/test-list/test-list.component */
    "./src/app/admin-panel/test/test-list/test-list.component.ts");
    /* harmony import */


    var _admin_panel_test_test_edit_test_edit_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./admin-panel/test/test-edit/test-edit.component */
    "./src/app/admin-panel/test/test-edit/test-edit.component.ts");
    /* harmony import */


    var _admin_panel_test_test_form_test_form_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./admin-panel/test/test-form/test-form.component */
    "./src/app/admin-panel/test/test-form/test-form.component.ts");
    /* harmony import */


    var _services_question_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./services/question.service */
    "./src/app/services/question.service.ts");
    /* harmony import */


    var _services_answer_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./services/answer.service */
    "./src/app/services/answer.service.ts");
    /* harmony import */


    var _admin_panel_test_test_create_test_create_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./admin-panel/test/test-create/test-create.component */
    "./src/app/admin-panel/test/test-create/test-create.component.ts");
    /* harmony import */


    var _admin_panel_user_test_user_test_list_user_test_list_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./admin-panel/user-test/user-test-list/user-test-list.component */
    "./src/app/admin-panel/user-test/user-test-list/user-test-list.component.ts");
    /* harmony import */


    var _admin_panel_user_test_user_test_form_ut_user_test_form_ut_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./admin-panel/user-test/user-test-form-ut/user-test-form-ut.component */
    "./src/app/admin-panel/user-test/user-test-form-ut/user-test-form-ut.component.ts");
    /* harmony import */


    var _admin_panel_user_test_user_test_edit_user_test_edit_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./admin-panel/user-test/user-test-edit/user-test-edit.component */
    "./src/app/admin-panel/user-test/user-test-edit/user-test-edit.component.ts");
    /* harmony import */


    var _admin_panel_user_test_user_test_form_mt_user_test_form_mt_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ./admin-panel/user-test/user-test-form-mt/user-test-form-mt.component */
    "./src/app/admin-panel/user-test/user-test-form-mt/user-test-form-mt.component.ts");
    /* harmony import */


    var _admin_panel_user_test_user_test_create_user_test_create_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! ./admin-panel/user-test/user-test-create/user-test-create.component */
    "./src/app/admin-panel/user-test/user-test-create/user-test-create.component.ts");
    /* harmony import */


    var _user_confirm_email_confirm_email_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! ./user/confirm-email/confirm-email.component */
    "./src/app/user/confirm-email/confirm-email.component.ts");
    /* harmony import */


    var _user_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! ./user/forgot-password/forgot-password.component */
    "./src/app/user/forgot-password/forgot-password.component.ts");
    /* harmony import */


    var _user_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! ./user/reset-password/reset-password.component */
    "./src/app/user/reset-password/reset-password.component.ts");
    /* harmony import */


    var _user_external_login_external_login_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! ./user/external-login/external-login.component */
    "./src/app/user/external-login/external-login.component.ts");
    /* harmony import */


    var _services_account_service__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! ./services/account.service */
    "./src/app/services/account.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_services_user_service__WEBPACK_IMPORTED_MODULE_24__["UserService"], _services_test_service__WEBPACK_IMPORTED_MODULE_22__["TestService"], _services_question_service__WEBPACK_IMPORTED_MODULE_30__["QuestionService"], _services_answer_service__WEBPACK_IMPORTED_MODULE_31__["AnswerService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_23__["AuthService"], _services_account_service__WEBPACK_IMPORTED_MODULE_42__["AccountService"], _services_usertest_service__WEBPACK_IMPORTED_MODULE_25__["UserTestService"], _admin_panel_user_user_form_user_form_component__WEBPACK_IMPORTED_MODULE_18__["UserFormComponent"], _admin_panel_test_test_form_test_form_component__WEBPACK_IMPORTED_MODULE_29__["TestFormComponent"], _admin_panel_user_test_user_test_form_mt_user_test_form_mt_component__WEBPACK_IMPORTED_MODULE_36__["UserTestFormMTComponent"], _test_start_exit_test_start_guard__WEBPACK_IMPORTED_MODULE_15__["ExitTestStartGuard"], {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
        useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_13__["AuthInterceptor"],
        multi: true
      }],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrModule"].forRoot({
        progressBar: true
      }), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _user_user_component__WEBPACK_IMPORTED_MODULE_9__["UserComponent"], _user_registration_registration_component__WEBPACK_IMPORTED_MODULE_10__["RegistrationComponent"], _user_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"], _test_start_test_start_component__WEBPACK_IMPORTED_MODULE_14__["TestStartComponent"], _admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_16__["AdminPanelComponent"], _forbidden_forbidden_component__WEBPACK_IMPORTED_MODULE_17__["ForbiddenComponent"], _admin_panel_user_user_form_user_form_component__WEBPACK_IMPORTED_MODULE_18__["UserFormComponent"], _admin_panel_user_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_19__["UserListComponent"], _admin_panel_user_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_20__["UserEditComponent"], _account_account_component__WEBPACK_IMPORTED_MODULE_21__["AccountComponent"], _test_info_test_info_component__WEBPACK_IMPORTED_MODULE_26__["TestInfoComponent"], _admin_panel_test_test_list_test_list_component__WEBPACK_IMPORTED_MODULE_27__["TestListComponent"], _admin_panel_test_test_edit_test_edit_component__WEBPACK_IMPORTED_MODULE_28__["TestEditComponent"], _admin_panel_test_test_form_test_form_component__WEBPACK_IMPORTED_MODULE_29__["TestFormComponent"], _admin_panel_test_test_create_test_create_component__WEBPACK_IMPORTED_MODULE_32__["TestCreateComponent"], _admin_panel_user_test_user_test_list_user_test_list_component__WEBPACK_IMPORTED_MODULE_33__["UserTestListComponent"], _admin_panel_user_test_user_test_form_ut_user_test_form_ut_component__WEBPACK_IMPORTED_MODULE_34__["UserTestFormUTComponent"], _admin_panel_user_test_user_test_edit_user_test_edit_component__WEBPACK_IMPORTED_MODULE_35__["UserTestEditComponent"], _admin_panel_user_test_user_test_form_mt_user_test_form_mt_component__WEBPACK_IMPORTED_MODULE_36__["UserTestFormMTComponent"], _admin_panel_user_test_user_test_create_user_test_create_component__WEBPACK_IMPORTED_MODULE_37__["UserTestCreateComponent"], _user_confirm_email_confirm_email_component__WEBPACK_IMPORTED_MODULE_38__["ConfirmEmailComponent"], _user_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_39__["ForgotPasswordComponent"], _user_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_40__["ResetPasswordComponent"], _user_external_login_external_login_component__WEBPACK_IMPORTED_MODULE_41__["ExternalLoginComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _user_user_component__WEBPACK_IMPORTED_MODULE_9__["UserComponent"], _user_registration_registration_component__WEBPACK_IMPORTED_MODULE_10__["RegistrationComponent"], _user_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"], _test_start_test_start_component__WEBPACK_IMPORTED_MODULE_14__["TestStartComponent"], _admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_16__["AdminPanelComponent"], _forbidden_forbidden_component__WEBPACK_IMPORTED_MODULE_17__["ForbiddenComponent"], _admin_panel_user_user_form_user_form_component__WEBPACK_IMPORTED_MODULE_18__["UserFormComponent"], _admin_panel_user_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_19__["UserListComponent"], _admin_panel_user_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_20__["UserEditComponent"], _account_account_component__WEBPACK_IMPORTED_MODULE_21__["AccountComponent"], _test_info_test_info_component__WEBPACK_IMPORTED_MODULE_26__["TestInfoComponent"], _admin_panel_test_test_list_test_list_component__WEBPACK_IMPORTED_MODULE_27__["TestListComponent"], _admin_panel_test_test_edit_test_edit_component__WEBPACK_IMPORTED_MODULE_28__["TestEditComponent"], _admin_panel_test_test_form_test_form_component__WEBPACK_IMPORTED_MODULE_29__["TestFormComponent"], _admin_panel_test_test_create_test_create_component__WEBPACK_IMPORTED_MODULE_32__["TestCreateComponent"], _admin_panel_user_test_user_test_list_user_test_list_component__WEBPACK_IMPORTED_MODULE_33__["UserTestListComponent"], _admin_panel_user_test_user_test_form_ut_user_test_form_ut_component__WEBPACK_IMPORTED_MODULE_34__["UserTestFormUTComponent"], _admin_panel_user_test_user_test_edit_user_test_edit_component__WEBPACK_IMPORTED_MODULE_35__["UserTestEditComponent"], _admin_panel_user_test_user_test_form_mt_user_test_form_mt_component__WEBPACK_IMPORTED_MODULE_36__["UserTestFormMTComponent"], _admin_panel_user_test_user_test_create_user_test_create_component__WEBPACK_IMPORTED_MODULE_37__["UserTestCreateComponent"], _user_confirm_email_confirm_email_component__WEBPACK_IMPORTED_MODULE_38__["ConfirmEmailComponent"], _user_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_39__["ForgotPasswordComponent"], _user_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_40__["ResetPasswordComponent"], _user_external_login_external_login_component__WEBPACK_IMPORTED_MODULE_41__["ExternalLoginComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrModule"].forRoot({
            progressBar: true
          }), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
          schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
          providers: [_services_user_service__WEBPACK_IMPORTED_MODULE_24__["UserService"], _services_test_service__WEBPACK_IMPORTED_MODULE_22__["TestService"], _services_question_service__WEBPACK_IMPORTED_MODULE_30__["QuestionService"], _services_answer_service__WEBPACK_IMPORTED_MODULE_31__["AnswerService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_23__["AuthService"], _services_account_service__WEBPACK_IMPORTED_MODULE_42__["AccountService"], _services_usertest_service__WEBPACK_IMPORTED_MODULE_25__["UserTestService"], _admin_panel_user_user_form_user_form_component__WEBPACK_IMPORTED_MODULE_18__["UserFormComponent"], _admin_panel_test_test_form_test_form_component__WEBPACK_IMPORTED_MODULE_29__["TestFormComponent"], _admin_panel_user_test_user_test_form_mt_user_test_form_mt_component__WEBPACK_IMPORTED_MODULE_36__["UserTestFormMTComponent"], _test_start_exit_test_start_guard__WEBPACK_IMPORTED_MODULE_15__["ExitTestStartGuard"], {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
            useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_13__["AuthInterceptor"],
            multi: true
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        }]
      }], null, null);
    })();

    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetComponentScope"](_admin_panel_user_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_20__["UserEditComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_43__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_43__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_43__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_43__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_43__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_43__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_43__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_43__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_43__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_43__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_43__["NgPluralCase"], _angular_router__WEBPACK_IMPORTED_MODULE_44__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_44__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_44__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_44__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_44__["ɵangular_packages_router_router_l"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectMultipleControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["CheckboxRequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArrayName"], ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerComponent"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["Toast"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModelGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _user_user_component__WEBPACK_IMPORTED_MODULE_9__["UserComponent"], _user_registration_registration_component__WEBPACK_IMPORTED_MODULE_10__["RegistrationComponent"], _user_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"], _test_start_test_start_component__WEBPACK_IMPORTED_MODULE_14__["TestStartComponent"], _admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_16__["AdminPanelComponent"], _forbidden_forbidden_component__WEBPACK_IMPORTED_MODULE_17__["ForbiddenComponent"], _admin_panel_user_user_form_user_form_component__WEBPACK_IMPORTED_MODULE_18__["UserFormComponent"], _admin_panel_user_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_19__["UserListComponent"], _admin_panel_user_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_20__["UserEditComponent"], _account_account_component__WEBPACK_IMPORTED_MODULE_21__["AccountComponent"], _test_info_test_info_component__WEBPACK_IMPORTED_MODULE_26__["TestInfoComponent"], _admin_panel_test_test_list_test_list_component__WEBPACK_IMPORTED_MODULE_27__["TestListComponent"], _admin_panel_test_test_edit_test_edit_component__WEBPACK_IMPORTED_MODULE_28__["TestEditComponent"], _admin_panel_test_test_form_test_form_component__WEBPACK_IMPORTED_MODULE_29__["TestFormComponent"], _admin_panel_test_test_create_test_create_component__WEBPACK_IMPORTED_MODULE_32__["TestCreateComponent"], _admin_panel_user_test_user_test_list_user_test_list_component__WEBPACK_IMPORTED_MODULE_33__["UserTestListComponent"], _admin_panel_user_test_user_test_form_ut_user_test_form_ut_component__WEBPACK_IMPORTED_MODULE_34__["UserTestFormUTComponent"], _admin_panel_user_test_user_test_edit_user_test_edit_component__WEBPACK_IMPORTED_MODULE_35__["UserTestEditComponent"], _admin_panel_user_test_user_test_form_mt_user_test_form_mt_component__WEBPACK_IMPORTED_MODULE_36__["UserTestFormMTComponent"], _admin_panel_user_test_user_test_create_user_test_create_component__WEBPACK_IMPORTED_MODULE_37__["UserTestCreateComponent"], _user_confirm_email_confirm_email_component__WEBPACK_IMPORTED_MODULE_38__["ConfirmEmailComponent"], _user_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_39__["ForgotPasswordComponent"], _user_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_40__["ResetPasswordComponent"], _user_external_login_external_login_component__WEBPACK_IMPORTED_MODULE_41__["ExternalLoginComponent"]], [_angular_common__WEBPACK_IMPORTED_MODULE_43__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_43__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_43__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_43__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_43__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_43__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_43__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_43__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_43__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_43__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_43__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_43__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_43__["KeyValuePipe"]]);
    /***/

  },

  /***/
  "./src/app/auth/auth.guard.ts":
  /*!************************************!*\
    !*** ./src/app/auth/auth.guard.ts ***!
    \************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppAuthAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");

    var AuthGuard = /*#__PURE__*/function () {
      function AuthGuard(router, authService) {
        _classCallCheck(this, AuthGuard);

        this.router = router;
        this.authService = authService;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          if (localStorage.getItem('token') != null) {
            var roles = next.data['permittedRoles'];

            if (roles) {
              if (this.authService.roleMatch(roles)) {
                return true;
              } else {
                this.router.navigate(['/forbidden']);
                return false;
              }
            }

            return true;
          } else {
            this.router.navigate(['/user/login']);
            return false;
          }
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ɵfac = function AuthGuard_Factory(t) {
      return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]));
    };

    AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthGuard,
      factory: AuthGuard.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth/auth.interceptor.ts":
  /*!******************************************!*\
    !*** ./src/app/auth/auth.interceptor.ts ***!
    \******************************************/

  /*! exports provided: AuthInterceptor */

  /***/
  function srcAppAuthAuthInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function () {
      return AuthInterceptor;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AuthInterceptor = /*#__PURE__*/function () {
      function AuthInterceptor(router) {
        _classCallCheck(this, AuthInterceptor);

        this.router = router;
      }

      _createClass(AuthInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          var _this38 = this;

          if (localStorage.getItem('token') != null) {
            var clonedReq = req.clone({
              headers: req.headers.set('Authorization', 'Bearer ' + localStorage.getItem('token'))
            });
            return next.handle(clonedReq).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (succ) {}, function (err) {
              if (err.status == 401) {
                localStorage.removeItem('token');

                _this38.router.navigateByUrl('/user/login');
              } else if (err.status == 403) {
                _this38.router.navigateByUrl('/forbidden');
              }
            }));
          } else return next.handle(req.clone());
        }
      }]);

      return AuthInterceptor;
    }();

    AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) {
      return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    AuthInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthInterceptor,
      factory: AuthInterceptor.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/forbidden/forbidden.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/forbidden/forbidden.component.ts ***!
    \**************************************************/

  /*! exports provided: ForbiddenComponent */

  /***/
  function srcAppForbiddenForbiddenComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForbiddenComponent", function () {
      return ForbiddenComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ForbiddenComponent = /*#__PURE__*/function () {
      function ForbiddenComponent() {
        _classCallCheck(this, ForbiddenComponent);
      }

      _createClass(ForbiddenComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ForbiddenComponent;
    }();

    ForbiddenComponent.ɵfac = function ForbiddenComponent_Factory(t) {
      return new (t || ForbiddenComponent)();
    };

    ForbiddenComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ForbiddenComponent,
      selectors: [["app-forbidden"]],
      decls: 10,
      vars: 0,
      consts: [[1, "row"], [1, "col", "s6", "offset-s3"], [1, "card"], [1, "card-image"], ["src", "/assets/img/403.png", 2, "height", "300px", "width", "300px"], [1, "card-content"], [1, "card-title", 2, "color", "#039be5"]],
      template: function ForbiddenComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "403 - ACCESS DENIED");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "You don't have the permission to access this resource.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForbiddenComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-forbidden',
          templateUrl: './forbidden.component.html',
          styles: []
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_usertest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/usertest.service */
    "./src/app/services/usertest.service.ts");
    /* harmony import */


    var _services_test_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/test.service */
    "./src/app/services/test.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function HomeComponent_tr_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var t_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/test/", t_r2.testId, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](t_r2 == null ? null : t_r2.title);
      }
    }

    function HomeComponent_tr_34_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var u_r3 = ctx.$implicit;
        var i_r4 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r4 + 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/account/", u_r3.userId, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](u_r3 == null ? null : u_r3.Username);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/test/", u_r3.TestId, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](u_r3 == null ? null : u_r3.Test);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", u_r3 == null ? null : u_r3.Mark, "%");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](u_r3 == null ? null : u_r3.Time.substring(14));
      }
    }

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(router, userTestService, testService) {
        _classCallCheck(this, HomeComponent);

        this.router = router;
        this.userTestService = userTestService;
        this.testService = testService;
        this.pageNumber = 1;
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadTests();
          this.loadUserTests();
        }
      }, {
        key: "loadTests",
        value: function loadTests() {
          var _this39 = this;

          this.testService.getTestsForPagination(this.pageNumber).subscribe(function (data) {
            _this39.tests = data;

            if (data.length != 0) {
              _this39.previousTests = data;
            } else {
              _this39.tests = _this39.previousTests;
              _this39.pageNumber--;
            }
          });
        }
      }, {
        key: "nextPage",
        value: function nextPage() {
          this.pageNumber++;
          this.loadTests();
        }
      }, {
        key: "previousPage",
        value: function previousPage() {
          if (this.pageNumber > 1) {
            this.pageNumber--;
          }

          this.loadTests();
        }
      }, {
        key: "loadUserTests",
        value: function loadUserTests() {
          var _this40 = this;

          console.log("a");
          this.userTestService.getTopUserTests(10).subscribe(function (data) {
            _this40.userTests = data;
          });
        }
      }, {
        key: "loadTestsByTitle",
        value: function loadTestsByTitle() {
          var _this41 = this;

          setTimeout(function () {
            if (_this41.title == "") {
              _this41.loadTests();
            } else {
              _this41.testService.getTestsByTitle(_this41.title).subscribe(function (data) {
                _this41.tests = data;
              });
            }
          }, 0);
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_usertest_service__WEBPACK_IMPORTED_MODULE_2__["UserTestService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_test_service__WEBPACK_IMPORTED_MODULE_3__["TestService"]));
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 35,
      vars: 3,
      consts: [[1, "container"], [1, "col-lg-6", "floating"], ["type", "text", "placeholder", "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0442\u0435\u0441\u0442\u0430", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "table", "mtable"], [4, "ngFor", "ngForOf"], [1, "text-center"], [1, "btn", "btn-sm", "btn-info", "mx-3", 3, "click"], [1, "btn", "btn-sm", "btn-info", 3, "click"], [1, "nav-link", "tlink", 3, "routerLink"], [3, "routerLink"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u0421\u043F\u0438\u0441\u043E\u043A \u0442\u0435\u0441\u0442\u043E\u0432");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_Template_input_ngModelChange_4_listener($event) {
            return ctx.title = $event;
          })("ngModelChange", function HomeComponent_Template_input_ngModelChange_4_listener() {
            return ctx.loadTestsByTitle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "table", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u0422\u0435\u0441\u0442");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, HomeComponent_tr_11_Template, 4, 2, "tr", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_13_listener() {
            return ctx.previousPage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "<");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_15_listener() {
            return ctx.nextPage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, ">");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u0422\u043E\u043F 10 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "table", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u2116");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\u0422\u0435\u0441\u0442");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\u0412\u0440\u0435\u043C\u044F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, HomeComponent_tr_34_Template, 13, 7, "tr", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tests);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.userTests);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: [".floating[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n}\r\n\r\n.main-tables[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mbG9hdGluZyBoMXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm1haW4tdGFibGVzIGgxe1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _services_usertest_service__WEBPACK_IMPORTED_MODULE_2__["UserTestService"]
        }, {
          type: _services_test_service__WEBPACK_IMPORTED_MODULE_3__["TestService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/models/answer.ts":
  /*!**********************************!*\
    !*** ./src/app/models/answer.ts ***!
    \**********************************/

  /*! exports provided: Answer */

  /***/
  function srcAppModelsAnswerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Answer", function () {
      return Answer;
    });

    var Answer = function Answer() {
      _classCallCheck(this, Answer);
    };
    /***/

  },

  /***/
  "./src/app/models/question.ts":
  /*!************************************!*\
    !*** ./src/app/models/question.ts ***!
    \************************************/

  /*! exports provided: Question */

  /***/
  function srcAppModelsQuestionTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Question", function () {
      return Question;
    });

    var Question = function Question() {
      _classCallCheck(this, Question);
    };
    /***/

  },

  /***/
  "./src/app/models/test.ts":
  /*!********************************!*\
    !*** ./src/app/models/test.ts ***!
    \********************************/

  /*! exports provided: Test */

  /***/
  function srcAppModelsTestTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Test", function () {
      return Test;
    });

    var Test = function Test() {
      _classCallCheck(this, Test);
    };
    /***/

  },

  /***/
  "./src/app/models/testResult.ts":
  /*!**************************************!*\
    !*** ./src/app/models/testResult.ts ***!
    \**************************************/

  /*! exports provided: TestResult */

  /***/
  function srcAppModelsTestResultTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TestResult", function () {
      return TestResult;
    });

    var TestResult = function TestResult() {
      _classCallCheck(this, TestResult);
    };
    /***/

  },

  /***/
  "./src/app/services/account.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/account.service.ts ***!
    \*********************************************/

  /*! exports provided: AccountService */

  /***/
  function srcAppServicesAccountServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccountService", function () {
      return AccountService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var AccountService = /*#__PURE__*/function () {
      function AccountService(fb, http) {
        _classCallCheck(this, AccountService);

        this.fb = fb;
        this.http = http;
        this.accountUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + 'account/';
        this.passwordModel = this.fb.group({
          Passwords: this.fb.group({
            OldPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            Password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]],
            ConfirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          }, {
            validator: this.comparePasswords
          })
        });
        this.usernameModel = this.fb.group({
          NewUsername: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.newEmailModel = this.fb.group({
          UserEmail: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
      }

      _createClass(AccountService, [{
        key: "comparePasswords",
        value: function comparePasswords(fb) {
          var confirmPswrdCtrl = fb.get('ConfirmPassword');

          if (confirmPswrdCtrl.errors == null || 'passwordMismatch' in confirmPswrdCtrl.errors) {
            if (fb.get('Password').value != confirmPswrdCtrl.value) confirmPswrdCtrl.setErrors({
              passwordMismatch: true
            });else confirmPswrdCtrl.setErrors(null);
          }
        }
      }, {
        key: "changePassword",
        value: function changePassword(userId) {
          var body = {
            UserId: userId,
            OldPassword: this.passwordModel.value.Passwords.OldPassword,
            NewPassword: this.passwordModel.value.Passwords.Password
          };
          return this.http.put(this.accountUrl + 'changePassword', body);
        }
      }, {
        key: "changeUsername",
        value: function changeUsername(oldUsername) {
          var body = {
            OldUsername: oldUsername,
            NewUsername: this.usernameModel.value.NewUsername
          };
          return this.http.put(this.accountUrl + 'changeUsername', body);
        }
      }, {
        key: "changeEmail",
        value: function changeEmail(oldEmail) {
          var body = {
            OldEmail: oldEmail,
            NewEmail: this.newEmailModel.value.UserEmail
          };
          return this.http.post(this.accountUrl + 'changeEmail', body);
        }
      }, {
        key: "changeProfileImage",
        value: function changeProfileImage(email, profileImageUrl) {
          var body = {
            Email: email,
            profileImageUrl: profileImageUrl
          };
          return this.http.put(this.accountUrl + 'changeProfileImage', body);
        }
      }, {
        key: "changeAboutMe",
        value: function changeAboutMe(email, aboutMe) {
          var body = {
            Email: email,
            AboutMe: aboutMe
          };
          return this.http.put(this.accountUrl + 'changeAboutMe', body);
        }
      }, {
        key: "confirmNewEmail",
        value: function confirmNewEmail(body) {
          return this.http.post(this.accountUrl + 'confirmNewEmail', body);
        }
      }, {
        key: "getUserProfile",
        value: function getUserProfile() {
          return this.http.get(this.accountUrl + 'profile');
        }
      }]);

      return AccountService;
    }();

    AccountService.ɵfac = function AccountService_Factory(t) {
      return new (t || AccountService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
    };

    AccountService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AccountService,
      factory: AccountService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccountService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/answer.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/answer.service.ts ***!
    \********************************************/

  /*! exports provided: AnswerService */

  /***/
  function srcAppServicesAnswerServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnswerService", function () {
      return AnswerService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var AnswerService = /*#__PURE__*/function () {
      function AnswerService(http) {
        _classCallCheck(this, AnswerService);

        this.http = http;
        this.answerUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + 'answer/';
      }

      _createClass(AnswerService, [{
        key: "getAnswerById",
        value: function getAnswerById(id) {
          return this.http.get(this.answerUrl + id);
        }
      }, {
        key: "createAnswerForNewQuestion",
        value: function createAnswerForNewQuestion(answer) {
          return this.http.post(this.answerUrl + 'newQuestion', answer);
        }
      }, {
        key: "createAnswerForOldQuestion",
        value: function createAnswerForOldQuestion(answer) {
          return this.http.post(this.answerUrl + 'oldQuestion', answer);
        }
      }, {
        key: "getAnswersByQuestionId",
        value: function getAnswersByQuestionId(id) {
          return this.http.get(this.answerUrl + "question/".concat(id));
        }
      }, {
        key: "deleteAnswer",
        value: function deleteAnswer(id) {
          return this.http["delete"](this.answerUrl + id);
        }
      }, {
        key: "editAnswer",
        value: function editAnswer(answer) {
          return this.http.put(this.answerUrl, answer);
        }
      }]);

      return AnswerService;
    }();

    AnswerService.ɵfac = function AnswerService_Factory(t) {
      return new (t || AnswerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    AnswerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AnswerService,
      factory: AnswerService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnswerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/auth.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/auth.service.ts ***!
    \******************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");

    var AuthService = /*#__PURE__*/function () {
      function AuthService(fb, http) {
        _classCallCheck(this, AuthService);

        this.fb = fb;
        this.http = http;
        this.authUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'auth/';
        this.formModel = this.fb.group({
          UserName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
          Email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
          Passwords: this.fb.group({
            Password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]],
            ConfirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          }, {
            validator: this.comparePasswords
          })
        });
        this.passwordsModel = this.fb.group({
          Passwords: this.fb.group({
            Password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]],
            ConfirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          }, {
            validator: this.comparePasswords
          })
        });
        this.emailModel = this.fb.group({
          Email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
        this.options = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Content-Type', 'application/json')
        };
      }

      _createClass(AuthService, [{
        key: "comparePasswords",
        value: function comparePasswords(fb) {
          var confirmPswrdCtrl = fb.get('ConfirmPassword');

          if (confirmPswrdCtrl.errors == null || 'passwordMismatch' in confirmPswrdCtrl.errors) {
            if (fb.get('Password').value != confirmPswrdCtrl.value) confirmPswrdCtrl.setErrors({
              passwordMismatch: true
            });else confirmPswrdCtrl.setErrors(null);
          }
        }
      }, {
        key: "register",
        value: function register() {
          var body = {
            UserName: this.formModel.value.UserName,
            Email: this.formModel.value.Email,
            Password: this.formModel.value.Passwords.Password
          };
          return this.http.post(this.authUrl + 'register', body);
        }
      }, {
        key: "login",
        value: function login(formData) {
          return this.http.post(this.authUrl + 'login', formData);
        }
      }, {
        key: "roleMatch",
        value: function roleMatch(allowedRoles) {
          var isMatch = false;
          var payLoad = JSON.parse(window.atob(localStorage.getItem('token').split('.')[1]));
          var userRole = payLoad.role;
          allowedRoles.forEach(function (element) {
            if (userRole == element) {
              isMatch = true;
              return false;
            }
          });
          return isMatch;
        }
      }, {
        key: "confirmEmail",
        value: function confirmEmail(userId, token) {
          var body = JSON.stringify(token);
          return this.http.post(this.authUrl + "confirmemail/".concat(userId), body, this.options);
        }
      }, {
        key: "forgotPassword",
        value: function forgotPassword() {
          var body = JSON.stringify(this.emailModel.value.Email);
          return this.http.post(this.authUrl + 'forgotpassword', body, this.options);
        }
      }, {
        key: "resetPassword",
        value: function resetPassword(userId, token) {
          var body = {
            UserId: userId,
            Password: this.passwordsModel.value.Passwords.Password,
            Token: token
          };
          return this.http.post(this.authUrl + 'resetpassword', body);
        }
      }, {
        key: "googleLogin",
        value: function googleLogin() {
          // const httpOptions = {
          //   headers: new HttpHeaders({
          //     "Access-Control-Allow-Origin": "*"
          //   })
          // };
          // return this.http.get("https://localhost:44340/api/auth/googlelogin");
          document.location.href = this.authUrl + "googlelogin";
        }
      }, {
        key: "facebookLogin",
        value: function facebookLogin() {
          // const httpOptions = {
          //   headers: new HttpHeaders({
          //     "Access-Control-Allow-Origin": "*"
          //   })
          // };
          // return this.http.get("https://localhost:44340/api/auth/facebooklogin", httpOptions);
          document.location.href = this.authUrl + "facebooklogin";
        }
      }]);

      return AuthService;
    }();

    AuthService.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/question.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/question.service.ts ***!
    \**********************************************/

  /*! exports provided: QuestionService */

  /***/
  function srcAppServicesQuestionServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuestionService", function () {
      return QuestionService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var QuestionService = /*#__PURE__*/function () {
      function QuestionService(http) {
        _classCallCheck(this, QuestionService);

        this.http = http;
        this.questionUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + 'question/';
      }

      _createClass(QuestionService, [{
        key: "getQuestionById",
        value: function getQuestionById(id) {
          return this.http.get(this.questionUrl + id);
        }
      }, {
        key: "createQuestionForNewTest",
        value: function createQuestionForNewTest(question) {
          return this.http.post(this.questionUrl + "newTest", question);
        }
      }, {
        key: "createQuestionForOldTest",
        value: function createQuestionForOldTest(question) {
          return this.http.post(this.questionUrl + "oldTest", question);
        }
      }, {
        key: "deleteQuestion",
        value: function deleteQuestion(questionId) {
          return this.http["delete"](this.questionUrl + questionId);
        }
      }, {
        key: "editQuestion",
        value: function editQuestion(question) {
          return this.http.put(this.questionUrl, question);
        }
      }]);

      return QuestionService;
    }();

    QuestionService.ɵfac = function QuestionService_Factory(t) {
      return new (t || QuestionService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    QuestionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: QuestionService,
      factory: QuestionService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QuestionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/test.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/test.service.ts ***!
    \******************************************/

  /*! exports provided: TestService */

  /***/
  function srcAppServicesTestServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TestService", function () {
      return TestService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var TestService = /*#__PURE__*/function () {
      function TestService(fb, http) {
        _classCallCheck(this, TestService);

        this.fb = fb;
        this.http = http;
        this.testUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + 'test/';
        this.testModel = this.fb.group({
          Title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
          Description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
          QuestionsCount: ['', [this.questionCountRangeValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
          Time: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[0-5][0-9][:][0-5][0-9]'), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
      }

      _createClass(TestService, [{
        key: "questionCountRangeValidator",
        value: function questionCountRangeValidator(control) {
          if (control.value !== undefined && (isNaN(control.value) || control.value < 0 || control.value > 50)) {
            return {
              'questionCountRange': true
            };
          }

          return null;
        }
      }, {
        key: "getTests",
        value: function getTests() {
          return this.http.get(this.testUrl);
        }
      }, {
        key: "getTestById",
        value: function getTestById(id) {
          return this.http.get(this.testUrl + id);
        }
      }, {
        key: "getTestStart",
        value: function getTestStart(id) {
          return this.http.get(this.testUrl + "".concat(id, "/start"));
        }
      }, {
        key: "deleteTest",
        value: function deleteTest(id) {
          return this.http["delete"](this.testUrl + id);
        }
      }, {
        key: "putTest",
        value: function putTest(test) {
          return this.http.put(this.testUrl, test);
        }
      }, {
        key: "createTest",
        value: function createTest(test) {
          return this.http.post(this.testUrl, test);
        }
      }, {
        key: "getTestsForPagination",
        value: function getTestsForPagination(pageNumber) {
          return this.http.get(this.testUrl + "pagination?pageNumber=".concat(pageNumber, "&pageSize=4"));
        }
      }, {
        key: "getTestsByTitle",
        value: function getTestsByTitle(title) {
          return this.http.get(this.testUrl + "title/".concat(title));
        }
      }]);

      return TestService;
    }();

    TestService.ɵfac = function TestService_Factory(t) {
      return new (t || TestService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
    };

    TestService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: TestService,
      factory: TestService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TestService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/user.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/user.service.ts ***!
    \******************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppServicesUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var UserService = /*#__PURE__*/function () {
      function UserService(fb, http) {
        _classCallCheck(this, UserService);

        this.fb = fb;
        this.http = http;
        this.userUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + 'user/';
        this.emailModel = this.fb.group({
          UserEmail: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]]
        });
      }

      _createClass(UserService, [{
        key: "getUsers",
        value: function getUsers() {
          return this.http.get(this.userUrl);
        }
      }, {
        key: "getUser",
        value: function getUser(id) {
          return this.http.get(this.userUrl + id);
        }
      }, {
        key: "deleteUser",
        value: function deleteUser(id) {
          return this.http["delete"](this.userUrl + id);
        }
      }, {
        key: "putUser",
        value: function putUser(user) {
          return this.http.put(this.userUrl, user);
        }
      }, {
        key: "getUsersForPagination",
        value: function getUsersForPagination(pageNumber) {
          return this.http.get(this.userUrl + "pagination?pageNumber=".concat(pageNumber));
        }
      }, {
        key: "changeUserRole",
        value: function changeUserRole(user) {
          return this.http.put(this.userUrl + 'changeRole', user);
        }
      }]);

      return UserService;
    }();

    UserService.ɵfac = function UserService_Factory(t) {
      return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
    };

    UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UserService,
      factory: UserService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/usertest.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/usertest.service.ts ***!
    \**********************************************/

  /*! exports provided: UserTestService */

  /***/
  function srcAppServicesUsertestServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserTestService", function () {
      return UserTestService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var UserTestService = /*#__PURE__*/function () {
      function UserTestService(fb, http) {
        _classCallCheck(this, UserTestService);

        this.fb = fb;
        this.http = http;
        this.userTestUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + 'usertest/';
        this.userTestModel = this.fb.group({
          Username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          TestTitle: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          Mark: ['', [this.markRangeValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          Time: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-5][0-9][:][0-5][0-9]'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
      }

      _createClass(UserTestService, [{
        key: "markRangeValidator",
        value: function markRangeValidator(control) {
          if (control.value !== undefined && (isNaN(control.value) || control.value < 0 || control.value > 100)) {
            return {
              'markRange': true
            };
          }

          return null;
        }
      }, {
        key: "getAllUserTests",
        value: function getAllUserTests() {
          return this.http.get(this.userTestUrl);
        }
      }, {
        key: "getTopUserTests",
        value: function getTopUserTests(count) {
          return this.http.get(this.userTestUrl + "top/".concat(count));
        }
      }, {
        key: "getUserTestsByUserId",
        value: function getUserTestsByUserId(id) {
          return this.http.get(this.userTestUrl + "user/".concat(id));
        }
      }, {
        key: "getUserTestById",
        value: function getUserTestById(id) {
          return this.http.get(this.userTestUrl + id);
        }
      }, {
        key: "postTestResult",
        value: function postTestResult(testResult) {
          return this.http.post(this.userTestUrl, testResult);
        }
      }, {
        key: "putUserTest",
        value: function putUserTest(testResult) {
          return this.http.put(this.userTestUrl, testResult);
        }
      }, {
        key: "postTestResultByAdmin",
        value: function postTestResultByAdmin(testResult) {
          return this.http.post(this.userTestUrl + "admin", testResult);
        }
      }, {
        key: "deleteUserTest",
        value: function deleteUserTest(id) {
          return this.http["delete"](this.userTestUrl + id);
        }
      }, {
        key: "getUserTestsForPagination",
        value: function getUserTestsForPagination(pageNumber) {
          return this.http.get(this.userTestUrl + "pagination?pageNumber=".concat(pageNumber));
        }
      }]);

      return UserTestService;
    }();

    UserTestService.ɵfac = function UserTestService_Factory(t) {
      return new (t || UserTestService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
    };

    UserTestService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UserTestService,
      factory: UserTestService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserTestService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/test-info/test-info.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/test-info/test-info.component.ts ***!
    \**************************************************/

  /*! exports provided: TestInfoComponent */

  /***/
  function srcAppTestInfoTestInfoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TestInfoComponent", function () {
      return TestInfoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_test__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../models/test */
    "./src/app/models/test.ts");
    /* harmony import */


    var _services_test_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/test.service */
    "./src/app/services/test.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function TestInfoComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "thead");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u0422\u0435\u0441\u0442");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u0411\u0430\u043B");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u041F\u0440\u043E\u0439\u0434\u0435\u043D\u043E \u0440\u0430\u0437");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u0412\u0440\u0435\u043C\u044F");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\u041D\u0430\u0447\u0430\u0442\u044C \u0442\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.test.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.test.description);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.test.maxScore);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.test.questionsCount);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.test.passedTimes);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.test.maxTime.substring(14));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/teststart/", ctx_r0.test.testId, "");
      }
    }

    var TestInfoComponent = /*#__PURE__*/function () {
      function TestInfoComponent(testService, router, activeRoute) {
        _classCallCheck(this, TestInfoComponent);

        this.testService = testService;
        this.router = router;
        this.loaded = false;
        this.test = new _models_test__WEBPACK_IMPORTED_MODULE_1__["Test"]();
        this.test.testId = Number.parseInt(activeRoute.snapshot.params["id"]);
      }

      _createClass(TestInfoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getTest();
        }
      }, {
        key: "getTest",
        value: function getTest() {
          var _this42 = this;

          this.testService.getTestById(this.test.testId).subscribe(function (data) {
            _this42.test = data; //this.test.maxTime = new Date(data["maxTime"]);

            if (_this42.test != null) {
              _this42.loaded = true;
            }
          });
        }
      }]);

      return TestInfoComponent;
    }();

    TestInfoComponent.ɵfac = function TestInfoComponent_Factory(t) {
      return new (t || TestInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_test_service__WEBPACK_IMPORTED_MODULE_2__["TestService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]));
    };

    TestInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TestInfoComponent,
      selectors: [["app-test-info"]],
      decls: 1,
      vars: 1,
      consts: [[4, "ngIf"], [1, "container"], [1, "table", "mtable", 2, "margin", "30px"], [1, "text-center"], [1, "btn", "btn-success", 3, "routerLink"]],
      template: function TestInfoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TestInfoComponent_div_0_Template, 34, 7, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loaded);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TestInfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-test-info',
          templateUrl: './test-info.component.html',
          styles: []
        }]
      }], function () {
        return [{
          type: _services_test_service__WEBPACK_IMPORTED_MODULE_2__["TestService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/test-start/exit.test-start.guard.ts":
  /*!*****************************************************!*\
    !*** ./src/app/test-start/exit.test-start.guard.ts ***!
    \*****************************************************/

  /*! exports provided: ExitTestStartGuard */

  /***/
  function srcAppTestStartExitTestStartGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExitTestStartGuard", function () {
      return ExitTestStartGuard;
    });

    var ExitTestStartGuard = /*#__PURE__*/function () {
      function ExitTestStartGuard() {
        _classCallCheck(this, ExitTestStartGuard);
      }

      _createClass(ExitTestStartGuard, [{
        key: "canDeactivate",
        value: function canDeactivate(component) {
          return component.canDeactivate ? component.canDeactivate() : true;
        }
      }]);

      return ExitTestStartGuard;
    }();
    /***/

  },

  /***/
  "./src/app/test-start/test-start.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/test-start/test-start.component.ts ***!
    \****************************************************/

  /*! exports provided: TestStartComponent */

  /***/
  function srcAppTestStartTestStartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TestStartComponent", function () {
      return TestStartComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_test__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../models/test */
    "./src/app/models/test.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _models_testResult__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../models/testResult */
    "./src/app/models/testResult.ts");
    /* harmony import */


    var _services_test_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/test.service */
    "./src/app/services/test.service.ts");
    /* harmony import */


    var _services_account_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/account.service */
    "./src/app/services/account.service.ts");
    /* harmony import */


    var _services_question_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/question.service */
    "./src/app/services/question.service.ts");
    /* harmony import */


    var _services_answer_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../services/answer.service */
    "./src/app/services/answer.service.ts");
    /* harmony import */


    var _services_usertest_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../services/usertest.service */
    "./src/app/services/usertest.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function TestStartComponent_div_0_div_11_div_5_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var s_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", s_r7.answerId);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "check_", s_r7.answerId, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", s_r7.content, "");
      }
    }

    function TestStartComponent_div_0_div_11_div_5_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var s_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", s_r7.answerId);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "check_", s_r7.answerId, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", s_r7.content, "");
      }
    }

    function TestStartComponent_div_0_div_11_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TestStartComponent_div_0_div_11_div_5_div_1_Template, 5, 3, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TestStartComponent_div_0_div_11_div_5_ng_template_2_Template, 4, 3, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

        var item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r3.key.isSingle)("ngIfElse", _r9);
      }
    }

    function TestStartComponent_div_0_div_11_div_6_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u041E\u0431\u044A\u044F\u0441\u043D\u0435\u043D\u0438\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E\u0433\u043E \u043E\u0442\u0432\u0435\u0442\u0430:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.key.answerDescription);
      }
    }

    function TestStartComponent_div_0_div_11_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TestStartComponent_div_0_div_11_div_6_div_1_Template, 5, 1, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r3.key.answerDescription);
      }
    }

    function TestStartComponent_div_0_div_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TestStartComponent_div_0_div_11_div_5_Template, 4, 2, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TestStartComponent_div_0_div_11_div_6_Template, 2, 1, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r3 = ctx.$implicit;
        var i_r4 = ctx.index;

        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("name", "form_", i_r4, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", i_r4 + 1, ". ", item_r3.key.content, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r3.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.submitted);
      }
    }

    function TestStartComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Limited Time Only!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TestStartComponent_div_0_div_11_Template, 8, 5, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "keyvalue");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TestStartComponent_div_0_Template_button_click_13_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r17.onSubmit();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044C");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.test.description);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 2, ctx_r0.testInfo));
      }
    }

    function TestStartComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u0412\u044B \u043D\u0430\u0431\u0440\u0430\u043B\u0438: ", ctx_r1.testResult.Mark, "% \u0431\u0430\u043B\u043B\u043E\u0432");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.message);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("\u041F\u043E\u0442\u0440\u0430\u0447\u0435\u043D\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F \u043D\u0430 \u0442\u0435\u0441\u0442: ", ctx_r1.testResult.Time.getMinutes(), " \u043C\u0438\u043D\u0443\u0442 \u0438 ", ctx_r1.testResult.Time.getSeconds(), " \u0441\u0435\u043A\u0443\u043D\u0434");
      }
    }

    var TestStartComponent = /*#__PURE__*/function () {
      function TestStartComponent(testService, accountService, questionService, answerService, userTestService, activeRoute) {
        _classCallCheck(this, TestStartComponent);

        this.testService = testService;
        this.accountService = accountService;
        this.questionService = questionService;
        this.answerService = answerService;
        this.userTestService = userTestService;
        this.activeRoute = activeRoute;
        this.loaded = false;
        this.sum = 0;
        this.submitted = false;
        this.testId = Number.parseInt(activeRoute.snapshot.params["id"]);
      }

      _createClass(TestStartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this43 = this;

          if (this.testId) {
            this.getTest();
            this.loadTestInfoGet();
            this.fillLocalstorageTime();
            this.accountService.getUserProfile().subscribe(function (res) {
              _this43.userDetails = res;
            }, function (err) {
              console.log(err);
            });
          }
        }
      }, {
        key: "loadTestInfoGet",
        value: function loadTestInfoGet() {
          var _this44 = this;

          var testInfoGet = new Map();
          this.testService.getTestStart(this.testId).subscribe(function (data) {
            testInfoGet = data;
            _this44.loaded = true;

            _this44.fillQuestions(testInfoGet);
          });
        }
      }, {
        key: "fillQuestions",
        value: function fillQuestions(testInfoGet) {
          var _this45 = this;

          this.testInfo = new Map();

          for (var t in testInfoGet) {
            this.questionService.getQuestionById(Number(t)).subscribe(function (data1) {
              _this45.fillTestInfo(testInfoGet, data1);
            });
          }
        }
      }, {
        key: "fillTestInfo",
        value: function fillTestInfo(testInfo, question) {
          this.testInfo.set(question, testInfo[question["questionId"].toString()]);
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          if (!this.submitted) {
            this.endTest1();

            if (this.observables.length > 0) {
              this.endTest2();
            } else {
              alert("Вы не ответили ни на один вопрос, тест не может быть завершен!");
            }
          }
        }
      }, {
        key: "getTest",
        value: function getTest() {
          var _this46 = this;

          this.testService.getTestById(this.testId).subscribe(function (data) {
            _this46.test = new _models_test__WEBPACK_IMPORTED_MODULE_1__["Test"]();
            _this46.test.maxScore = data["maxScore"];
            _this46.test.description = data["description"];
            _this46.test.maxTime = new Date(data["maxTime"]);

            _this46.timer(data["maxTime"]);
          });
        }
      }, {
        key: "timer",
        value: function timer(data) {
          var _this47 = this;

          var d1 = new Date();
          var d2 = new Date(d1);
          var y = new Date(data);
          d2.setMinutes(d1.getMinutes() + y.getMinutes());
          d2.setSeconds(d2.getSeconds() + y.getSeconds() + 2);
          var countDownDate = new Date(d2).getTime();
          var startDate = new Date().getTime();
          var passed = 0; // Update the count down every 1 second

          this.interval = setInterval(function () {
            // Get today's date and time
            var now = new Date().getTime();
            var remaining = 0; // Find the dremaining between now and the count down date

            if (_this47.localstorageTimeSet == true) {
              passed = countDownDate - startDate - _this47.localstorageTime;
              _this47.localstorageTimeSet = false;
            }

            remaining = countDownDate - now - passed; // Time calculations for days, hours, minutes and seconds

            var minutes = Math.floor(remaining % (1000 * 60 * 60) / (1000 * 60));
            var seconds = Math.floor(remaining % (1000 * 60) / 1000); // Display the result in the element with id="time"

            document.getElementById("time").innerHTML = minutes + "m " + seconds + "s ";

            if (remaining < 60000) {
              var element = document.getElementById("countd");
              element.classList.remove("bg-gradient-4");
              element.classList.add("bg-gradient-3");
            } // If the count down is finished, write some text


            if (remaining < 0) {
              _this47.endTest1();

              _this47.endTest2();

              document.getElementById("time").innerHTML = "Время вышло";
            }

            _this47.timeLeft = remaining;
          }, 1000);
        }
      }, {
        key: "onBeforeUnload",
        value: function onBeforeUnload(event) {
          localStorage.setItem("time_".concat(this.testId), this.timeLeft.toString());
          clearInterval(this.interval);

          if (this.submitted) {
            localStorage.removeItem("time_".concat(this.testId));
          }

          return false;
        }
      }, {
        key: "canDeactivate",
        value: function canDeactivate() {
          if (!this.submitted) {
            var result = confirm("Вы не закончили прохождение теста, вы уверены что хотите покинуть страницу? В результат теста запишется ваш текущий результат.");

            if (result == true) {
              this.endTest1();
              this.endTest2();
              localStorage.removeItem("time_".concat(this.testId));
              clearInterval(this.interval);
            }

            return result;
          } else {
            localStorage.removeItem("time_".concat(this.testId));
            clearInterval(this.interval);
            return true;
          }
        }
      }, {
        key: "fillLocalstorageTime",
        value: function fillLocalstorageTime() {
          this.localstorageTime = Number(localStorage.getItem("time_".concat(this.testId)));

          if (this.localstorageTime != 0) {
            this.localstorageTimeSet = true;
          }
        }
      }, {
        key: "endTest1",
        value: function endTest1() {
          var min = this.test.maxTime.getMinutes() * 60000;
          var sec = this.test.maxTime.getSeconds() * 1000;
          var rizn = min + sec - this.timeLeft;
          this.minutes = Math.floor(rizn % (1000 * 60 * 60) / (1000 * 60));
          this.seconds = Math.floor(rizn % (1000 * 60) / 1000) + 1;
          this.answers1 = document.getElementsByName("answer");
          this.answers = this.answers1;
          this.all = [];
          this.observables = [];

          for (var i = 0; i < this.answers1.length; i++) {
            if (this.answers[i].checked) {
              this.observables.push(this.answerService.getAnswerById(this.answers[i].id));
            }

            this.all.push(this.answerService.getAnswerById(this.answers[i].id));
          }
        }
      }, {
        key: "endTest2",
        value: function endTest2() {
          var _this48 = this;

          if (this.observables.length == 0) {
            this.sum = 0;
            this.fillTestResult();
            this.endTest3();
          } else {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])(this.observables).subscribe(function (data) {
              _this48.sum = (data || []).reduce(function (res, ans) {
                return res + ans["mark"];
              }, 0);

              if (_this48.sum < 0) {
                _this48.sum = 0;
              }

              _this48.fillTestResult();

              if (_this48.timeLeft > 0) {
                var result = confirm("Вы уверены что хотите завершить прохождение теста?");

                if (result) {
                  _this48.endTest3();
                }
              } else {
                _this48.endTest3();
              }
            });
          }
        }
      }, {
        key: "endTest3",
        value: function endTest3() {
          var _this49 = this;

          this.submitted = true;
          Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])(this.all).subscribe(function (data) {
            if (window.location.href.toString().includes("teststart")) {
              for (var i = 0; i < data.length; i++) {
                if (data[i]["isCorrect"]) {
                  document.getElementById("check_".concat(_this49.answers[i].id)).classList.add("correct");
                }
              }
            }
          });
          document.getElementById('subButton').innerHTML = "Результат";
          clearInterval(this.interval);
          this.userTestService.postTestResult(this.testResult).subscribe(function (data) {
            return console.log("Finish");
          });
        }
      }, {
        key: "fillTestResult",
        value: function fillTestResult() {
          var timeResult = new Date();
          timeResult.setMinutes(this.minutes);
          timeResult.setSeconds(this.seconds);
          timeResult.setMilliseconds(0);
          this.testResult = new _models_testResult__WEBPACK_IMPORTED_MODULE_3__["TestResult"]();
          this.testResult.Mark = Number((Number(this.sum) / this.test.maxScore * 100).toFixed(2));
          this.testResult.TestId = this.testId;
          this.testResult.Time = timeResult;
          this.testResult.UserId = this.userDetails.id;

          if (this.testResult.Mark == 0) {
            this.message = "Ваш результат невообразимо ужасен! Может Вы сознательно выбирали неправильные ответы?";
          } else if (this.testResult.Mark > 0 && this.testResult.Mark < 40) {
            this.message = "Грош цена вашему результату! Вы уверены что хотите быть программистом?";
          } else if (this.testResult.Mark >= 40 && this.testResult.Mark < 60) {
            this.message = "Это плохой результат. Вам нужно подучить теорию.";
          } else if (this.testResult.Mark >= 60 && this.testResult.Mark < 70) {
            this.message = "Это посредственный результат. Вам стоит больше практиковаться.";
          } else if (this.testResult.Mark >= 70 && this.testResult.Mark < 80) {
            this.message = "Это хороший результат, продолжайте обучение в том же духе!";
          } else if (this.testResult.Mark >= 80 && this.testResult.Mark < 90) {
            this.message = "Это отличный результат. Вы хорошо подготовились.";
          } else if (this.testResult.Mark >= 90 && this.testResult.Mark < 100) {
            this.message = "Это изумительный результат! Ваши знания программирования выше всяких похвал!";
          } else {
            this.message = "Идеально! Вы Бог программирования!";
          }
        }
      }]);

      return TestStartComponent;
    }();

    TestStartComponent.ɵfac = function TestStartComponent_Factory(t) {
      return new (t || TestStartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_test_service__WEBPACK_IMPORTED_MODULE_4__["TestService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_account_service__WEBPACK_IMPORTED_MODULE_5__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_question_service__WEBPACK_IMPORTED_MODULE_6__["QuestionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_answer_service__WEBPACK_IMPORTED_MODULE_7__["AnswerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_usertest_service__WEBPACK_IMPORTED_MODULE_8__["UserTestService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"]));
    };

    TestStartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TestStartComponent,
      selectors: [["app-test-start"]],
      hostBindings: function TestStartComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("beforeunload", function TestStartComponent_beforeunload_HostBindingHandler($event) {
            return ctx.onBeforeUnload($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        }
      },
      decls: 2,
      vars: 2,
      consts: [[4, "ngIf"], ["class", "modal fade", "id", "modalresults", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 4, "ngIf"], [1, "container"], ["id", "testtitle"], ["id", "timer-wrapper"], ["id", "countd", 1, "rounded", "bg-gradient-4", "text-white", "shadow", "text-center"], [1, "mb-0", "font-weight-bold", "text-uppercase"], ["id", "clock-a", 1, "countdown", "pt-4"], ["id", "time"], [4, "ngFor", "ngForOf"], ["type", "submit", "id", "subButton", "data-toggle", "modal", "data-target", "#modalresults", 1, "btn", "btn-success", 2, "margin-bottom", "20px", "margin-left", "10px", 3, "click"], [3, "name"], [4, "ngIf", "ngIfElse"], ["isMultiple", ""], ["type", "radio", "name", "answer", 3, "id"], [3, "id"], ["type", "checkbox", "name", "answer", 3, "id"], ["id", "modalresults", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "results"]],
      template: function TestStartComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TestStartComponent_div_0_Template, 15, 4, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TestStartComponent_div_1_Template, 17, 4, "div", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loaded);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgForm"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["KeyValuePipe"]],
      styles: [".correct[_ngcontent-%COMP%]{\r\n    background-color: #28a745!important;\r\n    border-radius: 5px;\r\n}\r\n\r\n#timer-wrapper[_ngcontent-%COMP%] {\r\n    align-items: center;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    margin: 0 auto;\r\n    position: fixed;\r\n    top: 20%;\r\n    right: 0%;\r\n    transform: translate(-50%, -50%);\r\n}\r\n\r\n.countdown[_ngcontent-%COMP%] {\r\n    text-transform: uppercase;\r\n    font-weight: bold;\r\n}\r\n\r\n.countdown[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);\r\n    font-size: 3rem;\r\n    margin-left: 0.8rem;\r\n}\r\n\r\n.countdown[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-of-type {\r\n    margin-left: 0;\r\n}\r\n\r\n.bg-gradient-1[_ngcontent-%COMP%] {\r\n    background: #7f7fd5;\r\n    background: linear-gradient(to right, #7f7fd5, #86a8e7, #91eae4);\r\n}\r\n\r\n.bg-gradient-2[_ngcontent-%COMP%] {\r\n    background: #654ea3;\r\n    background: linear-gradient(to right, #654ea3, #eaafc8);\r\n}\r\n\r\n.bg-gradient-3[_ngcontent-%COMP%] {\r\n    background: #ff416c;\r\n    background: linear-gradient(to right, #311122, #ff4b2b);\r\n}\r\n\r\n.bg-gradient-4[_ngcontent-%COMP%] {\r\n    background: #007991;\r\n    background: linear-gradient(to right, #007991, #78ffd6);\r\n}\r\n\r\n.rounded[_ngcontent-%COMP%] {\r\n    border-radius: 1rem !important;\r\n    padding: 1rem;\r\n}\r\n\r\n#time[_ngcontent-%COMP%] {\r\n    font-size: 28px;\r\n}\r\n\r\n\r\n\r\n.results[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    padding: 15px;\r\n}\r\n\r\n#testtitle[_ngcontent-%COMP%]{\r\n    padding: 10px;\r\n    font-family: Palladio L;\r\n    text-align: center;\r\n    font-style: serif;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVzdC1zdGFydC90ZXN0LXN0YXJ0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQ0FBbUM7SUFDbkMsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsUUFBUTtJQUNSLFNBQVM7SUFDVCxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksMkNBQTJDO0lBQzNDLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksbUJBQW1CO0lBRW5CLGdFQUFnRTtBQUNwRTs7QUFFQTtJQUNJLG1CQUFtQjtJQUVuQix1REFBdUQ7QUFDM0Q7O0FBRUE7SUFDSSxtQkFBbUI7SUFFbkIsdURBQXVEO0FBQzNEOztBQUVBO0lBQ0ksbUJBQW1CO0lBRW5CLHVEQUF1RDtBQUMzRDs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5QixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQSxtQkFBbUI7O0FBRW5CO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC90ZXN0LXN0YXJ0L3Rlc3Qtc3RhcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb3JyZWN0e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI4YTc0NSFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbiN0aW1lci13cmFwcGVyIHtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDIwJTtcclxuICAgIHJpZ2h0OiAwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG59XHJcblxyXG4uY291bnRkb3duIHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmNvdW50ZG93biBzcGFuIHtcclxuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICBmb250LXNpemU6IDNyZW07XHJcbiAgICBtYXJnaW4tbGVmdDogMC44cmVtO1xyXG59XHJcblxyXG4uY291bnRkb3duIHNwYW46Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxufVxyXG5cclxuLmJnLWdyYWRpZW50LTEge1xyXG4gICAgYmFja2dyb3VuZDogIzdmN2ZkNTtcclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjN2Y3ZmQ1LCAjODZhOGU3LCAjOTFlYWU0KTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzdmN2ZkNSwgIzg2YThlNywgIzkxZWFlNCk7XHJcbn1cclxuXHJcbi5iZy1ncmFkaWVudC0yIHtcclxuICAgIGJhY2tncm91bmQ6ICM2NTRlYTM7XHJcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzY1NGVhMywgI2VhYWZjOCk7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM2NTRlYTMsICNlYWFmYzgpO1xyXG59XHJcblxyXG4uYmctZ3JhZGllbnQtMyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmY0MTZjO1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMzMTExMjIsICNmZjRiMmIpO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMzExMTIyLCAjZmY0YjJiKTtcclxufVxyXG5cclxuLmJnLWdyYWRpZW50LTQge1xyXG4gICAgYmFja2dyb3VuZDogIzAwNzk5MTtcclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDA3OTkxLCAjNzhmZmQ2KTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzAwNzk5MSwgIzc4ZmZkNik7XHJcbn1cclxuXHJcbi5yb3VuZGVkIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW0gIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbn1cclxuXHJcbiN0aW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxufVxyXG5cclxuLypUZXN0IHJlc3VsdHMgY3NzKi9cclxuXHJcbi5yZXN1bHRze1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxufVxyXG5cclxuI3Rlc3R0aXRsZXtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBmb250LWZhbWlseTogUGFsbGFkaW8gTDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc3R5bGU6IHNlcmlmO1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TestStartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-test-start',
          templateUrl: './test-start.component.html',
          styleUrls: ['./test-start.component.css']
        }]
      }], function () {
        return [{
          type: _services_test_service__WEBPACK_IMPORTED_MODULE_4__["TestService"]
        }, {
          type: _services_account_service__WEBPACK_IMPORTED_MODULE_5__["AccountService"]
        }, {
          type: _services_question_service__WEBPACK_IMPORTED_MODULE_6__["QuestionService"]
        }, {
          type: _services_answer_service__WEBPACK_IMPORTED_MODULE_7__["AnswerService"]
        }, {
          type: _services_usertest_service__WEBPACK_IMPORTED_MODULE_8__["UserTestService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"]
        }];
      }, {
        onBeforeUnload: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['window:beforeunload', ['$event']]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/user/confirm-email/confirm-email.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/user/confirm-email/confirm-email.component.ts ***!
    \***************************************************************/

  /*! exports provided: ConfirmEmailComponent */

  /***/
  function srcAppUserConfirmEmailConfirmEmailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfirmEmailComponent", function () {
      return ConfirmEmailComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_services_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/account.service */
    "./src/app/services/account.service.ts");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ConfirmEmailComponent_div_1_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Email \u043D\u0435 \u0431\u044B\u043B \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D, \u043F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u0412\u0430\u0448\u0443 \u043F\u043E\u0447\u0442\u0443.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ConfirmEmailComponent_div_1_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Email \u0431\u044B\u043B \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D, \u0432\u043E\u0439\u0434\u0438\u0442\u0435 \u0432 \u0441\u0432\u043E\u0439 \u0430\u043A\u043A\u0430\u0443\u043D\u0442, \u0434\u043B\u044F \u0434\u043E\u0441\u0442\u0443\u043F\u0430 \u043A \u0444\u0443\u043D\u043A\u0446\u0438\u043E\u043D\u0430\u043B\u0443 \u0441\u0430\u0439\u0442\u0430.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ConfirmEmailComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ConfirmEmailComponent_div_1_div_1_Template, 3, 0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ConfirmEmailComponent_div_1_div_2_Template, 3, 0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.emailConfirmed);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.emailConfirmed);
      }
    }

    function ConfirmEmailComponent_div_2_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Email \u043D\u0435 \u0431\u044B\u043B \u0438\u0437\u043C\u0435\u043D\u0435\u043D, \u043F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u0412\u0430\u0448\u0443 \u043F\u043E\u0447\u0442\u0443.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ConfirmEmailComponent_div_2_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Email \u0431\u044B\u043B \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0438\u0437\u043C\u0435\u043D\u0435\u043D, \u0432\u043E\u0439\u0434\u0438\u0442\u0435 \u0432 \u0441\u0432\u043E\u0439 \u0430\u043A\u043A\u0430\u0443\u043D\u0442, \u0434\u043B\u044F \u0434\u043E\u0441\u0442\u0443\u043F\u0430 \u043A \u0444\u0443\u043D\u043A\u0446\u0438\u043E\u043D\u0430\u043B\u0443 \u0441\u0430\u0439\u0442\u0430.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ConfirmEmailComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ConfirmEmailComponent_div_2_div_1_Template, 3, 0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ConfirmEmailComponent_div_2_div_2_Template, 3, 0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.newEmailConfirmed);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.newEmailConfirmed);
      }
    }

    var ConfirmEmailComponent = /*#__PURE__*/function () {
      function ConfirmEmailComponent(toastr, activatedRoute, accountService, authService) {
        var _this50 = this;

        _classCallCheck(this, ConfirmEmailComponent);

        this.toastr = toastr;
        this.activatedRoute = activatedRoute;
        this.accountService = accountService;
        this.authService = authService;
        this.activatedRoute.queryParams.subscribe(function (params) {
          _this50.userId = params['userId'];
          _this50.token = params['token'];

          if (params['newEmail'] != null) {
            _this50.newEmail = params['newEmail'];
            _this50.forNewEmail = true;
          }
        });
      }

      _createClass(ConfirmEmailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.forNewEmail) {
            this.confirmNewEmail();
          } else {
            this.confirmEmail();
          }
        }
      }, {
        key: "confirmEmail",
        value: function confirmEmail() {
          var _this51 = this;

          this.authService.confirmEmail(this.userId, this.token).subscribe(function (data) {
            _this51.emailConfirmed = true;
          });
        }
      }, {
        key: "confirmNewEmail",
        value: function confirmNewEmail() {
          var _this52 = this;

          var body = {
            userId: this.userId,
            newEmail: this.newEmail,
            token: this.token
          };
          this.accountService.confirmNewEmail(body).subscribe(function (data) {
            _this52.newEmailConfirmed = true;
          });
        }
      }]);

      return ConfirmEmailComponent;
    }();

    ConfirmEmailComponent.ɵfac = function ConfirmEmailComponent_Factory(t) {
      return new (t || ConfirmEmailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_account_service__WEBPACK_IMPORTED_MODULE_3__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]));
    };

    ConfirmEmailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ConfirmEmailComponent,
      selectors: [["app-confirm-email"]],
      decls: 3,
      vars: 2,
      consts: [[1, "mx-4", "my-2", "py-4", "conf", 2, "text-align", "center"], [4, "ngIf"]],
      template: function ConfirmEmailComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ConfirmEmailComponent_div_1_Template, 3, 2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ConfirmEmailComponent_div_2_Template, 3, 2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.forNewEmail);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.forNewEmail);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]],
      styles: [".conf[_ngcontent-%COMP%]{\r\n    border: 1px solid white;\r\n}\r\n.conf[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    color: white;\r\n    margin: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9jb25maXJtLWVtYWlsL2NvbmZpcm0tZW1haWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFNBQVM7QUFDYiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvY29uZmlybS1lbWFpbC9jb25maXJtLWVtYWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29uZntcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG59XHJcbi5jb25mIHB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW46IDA7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfirmEmailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-confirm-email',
          templateUrl: './confirm-email.component.html',
          styleUrls: ['./confirm-email.component.css']
        }]
      }], function () {
        return [{
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: src_app_services_account_service__WEBPACK_IMPORTED_MODULE_3__["AccountService"]
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/user/external-login/external-login.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/user/external-login/external-login.component.ts ***!
    \*****************************************************************/

  /*! exports provided: ExternalLoginComponent */

  /***/
  function srcAppUserExternalLoginExternalLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExternalLoginComponent", function () {
      return ExternalLoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var ExternalLoginComponent = /*#__PURE__*/function () {
      function ExternalLoginComponent(toastr, activatedRoute, router) {
        var _this53 = this;

        _classCallCheck(this, ExternalLoginComponent);

        this.toastr = toastr;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.activatedRoute.queryParams.subscribe(function (params) {
          if (params['token']) {
            _this53.token = params['token'];
          }
        });
      }

      _createClass(ExternalLoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.token) {
            localStorage.setItem('token', this.token);
            this.router.navigateByUrl('/home');
          } else {
            this.toastr.error('Что-то пошло не так', 'Безуспешно.');
            this.router.navigateByUrl('/user/login');
          }
        }
      }]);

      return ExternalLoginComponent;
    }();

    ExternalLoginComponent.ɵfac = function ExternalLoginComponent_Factory(t) {
      return new (t || ExternalLoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    ExternalLoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ExternalLoginComponent,
      selectors: [["app-external-login"]],
      decls: 3,
      vars: 0,
      consts: [[1, "mx-4", "my-2", "py-4", "conf", 2, "text-align", "center"]],
      template: function ExternalLoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0427\u0442\u043E-\u0442\u043E \u043F\u043E\u0448\u043B\u043E \u043D\u0435 \u0442\u0430\u043A.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".conf[_ngcontent-%COMP%]{\r\n    border: 1px solid white;\r\n}\r\n.conf[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    color: white;\r\n    margin: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9leHRlcm5hbC1sb2dpbi9leHRlcm5hbC1sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osU0FBUztBQUNiIiwiZmlsZSI6InNyYy9hcHAvdXNlci9leHRlcm5hbC1sb2dpbi9leHRlcm5hbC1sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbmZ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxufVxyXG4uY29uZiBwe1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExternalLoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-external-login',
          templateUrl: './external-login.component.html',
          styleUrls: ['./external-login.component.css']
        }]
      }], function () {
        return [{
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/user/forgot-password/forgot-password.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/user/forgot-password/forgot-password.component.ts ***!
    \*******************************************************************/

  /*! exports provided: ForgotPasswordComponent */

  /***/
  function srcAppUserForgotPasswordForgotPasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function () {
      return ForgotPasswordComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ForgotPasswordComponent_label_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u042D\u0442\u043E \u043F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ForgotPasswordComponent_label_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u041F\u043E\u0447\u0442\u0430 \u0432\u0432\u0435\u0434\u0435\u043D\u0430 \u043D\u0435\u0432\u0435\u0440\u043D\u043E. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var ForgotPasswordComponent = /*#__PURE__*/function () {
      function ForgotPasswordComponent(authService, toastr) {
        _classCallCheck(this, ForgotPasswordComponent);

        this.authService = authService;
        this.toastr = toastr;
      }

      _createClass(ForgotPasswordComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this54 = this;

          this.authService.forgotPassword().subscribe(function (data) {
            _this54.toastr.success('Для восстановления, перейдите по ссылке, которая была отправлена на указаную почту.', 'Успешно.');
          }, function (err) {
            if (err.error == "User was not found") {
              _this54.toastr.error('Пользователь с такой почтой не был найден.', 'Пароль не может быть восстановлен.');
            } else if (err.error == "Email is not confirmed") {
              _this54.toastr.error('Почта не подтверждена.', 'Пароль не может быть восстановлен.');
            } else {
              _this54.toastr.error('Что-то пошло не так.', 'Пароль не может быть восстановлен.');
            }
          });
        }
      }]);

      return ForgotPasswordComponent;
    }();

    ForgotPasswordComponent.ɵfac = function ForgotPasswordComponent_Factory(t) {
      return new (t || ForgotPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]));
    };

    ForgotPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ForgotPasswordComponent,
      selectors: [["app-forgot-password"]],
      decls: 11,
      vars: 4,
      consts: [["autocomplete", "off", 3, "formGroup", "submit"], [1, "form-group", "required"], ["formControlName", "Email", 1, "form-control"], ["class", "text-danger", 4, "ngIf"], [1, "form-row"], [1, "form-group", "col-md-8", "offset-md-2"], ["type", "submit", 1, "btn", "btn-lg", "btn-block", 3, "disabled"], [1, "text-danger"]],
      template: function ForgotPasswordComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function ForgotPasswordComponent_Template_form_submit_0_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u041F\u043E\u0447\u0442\u0430");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ForgotPasswordComponent_label_5_Template, 2, 0, "label", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ForgotPasswordComponent_label_6_Template, 2, 0, "label", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u0412\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.authService.emailModel);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.emailModel.get("Email").touched && (ctx.authService.emailModel.get("Email").errors == null ? null : ctx.authService.emailModel.get("Email").errors.required));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.emailModel.get("Email").touched && (ctx.authService.emailModel.get("Email").errors == null ? null : ctx.authService.emailModel.get("Email").errors.email));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.authService.emailModel.valid);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
      styles: ["input.form-control[_ngcontent-%COMP%], input.form-control[_ngcontent-%COMP%]:focus{\r\n    background-color: #636b7b;\r\n    color: #fff;\r\n    border: 1px solid #636b7b;\r\n\r\n}\r\n\r\ninput.form-control[_ngcontent-%COMP%]:focus{\r\n    box-shadow: none;\r\n}\r\n\r\nbutton[type=submit].btn[_ngcontent-%COMP%]{\r\n    border-radius: 20px;\r\n    background-color: #04c582;\r\n    color: #fff;\r\n}\r\n\r\ndiv.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:not(.text-danger){\r\n    color: #545d6a;\r\n    font-weight: 700;\r\n}\r\n\r\ndiv.form-group.required[_ngcontent-%COMP%] > label[_ngcontent-%COMP%]:first-child:after{\r\n    content:'*';\r\n    color: #fff;\r\n    padding-left: 5px;\r\n}\r\n\r\n#toast-container[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\r\n    opacity:1;\r\n}\r\n\r\n.wrapper[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    flex-direction: column; \r\n    justify-content: center;\r\n    width: 100%;\r\n    padding: 20px;\r\n  }\r\n\r\n.wrapped-div[_ngcontent-%COMP%] {\r\n    border-radius: 10px 10px 10px 10px;\r\n    background: #2e3137;\r\n    padding: 30px;\r\n    width: 90%;\r\n    max-width: 450px;\r\n    position: relative;\r\n    padding: 0px;\r\n    box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);\r\n  }\r\n\r\n\r\n\r\n.tab-header[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n}\r\n\r\n.tab-header[_ngcontent-%COMP%]   h2.active[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n    border-bottom: 4px solid #fff;\r\n  }\r\n\r\n.tab-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    font-size: 18px;\r\n    font-weight: 600;\r\n    display:inline-block;\r\n    padding: 30px 40px 10px 40px;\r\n    cursor: pointer;\r\n    color: #545d6a;\r\n    border-bottom: 2px solid #545d6a;\r\n  }\r\n\r\n.tab-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:focus {\r\n      outline: none;\r\n  }\r\n\r\nform[_ngcontent-%COMP%]{\r\n      margin: 0px 16px;\r\n  }\r\n\r\ndiv.form-group[_ngcontent-%COMP%]   input.invalid[_ngcontent-%COMP%]{\r\n    border: 1px solid #dc3545; \r\n }\r\n\r\ndiv.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:first-child{\r\n    text-transform: uppercase;\r\n    font-size: 0.9rem;\r\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCx5QkFBeUI7O0FBRTdCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLGFBQWE7RUFDZjs7QUFFQTtJQUVFLGtDQUFrQztJQUNsQyxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFFWix5Q0FBeUM7RUFDM0M7O0FBRUEsU0FBUzs7QUFDWDtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFRTtJQUNFLFdBQVc7SUFDWCw2QkFBNkI7RUFDL0I7O0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsNEJBQTRCO0lBQzVCLGVBQWU7SUFDZixjQUFjO0lBQ2QsZ0NBQWdDO0VBQ2xDOztBQUVBO01BQ0ksYUFBYTtFQUNqQjs7QUFFQTtNQUNJLGdCQUFnQjtFQUNwQjs7QUFFRDtJQUNHLHlCQUF5QjtDQUM1Qjs7QUFDQTtJQUNHLHlCQUF5QjtJQUN6QixpQkFBaUI7Q0FDcEIiLCJmaWxlIjoic3JjL2FwcC91c2VyL2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbnB1dC5mb3JtLWNvbnRyb2wsaW5wdXQuZm9ybS1jb250cm9sOmZvY3Vze1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYzNmI3YjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzYzNmI3YjtcclxuXHJcbn1cclxuXHJcbmlucHV0LmZvcm0tY29udHJvbDpmb2N1c3tcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbmJ1dHRvblt0eXBlPXN1Ym1pdF0uYnRue1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNGM1ODI7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuZGl2LmZvcm0tZ3JvdXAgbGFiZWw6bm90KC50ZXh0LWRhbmdlcil7XHJcbiAgICBjb2xvcjogIzU0NWQ2YTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbmRpdi5mb3JtLWdyb3VwLnJlcXVpcmVkPmxhYmVsOmZpcnN0LWNoaWxkOmFmdGVye1xyXG4gICAgY29udGVudDonKic7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG59XHJcblxyXG4jdG9hc3QtY29udGFpbmVyID4gZGl2IHtcclxuICAgIG9wYWNpdHk6MTtcclxufVxyXG5cclxuLndyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLndyYXBwZWQtZGl2IHtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAxMHB4IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMmUzMTM3O1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtYXgtd2lkdGg6IDQ1MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDMwcHggNjBweCAwIHJnYmEoMCwwLDAsMC4zKTtcclxuICAgIGJveC1zaGFkb3c6IDAgMzBweCA2MHB4IDAgcmdiYSgwLDAsMCwwLjMpO1xyXG4gIH1cclxuXHJcbiAgLyogVGFicyAqL1xyXG4udGFiLWhlYWRlcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuICAudGFiLWhlYWRlciBoMi5hY3RpdmUge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItYm90dG9tOiA0cHggc29saWQgI2ZmZjtcclxuICB9XHJcblxyXG4gIC50YWItaGVhZGVyIGgyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDMwcHggNDBweCAxMHB4IDQwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjogIzU0NWQ2YTtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNTQ1ZDZhO1xyXG4gIH1cclxuXHJcbiAgLnRhYi1oZWFkZXIgaDI6Zm9jdXMge1xyXG4gICAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxuXHJcbiAgZm9ybXtcclxuICAgICAgbWFyZ2luOiAwcHggMTZweDtcclxuICB9XHJcblxyXG4gZGl2LmZvcm0tZ3JvdXAgaW5wdXQuaW52YWxpZHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkYzM1NDU7IFxyXG4gfVxyXG4gZGl2LmZvcm0tZ3JvdXAgbGFiZWw6Zmlyc3QtY2hpbGR7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiB9Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForgotPasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-forgot-password',
          templateUrl: './forgot-password.component.html',
          styleUrls: ['./forgot-password.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/user/login/login.component.ts":
  /*!***********************************************!*\
    !*** ./src/app/user/login/login.component.ts ***!
    \***********************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppUserLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(authService, router, toastr) {
        _classCallCheck(this, LoginComponent);

        this.authService = authService;
        this.router = router;
        this.toastr = toastr;
        this.formModel = {
          UserName: '',
          Password: ''
        };
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (localStorage.getItem('token') != null) this.router.navigateByUrl('/home');
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(form) {
          var _this55 = this;

          this.authService.login(form.value).subscribe(function (res) {
            localStorage.setItem('token', res.jwtToken);

            _this55.router.navigateByUrl('/home');
          }, function (err) {
            if (err.error == "Username or password is incorrect") {
              _this55.toastr.error('Логин или пароль введены неверно.', 'Вход не выполнен.');
            } else if (err.error == "Email is not confirmed") {
              _this55.toastr.error('Почта не подтверждена.', 'Вход не выполнен.');
            } else {
              _this55.toastr.error('Что-то пошло не так.', 'Вход не выполнен.');
            }
          });
        }
      }, {
        key: "show_hide_password",
        value: function show_hide_password() {
          var input = document.getElementById('password-input');
          var eye = document.getElementById('passeye');

          if (input.getAttribute('type') == 'password') {
            eye.classList.add('view');
            input.setAttribute('type', 'text');
          } else {
            eye.classList.remove('view');
            input.setAttribute('type', 'password');
          }

          return false;
        }
      }, {
        key: "googleLogin",
        value: function googleLogin() {
          this.authService.googleLogin();
        }
      }, {
        key: "facebookLogin",
        value: function facebookLogin() {
          this.authService.facebookLogin();
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 28,
      vars: 3,
      consts: [["src", "/assets/img/single_user.png", 1, "mx-auto", "d-block"], ["autocomplete", "off", 1, "mb-4", 3, "submit"], ["form", "ngForm"], [1, "form-group"], ["name", "UserName", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["UserName", "ngModel"], [1, "password"], ["type", "password", "id", "password-input", "name", "Password", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["Password", "ngModel"], ["href", "#", "id", "passeye", 1, "password-control", 3, "click"], [1, "form-row"], [1, "form-group", "col-md-6", "py-2", "px-4"], ["routerLink", "/user/forgot-password", 1, "btn", "btn-outline-secondary", "btn-sm"], [1, "form-group", "col-md-6"], ["type", "submit", 1, "btn", "btn-lg", "btn-block", 3, "disabled"], [1, "btn", "btn-outline-secondary", "btn-sm", 2, "color", "#6c757d", 3, "click"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function LoginComponent_Template_form_submit_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

            return ctx.onSubmit(_r0);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u0418\u043C\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 4, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_6_listener($event) {
            return ctx.formModel.UserName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u041F\u0430\u0440\u043E\u043B\u044C");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 7, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_12_listener($event) {
            return ctx.formModel.Password = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_a_click_14_listener() {
            return ctx.show_hide_password();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u0417\u0430\u0431\u044B\u043B\u0438 \u043F\u0430\u0440\u043E\u043B\u044C?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\u0412\u043E\u0439\u0442\u0438");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_a_click_23_listener() {
            return ctx.googleLogin();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u0412\u043E\u0439\u0442\u0438 \u0447\u0435\u0440\u0435\u0437 Google");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_a_click_26_listener() {
            return ctx.facebookLogin();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\u0412\u043E\u0439\u0442\u0438 \u0447\u0435\u0440\u0435\u0437 Facebook");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.formModel.UserName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.formModel.Password);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r0.invalid);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      styles: ["input.form-control[_ngcontent-%COMP%], input.form-control[_ngcontent-%COMP%]:focus{\r\n    background-color: #636b7b;\r\n    color: #fff;\r\n    border: 1px solid #636b7b;\r\n\r\n}\r\n\r\ninput.form-control[_ngcontent-%COMP%]:focus{\r\n    box-shadow: none;\r\n}\r\n\r\nbutton[type=submit].btn[_ngcontent-%COMP%]{\r\n    border-radius: 20px;\r\n    background-color: #04c582;\r\n    color: #fff;\r\n}\r\n\r\ndiv.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:not(.text-danger){\r\n    color: #545d6a;\r\n    font-weight: 700;\r\n}\r\n\r\ndiv.form-group.required[_ngcontent-%COMP%] > label[_ngcontent-%COMP%]:first-child:after{\r\n    content:'*';\r\n    color: #fff;\r\n    padding-left: 5px;\r\n}\r\n\r\n#toast-container[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\r\n    opacity:1;\r\n}\r\n\r\n.wrapper[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    flex-direction: column; \r\n    justify-content: center;\r\n    width: 100%;\r\n    padding: 20px;\r\n  }\r\n\r\n.wrapped-div[_ngcontent-%COMP%] {\r\n    border-radius: 10px 10px 10px 10px;\r\n    background: #2e3137;\r\n    padding: 30px;\r\n    width: 90%;\r\n    max-width: 450px;\r\n    position: relative;\r\n    padding: 0px;\r\n    box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);\r\n  }\r\n\r\n\r\n\r\n.tab-header[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n}\r\n\r\n.tab-header[_ngcontent-%COMP%]   h2.active[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n    border-bottom: 4px solid #fff;\r\n  }\r\n\r\n.tab-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    font-size: 18px;\r\n    font-weight: 600;\r\n    display:inline-block;\r\n    padding: 30px 40px 10px 40px;\r\n    cursor: pointer;\r\n    color: #545d6a;\r\n    border-bottom: 2px solid #545d6a;\r\n  }\r\n\r\n.tab-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:focus {\r\n      outline: none;\r\n  }\r\n\r\nform[_ngcontent-%COMP%]{\r\n      margin: 0px 16px;\r\n  }\r\n\r\ndiv.form-group[_ngcontent-%COMP%]   input.invalid[_ngcontent-%COMP%]{\r\n    border: 1px solid #dc3545; \r\n }\r\n\r\ndiv.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:first-child{\r\n    text-transform: uppercase;\r\n    font-size: 0.9rem;\r\n }\r\n\r\n.password[_ngcontent-%COMP%] {\r\n\tposition: relative;\r\n}\r\n\r\n.password-control[_ngcontent-%COMP%] {\r\n\tposition: absolute;\r\n\ttop: 11px;\r\n\tright: 6px;\r\n\tdisplay: inline-block;\r\n\twidth: 20px;\r\n\theight: 20px;\r\n\tbackground: url(https://snipp.ru/demo/495/view.svg) 0 0 no-repeat;\r\n}\r\n\r\n.password-control.view[_ngcontent-%COMP%] {\r\n\tbackground: url(https://snipp.ru/demo/495/no-view.svg) 0 0 no-repeat;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gseUJBQXlCOztBQUU3Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsV0FBVztBQUNmOztBQUVBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxhQUFhO0VBQ2Y7O0FBRUE7SUFFRSxrQ0FBa0M7SUFDbEMsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixZQUFZO0lBRVoseUNBQXlDO0VBQzNDOztBQUVBLFNBQVM7O0FBQ1g7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUU7SUFDRSxXQUFXO0lBQ1gsNkJBQTZCO0VBQy9COztBQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLDRCQUE0QjtJQUM1QixlQUFlO0lBQ2YsY0FBYztJQUNkLGdDQUFnQztFQUNsQzs7QUFFQTtNQUNJLGFBQWE7RUFDakI7O0FBRUE7TUFDSSxnQkFBZ0I7RUFDcEI7O0FBRUQ7SUFDRyx5QkFBeUI7Q0FDNUI7O0FBQ0E7SUFDRyx5QkFBeUI7SUFDekIsaUJBQWlCO0NBQ3BCOztBQUNBO0NBQ0Esa0JBQWtCO0FBQ25COztBQUNBO0NBQ0Msa0JBQWtCO0NBQ2xCLFNBQVM7Q0FDVCxVQUFVO0NBQ1YscUJBQXFCO0NBQ3JCLFdBQVc7Q0FDWCxZQUFZO0NBQ1osaUVBQWlFO0FBQ2xFOztBQUNBO0NBQ0Msb0VBQW9FO0FBQ3JFIiwiZmlsZSI6InNyYy9hcHAvdXNlci9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmlucHV0LmZvcm0tY29udHJvbCxpbnB1dC5mb3JtLWNvbnRyb2w6Zm9jdXN7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjM2YjdiO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNjM2YjdiO1xyXG5cclxufVxyXG5cclxuaW5wdXQuZm9ybS1jb250cm9sOmZvY3Vze1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuYnV0dG9uW3R5cGU9c3VibWl0XS5idG57XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA0YzU4MjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG5kaXYuZm9ybS1ncm91cCBsYWJlbDpub3QoLnRleHQtZGFuZ2VyKXtcclxuICAgIGNvbG9yOiAjNTQ1ZDZhO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuZGl2LmZvcm0tZ3JvdXAucmVxdWlyZWQ+bGFiZWw6Zmlyc3QtY2hpbGQ6YWZ0ZXJ7XHJcbiAgICBjb250ZW50OicqJztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcbiN0b2FzdC1jb250YWluZXIgPiBkaXYge1xyXG4gICAgb3BhY2l0eToxO1xyXG59XHJcblxyXG4ud3JhcHBlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IFxyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgfVxyXG5cclxuICAud3JhcHBlZC1kaXYge1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggMTBweDtcclxuICAgIGJhY2tncm91bmQ6ICMyZTMxMzc7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIG1heC13aWR0aDogNDUwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMzBweCA2MHB4IDAgcmdiYSgwLDAsMCwwLjMpO1xyXG4gICAgYm94LXNoYWRvdzogMCAzMHB4IDYwcHggMCByZ2JhKDAsMCwwLDAuMyk7XHJcbiAgfVxyXG5cclxuICAvKiBUYWJzICovXHJcbi50YWItaGVhZGVye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4gIC50YWItaGVhZGVyIGgyLmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAjZmZmO1xyXG4gIH1cclxuXHJcbiAgLnRhYi1oZWFkZXIgaDIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogMzBweCA0MHB4IDEwcHggNDBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiAjNTQ1ZDZhO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM1NDVkNmE7XHJcbiAgfVxyXG5cclxuICAudGFiLWhlYWRlciBoMjpmb2N1cyB7XHJcbiAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfVxyXG5cclxuICBmb3Jte1xyXG4gICAgICBtYXJnaW46IDBweCAxNnB4O1xyXG4gIH1cclxuXHJcbiBkaXYuZm9ybS1ncm91cCBpbnB1dC5pbnZhbGlke1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RjMzU0NTsgXHJcbiB9XHJcbiBkaXYuZm9ybS1ncm91cCBsYWJlbDpmaXJzdC1jaGlsZHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxuIH1cclxuIC5wYXNzd29yZCB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5wYXNzd29yZC1jb250cm9sIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiAxMXB4O1xyXG5cdHJpZ2h0OiA2cHg7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdHdpZHRoOiAyMHB4O1xyXG5cdGhlaWdodDogMjBweDtcclxuXHRiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly9zbmlwcC5ydS9kZW1vLzQ5NS92aWV3LnN2ZykgMCAwIG5vLXJlcGVhdDtcclxufVxyXG4ucGFzc3dvcmQtY29udHJvbC52aWV3IHtcclxuXHRiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly9zbmlwcC5ydS9kZW1vLzQ5NS9uby12aWV3LnN2ZykgMCAwIG5vLXJlcGVhdDtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.css']
        }]
      }], function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/user/registration/registration.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/user/registration/registration.component.ts ***!
    \*************************************************************/

  /*! exports provided: RegistrationComponent */

  /***/
  function srcAppUserRegistrationRegistrationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function () {
      return RegistrationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function RegistrationComponent_label_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u042D\u0442\u043E \u043F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegistrationComponent_label_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u042D\u0442\u043E \u043F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegistrationComponent_label_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u041F\u043E\u0447\u0442\u0430 \u0432\u0432\u0435\u0434\u0435\u043D\u0430 \u043D\u0435\u0432\u0435\u0440\u043D\u043E. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegistrationComponent_label_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u042D\u0442\u043E \u043F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegistrationComponent_label_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u041F\u0430\u0440\u043E\u043B\u044C \u0434\u043E\u043B\u0436\u0435\u043D \u0441\u043E\u0441\u0442\u043E\u044F\u0442\u044C \u043C\u0438\u043D\u0438\u043C\u0443\u043C \u0438\u0437 6 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegistrationComponent_label_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u042D\u0442\u043E \u043F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RegistrationComponent_label_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u041F\u0430\u0440\u043E\u043B\u0438 \u043D\u0435 \u0441\u043E\u0432\u043F\u0430\u0434\u0430\u044E\u0442. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var RegistrationComponent = /*#__PURE__*/function () {
      function RegistrationComponent(authService, toastr) {
        _classCallCheck(this, RegistrationComponent);

        this.authService = authService;
        this.toastr = toastr;
        this.pas1 = "password";
        this.pas2 = "confirmPassword";
      }

      _createClass(RegistrationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.authService.formModel.reset();
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this56 = this;

          this.authService.register().subscribe(function (res) {
            if (res.succeeded) {
              _this56.authService.formModel.reset();

              _this56.toastr.success('Для окончания регистрации, перейдите по ссылке, которая была отправлена на указаную почту.', 'Регистрация прошла успешно.');
            } else {
              res.errors.forEach(function (element) {
                switch (element.code) {
                  case 'DuplicateUserName':
                    _this56.toastr.error('Данный логин уже занят.', 'Регистрация не выполнена.');

                    break;

                  default:
                    _this56.toastr.error(element.description, 'Регистрация не выполнена.');

                    break;
                }
              });
            }
          }, function (err) {
            console.log(err);

            _this56.toastr.error('Что-то пошло не так.', 'Регистрация не выполнена.');
          });
        }
      }, {
        key: "show_hide_password",
        value: function show_hide_password(el) {
          if (el == "password") {
            var input = document.getElementById('password-input');
            var eye = document.getElementById('passeye');
          } else {
            var input = document.getElementById('confirm-password-input');
            var eye = document.getElementById('confirm-passeye');
          }

          if (input.getAttribute('type') == 'password') {
            eye.classList.add('view');
            input.setAttribute('type', 'text');
          } else {
            eye.classList.remove('view');
            input.setAttribute('type', 'password');
          }

          return false;
        }
      }]);

      return RegistrationComponent;
    }();

    RegistrationComponent.ɵfac = function RegistrationComponent_Factory(t) {
      return new (t || RegistrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]));
    };

    RegistrationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RegistrationComponent,
      selectors: [["app-registration"]],
      decls: 33,
      vars: 9,
      consts: [["autocomplete", "off", 3, "formGroup", "submit"], [1, "form-group", "required"], ["formControlName", "UserName", 1, "form-control"], ["class", "text-danger", 4, "ngIf"], ["formControlName", "Email", 1, "form-control"], ["formGroupName", "Passwords"], [1, "password"], ["type", "password", "id", "password-input", "formControlName", "Password", 1, "form-control"], ["href", "#", "id", "passeye", 1, "password-control", 3, "click"], ["type", "password", "id", "confirm-password-input", "formControlName", "ConfirmPassword", 1, "form-control"], ["href", "#", "id", "confirm-passeye", 1, "password-control", 3, "click"], [1, "form-row"], [1, "form-group", "col-md-8", "offset-md-2"], ["type", "submit", 1, "btn", "btn-lg", "btn-block", 3, "disabled"], [1, "text-danger"]],
      template: function RegistrationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function RegistrationComponent_Template_form_submit_0_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u0418\u043C\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, RegistrationComponent_label_5_Template, 2, 0, "label", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u041F\u043E\u0447\u0442\u0430");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, RegistrationComponent_label_10_Template, 2, 0, "label", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, RegistrationComponent_label_11_Template, 2, 0, "label", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u041F\u0430\u0440\u043E\u043B\u044C");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegistrationComponent_Template_a_click_18_listener() {
            return ctx.show_hide_password(ctx.pas1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, RegistrationComponent_label_19_Template, 2, 0, "label", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, RegistrationComponent_label_20_Template, 2, 0, "label", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegistrationComponent_Template_a_click_26_listener() {
            return ctx.show_hide_password(ctx.pas2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, RegistrationComponent_label_27_Template, 2, 0, "label", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, RegistrationComponent_label_28_Template, 2, 0, "label", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.authService.formModel);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.formModel.get("UserName").touched && (ctx.authService.formModel.get("UserName").errors == null ? null : ctx.authService.formModel.get("UserName").errors.required));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.formModel.get("Email").touched && (ctx.authService.formModel.get("Email").errors == null ? null : ctx.authService.formModel.get("Email").errors.required));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.formModel.get("Email").touched && (ctx.authService.formModel.get("Email").errors == null ? null : ctx.authService.formModel.get("Email").errors.email));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.formModel.get("Passwords.Password").touched && (ctx.authService.formModel.get("Passwords.Password").errors == null ? null : ctx.authService.formModel.get("Passwords.Password").errors.required));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.formModel.get("Passwords.Password").touched && (ctx.authService.formModel.get("Passwords.Password").errors == null ? null : ctx.authService.formModel.get("Passwords.Password").errors.minlength));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.formModel.get("Passwords.ConfirmPassword").touched && (ctx.authService.formModel.get("Passwords.ConfirmPassword").errors == null ? null : ctx.authService.formModel.get("Passwords.ConfirmPassword").errors.required));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.formModel.get("Passwords.ConfirmPassword").touched && (ctx.authService.formModel.get("Passwords.ConfirmPassword").errors == null ? null : ctx.authService.formModel.get("Passwords.ConfirmPassword").errors.passwordMismatch));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.authService.formModel.valid);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupName"]],
      styles: ["input.form-control[_ngcontent-%COMP%], input.form-control[_ngcontent-%COMP%]:focus{\r\n    background-color: #636b7b;\r\n    color: #fff;\r\n    border: 1px solid #636b7b;\r\n\r\n}\r\n\r\ninput.form-control[_ngcontent-%COMP%]:focus{\r\n    box-shadow: none;\r\n}\r\n\r\nbutton[type=submit].btn[_ngcontent-%COMP%]{\r\n    border-radius: 20px;\r\n    background-color: #04c582;\r\n    color: #fff;\r\n}\r\n\r\ndiv.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:not(.text-danger){\r\n    color: #545d6a;\r\n    font-weight: 700;\r\n}\r\n\r\ndiv.form-group.required[_ngcontent-%COMP%] > label[_ngcontent-%COMP%]:first-child:after{\r\n    content:'*';\r\n    color: #fff;\r\n    padding-left: 5px;\r\n}\r\n\r\n#toast-container[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\r\n    opacity:1;\r\n}\r\n\r\n.wrapper[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    flex-direction: column; \r\n    justify-content: center;\r\n    width: 100%;\r\n    padding: 20px;\r\n  }\r\n\r\n.wrapped-div[_ngcontent-%COMP%] {\r\n    border-radius: 10px 10px 10px 10px;\r\n    background: #2e3137;\r\n    padding: 30px;\r\n    width: 90%;\r\n    max-width: 450px;\r\n    position: relative;\r\n    padding: 0px;\r\n    box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);\r\n  }\r\n\r\n\r\n\r\n.tab-header[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n}\r\n\r\n.tab-header[_ngcontent-%COMP%]   h2.active[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n    border-bottom: 4px solid #fff;\r\n  }\r\n\r\n.tab-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    font-size: 18px;\r\n    font-weight: 600;\r\n    display:inline-block;\r\n    padding: 30px 40px 10px 40px;\r\n    cursor: pointer;\r\n    color: #545d6a;\r\n    border-bottom: 2px solid #545d6a;\r\n  }\r\n\r\n.tab-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:focus {\r\n      outline: none;\r\n  }\r\n\r\nform[_ngcontent-%COMP%]{\r\n      margin: 0px 16px;\r\n  }\r\n\r\ndiv.form-group[_ngcontent-%COMP%]   input.invalid[_ngcontent-%COMP%]{\r\n    border: 1px solid #dc3545; \r\n }\r\n\r\ndiv.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:first-child{\r\n    text-transform: uppercase;\r\n    font-size: 0.9rem;\r\n }\r\n\r\n.password[_ngcontent-%COMP%] {\r\n\tposition: relative;\r\n }\r\n\r\n.password-control[_ngcontent-%COMP%] {\r\n\tposition: absolute;\r\n\ttop: 11px;\r\n\tright: 6px;\r\n\tdisplay: inline-block;\r\n\twidth: 20px;\r\n\theight: 20px;\r\n\tbackground: url(https://snipp.ru/demo/495/view.svg) 0 0 no-repeat;\r\n }\r\n\r\n.password-control.view[_ngcontent-%COMP%] {\r\n\tbackground: url(https://snipp.ru/demo/495/no-view.svg) 0 0 no-repeat;\r\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCx5QkFBeUI7O0FBRTdCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLGFBQWE7RUFDZjs7QUFFQTtJQUVFLGtDQUFrQztJQUNsQyxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFFWix5Q0FBeUM7RUFDM0M7O0FBRUEsU0FBUzs7QUFDWDtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFRTtJQUNFLFdBQVc7SUFDWCw2QkFBNkI7RUFDL0I7O0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsNEJBQTRCO0lBQzVCLGVBQWU7SUFDZixjQUFjO0lBQ2QsZ0NBQWdDO0VBQ2xDOztBQUVBO01BQ0ksYUFBYTtFQUNqQjs7QUFFQTtNQUNJLGdCQUFnQjtFQUNwQjs7QUFFRDtJQUNHLHlCQUF5QjtDQUM1Qjs7QUFDQTtJQUNHLHlCQUF5QjtJQUN6QixpQkFBaUI7Q0FDcEI7O0FBQ0E7Q0FDQSxrQkFBa0I7Q0FDbEI7O0FBQ0E7Q0FDQSxrQkFBa0I7Q0FDbEIsU0FBUztDQUNULFVBQVU7Q0FDVixxQkFBcUI7Q0FDckIsV0FBVztDQUNYLFlBQVk7Q0FDWixpRUFBaUU7Q0FDakU7O0FBQ0E7Q0FDQSxvRUFBb0U7Q0FDcEUiLCJmaWxlIjoic3JjL2FwcC91c2VyL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbnB1dC5mb3JtLWNvbnRyb2wsaW5wdXQuZm9ybS1jb250cm9sOmZvY3Vze1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYzNmI3YjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzYzNmI3YjtcclxuXHJcbn1cclxuXHJcbmlucHV0LmZvcm0tY29udHJvbDpmb2N1c3tcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbmJ1dHRvblt0eXBlPXN1Ym1pdF0uYnRue1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNGM1ODI7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuZGl2LmZvcm0tZ3JvdXAgbGFiZWw6bm90KC50ZXh0LWRhbmdlcil7XHJcbiAgICBjb2xvcjogIzU0NWQ2YTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbmRpdi5mb3JtLWdyb3VwLnJlcXVpcmVkPmxhYmVsOmZpcnN0LWNoaWxkOmFmdGVye1xyXG4gICAgY29udGVudDonKic7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG59XHJcblxyXG4jdG9hc3QtY29udGFpbmVyID4gZGl2IHtcclxuICAgIG9wYWNpdHk6MTtcclxufVxyXG5cclxuLndyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLndyYXBwZWQtZGl2IHtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAxMHB4IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMmUzMTM3O1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtYXgtd2lkdGg6IDQ1MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDMwcHggNjBweCAwIHJnYmEoMCwwLDAsMC4zKTtcclxuICAgIGJveC1zaGFkb3c6IDAgMzBweCA2MHB4IDAgcmdiYSgwLDAsMCwwLjMpO1xyXG4gIH1cclxuXHJcbiAgLyogVGFicyAqL1xyXG4udGFiLWhlYWRlcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuICAudGFiLWhlYWRlciBoMi5hY3RpdmUge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItYm90dG9tOiA0cHggc29saWQgI2ZmZjtcclxuICB9XHJcblxyXG4gIC50YWItaGVhZGVyIGgyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDMwcHggNDBweCAxMHB4IDQwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjogIzU0NWQ2YTtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNTQ1ZDZhO1xyXG4gIH1cclxuXHJcbiAgLnRhYi1oZWFkZXIgaDI6Zm9jdXMge1xyXG4gICAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxuXHJcbiAgZm9ybXtcclxuICAgICAgbWFyZ2luOiAwcHggMTZweDtcclxuICB9XHJcblxyXG4gZGl2LmZvcm0tZ3JvdXAgaW5wdXQuaW52YWxpZHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkYzM1NDU7IFxyXG4gfVxyXG4gZGl2LmZvcm0tZ3JvdXAgbGFiZWw6Zmlyc3QtY2hpbGR7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiB9XHJcbiAucGFzc3dvcmQge1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuIH1cclxuIC5wYXNzd29yZC1jb250cm9sIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiAxMXB4O1xyXG5cdHJpZ2h0OiA2cHg7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdHdpZHRoOiAyMHB4O1xyXG5cdGhlaWdodDogMjBweDtcclxuXHRiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly9zbmlwcC5ydS9kZW1vLzQ5NS92aWV3LnN2ZykgMCAwIG5vLXJlcGVhdDtcclxuIH1cclxuIC5wYXNzd29yZC1jb250cm9sLnZpZXcge1xyXG5cdGJhY2tncm91bmQ6IHVybChodHRwczovL3NuaXBwLnJ1L2RlbW8vNDk1L25vLXZpZXcuc3ZnKSAwIDAgbm8tcmVwZWF0O1xyXG4gfSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegistrationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-registration',
          templateUrl: './registration.component.html',
          styleUrls: ['./registration.component.css']
        }]
      }], function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/user/reset-password/reset-password.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/user/reset-password/reset-password.component.ts ***!
    \*****************************************************************/

  /*! exports provided: ResetPasswordComponent */

  /***/
  function srcAppUserResetPasswordResetPasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function () {
      return ResetPasswordComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ResetPasswordComponent_label_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u042D\u0442\u043E \u043F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ResetPasswordComponent_label_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u041F\u0430\u0440\u043E\u043B\u044C \u0434\u043E\u043B\u0436\u0435\u043D \u0441\u043E\u0441\u0442\u043E\u044F\u0442\u044C \u043C\u0438\u043D\u0438\u043C\u0443\u043C \u0438\u0437 6 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ResetPasswordComponent_label_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u042D\u0442\u043E \u043F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ResetPasswordComponent_label_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u041F\u0430\u0440\u043E\u043B\u0438 \u043D\u0435 \u0441\u043E\u0432\u043F\u0430\u0434\u0430\u044E\u0442. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var ResetPasswordComponent = /*#__PURE__*/function () {
      function ResetPasswordComponent(activatedRoute, authService, toastr, router) {
        var _this57 = this;

        _classCallCheck(this, ResetPasswordComponent);

        this.activatedRoute = activatedRoute;
        this.authService = authService;
        this.toastr = toastr;
        this.router = router;
        this.pas1 = "password";
        this.pas2 = "confirmPassword";
        this.activatedRoute.queryParams.subscribe(function (params) {
          _this57.userId = params['userId'];
          _this57.token = params['token'];
        });
      }

      _createClass(ResetPasswordComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.authService.passwordsModel.reset();
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this58 = this;

          this.authService.resetPassword(this.userId, this.token).subscribe(function (res) {
            if (res.succeeded) {
              _this58.router.navigateByUrl('/user/login');

              _this58.toastr.success('Пароль был изменен.', 'Успешно.');
            } else {
              res.errors.forEach(function (element) {
                _this58.toastr.error(element.description, 'Пароль не был изменен.');
              });
            }
          }, function (err) {
            _this58.toastr.error('Что-то пошло не так.', 'Пароль не был изменен.');
          });
        }
      }, {
        key: "show_hide_password",
        value: function show_hide_password(el) {
          if (el == "password") {
            var input = document.getElementById('password-input');
            var eye = document.getElementById('passeye');
          } else {
            var input = document.getElementById('confirm-password-input');
            var eye = document.getElementById('confirm-passeye');
          }

          if (input.getAttribute('type') == 'password') {
            eye.classList.add('view');
            input.setAttribute('type', 'text');
          } else {
            eye.classList.remove('view');
            input.setAttribute('type', 'password');
          }

          return false;
        }
      }]);

      return ResetPasswordComponent;
    }();

    ResetPasswordComponent.ɵfac = function ResetPasswordComponent_Factory(t) {
      return new (t || ResetPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    ResetPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ResetPasswordComponent,
      selectors: [["app-reset-password"]],
      decls: 22,
      vars: 6,
      consts: [["autocomplete", "off", 3, "formGroup", "submit"], ["formGroupName", "Passwords"], [1, "form-group", "required"], [1, "password"], ["type", "password", "id", "password-input", "formControlName", "Password", 1, "form-control"], ["href", "#", "id", "passeye", 1, "password-control", 3, "click"], ["class", "text-danger", 4, "ngIf"], ["type", "password", "id", "confirm-password-input", "formControlName", "ConfirmPassword", 1, "form-control"], ["href", "#", "id", "confirm-passeye", 1, "password-control", 3, "click"], [1, "form-row"], [1, "form-group", "col-md-8", "offset-md-2"], ["type", "submit", 1, "btn", "btn-lg", "btn-block", 3, "disabled"], [1, "text-danger"]],
      template: function ResetPasswordComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function ResetPasswordComponent_Template_form_submit_0_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u041D\u043E\u0432\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResetPasswordComponent_Template_a_click_7_listener() {
            return ctx.show_hide_password(ctx.pas1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ResetPasswordComponent_label_8_Template, 2, 0, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ResetPasswordComponent_label_9_Template, 2, 0, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResetPasswordComponent_Template_a_click_15_listener() {
            return ctx.show_hide_password(ctx.pas2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ResetPasswordComponent_label_16_Template, 2, 0, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ResetPasswordComponent_label_17_Template, 2, 0, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.authService.passwordsModel);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.passwordsModel.get("Passwords.Password").touched && (ctx.authService.passwordsModel.get("Passwords.Password").errors == null ? null : ctx.authService.passwordsModel.get("Passwords.Password").errors.required));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.passwordsModel.get("Passwords.Password").touched && (ctx.authService.passwordsModel.get("Passwords.Password").errors == null ? null : ctx.authService.passwordsModel.get("Passwords.Password").errors.minlength));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.passwordsModel.get("Passwords.ConfirmPassword").touched && (ctx.authService.passwordsModel.get("Passwords.ConfirmPassword").errors == null ? null : ctx.authService.passwordsModel.get("Passwords.ConfirmPassword").errors.required));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.passwordsModel.get("Passwords.ConfirmPassword").touched && (ctx.authService.passwordsModel.get("Passwords.ConfirmPassword").errors == null ? null : ctx.authService.passwordsModel.get("Passwords.ConfirmPassword").errors.passwordMismatch));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.authService.passwordsModel.valid);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]],
      styles: ["input.form-control[_ngcontent-%COMP%], input.form-control[_ngcontent-%COMP%]:focus{\r\n    background-color: #636b7b;\r\n    color: #fff;\r\n    border: 1px solid #636b7b;\r\n\r\n}\r\n\r\ninput.form-control[_ngcontent-%COMP%]:focus{\r\n    box-shadow: none;\r\n}\r\n\r\nbutton[type=submit].btn[_ngcontent-%COMP%]{\r\n    border-radius: 20px;\r\n    background-color: #04c582;\r\n    color: #fff;\r\n}\r\n\r\ndiv.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:not(.text-danger){\r\n    color: #545d6a;\r\n    font-weight: 700;\r\n}\r\n\r\ndiv.form-group.required[_ngcontent-%COMP%] > label[_ngcontent-%COMP%]:first-child:after{\r\n    content:'*';\r\n    color: #fff;\r\n    padding-left: 5px;\r\n}\r\n\r\n#toast-container[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\r\n    opacity:1;\r\n}\r\n\r\n.wrapper[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    flex-direction: column; \r\n    justify-content: center;\r\n    width: 100%;\r\n    padding: 20px;\r\n  }\r\n\r\n.wrapped-div[_ngcontent-%COMP%] {\r\n    border-radius: 10px 10px 10px 10px;\r\n    background: #2e3137;\r\n    padding: 30px;\r\n    width: 90%;\r\n    max-width: 450px;\r\n    position: relative;\r\n    padding: 0px;\r\n    box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);\r\n  }\r\n\r\n\r\n\r\n.tab-header[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n}\r\n\r\n.tab-header[_ngcontent-%COMP%]   h2.active[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n    border-bottom: 4px solid #fff;\r\n  }\r\n\r\n.tab-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    font-size: 18px;\r\n    font-weight: 600;\r\n    display:inline-block;\r\n    padding: 30px 40px 10px 40px;\r\n    cursor: pointer;\r\n    color: #545d6a;\r\n    border-bottom: 2px solid #545d6a;\r\n  }\r\n\r\n.tab-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:focus {\r\n      outline: none;\r\n  }\r\n\r\nform[_ngcontent-%COMP%]{\r\n      margin: 0px 16px;\r\n  }\r\n\r\ndiv.form-group[_ngcontent-%COMP%]   input.invalid[_ngcontent-%COMP%]{\r\n    border: 1px solid #dc3545; \r\n }\r\n\r\ndiv.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:first-child{\r\n    text-transform: uppercase;\r\n    font-size: 0.9rem;\r\n }\r\n\r\n.password[_ngcontent-%COMP%] {\r\n\tposition: relative;\r\n }\r\n\r\n.password-control[_ngcontent-%COMP%] {\r\n\tposition: absolute;\r\n\ttop: 11px;\r\n\tright: 6px;\r\n\tdisplay: inline-block;\r\n\twidth: 20px;\r\n\theight: 20px;\r\n\tbackground: url(https://snipp.ru/demo/495/view.svg) 0 0 no-repeat;\r\n }\r\n\r\n.password-control.view[_ngcontent-%COMP%] {\r\n\tbackground: url(https://snipp.ru/demo/495/no-view.svg) 0 0 no-repeat;\r\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9yZXNldC1wYXNzd29yZC9yZXNldC1wYXNzd29yZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gseUJBQXlCOztBQUU3Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsV0FBVztBQUNmOztBQUVBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxhQUFhO0VBQ2Y7O0FBRUE7SUFFRSxrQ0FBa0M7SUFDbEMsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixZQUFZO0lBRVoseUNBQXlDO0VBQzNDOztBQUVBLFNBQVM7O0FBQ1g7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUU7SUFDRSxXQUFXO0lBQ1gsNkJBQTZCO0VBQy9COztBQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLDRCQUE0QjtJQUM1QixlQUFlO0lBQ2YsY0FBYztJQUNkLGdDQUFnQztFQUNsQzs7QUFFQTtNQUNJLGFBQWE7RUFDakI7O0FBRUE7TUFDSSxnQkFBZ0I7RUFDcEI7O0FBRUQ7SUFDRyx5QkFBeUI7Q0FDNUI7O0FBQ0E7SUFDRyx5QkFBeUI7SUFDekIsaUJBQWlCO0NBQ3BCOztBQUVBO0NBQ0Esa0JBQWtCO0NBQ2xCOztBQUNBO0NBQ0Esa0JBQWtCO0NBQ2xCLFNBQVM7Q0FDVCxVQUFVO0NBQ1YscUJBQXFCO0NBQ3JCLFdBQVc7Q0FDWCxZQUFZO0NBQ1osaUVBQWlFO0NBQ2pFOztBQUNBO0NBQ0Esb0VBQW9FO0NBQ3BFIiwiZmlsZSI6InNyYy9hcHAvdXNlci9yZXNldC1wYXNzd29yZC9yZXNldC1wYXNzd29yZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmlucHV0LmZvcm0tY29udHJvbCxpbnB1dC5mb3JtLWNvbnRyb2w6Zm9jdXN7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjM2YjdiO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNjM2YjdiO1xyXG5cclxufVxyXG5cclxuaW5wdXQuZm9ybS1jb250cm9sOmZvY3Vze1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuYnV0dG9uW3R5cGU9c3VibWl0XS5idG57XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA0YzU4MjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG5kaXYuZm9ybS1ncm91cCBsYWJlbDpub3QoLnRleHQtZGFuZ2VyKXtcclxuICAgIGNvbG9yOiAjNTQ1ZDZhO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuZGl2LmZvcm0tZ3JvdXAucmVxdWlyZWQ+bGFiZWw6Zmlyc3QtY2hpbGQ6YWZ0ZXJ7XHJcbiAgICBjb250ZW50OicqJztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcbiN0b2FzdC1jb250YWluZXIgPiBkaXYge1xyXG4gICAgb3BhY2l0eToxO1xyXG59XHJcblxyXG4ud3JhcHBlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IFxyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgfVxyXG5cclxuICAud3JhcHBlZC1kaXYge1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggMTBweDtcclxuICAgIGJhY2tncm91bmQ6ICMyZTMxMzc7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIG1heC13aWR0aDogNDUwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMzBweCA2MHB4IDAgcmdiYSgwLDAsMCwwLjMpO1xyXG4gICAgYm94LXNoYWRvdzogMCAzMHB4IDYwcHggMCByZ2JhKDAsMCwwLDAuMyk7XHJcbiAgfVxyXG5cclxuICAvKiBUYWJzICovXHJcbi50YWItaGVhZGVye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4gIC50YWItaGVhZGVyIGgyLmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAjZmZmO1xyXG4gIH1cclxuXHJcbiAgLnRhYi1oZWFkZXIgaDIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogMzBweCA0MHB4IDEwcHggNDBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiAjNTQ1ZDZhO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM1NDVkNmE7XHJcbiAgfVxyXG5cclxuICAudGFiLWhlYWRlciBoMjpmb2N1cyB7XHJcbiAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfVxyXG5cclxuICBmb3Jte1xyXG4gICAgICBtYXJnaW46IDBweCAxNnB4O1xyXG4gIH1cclxuXHJcbiBkaXYuZm9ybS1ncm91cCBpbnB1dC5pbnZhbGlke1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RjMzU0NTsgXHJcbiB9XHJcbiBkaXYuZm9ybS1ncm91cCBsYWJlbDpmaXJzdC1jaGlsZHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxuIH0gXHJcbiBcclxuIC5wYXNzd29yZCB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG4gfVxyXG4gLnBhc3N3b3JkLWNvbnRyb2wge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IDExcHg7XHJcblx0cmlnaHQ6IDZweDtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0d2lkdGg6IDIwcHg7XHJcblx0aGVpZ2h0OiAyMHB4O1xyXG5cdGJhY2tncm91bmQ6IHVybChodHRwczovL3NuaXBwLnJ1L2RlbW8vNDk1L3ZpZXcuc3ZnKSAwIDAgbm8tcmVwZWF0O1xyXG4gfVxyXG4gLnBhc3N3b3JkLWNvbnRyb2wudmlldyB7XHJcblx0YmFja2dyb3VuZDogdXJsKGh0dHBzOi8vc25pcHAucnUvZGVtby80OTUvbm8tdmlldy5zdmcpIDAgMCBuby1yZXBlYXQ7XHJcbiB9Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResetPasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-reset-password',
          templateUrl: './reset-password.component.html',
          styleUrls: ['./reset-password.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/user/user.component.ts":
  /*!****************************************!*\
    !*** ./src/app/user/user.component.ts ***!
    \****************************************/

  /*! exports provided: UserComponent */

  /***/
  function srcAppUserUserComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserComponent", function () {
      return UserComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var UserComponent = /*#__PURE__*/function () {
      function UserComponent() {
        _classCallCheck(this, UserComponent);
      }

      _createClass(UserComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return UserComponent;
    }();

    UserComponent.ɵfac = function UserComponent_Factory(t) {
      return new (t || UserComponent)();
    };

    UserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UserComponent,
      selectors: [["app-user"]],
      decls: 10,
      vars: 0,
      consts: [[1, "wrapper"], [1, "wrapped-div"], [1, "tab-header"], ["routerLink", "/user/login", "routerLinkActive", "active", 1, "w-100", "col-4", "text-center"], ["routerLink", "/user/registration", "routerLinkActive", "active", 1, "w-100", "col-4", "text-center"], [1, "row"], [1, "col-md-10", "offset-md-1"]],
      template: function UserComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u0412\u043E\u0439\u0442\u0438");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["input.form-control[_ngcontent-%COMP%], input.form-control[_ngcontent-%COMP%]:focus{\r\n    background-color: #636b7b;\r\n    color: #fff;\r\n    border: 1px solid #636b7b;\r\n\r\n}\r\n\r\ninput.form-control[_ngcontent-%COMP%]:focus{\r\n    box-shadow: none;\r\n}\r\n\r\nbutton[type=submit].btn[_ngcontent-%COMP%]{\r\n    border-radius: 20px;\r\n    background-color: #04c582;\r\n    color: #fff;\r\n}\r\n\r\ndiv.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:not(.text-danger){\r\n    color: #545d6a;\r\n    font-weight: 700;\r\n}\r\n\r\ndiv.form-group.required[_ngcontent-%COMP%] > label[_ngcontent-%COMP%]:first-child:after{\r\n    content:'*';\r\n    color: #fff;\r\n    padding-left: 5px;\r\n}\r\n\r\n#toast-container[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\r\n    opacity:1;\r\n}\r\n\r\n.wrapper[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    flex-direction: column; \r\n    justify-content: center;\r\n    width: 100%;\r\n    padding: 20px;\r\n  }\r\n\r\n.wrapped-div[_ngcontent-%COMP%] {\r\n    border-radius: 10px 10px 10px 10px;\r\n    background: #2e3137;\r\n    padding: 30px;\r\n    width: 90%;\r\n    max-width: 450px;\r\n    position: relative;\r\n    padding: 0px;\r\n    box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);\r\n  }\r\n\r\n\r\n\r\n.tab-header[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n}\r\n\r\n.tab-header[_ngcontent-%COMP%]   h2.active[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n    border-bottom: 4px solid #fff;\r\n  }\r\n\r\n.tab-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    font-size: 18px;\r\n    font-weight: 600;\r\n    display:inline-block;\r\n    padding: 30px 10px 10px 10px;\r\n    cursor: pointer;\r\n    color: #545d6a;\r\n    border-bottom: 2px solid #545d6a;\r\n  }\r\n\r\n.tab-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:focus {\r\n      outline: none;\r\n  }\r\n\r\nform[_ngcontent-%COMP%]{\r\n      margin: 0px 16px;\r\n  }\r\n\r\ndiv.form-group[_ngcontent-%COMP%]   input.invalid[_ngcontent-%COMP%]{\r\n    border: 1px solid #dc3545; \r\n }\r\n\r\ndiv.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:first-child{\r\n    text-transform: uppercase;\r\n    font-size: 0.9rem;\r\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCx5QkFBeUI7O0FBRTdCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLGFBQWE7RUFDZjs7QUFFQTtJQUVFLGtDQUFrQztJQUNsQyxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFFWix5Q0FBeUM7RUFDM0M7O0FBRUEsU0FBUzs7QUFDWDtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFRTtJQUNFLFdBQVc7SUFDWCw2QkFBNkI7RUFDL0I7O0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsNEJBQTRCO0lBQzVCLGVBQWU7SUFDZixjQUFjO0lBQ2QsZ0NBQWdDO0VBQ2xDOztBQUVBO01BQ0ksYUFBYTtFQUNqQjs7QUFFQTtNQUNJLGdCQUFnQjtFQUNwQjs7QUFFRDtJQUNHLHlCQUF5QjtDQUM1Qjs7QUFDQTtJQUNHLHlCQUF5QjtJQUN6QixpQkFBaUI7Q0FDcEIiLCJmaWxlIjoic3JjL2FwcC91c2VyL3VzZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbnB1dC5mb3JtLWNvbnRyb2wsaW5wdXQuZm9ybS1jb250cm9sOmZvY3Vze1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYzNmI3YjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzYzNmI3YjtcclxuXHJcbn1cclxuXHJcbmlucHV0LmZvcm0tY29udHJvbDpmb2N1c3tcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbmJ1dHRvblt0eXBlPXN1Ym1pdF0uYnRue1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNGM1ODI7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuZGl2LmZvcm0tZ3JvdXAgbGFiZWw6bm90KC50ZXh0LWRhbmdlcil7XHJcbiAgICBjb2xvcjogIzU0NWQ2YTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbmRpdi5mb3JtLWdyb3VwLnJlcXVpcmVkPmxhYmVsOmZpcnN0LWNoaWxkOmFmdGVye1xyXG4gICAgY29udGVudDonKic7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG59XHJcblxyXG4jdG9hc3QtY29udGFpbmVyID4gZGl2IHtcclxuICAgIG9wYWNpdHk6MTtcclxufVxyXG5cclxuLndyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLndyYXBwZWQtZGl2IHtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAxMHB4IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMmUzMTM3O1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtYXgtd2lkdGg6IDQ1MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDMwcHggNjBweCAwIHJnYmEoMCwwLDAsMC4zKTtcclxuICAgIGJveC1zaGFkb3c6IDAgMzBweCA2MHB4IDAgcmdiYSgwLDAsMCwwLjMpO1xyXG4gIH1cclxuXHJcbiAgLyogVGFicyAqL1xyXG4udGFiLWhlYWRlcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuICAudGFiLWhlYWRlciBoMi5hY3RpdmUge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItYm90dG9tOiA0cHggc29saWQgI2ZmZjtcclxuICB9XHJcblxyXG4gIC50YWItaGVhZGVyIGgyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDMwcHggMTBweCAxMHB4IDEwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjogIzU0NWQ2YTtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNTQ1ZDZhO1xyXG4gIH1cclxuXHJcbiAgLnRhYi1oZWFkZXIgaDI6Zm9jdXMge1xyXG4gICAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxuXHJcbiAgZm9ybXtcclxuICAgICAgbWFyZ2luOiAwcHggMTZweDtcclxuICB9XHJcblxyXG4gZGl2LmZvcm0tZ3JvdXAgaW5wdXQuaW52YWxpZHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkYzM1NDU7IFxyXG4gfVxyXG4gZGl2LmZvcm0tZ3JvdXAgbGFiZWw6Zmlyc3QtY2hpbGR7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiB9Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-user',
          templateUrl: './user.component.html',
          styleUrls: ['./user.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      apiUrl: 'http://localhost:8080/api/' //https://localhost:44340/api/

    }; //'http://localhost:8080/api/'

    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\roomey\Desktop\c#\KnowledgeTestingSystem\Frontend\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map