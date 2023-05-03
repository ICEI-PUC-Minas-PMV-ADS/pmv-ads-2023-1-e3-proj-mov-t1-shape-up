using System.Net;
using System.Text.Json;

namespace ShapeUpBackendApi.Authentication.Contracts.Register {
    public class RegisterResponse {
        public bool IsAuthenticated { get; set; }
        public string? Username { get; set; }
        public string? Name { get; set; }
        public string? Token { get; set; }
        public string? RefreshToken { get; set; }
        public string ToJson() {
            return JsonSerializer.Serialize(this);
        }
    }
}
