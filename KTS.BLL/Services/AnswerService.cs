using AutoMapper;
using KTS.BLL.DTO;
using KTS.BLL.Interfaces;
using KTS.DAL.Entities;
using KTS.DAL.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace KTS.BLL.Services
{
    public class AnswerService : IAnswerService
    {
        IUnitOfWork Database { get; set; }

        IMapper mapper = new MapperConfiguration(cfg =>
        {
            cfg.CreateMap<Question, QuestionDTO>();
            cfg.CreateMap<Answer, AnswerDTO>();
        }).CreateMapper();

        public AnswerService(IUnitOfWork uow)
        {
            Database = uow;
        }

        public AnswerDTO GetAnswerById(int id)
        {
            return mapper.Map<Answer, AnswerDTO>(Database.Answers.Get(id));
        }
    }
}
