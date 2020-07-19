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
    /// <summary>
    /// <c>QuestionController</c> is a class.
    /// Contains all http methods for working with questions.
    /// </summary>
    /// <remarks>
    /// This class can get, create, delete, edit question.
    /// </remarks>
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

        /// <summary>
        /// This method finds and returns question by its id.
        /// <para>GET: api/question/5</para>
        /// </summary>
        /// <param name="id">Id of question which should be returned</param>
        /// <returns>Question which was found</returns>
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

        /// <summary>
        /// This method returns questions which relate to the test which Id was passed.
        /// <para>GET: api/question/test/5</para>
        /// </summary>
        /// <param name="id">Id of test for which questions should be found.</param>
        /// <returns>Questions which were found.</returns>
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
            catch(NotFoundException ex)
            {
                return NotFound(ex.Message);
            }
            catch (Exception)
            {
                return StatusCode(500);
            }
            return Ok(questions);
        }

        /// <summary>
        /// This method creates question for new test.
        /// <para>POST: api/question/newTest</para>
        /// </summary>
        /// <param name="question">Question which should be created.</param>
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

        /// <summary>
        /// This method creates question for old test.
        /// <para>POST: api/question/oldTest</para>
        /// </summary>
        /// <param name="question">Question which should be created.</param>
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

        /// <summary>
        /// This method deletes question.
        /// <para>DELETE: api/question/1</para>
        /// </summary>
        /// <param name="id">Id of question which should be deleted.</param>
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

        /// <summary>
        /// This method updates question's data.
        /// <para>PUT: api/question</para>
        /// </summary>
        /// <param name="question">Question which should be updated.</param>
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
