using KTS.DAL.Configuration;
using System;
using System.Collections.Generic;
using System.Text;

namespace KTS.DAL.Interfaces
{
    /// <summary>
    /// <c>IRepository</c> is a generic interface.
    /// Contains methods for CRUD functional.
    /// </summary>
    /// <typeparam name="T">A type that is a class.</typeparam>
    public interface IRepository<T> where T : class
    {
        /// <summary>
        /// This method returns certain count of items.
        /// </summary>
        /// <param name="pagination">Settings for items count.</param>
        /// <returns>Items which were found.</returns>
        IEnumerable<T> GetForPagination(Pagination pagination);

        /// <summary>
        /// This method returns all items.
        /// </summary>
        /// <returns>items which were found.</returns>
        IEnumerable<T> GetAll();

        /// <summary>
        /// This method finds item by its Id and returns it.
        /// </summary>
        /// <param name="id">Id of item which should be returned.</param>
        /// <returns>Item which was found.</returns>
        T Get(string id);

        /// <summary>
        /// This method findsitem by some condition.
        /// </summary>
        /// <param name="predicate">Condition by which the search will be performed.</param>
        /// <returns>Items which were found.</returns>
        IEnumerable<T> Find(Func<T, bool> predicate);

        /// <summary>
        /// This method creates item.
        /// </summary>
        /// <param name="item">Item which should be created.</param>
        void Create(T item);

        /// <summary>
        /// This method updates item's data.
        /// </summary>
        /// <param name="item">Item which data should be updated.</param>
        void Update(T item);

        /// <summary>
        /// This method deletes item.
        /// </summary>
        /// <param name="id">Id of ttem which should be deleted.</param>
        void Delete(string id);
    }
}
