using KTS.DAL.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace KTS.DAL.Configuration
{
    /// <summary>
    /// <c>QuestionConfiguration</c> is a class.
    /// Represents configuration for <see cref="Question"/>.
    /// </summary>
    public class QuestionConfiguration : IEntityTypeConfiguration<Question>
    {
        /// <summary>
        /// Add all existing questions to <c>builder</c>.
        /// </summary>
        /// <param name="builder">Builder to which questions are added.</param>
        public void Configure(EntityTypeBuilder<Question> builder)
        {
            foreach (var question in Question.ExistingQuestions)
            {
                builder.HasData(question);
            }
        }
    }
}
