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
    [Route("api/[controller]")]
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

        // GET: api/Answer/5
        [HttpGet("{id}")]
        //[Authorize]
        public IActionResult GetAnswerById(int id)
        {
            AnswerModel answer;
            try
            {
                answer = mapper.Map<AnswerDTO, AnswerModel>(_answerService.GetAnswerById(id));
            }
            catch (NotFoundException)
            {
                return NotFound();
            }
            catch (Exception)
            {
                return StatusCode(500);
            }
            return Ok(answer);
        }

        [HttpPost]
        public IActionResult PostAnswer(AnswerModel answer)
        {
            try
            {
                _answerService.CreateAnswer(mapper.Map<AnswerModel, AnswerDTO>(answer));
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

        [HttpDelete("{id}")]
        public IActionResult DeleteAnswer(string id)
        {
            try
            {
                _answerService.DeleteAnswer(id);
            }
            catch (NotFoundException)
            {
                return NotFound();
            }
            catch (Exception)
            {
                return StatusCode(500);
            }
            return Ok(new { Message = "Answer was successfully deleted!" });
        }

        [HttpPut]
        public IActionResult PutAnswer(AnswerModel answer)
        {
            try
            {
                _answerService.PutAnswer(mapper.Map<AnswerModel, AnswerDTO>(answer));
            }
            catch (ValidationException ex)
            {
                return BadRequest(ex.Message);
            }
            catch (NotFoundException)
            {
                return NotFound();
            }
            catch (Exception)
            {
                return StatusCode(500);
            }
            return Ok(new { Message = "Answer was successfully changed!" });
        }
    }
}
