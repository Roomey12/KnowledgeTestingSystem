using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using AutoMapper;
using KTS.BLL.DTO;
using KTS.BLL.Interfaces;
using KTS.DAL.Entities;
using KTS.WEBAPI.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Razor.Language.Intermediate;

namespace KTS.WEBAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserProfileController : ControllerBase
    {
        private UserManager<User> _userManager;
        private IUserTestService _userTestService;

        IMapper mapper = new MapperConfiguration(cfg =>
        {
            cfg.CreateMap<UserTestModel, UserTestDTO>();
        }).CreateMapper();

        public UserProfileController(UserManager<User> userManager, IUserTestService userTestService)
        {
            _userManager = userManager;
            _userTestService = userTestService;
        }

        [HttpGet]
        [Authorize]
        //GET : /api/UserProfile
        public async Task<object> GetUserProfile()
        {
            string userId = User.Claims.First(c => c.Type == "UserID").Value;
            var user = await _userManager.FindByIdAsync(userId);
            return new
            {
                user.Id,
                user.Email,
                user.UserName
            };
        }

        [HttpPost("usertest")]
        public IActionResult PostUserTest(UserTestModel model)
        {
            try
            {
                UserTestModel userTest = new UserTestModel()
                {
                    UserId = model.UserId,
                    TestId = model.TestId,
                    Mark = model.Mark,
                    Time = model.Time
                };
                _userTestService.AddUserTest(mapper.Map<UserTestModel, UserTestDTO>(userTest));
                return Ok(userTest);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        [HttpGet("usertests")]
        public IActionResult GetAllUserTests()
        {
            try
            {
                var result = _userTestService.GetAllUserTests();
                return Ok(result);
            }
            catch(Exception ex)
            {
                throw ex;
            }
        }

        [HttpGet("usertests/{id}")]
        public IActionResult GetAllUserTests(string id)
        {
            try
            {
                var result = _userTestService.GetUserTestByUserId(id);
                return Ok(result);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

    }
}