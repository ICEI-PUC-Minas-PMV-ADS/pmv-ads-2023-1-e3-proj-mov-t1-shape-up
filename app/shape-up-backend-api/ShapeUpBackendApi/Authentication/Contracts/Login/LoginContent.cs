using System.Text.Json;

namespace ShapeUpBackendApi.Authentication.Contracts.Login {
    public class LoginContent {
        public string? Username { get; set; }
        public string? Password { get; set; }
        public string ToJson() {
            return JsonSerializer.Serialize(this);
        }
    }
}
