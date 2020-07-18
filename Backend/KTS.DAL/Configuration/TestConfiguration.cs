using KTS.DAL.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace KTS.DAL.Configuration
{
    /// <summary>
    /// <c>TestConfiguration</c> is a class.
    /// Represents configuration for <see cref="Test"/>.
    /// </summary>
    public class TestConfiguration : IEntityTypeConfiguration<Test>
    {
        /// <summary>
        /// Add all existing tests to <c>builder</c>.
        /// </summary>
        /// <param name="builder">Builder to which tests are added.</param>
        public void Configure(EntityTypeBuilder<Test> builder)
        {
            foreach(var test in Test.ExistingTests)
            {
                builder.HasData(test);
            }
        }
    }
}
