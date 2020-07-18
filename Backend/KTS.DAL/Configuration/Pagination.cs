using System;
using System.Collections.Generic;
using System.Text;

namespace KTS.DAL.Configuration
{
	/// <summary>
	/// <c>Pagination</c> is a class.
	/// Represents settings of pagination.
	/// </summary>
	public class Pagination
    {
		/// <summary>
		/// Represents maximum page size.
		/// </summary>
		const int maxPageSize = 10;

		/// <summary>
		/// Gets or sets <c>PageNumber</c>.
		/// Represents number of page.
		/// </summary>
		public int PageNumber { get; set; } = 1;

		/// <summary>
		/// Represents default page size.
		/// </summary>
		private int _pageSize = 8;

		/// <summary>
		/// Gets or sets <c>PageSize</c>.
		/// Represents size of page.
		/// </summary>
		public int PageSize
		{
			get
			{
				return _pageSize;
			}
			set
			{
				_pageSize = (value > maxPageSize) ? maxPageSize : value;
			}
		}
	}
}
