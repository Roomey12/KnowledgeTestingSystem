using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KTS.WEBAPI
{
    public static class ApiRoutes
    {
        public const string Base = "api/";

        public static class Test //8
        {
            public const string Root = "test/";
            public const string GetTests = Base + Root;
            public const string GetQuestionsAndAnswersByTestId = Base + Root + "{id}/start";
            public const string GetTest = Base + Root + "{id}";
            public const string PostTest = Base + Root;
            public const string DeleteTest = Base + Root + "{id}";
            public const string PutTest = Base + Root;
            public const string GetTestsForPagination = Base + Root + "pagination";
            public const string GetTestsByTitle = Base + Root + "title/{title}";
        }

        public static class Answer //6
        {
            public const string Root = "answer/";
            public const string GetAnswerById = Base + Root + "{id}";
            public const string GetAnswersByQuestionId = Base + Root + "question/{id}";
            public const string PostAnswerForNewQuestion = Base + Root + "newQuestion";
            public const string PostAnswerForOldQuestion = Base + Root + "oldQuestion";
            public const string DeleteAnswer = Base + Root + "{id}";
            public const string PutAnswer = Base + Root;
        }

        public static class Auth //9
        {
            public const string Root = "auth/";
            public const string Register = Base + Root + "register";
            public const string Login = Base + Root + "login";
            public const string Refresh = Base + Root + "refresh";
            public const string ConfirmEmail = Base + Root + "confirmEmail/{userId}";
            public const string ForgotPassword = Base + Root + "forgotPassword";
            public const string ResetPassword = Base + Root + "resetPassword";
            public const string GoogleLogin = Base + Root + "googleLogin";
            public const string FacebookLogin = Base + Root + "facebookLogin";
            public const string ExternalLoginCallback = Base + Root + "externalLoginCallback/{provider}";
        }

        public static class Question // 6
        {
            public const string Root = "question/";
            public const string GetQuestionById = Base + Root + "{id}";
            public const string GetQuestionsByTestId = Base + Root + "test/{id}";
            public const string PostQuestionForNewTest = Base + Root + "newTest";
            public const string PostQuestionForOldTest = Base + Root + "oldTest";
            public const string DeleteQuestion = Base + Root + "{id}";
            public const string PutQuestion = Base + Root;
        }

        public static class User //13
        {
            public const string Root = "user/";
            public const string GetAllUsers = Base + Root;
            public const string GetUserById = Base + Root + "{id}";
            public const string DeleteUser = Base + Root + "{id}";
            public const string PutUser = Base + Root;
            public const string GetUserProfile = Base + Root + "profile";
            public const string ChangePassword = Base + Root + "changePassword";
            public const string ChangeUsername = Base + Root + "changeUsername";
            public const string MakeUserAdmin = Base + Root + "makeAdmin";
            public const string MakeUserCustomer = Base + Root + "makeCustomer";
            public const string ChangeEmail = Base + Root + "changeEmail";
            public const string ConfirmNewEmail = Base + Root + "confirmNewEmail";
            public const string GetUsersForPagination = Base + Root + "pagination";
            public const string ChangeProfileImage = Base + Root + "changeProfileImage";
            public const string ChangeAboutMe = Base + Root + "changeAboutMe";
        }

        public static class UserTest // 9
        {
            public const string Root = "userTest/";
            public const string PostUserTest = Base + Root;
            public const string PostUserTestByAdmin = Base + Root + "admin";
            public const string GetAllUserTests = Base + Root;
            public const string GetTopUserTests = Base + Root + "top/{count}";
            public const string GetUserTestById = Base + Root + "{id}";
            public const string GetUserTestByUserId = Base + Root + "user/{id}";
            public const string DeleteUserTest = Base + Root + "{id}";
            public const string PutUserTest = Base + Root;
            public const string GetUsersForPagination = Base + Root + "pagination";
        }
    }
}
