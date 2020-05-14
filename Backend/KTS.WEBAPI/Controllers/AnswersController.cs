using AutoMapper;
using KTS.BLL.DTO;
using KTS.BLL.Interfaces;
using KTS.WEBAPI.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KTS.WEBAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AnswersController : ControllerBase
    {
        private IAnswerService _answerService;

        IMapper mapper = new MapperConfiguration(cfg =>
        {
            cfg.CreateMap<AnswerDTO, AnswerModel>();
        }).CreateMapper();

        public AnswersController(IAnswerService answerService)
        {
            _answerService = answerService;
        }

        // GET: api/Answers/5
        [HttpGet("{id}")]
        public AnswerModel GetQuestionById(int id)
        {
            return mapper.Map<AnswerDTO, AnswerModel>(_answerService.GetAnswerById(id));
        }
    }
}
