using AutoMapper;
using KTS.BLL.DTO;
using KTS.BLL.Infrastucture;
using KTS.BLL.Interfaces;
using KTS.WEBAPI.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KTS.WEBAPI.Controllers
{
    /// <summary>
    /// <c>AnswerController</c> is a class.
    /// Contains all http methods for working with answers.
    /// </summary>
    /// <remarks>
    /// This class can get, create, delete, edit answer.
    /// </remarks>
    [ApiController]
    public class AnswerController : ControllerBase
    {
        private IAnswerService _answerService;

        IMapper mapper = new MapperConfiguration(cfg =>
        {
            cfg.CreateMap<AnswerModel, AnswerDTO>();
            cfg.CreateMap<AnswerDTO, AnswerModel>();
        }).CreateMapper();

        public AnswerController(IAnswerService answerService)
        {
            _answerService = answerService;
        }

        /// <summary>
        /// This method finds answer by its Id and returns it.
        /// <para>GET: api/answer/5</para>
        /// </summary>
        /// <param name="id">Id of answer which should be returned.</param>
        /// <returns>Answer which was found.</returns>
        [HttpGet(ApiRoutes.Answer.GetAnswerById)]
        [Authorize]
        public IActionResult GetAnswerById(int id)
        {
            AnswerModel answer;
            try
            {
                answer = mapper.Map<AnswerDTO, AnswerModel>(_answerService.GetAnswerById(id));
            }
            catch (NotFoundException ex)
            {
                return NotFound(ex.Message);
            }
            catch (Exception)
            {
                return StatusCode(500);
            }
            return Ok(answer);
        }

        /// <summary>
        /// This method returns answers which relate to the question which Id was passed.
        /// <para>GET: api/answer/question/5</para>
        /// </summary>
        /// <param name="id">Id of question for which answers should be found.</param>
        /// <returns>Answers which were found.</returns>
        [HttpGet(ApiRoutes.Answer.GetAnswersByQuestionId)]
        [Authorize]
        public IActionResult GetAnswersByQuestionId(int id)
        {
            IEnumerable<AnswerModel> answers;
            try
            {
                answers = mapper.Map<IEnumerable<AnswerDTO>, IEnumerable<AnswerModel>>
                    (_answerService.GetAnswersByQuestionId(id));
            }
            catch(NotFoundException ex)
            {
                return NotFound(ex.Message);
            }
            catch (Exception)
            {
                return StatusCode(500);
            }
            return Ok(answers);
        }

        /// <summary>
        /// This method creates answer for new question.
        /// <para>POST: api/answer/newQuestion</para>
        /// </summary>
        /// <param name="answer">Answer which should be created.</param>
        [HttpPost(ApiRoutes.Answer.PostAnswerForNewQuestion)]
        [Authorize(Roles = "admin")]
        public IActionResult PostAnswerForNewQuestion(AnswerModel answer)
        {
            try
            {
                _answerService.CreateAnswerForNewQuestion(mapper.Map<AnswerModel, AnswerDTO>(answer));
            }
            catch (ValidationException ex)
            {
                return BadRequest(ex.Message);
            }
            catch (Exception)
            {
                return StatusCode(500);
            }
            return Ok(new { Message = "Answer was successfully created!" });
        }

        /// <summary>
        /// This method creates answer for old question.
        /// <para>POST: api/answer/oldQuestion</para>
        /// </summary>
        /// <param name="answer">Answer which should be created.</param>
        [HttpPost(ApiRoutes.Answer.PostAnswerForOldQuestion)]
        [Authorize(Roles = "admin")]
        public IActionResult PostAnswerForOldQuestion(AnswerModel answer)
        {
            try
            {
                _answerService.CreateAnswerForOldQuestion(mapper.Map<AnswerModel, AnswerDTO>(answer));
            }
            catch (ValidationException ex)
            {
                return BadRequest(ex.Message);
            }
            catch (Exception)
            {
                return StatusCode(500);
            }
            return Ok(new { Message = "Answer was successfully created!" });
        }

        /// <summary>
        /// This method deletes answer.
        /// <para>DELETE: api/answer/5</para>
        /// </summary>
        /// <param name="id">Id of answer which should be deleted.</param>
        [HttpDelete(ApiRoutes.Answer.DeleteAnswer)]
        [Authorize(Roles = "admin")]
        public IActionResult DeleteAnswer(string id)
        {
            try
            {
                _answerService.DeleteAnswer(id);
            }
            catch (NotFoundException ex)
            {
                return NotFound(ex.Message);
            }
            catch (Exception)
            {
                return StatusCode(500);
            }
            return Ok(new { Message = "Answer was successfully deleted!" });
        }

        /// <summary>
        /// This method updates answer's data.
        /// <para>PUT: api/answer</para>
        /// </summary>
        /// <param name="answer">Answer which should be updated.</param>
        [HttpPut(ApiRoutes.Answer.PutAnswer)]
        [Authorize(Roles = "admin")]
        public IActionResult PutAnswer(AnswerModel answer)
        {
            try
            {
                _answerService.UpdateAnswer(mapper.Map<AnswerModel, AnswerDTO>(answer));
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
            return Ok(new { Message = "Answer was successfully changed!" });
        }
    }
}
