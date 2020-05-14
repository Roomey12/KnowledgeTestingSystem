using KTS.BLL.DTO;
using System;
using System.Collections.Generic;
using System.Text;

namespace KTS.BLL.Interfaces
{
    public interface IAnswerService
    {
        AnswerDTO GetAnswerById(int id);
    }
}
