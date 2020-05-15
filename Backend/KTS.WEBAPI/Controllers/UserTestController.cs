using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using KTS.BLL.DTO;
using KTS.BLL.Interfaces;
using KTS.WEBAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace KTS.WEBAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserTestController : ControllerBase
    {
        private IUserTestService _userTestService;

        IMapper mapper = new MapperConfiguration(cfg =>
        {
            cfg.CreateMap<UserTestModel, UserTestDTO>();
        }).CreateMapper();

        public UserTestController(IUserTestService userTestService)
        {
            _userTestService = userTestService;
        }

        [HttpPost]
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

        [HttpGet]
        public IActionResult GetAllUserTests()
        {
            try
            {
                var result = _userTestService.GetAllUserTests();
                return Ok(result);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        [HttpGet("{id}")]
        public IActionResult GetUserTestByUserId(string id)
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


        [HttpDelete("{id}")]
        public IActionResult DeleteUserTest(string id)
        {
            try
            {
                var result = _userTestService.DeleteUserTest(id);
                return Ok(result);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        [HttpPut]
        public IActionResult PutUserTest(UserTestModel userTest)
        {
            try
            {
                var result = _userTestService.PutUserTest(mapper.Map<UserTestModel, UserTestDTO>(userTest));
                return Ok(result);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}