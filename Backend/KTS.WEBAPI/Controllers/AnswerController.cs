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
    //[Route("api/[controller]")]
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

        // GET: api/answer/5
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

        // GET: api/answer/question/5
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

        // POST: api/answer/newQuestion
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

        // POST: api/answer/oldQuestion
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

        // DELETE: api/answer/5
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

        // PUT: api/answer/
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
