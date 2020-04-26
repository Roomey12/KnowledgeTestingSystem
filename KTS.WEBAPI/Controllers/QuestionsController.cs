using AutoMapper;
using KTS.BLL.DTO;
using KTS.BLL.Interfaces;
using KTS.WEBAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Storage;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KTS.WEBAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QuestionsController : ControllerBase
    {
        private readonly IQuestionService _questionService;

        IMapper mapper = new MapperConfiguration(cfg =>
        {
            cfg.CreateMap<QuestionDTO, QuestionModel>();
        }).CreateMapper();

        public QuestionsController(IQuestionService questionService)
        {
            _questionService = questionService;
        }

        // GET: api/Questions/5
        [HttpGet("{id}")]
        public QuestionModel GetQuestionById(int id)
        {
            return mapper.Map<QuestionDTO, QuestionModel>(_questionService.GetQuestionById(id));

            //if(question == null)
            //{
            //    return NotFound();
            //}
        }
    }
}
