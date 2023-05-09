using System.Text.Json;

namespace ShapeUpBackendApi.Authentication.Contracts.Register {
    public class RegisterContent {
        public string? Username { get; set; }
        public string? Password { get; set; }
        public string? Name { get; set; }
        public string? ImageData { get; set; }
        public string ToJson() {
            return JsonSerializer.Serialize(this);
        }
    }
}
