using Microsoft.AspNetCore.Mvc;

namespace ShapeUpBackendApi.Controllers {
    [ApiController]
    [Route("[controller]")]
    public class MusicController : ControllerBase {

        [HttpGet()]
        public IEnumerable<string> Get() {
            yield return "Sweet Child O' Mine";
            yield return "Patience";
            yield return "Don't Cry";
            yield return "November Rain";
            yield return "Welcome To The Jungle";
        }
    }
}