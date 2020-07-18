using KTS.DAL.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace KTS.DAL.Configuration
{
    /// <summary>
    /// <c>AnswerConfiguration</c> is a class.
    /// Represents configuration for <see cref="Answer"/>.
    /// </summary>
    public class AnswerConfiguration : IEntityTypeConfiguration<Answer>
    {
        /// <summary>
        /// Add all existing answers to <c>builder</c>.
        /// </summary>
        /// <param name="builder">Builder to which answers are added.</param>
        public void Configure(EntityTypeBuilder<Answer> builder)
        {
            foreach (var answer in Answer.ExistingAnswers)
            {
                builder.HasData(answer);
            }
        }
    }
}
