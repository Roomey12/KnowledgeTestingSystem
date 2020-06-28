using System;
using System.Collections.Generic;
using System.Text;

namespace KTS.DAL.Configuration
{
    public class Pagination
    {
		const int maxPageSize = 10;
		public int PageNumber { get; set; } = 1;

		private int _pageSize = 8;
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
