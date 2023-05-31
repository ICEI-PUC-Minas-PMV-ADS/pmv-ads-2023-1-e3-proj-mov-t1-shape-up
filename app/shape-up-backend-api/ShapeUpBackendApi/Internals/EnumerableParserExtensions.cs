using ShapeUpBackendApi.Training.Models;
using System.Collections;

namespace ShapeUpBackendApi.Internals
{
    public static class EnumerableParserExtensions
    {
        public static IEnumerable<T> Parse<T>(this IEnumerable enumerable) where T : class
        {
            foreach (dynamic item in enumerable) {
                yield return item;
            }
        }
    }
}
