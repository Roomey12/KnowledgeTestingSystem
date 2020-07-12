using AutoMapper;
using KTS.BLL.DTO;
using KTS.BLL.Infrastucture;
using KTS.BLL.Interfaces;
using KTS.DAL.Entities;
using KTS.WEBAPI.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KTS.WEBAPI.Controllers
{
    //[Route("api/[controller]")]
    [ApiController]
    public class QuestionController : ControllerBase
    {
        private readonly IQuestionService _questionService;

        IMapper mapper = new MapperConfiguration(cfg =>
        {
            cfg.CreateMap<QuestionModel, QuestionDTO>();
            cfg.CreateMap<QuestionDTO, QuestionModel>();
        }).CreateMapper();

        public QuestionController(IQuestionService questionService)
        {
            _questionService = questionService;
        }

        // GET: api/question/5
        [HttpGet(ApiRoutes.Question.GetQuestionById)]
        [Authorize]
        public IActionResult GetQuestionById(int id)
        {
            QuestionModel question;
            try
            {
                question = mapper.Map<QuestionDTO, QuestionModel>(_questionService.GetQuestionById(id));
            }
            catch (NotFoundException ex)
            {
                return NotFound(ex.Message);
            }
            catch (Exception)
            {
                return StatusCode(500);
            }
            return Ok(question);
        }

        // GET: api/question/test/5/
        [HttpGet(ApiRoutes.Question.GetQuestionsByTestId)]
        [Authorize]
        public IActionResult GetQuestionsByTestId(int id)
        {
            IEnumerable<QuestionModel> questions;
            try
            {
                questions = mapper.Map<IEnumerable<QuestionDTO>, IEnumerable<QuestionModel>>
                    (_questionService.GetQuestionsByTestId(id));
            }
            catch (Exception)
            {
                return StatusCode(500);
            }
            return Ok(questions);
        }

        // POST: api/question/newTest
        [HttpPost(ApiRoutes.Question.PostQuestionForNewTest)]
        [Authorize(Roles = "admin")]
        public IActionResult PostQuestionForNewTest(QuestionModel question)
        {
            try
            {
                _questionService.CreateQuestionForNewTest(mapper.Map<QuestionModel, QuestionDTO>(question));
            }
            catch (ValidationException ex)
            {
                return BadRequest(ex.Message);
            }
            catch (Exception)
            {
                return StatusCode(500);
            }
            return Ok(new { Message = "Question was successfully created!" });
        }

        // POST: api/question/oldTest
        [HttpPost(ApiRoutes.Question.PostQuestionForOldTest)]
        [Authorize(Roles = "admin")]
        public IActionResult PostQuestionForOldTest(QuestionModel question)
        {
            try
            {
                _questionService.CreateQuestionForOldTest(mapper.Map<QuestionModel, QuestionDTO>(question));
            }
            catch (ValidationException ex)
            {
                return BadRequest(ex.Message);
            }
            catch (Exception)
            {
                return StatusCode(500);
            }
            return Ok(new { Message = "Question was successfully created!" });
        }

        // DELETE: api/question/1
        [HttpDelete(ApiRoutes.Question.DeleteQuestion)]
        [Authorize(Roles = "admin")]
        public IActionResult DeleteQuestion(string id)
        {
            try
            {
                _questionService.DeleteQuestion(id);
            }
            catch (NotFoundException ex)
            {
                return NotFound(ex.Message);
            }
            catch (Exception)
            {
                return StatusCode(500);
            }
            return Ok(new { Message = "Question was successfully deleted!" });
        }

        // PUT: api/question
        [HttpPut(ApiRoutes.Question.PutQuestion)]
        [Authorize(Roles = "admin")]
        public IActionResult PutQuestion(QuestionModel question)
        {
            try
            {
                _questionService.UpdateQuestion(mapper.Map<QuestionModel, QuestionDTO>(question));
            }
            catch (ValidationException ex)
            {
                return BadRequest(ex.Message);
            }
            catch (NotFoundException ex)
            {
                return NotFound(ex.Message);
            }
            catch (Exception)
            {
                return StatusCode(500);
            }
            return Ok(new { Message = "Question was successfully changed!" });
        }
    }
}
